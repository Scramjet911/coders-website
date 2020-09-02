webpackHotUpdate_N_E("pages/login/signup",{

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
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






var _jsxFileName = "D:\\React Projects\\codestats\\components\\login.js",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJTaWduSW4iLCJwcm9wcyIsInN0YXRlIiwiaXNMb2dnaW5BY3RpdmUiLCJyaWdodFNpZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsImN1cnJlbnQiLCJjdXJyZW50QWN0aXZlIiwicmVmIiwiY29udGFpbmVyIiwiY2hhbmdlU3RhdGUiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSaWdodFNpZGUiLCJjb250YWluZXJSZWYiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsTTs7Ozs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBYyxFQUFFO0FBREwsS0FBYjtBQUZpQjtBQUtsQjs7Ozt3Q0FFbUI7QUFDbEI7QUFDQSxXQUFLQyxTQUFMLENBQWVDLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLE9BQTdCO0FBQ0Q7OztrQ0FFYTtBQUFBLFVBQ0pILGNBREksR0FDZSxLQUFLRCxLQURwQixDQUNKQyxjQURJOztBQUdaLFVBQUlBLGNBQUosRUFBb0I7QUFDbEIsYUFBS0MsU0FBTCxDQUFlQyxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxPQUFoQztBQUNBLGFBQUtILFNBQUwsQ0FBZUMsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsTUFBN0I7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLRixTQUFMLENBQWVDLFNBQWYsQ0FBeUJFLE1BQXpCLENBQWdDLE1BQWhDO0FBQ0EsYUFBS0gsU0FBTCxDQUFlQyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixPQUE3QjtBQUNEOztBQUNELFdBQUtFLFFBQUwsQ0FBYyxVQUFDQyxTQUFEO0FBQUEsZUFBZ0I7QUFDNUJOLHdCQUFjLEVBQUUsQ0FBQ00sU0FBUyxDQUFDTjtBQURDLFNBQWhCO0FBQUEsT0FBZDtBQUdEOzs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDQSxjQURELEdBQ29CLEtBQUtELEtBRHpCLENBQ0NDLGNBREQ7QUFFUCxVQUFNTyxPQUFPLEdBQUdQLGNBQWMsR0FBRyxTQUFILEdBQWUsU0FBN0M7QUFDQSxVQUFNUSxhQUFhLEdBQUdSLGNBQWMsR0FBRyxTQUFILEdBQWUsU0FBbkQ7QUFDQSxhQUVNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFLLFVBQUUsRUFBQyxRQUFSO0FBQWlCLFdBQUcsRUFBRSxhQUFDUyxJQUFEO0FBQUEsaUJBQVUsTUFBSSxDQUFDQyxTQUFMLEdBQWlCRCxJQUEzQjtBQUFBLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR1QsY0FBYyxJQUNiLE1BQUMsaURBQUQ7QUFBTyxvQkFBWSxFQUFFLHNCQUFDUyxHQUFEO0FBQUEsaUJBQVUsTUFBSSxDQUFDRixPQUFMLEdBQWVFLEdBQXpCO0FBQUEsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLEVBSUcsQ0FBQ1QsY0FBRCxJQUNDLE1BQUMsb0RBQUQ7QUFBVSxvQkFBWSxFQUFFLHNCQUFDUyxHQUFEO0FBQUEsaUJBQVUsTUFBSSxDQUFDRixPQUFMLEdBQWVFLEdBQXpCO0FBQUEsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxKLENBREEsRUFVRDtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyxTQUFEO0FBQ0UsZUFBTyxFQUFFRixPQURYO0FBRUUscUJBQWEsRUFBRUMsYUFGakI7QUFHRSxvQkFBWSxFQUFFLHNCQUFDQyxHQUFEO0FBQUEsaUJBQVUsTUFBSSxDQUFDUixTQUFMLEdBQWlCUSxHQUEzQjtBQUFBLFNBSGhCO0FBSUUsZUFBTyxFQUFFLEtBQUtFLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELENBVkMsQ0FGTjtBQXVCRDs7OztFQXZEa0JDLDRDQUFLLENBQUNDLFM7O0FBMEQzQixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDakIsS0FBRCxFQUFXO0FBQzNCLFNBQ0U7QUFDRSxhQUFTLEVBQUMsWUFEWjtBQUVFLE9BQUcsRUFBRUEsS0FBSyxDQUFDa0IsWUFGYjtBQUdFLFdBQU8sRUFBRWxCLEtBQUssQ0FBQ21CLE9BSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCbkIsS0FBSyxDQUFDUyxPQUE3QixDQURGLENBTEYsQ0FERjtBQVdELENBWkQ7O0tBQU1RLFM7QUFjU2xCLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luL3NpZ251cC42MGU0MzFkNTI3YWY0NjQ3YzI4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMb2dpbiwgUmVnaXN0ZXIgfSBmcm9tIFwiLi9sb2duL2luZGV4XCI7XHJcbiBcclxuY2xhc3MgU2lnbkluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNMb2dnaW5BY3RpdmU6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxuIFxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy9BZGQgLnJpZ2h0IGJ5IGRlZmF1bHRcclxuICAgIHRoaXMucmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcclxuICB9XHJcbiBcclxuICBjaGFuZ2VTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHsgaXNMb2dnaW5BY3RpdmUgfSA9IHRoaXMuc3RhdGU7XHJcbiBcclxuICAgIGlmIChpc0xvZ2dpbkFjdGl2ZSkge1xyXG4gICAgICB0aGlzLnJpZ2h0U2lkZS5jbGFzc0xpc3QucmVtb3ZlKFwicmlnaHRcIik7XHJcbiAgICAgIHRoaXMucmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yaWdodFNpZGUuY2xhc3NMaXN0LnJlbW92ZShcImxlZnRcIik7XHJcbiAgICAgIHRoaXMucmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgaXNMb2dnaW5BY3RpdmU6ICFwcmV2U3RhdGUuaXNMb2dnaW5BY3RpdmUsXHJcbiAgICB9KSk7XHJcbiAgfVxyXG4gXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpc0xvZ2dpbkFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGN1cnJlbnQgPSBpc0xvZ2dpbkFjdGl2ZSA/IFwiU2lnbiBVcFwiIDogXCJTaWduIEluXCI7XHJcbiAgICBjb25zdCBjdXJyZW50QWN0aXZlID0gaXNMb2dnaW5BY3RpdmUgPyBcIlNpZ24gSW5cIiA6IFwiU2lnbiBVcFwiO1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICA8ZGl2PiBcclxuICAgICAgICAgIDxkaXYgaWQ9XCJjZW50ZXJcIiByZWY9eyhyZWYpID0+ICh0aGlzLmNvbnRhaW5lciA9IHJlZil9PlxyXG4gICAgICAgICAgICB7aXNMb2dnaW5BY3RpdmUgJiYgKFxyXG4gICAgICAgICAgICAgIDxMb2dpbiBjb250YWluZXJSZWY9eyhyZWYpID0+ICh0aGlzLmN1cnJlbnQgPSByZWYpfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7IWlzTG9nZ2luQWN0aXZlICYmIChcclxuICAgICAgICAgICAgICA8UmVnaXN0ZXIgY29udGFpbmVyUmVmPXsocmVmKSA9PiAodGhpcy5jdXJyZW50ID0gcmVmKX0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICA8UmlnaHRTaWRlXHJcbiAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnR9XHJcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmU9e2N1cnJlbnRBY3RpdmV9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclJlZj17KHJlZikgPT4gKHRoaXMucmlnaHRTaWRlID0gcmVmKX1cclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VTdGF0ZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIFxyXG5jb25zdCBSaWdodFNpZGUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJyaWdodC1zaWRlXCJcclxuICAgICAgcmVmPXtwcm9wcy5jb250YWluZXJSZWZ9XHJcbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e3Byb3BzLmN1cnJlbnR9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW47Il0sInNvdXJjZVJvb3QiOiIifQ==