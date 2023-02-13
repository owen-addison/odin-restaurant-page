import "./styles.css";
import homeContent from "./home";
import menuContent from "./menu";
import contactContent from "./contact";

/*
PSUEDOCODE
- Add header element to document with 3 buttons for each home, menu and contact tab

*/

const clearContent = () => {
  const currentContent = document.getElementById("content");
  document.body.removeChild(currentContent);
  const newContent = document.createElement("div");
  newContent.setAttribute("id", "content");
  document.body.appendChild(newContent);
};

// Add header element top page
const header = document.createElement("div");
header.setAttribute("id", "header");

// Add tabs to header
const tabContainer = document.createElement("div");
tabContainer.classList.add("tab-container");
const tabsArray = [
  { name: "Home", module: homeContent },
  { name: "Menu", module: menuContent },
  { name: "Contact", module: contactContent },
];
tabsArray.forEach((element) => {
  const tab = document.createElement("button");
  tab.classList.add("tab");
  tab.textContent = element.name;
  tab.addEventListener("click", () => {
    clearContent();
    element.module();
  });
  tabContainer.appendChild(tab);
});
header.appendChild(tabContainer);

// Append header to document body
document.body.appendChild(header);

homeContent();
