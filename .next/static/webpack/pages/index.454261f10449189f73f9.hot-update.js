self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var S_pluralSight_DesigningComponents_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ "./src/components/Speaker.js");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useRequestDelay */ "./src/hooks/useRequestDelay.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "S:\\pluralSight\\DesigningComponents\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,S_pluralSight_DesigningComponents_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function SpeakersList(_ref) {
  _s();

  var showSessions = _ref.showSessions;

  var _useRequestDelay = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default)(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_5__.data),
      speakersData = _useRequestDelay.data,
      requestStatus = _useRequestDelay.requestStatus,
      error = _useRequestDelay.error,
      _updateRecord = _useRequestDelay.updateRecord;

  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILURE) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
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


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_3__.default, {
      type: "media",
      rows: 15,
      className: "speakerslist-placeholder",
      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.SUCCESS,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "row",
        children: speakersData.map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__.default, {
            speaker: speaker,
            showSessions: showSessions,
            updateRecord: function updateRecord() {
              _updateRecord(_objectSpread(_objectSpread({}, speaker), {}, {
                favorite: !speaker.favorite
              }));
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
  return [_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzTGlzdCIsInNob3dTZXNzaW9ucyIsInVzZVJlcXVlc3REZWxheSIsImRhdGEiLCJzcGVha2Vyc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJSRVFVRVNUX1NUQVRVUyIsIm1hcCIsInNwZWFrZXIiLCJmYXZvcml0ZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxPQUF3QztBQUFBOztBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7O0FBQUEseUJBSWxDQywrREFBZSxDQUFDLElBQUQsRUFBT0MsOENBQVAsQ0FKbUI7QUFBQSxNQUcvQkMsWUFIK0Isb0JBR3BDRCxJQUhvQztBQUFBLE1BR2pCRSxhQUhpQixvQkFHakJBLGFBSGlCO0FBQUEsTUFHRkMsS0FIRSxvQkFHRkEsS0FIRTtBQUFBLE1BR0tDLGFBSEwsb0JBR0tBLFlBSEw7O0FBT3RDLE1BQUlGLGFBQWEsS0FBS0csMEVBQXRCLEVBQThDO0FBQzVDLHdCQUNFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSx5Q0FDUztBQUFBLG1EQUFnQ0YsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRCxHQWJxQyxDQWV0Qzs7O0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDRSw4REFBQyxzREFBRDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsVUFBSSxFQUFFLEVBRlI7QUFHRSxlQUFTLEVBQUMsMEJBSFo7QUFJRSxXQUFLLEVBQUVELGFBQWEsS0FBS0csMEVBSjNCO0FBQUEsNkJBTUU7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxrQkFDR0osWUFBWSxDQUFDSyxHQUFiLENBQWlCLFVBQVVDLE9BQVYsRUFBbUI7QUFDbkMsOEJBQ0UsOERBQUMsNkNBQUQ7QUFFRSxtQkFBTyxFQUFFQSxPQUZYO0FBR0Usd0JBQVksRUFBRVQsWUFIaEI7QUFJRSx3QkFBWSxFQUFFLHdCQUFNO0FBQ2xCTSwyQkFBWSxpQ0FDUEcsT0FETztBQUVWQyx3QkFBUSxFQUFFLENBQUNELE9BQU8sQ0FBQ0M7QUFGVCxpQkFBWjtBQUlEO0FBVEgsYUFDT0QsT0FBTyxDQUFDRSxFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFhRCxTQWRBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0QkQ7O0dBN0NRWixZO1VBSUhFLDJEOzs7S0FKR0YsWTtBQStDVCwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NTQyNjFmMTA0NDkxODlmNzNmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xuaW1wb3J0IFJlYWN0UGxhY2VIb2xkZXIgZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyXCI7XG5cbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXksIHtSRVFVRVNUX1NUQVRVU30gZnJvbSAnLi4vaG9va3MvdXNlUmVxdWVzdERlbGF5J1xuaW1wb3J0IHtkYXRhfSBmcm9tICcuLi8uLi9TcGVha2VyRGF0YSdcblxuZnVuY3Rpb24gU3BlYWtlcnNMaXN0KHsgc2hvd1Nlc3Npb25zIH0pIHtcblxuICBjb25zdCB7XG4gICAgZGF0YTpzcGVha2Vyc0RhdGEsIHJlcXVlc3RTdGF0dXMsIGVycm9yLCB1cGRhdGVSZWNvcmRcbiAgfSA9IHVzZVJlcXVlc3REZWxheSgyMDAwLCBkYXRhKVxuICBcblxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgIEVSUk9SOiA8Yj5sb2FkaW5nIFNwZWFrZXIgRGF0YSBGYWlsZWQge2Vycm9yfTwvYj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICAvL2lmIChpc0xvYWRpbmcgPT09IHRydWUpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cbiAgICAgIDxSZWFjdFBsYWNlSG9sZGVyXG4gICAgICAgIHR5cGU9XCJtZWRpYVwiXG4gICAgICAgIHJvd3M9ezE1fVxuICAgICAgICBjbGFzc05hbWU9XCJzcGVha2Vyc2xpc3QtcGxhY2Vob2xkZXJcIlxuICAgICAgICByZWFkeT17cmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTU31cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICB7c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFNwZWFrZXJcbiAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XG4gICAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cbiAgICAgICAgICAgICAgICBzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc31cbiAgICAgICAgICAgICAgICB1cGRhdGVSZWNvcmQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlY29yZCh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnNwZWFrZXIsXG4gICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlOiAhc3BlYWtlci5mYXZvcml0ZVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdFBsYWNlSG9sZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9