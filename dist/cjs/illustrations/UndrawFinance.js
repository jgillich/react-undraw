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

var UndrawFinance = function UndrawFinance(_props) {
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
    viewBox: "0 0 954 549.86",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 569.11,
    y1: 596.37,
    x2: 569.11,
    y2: 230.62,
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
    x1: 878.33,
    y1: 643.77,
    x2: 878.33,
    y2: 175.07,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M236.74 360.11c-57.68-19.93-123.63-36.8-177.52-8.16-6.83 3.63-13.56 8.2-17.24 15-9.72 17.89 5.73 41.09-1.8 60S4.31 455.38 6.63 475.58c.61 5.28 3.47 10.06 6.84 14.18 21.11 25.79 59.81 28.4 92.52 22s64.7-19.67 98-18c32 1.65 61.44 17 90.76 29.92 49.43 21.84 107.16 37.51 156.55 15.56 22.63-10.06 41.34-27.19 63-39.15a155.06 155.06 0 0 1 95.7-17.56c22 3.1 43 10.9 64.53 16.28 48.9 12.21 99.94 11.81 150.33 11.33 9.38-.09 18.91-.2 27.9-2.88 13.31-4 24.29-13.21 34.86-22.22 13.89-11.83 28.52-24.83 33-42.52 5.29-21-5.66-43.32-21.9-57.59s-37-22.07-57.26-29.59c-5-1.84-10.34-3.71-15.46-2.32-3.36.92-6.19 3.16-8.7 5.57-14.38 13.84-26.53 37.25-46.14 33.49-7-1.34-12.73-6.21-18.27-10.71-29.58-24-69.37-42.53-105.07-29.27-26.11 9.7-44.54 34.61-71 43.4-18.82 6.26-39.27 3.55-59.07 4.77-28.8 1.76-56.83 11.94-85.67 11.32-73.54-1.58-134.81-71.9-208.05-65.2-5.74.52-12 1.84-15.52 6.38",
    fill: primaryColor,
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M144 293.22s-61.11 36.89 51.58 93.71c0 0 24.83-46.1-2.62-83.69a37 37 0 0 0-48-10.52z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M144.73 292.45s52.32 40 50.86 94.45",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M917.15 262.49c12.38 45.27-40.43 174.24-40.43 174.24S765.6 352.6 753.21 307.33a85 85 0 1 1 163.93-44.85z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M917.15 262.49c12.38 45.27-40.43 174.24-40.43 174.24S765.6 352.6 753.21 307.33a85 85 0 1 1 163.93-44.85z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M813.21 203.2s69.17 104.42 64 233.78",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M934.8 345.23s-62.72-34.12-54.78 91.83c0 0 52.32-1.87 70.89-44.55a37 37 0 0 0-15.19-46.75z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M935.83 345.45s-8.1 65.38-55.81 91.61",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M16.56 331.19s-61.14 36.88 51.56 93.67c0 0 24.83-46.1-2.62-83.69a37 37 0 0 0-48-10.52z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M17.26 330.42s52.32 40 50.86 94.45",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M902.43 554.27h-64.25a21.42 21.42 0 0 0 2.24-9.57V252.14a21.51 21.51 0 0 0-21.51-21.51H321.58a21.51 21.51 0 0 0-21.51 21.51v292.57a21.42 21.42 0 0 0 2.24 9.57h-66.52a5.69 5.69 0 0 0-5.69 5.72v4.59a31.82 31.82 0 0 0 31.82 31.82H876.3a31.82 31.82 0 0 0 31.82-31.82V560a5.69 5.69 0 0 0-5.69-5.73zm-395.89 18.2l-5.54-6.25h136.78l-6.1 6.26z",
    transform: "translate(-123 -175.07)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("rect", {
    x: 183.16,
    y: 59.7,
    width: 528.12,
    height: 327.99,
    rx: 23.26,
    ry: 23.26,
    fill: "#535461"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M194.28 107.51h504.77v267.95H194.28z"
  }), _react.default.createElement("circle", {
    cx: 446.67,
    cy: 84.16,
    r: 4.45,
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M524.6 376.01l-17.34 17.79H385l-15.67-17.79H120.34a5.56 5.56 0 0 0-5.56 5.56v4.48a31.1 31.1 0 0 0 31.1 31.1h600.46a31.1 31.1 0 0 0 31.1-31.1v-4.48a5.56 5.56 0 0 0-5.56-5.56z",
    fill: "#535461"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M258.77 124.19v227.92h376.9"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    opacity: 0.5,
    d: "M292.12 283.18h38.91v60.04h-38.91z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M358.83 229.81h38.91v113.41h-38.91z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    opacity: 0.5,
    d: "M425.54 262.05h38.91v81.16h-38.91z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    opacity: 0.8,
    d: "M492.25 212.02h38.91v131.2h-38.91z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M558.96 165.32h38.91v177.89h-38.91z"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M311.02 246.49l67.82-61.15 66.71 57.81 65.6-70.04 66.71-27.8"
  }), _react.default.createElement("circle", {
    cx: 311.02,
    cy: 246.49,
    r: 7.78,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 444.44,
    cy: 242.04,
    r: 7.78,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 512.26,
    cy: 173.11,
    r: 7.78,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 378.84,
    cy: 184.22,
    r: 7.78,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 577.86,
    cy: 145.31,
    r: 7.78,
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M990.31 560.82c-4.1-1.35-10.18-2.91-15-2.36-4.59-1.67-15.38-6-22.75-12.52a164.07 164.07 0 0 0-.49-19.22c-3.77-42.87 4.71-71.13 4.71-71.13s6.66-21.56 5.93-39.45c.43.81.67 1.29.67 1.29.58-15.43 5.84-31.4 9.78-41.35a3.32 3.32 0 0 0 .44-.16l4.4-10.44a9.06 9.06 0 0 0 .83-1.93l.71-1.65-.21-.09c.07-.27.14-.56.21-.85 2.81-11.89 5-40.09 5-40.09 7.54-29.68-10.36-48-10.36-48l-30.38-26.14a3.85 3.85 0 0 1 .3 1.07l-.25-.22c-.43-1.23-.9-2.7-1.36-4.38a23.1 23.1 0 0 0 3-2.57 23.33 23.33 0 0 0 6.81-12.15 46.07 46.07 0 0 0 .45-11l-.5-12.61a40 40 0 0 0-.75-7.35c-2.29-10-12.54-17-22.83-17.46a83.45 83.45 0 0 0-9.8.52 65.93 65.93 0 0 1-8 .17 1.44 1.44 0 0 1-.86-.23 1.26 1.26 0 0 1-.37-.87 4.34 4.34 0 0 1 1.06-3.25 4 4 0 0 1 1.38-.79l-.73.17a4 4 0 0 1 1.2-.65 23.29 23.29 0 0 0-7.58 2.75 9.79 9.79 0 0 0-1.77 1.49 7.73 7.73 0 0 0-2.56 4.76 8.86 8.86 0 0 1-2.7-4 4 4 0 0 1 0-1.94q-.27.33-.52.68v-.21a20.22 20.22 0 0 0-4 8.14 3.17 3.17 0 0 1-.72-2.34c-.15.47-.29.94-.42 1.41a3.26 3.26 0 0 1 0-.94 32.21 32.21 0 0 0-1.57 11.18c0 3.78 1.68 9.67 5.73 11 .21.07.42.12.64.17a25.43 25.43 0 0 0 17.15 38.84q.1.69.19 1.45h.16c.11 1 .2 2.1.26 3.22a21.67 21.67 0 0 1-3.34 2.68 27.54 27.54 0 0 1-11.12 3.68 33.1 33.1 0 0 0-13.37 4c-4.85 2.71-10.2 6.66-11.88 11.46-2.8 8-18.22 20.45-28.56 22l-3.68-.21-.27-.08v.07l-.9-.05h-.29v.05l-.93-.05s-.09.43-.22 1.19c-5.2-1.79-16.25-6.75-30.63-19.8-16-14.53-37.65-11.67-46-9.84a1.43 1.43 0 0 0-.38 2.65c3.37 1.85 8.59 4.54 11 4.84 0 0-5 5.23.32 8a3.86 3.86 0 0 0 4-.39c2.58-1.89 9.75 2.39 20.14 4.62 0 0 29.32 30.34 43.88 35a20.93 20.93 0 0 0 1.11 1.93l.9-.07v.07h.38l.11 1s22.64-1.19 30-9.41a11.79 11.79 0 0 0 1.43-1.53l-7.87 99h.07l-.07.94h5.79a218.25 218.25 0 0 1-1.57 36.46v64.54s-.3 5.68 11.5 14a441.06 441.06 0 0 1 35.72 27.69l1.43 1.24c-2.17 19.75-6.71 56.56-10.5 57.93l2.34.41c-4 5.07-15.36 19-18.82 19.37-4.24.47-7.07 7.07 0 8.48a79.21 79.21 0 0 0 42-4.14 6.41 6.41 0 0 0 4-6.82l-1.37-10.4a1.46 1.46 0 0 1 .6.63c.94 2.83 0-3.77 0-3.77a294.73 294.73 0 0 0 9.11-38l14 12.1s.28-.35.77-1c3.43 7.78 9.55 23.7 8.18 35.36-1.88 16 16 1.88 14.13-7.54-1.52-7.62 5.28-39.92 7.93-52a5.37 5.37 0 0 0-3.6-6.26z",
    transform: "translate(-123 -175.07)",
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    d: "M721 124.42s-13.34-2.3-33.12-20.24c-15.65-14.19-36.76-11.4-44.9-9.61a1.39 1.39 0 0 0-.37 2.58c3.29 1.8 8.39 4.43 10.78 4.73 0 0-4.93 5.1.31 7.83a3.77 3.77 0 0 0 3.94-.38c2.52-1.84 9.52 2.34 19.67 4.51 0 0 39.56 40.94 48.76 34zM789.11 68.76s3.68 15.64 0 26.68l16.56 2.3 14.72-7.36v-9.66s-6.9-14.72-5.06-31.74z",
    fill: "#fec3be"
  }), _react.default.createElement("path", {
    d: "M836 407.76s12 23.46 10.12 39.1 15.64 1.84 13.8-7.36c-1.49-7.44 5.15-39 7.74-50.74a5.24 5.24 0 0 0-3.48-6.11c-5.53-1.82-14.79-4.05-19.44-.64-6.87 5.05-8.74 25.75-8.74 25.75zM790.49 433.52s-15.64 20.24-19.78 20.7-6.9 6.9 0 8.28a77.34 77.34 0 0 0 41-4 6.26 6.26 0 0 0 3.93-6.66l-2.64-19.7z",
    fill: "#8b416f"
  }), _react.default.createElement("path", {
    d: "M764.73 218.71l-15 2a219.53 219.53 0 0 1-.18 52.73v63s-.29 5.55 11.23 13.62a430.67 430.67 0 0 1 34.88 27l41.74 36.16s16.56-20.24 14.26-32.2c0 0-27.6-8.74-31.28-23-2.11-8.16-12.81-15-21.57-19.3a26.82 26.82 0 0 1-14.35-30.44 23.47 23.47 0 0 1 2.35-5.91c7.36-12.88 17.94-41.86 17.94-41.86l-20.24-38.58z",
    fill: "#4d4981"
  }), _react.default.createElement("path", {
    d: "M764.73 218.71l-15 2a219.53 219.53 0 0 1-.18 52.73v63s-.29 5.55 11.23 13.62a430.67 430.67 0 0 1 34.88 27l41.74 36.16s16.56-20.24 14.26-32.2c0 0-27.6-8.74-31.28-23-2.11-8.16-12.81-15-21.57-19.3a26.82 26.82 0 0 1-14.35-30.44 23.47 23.47 0 0 1 2.35-5.91c7.36-12.88 17.94-41.86 17.94-41.86l-20.24-38.58z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M786.81 434.93s27.14 4.6 28.06 7.36 0-3.68 0-3.68 15.64-47.38 12-89.23 4.6-69.46 4.6-69.46 9.66-31.28 4.14-49.22-63.48-10.12-63.48-10.12 20.24 47.38 19.78 69.92c0 0 2.3 68.08 6.44 75.9-.04-.04-6.48 66.66-11.54 68.53z",
    fill: "#4d4981"
  }), _react.default.createElement("path", {
    d: "M790 80.72s2.76 17 30.36 9.66L802 230.21s-53.36 1.84-52.9-4.6l11-84.63z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M790.72 79.8a22.42 22.42 0 0 1-13.29 6.31 32.33 32.33 0 0 0-13.06 3.88c-4.73 2.65-10 6.5-11.6 11.19-3.22 9.2-23.46 24.38-32.66 21.16l3.22 27.6s26.22-1.38 30.82-11.5l-7.81 98.49h6.9s3.68-26.68 6.44-32.2 8.28-35.88 8.74-43.24 7.36-49.68 13.34-57l9-21.85z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M790.72 81.18a28.47 28.47 0 0 1-14.21 5.85 32.33 32.33 0 0 0-13.05 3.9c-4.73 2.65-10 6.5-11.6 11.19-3.22 9.2-23.46 24.38-32.66 21.16l3.22 27.6s26.22-1.38 30.82-11.5l-7.82 98.43h6.9s3.68-26.68 6.44-32.2 8.28-35.88 8.74-43.24 7.36-49.68 13.34-57l9.88-21.44z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M790.72 80.26a28.47 28.47 0 0 1-14.21 5.85 32.33 32.33 0 0 0-13.06 3.88c-4.73 2.65-10 6.5-11.6 11.19-3.22 9.2-23.46 24.38-32.66 21.16l3.22 27.6s26.22-1.38 30.82-11.5l-7.81 98.49h6.9s3.68-26.68 6.44-32.2 8.28-35.88 8.74-43.24 7.36-49.68 13.34-57l9.89-21.39z",
    fill: "#fd6f8d"
  }), _react.default.createElement("path", {
    d: "M814.18 62.55c-.6-4.36.6-7.08 1.15-12.19l-26.22 19.78s.63 2.67 1.11 6.58a25 25 0 0 0 4 .32c9.1 0 15.65-7.11 19.96-14.49z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 794.17,
    cy: 50.83,
    r: 24.84,
    fill: "#fec3be"
  }), _react.default.createElement("path", {
    d: "M767.06 26.48a31.44 31.44 0 0 1 2-12.29 3.07 3.07 0 0 0 .52 4 19.68 19.68 0 0 1 6.24-11.06c-1.77.29-2.68 2.48-2.24 4.22a9.6 9.6 0 0 0 3.07 4.32c-.15-2.63 1.59-5.09 3.79-6.53a22.74 22.74 0 0 1 7.4-2.68 4.29 4.29 0 0 0-2.84 4.4 1.23 1.23 0 0 0 .37.85 1.41 1.41 0 0 0 .84.22 64.38 64.38 0 0 0 7.77-.17 81.49 81.49 0 0 1 9.57-.51c10 .42 20.05 7.25 22.29 17a39.09 39.09 0 0 1 .73 7.18l.49 12.31a45 45 0 0 1-.44 10.76 22.8 22.8 0 0 1-11.71 15.48c-3.61-5.23-3.93-11.95-5.18-18.18a9.2 9.2 0 0 0-1.56-4 3.51 3.51 0 0 0-3.85-1.3c-1.35.54-1.93 2.6-.81 3.52-1 1.18-2.87.3-4-.75a21.48 21.48 0 0 1-6.23-11.13c-.45-2.14-.9-4.78-3-5.51a5.58 5.58 0 0 0-2.22-.15c-4.38.3-11.23 2.11-15.47.72-3.89-1.27-5.53-7.03-5.53-10.72z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M767.52 26.02a31.44 31.44 0 0 1 2-12.29 3.07 3.07 0 0 0 .52 4 19.68 19.68 0 0 1 6.24-11.06c-1.77.29-2.68 2.48-2.24 4.22a9.6 9.6 0 0 0 3.07 4.32c-.15-2.63 1.59-5.09 3.79-6.53A22.74 22.74 0 0 1 788.3 6a4.29 4.29 0 0 0-2.84 4.4 1.23 1.23 0 0 0 .37.85 1.41 1.41 0 0 0 .84.22 64.38 64.38 0 0 0 7.77-.17 81.49 81.49 0 0 1 9.57-.51c10 .42 20.05 7.25 22.29 17a39.09 39.09 0 0 1 .73 7.18l.49 12.31a45 45 0 0 1-.44 10.76 22.8 22.8 0 0 1-11.71 15.48c-3.61-5.23-3.93-11.95-5.18-18.18a9.2 9.2 0 0 0-1.56-4 3.51 3.51 0 0 0-3.85-1.3c-1.35.54-1.93 2.6-.81 3.52-1 1.18-2.87.3-4-.75a21.48 21.48 0 0 1-6.23-11.13c-.45-2.14-.9-4.78-3-5.51a5.58 5.58 0 0 0-2.22-.15c-4.38.3-11.23 2.11-15.47.72-3.89-1.28-5.53-7.03-5.53-10.72z",
    fill: "#784f69"
  }), _react.default.createElement("path", {
    d: "M718 122.35s-3.68 17 3.22 27.6l3.91-.32-2.13-27z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M719 122.35s-3.68 17 3.22 27.6l3.91-.32-2.13-27z",
    fill: "#fd6f8d"
  }), _react.default.createElement("path", {
    d: "M817.86 75.93l29.67 25.53s17.48 17.94 10.12 46.92c0 0-3.22 42.32-6.9 44.16 0 0-12.88 25.76-13.8 50.14 0 0-17.25-34.73-25.07-13.57s-26 24.15-26 24.15L796 128.1s25.54-44.39 21.86-52.17z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M818.78 75.93l29.67 25.53s17.48 17.94 10.12 46.92c0 0-3.22 42.32-6.9 44.16 0 0-12.88 25.76-13.8 50.14 0 0-18.17-36.57-26-15.41s-25.07 26-25.07 26l10.12-125.11s25.54-44.45 21.86-52.23z",
    fill: "#fd6f8d"
  }), _react.default.createElement("path", {
    d: "M832.35 183.76s7.36-5.06 19.32 8.74l-29.44 53.36-9.89-14.93s20.93-41.19 20.01-47.17z",
    fill: "#fec3be"
  }), _react.default.createElement("path", {
    d: "M825.22 186.75s16.28 18.28 22.63 15.35l5.88-13.69-22.07-9.48z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M825.22 185.83s16.28 18.28 22.63 15.35l5.88-13.69-22.07-9.48z",
    fill: "#fd6f8d"
  }), _react.default.createElement("path", {
    d: "M813.34 227.44s7.75 15.88 11.88 16.8l-6 6.9-8.74-16.56z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M812.88 227.93s7.75 15.88 11.88 16.8l-6 6.9-8.76-16.59z",
    fill: "#4d4981"
  }), _react.default.createElement("path", {
    d: "M827.52 129.71s.92 33.12-2.76 45.54M753 136.15s5.52-1.84 5.52-6.44",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M82.69 141.69s-26.22 54.24-9 118.43 11.75 141-5.42 160",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("circle", {
    cx: 82.69,
    cy: 141.7,
    r: 7.23,
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M71.79 176.58s27.18 4.9 34.41-5M69.21 192.33s-16.35-18.09-15.45-28.94M67.82 225.47s14.87 3.92 28.44-25M71.79 249.57s-37-23.81-32.49-39.17M77.57 276.82s25.92-23 23.21-45.63M80.39 292.84s-33-9.22-32-23.68M82.69 311.93s20.79-19.26 23.5-31M84.14 344.68s-21.33-24.9-22.24-37.55M84.14 365.29s23.87-26.52 25.67-39.17",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("circle", {
    cx: 53.76,
    cy: 165.2,
    r: 7.23,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 45.63,
    cy: 269.16,
    r: 7.23,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 39.3,
    cy: 210.4,
    r: 7.23,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 106.2,
    cy: 171.53,
    r: 7.23,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 106.2,
    cy: 282.72,
    r: 7.23,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 94.45,
    cy: 200.46,
    r: 7.23,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 108.91,
    cy: 330.64,
    r: 7.23,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 60.09,
    cy: 311.65,
    r: 7.23,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 101.68,
    cy: 231.19,
    r: 7.23,
    fill: primaryColor
  }));
};

UndrawFinance.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawFinance;
exports.default = _default;