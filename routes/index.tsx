/** @jsxImportSource preact */
import Counter from "../islands/Counter.tsx";

export const Head = () => (
      <head>
        <title>Home of Secrav</title>
        <meta property="og:title" content="Secrav Productions Home Page" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://secrav.cf/" />
        <meta property="og:image" content="https://secrav.cf/logo.png" />
        <meta property="og:description" content="The dark side of creativity" />
        <meta name="theme-color" content="#21f5aa" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
);

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md text-white self-center h-screen content-center grid">
      <Head />
      <div class="hover:opacity-95 opacity-70 bg-[#222] rounded-lg border-x-2 border-y-1 p-6 border-[#21f5aa]" style="box-shadow: 0 25px 50px -12px rgb(255 255 255 / 0.25);">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <h1>Built with fresh! ⬆️</h1>
      <h2 class="my-6 text-4xl text-[#21f5aa]">
        Secrav 🧠 ❤️ 🏳️‍⚧️
      </h2>
      <p>
        I'm sorry, but there's nothing here yet!
      </p>
      <Counter start={0} />
    </div>
    </div>
  );
}
