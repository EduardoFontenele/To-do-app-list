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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.scss */ \"./src/css/styles.scss\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar headerH1 = document.getElementById('header-h1');\nwindow.addEventListener('load', function () {\n  headerH1.animate([{\n    opacity: 0\n  }, {\n    opacity: 1\n  }], {\n    duration: 1000,\n    fill: 'forwards',\n    easing: 'ease-in'\n  });\n});\n\nvar CreateTask = /*#__PURE__*/function () {\n  function CreateTask() {\n    _classCallCheck(this, CreateTask);\n\n    this.taskForm = document.querySelector('.task-form');\n    this.submitEvent();\n    this.results = document.querySelector('.results');\n    this.iterator = 0;\n  }\n\n  _createClass(CreateTask, [{\n    key: \"submitEvent\",\n    value: function submitEvent() {\n      var _this = this;\n\n      this.taskForm.addEventListener('submit', function (e) {\n        e.preventDefault();\n\n        _this.handleSubmit();\n      });\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit() {\n      var taskToDo = document.getElementById('task-to-do');\n      var errorDivs = document.querySelectorAll('.error-div');\n\n      if (!taskToDo.value) {\n        this.createError('Cannot insert an empty task');\n\n        var _iterator = _createForOfIteratorHelper(errorDivs),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var errorDiv = _step.value;\n            errorDiv.remove();\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        return;\n      }\n\n      if (taskToDo.value) {\n        this.createTask(taskToDo.value);\n\n        var _iterator2 = _createForOfIteratorHelper(errorDivs),\n            _step2;\n\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var _errorDiv = _step2.value;\n\n            _errorDiv.remove();\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n      }\n\n      this.markDivs();\n    }\n  }, {\n    key: \"markDivs\",\n    value: function markDivs() {\n      var _this2 = this;\n\n      var deleteBtns = this.results.querySelectorAll('.delete');\n\n      var _iterator3 = _createForOfIteratorHelper(deleteBtns),\n          _step3;\n\n      try {\n        var _loop = function _loop() {\n          var btn = _step3.value;\n          btn.addEventListener('click', function (e) {\n            var parentDiv = btn.parentNode;\n\n            _this2.deleteDiv(parentDiv);\n          });\n        };\n\n        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n          _loop();\n        }\n      } catch (err) {\n        _iterator3.e(err);\n      } finally {\n        _iterator3.f();\n      }\n    }\n  }, {\n    key: \"deleteDiv\",\n    value: function deleteDiv(div) {\n      div.classList.add('remove');\n      setTimeout(function () {\n        if (div.classList.contains('remove')) {\n          div.remove();\n        }\n      }, 900);\n    }\n  }, {\n    key: \"createTask\",\n    value: function createTask(task) {\n      var elDiv = document.createElement('div');\n      var elButton = document.createElement('button');\n      elDiv.innerHTML = task;\n      elButton.innerHTML = 'Done';\n      elButton.classList.add('delete');\n      this.iterator++;\n      elDiv.appendChild(elButton);\n      this.results.appendChild(elDiv);\n    }\n  }, {\n    key: \"createError\",\n    value: function createError(msg) {\n      var errDiv = document.createElement('div');\n      errDiv.classList.add('error-div');\n      errDiv.innerHTML = msg;\n      this.results.appendChild(errDiv);\n    }\n  }]);\n\n  return CreateTask;\n}();\n\nvar createTasks = new CreateTask();\n\n//# sourceURL=webpack://todoapp/./src/js/index.js?");

/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todoapp/./src/css/styles.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;