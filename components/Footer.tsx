export default function Footer() {
  return (
    <footer class="bg-gray-800 text-white py-4 sticky mt-auto bottom-0">
      <div class="max-w-screen-md mx-auto px-4 flex justify-between items-center">
        <div>
          <p class="text-gray-400">Follow us:</p>
          <ul class="flex">
            <li class="mr-4">
              <a href="https://twitter.com/SeCrAvPro" target="_blank">
                <svg
                  class="w-6 h-6 text-gray-400 hover:text-white transition"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.998 4.558c-.884.385-1.83.646-2.824.764a4.32 4.32 0 0 0 1.898-2.384 8.594 8.594 0 0 1-2.728 1.044 4.299 4.299 0 0 0-7.36 3.916 12.236 12.236 0 0 1-8.885-4.504 4.297 4.297 0 0 0 1.33 5.723 4.285 4.285 0 0 1-1.94-.538v.054a4.302 4.302 0 0 0 3.44 4.203 4.286 4.286 0 0 1-1.934.073 4.298 4.298 0 0 0 4.006 2.98 8.616 8.616 0 0 1-5.34 1.834c-.348 0-.69-.02-1.028-.06a12.183 12.183 0 0 0 6.599 1.936c7.924 0 12.257-6.566 12.257-12.256 0-.187-.004-.374-.012-.56a8.783 8.783 0 0 0 2.17-2.246l-.047-.02z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p class="text-gray-400">
            © {new Date().getFullYear()} SeCrAv Productions
          </p>
          <p class="text-gray-400">
            Designed by{" "}
            <a
              href="https://luemir.ml/"
              target="_blank"
              class="text-[#21f5aa] hover:text-[#21aaf5] transition"
            >
              Nora Judith Felicitas
            </a>
          </p>
          <a href="https://fresh.deno.dev" target="_blank">
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge-dark.svg"
              alt="Made with Fresh"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
