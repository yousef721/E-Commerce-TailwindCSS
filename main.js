import Navbar from "./Components/Navbar.js";
import ProductCard from "./Components/ProductCard.js";
import BlogCard from "./Components/BlogCard.js";
import Subscribe from "./Components/Subscribe.js";
import Footer from "./Components/Footer.js";
import PageHeader from "./Components/PageHeader.js";
import PageHeader2 from "./Components/PageHeader2.js";
import ProductMiniCard from "./Components/ProductMiniCard.js";
import PriceFilter from "./Components/PriceFilter.js";
import InitPriceFilter from "./Components/InitPriceFilter.js";
import ClothTechnologies from "./Components/ClothTechnologies.js";
import { FaqData } from "../Data/FaqData.js";
import Accordion from "./Components/Accordion.js";
import { InitAccordion } from "./Components/initAccordion.js";

document.addEventListener("DOMContentLoaded", () => {
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

  // Price Filter
  const priceFilter = document.getElementById("price-filter");
  if (priceFilter) priceFilter.innerHTML = PriceFilter("Products");

  const clothTechnologies = document.getElementById("cloth-technologies");
  if (clothTechnologies) clothTechnologies.innerHTML = ClothTechnologies();

  const container = document.getElementById("faq");
  if (container) {
    container.innerHTML = Accordion(FaqData);
    InitAccordion();
  }

  InitPriceFilter();

  // Product Cards
  ProductCard();

  // Mini Product Cards
  ProductMiniCard();

  // Blog Cards
  BlogCard();

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
});
