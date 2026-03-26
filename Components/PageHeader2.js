export default function PageHeader2() {
  const page = document.getElementById("page-header-2").dataset.page;
  const title = document.getElementById("page-header-2").dataset.title;
  return `
        <div
          class="flex flex-col gap-4 items-center bg-gray-100 h-[460px] md:h-[560px] lg:h-[660px] pt-16 md:pt-36"
        >
          <div class="flex items-center gap-2 text-sm text-gray-600">
            <a href="../index.html" class="hover:text-red-700 transition"
              >Home</a
            >
            <span>/</span>
            <span class="font-medium text-gray-900">${page}</span>
          </div>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-center">
            ${title}
          </h1>
        </div>
  `;
}
