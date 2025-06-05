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

    orders: defineTable({
        userId: v.string(),
        orderDescription: v.string(),   
        orderEmail: v.string(),
        timeline: v.string(),
        projectType: v.string(),
        orderStatus: v.optional(v.string()), // e.g., "pending", "completed", "cancelled"
        createdAt: v.optional(v.number()),
        updatedAt: v.optional(v.number()),

    }).index("byUserId", ["userId"]),

});