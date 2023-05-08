import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

export const categoriesRouter = createTRPCRouter({
  getCategories: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.categories.findMany()
  }),
})
