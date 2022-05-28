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
/* harmony import */ var _contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/SpeakerContext */ "./src/contexts/SpeakerContext.js");
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
      lineNumber: 8,
      columnNumber: 15
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

_c = Session;

function Sessions(_ref2) {
  _s();

  var sessions = _ref2.sessions;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerFilterContext),
      eventYear = _useContext.eventYear;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "sessionBox card h-250",
    children: sessions.filter(function (session) {
      return session.eventYear === eventYear;
    }).map(function (session) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "session w-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Session, _objectSpread({}, session), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }, this)
      }, session.id, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_s(Sessions, "RA+HVAm2dNZ/ys9ifFFCpZo7nFg=");

_c2 = Sessions;

function SpeakerImage() {
  _s2();

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerContext),
      _useContext2$speaker = _useContext2.speaker,
      id = _useContext2$speaker.id,
      first = _useContext2$speaker.first,
      last = _useContext2$speaker.last;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "speaker-img d-flex flex-row justify-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      className: "contain-fit",
      src: "/images/speaker-".concat(id, ".jpg"),
      width: "300",
      alt: "".concat(first, " ").concat(last)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
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

  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerContext),
      speakerFavorite = _useContext3.speaker.speakerFavorite,
      updateSpeaker = _useContext3.updateSpeaker;

  function doneCallback() {
    setInTransition(false);
    console.log("In SpeakerFavorite:doneCallback    ".concat(new Date().getMilliseconds()));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "action padB1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      onClick: function onClick() {
        setInTransition(true);
        return onFavoriteToggle(doneCallback);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
        className: favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

_s3(SpeakerFavorite, "z4WWhIOsWrpMzC418euBJqUaego=");

_c4 = SpeakerFavorite;

function SpeakerDemographics() {
  _s4();

  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerContext),
      speaker = _useContext4.speaker;

  var first = speaker.first,
      last = speaker.last,
      bio = speaker.bio,
      company = speaker.company,
      twitterHandle = speaker.twitterHandle,
      favorite = speaker.favorite;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "speaker-info",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        className: "text-truncate w-200",
        children: [first, " ", last]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerFavorite, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "card-description",
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "social d-flex flex-row mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "company",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
            children: "Company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
            children: company
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "twitter",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
            children: twitterHandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

_s4(SpeakerDemographics, "+GLFQhMVC35zrtukZQzc41tR8Ok=");

_c5 = SpeakerDemographics;

function Speaker() {
  _s5();

  var id = speaker.id,
      first = speaker.first,
      last = speaker.last,
      sessions = speaker.sessions;

  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerFilterContext),
      showSessions = _useContext5.showSessions;

  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerContext),
      speaker = _useContext6.speaker,
      updateSpeaker = _useContext6.updateSpeaker;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerProvider, {
    speaker: speaker,
    updateSpeaker: updateSpeaker,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "card card-height p-4 mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerDemographics, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this), showSessions === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Sessions, {
        sessions: sessions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 34
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 5
  }, this);
}

