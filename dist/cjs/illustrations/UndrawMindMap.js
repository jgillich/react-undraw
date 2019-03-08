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

var UndrawMindMap = function UndrawMindMap(_props) {
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
    viewBox: "0 0 1103.79 707.8",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 891.82,
    y1: 790.72,
    x2: 891.82,
    y2: 522.9,
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
  }))), _react.default.createElement("ellipse", {
    cx: 843.39,
    cy: 664.8,
    rx: 192,
    ry: 43,
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M625.02 26.79c0 156.1 97.93 282.41 219 282.41M627.42 130.03c-70.75.54-138.73-15.45-203.73-33.27S294.22 58.9 224.9 50.72c-44.62-5.27-95.4-4.44-130.47 16-33.75 19.66-43.74 51.89-48.67 81.63-3.71 22.38-5.52 45.86 7.54 66.22 9.02 14.13 24.6 25.73 35.6 39.19 38.26 46.83 14.53 107.1-23.41 155.51-17.79 22.71-38.6 44.5-52.1 68.48s-19.18 51.1-5.79 74.6c13.28 23.28 43.54 40 76.09 51.45 66.13 23.1 143.21 27.7 218.26 29.16 166.14 3.25 332.71-6.63 498.83-16.5 61.47-3.66 123.22-7.34 183.48-17.15 33.46-5.45 67.92-13.44 91.74-30.61 30.25-21.8 36.68-57.11 15-82.33-36.37-42.29-133-49.68-159-95.53-14.31-25.24-1.57-54.37 17-78.92 39.94-52.64 108.35-100 110-158.62 1.1-40.25-34-79.28-86.68-96.43-55.25-18-130.79-12.79-169.85 21.61-40.23 35.42-112.57 51.08-175.05 51.55z",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M946.9 31.19V549.6c0 15.42-14.88 28-33.24 28H210.24c-18.36 0-33.23-12.54-33.23-28V31.19C177.01 15.74 191.88 0 210.24 0l703.33 1.71c18.33 0 33.33 14.03 33.33 29.48z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M946.9 31.35v24H177.01v-24A31.35 31.35 0 0 1 208.35 0H915.5a31.36 31.36 0 0 1 31.4 31.35z",
    fill: "#3f3d56"
  }), _react.default.createElement("circle", {
    cx: 214.3,
    cy: 27.67,
    r: 11.08,
    fill: "#fa5959",
    opacity: 0.8
  }), _react.default.createElement("circle", {
    cx: 246.53,
    cy: 27.67,
    r: 11.08,
    fill: "#fed253",
    opacity: 0.8
  }), _react.default.createElement("circle", {
    cx: 278.76,
    cy: 27.67,
    r: 11.08,
    fill: "#8ccf4d",
    opacity: 0.8
  }), _react.default.createElement("rect", {
    x: 457,
    y: 170.7,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("rect", {
    x: 598.84,
    y: 170.7,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M491.81 203.17l70.08 91.51 72.19-91.94"
  }), _react.default.createElement("rect", {
    x: 508.37,
    y: 291.75,
    width: 107.03,
    height: 50.79,
    rx: 8.57,
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 510.55,
    y: 292.79,
    width: 102.68,
    height: 48.73,
    rx: 8.57,
    fill: primaryColor
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M492.29 170.7l-.91-32.35M675.22 139.93l-41.14 30.77-43.27-30.77"
  }), _react.default.createElement("rect", {
    x: 456.61,
    y: 106.7,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("rect", {
    x: 640.21,
    y: 106.7,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("rect", {
    x: 555.81,
    y: 106.7,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M561.89 341.51l-.27 88.5M561.43 462.49h0zM462.42 493.11l99-30.63 99.4 30.41"
  }), _react.default.createElement("rect", {
    x: 526.62,
    y: 430.01,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("rect", {
    x: 861.88,
    y: 345.12,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    transform: "rotate(90 920.88 289.63)",
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("rect", {
    x: 861.88,
    y: 454.76,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    transform: "rotate(-90 824.78 447.37)",
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("rect", {
    x: 625.82,
    y: 492.66,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("rect", {
    x: 475.52,
    y: 588.76,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    transform: "rotate(-180 486.475 557.325)",
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("rect", {
    x: 576.46,
    y: 588.76,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    transform: "rotate(-180 587.415 557.325)",
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M801 320.45l31.16 54.49M735.11 319.78h32.71M613.23 317.15l89.28 2.63M832.16 265.63l-31.01 54.58"
  }), _react.default.createElement("rect", {
    x: 732.22,
    y: 399.07,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    transform: "rotate(90 791.225 343.575)",
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("rect", {
    x: 797.48,
    y: 399.94,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    transform: "rotate(90 856.49 344.45)",
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("rect", {
    x: 288.1,
    y: 345.12,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    transform: "rotate(90 347.105 289.625)",
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("rect", {
    x: 288.1,
    y: 454.76,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    transform: "rotate(-90 251 447.37)",
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M322.78 320.45l-31.17 54.49M388.66 319.78h-32.7M510.55 317.15l-89.28 2.63M291.61 265.63l31.01 54.58"
  }), _react.default.createElement("rect", {
    x: 417.76,
    y: 399.07,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    transform: "rotate(90 476.76 343.58)",
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("rect", {
    x: 352.49,
    y: 399.94,
    width: 70.01,
    height: 33.22,
    rx: 8.57,
    transform: "rotate(90 411.495 344.445)",
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M108.02 501.9c0 50.24 31.52 90.9 70.47 90.9",
    fill: "#46455b"
  }), _react.default.createElement("path", {
    d: "M178.49 592.79c0-50.81 35.18-91.92 78.65-91.92M133.56 506.45c0 47.72 20.1 86.34 44.93 86.34",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M178.49 592.79c0-64.92 40.66-117.45 90.9-117.45",
    fill: "#46455b"
  }), _react.default.createElement("ellipse", {
    cx: 175.43,
    cy: 607.19,
    rx: 17.52,
    ry: 2.96,
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M163.67 593.43s10-.31 13-2.45 15.37-4.71 16.12-1.27 15 17.11 3.73 17.2-26.22-1.76-29.22-3.59-3.63-9.89-3.63-9.89z",
    fill: "#a8a8a8"
  }), _react.default.createElement("path", {
    d: "M196.73 605.71c-11.28.09-26.21-1.75-29.22-3.59-2.29-1.39-3.2-6.39-3.51-8.7h-.33s.63 8.06 3.64 9.89 17.94 3.68 29.22 3.59c3.26 0 4.38-1.19 4.32-2.9-.45 1.05-1.69 1.69-4.12 1.71z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M1004.32 744.89l-27.67-40.12s-.52-9.93-2.33-12.26-.39-7.48-.39-7.48 1.94-2.84.26-3.09-.26-6.58-.26-6.58l-.13-10.07s1.55-9.67.26-12a3.82 3.82 0 0 1 .13-4.13s1.55-5.55 0-7-1.17-10.06-.78-16.89-2.71-10.71-2.71-11.74-10.22-11.1-10.22-12-6.46-4.64-10.34-5.68-5.82-1.8-5.69-2.32-6.08-2.58-6.08-2.58-5.43-.38-7.5-3.09-8.4-3.5-8.57-3.52c0-.18-.09-.36-.12-.54l-.12-.58c.49-.82.94-1.66 1.35-2.53l.36-.79a11 11 0 0 0 6.36-2 8.7 8.7 0 0 0 3.1-6.19 13.6 13.6 0 0 0-1.51-6.87c-1.14-2.33-2.8-4.73-2.23-7.25.25-1.09.9-2 1.24-3.11a8.19 8.19 0 0 0-.93-6.11c-1-1.87-2.34-3.52-3.43-5.34a20.73 20.73 0 0 1-2.73-7.54 11.88 11.88 0 0 0-1-4.11 7.62 7.62 0 0 0-2.27-2.29 22.65 22.65 0 0 0-13.9-4.21c-3.52.12-7 1.07-10.52.64a38.93 38.93 0 0 1-6.15-1.61c-4.33-1.28-9.34-1.81-13.11.67s-5.28 7.36-7.84 11.18c-2.27 3.38-5.58 6.21-7.3 9.79 0-.07 0-.14.05-.21a12.35 12.35 0 0 0-1 2.61c-.66 2.81-.11 5.75.57 8.55.36 1.45.84 3 2.09 3.82s3 .63 4.52.89c-.06.25-.12.49-.17.74a29.5 29.5 0 0 0 20.5 34.45v.78c0 .77-.06 1.51-.14 2.22s-13-2.67-16.49-.87-10.35 3.23-11.38 4.26-3.62.26-5.95 6.32-2.58 12.26-5.56 15.09-4.52 4.78-4.65 6.84.38 2.58-.78 3.23-2.84 3.35-2.33 4.38c0 0 .65 2.58-1.42 3.87a4.31 4.31 0 0 0-1.81 3.87s-.78 2.84-2.59 3.48-3 4.91-3 4.91l-5.86 6.74-11.63-12.86a4.9 4.9 0 0 0-6.91-.35l-5.61 5.2a11.24 11.24 0 0 0-5.71 3.4 15 15 0 0 0-3 4.4l-3.12 2.82a4.8 4.8 0 0 0-1.61 3.44 4.85 4.85 0 0 0 .81 5.32l7.44 8.24v.07a13 13 0 0 0-7.2 2.93c-11.12 9.8-11.25 18.83-9.57 23s15.77 20 15.77 20 8.19 10.65 20 16.31l-.08.09c-.24.25-.47.52-.7.81l-.19.25-.18.25-.21.31-.16.25-.23.37a2 2 0 0 1-.14.25c-.09.16-.18.33-.26.5l-.09.17c-.11.22-.21.46-.32.7s-.07.18-.1.26-.14.34-.2.52l-.12.33c-.06.16-.11.33-.17.5s-.07.24-.11.37l-.15.56-.09.35c-.08.3-.14.61-.21.93l-.06.37c0 .21-.08.43-.11.66s-.05.31-.07.47 0 .42-.08.64 0 .33-.05.49 0 .49 0 .74v.45c0 .4 0 .82-.05 1.25-.26 15.09.62 17.28.62 17.28s1.83 4.81 6.87 5.15a8.93 8.93 0 0 0 2.21-.12c6.72-1.16 22.5-3.87 28.06-2.83 3.34.62 9.53-.3 13.93-1.13l1.17-.23.8 2.57 2.56-.7 2.17 1.25 1.37.79c2.55 8.65 12.91 5.7 12.91 5.7l2.46 1.42 25 .64a50.53 50.53 0 0 0 8.84 4.25 8.88 8.88 0 0 0 1.25.27 57.46 57.46 0 0 0 6.95.13c1.92 0 3.4-.13 3.4-.13s-.26-6.77-.62-14.36c9.53-.4 18-1 23.11-1.89 13.26-2.34 18.81-14.5 20.86-20.98a60.65 60.65 0 0 1 1.3 8 58.61 58.61 0 0 0 2.07 7 23.67 23.67 0 0 0 2.85 5.16c9.83-3.35 3.88-8.38 1.81-10.57s1.42-4 1.42-4 2.72-1.81 2.46-3.49-.39-3.48 8.4-3.35 8.41-7.22 8.41-7.22zm-136.54-82.37c.11.74 1.34 8.68 2.45 10.77a14.37 14.37 0 0 1 .29 4.25c-5.21-.41-10.64-.64-10.64-.64a1.24 1.24 0 0 1 .28.67l-.82-.19c-.38-.09-.78-.18-1.19-.29l9.6-14.59zm-19 30.25l9 1.43.76.12a30.29 30.29 0 0 0-.47 4.26c0 .13.2.29.49.48a11.67 11.67 0 0 0-.17 2.13c.14.72 4.36 2.26 9.2 3.54-.07.26-.14.5-.2.74-4.27-2.25-11-3.3-11.78-5S832 690.84 832 690.84s-.84-.45-2.28-1.14l6 1.14 1.66-.17a89.92 89.92 0 0 0 11.38 2.1z",
    transform: "translate(-48.1 -96.1)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M926.79 654.4s-3.59 21.65-21.79 24.86-78.94 2.56-78.94 2.56-34.73-5-47.29-34.34-20.63-41-9.87-41.53 68.82 19.61 72.15 19.87 88.94-44.6 85.74 28.58z",
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M926.79 654.4s-3.59 21.65-21.79 24.86-78.94 2.56-78.94 2.56-34.73-5-47.29-34.34-20.63-41-9.87-41.53 68.82 19.61 72.15 19.87 88.94-44.6 85.74 28.58z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M763.9 678.49s1.81 4.77 6.8 5.12a8.77 8.77 0 0 0 2.19-.12c6.67-1.16 22.3-3.85 27.81-2.82 3.32.61 9.45-.3 13.82-1.12 2.9-.55 5-1.06 5-1.06s-5.12-17-5.77-17.56-23.06-14-23.06-14l-17.79-1.24a9.39 9.39 0 0 0-6 3.54c-1.87 2.27-3.48 6-3.59 12.1-.31 14.98.59 17.16.59 17.16z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M763.9 678.49s1.81 4.77 6.8 5.12a73.93 73.93 0 0 1-4.82-7l.09-12.43a21.89 21.89 0 0 1 7-18.45h-.07s-9.35.64-9.61 15.64.61 17.12.61 17.12z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M840.9 651.32l16.53-12.94 26-25.63s-2.81-.14-7.05-.32c-1 .67-4 2.78-4.12 5.35-.12 3.14-7 .22-10.62 2s-21.1 24.28-24.18 24.12-5.51-1.56-6.79.62l-.09.14zM766.9 649.22c.59.28 1.19.56 1.79.82 12.56 5.38 28.07 16.66 29.22 18.71.71 1.25 9.7 6.71 16.64 10.8 2.9-.55 5-1.06 5-1.06s-5.12-17-5.77-17.56-23.06-14-23.06-14l-17.82-1.24a9.39 9.39 0 0 0-6 3.53z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M731.99 612.49c1.67 4.1 15.64 19.86 15.64 19.86s8.84 11.54 21.4 16.92 28.06 16.66 29.22 18.71c.74 1.32 10.75 7.35 17.8 11.49l1.58.92 3.5 2 1.85 1.07s4.29-3.45 8.57-6.92 8.41-6.86 8.48-7c.12-.38 1.79-4.74 1.4-5-.2-.13-1.08-1.91-2.69-4a18.25 18.25 0 0 0-6.53-5.4c-5.9-2.69-8.46-8.82-8.46-8.82s-.56-.4-1.41-.94a17.09 17.09 0 0 0-5.77-2.57c-2.82-.35-8.07-6.12-8.07-6.12s-3.59-2.31-5-5.25-21.22-16.46-23.06-17.73l48.18 30.95 11.53 7.41 16.54-12.94 26-25.63s-3.5-.17-8.58-.39c-12.65-.55-35.1-1.41-37.94-.77a21.45 21.45 0 0 1-7 .46s-6.4.29-10.63-1.94-10.9-3.28-11.67-4.93-23.45-9.61-23.45-9.61-30.88-16.4-41.91-6.66-11.18 18.73-9.52 22.83z",
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M831.57 518.43l4 13.19 5.13 29.74 18.83 1.28 5.46-9 5.44-9s3.39-12 5.83-23.64c2.15-10.28 3.56-20.26 1.22-21.34-2.08-1-3.45-4.43-4.34-8.15-.11-.46-.22-.93-.31-1.39a73.86 73.86 0 0 1-1.25-9.56s-39.47-2.05-34 14.23a25.82 25.82 0 0 1 1.49 8.65 21.8 21.8 0 0 1-.14 2.2 18.45 18.45 0 0 1-7.36 12.79z",
    fill: "#ee8e9e"
  }), _react.default.createElement("path", {
    d: "M823.36 516.25l1.42 22.42 3.2 19.1 3.59 8.84 3.2 48.38s30.9 3.57 38.42-.06a3.33 3.33 0 0 0 1.36-1.07c9.07-13.7 6.1-53.4 6.1-53.4l3.46-25.63-2.31-13.3-5.57-.6-4.29-.45s-1 1.19-2.37 3c-3.8 5-10.79 14.88-10.32 19 .64 5.64-.77 11.4-3 12.3s-4 2.44-4.35.9-.77-1.92-.39-4.1-1.67-8.85-1.67-8.85-3.46-7.81-3.2-11.15-.38-7.17-1.41-8.07-2.43-1.79-1.28-5.89-5.05-12.05-5.05-12.05z",
    fill: "#e3e8f4"
  }), _react.default.createElement("path", {
    d: "M864.18 572.26l1.29 38.32 7.4 4.1a3.4 3.4 0 0 0 1.36-1.06c9.07-13.71 6.1-53.41 6.1-53.41l3.46-25.63-2.31-13.3-5.57-.6c2.15-10.28 3.56-20.26 1.22-21.34-2.08-1-3.45-4.43-4.34-8.15l-4 27.11s.33 2.45.45 5a14.26 14.26 0 0 1-.32 4.77c-.9 2.31-.26 6.41-.26 6.41-2.31 4.07-3.47 11.61-4 18.89-.76 9.66-.48 18.89-.48 18.89z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M872.9 490.58s6.46.8 8.51 3.5 7.43 3.07 7.43 3.07 6.15 2 6 2.56 1.79 1.29 5.63 2.31 10.26 4.74 10.26 5.64 10.17 10.89 10.17 11.92 3.08 4.87 2.69 11.66-.77 15.38.77 16.79 0 6.92 0 6.92a3.78 3.78 0 0 0-.13 4.1c1.28 2.31-.25 11.92-.25 11.92l.12 10s-1.41 6.28.26 6.54-.26 3.08-.26 3.08-1.41 5.12.39 7.43 2.31 12.17 2.31 12.17l27.42 39.86s.39 7.3-8.33 7.18-8.59 1.66-8.33 3.33-2.43 3.46-2.43 3.46-3.46 1.79-1.41 4 7.94 7.18-1.8 10.51a23.76 23.76 0 0 1-2.82-5.13 58 58 0 0 1-2.05-6.92s-.9-9.74-2.69-11-1.54-7.43-1.54-7.43 2.57-5-1-7.05-55.62-30.89-55.62-30.89l-1.3-38.37s-.9-28.32 4.48-37.81c0 0-.64-4.1.26-6.41s-.13-9.74-.13-9.74z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M839.33 505.96s-12.89-2.66-16.35-.86-10.25 3.2-11.28 4.23-3.58.25-5.89 6.28-2.56 12.17-5.51 15-4.49 4.74-4.62 6.79.39 2.56-.76 3.21-2.82 3.33-2.31 4.35 26.65 23.58 26.65 23.58 1.29 8.59 2.44 10.77-1.28 32.16-3.84 34.22 17.3 1.86 17.3 1.86.89-19.68 1.66-20.7-.51-22-.51-22-.13-17.94 1.54-22.68 1.48-20.5 1.48-20.5 1.47-9.46 3.26-11.67-3.26-11.88-3.26-11.88z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M838.9 505.57s-12.88-2.65-16.34-.86-10.22 3.19-11.24 4.19-3.59.26-5.9 6.28-2.56 12.18-5.51 15-4.48 4.74-4.61 6.79.38 2.56-.77 3.2-2.82 3.33-2.31 4.36 26.68 23.62 26.68 23.62 1.28 8.58 2.44 10.76-1.29 32.17-3.85 34.22 17.3 1.86 17.3 1.86.9-19.67 1.67-20.7-.52-22-.52-22-.12-17.94 1.54-22.68 1.42-20.55 1.42-20.55 1.47-9.46 3.26-11.66-3.26-11.83-3.26-11.83z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M837.59 494.72a25.82 25.82 0 0 1 1.49 8.65 29.36 29.36 0 0 0 33.72-13.32 73.86 73.86 0 0 1-1.25-9.56s-39.47-2.05-33.96 14.23z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M818.11 474.47a29.35 29.35 0 1 0 .64-6.1 29.35 29.35 0 0 0-.64 6.1z",
    fill: "#ee8e9e"
  }), _react.default.createElement("path", {
    d: "M799.27 542.39l-7 2.18s.65 2.56-1.41 3.84a4.29 4.29 0 0 0-1.79 3.85s-.77 2.82-2.56 3.46-2.95 4.87-2.95 4.87l-5.9 6.79s-2.17 1.79-1.79 2.69-2.31 1.15-2.31 1.15l1.34 22.82 12.18 2.3 7.56-.77 6.15-2.3 5.38-3.21 2.44-6.28 10.76-16.4z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M775.31 573.02s-15.64-22.56-27.3-10.38 4.74 31.91 8.59 31.27 22.17-1.67 22.17-1.67z",
    fill: "#ee8e9e"
  }), _react.default.createElement("rect", {
    x: 770.4,
    y: 638.26,
    width: 81.83,
    height: 63.54,
    rx: 1.54,
    transform: "rotate(27.04 986.998 521.83)",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M744.398 535.158l61.262 31.268-23.563 46.165-61.261-31.268z"
  }), _react.default.createElement("circle", {
    cx: 730.3,
    cy: 557,
    r: 1.13,
    fill: "#e6e8ec"
  }), _react.default.createElement("circle", {
    cx: 796.61,
    cy: 590.97,
    r: 1.86,
    fill: "#e6e8ec"
  }), _react.default.createElement("path", {
    d: "M765.18 577.76c-.12 16.92 34.86 20.5 34.86 20.5l8.94 1.42 4 .64 1.67-16.54s-1.83-.27-4.12-.8c-3.39-.79-7.78-2.16-8.7-4.07-1.53-3.2-36.52-18.07-36.65-1.15z",
    fill: "#ee8e9e"
  }), _react.default.createElement("path", {
    d: "M818.75 468.37a3.41 3.41 0 0 1 2.15 1c1 1.05 1 2.91 2.33 3.55a2.58 2.58 0 0 0 1.53.18c3.41-.48 5.38-4.33 8.65-5.39a8.67 8.67 0 0 1 5.73.5 4.18 4.18 0 0 1 1.9 1.21c1.1 1.42.33 3.51.84 5.22.7 2.38 3.54 3.33 6 3.64s5.23.48 6.88 2.34a6.27 6.27 0 0 1 1.22 5 3.91 3.91 0 0 0 0 1.83c.68 1.93 4 1.64 4.87.12.64-1.1.45-2 1.94-2.32a6.32 6.32 0 0 1 3.14.54 23.08 23.08 0 0 0 8.11 1.24 29.35 29.35 0 1 0-55.27-18.58z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M855.96 486.61a4 4 0 0 1 0-1.84 6.27 6.27 0 0 0-1.22-5c-1.65-1.86-4.42-2-6.88-2.34s-5.3-1.26-6-3.64c-.51-1.71.26-3.8-.84-5.21a4.14 4.14 0 0 0-1.9-1.22 8.67 8.67 0 0 0-5.73-.5c-3.27 1.06-5.24 4.91-8.65 5.39a2.58 2.58 0 0 1-1.53-.18c-1.29-.64-1.34-2.5-2.33-3.55-1.56-1.65-4.51-.58-6.42-1.81-1.24-.8-1.72-2.36-2.07-3.79-.67-2.79-1.22-5.71-.56-8.5 1.11-4.77 5.37-8 8.09-12.11 2.54-3.79 4-8.59 7.77-11.11s8.7-1.94 13-.66a37.88 37.88 0 0 0 6.09 1.59c3.46.43 6.94-.51 10.43-.63a22.46 22.46 0 0 1 13.77 4.18 7.64 7.64 0 0 1 2.25 2.28 11.49 11.49 0 0 1 1 4.08 20.82 20.82 0 0 0 2.71 7.5c1.07 1.8 2.43 3.43 3.4 5.3a8.18 8.18 0 0 1 .92 6.07c-.33 1.05-1 2-1.23 3.09-.57 2.5 1.08 4.89 2.21 7.2a13.55 13.55 0 0 1 1.5 6.83 8.61 8.61 0 0 1-3.08 6.14 11 11 0 0 1-6.49 2 23 23 0 0 1-8.27-1.27 6.32 6.32 0 0 0-3.14-.54c-1.49.3-1.3 1.22-1.94 2.32-.86 1.56-4.18 1.85-4.86-.07z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M840.15 652.09l16.54-12.94 26-25.63s-3.5-.17-8.58-.39a5.63 5.63 0 0 0-1.82 3.5c-.12 3.13-7 .22-10.62 2s-21.13 24.27-24.21 24.13-5.51-1.56-6.79.62l-.09.14a3.68 3.68 0 0 1-2 1.16z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M806.83 651.19l8.31 26.52 1.3 4.16 4-1.08 8.72-2.4L868 667.72a33.62 33.62 0 0 0 14-3.73 42.44 42.44 0 0 1 24.14-5.26c5.13.48 10.84-1.73 15.58-10.49 0 0 10.76-31.78-16.41-40.88s-28.46 4.84-28.46 4.84l-.37.23c-1 .67-4 2.78-4.12 5.35-.12 3.14-7 .22-10.62 2s-21.2 24.28-24.28 24.12-5.51-1.56-6.79.62l-.09.14c-.95 1.31-3.81 1.61-5.69 1.67h-1.78l-.24.07-2 .59z",
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M808.98 599.68l4 .64 1.67-16.54s-1.83-.27-4.12-.8c.6 2.3-.77 11.22-1.55 16.7z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M913.77 522.43s11.92-3.46 9 30.38-25 55.23-25 55.23-25.37 11.15-36.78 9.36a198.28 198.28 0 0 0-19.73-2.18 29 29 0 0 0-11.54-3.08c-6.4-.25-19.86-4.23-20.12-5.51s3.34-20.12 1.8-21.53c0 0 17.94.74 19.73 2s4.36.37 6.28 0 7.82-5.49 19.48-1c0 0 4 .38 5.51-.64s4-.26 4-.26a11.49 11.49 0 0 0 2.79-1.41c.38-.51 3.46 0 3.46 0a1.36 1.36 0 0 0 1.92-.9 8.34 8.34 0 0 1 1.79-2.82s3.46-19.48 10-26.78c0 0 1.92-1.67 1.41-3.72s10.62-31.24 26-27.14z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M913.46 519.83s11.92-3.46 9 30.38-25 55.23-25 55.23-25.38 11.15-36.78 9.36-19.78-2.18-19.78-2.18a29 29 0 0 0-11.53-3.08c-6.41-.25-19.86-4.23-20.12-5.51s3.33-20.12 1.79-21.53c0 0 17.94.74 19.74 2s4.36.36 6.28 0 7.82-5.5 19.48-1c0 0 4 .38 5.51-.64s4-.26 4-.26a11.29 11.29 0 0 0 2.78-1.41c.38-.51 3.46 0 3.46 0a1.36 1.36 0 0 0 1.92-.9 8.59 8.59 0 0 1 1.8-2.82s3.46-19.48 10-26.78c0 0 1.93-1.67 1.41-3.72s10.66-31.24 26.04-27.14z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M820.9 646.98l16.92 20.48c.07-.06.11-.1.11-.12.13-.38 1.79-4.74 1.41-5s-3.33-6.67-9.23-9.36a17.49 17.49 0 0 1-7.24-6.6z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M821.13 682.42l1.85 1.07s4.29-3.45 8.57-6.92 8.41-6.86 8.48-7c.12-.38 1.79-4.74 1.4-5-.2-.13-1.08-1.91-2.69-4-11.48-3.22-4.17 4.75-3.2 5.11 0 0-14-3.2-14.74 12a18 18 0 0 0 .33 4.74z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M835.28 688.9l2.44 1.41 24.73.64a50 50 0 0 0 8.76 4.21 7.66 7.66 0 0 0 1.24.28 58.55 58.55 0 0 0 6.89.13c1.9 0 3.36-.13 3.36-.13s-1.17-31.2-2-34.48c-.42-1.57-2.5-1.22-4.54-.44a30 30 0 0 0-4.43 2.24s-10.51 1-12.18 1.93-6.4-.52-9.35 0-8.2-3.47-8.2-3.47c-14.36-4.74-6.28 4.1-5.26 4.48 0 0-14-3.2-14.73 12s13.27 11.2 13.27 11.2z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M871.04 676.82c.27 6.46 5.3 14.48 8.3 18.72 1.9 0 3.36-.13 3.36-.13s-1.17-31.2-2-34.48c-.42-1.57-2.5-1.22-4.54-.44-2.53 4.65-5.34 11.13-5.12 16.33z",
    fill: "#565387"
  }), _react.default.createElement("path", {
    d: "M871.04 676.82c.27 6.46 5.3 14.48 8.3 18.72 1.9 0 3.36-.13 3.36-.13s-1.17-31.2-2-34.48c-.42-1.57-2.5-1.22-4.54-.44-2.53 4.65-5.34 11.13-5.12 16.33z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M866.81 677.68c1.7 6.23 1.68 13.22 4.4 17.45a7.66 7.66 0 0 0 1.24.28 58.55 58.55 0 0 0 6.89.13c1.9 0 3.36-.13 3.36-.13s-1.17-31.2-2-34.48c-.42-1.57-2.5-1.22-4.54-.44a30 30 0 0 0-4.43 2.24s-7.1 6.97-4.92 14.95z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M781.48 614.45s12.29 4 22.7 18.16z",
    opacity: 0.1
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M881.31 460.67c0 .1 0 .19-.07.28a10.86 10.86 0 0 1-.43 1.07 8.1 8.1 0 0 1 .5-1.35zM811.8 454.46a12 12 0 0 1 1-2.59c-.07.22-.13.44-.19.67-.65 2.79-.11 5.71.57 8.49.35 1.44.83 3 2.07 3.8 1.91 1.22 4.86.16 6.42 1.81 1 1 1 2.91 2.33 3.55a2.58 2.58 0 0 0 1.53.18c3.4-.48 5.38-4.33 8.65-5.39a8.67 8.67 0 0 1 5.73.5 4.17 4.17 0 0 1 1.9 1.22c1.09 1.41.33 3.5.83 5.21.71 2.38 3.55 3.32 6 3.64s5.23.48 6.88 2.34a6.27 6.27 0 0 1 1.22 5 3.78 3.78 0 0 0 0 1.83c.68 1.92 4 1.64 4.87.12.64-1.1.44-2 1.94-2.33a6.44 6.44 0 0 1 3.14.55 23.26 23.26 0 0 0 8.28 1.24 11 11 0 0 0 6.49-2 7.54 7.54 0 0 0 2-2.42 8.21 8.21 0 0 1-2.77 4.34 11 11 0 0 1-6.49 2 23 23 0 0 1-8.3-1.32 6.32 6.32 0 0 0-3.14-.54c-1.49.3-1.3 1.22-1.94 2.32-.87 1.52-4.19 1.81-4.87-.11a4 4 0 0 1 0-1.84 6.27 6.27 0 0 0-1.22-5c-1.65-1.86-4.42-2-6.88-2.34s-5.3-1.26-6-3.64c-.51-1.71.26-3.8-.84-5.21a4.19 4.19 0 0 0-1.9-1.22 8.67 8.67 0 0 0-5.73-.5c-3.27 1.06-5.25 4.91-8.65 5.39a2.58 2.58 0 0 1-1.53-.18c-1.29-.64-1.34-2.5-2.33-3.55-1.56-1.65-4.51-.58-6.42-1.81-1.24-.8-1.72-2.36-2.07-3.79-.69-2.71-1.23-5.63-.58-8.42z"
  })), _react.default.createElement("path", {
    d: "M883.3 557.03c-2.35 3.17-5 6.1-7.11 9.45s-3.54 7.27-3.11 11.19c2.15-2.2 3.13-5.25 4.49-8 2.29-4.68 5.72-8.65 8.62-13 .55-.82 4.09-5.57 2.3-5.8-1.48-.17-4.39 5.08-5.19 6.16z",
    opacity: 0.1
  }));
};

UndrawMindMap.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawMindMap;
exports.default = _default;