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

var UndrawQueue = function UndrawQueue(_props) {
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
    viewBox: "0 0 905.75 574",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 1016.02,
    y1: 690.34,
    x2: 1016.02,
    y2: 362.35,
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
    x1: 889.74,
    y1: 689.71,
    x2: 889.74,
    y2: 190.13,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 351.33,
    y1: 706.35,
    x2: 351.33,
    y2: 198.91,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 714.73,
    y1: 737,
    x2: 714.73,
    y2: 163,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 542.25,
    y1: 701.25,
    x2: 542.25,
    y2: 216.46,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 596.32,
    y1: 543.36,
    x2: 596.32,
    y2: 401.7,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__g",
    x1: 183.98,
    y1: 690.34,
    x2: 183.98,
    y2: 362.35,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M1031.15 653.49h-4.81V400.84a20.64 20.64 0 1 0-20.64 0v252.65h-4.81a21.72 21.72 0 0 0-21.72 21.72v15.13h73.71v-15.13a21.72 21.72 0 0 0-21.73-21.72z",
    transform: "translate(-147.13 -163)",
    fill: "url(#prefix__a)",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M967.15 672c-7.47-4.42-11.41-19.2-12.59-24.41l-8.91-115.11s-6.69-38.1-32.1-92.37c-.31-32.31-1.5-134.48-4.39-145.47l-16.84-20.47a40.43 40.43 0 0 1 2.65-4.57c.3-.08.61-.15.91-.24.37-.49.76-1 1.16-1.41a27.88 27.88 0 0 0 14.48-41c4.15-3.05-1.14-4.34-1.14-4.34a27.89 27.89 0 0 0-31.57-21.41 15.14 15.14 0 0 0-14.56-11h-.86A15.15 15.15 0 0 1 877 200.75a15.15 15.15 0 0 0-9.56-7.1 15.08 15.08 0 0 0-9.7-3.52h-.86a15.06 15.06 0 0 1 8.38 3.14c-.44 0-.88-.07-1.32-.07a15.13 15.13 0 0 0-7.65 28.2 27.88 27.88 0 0 0 1.49 18.68c-.57 8 1.17 18.19 11.88 23.35l-1.82 4.12c-2.19.11-20 2.27-31.46 42.69-4.93 10.13-8.65 26.52-8.4 53-.48 6.78-.84 14-1 21.81l-8.26 34.08.12.2v.47l-.09.36.06.09c-2 27.21-1 54.92 4.5 81.63 3.12 15.12 5.53 30.29 4 35.65-3.3 12-15 55.74-13.31 69.18l-3.87 23.51.26.09-14.59 27.71s9 8.24 12.55 8.42 7.64 6.22 7.64 6.22 20.95 16.19 28.07 11.18-2.68-11-9.38-19.17c-5.49-6.73-4.09-22-3.4-27.25l31.33-111.12s3.11-17.29 3.57-46.82a25 25 0 0 0 8.06 4.33 5.06 5.06 0 0 0 3 0l2 7.24s36.14 51.63 37.17 64 5.16 57.48 11.36 69.53l4.47 23.41h.27l-4.14 31s11.3 4.63 14.68 3.58 9.32 3.21 9.32 3.21 25.25 8 30.2.81-6.3-9.23-15.42-14.59z",
    transform: "translate(-147.13 -163)",
    fill: "url(#prefix__b)",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M756.7 265.56l9 20.92s-1-137.16-4.32-149.78l-21.59-26.24-7.31 19.26 16.61 20.59s10.3 30.55 8.63 60.44-1.02 54.81-1.02 54.81z",
    fill: "#3ad29f"
  }), _react.default.createElement("path", {
    d: "M756.7 265.56l9 20.92s-1-137.16-4.32-149.78l-21.59-26.24-7.31 19.26 16.61 20.59s10.3 30.55 8.63 60.44-1.02 54.81-1.02 54.81z",
    fill: "#381e1d"
  }), _react.default.createElement("path", {
    d: "M755.7 265.56l9 20.92s-1-137.16-4.32-149.78l-21.61-26.24-7.31 19.26 16.61 20.59s10.3 30.55 8.63 60.44-1 54.81-1 54.81z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M674.17 256.43c-2.09 26.76-1.19 54.05 4.23 80.35 3 14.59 5.33 29.22 3.91 34.4-3.19 11.57-14.45 53.78-12.85 66.75l-3.74 22.69 20.26 7.44 30.37-107.72s7.83-43.47.08-110l-42.27 6.1z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M666.87 459l-15 28.39s8.69 7.95 12.11 8.13 7.37 6 7.37 6 20.21 15.62 27.09 10.78-2.58-10.57-9-18.5-3-28.1-3-28.1z",
    fill: "#381e1d"
  }), _react.default.createElement("path", {
    d: "M732.46 326.33s34.87 49.82 35.87 61.77 5 55.46 11 67.09l4.32 22.58h21.59l-8.63-111.59s-7.74-43.5-37.92-103.28l-38.19 20.92z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M759.19 271c0 2.66-30.55 0-30.55 0V141.52l13.95-20.59s5.36 5.76 10.59 21.51c2 6.09 6.35 17.33 8 26.65 1 5.66-2.68 13.51-2 20.59 2.43 24.93 4.69 52.19.01 81.32z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M740.93 128.23s3.16-13.45 10.46-20.09l-25.9-6.64-6.31 14.28z",
    fill: "#a3643b"
  }), _react.default.createElement("path", {
    d: "M721.66 111.63s-36.69-.83-39.68 113.37l-8 32.88s64.43 105.61 77.38 19.93c0 0 7-93.32-6.64-124.87l6.67-15.94z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M721.66 110.63s-36.69-.83-39.68 113.37l-8 32.88s64.43 105.61 77.38 19.93c0 0 7-93.32-6.64-124.87l6.67-15.94z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M706.87 276.85s-2.36 35.09 20.7 42.47a4.93 4.93 0 0 0 6.42-4.38c.39-6-1.52-18.25-12.51-43.07z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M708.21 276.19s-2.34 35.08 20.66 42.47a4.93 4.93 0 0 0 6.42-4.38c.39-6-1.52-18.25-12.51-43.07z",
    fill: "#a3643b"
  }), _react.default.createElement("circle", {
    cx: 747.74,
    cy: 172.57,
    r: 1.33,
    fill: "#fa9221"
  }), _react.default.createElement("circle", {
    cx: 747.74,
    cy: 222.38,
    r: 1.33,
    fill: "#fa9221"
  }), _react.default.createElement("path", {
    d: "M784.11 475.92l-4.24 31.8s10.9 4.46 14.17 3.45 9 3.09 9 3.09 24.36 7.7 29.14.78-6.07-9-14.87-14.24-12.53-25.33-12.53-25.33z",
    fill: "#381e1d"
  }), _react.default.createElement("path", {
    d: "M712.53 136.37s-33.21-6.64-29.23 77.71c0 0 8 61.77 21.92 65.76l20.92-5.31-8.27-57.79 8.3-29.89s6.62-45.17-13.64-50.48z",
    fill: "#daa4a2",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M715.52 136.37s-33.21-6.64-29.23 77.71c0 0 8 61.77 21.92 65.76l20.92-5.31-8.26-57.79 8.3-29.89s6.61-45.17-13.65-50.48z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M713.87 136.37s-33.21-6.64-29.23 77.71c0 0 8 61.77 21.92 65.76l20.92-5.31-8.3-57.79 8.3-29.89s6.64-45.17-13.61-50.48z",
    fill: "#333"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M708.15 281.56v-2.13l16.44-4.17.76 1.79-17.2 4.51zM709.38 122.92l34.54 29.89.99-.67-34.87-29.55-.66.33zM751.77 272.04l-.1 1.66 6.74-.83-.35-.83h-6.29zM722.66 105.65c4.68 3.95 11.5 7.8 18.1 7.8a26.89 26.89 0 0 0 7.77-1.14 22.92 22.92 0 0 1 2.86-3.17l-25.9-6.64z"
  }), _react.default.createElement("circle", {
    cx: 736.28,
    cy: 73.1,
    r: 26.9,
    fill: "#fdd835"
  }), _react.default.createElement("circle", {
    cx: 740.76,
    cy: 85.56,
    r: 26.9,
    fill: "#a3643b"
  }), _react.default.createElement("path", {
    d: "M714.02 73.1s-10.07 26.38 11.24 34.44a12.61 12.61 0 0 0 3.14-20.17z",
    fill: "#fdd835"
  }), _react.default.createElement("circle", {
    cx: 717.68,
    cy: 53.51,
    r: 14.61,
    fill: "#fdd835"
  }), _react.default.createElement("path", {
    d: "M762.52 67.2s9.29 2.25-7 7.9a20.59 20.59 0 0 0-12.19 11 12.65 12.65 0 0 1-17.53 5.78L720.67 89l-9-20.92 10.63-12.29 18.27-2.32z",
    fill: "#fdd835"
  }), _react.default.createElement("path", {
    d: "M730.96 50.52a14.61 14.61 0 0 0-13.78-14.59h.83a14.615 14.615 0 0 1 0 29.23h-.83a14.61 14.61 0 0 0 13.78-14.64z",
    fill: "#fdd835"
  }), _react.default.createElement("path", {
    d: "M724.65 50.52a14.61 14.61 0 0 0-13.78-14.59h.83a14.615 14.615 0 1 1 0 29.23h-.83a14.61 14.61 0 0 0 13.78-14.64z",
    fill: "#fdd835"
  }), _react.default.createElement("ellipse", {
    cx: 733.62,
    cy: 94.36,
    rx: 2.66,
    ry: 4.65,
    fill: "#a3643b"
  }), _react.default.createElement("path", {
    d: "M464.39 688c-7.73-4.58-11.8-19.86-13-25.25l-9.21-119.06s-6.92-39.4-33.19-95.53c-.32-33.42-1.55-139.09-4.54-150.46l-17.77-21.6a40.78 40.78 0 0 1 2.91-4.4l4.54 12.83 16.38-1.78-8.84-16.9a29.53 29.53 0 0 0 5.55-40 7.27 7.27 0 0 0-.31-9.22 37.79 37.79 0 0 0-9.7-8.06 34.52 34.52 0 0 0-50.36 47.09 7.54 7.54 0 0 1-3.44 2.21c-6.2 1.74-11.14 6.13-14.35 9.76a6 6 0 0 0 1.25 9l2.68 1.71a6 6 0 0 0 7-.43l5.55-4.58a.44.44 0 0 1 .6.64 5.39 5.39 0 0 0 2.62 8.91h.11l-.12.06.15.13c-5 5-10.12 12.22-14.73 22.84-7.41 9-14.18 27.3-13.7 64q-.79 10-1.1 21.44l-8.54 35.24S244.93 548 261.31 564c0 0 9.86 1.76 23.75 5.43l-39.42 52.24.54.52-25.11 18.35s4.63 11.75 7.83 13.53 4.27 9.26 4.27 9.26 12.1 24.56 21 23.14 2.49-11.39 0-22.07c-1.94-8.31 5.39-20.92 8.74-26.12l.88.84s46.79-35.16 64.7-54.82c9.8 4.35 19.15 9.44 26.79 15.3 0 0 13.45-32.76 26.07-87l.11.17c11.05 16.49 29.65 45.43 30.4 54.41 1.07 12.82 5.34 59.45 11.75 71.91l4.63 24.21h.28l-4.29 32.1s11.69 4.78 15.19 3.7 9.64 3.32 9.64 3.32 26.11 8.25 31.24.84-6.47-9.68-15.91-15.26z",
    transform: "translate(-147.13 -163)",
    fill: "url(#prefix__c)",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 225.2,
    cy: 79.92,
    r: 33.04
  }), _react.default.createElement("path", {
    d: "M146 394.46l-42.92 56.88L120.46 468s60.17-45.2 67.69-60.11a6 6 0 0 0 .77-2.56c-.05-11.21-42.92-10.87-42.92-10.87zM225.36 335.88s35.76 51.09 36.79 63.35 5.11 56.88 11.24 68.8l4.43 23.16h22.14l-8.86-114.44s-7.83-44.62-38.83-105.93l-39.17 21.46z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M221.45 146.33h31.34v132.84h-31.34z"
  }), _react.default.createElement("path", {
    d: "M249.2 273.55l9.2 21.46s-1-140.67-4.43-153.61l-22.1-26.91-7.49 19.75 17 21.12s10.56 31.34 8.86 62-1.04 56.19-1.04 56.19z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M249.21 104.95l11.58 22.14-15.67 1.7-7.83-22.14 11.92-1.7z"
  }), _react.default.createElement("circle", {
    cx: 234.56,
    cy: 88.94,
    r: 28.27,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M234.56 128.45a39.35 39.35 0 0 1 10.22-16.35l-26.57-6.81-6.47 14.65z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M222.64 117.21s-46-3.41-49 113.76l-8.17 33.72s-63 116.15-47.34 131.47c0 0 59.26 10.56 89.92 34.06 0 0 23.5-57.22 36.79-145.1 0 0 7.15-95.71-6.81-128.07l6.81-16.35z",
    fill: "#3ad29f"
  }), _react.default.createElement("path", {
    d: "M250.23 273.55l9.2 21.46s-1-140.67-4.43-153.61l-22.13-26.91-7.49 19.75 17 21.12s10.56 31.34 8.86 62-1.01 56.19-1.01 56.19z",
    fill: "#3ad29f"
  }), _react.default.createElement("path", {
    d: "M250.23 273.55l9.2 21.46s-1-140.67-4.43-153.61l-22.13-26.91-7.49 19.75 17 21.12s10.56 31.34 8.86 62-1.01 56.19-1.01 56.19z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M199.13 285.13s-2.42 36 21.23 43.56a5.05 5.05 0 0 0 6.58-4.49c.4-6.12-1.56-18.72-12.83-44.18z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M200.5 284.45s-2.42 36 21.23 43.56a5.05 5.05 0 0 0 6.58-4.49c.4-6.12-1.56-18.72-12.83-44.18z",
    fill: "#fda57d"
  }), _react.default.createElement("circle", {
    cx: 241.03,
    cy: 178.18,
    r: 1.36,
    fill: "#4d8af0"
  }), _react.default.createElement("circle", {
    cx: 241.03,
    cy: 229.27,
    r: 1.36,
    fill: "#4d8af0"
  }), _react.default.createElement("path", {
    d: "M106.15 450l-26.57 19.41s4.43 11.24 7.49 12.94 4.09 8.86 4.09 8.86 11.58 23.5 20.1 22.14 2.38-10.9 0-21.12 9.88-27.23 9.88-27.23zM278.34 489.29l-4.36 32.62s11.18 4.58 14.53 3.54 9.22 3.17 9.22 3.17 25 7.89 29.89.8-6.22-9.26-15.25-14.61-12.85-26-12.85-26z"
  }), _react.default.createElement("path", {
    d: "M204.92 141.05s-34.06-6.81-30 79.7c0 0 8.17 63.35 22.48 67.44l21.47-5.45-8.52-59.26 8.52-30.66s6.83-46.32-13.95-51.77z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M207.99 141.05s-34.06-6.81-30 79.7c0 0 8.17 63.35 22.48 67.44l21.46-5.45-8.52-59.26 8.52-30.65s6.84-46.33-13.94-51.78z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M206.29 141.05s-34.06-6.81-30 79.7c0 0 8.17 63.35 22.48 67.44l21.46-5.45-8.52-59.26 8.52-30.65s6.83-46.33-13.94-51.78z",
    fill: "#3ad29f"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M200.43 289.95v-2.17l16.86-4.28.78 1.83-17.64 4.62zM201.69 127.26l35.43 30.65 1.02-.68-35.76-30.31-.69.34z"
  }), _react.default.createElement("path", {
    fill: "#3ad29f",
    d: "M211.74 126.92l19.93-3.75 17.37 23.16-10.05 6.07-27.25-25.48z"
  }), _react.default.createElement("path", {
    d: "M257.18 73.21L244.26 86.9v8.39a42.14 42.14 0 0 1-3.15 16l-8.68 21.16a5.7 5.7 0 0 1-7.38 3.14l-7.31-2.9a5.7 5.7 0 0 1-3.12-7.6l2.05-4.68a.42.42 0 0 0-.73-.41l-4.17 5.94a5.7 5.7 0 0 1-6 2.25l-4-1a5.15 5.15 0 0 1-2.51-8.53.42.42 0 0 0-.58-.61l-5.31 4.38a5.7 5.7 0 0 1-6.69.41l-2.56-1.63a5.71 5.71 0 0 1-1.2-8.61c3.07-3.47 7.79-7.67 13.73-9.34 6.23-1.75 8.45-12.73 9.22-21.83a31.14 31.14 0 0 1 20-26.73c9.28-3.44 20.68-3.16 31.54 9.11a7 7 0 0 1-.23 9.4z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M245.17 279.17l-.11 1.71 6.92-.86-.36-.85h-6.45z"
  }), _react.default.createElement("path", {
    d: "M244.95 280.87h2.55s-7.1 65.71-14 66.91l-.54-.8s11.3-53.51 11.99-66.11z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M797.74 326.2l2.8-5.51-30-15.22-.73 1.45-.89-.45-4.3 8.47c-.72-4-1.57-7.73-2.46-11.19-1.39-8-3-15.5-4.54-21.88-.06-.55-.12-1.1-.18-1.62-2.52-22.36-16-32.85-26.06-37.63a36.82 36.82 0 0 0 27-51.57c3.51-2.89 4.45-7.74.53-15.58 0 0-68.41-36-80.08 14.38a54.35 54.35 0 0 0 1.68 29.95 62 62 0 0 0 8 15.76c-17.61 2.95-49 11.57-57 36.05-8.91 27.08-3.85 78.44-1.25 99.4a9.73 9.73 0 0 0 1.61 4.27 8.38 8.38 0 0 0 1.92 2.9V428l.91-.25v1.16s.41-.1 1.15-.32c1 46.85 7.42 120.15 7.91 125.69v-.12.23c-5 39.55-10 130-10 130v.23-.23h10v37.18a4.66 4.66 0 0 0 2.52 4.14c4.9 2.52 15.72 8 21.57 10.05 7.73 2.73 25.91 0 25.91 0 .91-4.55-13.64-8.64-13.64-8.64l-17.28-19.07v-23.64h3.64v-.05.28C678.68 672.93 710 453 710.61 448.75l-7.26 217.93v.23-.23h5.43v35.22a4.9 4.9 0 0 0 2.65 4.36c5 2.55 15.64 7.94 21.44 10 7.73 2.73 25.91 0 25.91 0 .91-4.55-13.64-8.64-13.64-8.64l-17.24-19.09v-21.85h6.82c5.74-23 15.34-193 18.24-246.34 4.61 3.14 8.13 2.65 8.13 2.65v-.43a6.65 6.65 0 0 0 .78 0 6 6 0 0 0 1 0s-.22-17.13-.75-40l10.71-9.87.14.07.19-.37.95-.87.49.25.66-1.31L788.82 358l.93-.86-1.25-2.39c7.43-4.62 11.73-13 14.15-20.09a6.43 6.43 0 0 0-4.91-8.46z",
    transform: "translate(-147.13 -163)",
    fill: "url(#prefix__d)",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#fec9b1",
    d: "M580.18 488.32v36.04h-18.24v-39.95l18.24 3.91z"
  }), _react.default.createElement("path", {
    d: "M579.96 514.59L596.68 533s13.9 3.91 13 8.25c0 0-17.37 2.61-24.75 0-5.55-2-15.75-7.1-20.48-9.54a4.68 4.68 0 0 1-2.53-4.16v-13.18z",
    fill: "#381e1d"
  }), _react.default.createElement("path", {
    fill: "#fec9b1",
    d: "M518.08 506.99v36.04h-18.24v-39.95l18.24 3.91z"
  }), _react.default.createElement("path", {
    d: "M517.87 533.26l16.72 18.46s13.9 3.91 13 8.25c0 0-17.37 2.61-24.75 0-5.6-2-15.93-7.19-20.61-9.6a4.45 4.45 0 0 1-2.41-4V533z",
    fill: "#381e1d"
  }), _react.default.createElement("path", {
    d: "M604.93 243.4S593.2 467.91 586.69 494h-30l6.95-208.44s-30.4 214.09-42.12 225.38h-31.23s4.78-86.42 9.55-124.2c0 0-13-145.91-5.21-156.77h107.24z",
    fill: "#4d8af0"
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M503.31 351.31c-1.19 9.43-2.38 21.89-3.5 35.28-.67-7.53-12.79-145.88-5.18-156.44h1.08c.94 46.49 7.6 121.16 7.6 121.16zM490.29 511.12s4.67-84.4 9.39-122.85M567.15 250.13l-6.95 208.44-3.47 35.61 6.95-208.44s-30.4 214.09-42.12 225.38"
  })), _react.default.createElement("path", {
    d: "M626.21 185.21a53.16 53.16 0 0 1 16.4-15.69 6.13 6.13 0 0 1 8.95 7.25c-3.67 10.78-11.81 24.49-29.26 22.34z",
    fill: "#fec9b1"
  }), _react.default.createElement("path", {
    d: "M605.8 126.15s.39.85 1 2.41c3.27 8.1 13.12 35.35 9.84 62.29l12.16-12.59 10.42 20-33.44 30.83z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M600.8 107.26s2.41 1 3 2.61c3.27 8.1 15.22 54.92 11.94 81.86l12.16-12.59 10.42 20-33.44 30.83z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    fill: "#333",
    d: "M581.92 92.28l14.76 144.61h-72.95l18.67-142 39.52-2.61z"
  }), _react.default.createElement("path", {
    d: "M572.79 85.33s31.7 4.78 35.61 39.52 5.21 135.92 5.21 135.92-27.74 3.91-28.22-82.07-12.6-93.37-12.6-93.37z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M571.06 85.77s31.7 4.78 35.61 39.52 5.2 135.92 5.2 135.92-27.79 3.91-28.23-82.07-12.58-93.37-12.58-93.37z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M571.93 85.33s31.7 4.78 35.61 39.52 5.21 135.92 5.21 135.92-27.79 3.91-28.23-82.07-12.59-93.37-12.59-93.37z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    fill: "#f5f5f5",
    d: "M623.31 213.191l-28.652-14.541 24.766-48.795 28.651 14.542z"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M624.857 212.237l-28.65-14.542 24.765-48.794 28.651 14.541z"
  }), _react.default.createElement("path", {
    d: "M584.52 188.68a52.86 52.86 0 0 1 19.44-17.36 4.89 4.89 0 0 1 6.91 5.68c-3.08 11-11 28-30.27 25.58zM554.99 60.58s-2.61 14.76-12.59 20l3 17.8 20.47 18.22 10.64-22.8-3.26-11.94z",
    fill: "#fec9b1"
  }), _react.default.createElement("path", {
    d: "M491.15 209.09v57.76s66-16.5 62.53-90.32-6-94.14-6-94.14l-48.71 55.05z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M490.29 208.23V266s66-16.5 62.53-90.32-6-94.14-6-94.14L498.1 136.6z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M573.66 83.6l2.05 7.53a35.12 35.12 0 0 1-26.44-14.52 38 38 0 0 0 6.14-14.3z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 577.36,
    cy: 54.28,
    r: 35.17,
    fill: "#fec9b1"
  }), _react.default.createElement("path", {
    d: "M488.98 117.47c-8.69 26.43-3.47 77.07-1 96.21a8 8 0 0 0 8.58 7l93.64-7.23V183l-66.44-1.3 9.11-58.59s-33-38.65-43.89-5.64z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M554.2 80.76s-55.23 2.84-66.08 35.84c-8.51 25.86-3.68 74.92-1.2 94.94a9.35 9.35 0 0 0 10 8.16l92.38-7.14v-30.4l-66.43-1.29 9.12-58.62z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M609.87 24.78s-65.34-34.39-76.49 13.73a51.92 51.92 0 0 0 1.6 28.6c3.4 9.87 10.28 22.5 24 29l2.72-30.56h1.13a8.37 8.37 0 0 0 8.37-8.37V40.39s52.9 12.9 38.67-15.61z",
    fill: "#381e1d"
  }), _react.default.createElement("ellipse", {
    cx: 563.46,
    cy: 67.09,
    rx: 3.47,
    ry: 6.73,
    fill: "#fec9b1"
  }), _react.default.createElement("circle", {
    cx: 775.29,
    cy: 333.15,
    r: 3.47,
    transform: "rotate(-63.09 569.026 371.474)",
    fill: "#f5f5f5"
  }), _react.default.createElement("path", {
    d: "M586.93 454.19c-.06-11.18-6.85-21.86-11.71-28.06l2.35-3.2-6.8-40.78s-.35-3.91-.4-10.77a184.68 184.68 0 0 0 1.63-29.56c.48-4.43 1.1-9.13 1.88-14.05 2.58-16.15-2.93-26.22-9-32.23a34 34 0 0 0-12.75-8.22h-.12c.38-1.29.76-2.33 1.1-3.17.18-.4.33-.68.42-.86a27.53 27.53 0 0 0 16.22-41.08c4.1-3-1.12-4.28-1.12-4.28a27.53 27.53 0 1 0-52 17.33c-.58 8.28 1.33 18.87 13.23 23.7l.47.34a34.48 34.48 0 0 1-11.77 6.53c-7.41.84-17.4 6.91-25.24 29.67-7.9 22.94-9.66 56.59-9.65 82.09 0 17.9.82 31.95 1.08 35.8h-.95C472.56 466.77 498 555.81 498 555.81l-3.74 110.12h1.88l-3.32 24.87s11.16 4.57 14.5 3.53 9.2 3.17 9.2 3.17 24.93 7.88 29.82.8c1.86-2.69 1.4-4.68-.37-6.39 7.66 1.86 20.76 4.18 24.16-.75 4.9-7.08-6.21-9.24-15.22-14.58-5.89-3.49-9.56-13.49-11.39-20h1.89l23.11-114.87V467q1.8.89 3.4 1.58v231.51h10.2V471.78a5 5 0 0 0 5.71-5.51c-.08-.75-.19-1.48-.32-2.19 3.25 1.61 5.84 7 7.18 11 2 6.12 8.84-6.46 8.84-6.46-5.44-10.82-11.37-14.28-16.6-14.43z",
    transform: "translate(-147.13 -163)",
    fill: "url(#prefix__e)",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#381e1d",
    d: "M423.77 299.06h9.83v229.29h-9.83z"
  }), _react.default.createElement("path", {
    d: "M423.76 299.06s16.71-21 30.46 6.22c0 0-6.55 12.12-8.52 6.22s-6.67-14.71-12.18-9.48",
    fill: "#381e1d"
  }), _react.default.createElement("path", {
    d: "M422.29 259s24.71 24.34 12.58 44.9a4.86 4.86 0 0 1-7.6 1c-4.2-4.15-10.83-14.46-19-40z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M404.93 130.86s25.55 7.86 20.64 38.65-2.95 52.41-2.95 52.41l6.55 39.31-11.8 16.05s-20.3-20.28-27.18-40.95-6.23-102.2 14.74-105.47z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M404.6 130.53s25.55 7.86 20.64 38.65-2.95 52.41-2.95 52.41l6.58 39.31-11.82 16.1s-20.31-20.36-27.18-41-6.23-102.19 14.73-105.47z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M374.64 481.16l-4.19 31.37s10.75 4.4 14 3.41 8.87 3.05 8.87 3.05 24 7.59 28.74.77-6-8.91-14.67-14-12.35-25-12.35-25z"
  }), _react.default.createElement("path", {
    d: "M420.49 259.75v116l-22.28 110.68h-23.58l3.6-106.13s-24.57-85.82-13.76-117.92z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M402.32 274.38s34.34 4.86 36.78 28.62a4.86 4.86 0 0 1-5.53 5.3c-5.84-.84-17.31-5.18-39-20.84zM406.57 125.29s-5.57 9.5-3.28 25.88c0 0-32.92-2.78-31.94-21.78 0 0 16.05-3.93 19.82-18.51z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M351.71 488l-4.19 31.37s10.75 4.4 14 3.41 8.87 3.05 8.87 3.05 24 7.59 28.74.77-6-8.91-14.67-14-12.35-25-12.35-25z"
  }), _react.default.createElement("path", {
    d: "M395.76 268.76v116l-22.28 110.67h-23.61l3.6-106.13s-24.57-85.82-13.76-117.92z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M394.77 268.76v116L372.5 495.43h-23.63l3.6-106.13s-24.57-85.82-13.76-117.92z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M382.98 131.19s-20.64-13.43-34.39 26.53-8.19 113.66-8.19 113.66 58.63 19 79.6-7.53v-39.64s11.14-45.2-4.59-84.51c0 0-13.76 5.57-32.43-8.51z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M382.33 132.17s-20.64-13.43-34.39 26.53-8.19 113.66-8.19 113.66 58.63 19 79.6-7.53V225.2s11.14-45.2-4.59-84.51c-.01-.01-13.76 5.56-32.43-8.52z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M382.33 131.19s-20.64-13.43-34.39 26.53-8.19 113.66-8.19 113.66 58.63 19 79.6-7.53v-39.64s11.14-45.2-4.59-84.51c-.01 0-13.76 5.57-32.43-8.51z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M361.36 151.17S386.87 159 382 189.82s-2.95 52.41-2.95 52.41l32.76 33.08-11.79 16.05s-46.51-14.09-53.39-34.72-6.23-102.2 14.73-105.47z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M359.72 152.15s25.55 7.85 20.64 38.65-2.95 52.41-2.95 52.41l32.76 33.09-11.79 16.05s-46.51-14.09-53.4-34.73-6.22-102.19 14.74-105.47z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M360.38 151.17s25.55 7.86 20.64 38.65-2.95 52.41-2.95 52.41l32.8 33.08-11.79 16.05s-46.51-14.09-53.39-34.72-6.27-102.2 14.69-105.47z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M390.68 112l15.4 14.41a15.38 15.38 0 0 0-.68 1.4 26.56 26.56 0 0 1-6.85.9c-5.88 0-11-3-15.4-6.22 3.07-2.76 5.72-5.49 7.53-10.49z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 394.61,
    cy: 88.77,
    r: 26.53,
    fill: "#e0e0e0"
  }), _react.default.createElement("circle", {
    cx: 399.04,
    cy: 101.05,
    r: 26.53,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M372.66 88.77s-9.94 26 11.08 34a12.43 12.43 0 0 0 3.1-19.9z",
    fill: "#e0e0e0"
  }), _react.default.createElement("path", {
    d: "M420.5 82.94s9.16 2.22-6.89 7.79a20.31 20.31 0 0 0-12 10.85 12.48 12.48 0 0 1-17.29 5.7l-5.08-2.79-8.84-20.64 10.47-12.12 18-2.29z",
    fill: "#e0e0e0"
  }), _react.default.createElement("ellipse", {
    cx: 391.99,
    cy: 109.73,
    rx: 2.62,
    ry: 4.59,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M382.98 131.19s17.85 28 28 28-7.11-26.26-7.11-26.26l-.41 7.26z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M632.94 543.36c-59.33 0-120.77-6-183.69-18.06-169.2-32.36-260.63-95.12-265.63-97.81l-15.08-25.09c1.41.76 121.56 64.67 286.65 96.11 151.51 28.86 373.19 35.49 568.9-96.81l-4.3 30.21c-90 60.87-173 91.33-285.43 105.3a822.19 822.19 0 0 1-101.42 6.15z",
    transform: "translate(-147.13 -163)",
    fill: "url(#prefix__f)",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M485.81 376c-59.33 0-120.77-6-183.69-18.06-169.2-32.36-260.63-95.12-265.63-97.81L21.41 235c1.41.76 121.56 64.67 286.65 96.11 151.5 28.85 373.18 35.48 568.89-96.81l-4.3 30.21c-90 60.87-173 91.33-285.43 105.3A822.19 822.19 0 0 1 485.81 376z",
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M199.11 653.49h-4.81V400.84a20.64 20.64 0 1 0-20.64 0v252.65h-4.81a21.72 21.72 0 0 0-21.72 21.72v15.13h73.71v-15.13a21.72 21.72 0 0 0-21.73-21.72z",
    transform: "translate(-147.13 -163)",
    fill: "url(#prefix__g)",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M26.96 214.58h19.79v279.87H26.96z"
  }), _react.default.createElement("path", {
    d: "M20.5 485.26h32.7a19 19 0 0 1 19 19v16.34H1.52v-16.35a19 19 0 0 1 18.98-18.99z",
    fill: "#e0e0e0"
  }), _react.default.createElement("circle", {
    cx: 36.85,
    cy: 227.3,
    r: 19.79,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 36.85,
    cy: 225.89,
    r: 19.79,
    fill: "#e0e0e0"
  }), _react.default.createElement("path", {
    d: "M26.95 486.67s12.72 4.23 19.79 0",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M859.63 214.58h19.79v279.87h-19.79z"
  }), _react.default.createElement("path", {
    d: "M853.17 485.26h32.7a19 19 0 0 1 19 19v16.34h-70.68v-16.35a19 19 0 0 1 19-19z",
    fill: "#e0e0e0"
  }), _react.default.createElement("circle", {
    cx: 869.52,
    cy: 227.3,
    r: 19.79,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 869.52,
    cy: 225.89,
    r: 19.79,
    fill: "#e0e0e0"
  }), _react.default.createElement("path", {
    d: "M859.62 486.67s12.72 4.23 19.79 0",
    opacity: 0.1
  }));
};

UndrawQueue.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawQueue;
exports.default = _default;