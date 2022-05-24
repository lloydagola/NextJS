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
      searchQuery = _useState3[0],
      setSearchQuery = _useState3[1];

  var EVENT_YEARS = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"];
  return {
    showSessions: showSessions,
    setShowSessions: setShowSessions,
    eventYear: eventYear,
    setEventYear: setEventYear,
    searchQuery: searchQuery,
    setSearchQuery: setSearchQuery,
    EVENT_YEARS: EVENT_YEARS
  };
}

_s(useSpeakerFilter, "mJb8OG5nQ9Ls4UV6Cp6Nnf8xhlU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVNwZWFrZXJGaWx0ZXIuanMiXSwibmFtZXMiOlsidXNlU3BlYWtlckZpbHRlciIsInN0YXJ0aW5nU2hvd1Nlc3Npb25zIiwic3RhcnRpbmdFdmVudFllYXIiLCJ1c2VTdGF0ZSIsInNob3dTZXNzaW9ucyIsInNldFNob3dTZXNzaW9ucyIsImV2ZW50WWVhciIsInNldEV2ZW50WWVhciIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJFVkVOVF9ZRUFSUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHZSxTQUFTQSxnQkFBVCxDQUEwQkMsb0JBQTFCLEVBQWdEQyxpQkFBaEQsRUFBa0U7QUFBQTs7QUFBQSxrQkFDckNDLCtDQUFRLENBQUNGLG9CQUFELENBRDZCO0FBQUEsTUFDdEVHLFlBRHNFO0FBQUEsTUFDeERDLGVBRHdEOztBQUFBLG1CQUUzQ0YsK0NBQVEsQ0FBQ0QsaUJBQUQsQ0FGbUM7QUFBQSxNQUV0RUksU0FGc0U7QUFBQSxNQUUzREMsWUFGMkQ7O0FBQUEsbUJBR3ZDSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIK0I7QUFBQSxNQUd0RUssV0FIc0U7QUFBQSxNQUd6REMsY0FIeUQ7O0FBSzdFLE1BQU1DLFdBQVcsR0FBRyxDQUNoQixNQURnQixFQUVoQixNQUZnQixFQUdoQixNQUhnQixFQUloQixNQUpnQixFQUtoQixNQUxnQixFQU1oQixNQU5nQixFQU9oQixNQVBnQixFQVFoQixNQVJnQixFQVNoQixNQVRnQixFQVVoQixNQVZnQixFQVdoQixNQVhnQixFQVloQixNQVpnQixDQUFwQjtBQWVBLFNBQU87QUFDSE4sZ0JBQVksRUFBWkEsWUFERztBQUVIQyxtQkFBZSxFQUFmQSxlQUZHO0FBR0hDLGFBQVMsRUFBVEEsU0FIRztBQUlIQyxnQkFBWSxFQUFaQSxZQUpHO0FBS0hDLGVBQVcsRUFBWEEsV0FMRztBQU1IQyxrQkFBYyxFQUFkQSxjQU5HO0FBT0hDLGVBQVcsRUFBWEE7QUFQRyxHQUFQO0FBU0g7O0dBN0J1QlYsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmY3MTk2ZThjODU5Y2FmZDU5NWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTcGVha2VyRmlsdGVyKHN0YXJ0aW5nU2hvd1Nlc3Npb25zLCBzdGFydGluZ0V2ZW50WWVhcil7XHJcbiAgICBjb25zdCBbc2hvd1Nlc3Npb25zLCBzZXRTaG93U2Vzc2lvbnNdID0gdXNlU3RhdGUoc3RhcnRpbmdTaG93U2Vzc2lvbnMpO1xyXG4gICAgY29uc3QgW2V2ZW50WWVhciwgc2V0RXZlbnRZZWFyXSA9IHVzZVN0YXRlKHN0YXJ0aW5nRXZlbnRZZWFyKTtcclxuICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IEVWRU5UX1lFQVJTID0gW1xyXG4gICAgICAgIFwiMjAwOFwiLFxyXG4gICAgICAgIFwiMjAwOVwiLFxyXG4gICAgICAgIFwiMjAxMFwiLFxyXG4gICAgICAgIFwiMjAxMVwiLFxyXG4gICAgICAgIFwiMjAxMlwiLFxyXG4gICAgICAgIFwiMjAxM1wiLFxyXG4gICAgICAgIFwiMjAxNFwiLFxyXG4gICAgICAgIFwiMjAxNVwiLFxyXG4gICAgICAgIFwiMjAxNlwiLFxyXG4gICAgICAgIFwiMjAxN1wiLFxyXG4gICAgICAgIFwiMjAxOFwiLFxyXG4gICAgICAgIFwiMjAxOVwiLFxyXG4gICAgXVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvd1Nlc3Npb25zLFxyXG4gICAgICAgIHNldFNob3dTZXNzaW9ucyxcclxuICAgICAgICBldmVudFllYXIsXHJcbiAgICAgICAgc2V0RXZlbnRZZWFyLFxyXG4gICAgICAgIHNlYXJjaFF1ZXJ5LFxyXG4gICAgICAgIHNldFNlYXJjaFF1ZXJ5LCBcclxuICAgICAgICBFVkVOVF9ZRUFSU1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==