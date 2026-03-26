export default function BlogCard() {
  var cards = document.getElementsByClassName("blog-card");

  for (let i = 0; i < cards.length; i++) {
    const img = cards[i].dataset.image;
    const title = cards[i].dataset.title;
    const category = cards[i].dataset.category;

    cards[i].innerHTML = `
        <img src="${img}" alt="" />
        <a class="block cursor-pointer text-lg md:text-xl lg:text-2xl font-bold my-3 md:my-4 hover:text-red-600 transition">
        ${title}
        </a>
        <p class="text-gray-500 text-sm md:text-base my-3 md:my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore…
        </p>
        <div class="text-gray-500 font-semibold text-xs md:text-sm flex gap-1 md:gap-2">
          <span>IN ${category.toUpperCase()}</span>
          <span>/</span>
          <span>ON DECEMBER 24, 2021</span>
        </div>
    `;
  }
}