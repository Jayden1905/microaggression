import { createTRPCRouter } from '~/server/api/trpc'
import { exampleRouter } from '~/server/api/routers/example'
import { formRouter } from './routers/form'
import { categoriesRouter } from './routers/categories'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  form: formRouter,
  categories: categoriesRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
