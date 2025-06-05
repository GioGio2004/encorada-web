import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createOrder = mutation({
    args: {
        userId: v.string(),
        orderDescription: v.string(),
        orderEmail: v.string(),
        timeline: v.string(),
        projectType: v.string(),
    },
    handler: async (ctx, args) => {
        const order = await ctx.db.insert("orders", {
            userId: args.userId,
            orderDescription: args.orderDescription,
            orderEmail: args.orderEmail,
            timeline: args.timeline,
            projectType: args.projectType,
            orderStatus: "pending", // Default status
        })
        return order;
    },
})



export const readOrder = query({
    args: {
        userId: v.string(),
    },
    handler: async (ctx, args) => {
        try {
            const orderInfo = await ctx.db
                .query("orders")
                .filter((user) => {
                    return user.eq(user.field("userId"), args.userId);
                })
                .first();

            return orderInfo;
        } catch (error) {
            throw new Error("Reading user did not work");
        }
    },
});