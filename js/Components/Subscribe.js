export default function Subscribe() {
  return `
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="relative max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold">
            Newsletter Updates
        </h1>
        <p class="my-6 md:my-8 text-lg md:text-2xl lg:text-3xl">
            Subscribe to receive emails on new product arrivals & special
            offers
        </p>
        <form
            class="flex flex-col sm:flex-row justify-center items-center gap-3"
            action="#"
            method="get"
        >
            <input
            id="subscribe-email"
            type="email"
            name="email"
            placeholder="Email address"
            class="w-full sm:w-auto sm:flex-1 max-w-md bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-1 focus:outline-red-600"
            />
            <input
            class="w-full sm:w-fit bg-red-600 hover:bg-red-700 py-3 px-6 text-white transition duration-300"
            type="submit"
            value="Subscribe"
            />
        </form>
        </div>
  `;
}
