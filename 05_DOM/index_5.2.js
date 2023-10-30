/* Selecting elements from the Document Object Model (DOM). */
"use strict";

// select the primary semantic tags (header, nav, main, footer) and assign bootstrap 5 classes to them
const headerElement = document.querySelector("header");
headerElement.className = "container-fluid m-1";
const navElement = document.querySelector("nav");
navElement.className = "container-fluid m-1";
const mainElement = document.querySelector("main");
mainElement.className = "container-fluid m-1";
const footerElement = document.querySelector("footer");
footerElement.className = "container-fluid m-1";

// section and articles
