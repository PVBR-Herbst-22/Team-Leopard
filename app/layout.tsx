import Providers from "@/components/Providers";
import SignOutButton from "@/components/SignOutButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html className="h-full" lang="en">
      <Providers>
        <body className="h-full">
          <div
            data-theme="cupcake"
            className="min-h-full from-primary to-secondary bg-gradient-to-br"
          >
            <nav className="navbar fixed">
              <div className="flex-1">
                <a href="/" className="btn btn-ghost normal-case text-xl">
                  Fitness App
                </a>
              </div>
              <div className="flex-none">
                {!session?.user ? (
                  <div className="dropdown dropdown-end">
                    <a href="/login" className="btn btn-primary">
                      Login
                    </a>
                  </div>
                ) : (
                  <div className="mx-6 mt-auto flex items-center">
                    <div className="flex flex-1 items-center gap-x-4 text-sm font-semibold leading-6 text-gray-900">
                      <div className="relative h-8 w-8">
                        <Image
                          fill
                          referrerPolicy="no-referrer"
                          className="rounded-full"
                          src={session.user.image || ""}
                          alt="Your profile picture"
                        />
                      </div>

                      <span className="sr-only">Your profile</span>
                      <div className="flex flex-col">
                        <span aria-hidden="true">{session.user.name}</span>
                        <span
                          className="text-xs text-gray-500"
                          aria-hidden="true"
                        >
                          {session.user.email}
                        </span>
                      </div>
                    </div>

                    <SignOutButton className="h-full aspect-square" />
                  </div>
                )}
              </div>
            </nav>
            <div className="min-h-full w-full">{children}</div>
          </div>
        </body>
      </Providers>
    </html>
  );
}
