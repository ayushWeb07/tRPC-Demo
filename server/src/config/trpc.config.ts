import { initTRPC } from "@trpc/server";

const trpc = initTRPC.create();

const router = trpc.router;
const publicProcedure = trpc.procedure;

export { trpc, router, publicProcedure };
