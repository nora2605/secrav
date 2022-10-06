/** @jsxImportSource preact */
import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <style>{'body { background-color: black; }'}</style>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <props.Component />
    </>
  );
}