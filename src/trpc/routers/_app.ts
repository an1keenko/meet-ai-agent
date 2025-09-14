import { agentsRouter } from "@/modules/agents/server/procedures";
import { createTRPCRouter } from "../init";
import { meetingssRouter } from "@/modules/meettings/server/procedures";
import { premiumRouter } from "@/modules/premium/server/procedures";

export const appRouter = createTRPCRouter({
  agents: agentsRouter,
  meetings: meetingssRouter,
  premium: premiumRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
