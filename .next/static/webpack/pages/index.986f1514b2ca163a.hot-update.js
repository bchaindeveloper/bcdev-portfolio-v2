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

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exploreWorlds\": function() { return /* binding */ exploreWorlds; },\n/* harmony export */   \"insights\": function() { return /* binding */ insights; },\n/* harmony export */   \"newFeatures\": function() { return /* binding */ newFeatures; },\n/* harmony export */   \"startingFeatures\": function() { return /* binding */ startingFeatures; }\n/* harmony export */ });\nconst exploreWorlds = [\n    {\n        id: \"Front\",\n        imgUrl: \"/reactlogo.png\",\n        title: \"Modern Front-End Frameworks\"\n    },\n    {\n        id: \"Web\",\n        imgUrl: \"./style.png\",\n        title: \"Modern Styling Technology\"\n    },\n    {\n        id: \"Syntax\",\n        imgUrl: \"./JS.jpg\",\n        title: \"2021- HTML, CSS & JavaScript Syntax\"\n    },\n    {\n        id: \"Core\",\n        imgUrl: \"./React.jpg\",\n        title: \"2022- Solidity Smart Contracts & React UX/UI\"\n    },\n    {\n        id: \"Future\",\n        imgUrl: \"./network1.jpg\",\n        title: \"2023- Continuing To Build & Learn\"\n    }\n];\nconst startingFeatures = [\n    \"Smart Contracts Built With Solidity, Web3.JS & Web3.PY\",\n    \"Front End Applications Built With React Frameworks\",\n    \"Blockhain Tools Like Chainlink, Alchemy, OpenZeppelin, Wallet Intergration and much more\"\n];\nconst newFeatures = [\n    {\n        imgUrl: \"/Ethereum.png\",\n        title: \"Ether Crowdfund\",\n        subtitle: \"A crowdfunding smart contract with a Vite frontend. This applicatoin allows users to create their own campaign as well as fund others. Funding is done by connecting your MetaMask wallet.\",\n        link: \"https://web3sire.com/\"\n    },\n    {\n        imgUrl: \"/react-seeklogo.com.svg\",\n        title: \"My Porfolio\",\n        subtitle: \"I built two seperate porfolio websites utilizing different styles. My bchaindeveloper.com website uses Next.JS and has a different design.\",\n        link: \"https://bchaindeveloper.com/\"\n    }\n];\nconst insights = [\n    {\n        imgUrl: \"/FCC.jpg\",\n        title: \"Solidity, Blockchain, FullStack Web3 JS Tutorial\",\n        subtitle: \"This course covered the core concepts related to blockchain and smart contracts. I used Hardhat, Solidity, EthersJS and Web3JS to create an array of projects. \",\n        link: \"https://www.youtube.com/watch?v=gyMwXuJrbJQ\"\n    },\n    {\n        imgUrl: \"/FCC.jpg\",\n        title: \"Solidity, Blockchain Python Tutorial\",\n        subtitle: \"This course covered the core concepts related to blockchain and smart contracts.I used Web3.py and Solidity to create an array of blockchain projects\",\n        link: \"https://www.youtube.com/watch?v=M576WGiDBdQ&t=17s\"\n    },\n    {\n        imgUrl: \"https://static-assets.codecademy.com/components/curriculum/path/front-end-engineer-career-path/curriculum-card.svg\",\n        title: \"CodeCademy, Front-End Engineer\",\n        subtitle: \"Full Front-End course covering HTML, CSS, JavaScript, React and much more.\",\n        link: \"https://join.codecademy.com/learn/paths/front-end-engineer-career-path/\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLGdCQUFnQjtJQUMzQjtRQUNFQyxJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtDQUNELENBQUM7QUFFSyxNQUFNQyxtQkFBbUI7SUFDOUI7SUFDQTtJQUNBO0NBQ0QsQ0FBQztBQUdLLE1BQU1DLGNBQWM7SUFDekI7UUFDRUgsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7UUFDSkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7UUFDSkMsTUFBTTtJQUNSO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLFdBQVc7SUFDdEI7UUFDRU4sUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7UUFDSkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7UUFDSkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7UUFDSkMsTUFBTTtJQUNSO0NBRUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25zdGFudHMvaW5kZXguanM/MzczNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZXhwbG9yZVdvcmxkcyA9IFtcbiAge1xuICAgIGlkOiAnRnJvbnQnLFxuICAgIGltZ1VybDogJy9yZWFjdGxvZ28ucG5nJyxcbiAgICB0aXRsZTogJ01vZGVybiBGcm9udC1FbmQgRnJhbWV3b3JrcycsXG4gIH0sXG4gIHtcbiAgICBpZDogJ1dlYicsXG4gICAgaW1nVXJsOiAnLi9zdHlsZS5wbmcnLFxuICAgIHRpdGxlOiAnTW9kZXJuIFN0eWxpbmcgVGVjaG5vbG9neScsXG4gIH0sXG4gIHtcbiAgICBpZDogJ1N5bnRheCcsXG4gICAgaW1nVXJsOiAnLi9KUy5qcGcnLFxuICAgIHRpdGxlOiAnMjAyMS0gSFRNTCwgQ1NTICYgSmF2YVNjcmlwdCBTeW50YXgnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdDb3JlJyxcbiAgICBpbWdVcmw6ICcuL1JlYWN0LmpwZycsXG4gICAgdGl0bGU6ICcyMDIyLSBTb2xpZGl0eSBTbWFydCBDb250cmFjdHMgJiBSZWFjdCBVWC9VSScsXG4gIH0sXG4gIHtcbiAgICBpZDogJ0Z1dHVyZScsXG4gICAgaW1nVXJsOiAnLi9uZXR3b3JrMS5qcGcnLFxuICAgIHRpdGxlOiAnMjAyMy0gQ29udGludWluZyBUbyBCdWlsZCAmIExlYXJuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzdGFydGluZ0ZlYXR1cmVzID0gW1xuICAnU21hcnQgQ29udHJhY3RzIEJ1aWx0IFdpdGggU29saWRpdHksIFdlYjMuSlMgJiBXZWIzLlBZJyxcbiAgJ0Zyb250IEVuZCBBcHBsaWNhdGlvbnMgQnVpbHQgV2l0aCBSZWFjdCBGcmFtZXdvcmtzJyxcbiAgJ0Jsb2NraGFpbiBUb29scyBMaWtlIENoYWlubGluaywgQWxjaGVteSwgT3BlblplcHBlbGluLCBXYWxsZXQgSW50ZXJncmF0aW9uIGFuZCBtdWNoIG1vcmUnLFxuXTtcblxuXG5leHBvcnQgY29uc3QgbmV3RmVhdHVyZXMgPSBbXG4gIHtcbiAgICBpbWdVcmw6ICcvRXRoZXJldW0ucG5nJyxcbiAgICB0aXRsZTogJ0V0aGVyIENyb3dkZnVuZCcsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdBIGNyb3dkZnVuZGluZyBzbWFydCBjb250cmFjdCB3aXRoIGEgVml0ZSBmcm9udGVuZC4gVGhpcyBhcHBsaWNhdG9pbiBhbGxvd3MgdXNlcnMgdG8gY3JlYXRlIHRoZWlyIG93biBjYW1wYWlnbiBhcyB3ZWxsIGFzIGZ1bmQgb3RoZXJzLiBGdW5kaW5nIGlzIGRvbmUgYnkgY29ubmVjdGluZyB5b3VyIE1ldGFNYXNrIHdhbGxldC4nLFxuICAgIGxpbms6ICdodHRwczovL3dlYjNzaXJlLmNvbS8nLFxuICB9LFxuICB7XG4gICAgaW1nVXJsOiAnL3JlYWN0LXNlZWtsb2dvLmNvbS5zdmcnLFxuICAgIHRpdGxlOiAnTXkgUG9yZm9saW8nLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnSSBidWlsdCB0d28gc2VwZXJhdGUgcG9yZm9saW8gd2Vic2l0ZXMgdXRpbGl6aW5nIGRpZmZlcmVudCBzdHlsZXMuIE15IGJjaGFpbmRldmVsb3Blci5jb20gd2Vic2l0ZSB1c2VzIE5leHQuSlMgYW5kIGhhcyBhIGRpZmZlcmVudCBkZXNpZ24uJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9iY2hhaW5kZXZlbG9wZXIuY29tLycsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgaW5zaWdodHMgPSBbXG4gIHtcbiAgICBpbWdVcmw6ICcvRkNDLmpwZycsXG4gICAgdGl0bGU6ICdTb2xpZGl0eSwgQmxvY2tjaGFpbiwgRnVsbFN0YWNrIFdlYjMgSlMgVHV0b3JpYWwnLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnVGhpcyBjb3Vyc2UgY292ZXJlZCB0aGUgY29yZSBjb25jZXB0cyByZWxhdGVkIHRvIGJsb2NrY2hhaW4gYW5kIHNtYXJ0IGNvbnRyYWN0cy4gSSB1c2VkIEhhcmRoYXQsIFNvbGlkaXR5LCBFdGhlcnNKUyBhbmQgV2ViM0pTIHRvIGNyZWF0ZSBhbiBhcnJheSBvZiBwcm9qZWN0cy4gJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1neU13WHVKcmJKUScgICAgXG4gIH0sXG4gIHtcbiAgICBpbWdVcmw6ICcvRkNDLmpwZycsXG4gICAgdGl0bGU6ICdTb2xpZGl0eSwgQmxvY2tjaGFpbiBQeXRob24gVHV0b3JpYWwnLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnVGhpcyBjb3Vyc2UgY292ZXJlZCB0aGUgY29yZSBjb25jZXB0cyByZWxhdGVkIHRvIGJsb2NrY2hhaW4gYW5kIHNtYXJ0IGNvbnRyYWN0cy5JIHVzZWQgV2ViMy5weSBhbmQgU29saWRpdHkgdG8gY3JlYXRlIGFuIGFycmF5IG9mIGJsb2NrY2hhaW4gcHJvamVjdHMnLFxuICAgIGxpbms6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PU01NzZXR2lEQmRRJnQ9MTdzJ1xuICB9LFxuICB7XG4gICAgaW1nVXJsOiAnaHR0cHM6Ly9zdGF0aWMtYXNzZXRzLmNvZGVjYWRlbXkuY29tL2NvbXBvbmVudHMvY3VycmljdWx1bS9wYXRoL2Zyb250LWVuZC1lbmdpbmVlci1jYXJlZXItcGF0aC9jdXJyaWN1bHVtLWNhcmQuc3ZnJyxcbiAgICB0aXRsZTogJ0NvZGVDYWRlbXksIEZyb250LUVuZCBFbmdpbmVlcicsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdGdWxsIEZyb250LUVuZCBjb3Vyc2UgY292ZXJpbmcgSFRNTCwgQ1NTLCBKYXZhU2NyaXB0LCBSZWFjdCBhbmQgbXVjaCBtb3JlLicsXG4gICAgbGluazogJ2h0dHBzOi8vam9pbi5jb2RlY2FkZW15LmNvbS9sZWFybi9wYXRocy9mcm9udC1lbmQtZW5naW5lZXItY2FyZWVyLXBhdGgvJ1xuICB9LFxuICBcbl07XG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiZXhwbG9yZVdvcmxkcyIsImlkIiwiaW1nVXJsIiwidGl0bGUiLCJzdGFydGluZ0ZlYXR1cmVzIiwibmV3RmVhdHVyZXMiLCJzdWJ0aXRsZSIsImxpbmsiLCJpbnNpZ2h0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ })

});