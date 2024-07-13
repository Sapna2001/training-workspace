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

/***/ "./src/minMaxArray.ts":
/*!****************************!*\
  !*** ./src/minMaxArray.ts ***!
  \****************************/
/***/ (() => {

eval("\nconst numberArray = [234, 456, 678, 231, 888, 432];\nconst stringArray = [\"a\", \"w\", \"s\", \"g\", \"f\", \"l\"];\nfunction minValue(array) {\n    if (array.length === 0) {\n        return 0;\n    }\n    let minVal = array[0];\n    for (let i = 1; i < array.length; i++) {\n        if (array[i] < minVal) {\n            minVal = array[i];\n        }\n    }\n    return minVal;\n}\nfunction maxValue(array) {\n    if (array.length === 0) {\n        return 0;\n    }\n    let maxVal = array[0];\n    for (let i = 1; i < array.length; i++) {\n        if (array[i] > maxVal) {\n            maxVal = array[i];\n        }\n    }\n    return maxVal;\n}\nconsole.log(minValue(numberArray));\nconsole.log(maxValue(numberArray));\nconsole.log(minValue(stringArray));\nconsole.log(maxValue(stringArray));\n\n\n//# sourceURL=webpack://es2015webpack/./src/minMaxArray.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/minMaxArray.ts"]();
/******/ 	
/******/ })()
;