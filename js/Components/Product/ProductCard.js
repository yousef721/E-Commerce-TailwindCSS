import { getProductById } from "./ProductActions.js";
import { cart } from "../ShoppingCart/ShoppingCart.js";
import { login } from "../Login/LoginActions.js";
export default function ProductCard(cards) {
  for (let i = 0; i < cards.length; i++) {
    const id = cards[i].dataset.id;
    const product = getProductById(id);
    const img = product.image;
    const title = product.title;
    const category = product.category.toUpperCase();
    const price = product.price;
    const isSale = product.isSale;
    const color = cards[i].dataset.color || "black";
    let stars = product.stars;
    let startHTML = "";
    for (let j = 0; j < 5; j++) {
      if (stars > 0) {
        if (cards[i].className == "product-card") {
          startHTML += `<i class="fa-solid fa-star text-orange-500"></i>`;
        } else if (cards[i].className == "product-mini-card") {
          startHTML += `<i class="fa-solid fa-star text-orange-500 text-xs"></i>`;
        }
        stars--;
      } else {
        if (cards[i].className == "product-card") {
          startHTML += `<i class="fa-solid fa-star text-orange-200"></i>`;
        } else if (cards[i].className == "product-mini-card") {
          startHTML += `<i class="fa-solid fa-star text-orange-200 text-xs"></i>`;
        }
      }
    }
    if (cards[i].className == "product-card") {
      cards[i].innerHTML = `       
       <div class="text-center md:text-left">
          <a href="#" class="block mb-5 relative overflow-hidden">
            <img
              class="w-full transition-transform duration-500 ease-in-out hover:scale-110"
              src="${img}"
              alt=""
            />
            ${
              isSale == true
                ? `<span class="bg-red-600 py-1 px-2 text-white rounded absolute top-0 left-0 m-3 text-sm">
                SALE
              </span>`
                : ""
            }
          </a>
          <div class="flex flex-col gap-3">
            <a href="#" class="text-2xl text-${color}">
              ${title}
            </a>
            <span class="text-gray-400">$${price.toFixed(2)}</span>
            <div class="flex gap-1 justify-center md:justify-start">
              ${startHTML}
            </div>
            <a class="text-gray-400 text-xs">${category}</a>

            <button class="add-to-cart bg-red-600 hover:bg-red-700 py-3 px-5 text-white w-fit m-auto md:m-0" data-id="${id}">
              Add to cart
            </button>
            <a href="../../../Pages/cart.html" class="view-cart hidden bg-red-600 hover:bg-red-700 py-3 px-5 text-white w-fit m-auto md:m-0" data-id="${id}">
              View Cart
            </a>
          </div>
        </div>`;
    } else if (cards[i].className == "product-mini-card") {
      cards[i].innerHTML = `        
      <div class="flex gap-4 items-center">
          <a href="#">
            <img src="${img}" class="w-16 transition hover:scale-105" />
          </a>
          <div class="text-sm text-gray-500">
            <a class="text-gray-500 font-medium hover:text-red-700 transition">
              ${title}
            </a>
            <div class="my-1 flex gap-[2px]"> ${startHTML} </div>
            <span class="text-gray-500">$${price.toFixed(2)}</span>
          </div>
      </div>`;
    }
    const btn = cards[i].querySelector(".add-to-cart");
    const viewBtn = cards[i].querySelector(".view-cart");

    if (cart.isFound(id)) {
      if (btn) btn.classList.add("hidden");
      if (viewBtn) viewBtn.classList.remove("hidden");
    } else {
      if (btn) btn.classList.remove("hidden");
      if (viewBtn) viewBtn.classList.add("hidden");
    }

    if (btn) {
      btn.addEventListener("click", (e) => {
        const isLogin = login.isLoggedIn() === "true";

        if (isLogin) {
          const productId = e.currentTarget.dataset.id;

          cart.addItem(getProductById(productId));

          btn.classList.add("hidden");
          if (viewBtn) viewBtn.classList.remove("hidden");

        } else {
          const modal = document.getElementById("login-modal-section");
          if (modal) modal.classList.remove("hidden");
        }
      });
    }
  }
}
