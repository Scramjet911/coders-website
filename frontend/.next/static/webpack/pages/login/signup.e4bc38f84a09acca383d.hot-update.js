webpackHotUpdate_N_E("pages/login/signup",{

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modalIsOpen = _useState[0],
      setModalIsOpen = _useState[1];

  {
    var choice = "signin";
  }
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
    onClick: function onClick() {
      return setModalIsOpen(true);
    },
    id: "signin",
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
  }, "Sign In")), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "var choice=\"signin\"?", __jsx(_signin__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 50
    }
  }), ":", __jsx(_signup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 60
    }
  }), ";"), __jsx("a", {
    onClick: function onClick() {
      return setModalIsOpen(true);
    },
    id: "signup",
    className: "signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 26
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, "Sign Up")), __jsx("div", {
    className: "clock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 26
    }
  }, __jsx(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 30
    }
  }, __jsx(react_live_clock__WEBPACK_IMPORTED_MODULE_7___default.a, {
    format: 'HH:mm:ss',
    ticking: true,
    timezone: 'India Standard Time',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b3AuanMiXSwibmFtZXMiOlsiVG9wIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldE1vZGFsSXNPcGVuIiwiY2hvaWNlIiwib3ZlcmxheSIsImJhY2tncm91bmQiLCJvcGFjaXR5IiwiY29udGVudCIsIndpZHRoIiwidG9wIiwiaGVpZ2h0IiwiYm9yZGVyU3R5bGUiLCJvdmVyZmxvdyIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsR0FBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUN3QkMsc0RBQVEsQ0FBQyxLQUFELENBRGhDO0FBQUEsTUFDTEMsV0FESztBQUFBLE1BQ09DLGNBRFA7O0FBRVo7QUFBRSxRQUFJQyxNQUFNLEdBQUMsUUFBWDtBQUFvQjtBQUVsQixTQUNLLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBeUMsV0FBTyxFQUFDLE1BQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFHSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsdURBQUQ7QUFBTyxVQUFNLEVBQUUsVUFBZjtBQUEyQixXQUFPLEVBQUUsSUFBcEM7QUFBMEMsWUFBUSxFQUFFLHFCQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQTVDSixDQURKLENBREosQ0FETDtBQXdEUDs7R0E1RFFILEc7O0tBQUFBLEc7QUE2RE1BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luL3NpZ251cC5lNGJjMzhmODRhMDlhY2NhMzgzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnIFxyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFNpZ25JbiBmcm9tICcuL3NpZ25pbidcclxuaW1wb3J0IFNpZ25VcCBmcm9tICcuL3NpZ251cCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0J1xyXG5pbXBvcnQgQ2xvY2sgZnJvbSAncmVhY3QtbGl2ZS1jbG9jaydcclxuaW1wb3J0IHJlbmRlciBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdmJhciwgTmF2LCBOYXZJdGVtLCBNZW51SXRlbSwgTmF2RHJvcGRvd24gfSBmcm9tICcuLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwJ1xyXG5mdW5jdGlvbiBUb3AgKCkgeyBcclxuICAgIGNvbnN0IFttb2RhbElzT3BlbixzZXRNb2RhbElzT3Blbl0gPXVzZVN0YXRlKGZhbHNlKVxyXG4gICAgeyB2YXIgY2hvaWNlPVwic2lnbmluXCJ9XHJcbiAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtZW5kIG5hdlwiIGp1c3RpZnk9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28gbmFtZVwiPkNvZGVTdGF0czwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Ib21lPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0V2ZW50cy9ldmVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtZXZlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5FdmVudHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc291cmNlcy9kaXNwbGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVzb3VyY2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+UmVzb3VyY2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kaXNjdXNzaW9uL2Rpc2N1c3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkaXNjdXNzaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RGlzY3Vzc2lvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQXJ0aWNsZXMvQXJ0aWNsZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhcnRpY2xlc1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5BcnRpY2xlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCk9PiBzZXRNb2RhbElzT3Blbih0cnVlKX0gaWQ9XCJzaWduaW5cIiBjbGFzc05hbWU9XCJsb2dpblwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+U2lnbiBJbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwgaWQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e21vZGFsSXNPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17KCk9PnNldE1vZGFsSXNPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tvdmVybGF5OntiYWNrZ3JvdW5kOlwiYmxhY2tcIiwgb3BhY2l0eTpcIjAuNVwifSxjb250ZW50OntiYWNrZ3JvdW5kOlwiYmxhY2tcIix3aWR0aDpcIjQ1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDpcIjcwcHhcIixoZWlnaHQ6XCI2MDBweFwiLGJvcmRlclN0eWxlOlwibm9uZVwiLG92ZXJmbG93OlwiaGlkZGVuXCIsb3BhY2l0eTpcIjFcIixib3JkZXJSYWRpdXM6XCIxNXB4XCIscGFkZGluZzpcIjBweFwifX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaG9pY2U9XCJzaWduaW5cIj88U2lnbkluLz46PFNpZ25VcC8+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpPT4gc2V0TW9kYWxJc09wZW4odHJ1ZSl9IGlkPVwic2lnbnVwXCIgY2xhc3NOYW1lPVwic2lnbnVwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5TaWduIFVwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb2NrXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvY2sgZm9ybWF0PXsnSEg6bW06c3MnfSB0aWNraW5nPXt0cnVlfSB0aW1lem9uZT17J0luZGlhIFN0YW5kYXJkIFRpbWUnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0xheW91dD4pO1xyXG59ICBcclxuZXhwb3J0IGRlZmF1bHQgVG9wOyAiXSwic291cmNlUm9vdCI6IiJ9