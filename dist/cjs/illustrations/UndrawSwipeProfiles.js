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

var UndrawSwipeProfiles = function UndrawSwipeProfiles(_props) {
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
    viewBox: "0 0 945.76 774.02",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 762.62,
    y1: 728.18,
    x2: 1047.15,
    y2: 56.3,
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
  })), _react.default.createElement("linearGradient", {
    id: "prefix__b",
    x1: 894.5,
    y1: 336.85,
    x2: 894.5,
    y2: 132.23,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: -389.38,
    y1: 725.38,
    x2: -104.84,
    y2: 53.5,
    gradientTransform: "matrix(-1 0 0 1 61.63 -2.04)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: -257.5,
    y1: 336.85,
    x2: -257.5,
    y2: 132.23,
    gradientTransform: "matrix(-1 0 0 1 48 0)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 469.32,
    y1: 851.47,
    x2: 753.85,
    y2: 179.59,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 601.5,
    y1: 460.85,
    x2: 601.5,
    y2: 256.23,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__g",
    x1: 531.38,
    y1: 640.9,
    x2: 531.38,
    y2: 532.9,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M1057.67 63l-332.5.81a13.66 13.66 0 0 0-13.63 13.69L713 699.38A13.66 13.66 0 0 0 726.75 713l332.5-.81a13.66 13.66 0 0 0 13.63-13.69l-1.51-621.89a13.66 13.66 0 0 0-13.7-13.61z",
    transform: "translate(-127.12 -62.99)",
    fill: "url(#prefix__a)",
    opacity: 0.5
  }), _react.default.createElement("rect", {
    x: 717.15,
    y: 71.88,
    width: 350.11,
    height: 631.95,
    rx: 13.64,
    ry: 13.64,
    transform: "rotate(-.14 -24954.941 52378.832)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    "data-name": "<Path>",
    d: "M852.31 24.52a28.38 28.38 0 0 1-27.91 24.21l-120.94.28a28.38 28.38 0 0 1-28-24.07l-64.05.16a13.3 13.3 0 0 0-13.27 13.33l1.39 573.67a13.3 13.3 0 0 0 13.35 13.27l306-.74a13.3 13.3 0 0 0 13.27-13.33l-1.39-573.67a13.3 13.3 0 0 0-13.33-13.27z",
    fill: primaryColor,
    opacity: 0.3
  }), _react.default.createElement("path", {
    d: "M996.5 234.23a102 102 0 1 0-158.91 84.66l.06.45a34.91 34.91 0 0 0 11.57 7.36l.13-.45c4.77 4.1 24.88 10.66 48 10.6h.5c14.64 0 30.52-2.58 44.49-10.14 0 0 .12-.27.31-.77a36.34 36.34 0 0 0 9.62-6.59l.16-1.16a101.89 101.89 0 0 0 44.07-83.96z",
    transform: "translate(-127.12 -62.99)",
    fill: "url(#prefix__b)",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 767.38,
    cy: 171.25,
    r: 98.94,
    fill: "#f5f5f5"
  }), _react.default.createElement("rect", {
    x: 849.32,
    y: 95.31,
    width: 78.02,
    height: 4.88,
    rx: 2,
    ry: 2,
    transform: "rotate(-.86 -3370.682 8535.413)",
    fill: "#dbdbdb"
  }), _react.default.createElement("circle", {
    cx: 943.91,
    cy: 96.42,
    r: 2.93,
    transform: "rotate(-.86 -3314.705 8533.835)",
    fill: "#dbdbdb"
  }), _react.default.createElement("path", {
    fill: "#f5f5f5",
    d: "M680.38 309.9h162v18h-162zM644.38 345.9h234v18h-234z"
  }), _react.default.createElement("path", {
    d: "M142.33 63l332.5.81a13.66 13.66 0 0 1 13.63 13.69L487 699.38A13.66 13.66 0 0 1 473.25 713l-332.5-.81a13.66 13.66 0 0 1-13.63-13.69l1.51-621.89A13.66 13.66 0 0 1 142.33 63z",
    transform: "translate(-127.12 -62.99)",
    fill: "url(#prefix__c)",
    opacity: 0.5
  }), _react.default.createElement("rect", {
    x: 132.74,
    y: 71.88,
    width: 350.11,
    height: 631.95,
    rx: 13.64,
    ry: 13.64,
    transform: "rotate(-179.86 244.196 356.432)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    "data-name": "<Path>",
    d: "M93.45 24.52a28.38 28.38 0 0 0 27.91 24.21l120.93.29a28.38 28.38 0 0 0 28-24.07l64.05.16a13.3 13.3 0 0 1 13.27 13.33l-1.39 573.67a13.3 13.3 0 0 1-13.34 13.26l-306-.74a13.3 13.3 0 0 1-13.27-13.33L15 37.63a13.3 13.3 0 0 1 13.33-13.27z",
    fill: primaryColor,
    opacity: 0.3
  }), _react.default.createElement("path", {
    d: "M203.5 234.23a102 102 0 1 1 158.91 84.66l-.06.45a34.91 34.91 0 0 1-11.57 7.36l-.13-.45c-4.77 4.1-24.88 10.66-48 10.6h-.5c-14.64 0-30.52-2.58-44.49-10.14 0 0-.12-.27-.31-.77a36.34 36.34 0 0 1-9.62-6.59l-.16-1.16a101.89 101.89 0 0 1-44.07-83.96z",
    transform: "translate(-127.12 -62.99)",
    fill: "url(#prefix__d)",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 178.38,
    cy: 171.25,
    r: 98.94,
    fill: "#f5f5f5"
  }), _react.default.createElement("rect", {
    x: 272.66,
    y: 95.31,
    width: 78.02,
    height: 4.88,
    rx: 2,
    ry: 2,
    transform: "rotate(-179.14 247.87 66.734)",
    fill: "#dbdbdb"
  }), _react.default.createElement("circle", {
    cx: 256.09,
    cy: 96.42,
    r: 2.93,
    transform: "rotate(-89.14 160.558 129.453)",
    fill: "#dbdbdb"
  }), _react.default.createElement("path", {
    fill: "#f5f5f5",
    d: "M265.38 327.9h-162v-18h162zM301.38 363.9h-234v-18h234z"
  }), _react.default.createElement("path", {
    d: "M764.67 187l-332.5.81a13.66 13.66 0 0 0-13.63 13.69L420 823.38A13.66 13.66 0 0 0 433.75 837l332.5-.81a13.66 13.66 0 0 0 13.63-13.69l-1.51-621.89a13.66 13.66 0 0 0-13.7-13.61z",
    transform: "translate(-127.12 -62.99)",
    fill: "url(#prefix__e)",
    opacity: 0.5
  }), _react.default.createElement("rect", {
    x: 424.15,
    y: 195.88,
    width: 350.11,
    height: 631.95,
    rx: 13.64,
    ry: 13.64,
    transform: "rotate(-.14 -25245.663 52501.254)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    "data-name": "<Path>",
    d: "M559.31 148.52a28.38 28.38 0 0 1-27.91 24.21l-120.94.28a28.38 28.38 0 0 1-28-24.07l-64.05.16a13.3 13.3 0 0 0-13.27 13.33l1.39 573.67a13.3 13.3 0 0 0 13.35 13.27l306-.74a13.3 13.3 0 0 0 13.27-13.33l-1.39-573.67a13.3 13.3 0 0 0-13.33-13.27z",
    fill: primaryColor,
    opacity: 0.4
  }), _react.default.createElement("path", {
    d: "M703.5 358.23a102 102 0 1 0-158.91 84.66l.06.45a34.91 34.91 0 0 0 11.57 7.36l.13-.45c4.77 4.1 24.88 10.66 48 10.6h.5c14.64 0 30.52-2.58 44.49-10.14 0 0 .12-.27.31-.77a36.34 36.34 0 0 0 9.62-6.59l.16-1.16a101.89 101.89 0 0 0 44.07-83.96z",
    transform: "translate(-127.12 -62.99)",
    fill: "url(#prefix__f)",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 474.38,
    cy: 295.25,
    r: 98.94,
    fill: "#f5f5f5"
  }), _react.default.createElement("rect", {
    x: 556.32,
    y: 219.31,
    width: 78.02,
    height: 4.88,
    rx: 2,
    ry: 2,
    transform: "rotate(-.86 -3664.102 8659.8)",
    fill: "#dbdbdb"
  }), _react.default.createElement("circle", {
    cx: 650.91,
    cy: 220.42,
    r: 2.93,
    transform: "rotate(-.86 -3608.125 8658.221)",
    fill: "#dbdbdb"
  }), _react.default.createElement("path", {
    fill: "#f5f5f5",
    d: "M387.38 433.9h162v18h-162zM351.38 469.9h234v18h-234z"
  }), _react.default.createElement("path", {
    d: "M493.25 569.01v44.51H255.88v14.73a3.12 3.12 0 0 1-4.52 2.79l-68.8-34.4a3.45 3.45 0 0 1-.15-6.09l70-39.38a2.29 2.29 0 0 1 3.41 2l-.22 15.53zM569.51 569.01v44.51h237.37v14.73a3.12 3.12 0 0 0 4.52 2.79l68.8-34.4a3.45 3.45 0 0 0 .15-6.09l-70-39.38a2.29 2.29 0 0 0-3.41 2l.22 15.53z",
    fill: "#3ad29f"
  }), _react.default.createElement("circle", {
    cx: 531.38,
    cy: 586.9,
    r: 54,
    fill: "url(#prefix__g)",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 531.38,
    cy: 586.9,
    r: 45,
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M436.58 335.93s-23.57 1.93-17.34 44.88a33.87 33.87 0 0 0 11.22 7.14l13.26-44.88zM513.08 335.93s23.57 1.93 17.34 44.88a33.87 33.87 0 0 1-11.22 7.14l-13.26-44.88z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M437.6 265.55s-11.22 32.64-17.34 29.58c0 0 59 51 111.18 0 0 0-9.18-16.32-22.44-29.58z",
    fill: "#333"
  }), _react.default.createElement("circle", {
    cx: 475.46,
    cy: 262.49,
    r: 43.86,
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M512.63 335.93h-76.5l-7.14 30.6s-4.19 14.17 1 20.4 53.95 20.4 89.76 1a39.91 39.91 0 0 0 1-25.5c-4.08-14.28-1-1-1-1z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M513.65 335.93h-76.5l-7.14 30.6s-4.19 14.17 1 20.4 53.95 20.4 89.76 1a39.91 39.91 0 0 0 1-25.5c-4.08-14.28-1-1-1-1z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M513.08 335.93h-76.5l-7.14 30.6s-4.19 14.17 1 20.4 53.95 20.4 89.76 1a39.91 39.91 0 0 0 1-25.5c-4.08-14.28-1-1-1-1z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M460 310.55h30.6V335a15.3 15.3 0 0 1-15.3 15.3A15.3 15.3 0 0 1 460 335v-24.45z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M460 309.41h30.6v24.48a15.3 15.3 0 0 1-15.3 15.3 15.3 15.3 0 0 1-15.3-15.3v-24.48z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M460.1 313.83a44 44 0 0 0 30.6.08v-3.76h-30.6z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 475.46,
    cy: 272.01,
    r: 43.86,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M433.52 255.35h83.64s-7.14-33.77-38.76-31.62-44.88 31.62-44.88 31.62z",
    fill: "#333"
  }), _react.default.createElement("ellipse", {
    cx: 432.5,
    cy: 270.14,
    rx: 4.08,
    ry: 7.65,
    fill: "#fda57d"
  }), _react.default.createElement("ellipse", {
    cx: 518.18,
    cy: 270.14,
    rx: 4.08,
    ry: 7.65,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M433.52 256.49h83.64s-7.14-33.77-38.76-31.62-44.88 31.62-44.88 31.62z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M724.58 209.93s-23.57 1.93-17.34 44.88a33.87 33.87 0 0 0 11.22 7.14l13.26-44.88zM801.08 209.93s23.57 1.93 17.34 44.88a33.87 33.87 0 0 1-11.22 7.14l-13.26-44.88z",
    fill: "#4d8af0"
  }), _react.default.createElement("circle", {
    cx: 763.46,
    cy: 136.49,
    r: 43.86,
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M800.63 209.93h-76.5l-7.14 30.6s-4.19 14.17 1 20.4 53.95 20.4 89.76 1a39.91 39.91 0 0 0 1-25.5c-4.08-14.28-1-1-1-1z",
    fill: "#4d8af0"
  }), _react.default.createElement("path", {
    d: "M801.65 209.93h-76.5l-7.14 30.6s-4.19 14.17 1 20.4 53.95 20.4 89.76 1a39.91 39.91 0 0 0 1-25.5c-4.08-14.28-1-1-1-1z",
    fill: "#4d8af0"
  }), _react.default.createElement("path", {
    d: "M801.08 209.93h-76.5l-7.14 30.6s-4.19 14.17 1 20.4 53.95 20.4 89.76 1a39.91 39.91 0 0 0 1-25.5c-4.08-14.28-1-1-1-1z",
    fill: "#4d8af0"
  }), _react.default.createElement("path", {
    d: "M748 184.55h30.6V209a15.3 15.3 0 0 1-15.3 15.3A15.3 15.3 0 0 1 748 209v-24.45z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M748 183.41h30.6v24.48a15.3 15.3 0 0 1-15.3 15.3 15.3 15.3 0 0 1-15.3-15.3v-24.48z",
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M748.1 187.83a44 44 0 0 0 30.6.08v-3.76h-30.6z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 763.46,
    cy: 146.01,
    r: 43.86,
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M721.52 130.49h83.64s-7.14-33.77-38.76-31.62-44.88 31.62-44.88 31.62z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M721.52 129.35h83.64s-7.14-33.77-38.76-31.62-44.88 31.62-44.88 31.62z",
    fill: "#333"
  }), _react.default.createElement("ellipse", {
    cx: 720.5,
    cy: 144.14,
    rx: 4.08,
    ry: 7.65,
    fill: "#fdb797"
  }), _react.default.createElement("ellipse", {
    cx: 806.18,
    cy: 144.14,
    rx: 4.08,
    ry: 7.65,
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M728.02 107.01a15.54 15.54 0 0 1 5.64-8.36c2.14-1.48 4.69-2.2 7.15-3.06a54.61 54.61 0 0 0 10.39-5c3.72-2.29 7.21-5.05 11.31-6.57 7-2.61 14.89-1.2 22.17.67a18.65 18.65 0 0 1 5.18 1.93 19.63 19.63 0 0 1 4.6 4.45L806 105.01a22.12 22.12 0 0 1 2.87 4 13.9 13.9 0 0 1 1.31 4.56 11.93 11.93 0 0 1-1.23 7.48c-2 3.33-6 5-9.84 5.16s-7.64-1-11.35-2.05c-12-3.5-24.06-6.76-36.45-8.22a102.82 102.82 0 0 0-18.55-.6c-1.94.13-4.51 1-5.69-1-1.03-1.64.42-5.64.95-7.33z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M139.58 208.93s-23.57 1.93-17.34 44.88a33.87 33.87 0 0 0 11.22 7.14l13.26-44.88zM216.08 208.93s23.57 1.93 17.34 44.88a33.87 33.87 0 0 1-11.22 7.14l-13.26-44.88z",
    fill: "#be7c5e"
  }), _react.default.createElement("path", {
    d: "M140.6 138.55s-1.81 5.28-4.38 11.39c-5.61 13.37.79 64.71 14.22 70.18 15.06 6.14 34.88 10.07 55.46 2.57 17.89-6.52 23.4-65 10.76-79.19-1.48-1.67-3-3.33-4.65-4.94z",
    fill: "#333"
  }), _react.default.createElement("circle", {
    cx: 178.46,
    cy: 135.49,
    r: 43.86,
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M215.63 208.93h-76.5l-7.14 30.6s-4.19 14.17 1 20.4 53.95 20.4 89.76 1a39.91 39.91 0 0 0 1-25.5c-4.08-14.28-1-1-1-1z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M216.65 208.93h-76.5l-7.14 30.6s-4.19 14.17 1 20.4 53.95 20.4 89.76 1a39.91 39.91 0 0 0 1-25.5c-4.08-14.28-1-1-1-1z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M216.08 208.93h-76.5l-7.14 30.6s-4.19 14.17 1 20.4 53.95 20.4 89.76 1a39.91 39.91 0 0 0 1-25.5c-4.08-14.28-1-1-1-1z",
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M163 183.55h30.6V208a15.3 15.3 0 0 1-15.3 15.3A15.3 15.3 0 0 1 163 208v-24.45z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M163 182.41h30.6v24.48a15.3 15.3 0 0 1-15.3 15.3 15.3 15.3 0 0 1-15.3-15.3v-24.48z",
    fill: "#be7c5e"
  }), _react.default.createElement("path", {
    d: "M163.1 186.83a44 44 0 0 0 30.6.08v-3.76h-30.6z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 178.46,
    cy: 145.01,
    r: 43.86,
    fill: "#be7c5e"
  }), _react.default.createElement("path", {
    d: "M136.52 128.35h83.64s-7.14-33.77-38.76-31.62-44.88 31.62-44.88 31.62z",
    fill: "#333"
  }), _react.default.createElement("ellipse", {
    cx: 135.5,
    cy: 143.14,
    rx: 4.08,
    ry: 7.65,
    fill: "#be7c5e"
  }), _react.default.createElement("ellipse", {
    cx: 221.18,
    cy: 143.14,
    rx: 4.08,
    ry: 7.65,
    fill: "#be7c5e"
  }), _react.default.createElement("path", {
    d: "M136.52 129.49h83.64s-7.14-33.77-38.76-31.62-44.88 31.62-44.88 31.62z",
    opacity: 0.1
  }));
};

UndrawSwipeProfiles.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawSwipeProfiles;
exports.default = _default;