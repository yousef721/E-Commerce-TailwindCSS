export default function Accordion(items) {
  return `
    <div class="accordion mb-10 text-md font-semibold">
      ${items
        .map(
          (item) => `
        <div class="accordion-item py-6 border-b border-gray-300">
          <div class="accordion-header flex justify-between cursor-pointer">
            <p>${item.title}</p>
            <div>
              <div class="plus"><i class="fa-solid fa-plus"></i></div>
              <div class="minus hidden"><i class="fa-solid fa-minus"></i></div>
            </div>
          </div>
          <p class="accordion-content hidden mt-6 text-gray-500 text-sm font-normal transition-all duration-300">
            ${item.desc}
          </p>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}

