import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        userId: v.string(),
        name: v.string(),
        email: v.string(),
        createdAt: v.optional(v.number()),
        updatedAt: v.optional(v.number()),
    }).index("byUserId", ["userId"]),
});