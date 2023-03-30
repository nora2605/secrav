import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const projects = Deno.readFileSync("./static/gamedev/project.json");
  return new Response(new TextDecoder("utf-8").decode(projects));
};
