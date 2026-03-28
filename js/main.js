import Navbar from "./Components/Navbar/Navbar.js";
import LoginModal from "./Components/Login/LoginModal.js";
import SearchModal from "./Components/Search/SearchModal.js";
import ProductCard from "./Components/Product/ProductCard.js";
import Subscribe from "./Components/Subscribe.js";
import Footer from "./Components/Footer.js";
import PageHeader from "./Components/PageHeader.js";
import PageHeader2 from "./Components/PageHeader2.js";
import ClothTechnologies from "./Components/ClothTechnologies.js";
import Accordion from "./Components/FAQ/Accordion.js";
import BlogArticle from "./Components/BlogArticle/BlogArticle.js";
import ProductCart from "./Components/ShoppingCart/ProductCart.js";
import { PriceRange } from "./Components/Product/ProductActions.js";
import { AccordionToggle } from "./Components/FAQ/AccordionActions.js";

async function loadData(key, url) {
  try {
    const stored = localStorage.getItem(key);
    if (stored) return JSON.parse(stored);

    const res = await fetch(url);
    const data = await res.json();

    localStorage.setItem(key, JSON.stringify(data));
    return data;
  } catch (err) {
    console.error(`Error loading ${key}:`, err);
    return [];
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadData("products", "../Data/products.json"),
    loadData("blogArticles", "../Data/blogArticles.json"),
    loadData("faq", "../Data/faq.json"),
  ]);
  // Navbar
  const header = document.getElementById("header");
  if (header) header.innerHTML = Navbar(location.href);

  // Footer
  const footer = document.getElementById("footer");
  if (footer) footer.innerHTML = Footer();

  // Subscribe
  const subscribe = document.getElementById("subscribe");
  if (subscribe) subscribe.innerHTML = Subscribe();

  // Page Header
  const pageHeader = document.getElementById("page-header");
  if (pageHeader) pageHeader.innerHTML = PageHeader();

  // Page Header
  const pageHeader2 = document.getElementById("page-header-2");
  if (pageHeader2) pageHeader2.innerHTML = PageHeader2();

  // login modal
  const loginModal = document.getElementById("login-modal-section");
  if (loginModal) loginModal.innerHTML = LoginModal();

  // search modal
  const searchModal = document.getElementById("search-modal-section");
  if (searchModal) searchModal.innerHTML = SearchModal();

  // Cloth Technologies
  const clothTechnologies = document.getElementById("cloth-technologies");
  if (clothTechnologies) clothTechnologies.innerHTML = ClothTechnologies();

  // FAQ Accordion
  const containerFAQ = document.getElementById("faq");
  const FaqData = JSON.parse(localStorage.getItem("faq")) || [];
  if (containerFAQ) {
    containerFAQ.innerHTML = Accordion(FaqData);
  }

  // Product Cards
  const productCards = document.getElementsByClassName("product-card");
  if (productCards.length > 0) ProductCard(productCards);

  // Blog Cards
  const blogCards = document.getElementsByClassName("blog-article");
  if (blogCards.length > 0) BlogArticle();

  // Product Shopping Cart
  const productCart = document.getElementById("cart-container");
  const productCartData = JSON.parse(localStorage.getItem("cart")) || [];
  if (productCart) productCart.innerHTML = ProductCart(productCartData);

  // Product Cart Actions
  const cartActions = document.getElementById("cart-container");
  if (cartActions)
    await import("./Components/ShoppingCart/ProductCartActions.js");

  // Navbar Actions
  const navbarActions = document.getElementById("header");
  if (navbarActions) await import("./Components/Navbar/NavbarAction.js");

  // Price Range
  PriceRange();

  // Init Accordion
  AccordionToggle();
});
