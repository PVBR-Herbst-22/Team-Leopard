import { rateLimiter } from "@/lib/rate-limiter";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  async function middleware(req) {
    const pathname = req.nextUrl.pathname;

    // Manage route protection
    const isAuth = await getToken({ req });
    const isLoginPage = pathname.startsWith("/login");

    const sensitiveRoutes = ["/dashboard"];
    const chatApiRoutes = ["/api/message"];
    const isAccessingChatApi = chatApiRoutes.some((route) =>
      pathname.startsWith(route)
    );
    const isAccessingSensitiveRoute = sensitiveRoutes.some((route) =>
      pathname.startsWith(route)
    );

    if (isAccessingChatApi) {
      const ip = req.ip ?? "127.0.0.1";

      try {
        const { success } = await rateLimiter.limit(ip);

        if (!success) return new NextResponse("You are writing to fast");
        return NextResponse.next();
      } catch (error) {
        return new NextResponse("Something went wrong");
      }
    }

    if (isLoginPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }

      return NextResponse.next();
    }

    if (!isAuth && isAccessingSensitiveRoute) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (pathname === "/") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matchter: ["/", "/login", "/dashboard/:path*", "/api/message/:path*"],
};
