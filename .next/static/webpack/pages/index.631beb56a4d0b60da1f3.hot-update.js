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
  if (!loggedInUser) return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlckFkZC5qcyJdLCJuYW1lcyI6WyJTcGVha2VyQWRkIiwiZXZlbnRZZWFyIiwiaW5zZXJ0UmVjb3JkIiwibG9nZ2VkSW5Vc2VyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmlyc3RMYXN0Iiwid2luZG93IiwicHJvbXB0IiwiZmlyc3RMYXN0QXJyYXkiLCJzcGxpdCIsImlkIiwiZmlyc3QiLCJsYXN0IiwiYmlvIiwic2Vzc2lvbnMiLCJ0aXRsZSIsInJvb20iLCJuYW1lIiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxVQUFULE9BQStEO0FBQUEsTUFBekNDLFNBQXlDLFFBQXpDQSxTQUF5QztBQUFBLE1BQTlCQyxZQUE4QixRQUE5QkEsWUFBOEI7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCO0FBQzdELE1BQUksQ0FBQ0EsWUFBTCxFQUFtQixPQUFPLElBQVA7QUFFbkIsc0JBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBQyxRQUF0QjtBQUFBLDJCQUNFO0FBQ0UsYUFBTyxFQUFFLGlCQUFDQyxDQUFELEVBQU87QUFDZEEsU0FBQyxDQUFDQyxjQUFGO0FBQ0EsWUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyw0QkFBZCxFQUE0QyxFQUE1QyxDQUFsQjtBQUNBLFlBQU1DLGNBQWMsR0FBR0gsU0FBUyxDQUFDSSxLQUFWLENBQWdCLEdBQWhCLENBQXZCO0FBQ0FSLG9CQUFZLENBQUM7QUFDWFMsWUFBRSxFQUFFLE9BRE87QUFFWEMsZUFBSyxFQUFFSCxjQUFjLENBQUMsQ0FBRCxDQUZWO0FBR1hJLGNBQUksRUFBRUosY0FBYyxDQUFDLENBQUQsQ0FIVDtBQUlYSyxhQUFHLEVBQUUscUJBSk07QUFLWEMsa0JBQVEsRUFBRSxDQUNSO0FBQ0VKLGNBQUUsRUFBRSxPQUROO0FBRUVLLGlCQUFLLDRCQUFxQlAsY0FBYyxDQUFDLENBQUQsQ0FBbkMsQ0FGUDtBQUdFUSxnQkFBSSxFQUFFO0FBQ0pDLGtCQUFJLEVBQUU7QUFERixhQUhSO0FBTUVqQixxQkFBUyxFQUFUQTtBQU5GLFdBRFE7QUFMQyxTQUFELENBQVo7QUFnQkQsT0FyQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0tBaENRRCxVO0FBa0NULCtEQUFlLE1BQUFtQixrREFBUSxDQUFDbkIsVUFBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MzFiZWI1NmE0ZDBiNjBkYTFmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuL3dpdGhBdXRoXCI7XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyQWRkKHsgZXZlbnRZZWFyLCBpbnNlcnRSZWNvcmQsIGxvZ2dlZEluVXNlciB9KSB7XHJcbiAgaWYgKCFsb2dnZWRJblVzZXIpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJhZGRTZXNcIj5cclxuICAgICAgPGlcclxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgY29uc3QgZmlyc3RMYXN0ID0gd2luZG93LnByb21wdChcIkVudGVyIGZpcnN0IGFuZCBsYXN0IG5hbWU6XCIsIFwiXCIpO1xyXG4gICAgICAgICAgY29uc3QgZmlyc3RMYXN0QXJyYXkgPSBmaXJzdExhc3Quc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgaW5zZXJ0UmVjb3JkKHtcclxuICAgICAgICAgICAgaWQ6IFwiOTk5OTlcIixcclxuICAgICAgICAgICAgZmlyc3Q6IGZpcnN0TGFzdEFycmF5WzBdLFxyXG4gICAgICAgICAgICBsYXN0OiBmaXJzdExhc3RBcnJheVsxXSxcclxuICAgICAgICAgICAgYmlvOiBcIkJpbyBub3QgZW50ZXJlZCB5ZXRcIixcclxuICAgICAgICAgICAgc2Vzc2lvbnM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI4ODg4OFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGBOZXcgU2Vzc2lvbiBGb3IgJHtmaXJzdExhc3RBcnJheVswXX1gLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIk1haW4gQmFsbCBSb29tXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgK1xyXG4gICAgICA8L2k+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoU3BlYWtlckFkZCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=