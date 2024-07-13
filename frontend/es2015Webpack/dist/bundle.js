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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rectangle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rectangle.js */ \"./src/rectangle.js\");\n/* harmony import */ var _triangle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./triangle.js */ \"./src/triangle.js\");\n\r\n\r\n\r\nclass Main {\r\n    static async display(shape) {\r\n        const area = await shape.calculateArea();\r\n        console.log(`Area of ${shape} is ${area}`);\r\n    }\r\n}\r\n\r\nMain.display(new _rectangle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](23.4, 34.5));\r\nMain.display(new _triangle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](23.4, 34.5));\r\n\n\n//# sourceURL=webpack://es2015webpack/./src/main.js?");

/***/ }),

/***/ "./src/rectangle.js":
/*!**************************!*\
  !*** ./src/rectangle.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rectangle)\n/* harmony export */ });\n/* harmony import */ var _shape_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape.js */ \"./src/shape.js\");\n\r\n\r\nclass Rectangle extends _shape_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(width, height) {\r\n    super(width, height);\r\n  }\r\n\r\n  async calculateArea() {\r\n    return this.width * this.height;\r\n  }\r\n\r\n  toString() {\r\n    return \"Rectangle\";\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://es2015webpack/./src/rectangle.js?");

/***/ }),

/***/ "./src/shape.js":
/*!**********************!*\
  !*** ./src/shape.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Shape)\n/* harmony export */ });\nclass Shape {\r\n  constructor(width, height) {\r\n    this.width = width;\r\n    this.height = height;\r\n  }\r\n\r\n  async calculateArea() {\r\n    return 0.0;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://es2015webpack/./src/shape.js?");

/***/ }),

/***/ "./src/triangle.js":
/*!*************************!*\
  !*** ./src/triangle.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Triangle)\n/* harmony export */ });\n/* harmony import */ var _shape_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape.js */ \"./src/shape.js\");\n\r\n\r\nclass Triangle extends _shape_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(width, height) {\r\n    super(width, height);\r\n  }\r\n\r\n  async calculateArea() {\r\n    return 0.5 * this.width * this.height;\r\n  }\r\n\r\n  toString() {\r\n    return \"Triangle\";\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://es2015webpack/./src/triangle.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;