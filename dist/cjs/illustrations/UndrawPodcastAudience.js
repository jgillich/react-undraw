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

var UndrawPodcastAudience = function UndrawPodcastAudience(_props) {
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
    viewBox: "0 0 1050 813.13",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: -1493.92,
    y1: 802.7,
    x2: -1493.92,
    y2: 426.99,
    gradientTransform: "matrix(-1 0 0 1 -573.82 0)",
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
    x1: 2327.03,
    y1: 836.86,
    x2: 2327.03,
    y2: 294,
    gradientTransform: "translate(-1992)",
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("g", {
    "data-name": "flowers"
  }, _react.default.createElement("path", {
    d: "M272.3 325.94s-58-73.46-53.51-146.5c1.89-30.65-5.66-61.18-22.53-86.84A237.94 237.94 0 0 0 169 58.56",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M171.57 12.5c4.1 10.21-2.49 47.25-2.49 47.25s-30.39-22.19-34.49-32.39a19.936 19.936 0 0 1 37-14.86zM224.86 56.78c-2.11 10.81-27.78 38.32-27.78 38.32s-13.45-35.14-11.34-45.94a19.93 19.93 0 1 1 39.12 7.62zM262.35 153.98c-7.27 8.26-43.31 19.05-43.31 19.05s6.13-37.12 13.4-45.38a19.924 19.924 0 0 1 29.91 26.33zM274.17 233.91c-5.77 9.38-39.48 26.1-39.48 26.1s-.23-37.62 5.54-47a19.93 19.93 0 0 1 33.94 20.89zM159.05 112.67c10.19 4.17 47.27-2.16 47.27-2.16s-22-30.54-32.16-34.72a19.93 19.93 0 0 0-15.11 36.88zM174.05 205.98c11 .93 44.46-16.21 44.46-16.21s-30.11-22.57-41.07-23.5a19.93 19.93 0 1 0-3.39 39.71zM201.08 294.66c10.65 2.78 46.55-8.46 46.55-8.46s-25.86-27.33-36.51-30.1a19.92 19.92 0 0 0-10 38.56z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M171.57 12.5c4.1 10.21-2.49 47.25-2.49 47.25s-30.39-22.19-34.49-32.39a19.936 19.936 0 0 1 37-14.86zM224.86 56.78c-2.11 10.81-27.78 38.32-27.78 38.32s-13.45-35.14-11.34-45.94a19.93 19.93 0 1 1 39.12 7.62zM262.35 153.98c-7.27 8.26-43.31 19.05-43.31 19.05s6.13-37.12 13.4-45.38a19.924 19.924 0 0 1 29.91 26.33zM274.17 233.91c-5.77 9.38-39.48 26.1-39.48 26.1s-.23-37.62 5.54-47a19.93 19.93 0 0 1 33.94 20.89zM159.05 112.67c10.19 4.17 47.27-2.16 47.27-2.16s-22-30.54-32.16-34.72a19.93 19.93 0 0 0-15.11 36.88zM174.05 205.98c11 .93 44.46-16.21 44.46-16.21s-30.11-22.57-41.07-23.5a19.93 19.93 0 1 0-3.39 39.71zM201.08 294.66c10.65 2.78 46.55-8.46 46.55-8.46s-25.86-27.33-36.51-30.1a19.92 19.92 0 0 0-10 38.56z",
    opacity: 0.25
  }), _react.default.createElement("path", {
    d: "M271.8 322.88S189 279.23 163.52 210.63c-10.7-28.79-30-53.64-55.79-70.26A237.8 237.8 0 0 0 69 120.28",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M52.7 77.14c7.88 7.68 16.87 44.21 16.87 44.21s-36.77-8-44.66-15.64A19.93 19.93 0 1 1 52.7 77.14zM119.36 96.04c2.45 10.73-9.87 46.28-9.87 46.28s-26.53-26.68-29-37.41a19.925 19.925 0 1 1 38.85-8.87zM193 169.7c-3.3 10.5-31.88 35-31.88 35s-9.44-36.42-6.14-46.92a19.93 19.93 0 0 1 38 11.95zM236.22 237.99c-1.48 10.91-25.51 39.85-25.51 39.85s-15.46-34.3-14-45.2a19.93 19.93 0 0 1 39.5 5.35zM81.85 173.79c11-.31 42.34-21.13 42.34-21.13s-32.47-19-43.47-18.7a19.923 19.923 0 1 0 1.13 39.83zM133.37 253.02c10.4-3.59 34.07-32.84 34.07-32.84s-36.66-8.43-47.07-4.84a19.93 19.93 0 0 0 13 37.68zM194 323.15c10.86-1.78 39.14-26.61 39.14-26.61s-34.72-14.5-45.58-12.72a19.93 19.93 0 0 0 6.44 39.33z",
    fill: primaryColor
  })), _react.default.createElement("ellipse", {
    cx: 525,
    cy: 740.13,
    rx: 525,
    ry: 73,
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 211,
    y: 16.13,
    width: 568,
    height: 684,
    rx: 19.8,
    fill: "#464353"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M260 85.13h470v546H260z"
  }), _react.default.createElement("circle", {
    cx: 495,
    cy: 667.13,
    r: 20,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 495,
    cy: 56.13,
    r: 9.5,
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M495 47.12a9 9 0 1 1-9 9 9 9 0 0 1 9-9m0-1a10 10 0 1 0 10 10 10 10 0 0 0-10-10z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M495 322.24a19.79 19.79 0 0 0 19.71-19.75V259.2a19.71 19.71 0 1 0-39.42 0v43.29A19.79 19.79 0 0 0 495 322.24zm34.83-21.68c0 19.75-16.76 33.58-34.83 33.58s-34.83-13.84-34.83-33.58H449c0 22.39 17.74 41.16 39.43 44.12v23.57h13.14v-23.58c21.69-3.29 39.43-21.73 39.43-44.11z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M406.74 476.01a.84.84 0 0 1-.54-.2l-9.14-8.42V476H395v-18.05h2.06v8.61l9.16-8.48a.78.78 0 0 1 .52-.18.85.85 0 0 1 .87.86v16.34a.86.86 0 0 1-.87.91z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M406.74 458.44a.35.35 0 0 1 .37.36v16.34a.36.36 0 0 1-.37.37.37.37 0 0 1-.21-.08l-8.3-7.63-.87-.8.88-.81 8.29-7.68a.35.35 0 0 1 .21-.07m-10.18 0v17.12h-1.07v-17.12h1.07m10.18-1a1.32 1.32 0 0 0-.86.31l-8.32 7.71v-7.51a.51.51 0 0 0-.51-.51H395a.51.51 0 0 0-.51.51V476a.51.51 0 0 0 .51.51h2.05a.51.51 0 0 0 .51-.51v-7.44l8.32 7.66a1.33 1.33 0 0 0 .86.32 1.36 1.36 0 0 0 1.37-1.37V458.8a1.35 1.35 0 0 0-1.37-1.36zM583.26 476.01a.89.89 0 0 1-.6-.24.83.83 0 0 1-.27-.63V458.8a.86.86 0 0 1 .87-.86.81.81 0 0 1 .55.2l9.19 8.42v-8.6h2v18.06h-2v-8.67l-9.16 8.48a.82.82 0 0 1-.58.18z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M583.26 458.44a.31.31 0 0 1 .21.07l8.3 7.63.87.81-.87.8-8.3 7.68a.32.32 0 0 1-.21.08.37.37 0 0 1-.37-.37V458.8a.36.36 0 0 1 .37-.36m11.26 0v17.12h-1.07v-17.12h1.07m-11.26-1a1.36 1.36 0 0 0-1.37 1.36v16.34a1.36 1.36 0 0 0 1.37 1.37 1.34 1.34 0 0 0 .87-.32l8.32-7.7V476a.51.51 0 0 0 .51.51h2a.51.51 0 0 0 .52-.51v-18.05a.51.51 0 0 0-.52-.51h-2a.51.51 0 0 0-.51.51v7.46l-8.32-7.66a1.33 1.33 0 0 0-.87-.31zM498.4 476.31a1.54 1.54 0 0 1-1.54-1.54v-14.93a1.54 1.54 0 0 1 1.54-1.54h4.07a1.54 1.54 0 0 1 1.54 1.54v14.93a1.54 1.54 0 0 1-1.54 1.54zm-10.86 0a1.54 1.54 0 0 1-1.54-1.54v-14.93a1.54 1.54 0 0 1 1.54-1.54h4.07a1.54 1.54 0 0 1 1.54 1.54v14.93a1.54 1.54 0 0 1-1.54 1.54z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M502.47 458.8a1 1 0 0 1 1 1v14.93a1 1 0 0 1-1 1h-4.07a1 1 0 0 1-1-1v-14.89a1 1 0 0 1 1-1h4.07m-10.86 0a1 1 0 0 1 1 1v14.93a1 1 0 0 1-1 1h-4.07a1 1 0 0 1-1-1v-14.93a1 1 0 0 1 1-1h4.07m10.86-1h-4.07a2 2 0 0 0-2 2v14.93a2 2 0 0 0 2 2h4.07a2 2 0 0 0 2-2v-14.93a2 2 0 0 0-2-2zm-10.86 0h-4.07a2 2 0 0 0-2 2v14.93a2 2 0 0 0 2 2h4.07a2 2 0 0 0 2-2v-14.93a2 2 0 0 0-2-2z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    opacity: 0.5,
    d: "M375 433.62h240v2.67H375z"
  }), _react.default.createElement("path", {
    d: "M449.11 440.78a5.84 5.84 0 1 1 5.83-5.83 5.84 5.84 0 0 1-5.83 5.83z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M449.11 429.61a5.34 5.34 0 1 1-5.33 5.34 5.34 5.34 0 0 1 5.33-5.34m0-1a6.34 6.34 0 1 0 6.33 6.34 6.33 6.33 0 0 0-6.33-6.34z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M375.5 434.12h73.11v1.67H375.5z"
  }), _react.default.createElement("path", {
    d: "M448.11 434.61v.67H376v-.67h72.11m1-1H375v2.67h74.11v-2.67z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M864.78 588.36c-37.63 0-68.13 42.59-68.13 95.14s30.5 95.14 68.13 95.14 68.12-42.6 68.12-95.14-30.5-95.14-68.12-95.14zm3.52 177.2c-33.08 0-59.9-37.3-59.9-83.3s26.82-83.29 59.9-83.29 59.91 37.29 59.91 83.29-26.82 83.3-59.91 83.3z",
    fill: "#35323e"
  }), _react.default.createElement("path", {
    d: "M873 475.56l-4.7 79.88H776a32 32 0 0 0-21.71 8.21 28.93 28.93 0 0 0-9.31 18.8v119.84h11.74l-.08-8.22H873v-11.75H756.51l-1-96.12a15.56 15.56 0 0 1 .37-3.6c.73-3.17 2.75-8.94 8.18-12.18a15.34 15.34 0 0 1 7.84-2h104.62l5.88-83.4h35.23v-9.46z",
    fill: "#464353"
  }), _react.default.createElement("path", {
    d: "M873 475.56l-4.7 79.88H776a32 32 0 0 0-21.71 8.21 28.93 28.93 0 0 0-9.31 18.8v119.84h11.74l-.08-8.22H873v-11.75H756.51l-1-96.12a15.56 15.56 0 0 1 .37-3.6c.73-3.17 2.75-8.94 8.18-12.18a15.34 15.34 0 0 1 7.84-2h104.62l5.88-83.4h35.23v-9.46z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "#35323e",
    d: "M875.94 518.47l88.68-2.94-4.7 123.34-212.6 2.35 5.28-49.92 115.7 19.38 7.64-92.21z"
  }), _react.default.createElement("path", {
    fill: "#464353",
    d: "M838.94 682.33H956.4v11.75H838.94z"
  }), _react.default.createElement("path", {
    d: "M876.52 673.42v-34.56h-9.39v34.56c-3.48 2.6-5.88 8-5.88 14.19 0 8.76 4.74 15.86 10.58 15.86s10.57-7.1 10.57-15.86c0-6.22-2.4-11.59-5.88-14.19zM830.37 702.81a11.06 11.06 0 0 1 14.44-.52s14.09 9.4 1.17 49.34c0 0-9.39 5.87-4.69-12.93s2.34-30.54-2.35-30.54-10.57 12.93-10.57 12.93l-8.23-3.53s3.71-8.65 10.23-14.75zM742.28 702.81a11 11 0 0 1 14.43-.52s14.1 9.4 1.18 49.34c0 0-9.4 5.87-4.7-12.93s2.35-30.54-2.35-30.54-10.57 12.93-10.57 12.93l-8.22-3.53s3.71-8.65 10.23-14.75z",
    fill: "#464353"
  }), _react.default.createElement("ellipse", {
    cx: 743.21,
    cy: 748.11,
    rx: 26.43,
    ry: 35.24,
    fill: "#35323e"
  }), _react.default.createElement("ellipse", {
    cx: 831.3,
    cy: 748.11,
    rx: 26.43,
    ry: 35.24,
    fill: "#35323e"
  }), _react.default.createElement("path", {
    d: "M748.88 799c8.57 5.74 21.57 3 21.57 3s19.64-9.3 25.45-9.3 19.91-5.7 19.91-5.7l-.48-3.87-1.44-11.67c8.94 7 18.88 4.56 23.77 4 5.26-.54 33.32-17.23 36-18.32a7.2 7.2 0 0 0 2.47-2.49 63.32 63.32 0 0 0 4.77-8.65c1.76-1.55 3-2.79 3-3.06s.7-2.3 1.72-4.59c4-.69 7.42-2.18 8.52-3.07a7.69 7.69 0 0 0 1.17-1.19 7.57 7.57 0 0 0 1.59-4.83s27.38-27.62 23.79-39.11 8.85-11.77 8.85-11.77 19.08-8.2 21.74-13.13c1.64-3 15.95-9.67 26.72-14.35l1.33-.57c4.18 9.17 25.41 2.12 29.59-1.76 4.43-4.11 17.42-6 17.42-6s.56-53.62 4.71-60.45c2-3.25 2.44-13.83 2.39-24.06V557c5.81-1.13 19.63-3.76 26-4.4 4.07-.4 8.3-2.94 11.56-5.4l.38.48a8 8 0 0 0 3.54.58 5.49 5.49 0 0 0 3.1-.58c2.49-1.37 11.61-4.1 14.93-5.47s-.55-11.22-3-13.13-4.15-4.38-2.77-5.47-3.31-3.83-6.08-4.38-11.06-4.38-11.06-4.38-3-6.29-8-6.29-11.62-4.92-11.62-4.92c-.28-2.19-5.53-2.46-5.53-2.46s-19.92-15.32-23.24-13.41-12.44-3-12.44-3-11.2 1.26-13.83-.8a3.1 3.1 0 0 0-.67-1.85c-.59-1.85-3.49-4.39-6.29-6.51a24.39 24.39 0 0 0 .32-3.95c0-.57 0-1.15-.06-1.71v-.28l.39-3.85a8 8 0 0 1 1-3.63c.47-.72 1.15-1.29 1.67-2a4.21 4.21 0 0 0 .34-.52.64.64 0 0 0 .08-.14 4 4 0 0 0 .21-.41l.06-.14a6.08 6.08 0 0 0 .36-1.17v-.09c0-.03.06-.37.08-.55a.22.22 0 0 0 0-.08 11.76 11.76 0 0 0-.62-4.69c-.83-2.59-2.13-5.09-2.27-7.78a23.28 23.28 0 0 0-.14-4c-.66-3-3.74-4.9-6.7-6.14-4.09-1.71-6.15-3.58-9.43-6.13-2.8-2.16-7.4-1.08-10.92-.85-8 .51-15.94 2.93-23.49 5.43-2.94 1-5.92 2.07-8.21 4.07a9.08 9.08 0 0 0-3 5.07 6.37 6.37 0 0 0-.09 1.38.49.49 0 0 0 0 .12 4.78 4.78 0 0 0 .06.53 1 1 0 0 0 0 .17 4.85 4.85 0 0 0 .16.63c.32 1 .91 1.93 1.25 2.93a5.61 5.61 0 0 1 .19.67v.08c0 .22.08.44.11.66.3 2.49-.61 5.09-1 7.62-.06.36-.1.73-.13 1.1a13.14 13.14 0 0 0 .39 4.37c0 .18.1.35.16.52a2 2 0 0 0 .07.23c0 .14.11.29.17.43s.07.19.12.28.11.26.17.38l.16.31.2.34c.06.11.13.21.2.32s.13.2.2.3.16.21.25.31l.22.27.29.3a2.5 2.5 0 0 0 .23.23c.11.11.23.2.34.3l.24.19a4.61 4.61 0 0 0 .43.29l.2.14c.23.13.46.25.7.36 1.59.73 3.59 1 4.55 2.38a3.28 3.28 0 0 1 .47 1.09v.52a23.79 23.79 0 0 0 .14 2.4 9.36 9.36 0 0 0 .07 1.3 3.88 3.88 0 0 0 .27.94 24.8 24.8 0 0 0 8.39 14.09c.08.42.17.91.28 1.47a27.74 27.74 0 0 1-8 4.21c-6.64 1.95-16.05 10.91-16.05 10.91s-4.67 33.65-5.79 37.75-2 20-2 20-1.11 6.57-2.77 9.85c-1.17 2.32-1 12.25 2.32 18.29a15 15 0 0 1-2 3.32c-6.64 7.66-26.55 7.39-33.19 7.39-6.12 0-8 3.7-8.26 4.29-12.15 3.45-51.52 14.68-56.19 16.73-5.53 2.41-8.57 26.3-8.57 26.3s-11.62 39.66-11.06 44.88-3.99 19.67-3.99 19.67 0 16.36-1.88 17.47c-1.94.82-1.66 8.76-1.66 8.76s1.42.41 3.64 1c-.59 4-2.76 9.62-4.48 13.6-.86-1.09-1.7-1.55-2.2-.27-1.39 3.48-22.13 28.1-27.39 28.1-2.5 0-6.64 2.05-9.36 4.82-3.01 3.04-4.28 6.91.21 9.91zM844 656.52c23.51 2.19 48.68-1.67 48.68-1.67s-1.93 6.87-3.59 9.6-6.37 18.33-6.37 21.61-7.46 31.46-9.68 32.83a8.18 8.18 0 0 0-2.4 3.48 33.25 33.25 0 0 0-1.47 4.18c0 .71.1 1.39.19 2-1.65 1.52-3.4 3.11-5 4.51s-9.89 5.51-13.21 8.51-18.8 6.7-18.8 6.7a95.91 95.91 0 0 0-11.07 5.73c-4.8 2.89-9.61 6.57-10.86 10.2.54-6.11 1.43-13.48 2-18.16h.88c7.75-.48 6.59-7.88 6.19-9.71-.06-.26-.1-.41-.1-.41 5.53-6 18-50.88 16.31-55.8s1.39-9.3 2-9.3 1.55-5.48.17-8.48 6.13-5.82 6.13-5.82zm190.12-120.68l-1.46.36v-.31s.55 0 1.48-.05zm-80.36-41.27c-.23.27-.45.54-.69.79l-.28.3v-1.52zm-27.71 53.07l.1 1.54s-.15.93-.43 2.54zm127.11-15.29l-4.83.83c.69-.26 1.36-.54 2-.85a4.83 4.83 0 0 1 1.54-.42 8.83 8.83 0 0 1 1.8.39 3 3 0 0 0-.49.05z",
    transform: "translate(-75 -43.44)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M815 686.41s-5.56 11.5-5.29 12.31-11.94 10.59-11.94 10.59l-13.3-9.5 1.35-6.52s14.94-13.45 16-15 13.18 8.12 13.18 8.12z",
    fill: "#efb7b9"
  }), _react.default.createElement("path", {
    d: "M739.08 725.33c9.23 9 20.09 6.24 25.25 5.7s32.71-17.11 35.35-18.19a7.06 7.06 0 0 0 2.42-2.47 64.33 64.33 0 0 0 4.66-8.61c-.18 0-9.21 2.62-11.49 0 0 0-3.8-4.66-4.62-4.66s-.06-8.17-.06-8.17-9.71 5.46-13 8.44-18.46 6.65-18.46 6.65a92.56 92.56 0 0 0-10.92 5.64c-7.16 4.38-14.38 10.57-9.13 15.67z",
    fill: "#67647e"
  }), _react.default.createElement("path", {
    d: "M739.08 725.33c9.23 9 20.09 6.24 25.25 5.7s32.71-17.11 35.35-18.19a7.06 7.06 0 0 0 2.42-2.47c-3.21-1.91-24.2 11.43-30.07 13.87s-20.73 1.09-29.15-2.44c-4.2-1.76.06-7.18 5.37-12.15-7.2 4.39-14.42 10.58-9.17 15.68z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M740.17 697.09s-3.87 29.05-2.89 32.85-24.26-13-24.26-13 8.84-18.2 6.24-22.38 20.91 2.53 20.91 2.53z",
    fill: "#efb7b9"
  }), _react.default.createElement("path", {
    d: "M716 697.64s15.74 4.61 24.43 4.07c7.61-.48 6.47-7.82 6.07-9.64-.06-.26-.1-.41-.1-.41 5.43-6 17.65-50.49 16-55.38s1.36-9.23 2-9.23 1.53-5.43.17-8.41 6-5.7 6-5.7c23.08 2.17 47.78-1.66 47.78-1.66s-1.9 6.81-3.53 9.53-6.24 18.19-6.24 21.45-7.33 31.21-9.5 32.57a8.15 8.15 0 0 0-2.37 3.46 32.48 32.48 0 0 0-1.43 4.14c.81 18.19 21.44 11.13 24.43 8.69a8 8 0 0 0 1.15-1.18 7.54 7.54 0 0 0 1.56-4.79s26.88-27.42 23.35-38.82 8.69-11.68 8.69-11.68 18.73-8.14 21.33-13c1.61-3 15.66-9.6 26.23-14.24 6.63-2.9 11.89-5 11.89-5l-4.41-15.85-3.5-12.44-6.54-2.46-20.88-7.86-37.5-5.16-3.44.45-36.43 4.71S748 579 742.57 581.4s-8.37 26.16-8.37 26.16-11.41 39.36-10.86 44.54-3.8 19.52-3.8 19.52 0 16.24-1.85 17.35h-.05c-1.9.79-1.64 8.67-1.64 8.67z",
    fill: "#575988"
  }), _react.default.createElement("path", {
    d: "M770.57 612.94c23.08 2.17 47.78-1.66 47.78-1.66 1.63-5.13 24.45-19.25 24.45-19.25-18.72-4.61-72.23 20.91-72.23 20.91z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M795.28 682.43c.81 18.19 21.44 11.13 24.43 8.69a8 8 0 0 0 1.15-1.18c-7.21 2.65-20 4.7-24.15-11.65a32.48 32.48 0 0 0-1.43 4.14zM716 697.64s15.74 4.61 24.43 4.07c7.61-.48 6.47-7.82 6.07-9.64-8-.25-21.7-1-28.82-3.15h-.05c-1.89.84-1.63 8.72-1.63 8.72z",
    fill: "#444053"
  }), _react.default.createElement("path", {
    d: "M795.28 682.43c.81 18.19 21.44 11.13 24.43 8.69a8 8 0 0 0 1.15-1.18c-7.21 2.65-20 4.7-24.15-11.65a32.48 32.48 0 0 0-1.43 4.14zM716 697.64s15.74 4.61 24.43 4.07c7.61-.48 6.47-7.82 6.07-9.64-8-.25-21.7-1-28.82-3.15h-.05c-1.89.84-1.63 8.72-1.63 8.72z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M677.19 754.37c8.41 5.7 21.17 3 21.17 3s19.28-9.23 25-9.23 19.54-5.7 19.54-5.7l-.46-3.85-2.25-18.41s-21.14-.55-22-2.45c0 0-3.8-9.35-5.16-5.89s-21.72 27.88-26.87 27.88c-2.46 0-6.53 2-9.2 4.79-2.96 3.05-4.18 6.88.23 9.86z",
    fill: "#67647e"
  }), _react.default.createElement("path", {
    d: "M750.21 593.93s17.65 11.13 12.79 13.63-12.79-13.63-12.79-13.63zM742.88 615.38s15.2 14.43 9.5 14.82-9.5-14.82-9.5-14.82zM726.59 661.26s7.72 14.51 4.81 17-4.81-17-4.81-17zM811.56 675.92c-2.71 2.71 25.79-9 19.28-9.5s-19.28 9.5-19.28 9.5z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M868.57 472.32l.91-.14c3.38-.52 15.61-2.44 26.59-4.82 2.68-.58 5.27-1.19 7.65-1.81 8.41-2.21 14-4.59 10.46-6.54-4.76-2.58-7.27-7.28-8.6-11.32a73.2 73.2 0 0 1-.35-1.16 29.32 29.32 0 0 1-1.09-6.25s-30.68-10.86-24.71 0c2.93 5.33 1 9.68-1.81 12.72a23.71 23.71 0 0 1-6.6 4.93z",
    fill: "#efb7b9"
  }), _react.default.createElement("path", {
    d: "M901.42 463.9s-11 7.87-22.18 1.36-25.87 57.55-25.87 57.55l-15.2 37.46s-9.85 8.15 2.4 11.68 39.45-3.53 46.35 6.78 20 12 21.31 12 6.51-38.82 6.51-38.82l1.34-56.2z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M841.12 569.77c12.25 3.53 39.44-3.53 46.34 6.79a26.58 26.58 0 0 0 11.68 9.4 30.47 30.47 0 0 0 9.63 2.54c.18 0 .44-.71.73-1.94 1.92-7.86 5.78-36.88 5.78-36.88l1.34-56.19-12.9-27.93-1.72-3.83a23.48 23.48 0 0 1-5.59 2.72 19.67 19.67 0 0 1-16.59-1.36c-3.29-1.92-6.87 2.25-10.3 9.09-8.25 16.47-15.57 48.46-15.57 48.46l-15.2 37.46a14.25 14.25 0 0 0-1 1c-2.23 2.26-6.28 7.9 3.37 10.67z",
    fill: "#f3f5f9"
  }), _react.default.createElement("path", {
    d: "M899.5 571.66a71 71 0 0 0-.36 14.3 169.64 169.64 0 0 0 2.55 20.19 7.63 7.63 0 0 0 .33 1.23c6.63-2.9 11.89-5 11.89-5l-4.41-15.82c1.92-7.86 5.78-36.88 5.78-36.88l1.34-56.19-12.9-27.93c8.41-2.21 14-4.59 10.46-6.54-5.22-2.83-7.74-8.21-8.95-12.48a45.48 45.48 0 0 1-7.71 8.3l-.17.14-1 9.48-.3 2.91-.62 6s3 71.4 5.16 75.47 1.08 11.94-.82 21.17c-.09.55-.18 1.09-.27 1.65z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M900.88 568.96c-1.9 9.23-.27 24.43 1.9 36.1s25.24 4.08 29.59 0 17.1-6 17.1-6 .54-53.21 4.62-60c1.93-3.22 2.4-13.73 2.35-23.88 0-9.11-.49-17.93-.66-20.93 0-.69-.07-1.07-.07-1.07s17.65-29.86 17.38-32-5.43-2.45-5.43-2.45-19.55-15.2-22.8-13.3-12.22-3-12.22-3-11.35 1.29-13.7-.9a1.2 1.2 0 0 1-.42-1c.27-3.47-11.57-10.89-11.93-11.12 10 9-6.16 22.8-8 24.32l-.17.14-1.9 18.43s3 71.39 5.16 75.46 1.1 11.97-.8 21.2z",
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 901.93,
    cy: 491.41,
    r: 1.36,
    fill: "#444053"
  }), _react.default.createElement("path", {
    d: "M899.15 454.83l8.24 8 12.09-20.17a1.18 1.18 0 0 1-.41-1c.26-3.47-11.57-10.9-11.94-11.12 9.98 8.95-6.13 22.78-7.98 24.29z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 904.64,
    cy: 534.84,
    r: 1.36,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 904.64,
    cy: 534.3,
    r: 1.36,
    fill: "#444053"
  }), _react.default.createElement("path", {
    d: "M898.6 453.75l8.25 8 12.09-20.19a1.2 1.2 0 0 1-.42-1c.27-3.47-11.57-10.89-11.93-11.12 9.97 8.96-6.16 22.79-7.99 24.31z",
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 965.59,
    y: 534.39,
    width: 18.89,
    height: 39.92,
    rx: 1.7,
    transform: "rotate(-178.69 937.31 533.02)",
    fill: "#464353"
  }), _react.default.createElement("circle", {
    cx: 900.54,
    cy: 502.63,
    r: 2.97,
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M798.26 566.56c6.79 3 51.31-4.89 57.83-6.79s16-16.56 11.4-27.15 1.63-20.9 1.63-20.9 9.77-20.9 11.94-25 6.7-15.93 7.33-17.91a1.59 1.59 0 0 0-.39-1.25c-1.76-2.68-8.57-7.44-8.57-7.44-1.92.69-2.15-4.79-2.08-8.83 0-2.26.18-4.06.18-4.06s-.9.92-2.37 2.17c-.54.45-1.15.95-1.83 1.46a28.07 28.07 0 0 1-8.56 4.68c-6.51 1.92-15.74 10.82-15.74 10.82l2.71 41.7s-6.24 39.2-12.76 46.8-26.06 7.33-32.57 7.33-8.15 4.37-8.15 4.37z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M797.72 564.89c6.79 3 51.31-4.89 57.82-6.79s16-16.56 11.4-27.15 1.63-20.9 1.63-20.9 9.78-20.9 11.95-25 6.7-15.92 7.33-17.91a1.67 1.67 0 0 0-.39-1.25c-1.76-2.68-8.57-7.44-8.57-7.44-1.92.7-2.16-4.79-2.08-8.83 0-2.26.18-4.06.18-4.06s-.9.92-2.37 2.17c-.54.45-1.16.95-1.83 1.46a28.07 28.07 0 0 1-8.56 4.68c-6.52 1.93-15.75 10.82-15.75 10.82l2.72 41.7s-6.25 39.2-12.76 46.8-26.06 7.37-32.58 7.37-8.14 4.33-8.14 4.33z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M871.56 446.67s.25 1.43.68 3.63c1.46 7.45 5 23.73 7.46 23.1 1.81-.45 4.85-3.64 7.22-6.4-1.77-2.69-8.57-7.44-8.57-7.44-1.92.69-2.16-4.8-2.08-8.83l-2.2-1.9z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M872.1 445.56s.26 1.43.69 3.63c1.46 7.46 4.94 23.74 7.46 23.11 1.8-.45 4.84-3.65 7.21-6.41-1.76-2.68-8.57-7.44-8.57-7.44-1.92.7-2.16-4.79-2.08-8.83l-2.19-1.89z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M854.73 525.56s13.57-2.71 17.37-8.68 29.66-11.13 26.5-4.89-26.5 26.67-26.5 26.67L862 553.11l-13.51-3.43-5.68-11.06z",
    fill: "#efb7b9"
  }), _react.default.createElement("path", {
    d: "M886.84 541.01s-13.14 4.89-15.12 11.4 15.12-11.4 15.12-11.4zM894.91 548.56s1.19 6.78-15.29 6.24zM966 461.73l6-.54s6.52 4.88 11.4 4.88 7.88 6.25 7.88 6.25 8.14 3.8 10.86 4.34 7.33 3.26 6 4.34.27 3.53 2.71 5.43 6.25 11.68 3 13-12.22 4.07-14.66 5.43-5.43 0-5.43 0-14.38-18.73-21.71-15.2-17.38 3.53-17.38 3.53l-7.87-16.56z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M841.12 551.05a7.23 7.23 0 0 0 5.06 3.52 38.29 38.29 0 0 0 15.82-1.46s-27.35-8.69-1-29.81h-7.06l-2.35-.89 1.08-5.63 1.54-50.71-5.7-1.36s-4.58 33.4-5.68 37.47-1.92 19.81-1.92 19.81-1.08 6.52-2.71 9.78c-1.26 2.45-.94 13.49 2.92 19.28z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M842.2 551.05a7.27 7.27 0 0 0 5.06 3.52 38.29 38.29 0 0 0 15.81-1.46s-27.35-8.69-1-29.81H855l-2.35-.89c-3.87 6.84-9.95 19.03-10.45 28.64z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M841.12 551.05a7.23 7.23 0 0 0 5.06 3.52 38.29 38.29 0 0 0 15.82-1.46s-27.35-8.69-1-29.81h-7.06l-2.35-.89c-3.89 6.84-9.98 19.03-10.47 28.64z",
    fill: "none"
  }), _react.default.createElement("path", {
    d: "M841.12 551.05a7.23 7.23 0 0 0 5.06 3.52 38.29 38.29 0 0 0 15.82-1.46s-27.35-8.69-1-29.81h-7.06l-2.35-.89c-3.89 6.84-9.98 19.03-10.47 28.64z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M877.62 453a24.7 24.7 0 0 0 28-5.31 73.2 73.2 0 0 1-.35-1.16 29.32 29.32 0 0 1-1.09-6.25s-30.68-10.86-24.71 0c2.89 5.33.92 9.68-1.85 12.72z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M863.14 429.42v.24c0 .81.06 1.6.14 2.38s.19 1.49.34 2.22a24.71 24.71 0 0 0 47.6 3.19c.16-.47.31-1 .44-1.45a24.59 24.59 0 0 0 .89-6.58c0-.57 0-1.14-.06-1.7a24.7 24.7 0 0 0-49.35 1.7z",
    fill: "#efb7b9"
  }), _react.default.createElement("path", {
    d: "M863.14 429.66a10.37 10.37 0 0 1 .14 2.38 9.21 9.21 0 0 0 .07 1.29 3.81 3.81 0 0 0 .27.93c1 2.35 4.25 3.86 6.4 2.35a6.94 6.94 0 0 0 1.93-2.52c2.28-4.24 5.46-9.12 10.45-9.21 2.13 0 4.13.86 6.19 1.39s4.5.59 6-.82c1.18-1.07 1.74-2.91 3.32-3.29s3 1.07 3.77 2.5 1.3 3.09 2.77 3.82c.65.33 1.42.42 2.06.77 3 1.62 1.6 7.29 4.67 8.2a1.37 1.37 0 0 0 .29.07l.15-1.52c.28-2.75.55-5.51.83-8.28a24.7 24.7 0 0 0-49.35 1.7z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M907 392.56c2.9 1.23 5.92 3.12 6.57 6.08a24 24 0 0 1 .14 4c.14 2.68 1.41 5.16 2.23 7.72s1.1 5.56-.53 7.73c-.51.69-1.18 1.25-1.64 2a7.88 7.88 0 0 0-.95 3.6l-1.34 13.36c-3.45-.64-1.91-6.61-5-8.27-.64-.35-1.4-.45-2.06-.77-1.47-.73-2-2.41-2.77-3.83s-2.16-2.88-3.77-2.49-2.14 2.22-3.32 3.29c-1.54 1.4-4 1.34-6 .81s-4.06-1.42-6.19-1.38c-5 .08-8.17 5-10.45 9.2a6.89 6.89 0 0 1-1.93 2.53c-2.42 1.71-6.26-.44-6.67-3.29-.23-1.59.26-3.37-.66-4.72s-2.9-1.64-4.46-2.36c-4-1.82-5.2-6.78-4.54-10.93.48-3 1.67-6.08.69-9-.33-1-.91-1.9-1.23-2.9-.87-2.8.55-5.88 2.79-7.86s5.17-3.08 8.06-4.05c7.4-2.48 15.18-4.87 23.06-5.39 3.45-.22 8-1.3 10.71.85 3.26 2.5 5.26 4.36 9.26 6.07z",
    fill: "#464353"
  }), _react.default.createElement("circle", {
    cx: 900.57,
    cy: 469.96,
    r: 1.36,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 900.57,
    cy: 469.42,
    r: 1.36,
    fill: "#444053"
  }), _react.default.createElement("circle", {
    cx: 909.26,
    cy: 555.2,
    r: 1.36,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 909.26,
    cy: 554.66,
    r: 1.36,
    fill: "#444053"
  }), _react.default.createElement("circle", {
    cx: 904.64,
    cy: 577.73,
    r: 1.36,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 904.64,
    cy: 577.19,
    r: 1.36,
    fill: "#444053"
  }), _react.default.createElement("path", {
    d: "M858 491.4s-3 20.28 0 23.81 0-23.81 0-23.81zM946.76 529.05s5.7 12.28 0 24.06-9.23 16.56-7.33 24.08 7.33-48.14 7.33-48.14zM677.19 754.37c8.41 5.7 21.17 3 21.17 3s19.28-9.23 25-9.23 19.54-5.7 19.54-5.7l-.46-3.85c-5.63 1.09-18.42 3.67-19.9 4.93-1.9 1.63-25.24 9.51-25.24 9.51s-15.9-2-20.33-8.52c-2.97 3.05-4.19 6.88.22 9.86z",
    opacity: 0.1
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M913.74 400.44v-.88 1a.51.51 0 0 1 0-.12zM858.23 423.56c1.56.72 3.52 1 4.46 2.36s.43 3.13.66 4.72c.41 2.85 4.25 5 6.67 3.29a7 7 0 0 0 1.93-2.53c2.28-4.24 5.46-9.12 10.45-9.2 2.13 0 4.13.86 6.19 1.38s4.5.59 6-.81c1.18-1.07 1.74-2.92 3.32-3.29s3 1.07 3.77 2.49 1.3 3.09 2.77 3.83c.66.32 1.42.42 2.06.77 3.05 1.66 1.51 7.63 5 8.27q.66-6.67 1.34-13.36a7.88 7.88 0 0 1 .95-3.6c.46-.71 1.13-1.28 1.64-2a5.94 5.94 0 0 0 1.11-2.87 6.89 6.89 0 0 1-1.11 5c-.51.69-1.18 1.25-1.64 2a7.88 7.88 0 0 0-.95 3.6q-.68 6.68-1.34 13.36c-3.45-.64-1.91-6.61-5-8.27-.64-.35-1.4-.45-2.06-.77-1.47-.73-2-2.41-2.77-3.83s-2.16-2.88-3.77-2.49-2.14 2.22-3.32 3.29c-1.54 1.4-4 1.34-6 .81s-4.06-1.42-6.19-1.38c-5 .08-8.17 5-10.45 9.2a6.89 6.89 0 0 1-1.93 2.53c-2.42 1.71-6.26-.44-6.67-3.29-.23-1.59.26-3.37-.66-4.72s-2.9-1.64-4.46-2.36c-3.63-1.67-5-5.95-4.66-9.85.26 3.22 1.7 6.33 4.66 7.72zM853.15 400.74c.31 1 .9 1.9 1.23 2.9a8.29 8.29 0 0 1 .31 3.57 6.89 6.89 0 0 0-.31-1.4c-.33-1-.92-1.9-1.23-2.9a6 6 0 0 1-.16-2.83c.01.22.09.48.16.66z"
  })), _react.default.createElement("path", {
    d: "M932.91 521.44c6.24-1.37 20.9-5.69 20.9-5.69l2.63-.53c0-9.11-.49-17.93-.66-20.93h-.07s-12.48 4.08-15.47 6.25-12.22 1.63-12.22 1.63-14.38.81-26.33 14.11 24.98 6.53 31.22 5.16z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M993.93 497.21a3.63 3.63 0 0 1 .81 6.09c-3.3 2.74-8.13 6-12.74 6.48-7.69.77-26.2 4.48-28 4.86l-.29.07c-1.53.45-14.88 4.36-20.76 5.64-6.24 1.37-43.16 8.16-31.22-5.14 11-12.24 24.06-13.91 26.07-14.1a3.85 3.85 0 0 1 .48 0c1.39.07 9.28.34 12-1.64a25.33 25.33 0 0 1 4.49-2.23 86.13 86.13 0 0 1 18.36-5.3l12.76-2.22a3.73 3.73 0 0 1 2.16.27z",
    fill: "#efb7b9"
  }), _react.default.createElement("path", {
    d: "M967.12 461.73l6-.54s6.51 4.88 11.4 4.88 7.87 6.25 7.87 6.25 8.15 3.8 10.86 4.34 7.33 3.26 6 4.34.28 3.53 2.72 5.43 6.24 11.68 3 13-12.21 4.07-14.65 5.43-5.43 0-5.43 0-14.39-18.73-21.72-15.2-17.38 3.53-17.38 3.53l-7.87-16.56z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M954.05 561.34v70.48H841.29v11.74h111.58v50.51h11.75V561.34z",
    fill: "#464353"
  }), _react.default.createElement("path", {
    d: "M1005.73 475.56H961.1l-4.7 79.88h-92.32a32 32 0 0 0-21.7 8.21 28.93 28.93 0 0 0-9.32 18.8v119.84h11.75l-1.16-116.09a15.56 15.56 0 0 1 .35-3.64c.72-3.17 2.75-8.94 8.18-12.18a15.28 15.28 0 0 1 7.83-2H964.6l5.87-83.4h35.24z",
    fill: "#464353"
  }), _react.default.createElement("path", {
    d: "M952.87 588.36c-37.62 0-68.12 42.59-68.12 95.14s30.5 95.14 68.12 95.14 68.13-42.6 68.13-95.14-30.5-95.14-68.13-95.14zm3.53 177.2c-33.09 0-59.91-37.3-59.91-83.3s26.82-83.29 59.91-83.29 59.9 37.29 59.9 83.29-26.82 83.3-59.9 83.3z",
    fill: "#35323e"
  }), _react.default.createElement("ellipse", {
    cx: 959.92,
    cy: 686.44,
    rx: 10.57,
    ry: 15.86,
    fill: "#35323e"
  }), _react.default.createElement("ellipse", {
    cx: 962.27,
    cy: 687.03,
    rx: 2.35,
    ry: 4.7,
    fill: "#464353"
  }), _react.default.createElement("path", {
    d: "M835.41 663.56v12.92c-3.69-2.3-7.74-1.71-11.31-.14a21.36 21.36 0 0 0-11.73 13.77c-2.85 9.82-8.37 29.2-13.37 47.45-7 25.84-20 20-20 20l-89.86 6.46L651 744.56v-11.73h96.32s22.31 8.22 31.68 11.73 5.87-3.53 18.28-47.84 38.13-33.16 38.13-33.16z",
    fill: "#464353"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M779.03 757.5l-89.86 6.46L651 744.58l93.97-1.17 34.06 14.09z"
  }), _react.default.createElement("path", {
    d: "M402 568.45a48 48 0 0 1-8.19-10C389.05 551 381 547 375.53 544.94v-2.43l.34-.06-.15-2.26h.15l-.39-6-1.95-29.84s-7.05-19.84 5.48-38.16.78-35.87-11-42.74c0 0-5.48-29-.78-35.86a202.32 202.32 0 0 0-19.68-10c-.11-.35-.2-.72-.29-1.09-.13-2.71-.3-5.41-.45-8.11a29.47 29.47 0 0 1 .77-4.16c.15-.56.32-1.14.5-1.73a29.78 29.78 0 0 0 19.15-27.61 29 29 0 0 0-1.86-10.24 12.87 12.87 0 0 0 1.36-3.25c.75-3.09-.1-6.38-1.86-9.52-3.12-6.82-10.94-13.17-16.62-15.47-8.14-3.31-20.39-2.53-28.87-1.51-4.76.57-10.19 2.16-11.91 6.52-.63 1.6-.64 3.37-1.08 5-1.78 6.66-9.47 9.77-14.22 14.86-4.2 4.5-6 10.59-7.4 16.52a151.21 151.21 0 0 0-2.77 51.86c.48 4 1.12 7.95 1.8 11.92-2.86 4-5.44 11.06-4.26 23.34l-9.4 44.26-3.91 25.95s-2.35 10.68 7.05 19.84c6 5.84 13.25 15.71 17.72 22.1a52.45 52.45 0 0 0-2.85 17.59c.1 2.72.25 5.35.44 7.85a69.23 69.23 0 0 0 3 15.64c1.1 10.66 3.27 24.29 7.52 33l1.56 46.55s-2.35 42.74-7 51.13 10.17 79.37 10.17 79.37v9.92l-2.5 7.34-.63-.47c-11.74 14.5 0 19.85 0 19.85l8.31.34a9.35 9.35 0 0 0 5 10.34s66.53 3 78.28 0 8.61-13.74 2.34-13c-2.39.29-5.92-.34-9.37-1.23 3.65-4.25.73-10-3.93-9.46-6.27.76-20.35-4.78-20.35-4.78l-.07.09a9.15 9.15 0 0 0-1.38-.41A159.81 159.81 0 0 1 344 802.4c-3-6.43-10-23.71-5-37.11 2.26-6.06 3-14.12 3-21.93a249 249 0 0 1 10.31-69.67l9.39-32s13.3-38.92 14.09-49.61l-.11-15.58c11 7 19.75 4.91 25.33 1.64a6 6 0 0 0 .99-9.69zm-104.47-81c.27-1.11.49-2.34.68-3.63 1.84 0 3.69 0 5.53-.06a28.17 28.17 0 0 1 2.78 15c-4.2-1.31-10.52-4.52-8.95-11.26z",
    transform: "translate(-75 -43.44)",
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    d: "M230 750.86l-3 9 9.79 9.79 32.39 7.53 23.35-2.26-1.53-8.24a10 10 0 0 0-7.42-7.3c-9.6-2.26-27.9-7.4-31.75-14.55z",
    fill: "#db8b8b"
  }), _react.default.createElement("path", {
    d: "M230 750.86l-3 9 9.79 9.79 32.39 7.53 23.35-2.26-1.53-8.24a10 10 0 0 0-7.42-7.3c-9.6-2.26-27.9-7.4-31.75-14.55z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M285 772.7l-4.52-6 4.52-7s13.55 5.47 19.58 4.72 9 9.79-2.26 12.8-75.32 0-75.32 0-11.3-5.27 0-19.58l9.79 7.53s16.57 9 24.86 7.53z",
    fill: "#2e3037"
  }), _react.default.createElement("path", {
    d: "M305.33 785.56L282 787.77l-32.39-7.54-9.79-9.79.8-2.39 1.12-3.36 1.1-3.29 21.84-6a13.5 13.5 0 0 0 4.43 4.43c7.09 4.86 19.84 8.36 27.32 10.11.31.08.63.17.93.28a9.86 9.86 0 0 1 3.81 2.34 10 10 0 0 1 2.68 4.68z",
    fill: "#db8b8b"
  }), _react.default.createElement("path", {
    d: "M305.33 785.56L282 787.77l-32.39-7.54-9.79-9.79.8-2.39 9 6.91s16.58 9 24.86 7.53h23.32l-4.52-6 4.06-6.27a9.86 9.86 0 0 1 3.81 2.34 10 10 0 0 1 2.68 4.68z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M297.8 783.25l-4.52-6 4.52-7s13.56 5.48 19.58 4.72 9 9.79-2.26 12.81-75.32 0-75.32 0-11.3-5.28 0-19.59l9.79 7.54s16.58 9 24.86 7.53z",
    fill: "#2e3037"
  }), _react.default.createElement("path", {
    d: "M279 346.38s-36.15 3.77-30.88-11.3a27 27 0 0 0 1.11-13.3 36.91 36.91 0 0 0-6.38-15.32l33.89 5.27a42.23 42.23 0 0 0-4.59 10.89c-4.07 15.94 6.85 23.76 6.85 23.76z",
    fill: "#db8b8b"
  }), _react.default.createElement("path", {
    d: "M217.21 518.11s.75 32.39 8.28 48.21l1.51 46s-2.26 42.18-6.78 50.46 9.78 78.29 9.78 78.29v12s24.1 9 30.88-1.51l-6.78-89.63 3-124.28z",
    fill: "#35323e"
  }), _react.default.createElement("path", {
    d: "M217.2 518.11s.75 32.39 8.28 48.21l1.51 46s-2.26 42.18-6.78 50.46 9.79 78.29 9.79 78.29v12s24.1 9 30.88-1.51l-6.78-89.63 3-124.28z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M202.14 414.17l-4.52 12.05-3.76 25.61a22.64 22.64 0 0 0 6.78 19.58c9 9 21.09 27.87 21.09 27.87L236 456.35s-14.31-2.26-12.05-12.05 1.5-27.87 1.5-27.87z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M269.09 759.81c-9.67 15.21-24.7 6.59-27.37 4.88l1.1-3.29 21.84-6a13.5 13.5 0 0 0 4.43 4.41z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M299.31 547.49c-.76 10.54-13.56 49-13.56 49l-9 31.61a251.35 251.35 0 0 0-9.93 68.76c0 7.72-.71 15.67-2.88 21.65-6 16.57 6 39.17 6 39.17-10.54 18.83-28.62 6-28.62 6v-12.07s-14.32-65.53-10.56-78.33 5.24-47.46 5.24-47.46v-62.51a70.9 70.9 0 0 1-20.67-45c-.18-2.47-.33-5.06-.42-7.75-.61-17 11-36.91 15.54-44 1.1-1.71 1.78-2.68 1.78-2.68l66.51 26.38.15.06v8.27z",
    fill: "#35323e"
  }), _react.default.createElement("path", {
    d: "M276.71 311.73a42.23 42.23 0 0 0-4.59 10.89 29.48 29.48 0 0 1-22.92-.84 36.91 36.91 0 0 0-6.38-15.32z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 261.65,
    cy: 293.66,
    r: 29.38,
    fill: "#db8b8b"
  }), _react.default.createElement("path", {
    d: "M299.31 498.56H299c-31.58 6.49-71.23-26.42-71.23-26.42a38 38 0 0 0 2.74-5.61c1.1-1.71 1.78-2.68 1.78-2.68l66.51 26.38.17 2.64z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M291 345.63s-42.16-25.61-55.72-15.07l-18.83 24.11s-12.05 3.76-9.79 27.86l-9 43.69 27.12 6.78s15.82 15.06 3 36.91c0 0 39.92 33.14 71.56 26.36l-2.26-35.4s-6.78-19.58 5.27-37.66.75-35.4-10.54-42.18c-.03 0-5.31-28.62-.81-35.4z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M293.28 499.28s15.82 3 23.35 15.07a46.86 46.86 0 0 0 7.89 9.85 6 6 0 0 1-.94 9.53c-6 3.59-15.72 5.8-28-4.32-21.13-17.32-2.3-30.13-2.3-30.13z",
    fill: "#db8b8b"
  }), _react.default.createElement("path", {
    d: "M269.93 359.94s-15.06-1.51-18.83 37.62-9.79 48.21-9.79 48.21-3.77 20.33 5.27 32.38 26.36 37.66 26.36 37.66 18.84 5.28 22.6-13.55l-23.35-43.69s-3.76-15.06 5.27-25.61 15.82-80.55-7.53-73.02z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M271.44 357.68s-15.07-1.51-18.83 37.66-9.79 48.22-9.79 48.22-3.77 20.33 5.27 32.38 26.36 37.62 26.36 37.62 18.83 5.28 22.6-13.55l-23.35-43.66s-3.77-15.06 5.27-25.61 15.82-80.59-7.53-73.06z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M283.87 385.92s1.5 23.35-5.28 36.16-6.78 29.37 0 38.41M287.63 357.3s-6-6-23.35-6.78-24.85-6-24.85-6",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M245.74 255.69c-4.58.57-9.81 2.13-11.46 6.44-.61 1.58-.62 3.32-1 5-1.71 6.58-9.11 9.64-13.68 14.67-4 4.44-5.81 10.45-7.12 16.3a153.13 153.13 0 0 0-2.65 51.18c1.47 12.49 4.47 24.79 5.31 37.33s-.69 25.75-7.55 36.29c-3 4.54-6.84 8.52-8.93 13.51 4.32 3.5 10.28 4 15.84 4.19q9.72.33 19.44 0c3.4-.12 6.95-.34 9.88-2.06a15.31 15.31 0 0 0 5.19-5.56c3.7-6.29 4.64-13.85 4.48-21.15s-1.31-14.55-1.45-21.85c-.07-4 .24-8.2 2.53-11.45 1.65-2.36 4.16-3.94 6.31-5.84 8.07-7.15 10.83-18.61 11.1-29.38s-1.5-21.56-.59-32.29c.35-4.2 1.92-9.25 6.06-10.07 1.3-.25 2.69 0 3.93-.5 3.32-1.27 3-6 3.94-9.37 1.07-3.85 4.35-6.81 5.27-10.7 2.17-9.11-9.43-20-17-23.16-7.91-3.3-19.7-2.53-27.85-1.53z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M245 254.19c-4.58.56-9.81 2.13-11.46 6.44a45.46 45.46 0 0 0-1 5c-1.71 6.57-9.12 9.64-13.69 14.67-4 4.44-5.81 10.44-7.12 16.3a153.34 153.34 0 0 0-2.73 51.13c1.47 12.49 4.47 24.79 5.31 37.34s-.69 25.75-7.55 36.29c-3 4.53-6.84 8.51-8.93 13.5 4.32 3.51 10.28 4 15.84 4.2q9.72.31 19.44 0c3.4-.11 6.95-.33 9.88-2.06a15.13 15.13 0 0 0 5.18-5.56c3.71-6.29 4.64-13.85 4.49-21.15s-1.32-14.55-1.45-21.85c-.07-4 .24-8.2 2.52-11.45 1.66-2.35 4.17-3.93 6.32-5.84 8.06-7.14 10.83-18.61 11.1-29.38s-1.51-21.55-.6-32.29c.36-4.2 1.93-9.25 6.06-10.06 1.31-.26 2.7 0 3.94-.5 3.32-1.28 3-6 3.94-9.38 1.06-3.84 4.34-6.81 5.27-10.69 2.17-9.11-9.43-20-17-23.17-7.84-3.27-19.62-2.5-27.76-1.49z",
    fill: "#35323e"
  }));
};

UndrawPodcastAudience.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawPodcastAudience;
exports.default = _default;