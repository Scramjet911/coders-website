webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWduaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdG9wLmpzIl0sIm5hbWVzIjpbIlNpZ25JbiIsInByb3BzIiwic3RhdGUiLCJpc0xvZ2dpbkFjdGl2ZSIsInJpZ2h0U2lkZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiY3VycmVudCIsImN1cnJlbnRBY3RpdmUiLCJyZWYiLCJjb250YWluZXIiLCJjaGFuZ2VTdGF0ZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJpZ2h0U2lkZSIsImNvbnRhaW5lclJlZiIsIm9uQ2xpY2siLCJUb3AiLCJ1c2VTdGF0ZSIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJjaG9pY2UiLCJvdmVybGF5IiwiYmFja2dyb3VuZCIsIm9wYWNpdHkiLCJjb250ZW50Iiwid2lkdGgiLCJ0b3AiLCJoZWlnaHQiLCJib3JkZXJTdHlsZSIsIm92ZXJmbG93IiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLE07Ozs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsb0JBQWMsRUFBRTtBQURMLEtBQWI7QUFGaUI7QUFLbEI7Ozs7d0NBRW1CO0FBQ2xCO0FBQ0EsV0FBS0MsU0FBTCxDQUFlQyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixPQUE3QjtBQUNEOzs7a0NBRWE7QUFBQSxVQUNKSCxjQURJLEdBQ2UsS0FBS0QsS0FEcEIsQ0FDSkMsY0FESTs7QUFHWixVQUFJQSxjQUFKLEVBQW9CO0FBQ2xCLGFBQUtDLFNBQUwsQ0FBZUMsU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0MsT0FBaEM7QUFD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YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMb2dpbiwgUmVnaXN0ZXIgfSBmcm9tIFwiLi9sb2duL2luZGV4XCI7XHJcbiBcclxuY2xhc3MgU2lnbkluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNMb2dnaW5BY3RpdmU6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxuIFxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy9BZGQgLnJpZ2h0IGJ5IGRlZmF1bHRcclxuICAgIHRoaXMucmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcclxuICB9XHJcbiBcclxuICBjaGFuZ2VTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHsgaXNMb2dnaW5BY3RpdmUgfSA9IHRoaXMuc3RhdGU7XHJcbiBcclxuICAgIGlmIChpc0xvZ2dpbkFjdGl2ZSkge1xyXG4gICAgICB0aGlzLnJpZ2h0U2lkZS5jbGFzc0xpc3QucmVtb3ZlKFwicmlnaHRcIik7XHJcbiAgICAgIHRoaXMucmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yaWdodFNpZGUuY2xhc3NMaXN0LnJlbW92ZShcImxlZnRcIik7XHJcbiAgICAgIHRoaXMucmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgaXNMb2dnaW5BY3RpdmU6ICFwcmV2U3RhdGUuaXNMb2dnaW5BY3RpdmUsXHJcbiAgICB9KSk7XHJcbiAgfVxyXG4gXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpc0xvZ2dpbkFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGN1cnJlbnQgPSBpc0xvZ2dpbkFjdGl2ZSA/IFwiU2lnbiBVcFwiIDogXCJTaWduIEluXCI7XHJcbiAgICBjb25zdCBjdXJyZW50QWN0aXZlID0gaXNMb2dnaW5BY3RpdmUgPyBcIlNpZ24gSW5cIiA6IFwiU2lnbiBVcFwiO1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICA8ZGl2PiBcclxuICAgICAgICAgIDxkaXYgaWQ9XCJjZW50ZXJcIiByZWY9eyhyZWYpID0+ICh0aGlzLmNvbnRhaW5lciA9IHJlZil9PlxyXG4gICAgICAgICAgICB7aXNMb2dnaW5BY3RpdmUgJiYgKFxyXG4gICAgICAgICAgICAgIDxMb2dpbiBjb250YWluZXJSZWY9eyhyZWYpID0+ICh0aGlzLmN1cnJlbnQgPSByZWYpfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7IWlzTG9nZ2luQWN0aXZlICYmIChcclxuICAgICAgICAgICAgICA8UmVnaXN0ZXIgY29udGFpbmVyUmVmPXsocmVmKSA9PiAodGhpcy5jdXJyZW50ID0gcmVmKX0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICA8UmlnaHRTaWRlXHJcbiAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnR9XHJcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmU9e2N1cnJlbnRBY3RpdmV9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclJlZj17KHJlZikgPT4gKHRoaXMucmlnaHRTaWRlID0gcmVmKX1cclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VTdGF0ZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIFxyXG5jb25zdCBSaWdodFNpZGUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJyaWdodC1zaWRlXCJcclxuICAgICAgcmVmPXtwcm9wcy5jb250YWluZXJSZWZ9XHJcbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e3Byb3BzLmN1cnJlbnR9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW47IiwiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnIFxyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFNpZ25JbiBmcm9tICcuL3NpZ25pbidcclxuaW1wb3J0IFNpZ25VcCBmcm9tICcuL3NpZ251cCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0J1xyXG5pbXBvcnQgQ2xvY2sgZnJvbSAncmVhY3QtbGl2ZS1jbG9jaydcclxuaW1wb3J0IHJlbmRlciBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdmJhciwgTmF2LCBOYXZJdGVtLCBNZW51SXRlbSwgTmF2RHJvcGRvd24gfSBmcm9tICcuLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwJ1xyXG5mdW5jdGlvbiBUb3AgKCkgeyBcclxuICAgIGNvbnN0IFttb2RhbElzT3BlbixzZXRNb2RhbElzT3Blbl0gPXVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgY2hvaWNlPVwibG9naW5cIlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtZW5kIG5hdlwiIGp1c3RpZnk9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28gbmFtZVwiPkNvZGVTdGF0czwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Ib21lPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0V2ZW50cy9ldmVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtZXZlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5FdmVudHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc291cmNlcy9kaXNwbGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVzb3VyY2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+UmVzb3VyY2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kaXNjdXNzaW9uL2Rpc2N1c3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkaXNjdXNzaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RGlzY3Vzc2lvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQXJ0aWNsZXMvQXJ0aWNsZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhcnRpY2xlc1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5BcnRpY2xlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCk9PiBzZXRNb2RhbElzT3Blbih0cnVlKSwoKT0+IGNob2ljZT1cImxvZ2luXCJ9IGNsYXNzTmFtZT1cImxvZ2luXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2cgSW48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsIGlkPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpPT5zZXRNb2RhbElzT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7b3ZlcmxheTp7YmFja2dyb3VuZDpcImJsYWNrXCIsIG9wYWNpdHk6XCIwLjVcIn0sY29udGVudDp7YmFja2dyb3VuZDpcImJsYWNrXCIsd2lkdGg6XCI0NTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6XCI3MHB4XCIsaGVpZ2h0OlwiNjAwcHhcIixib3JkZXJTdHlsZTpcIm5vbmVcIixvdmVyZmxvdzpcImhpZGRlblwiLG9wYWNpdHk6XCIxXCIsYm9yZGVyUmFkaXVzOlwiMTVweFwiLHBhZGRpbmc6XCIwcHhcIn19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2hvaWNlPT1cImxvZ2luXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2lnbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCk9PiBzZXRNb2RhbElzT3Blbih0cnVlKSwoKT0+IGNob2ljZT1cInNpZ251cFwifSBjbGFzc05hbWU9XCJzaWdudXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNpZ24gVXA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvY2tcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9jayBmb3JtYXQ9eydISDptbTpzcyd9IHRpY2tpbmc9e3RydWV9IHRpbWV6b25lPXsnSW5kaWEgU3RhbmRhcmQgVGltZSd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTGF5b3V0Pik7XHJcbn0gIFxyXG5leHBvcnQgZGVmYXVsdCBUb3A7ICJdLCJzb3VyY2VSb290IjoiIn0=