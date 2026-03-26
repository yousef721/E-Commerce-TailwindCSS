export default function ProductCard() {
  var cards = document.getElementsByClassName("product-card");

  for (let i = 0; i < cards.length; i++) {
    const img = cards[i].dataset.image;
    const title = cards[i].dataset.title;
    const category = cards[i].dataset.category.toUpperCase();
    const price = cards[i].dataset.price;
    const isSale = cards[i].dataset.isSale;
    const color = cards[i].dataset.color;
    let stars = parseInt(cards[i].dataset.stars);

    let startHTML = "";

    for (let j = 0; j < 5; j++) {
      if (stars > 0) {
        startHTML += `<i class="fa-solid fa-star text-orange-500"></i>`;
        stars--;
      } else {
        startHTML += `<i class="fa-solid fa-star text-orange-200"></i>`;
      }
    }

    cards[i].innerHTML = `
      <div class="text-center md:text-left">
        <a href="#" class="block mb-5 relative overflow-hidden">
          <img class="w-full transition-transform duration-500 ease-in-out hover:scale-110" src="${img}" alt="" />
          ${
            isSale == "true"
              ? `<span class="bg-red-600 py-1 px-2 text-white rounded absolute top-0 left-0 m-3 text-sm">SALE</span>`
              : ""
          }
        </a>
        <div class="flex flex-col gap-3">
          <a href="#" class="text-2xl ${color}">${title}</a>
          <span class="text-gray-400">${price}</span>
          <div class="flex gap-1 justify-center md:justify-start">${startHTML}</div>
          <a class="text-gray-400 text-xs">${category}</a>
          <button class="bg-red-600 hover:bg-red-700 py-3 px-5 text-white w-fit m-auto md:m-0">
            Add to cart
          </button>
        </div>
      </div>
    `;
  }
}
