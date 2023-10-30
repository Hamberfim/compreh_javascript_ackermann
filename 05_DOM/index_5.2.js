/* Selecting elements from the Document Object Model (DOM). */
"use strict";

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
sectionElements.forEach((key) => {
  key.className = "border border-dark m-2 ps-2 p-1";
});
