import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Project from "../islands/Project.tsx";
import { Project as ProjectType } from "../types/types.tsx";

const projects: ProjectType[] = JSON.parse(
  new TextDecoder("utf-8").decode(await Deno.readFile('./static/gamedev/home-projects.json'))
).projects;

export default function Home(props: PageProps) {
  return (
    <div class="flex flex-col">
      <Head>
        <title>Home of Secrav</title>
        <meta property="og:title" content="Secrav Productions Home Page" />
        <meta
          property="og:url"
          content={props.url.href}
        />
        <link rel="stylesheet" href="./index.css" />
      </Head>
      <main class="flex-grow pb-0 bottom-0 text-white">
        <div class="max-w-screen-md mx-auto px-4 py-8">
          <h1 class="text-3xl font-bold">Welcome to SeCrAv Pro</h1>
          <p class="mt-4">{`We are. Actually it's only me. I am.`}</p>
          <p class="mt-4 font-bold font-serif">Here is every project I have ever made:</p>
          <ul class="mt-8">
            {projects.map((p) => <Project project={p} />)}
          </ul>
        </div>
      </main>
    </div>
  );
}
