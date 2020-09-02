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
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











__jsx(Register, {
  containerRef: function containerRef(ref) {
    return _this.current = ref;
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 1
  }
});

function Top() {
  _s();

  var _this2 = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modalIsOpen = _useState[0],
      setModalIsOpen = _useState[1];

  state = {
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
      return _this2.setState({
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
      return _this2.setState({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b3AuanMiXSwibmFtZXMiOlsicmVmIiwiY3VycmVudCIsIlRvcCIsInVzZVN0YXRlIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsInN0YXRlIiwiY2hvaWNlIiwic2V0U3RhdGUiLCJvdmVybGF5IiwiYmFja2dyb3VuZCIsIm9wYWNpdHkiLCJjb250ZW50Iiwid2lkdGgiLCJ0b3AiLCJoZWlnaHQiLCJib3JkZXJTdHlsZSIsIm92ZXJmbG93IiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBQyxRQUFEO0FBQVUsY0FBWSxFQUFFLHNCQUFDQSxHQUFEO0FBQUEsV0FBVSxLQUFJLENBQUNDLE9BQUwsR0FBZUQsR0FBekI7QUFBQSxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBLFNBQVNFLEdBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDd0JDLHNEQUFRLENBQUMsS0FBRCxDQURoQztBQUFBLE1BQ0xDLFdBREs7QUFBQSxNQUNPQyxjQURQOztBQUVaQyxPQUFLLEdBQUM7QUFBQ0MsVUFBTSxFQUFDO0FBQVIsR0FBTjtBQUNJLFNBQ0ssTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpRUFBRDtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUF5QyxXQUFPLEVBQUMsTUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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O0FBQUcsV0FBTyxHQUFFO0FBQUEsYUFBS2QsY0FBYyxDQUFDLElBQUQsQ0FBbkI7QUFBQSxPQUEwQjtBQUFBLGFBQUssTUFBSSxDQUFDRyxRQUFMLENBQWM7QUFBQ0QsY0FBTSxFQUFDO0FBQVIsT0FBZCxDQUFMO0FBQUEsS0FBNUIsQ0FBVjtBQUE2RSxhQUFTLEVBQUMsUUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESCxDQTVDSixFQStDSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVEQUFEO0FBQU8sVUFBTSxFQUFFLFVBQWY7QUFBMkIsV0FBTyxFQUFFLElBQXBDO0FBQTBDLFlBQVEsRUFBRSxxQkFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0EvQ0osQ0FESixDQURKLENBREw7QUEyRFA7O0dBOURRTCxHOztLQUFBQSxHO0FBK0RNQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi9zaWdudXAuNTQ4Mjc3ZmU2MjliMGEyZjZjZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JyBcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBTaWduSW4gZnJvbSAnLi9zaWduaW4nXHJcbmltcG9ydCBTaWduVXAgZnJvbSAnLi9zaWdudXAnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCdcclxuaW1wb3J0IENsb2NrIGZyb20gJ3JlYWN0LWxpdmUtY2xvY2snXHJcbmltcG9ydCByZW5kZXIgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2SXRlbSwgTWVudUl0ZW0sIE5hdkRyb3Bkb3duIH0gZnJvbSAnLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcCdcclxuPFJlZ2lzdGVyIGNvbnRhaW5lclJlZj17KHJlZikgPT4gKHRoaXMuY3VycmVudCA9IHJlZil9IC8+XHJcbmZ1bmN0aW9uIFRvcCAoKSB7IFxyXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLHNldE1vZGFsSXNPcGVuXSA9dXNlU3RhdGUoZmFsc2UpXHJcbiAgICBzdGF0ZT17Y2hvaWNlOlwic2lnbmluXCJ9O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtZW5kIG5hdlwiIGp1c3RpZnk9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28gbmFtZVwiPkNvZGVTdGF0czwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Ib21lPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0V2ZW50cy9ldmVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtZXZlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5FdmVudHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc291cmNlcy9kaXNwbGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVzb3VyY2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+UmVzb3VyY2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kaXNjdXNzaW9uL2Rpc2N1c3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkaXNjdXNzaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RGlzY3Vzc2lvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQXJ0aWNsZXMvQXJ0aWNsZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhcnRpY2xlc1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5BcnRpY2xlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCk9PiBzZXRNb2RhbElzT3Blbih0cnVlKSwoKT0+IHRoaXMuc2V0U3RhdGUoe2Nob2ljZTpcInNpZ25pblwifSl9IGNsYXNzTmFtZT1cImxvZ2luXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2cgSW48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsIGlkPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpPT5zZXRNb2RhbElzT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7b3ZlcmxheTp7YmFja2dyb3VuZDpcImJsYWNrXCIsIG9wYWNpdHk6XCIwLjVcIn0sY29udGVudDp7YmFja2dyb3VuZDpcImJsYWNrXCIsd2lkdGg6XCI0NTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6XCI3MHB4XCIsaGVpZ2h0OlwiNjAwcHhcIixib3JkZXJTdHlsZTpcIm5vbmVcIixvdmVyZmxvdzpcImhpZGRlblwiLG9wYWNpdHk6XCIxXCIsYm9yZGVyUmFkaXVzOlwiMTVweFwiLHBhZGRpbmc6XCIwcHhcIn19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2hvaWNlPT1cImxvZ2luXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpZ25Jbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2lnblVwLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKT0+IHNldE1vZGFsSXNPcGVuKHRydWUpLCgpPT4gdGhpcy5zZXRTdGF0ZSh7Y2hvaWNlOlwic2lnbnVwXCJ9KX0gY2xhc3NOYW1lPVwic2lnbnVwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5TaWduIFVwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb2NrXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvY2sgZm9ybWF0PXsnSEg6bW06c3MnfSB0aWNraW5nPXt0cnVlfSB0aW1lem9uZT17J0luZGlhIFN0YW5kYXJkIFRpbWUnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0xheW91dD4pO1xyXG59ICBcclxuZXhwb3J0IGRlZmF1bHQgVG9wOyAiXSwic291cmNlUm9vdCI6IiJ9