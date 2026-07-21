import { router, publicProcedure } from "../config/trpc.config";
import z from "zod";

export const urlsRouter = router({
	getAllUrls: publicProcedure.query(async () => {}),

	getUrlById: publicProcedure
		.input(
			z.object({
				id: z.coerce.number().nonnegative(),
			}),
		)
		.query(async (opts) => {
			const { input } = opts;
		}),
});

export type AppRouter = typeof urlsRouter;
