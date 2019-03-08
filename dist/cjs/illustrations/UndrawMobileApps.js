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

var UndrawMobileApps = function UndrawMobileApps(_props) {
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
    viewBox: "0 0 918.21 702.7",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 473.15,
    y1: 763.14,
    x2: 757.69,
    y2: 91.26,
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
    x1: 716.19,
    y1: 374.64,
    x2: 716.19,
    y2: 302.23,
    gradientTransform: "matrix(-1 0 0 1 1202 0)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 808.96,
    y1: 801.35,
    x2: 808.96,
    y2: 258.82,
    gradientTransform: "matrix(-1 0 0 1 1202 0)",
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M213.11 566.49c12.31.81 25.32 5.08 36.52-.09 2.89-1.33 5.51-3.25 8.51-4.32 6.89-2.46 14.46-.07 21.4 2.23a948.63 948.63 0 0 0 166.86 38.93c11.68 1.63 23.87 3 35-.8 8.14-2.77 15.19-8.12 23.25-11.12 13.18-4.89 27.74-3.07 41.77-2.3a267.56 267.56 0 0 0 108-16.45l1.81-.69a54.6 54.6 0 0 1 52.09 7 127.79 127.79 0 0 0 18.58 11.33 45.25 45.25 0 0 1 20.59 59.63l-.24.52c-5.72 12.47-10.49 26.43-21.7 34.35-10.57 7.47-24.44 7.78-37.38 7.81l-79.43.19c-8.24 0-16.58 0-24.58-1.94-7.19-1.77-13.88-5.09-20.51-8.39l-35.54-17.63c-14.31-7.11-30-14.43-45.66-11.16-16 3.34-27.53 16.79-41.47 25.27-21.63 13.17-50.39 13.69-72.48 1.29-10.58-5.94-19.77-14.6-31.31-18.33-19.06-6.17-39.31 2.37-58.92 6.46-38.16 7.96-83.11-2.93-112.35-29.26-37.66-33.92 6.56-75.19 47.19-72.53z",
    fill: "#f0e4e4"
  }), _react.default.createElement("path", {
    d: "M68.8 623.13s-29.11-98.78 5.46-171.56c14.51-30.53 19.33-64.8 12.62-97.93a262.52 262.52 0 0 0-13.86-46",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M94.52 261.71c0 12.11-21.93 47.23-21.93 47.23s-21.93-35.12-21.93-47.23a21.93 21.93 0 1 1 43.86 0zM130.77 328.8c-6.58 10.17-44.08 27.73-44.08 27.73s.68-41.4 7.26-51.57a21.932 21.932 0 1 1 36.82 23.84zM129.19 443.44c-10.81 5.45-52 1.69-52 1.69s21.49-35.4 32.3-40.85a21.93 21.93 0 1 1 19.75 39.16zM108.46 529.92c-9.74 7.2-51 10.46-51 10.46s15.2-38.52 24.93-45.72a21.93 21.93 0 0 1 26.08 35.26zM40.65 358.87c8.69 8.44 49.16 17.18 49.16 17.18s-9.91-40.2-18.6-48.64a21.93 21.93 0 0 0-30.56 31.46zM17.68 460.35c10.81 5.45 52 1.69 52 1.69s-21.49-35.4-32.3-40.85a21.93 21.93 0 0 0-19.7 39.16zM8.89 561.97c9.74 7.2 51 10.46 51 10.46s-15.2-38.52-24.93-45.72a21.93 21.93 0 0 0-26.08 35.26z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M94.52 261.71c0 12.11-21.93 47.23-21.93 47.23s-21.93-35.12-21.93-47.23a21.93 21.93 0 1 1 43.86 0zM130.77 328.8c-6.58 10.17-44.08 27.73-44.08 27.73s.68-41.4 7.26-51.57a21.932 21.932 0 1 1 36.82 23.84zM129.19 443.44c-10.81 5.45-52 1.69-52 1.69s21.49-35.4 32.3-40.85a21.93 21.93 0 1 1 19.75 39.16zM108.46 529.92c-9.74 7.2-51 10.46-51 10.46s15.2-38.52 24.93-45.72a21.93 21.93 0 0 1 26.08 35.26zM40.65 358.87c8.69 8.44 49.16 17.18 49.16 17.18s-9.91-40.2-18.6-48.64a21.93 21.93 0 0 0-30.56 31.46zM17.68 460.35c10.81 5.45 52 1.69 52 1.69s-21.49-35.4-32.3-40.85a21.93 21.93 0 0 0-19.7 39.16zM8.89 561.97c9.74 7.2 51 10.46 51 10.46s-15.2-38.52-24.93-45.72a21.93 21.93 0 0 0-26.08 35.26z",
    opacity: 0.25
  }), _react.default.createElement("path", {
    d: "M599.52 349.27c-3.7-29 7.89-58.85 1-87.24-5.3-21.93-21-40.24-26.16-62.21-7.58-32.56 9.76-66 31.89-91 15.22-17.23 34.32-32.87 57.09-36 14.06-2 28.51 1.09 41.49 6.82a105.27 105.27 0 0 1 56.6 62.17c3 8.9 4.73 18.21 8.42 26.84 6.35 14.87 18 26.87 25.25 41.33a78.42 78.42 0 0 1 2.66 63.37c-8.39 20.94-26 38.46-28.6 60.87-1.89 16.15 4.17 33.84-3.7 48.07-5.94 10.74-18.17 16.16-29.75 20.22-26.94 9.4-64.6 24.6-91.6 10.13-23.62-12.65-41.17-36.6-44.59-63.37z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M675.11 369.88s39.66-16 44.66-25 12-62 12-62M674.73 614.9v-345",
    fill: "none",
    stroke: "#333",
    strokeMiterlimit: 10,
    strokeWidth: 3
  }), _react.default.createElement("path", {
    d: "M768.29 98.65l-332.5.81a13.66 13.66 0 0 0-13.63 13.69L423.67 735a13.66 13.66 0 0 0 13.7 13.63l332.5-.81a13.66 13.66 0 0 0 13.63-13.69L782 112.28a13.66 13.66 0 0 0-13.71-13.63z",
    transform: "translate(-140.89 -98.65)",
    fill: "url(#prefix__a)",
    opacity: 0.5
  }), _react.default.createElement("rect", {
    x: 427.78,
    y: 107.54,
    width: 350.11,
    height: 631.95,
    rx: 13.64,
    ry: 13.64,
    transform: "rotate(-.14 -39842.396 58032.931)",
    fill: "#535461"
  }), _react.default.createElement("path", {
    d: "M628.91 611.29a13.3 13.3 0 0 1-13.26 13.33l-306 .74a13.3 13.3 0 0 1-13.33-13.26l-.21-89.75-1.17-483.92A13.3 13.3 0 0 1 308.2 25.1l64-.15a28.39 28.39 0 0 0 28 24.07l120.92-.29a28.4 28.4 0 0 0 27.99-24.21l65-.16a13.3 13.3 0 0 1 13.33 13.26l1.25 484.73z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M628.91 611.29a13.3 13.3 0 0 1-13.26 13.33l-306 .74a13.3 13.3 0 0 1-13.33-13.26l-.21-89.75h332.58z",
    fill: "#e6e6e6"
  }), _react.default.createElement("rect", {
    x: 559.95,
    y: 130.97,
    width: 78.02,
    height: 4.88,
    rx: 2,
    ry: 2,
    transform: "rotate(-.86 -6042.722 9470.77)",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 654.53,
    cy: 132.08,
    r: 2.93,
    transform: "rotate(-.86 -5987.416 9469.852)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M714.52 349.27c-3.7-29 7.89-58.85 1-87.24-5.3-21.93-21-40.24-26.16-62.21-7.58-32.56 9.76-66 31.89-91 15.22-17.23 34.32-32.87 57.09-36 14.06-2 28.51 1.09 41.49 6.82a105.27 105.27 0 0 1 56.6 62.17c3 8.9 4.73 18.21 8.42 26.84 6.35 14.87 18 26.87 25.25 41.33a78.42 78.42 0 0 1 2.63 63.41c-8.39 20.94-26 38.46-28.6 60.87-1.89 16.15 4.17 33.84-3.7 48.07-5.94 10.74-18.17 16.16-29.75 20.22-26.91 9.36-64.57 24.56-91.57 10.09-23.62-12.65-41.17-36.6-44.59-63.37z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M714.52 349.27c-3.7-29 7.89-58.85 1-87.24-5.3-21.93-21-40.24-26.16-62.21-7.58-32.56 9.76-66 31.89-91 15.22-17.23 34.32-32.87 57.09-36 14.06-2 28.51 1.09 41.49 6.82a105.27 105.27 0 0 1 56.6 62.17c3 8.9 4.73 18.21 8.42 26.84 6.35 14.87 18 26.87 25.25 41.33a78.42 78.42 0 0 1 2.63 63.41c-8.39 20.94-26 38.46-28.6 60.87-1.89 16.15 4.17 33.84-3.7 48.07-5.94 10.74-18.17 16.16-29.75 20.22-26.91 9.36-64.57 24.56-91.57 10.09-23.62-12.65-41.17-36.6-44.59-63.37z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M790.11 369.88s39.66-16 44.66-25 12-62 12-62M789.73 614.9v-345",
    fill: "none",
    stroke: "#333",
    strokeMiterlimit: 10,
    strokeWidth: 3
  }), _react.default.createElement("path", {
    d: "M141.45 663.35s-12.72-43.19 2.38-75a68.21 68.21 0 0 0 5.52-42.79 114.72 114.72 0 0 0-6.06-20.09",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M152.69 505.41c0 5.29-9.58 20.64-9.58 20.64s-9.58-15.35-9.58-20.64a9.585 9.585 0 0 1 19.17 0zM168.54 534.73c-2.88 4.44-19.26 12.12-19.26 12.12s.3-18.09 3.17-22.54a9.585 9.585 0 0 1 16.09 10.42zM167.84 584.83c-4.73 2.38-22.75.74-22.75.74s9.39-15.47 14.12-17.85a9.582 9.582 0 1 1 8.63 17.11zM158.78 622.62c-4.26 3.15-22.29 4.57-22.29 4.57s6.64-16.83 10.9-20a9.584 9.584 0 0 1 11.4 15.41zM129.11 547.88c3.8 3.69 21.48 7.51 21.48 7.51s-4.33-17.57-8.13-21.26a9.582 9.582 0 1 0-13.35 13.75zM119.11 592.2c4.73 2.38 22.75.74 22.75.74s-9.39-15.47-14.12-17.85a9.582 9.582 0 0 0-8.63 17.11zM115.27 636.63c4.26 3.15 22.29 4.57 22.29 4.57s-6.64-16.83-10.9-20a9.584 9.584 0 1 0-11.4 15.41z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M152.69 505.41c0 5.29-9.58 20.64-9.58 20.64s-9.58-15.35-9.58-20.64a9.585 9.585 0 0 1 19.17 0zM168.54 534.73c-2.88 4.44-19.26 12.12-19.26 12.12s.3-18.09 3.17-22.54a9.585 9.585 0 0 1 16.09 10.42zM167.84 584.83c-4.73 2.38-22.75.74-22.75.74s9.39-15.47 14.12-17.85a9.582 9.582 0 1 1 8.63 17.11zM158.78 622.62c-4.26 3.15-22.29 4.57-22.29 4.57s6.64-16.83 10.9-20a9.584 9.584 0 0 1 11.4 15.41zM129.11 547.88c3.8 3.69 21.48 7.51 21.48 7.51s-4.33-17.57-8.13-21.26a9.582 9.582 0 1 0-13.35 13.75zM119.11 592.2c4.73 2.38 22.75.74 22.75.74s-9.39-15.47-14.12-17.85a9.582 9.582 0 0 0-8.63 17.11zM115.27 636.63c4.26 3.15 22.29 4.57 22.29 4.57s-6.64-16.83-10.9-20a9.584 9.584 0 1 0-11.4 15.41z",
    opacity: 0.25
  }), _react.default.createElement("path", {
    d: "M846.17 638.91s-15.76-53.5 3-92.88a84.51 84.51 0 0 0 6.83-53 142.13 142.13 0 0 0-7.51-24.88",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M860.11 443.23c0 6.56-11.87 25.57-11.87 25.57s-11.87-19-11.87-25.57a11.875 11.875 0 0 1 23.75 0zM879.72 479.55c-3.56 5.5-23.86 15-23.86 15s.37-22.41 3.93-27.92a11.873 11.873 0 0 1 19.93 12.91zM878.87 541.62c-5.85 3-28.18.91-28.18.91s11.63-19.16 17.49-22.12a11.871 11.871 0 0 1 10.69 21.2zM867.64 588.44c-5.27 3.9-27.62 5.66-27.62 5.66s8.23-20.85 13.5-24.75a11.872 11.872 0 0 1 14.12 19.09zM830.93 495.84c4.7 4.57 26.62 9.3 26.62 9.3s-5.37-21.77-10.07-26.33a11.87 11.87 0 0 0-16.55 17zM818.5 550.76c5.85 3 28.18.91 28.18.91s-11.63-19.16-17.49-22.12a11.871 11.871 0 0 0-10.69 21.2zM813.74 605.79c5.27 3.9 27.62 5.66 27.62 5.66s-8.23-20.85-13.5-24.75a11.872 11.872 0 1 0-14.12 19.09z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M860.11 443.23c0 6.56-11.87 25.57-11.87 25.57s-11.87-19-11.87-25.57a11.875 11.875 0 0 1 23.75 0zM879.72 479.55c-3.56 5.5-23.86 15-23.86 15s.37-22.41 3.93-27.92a11.873 11.873 0 0 1 19.93 12.91zM878.87 541.62c-5.85 3-28.18.91-28.18.91s11.63-19.16 17.49-22.12a11.871 11.871 0 0 1 10.69 21.2zM867.64 588.44c-5.27 3.9-27.62 5.66-27.62 5.66s8.23-20.85 13.5-24.75a11.872 11.872 0 0 1 14.12 19.09zM830.93 495.84c4.7 4.57 26.62 9.3 26.62 9.3s-5.37-21.77-10.07-26.33a11.87 11.87 0 0 0-16.55 17zM818.5 550.76c5.85 3 28.18.91 28.18.91s-11.63-19.16-17.49-22.12a11.871 11.871 0 0 0-10.69 21.2zM813.74 605.79c5.27 3.9 27.62 5.66 27.62 5.66s-8.23-20.85-13.5-24.75a11.872 11.872 0 1 0-14.12 19.09z",
    fill: "#fff",
    opacity: 0.5
  }), _react.default.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, _react.default.createElement("rect", {
    x: 312.09,
    y: 101.86,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  }), _react.default.createElement("rect", {
    x: 391.09,
    y: 101.86,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  }), _react.default.createElement("rect", {
    x: 470.09,
    y: 101.86,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  }), _react.default.createElement("rect", {
    x: 549.09,
    y: 101.86,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  })), _react.default.createElement("rect", {
    x: 311.76,
    y: 197.86,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5,
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 390.76,
    y: 197.86,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5,
    fill: primaryColor,
    opacity: 0.6
  }), _react.default.createElement("rect", {
    x: 469.76,
    y: 197.86,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5,
    fill: primaryColor,
    opacity: 0.6
  }), _react.default.createElement("rect", {
    x: 548.76,
    y: 197.86,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5,
    fill: primaryColor,
    opacity: 0.6
  }), _react.default.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, _react.default.createElement("rect", {
    x: 311.43,
    y: 293.86,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  }), _react.default.createElement("rect", {
    x: 390.43,
    y: 293.86,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  }), _react.default.createElement("rect", {
    x: 469.43,
    y: 293.86,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  }), _react.default.createElement("rect", {
    x: 548.43,
    y: 293.86,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  })), _react.default.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, _react.default.createElement("rect", {
    x: 311.11,
    y: 389.86,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  }), _react.default.createElement("rect", {
    x: 390.11,
    y: 389.86,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  }), _react.default.createElement("rect", {
    x: 469.11,
    y: 389.86,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  }), _react.default.createElement("rect", {
    x: 548.11,
    y: 389.86,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  })), _react.default.createElement("path", {
    d: "M486 368.86v5.78l-24.38-15.4 2.57-3.21 1.19.7 18.87-27.65V313l7.19.64v-2.57c19-21.82 20.91 2.57 17 9.63s-11.11 12.19-11.11 12.19c-4 3.36-11 28.76-12.69 35.13z",
    transform: "translate(-140.89 -98.65)",
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    d: "M301.15 419.25s18.61 36.41 12.83 72.82c-1.94 12.24-1.13 19.72.81 24.28a44.65 44.65 0 0 1-4 14.22c-7.06 14.76-7.06 30.16 1.92 48.13l2.57 93s3.21 43.63 0 52.62 1.28 52 1.28 52h-.64v23.74l48.08 1.29s11.27-5.35 13.27-9.35l24.16 7.43s26.59-4.58 11-10.92c-11.61-4.72-14.49-11.47-15.21-14.59l38-109.26s-7.06-93-32.73-125.13l-2.6-18.92h.36l5.45-110.47.45.06h-.13a122.49 122.49 0 0 0 42.36-.65 66 66 0 0 0 12.27-3.43l.73-.29H461.53a37.14 37.14 0 0 0 8.34-4.76l16-24.51-24.38-16.8-8.34 11.9s-26.13-5.52-40.48-11.34a61.31 61.31 0 0 0-21-4.51l-15.67-.54-7.81-4.69 2.44-6.31c.24-.11.48-.22.72-.35l.22-1.35a37.43 37.43 0 0 0 27.31-45.33h.51c-.22-13-4.2-14.27-4.2-14.27 0-13.22-11.55-22.89-24.71-24a65.43 65.43 0 0 0-20.29 1.78 23.61 23.61 0 0 0-18 20.52C315 286 320.76 295 320.49 298.45c-1.32 16.8 4 26.73 9.9 32.52a31 31 0 0 0 8.67 6.36l-3.75 7.51h-1.1l-3.06 9H331l-3.34 2.16a62.69 62.69 0 0 0-26.51 63.25zm51.33 357.07v-28.87l12.19-85.34v-43.64L386.5 664 363 762.76l-1.23-.34-5.41 19.44a12.77 12.77 0 0 1-3.87-5.54z",
    transform: "translate(-140.89 -98.65)",
    fill: "url(#prefix__c)"
  }), _react.default.createElement("path", {
    d: "M340.22 222.88v15.41l-18.36 26.9 18.36 11.95s8.16-31.44 12.56-35.14c0 0 6.91-4.93 10.67-11.71s1.88-30.21-16.33-9.25v2.47zM194.04 259.64l7.27-14.54a2.69 2.69 0 0 1 2.27-1.49l27.61-1.41a2.69 2.69 0 0 1 2.65 3.66l-7.12 18.41a2.69 2.69 0 0 1-2.75 1.71l-27.75-2.47a2.69 2.69 0 0 1-2.18-3.87z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    fill: "#edeef9",
    d: "M196.08 253.4l-4.69 13.75 48.16-1.73-18.5-11.1-24.97-.92zM318.47 267.27l2.46-3.08 20.96 12.33v5.55l-23.42-14.8z"
  }), _react.default.createElement("path", {
    d: "M176.83 403.67a45.81 45.81 0 0 1-3.25 28.22c-6.78 14.18-6.78 29 1.85 46.24l2.47 89.4s3.08 41.93 0 50.56 1.21 49.95 1.21 49.95h34.53v-27.75l11.71-82v-41.94l21 43.78-24 101.12 31.44 12.95 39.46-113.45s-6.84-89.4-31.5-120.22l-4.64-33.61z",
    fill: "#7a7478"
  }), _react.default.createElement("path", {
    d: "M178.51 690.85v-22.81h35.14s2.47 9.25 18.5 11.1-7.4 12.95-7.4 12.95z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M216.47 676.65l6.12-22 33.86 9.43s-.11 9.57 14.84 15.65-10.6 10.49-10.6 10.49z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M257.11 408.77l-80.29-3.25a44.92 44.92 0 0 1 .61 14.56c3.67 8.64 11.55 6.28 11.55 6.28l70.25-2.16z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M193 262.03l-3.2 2.17a60.24 60.24 0 0 0-25.47 60.74s17.88 35 12.33 70 12.33 29.6 12.33 29.6l70.6-2.17 5.24-106.15s42.54 6.05 61.66-8.75l15.41-23.55-23.43-16.17-8 11.44s-25.11-5.3-38.9-10.9a58.91 58.91 0 0 0-20.22-4.33z",
    fill: "#4d8af0"
  }), _react.default.createElement("path", {
    d: "M193.62 432.82s-4.32 21.58 20.35 57.34M265.11 316.29s29.59-9.86 42.54-9.86 10.79 5.59 10.79 5.59-20.62 9.2-53.33 4.27zM231.58 243.45l-11.78 1.41c-.37 0-.71.51-.91 1.24 2.59 4.67 5.83 7.45 9.35 7.45a7.27 7.27 0 0 0 3.57-1l.9-5.45c.3-1.81-.3-3.75-1.13-3.65z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 223.36,
    cy: 216.35,
    r: 35.96,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M253.95 195.99l-1.84 1.66a6.22 6.22 0 0 0 1.81 10.33s-16.11 16.11-18.35 19.1.37 10.86.37 10.86 7.12 13.11-30.34 10.11c0 0-24.72-5.24-22.1-38.58.26-3.34-5.24-12 11.24-16.48a22.68 22.68 0 0 1 17.37-19.7 62.87 62.87 0 0 1 19.5-1.71 24.48 24.48 0 0 1 22.34 24.41z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M254.73 194.03s3.82 1.18 4 13.71l-5.43-.37s-12.56 33.6-11.24 29.22c4.87-16.11-4.87-13.11-7.12-10.11s.37 10.86.37 10.86 7.12 13.11-30.34 10.11c0 0-24.72-5.24-22.1-38.58.26-3.34-5.24-12 11.24-16.48a22.68 22.68 0 0 1 17.34-19.71 62.87 62.87 0 0 1 19.5-1.71c12.68 1.07 23.78 10.38 23.78 23.06z",
    fill: "#72351c"
  }), _react.default.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, _react.default.createElement("rect", {
    x: 312.11,
    y: 542.35,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  }), _react.default.createElement("rect", {
    x: 391.11,
    y: 542.35,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  }), _react.default.createElement("rect", {
    x: 470.11,
    y: 542.35,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  }), _react.default.createElement("rect", {
    x: 549.11,
    y: 542.35,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  })), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("rect", {
    x: 312.11,
    y: 542.35,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  }), _react.default.createElement("rect", {
    x: 391.11,
    y: 542.35,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  }), _react.default.createElement("rect", {
    x: 470.11,
    y: 542.35,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  }), _react.default.createElement("rect", {
    x: 549.11,
    y: 542.35,
    width: 64,
    height: 64,
    rx: 10.5,
    ry: 10.5
  })));
};

UndrawMobileApps.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawMobileApps;
exports.default = _default;