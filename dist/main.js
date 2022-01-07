/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-add */ \"./src/task-add.js\");\n\r\n\r\nconst todos = document.querySelector(\".todos\");\r\nconst listSection = document.querySelector(\".lists-section\");\r\nconst taskAddBtn = document.querySelector(\".task-add-btn\");\r\nconst inputOverlay = document.querySelector(\".input-overlay\");\r\nconst form = document.querySelector(\".input-overlay-main\");\r\nconst inputOverlayTitle = document.querySelector(\".input-overlay-title\");\r\nconst inputOverlayDetails = document.querySelector(\".input-overlay-details\");\r\nconst inputOverlayDate = document.querySelector(\".input-overlay-date\");\r\nconst inputOverlayCancel = document.querySelector(\".input-overlay-cancel\");\r\n\r\nconsole.log(localStorage);\r\n\r\nconst clearFields = () => {\r\n  inputOverlayTitle.value = \"\";\r\n  inputOverlayDetails.value = \"\";\r\n  inputOverlayDate.value = \"\";\r\n};\r\n\r\nconst renderList = (title, details, date) => {\r\n  const todoItem = document.createElement(\"div\");\r\n  todoItem.classList.add(\"todo-item\");\r\n  todoItem.setAttribute(\"id\", date);\r\n  todoItem.innerHTML = `<details class=\"task\">\r\n                            <summary class=\"task-title\">${title} (<span class=\"task-date\">${date}</span>)</summary>\r\n                            <p class=\"task-details\">${details}</p>\r\n                        </details>`;\r\n\r\n  const btnActions = document.createElement(\"div\");\r\n  btnActions.classList.add(\"btn-actions\");\r\n  const btnComplete = document.createElement(\"button\");\r\n\r\n  btnComplete.classList.add(\"btn\", \"btn-complete\");\r\n\r\n  btnComplete.textContent = \"Complete\";\r\n\r\n  btnActions.appendChild(btnComplete);\r\n\r\n  todoItem.appendChild(btnActions);\r\n\r\n  listSection.appendChild(todoItem);\r\n\r\n  btnComplete.addEventListener(\"click\", (e) => {\r\n    listSection.removeChild(e.target.parentNode.parentNode);\r\n    localStorage.removeItem(e.target.parentNode.parentNode.id);\r\n  });\r\n};\r\n\r\n(function () {\r\n  for (let i = 0; i < localStorage.length; i++) {\r\n    let z = JSON.parse(localStorage.getItem(localStorage.key(i)));\r\n    renderList(z._title, z._details, z._date);\r\n  }\r\n})();\r\n\r\ntaskAddBtn.addEventListener(\"click\", () => {\r\n  inputOverlay.style.display = \"flex\";\r\n});\r\n\r\ninputOverlayCancel.addEventListener(\"click\", () => {\r\n  inputOverlay.style.display = \"none\";\r\n  clearFields();\r\n});\r\n\r\nform.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  const taskObj = new _task_add__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n    inputOverlayTitle.value,\r\n    inputOverlayDetails.value,\r\n    inputOverlayDate.value\r\n  );\r\n  console.log(taskObj);\r\n  window.localStorage.setItem(inputOverlayDate.value, JSON.stringify(taskObj));\r\n  console.log(window.localStorage);\r\n  renderList(\r\n    inputOverlayTitle.value,\r\n    inputOverlayDetails.value,\r\n    inputOverlayDate.value\r\n  );\r\n  clearFields();\r\n  inputOverlay.style.display = \"none\";\r\n});\r\n\n\n//# sourceURL=webpack://10-todo/./src/index.js?");

/***/ }),

/***/ "./src/task-add.js":
/*!*************************!*\
  !*** ./src/task-add.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\r\n  constructor(title, details, date) {\r\n    this._title = title;\r\n    this._details = details;\r\n    this._date = date;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\r\n\n\n//# sourceURL=webpack://10-todo/./src/task-add.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;