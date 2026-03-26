export default function PriceFilter() {
  return `
    <div class="mr-6">
      <h2 class="text-3xl font-bold mb-6">Filter by price</h2>
      <div class="relative mb-12">
        <input id="min-range" type="range" min="25" max="100" value="25"
          class="absolute w-full pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto" />

        <input id="max-range" type="range" min="0" max="100" value="100"
          class="absolute w-full pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto" />
      </div>
      <div class="flex justify-between items-center mb-4">
        <div class="text-center">
          <input id="min-price" type="text" value="$25"
            class="w-20 text-center border border-gray-400 py-2 bg-white" />
          <p class="text-gray-500 mt-2">Min. Price</p>
        </div>
        <div class="text-center">
          <input id="max-price" type="text" value="$60"
            class="w-20 text-center border border-gray-400 py-2 bg-white" />
          <p class="text-gray-500 mt-2">Max. Price</p>
        </div>
      </div>

    </div>
  `;
}
