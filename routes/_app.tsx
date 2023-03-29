import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <style>
          {`body { background-color: black; }
            .turquoise-glow {
              text-align: center;
              animation: glow 1s ease-in-out infinite alternate;
            }
            @keyframes glow {
              from {
                text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #21f5aa, 0 0 40px #21f5aa, 0 0 50px #21f5aa, 0 0 60px #21f5aa, 0 0 70px #21f5aa;
              }
              to {
                text-shadow: 0 0 20px #fff, 0 0 30px #66ffca, 0 0 40px #66ffca, 0 0 50px #66ffca, 0 0 60px #66ffca, 0 0 70px #66ffca, 0 0 80px #66ffca;
              }
            }
            `}
        </style>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <div class="flex flex-col h-screen">
        <props.Component />
        <Footer />
      </div>
    </>
  );
}
