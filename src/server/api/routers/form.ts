import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const formRouter = createTRPCRouter({
  submit: publicProcedure
    .input(
      z.object({
        category: z.array(z.string()),
        otherCategory: z.string().optional(),
        experience: z.string(),
        comment: z.string().optional(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.formData.create({
        data: {
          category: input.category.join(", "),
          otherCategory: input.otherCategory,
          experience: input.experience,
          comment: input.comment,
        },
      });
    }),

  getAllFormData: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.formData.findMany();
  }),
});
