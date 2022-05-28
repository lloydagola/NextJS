self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var S_pluralSight_DesigningComponents_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ "./src/contexts/SpeakerFilterContext.js");
/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useRequestDelay */ "./src/hooks/useRequestDelay.js");
/* harmony import */ var _contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/SpeakerContext */ "./src/contexts/SpeakerContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "S:\\pluralSight\\DesigningComponents\\src\\components\\Speaker.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,S_pluralSight_DesigningComponents_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Session(_ref) {
  var title = _ref.title,
      room = _ref.room;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
    className: "session w-100",
    children: [title, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
      children: ["Room: ", room.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 15
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_c = Session;

function Sessions() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerFilterContext),
      eventYear = _useContext.eventYear;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
      sessions = _useContext2.speaker.sessions;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "sessionBox card h-250",
    children: sessions.filter(function (session) {
      return session.eventYear === eventYear;
    }).map(function (session) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "session w-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Session, _objectSpread({}, session), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }, this)
      }, session.id, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_s(Sessions, "lHs79laDq/7eRwCXBUG3mjp9Tqk=");

_c2 = Sessions;

function SpeakerImage() {
  _s2();

  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
      _useContext3$speaker = _useContext3.speaker,
      id = _useContext3$speaker.id,
      first = _useContext3$speaker.first,
      last = _useContext3$speaker.last;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "speaker-img d-flex flex-row justify-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      className: "contain-fit",
      src: "/images/speaker-".concat(id, ".jpg"),
      width: "300",
      alt: "".concat(first, " ").concat(last)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

_s2(SpeakerImage, "A1E1x0EF2nIYjYM5Fi6KV9M84KI=");

_c3 = SpeakerImage;

function SpeakerFavorite() {
  _s3();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      inTransition = _useState[0],
      setInTransition = _useState[1];

  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
      speaker = _useContext4.speaker,
      updateRecord = _useContext4.updateRecord;

  function doneCallback() {
    setInTransition(false);
    console.log("In SpeakerFavorite:doneCallback    ".concat(new Date().getMilliseconds()));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "action padB1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      onClick: function onClick() {
        setInTransition(true);
        updateRecord(_objectSpread(_objectSpread({}, speaker), {}, {
          favorite: !speaker.favorite
        }), doneCallback);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
        className: speaker.favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

_s3(SpeakerFavorite, "hDPxjRGcNePU2mXlfUlLzCrUw7c=");

_c4 = SpeakerFavorite;

function SpeakerDemographics() {
  _s4();

  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
      speaker = _useContext5.speaker;

  var first = speaker.first,
      last = speaker.last,
      bio = speaker.bio,
      company = speaker.company,
      twitterHandle = speaker.twitterHandle;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "speaker-info",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        className: "text-truncate w-200",
        children: [first, " ", last]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerFavorite, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "card-description",
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "social d-flex flex-row mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "company",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
            children: "Company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
            children: company
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "twitter",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
            children: twitterHandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }, this);
}

_s4(SpeakerDemographics, "+GLFQhMVC35zrtukZQzc41tR8Ok=");

_c5 = SpeakerDemographics;

function Speaker(_ref2) {
  _s5();

  var speaker = _ref2.speaker,
      updateRecord = _ref2.updateRecord,
      insertRecord = _ref2.insertRecord,
      deleteRecord = _ref2.deleteRecord;

  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerFilterContext),
      showSessions = _useContext6.showSessions;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerProvider, {
    updateRecord: updateRecord,
    insertRecord: insertRecord,
    deleteRecord: deleteRecord,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 5
  }, this);
}

_s5(Speaker, "TltPt07ZHCSa0bZmdBKJaXz9l1w=");

_c6 = Speaker;
/* harmony default export */ __webpack_exports__["default"] = (Speaker);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Session");
$RefreshReg$(_c2, "Sessions");
$RefreshReg$(_c3, "SpeakerImage");
$RefreshReg$(_c4, "SpeakerFavorite");
$RefreshReg$(_c5, "SpeakerDemographics");
$RefreshReg$(_c6, "Speaker");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcyJdLCJuYW1lcyI6WyJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwibmFtZSIsIlNlc3Npb25zIiwidXNlQ29udGV4dCIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiZXZlbnRZZWFyIiwiU3BlYWtlckNvbnRleHQiLCJzZXNzaW9ucyIsInNwZWFrZXIiLCJmaWx0ZXIiLCJzZXNzaW9uIiwibWFwIiwiaWQiLCJTcGVha2VySW1hZ2UiLCJmaXJzdCIsImxhc3QiLCJTcGVha2VyRmF2b3JpdGUiLCJ1c2VTdGF0ZSIsImluVHJhbnNpdGlvbiIsInNldEluVHJhbnNpdGlvbiIsInVwZGF0ZVJlY29yZCIsImRvbmVDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwiZ2V0TWlsbGlzZWNvbmRzIiwiZmF2b3JpdGUiLCJTcGVha2VyRGVtb2dyYXBoaWNzIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJTcGVha2VyIiwiaW5zZXJ0UmVjb3JkIiwiZGVsZXRlUmVjb3JkIiwic2hvd1Nlc3Npb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULE9BQWtDO0FBQUEsTUFBZkMsS0FBZSxRQUFmQSxLQUFlO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ2hDLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUEsZUFDR0QsS0FESCxvQkFDVTtBQUFBLDJCQUFlQyxJQUFJLENBQUNDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0tBTlFILE87O0FBUVQsU0FBU0ksUUFBVCxHQUFvQjtBQUFBOztBQUFBLG9CQUNJQyxpREFBVSxDQUFDQyxnRkFBRCxDQURkO0FBQUEsTUFDVkMsU0FE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QUE2QlQsU0FBU0ksT0FBVCxRQUF3RTtBQUFBOztBQUFBLE1BQXJEdkIsT0FBcUQsU0FBckRBLE9BQXFEO0FBQUEsTUFBNUNZLFlBQTRDLFNBQTVDQSxZQUE0QztBQUFBLE1BQTlCWSxZQUE4QixTQUE5QkEsWUFBOEI7QUFBQSxNQUFoQkMsWUFBZ0IsU0FBaEJBLFlBQWdCOztBQUFBLHFCQUM3QzlCLGlEQUFVLENBQUNDLGdGQUFELENBRG1DO0FBQUEsTUFDOUQ4QixZQUQ4RCxnQkFDOURBLFlBRDhEOztBQUV0RSxzQkFDRSw4REFBQyxxRUFBRDtBQUNFLGdCQUFZLEVBQUVkLFlBRGhCO0FBRUUsZ0JBQVksRUFBRVksWUFGaEI7QUFHRSxnQkFBWSxFQUFFQyxZQUhoQjtBQUFBLDJCQUtFO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztJQVhRRixPOztNQUFBQSxPO0FBYVQsK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGYwYThmNzM1Y2M1ZGE5ZWZiMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3BlYWtlckZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHRcIjtcbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXkgZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xuaW1wb3J0IHsgU3BlYWtlckNvbnRleHQsIFNwZWFrZXJQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9TcGVha2VyQ29udGV4dFwiO1xuXG5mdW5jdGlvbiBTZXNzaW9uKHsgdGl0bGUsIHJvb20gfSkge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cbiAgICAgIHt0aXRsZX0gPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2Vzc2lvbnMoKSB7XG4gIGNvbnN0IHsgZXZlbnRZZWFyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcbiAgY29uc3Qge1xuICAgIHNwZWFrZXI6IHsgc2Vzc2lvbnMgfSxcbiAgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XG4gICAgICB7c2Vzc2lvbnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc2Vzc2lvbikge1xuICAgICAgICAgIHJldHVybiBzZXNzaW9uLmV2ZW50WWVhciA9PT0gZXZlbnRZZWFyO1xuICAgICAgICB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChzZXNzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiIGtleT17c2Vzc2lvbi5pZH0+XG4gICAgICAgICAgICAgIDxTZXNzaW9uIHsuLi5zZXNzaW9ufSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJJbWFnZSgpIHtcbiAgY29uc3Qge1xuICAgIHNwZWFrZXI6IHsgaWQsIGZpcnN0LCBsYXN0IH0sXG4gIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXG4gICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckZhdm9yaXRlKCkge1xuICBjb25zdCBbaW5UcmFuc2l0aW9uLCBzZXRJblRyYW5zaXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHNwZWFrZXIsIHVwZGF0ZVJlY29yZCB9ID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZUNhbGxiYWNrKCkge1xuICAgIHNldEluVHJhbnNpdGlvbihmYWxzZSk7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBgSW4gU3BlYWtlckZhdm9yaXRlOmRvbmVDYWxsYmFjayAgICAke25ldyBEYXRlKCkuZ2V0TWlsbGlzZWNvbmRzKCl9YFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHBhZEIxXCI+XG4gICAgICA8c3BhblxuICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2V0SW5UcmFuc2l0aW9uKHRydWUpO1xuICAgICAgICAgIHVwZGF0ZVJlY29yZChcbiAgICAgICAgICAgIHsgLi4uc3BlYWtlciwgZmF2b3JpdGU6ICFzcGVha2VyLmZhdm9yaXRlIH0sXG4gICAgICAgICAgICBkb25lQ2FsbGJhY2tcbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBzcGVha2VyLmZhdm9yaXRlID09PSB0cnVlXG4gICAgICAgICAgICAgID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiXG4gICAgICAgICAgICAgIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIC8+e1wiIFwifVxuICAgICAgICBGYXZvcml0ZXtcIiBcIn1cbiAgICAgICAge2luVHJhbnNpdGlvbiA/IChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIj48L3NwYW4+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKCkge1xuICBjb25zdCB7IHNwZWFrZXIgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuXG4gIGNvbnN0IHsgZmlyc3QsIGxhc3QsIGJpbywgY29tcGFueSwgdHdpdHRlckhhbmRsZSB9ID0gc3BlYWtlcjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxuICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XG4gICAgICAgIDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTcGVha2VyRmF2b3JpdGUgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57YmlvfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj5cbiAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cbiAgICAgICAgICAgIDxoNj57Y29tcGFueX08L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxuICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxuICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXIoeyBzcGVha2VyLCB1cGRhdGVSZWNvcmQsIGluc2VydFJlY29yZCwgZGVsZXRlUmVjb3JkIH0pIHtcbiAgY29uc3QgeyBzaG93U2Vzc2lvbnMgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxTcGVha2VyUHJvdmlkZXJcbiAgICAgIHVwZGF0ZVJlY29yZD17dXBkYXRlUmVjb3JkfVxuICAgICAgaW5zZXJ0UmVjb3JkPXtpbnNlcnRSZWNvcmR9XG4gICAgICBkZWxldGVSZWNvcmQ9e2RlbGV0ZVJlY29yZH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPjwvZGl2PlxuICAgIDwvU3BlYWtlclByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==