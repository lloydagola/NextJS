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
      speaker = _useContext2.speaker;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "sessionBox card h-250",
    children: speaker.sessions.filter(function (session) {
      return session.eventYear === eventYear;
    }).map(function (session) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "session w-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Session, _objectSpread({}, session), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 15
        }, this)
      }, session.id, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(Sessions, "Mbmdx4PcMD6cs0fOkUGItK70sHk=");

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
      lineNumber: 40,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
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

  var _useRequestDelay = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default)(),
      updateRecord = _useRequestDelay.updateRecord;

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

_s3(SpeakerFavorite, "t8qsAMDdlODm32bTdvlcOb9kFGE=", false, function () {
  return [_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default];
});

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
      speaker = _useContext7.speaker;

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

_s5(Speaker, "dIe6v1whXIk3x+2I8K/ONUlK6Oo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcyJdLCJuYW1lcyI6WyJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwibmFtZSIsIlNlc3Npb25zIiwidXNlQ29udGV4dCIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiZXZlbnRZZWFyIiwiU3BlYWtlckNvbnRleHQiLCJzcGVha2VyIiwic2Vzc2lvbnMiLCJmaWx0ZXIiLCJzZXNzaW9uIiwibWFwIiwiaWQiLCJTcGVha2VySW1hZ2UiLCJmaXJzdCIsImxhc3QiLCJTcGVha2VyRmF2b3JpdGUiLCJ1c2VTdGF0ZSIsImluVHJhbnNpdGlvbiIsInNldEluVHJhbnNpdGlvbiIsInVzZVJlcXVlc3REZWxheSIsInVwZGF0ZVJlY29yZCIsImRvbmVDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwiZ2V0TWlsbGlzZWNvbmRzIiwiZmF2b3JpdGUiLCJTcGVha2VyRGVtb2dyYXBoaWNzIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJTcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULE9BQWtDO0FBQUEsTUFBZkMsS0FBZSxRQUFmQSxLQUFlO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ2hDLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUEsZUFDR0QsS0FESCxvQkFDVTtBQUFBLDJCQUFlQyxJQUFJLENBQUNDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0tBTlFILE87O0FBUVQsU0FBU0ksUUFBVCxHQUFvQjtBQUFBOztBQUFBLG9CQUNJQyxpREFBVSxDQUFDQyxnRkFBRCxDQURkO0FBQUEsTUFDVkMsU0FEVSxlQUNWQSxTQURV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QTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1QkQ7O0lBM0JRSCxtQjs7TUFBQUEsbUI7O0FBNkJULFNBQVNJLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSxxQkFDUTdCLGlEQUFVLENBQUNDLGdGQUFELENBRGxCO0FBQUEsTUFDVDZCLFlBRFMsZ0JBQ1RBLFlBRFM7O0FBQUEscUJBRUc5QixpREFBVSxDQUFDRyxvRUFBRCxDQUZiO0FBQUEsTUFFVEMsT0FGUyxnQkFFVEEsT0FGUzs7QUFHakIsc0JBQ0UsOERBQUMscUVBQUQ7QUFBaUIsV0FBTyxFQUFFQSxPQUExQjtBQUFtQyxnQkFBWSxFQUFFYyxZQUFqRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLDJEQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUEsZ0NBQ0UsOERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUtHWSxZQUFZLEtBQUssSUFBakIsZ0JBQXdCLDhEQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUF4QixHQUF1QyxJQUwxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7SUFkUUQsTzs7TUFBQUEsTztBQWdCVCwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNTBkYTgzY2Y1ZjlmNTAxYTZhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TcGVha2VyRmlsdGVyQ29udGV4dFwiO1xuaW1wb3J0IHVzZVJlcXVlc3REZWxheSBmcm9tIFwiLi4vaG9va3MvdXNlUmVxdWVzdERlbGF5XCI7XG5pbXBvcnQgeyBTcGVha2VyQ29udGV4dCwgU3BlYWtlclByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRzL1NwZWFrZXJDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIFNlc3Npb24oeyB0aXRsZSwgcm9vbSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxuICAgICAge3RpdGxlfSA8c3Ryb25nPlJvb206IHtyb29tLm5hbWV9PC9zdHJvbmc+XG4gICAgPC9zcGFuPlxuICApO1xufVxuXG5mdW5jdGlvbiBTZXNzaW9ucygpIHtcbiAgY29uc3QgeyBldmVudFllYXIgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xuICBjb25zdCB7IHNwZWFrZXIgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XG4gICAgICB7c3BlYWtlci5zZXNzaW9uc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzZXNzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHNlc3Npb24uZXZlbnRZZWFyID09PSBldmVudFllYXI7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHNlc3Npb24pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCIga2V5PXtzZXNzaW9uLmlkfT5cbiAgICAgICAgICAgICAgPFNlc3Npb24gey4uLnNlc3Npb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckltYWdlKCkge1xuICBjb25zdCB7XG4gICAgc3BlYWtlcjogeyBpZCwgZmlyc3QsIGxhc3QgfSxcbiAgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcbiAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VyRmF2b3JpdGUoKSB7XG4gIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgc3BlYWtlciB9ID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XG4gIGNvbnN0IHsgdXBkYXRlUmVjb3JkIH0gPSB1c2VSZXF1ZXN0RGVsYXkoKTtcblxuICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XG4gICAgc2V0SW5UcmFuc2l0aW9uKGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBJbiBTcGVha2VyRmF2b3JpdGU6ZG9uZUNhbGxiYWNrICAgICR7bmV3IERhdGUoKS5nZXRNaWxsaXNlY29uZHMoKX1gXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cbiAgICAgIDxzcGFuXG4gICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XG4gICAgICAgICAgdXBkYXRlUmVjb3JkKFxuICAgICAgICAgICAgeyAuLi5zcGVha2VyLCBmYXZvcml0ZTogIXNwZWFrZXIuZmF2b3JpdGUgfSxcbiAgICAgICAgICAgIGRvbmVDYWxsYmFja1xuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIHNwZWFrZXIuZmF2b3JpdGUgPT09IHRydWVcbiAgICAgICAgICAgICAgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCJcbiAgICAgICAgICAgICAgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgIEZhdm9yaXRle1wiIFwifVxuICAgICAgICB7aW5UcmFuc2l0aW9uID8gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhcyBmYS1jaXJjbGUtbm90Y2ggZmEtc3BpblwiPjwvc3Bhbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJEZW1vZ3JhcGhpY3MoKSB7XG4gIGNvbnN0IHsgc3BlYWtlciB9ID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XG5cbiAgY29uc3QgeyBmaXJzdCwgbGFzdCwgYmlvLCBjb21wYW55LCB0d2l0dGVySGFuZGxlLCBmYXZvcml0ZSB9ID0gc3BlYWtlcjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxuICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XG4gICAgICAgIDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTcGVha2VyRmF2b3JpdGUgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57YmlvfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj5cbiAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cbiAgICAgICAgICAgIDxoNj57Y29tcGFueX08L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxuICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxuICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXIoKSB7XG4gIGNvbnN0IHsgc2hvd1Nlc3Npb25zIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcbiAgY29uc3QgeyBzcGVha2VyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcbiAgcmV0dXJuIChcbiAgICA8U3BlYWtlclByb3ZpZGVyIHNwZWFrZXI9e3NwZWFrZXJ9IHVwZGF0ZVJlY29yZD17dXBkYXRlUmVjb3JkfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxuICAgICAgICAgIDxTcGVha2VySW1hZ2UgLz5cbiAgICAgICAgICA8U3BlYWtlckRlbW9ncmFwaGljcyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Nob3dTZXNzaW9ucyA9PT0gdHJ1ZSA/IDxTZXNzaW9ucyAvPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L1NwZWFrZXJQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=