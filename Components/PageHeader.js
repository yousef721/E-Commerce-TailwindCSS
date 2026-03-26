export default function PageHeader() {
  const title = document.getElementById("page-header").dataset.title
  return `
    <div class="flex flex-col gap-4 items-center bg-gray-100 py-16 md:py-24">
      
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <a href="../index.html" class="hover:text-red-700 transition">Home</a>
        <span>/</span>
        <span class="font-medium text-gray-900">${title}</span>
      </div>

      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-center">
        ${title}
      </h1>

    </div>
  `;
}