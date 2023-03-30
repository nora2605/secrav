export default function Header() {
  return (
    <header class="bg-gray-800 text-white py-4">
      <div class="max-w-screen-md mx-auto px-4">
        <nav class="flex justify-between items-center">
          <h1
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.open("/", "_self");
            }}
            class="transition hover:text-[#115e59] text-3xl font-mono"
          >
            SeCrAv Pro
          </h1>
          <ul class="flex text-center v-center items-center">
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
  );
}
