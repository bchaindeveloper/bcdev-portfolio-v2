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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exploreWorlds\": function() { return /* binding */ exploreWorlds; },\n/* harmony export */   \"insights\": function() { return /* binding */ insights; },\n/* harmony export */   \"newFeatures\": function() { return /* binding */ newFeatures; },\n/* harmony export */   \"startingFeatures\": function() { return /* binding */ startingFeatures; }\n/* harmony export */ });\nconst exploreWorlds = [\n    {\n        id: \"BTC\",\n        imgUrl: \"/reactlogo.png\",\n        title: \"Modern UX/UI\"\n    },\n    {\n        id: \"Web\",\n        imgUrl: \"./style.png\",\n        title: \"Modern Styling\"\n    },\n    {\n        id: \"Syntax\",\n        imgUrl: \"./js.png\",\n        title: \"JavaScript Development\"\n    },\n    {\n        id: \"Core\",\n        imgUrl: \"./Solidity.png\",\n        title: \"Solidity Development\"\n    },\n    {\n        id: \"Future\",\n        imgUrl: \"./mongo.png\",\n        title: \"MongoDB Development\"\n    }\n];\nconst startingFeatures = [\n    \"Front-End Engineer \",\n    \"Front End Applications Built With React Frameworks\",\n    \"Blockhain Tools Like Chainlink, Alchemy, OpenZeppelin, Wallet Intergration and much more\"\n];\nconst newFeatures = [\n    {\n        imgUrl: \"/graphql.png\",\n        title: \"GraphQL Blog\",\n        subtitle: \"A GraphQL blog on Web3, Blockchain, Cryptocureency and development tools. This project uses Next.js, TailwindCSS, GraphQL and GraphCMS.\",\n        link: \"https://bchaindeveloper.com/\"\n    },\n    {\n        imgUrl: \"/Ethereum.png\",\n        title: \"Ether Crowdfund\",\n        subtitle: \"A crowdfunding smart contract with a Vite frontend. This applicatoin allows users to create their own campaign as well as fund others. Funding is done by connecting your MetaMask wallet.\",\n        link: \"https://web3sire.com/\"\n    }\n];\nconst insights = [\n    {\n        imgUrl: \"https://static-assets.codecademy.com/components/curriculum/path/front-end-engineer-career-path/curriculum-card.svg\",\n        title: \"CodeCademy, Front-End Engineer\",\n        subtitle: \"Full Front-End course covering HTML, CSS, JavaScript, React and much more.\",\n        link: \"https://join.codecademy.com/learn/paths/front-end-engineer-career-path/\"\n    },\n    {\n        imgUrl: \"/FCC.jpg\",\n        title: \"Solidity, Blockchain, FullStack Web3 JS Tutorial\",\n        subtitle: \"This course covered the core concepts related to blockchain and smart contracts. I used Hardhat, Solidity, EthersJS and Web3JS to create an array of projects. \",\n        link: \"https://www.youtube.com/watch?v=gyMwXuJrbJQ\"\n    },\n    {\n        imgUrl: \"/FCC.jpg\",\n        title: \"Solidity, Blockchain Python Tutorial\",\n        subtitle: \"This course covered the core concepts related to blockchain and smart contracts.I used Web3.py and Solidity to create an array of blockchain projects\",\n        link: \"https://www.youtube.com/watch?v=M576WGiDBdQ&t=17s\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLGdCQUFnQjtJQUMzQjtRQUNFQyxJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtDQUNELENBQUM7QUFFSyxNQUFNQyxtQkFBbUI7SUFDOUI7SUFDQTtJQUNBO0NBQ0QsQ0FBQztBQUdLLE1BQU1DLGNBQWM7SUFDekI7UUFDRUgsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7UUFDSkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7UUFDSkMsTUFBTTtJQUNSO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLFdBQVc7SUFDdEI7UUFDRU4sUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7UUFDSkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7UUFDSkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7UUFDSkMsTUFBTTtJQUNSO0NBRUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25zdGFudHMvaW5kZXguanM/MzczNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZXhwbG9yZVdvcmxkcyA9IFtcbiAge1xuICAgIGlkOiAnQlRDJyxcbiAgICBpbWdVcmw6ICcvcmVhY3Rsb2dvLnBuZycsXG4gICAgdGl0bGU6ICdNb2Rlcm4gVVgvVUknLFxuICB9LFxuICB7XG4gICAgaWQ6ICdXZWInLFxuICAgIGltZ1VybDogJy4vc3R5bGUucG5nJyxcbiAgICB0aXRsZTogJ01vZGVybiBTdHlsaW5nJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnU3ludGF4JyxcbiAgICBpbWdVcmw6ICcuL2pzLnBuZycsXG4gICAgdGl0bGU6ICdKYXZhU2NyaXB0IERldmVsb3BtZW50JyxcbiAgfSxcbiAge1xuICAgIGlkOiAnQ29yZScsXG4gICAgaW1nVXJsOiAnLi9Tb2xpZGl0eS5wbmcnLFxuICAgIHRpdGxlOiAnU29saWRpdHkgRGV2ZWxvcG1lbnQnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdGdXR1cmUnLFxuICAgIGltZ1VybDogJy4vbW9uZ28ucG5nJyxcbiAgICB0aXRsZTogJ01vbmdvREIgRGV2ZWxvcG1lbnQnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHN0YXJ0aW5nRmVhdHVyZXMgPSBbXG4gICdGcm9udC1FbmQgRW5naW5lZXIgJyxcbiAgJ0Zyb250IEVuZCBBcHBsaWNhdGlvbnMgQnVpbHQgV2l0aCBSZWFjdCBGcmFtZXdvcmtzJyxcbiAgJ0Jsb2NraGFpbiBUb29scyBMaWtlIENoYWlubGluaywgQWxjaGVteSwgT3BlblplcHBlbGluLCBXYWxsZXQgSW50ZXJncmF0aW9uIGFuZCBtdWNoIG1vcmUnLFxuXTtcblxuXG5leHBvcnQgY29uc3QgbmV3RmVhdHVyZXMgPSBbXG4gIHtcbiAgICBpbWdVcmw6ICcvZ3JhcGhxbC5wbmcnLFxuICAgIHRpdGxlOiAnR3JhcGhRTCBCbG9nJyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ0EgR3JhcGhRTCBibG9nIG9uIFdlYjMsIEJsb2NrY2hhaW4sIENyeXB0b2N1cmVlbmN5IGFuZCBkZXZlbG9wbWVudCB0b29scy4gVGhpcyBwcm9qZWN0IHVzZXMgTmV4dC5qcywgVGFpbHdpbmRDU1MsIEdyYXBoUUwgYW5kIEdyYXBoQ01TLicsXG4gICAgbGluazogJ2h0dHBzOi8vYmNoYWluZGV2ZWxvcGVyLmNvbS8nLFxuICB9LFxuICB7XG4gICAgaW1nVXJsOiAnL0V0aGVyZXVtLnBuZycsXG4gICAgdGl0bGU6ICdFdGhlciBDcm93ZGZ1bmQnLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnQSBjcm93ZGZ1bmRpbmcgc21hcnQgY29udHJhY3Qgd2l0aCBhIFZpdGUgZnJvbnRlbmQuIFRoaXMgYXBwbGljYXRvaW4gYWxsb3dzIHVzZXJzIHRvIGNyZWF0ZSB0aGVpciBvd24gY2FtcGFpZ24gYXMgd2VsbCBhcyBmdW5kIG90aGVycy4gRnVuZGluZyBpcyBkb25lIGJ5IGNvbm5lY3RpbmcgeW91ciBNZXRhTWFzayB3YWxsZXQuJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly93ZWIzc2lyZS5jb20vJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBpbnNpZ2h0cyA9IFtcbiAge1xuICAgIGltZ1VybDogJ2h0dHBzOi8vc3RhdGljLWFzc2V0cy5jb2RlY2FkZW15LmNvbS9jb21wb25lbnRzL2N1cnJpY3VsdW0vcGF0aC9mcm9udC1lbmQtZW5naW5lZXItY2FyZWVyLXBhdGgvY3VycmljdWx1bS1jYXJkLnN2ZycsXG4gICAgdGl0bGU6ICdDb2RlQ2FkZW15LCBGcm9udC1FbmQgRW5naW5lZXInLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnRnVsbCBGcm9udC1FbmQgY291cnNlIGNvdmVyaW5nIEhUTUwsIENTUywgSmF2YVNjcmlwdCwgUmVhY3QgYW5kIG11Y2ggbW9yZS4nLFxuICAgIGxpbms6ICdodHRwczovL2pvaW4uY29kZWNhZGVteS5jb20vbGVhcm4vcGF0aHMvZnJvbnQtZW5kLWVuZ2luZWVyLWNhcmVlci1wYXRoLydcbiAgfSxcbiAge1xuICAgIGltZ1VybDogJy9GQ0MuanBnJyxcbiAgICB0aXRsZTogJ1NvbGlkaXR5LCBCbG9ja2NoYWluLCBGdWxsU3RhY2sgV2ViMyBKUyBUdXRvcmlhbCcsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdUaGlzIGNvdXJzZSBjb3ZlcmVkIHRoZSBjb3JlIGNvbmNlcHRzIHJlbGF0ZWQgdG8gYmxvY2tjaGFpbiBhbmQgc21hcnQgY29udHJhY3RzLiBJIHVzZWQgSGFyZGhhdCwgU29saWRpdHksIEV0aGVyc0pTIGFuZCBXZWIzSlMgdG8gY3JlYXRlIGFuIGFycmF5IG9mIHByb2plY3RzLiAnLFxuICAgIGxpbms6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWd5TXdYdUpyYkpRJyAgICBcbiAgfSxcbiAge1xuICAgIGltZ1VybDogJy9GQ0MuanBnJyxcbiAgICB0aXRsZTogJ1NvbGlkaXR5LCBCbG9ja2NoYWluIFB5dGhvbiBUdXRvcmlhbCcsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdUaGlzIGNvdXJzZSBjb3ZlcmVkIHRoZSBjb3JlIGNvbmNlcHRzIHJlbGF0ZWQgdG8gYmxvY2tjaGFpbiBhbmQgc21hcnQgY29udHJhY3RzLkkgdXNlZCBXZWIzLnB5IGFuZCBTb2xpZGl0eSB0byBjcmVhdGUgYW4gYXJyYXkgb2YgYmxvY2tjaGFpbiBwcm9qZWN0cycsXG4gICAgbGluazogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9TTU3NldHaURCZFEmdD0xN3MnXG4gIH0sXG4gIFxuXTtcblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJleHBsb3JlV29ybGRzIiwiaWQiLCJpbWdVcmwiLCJ0aXRsZSIsInN0YXJ0aW5nRmVhdHVyZXMiLCJuZXdGZWF0dXJlcyIsInN1YnRpdGxlIiwibGluayIsImluc2lnaHRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ })

});