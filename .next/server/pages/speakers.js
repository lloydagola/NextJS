(function() {
var exports = {};
exports.id = "pages/speakers";
exports.ids = ["pages/speakers"];
exports.modules = {

/***/ "./pages/SpeakersRenderProps.js":
/*!**************************************!*\
  !*** ./pages/SpeakersRenderProps.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SpeakersRenderProps = ({
  children
}) => {
  const speakers = [{
    imageSrc: "speaker-1124",
    name: "Douglas Crockford"
  }, {
    imageSrc: "speaker-1530",
    name: "Tamara Baker"
  }, {
    imageSrc: "speaker-10803",
    name: "Eugene Chuvyrov"
  }];
  return children({
    speakers: speakers
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SpeakersRenderProps);

/***/ }),

/***/ "./pages/speakers.js":
/*!***************************!*\
  !*** ./pages/speakers.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SpeakersRenderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakersRenderProps */ "./pages/SpeakersRenderProps.js");

var _jsxFileName = "S:\\pluralSight\\DesigningComponents\\pages\\speakers.js";



const Speakers = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersRenderProps__WEBPACK_IMPORTED_MODULE_2__.default, {
  children: ({
    speakers
  }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: speakers.map(({
      imageSrc,
      name
    }) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: `images/${imageSrc.jpg}`,
        alt: name
      }, imageSrc, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Speakers);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/speakers.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ25pbmctcmVhY3QtY29tcG9uZW50cy1wbHVyYWxzaWdodC1jb3Vyc2UvLi9wYWdlcy9TcGVha2Vyc1JlbmRlclByb3BzLmpzIiwid2VicGFjazovL2Rlc2lnbmluZy1yZWFjdC1jb21wb25lbnRzLXBsdXJhbHNpZ2h0LWNvdXJzZS8uL3BhZ2VzL3NwZWFrZXJzLmpzIiwid2VicGFjazovL2Rlc2lnbmluZy1yZWFjdC1jb21wb25lbnRzLXBsdXJhbHNpZ2h0LWNvdXJzZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZGVzaWduaW5nLXJlYWN0LWNvbXBvbmVudHMtcGx1cmFsc2lnaHQtY291cnNlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiU3BlYWtlcnNSZW5kZXJQcm9wcyIsImNoaWxkcmVuIiwic3BlYWtlcnMiLCJpbWFnZVNyYyIsIm5hbWUiLCJTcGVha2VycyIsIm1hcCIsImpwZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxtQkFBbUIsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUM1QyxRQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUFFQyxZQUFRLEVBQUUsY0FBWjtBQUE0QkMsUUFBSSxFQUFFO0FBQWxDLEdBRGUsRUFFZjtBQUFFRCxZQUFRLEVBQUUsY0FBWjtBQUE0QkMsUUFBSSxFQUFFO0FBQWxDLEdBRmUsRUFHZjtBQUFFRCxZQUFRLEVBQUUsZUFBWjtBQUE2QkMsUUFBSSxFQUFFO0FBQW5DLEdBSGUsQ0FBakI7QUFLQSxTQUFPSCxRQUFRLENBQUM7QUFBRUMsWUFBUSxFQUFFQTtBQUFaLEdBQUQsQ0FBZjtBQUNELENBUEQ7O0FBU0EsK0RBQWVGLG1CQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOztBQUVBLE1BQU1LLFFBQVEsR0FBRyxtQkFDZiw4REFBQyx5REFBRDtBQUFBLFlBQ0csQ0FBQztBQUFFSDtBQUFGLEdBQUQsa0JBQ0M7QUFBQSxjQUNHQSxRQUFRLENBQUNJLEdBQVQsQ0FBYSxDQUFDO0FBQUVILGNBQUY7QUFBWUM7QUFBWixLQUFELEtBQXdCO0FBQ3BDLDBCQUNFO0FBQUssV0FBRyxFQUFHLFVBQVNELFFBQVEsQ0FBQ0ksR0FBSSxFQUFqQztBQUFvQyxXQUFHLEVBQUVIO0FBQXpDLFNBQW9ERCxRQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBR0QsS0FKQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBY0EsK0RBQWVFLFFBQWYsRTs7Ozs7Ozs7Ozs7QUNqQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvc3BlYWtlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTcGVha2Vyc1JlbmRlclByb3BzID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHNwZWFrZXJzID0gW1xyXG4gICAgeyBpbWFnZVNyYzogXCJzcGVha2VyLTExMjRcIiwgbmFtZTogXCJEb3VnbGFzIENyb2NrZm9yZFwiIH0sXHJcbiAgICB7IGltYWdlU3JjOiBcInNwZWFrZXItMTUzMFwiLCBuYW1lOiBcIlRhbWFyYSBCYWtlclwiIH0sXHJcbiAgICB7IGltYWdlU3JjOiBcInNwZWFrZXItMTA4MDNcIiwgbmFtZTogXCJFdWdlbmUgQ2h1dnlyb3ZcIiB9LFxyXG4gIF07XHJcbiAgcmV0dXJuIGNoaWxkcmVuKHsgc3BlYWtlcnM6IHNwZWFrZXJzIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNSZW5kZXJQcm9wcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3BlYWtlcnNSZW5kZXJQcm9wcyBmcm9tIFwiLi9TcGVha2Vyc1JlbmRlclByb3BzXCI7XHJcblxyXG5jb25zdCBTcGVha2VycyA9ICgpID0+IChcclxuICA8U3BlYWtlcnNSZW5kZXJQcm9wcz5cclxuICAgIHsoeyBzcGVha2VycyB9KSA9PiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3NwZWFrZXJzLm1hcCgoeyBpbWFnZVNyYywgbmFtZSB9KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YGltYWdlcy8ke2ltYWdlU3JjLmpwZ31gfSBhbHQ9e25hbWV9IGtleT17aW1hZ2VTcmN9IC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICl9XHJcbiAgPC9TcGVha2Vyc1JlbmRlclByb3BzPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=