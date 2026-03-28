import ProductCard from "./ProductCard.js";

export function getProductById(id) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  return products.find((p) => p.id == id);
}

export function filterProductsByPrice(min, max) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  return products.filter((p) => p.price >= min && p.price <= max);
}

export function buttonViewCart() {
  const viewCartButtons = document.querySelectorAll(".view-cart");
  viewCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "cart.html";
    });
  });
}

// Price Range
const minRange = document.getElementById("min-range");
const maxRange = document.getElementById("max-range");
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
export function PriceRange() {
  if (!minRange || !maxRange) return;

  function updatePrices() {
    let minVal = parseInt(minRange.value);
    let maxVal = parseInt(maxRange.value);

    if (minVal > maxVal) [minVal, maxVal] = [maxVal, minVal];

    minPrice.value = `$${minVal}`;
    maxPrice.value = `$${maxVal}`;
  }

  minRange.addEventListener("input", updatePrices);
  maxRange.addEventListener("input", updatePrices);

  updatePrices();
}
// Price Range Event Listeners
if (minRange && maxRange) {
  minRange.addEventListener("input", () => {
    const minVal = parseInt(minRange.value) || 0;
    const maxVal = parseInt(maxRange.value) || 1000;
    const filtered = filterProductsByPrice(minVal, maxVal);
    ProductCard(filtered);
  });

  maxRange.addEventListener("input", () => {
    const minVal = parseInt(minRange.value) || 0;
    const maxVal = parseInt(maxRange.value) || 1000;
    const filtered = filterProductsByPrice(minVal, maxVal);
    ProductCard(filtered);
  });
}