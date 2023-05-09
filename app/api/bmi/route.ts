import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  const { bmi, message, date } = (await req.json()) as BmiData;

  const session = await getServerSession(authOptions);
  const timestamp = Date.now();

  if (!session) return new Response("Unauthorized", { status: 401 });

if (!bmi || !message || !date) return new Response("Missing data", { status: 400 })

  await db.zadd(`bmi:${session.user.id}`, {
    score: timestamp,
    member: JSON.stringify({ bmi, message, date }),
  });

  return new Response("OK", { status: 200 });
}
