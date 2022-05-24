self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ "./src/components/Speaker.js");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestDelay */ "./src/hooks/useRequestDelay.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "S:\\pluralSight\\DesigningComponents\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();






function SpeakersList(_ref) {
  _s();

  var showSessions = _ref.showSessions;

  var _useRequestDelay = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.default)(2000),
      speakersData = _useRequestDelay.data,
      requestStatus = _useRequestDelay.requestStatus,
      error = _useRequestDelay.error,
      _updateRecord = _useRequestDelay.updateRecord;

  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.FAILURE) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
        children: ["loading Speaker Data Failed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this);
  } //if (isLoading === true) return <div>Loading...</div>


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_2__.default, {
      type: "media",
      rows: 15,
      className: "speakerslist-placeholder",
      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.SUCCESS,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: data.map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__.default, {
            speaker: speaker,
            showSessions: showSessions,
            updateRecord: function updateRecord() {
              _updateRecord(speaker.id);
            }
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(SpeakersList, "wL5q7atCKKv9oAQ8ls5vc6a1ta0=", false, function () {
  return [_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.default];
});

_c = SpeakersList;
/* harmony default export */ __webpack_exports__["default"] = (SpeakersList);

var _c;

$RefreshReg$(_c, "SpeakersList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzTGlzdCIsInNob3dTZXNzaW9ucyIsInVzZVJlcXVlc3REZWxheSIsInNwZWFrZXJzRGF0YSIsImRhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJSRVFVRVNUX1NUQVRVUyIsIm1hcCIsInNwZWFrZXIiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsT0FBd0M7QUFBQTs7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCOztBQUFBLHlCQUlsQ0MsK0RBQWUsQ0FBQyxJQUFELENBSm1CO0FBQUEsTUFHL0JDLFlBSCtCLG9CQUdwQ0MsSUFIb0M7QUFBQSxNQUdqQkMsYUFIaUIsb0JBR2pCQSxhQUhpQjtBQUFBLE1BR0ZDLEtBSEUsb0JBR0ZBLEtBSEU7QUFBQSxNQUdLQyxhQUhMLG9CQUdLQSxZQUhMOztBQU90QyxNQUFJRixhQUFhLEtBQUtHLDBFQUF0QixFQUE4QztBQUM1Qyx3QkFDRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEseUNBQ1M7QUFBQSxtREFBZ0NGLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBS0QsR0FicUMsQ0FldEM7OztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsMkJBQ0UsOERBQUMsc0RBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBRSxFQUZSO0FBR0UsZUFBUyxFQUFDLDBCQUhaO0FBSUUsV0FBSyxFQUFFRCxhQUFhLEtBQUtHLDBFQUozQjtBQUFBLDZCQU1FO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0dKLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQVVDLE9BQVYsRUFBbUI7QUFDM0IsOEJBQ0UsOERBQUMsNkNBQUQ7QUFFRSxtQkFBTyxFQUFFQSxPQUZYO0FBR0Usd0JBQVksRUFBRVQsWUFIaEI7QUFJRSx3QkFBWSxFQUFFLHdCQUFNO0FBQ2xCTSwyQkFBWSxDQUFDRyxPQUFPLENBQUNDLEVBQVQsQ0FBWjtBQUNEO0FBTkgsYUFDT0QsT0FBTyxDQUFDQyxFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFVRCxTQVhBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7O0dBMUNRWCxZO1VBSUhFLDJEOzs7S0FKR0YsWTtBQTRDVCwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZTNhYjMwYTRkNjBhYzc1ZWM4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xuaW1wb3J0IFJlYWN0UGxhY2VIb2xkZXIgZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyXCI7XG5cbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXksIHtSRVFVRVNUX1NUQVRVU30gZnJvbSAnLi4vaG9va3MvdXNlUmVxdWVzdERlbGF5J1xuaW1wb3J0IHtEYXRhfSBmcm9tICcuLi8uLi9TcGVha2VyRGF0YSdcblxuZnVuY3Rpb24gU3BlYWtlcnNMaXN0KHsgc2hvd1Nlc3Npb25zIH0pIHtcblxuICBjb25zdCB7XG4gICAgZGF0YTpzcGVha2Vyc0RhdGEsIHJlcXVlc3RTdGF0dXMsIGVycm9yLCB1cGRhdGVSZWNvcmRcbiAgfSA9IHVzZVJlcXVlc3REZWxheSgyMDAwKVxuICBcblxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgIEVSUk9SOiA8Yj5sb2FkaW5nIFNwZWFrZXIgRGF0YSBGYWlsZWQge2Vycm9yfTwvYj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICAvL2lmIChpc0xvYWRpbmcgPT09IHRydWUpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cbiAgICAgIDxSZWFjdFBsYWNlSG9sZGVyXG4gICAgICAgIHR5cGU9XCJtZWRpYVwiXG4gICAgICAgIHJvd3M9ezE1fVxuICAgICAgICBjbGFzc05hbWU9XCJzcGVha2Vyc2xpc3QtcGxhY2Vob2xkZXJcIlxuICAgICAgICByZWFkeT17cmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTU31cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICB7ZGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAga2V5PXtzcGVha2VyLmlkfVxuICAgICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XG4gICAgICAgICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9XG4gICAgICAgICAgICAgICAgdXBkYXRlUmVjb3JkPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVSZWNvcmQoc3BlYWtlci5pZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdFBsYWNlSG9sZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9