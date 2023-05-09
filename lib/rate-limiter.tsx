import { Ratelimit } from "@upstash/ratelimit";
import { db } from "./db";

export const rateLimiter = new Ratelimit({
    redis: db,
    limiter: Ratelimit.slidingWindow(4, "10 s"),
    prefix: "@upstash/ratelimit"
})