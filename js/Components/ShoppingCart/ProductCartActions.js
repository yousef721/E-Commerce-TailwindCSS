import { cart } from "./ShoppingCart.js";

// plus counter
document.querySelectorAll(".cart-plus").forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.previousElementSibling;
    console.log(input);
    let value = parseInt(input.value);
    value++;
    input.value = value;
  });
});
// minus counter
document.querySelectorAll(".cart-minus").forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.nextElementSibling;
    let value = parseInt(input.value);
    if (value > 1) {
      value--;
      input.value = value;
    }
  });
});

// delete item
document.querySelectorAll(".delete-item").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.id;
    cart.removeItem(productId);
    location.reload();
  });
});

// update Button
document.getElementById("update-cart").addEventListener("click", () => {
  document.querySelectorAll(".cart-input").forEach((input) => {
    const productId = input.dataset.id;
    const quantity = parseInt(input.value);
    cart.updateQuantity(productId, quantity);
  });
  location.reload();
});

// Checkout Button
document.getElementById("checkout").addEventListener("click", () => {
  console.log("dd");
  const isCard = prompt("Add Card Number");
  if (isCard) {
    cart.clear();
    alert("Payment success");
  } else {
    alert("Payment Failed")
  }
});
