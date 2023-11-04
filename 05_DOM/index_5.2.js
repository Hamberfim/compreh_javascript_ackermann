/** Selecting elements from the Document Object Model (DOM).
 * getElementsBy-ClassName(), getElementsByTagName() and getElementsByName() return "ACTIVE" node lists
 * querySelectorAll() return "STATIC" node lists
 */

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
const navByID = document.querySelector("#page-nav em");
// same as an if
navByID && (navByID.className += " card card body card-title ps-2 p-1"); // += concatenation

// working with first table
const tableElement = document.querySelector("table");
tableElement && (tableElement.className = "table table-sm table-hover");
// get by class name
const oddTableRows = document.querySelectorAll(".odd");
oddTableRows &&
  oddTableRows.forEach((rowKey) => {
    rowKey.style.backgroundColor = "#ccc";
  });

// working with second table
const tableTwoEl = document.querySelector("#tableTwo");
tableTwoEl && (tableTwoEl.className = "table table-sm table-hover");
// accessing as a node
const evenTableRows = document.querySelectorAll(".even");

// iterate individuals nodes of a node list
if (evenTableRows.length > 0) {
  for (let i = 0; i < evenTableRows.length; i++) {
    const tableRow = evenTableRows.item(i);
    tableRow.style.backgroundColor = "#cff4fc";
    tableRow.style.fontStyle = "oblique";
    tableRow.style.fontWeight = "bolder";
  }
}

// selection by breadcrumb
const sarahTrEmail = document.querySelector("table tbody tr:nth-child(4) td:nth-child(2)");
// console.log(sarahTrEmail);
sarahTrEmail && (sarahTrEmail.style.border = "2px solid red"); // if 'sarahTrEmail' is not null then apply style
sarahTrEmail && (sarahTrEmail.style.backgroundColor = "moccasin");

const garryName = document.querySelector("#tableTwo tbody tr:nth-child(3) td");
console.log(garryName);
garryName && (garryName.style.border = "2px solid red");
garryName && (garryName.style.backgroundColor = "rgba(255,255,0,.4)");

// Active node list
const allDivElements = document.getElementsByTagName("div"); // html collection - active node list
if (allDivElements.length > 0) {
  for (let i = 0; i < allDivElements.length; i++) {
    const item = allDivElements.item(i);
    item.className = "text-muted";
    item.style.fontFamily = "serif";
  }
}

// form data value by input name
const inputRoomSelection = document.getElementsByName("room");
// console.log(inputRoomSelection);

if (inputRoomSelection.length > 0) {
  for (let i = 0; i < inputRoomSelection.length; i++) {
    const radioInput = inputRoomSelection.item(i);
    // console.log(radioInput.value);
  }
}

// get value from user selected radio
function getRadioClick(value) {
  const choice1 = document.querySelector("#r1");
  const choice2 = document.querySelector("#r2");
  const choice3 = document.querySelector("#r3");
  if (value === "room1") {
    choice1.innerHTML = "&nbsp;Luxury Room Selected";
    choice2.innerHTML = "";
    choice3.innerHTML = "";
  } else if (value === "room2") {
    choice1.innerHTML = "";
    choice2.innerHTML = "&nbsp;Room Two Selected";
    choice3.innerHTML = "";
  } else {
    choice1.innerHTML = "";
    choice2.innerHTML = "";
    choice3.innerHTML = "&nbsp;Room Three Selected";
  }
  // console.log(value);
}
