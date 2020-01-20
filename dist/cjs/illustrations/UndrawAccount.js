"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultProps = _interopRequireDefault(require("../default-props"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var UndrawAccount = function UndrawAccount(_props) {
  var props = Object.assign({}, _props);
  var primaryColor = props.primaryColor || _defaultProps.default.primaryColor;
  var style = Object.assign({
    height: props.height || _defaultProps.default.height,
    width: '100%'
  }, props.style);
  delete props.primaryColor;
  delete props.height;
  delete props.style;
  return _react.default.createElement("svg", _extends({
    "data-name": "Layer 1",
    width: "1em",
    height: "1em",
    viewBox: "0 0 785 753.73",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 452.8,
    y1: 753.73,
    x2: 452.8,
    gradientUnits: "userSpaceOnUse"
  }, _react.default.createElement("stop", {
    offset: 0,
    stopColor: "gray",
    stopOpacity: 0.25
  }), _react.default.createElement("stop", {
    offset: 0.54,
    stopColor: "gray",
    stopOpacity: 0.12
  }), _react.default.createElement("stop", {
    offset: 1,
    stopColor: "gray",
    stopOpacity: 0.1
  })), _react.default.createElement("linearGradient", {
    id: "prefix__b",
    x1: 209.37,
    y1: 339.46,
    x2: 209.37,
    y2: 101.61,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 32.38,
    y1: 227.8,
    x2: 174.2,
    y2: 227.8,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 211.6,
    y1: 606.34,
    x2: 211.6,
    y2: 582.89,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 572.28,
    y1: 718,
    x2: 572.28,
    y2: 646.54,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 630.34,
    y1: 245.66,
    x2: 630.34,
    y2: 91.56,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M120.6 0H785v753.73H120.6z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M130.65 14.52h643.19v725.82H130.65z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M65.88 134h365.14v232.26H65.88z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M0 101.61h418.74v237.84H0z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M4.47 136.23h408.69v197.65H4.47z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M32.38 152.98h141.81v149.63H32.38z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M36.85 156.33h134v142.93h-134z"
  }), _react.default.createElement("path", {
    d: "M141.27 212.77c-1-8.49-2.5-17-5.75-24.94s-8.47-15.24-15.74-19.75a18 18 0 0 0-8.7-3c-5.69-.2-10.95 3.64-13.88 8.52a39.74 39.74 0 0 0-2.59 5.27 12.27 12.27 0 0 0-10.18 11.24 31.28 31.28 0 0 0 4.42 59.06v5.33a31.39 31.39 0 0 0-23.45 30.27v14.52h62.53v-14.54a31.39 31.39 0 0 0-23.43-30.27v-5.33a31.28 31.28 0 0 0 23.45-30.28v-.22l3.52 7.83c3.35 7.46 6.78 15.46 5.47 23.54 6.42-11 5.89-24.61 4.33-37.25z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M4.47 106.08h408.69v30.15H4.47z"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M225.56 198.2h155.21v10.05H225.56z"
  }), _react.default.createElement("path", {
    fill: "#f5f5f5",
    d: "M225.56 240.64h155.21v10.05H225.56z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M224.45 219.42h91.56v10.05h-91.56z"
  }), _react.default.createElement("path", {
    fill: "#69f0ae",
    opacity: 0.2,
    d: "M224.45 261.85h62.53v10.05h-62.53z"
  }), _react.default.createElement("path", {
    fill: "#69f0ae",
    d: "M298.14 261.85h62.53v10.05h-62.53z"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M185.36 419.86H724.7v18.98H185.36zM185.36 461.17h179.78v18.98H185.36z"
  }), _react.default.createElement("path", {
    fill: "#69f0ae",
    d: "M544.92 461.17H724.7v18.98H544.92z"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M185.36 502.49H724.7v18.98H185.36zM185.36 543.81H724.7v18.98H185.36z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M183.13 582.89h56.95v23.45h-56.95z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M185.36 585.12h53.6v18.98h-53.6z"
  }), _react.default.createElement("path", {
    fill: "#69f0ae",
    d: "M426.56 585.12h53.6v18.98h-53.6zM671.1 585.12h53.6v18.98h-53.6z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M413.16 646.54H731.4v71.47H413.16z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M418.74 654.35H724.7v54.72H418.74z"
  }), _react.default.createElement("path", {
    opacity: 0.2,
    d: "M418.74 654.35H724.7v54.72H418.74z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M529.29 91.56H731.4v154.1H529.29z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M537.11 101.61h187.6v134h-187.6z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    opacity: 0.2,
    d: "M537.11 101.61h187.6v134h-187.6z"
  }));
};

UndrawAccount.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawAccount;
exports.default = _default;