_s5(Speaker, "l6h1od/1Kzgf9H7oIGhkK3Z3ycQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcyJdLCJuYW1lcyI6WyJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwibmFtZSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJ1c2VDb250ZXh0IiwiU3BlYWtlckZpbHRlckNvbnRleHQiLCJldmVudFllYXIiLCJmaWx0ZXIiLCJzZXNzaW9uIiwibWFwIiwiaWQiLCJTcGVha2VySW1hZ2UiLCJTcGVha2VyQ29udGV4dCIsInNwZWFrZXIiLCJmaXJzdCIsImxhc3QiLCJTcGVha2VyRmF2b3JpdGUiLCJ1c2VTdGF0ZSIsImluVHJhbnNpdGlvbiIsInNldEluVHJhbnNpdGlvbiIsInNwZWFrZXJGYXZvcml0ZSIsInVwZGF0ZVNwZWFrZXIiLCJkb25lQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldE1pbGxpc2Vjb25kcyIsIm9uRmF2b3JpdGVUb2dnbGUiLCJmYXZvcml0ZSIsIlNwZWFrZXJEZW1vZ3JhcGhpY3MiLCJiaW8iLCJjb21wYW55IiwidHdpdHRlckhhbmRsZSIsIlNwZWFrZXIiLCJzaG93U2Vzc2lvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsT0FBa0M7QUFBQSxNQUFmQyxLQUFlLFFBQWZBLEtBQWU7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDaEMsc0JBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQSxlQUNHRCxLQURILG9CQUNVO0FBQUEsMkJBQWVDLElBQUksQ0FBQ0MsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7S0FOUUgsTzs7QUFRVCxTQUFTSSxRQUFULFFBQWdDO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZOztBQUFBLG9CQUNSQyxpREFBVSxD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QkcsT0FEckIsQ0FDVEgsRUFEUztBQUFBLE1BQ0xJLEtBREssR0FDcUJELE9BRHJCLENBQ0xDLEtBREs7QUFBQSxNQUNFQyxJQURGLEdBQ3FCRixPQURyQixDQUNFRSxJQURGO0FBQUEsTUFDUVosUUFEUixHQUNxQlUsT0FEckIsQ0FDUVYsUUFEUjs7QUFBQSxxQkFFUUMsaURBQVUsQ0FBQ0MsZ0ZBQUQsQ0FGbEI7QUFBQSxNQUVUNkIsWUFGUyxnQkFFVEEsWUFGUzs7QUFBQSxxQkFHa0I5QixpREFBVSxDQUFDUSxvRUFBRCxDQUg1QjtBQUFBLE1BR1RDLE9BSFMsZ0JBR1RBLE9BSFM7QUFBQSxNQUdBUSxhQUhBLGdCQUdBQSxhQUhBOztBQUlqQixzQkFDRSw4REFBQyxxRUFBRDtBQUFpQixXQUFPLEVBQUVSLE9BQTFCO0FBQW1DLGlCQUFhLEVBQUVRLGFBQWxEO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsMkRBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsMkJBQWY7QUFBQSxnQ0FDRSw4REFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBS0dhLFlBQVksS0FBSyxJQUFqQixnQkFBd0IsOERBQUMsUUFBRDtBQUFVLGdCQUFRLEVBQUUvQjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXhCLEdBQTJELElBTDlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEOztJQWZROEIsTzs7TUFBQUEsTztBQWlCVCwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43YWVjOGJkMjMxOTY2MjNlZjA5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TcGVha2VyRmlsdGVyQ29udGV4dFwiO1xuaW1wb3J0IHsgU3BlYWtlckNvbnRleHQsIFNwZWFrZXJQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9TcGVha2VyQ29udGV4dFwiO1xuXG5mdW5jdGlvbiBTZXNzaW9uKHsgdGl0bGUsIHJvb20gfSkge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cbiAgICAgIHt0aXRsZX0gPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2Vzc2lvbnMoeyBzZXNzaW9ucyB9KSB7XG4gIGNvbnN0IHsgZXZlbnRZZWFyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxuICAgICAge3Nlc3Npb25zXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNlc3Npb24pIHtcbiAgICAgICAgICByZXR1cm4gc2Vzc2lvbi5ldmVudFllYXIgPT09IGV2ZW50WWVhcjtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoc2Vzc2lvbikge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIiBrZXk9e3Nlc3Npb24uaWR9PlxuICAgICAgICAgICAgICA8U2Vzc2lvbiB7Li4uc2Vzc2lvbn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VySW1hZ2UoKSB7XG4gIGNvbnN0IHtcbiAgICBzcGVha2VyOiB7IGlkLCBmaXJzdCwgbGFzdCB9LFxuICB9ID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxuICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgd2lkdGg9XCIzMDBcIlxuICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJGYXZvcml0ZSgpIHtcbiAgY29uc3QgW2luVHJhbnNpdGlvbiwgc2V0SW5UcmFuc2l0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge1xuICAgIHNwZWFrZXI6IHsgc3BlYWtlckZhdm9yaXRlIH0sXG4gICAgdXBkYXRlU3BlYWtlcixcbiAgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XG4gICAgc2V0SW5UcmFuc2l0aW9uKGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBJbiBTcGVha2VyRmF2b3JpdGU6ZG9uZUNhbGxiYWNrICAgICR7bmV3IERhdGUoKS5nZXRNaWxsaXNlY29uZHMoKX1gXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cbiAgICAgIDxzcGFuXG4gICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIG9uRmF2b3JpdGVUb2dnbGUoZG9uZUNhbGxiYWNrKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgIEZhdm9yaXRle1wiIFwifVxuICAgICAgICB7aW5UcmFuc2l0aW9uID8gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhcyBmYS1jaXJjbGUtbm90Y2ggZmEtc3BpblwiPjwvc3Bhbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJEZW1vZ3JhcGhpY3MoKSB7XG4gIGNvbnN0IHsgc3BlYWtlciB9ID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XG5cbiAgY29uc3QgeyBmaXJzdCwgbGFzdCwgYmlvLCBjb21wYW55LCB0d2l0dGVySGFuZGxlLCBmYXZvcml0ZSB9ID0gc3BlYWtlcjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxuICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XG4gICAgICAgIDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTcGVha2VyRmF2b3JpdGUgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57YmlvfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj5cbiAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cbiAgICAgICAgICAgIDxoNj57Y29tcGFueX08L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxuICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxuICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXIoKSB7XG4gIGNvbnN0IHsgaWQsIGZpcnN0LCBsYXN0LCBzZXNzaW9ucyB9ID0gc3BlYWtlcjtcbiAgY29uc3QgeyBzaG93U2Vzc2lvbnMgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xuICBjb25zdCB7IHNwZWFrZXIsIHVwZGF0ZVNwZWFrZXIgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxTcGVha2VyUHJvdmlkZXIgc3BlYWtlcj17c3BlYWtlcn0gdXBkYXRlU3BlYWtlcj17dXBkYXRlU3BlYWtlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cbiAgICAgICAgICA8U3BlYWtlckltYWdlIC8+XG4gICAgICAgICAgPFNwZWFrZXJEZW1vZ3JhcGhpY3MgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtzaG93U2Vzc2lvbnMgPT09IHRydWUgPyA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfSAvPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L1NwZWFrZXJQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=