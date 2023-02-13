/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menuContent = () => {
  const contentDiv = document.getElementById("content");

  // Create menu container div
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container", "menu");

  // Add menu heading
  const headerSection = document.createElement("div");
  headerSection.classList.add("menu-section");
  const menuHeading = document.createElement("h1");
  menuHeading.classList.add("title");
  menuHeading.textContent = "Menu";
  headerSection.appendChild(menuHeading);
  menuContainer.appendChild(headerSection);

  /* STARTERS */
  // Starters section with heading
  const startersSection = document.createElement("div");
  startersSection.classList.add("menu-section");
  const startersHeading = document.createElement("h3");
  startersHeading.classList.add("menu-heading");
  startersHeading.textContent = "Starters";
  startersSection.appendChild(startersHeading);

  // Starters list and items
  const startersList = document.createElement("ul");
  startersList.classList.add("menu-list");
  const startersArray = [
    "Smoked salmon Rillettes - £8.00",
    "Gravlax with Horseradish Cream - £9.00",
    "Herbed Meatballs with Lingonberry Sauce - £7.00",
    "Swedish Pickled Vegetables - £5.00",
  ];
  startersArray.forEach((element) => {
    const starter = document.createElement("li");
    starter.textContent = element;
    startersList.appendChild(starter);
  });
  startersSection.appendChild(startersList);

  // Starters section to menu container
  menuContainer.appendChild(startersSection);

  /* ENTREES */
  // Entrees section with heading
  const entreesSection = document.createElement("div");
  entreesSection.classList.add("menu-section");
  const entreesHeading = document.createElement("h3");
  entreesHeading.classList.add("menu-heading");
  entreesHeading.textContent = "Entrees";
  entreesSection.appendChild(entreesHeading);

  // Add entrees list and items
  const entreesList = document.createElement("ul");
  entreesList.classList.add("menu-list");
  const entreesArray = [
    "Grilled Reindeer Steak with Juniper Butter - £25.00",
    "Pan-Seared Arctic Char with Potato Rosti and Caper Butter - £22.00",
    "Slow-Roasted Pork Belly with Apple and Sage - £20.00",
    "Nordic Vegetable Stew with Barley and Carrots - £18.00",
  ];
  entreesArray.forEach((element) => {
    const entree = document.createElement("li");
    entree.textContent = element;
    entreesList.appendChild(entree);
  });
  entreesSection.appendChild(entreesList);

  // Add entrees section to menu container
  menuContainer.appendChild(entreesSection);

  /* DESSERTS */
  // Dessert section with heading
  const dessertSection = document.createElement("div");
  dessertSection.classList.add("menu-section");
  const dessertHeading = document.createElement("h3");
  dessertHeading.classList.add("menu-heading");
  dessertHeading.textContent = "Desserts";
  dessertSection.appendChild(dessertHeading);

  // Add dessert list and items
  const dessertList = document.createElement("ul");
  dessertList.classList.add("menu-list");
  const dessertArray = [
    "Rhubarb and Strawberry Crumble with Vanilla Ice Cream - £7.00",
    "Classic Rice Pudding with Cinnamon and Sugar - £6.00",
    "Cardamom and Gingerbread Trifle with Whipped Cream - £8.00",
    "Cloudberry Sorbet with Shortbread Cookies - £7.00",
  ];
  dessertArray.forEach((element) => {
    const dessert = document.createElement("li");
    dessert.textContent = element;
    dessertList.appendChild(dessert);
  });
  dessertSection.appendChild(dessertList);

  // Add dessert section to menu container
  menuContainer.appendChild(dessertSection);

  /* DRINKS */
  // Drinks section with heading
  const drinksSection = document.createElement("div");
  drinksSection.classList.add("menu-section");
  const drinksHeading = document.createElement("h3");
  drinksHeading.classList.add("menu-heading");
  drinksHeading.textContent = "Drinks";
  drinksSection.appendChild(drinksHeading);

  // Add drinks list and items
  const drinksList = document.createElement("ul");
  drinksList.classList.add("menu-list");
  const drinksArray = [
    "Rhubarb and Strawberry Crumble with Vanilla Ice Cream - £7.00",
    "Classic Rice Pudding with Cinnamon and Sugar - £6.00",
    "Cardamom and Gingerbread Trifle with Whipped Cream - £8.00",
    "Cloudberry Sorbet with Shortbread Cookies - £7.00",
  ];
  drinksArray.forEach((element) => {
    const drinks = document.createElement("li");
    drinks.textContent = element;
    drinksList.appendChild(drinks);
  });
  drinksSection.appendChild(drinksList);

  // Add dessert section to menu container
  menuContainer.appendChild(drinksSection);

  // Add menu container div to content div
  contentDiv.appendChild(menuContainer);

  document.body.appendChild(contentDiv);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContent);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgbWVudUNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgLy8gQ3JlYXRlIG1lbnUgY29udGFpbmVyIGRpdlxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIiwgXCJtZW51XCIpO1xuXG4gIC8vIEFkZCBtZW51IGhlYWRpbmdcbiAgY29uc3QgaGVhZGVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlclNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1lbnUtc2VjdGlvblwiKTtcbiAgY29uc3QgbWVudUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIG1lbnVIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgbWVudUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgaGVhZGVyU2VjdGlvbi5hcHBlbmRDaGlsZChtZW51SGVhZGluZyk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyU2VjdGlvbik7XG5cbiAgLyogU1RBUlRFUlMgKi9cbiAgLy8gU3RhcnRlcnMgc2VjdGlvbiB3aXRoIGhlYWRpbmdcbiAgY29uc3Qgc3RhcnRlcnNTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3RhcnRlcnNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJtZW51LXNlY3Rpb25cIik7XG4gIGNvbnN0IHN0YXJ0ZXJzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgc3RhcnRlcnNIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJtZW51LWhlYWRpbmdcIik7XG4gIHN0YXJ0ZXJzSGVhZGluZy50ZXh0Q29udGVudCA9IFwiU3RhcnRlcnNcIjtcbiAgc3RhcnRlcnNTZWN0aW9uLmFwcGVuZENoaWxkKHN0YXJ0ZXJzSGVhZGluZyk7XG5cbiAgLy8gU3RhcnRlcnMgbGlzdCBhbmQgaXRlbXNcbiAgY29uc3Qgc3RhcnRlcnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBzdGFydGVyc0xpc3QuY2xhc3NMaXN0LmFkZChcIm1lbnUtbGlzdFwiKTtcbiAgY29uc3Qgc3RhcnRlcnNBcnJheSA9IFtcbiAgICBcIlNtb2tlZCBzYWxtb24gUmlsbGV0dGVzIC0gwqM4LjAwXCIsXG4gICAgXCJHcmF2bGF4IHdpdGggSG9yc2VyYWRpc2ggQ3JlYW0gLSDCozkuMDBcIixcbiAgICBcIkhlcmJlZCBNZWF0YmFsbHMgd2l0aCBMaW5nb25iZXJyeSBTYXVjZSAtIMKjNy4wMFwiLFxuICAgIFwiU3dlZGlzaCBQaWNrbGVkIFZlZ2V0YWJsZXMgLSDCozUuMDBcIixcbiAgXTtcbiAgc3RhcnRlcnNBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBzdGFydGVyLnRleHRDb250ZW50ID0gZWxlbWVudDtcbiAgICBzdGFydGVyc0xpc3QuYXBwZW5kQ2hpbGQoc3RhcnRlcik7XG4gIH0pO1xuICBzdGFydGVyc1NlY3Rpb24uYXBwZW5kQ2hpbGQoc3RhcnRlcnNMaXN0KTtcblxuICAvLyBTdGFydGVycyBzZWN0aW9uIHRvIG1lbnUgY29udGFpbmVyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRlcnNTZWN0aW9uKTtcblxuICAvKiBFTlRSRUVTICovXG4gIC8vIEVudHJlZXMgc2VjdGlvbiB3aXRoIGhlYWRpbmdcbiAgY29uc3QgZW50cmVlc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbnRyZWVzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibWVudS1zZWN0aW9uXCIpO1xuICBjb25zdCBlbnRyZWVzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgZW50cmVlc0hlYWRpbmcuY2xhc3NMaXN0LmFkZChcIm1lbnUtaGVhZGluZ1wiKTtcbiAgZW50cmVlc0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIkVudHJlZXNcIjtcbiAgZW50cmVlc1NlY3Rpb24uYXBwZW5kQ2hpbGQoZW50cmVlc0hlYWRpbmcpO1xuXG4gIC8vIEFkZCBlbnRyZWVzIGxpc3QgYW5kIGl0ZW1zXG4gIGNvbnN0IGVudHJlZXNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBlbnRyZWVzTGlzdC5jbGFzc0xpc3QuYWRkKFwibWVudS1saXN0XCIpO1xuICBjb25zdCBlbnRyZWVzQXJyYXkgPSBbXG4gICAgXCJHcmlsbGVkIFJlaW5kZWVyIFN0ZWFrIHdpdGggSnVuaXBlciBCdXR0ZXIgLSDCozI1LjAwXCIsXG4gICAgXCJQYW4tU2VhcmVkIEFyY3RpYyBDaGFyIHdpdGggUG90YXRvIFJvc3RpIGFuZCBDYXBlciBCdXR0ZXIgLSDCozIyLjAwXCIsXG4gICAgXCJTbG93LVJvYXN0ZWQgUG9yayBCZWxseSB3aXRoIEFwcGxlIGFuZCBTYWdlIC0gwqMyMC4wMFwiLFxuICAgIFwiTm9yZGljIFZlZ2V0YWJsZSBTdGV3IHdpdGggQmFybGV5IGFuZCBDYXJyb3RzIC0gwqMxOC4wMFwiLFxuICBdO1xuICBlbnRyZWVzQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVudHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBlbnRyZWUudGV4dENvbnRlbnQgPSBlbGVtZW50O1xuICAgIGVudHJlZXNMaXN0LmFwcGVuZENoaWxkKGVudHJlZSk7XG4gIH0pO1xuICBlbnRyZWVzU2VjdGlvbi5hcHBlbmRDaGlsZChlbnRyZWVzTGlzdCk7XG5cbiAgLy8gQWRkIGVudHJlZXMgc2VjdGlvbiB0byBtZW51IGNvbnRhaW5lclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGVudHJlZXNTZWN0aW9uKTtcblxuICAvKiBERVNTRVJUUyAqL1xuICAvLyBEZXNzZXJ0IHNlY3Rpb24gd2l0aCBoZWFkaW5nXG4gIGNvbnN0IGRlc3NlcnRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzc2VydFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1lbnUtc2VjdGlvblwiKTtcbiAgY29uc3QgZGVzc2VydEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGRlc3NlcnRIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJtZW51LWhlYWRpbmdcIik7XG4gIGRlc3NlcnRIZWFkaW5nLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiO1xuICBkZXNzZXJ0U2VjdGlvbi5hcHBlbmRDaGlsZChkZXNzZXJ0SGVhZGluZyk7XG5cbiAgLy8gQWRkIGRlc3NlcnQgbGlzdCBhbmQgaXRlbXNcbiAgY29uc3QgZGVzc2VydExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGRlc3NlcnRMaXN0LmNsYXNzTGlzdC5hZGQoXCJtZW51LWxpc3RcIik7XG4gIGNvbnN0IGRlc3NlcnRBcnJheSA9IFtcbiAgICBcIlJodWJhcmIgYW5kIFN0cmF3YmVycnkgQ3J1bWJsZSB3aXRoIFZhbmlsbGEgSWNlIENyZWFtIC0gwqM3LjAwXCIsXG4gICAgXCJDbGFzc2ljIFJpY2UgUHVkZGluZyB3aXRoIENpbm5hbW9uIGFuZCBTdWdhciAtIMKjNi4wMFwiLFxuICAgIFwiQ2FyZGFtb20gYW5kIEdpbmdlcmJyZWFkIFRyaWZsZSB3aXRoIFdoaXBwZWQgQ3JlYW0gLSDCozguMDBcIixcbiAgICBcIkNsb3VkYmVycnkgU29yYmV0IHdpdGggU2hvcnRicmVhZCBDb29raWVzIC0gwqM3LjAwXCIsXG4gIF07XG4gIGRlc3NlcnRBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZGVzc2VydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBkZXNzZXJ0LnRleHRDb250ZW50ID0gZWxlbWVudDtcbiAgICBkZXNzZXJ0TGlzdC5hcHBlbmRDaGlsZChkZXNzZXJ0KTtcbiAgfSk7XG4gIGRlc3NlcnRTZWN0aW9uLmFwcGVuZENoaWxkKGRlc3NlcnRMaXN0KTtcblxuICAvLyBBZGQgZGVzc2VydCBzZWN0aW9uIHRvIG1lbnUgY29udGFpbmVyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzc2VydFNlY3Rpb24pO1xuXG4gIC8qIERSSU5LUyAqL1xuICAvLyBEcmlua3Mgc2VjdGlvbiB3aXRoIGhlYWRpbmdcbiAgY29uc3QgZHJpbmtzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRyaW5rc1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1lbnUtc2VjdGlvblwiKTtcbiAgY29uc3QgZHJpbmtzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgZHJpbmtzSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwibWVudS1oZWFkaW5nXCIpO1xuICBkcmlua3NIZWFkaW5nLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcbiAgZHJpbmtzU2VjdGlvbi5hcHBlbmRDaGlsZChkcmlua3NIZWFkaW5nKTtcblxuICAvLyBBZGQgZHJpbmtzIGxpc3QgYW5kIGl0ZW1zXG4gIGNvbnN0IGRyaW5rc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGRyaW5rc0xpc3QuY2xhc3NMaXN0LmFkZChcIm1lbnUtbGlzdFwiKTtcbiAgY29uc3QgZHJpbmtzQXJyYXkgPSBbXG4gICAgXCJSaHViYXJiIGFuZCBTdHJhd2JlcnJ5IENydW1ibGUgd2l0aCBWYW5pbGxhIEljZSBDcmVhbSAtIMKjNy4wMFwiLFxuICAgIFwiQ2xhc3NpYyBSaWNlIFB1ZGRpbmcgd2l0aCBDaW5uYW1vbiBhbmQgU3VnYXIgLSDCozYuMDBcIixcbiAgICBcIkNhcmRhbW9tIGFuZCBHaW5nZXJicmVhZCBUcmlmbGUgd2l0aCBXaGlwcGVkIENyZWFtIC0gwqM4LjAwXCIsXG4gICAgXCJDbG91ZGJlcnJ5IFNvcmJldCB3aXRoIFNob3J0YnJlYWQgQ29va2llcyAtIMKjNy4wMFwiLFxuICBdO1xuICBkcmlua3NBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGRyaW5rcy50ZXh0Q29udGVudCA9IGVsZW1lbnQ7XG4gICAgZHJpbmtzTGlzdC5hcHBlbmRDaGlsZChkcmlua3MpO1xuICB9KTtcbiAgZHJpbmtzU2VjdGlvbi5hcHBlbmRDaGlsZChkcmlua3NMaXN0KTtcblxuICAvLyBBZGQgZGVzc2VydCBzZWN0aW9uIHRvIG1lbnUgY29udGFpbmVyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJpbmtzU2VjdGlvbik7XG5cbiAgLy8gQWRkIG1lbnUgY29udGFpbmVyIGRpdiB0byBjb250ZW50IGRpdlxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW51Q29udGVudDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==