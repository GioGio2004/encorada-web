import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createUser = mutation({
    args: {
        userId: v.string(),
        name: v.string(),
        email: v.string(),
        createdAt: v.optional(v.number()),
        updatedAt: v.optional(v.number()),
    },
    handler: async (ctx, args) => {
        const job = await ctx.db.insert("users", {
            userId: args.userId,
            name: args.name,
            email: args.email,
            createdAt: args.createdAt || Date.now(),
            updatedAt: args.updatedAt || Date.now(),
        })
        return job;
    },
})



export const readUser = query({
    args: {
        userId: v.string(),
    },
    handler: async (ctx, args) => {
        try {
            const userInfo = await ctx.db
                .query("users")
                .filter((user) => {
                    return user.eq(user.field("userId"), args.userId);
                })
                .first();

            return userInfo;
        } catch (error) {
            throw new Error("Reading user did not work");
        }
    },
});