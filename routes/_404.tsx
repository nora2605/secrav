import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage(props: UnknownPageProps) {
  return (
    <div class="grid h-screen place-items-center content-center background-black">
      <title>Oh no!</title>
      <h1 class="text-6xl text-white font-bold text-center self-stretch">
        404 - someone did an oopsie
      </h1>
      <br />
      <p class="text-[#21aaf5] text-xl text-center self-stretch">
        The page "{props.url.pathname}" doesn't exist! Maybe going back to{" "}
        <a
          href="/"
          class="no-underline hover:underline font-bold text-[#21f5aa] turquoise-glow"
        >
          Home
        </a>{" "}
        will help?
      </p>
    </div>
  );
}
