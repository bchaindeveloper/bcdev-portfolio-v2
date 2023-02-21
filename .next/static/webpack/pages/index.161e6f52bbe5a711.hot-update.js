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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exploreWorlds\": function() { return /* binding */ exploreWorlds; },\n/* harmony export */   \"insights\": function() { return /* binding */ insights; },\n/* harmony export */   \"newFeatures\": function() { return /* binding */ newFeatures; },\n/* harmony export */   \"startingFeatures\": function() { return /* binding */ startingFeatures; }\n/* harmony export */ });\nconst exploreWorlds = [\n    {\n        id: \"BTC\",\n        imgUrl: \"/reactlogo.png\",\n        title: \"Modern UX/UI\"\n    },\n    {\n        id: \"Web\",\n        imgUrl: \"./style.png\",\n        title: \"Modern Styling Technology\"\n    },\n    {\n        id: \"Syntax\",\n        imgUrl: \"./js.png\",\n        title: \"JavaScript Developer\"\n    },\n    {\n        id: \"Core\",\n        imgUrl: \"./React.jpg\",\n        title: \"2022- Solidity Smart Contracts & React UX/UI\"\n    },\n    {\n        id: \"Future\",\n        imgUrl: \"./network1.jpg\",\n        title: \"2023- Continuing To Build & Learn\"\n    }\n];\nconst startingFeatures = [\n    \"Smart Contracts Built With Solidity, Web3.JS & Web3.PY\",\n    \"Front End Applications Built With React Frameworks\",\n    \"Blockhain Tools Like Chainlink, Alchemy, OpenZeppelin, Wallet Intergration and much more\"\n];\nconst newFeatures = [\n    {\n        imgUrl: \"/Ethereum.png\",\n        title: \"Ether Crowdfund\",\n        subtitle: \"A crowdfunding smart contract with a Vite frontend. This applicatoin allows users to create their own campaign as well as fund others. Funding is done by connecting your MetaMask wallet.\",\n        link: \"https://web3sire.com/\"\n    },\n    {\n        imgUrl: \"/react-seeklogo.com.svg\",\n        title: \"My Porfolio\",\n        subtitle: \"I built two seperate porfolio websites utilizing different styles. My bchaindeveloper.com website uses Next.JS and has a different design.\",\n        link: \"https://bchaindeveloper.com/\"\n    }\n];\nconst insights = [\n    {\n        imgUrl: \"/FCC.jpg\",\n        title: \"Solidity, Blockchain, FullStack Web3 JS Tutorial\",\n        subtitle: \"This course covered the core concepts related to blockchain and smart contracts. I used Hardhat, Solidity, EthersJS and Web3JS to create an array of projects. \",\n        link: \"https://www.youtube.com/watch?v=gyMwXuJrbJQ\"\n    },\n    {\n        imgUrl: \"/FCC.jpg\",\n        title: \"Solidity, Blockchain Python Tutorial\",\n        subtitle: \"This course covered the core concepts related to blockchain and smart contracts.I used Web3.py and Solidity to create an array of blockchain projects\",\n        link: \"https://www.youtube.com/watch?v=M576WGiDBdQ&t=17s\"\n    },\n    {\n        imgUrl: \"https://static-assets.codecademy.com/components/curriculum/path/front-end-engineer-career-path/curriculum-card.svg\",\n        title: \"CodeCademy, Front-End Engineer\",\n        subtitle: \"Full Front-End course covering HTML, CSS, JavaScript, React and much more.\",\n        link: \"https://join.codecademy.com/learn/paths/front-end-engineer-career-path/\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLGdCQUFnQjtJQUMzQjtRQUNFQyxJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtDQUNELENBQUM7QUFFSyxNQUFNQyxtQkFBbUI7SUFDOUI7SUFDQTtJQUNBO0NBQ0QsQ0FBQztBQUdLLE1BQU1DLGNBQWM7SUFDekI7UUFDRUgsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7UUFDSkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7UUFDSkMsTUFBTTtJQUNSO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLFdBQVc7SUFDdEI7UUFDRU4sUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7UUFDSkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7UUFDSkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7UUFDSkMsTUFBTTtJQUNSO0NBRUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25zdGFudHMvaW5kZXguanM/MzczNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZXhwbG9yZVdvcmxkcyA9IFtcbiAge1xuICAgIGlkOiAnQlRDJyxcbiAgICBpbWdVcmw6ICcvcmVhY3Rsb2dvLnBuZycsXG4gICAgdGl0bGU6ICdNb2Rlcm4gVVgvVUknLFxuICB9LFxuICB7XG4gICAgaWQ6ICdXZWInLFxuICAgIGltZ1VybDogJy4vc3R5bGUucG5nJyxcbiAgICB0aXRsZTogJ01vZGVybiBTdHlsaW5nIFRlY2hub2xvZ3knLFxuICB9LFxuICB7XG4gICAgaWQ6ICdTeW50YXgnLFxuICAgIGltZ1VybDogJy4vanMucG5nJyxcbiAgICB0aXRsZTogJ0phdmFTY3JpcHQgRGV2ZWxvcGVyJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnQ29yZScsXG4gICAgaW1nVXJsOiAnLi9SZWFjdC5qcGcnLFxuICAgIHRpdGxlOiAnMjAyMi0gU29saWRpdHkgU21hcnQgQ29udHJhY3RzICYgUmVhY3QgVVgvVUknLFxuICB9LFxuICB7XG4gICAgaWQ6ICdGdXR1cmUnLFxuICAgIGltZ1VybDogJy4vbmV0d29yazEuanBnJyxcbiAgICB0aXRsZTogJzIwMjMtIENvbnRpbnVpbmcgVG8gQnVpbGQgJiBMZWFybicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc3RhcnRpbmdGZWF0dXJlcyA9IFtcbiAgJ1NtYXJ0IENvbnRyYWN0cyBCdWlsdCBXaXRoIFNvbGlkaXR5LCBXZWIzLkpTICYgV2ViMy5QWScsXG4gICdGcm9udCBFbmQgQXBwbGljYXRpb25zIEJ1aWx0IFdpdGggUmVhY3QgRnJhbWV3b3JrcycsXG4gICdCbG9ja2hhaW4gVG9vbHMgTGlrZSBDaGFpbmxpbmssIEFsY2hlbXksIE9wZW5aZXBwZWxpbiwgV2FsbGV0IEludGVyZ3JhdGlvbiBhbmQgbXVjaCBtb3JlJyxcbl07XG5cblxuZXhwb3J0IGNvbnN0IG5ld0ZlYXR1cmVzID0gW1xuICB7XG4gICAgaW1nVXJsOiAnL0V0aGVyZXVtLnBuZycsXG4gICAgdGl0bGU6ICdFdGhlciBDcm93ZGZ1bmQnLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnQSBjcm93ZGZ1bmRpbmcgc21hcnQgY29udHJhY3Qgd2l0aCBhIFZpdGUgZnJvbnRlbmQuIFRoaXMgYXBwbGljYXRvaW4gYWxsb3dzIHVzZXJzIHRvIGNyZWF0ZSB0aGVpciBvd24gY2FtcGFpZ24gYXMgd2VsbCBhcyBmdW5kIG90aGVycy4gRnVuZGluZyBpcyBkb25lIGJ5IGNvbm5lY3RpbmcgeW91ciBNZXRhTWFzayB3YWxsZXQuJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly93ZWIzc2lyZS5jb20vJyxcbiAgfSxcbiAge1xuICAgIGltZ1VybDogJy9yZWFjdC1zZWVrbG9nby5jb20uc3ZnJyxcbiAgICB0aXRsZTogJ015IFBvcmZvbGlvJyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ0kgYnVpbHQgdHdvIHNlcGVyYXRlIHBvcmZvbGlvIHdlYnNpdGVzIHV0aWxpemluZyBkaWZmZXJlbnQgc3R5bGVzLiBNeSBiY2hhaW5kZXZlbG9wZXIuY29tIHdlYnNpdGUgdXNlcyBOZXh0LkpTIGFuZCBoYXMgYSBkaWZmZXJlbnQgZGVzaWduLicsXG4gICAgbGluazogJ2h0dHBzOi8vYmNoYWluZGV2ZWxvcGVyLmNvbS8nLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGluc2lnaHRzID0gW1xuICB7XG4gICAgaW1nVXJsOiAnL0ZDQy5qcGcnLFxuICAgIHRpdGxlOiAnU29saWRpdHksIEJsb2NrY2hhaW4sIEZ1bGxTdGFjayBXZWIzIEpTIFR1dG9yaWFsJyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ1RoaXMgY291cnNlIGNvdmVyZWQgdGhlIGNvcmUgY29uY2VwdHMgcmVsYXRlZCB0byBibG9ja2NoYWluIGFuZCBzbWFydCBjb250cmFjdHMuIEkgdXNlZCBIYXJkaGF0LCBTb2xpZGl0eSwgRXRoZXJzSlMgYW5kIFdlYjNKUyB0byBjcmVhdGUgYW4gYXJyYXkgb2YgcHJvamVjdHMuICcsXG4gICAgbGluazogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Z3lNd1h1SnJiSlEnICAgIFxuICB9LFxuICB7XG4gICAgaW1nVXJsOiAnL0ZDQy5qcGcnLFxuICAgIHRpdGxlOiAnU29saWRpdHksIEJsb2NrY2hhaW4gUHl0aG9uIFR1dG9yaWFsJyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ1RoaXMgY291cnNlIGNvdmVyZWQgdGhlIGNvcmUgY29uY2VwdHMgcmVsYXRlZCB0byBibG9ja2NoYWluIGFuZCBzbWFydCBjb250cmFjdHMuSSB1c2VkIFdlYjMucHkgYW5kIFNvbGlkaXR5IHRvIGNyZWF0ZSBhbiBhcnJheSBvZiBibG9ja2NoYWluIHByb2plY3RzJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1NNTc2V0dpREJkUSZ0PTE3cydcbiAgfSxcbiAge1xuICAgIGltZ1VybDogJ2h0dHBzOi8vc3RhdGljLWFzc2V0cy5jb2RlY2FkZW15LmNvbS9jb21wb25lbnRzL2N1cnJpY3VsdW0vcGF0aC9mcm9udC1lbmQtZW5naW5lZXItY2FyZWVyLXBhdGgvY3VycmljdWx1bS1jYXJkLnN2ZycsXG4gICAgdGl0bGU6ICdDb2RlQ2FkZW15LCBGcm9udC1FbmQgRW5naW5lZXInLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnRnVsbCBGcm9udC1FbmQgY291cnNlIGNvdmVyaW5nIEhUTUwsIENTUywgSmF2YVNjcmlwdCwgUmVhY3QgYW5kIG11Y2ggbW9yZS4nLFxuICAgIGxpbms6ICdodHRwczovL2pvaW4uY29kZWNhZGVteS5jb20vbGVhcm4vcGF0aHMvZnJvbnQtZW5kLWVuZ2luZWVyLWNhcmVlci1wYXRoLydcbiAgfSxcbiAgXG5dO1xuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbImV4cGxvcmVXb3JsZHMiLCJpZCIsImltZ1VybCIsInRpdGxlIiwic3RhcnRpbmdGZWF0dXJlcyIsIm5ld0ZlYXR1cmVzIiwic3VidGl0bGUiLCJsaW5rIiwiaW5zaWdodHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ })

});