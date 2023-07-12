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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validator */ \"./modules/validator.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('14 jule 2023');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('.portfolio-content', '.portfolio-item', '.portfolio-dots');\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menu = document.querySelector('menu');\r\n  const scroll = document.querySelector('main>a');\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  }\r\n\r\n  const goToSection = (value) => {\r\n    const scrollTarget = document.getElementById(value.getAttribute('href').substring(1));\r\n\r\n    window.scrollBy({\r\n      top: scrollTarget.getBoundingClientRect().top,\r\n      behavior: 'smooth'\r\n    })\r\n  }\r\n\r\n  document.addEventListener('click', e => {\r\n    if (e.target.closest('.menu')) {\r\n      handleMenu();\r\n    }\r\n  })\r\n\r\n  menu.addEventListener('click', e => {\r\n    if (e.target.classList.contains('close-btn')) {\r\n      e.preventDefault();\r\n      handleMenu();\r\n    } else if (e.target.closest('li')) {\r\n      e.preventDefault();\r\n      const li = e.target.closest('li');\r\n      handleMenu();\r\n      goToSection(li.children[0]);\r\n    } else {\r\n      handleMenu();\r\n    }\r\n  })\r\n\r\n  scroll.addEventListener('click', e => {\r\n    e.preventDefault();\r\n    goToSection(e.target.parentElement);\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n\r\n  function animate({ timing, draw, duration }) {\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n\r\n      let progress = timing(timeFraction);\r\n\r\n      draw(progress);\r\n\r\n      if (timeFraction < 1) {\r\n        requestAnimationFrame(animate);\r\n      }\r\n    });\r\n  }\r\n\r\n  function linear(timeFraction) {\r\n    return timeFraction;\r\n  }\r\n\r\n  const handleMenu = () => {\r\n    modal.style.display = modal.style.display == 'block' ? 'none' : 'block'\r\n    if (document.documentElement.clientWidth + 15 >= 768) {\r\n      const popupContent = modal.querySelector('.popup-content');\r\n\r\n      animate({\r\n        duration: 500,\r\n        timing: linear,\r\n        draw: function (progress) {\r\n          popupContent.style.left = progress * 38 + '%'\r\n        }\r\n      });\r\n    }\r\n  }\r\n\r\n  buttons.forEach(btn => btn.addEventListener('click', handleMenu));\r\n\r\n  modal.addEventListener('click', e => {\r\n    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n      handleMenu();\r\n    }\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (block, items, changer, slideActive = 'portfolio-item-active', dotActive = 'dot-active') => {\n  if (!block) return;\n  if (!items) return;\n  if (!changer) return;\n\n  const sliderBlock = document.querySelector(block);\n  const slides = document.querySelectorAll(items);\n  const dotsBlock = document.querySelector(changer);\n  let dots;\n\n  let timeInterval = 2000;\n\n  let currentSlide = 0;\n  let interval;\n\n  const prevSlide = (elems, index, strClass) => {\n    elems[index].classList.remove(strClass);\n  }\n\n  const nextSlide = (elems, index, strClass) => {\n    elems[index].classList.add(strClass);\n  }\n\n  const autoSlide = () => {\n    prevSlide(slides, currentSlide, slideActive);\n    prevSlide(dots, currentSlide, dotActive);\n    currentSlide++;\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slides, currentSlide, slideActive);\n    nextSlide(dots, currentSlide, dotActive);\n  }\n\n  const startSlide = (timer = 1500) => {\n    dots = document.querySelectorAll('.dot');\n    interval = setInterval(autoSlide, timer);\n  }\n\n  const stopSlide = () => {\n    clearInterval(interval);\n  }\n\n  sliderBlock.addEventListener('click', (e) => {\n    e.preventDefault();\n\n    if (!e.target.matches('.dot, .portfolio-btn')) {\n      return;\n    }\n\n    prevSlide(slides, currentSlide, slideActive);\n    prevSlide(dots, currentSlide, dotActive);\n\n    if (e.target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (e.target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (e.target.classList.contains('dot')) {\n      dots.forEach((dot, index) => {\n        if (e.target === dot) {\n          currentSlide = index;\n        }\n      })\n    }\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slides.length - 1;\n    }\n\n    nextSlide(slides, currentSlide, slideActive);\n    nextSlide(dots, currentSlide, dotActive);\n  })\n\n  sliderBlock.addEventListener('mouseenter', (e) => {\n    if (e.target.matches('.dot, .portfolio-btn')) {\n      stopSlide();\n    }\n  }, true)\n\n  sliderBlock.addEventListener('mouseleave', (e) => {\n    if (e.target.matches('.dot, .portfolio-btn')) {\n      startSlide(timeInterval);\n    }\n  }, true)\n\n  slides.forEach((slide, index) => {\n    const dot = document.createElement('li');\n    dot.classList.add('dot');\n\n    if (index == currentSlide) {\n      dot.classList.add(dotActive)\n    }\n\n    dotsBlock.appendChild(dot);\n  })\n\n  startSlide(timeInterval);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector('.service-header');\r\n  const tabs = document.querySelectorAll('.service-header-tab');\r\n  const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n  tabPanel.addEventListener('click', e => {\r\n    if (e.target.closest('.service-header-tab')) {\r\n      tabs.forEach((tab, index) => {\r\n        const tabBtn = e.target.closest('.service-header-tab')\r\n        if (tab === tabBtn) {\r\n          tab.classList.add('active')\r\n          tabContent[index].classList.remove('d-none')\r\n        } else {\r\n          tab.classList.remove('active')\r\n          tabContent[index].classList.add('d-none')\r\n        }\r\n      });\r\n    }\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById('timer-hours');\r\n  const timerMinutes = document.getElementById('timer-minutes');\r\n  const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60)\r\n    let seconds = Math.floor(timeRemaining % 60)\r\n\r\n    return { timeRemaining, hours, minutes, seconds }\r\n  }\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    if (getTime.timeRemaining < 0) {\r\n      clearInterval(idInterval)\r\n      getTime.hours = 0;\r\n      getTime.minutes = 0;\r\n      getTime.seconds = 0;\r\n    }\r\n\r\n    timerHours.textContent = getTime.hours.toString().length === 1 ? '0' + getTime.hours : getTime.hours;\r\n    timerMinutes.textContent = getTime.minutes.toString().length === 1 ? '0' + getTime.minutes : getTime.minutes;\r\n    timerSeconds.textContent = getTime.seconds.toString().length === 1 ? '0' + getTime.seconds : getTime.seconds;\r\n  }\r\n\r\n  let idInterval = setInterval(updateClock, 1000);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validator.js":
/*!******************************!*\
  !*** ./modules/validator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validator = () => {\r\n  const calcItems = document.querySelectorAll('.calc-item');\r\n  const nameInputs = document.querySelectorAll('.form-name');\r\n  const emailInputs = document.querySelectorAll('.form-email');\r\n  const phoneInputs = document.querySelectorAll('.form-phone');\r\n  const messageInput = document.getElementById('form2-message');\r\n\r\n  calcItems.forEach(item => {\r\n    item.addEventListener('input', () => {\r\n      item.value = item.value.replace(/\\D+$/g, \"\")\r\n    })\r\n  })\r\n\r\n  messageInput.addEventListener('input', () => {\r\n    messageInput.value = messageInput.value.replace(/[^а-я\\-\\s]+/gim, \"\");\r\n  })\r\n\r\n  emailInputs.forEach(item => {\r\n    item.addEventListener('input', () => {\r\n      item.value = item.value.replace(/[^a-z0-9\\@\\-\\_\\.\\!\\~\\*\\']+/gi, \"\");\r\n    })\r\n  })\r\n\r\n  phoneInputs.forEach(item => {\r\n    item.addEventListener('input', () => {\r\n      item.value = item.value.replace(/[^\\d\\(\\)\\-]+/gi, \"\");\r\n    })\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);\n\n//# sourceURL=webpack:///./modules/validator.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;