// login modal
const loginBtn = document.getElementById("login-btn");
const loginModal = document.getElementById("login-modal-section");

if (loginBtn && loginModal) {
  loginBtn.addEventListener("click", () => {
    loginModal.classList.toggle("hidden");
  });
}

if (loginModal) {
  loginModal.addEventListener("click", (e) => {
    if (e.target.id === "login-modal") {
      loginModal.classList.add("hidden");
    }
  });
}

// search modal
const searchBtn = document.getElementById("search-btn");
const searchModal = document.getElementById("search-modal-section");

if (searchBtn && searchModal) {
  searchBtn.addEventListener("click", () => {
    searchModal.classList.toggle("hidden");
  });
}

if (searchModal) {
  searchModal.addEventListener("click", (e) => {
    if (e.target.id === "search-modal") {
      searchModal.classList.add("hidden");
    }
  });
}

// Menu
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("scale-0");
    menu.classList.toggle("opacity-0");

    btn.innerHTML = menu.classList.contains("scale-0")
      ? '<i class="fa-solid fa-bars"></i>'
      : '<i class="fa-solid fa-xmark"></i>';
  });
}
