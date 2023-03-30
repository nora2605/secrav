import { Head } from "$fresh/runtime.ts";
import Project from "../components/Project.tsx";
import { Project as ProjectType } from "../types/types.tsx";

const projects: ProjectType[] = JSON.parse(
  new TextDecoder("utf-8").decode(
    Deno.readFileSync("./static/gamedev/project.json"),
  ),
).projects;

export default function Home() {
  return (
    <div class="flex flex-col">
      <Head>
        <title>Home of Secrav</title>
        <meta property="og:title" content="Secrav Productions Home Page" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://secrav.cf/" />
        <meta property="og:image" content="https://secrav.cf/logo.png" />
        <meta property="og:description" content="The dark side of creativity" />
        <meta name="theme-color" content="#21f5aa" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="./index.css" />
      </Head>
      <header class="bg-gray-800 text-white py-4">
        <div class="max-w-screen-md mx-auto px-4">
          <nav class="flex justify-between items-center">
            <h1 class="text-2xl font-mono">SeCrAv Pro</h1>
            <ul class="flex">
              <li class="ml-6">
                <a href="/gamedev">Game Development</a>
              </li>
              <li class="ml-6">
                <a href="/about">About</a>
              </li>
              <li class="ml-6">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main class="flex-grow bg-gray-900 text-white">
        <div class="max-w-screen-md mx-auto px-4 py-8">
          <h1 class="text-3xl font-bold">Welcome to SeCrAv Pro!</h1>
          <p class="mt-4">{`We are. Actually it's only me. I am.`}</p>
          <p class="mt-4">Check out some of my work:</p>
          <ul class="mt-4">
            {projects.map((p) => <Project project={p} />)}
          </ul>
        </div>
      </main>
    </div>
  );
}
