export function AccordionToggle() {
  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");
    const plus = item.querySelector(".plus");
    const minus = item.querySelector(".minus");

    content.classList.add("hidden");
    minus.classList.add("hidden");

    header.addEventListener("click", () => {
      const isOpen = !content.classList.contains("hidden");


      items.forEach((el) => {
        el.querySelector(".accordion-content").classList.add("hidden");
        el.querySelector(".plus").classList.remove("hidden");
        el.querySelector(".minus").classList.add("hidden");
      });

      if (!isOpen) {
        content.classList.remove("hidden");
        plus.classList.add("hidden");
        minus.classList.remove("hidden");
      }
    });
  });
}