import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

const session = await getServerSession(authOptions);

export const supabase = createClient<Database>(
  process.env.DB_URL!,
  process.env.SUPABASE_ANON_KEY!,
  {
    global: {
      headers: {
        Authorization: `Bearer ${session?.supabaseAccessToken}`,
      },
    },
  }
);
