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

  console.log((0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext));

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
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

_s2(SpeakerImage, "Y2tkKsw01pONVCcAM8/KqSlQu+I=");

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
        lineNumber: 75,
        columnNumber: 9
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
        lineNumber: 98,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerFavorite, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "card-description",
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "social d-flex flex-row mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "company",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
            children: "Company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
            children: company
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "twitter",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
            children: twitterHandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
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
      className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "card card-height p-4 mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerDemographics, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this), showSessions === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Sessions, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 34
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 123,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcyJdLCJuYW1lcyI6WyJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwibmFtZSIsIlNlc3Npb25zIiwidXNlQ29udGV4dCIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiZXZlbnRZZWFyIiwiU3BlYWtlckNvbnRleHQiLCJzZXNzaW9ucyIsInNwZWFrZXIiLCJmaWx0ZXIiLCJzZXNzaW9uIiwibWFwIiwiaWQiLCJTcGVha2VySW1hZ2UiLCJjb25zb2xlIiwibG9nIiwiZmlyc3QiLCJsYXN0IiwiU3BlYWtlckZhdm9yaXRlIiwidXNlU3RhdGUiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJ1cGRhdGVSZWNvcmQiLCJkb25lQ2FsbGJhY2siLCJEYXRlIiwiZ2V0TWlsbGlzZWNvbmRzIiwiZmF2b3JpdGUiLCJTcGVha2VyRGVtb2dyYXBoaWNzIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJTcGVha2VyIiwiaW5zZXJ0UmVjb3JkIiwiZGVsZXRlUmVjb3JkIiwic2hvd1Nlc3Npb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULE9BQWtDO0FBQUEsTUFBZkMsS0FBZSxRQUFmQSxLQUFlO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ2hDLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUEsZUFDR0QsS0FESCxvQkFDVTtBQUFBLDJCQUFlQyxJQUFJLENBQUNDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0tBTlFILE87O0FBUVQsU0FBU0ksUUFBVCxHQUFvQjtBQUFBOztBQUFBLG9CQUNJQyxpREFBVSxDQUFDQyxnRkFBRCxDQURkO0FBQUEsTUFDVkMsU0FE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O0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVCRDs7SUEzQlFILG1COztNQUFBQSxtQjs7QUE2QlQsU0FBU0ksT0FBVCxRQUF3RTtBQUFBOztBQUFBLE1BQXJEdkIsT0FBcUQsU0FBckRBLE9BQXFEO0FBQUEsTUFBNUNjLFlBQTRDLFNBQTVDQSxZQUE0QztBQUFBLE1BQTlCVSxZQUE4QixTQUE5QkEsWUFBOEI7QUFBQSxNQUFoQkMsWUFBZ0IsU0FBaEJBLFlBQWdCOztBQUFBLHFCQUM3QzlCLGlEQUFVLENBQUNDLGdGQUFELENBRG1DO0FBQUEsTUFDOUQ4QixZQUQ4RCxnQkFDOURBLFlBRDhEOztBQUV0RSxzQkFDRSw4REFBQyxxRUFBRDtBQUNFLGdCQUFZLEVBQUVaLFlBRGhCO0FBRUUsZ0JBQVksRUFBRVUsWUFGaEI7QUFHRSxnQkFBWSxFQUFFQyxZQUhoQjtBQUFBLDJCQUtFO0FBQUssZUFBUyxFQUFDLDJEQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUEsZ0NBQ0UsOERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUtHQyxZQUFZLEtBQUssSUFBakIsZ0JBQXdCLDhEQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUF4QixHQUF1QyxJQUwxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7SUFqQlFILE87O01BQUFBLE87QUFtQlQsK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTU0NTRlZDY5NmE0NjllNzM5YTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3BlYWtlckZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHRcIjtcbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXkgZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xuaW1wb3J0IHsgU3BlYWtlckNvbnRleHQsIFNwZWFrZXJQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9TcGVha2VyQ29udGV4dFwiO1xuXG5mdW5jdGlvbiBTZXNzaW9uKHsgdGl0bGUsIHJvb20gfSkge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cbiAgICAgIHt0aXRsZX0gPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2Vzc2lvbnMoKSB7XG4gIGNvbnN0IHsgZXZlbnRZZWFyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcbiAgY29uc3Qge1xuICAgIHNwZWFrZXI6IHsgc2Vzc2lvbnMgfSxcbiAgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XG4gICAgICB7c2Vzc2lvbnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc2Vzc2lvbikge1xuICAgICAgICAgIHJldHVybiBzZXNzaW9uLmV2ZW50WWVhciA9PT0gZXZlbnRZZWFyO1xuICAgICAgICB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChzZXNzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiIGtleT17c2Vzc2lvbi5pZH0+XG4gICAgICAgICAgICAgIDxTZXNzaW9uIHsuLi5zZXNzaW9ufSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJJbWFnZSgpIHtcbiAgY29uc29sZS5sb2codXNlQ29udGV4dChTcGVha2VyQ29udGV4dCkpO1xuICBjb25zdCB7XG4gICAgc3BlYWtlcjogeyBpZCwgZmlyc3QsIGxhc3QgfSxcbiAgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcbiAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VyRmF2b3JpdGUoKSB7XG4gIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgc3BlYWtlciwgdXBkYXRlUmVjb3JkIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcblxuICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XG4gICAgc2V0SW5UcmFuc2l0aW9uKGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBJbiBTcGVha2VyRmF2b3JpdGU6ZG9uZUNhbGxiYWNrICAgICR7bmV3IERhdGUoKS5nZXRNaWxsaXNlY29uZHMoKX1gXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cbiAgICAgIDxzcGFuXG4gICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XG4gICAgICAgICAgdXBkYXRlUmVjb3JkKFxuICAgICAgICAgICAgeyAuLi5zcGVha2VyLCBmYXZvcml0ZTogIXNwZWFrZXIuZmF2b3JpdGUgfSxcbiAgICAgICAgICAgIGRvbmVDYWxsYmFja1xuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIHNwZWFrZXIuZmF2b3JpdGUgPT09IHRydWVcbiAgICAgICAgICAgICAgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCJcbiAgICAgICAgICAgICAgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgIEZhdm9yaXRle1wiIFwifVxuICAgICAgICB7aW5UcmFuc2l0aW9uID8gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhcyBmYS1jaXJjbGUtbm90Y2ggZmEtc3BpblwiPjwvc3Bhbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJEZW1vZ3JhcGhpY3MoKSB7XG4gIGNvbnN0IHsgc3BlYWtlciB9ID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XG5cbiAgY29uc3QgeyBmaXJzdCwgbGFzdCwgYmlvLCBjb21wYW55LCB0d2l0dGVySGFuZGxlIH0gPSBzcGVha2VyO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XG4gICAgICAgICAge2ZpcnN0fSB7bGFzdH1cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNwZWFrZXJGYXZvcml0ZSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntiaW99PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbCBkLWZsZXggZmxleC1yb3cgbXQtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueVwiPlxuICAgICAgICAgICAgPGg1PkNvbXBhbnk8L2g1PlxuICAgICAgICAgICAgPGg2Pntjb21wYW55fTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+XG4gICAgICAgICAgICA8aDU+VHdpdHRlcjwvaDU+XG4gICAgICAgICAgICA8aDY+e3R3aXR0ZXJIYW5kbGV9PC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlcih7IHNwZWFrZXIsIHVwZGF0ZVJlY29yZCwgaW5zZXJ0UmVjb3JkLCBkZWxldGVSZWNvcmQgfSkge1xuICBjb25zdCB7IHNob3dTZXNzaW9ucyB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPFNwZWFrZXJQcm92aWRlclxuICAgICAgdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9XG4gICAgICBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH1cbiAgICAgIGRlbGV0ZVJlY29yZD17ZGVsZXRlUmVjb3JkfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxuICAgICAgICAgIDxTcGVha2VySW1hZ2UgLz5cbiAgICAgICAgICA8U3BlYWtlckRlbW9ncmFwaGljcyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Nob3dTZXNzaW9ucyA9PT0gdHJ1ZSA/IDxTZXNzaW9ucyAvPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L1NwZWFrZXJQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=