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

var UndrawTeam = function UndrawTeam(_props) {
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
    viewBox: "0 0 781.43 756.44",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 116.72,
    y1: 237.98,
    x2: 116.72,
    y2: 6.21,
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
    x1: 385.08,
    y1: 490.21,
    x2: 385.08,
    y2: 258.44,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 384.97,
    y1: 232.29,
    x2: 384.97,
    y2: 0.51,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 661.23,
    y1: 231.77,
    x2: 661.23,
    y2: 0,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 115.89,
    y1: 482.62,
    x2: 115.89,
    y2: 250.85,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 665.55,
    y1: 495.47,
    x2: 665.55,
    y2: 263.7,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__g",
    x1: 116.72,
    y1: 743.15,
    x2: 116.72,
    y2: 511.38,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__h",
    x1: 392.03,
    y1: 756.44,
    x2: 392.03,
    y2: 524.67,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("circle", {
    cx: 116.72,
    cy: 122.09,
    r: 115.89,
    fill: "url(#prefix__a)",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 116.72,
    cy: 121.46,
    r: 113.44,
    fill: "#f5f5f5"
  }), _react.default.createElement("path", {
    d: "M117.04 235.22a112.91 112.91 0 0 0 62.36-18.66c-4.18-22.84-20.09-24.15-20.09-24.15H71.6s-15 1.23-19.7 22.25a112.92 112.92 0 0 0 65.14 20.56z",
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 115.85,
    cy: 118.96,
    r: 50.29,
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M98.18 164.57h35.09v28.07a17.54 17.54 0 0 1-17.54 17.54 17.54 17.54 0 0 1-17.54-17.54v-28.07h-.01z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M101.53 163.27h28.39a3.35 3.35 0 0 1 3.35 3.35v24.72a17.54 17.54 0 0 1-17.54 17.54 17.54 17.54 0 0 1-17.54-17.54v-24.72a3.35 3.35 0 0 1 3.34-3.35z",
    fill: "#be7c5e"
  }), _react.default.createElement("path", {
    d: "M98.25 177.82a50.5 50.5 0 0 0 35.09.1v-4.31H98.25z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 115.85,
    cy: 129.88,
    r: 50.29,
    fill: "#be7c5e"
  }), _react.default.createElement("path", {
    d: "M85.38 109.14c.59-2.17 1.33-4.56 3.28-5.69 1.54-.9 3.45-.76 5.23-.67 13.9.76 27.68-2.41 41.2-5.72 7.73-1.89 16-4.19 21-10.42s-1.52-25.81-9.13-28.12c-5-1.53-10.8 1.32-15.54-.92-2.11-1-3.66-2.87-5.48-4.33-3.73-3-8.52-4.21-13.16-5.35-5.42-1.34-11.28-2.65-16.43-.5-4 1.66-6.92 5.17-10.71 7.25-7.21 4-16 2.14-24.26 2.12-2.79 0-6.12.56-7.23 3.12-.75 1.74-.15 3.72-.07 5.61.24 6-4.71 10.67-8.86 15s-8.07 10.51-5.45 15.89c1 2.05 2.83 3.6 3.87 5.63 1.79 3.52.89 7.77 1.54 11.66a29.34 29.34 0 0 0 3.27 8.4c3.08 6 18.55 38.3 25.66 30.09 3.44-4 4-15.56 5.39-20.76q2.88-11.21 5.88-22.29z",
    fill: "#333"
  }), _react.default.createElement("ellipse", {
    cx: 80.07,
    cy: 128.05,
    rx: 4.68,
    ry: 8.77,
    fill: "#be7c5e"
  }), _react.default.createElement("circle", {
    cx: 385.08,
    cy: 374.32,
    r: 115.89,
    fill: "url(#prefix__b)",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 385.3,
    cy: 373.58,
    r: 113.44,
    fill: "#f5f5f5"
  }), _react.default.createElement("path", {
    d: "M385.4 487.47a112.91 112.91 0 0 0 62.32-18.66c-4.18-22.84-20.09-24.15-20.09-24.15h-87.68s-15 1.23-19.7 22.25a112.92 112.92 0 0 0 65.15 20.56z",
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 384.2,
    cy: 371.19,
    r: 54.76,
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M366.53 416.8h35.09v28.07a17.54 17.54 0 0 1-17.54 17.54 17.54 17.54 0 0 1-17.54-17.54V416.8h-.01z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M369.88 415.5h28.39a3.35 3.35 0 0 1 3.35 3.35v24.72a17.54 17.54 0 0 1-17.54 17.54 17.54 17.54 0 0 1-17.54-17.54v-24.72a3.35 3.35 0 0 1 3.35-3.35z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M366.6 430.05a50.5 50.5 0 0 0 35.09.1v-4.31H366.6z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 384.2,
    cy: 382.11,
    r: 50.29,
    fill: "#fda57d"
  }), _react.default.createElement("circle", {
    cx: 384.13,
    cy: 315.49,
    r: 20.24,
    fill: "#f55f44"
  }), _react.default.createElement("circle", {
    cx: 384.13,
    cy: 295.56,
    r: 13.29,
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M375.35 326.59a20.24 20.24 0 0 1-10.55-25.88c-.14.28-.28.57-.41.86a20.243 20.243 0 1 0 36.94 16.57c.13-.29.25-.58.37-.88a20.24 20.24 0 0 1-26.35 9.33z",
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M348.39 336.37s21.19 43 81 18l-13.92-21.83-24.67-8.86z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M348.39 335.73s21.19 43 81 18l-13.92-21.83-24.67-8.86z",
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M364.72 320.07a249.85 249.85 0 0 1 39.18 0s-28.94 2.69-39.18 0z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M387.17 281.46a13.32 13.32 0 0 0-3 .23h.77a13.28 13.28 0 0 1 2 26.33 13.28 13.28 0 0 0 .24-26.56z",
    fill: "#f55f44"
  }), _react.default.createElement("ellipse", {
    cx: 333.9,
    cy: 382.06,
    rx: 4.68,
    ry: 8.77,
    fill: "#fda57d"
  }), _react.default.createElement("ellipse", {
    cx: 434.49,
    cy: 382.06,
    rx: 4.68,
    ry: 8.77,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    fill: "#f55f44",
    d: "M345.22 337l9.81-5.06 2.21 8.11-6.01 4.09-6.01-7.14z"
  }), _react.default.createElement("circle", {
    cx: 384.97,
    cy: 116.4,
    r: 115.89,
    fill: "url(#prefix__c)",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 384.97,
    cy: 115.77,
    r: 113.44,
    fill: "#f5f5f5"
  }), _react.default.createElement("path", {
    d: "M340.72 116.78s-12.86 63.36-19.88 59.85c0 0 67.7 58.48 127.48 0 0 0-10.53-44.65-25.73-59.85z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M385.29 229.55a112.91 112.91 0 0 0 62.36-18.66c-4.18-22.84-20.09-24.15-20.09-24.15h-87.72s-15 1.23-19.7 22.25a112.92 112.92 0 0 0 65.15 20.56z",
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 384.09,
    cy: 113.27,
    r: 50.29,
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M366.42 158.88h35.09v28.07A17.54 17.54 0 0 1 384 204.49a17.54 17.54 0 0 1-17.54-17.54v-28.07h-.04z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M369.77 157.58h28.39a3.35 3.35 0 0 1 3.35 3.35v24.72A17.54 17.54 0 0 1 384 203.19a17.54 17.54 0 0 1-17.54-17.54v-24.73a3.35 3.35 0 0 1 3.31-3.34z",
    fill: "#be7c5e"
  }), _react.default.createElement("path", {
    d: "M366.49 172.13a50.5 50.5 0 0 0 35.09.1v-4.31h-35.09z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 384.09,
    cy: 124.18,
    r: 50.29,
    fill: "#be7c5e"
  }), _react.default.createElement("path", {
    d: "M336.02 105.08h95.9s-8.19-38.72-44.44-36.25-51.46 36.25-51.46 36.25z",
    fill: "#333"
  }), _react.default.createElement("ellipse", {
    cx: 334.84,
    cy: 122.04,
    rx: 4.68,
    ry: 8.77,
    fill: "#be7c5e"
  }), _react.default.createElement("ellipse", {
    cx: 433.08,
    cy: 122.04,
    rx: 4.68,
    ry: 8.77,
    fill: "#be7c5e"
  }), _react.default.createElement("path", {
    d: "M336.02 106.38h95.9s-8.19-38.72-44.44-36.25-51.46 36.25-51.46 36.25z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 661.23,
    cy: 115.89,
    r: 115.89,
    fill: "url(#prefix__d)",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 661.45,
    cy: 115.14,
    r: 113.44,
    fill: "#f5f5f5"
  }), _react.default.createElement("path", {
    d: "M661.55 229.04a112.91 112.91 0 0 0 62.36-18.66c-4.19-22.85-20.09-24.16-20.09-24.16h-87.71s-15 1.23-19.7 22.25a112.92 112.92 0 0 0 65.14 20.57z",
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 660.36,
    cy: 112.75,
    r: 54.76,
    fill: "#72351c"
  }), _react.default.createElement("path", {
    d: "M642.68 158.36h35.09v28.07A17.54 17.54 0 0 1 660.23 204a17.54 17.54 0 0 1-17.54-17.54v-28.1h-.01z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M646 157.06h28.39a3.35 3.35 0 0 1 3.35 3.35v24.72a17.54 17.54 0 0 1-17.54 17.54 17.54 17.54 0 0 1-17.54-17.54v-24.72a3.35 3.35 0 0 1 3.35-3.35z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M642.72 171.61a50.5 50.5 0 0 0 35.09.1v-4.31h-35.09z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 660.36,
    cy: 123.67,
    r: 50.29,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M624.54 77.93s21.19 43 81 18L691.62 74.1l-24.67-8.86z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M624.54 77.3s21.19 43 81 18l-13.92-21.83-24.67-8.86z",
    fill: "#72351c"
  }), _react.default.createElement("path", {
    d: "M624.35 74.39a29.05 29.05 0 0 1 7.2-11.71c9.89-9.78 26.11-11.84 34.43-23a6.51 6.51 0 0 1-3 9.18c8-.05 17.21-.75 21.71-7.31a14.91 14.91 0 0 1-2.51 15.74c7.06.32 14.6 5.11 15.06 12.17.3 4.7-2.64 9.15-6.51 11.85s-8.53 3.91-13.13 4.91c-13.42 3-62.01 15.41-53.25-11.83zM710.65 124.11h-1.33l-25.94 23.11c-25-11.7-43.34 0-43.34 0l-27.2-22.14-2.74.34a50.29 50.29 0 0 0 100.56-1.29zm-50.36 31.95c-9.78 0-17.71-2-17.71-4.43s7.93-4.43 17.71-4.43 17.71 2 17.71 4.43-7.93 4.43-17.72 4.43z",
    fill: "#72351c"
  }), _react.default.createElement("ellipse", {
    cx: 610.05,
    cy: 123.62,
    rx: 4.68,
    ry: 8.77,
    fill: "#fda57d"
  }), _react.default.createElement("ellipse", {
    cx: 710.64,
    cy: 123.62,
    rx: 4.68,
    ry: 8.77,
    fill: "#fda57d"
  }), _react.default.createElement("circle", {
    cx: 115.89,
    cy: 366.73,
    r: 115.89,
    fill: "url(#prefix__e)",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 116.11,
    cy: 365.99,
    r: 113.44,
    fill: "#f5f5f5"
  }), _react.default.createElement("path", {
    d: "M116.21 479.88a112.91 112.91 0 0 0 62.35-18.66c-4.18-22.84-20.09-24.15-20.09-24.15H70.72s-15 1.23-19.7 22.25a112.92 112.92 0 0 0 65.19 20.56z",
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 115.01,
    cy: 363.6,
    r: 54.76,
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M97.34 409.21h35.09v28.07a17.54 17.54 0 0 1-17.54 17.54 17.54 17.54 0 0 1-17.54-17.54v-28.07h-.01z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M100.69 407.91h28.39a3.35 3.35 0 0 1 3.35 3.35V436a17.54 17.54 0 0 1-17.54 17.54A17.54 17.54 0 0 1 97.34 436v-24.75a3.35 3.35 0 0 1 3.35-3.35z",
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M97.41 422.46a50.5 50.5 0 0 0 35.09.1v-4.34H97.41z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 115.01,
    cy: 374.52,
    r: 50.29,
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M79.2 328.77s21.19 43 81 18l-13.92-21.83-24.67-8.86z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M79.2 328.14s21.19 43 81 18l-13.92-21.83-24.67-8.86z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M79.01 325.22a29.05 29.05 0 0 1 7.2-11.71c9.89-9.78 26.11-11.84 34.43-23a6.51 6.51 0 0 1-3 9.18c8-.05 17.21-.75 21.71-7.31a14.91 14.91 0 0 1-2.51 15.74c7.06.32 14.6 5.11 15.06 12.17.3 4.7-2.64 9.15-6.51 11.85s-8.54 3.93-13.14 4.95c-13.42 2.98-62 15.39-53.24-11.87z",
    fill: "#333"
  }), _react.default.createElement("ellipse", {
    cx: 64.7,
    cy: 374.47,
    rx: 4.68,
    ry: 8.77,
    fill: "#fdb797"
  }), _react.default.createElement("ellipse", {
    cx: 165.29,
    cy: 374.47,
    rx: 4.68,
    ry: 8.77,
    fill: "#fdb797"
  }), _react.default.createElement("circle", {
    cx: 665.55,
    cy: 379.58,
    r: 115.89,
    fill: "url(#prefix__f)",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 665.55,
    cy: 378.95,
    r: 113.44,
    fill: "#f5f5f5"
  }), _react.default.createElement("path", {
    d: "M665.87 492.73a112.91 112.91 0 0 0 62.36-18.66c-4.18-22.84-20.09-24.15-20.09-24.15h-87.72s-15 1.23-19.7 22.25a112.92 112.92 0 0 0 65.15 20.56z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M647 422.06h35.09v28.07a17.54 17.54 0 0 1-17.54 17.54A17.54 17.54 0 0 1 647 450.13v-28.07z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M650.35 420.76h28.39a3.35 3.35 0 0 1 3.35 3.35v24.72a17.54 17.54 0 0 1-17.54 17.54A17.54 17.54 0 0 1 647 448.83v-24.72a3.35 3.35 0 0 1 3.35-3.35z",
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M647.07 435.31a50.5 50.5 0 0 0 35.09.1v-4.31h-35.09z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 664.67,
    cy: 387.37,
    r: 50.29,
    fill: "#fdb797"
  }), _react.default.createElement("ellipse", {
    cx: 615.42,
    cy: 385.22,
    rx: 4.68,
    ry: 8.77,
    fill: "#fdb797"
  }), _react.default.createElement("ellipse", {
    cx: 713.66,
    cy: 385.22,
    rx: 4.68,
    ry: 8.77,
    fill: "#fdb797"
  }), _react.default.createElement("rect", {
    x: 634.03,
    y: 387.61,
    width: 21.51,
    height: 10.76,
    rx: 4.35,
    ry: 4.35,
    fill: "none",
    stroke: "#333",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("rect", {
    x: 883.1,
    y: 459.39,
    width: 21.51,
    height: 10.76,
    rx: 4.35,
    ry: 4.35,
    transform: "rotate(180 789.21 428.875)",
    fill: "none",
    stroke: "#333",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M654.72 388.65s6.82-3.7 19.5 0",
    fill: "none",
    stroke: "#333",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M699.44 350.92l12.34 28.67s15.09-19.02-12.34-28.67z",
    fill: "#858585"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#333",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M695.32 392.99l18.42-16.45"
  }), _react.default.createElement("path", {
    d: "M629.92 350.92l-12.34 28.67s-15.09-19.02 12.34-28.67z",
    fill: "#858585"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#333",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M634.03 392.99l-18.67-16.45"
  }), _react.default.createElement("circle", {
    cx: 116.72,
    cy: 627.26,
    r: 115.89,
    fill: "url(#prefix__g)",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 116.72,
    cy: 626.63,
    r: 113.44,
    fill: "#f5f5f5"
  }), _react.default.createElement("path", {
    d: "M179.47 636.83c0 41.78-27.26 88.29-60.89 88.29s-60.86-46.51-60.86-88.29 27.26-63 60.89-63 60.86 21.23 60.86 63z",
    fill: "#fdd835"
  }), _react.default.createElement("path", {
    d: "M117.04 740.42a112.91 112.91 0 0 0 62.36-18.66c-4.18-22.84-20.09-24.15-20.09-24.15H71.6s-15 1.23-19.7 22.25a112.92 112.92 0 0 0 65.14 20.56z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M98.18 669.74h35.09v28.07a17.54 17.54 0 0 1-17.54 17.54 17.54 17.54 0 0 1-17.54-17.54v-28.07h-.01z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M101.53 668.44h28.39a3.35 3.35 0 0 1 3.35 3.35v24.72a17.54 17.54 0 0 1-17.54 17.54 17.54 17.54 0 0 1-17.54-17.54v-24.72a3.35 3.35 0 0 1 3.34-3.35z",
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M98.25 682.99a50.5 50.5 0 0 0 35.09.1v-4.31H98.25z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 115.85,
    cy: 635.05,
    r: 50.29,
    fill: "#fdb797"
  }), _react.default.createElement("ellipse", {
    cx: 66.6,
    cy: 632.9,
    rx: 4.68,
    ry: 8.77,
    fill: "#fdb797"
  }), _react.default.createElement("ellipse", {
    cx: 164.84,
    cy: 632.9,
    rx: 4.68,
    ry: 8.77,
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M71.29 607.77s28.43 38.91 93.63 25.62c0 0 7.28-8.86-10.44-36.06s-67.06-22.77-83.19 10.44z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M71.29 607.14s28.43 38.91 93.63 25.62c0 0 7.28-8.86-10.44-36.06s-67.06-22.77-83.19 10.44z",
    fill: "#fdd835"
  }), _react.default.createElement("circle", {
    cx: 392.03,
    cy: 640.55,
    r: 115.89,
    fill: "url(#prefix__h)",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 392.26,
    cy: 639.81,
    r: 113.44,
    fill: "#f5f5f5"
  }), _react.default.createElement("path", {
    d: "M454.67 650.99c0 37.74-27.11 56.31-62.32 56.31s-65.16-18.57-65.16-56.31 28.54-68.33 63.74-68.33 63.74 30.56 63.74 68.33z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M392.35 753.7a112.91 112.91 0 0 0 62.37-18.66c-4.18-22.84-20.09-24.15-20.09-24.15h-87.72s-15 1.23-19.7 22.25a112.92 112.92 0 0 0 65.14 20.56z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M373.49 683h35.09v28.07A17.54 17.54 0 0 1 391 728.64a17.54 17.54 0 0 1-17.54-17.54V683h.03z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M376.83 681.73h28.39a3.35 3.35 0 0 1 3.35 3.35v24.72A17.54 17.54 0 0 1 391 727.34a17.54 17.54 0 0 1-17.54-17.54v-24.73a3.35 3.35 0 0 1 3.35-3.35z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M373.56 696.28a50.5 50.5 0 0 0 35.09.1v-4.31h-35.09z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 391.16,
    cy: 648.33,
    r: 50.29,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M333.2 651.62s31.32-3.8 55-34.16c0 0 31.32 34.48 53.14 30.68 0 0 12.65-13.29 0-26.57s-22.46-30.05-39.22-27.84-37.33 3.16-46.18 11.07-22.74 46.82-22.74 46.82z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M333.2 650.99s31.32-3.8 55-34.16c0 0 31.32 34.48 53.14 30.68 0 0 12.65-13.29 0-26.57s-22.46-30.05-39.22-27.84-37.29 3.12-46.14 11.12-22.78 46.77-22.78 46.77z",
    fill: "#333"
  }), _react.default.createElement("ellipse", {
    cx: 340.85,
    cy: 648.29,
    rx: 4.68,
    ry: 8.77,
    fill: "#fda57d"
  }), _react.default.createElement("ellipse", {
    cx: 441.44,
    cy: 648.29,
    rx: 4.68,
    ry: 8.77,
    fill: "#fda57d"
  }));
};

UndrawTeam.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawTeam;
exports.default = _default;