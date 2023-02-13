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
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contactContent = () => {
  const contentDiv = document.getElementById("content");

  // Create contact container div
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container", "menu");

  // Add contact heading
  const titleSection = document.createElement("div");
  titleSection.classList.add("title-section");
  const contactHeading = document.createElement("h1");
  contactHeading.classList.add("title");
  contactHeading.textContent = "Contact";
  titleSection.appendChild(contactHeading);
  contentDiv.appendChild(titleSection);

  // Add address, phone and email details
  const contactObject = {
    Address: "123 Main Street, London, UK",
    Phone: "+44 207123 4567",
    Email: "info@odinrestaurant.co.uk",
  };
  const keys = Object.keys(contactObject);

  keys.forEach((key, index) => {
    const type = document.createElement("p");
    type.classList.add("contact-type");
    type.textContent = `${key}:`;
    const details = document.createElement("p");
    details.classList.add("contact-details");
    details.textContent = contactObject[key];
    contactContainer.appendChild(type);
    contactContainer.appendChild(details);
  });

  // Add contact container div to content div
  contentDiv.appendChild(contactContainer);

  document.body.appendChild(contentDiv);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactContent);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixJQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBjb250YWN0Q29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAvLyBDcmVhdGUgY29udGFjdCBjb250YWluZXIgZGl2XG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiLCBcIm1lbnVcIik7XG5cbiAgLy8gQWRkIGNvbnRhY3QgaGVhZGluZ1xuICBjb25zdCB0aXRsZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRpdGxlLXNlY3Rpb25cIik7XG4gIGNvbnN0IGNvbnRhY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb250YWN0SGVhZGluZy5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIGNvbnRhY3RIZWFkaW5nLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIHRpdGxlU2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0SGVhZGluZyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGl0bGVTZWN0aW9uKTtcblxuICAvLyBBZGQgYWRkcmVzcywgcGhvbmUgYW5kIGVtYWlsIGRldGFpbHNcbiAgY29uc3QgY29udGFjdE9iamVjdCA9IHtcbiAgICBBZGRyZXNzOiBcIjEyMyBNYWluIFN0cmVldCwgTG9uZG9uLCBVS1wiLFxuICAgIFBob25lOiBcIis0NCAyMDcxMjMgNDU2N1wiLFxuICAgIEVtYWlsOiBcImluZm9Ab2RpbnJlc3RhdXJhbnQuY28udWtcIixcbiAgfTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbnRhY3RPYmplY3QpO1xuXG4gIGtleXMuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0eXBlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXR5cGVcIik7XG4gICAgdHlwZS50ZXh0Q29udGVudCA9IGAke2tleX06YDtcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1kZXRhaWxzXCIpO1xuICAgIGRldGFpbHMudGV4dENvbnRlbnQgPSBjb250YWN0T2JqZWN0W2tleV07XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0eXBlKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuICB9KTtcblxuICAvLyBBZGQgY29udGFjdCBjb250YWluZXIgZGl2IHRvIGNvbnRlbnQgZGl2XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RDb250ZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9