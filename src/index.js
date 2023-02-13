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
  const activeTab = document.querySelector(".active");
  if (activeTab !== null) {
    activeTab.classList.remove("active");
  }
};

// Add header element top page
const header = document.createElement("div");
header.setAttribute("id", "header");

// Add tabs to header
const tabContainer = document.createElement("div");
tabContainer.classList.add("tab-container");
const tabsArray = [
  { name: "Home", module: homeContent, default: true },
  { name: "Menu", module: menuContent, default: false },
  { name: "Contact", module: contactContent, default: false },
];
tabsArray.forEach((element) => {
  const tab = document.createElement("button");
  tab.classList.add("tab");
  if (element.default === true) {
    tab.setAttribute("id", "default-open");
  }
  tab.textContent = element.name;
  tab.addEventListener("click", (e) => {
    clearContent();
    element.module();
    e.currentTarget.classList.add("active");
  });
  tabContainer.appendChild(tab);
});
header.appendChild(tabContainer);

// Append header to document body
document.body.appendChild(header);

document.getElementById("default-open").click();
