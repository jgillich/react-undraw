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

var UndrawDestination = function UndrawDestination(_props) {
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
    viewBox: "0 0 835.19 791.24",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 380.08,
    y1: 743.36,
    x2: 664.61,
    y2: 71.48,
    gradientTransform: "rotate(-.14 -841.696 5577.13)",
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
  })), _react.default.createElement("clipPath", {
    id: "prefix__b",
    transform: "translate(-182.4 -29.66)"
  }, _react.default.createElement("path", {
    d: "M596.93 103.62A28.4 28.4 0 0 1 569 127.83l-120.93.29a28.38 28.38 0 0 1-28-24.07l-64.07.15a13.3 13.3 0 0 0-13.27 13.33l1.4 573.67a13.29 13.29 0 0 0 13.33 13.26l306-.74a13.3 13.3 0 0 0 13.27-13.33l-1.4-573.67A13.29 13.29 0 0 0 662 103.46z",
    fill: primaryColor,
    opacity: 0.3
  })), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 561.94,
    y1: 387.88,
    x2: 561.94,
    y2: 214.05,
    gradientTransform: "rotate(7.89 589.222 306.706)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 792.73,
    y1: 820.9,
    x2: 792.73,
    y2: 462.68,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M675.17 79.1l-332.5.81A13.67 13.67 0 0 0 329 93.6l1.52 621.89a13.67 13.67 0 0 0 13.7 13.63l332.49-.81a13.67 13.67 0 0 0 13.64-13.7l-1.48-621.88a13.67 13.67 0 0 0-13.7-13.63z",
    transform: "translate(-182.4 -29.66)",
    fill: "url(#prefix__a)",
    opacity: 0.5
  }), _react.default.createElement("rect", {
    x: 334.65,
    y: 87.99,
    width: 350.11,
    height: 631.95,
    rx: 13.64,
    transform: "rotate(-.14 -11722.727 75035.039)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M414.53 73.96a28.4 28.4 0 0 1-27.93 24.21l-120.93.29a28.38 28.38 0 0 1-28-24.07l-64.07.15a13.3 13.3 0 0 0-13.27 13.33l1.4 573.67a13.29 13.29 0 0 0 13.33 13.26l306-.74a13.3 13.3 0 0 0 13.27-13.33l-1.4-573.67A13.29 13.29 0 0 0 479.6 73.8z",
    fill: primaryColor,
    opacity: 0.3
  }), _react.default.createElement("g", {
    clipPath: "url(#prefix__b)"
  }, _react.default.createElement("path", {
    fill: "none",
    stroke: "#fff",
    strokeMiterlimit: 10,
    strokeWidth: 4,
    d: "M69.95 113l476.14 389.95 6.26-319.14-537.74-19.05 84.92 81.43 538.57 41.39L77.13 428.95l508 164.9-1.9 62.48-524.2-31.16 15.88 157.57 230.18-20.54L428.54.32"
  })), _react.default.createElement("rect", {
    x: 466.82,
    y: 111.42,
    width: 78.02,
    height: 4.88,
    rx: 2,
    transform: "rotate(-.86 -1560.373 12251.379)",
    fill: "#dbdbdb"
  }), _react.default.createElement("circle", {
    cx: 379,
    cy: 82.88,
    r: 2.93,
    fill: "#dbdbdb"
  }), _react.default.createElement("path", {
    d: "M627 280.21c-4.64 33.48-73.52 103.5-73.52 103.5S501.4 296.92 506 263.44a61.05 61.05 0 1 1 121 16.77z",
    transform: "translate(-182.4 -29.66)",
    fill: "url(#prefix__c)"
  }), _react.default.createElement("path", {
    d: "M440.6 251.6c-4.35 31.41-69 97.09-69 97.09s-48.79-81.35-44.43-112.81A57.27 57.27 0 1 1 440.6 251.6z",
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 566.92,
    cy: 268.85,
    rx: 28.71,
    ry: 28.63,
    transform: "rotate(-82.11 458.688 358.739)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M810.81 477c18.19 30 22.79 53.3 22.79 53.3 5.4-96.26-23.89-61.95-26.73-60.32l-.06-.12-9.8 5.66a22.51 22.51 0 0 0-15.75-6.63 21.86 21.86 0 0 0-11.79 3.49c-7 .16-12.54 3.72-12.54 8.09a5.27 5.27 0 0 0 .44 2.07 25.37 25.37 0 0 0 15.11 42.11l2.58 18.35-4.06 3.2a22.56 22.56 0 0 0-8.71 16.36c-.38 6.79 2.42 14.58 15.13 18.55 0 0-.22 2.35-.64 6.06l-21.61 43.21s-8.64 19.81.63 20.39c13.32-2.31 11-7.53 12.74-12.16l1-3.46h5.1c-4.15 22.63-17.65 100.41-16.3 146.23v13.24l-.86 6.56-24.88 7.47a6.26 6.26 0 0 0 2 12.25l35.16-1.18a6.24 6.24 0 0 0 6-6.25v-17.79h6.36v-14.3l6.36-76.29.83-2 .76 9.9 28.61 63.58 6.35 11.12 2.78-1.49-.81 10.49-11.6 10.06a6.25 6.25 0 0 0-1.6 7.3 6.26 6.26 0 0 0 8.47 3l31.57-15.53a6.25 6.25 0 0 0 2.94-8.19l-2.78-6.12a6.27 6.27 0 0 0-4.36-3.52l-6-6 2.07-1.11-4.71-11.1-28.61-66.75-1.17-37.57c5.72-3.63 13.89-11.47 12-26h1.83s-4.05-23.55-6.15-49.27c-.07-.83-.14-1.66-.2-2.49v-3.87s-.22-1.21-.6-3.17c-2.24-25.39-5.71-45.55-24.69-47.83l-.14.11v-7.82c7.34-4.78 12.3-13.8 12.3-24.15a30.59 30.59 0 0 0-3.65-14.67l8.86-5.11z",
    transform: "translate(-182.4 -29.66)",
    fill: "url(#prefix__d)",
    opacity: 0.5
  }), _react.default.createElement("ellipse", {
    cx: 599.53,
    cy: 471.41,
    rx: 23.6,
    ry: 26.97,
    fill: "#795548"
  }), _react.default.createElement("path", {
    fill: "#fda57d",
    d: "M594.24 758.28v13.87h-18.5l1.54-11.81 16.96-2.06zM645.1 747.49l-1.5 18.5h1a29.69 29.69 0 0 0 19.74-7.51l5.43-4.82-13.87-13.87z"
  }), _react.default.createElement("path", {
    fill: "#4d8af0",
    d: "M606.57 661.19l1.54 20.04 27.74 61.64 21.57-10.79-27.74-64.72-1.54-49.32h-24.66l3.09 43.15z"
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M606.57 661.19l1.54 20.04 27.74 61.64 21.57-10.79-27.74-64.72-1.54-49.32h-24.66l3.09 43.15z"
  }), _react.default.createElement("path", {
    d: "M600.4 548.68l-26.2 52.4s-8.38 19.21.61 19.77c12.92-2.25 10.68-7.3 12.36-11.8l16.32-55.71z",
    fill: "#fda57d"
  }), _react.default.createElement("circle", {
    cx: 594.67,
    cy: 474.16,
    r: 24.66,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    fill: "#fda57d",
    d: "M611.19 510.16l-17.28 9.01-4.3-30.59h21.58v21.58z"
  }), _react.default.createElement("path", {
    d: "M594.24 599.54s-18.49 95.55-16.95 147.95h23.11l6.17-74 16.95-40.07s23.08-7.68 15.41-33.88z",
    fill: "#4d8af0"
  }), _react.default.createElement("path", {
    fill: "#4d8af0",
    d: "M577.28 745.34h23.12v16.02h-23.12z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    opacity: 0.05,
    d: "M577.28 745.34h23.12v16.02h-23.12z"
  }), _react.default.createElement("path", {
    fill: "#4d8af0",
    d: "M635.22 741.44l6.42 12.31L662.05 743l-5.45-12.66-21.38 11.1zM577.97 766.24l-25.64 7.7a6.07 6.07 0 0 0-4.33 5.81 6.07 6.07 0 0 0 6.27 6.06l34.1-1.13a6.08 6.08 0 0 0 5.87-6.07v-6.55a6.07 6.07 0 0 0-6.07-6.07h-8.45a6.12 6.12 0 0 0-1.75.25z"
  }), _react.default.createElement("path", {
    d: "M611.33 502.34l-21.73 17.11a21.84 21.84 0 0 0-8.49 15.89c-.37 6.59 2.34 14.14 14.67 18 0 0-4.62 49.31-12.33 52.4h58.57s-3.93-22.84-6-47.78c-2.33-28.85-4.04-53.17-24.69-55.62z",
    fill: "#47e6b1"
  }), _react.default.createElement("path", {
    d: "M611.19 533.27l13.87 24.66-1.54 55.48s-7.7 12.33-1.54 13.87 15.41-3.08 13.87-12.33v-63.19s-4.62-26.2-9.25-32.36z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M652.85 754.54L632.6 772.1a6.08 6.08 0 0 0-1.55 7.08 6.08 6.08 0 0 0 8.21 2.95l30.62-15.07a6.07 6.07 0 0 0 2.85-7.94l-2.7-6a6.07 6.07 0 0 0-8-3l-7.7 3.48a5.75 5.75 0 0 0-1.48.94z",
    fill: "#4d8af0"
  }), _react.default.createElement("path", {
    fill: "#795548",
    d: "M623.6 455.34l-5.58 2.77-3.94-6.82 5.52-2.95 4 7z"
  }), _react.default.createElement("path", {
    d: "M619.6 448.34s37-39 29.31 55.66c0 0-8.89-25.63-25.31-48.66z",
    fill: "#795548"
  }), _react.default.createElement("ellipse", {
    cx: 601.78,
    cy: 471.41,
    rx: 21.35,
    ry: 23.6,
    fill: "#795548"
  }), _react.default.createElement("ellipse", {
    cx: 588.57,
    cy: 455.68,
    rx: 12.64,
    ry: 7.87,
    fill: "#795548"
  }), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M99.19 130.76h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M109.19 137.76v3h-17v-3z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M123.19 237.34h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M133.19 244.34v3h-17v-3z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M583.19 98.76h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M593.19 105.76v3h-17v-3z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M825.19 161.34h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M835.19 168.34v3h-17v-3z"
  })), _react.default.createElement("path", {
    d: "M12.29 229.65a3.69 3.69 0 0 1-2.05-4.45 1.1 1.1 0 0 0 .08-.4 1.84 1.84 0 0 0-3.31-1.22 2.08 2.08 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.41 1.41 0 0 0-.41-.07 1.84 1.84 0 0 0-1.22 3.31 2.53 2.53 0 0 0 .36.2 3.67 3.67 0 0 1 2.05 4.44 1.86 1.86 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.82 1.82 0 0 0 .2-.36 3.68 3.68 0 0 1 4.45-2.05 1.77 1.77 0 0 0 .4.08 1.84 1.84 0 0 0 1.22-3.31 1.58 1.58 0 0 0-.36-.16zM768.29 420.65a3.69 3.69 0 0 1-2.05-4.45 1.1 1.1 0 0 0 .08-.4 1.84 1.84 0 0 0-3.31-1.22 2.08 2.08 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.41 1.41 0 0 0-.41-.07 1.84 1.84 0 0 0-1.22 3.31 2.53 2.53 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.86 1.86 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.82 1.82 0 0 0 .2-.36 3.68 3.68 0 0 1 4.45-2.05 1.77 1.77 0 0 0 .4.08 1.84 1.84 0 0 0 1.22-3.31 1.58 1.58 0 0 0-.31-.16zM715.29 115.65a3.69 3.69 0 0 1-2.05-4.45 1.1 1.1 0 0 0 .08-.4 1.84 1.84 0 0 0-3.31-1.22 2.08 2.08 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.41 1.41 0 0 0-.41-.07 1.84 1.84 0 0 0-1.22 3.31 2.53 2.53 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.86 1.86 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.82 1.82 0 0 0 .2-.36 3.68 3.68 0 0 1 4.45-2 1.77 1.77 0 0 0 .4.08 1.84 1.84 0 0 0 1.22-3.31 1.58 1.58 0 0 0-.31-.21zM739.29 289.65a3.69 3.69 0 0 1-2.05-4.45 1.1 1.1 0 0 0 .08-.4 1.84 1.84 0 0 0-3.31-1.22 2.08 2.08 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.41 1.41 0 0 0-.41-.07 1.84 1.84 0 0 0-1.22 3.31 2.53 2.53 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.86 1.86 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.82 1.82 0 0 0 .2-.36 3.68 3.68 0 0 1 4.45-2.05 1.77 1.77 0 0 0 .4.08 1.84 1.84 0 0 0 1.22-3.31 1.58 1.58 0 0 0-.31-.16z",
    fill: "#4d8af0",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 72.19,
    cy: 420.34,
    r: 6,
    fill: "#f55f44",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 584.19,
    cy: 222.34,
    r: 6,
    fill: "#4d8af0",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 633.19,
    cy: 374.34,
    r: 6,
    fill: "#47e6b1",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 13.19,
    cy: 58.34,
    r: 6,
    fill: "#f55f44",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#b0bec5",
    d: "M126.42 487.71h71.6v7.16h-71.6zM152.42 574.71h71.6v7.16h-71.6zM209.7 616.77h36.69v8.05H209.7zM228.5 660.63h36.69V666H228.5z"
  }), _react.default.createElement("path", {
    d: "M208.9 474.78s-46.3 5.38-32.3 33.38a317.85 317.85 0 0 1 21.27 56.8l24.49-5.12s-9.69-45.76-18.3-51.14l23.15-4.31z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M204.06 508.7l23.15-4.31-18.31-29.61s-.54.06-1.48.21l18.18 29.4-23.15 4.31c8.62 5.38 18.31 51.14 18.31 51.14l-23 4.8.09.32 24.49-5.12s-9.67-45.76-18.28-51.14z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M212.6 554.66s-14.3 10.26-36 9.44c0 0-11.54 5.25 4.79 9.43s42.68 1.23 44.75-2-.86-14.14-5.68-18.61-7.86 1.74-7.86 1.74z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M250.36 540.46s-1.08 21 6.46 36.07l5.38 72.69h17.23s0-35.54 8.08-54.38S283.2 555 283.2 555l-1.08-21.54z",
    fill: "#fda57d"
  }), _react.default.createElement("circle", {
    cx: 261.12,
    cy: 315.42,
    r: 22.07,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    fill: "#fda57d",
    d: "M246.05 326.72h26.92v24.23h-26.92z"
  }), _react.default.createElement("path", {
    d: "M272.97 643.83s-16.15 7-37.15 1.62c0 0-12.38 2.69 2.69 10.23s41.46 10.23 44.15 7.53 2.16-14-1.61-19.38-8.08 0-8.08 0z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M204.33 394.83l-31.73 81.83s-24.23 6.46-11.84 18.31c0 0-2.16-11.31 15.07-8.08 0 0 4.85 8.08 4.85 10.77s5.53-9 3.3-14.72a131.36 131.36 0 0 1 26.81-45.6s13.46-23.69 12.92-39.84zM310.93 365.75s17.23 8.08 25.84 5.39c6.1-1.91 12.74-14.08 16.1-21a10.47 10.47 0 0 1 8.16-5.85c6.4-.77 15.37-.69 12.89 6.41-3.77 10.77-16.15 14-16.15 14L340 389.44h-31.23z",
    fill: "#fda57d"
  }), _react.default.createElement("circle", {
    cx: 257.09,
    cy: 313.53,
    r: 22.61,
    fill: "#3d213c"
  }), _react.default.createElement("ellipse", {
    cx: 268.93,
    cy: 293.34,
    rx: 16.69,
    ry: 9.42,
    fill: "#3d213c"
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M250.45 548.62v2.72l32.36-4.15v-3.09l-32.36 4.52zM205.22 475.37l-2.18.43 10.46 31.14 1.31-.24-9.59-31.33zM319.81 369.2l2.13.66.69 19.58h-2.82V369.2zM203.34 397.37l-.72 1.84 19.13 11.96.54-2.09-18.95-11.71zM225.46 462.99l-3.17 1.26s53.09 25.73 70.59 3.19l-.58-2s-16.09 21.56-66.84-2.45z"
  }), _react.default.createElement("path", {
    d: "M199.47 467.49l15 42.76q10.78-3.51 21.82-6.22a36.41 36.41 0 0 1 11.31-1.26c-3 .55-2.53 2.52-3.36 5.5s-.58 6.13-.4 9.22a156.36 156.36 0 0 1-1.24 31.11 239.93 239.93 0 0 1 48.3-5.38 154.16 154.16 0 0 1-4.48-26.63 31.13 31.13 0 0 1 0-7.09c.48-3.18 1.84-6.16 3-9.17a73.16 73.16 0 0 0 4.62-21.62 19.58 19.58 0 0 0-.91-8.45c-1.42-3.55-4.59-6.17-8.09-7.71a38.93 38.93 0 0 0-11.11-2.58c-14.39-1.78-28.49-1.43-42.93-1.29-5.54.05-8.25 1.77-13.24 4.17-1.63.77-17.57 6.71-18.29 4.64z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M227.38 352.86c-8.73 4.73-15.66 12.12-22.43 19.39l-16.87 18.09a251 251 0 0 1 24 12.86c2.86 1.74 5.84 3.71 7.21 6.77s.87 6.53.25 9.78a155.9 155.9 0 0 1-12.11 37.3c13.58 2.95 27.39 6 39.5 12.8 3.06 1.72 6.14 3.72 9.64 4a20.94 20.94 0 0 0 6.23-.75l30.72-6.9a5.7 5.7 0 0 0 2.68-1.11 5.81 5.81 0 0 0 1.25-2c5.41-11.84 10.95-24.25 10.37-37.26-.28-6.13-1.91-12.35-.51-18.32s7.57-11.54 13.29-9.3l2.52-28.77c.29-3.24.35-7-2.18-9.08-1.76-1.42-4.21-1.49-6.36-2.2-3.4-1.12-6-3.84-9-5.8-8.19-5.37-18.77-4.73-28.53-3.89-8.3.71-16.53 2-24.78.8-8.93-1.24-16.74-.82-24.89 3.59z",
    fill: primaryColor
  }));
};

UndrawDestination.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawDestination;
exports.default = _default;