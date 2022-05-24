self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useRequestDelay.js":
/*!**************************************!*\
  !*** ./src/hooks/useRequestDelay.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST_STATUS": function() { return /* binding */ REQUEST_STATUS; }
/* harmony export */ });
/* harmony import */ var S_pluralSight_DesigningComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var S_pluralSight_DesigningComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(S_pluralSight_DesigningComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var S_pluralSight_DesigningComponents_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();


var REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
};

var useRequestDelay = function useRequestDelay() {
  _s();

  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  var initialData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialData),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(REQUEST_STATUS.LOADING),
      requestStatus = _useState2[0],
      setRequestStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      error = _useState3[0],
      setError = _useState3[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    function delayFunc() {
      return _delayFunc.apply(this, arguments);
    }

    function _delayFunc() {
      _delayFunc = (0,S_pluralSight_DesigningComponents_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/S_pluralSight_DesigningComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return S_pluralSight_DesigningComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return delay(delayTime);

              case 3:
                //throw "Had Error."
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(data);
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(_context.t0);

              case 11:
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

  function updateRecord(recordUpdated) {
    var newRecords = data.map(function (rec) {
      return rec.id === recordUpdated.id ? recordUpdated : rec;
    });

    function delayFunction() {
      return _delayFunction.apply(this, arguments);
    }

    function _delayFunction() {
      _delayFunction = (0,S_pluralSight_DesigningComponents_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/S_pluralSight_DesigningComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return S_pluralSight_DesigningComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return delay(delayTime);

              case 3:
                setData(newRecords);
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.log('error thrown inside delayFunction', error);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));
      return _delayFunction.apply(this, arguments);
    }
  }

  return {
    speakersData: speakersData,
    requestStatus: requestStatus,
    error: error
  };
};

_s(useRequestDelay, "/Q5hd3zsV2Ij7JDh84VFSCYTHHg=");

/* harmony default export */ __webpack_exports__["default"] = (useRequestDelay);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3REZWxheS5qcyJdLCJuYW1lcyI6WyJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRkFJTFVSRSIsInVzZVJlcXVlc3REZWxheSIsImRlbGF5VGltZSIsImluaXRpYWxEYXRhIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJkZWxheUZ1bmMiLCJ1cGRhdGVSZWNvcmQiLCJyZWNvcmRVcGRhdGVkIiwibmV3UmVjb3JkcyIsIm1hcCIsInJlYyIsImlkIiwiZGVsYXlGdW5jdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzcGVha2Vyc0RhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsY0FBYyxHQUFHO0FBQzVCQyxTQUFPLEVBQUUsU0FEbUI7QUFFNUJDLFNBQU8sRUFBRSxTQUZtQjtBQUc1QkMsU0FBTyxFQUFFO0FBSG1CLENBQXZCOztBQU1QLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBd0M7QUFBQTs7QUFBQSxNQUF2Q0MsU0FBdUMsdUVBQTNCLElBQTJCO0FBQUEsTUFBckJDLFdBQXFCLHVFQUFQLEVBQU87O0FBQUEsa0JBRXRDQywrQ0FBUSxDQUFDRCxXQUFELENBRjhCO0FBQUEsTUFFdkRFLElBRnVEO0FBQUEsTUFFakRDLE9BRmlEOztBQUFBLG1CQUdwQkYsK0NBQVEsQ0FBQ1AsY0FBYyxDQUFDQyxPQUFoQixDQUhZO0FBQUEsTUFHdkRTLGFBSHVEO0FBQUEsTUFHeENDLGdCQUh3Qzs7QUFBQSxtQkFJcENKLCtDQUFRLENBQUMsRUFBRCxDQUo0QjtBQUFBLE1BSXZESyxLQUp1RDtBQUFBLE1BSWhEQyxRQUpnRDs7QUFNOUQsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsRUFBRDtBQUFBLFdBQVEsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQ7QUFBQSxhQUFhQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUF2QjtBQUFBLEtBQVosQ0FBUjtBQUFBLEdBQWQ7O0FBRUFJLGtEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0NDLFNBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEseVJBQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFVU4sS0FBSyxDQUFDVCxTQUFELENBRmY7O0FBQUE7QUFHSTtBQUNBTSxnQ0FBZ0IsQ0FBQ1gsY0FBYyxDQUFDRSxPQUFoQixDQUFoQjtBQUNBTyx1QkFBTyxDQUFDRCxJQUFELENBQVA7QUFMSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU9JRyxnQ0FBZ0IsQ0FBQ1gsY0FBYyxDQUFDRyxPQUFoQixDQUFoQjtBQUNBVSx3QkFBUSxhQUFSOztBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQVlkTyxhQUFTO0FBQ1YsR0FiUSxFQWFOLEVBYk0sQ0FBVDs7QUFlQSxXQUFTQyxZQUFULENBQXNCQyxhQUF0QixFQUFvQztBQUNsQyxRQUFNQyxVQUFVLEdBQUdmLElBQUksQ0FBQ2dCLEdBQUwsQ0FBUyxVQUFBQyxHQUFHLEVBQUk7QUFDakMsYUFBT0EsR0FBRyxDQUFDQyxFQUFKLEtBQVdKLGFBQWEsQ0FBQ0ksRUFBekIsR0FBOEJKLGFBQTlCLEdBQThDRyxHQUFyRDtBQUNELEtBRmtCLENBQW5COztBQURrQyxhQUtuQkUsYUFMbUI7QUFBQTtBQUFBOztBQUFBO0FBQUEsNlJBS2xDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRVViLEtBQUssQ0FBQ1QsU0FBRCxDQUZmOztBQUFBO0FBR0lJLHVCQUFPLENBQUNjLFVBQUQsQ0FBUDtBQUhKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTUlLLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWixFQUFpRGpCLEtBQWpEOztBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTGtDO0FBQUE7QUFBQTtBQWNuQzs7QUFFRCxTQUFPO0FBQUNrQixnQkFBWSxFQUFaQSxZQUFEO0FBQWVwQixpQkFBYSxFQUFiQSxhQUFmO0FBQThCRSxTQUFLLEVBQUxBO0FBQTlCLEdBQVA7QUFDRCxDQXhDRDs7R0FBTVIsZTs7QUEwQ04sK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTJhYzMyZDQ0ZjNmYjZlZjA1YWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcbiAgTE9BRElORzogXCJsb2FkaW5nXCIsXG4gIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxuICBGQUlMVVJFOiBcImZhaWx1cmVcIixcbn1cblxuY29uc3QgdXNlUmVxdWVzdERlbGF5ID0gKGRlbGF5VGltZSA9IDEwMDAsIGluaXRpYWxEYXRhID0gW10pID0+IHtcblxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSk7XG4gIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcbiAgICAgICAgLy90aHJvdyBcIkhhZCBFcnJvci5cIlxuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xuICAgICAgICBzZXREYXRhKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpO1xuICAgICAgICBzZXRFcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVsYXlGdW5jKCk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiB1cGRhdGVSZWNvcmQocmVjb3JkVXBkYXRlZCl7XG4gICAgY29uc3QgbmV3UmVjb3JkcyA9IGRhdGEubWFwKHJlYyA9PiB7XG4gICAgICByZXR1cm4gcmVjLmlkID09PSByZWNvcmRVcGRhdGVkLmlkID8gcmVjb3JkVXBkYXRlZCA6IHJlYztcbiAgICB9KVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jdGlvbigpe1xuICAgICAgdHJ5e1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpXG4gICAgICAgIHNldERhdGEobmV3UmVjb3JkcylcbiAgICAgIH1cbiAgICAgIGNhdGNoKGUpe1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uJywgZXJyb3IpXG4gICAgICB9XG4gICAgfVxuICB9IFxuXG4gIHJldHVybiB7c3BlYWtlcnNEYXRhLCByZXF1ZXN0U3RhdHVzLCBlcnJvcn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdERlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==