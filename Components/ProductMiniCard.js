export default function ProductMiniCard() {
  var cards = document.getElementsByClassName("product-mini-card");

  for (let i = 0; i < cards.length; i++) {
    const img = cards[i].dataset.image;
    const title = cards[i].dataset.title;
    const price = cards[i].dataset.price;
    let stars = parseInt(cards[i].dataset.stars);

    let startHTML = "";

    for (let j = 0; j < 5; j++) {
      if (stars > 0) {
        startHTML += `<i class="fa-solid fa-star text-orange-500 text-xs"></i>`;
        stars--;
      } else {
        startHTML += `<i class="fa-solid fa-star text-orange-200 text-xs"></i>`;
      }
    }

    cards[i].innerHTML = `
        <div class="flex gap-4 items-center">
            <a href="#">  
                <img src="${img}" class="w-16 transition hover:scale-105" />
            </a>
            <div class="text-sm text-gray-500">
                <a class="text-gray-500 font-medium hover:text-red-700 transition">
                ${title}
                </a>
                <div class="my-1 flex gap-[2px]">
                ${startHTML}
                </div>
                <span class="text-gray-500">${price}</span>
            </div>
        </div>
    `;
  }
}
