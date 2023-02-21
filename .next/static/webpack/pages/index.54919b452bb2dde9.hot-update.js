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

/***/ "./components/Exp.jsx":
/*!****************************!*\
  !*** ./components/Exp.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\"use client\";\n\n\n\n\nconst Exp = (param)=>/*#__PURE__*/ {\n    let { id , imgUrl , title , index , active , handleClick  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.fadeIn)(\"right\", \"spring\", index * 0.5, 0.75),\n        className: \"relative \".concat(active === id ? \"lg:flex-[3.5] flex-[10]\" : \"lg:flex-[0.5] flex-[2]\", \" flex items-center justify-center min-w-[80px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer\"),\n        onClick: ()=>handleClick(id),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imgUrl,\n                alt: title,\n                className: \"absolute w-full h-full object-cover rounded-[24px]\"\n            }, void 0, false, {\n                fileName: \"/home/dev/Desktop/projects/portfolio/bcdev-portfolio-v2/components/Exp.jsx\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined),\n            active !== id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/dev/Desktop/projects/portfolio/bcdev-portfolio-v2/components/Exp.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flexCenter, \" w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"./check.png\",\n                            alt: \"headset\",\n                            className: \"w-[90%] h-[90%] object-contain\"\n                        }, void 0, false, {\n                            fileName: \"/home/dev/Desktop/projects/portfolio/bcdev-portfolio-v2/components/Exp.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/dev/Desktop/projects/portfolio/bcdev-portfolio-v2/components/Exp.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/home/dev/Desktop/projects/portfolio/bcdev-portfolio-v2/components/Exp.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/Desktop/projects/portfolio/bcdev-portfolio-v2/components/Exp.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dev/Desktop/projects/portfolio/bcdev-portfolio-v2/components/Exp.jsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Exp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Exp);\nvar _c;\n$RefreshReg$(_c, \"Exp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRXVDO0FBRVI7QUFDVTtBQUV6QyxNQUFNRyxNQUFNLHVCQUNWO1FBRFcsRUFBRUMsR0FBRSxFQUFFQyxPQUFNLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUVDLFlBQVcsRUFBRTtXQUM1RCw4REFBQ1QscURBQVU7UUFDVFcsVUFBVVQscURBQU1BLENBQUMsU0FBUyxVQUFVSyxRQUFRLEtBQUs7UUFDakRLLFdBQVcsWUFFVixPQURDSixXQUFXSixLQUFLLDRCQUE0Qix3QkFBd0IsRUFDckU7UUFDRFMsU0FBUyxJQUFNSixZQUFZTDs7MEJBRTNCLDhEQUFDVTtnQkFDQ0MsS0FBS1Y7Z0JBQ0xXLEtBQUtWO2dCQUNMTSxXQUFVOzs7Ozs7WUFFWEosV0FBV0osbUJBQ1YsOERBQUNhO2dCQUFHTCxXQUFVOzBCQUNYTjs7Ozs7MENBR0gsOERBQUNJO2dCQUFJRSxXQUFVOztrQ0FDYiw4REFBQ0Y7d0JBQ0NFLFdBQVcsR0FBcUIsT0FBbEJYLDBEQUFpQixFQUFDO2tDQUVoQyw0RUFBQ2E7NEJBQ0NDLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pKLFdBQVU7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDTzt3QkFBR1AsV0FBVTtrQ0FDWE47Ozs7Ozs7Ozs7O3lCQUdOOzs7Ozs7O0FBQ1M7S0FqQ1JIO0FBb0NOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRXhwLmpzeD80YzQ2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzJztcbmltcG9ydCB7IGZhZGVJbiB9IGZyb20gJy4uL3V0aWxzL21vdGlvbic7XG5cbmNvbnN0IEV4cCA9ICh7IGlkLCBpbWdVcmwsIHRpdGxlLCBpbmRleCwgYWN0aXZlLCBoYW5kbGVDbGljayB9KSA9PiAoXG4gIDxtb3Rpb24uZGl2XG4gICAgdmFyaWFudHM9e2ZhZGVJbigncmlnaHQnLCAnc3ByaW5nJywgaW5kZXggKiAwLjUsIDAuNzUpfVxuICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlICR7XG4gICAgICBhY3RpdmUgPT09IGlkID8gJ2xnOmZsZXgtWzMuNV0gZmxleC1bMTBdJyA6ICdsZzpmbGV4LVswLjVdIGZsZXgtWzJdJ1xuICAgIH0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLXctWzgwcHhdIGgtWzcwMHB4XSB0cmFuc2l0aW9uLVtmbGV4XSBkdXJhdGlvbi1bMC43c10gZWFzZS1vdXQtZmxleCBjdXJzb3ItcG9pbnRlcmB9XG4gICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soaWQpfVxuICA+XG4gICAgPGltZ1xuICAgICAgc3JjPXtpbWdVcmx9XG4gICAgICBhbHQ9e3RpdGxlfVxuICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgcm91bmRlZC1bMjRweF1cIlxuICAgIC8+XG4gICAge2FjdGl2ZSAhPT0gaWQgPyAoXG4gICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBzbTp0ZXh0LVsyNnB4XSB0ZXh0LVsxOHB4XSB0ZXh0LXdoaXRlIGFic29sdXRlIHotMCBsZzpib3R0b20tMjAgbGc6cm90YXRlLVstOTBkZWddIGxnOm9yaWdpbi1bMCwwXVwiPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2gzPlxuICAgICkgOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHAtOCBmbGV4IGp1c3RpZnktc3RhcnQgdy1mdWxsIGZsZXgtY29sIGJnLVtyZ2JhKDAsMCwwLDAuNSldIHJvdW5kZWQtYi1bMjRweF1cIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmZsZXhDZW50ZXJ9IHctWzYwcHhdIGgtWzYwcHhdIHJvdW5kZWQtWzI0cHhdIGdsYXNzbW9ycGhpc20gbWItWzE2cHhdYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi4vY2hlY2sucG5nXCJcbiAgICAgICAgICAgIGFsdD1cImhlYWRzZXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bOTAlXSBoLVs5MCVdIG9iamVjdC1jb250YWluXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LVsyNHB4XSBmb250LXNlbWlib2xkIHNtOnRleHQtWzMycHhdIHRleHQtWzI0cHhdIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICA8L21vdGlvbi5kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFeHA7Il0sIm5hbWVzIjpbIm1vdGlvbiIsInN0eWxlcyIsImZhZGVJbiIsIkV4cCIsImlkIiwiaW1nVXJsIiwidGl0bGUiLCJpbmRleCIsImFjdGl2ZSIsImhhbmRsZUNsaWNrIiwiZGl2IiwidmFyaWFudHMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiLCJmbGV4Q2VudGVyIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Exp.jsx\n"));

/***/ })

});