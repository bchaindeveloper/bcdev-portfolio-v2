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

/***/ "./components/Metamask.jsx":
/*!*********************************!*\
  !*** ./components/Metamask.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Metamask; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\"use client\";\n\nfunction Metamask() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Web3 Browswer Detection\n        if (typeof window.ethereum !== \"undefined\") {\n            console.log(\"Injected Web3 Wallet is installed!\");\n        }\n        //Button ID\n        const connectButton = document.getElementById(\"connect\");\n        //Click Event\n        connectButton.addEventListener(\"click\", ()=>{\n            connectAccount();\n        });\n        //Connect Account Function\n        async function connectAccount() {\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            const account = accounts[0];\n            connectButton.innerHTML = account[0] + account[1] + account[2] + account[3] + account[4] + account[5] + \"...\" + account[38] + account[39] + account[40] + account[41];\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            id: \"connect\",\n            type: \"button\",\n            className: \"flex items-center h-[24px] w-[100px] py-4 px-6 bg-[#ffffff] rounded-[32px] gap-[12px]\",\n            children: \"Connect Wallet\"\n        }, void 0, false, {\n            fileName: \"/home/dev/Desktop/projects/portfolio/bcdev-portfolio-v2/components/Metamask.jsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/dev/Desktop/projects/portfolio/bcdev-portfolio-v2/components/Metamask.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Metamask, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Metamask;\nvar _c;\n$RefreshReg$(_c, \"Metamask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01ldGFtYXNrLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFBO0FBRXlDO0FBRTFCLFNBQVNFLFdBQVc7O0lBQ2pDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsMEJBQTBCO1FBQzFCLElBQUksT0FBT0UsT0FBT0MsUUFBUSxLQUFLLGFBQWE7WUFDMUNDLFFBQVFDLEdBQUcsQ0FBQztRQUNkLENBQUM7UUFFRCxXQUFXO1FBQ1gsTUFBTUMsZ0JBQWdCQyxTQUFTQyxjQUFjLENBQUM7UUFFOUMsYUFBYTtRQUNiRixjQUFjRyxnQkFBZ0IsQ0FBQyxTQUFTLElBQU07WUFDNUNDO1FBQ0Y7UUFFQSwwQkFBMEI7UUFDMUIsZUFBZUEsaUJBQWlCO1lBQzlCLE1BQU1DLFdBQVcsTUFBTVIsU0FBU1MsT0FBTyxDQUFDO2dCQUN0Q0MsUUFBUTtZQUNWO1lBQ0EsTUFBTUMsVUFBVUgsUUFBUSxDQUFDLEVBQUU7WUFDM0JMLGNBQWNTLFNBQVMsR0FDckJELE9BQU8sQ0FBQyxFQUFFLEdBQ1ZBLE9BQU8sQ0FBQyxFQUFFLEdBQ1ZBLE9BQU8sQ0FBQyxFQUFFLEdBQ1ZBLE9BQU8sQ0FBQyxFQUFFLEdBQ1ZBLE9BQU8sQ0FBQyxFQUFFLEdBQ1ZBLE9BQU8sQ0FBQyxFQUFFLEdBQ1YsUUFDQUEsT0FBTyxDQUFDLEdBQUcsR0FDWEEsT0FBTyxDQUFDLEdBQUcsR0FDWEEsT0FBTyxDQUFDLEdBQUcsR0FDWEEsT0FBTyxDQUFDLEdBQUc7UUFDZjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFPQyxJQUFHO1lBQVVDLE1BQUs7WUFBU0gsV0FBVTtzQkFBd0Y7Ozs7Ozs7Ozs7O0FBSzNJLENBQUM7R0EzQ3VCaEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXRhbWFzay5qc3g/NTc1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWV0YW1hc2soKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gV2ViMyBCcm93c3dlciBEZXRlY3Rpb25cbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgY29uc29sZS5sb2coXCJJbmplY3RlZCBXZWIzIFdhbGxldCBpcyBpbnN0YWxsZWQhXCIpO1xuICAgIH1cblxuICAgIC8vQnV0dG9uIElEXG4gICAgY29uc3QgY29ubmVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29ubmVjdFwiKTtcblxuICAgIC8vQ2xpY2sgRXZlbnRcbiAgICBjb25uZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25uZWN0QWNjb3VudCgpO1xuICAgIH0pO1xuXG4gICAgLy9Db25uZWN0IEFjY291bnQgRnVuY3Rpb25cbiAgICBhc3luYyBmdW5jdGlvbiBjb25uZWN0QWNjb3VudCgpIHtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgIGNvbm5lY3RCdXR0b24uaW5uZXJIVE1MID1cbiAgICAgICAgYWNjb3VudFswXSArXG4gICAgICAgIGFjY291bnRbMV0gK1xuICAgICAgICBhY2NvdW50WzJdICtcbiAgICAgICAgYWNjb3VudFszXSArXG4gICAgICAgIGFjY291bnRbNF0gK1xuICAgICAgICBhY2NvdW50WzVdICtcbiAgICAgICAgXCIuLi5cIiArXG4gICAgICAgIGFjY291bnRbMzhdICtcbiAgICAgICAgYWNjb3VudFszOV0gK1xuICAgICAgICBhY2NvdW50WzQwXSArXG4gICAgICAgIGFjY291bnRbNDFdO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+XG4gICAgICA8YnV0dG9uIGlkPVwiY29ubmVjdFwiIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBoLVsyNHB4XSB3LVsxMDBweF0gcHktNCBweC02IGJnLVsjZmZmZmZmXSByb3VuZGVkLVszMnB4XSBnYXAtWzEycHhdXCI+XG4gICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTWV0YW1hc2siLCJ3aW5kb3ciLCJldGhlcmV1bSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0QnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25uZWN0QWNjb3VudCIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImFjY291bnQiLCJpbm5lckhUTUwiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJpZCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Metamask.jsx\n"));

/***/ })

});