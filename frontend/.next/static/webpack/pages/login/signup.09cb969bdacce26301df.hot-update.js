webpackHotUpdate_N_E("pages/login/signup",{

/***/ "./components/top.js":
/*!***************************!*\
  !*** ./components/top.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin */ "./components/signin.js");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup */ "./components/signup.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout */ "./components/layout.js");
/* harmony import */ var react_live_clock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-live-clock */ "./node_modules/react-live-clock/lib/index.js");
/* harmony import */ var react_live_clock__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_live_clock__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../node_modules/react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");


var _jsxFileName = "D:\\React Projects\\codestats\\components\\top.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











function Top() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      modalIsOpen = _useState[0],
      setModalIsOpen = _useState[1];

  var choice = "login";
  return __jsx(_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 14
    }
  }, __jsx("div", {
    className: "top-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 18
    }
  }, __jsx(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Nav"], {
    className: "justify-content-end nav",
    justify: "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 22
    }
  }, __jsx("div", {
    className: "logo name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 26
    }
  }, "CodeStats"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 26
    }
  }, __jsx("a", {
    className: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 30
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 34
    }
  }, "Home"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/Events/events",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 26
    }
  }, __jsx("a", {
    className: "nav-event",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 30
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 34
    }
  }, "Events"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/resources/display",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 26
    }
  }, __jsx("a", {
    className: "resources",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 30
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 34
    }
  }, "Resources"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/discussion/discuss",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 26
    }
  }, __jsx("a", {
    className: "discussion",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 30
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 34
    }
  }, "Discussion"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/Articles/Articles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 26
    }
  }, __jsx("a", {
    className: "articles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 30
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 34
    }
  }, "Articles"))), __jsx("a", {
    onClick: (function () {
      return setModalIsOpen(true);
    }, function () {
      return choice = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("choice"), "login");
    }),
    className: "login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 26
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, "Log In")), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
      lineNumber: 50,
      columnNumber: 26
    }
  }, "if(choice==\"login\")", __jsx(_signin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 30
    }
  }), "else", __jsx(_signup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 30
    }
  })), __jsx("a", {
    onClick: (function () {
      return setModalIsOpen(true);
    }, function () {
      return choice = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("choice"), "signup");
    }),
    className: "signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 26
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, "Sign Up")), __jsx("div", {
    className: "clock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 26
    }
  }, __jsx(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 30
    }
  }, __jsx(react_live_clock__WEBPACK_IMPORTED_MODULE_8___default.a, {
    format: 'HH:mm:ss',
    ticking: true,
    timezone: 'India Standard Time',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b3AuanMiXSwibmFtZXMiOlsiVG9wIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldE1vZGFsSXNPcGVuIiwiY2hvaWNlIiwib3ZlcmxheSIsImJhY2tncm91bmQiLCJvcGFjaXR5IiwiY29udGVudCIsIndpZHRoIiwidG9wIiwiaGVpZ2h0IiwiYm9yZGVyU3R5bGUiLCJvdmVyZmxvdyIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsR0FBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUN3QkMsc0RBQVEsQ0FBQyxLQUFELENBRGhDO0FBQUEsTUFDTEMsV0FESztBQUFBLE1BQ09DLGNBRFA7O0FBRVosTUFBTUMsTUFBTSxHQUFDLE9BQWI7QUFDSSxTQUNLLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBeUMsV0FBTyxFQUFDLE1BQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFHSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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Q0osRUErQ0k7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx1REFBRDtBQUFPLFVBQU0sRUFBRSxVQUFmO0FBQTJCLFdBQU8sRUFBRSxJQUFwQztBQUEwQyxZQUFRLEVBQUUscUJBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBL0NKLENBREosQ0FESixDQURMO0FBMkRQOztHQTlEUUosRzs7S0FBQUEsRztBQStETUEsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4vc2lnbnVwLjA5Y2I5NjliZGFjY2UyNjMwMWRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCcgXHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgU2lnbkluIGZyb20gJy4vc2lnbmluJ1xyXG5pbXBvcnQgU2lnblVwIGZyb20gJy4vc2lnbnVwJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnXHJcbmltcG9ydCBDbG9jayBmcm9tICdyZWFjdC1saXZlLWNsb2NrJ1xyXG5pbXBvcnQgcmVuZGVyIGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIE5hdkl0ZW0sIE1lbnVJdGVtLCBOYXZEcm9wZG93biB9IGZyb20gJy4uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAnXHJcbmZ1bmN0aW9uIFRvcCAoKSB7IFxyXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLHNldE1vZGFsSXNPcGVuXSA9dXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBjaG9pY2U9XCJsb2dpblwiXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmQgbmF2XCIganVzdGlmeT1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nbyBuYW1lXCI+Q29kZVN0YXRzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkhvbWU8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvRXZlbnRzL2V2ZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1ldmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkV2ZW50czwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzb3VyY2VzL2Rpc3BsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXNvdXJjZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5SZXNvdXJjZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rpc2N1c3Npb24vZGlzY3Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRpc2N1c3Npb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5EaXNjdXNzaW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9BcnRpY2xlcy9BcnRpY2xlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFydGljbGVzXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkFydGljbGVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKT0+IHNldE1vZGFsSXNPcGVuKHRydWUpLCgpPT4gY2hvaWNlPVwibG9naW5cIn0gY2xhc3NOYW1lPVwibG9naW5cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkxvZyBJbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwgaWQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e21vZGFsSXNPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17KCk9PnNldE1vZGFsSXNPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tvdmVybGF5OntiYWNrZ3JvdW5kOlwiYmxhY2tcIiwgb3BhY2l0eTpcIjAuNVwifSxjb250ZW50OntiYWNrZ3JvdW5kOlwiYmxhY2tcIix3aWR0aDpcIjQ1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDpcIjcwcHhcIixoZWlnaHQ6XCI2MDBweFwiLGJvcmRlclN0eWxlOlwibm9uZVwiLG92ZXJmbG93OlwiaGlkZGVuXCIsb3BhY2l0eTpcIjFcIixib3JkZXJSYWRpdXM6XCIxNXB4XCIscGFkZGluZzpcIjBweFwifX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjaG9pY2U9PVwibG9naW5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2lnbkluLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWduVXAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpPT4gc2V0TW9kYWxJc09wZW4odHJ1ZSksKCk9PiBjaG9pY2U9XCJzaWdudXBcIn0gY2xhc3NOYW1lPVwic2lnbnVwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5TaWduIFVwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb2NrXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvY2sgZm9ybWF0PXsnSEg6bW06c3MnfSB0aWNraW5nPXt0cnVlfSB0aW1lem9uZT17J0luZGlhIFN0YW5kYXJkIFRpbWUnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0xheW91dD4pO1xyXG59ICBcclxuZXhwb3J0IGRlZmF1bHQgVG9wOyAiXSwic291cmNlUm9vdCI6IiJ9