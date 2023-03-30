import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../islands/Header.tsx";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secrav.cf/logo.png" />
        <meta property="og:description" content="The dark side of creativity" />
        <meta name="theme-color" content="#21f5aa" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/app.css" />
      </Head>
      <div class="flex flex-col h-screen bg-gray-900">
        <Header />
        <props.Component />
        <Footer />
      </div>
    </>
  );
}
