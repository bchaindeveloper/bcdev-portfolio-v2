"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _USA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./USA */ \"./components/USA.jsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n/* harmony import */ var _Metamask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Metamask */ \"./components/Metamask.jsx\");\n\"use client\";\n\n\n\n\n\n\nconst Navbar = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.nav, {\n        variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.navVariants,\n        initial: \"hidden\",\n        whileInView: \"show\",\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].xPaddings, \" py-8 relative\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-[50%] inset-0 gradient-01\"\n            }, void 0, false, {\n                fileName: \"/home/dev/Desktop/projects/portfolio/bcdev-portfolio-v2/components/Navbar.jsx\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].innerWidth, \" mx-auto flex justify-between gap-8 flex-wrap\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_USA__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/dev/Desktop/projects/portfolio/bcdev-portfolio-v2/components/Navbar.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Metamask__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/dev/Desktop/projects/portfolio/bcdev-portfolio-v2/components/Navbar.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/Desktop/projects/portfolio/bcdev-portfolio-v2/components/Navbar.jsx\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dev/Desktop/projects/portfolio/bcdev-portfolio-v2/components/Navbar.jsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, undefined);\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFdUM7QUFDZjtBQUNPO0FBQ2U7QUFDWjtBQUVsQyxNQUFNSyxTQUFTLGtCQUNiLDhEQUFDTCxxREFBVTtRQUNUTyxVQUFVSixzREFBV0E7UUFDckJLLFNBQVE7UUFDUkMsYUFBWTtRQUNaQyxXQUFXLEdBQW9CLE9BQWpCUix5REFBZ0IsRUFBQzs7MEJBRS9CLDhEQUFDVTtnQkFBSUYsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDRTtnQkFDQ0YsV0FBVyxHQUFxQixPQUFsQlIsMERBQWlCLEVBQUM7O2tDQUVoQyw4REFBQ0QsNENBQUdBOzs7OztrQ0FDSiw4REFBQ0csaURBQVFBOzs7Ozs7Ozs7Ozs7Ozs7OztLQVpUQztBQWlCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci5qc3g/M2FhYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IFVTQSBmcm9tICcuL1VTQSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcyc7XG5pbXBvcnQgeyBuYXZWYXJpYW50cyB9IGZyb20gJy4uL3V0aWxzL21vdGlvbic7XG5pbXBvcnQgTWV0YW1hc2sgZnJvbSAnLi9NZXRhbWFzayc7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IChcbiAgPG1vdGlvbi5uYXZcbiAgICB2YXJpYW50cz17bmF2VmFyaWFudHN9XG4gICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy54UGFkZGluZ3N9IHB5LTggcmVsYXRpdmVgfVxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LVs1MCVdIGluc2V0LTAgZ3JhZGllbnQtMDFcIiAvPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmlubmVyV2lkdGh9IG14LWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTggZmxleC13cmFwYH1cbiAgICA+XG4gICAgICA8VVNBIC8+XG4gICAgICA8TWV0YW1hc2sgLz5cbiAgICA8L2Rpdj5cbiAgPC9tb3Rpb24ubmF2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJuYW1lcyI6WyJtb3Rpb24iLCJVU0EiLCJzdHlsZXMiLCJuYXZWYXJpYW50cyIsIk1ldGFtYXNrIiwiTmF2YmFyIiwibmF2IiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJjbGFzc05hbWUiLCJ4UGFkZGluZ3MiLCJkaXYiLCJpbm5lcldpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n"));

/***/ })

});