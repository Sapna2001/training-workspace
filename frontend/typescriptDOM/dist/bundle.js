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

/***/ "./src/apiClient/httpClient.ts":
/*!*************************************!*\
  !*** ./src/apiClient/httpClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass HTTPClient {\n    get(url) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const response = yield fetch(url);\n            const data = yield response.json();\n            return data;\n        });\n    }\n    getBy(url, id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const response = yield fetch(`${url}/${id}`);\n            const data = yield response.json();\n            return data;\n        });\n    }\n    update(url, product) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const response = yield fetch(`${url}/${product.id}`, {\n                method: \"PUT\",\n                headers: { \"Content-Type\": \"application/json\" },\n                body: JSON.stringify(product),\n            });\n            const data = yield response.json();\n            return data;\n        });\n    }\n    add(url, product) {\n        return __awaiter(this, void 0, void 0, function* () {\n            console.log(product);\n            const response = yield fetch(`${url}`, {\n                method: \"POST\",\n                headers: { \"Content-Type\": \"application/json\" },\n                body: JSON.stringify(product),\n            });\n            const data = yield response.json();\n            return data;\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new HTTPClient());\n\n\n//# sourceURL=webpack://es2015webpack/./src/apiClient/httpClient.ts?");

/***/ }),

/***/ "./src/controller/productController.ts":
/*!*********************************************!*\
  !*** ./src/controller/productController.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiClient_httpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apiClient/httpClient */ \"./src/apiClient/httpClient.ts\");\n/* harmony import */ var _view_productView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/productView */ \"./src/view/productView.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nvar starRating = 0;\nfunction getProducts() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const products = yield _apiClient_httpClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"http://localhost:4200/products\");\n        _view_productView__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayProducts(products);\n    });\n}\nfunction enableEdit(e) {\n    if (e.target.parentElement.classList.contains(\"edit\")) {\n        const id = e.target.parentElement.dataset.id;\n        const productName = e.target.parentElement.previousElementSibling.previousElementSibling\n            .previousElementSibling.textContent;\n        const price = e.target.parentElement.previousElementSibling.previousElementSibling\n            .textContent;\n        starRating = e.target.parentElement.previousElementSibling.textContent;\n        // Object literal extensions-\n        const product = {\n            id,\n            productName,\n            price,\n        };\n        _view_productView__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fillform(product);\n    }\n}\nfunction submitProduct() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const productName = document.querySelector(\"#productName\")\n            .value;\n        const price = document.querySelector(\"#price\").value;\n        const id = document.querySelector(\"#id\").value;\n        const data = {\n            productName,\n            price,\n            id,\n            starRating,\n        };\n        console.log(data);\n        if (id) {\n            _apiClient_httpClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].update(`http://localhost:4200/products`, data).then((data) => {\n                getProducts();\n            });\n        }\n        else {\n            const products = yield _apiClient_httpClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"http://localhost:4200/products\");\n            const newId = products.length + 1;\n            data.id = newId.toString();\n            _apiClient_httpClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(`http://localhost:4200/products`, data).then((data) => {\n                getProducts();\n            });\n        }\n        _view_productView__WEBPACK_IMPORTED_MODULE_1__[\"default\"].originalState();\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    getProducts,\n    enableEdit,\n    submitProduct,\n});\n\n\n//# sourceURL=webpack://es2015webpack/./src/controller/productController.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_productController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/productController */ \"./src/controller/productController.ts\");\nvar _a, _b;\n\ndocument.addEventListener(\"DOMContentLoaded\", _controller_productController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProducts);\n// Optional Chaining Operator\n(_a = document\n    .querySelector(\"#products\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", _controller_productController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].enableEdit);\n(_b = document\n    .querySelector(\".product-submit\")) === null || _b === void 0 ? void 0 : _b.addEventListener(\"click\", _controller_productController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].submitProduct);\n\n\n//# sourceURL=webpack://es2015webpack/./src/main.ts?");

/***/ }),

/***/ "./src/view/productView.ts":
/*!*********************************!*\
  !*** ./src/view/productView.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass View {\n    constructor() {\n        this.products = document.querySelector(\"#products\");\n        this.productName = document.querySelector(\"#productName\");\n        this.price = document.querySelector(\"#price\");\n        this.id = document.querySelector(\"#id\");\n        this.productSubmit = (document.querySelector(\"#productSubmit\"));\n    }\n    displayProducts(productsData) {\n        let output = \"\";\n        productsData.forEach((product) => {\n            output += `\r\n        <div class=\"card m-3\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\"> ${product.productName} </h4>\r\n                <h4 class=\"card-title\"> ${product.price} </h4>\r\n                <h4 class=\"card-title\"> ${product.starRating} </h4>\r\n                <a href=\"#\" class=\"edit card-link\" data-id=\"${product.productId}\">\r\n                    <i class=\"fa fa-pencil\"></i>\r\n                </a>\r\n                <a href=\"#\" class=\"delete card-link\" data-id=\"${product.productId}\">\r\n                    <i class=\"fa fa-remove\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        `;\n        });\n        this.products.innerHTML = output;\n    }\n    fillform(data) {\n        this.productName.value = data.productName;\n        this.price.value = data.price;\n        this.id.value = data.id;\n        this.changeFormState(\"edit\");\n    }\n    changeFormState(type) {\n        var _a;\n        if (type === \"edit\") {\n            this.productSubmit.textContent = \"Update Product\";\n            this.productSubmit.className = \"product-submit btn btn-warning btn-block\";\n            const button = document.createElement(\"button\");\n            button.className = \"product-cancel btn btn-success btn-block mt-2\";\n            button.id = \"cancel\";\n            button.appendChild(document.createTextNode(\"Cancel Edit\"));\n            if (!document.getElementById(\"cancel\")) {\n                (_a = this.productSubmit.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(button);\n            }\n        }\n    }\n    originalState() {\n        this.productSubmit.textContent = \"Add Product\";\n        this.productSubmit.className = \"product-submit btn btn-primary btn-block\";\n        const cancelButton = (document.querySelector(\".product-cancel\"));\n        if (cancelButton && cancelButton.parentNode) {\n            cancelButton.parentNode.removeChild(cancelButton);\n        }\n        this.productName.value = \"\";\n        this.price.value = \"\";\n        this.id.value = \"\";\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new View());\n\n\n//# sourceURL=webpack://es2015webpack/./src/view/productView.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;