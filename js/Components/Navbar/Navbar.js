import { cart } from "../ShoppingCart/ShoppingCart.js";
export default function Navbar(page) {
  const isActive = (name) =>
    page.includes(name)
      ? "border-b-2 border-red-700"
      : "hover:border-b-2 hover:border-red-700";

  return `
    <nav class="bg-white container mx-auto px-4 md:px-0">
      <div class="container mx-auto flex items-center justify-between py-7 relative">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <img src="../assets/images/logo.svg" alt="Brand Logo" class="h-8 w-auto" />
          </a>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a href="../index.html" class="text-lg text-gray-900 ${isActive("home")}">Home</a>
          <a href="../Pages/product.html" class="text-lg text-gray-900 hover:border-b-2 ${isActive("product")}">Products</a>
          <a href="../Pages/services.html" class="text-lg text-gray-900 hover:border-b-2 ${isActive("services")}">Services</a>
          <a href="../Pages/about.html" class="text-lg text-gray-900 hover:border-b-2 ${isActive("about")}">About</a>
          <a href="../Pages/News.html" class="text-lg text-gray-900 hover:border-b-2 ${isActive("news")}">News</a>
          <a href="../Pages/Contact.html" class="text-lg text-gray-900 hover:border-b-2 ${isActive("contact")}">Contact</a>
        </div>
        <div class="lg:flex lg:flex-1 lg:justify-end items-center gap-8 text-lg">
          <div id="search-btn" class="hidden lg:block cursor-pointer">
            <i class="fa-solid fa-magnifying-glass hover:text-red-700 transition-colors"></i>
          </div>
          <div id="login-btn" class="hidden lg:block cursor-pointer">
              <i class="fa-solid fa-circle-user hover:text-red-700 transition-colors"></i>
          </div>
          <div class="hidden lg:block relative">
            <a href="../Pages/cart.html" class="hover:text-red-700 transition-colors">
              <i class="fa-solid fa-cart-shopping"></i>
              <span class="absolute -right-2 bg-red-700 text-white text-xs rounded-full px-1">${cart.getItems().length}</span>
            </a>
          </div>
        </div>
        <div>
          <div class="flex items-center gap-6">
            <div class="relative lg:hidden">
              <a href="../Pages/cart.html" class="hover:text-red-700 transition-colors">
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="absolute -right-2 bg-red-700 text-white text-xs rounded-full px-1">${cart.getItems().length}</span>
              </a>
            </div>
            <button id="menu-btn" class="lg:hidden text-2xl">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
          <div id="mobile-menu" class="absolute z-100 top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 lg:hidden scale-0 opacity-0 transition-all duration-300 origin-top">
            <a href="../index.html" class="text-lg text-gray-900 ${isActive("index")}">Home</a>
            <a href="../Pages/product.html" class="text-lg text-gray-900 hover:border-b-2 ${isActive("product")}">Products</a>
            <a href="../Pages/services.html" class="text-lg text-gray-900 hover:border-b-2 ${isActive("services")}">Services</a>
            <a href="../Pages/about.html" class="text-lg text-gray-900 hover:border-b-2 ${isActive("about")}">About</a>
            <a href="../Pages/News.html" class="text-lg text-gray-900 hover:border-b-2 ${isActive("news")}">News</a>
            <a href="../Pages/Contact.html" class="text-lg text-gray-900 hover:border-b-2 ${isActive("contact")}">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  `;
}
