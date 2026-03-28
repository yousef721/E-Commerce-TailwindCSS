import { cart } from "./ShoppingCart.js";
export default function ProductCart(items) {
  console.log("Rendering ProductCart with items:", items);
  return `
    <div class="grid grid-cols-1 lg:grid-cols-6 gap-10">
      <div class="lg:col-span-4">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b-2 border-gray-300">
              <th class="py-4 font-bold">Product</th>
              <th class="hidden md:table-cell py-4 font-bold text-center">
                Quantity
              </th>
              <th class="hidden md:table-cell py-4 font-bold text-center">Total</th>
              <th class="hidden md:table-cell py-4"></th>
            </tr>
          </thead>
          ${items
            .map(
              (item) => `
              <tbody>
                <tr class="border-b border-dotted border-gray-300">
                  <td class="py-4">
                    <div class="flex items-center gap-4">
                      <img
                        src="${item.image}"
                        class="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                      />
                      <div>
                        <h2 class="text-gray-700 text-sm sm:text-base mb-2">
                          ${item.title}
                        </h2>
                        <div class="md:hidden inline-flex items-center border border-red-300">
                          <button class="cart-minus px-3 py-1 hover:bg-red-600 hover:text-white" data-id="${item.id}">
                            -
                          </button>
                          <input type="number" class="cart-input w-[30px] text-center" value="${item.quantity}" min="1" data-id="${item.id}" />
                          <button class="cart-plus px-3 py-1 hover:bg-red-600 hover:text-white" data-id="${item.id}">
                            +
                          </button>
                        </div>
                        <span class="inline lg:hidden text-gray-500 mx-1">x</span>
                        <p class="inline md:block text-gray-500 text-sm"> ${item.price.toFixed(2)} </p>
                      </div>
                    </div>
                  </td>
                  <td class="hidden md:table-cell text-center">
                  <div class="inline-flex items-center border border-red-300">
                    <button class="cart-minus px-3 py-1 hover:bg-red-600 hover:text-white" data-id="${item.id}">
                      -
                    </button>
                    <input type="number" class="cart-input w-[30px] text-center" value="${item.quantity}" min="1" data-id="${item.id}" />
                    <button class="cart-plus px-3 py-1 hover:bg-red-600 hover:text-white" data-id="${item.id}">
                      +
                    </button>
                  </div>
                  </td>
                  <td class="hidden md:table-cell text-center text-gray-700">
                    $${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td class="text-center">
                    <i class="delete-item fa-solid fa-trash text-gray-500 hover:text-red-600 cursor-pointer" data-id="${item.id}"></i>
                  </td>
                </tr>
              </tbody>`,
            )
            .join("")}
        </table>
        <div class="mt-5 flex flex-col md:flex-row md:justify-between gap-5">
          <form>
            <input
              type="text"
              placeholder="Coupon code"
              class="w-full md:w-fit border-1 border-gray-300 focus:outline-red-500 focus:outline-1 mb-4 md:mb-0 px-4 py-2 mr-2"
            />
            <button class="w-full md:w-fit bg-red-700 text-white px-4 py-2 hover:bg-red-800">
              Apply Coupon
            </button>
          </form>
          <button
            id="update-cart"
            class="w-full md:w-fit bg-red-700 text-white px-4 py-2 hover:bg-red-800"
          >
            Update Cart
          </button>
        </div>
      </div>
      <div class="border-2 border-gray-300 p-8 lg:col-span-2 h-fit">
        <h1 class="font-bold">Cart totals</h1>
        <div class="cart-totals">
          <div class="flex justify-between py-5 border-b-1 border-dotted border-gray-300 text-gray-500">
            <h2 class="font-bold">Totals</h2> <p>$${cart.getTotal().toFixed(2)}</p>
          </div>
          <div class="flex justify-between py-5 text-gray-500">
            <h2 class="font-bold">Subtotal</h2>
            <p class="font-bold">$${cart.getTotal().toFixed(2)}</p>
          </div>
          <button id="checkout" class="w-full bg-red-700 text-white px-4 py-2 mt-4 hover:bg-red-800">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
    `;
}
