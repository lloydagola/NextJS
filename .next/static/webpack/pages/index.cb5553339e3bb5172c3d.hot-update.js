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

  var _useSpeakerFilter = (0,_hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__.default)(startingShowSessions, startingEventYear),
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
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1NwZWFrZXJGaWx0ZXJDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlNwZWFrZXJGaWx0ZXJQcm92aWRlciIsImNoaWxkcmVuIiwic3RhcnRpbmdTaG93U2Vzc2lvbnMiLCJzdGFydGluZ0V2ZW50WWVhciIsInVzZVNwZWFrZXJGaWx0ZXIiLCJzaG93U2Vzc2lvbnMiLCJzZXRTaG93U2Vzc2lvbnMiLCJldmVudFllYXIiLCJzZXRFdmVudFllYXIiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiRVZFTlRfWUVBUlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLGdCQUFHQyxvREFBYSxFQUExQzs7QUFFQSxTQUFTQyxxQkFBVCxPQUFvRztBQUFBOztBQUFBLE1BQXBFQyxRQUFvRSxRQUFwRUEsUUFBb0U7QUFBQSxtQ0FBMURDLG9CQUEwRDtBQUFBLE1BQTFEQSxvQkFBMEQsc0NBQW5DLEtBQW1DO0FBQUEsbUNBQTVCQyxpQkFBNEI7QUFBQSxNQUE1QkEsaUJBQTRCLHNDQUFSLE1BQVE7O0FBQUEsMEJBTzVGQyxnRUFBZ0IsQ0FDaEJGLG9CQURnQixFQUVoQkMsaUJBRmdCLENBUDRFO0FBQUEsTUFHNUZFLFlBSDRGLHFCQUc1RkEsWUFINEY7QUFBQSxNQUc5RUMsZUFIOEUscUJBRzlFQSxlQUg4RTtBQUFBLE1BSTVGQyxTQUo0RixxQkFJNUZBLFNBSjRGO0FBQUEsTUFJakZDLFlBSmlGLHFCQUlqRkEsWUFKaUY7QUFBQSxNQUs1RkMsV0FMNEYscUJBSzVGQSxXQUw0RjtBQUFBLE1BSy9FQyxjQUwrRSxxQkFLL0VBLGNBTCtFO0FBQUEsTUFNNUZDLFdBTjRGLHFCQU01RkEsV0FONEY7O0FBWWhHLHNCQUNJLDhEQUFDLG9CQUFELENBQXNCLFFBQXRCO0FBQStCLFNBQUssRUFBRTtBQUNsQ04sa0JBQVksRUFBWkEsWUFEa0M7QUFFbENDLHFCQUFlLEVBQWZBO0FBRmtDLEtBQXRDO0FBQUEsY0FJS0w7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRRjs7R0FwQk9ELHFCO1VBT0RJLDREOzs7S0FQQ0oscUI7QUFzQlIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2I1NTUzMzM5ZTNiYjUxNzJjM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdXNlU3BlYWtlckZpbHRlciBmcm9tICcuLi9ob29rcy91c2VTcGVha2VyRmlsdGVyJ1xyXG5cclxuY29uc3QgU3BlYWtlckZpbHRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJGaWx0ZXJQcm92aWRlcih7Y2hpbGRyZW4sIHN0YXJ0aW5nU2hvd1Nlc3Npb25zID0gZmFsc2UsIHN0YXJ0aW5nRXZlbnRZZWFyID0gJzIwMTknfSl7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHNob3dTZXNzaW9ucywgc2V0U2hvd1Nlc3Npb25zLFxyXG4gICAgICAgIGV2ZW50WWVhciwgc2V0RXZlbnRZZWFyLFxyXG4gICAgICAgIHNlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeSxcclxuICAgICAgICBFVkVOVF9ZRUFSU1xyXG4gICAgfSA9IHVzZVNwZWFrZXJGaWx0ZXIoXHJcbiAgICAgICAgc3RhcnRpbmdTaG93U2Vzc2lvbnMsXHJcbiAgICAgICAgc3RhcnRpbmdFdmVudFllYXJcclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTcGVha2VyRmlsdGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgICAgICBzaG93U2Vzc2lvbnMsXHJcbiAgICAgICAgICAgIHNldFNob3dTZXNzaW9uc1xyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9TcGVha2VyRmlsdGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuIH1cclxuXHJcbiBleHBvcnQge1NwZWFrZXJGaWx0ZXJDb250ZXh0LCBTcGVha2VyRmlsdGVyUHJvdmlkZXJ9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=