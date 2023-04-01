import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

export default function About(props: PageProps) {
  return (
    <div class="flex flex-col">
      <Head>
        <title>About Secrav</title>
        <meta property="og:title" content="About Secrav Productions" />
        <meta
          property="og:url"
          content={props.url.href}
        />
        <link rel="stylesheet" href="./index.css" />
      </Head>
      <main class="flex-grow pb-0 bottom-0 text-white">
        <div class="max-w-screen-md mx-auto px-4 py-8">
          <h1 class="text-3xl font-bold">About SeCrAv</h1>
          <p class="mt-4">{`Well hello there, thank you for checking out my about page!
          My name is Nora Judith Felicitas, SeCrAv stands for Seraphic Cryotic Avian and it's just a random name
          I came up with some time ago for this funny Game Studio.
          `}</p>
          <p class="mt-4">{`I got into gamedev like, never, but I know my way around C# pretty well so I uhh made a goofy ahh game.
          Twice.
          And then I made this page in the new deno fresh framework (it's epic)
          `}</p>
          <p class="mt-4">
          It started with <a href="/gamedev/crane1" class="underline">Crane 1</a>, a simple windows forms app made in some old version of the 
          {" "}<a href="https://dotnet.org/" class="underline">.NET-Framework</a>, which I programmed at about 10 years old or so?
          The source code still exists and is right on this page! (If you click the "Crane 1" button up there)
          </p>
          <p class="mt-4">
            In conclusion this is pretty much an archival and personal project for fun.
            If this somehow gets serious some day, hey I will be happy.
          </p>
          <br/>
          <pre>
            Check out my buddy Occultonic over at Icosahedron studios: {<a href="https://twitter.com/occultonic" class="underline">click here</a>}
          </pre>
          <p class="mt-4">
            Happy browsing!
          </p>
          <p class="pt-8 pb-8 pl-8 mt-8 bg-black font-italic text-xl font-bold font-serif border-[2px]">
            - Nora, Creator and self-proclaimed CEO of SeCrAv Productions
          </p>

          <p class="mt-8 text-[#21aaf5] text-xl text-center self-stretch">
        Wanna go back{" "}
        <a
          href="/"
          class="no-underline hover:underline font-bold text-[#21f5aa] turquoise-glow"
        >
          Home
        </a>?
      </p>
        </div>
      </main>
    </div>
  );
}
