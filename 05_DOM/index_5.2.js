/* Selecting elements from the Document Object Model (DOM). */
//"use strict";

// Select the primary semantic tags (header, nav, main, footer) and assign bootstrap 5 classes to them
const headerElement = document.querySelector("header");
const navElement = document.querySelector("nav");
const mainElement = document.querySelector("main");
const footerElement = document.querySelector("footer");
if (headerElement !== null && navElement !== null && mainElement !== null && footerElement !== null) {
  headerElement.className = "container-fluid m-1";
  navElement.className = "container-fluid m-1";
  mainElement.className = "container-fluid m-1";
  footerElement.className = "container-fluid m-1";
}

// section and articles
/** querySelectorAll() method returns a NodeList object, (which is similar to an array),
 * containing all the elements that match the specified CSS selector. */
const sectionElements = document.querySelectorAll("section");
if (sectionElements !== null) {
  sectionElements.forEach((sectionKey) => {
    // bootstrap css
    sectionKey.className = "border border-dark m-2 ps-2 p-1";
  });
}

const articleElements = document.querySelectorAll("article");
/* If `articleElements` is not null, it means that there are elements matching the "article"
selector in the DOM, and the code inside the if statement will be executed. */
if (articleElements !== null) {
  articleElements.forEach((articleKey) => {
    // regular css - setting the CSS border property of each `key` element to have a width of 1 pixel dashed line orangered
    articleKey.style.border = "1px dashed orangered";
    // bootstrap css - concatenating multiple CSS classes to the sectionKey`className` property of each `articleKey` element. */
    articleKey.className += "m-2 ps-2 p-1";
  });
}

// by ID and tag name
let navByID = document.querySelector("#page-nav em");
navByID.className += " card card body card-title ps-2 p-1"; // += concatenation
