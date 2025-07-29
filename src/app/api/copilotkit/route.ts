import {
  CopilotRuntime,
  ExperimentalEmptyAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";

import { MastraAgent } from "@ag-ui/mastra"
import { MastraClient } from "@mastra/client-js";
import { NextRequest } from "next/server";
 
const MASTRA_URL = process.env.MASTRA_URL || "http://localhost:4111";
 
const serviceAdapter = new ExperimentalEmptyAdapter();
 
const runtime = new CopilotRuntime({
  agents: await MastraAgent.getRemoteAgents({
    mastraClient: new MastraClient({ baseUrl: MASTRA_URL }),
  }),
});
 
export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime, 
    serviceAdapter,
    endpoint: "/api/copilotkit",
  });
 
  return handleRequest(req);
};