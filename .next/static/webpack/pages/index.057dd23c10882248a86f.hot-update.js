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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: "#",
    className: "addSes",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      onclick: function onclick(e) {
        e.preventDefault();
        var firstLast = window.prompt("Enter first and last name:", "");
        var firstLastArray = firstLast.split(" ");
        insertRecord({
          id: "99999",
          first: firstLastArray[0],
          last: firstLastArray[1],
          bio: "Bio not entered yet",
          session: [{
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
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
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


/***/ }),

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ "./src/components/Speaker.js");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useRequestDelay */ "./src/hooks/useRequestDelay.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ "./src/contexts/SpeakerFilterContext.js");
/* harmony import */ var _SpeakerAdd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SpeakerAdd */ "./src/components/SpeakerAdd.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "S:\\pluralSight\\DesigningComponents\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();









function SpeakersList() {
  _s();

  var _useRequestDelay = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default)(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_5__.data),
      speakersData = _useRequestDelay.data,
      requestStatus = _useRequestDelay.requestStatus,
      error = _useRequestDelay.error,
      updateRecord = _useRequestDelay.updateRecord,
      deleteRecord = _useRequestDelay.deleteRecord,
      insertRecord = _useRequestDelay.insertRecord;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_6__.SpeakerFilterContext),
      searchQuery = _useContext.searchQuery,
      eventYear = _useContext.eventYear;

  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILURE) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
        children: ["loading Speaker Data Failed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this);
  } //if (isLoading === true) return <div>Loading...</div>


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_3__.default, {
      type: "media",
      rows: 15,
      className: "speakerslist-placeholder",
      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.SUCCESS,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerAdd__WEBPACK_IMPORTED_MODULE_7__.default, {
        eventYear: eventYear,
        insertRecord: insertRecord
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: speakersData.filter(function (speaker) {
          return speaker.first.toLowerCase().includes(searchQuery) || speaker.last.toLowerCase().includes(searchQuery);
        }).filter(function (speaker) {
          return speaker.sessions.find(function (session) {
            return session.eventYear === eventYear;
          });
        }).map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__.default, {
            speaker: speaker,
            updateRecord: updateRecord,
            deleteRecord: deleteRecord,
            insertRecord: insertRecord
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 17
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

_s(SpeakersList, "ykjgN+lu/LWAcscpKI60UevlbOY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlckFkZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJBZGQiLCJldmVudFllYXIiLCJpbnNlcnRSZWNvcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmaXJzdExhc3QiLCJ3aW5kb3ciLCJwcm9tcHQiLCJmaXJzdExhc3RBcnJheSIsInNwbGl0IiwiaWQiLCJmaXJzdCIsImxhc3QiLCJiaW8iLCJzZXNzaW9uIiwidGl0bGUiLCJyb29tIiwibmFtZSIsIlNwZWFrZXJzTGlzdCIsInVzZVJlcXVlc3REZWxheSIsImRhdGEiLCJzcGVha2Vyc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJkZWxldGVSZWNvcmQiLCJ1c2VDb250ZXh0IiwiU3BlYWtlckZpbHRlckNvbnRleHQiLCJzZWFyY2hRdWVyeSIsIlJFUVVFU1RfU1RBVFVTIiwiZmlsdGVyIiwic3BlYWtlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZXNzaW9ucyIsImZpbmQiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLFVBQVQsT0FBaUQ7QUFBQSxNQUEzQkMsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjtBQUM5RCxzQkFDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFDLFFBQXRCO0FBQUEsMkJBQ0U7QUFDRSxhQUFPLEVBQUUsaUJBQUNDLENBQUQsRUFBTztBQUNkQSxTQUFDLENBQUNDLGNBQUY7QUFDQSxZQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLDRCQUFkLEVBQTRDLEVBQTVDLENBQWxCO0FBQ0EsWUFBTUMsY0FBYyxHQUFHSCxTQUFTLENBQUNJLEtBQVYsQ0FBZ0IsR0FBaEIs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WUFIaEI7QUFJRSx3QkFBWSxFQUFFQyxZQUpoQjtBQUtFLHdCQUFZLEVBQUV2QjtBQUxoQixhQUNPNkIsT0FBTyxDQUFDckIsRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBU0QsU0F0QkY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUNEOztHQTNEUVEsWTtVQVFIQywyRDs7O0tBUkdELFk7QUE2RFQsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDU3ZGQyM2MxMDg4MjI0OGE4NmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwZWFrZXJBZGQoeyBldmVudFllYXIsIGluc2VydFJlY29yZCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYWRkU2VzXCI+XHJcbiAgICAgIDxpXHJcbiAgICAgICAgb25jbGljaz17KGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0TGFzdCA9IHdpbmRvdy5wcm9tcHQoXCJFbnRlciBmaXJzdCBhbmQgbGFzdCBuYW1lOlwiLCBcIlwiKTtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0TGFzdEFycmF5ID0gZmlyc3RMYXN0LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgIGluc2VydFJlY29yZCh7XHJcbiAgICAgICAgICAgIGlkOiBcIjk5OTk5XCIsXHJcbiAgICAgICAgICAgIGZpcnN0OiBmaXJzdExhc3RBcnJheVswXSxcclxuICAgICAgICAgICAgbGFzdDogZmlyc3RMYXN0QXJyYXlbMV0sXHJcbiAgICAgICAgICAgIGJpbzogXCJCaW8gbm90IGVudGVyZWQgeWV0XCIsXHJcbiAgICAgICAgICAgIHNlc3Npb246IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI4ODg4OFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGBOZXcgU2Vzc2lvbiBGb3IgJHtmaXJzdExhc3RBcnJheVswXX1gLFxyXG4gICAgICAgICAgICAgICAgcm9vbTogeyBuYW1lOiBcIk1haW4gQmFsbCBSb29tXCIsIGV2ZW50WWVhciB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgK1xyXG4gICAgICA8L2k+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XG5pbXBvcnQgUmVhY3RQbGFjZUhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXJcIjtcbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXksIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwiLi4vaG9va3MvdXNlUmVxdWVzdERlbGF5XCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TcGVha2VyRmlsdGVyQ29udGV4dFwiO1xuaW1wb3J0IFNwZWFrZXJBZGQgZnJvbSBcIi4vU3BlYWtlckFkZFwiO1xuXG5mdW5jdGlvbiBTcGVha2Vyc0xpc3QoKSB7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiBzcGVha2Vyc0RhdGEsXG4gICAgcmVxdWVzdFN0YXR1cyxcbiAgICBlcnJvcixcbiAgICB1cGRhdGVSZWNvcmQsXG4gICAgZGVsZXRlUmVjb3JkLFxuICAgIGluc2VydFJlY29yZCxcbiAgfSA9IHVzZVJlcXVlc3REZWxheSgyMDAwLCBkYXRhKTtcblxuICBjb25zdCB7IHNlYXJjaFF1ZXJ5LCBldmVudFllYXIgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xuXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgRVJST1I6IDxiPmxvYWRpbmcgU3BlYWtlciBEYXRhIEZhaWxlZCB7ZXJyb3J9PC9iPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8vaWYgKGlzTG9hZGluZyA9PT0gdHJ1ZSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxuICAgICAgPFJlYWN0UGxhY2VIb2xkZXJcbiAgICAgICAgdHlwZT1cIm1lZGlhXCJcbiAgICAgICAgcm93cz17MTV9XG4gICAgICAgIGNsYXNzTmFtZT1cInNwZWFrZXJzbGlzdC1wbGFjZWhvbGRlclwiXG4gICAgICAgIHJlYWR5PXtyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTfVxuICAgICAgPlxuICAgICAgICA8U3BlYWtlckFkZCBldmVudFllYXI9e2V2ZW50WWVhcn0gaW5zZXJ0UmVjb3JkPXtpbnNlcnRSZWNvcmR9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAge3NwZWFrZXJzRGF0YVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc3BlYWtlcikge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIHNwZWFrZXIuZmlyc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSkgfHxcbiAgICAgICAgICAgICAgICBzcGVha2VyLmxhc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzcGVha2VyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzcGVha2VyLnNlc3Npb25zLmZpbmQoKHNlc3Npb24pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vzc2lvbi5ldmVudFllYXIgPT09IGV2ZW50WWVhcjtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XG4gICAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxuICAgICAgICAgICAgICAgICAgdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9XG4gICAgICAgICAgICAgICAgICBkZWxldGVSZWNvcmQ9e2RlbGV0ZVJlY29yZH1cbiAgICAgICAgICAgICAgICAgIGluc2VydFJlY29yZD17aW5zZXJ0UmVjb3JkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0UGxhY2VIb2xkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=