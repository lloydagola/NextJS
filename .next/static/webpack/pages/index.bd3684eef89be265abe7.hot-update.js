self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useSpeakerFilter.js":
/*!***************************************!*\
  !*** ./src/hooks/useSpeakerFilter.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useSpeakerFilter; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();


function useSpeakerFilter(startingShowSessions, startingEventYear) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingShowSessions),
      showSessions = _useState[0],
      setShowSessions = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingEventYear),
      eventYear = _useState2[0],
      setEventYear = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      searchQueary = _useState3[0],
      setSearchQueary = _useState3[1];

  var EVENT_YEARS = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"];
  return {
    showSessions: showSessions,
    setShowSessions: setShowSessions
  };
}

_s(useSpeakerFilter, "nH0wz8oRuis9cm39hrOGPIZB/pk=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVNwZWFrZXJGaWx0ZXIuanMiXSwibmFtZXMiOlsidXNlU3BlYWtlckZpbHRlciIsInN0YXJ0aW5nU2hvd1Nlc3Npb25zIiwic3RhcnRpbmdFdmVudFllYXIiLCJ1c2VTdGF0ZSIsInNob3dTZXNzaW9ucyIsInNldFNob3dTZXNzaW9ucyIsImV2ZW50WWVhciIsInNldEV2ZW50WWVhciIsInNlYXJjaFF1ZWFyeSIsInNldFNlYXJjaFF1ZWFyeSIsIkVWRU5UX1lFQVJTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdlLFNBQVNBLGdCQUFULENBQTBCQyxvQkFBMUIsRUFBZ0RDLGlCQUFoRCxFQUFrRTtBQUFBOztBQUFBLGtCQUNyQ0MsK0NBQVEsQ0FBQ0Ysb0JBQUQsQ0FENkI7QUFBQSxNQUN0RUcsWUFEc0U7QUFBQSxNQUN4REMsZUFEd0Q7O0FBQUEsbUJBRTNDRiwrQ0FBUSxDQUFDRCxpQkFBRCxDQUZtQztBQUFBLE1BRXRFSSxTQUZzRTtBQUFBLE1BRTNEQyxZQUYyRDs7QUFBQSxtQkFHckNKLCtDQUFRLENBQUMsRUFBRCxDQUg2QjtBQUFBLE1BR3RFSyxZQUhzRTtBQUFBLE1BR3hEQyxlQUh3RDs7QUFLN0UsTUFBTUMsV0FBVyxHQUFHLENBQ2hCLE1BRGdCLEVBRWhCLE1BRmdCLEVBR2hCLE1BSGdCLEVBSWhCLE1BSmdCLEVBS2hCLE1BTGdCLEVBTWhCLE1BTmdCLEVBT2hCLE1BUGdCLEVBUWhCLE1BUmdCLEVBU2hCLE1BVGdCLEVBVWhCLE1BVmdCLEVBV2hCLE1BWGdCLEVBWWhCLE1BWmdCLENBQXBCO0FBZUEsU0FBTztBQUNITixnQkFBWSxFQUFaQSxZQURHO0FBRUhDLG1CQUFlLEVBQWZBO0FBRkcsR0FBUDtBQUlIOztHQXhCdUJMLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJkMzY4NGVlZjg5YmUyNjVhYmU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3BlYWtlckZpbHRlcihzdGFydGluZ1Nob3dTZXNzaW9ucywgc3RhcnRpbmdFdmVudFllYXIpe1xyXG4gICAgY29uc3QgW3Nob3dTZXNzaW9ucywgc2V0U2hvd1Nlc3Npb25zXSA9IHVzZVN0YXRlKHN0YXJ0aW5nU2hvd1Nlc3Npb25zKTtcclxuICAgIGNvbnN0IFtldmVudFllYXIsIHNldEV2ZW50WWVhcl0gPSB1c2VTdGF0ZShzdGFydGluZ0V2ZW50WWVhcik7XHJcbiAgICBjb25zdCBbc2VhcmNoUXVlYXJ5LCBzZXRTZWFyY2hRdWVhcnldID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IEVWRU5UX1lFQVJTID0gW1xyXG4gICAgICAgIFwiMjAwOFwiLFxyXG4gICAgICAgIFwiMjAwOVwiLFxyXG4gICAgICAgIFwiMjAxMFwiLFxyXG4gICAgICAgIFwiMjAxMVwiLFxyXG4gICAgICAgIFwiMjAxMlwiLFxyXG4gICAgICAgIFwiMjAxM1wiLFxyXG4gICAgICAgIFwiMjAxNFwiLFxyXG4gICAgICAgIFwiMjAxNVwiLFxyXG4gICAgICAgIFwiMjAxNlwiLFxyXG4gICAgICAgIFwiMjAxN1wiLFxyXG4gICAgICAgIFwiMjAxOFwiLFxyXG4gICAgICAgIFwiMjAxOVwiLFxyXG4gICAgXVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvd1Nlc3Npb25zLFxyXG4gICAgICAgIHNldFNob3dTZXNzaW9uc1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==