webpackHotUpdate_N_E("pages/index",{

/***/ "./components/log.js":
/*!***************************!*\
  !*** ./components/log.js ***!
  \***************************/
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
/* harmony import */ var _log_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log.module.css */ "./components/log.module.css");
/* harmony import */ var _log_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_log_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _logn_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logn/index */ "./components/logn/index.jsx");






var _jsxFileName = "D:\\React Projects\\codestats\\components\\log.js",
    _this3 = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Log = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Log, _React$Component);

  var _super = _createSuper(Log);

  function Log(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Log);

    _this = _super.call(this, props);
    _this.state = {
      isLogginActive: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Log, [{
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
      var current = isLogginActive ? "Register" : "Login";
      var currentActive = isLogginActive ? "login" : "register";
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
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
          lineNumber: 40,
          columnNumber: 11
        }
      }, isLogginActive && __jsx(_logn_index__WEBPACK_IMPORTED_MODULE_7__["Login"], {
        containerRef: function containerRef(ref) {
          return _this2.current = ref;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 15
        }
      }), !isLogginActive && __jsx(_logn_index__WEBPACK_IMPORTED_MODULE_7__["Register"], {
        containerRef: function containerRef(ref) {
          return _this2.current = ref;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
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
          lineNumber: 50,
          columnNumber: 11
        }
      })));
    }
  }]);

  return Log;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var RightSide = function RightSide(props) {
  return __jsx("div", {
    className: "right-side",
    ref: props.containerRef,
    onClick: props.onClick,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner-container",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "text",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, props.current)));
};

_c = RightSide;
/* harmony default export */ __webpack_exports__["default"] = (Log);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2cuanMiXSwibmFtZXMiOlsiTG9nIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9nZ2luQWN0aXZlIiwicmlnaHRTaWRlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJjdXJyZW50IiwiY3VycmVudEFjdGl2ZSIsInJlZiIsImNvbnRhaW5lciIsImNoYW5nZVN0YXRlIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmlnaHRTaWRlIiwiY29udGFpbmVyUmVmIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxHOzs7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsb0JBQWMsRUFBRTtBQURMLEtBQWI7QUFGaUI7QUFLbEI7Ozs7d0NBRW1CO0FBQ2xCO0FBQ0EsV0FBS0MsU0FBTCxDQUFlQyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixPQUE3QjtBQUNEOzs7a0NBRWE7QUFBQSxVQUNKSCxjQURJLEdBQ2UsS0FBS0QsS0FEcEIsQ0FDSkMsY0FESTs7QUFHWixVQUFJQSxjQUFKLEVBQW9CO0FBQ2xCLGFBQUtDLFNBQUwsQ0FBZUMsU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0MsT0FBaEM7QUFDQSxhQUFLSCxTQUFMLENBQWVDLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLE1BQTdCO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBS0YsU0FBTCxDQUFlQyxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxNQUFoQztBQUNBLGFBQUtILFNBQUwsQ0FBZUMsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsT0FBN0I7QUFDRDs7QUFDRCxXQUFLRSxRQUFMLENBQWMsVUFBQ0MsU0FBRDtBQUFBLGVBQWdCO0FBQzVCTix3QkFBYyxFQUFFLENBQUNNLFNBQVMsQ0FBQ047QUFEQyxTQUFoQjtBQUFBLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQUE7O0FBQUEsVUFDQ0EsY0FERCxHQUNvQixLQUFLRCxLQUR6QixDQUNDQyxjQUREO0FBRVAsVUFBTU8sT0FBTyxHQUFHUCxjQUFjLEdBQUcsVUFBSCxHQUFnQixPQUE5QztBQUNBLFVBQU1RLGFBQWEsR0FBR1IsY0FBYyxHQUFHLE9BQUgsR0FBYSxVQUFqRDtBQUNBLGFBRU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBO0FBQUssVUFBRSxFQUFDLFFBQVI7QUFBaUIsV0FBRyxFQUFFLGFBQUNTLElBQUQ7QUFBQSxpQkFBVSxNQUFJLENBQUNDLFNBQUwsR0FBaUJELElBQTNCO0FBQUEsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHVCxjQUFjLElBQ2IsTUFBQyxpREFBRDtBQUFPLG9CQUFZLEVBQUUsc0JBQUNTLEdBQUQ7QUFBQSxpQkFBVSxNQUFJLENBQUNGLE9BQUwsR0FBZUUsR0FBekI7QUFBQSxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosRUFJRyxDQUFDVCxjQUFELElBQ0MsTUFBQyxvREFBRDtBQUFVLG9CQUFZLEVBQUUsc0JBQUNTLEdBQUQ7QUFBQSxpQkFBVSxNQUFJLENBQUNGLE9BQUwsR0FBZUUsR0FBekI7QUFBQSxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTEosQ0FEQSxFQVVEO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxNQUFDLFNBQUQ7QUFDRSxlQUFPLEVBQUVGLE9BRFg7QUFFRSxxQkFBYSxFQUFFQyxhQUZqQjtBQUdFLG9CQUFZLEVBQUUsc0JBQUNDLEdBQUQ7QUFBQSxpQkFBVSxNQUFJLENBQUNSLFNBQUwsR0FBaUJRLEdBQTNCO0FBQUEsU0FIaEI7QUFJRSxlQUFPLEVBQUUsS0FBS0UsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsQ0FWQyxDQUZOO0FBdUJEOzs7O0VBdkRlQyw0Q0FBSyxDQUFDQyxTOztBQTBEeEIsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ2pCLEtBQUQsRUFBVztBQUMzQixTQUNFO0FBQ0UsYUFBUyxFQUFDLFlBRFo7QUFFRSxPQUFHLEVBQUVBLEtBQUssQ0FBQ2tCLFlBRmI7QUFHRSxXQUFPLEVBQUVsQixLQUFLLENBQUNtQixPQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1Qm5CLEtBQUssQ0FBQ1MsT0FBN0IsQ0FERixDQUxGLENBREY7QUFXRCxDQVpEOztLQUFNUSxTO0FBY1NsQixrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZGY4MDJkNjY3MTljOTc3NTJiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL2xvZy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IExvZ2luLCBSZWdpc3RlciB9IGZyb20gXCIuL2xvZ24vaW5kZXhcIjtcclxuIFxyXG5jbGFzcyBMb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc0xvZ2dpbkFjdGl2ZTogdHJ1ZSxcclxuICAgIH07XHJcbiAgfVxyXG4gXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvL0FkZCAucmlnaHQgYnkgZGVmYXVsdFxyXG4gICAgdGhpcy5yaWdodFNpZGUuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xyXG4gIH1cclxuIFxyXG4gIGNoYW5nZVN0YXRlKCkge1xyXG4gICAgY29uc3QgeyBpc0xvZ2dpbkFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcclxuIFxyXG4gICAgaWYgKGlzTG9nZ2luQWN0aXZlKSB7XHJcbiAgICAgIHRoaXMucmlnaHRTaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJyaWdodFwiKTtcclxuICAgICAgdGhpcy5yaWdodFNpZGUuY2xhc3NMaXN0LmFkZChcImxlZnRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJpZ2h0U2lkZS5jbGFzc0xpc3QucmVtb3ZlKFwibGVmdFwiKTtcclxuICAgICAgdGhpcy5yaWdodFNpZGUuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICBpc0xvZ2dpbkFjdGl2ZTogIXByZXZTdGF0ZS5pc0xvZ2dpbkFjdGl2ZSxcclxuICAgIH0pKTtcclxuICB9XHJcbiBcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGlzTG9nZ2luQWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgY3VycmVudCA9IGlzTG9nZ2luQWN0aXZlID8gXCJSZWdpc3RlclwiIDogXCJMb2dpblwiO1xyXG4gICAgY29uc3QgY3VycmVudEFjdGl2ZSA9IGlzTG9nZ2luQWN0aXZlID8gXCJsb2dpblwiIDogXCJyZWdpc3RlclwiO1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICA8ZGl2PiBcclxuICAgICAgICAgIDxkaXYgaWQ9XCJjZW50ZXJcIiByZWY9eyhyZWYpID0+ICh0aGlzLmNvbnRhaW5lciA9IHJlZil9PlxyXG4gICAgICAgICAgICB7aXNMb2dnaW5BY3RpdmUgJiYgKFxyXG4gICAgICAgICAgICAgIDxMb2dpbiBjb250YWluZXJSZWY9eyhyZWYpID0+ICh0aGlzLmN1cnJlbnQgPSByZWYpfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7IWlzTG9nZ2luQWN0aXZlICYmIChcclxuICAgICAgICAgICAgICA8UmVnaXN0ZXIgY29udGFpbmVyUmVmPXsocmVmKSA9PiAodGhpcy5jdXJyZW50ID0gcmVmKX0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIj5cclxuICAgICAgICAgIDxSaWdodFNpZGVcclxuICAgICAgICAgICAgY3VycmVudD17Y3VycmVudH1cclxuICAgICAgICAgICAgY3VycmVudEFjdGl2ZT17Y3VycmVudEFjdGl2ZX1cclxuICAgICAgICAgICAgY29udGFpbmVyUmVmPXsocmVmKSA9PiAodGhpcy5yaWdodFNpZGUgPSByZWYpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNoYW5nZVN0YXRlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4gXHJcbmNvbnN0IFJpZ2h0U2lkZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInJpZ2h0LXNpZGVcIlxyXG4gICAgICByZWY9e3Byb3BzLmNvbnRhaW5lclJlZn1cclxuICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj57cHJvcHMuY3VycmVudH08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExvZzsiXSwic291cmNlUm9vdCI6IiJ9