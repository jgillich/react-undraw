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

var UndrawBeerCelebration = function UndrawBeerCelebration(_props) {
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
    viewBox: "0 0 815.19 739",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 951.7,
    y1: 575.37,
    x2: 951.7,
    y2: 414.37,
    gradientTransform: "rotate(-6.25 792.887 594.053)",
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
    x1: 785.7,
    y1: 711.37,
    x2: 785.7,
    y2: 333.37,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 768.63,
    y1: 421.56,
    x2: 768.63,
    y2: 260.56,
    gradientTransform: "matrix(-.97 -.24 -.24 .97 1136.54 171.94)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 602.63,
    y1: 557.56,
    x2: 602.63,
    y2: 179.56,
    gradientTransform: "matrix(-.97 -.24 -.24 .97 1136.54 171.94)",
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("circle", {
    cx: 387,
    cy: 389,
    r: 269.5,
    fill: "none",
    stroke: "#3ad29f",
    strokeMiterlimit: 10,
    strokeWidth: 5,
    strokeDasharray: "12",
    opacity: 0.4
  }), _react.default.createElement("circle", {
    cx: 387,
    cy: 389,
    r: 205.5,
    fill: "none",
    stroke: "#3ad29f",
    strokeMiterlimit: 10,
    strokeWidth: 5,
    strokeDasharray: "12",
    opacity: 0.4
  }), _react.default.createElement("path", {
    d: "M742 424.5a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3z",
    fill: "#f5f5f5"
  }), _react.default.createElement("path", {
    d: "M886.18 403.06l2.19 20 36.21-4a34 34 0 0 1 37.52 30.11l5.74 52.41a34 34 0 0 1-30.11 37.52l-36.21 4 2.19 20 56.21-6.16A34 34 0 0 0 990 519.43L979.91 427a34 34 0 0 0-37.52-30.11z",
    transform: "translate(-208 -81)",
    fill: "url(#prefix__a)",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M683.86 330l2 17.89 28.81-3.16a34 34 0 0 1 37.52 30.11l4.35 39.73a34 34 0 0 1-30.11 37.52l-28.81 3.16 2 17.89 46.62-5.14a34 34 0 0 0 30.11-37.52L768.08 355a34 34 0 0 0-37.52-30.11z",
    fill: "#dbe8fc"
  }), _react.default.createElement("path", {
    d: "M884.8 702l-172.57 18.9a45.5 45.5 0 0 1-50.18-40.28l-36.2-330.52 263-28.81 36.2 330.52A45.5 45.5 0 0 1 884.8 702z",
    transform: "translate(-208 -81)",
    fill: "url(#prefix__b)",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M425.087 277.363L675.59 249.93l34.238 312.63a45.5 45.5 0 0 1-40.276 50.184L509.51 630.27a45.5 45.5 0 0 1-50.183-40.276l-34.239-312.63z",
    fill: "#dbe8fc"
  }), _react.default.createElement("path", {
    d: "M444.89 292.795l214.218-23.46 30.32 276.844a45.5 45.5 0 0 1-40.276 50.183l-123.76 13.554a45.5 45.5 0 0 1-50.183-40.276l-30.32-276.845z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M489.69 316c-4.48.49-3.72 7.45.76 7s3.72-7.44-.76-7z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M518.39 394.39c-4.48.49-3.72 7.45.76 7s3.72-7.49-.76-7zM508.25 448.82c-4.48.49-3.72 7.45.76 7s3.73-7.49-.76-7zM535 518.32c-4.48.49-3.72 7.45.76 7s3.71-7.49-.76-7zM599.25 517.32c-4.48.49-3.72 7.45.76 7s3.73-7.5-.76-7z",
    fill: "#fafafa"
  }), _react.default.createElement("path", {
    d: "M592.28 315.88c-4.48.49-3.72 7.45.76 7s3.72-7.49-.76-7zM638.45 305.79c-4.48.49-3.72 7.45.76 7s3.73-7.49-.76-7z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M552.6 339.34c-5.76.63-4.79 9.58 1 8.95s4.76-9.58-1-8.95zM610 431.64c-5.76.63-4.79 9.58 1 8.95s4.75-9.59-1-8.95zM523 574.46c-6.4.7-5.32 10.64 1.09 9.94s5.34-10.65-1.09-9.94zM491.25 339.52c-6.4.7-5.32 10.64 1.09 9.94s5.32-10.64-1.09-9.94z",
    fill: "#fafafa"
  }), _react.default.createElement("path", {
    fill: "#fafafa",
    d: "M443.96 284.349l214.717-23.515 6.859 62.625-214.717 23.516z"
  }), _react.default.createElement("path", {
    d: "M554.79 561.42l-30.32-276.85-79.52 8.71 30.32 276.84a45.5 45.5 0 0 0 50.18 40.28l79.55-8.71a45.5 45.5 0 0 1-50.21-40.27z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M609.46 555.43l-30.32-276.84 79.52-8.71L689 546.72a45.5 45.5 0 0 1-40.28 50.18l-79.52 8.71a45.5 45.5 0 0 0 40.26-50.18z",
    fill: "#fff",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M693.48 248c-2.16-19.76-64-29.2-138.12-21.09s-132.44 30.72-130.28 50.49c1.32 12.05 24.84 20.26 59.81 23a22.49 22.49 0 0 0 37 24.37c5.29 18.24 17.08 30.7 29.29 29.36 13.36-1.46 22.65-18.95 22.38-40.48 5.52 6.13 12.37 9.51 19.42 8.74 8.59-.94 15.57-7.84 19.45-17.79 4.66 3.66 10 5.52 15.36 4.92 6.93-.76 12.81-5.39 16.86-12.37 2.83 15.76 13.74 27.12 25.36 25.85 12.35-1.35 20.83-16.47 18.94-33.76-1-9.18-4.73-17.13-9.86-22.37 9.81-6.26 15.07-12.73 14.39-18.87z",
    opacity: 0.03
  }), _react.default.createElement("path", {
    d: "M692.5 239c-2.16-19.76-64-29.2-138.12-21.09S421.94 248.63 424.1 268.4c1.32 12.05 24.84 20.26 59.81 23a22.49 22.49 0 0 0 37 24.37c5.29 18.24 17.08 30.7 29.29 29.36 13.36-1.46 22.65-18.95 22.38-40.48 5.52 6.13 12.37 9.51 19.42 8.74 8.59-.94 15.57-7.84 19.45-17.79 4.66 3.66 10 5.52 15.36 4.92 6.93-.76 12.81-5.39 16.86-12.37 2.83 15.76 13.74 27.13 25.33 25.85 12.35-1.35 20.83-16.47 18.94-33.76-1-9.18-4.73-17.13-9.86-22.37 9.84-6.21 15.1-12.67 14.42-18.87z",
    fill: "#fafafa"
  }), _react.default.createElement("path", {
    d: "M371.45 247.87l-4.92 19.52-35.32-8.9a34 34 0 0 0-41.3 24.67L277 334.28a34 34 0 0 0 24.67 41.3l35.32 8.9-4.88 19.52-54.83-13.82a34 34 0 0 1-24.67-41.3l22.71-90.15a34 34 0 0 1 41.3-24.73z",
    transform: "translate(-208 -81)",
    fill: "url(#prefix__c)",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M156.74 173.94l-4.4 17.45-28.11-7.08A34 34 0 0 0 82.94 209l-9.77 38.76A34 34 0 0 0 97.85 289l28.15 7.12-4.4 17.45L76 302.1a34 34 0 0 1-24.67-41.3l18.56-73.67a34 34 0 0 1 41.3-24.67z",
    fill: "#dbe8fc"
  }), _react.default.createElement("path", {
    d: "M331.78 544.15l168.34 42.42a45.5 45.5 0 0 0 55.24-33l81.24-322.42L380 166.49l-81.23 322.42a45.5 45.5 0 0 0 33.01 55.24z",
    transform: "translate(-208 -81)",
    fill: "url(#prefix__d)",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M288.201 495.306l-156.122-39.33a45.5 45.5 0 0 1-33.006-55.237l76.83-304.972 244.365 61.562-76.83 304.971a45.5 45.5 0 0 1-55.237 33.006z",
    fill: "#dbe8fc"
  }), _react.default.createElement("path", {
    d: "M275.258 472.98L154.53 442.566a45.5 45.5 0 0 1-33.006-55.237l68.035-270.062 208.97 52.645-68.035 270.062a45.5 45.5 0 0 1-55.236 33.006z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M351 186.79c4.37 1.1 2.66 7.89-1.71 6.79s-2.68-7.89 1.71-6.79z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M311.8 260.45c4.37 1.1 2.66 7.89-1.71 6.79s-2.66-7.89 1.71-6.79zM314.37 315.75c4.37 1.1 2.66 7.89-1.71 6.79s-2.66-7.89 1.71-6.79zM278.35 380.93c4.37 1.1 2.66 7.89-1.71 6.79s-2.64-7.9 1.71-6.79zM214.83 371.11c4.37 1.1 2.66 7.89-1.71 6.79s-2.67-7.9 1.71-6.79z",
    fill: "#fafafa"
  }), _react.default.createElement("path", {
    d: "M249.39 172.53c4.37 1.1 2.66 7.89-1.71 6.79s-2.68-7.89 1.71-6.79zM205 156.2c4.37 1.1 2.66 7.89-1.71 6.79s-2.63-7.89 1.71-6.79z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M285.47 201.22c5.62 1.41 3.43 10.14-2.2 8.73s-3.42-10.15 2.2-8.73zM216 284.77c5.62 1.41 3.43 10.14-2.2 8.73s-3.47-10.15 2.2-8.73zM282.49 438.17c6.24 1.57 3.81 11.27-2.44 9.7s-3.81-11.27 2.44-9.7zM346.21 209.82c6.24 1.57 3.81 11.27-2.44 9.7s-3.77-11.27 2.44-9.7z",
    fill: "#fafafa"
  }), _react.default.createElement("path", {
    fill: "#fafafa",
    d: "M385.223 222.757L175.767 169.99l15.39-61.091 209.456 52.767z"
  }), _react.default.createElement("path", {
    d: "M252.81 420.9l68-270.06 77.58 19.55-68 270.06a45.5 45.5 0 0 1-55.24 33l-77.58-19.55a45.5 45.5 0 0 0 55.24-33z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M199.48 407.46l68-270.06-77.58-19.55-68 270.06a45.5 45.5 0 0 0 33 55.24l77.58 19.55a45.5 45.5 0 0 1-33-55.24z",
    fill: "#fff",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M158.47 91.36c4.86-19.28 67.41-20.14 139.7-1.92s127 48.61 122.11 67.89c-3 11.76-27.39 16.66-62.4 14.57a22.49 22.49 0 0 1-40 19.06c-7.75 17.34-21.13 28.06-33 25.06-13-3.28-19.84-21.88-16.61-43.17-6.31 5.32-13.56 7.72-20.43 6-8.38-2.11-14.34-9.9-16.82-20.29-5.12 3-10.62 4.1-15.89 2.77-6.76-1.7-11.95-7.09-15-14.57-5 15.22-17.33 25-28.67 22.13-12-3-18.37-19.17-14.12-36 2.26-9 7-16.32 12.84-20.8-8.91-7.56-13.23-14.69-11.71-20.73z",
    opacity: 0.03
  }), _react.default.createElement("path", {
    d: "M160.67 82.63c4.86-19.28 67.41-20.14 139.7-1.92s127 48.61 122.11 67.89c-3 11.76-27.39 16.66-62.4 14.57a22.49 22.49 0 0 1-40 19.06c-7.75 17.34-21.13 28.06-33 25.06-13-3.28-19.84-21.88-16.61-43.17-6.31 5.32-13.56 7.72-20.43 6-8.38-2.11-14.34-9.9-16.82-20.29-5.12 3-10.62 4.1-15.89 2.77-6.76-1.7-11.95-7.09-15-14.57-5 15.22-17.33 25-28.67 22.13-12-3-18.37-19.17-14.12-36 2.26-9 7-16.32 12.84-20.8-8.91-7.56-13.24-14.69-11.71-20.73z",
    fill: "#fafafa"
  }), _react.default.createElement("path", {
    d: "M752.14 656.18a10.89 10.89 0 0 0-14.21 1.32 11.13 11.13 0 0 0 .44 15.51l13.63 13.5a2.27 2.27 0 0 0 3.21 0l13.5-13.58a11.13 11.13 0 0 0 .35-15.51 10.89 10.89 0 0 0-14.21-1.24 2.29 2.29 0 0 1-2.71 0zM34.14 615.18a10.89 10.89 0 0 0-14.21 1.32 11.13 11.13 0 0 0 .44 15.51L34 645.51a2.27 2.27 0 0 0 3.21 0l13.5-13.58a11.13 11.13 0 0 0 .35-15.51 10.89 10.89 0 0 0-14.21-1.24 2.29 2.29 0 0 1-2.71 0zM70.14 70.18a10.89 10.89 0 0 0-14.21 1.32 11.13 11.13 0 0 0 .44 15.51L70 100.51a2.27 2.27 0 0 0 3.21 0l13.5-13.58a11.13 11.13 0 0 0 .35-15.51 10.89 10.89 0 0 0-14.21-1.24 2.29 2.29 0 0 1-2.71 0zM626.14 26.18a10.89 10.89 0 0 0-14.21 1.32 11.13 11.13 0 0 0 .44 15.51L626 56.51a2.27 2.27 0 0 0 3.21 0l13.5-13.58a11.13 11.13 0 0 0 .35-15.51 10.89 10.89 0 0 0-14.21-1.24 2.29 2.29 0 0 1-2.71 0z",
    fill: primaryColor,
    opacity: 0.5
  }), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#3ad29f"
  }, _react.default.createElement("path", {
    d: "M443 0h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M453 7v3h-17V7z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#3ad29f"
  }, _react.default.createElement("path", {
    d: "M7 218h3v17H7z"
  }), _react.default.createElement("path", {
    d: "M17 225v3H0v-3z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#3ad29f"
  }, _react.default.createElement("path", {
    d: "M568 722h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M578 729v3h-17v-3z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#3ad29f"
  }, _react.default.createElement("path", {
    d: "M17 497h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M27 504v3H10v-3z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#3ad29f"
  }, _react.default.createElement("path", {
    d: "M203 522h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M213 529v3h-17v-3z"
  })), _react.default.createElement("path", {
    d: "M147.09 670.89a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.36-.2z",
    fill: "#f55f44",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M395.09 636.89a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.36-.2z",
    fill: "#3ad29f",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M491.09 168.89a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.36-.2zM748.09 174.89a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.36-.2zM378.09 449.89a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.36-.2zM814.09 23.89a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.36-.2z",
    fill: "#f55f44",
    opacity: 0.5
  }));
};

UndrawBeerCelebration.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawBeerCelebration;
exports.default = _default;