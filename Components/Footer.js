export default function Footer() {
  return `
      <div class="container mx-auto px-4">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-20 mb-20"
        >
          <div class="text-gray-500 lg:col-span-2">
            <h4
              class="text-black text-xl md:text-2xl font-semibold mb-4 md:mb-5"
            >
              About Us
            </h4>
            <p class="my-3 md:my-5 text-sm md:text-base">
              Mauris vitae ultricies leo integer malesuada. Odio tempor orci
              dapibus ultrices in. Egestas diam in arcu cursus euismod.
            </p>
            <p class="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div class="text-gray-500 lg:col-span-1">
            <h4
              class="text-black text-xl md:text-2xl font-semibold mb-4 md:mb-5"
            >
              Account
            </h4>
            <ul class="flex flex-col gap-2 text-sm md:text-base">
              <li class="hover:text-red-700"><a href="#">My Account</a></li>
              <li class="hover:text-red-700"><a href="#">My Wishlist</a></li>
              <li class="hover:text-red-700"><a href="#">My Cart</a></li>
              <li class="hover:text-red-700"><a href="#">Sign in</a></li>
              <li class="hover:text-red-700"><a href="#">Check out</a></li>
            </ul>
          </div>
          <div class="text-gray-500 lg:col-span-1">
            <h4
              class="text-black text-xl md:text-2xl font-semibold mb-4 md:mb-5"
            >
              Shipping
            </h4>
            <ul class="flex flex-col gap-2 text-sm md:text-base">
              <li class="hover:text-red-700"><a href="#">New Products</a></li>
              <li class="hover:text-red-700"><a href="#">Best Sellers</a></li>
              <li class="hover:text-red-700"><a href="#">Manufacturers</a></li>
              <li class="hover:text-red-700"><a href="#">Suppliers</a></li>
              <li class="hover:text-red-700"><a href="#">Specials</a></li>
            </ul>
          </div>
          <div class="text-gray-500 lg:col-span-1">
            <h4
              class="text-black text-xl md:text-2xl font-semibold mb-4 md:mb-5"
            >
              Contact Us
            </h4>
            <div class="mb-4 text-sm md:text-base">
              <span class="block">Phone: (+63) 555 1212</span>
              <span>Fax: (+63) 555 0100</span>
            </div>
            <div class="text-sm md:text-base">
              <span class="block">New York,</span>
              <span>96th Street, NY 10129</span>
            </div>
          </div>
        </div>
        <div
          class="w-full py-8 md:py-10 border-y border-dashed border-gray-300"
        >
          <img
            class="w-[150px] md:w-[200px] mx-auto"
            src="../assets/images/logo.svg"
            alt="logo-image"
          />
        </div>
        <div
          class="text-center text-gray-500 mt-6 md:mt-10 text-sm md:text-base"
        >
          <span class="block">
            Copyright © 2026 - WordPress Theme by CreativeThemes
          </span>
        </div>
      </div>
  `;
}
