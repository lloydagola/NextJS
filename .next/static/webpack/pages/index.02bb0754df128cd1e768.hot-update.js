self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/contexts/SpeakerFilterContext.js":
/*!**********************************************!*\
  !*** ./src/contexts/SpeakerFilterContext.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerFilterContext": function() { return /* binding */ SpeakerFilterContext; },
/* harmony export */   "SpeakerFilterProvider": function() { return /* binding */ SpeakerFilterProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useSpeakerFilter */ "./src/hooks/useSpeakerFilter.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "S:\\pluralSight\\DesigningComponents\\src\\contexts\\SpeakerFilterContext.js",
    _s = $RefreshSig$();



var SpeakerFilterContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

function SpeakerFilterProvider(_ref) {
  _s();

  var children = _ref.children,
      _ref$startingShowSess = _ref.startingShowSessions,
      startingShowSessions = _ref$startingShowSess === void 0 ? false : _ref$startingShowSess,
      _ref$startingEventYea = _ref.startingEventYear,
      startingEventYear = _ref$startingEventYea === void 0 ? '2019' : _ref$startingEventYea;

  var _useSpeakerFilter = (0,_hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__.default)(startingShowSessions),
      showSessions = _useSpeakerFilter.showSessions,
      setShowSessions = _useSpeakerFilter.setShowSessions,
      eventYear = _useSpeakerFilter.eventYear,
      setEventYear = _useSpeakerFilter.setEventYear,
      searchQuery = _useSpeakerFilter.searchQuery,
      setSearchQuery = _useSpeakerFilter.setSearchQuery,
      EVENT_YEARS = _useSpeakerFilter.EVENT_YEARS;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFilterContext.Provider, {
    value: {
      showSessions: showSessions,
      setShowSessions: setShowSessions
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

_s(SpeakerFilterProvider, "aGbtAtKBCsszaK16U1gw2gmggMA=", false, function () {
  return [_hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = SpeakerFilterProvider;


var _c;

$RefreshReg$(_c, "SpeakerFilterProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1NwZWFrZXJGaWx0ZXJDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlNwZWFrZXJGaWx0ZXJQcm92aWRlciIsImNoaWxkcmVuIiwic3RhcnRpbmdTaG93U2Vzc2lvbnMiLCJzdGFydGluZ0V2ZW50WWVhciIsInVzZVNwZWFrZXJGaWx0ZXIiLCJzaG93U2Vzc2lvbnMiLCJzZXRTaG93U2Vzc2lvbnMiLCJldmVudFllYXIiLCJzZXRFdmVudFllYXIiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiRVZFTlRfWUVBUlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLGdCQUFHQyxvREFBYSxFQUExQzs7QUFFQSxTQUFTQyxxQkFBVCxPQUFvRztBQUFBOztBQUFBLE1BQXBFQyxRQUFvRSxRQUFwRUEsUUFBb0U7QUFBQSxtQ0FBMURDLG9CQUEwRDtBQUFBLE1BQTFEQSxvQkFBMEQsc0NBQW5DLEtBQW1DO0FBQUEsbUNBQTVCQyxpQkFBNEI7QUFBQSxNQUE1QkEsaUJBQTRCLHNDQUFSLE1BQVE7O0FBQUEsMEJBTzVGQyxnRUFBZ0IsQ0FDaEJGLG9CQURnQixDQVA0RTtBQUFBLE1BRzVGRyxZQUg0RixxQkFHNUZBLFlBSDRGO0FBQUEsTUFHOUVDLGVBSDhFLHFCQUc5RUEsZUFIOEU7QUFBQSxNQUk1RkMsU0FKNEYscUJBSTVGQSxTQUo0RjtBQUFBLE1BSWpGQyxZQUppRixxQkFJakZBLFlBSmlGO0FBQUEsTUFLNUZDLFdBTDRGLHFCQUs1RkEsV0FMNEY7QUFBQSxNQUsvRUMsY0FMK0UscUJBSy9FQSxjQUwrRTtBQUFBLE1BTTVGQyxXQU40RixxQkFNNUZBLFdBTjRGOztBQVdoRyxzQkFDSSw4REFBQyxvQkFBRCxDQUFzQixRQUF0QjtBQUErQixTQUFLLEVBQUU7QUFDbENOLGtCQUFZLEVBQVpBLFlBRGtDO0FBRWxDQyxxQkFBZSxFQUFmQTtBQUZrQyxLQUF0QztBQUFBLGNBSUtMO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUY7O0dBbkJPRCxxQjtVQU9ESSw0RDs7O0tBUENKLHFCO0FBcUJSIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAyYmIwNzU0ZGYxMjhjZDFlNzY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHVzZVNwZWFrZXJGaWx0ZXIgZnJvbSAnLi4vaG9va3MvdXNlU3BlYWtlckZpbHRlcidcclxuXHJcbmNvbnN0IFNwZWFrZXJGaWx0ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG5mdW5jdGlvbiBTcGVha2VyRmlsdGVyUHJvdmlkZXIoe2NoaWxkcmVuLCBzdGFydGluZ1Nob3dTZXNzaW9ucyA9IGZhbHNlLCBzdGFydGluZ0V2ZW50WWVhciA9ICcyMDE5J30pe1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBzaG93U2Vzc2lvbnMsIHNldFNob3dTZXNzaW9ucyxcclxuICAgICAgICBldmVudFllYXIsIHNldEV2ZW50WWVhcixcclxuICAgICAgICBzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnksXHJcbiAgICAgICAgRVZFTlRfWUVBUlNcclxuICAgIH0gPSB1c2VTcGVha2VyRmlsdGVyKFxyXG4gICAgICAgIHN0YXJ0aW5nU2hvd1Nlc3Npb25zXHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3BlYWtlckZpbHRlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgICAgICAgc2hvd1Nlc3Npb25zLFxyXG4gICAgICAgICAgICBzZXRTaG93U2Vzc2lvbnNcclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvU3BlYWtlckZpbHRlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbiB9XHJcblxyXG4gZXhwb3J0IHtTcGVha2VyRmlsdGVyQ29udGV4dCwgU3BlYWtlckZpbHRlclByb3ZpZGVyfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9