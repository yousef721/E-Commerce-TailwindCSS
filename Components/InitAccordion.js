export function InitAccordion() {
  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");
    const plus = item.querySelector(".fa-plus");
    const minus = item.querySelector(".fa-minus");

    content.style.display = "none";

    header.addEventListener("click", () => {
      const isOpen = content.style.display === "block";

      items.forEach((el) => {
        el.querySelector(".accordion-content").style.display = "none";
        el.querySelector(".fa-plus").style.display = "block";
        el.querySelector(".fa-minus").style.display = "none";
      });

      if (!isOpen) {
        content.classList.remove("hidden");
        plus.classList.style.display = "none";
        minus.classList.style.display = "block";
      }
    });
  });
}
