webpackHotUpdate_N_E("pages/index",{

/***/ "./components/top.js":
/*!***************************!*\
  !*** ./components/top.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin */ "./components/signin.js");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup */ "./components/signup.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout */ "./components/layout.js");
/* harmony import */ var react_live_clock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-live-clock */ "./node_modules/react-live-clock/lib/index.js");
/* harmony import */ var react_live_clock__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_live_clock__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../node_modules/react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "D:\\React Projects\\codestats\\components\\top.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function Top() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modalIsOpen = _useState[0],
      setModalIsOpen = _useState[1];

  var state = {
    choice: "signin"
  };
  return __jsx(_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 14
    }
  }, __jsx("div", {
    className: "top-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 18
    }
  }, __jsx(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
    className: "justify-content-end nav",
    justify: "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 22
    }
  }, __jsx("div", {
    className: "logo name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 26
    }
  }, "CodeStats"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 26
    }
  }, __jsx("a", {
    className: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 30
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 34
    }
  }, "Home"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/Events/events",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 26
    }
  }, __jsx("a", {
    className: "nav-event",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 30
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 34
    }
  }, "Events"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/resources/display",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 26
    }
  }, __jsx("a", {
    className: "resources",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 30
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 34
    }
  }, "Resources"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/discussion/discuss",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 26
    }
  }, __jsx("a", {
    className: "discussion",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 30
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 34
    }
  }, "Discussion"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/Articles/Articles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 26
    }
  }, __jsx("a", {
    className: "articles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 30
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 34
    }
  }, "Articles"))), __jsx("a", {
    onClick: (function () {
      return setModalIsOpen(true);
    }, function () {
      return _this.setState({
        choice: "signin"
      });
    }),
    className: "login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 26
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, "Log In")), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "center",
    isOpen: modalIsOpen,
    onRequestClose: function onRequestClose() {
      return setModalIsOpen(false);
    },
    style: {
      overlay: {
        background: "black",
        opacity: "0.5"
      },
      content: {
        background: "black",
        width: "450px",
        top: "70px",
        height: "600px",
        borderStyle: "none",
        overflow: "hidden",
        opacity: "1",
        borderRadius: "15px",
        padding: "0px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 26
    }
  }, "if(choice==\"login\")", __jsx(_signin__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 30
    }
  }), "else", __jsx(_signup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 30
    }
  })), __jsx("a", {
    onClick: (function () {
      return setModalIsOpen(true);
    }, function () {
      return _this.setState({
        choice: "signup"
      });
    }),
    className: "signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 26
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, "Sign Up")), __jsx("div", {
    className: "clock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 26
    }
  }, __jsx(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 30
    }
  }, __jsx(react_live_clock__WEBPACK_IMPORTED_MODULE_7___default.a, {
    format: 'HH:mm:ss',
    ticking: true,
    timezone: 'India Standard Time',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 34
    }
  }))))));
}

_s(Top, "5+hoDtwEqDeBZVRGXQyaVFN8sOI=");

_c = Top;
/* harmony default export */ __webpack_exports__["default"] = (Top);

var _c;

