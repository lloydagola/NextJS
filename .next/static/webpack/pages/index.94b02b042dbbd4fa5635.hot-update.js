self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakerAdd.js":
/*!**************************************!*\
  !*** ./src/components/SpeakerAdd.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SpeakerAdd; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "S:\\pluralSight\\DesigningComponents\\src\\components\\SpeakerAdd.js";
function SpeakerAdd(_ref) {
  var eventYear = _ref.eventYear,
      insertRecord = _ref.insertRecord;

  function doneCallback() {
    console.log("adding speaker...");
  }

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
              name: "Main Ball Room",
              eventYear: eventYear
            }
          }]
        });
      },
      children: "+"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = SpeakerAdd;

var _c;

$RefreshReg$(_c, "SpeakerAdd");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlckFkZC5qcyJdLCJuYW1lcyI6WyJTcGVha2VyQWRkIiwiZXZlbnRZZWFyIiwiaW5zZXJ0UmVjb3JkIiwiZG9uZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZpcnN0TGFzdCIsIndpbmRvdyIsInByb21wdCIsImZpcnN0TGFzdEFycmF5Iiwic3BsaXQiLCJpZCIsImZpcnN0IiwibGFzdCIsImJpbyIsInNlc3Npb25zIiwidGl0bGUiLCJyb29tIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsVUFBVCxPQUFpRDtBQUFBLE1BQTNCQyxTQUEyQixRQUEzQkEsU0FBMkI7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCOztBQUM5RCxXQUFTQyxZQUFULEdBQXdCO0FBQ3RCQyxXQUFPLENBQUNDLEdBQVI7QUFDRDs7QUFDRCxzQkFDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFDLFFBQXRCO0FBQUEsMkJBQ0U7QUFDRSxhQUFPLEVBQUUsaUJBQUNDLENBQUQsRUFBTztBQUNkQSxTQUFDLENBQUNDLGNBQUY7QUFDQSxZQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLDRCQUFkLEVBQTRDLEVBQTVDLENBQWxCO0FBQ0EsWUFBTUMsY0FBYyxHQUFHSCxTQUFTLENBQUNJLEtBQVYsQ0FBZ0IsR0FBaEIsQ0FBdkI7QUFDQVYsb0JBQVksQ0FBQztBQUNYVyxZQUFFLEVBQUUsT0FETztBQUVYQyxlQUFLLEVBQUVILGNBQWMsQ0FBQyxDQUFELENBRlY7QUFHWEksY0FBSSxFQUFFSixjQUFjLENBQUMsQ0FBRCxDQUhUO0FBSVhLLGFBQUcsRUFBRSxxQkFKTTtBQUtYQyxrQkFBUSxFQUFFLENBQ1I7QUFDRUosY0FBRSxFQUFFLE9BRE47QUFFRUssaUJBQUssNEJBQXFCUCxjQUFjLENBQUMsQ0FBRCxDQUFuQyxDQUZQO0FBR0VRLGdCQUFJLEVBQUU7QUFBRUMsa0JBQUksRUFBRSxnQkFBUjtBQUEwQm5CLHVCQUFTLEVBQVRBO0FBQTFCO0FBSFIsV0FEUTtBQUxDLFNBQUQsQ0FBWjtBQWFELE9BbEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEJEO0tBOUJ1QkQsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NGIwMmIwNDJkYmJkNGZhNTYzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BlYWtlckFkZCh7IGV2ZW50WWVhciwgaW5zZXJ0UmVjb3JkIH0pIHtcclxuICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgYWRkaW5nIHNwZWFrZXIuLi5gKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYWRkU2VzXCI+XHJcbiAgICAgIDxpXHJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0TGFzdCA9IHdpbmRvdy5wcm9tcHQoXCJFbnRlciBmaXJzdCBhbmQgbGFzdCBuYW1lOlwiLCBcIlwiKTtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0TGFzdEFycmF5ID0gZmlyc3RMYXN0LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgIGluc2VydFJlY29yZCh7XHJcbiAgICAgICAgICAgIGlkOiBcIjk5OTk5XCIsXHJcbiAgICAgICAgICAgIGZpcnN0OiBmaXJzdExhc3RBcnJheVswXSxcclxuICAgICAgICAgICAgbGFzdDogZmlyc3RMYXN0QXJyYXlbMV0sXHJcbiAgICAgICAgICAgIGJpbzogXCJCaW8gbm90IGVudGVyZWQgeWV0XCIsXHJcbiAgICAgICAgICAgIHNlc3Npb25zOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiODg4ODhcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBgTmV3IFNlc3Npb24gRm9yICR7Zmlyc3RMYXN0QXJyYXlbMF19YCxcclxuICAgICAgICAgICAgICAgIHJvb206IHsgbmFtZTogXCJNYWluIEJhbGwgUm9vbVwiLCBldmVudFllYXIgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgICtcclxuICAgICAgPC9pPlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==