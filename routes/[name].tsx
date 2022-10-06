/** @jsxImportSource preact */
import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <div class="grid h-screen place-items-center content-center">
      <title>Oh no!</title>
      <h1 class="text-4xl text-white font-bold">404</h1>
      <p class="text-midnight text-white">
        The page "{props.params.name}" doesn't exist! Maybe going back to&nbsp;
      <a href="/" class="no-underline hover:underline text-[#21f5aa]" >Home</a>&nbsp;
      will help?
      </p>
    </div>
    );
}
