export default function SearchModal() {
  return `
        <div id="search-modal"
          class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <form id="search-form" class="w-full max-w-2xl flex items-center gap-4 border-b-2 py-4 border-red-600">
            <input
              type="text"
              id="search"
              placeholder="Search..."
              class="w-full text-white text-xl px-3 py-2 border-none focus:outline-hidden"
              required
            />
            <button type="submit" class="text-gray-300 bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
    `;
}
