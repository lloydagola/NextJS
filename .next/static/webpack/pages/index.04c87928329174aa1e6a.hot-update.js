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
          lineNumber: 25,
          columnNumber: 15
        }, this)
      }, session.id, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_s(Sessions, "RA+HVAm2dNZ/ys9ifFFCpZo7nFg=");

_c2 = Sessions;

function SpeakerImage() {
  _s2();

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
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
      lineNumber: 39,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
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

  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
      speakerFavorite = _useContext3.speaker.speakerFavorite;

  function doneCallback() {
    setInTransition(false);
    console.log("In SpeakerFavorite:doneCallback    ".concat(new Date().getMilliseconds()));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "action padB1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      onClick: function onClick() {
        setInTransition(true);
        (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.updateRecord)(speaker);
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

_s3(SpeakerFavorite, "MwiiM8NWS+DWDRWwhUu7P2tD6vA=");

_c4 = SpeakerFavorite;

function SpeakerDemographics() {
  _s4();

  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
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

  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
      speaker = _useContext6.speaker,
      updateRecord = _useContext6.updateRecord;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerProvider, {
    speaker: speaker,
    updateRecord: updateRecord,
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

_s5(Speaker, "I6GVErSOKuEJTj8KWNWly+Y6CcQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcyJdLCJuYW1lcyI6WyJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwibmFtZSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJ1c2VDb250ZXh0IiwiU3BlYWtlckZpbHRlckNvbnRleHQiLCJldmVudFllYXIiLCJmaWx0ZXIiLCJzZXNzaW9uIiwibWFwIiwiaWQiLCJTcGVha2VySW1hZ2UiLCJTcGVha2VyQ29udGV4dCIsInNwZWFrZXIiLCJmaXJzdCIsImxhc3QiLCJTcGVha2VyRmF2b3JpdGUiLCJ1c2VTdGF0ZSIsImluVHJhbnNpdGlvbiIsInNldEluVHJhbnNpdGlvbiIsInNwZWFrZXJGYXZvcml0ZSIsImRvbmVDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwiZ2V0TWlsbGlzZWNvbmRzIiwidXBkYXRlUmVjb3JkIiwiZmF2b3JpdGUiLCJTcGVha2VyRGVtb2dyYXBoaWNzIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJTcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULE9BQWtDO0FBQUEsTUFBZkMsS0FBZSxRQUFmQSxLQUFlO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ2hDLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUEsZUFDR0QsS0FESCxvQkFDVTtBQUFBLDJCQUFlQyxJQUFJLENBQUNDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0tBTlFILE87O0FBUVQsU0FBU0ksUUFBVCxRQUFnQztBQUFBOztBQUFBLE1BQVpDLFFBQVksU0FBWkEsUUFBWTs7QUFBQSxvQkFDUkMsaURBQVUsQ0FBQ0MsZ0ZBQUQsQ0FE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QyxLQURLO0FBQUEsTUFDRUMsSUFERixHQUNxQkYsT0FEckIsQ0FDRUUsSUFERjtBQUFBLE1BQ1FaLFFBRFIsR0FDcUJVLE9BRHJCLENBQ1FWLFFBRFI7O0FBQUEscUJBRVFDLGlEQUFVLENBQUNDLGdGQUFELENBRmxCO0FBQUEsTUFFVDRCLFlBRlMsZ0JBRVRBLFlBRlM7O0FBQUEscUJBR2lCN0IsaURBQVUsQ0FBQ1Esb0VBQUQsQ0FIM0I7QUFBQSxNQUdUQyxPQUhTLGdCQUdUQSxPQUhTO0FBQUEsTUFHQWEsWUFIQSxnQkFHQUEsWUFIQTs7QUFJakIsc0JBQ0UsOERBQUMscUVBQUQ7QUFBaUIsV0FBTyxFQUFFYixPQUExQjtBQUFtQyxnQkFBWSxFQUFFYSxZQUFqRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLDJEQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUEsZ0NBQ0UsOERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUtHTyxZQUFZLEtBQUssSUFBakIsZ0JBQXdCLDhEQUFDLFFBQUQ7QUFBVSxnQkFBUSxFQUFFOUI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUF4QixHQUEyRCxJQUw5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7SUFmUTZCLE87O01BQUFBLE87QUFpQlQsK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDRjODc5MjgzMjkxNzRhYTFlNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3BlYWtlckZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHRcIjtcbmltcG9ydCB7IHVwZGF0ZVJlY29yZCB9IGZyb20gXCIuLi9ob29rcy91c2VSZXF1ZXN0RGVsYXlcIjtcbmltcG9ydCB7IFNwZWFrZXJDb250ZXh0LCBTcGVha2VyUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvU3BlYWtlckNvbnRleHRcIjtcblxuZnVuY3Rpb24gU2Vzc2lvbih7IHRpdGxlLCByb29tIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XG4gICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNlc3Npb25zKHsgc2Vzc2lvbnMgfSkge1xuICBjb25zdCB7IGV2ZW50WWVhciB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cbiAgICAgIHtzZXNzaW9uc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzZXNzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHNlc3Npb24uZXZlbnRZZWFyID09PSBldmVudFllYXI7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHNlc3Npb24pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCIga2V5PXtzZXNzaW9uLmlkfT5cbiAgICAgICAgICAgICAgPFNlc3Npb24gey4uLnNlc3Npb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckltYWdlKCkge1xuICBjb25zdCB7XG4gICAgc3BlYWtlcjogeyBpZCwgZmlyc3QsIGxhc3QgfSxcbiAgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcbiAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VyRmF2b3JpdGUoKSB7XG4gIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHtcbiAgICBzcGVha2VyOiB7IHNwZWFrZXJGYXZvcml0ZSB9LFxuICB9ID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XG4gIGZ1bmN0aW9uIGRvbmVDYWxsYmFjaygpIHtcbiAgICBzZXRJblRyYW5zaXRpb24oZmFsc2UpO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYEluIFNwZWFrZXJGYXZvcml0ZTpkb25lQ2FsbGJhY2sgICAgJHtuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpfWBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxuICAgICAgPHNwYW5cbiAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNldEluVHJhbnNpdGlvbih0cnVlKTtcbiAgICAgICAgICB1cGRhdGVSZWNvcmQoc3BlYWtlcik7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGZhdm9yaXRlID09PSB0cnVlID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIC8+e1wiIFwifVxuICAgICAgICBGYXZvcml0ZXtcIiBcIn1cbiAgICAgICAge2luVHJhbnNpdGlvbiA/IChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIj48L3NwYW4+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKCkge1xuICBjb25zdCB7IHNwZWFrZXIgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuXG4gIGNvbnN0IHsgZmlyc3QsIGxhc3QsIGJpbywgY29tcGFueSwgdHdpdHRlckhhbmRsZSwgZmF2b3JpdGUgfSA9IHNwZWFrZXI7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cbiAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxuICAgICAgICA8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8U3BlYWtlckZhdm9yaXRlIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Jpb308L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIGQtZmxleCBmbGV4LXJvdyBtdC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55XCI+XG4gICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XG4gICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cbiAgICAgICAgICAgIDxoNT5Ud2l0dGVyPC9oNT5cbiAgICAgICAgICAgIDxoNj57dHdpdHRlckhhbmRsZX08L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VyKCkge1xuICBjb25zdCB7IGlkLCBmaXJzdCwgbGFzdCwgc2Vzc2lvbnMgfSA9IHNwZWFrZXI7XG4gIGNvbnN0IHsgc2hvd1Nlc3Npb25zIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcbiAgY29uc3QgeyBzcGVha2VyLCB1cGRhdGVSZWNvcmQgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxTcGVha2VyUHJvdmlkZXIgc3BlYWtlcj17c3BlYWtlcn0gdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XG4gICAgICAgICAgPFNwZWFrZXJJbWFnZSAvPlxuICAgICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2hvd1Nlc3Npb25zID09PSB0cnVlID8gPFNlc3Npb25zIHNlc3Npb25zPXtzZXNzaW9uc30gLz4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9TcGVha2VyUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9