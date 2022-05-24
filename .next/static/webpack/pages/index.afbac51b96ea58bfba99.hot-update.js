self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useRequestSpeakers.js":
/*!*****************************************!*\
  !*** ./src/hooks/useRequestSpeakers.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var S_pluralSight_DesigningComponents_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var S_pluralSight_DesigningComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var S_pluralSight_DesigningComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(S_pluralSight_DesigningComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var S_pluralSight_DesigningComponents_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,S_pluralSight_DesigningComponents_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
};

var useRequestSpeakers = function useRequestSpeakers() {
  _s();

  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      speakersData = _useState[0],
      setSpeakersData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(REQUEST_STATUS.LOADING),
      requestStatus = _useState2[0],
      setRequestStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      hasErrored = _useState3[0],
      setHasErrored = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      error = _useState4[0],
      setError = _useState4[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    function delayFunc() {
      return _delayFunc.apply(this, arguments);
    }

    function _delayFunc() {
      _delayFunc = (0,S_pluralSight_DesigningComponents_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/S_pluralSight_DesigningComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return S_pluralSight_DesigningComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return delay(delayTime);

              case 3:
                //throw "Had Error."
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_4__.data);
                _context.next = 12;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setHasErrored(true);
                setError(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));
      return _delayFunc.apply(this, arguments);
    }

    delayFunc();
  }, []);

  function onFavoriteToggle(id) {
    var speakersRecPrevious = speakersData.find(function (rec) {
      return rec.id === id;
    });

    var speakerRecUpdated = _objectSpread(_objectSpread({}, speakersRecPrevious), {}, {
      favorite: !speakersRecPrevious.favorite
    });

    var speakersDataNew = speakersData.map(function (rec) {
      return rec.id === id ? speakerRecUpdated : rec;
    });
    setSpeakersData(speakersDataNew);
  }

  return {
    speakersData: speakersData,
    requestStatus: requestStatus,
    error: error,
    onFavoriteToggle: onFavoriteToggle
  };
};

_s(useRequestSpeakers, "NSjmN0nEj2Ob9vRJOareTA8C5r0=");

/* harmony default export */ __webpack_exports__["default"] = (useRequestSpeakers);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3RTcGVha2Vycy5qcyJdLCJuYW1lcyI6WyJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRkFJTFVSRSIsInVzZVJlcXVlc3RTcGVha2VycyIsImRlbGF5VGltZSIsInVzZVN0YXRlIiwic3BlYWtlcnNEYXRhIiwic2V0U3BlYWtlcnNEYXRhIiwicmVxdWVzdFN0YXR1cyIsInNldFJlcXVlc3RTdGF0dXMiLCJoYXNFcnJvcmVkIiwic2V0SGFzRXJyb3JlZCIsImVycm9yIiwic2V0RXJyb3IiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiZGVsYXlGdW5jIiwiZGF0YSIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpZCIsInNwZWFrZXJzUmVjUHJldmlvdXMiLCJmaW5kIiwicmVjIiwic3BlYWtlclJlY1VwZGF0ZWQiLCJmYXZvcml0ZSIsInNwZWFrZXJzRGF0YU5ldyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUc7QUFDckJDLFNBQU8sRUFBRSxTQURZO0FBRXJCQyxTQUFPLEVBQUUsU0FGWTtBQUdyQkMsU0FBTyxFQUFFO0FBSFksQ0FBdkI7O0FBTUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFzQjtBQUFBOztBQUFBLE1BQXJCQyxTQUFxQix1RUFBVCxJQUFTOztBQUFBLGtCQUVQQywrQ0FBUSxDQUFDLEVBQUQsQ0FGRDtBQUFBLE1BRXhDQyxZQUZ3QztBQUFBLE1BRTFCQyxlQUYwQjs7QUFBQSxtQkFHTEYsK0NBQVEsQ0FBQ04sY0FBYyxDQUFDQyxPQUFoQixDQUhIO0FBQUEsTUFHeENRLGFBSHdDO0FBQUEsTUFHekJDLGdCQUh5Qjs7QUFBQSxtQkFJWEosK0NBQVEsQ0FBQyxLQUFELENBSkc7QUFBQSxNQUl4Q0ssVUFKd0M7QUFBQSxNQUk1QkMsYUFKNEI7O0FBQUEsbUJBS3JCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FMYTtBQUFBLE1BS3hDTyxLQUx3QztBQUFBLE1BS2pDQyxRQUxpQzs7QUFPL0MsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsRUFBRDtBQUFBLFdBQVEsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQ7QUFBQSxhQUFhQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUF2QjtBQUFBLEtBQVosQ0FBUjtBQUFBLEdBQWQ7O0FBRUFJLGtEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0NDLFNBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEseVJBQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFVU4sS0FBSyxDQUFDVixTQUFELENBRmY7O0FBQUE7QUFHSTtBQUNBSyxnQ0FBZ0IsQ0FBQ1YsY0FBYyxDQUFDRSxPQUFoQixDQUFoQjtBQUNBTSwrQkFBZSxDQUFDYyw4Q0FBRCxDQUFmO0FBTEo7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFPSVosZ0NBQWdCLENBQUNWLGNBQWMsQ0FBQ0csT0FBaEIsQ0FBaEI7QUFDQVMsNkJBQWEsQ0FBQyxJQUFELENBQWI7QUFDQUUsd0JBQVEsYUFBUjs7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURjO0FBQUE7QUFBQTs7QUFhZE8sYUFBUztBQUNWLEdBZFEsRUFjTixFQWRNLENBQVQ7O0FBZ0JBLFdBQVNFLGdCQUFULENBQTBCQyxFQUExQixFQUE4QjtBQUM1QixRQUFNQyxtQkFBbUIsR0FBR2xCLFlBQVksQ0FBQ21CLElBQWIsQ0FBa0IsVUFBVUMsR0FBVixFQUFlO0FBQzNELGFBQU9BLEdBQUcsQ0FBQ0gsRUFBSixLQUFXQSxFQUFsQjtBQUNELEtBRjJCLENBQTVCOztBQUdBLFFBQU1JLGlCQUFpQixtQ0FDbEJILG1CQURrQjtBQUVyQkksY0FBUSxFQUFFLENBQUNKLG1CQUFtQixDQUFDSTtBQUZWLE1BQXZCOztBQUlBLFFBQU1DLGVBQWUsR0FBR3ZCLFlBQVksQ0FBQ3dCLEdBQWIsQ0FBaUIsVUFBVUosR0FBVixFQUFlO0FBQ3RELGFBQU9BLEdBQUcsQ0FBQ0gsRUFBSixLQUFXQSxFQUFYLEdBQWdCSSxpQkFBaEIsR0FBb0NELEdBQTNDO0FBQ0QsS0FGdUIsQ0FBeEI7QUFJQW5CLG1CQUFlLENBQUNzQixlQUFELENBQWY7QUFDRDs7QUFFRCxTQUFPO0FBQUN2QixnQkFBWSxFQUFaQSxZQUFEO0FBQWVFLGlCQUFhLEVBQWJBLGFBQWY7QUFBOEJJLFNBQUssRUFBTEEsS0FBOUI7QUFBcUNVLG9CQUFnQixFQUFoQkE7QUFBckMsR0FBUDtBQUNELENBekNEOztHQUFNbkIsa0I7O0FBMkNOLCtEQUFlQSxrQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZmJhYzUxYjk2ZWE1OGJmYmE5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi8uLi9TcGVha2VyRGF0YSc7XG5cbmNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xuICBMT0FESU5HOiBcImxvYWRpbmdcIixcbiAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXG4gIEZBSUxVUkU6IFwiZmFpbHVyZVwiLFxufVxuXG5jb25zdCB1c2VSZXF1ZXN0U3BlYWtlcnMgPSAoZGVsYXlUaW1lID0gMTAwMCkgPT4ge1xuXG4gIGNvbnN0IFtzcGVha2Vyc0RhdGEsIHNldFNwZWFrZXJzRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xuICBjb25zdCBbaGFzRXJyb3JlZCwgc2V0SGFzRXJyb3JlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICAvL3Rocm93IFwiSGFkIEVycm9yLlwiXG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyk7XG4gICAgICAgIHNldFNwZWFrZXJzRGF0YShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKTtcbiAgICAgICAgc2V0SGFzRXJyb3JlZCh0cnVlKTtcbiAgICAgICAgc2V0RXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGF5RnVuYygpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gb25GYXZvcml0ZVRvZ2dsZShpZCkge1xuICAgIGNvbnN0IHNwZWFrZXJzUmVjUHJldmlvdXMgPSBzcGVha2Vyc0RhdGEuZmluZChmdW5jdGlvbiAocmVjKSB7XG4gICAgICByZXR1cm4gcmVjLmlkID09PSBpZDtcbiAgICB9KTtcbiAgICBjb25zdCBzcGVha2VyUmVjVXBkYXRlZCA9IHtcbiAgICAgIC4uLnNwZWFrZXJzUmVjUHJldmlvdXMsXG4gICAgICBmYXZvcml0ZTogIXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGUsXG4gICAgfTtcbiAgICBjb25zdCBzcGVha2Vyc0RhdGFOZXcgPSBzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgIHJldHVybiByZWMuaWQgPT09IGlkID8gc3BlYWtlclJlY1VwZGF0ZWQgOiByZWM7XG4gICAgfSk7XG5cbiAgICBzZXRTcGVha2Vyc0RhdGEoc3BlYWtlcnNEYXRhTmV3KTtcbiAgfVxuXG4gIHJldHVybiB7c3BlYWtlcnNEYXRhLCByZXF1ZXN0U3RhdHVzLCBlcnJvciwgb25GYXZvcml0ZVRvZ2dsZX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdFNwZWFrZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==