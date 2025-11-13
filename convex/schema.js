import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    credits: v.number(),       // lowercase (Convex auto field sorting me safe)
    subscriptionId: v.optional(v.string()) // typo fix + consistent naming
  }),
});
