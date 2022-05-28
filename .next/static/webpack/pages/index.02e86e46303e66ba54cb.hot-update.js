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
      speaker = _useContext4.speaker;

  function doneCallback() {
    setInTransition(false);
    console.log("In SpeakerFavorite:doneCallback    ".concat(new Date().getMilliseconds()));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "action padB1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      onClick: function onClick() {
        setInTransition(true);
        (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.updateRecord)(_objectSpread(_objectSpread({}, speaker), {}, {
          favorite: !speaker.favorite
        }), doneCallback);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
        className: speaker.favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

_s3(SpeakerFavorite, "viTVBCX7lM+AZVoZrpnlSa9A7p4=");

_c4 = SpeakerFavorite;

function SpeakerDemographics() {
  _s4();

  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
      speaker = _useContext5.speaker;

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
        lineNumber: 96,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerFavorite, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "card-description",
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "social d-flex flex-row mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "company",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
            children: "Company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
            children: company
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "twitter",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
            children: twitterHandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }, this);
}

_s4(SpeakerDemographics, "+GLFQhMVC35zrtukZQzc41tR8Ok=");

_c5 = SpeakerDemographics;

function Speaker() {
  _s5();

  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerFilterContext),
      showSessions = _useContext6.showSessions;

  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
      speaker = _useContext7.speaker,
      updateRecord = _useContext7.updateRecord;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerProvider, {
    speaker: speaker,
    updateRecord: updateRecord,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "card card-height p-4 mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerDemographics, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this), showSessions === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Sessions, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 34
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcyJdLCJuYW1lcyI6WyJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwibmFtZSIsIlNlc3Npb25zIiwidXNlQ29udGV4dCIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiZXZlbnRZZWFyIiwiU3BlYWtlckNvbnRleHQiLCJzZXNzaW9ucyIsInNwZWFrZXIiLCJmaWx0ZXIiLCJzZXNzaW9uIiwibWFwIiwiaWQiLCJTcGVha2VySW1hZ2UiLCJmaXJzdCIsImxhc3QiLCJTcGVha2VyRmF2b3JpdGUiLCJ1c2VTdGF0ZSIsImluVHJhbnNpdGlvbiIsInNldEluVHJhbnNpdGlvbiIsImRvbmVDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwiZ2V0TWlsbGlzZWNvbmRzIiwidXBkYXRlUmVjb3JkIiwiZmF2b3JpdGUiLCJTcGVha2VyRGVtb2dyYXBoaWNzIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJTcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULE9BQWtDO0FBQUEsTUFBZkMsS0FBZSxRQUFmQSxLQUFlO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ2hDLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUEsZUFDR0QsS0FESCxvQkFDVTtBQUFBLDJCQUFlQyxJQUFJLENBQUNDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0tBTlFILE87O0FBUVQsU0FBU0ksUUFBVCxHQUFvQjtBQUFBOztBQUFBLG9CQUNJQyxpREFBVSxDQUFDQyxnRkFBRCxDQURkO0FBQUEsTUFDVkMsU0FEVSxlQUNWQSxTQURVOztBQUFBLHFCQUlkRixpREFBVSxDQUFDRyxvRUFBRCxDQUpJO0FBQUEsTUFHTEMsUUFISyxnQkFHaEJDLE9BSGdCLENBR0xELFFBSEs7O0FBS2xCLHNCQUNFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUEsY0FDR0EsUUFBUSxDQUNORSxNQURGLENBQ1MsVUFBVUMsT0FBVixFQUFtQjtBQUN6QixhQUFPQSxPQUFPLENBQUNMLFNBQVIsS0FBc0JBLFNBQTdCO0FBQ0QsS0FIRixFQUlFTSxHQUpGLENBSU0sVUFBVUQsT0FBVixFQUFtQjtBQUN0QiwwQkFDRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLCtCQUNFLDhEQUFDLE9BQUQsb0JBQWFBLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQW9DQSxPQUFPLENBQUNFLEVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQUtELEtBVkY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7R0FwQlFWLFE7O01BQUFBLFE7O0FBc0JULFNBQVNXLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxxQkFHbEJWLGlEQUFVLENBQUNHLG9FQUFELENBSFE7QUFBQSwwQ0FFcEJFLE9BRm9CO0FBQUEsTUFFVEksRUFGUyx3QkFFVEEsRUFGUztBQUFBLE1BRUxFLEtBRkssd0JBRUxBLEtBRks7QUFBQSxNQUVFQyxJQUZGLHdCQUVFQSxJQUZGOztBQUl0QixzQkFDRTtBQUFLLGFBQVMsRUFBQyw2RUFBZjtBQUFBLDJCQUNFO0FBQ0UsZUFBUyxFQUFDLGFBRFo7QUFFRSxTQUFHLDRCQUFxQkgsRUFBckIsU0FGTDtBQUdFLFdBQUssRUFBQyxLQUhSO0FBSUUsU0FBRyxZQUFLRSxLQUFMLGNBQWNDLElBQWQ7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0lBZFFGLFk7O01BQUFBLFk7O0FBZ0JULFNBQVNHLGVBQVQsR0FBMkI7QUFBQTs7QUFBQSxrQkFDZUMsK0NBQVEsQ0FBQyxLQUFELENBRHZCO0FBQUEsTUFDbEJDLFlBRGtCO0FBQUEsTUFDSkMsZUFESTs7QUFBQSxxQkFFTGhCLGlEQUFVLENBQUNHLG9FQUFELENBRkw7QUFBQSxNQUVqQkUsT0FGaUIsZ0JBRWpCQSxPQUZpQjs7QUFHekIsV0FBU1ksWUFBVCxHQUF3QjtBQUN0QkQsbUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDQUUsV0FBTyxDQUFDQyxHQUFSLDhDQUN3QyxJQUFJQyxJQUFKLEdBQVdDLGVBQVgsRUFEeEM7QUFHRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUEsMkJBQ0U7QUFDRSxhQUFPLEVBQUUsbUJBQVk7QUFDbkJMLHVCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0FNLDRFQUFZLGlDQUNMakIsT0FESztBQUNJa0Isa0JBQVEsRUFBRSxDQUFDbEIsT0FBTyxDQUFDa0I7QUFEdkIsWUFFVk4sWUFGVSxDQUFaO0FBSUQsT0FQSDtBQUFBLDhCQVNFO0FBQ0UsaUJBQVMsRUFDUFosT0FBTyxDQUFDa0IsUUFBUixLQUFxQixJQUFyQixHQUNJLG1CQURKLEdBRUk7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsRUFlSyxHQWZMLGNBZ0JXLEdBaEJYLEVBaUJHUixZQUFZLGdCQUNYO0FBQU0saUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFcsR0FFVCxJQW5CTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7O0lBbkNRRixlOztNQUFBQSxlOztBQXFDVCxTQUFTVyxtQkFBVCxHQUErQjtBQUFBOztBQUFBLHFCQUNUeEIsaURBQVUsQ0FBQ0csb0VBQUQsQ0FERDtBQUFBLE1BQ3JCRSxPQURxQixnQkFDckJBLE9BRHFCOztBQUFBLE1BR3JCTSxLQUhxQixHQUdrQ04sT0FIbEMsQ0FHckJNLEtBSHFCO0FBQUEsTUFHZEMsSUFIYyxHQUdrQ1AsT0FIbEMsQ0FHZE8sSUFIYztBQUFBLE1BR1JhLEdBSFEsR0FHa0NwQixPQUhsQyxDQUdSb0IsR0FIUTtBQUFBLE1BR0hDLE9BSEcsR0FHa0NyQixPQUhsQyxDQUdIcUIsT0FIRztBQUFBLE1BR01DLGFBSE4sR0FHa0N0QixPQUhsQyxDQUdNc0IsYUFITjtBQUFBLE1BR3FCSixRQUhyQixHQUdrQ2xCLE9BSGxDLENBR3FCa0IsUUFIckI7QUFJN0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLHFDQUFmO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLHFCQUFkO0FBQUEsbUJBQ0daLEtBREgsT0FDV0MsSUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRSw4REFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FO0FBQUEsOEJBQ0U7QUFBRyxpQkFBUyxFQUFDLGtCQUFiO0FBQUEsa0JBQWlDYTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxzQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUssbUJBQVMsRUFBQyxTQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBLHNCQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJEOztJQTNCUUgsbUI7O01BQUFBLG1COztBQTZCVCxTQUFTSSxPQUFULEdBQW1CO0FBQUE7O0FBQUEscUJBQ1E1QixpREFBVSxDQUFDQyxnRkFBRCxDQURsQjtBQUFBLE1BQ1Q0QixZQURTLGdCQUNUQSxZQURTOztBQUFBLHFCQUVpQjdCLGlEQUFVLENBQUNHLG9FQUFELENBRjNCO0FBQUEsTUFFVEUsT0FGUyxnQkFFVEEsT0FGUztBQUFBLE1BRUFpQixZQUZBLGdCQUVBQSxZQUZBOztBQUdqQixzQkFDRSw4REFBQyxxRUFBRDtBQUFpQixXQUFPLEVBQUVqQixPQUExQjtBQUFtQyxnQkFBWSxFQUFFaUIsWUFBakQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQywyREFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQywyQkFBZjtBQUFBLGdDQUNFLDhEQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFLR08sWUFBWSxLQUFLLElBQWpCLGdCQUF3Qiw4REFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBeEIsR0FBdUMsSUFMMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0lBZFFELE87O01BQUFBLE87QUFnQlQsK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDJlODZlNDYzMDNlNjZiYTU0Y2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3BlYWtlckZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHRcIjtcbmltcG9ydCB7IHVwZGF0ZVJlY29yZCB9IGZyb20gXCIuLi9ob29rcy91c2VSZXF1ZXN0RGVsYXlcIjtcbmltcG9ydCB7IFNwZWFrZXJDb250ZXh0LCBTcGVha2VyUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvU3BlYWtlckNvbnRleHRcIjtcblxuZnVuY3Rpb24gU2Vzc2lvbih7IHRpdGxlLCByb29tIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XG4gICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNlc3Npb25zKCkge1xuICBjb25zdCB7IGV2ZW50WWVhciB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XG4gIGNvbnN0IHtcbiAgICBzcGVha2VyOiB7IHNlc3Npb25zIH0sXG4gIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxuICAgICAge3Nlc3Npb25zXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNlc3Npb24pIHtcbiAgICAgICAgICByZXR1cm4gc2Vzc2lvbi5ldmVudFllYXIgPT09IGV2ZW50WWVhcjtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoc2Vzc2lvbikge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIiBrZXk9e3Nlc3Npb24uaWR9PlxuICAgICAgICAgICAgICA8U2Vzc2lvbiB7Li4uc2Vzc2lvbn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VySW1hZ2UoKSB7XG4gIGNvbnN0IHtcbiAgICBzcGVha2VyOiB7IGlkLCBmaXJzdCwgbGFzdCB9LFxuICB9ID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxuICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgd2lkdGg9XCIzMDBcIlxuICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJGYXZvcml0ZSgpIHtcbiAgY29uc3QgW2luVHJhbnNpdGlvbiwgc2V0SW5UcmFuc2l0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBzcGVha2VyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcbiAgZnVuY3Rpb24gZG9uZUNhbGxiYWNrKCkge1xuICAgIHNldEluVHJhbnNpdGlvbihmYWxzZSk7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBgSW4gU3BlYWtlckZhdm9yaXRlOmRvbmVDYWxsYmFjayAgICAke25ldyBEYXRlKCkuZ2V0TWlsbGlzZWNvbmRzKCl9YFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHBhZEIxXCI+XG4gICAgICA8c3BhblxuICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2V0SW5UcmFuc2l0aW9uKHRydWUpO1xuICAgICAgICAgIHVwZGF0ZVJlY29yZChcbiAgICAgICAgICAgIHsgLi4uc3BlYWtlciwgZmF2b3JpdGU6ICFzcGVha2VyLmZhdm9yaXRlIH0sXG4gICAgICAgICAgICBkb25lQ2FsbGJhY2tcbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBzcGVha2VyLmZhdm9yaXRlID09PSB0cnVlXG4gICAgICAgICAgICAgID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiXG4gICAgICAgICAgICAgIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIC8+e1wiIFwifVxuICAgICAgICBGYXZvcml0ZXtcIiBcIn1cbiAgICAgICAge2luVHJhbnNpdGlvbiA/IChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIj48L3NwYW4+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKCkge1xuICBjb25zdCB7IHNwZWFrZXIgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuXG4gIGNvbnN0IHsgZmlyc3QsIGxhc3QsIGJpbywgY29tcGFueSwgdHdpdHRlckhhbmRsZSwgZmF2b3JpdGUgfSA9IHNwZWFrZXI7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cbiAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxuICAgICAgICA8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8U3BlYWtlckZhdm9yaXRlIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Jpb308L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIGQtZmxleCBmbGV4LXJvdyBtdC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55XCI+XG4gICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XG4gICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cbiAgICAgICAgICAgIDxoNT5Ud2l0dGVyPC9oNT5cbiAgICAgICAgICAgIDxoNj57dHdpdHRlckhhbmRsZX08L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VyKCkge1xuICBjb25zdCB7IHNob3dTZXNzaW9ucyB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XG4gIGNvbnN0IHsgc3BlYWtlciwgdXBkYXRlUmVjb3JkIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcbiAgcmV0dXJuIChcbiAgICA8U3BlYWtlclByb3ZpZGVyIHNwZWFrZXI9e3NwZWFrZXJ9IHVwZGF0ZVJlY29yZD17dXBkYXRlUmVjb3JkfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxuICAgICAgICAgIDxTcGVha2VySW1hZ2UgLz5cbiAgICAgICAgICA8U3BlYWtlckRlbW9ncmFwaGljcyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Nob3dTZXNzaW9ucyA9PT0gdHJ1ZSA/IDxTZXNzaW9ucyAvPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L1NwZWFrZXJQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=