$RefreshReg$(_c, "Top");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b3AuanMiXSwibmFtZXMiOlsiVG9wIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldE1vZGFsSXNPcGVuIiwic3RhdGUiLCJjaG9pY2UiLCJzZXRTdGF0ZSIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kIiwib3BhY2l0eSIsImNvbnRlbnQiLCJ3aWR0aCIsInRvcCIsImhlaWdodCIsImJvcmRlclN0eWxlIiwib3ZlcmZsb3ciLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLEdBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDd0JDLHNEQUFRLENBQUMsS0FBRCxDQURoQztBQUFBLE1BQ0xDLFdBREs7QUFBQSxNQUNPQyxjQURQOztBQUVaLE1BQU1DLEtBQUssR0FBQztBQUFDQyxVQUFNLEVBQUM7QUFBUixHQUFaO0FBRUksU0FDSyxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGlFQUFEO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQXlDLFdBQU8sRUFBQyxNQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBR0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QTZFLGFBQVMsRUFBQyxRQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURILENBNUNKLEVBK0NJO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsdURBQUQ7QUFBTyxVQUFNLEVBQUUsVUFBZjtBQUEyQixXQUFPLEVBQUUsSUFBcEM7QUFBMEMsWUFBUSxFQUFFLHFCQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQS9DSixDQURKLENBREosQ0FETDtBQTJEUDs7R0EvRFFMLEc7O0tBQUFBLEc7QUFnRU1BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUxYmIwZmY0ODQzNDhhM2U4NjA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCcgXHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgU2lnbkluIGZyb20gJy4vc2lnbmluJ1xyXG5pbXBvcnQgU2lnblVwIGZyb20gJy4vc2lnbnVwJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnXHJcbmltcG9ydCBDbG9jayBmcm9tICdyZWFjdC1saXZlLWNsb2NrJ1xyXG5pbXBvcnQgcmVuZGVyIGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIE5hdkl0ZW0sIE1lbnVJdGVtLCBOYXZEcm9wZG93biB9IGZyb20gJy4uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAnXHJcbmZ1bmN0aW9uIFRvcCAoKSB7IFxyXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLHNldE1vZGFsSXNPcGVuXSA9dXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBzdGF0ZT17Y2hvaWNlOlwic2lnbmluXCJ9O1xyXG4gICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZCBuYXZcIiBqdXN0aWZ5PVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvIG5hbWVcIj5Db2RlU3RhdHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob21lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+SG9tZTwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9FdmVudHMvZXZlbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWV2ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RXZlbnRzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXNvdXJjZXMvZGlzcGxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlc291cmNlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlJlc291cmNlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGlzY3Vzc2lvbi9kaXNjdXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGlzY3Vzc2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkRpc2N1c3Npb248L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0FydGljbGVzL0FydGljbGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYXJ0aWNsZXNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+QXJ0aWNsZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpPT4gc2V0TW9kYWxJc09wZW4odHJ1ZSksKCk9PiB0aGlzLnNldFN0YXRlKHtjaG9pY2U6XCJzaWduaW5cIn0pfSBjbGFzc05hbWU9XCJsb2dpblwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TG9nIEluPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbCBpZD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKT0+c2V0TW9kYWxJc09wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e292ZXJsYXk6e2JhY2tncm91bmQ6XCJibGFja1wiLCBvcGFjaXR5OlwiMC41XCJ9LGNvbnRlbnQ6e2JhY2tncm91bmQ6XCJibGFja1wiLHdpZHRoOlwiNDUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOlwiNzBweFwiLGhlaWdodDpcIjYwMHB4XCIsYm9yZGVyU3R5bGU6XCJub25lXCIsb3ZlcmZsb3c6XCJoaWRkZW5cIixvcGFjaXR5OlwiMVwiLGJvcmRlclJhZGl1czpcIjE1cHhcIixwYWRkaW5nOlwiMHB4XCJ9fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNob2ljZT09XCJsb2dpblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWduSW4vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpZ25VcC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCk9PiBzZXRNb2RhbElzT3Blbih0cnVlKSwoKT0+IHRoaXMuc2V0U3RhdGUoe2Nob2ljZTpcInNpZ251cFwifSl9IGNsYXNzTmFtZT1cInNpZ251cFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+U2lnbiBVcDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9ja1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb2NrIGZvcm1hdD17J0hIOm1tOnNzJ30gdGlja2luZz17dHJ1ZX0gdGltZXpvbmU9eydJbmRpYSBTdGFuZGFyZCBUaW1lJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9MYXlvdXQ+KTtcclxufSAgXHJcbmV4cG9ydCBkZWZhdWx0IFRvcDsgIl0sInNvdXJjZVJvb3QiOiIifQ==