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

var UndrawAcceptTerms = function UndrawAcceptTerms(_props) {
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
    viewBox: "0 0 905.39 787.66",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 637.69,
    y1: 801.36,
    x2: 637.69,
    y2: 253.91,
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
    x1: 407.08,
    y1: 313.45,
    x2: 407.08,
    y2: 243.56,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 406.79,
    y1: 366.25,
    x2: 406.79,
    y2: 318.23,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 410.39,
    y1: 417.44,
    x2: 410.39,
    y2: 371.18,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 409.82,
    y1: 497.91,
    x2: 409.82,
    y2: 438.02,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 520.63,
    y1: 525.14,
    x2: 520.63,
    y2: 109.57,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__g",
    x1: 518.01,
    y1: 297.89,
    x2: 518.01,
    y2: 251.22,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__h",
    x1: 518.01,
    y1: 358.71,
    x2: 518.01,
    y2: 312.04,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__i",
    x1: 477.01,
    y1: 286.35,
    x2: 477.01,
    y2: 254.5,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M.41 404.29c2.74 30.35 19.91 57.83 30.41 86.74a205.61 205.61 0 0 1 4 127.67c-2.5 8.61-5.58 17.25-5.59 26.07 0 30.41 34.65 50.59 66.13 64a1205.37 1205.37 0 0 0 248.89 75.2c27.94 5.27 62.83 7.56 80.51-12.29 8.48-9.53 10.54-22 16.77-32.66 15.89-27.26 54.55-37.85 89.25-43.92a1090.22 1090.22 0 0 1 126.48-14.56c42.69-2.4 91.17-4.48 119.46-32.52 18-17.82 23.22-42.41 23.93-65.63 2.35-76.19-34.06-158.64 12.67-224.63 19.6-27.68 51.58-47.89 71-75.64 28.15-40.22 25.72-91.3 6.66-134.16s-52.83-79.3-86.1-115c-11-11.81-22.74-24.09-39.28-29.57-17.2-5.7-36.7-3.08-55.14-.39-83.88 12.25-171 25.59-241.31 67.65-34.94 20.89-64.12 48-95.29 72.89-67.33 53.83-145.34 103.56-234.25 124.81C67.38 285.63-6.09 332.21.41 404.29z",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M274.92 188.25s-58-10.24 0 68.28z",
    fill: "#ffbec7"
  }), _react.default.createElement("path", {
    d: "M820.42 642s-8.4-9.54-31.59-3.79c-11.35-10.82-25.49-26.5-26-37.87-4.72 1.55-9.33 3.3-13.86 5.22-19.64-21.94-44.81-56.76-43.74-90.28C707 460.58 669.44 366 669.44 366s3.1-38.57-2.71-70.45c-3.94-21.6-12-40.12-27.83-41.53a17.31 17.31 0 0 0-7.25.79c-29.25 10-11.08 103.37-11.08 103.37l-25.31 78.12-148.37 79s89.89 118.05 133.53 122.39c0 0 32.15 33.72 55.31 63.32-8.18 11-12.55 18.28-12.55 18.28l22.42 31.92c-9.21 12.37-22.17 36.57 6.38 47.93 39.27 15.62 125.67-55.55 125.67-55.55s75.06-49.5 42.77-101.59z",
    transform: "translate(-147.3 -56.17)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M420.27 244s-59.35-10.42 0 69.44z",
    transform: "translate(-147.3 -56.17)",
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    d: "M406.74 318.23s-21.7 0-21.22 26.82a21.59 21.59 0 0 0 14.78 20.27 18.47 18.47 0 0 0 14-1 24.4 24.4 0 0 0 7.26-38.52 24.87 24.87 0 0 0-14.82-7.57z",
    transform: "translate(-147.3 -56.17)",
    fill: "url(#prefix__c)"
  }), _react.default.createElement("path", {
    d: "M417.24 372.67a14.31 14.31 0 0 0-6.14-1.49s-20.95 5.21-17.45 30.38c0 0 1.75 18.23 20.07 15.62 12.56-1.79 14.05-18.26 13.75-28.44a18.33 18.33 0 0 0-10.23-16.07z",
    transform: "translate(-147.3 -56.17)",
    fill: "url(#prefix__d)"
  }), _react.default.createElement("path", {
    d: "M418.12 439.51a11.64 11.64 0 0 0-5.26-1.49 55.15 55.15 0 0 0-6.46 4.78 51.47 51.47 0 0 0-9 9.77c-7.9 11.44-10.47 28.25 19 45.35v-22.58a46 46 0 0 0 9.12-11.77 17.85 17.85 0 0 0-7.4-24.06z",
    transform: "translate(-147.3 -56.17)",
    fill: "url(#prefix__e)"
  }), _react.default.createElement("path", {
    d: "M473.35 655.52s53.77-89.61 136.55-116.92l-4.27 48.65-68.6 68.28z",
    fill: "#dfe5ee"
  }), _react.default.createElement("path", {
    d: "M473.35 655.52s53.77-89.61 136.55-116.92l-4.27 48.65-68.6 68.28z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M501.51 679.42s-38.41 39.26 0 54.62 122.9-54.62 122.9-54.62 73.4-48.65 41.82-99.86c0 0-35.84-40.97-164.72 99.86z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M618.44 565.9s-111.81 129.73-110.1 110.93c.5-5.46-5.8-16.34-15-29-22.35-30.91-61.82-72.53-61.82-72.53-42.67-4.27-130.58-120.34-130.58-120.34l145.09-77.67 24.75-76.81s-17.76-91.82 10.84-101.65a16.84 16.84 0 0 1 7.09-.78 19.19 19.19 0 0 1 3.11.53c13.39 3.37 20.45 20.34 24 40 0 .11.05.23.07.34 5.68 31.35 2.65 69.27 2.65 69.27s36.7 93 35 146.8c-1.14 36 28.31 73.52 47.91 94.39 9.72 10.28 16.99 16.52 16.99 16.52z",
    fill: "#ffbec7"
  }), _react.default.createElement("path", {
    d: "M463.96 496.77s1.71-81.08-12.8-101.56-131.46 64.87-131.46 64.87 121.22 14.5 144.26 36.69zM501.51 525.83s52.7-31.16 52-81.3M473.35 555.66s-14.51 20.48-41.82 19.63M618.44 565.9s-111.81 129.73-110.1 110.93c.5-5.46-5.8-16.34-15-29 61.93-21.24 95.55-74.23 108.13-98.47 9.7 10.3 16.97 16.54 16.97 16.54z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M648.8 589.55a3.66 3.66 0 0 1-.08.74c-1.72 8.64-3 17.35-4.41 26.06a50.27 50.27 0 0 1-2 8.15 64.7 64.7 0 0 1-10.83 19.49c-34 43.08-120.58 65.29-120.58 65.29l-.32-.47-37.23-53.3C571.5 636.74 609.9 538.59 609.9 538.59c.74 16.39 30.09 41.87 37.55 48.09a3.77 3.77 0 0 1 1.34 2.87z",
    fill: "#dfe5ee"
  }), _react.default.createElement("path", {
    d: "M515.86 238.55c-24.78-3.17-26.79-24.37-24.85-39.71.26-.09.54-.18.81-.25 13.39 3.37 20.45 20.34 24.04 39.96z",
    fill: "#eff4f8",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M648.8 589.55a3.66 3.66 0 0 1-.08.74c-1.72 8.64-3 17.35-4.41 26.06a50.27 50.27 0 0 1-2 8.15l-2.11 5.84-5.12 8.49-3.6 5.12c-34 43.08-120.58 65.29-120.58 65.29l-.32-.47c2.71-1.12 61.06-25.23 84.39-46.9 22.14-20.55 49.4-67.47 53.3-74.28a3.77 3.77 0 0 1 .53 1.96z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M607.67 109.57H433.59a17.22 17.22 0 0 0-17.25 17.19v381.2a17.22 17.22 0 0 0 17.25 17.19h174.08a17.22 17.22 0 0 0 17.25-17.19V126.75a17.22 17.22 0 0 0-17.25-17.18z",
    transform: "translate(-147.3 -56.17)",
    fill: "url(#prefix__f)"
  }), _react.default.createElement("rect", {
    x: 270.63,
    y: 56.58,
    width: 205.39,
    height: 410.79,
    rx: 11,
    ry: 11,
    fill: "#535461"
  }), _react.default.createElement("path", {
    fill: "#f1f1f4",
    d: "M285.76 94.8H460.9v334.36H285.76z"
  }), _react.default.createElement("circle", {
    cx: 352.63,
    cy: 75.69,
    r: 1.59,
    fill: "#fff"
  }), _react.default.createElement("rect", {
    x: 360.59,
    y: 74.1,
    width: 35.03,
    height: 3.18,
    rx: 1,
    ry: 1,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 372.53,
    cy: 445.08,
    r: 11.15,
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M261.7 261.22s-21.23 0-20.75 26.37a21.22 21.22 0 0 0 14.45 19.93 18 18 0 0 0 13.67-1 24 24 0 0 0-7.37-45.3z",
    fill: "#ffbec7"
  }), _react.default.createElement("path", {
    d: "M261.7 274.83s-19.63 13.66-2.56 25.6c-.01.05-1.72-23.85 2.56-25.6z",
    fill: "#eff4f8",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M265.96 313.28s-20.48 5.12-17.07 29.87c0 0 1.71 17.92 19.63 15.36 12.29-1.76 13.74-18 13.45-28a18 18 0 0 0-10-15.8 13.93 13.93 0 0 0-6.01-1.43z",
    fill: "#ffbec7"
  }), _react.default.createElement("path", {
    d: "M265.1 324.37s-19.63 7.68 0 29c0 .02-9.4-20.46 0-29z",
    fill: "#eff4f8",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M271.08 415.7v22.19c-28.8-16.8-26.29-33.34-18.56-44.58a50.5 50.5 0 0 1 8.83-9.6 53.94 53.94 0 0 1 6.32-4.7 11.34 11.34 0 0 1 5.15 1.47 17.6 17.6 0 0 1 7.18 23.66 45.23 45.23 0 0 1-8.92 11.56z",
    fill: "#ffbec7"
  }), _react.default.createElement("path", {
    d: "M256.57 404.6s-2.22-5.34-4.05-11.3a50.5 50.5 0 0 1 8.83-9.6c5.63 9.26-4.78 20.9-4.78 20.9z",
    fill: "#eff4f8",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M515.6 308.59s-22.19 24.75-29 27.31",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M577.51 266.39h-84v.91a23.33 23.33 0 1 0 0 14.52v.91h84l10.5-8.12zm-106.17 27a18.82 18.82 0 1 1 18.82-18.82 18.81 18.81 0 0 1-18.82 18.8z",
    transform: "translate(-147.3 -56.17)",
    fill: "url(#prefix__g)"
  }), _react.default.createElement("path", {
    d: "M324.8 195.43a23 23 0 1 0 23 23 23 23 0 0 0-23-23zm0 4.44a18.51 18.51 0 1 1-18.51 18.51 18.5 18.5 0 0 1 18.51-18.55",
    fill: "#00dd90"
  }), _react.default.createElement("path", {
    fill: "#00dd90",
    d: "M429.23 226.42H346.6v-16.07h82.63l10.32 8.08-10.32 7.99z"
  }), _react.default.createElement("path", {
    d: "M577.51 327.21h-84v.91a23.33 23.33 0 1 0 0 14.52v.91h84l10.5-8.12zm-106.17 27a18.82 18.82 0 1 1 18.82-18.82 18.81 18.81 0 0 1-18.82 18.8z",
    transform: "translate(-147.3 -56.17)",
    fill: "url(#prefix__h)"
  }), _react.default.createElement("path", {
    d: "M324.8 256.25a23 23 0 1 0 23 23 23 23 0 0 0-23-23zm0 4.44a18.51 18.51 0 1 1-18.51 18.51 18.5 18.5 0 0 1 18.51-18.51",
    fill: "#ff5288"
  }), _react.default.createElement("path", {
    fill: "#ff5288",
    d: "M429.23 287.24H346.6v-16.07h82.63l10.32 8.08-10.32 7.99z"
  }), _react.default.createElement("path", {
    d: "M497.5 258.34l-3.3-3.34a1.75 1.75 0 0 0-2.48 0l-20.66 20.5-8.74-8.81a1.75 1.75 0 0 0-2.48 0l-3.31 3.31a1.75 1.75 0 0 0 0 2.48l13.27 13.38a1.75 1.75 0 0 0 2.48 0l25.22-25a1.75 1.75 0 0 0 0-2.48z",
    transform: "translate(-147.3 -56.17)",
    fill: "url(#prefix__i)"
  }), _react.default.createElement("path", {
    d: "M349.22 201.75l-3.14-3.16a1.67 1.67 0 0 0-2.36 0l-19.68 19.52-8.34-8.41a1.67 1.67 0 0 0-2.36 0l-3.14 3.13a1.67 1.67 0 0 0 0 2.36l12.64 12.74a1.67 1.67 0 0 0 2.36 0l24-23.83a1.67 1.67 0 0 0 0-2.36z",
    fill: "#00dd90"
  }));
};

UndrawAcceptTerms.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawAcceptTerms;
exports.default = _default;