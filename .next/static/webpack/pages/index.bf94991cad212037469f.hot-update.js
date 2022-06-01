self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakerAdd.js":
/*!**************************************!*\
  !*** ./src/components/SpeakerAdd.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withAuth */ "./src/components/withAuth.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "S:\\pluralSight\\DesigningComponents\\src\\components\\SpeakerAdd.js";


function SpeakerAdd(_ref) {
  var eventYear = _ref.eventYear,
      insertRecord = _ref.insertRecord,
      loggedInUser = _ref.loggedInUser;
  if (!loggedInUser || loggedInUser.length === 0) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: "#",
    className: "addSes",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      onClick: function onClick(e) {
        e.preventDefault();
        var firstLast = window.prompt("Enter first and last name:", "");
        var firstLastArray = firstLast.split(" ");
        insertRecord({
          id: "99999",
          first: firstLastArray[0],
          last: firstLastArray[1],
          bio: "Bio not entered yet",
          sessions: [{
            id: "88888",
            title: "New Session For ".concat(firstLastArray[0]),
            room: {
              name: "Main Ball Room"
            },
            eventYear: eventYear
          }]
        });
      },
      children: "+"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

_c = SpeakerAdd;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_1__.default)(SpeakerAdd));

var _c, _c2;

$RefreshReg$(_c, "SpeakerAdd");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlckFkZC5qcyJdLCJuYW1lcyI6WyJTcGVha2VyQWRkIiwiZXZlbnRZZWFyIiwiaW5zZXJ0UmVjb3JkIiwibG9nZ2VkSW5Vc2VyIiwibGVuZ3RoIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmlyc3RMYXN0Iiwid2luZG93IiwicHJvbXB0IiwiZmlyc3RMYXN0QXJyYXkiLCJzcGxpdCIsImlkIiwiZmlyc3QiLCJsYXN0IiwiYmlvIiwic2Vzc2lvbnMiLCJ0aXRsZSIsInJvb20iLCJuYW1lIiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxVQUFULE9BQStEO0FBQUEsTUFBekNDLFNBQXlDLFFBQXpDQSxTQUF5QztBQUFBLE1BQTlCQyxZQUE4QixRQUE5QkEsWUFBOEI7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCO0FBQzdELE1BQUksQ0FBQ0EsWUFBRCxJQUFpQkEsWUFBWSxDQUFDQyxNQUFiLEtBQXdCLENBQTdDLEVBQWdELE9BQU8sSUFBUDtBQUVoRCxzQkFDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFDLFFBQXRCO0FBQUEsMkJBQ0U7QUFDRSxhQUFPLEVBQUUsaUJBQUNDLENBQUQsRUFBTztBQUNkQSxTQUFDLENBQUNDLGNBQUY7QUFDQSxZQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLDRCQUFkLEVBQTRDLEVBQTVDLENBQWxCO0FBQ0EsWUFBTUMsY0FBYyxHQUFHSCxTQUFTLENBQUNJLEtBQVYsQ0FBZ0IsR0FBaEIsQ0FBdkI7QUFDQVQsb0JBQVksQ0FBQztBQUNYVSxZQUFFLEVBQUUsT0FETztBQUVYQyxlQUFLLEVBQUVILGNBQWMsQ0FBQyxDQUFELENBRlY7QUFHWEksY0FBSSxFQUFFSixjQUFjLENBQUMsQ0FBRCxDQUhUO0FBSVhLLGFBQUcsRUFBRSxxQkFKTTtBQUtYQyxrQkFBUSxFQUFFLENBQ1I7QUFDRUosY0FBRSxFQUFFLE9BRE47QUFFRUssaUJBQUssNEJBQXFCUCxjQUFjLENBQUMsQ0FBRCxDQUFuQyxDQUZQO0FBR0VRLGdCQUFJLEVBQUU7QUFDSkMsa0JBQUksRUFBRTtBQURGLGFBSFI7QUFNRWxCLHFCQUFTLEVBQVRBO0FBTkYsV0FEUTtBQUxDLFNBQUQsQ0FBWjtBQWdCRCxPQXJCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZCRDs7S0FoQ1FELFU7QUFrQ1QsK0RBQWUsTUFBQW9CLGtEQUFRLENBQUNwQixVQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJmOTQ5OTFjYWQyMTIwMzc0NjlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4vd2l0aEF1dGhcIjtcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJBZGQoeyBldmVudFllYXIsIGluc2VydFJlY29yZCwgbG9nZ2VkSW5Vc2VyIH0pIHtcclxuICBpZiAoIWxvZ2dlZEluVXNlciB8fCBsb2dnZWRJblVzZXIubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYWRkU2VzXCI+XHJcbiAgICAgIDxpXHJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0TGFzdCA9IHdpbmRvdy5wcm9tcHQoXCJFbnRlciBmaXJzdCBhbmQgbGFzdCBuYW1lOlwiLCBcIlwiKTtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0TGFzdEFycmF5ID0gZmlyc3RMYXN0LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgIGluc2VydFJlY29yZCh7XHJcbiAgICAgICAgICAgIGlkOiBcIjk5OTk5XCIsXHJcbiAgICAgICAgICAgIGZpcnN0OiBmaXJzdExhc3RBcnJheVswXSxcclxuICAgICAgICAgICAgbGFzdDogZmlyc3RMYXN0QXJyYXlbMV0sXHJcbiAgICAgICAgICAgIGJpbzogXCJCaW8gbm90IGVudGVyZWQgeWV0XCIsXHJcbiAgICAgICAgICAgIHNlc3Npb25zOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiODg4ODhcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBgTmV3IFNlc3Npb24gRm9yICR7Zmlyc3RMYXN0QXJyYXlbMF19YCxcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJNYWluIEJhbGwgUm9vbVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgICtcclxuICAgICAgPC9pPlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFNwZWFrZXJBZGQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9