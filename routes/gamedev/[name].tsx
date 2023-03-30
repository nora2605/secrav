import { PageProps } from "$fresh/server.ts";

export default function ProjectPage(props: PageProps) {
  return (
    <>
      <h1 class="self-center text-4xl text-white mt-[60px]">
        Nope nothing here... :/
      </h1>
      <br />
      <br />
      <p class="text-[#21aaf5] text-xl text-center self-stretch">
        The project "{props.url.pathname.split('/').at(-1)}" doesn't have any funny content.
        <br />
        Maybe going back to{" "}
        <a
          href="/"
          class="no-underline hover:underline font-bold text-[#21f5aa] turquoise-glow"
        >
          Home
        </a>{" "}
        will help?
      </p>
    </>
  );
}
