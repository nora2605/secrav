import { HandlerContext } from "$fresh/server.ts";

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  const projects = await Deno.readFile("./static/gamedev/project.json");
  return new Response(new TextDecoder("utf-8").decode(projects));
};
