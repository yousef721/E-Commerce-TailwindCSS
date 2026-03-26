export default function InitPriceFilter() {
  const minRange = document.getElementById("min-range");
  const maxRange = document.getElementById("max-range");
  const minPrice = document.getElementById("min-price");
  const maxPrice = document.getElementById("max-price");

  if (!minRange || !maxRange) return;

  function updatePrices() {
    let minVal = parseInt(minRange.value);
    let maxVal = parseInt(maxRange.value);

    if (minVal > maxVal) {
      [minVal, maxVal] = [maxVal, minVal];
    }

    minPrice.value = `$${minVal}`;
    maxPrice.value = `$${maxVal}`;
  }

  minRange.addEventListener("input", updatePrices);
  maxRange.addEventListener("input", updatePrices);

  updatePrices();
}
