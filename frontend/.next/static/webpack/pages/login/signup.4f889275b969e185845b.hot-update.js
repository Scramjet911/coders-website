webpackHotUpdate_N_E("pages/login/signup",{

/***/ "./components/login.js":
false,

/***/ "./components/signin.js":
/*!******************************!*\
  !*** ./components/signin.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _logn_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logn/index */ "./components/logn/index.jsx");






var _jsxFileName = "D:\\React Projects\\codestats\\components\\signin.js",
    _this3 = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var SignIn = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(SignIn, _React$Component);

  var _super = _createSuper(SignIn);

  function SignIn(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignIn);

    _this = _super.call(this, props);
    _this.state = {
      isLogginActive: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignIn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //Add .right by default
      this.rightSide.classList.add("right");
    }
  }, {
    key: "changeState",
    value: function changeState() {
      var isLogginActive = this.state.isLogginActive;

      if (isLogginActive) {
        this.rightSide.classList.remove("right");
        this.rightSide.classList.add("left");
      } else {
        this.rightSide.classList.remove("left");
        this.rightSide.classList.add("right");
      }

      this.setState(function (prevState) {
        return {
          isLogginActive: !prevState.isLogginActive
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isLogginActive = this.state.isLogginActive;
      var current = isLogginActive ? "Sign Up" : "Sign In";
      var currentActive = isLogginActive ? "Sign In" : "Sign Up";
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      }, __jsx("div", {
        id: "center",
        ref: function ref(_ref) {
          return _this2.container = _ref;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }
      }, isLogginActive && __jsx(_logn_index__WEBPACK_IMPORTED_MODULE_6__["Login"], {
        containerRef: function containerRef(ref) {
          return _this2.current = ref;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }
      }), !isLogginActive && __jsx(_logn_index__WEBPACK_IMPORTED_MODULE_6__["Register"], {
        containerRef: function containerRef(ref) {
          return _this2.current = ref;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 10
        }
      }, __jsx(RightSide, {
        current: current,
        currentActive: currentActive,
        containerRef: function containerRef(ref) {
          return _this2.rightSide = ref;
        },
        onClick: this.changeState.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      })));
    }
  }]);

  return SignIn;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var RightSide = function RightSide(props) {
  return __jsx("div", {
    className: "right-side",
    ref: props.containerRef,
    onClick: props.onClick,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner-container",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "text",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, props.current)));
};

_c = RightSide;
/* harmony default export */ __webpack_exports__["default"] = (SignIn);

var _c;

$RefreshReg$(_c, "RightSide");

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

/***/ }),

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
  }, "if(choice==\"login\")", __jsx(Log, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 30
    }
  }), "else", __jsx(Sign, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWduaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdG9wLmpzIl0sIm5hbWVzIjpbIlNpZ25JbiIsInByb3BzIiwic3RhdGUiLCJpc0xvZ2dpbkFjdGl2ZSIsInJpZ2h0U2lkZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiY3VycmVudCIsImN1cnJlbnRBY3RpdmUiLCJyZWYiLCJjb250YWluZXIiLCJjaGFuZ2VTdGF0ZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJpZ2h0U2lkZSIsImNvbnRhaW5lclJlZiIsIm9uQ2xpY2siLCJUb3AiLCJ1c2VTdGF0ZSIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJjaG9pY2UiLCJvdmVybGF5IiwiYmFja2dyb3VuZCIsIm9wYWNpdHkiLCJjb250ZW50Iiwid2lkdGgiLCJ0b3AiLCJoZWlnaHQiLCJib3JkZXJTdHlsZSIsIm92ZXJmbG93IiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLE07Ozs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsb0JBQWMsRUFBRTtBQURMLEtBQWI7QUFGaUI7QUFLbEI7Ozs7d0NBRW1CO0FBQ2xCO0FBQ0EsV0FBS0MsU0FBTCxDQUFlQyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixPQUE3QjtBQUNEOzs7a0NBRWE7QUFBQSxVQUNKSCxjQURJLEdBQ2UsS0FBS0QsS0FEcEIsQ0FDSkMsY0FESTs7QUFHWixVQUFJQSxjQUFKLEVBQW9CO0FBQ2xCLGFBQUtDLFNBQUwsQ0FBZUMsU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0MsT0FBaEM7QUFD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aG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTG9naW4sIFJlZ2lzdGVyIH0gZnJvbSBcIi4vbG9nbi9pbmRleFwiO1xyXG4gXHJcbmNsYXNzIFNpZ25JbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzTG9nZ2luQWN0aXZlOiB0cnVlLFxyXG4gICAgfTtcclxuICB9XHJcbiBcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIC8vQWRkIC5yaWdodCBieSBkZWZhdWx0XHJcbiAgICB0aGlzLnJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgfVxyXG4gXHJcbiAgY2hhbmdlU3RhdGUoKSB7XHJcbiAgICBjb25zdCB7IGlzTG9nZ2luQWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG4gXHJcbiAgICBpZiAoaXNMb2dnaW5BY3RpdmUpIHtcclxuICAgICAgdGhpcy5yaWdodFNpZGUuY2xhc3NMaXN0LnJlbW92ZShcInJpZ2h0XCIpO1xyXG4gICAgICB0aGlzLnJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmlnaHRTaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0XCIpO1xyXG4gICAgICB0aGlzLnJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgIGlzTG9nZ2luQWN0aXZlOiAhcHJldlN0YXRlLmlzTG9nZ2luQWN0aXZlLFxyXG4gICAgfSkpO1xyXG4gIH1cclxuIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXNMb2dnaW5BY3RpdmUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBjdXJyZW50ID0gaXNMb2dnaW5BY3RpdmUgPyBcIlNpZ24gVXBcIiA6IFwiU2lnbiBJblwiO1xyXG4gICAgY29uc3QgY3VycmVudEFjdGl2ZSA9IGlzTG9nZ2luQWN0aXZlID8gXCJTaWduIEluXCIgOiBcIlNpZ24gVXBcIjtcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgPGRpdj4gXHJcbiAgICAgICAgICA8ZGl2IGlkPVwiY2VudGVyXCIgcmVmPXsocmVmKSA9PiAodGhpcy5jb250YWluZXIgPSByZWYpfT5cclxuICAgICAgICAgICAge2lzTG9nZ2luQWN0aXZlICYmIChcclxuICAgICAgICAgICAgICA8TG9naW4gY29udGFpbmVyUmVmPXsocmVmKSA9PiAodGhpcy5jdXJyZW50ID0gcmVmKX0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeyFpc0xvZ2dpbkFjdGl2ZSAmJiAoXHJcbiAgICAgICAgICAgICAgPFJlZ2lzdGVyIGNvbnRhaW5lclJlZj17KHJlZikgPT4gKHRoaXMuY3VycmVudCA9IHJlZil9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgPFJpZ2h0U2lkZVxyXG4gICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50fVxyXG4gICAgICAgICAgICBjdXJyZW50QWN0aXZlPXtjdXJyZW50QWN0aXZlfVxyXG4gICAgICAgICAgICBjb250YWluZXJSZWY9eyhyZWYpID0+ICh0aGlzLnJpZ2h0U2lkZSA9IHJlZil9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlU3RhdGUuYmluZCh0aGlzKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiBcclxuY29uc3QgUmlnaHRTaWRlID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwicmlnaHQtc2lkZVwiXHJcbiAgICAgIHJlZj17cHJvcHMuY29udGFpbmVyUmVmfVxyXG4gICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPntwcm9wcy5jdXJyZW50fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluOyIsImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JyBcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBTaWduSW4gZnJvbSAnLi9zaWduaW4nXHJcbmltcG9ydCBTaWduVXAgZnJvbSAnLi9zaWdudXAnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCdcclxuaW1wb3J0IENsb2NrIGZyb20gJ3JlYWN0LWxpdmUtY2xvY2snXHJcbmltcG9ydCByZW5kZXIgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2SXRlbSwgTWVudUl0ZW0sIE5hdkRyb3Bkb3duIH0gZnJvbSAnLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcCdcclxuZnVuY3Rpb24gVG9wICgpIHsgXHJcbiAgICBjb25zdCBbbW9kYWxJc09wZW4sc2V0TW9kYWxJc09wZW5dID11c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGNob2ljZT1cImxvZ2luXCJcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZCBuYXZcIiBqdXN0aWZ5PVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvIG5hbWVcIj5Db2RlU3RhdHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob21lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+SG9tZTwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9FdmVudHMvZXZlbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWV2ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RXZlbnRzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXNvdXJjZXMvZGlzcGxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlc291cmNlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlJlc291cmNlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGlzY3Vzc2lvbi9kaXNjdXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGlzY3Vzc2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkRpc2N1c3Npb248L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0FydGljbGVzL0FydGljbGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYXJ0aWNsZXNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+QXJ0aWNsZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpPT4gc2V0TW9kYWxJc09wZW4odHJ1ZSksKCk9PiBjaG9pY2U9XCJsb2dpblwifSBjbGFzc05hbWU9XCJsb2dpblwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TG9nIEluPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbCBpZD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKT0+c2V0TW9kYWxJc09wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e292ZXJsYXk6e2JhY2tncm91bmQ6XCJibGFja1wiLCBvcGFjaXR5OlwiMC41XCJ9LGNvbnRlbnQ6e2JhY2tncm91bmQ6XCJibGFja1wiLHdpZHRoOlwiNDUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOlwiNzBweFwiLGhlaWdodDpcIjYwMHB4XCIsYm9yZGVyU3R5bGU6XCJub25lXCIsb3ZlcmZsb3c6XCJoaWRkZW5cIixvcGFjaXR5OlwiMVwiLGJvcmRlclJhZGl1czpcIjE1cHhcIixwYWRkaW5nOlwiMHB4XCJ9fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNob2ljZT09XCJsb2dpblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2cvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpZ24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpPT4gc2V0TW9kYWxJc09wZW4odHJ1ZSksKCk9PiBjaG9pY2U9XCJzaWdudXBcIn0gY2xhc3NOYW1lPVwic2lnbnVwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5TaWduIFVwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb2NrXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvY2sgZm9ybWF0PXsnSEg6bW06c3MnfSB0aWNraW5nPXt0cnVlfSB0aW1lem9uZT17J0luZGlhIFN0YW5kYXJkIFRpbWUnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0xheW91dD4pO1xyXG59ICBcclxuZXhwb3J0IGRlZmF1bHQgVG9wOyAiXSwic291cmNlUm9vdCI6IiJ9