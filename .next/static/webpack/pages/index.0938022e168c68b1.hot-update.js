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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exploreWorlds\": function() { return /* binding */ exploreWorlds; },\n/* harmony export */   \"insights\": function() { return /* binding */ insights; },\n/* harmony export */   \"newFeatures\": function() { return /* binding */ newFeatures; },\n/* harmony export */   \"startingFeatures\": function() { return /* binding */ startingFeatures; }\n/* harmony export */ });\nconst exploreWorlds = [\n    {\n        id: \"BTC\",\n        imgUrl: \"/BTC1.jpg\",\n        title: \"2018-2019 Blockchain & Cryptocurrency\"\n    },\n    {\n        id: \"Web\",\n        imgUrl: \"./network.jpg\",\n        title: \"2020- WordPress & Web Fundamentals\"\n    },\n    {\n        id: \"Syntax\",\n        imgUrl: \"./JS.jpg\",\n        title: \"2021- HTML, CSS & JavaScript Syntax\"\n    },\n    {\n        id: \"Core\",\n        imgUrl: \"./React.jpg\",\n        title: \"2022- Solidity Smart Contracts & React UX/UI\"\n    },\n    {\n        id: \"Future\",\n        imgUrl: \"./network1.jpg\",\n        title: \"2023- Continuing To Build & Learn\"\n    }\n];\nconst startingFeatures = [\n    \"Smart Contracts Built With Solidity, Web3.JS & Web3.PY\",\n    \"Front End Applications Built With React Frameworks\",\n    \"Blockhain Tools Like Chainlink, IPFS, Wallet Intergration and much more\"\n];\nconst newFeatures = [\n    {\n        imgUrl: \"/Ethereum.png\",\n        title: \"Hardhat Lottery\",\n        subtitle: \"A smart contract built on the Ethereum blockchain that allows wallets to enter funds into the lottery. The contract then randomly picks a winner in a decentralized manner, using Chainlink VRF. The front end is build with Next.JS allowing users to easily interact with the lottery \",\n        link: \"https://web3sire.com/\"\n    },\n    {\n        imgUrl: \"/Ethereum.png\",\n        title: \"Hardhat Fund Me\",\n        subtitle: \"A smart contract built on the Ethereum blockchain that allows other wallets to fund the contract.\"\n    }\n];\nconst insights = [\n    {\n        imgUrl: \"/FCC.jpg\",\n        title: \"Solidity, Blockchain, FullStack Web3 JS Tutorial\",\n        subtitle: \"This course covered the core concepts related to blockchain and smart contracts. I used Hardhat, Solidity, EthersJS and Web3Js to create an array of projects. \",\n        link: \"https://www.youtube.com/watch?v=gyMwXuJrbJQ\"\n    },\n    {\n        imgUrl: \"/FCC.jpg\",\n        title: \"Solidity, Blockchain Python Tutorial\",\n        subtitle: \"This course covered the core concepts related to blockchain and smart contracts.I used Web3.py and Solidity to create an array of blockchain projects\",\n        link: \"https://www.youtube.com/watch?v=M576WGiDBdQ&t=17s\"\n    },\n    {\n        imgUrl: \"https://static-assets.codecademy.com/components/curriculum/path/front-end-engineer-career-path/curriculum-card.svg\",\n        title: \"CodeCademy, Front-End Engineer\",\n        subtitle: \"Full Front-End course covering HTML, CSS, JavaScript, React and much more.\",\n        link: \"https://join.codecademy.com/learn/paths/front-end-engineer-career-path/\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLGdCQUFnQjtJQUMzQjtRQUNFQyxJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtDQUNELENBQUM7QUFFSyxNQUFNQyxtQkFBbUI7SUFDOUI7SUFDQTtJQUNBO0NBQ0QsQ0FBQztBQUdLLE1BQU1DLGNBQWM7SUFDekI7UUFDRUgsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7UUFDSkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7SUFDTjtDQUNELENBQUM7QUFFSyxNQUFNRSxXQUFXO0lBQ3RCO1FBQ0VOLFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNJO1FBQ0pDLE1BQU07SUFDUjtJQUNBO1FBQ0VMLFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNJO1FBQ0pDLE1BQU07SUFDUjtJQUNBO1FBQ0VMLFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNJO1FBQ0pDLE1BQU07SUFDUjtDQUVELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2luZGV4LmpzPzM3MzciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGV4cGxvcmVXb3JsZHMgPSBbXG4gIHtcbiAgICBpZDogJ0JUQycsXG4gICAgaW1nVXJsOiAnL0JUQzEuanBnJyxcbiAgICB0aXRsZTogJzIwMTgtMjAxOSBCbG9ja2NoYWluICYgQ3J5cHRvY3VycmVuY3knLFxuICB9LFxuICB7XG4gICAgaWQ6ICdXZWInLFxuICAgIGltZ1VybDogJy4vbmV0d29yay5qcGcnLFxuICAgIHRpdGxlOiAnMjAyMC0gV29yZFByZXNzICYgV2ViIEZ1bmRhbWVudGFscycsXG4gIH0sXG4gIHtcbiAgICBpZDogJ1N5bnRheCcsXG4gICAgaW1nVXJsOiAnLi9KUy5qcGcnLFxuICAgIHRpdGxlOiAnMjAyMS0gSFRNTCwgQ1NTICYgSmF2YVNjcmlwdCBTeW50YXgnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdDb3JlJyxcbiAgICBpbWdVcmw6ICcuL1JlYWN0LmpwZycsXG4gICAgdGl0bGU6ICcyMDIyLSBTb2xpZGl0eSBTbWFydCBDb250cmFjdHMgJiBSZWFjdCBVWC9VSScsXG4gIH0sXG4gIHtcbiAgICBpZDogJ0Z1dHVyZScsXG4gICAgaW1nVXJsOiAnLi9uZXR3b3JrMS5qcGcnLFxuICAgIHRpdGxlOiAnMjAyMy0gQ29udGludWluZyBUbyBCdWlsZCAmIExlYXJuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzdGFydGluZ0ZlYXR1cmVzID0gW1xuICAnU21hcnQgQ29udHJhY3RzIEJ1aWx0IFdpdGggU29saWRpdHksIFdlYjMuSlMgJiBXZWIzLlBZJyxcbiAgJ0Zyb250IEVuZCBBcHBsaWNhdGlvbnMgQnVpbHQgV2l0aCBSZWFjdCBGcmFtZXdvcmtzJyxcbiAgJ0Jsb2NraGFpbiBUb29scyBMaWtlIENoYWlubGluaywgSVBGUywgV2FsbGV0IEludGVyZ3JhdGlvbiBhbmQgbXVjaCBtb3JlJyxcbl07XG5cblxuZXhwb3J0IGNvbnN0IG5ld0ZlYXR1cmVzID0gW1xuICB7XG4gICAgaW1nVXJsOiAnL0V0aGVyZXVtLnBuZycsXG4gICAgdGl0bGU6ICdIYXJkaGF0IExvdHRlcnknLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnQSBzbWFydCBjb250cmFjdCBidWlsdCBvbiB0aGUgRXRoZXJldW0gYmxvY2tjaGFpbiB0aGF0IGFsbG93cyB3YWxsZXRzIHRvIGVudGVyIGZ1bmRzIGludG8gdGhlIGxvdHRlcnkuIFRoZSBjb250cmFjdCB0aGVuIHJhbmRvbWx5IHBpY2tzIGEgd2lubmVyIGluIGEgZGVjZW50cmFsaXplZCBtYW5uZXIsIHVzaW5nIENoYWlubGluayBWUkYuIFRoZSBmcm9udCBlbmQgaXMgYnVpbGQgd2l0aCBOZXh0LkpTIGFsbG93aW5nIHVzZXJzIHRvIGVhc2lseSBpbnRlcmFjdCB3aXRoIHRoZSBsb3R0ZXJ5ICcsXG4gICAgbGluazogJ2h0dHBzOi8vd2ViM3NpcmUuY29tLycsXG4gIH0sXG4gIHtcbiAgICBpbWdVcmw6ICcvRXRoZXJldW0ucG5nJyxcbiAgICB0aXRsZTogJ0hhcmRoYXQgRnVuZCBNZScsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdBIHNtYXJ0IGNvbnRyYWN0IGJ1aWx0IG9uIHRoZSBFdGhlcmV1bSBibG9ja2NoYWluIHRoYXQgYWxsb3dzIG90aGVyIHdhbGxldHMgdG8gZnVuZCB0aGUgY29udHJhY3QuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBpbnNpZ2h0cyA9IFtcbiAge1xuICAgIGltZ1VybDogJy9GQ0MuanBnJyxcbiAgICB0aXRsZTogJ1NvbGlkaXR5LCBCbG9ja2NoYWluLCBGdWxsU3RhY2sgV2ViMyBKUyBUdXRvcmlhbCcsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdUaGlzIGNvdXJzZSBjb3ZlcmVkIHRoZSBjb3JlIGNvbmNlcHRzIHJlbGF0ZWQgdG8gYmxvY2tjaGFpbiBhbmQgc21hcnQgY29udHJhY3RzLiBJIHVzZWQgSGFyZGhhdCwgU29saWRpdHksIEV0aGVyc0pTIGFuZCBXZWIzSnMgdG8gY3JlYXRlIGFuIGFycmF5IG9mIHByb2plY3RzLiAnLFxuICAgIGxpbms6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWd5TXdYdUpyYkpRJyAgICBcbiAgfSxcbiAge1xuICAgIGltZ1VybDogJy9GQ0MuanBnJyxcbiAgICB0aXRsZTogJ1NvbGlkaXR5LCBCbG9ja2NoYWluIFB5dGhvbiBUdXRvcmlhbCcsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdUaGlzIGNvdXJzZSBjb3ZlcmVkIHRoZSBjb3JlIGNvbmNlcHRzIHJlbGF0ZWQgdG8gYmxvY2tjaGFpbiBhbmQgc21hcnQgY29udHJhY3RzLkkgdXNlZCBXZWIzLnB5IGFuZCBTb2xpZGl0eSB0byBjcmVhdGUgYW4gYXJyYXkgb2YgYmxvY2tjaGFpbiBwcm9qZWN0cycsXG4gICAgbGluazogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9TTU3NldHaURCZFEmdD0xN3MnXG4gIH0sXG4gIHtcbiAgICBpbWdVcmw6ICdodHRwczovL3N0YXRpYy1hc3NldHMuY29kZWNhZGVteS5jb20vY29tcG9uZW50cy9jdXJyaWN1bHVtL3BhdGgvZnJvbnQtZW5kLWVuZ2luZWVyLWNhcmVlci1wYXRoL2N1cnJpY3VsdW0tY2FyZC5zdmcnLFxuICAgIHRpdGxlOiAnQ29kZUNhZGVteSwgRnJvbnQtRW5kIEVuZ2luZWVyJyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ0Z1bGwgRnJvbnQtRW5kIGNvdXJzZSBjb3ZlcmluZyBIVE1MLCBDU1MsIEphdmFTY3JpcHQsIFJlYWN0IGFuZCBtdWNoIG1vcmUuJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9qb2luLmNvZGVjYWRlbXkuY29tL2xlYXJuL3BhdGhzL2Zyb250LWVuZC1lbmdpbmVlci1jYXJlZXItcGF0aC8nXG4gIH0sXG4gIFxuXTtcblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJleHBsb3JlV29ybGRzIiwiaWQiLCJpbWdVcmwiLCJ0aXRsZSIsInN0YXJ0aW5nRmVhdHVyZXMiLCJuZXdGZWF0dXJlcyIsInN1YnRpdGxlIiwibGluayIsImluc2lnaHRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ })

});