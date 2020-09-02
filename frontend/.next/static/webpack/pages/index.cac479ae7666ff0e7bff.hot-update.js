webpackHotUpdate_N_E("pages/index",{

/***/ "./components/signup.js":
/*!******************************!*\
  !*** ./components/signup.js ***!
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






var _jsxFileName = "D:\\React Projects\\codestats\\components\\signup.js",
    _this3 = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var SignUp = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(SignUp, _React$Component);

  var _super = _createSuper(SignUp);

  function SignUp(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignUp);

    _this = _super.call(this, props);
    _this.state = {
      isLogginActive: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignUp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //Add .right by default
      this.rightSide.classList.add("left");
    }
  }, {
    key: "changeState",
    value: function changeState() {
      var isLogginActive = this.state.isLogginActive;

      if (isLogginActive) {
        this.rightSide.classList.remove("left");
        this.rightSide.classList.add("right");
      } else {
        this.rightSide.classList.remove("right");
        this.rightSide.classList.add("left");
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
      var current = isLogginActive ? "Sign In" : "Sign Up";
      var currentActive = isLogginActive ? "Sign Up" : "Sign In";
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
      }, isLogginActive && __jsx(_logn_index__WEBPACK_IMPORTED_MODULE_6__["Register"], {
        containerRef: function containerRef(ref) {
          return _this2.current = ref;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }
      }), !isLogginActive && __jsx(_logn_index__WEBPACK_IMPORTED_MODULE_6__["Login"], {
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

  return SignUp;
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
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWdudXAuanMiXSwibmFtZXMiOlsiU2lnblVwIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9nZ2luQWN0aXZlIiwicmlnaHRTaWRlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJjdXJyZW50IiwiY3VycmVudEFjdGl2ZSIsInJlZiIsImNvbnRhaW5lciIsImNoYW5nZVN0YXRlIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmlnaHRTaWRlIiwiY29udGFpbmVyUmVmIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLE07Ozs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsb0JBQWMsRUFBRTtBQURMLEtBQWI7QUFGaUI7QUFLbEI7Ozs7d0NBRW1CO0FBQ2xCO0FBQ0EsV0FBS0MsU0FBTCxDQUFlQyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixNQUE3QjtBQUNEOzs7a0NBRWE7QUFBQSxVQUNKSCxjQURJLEdBQ2UsS0FBS0QsS0FEcEIsQ0FDSkMsY0FESTs7QUFHWixVQUFJQSxjQUFKLEVBQW9CO0FBQ2hCLGFBQUtDLFNBQUwsQ0FBZUMsU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0MsTUFBaEM7QUFDQSxhQUFLSCxTQUFMLENBQWVDLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLE9BQTdCO0FBQ0QsT0FISCxNQUdTO0FBQ0wsYUFBS0YsU0FBTCxDQUFlQyxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxPQUFoQztBQUNBLGFBQUtILFNBQUwsQ0FBZUMsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsTUFBN0I7QUFDRDs7QUFDSCxXQUFLRSxRQUFMLENBQWMsVUFBQ0MsU0FBRDtBQUFBLGVBQWdCO0FBQzVCTix3QkFBYyxFQUFFLENBQUNNLFNBQVMsQ0FBQ047QUFEQyxTQUFoQjtBQUFBLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQUE7O0FBQUEsVUFDQ0EsY0FERCxHQUNvQixLQUFLRCxLQUR6QixDQUNDQyxjQUREO0FBRVAsVUFBTU8sT0FBTyxHQUFHUCxjQUFjLEdBQUcsU0FBSCxHQUFlLFNBQTdDO0FBQ0EsVUFBTVEsYUFBYSxHQUFHUixjQUFjLEdBQUcsU0FBSCxHQUFlLFNBQW5EO0FBQ0EsYUFFTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBSyxVQUFFLEVBQUMsUUFBUjtBQUFpQixXQUFHLEVBQUUsYUFBQ1MsSUFBRDtBQUFBLGlCQUFVLE1BQUksQ0FBQ0MsU0FBTCxHQUFpQkQsSUFBM0I7QUFBQSxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dULGNBQWMsSUFDYixNQUFDLG9EQUFEO0FBQVUsb0JBQVksRUFBRSxzQkFBQ1MsR0FBRDtBQUFBLGlCQUFVLE1BQUksQ0FBQ0YsT0FBTCxHQUFlRSxHQUF6QjtBQUFBLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixFQUlHLENBQUNULGNBQUQsSUFDQyxNQUFDLGlEQUFEO0FBQU8sb0JBQVksRUFBRSxzQkFBQ1MsR0FBRDtBQUFBLGlCQUFVLE1BQUksQ0FBQ0YsT0FBTCxHQUFlRSxHQUF6QjtBQUFBLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMSixDQURBLEVBVUQ7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDLE1BQUMsU0FBRDtBQUNFLGVBQU8sRUFBRUYsT0FEWDtBQUVFLHFCQUFhLEVBQUVDLGFBRmpCO0FBR0Usb0JBQVksRUFBRSxzQkFBQ0MsR0FBRDtBQUFBLGlCQUFVLE1BQUksQ0FBQ1IsU0FBTCxHQUFpQlEsR0FBM0I7QUFBQSxTQUhoQjtBQUlFLGVBQU8sRUFBRSxLQUFLRSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxDQVZDLENBRk47QUF1QkQ7Ozs7RUF2RGtCQyw0Q0FBSyxDQUFDQyxTOztBQTBEM0IsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ2pCLEtBQUQsRUFBVztBQUMzQixTQUNFO0FBQ0UsYUFBUyxFQUFDLFlBRFo7QUFFRSxPQUFHLEVBQUVBLEtBQUssQ0FBQ2tCLFlBRmI7QUFHRSxXQUFPLEVBQUVsQixLQUFLLENBQUNtQixPQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1Qm5CLEtBQUssQ0FBQ1MsT0FBN0IsQ0FERixDQUxGLENBREY7QUFXRCxDQVpEOztLQUFNUSxTO0FBY1NsQixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYWM0NzlhZTc2NjZmZjBlN2JmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMb2dpbiwgUmVnaXN0ZXIgfSBmcm9tIFwiLi9sb2duL2luZGV4XCI7XHJcbiBcclxuY2xhc3MgU2lnblVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNMb2dnaW5BY3RpdmU6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxuIFxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy9BZGQgLnJpZ2h0IGJ5IGRlZmF1bHRcclxuICAgIHRoaXMucmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIpO1xyXG4gIH1cclxuIFxyXG4gIGNoYW5nZVN0YXRlKCkge1xyXG4gICAgY29uc3QgeyBpc0xvZ2dpbkFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcclxuIFxyXG4gICAgaWYgKGlzTG9nZ2luQWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5yaWdodFNpZGUuY2xhc3NMaXN0LnJlbW92ZShcImxlZnRcIik7XHJcbiAgICAgICAgdGhpcy5yaWdodFNpZGUuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmlnaHRTaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJyaWdodFwiKTtcclxuICAgICAgICB0aGlzLnJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcclxuICAgICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICBpc0xvZ2dpbkFjdGl2ZTogIXByZXZTdGF0ZS5pc0xvZ2dpbkFjdGl2ZSxcclxuICAgIH0pKTtcclxuICB9XHJcbiBcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGlzTG9nZ2luQWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgY3VycmVudCA9IGlzTG9nZ2luQWN0aXZlID8gXCJTaWduIEluXCIgOiBcIlNpZ24gVXBcIjtcclxuICAgIGNvbnN0IGN1cnJlbnRBY3RpdmUgPSBpc0xvZ2dpbkFjdGl2ZSA/IFwiU2lnbiBVcFwiIDogXCJTaWduIEluXCI7XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgIDxkaXY+IFxyXG4gICAgICAgICAgPGRpdiBpZD1cImNlbnRlclwiIHJlZj17KHJlZikgPT4gKHRoaXMuY29udGFpbmVyID0gcmVmKX0+XHJcbiAgICAgICAgICAgIHtpc0xvZ2dpbkFjdGl2ZSAmJiAoXHJcbiAgICAgICAgICAgICAgPFJlZ2lzdGVyIGNvbnRhaW5lclJlZj17KHJlZikgPT4gKHRoaXMuY3VycmVudCA9IHJlZil9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHshaXNMb2dnaW5BY3RpdmUgJiYgKFxyXG4gICAgICAgICAgICAgIDxMb2dpbiBjb250YWluZXJSZWY9eyhyZWYpID0+ICh0aGlzLmN1cnJlbnQgPSByZWYpfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgIDxSaWdodFNpZGVcclxuICAgICAgICAgICAgY3VycmVudD17Y3VycmVudH1cclxuICAgICAgICAgICAgY3VycmVudEFjdGl2ZT17Y3VycmVudEFjdGl2ZX1cclxuICAgICAgICAgICAgY29udGFpbmVyUmVmPXsocmVmKSA9PiAodGhpcy5yaWdodFNpZGUgPSByZWYpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNoYW5nZVN0YXRlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4gXHJcbmNvbnN0IFJpZ2h0U2lkZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInJpZ2h0LXNpZGVcIlxyXG4gICAgICByZWY9e3Byb3BzLmNvbnRhaW5lclJlZn1cclxuICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj57cHJvcHMuY3VycmVudH08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcDsiXSwic291cmNlUm9vdCI6IiJ9