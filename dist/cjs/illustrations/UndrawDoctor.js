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

var UndrawDoctor = function UndrawDoctor(_props) {
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
    viewBox: "0 0 1086.13 782.67",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 786.97,
    y1: 154.07,
    x2: 786.97,
    y2: 135.69,
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
    x1: 619.77,
    y1: 841.34,
    x2: 619.77,
    y2: 58.66,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M631.06 138.03c-69.63-2.42-136-24.9-199.28-49.49s-126-51.84-194-64.87c-43.72-8.39-93.72-9.57-128.94 13.87-33.9 22.55-44.85 61.48-50.74 97.6-4.43 27.18-7 55.78 5.11 81.23 8.43 17.66 23.39 32.51 33.74 49.43 36 58.87 10.55 131.47-28.47 189-18.3 27-39.53 52.69-53.65 81.4s-20.66 61.6-8.3 90.88c12.25 29 41.43 50.82 73.05 66.15 64.22 31.11 139.89 40.01 213.68 45.11 163.34 11.17 327.56 6.33 491.33 1.49 60.61-1.8 121.49-3.61 181.11-13 33.11-5.21 67.3-13.47 91.34-33.41 30.51-25.32 38.08-68.18 17.63-99.93-34.3-53.24-129.13-66.47-153.11-123.61-13.19-31.45.36-66.49 19.54-95.66 41.13-62.57 110.09-117.47 113.72-189 2.5-49.13-30.65-98.32-81.91-121.57-53.72-24.39-128.22-21.31-167.85 19-40.81 41.53-112.53 57.51-174 55.38z",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M242.25 725.04s-55-41.58-65.39-94.47a104.54 104.54 0 0 0-32.21-57.71 176 176 0 0 0-25.77-19.2",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M112.15 520.34c4.82 6.52 7 34.15 7 34.15s-25.77-10.15-30.6-16.66a14.687 14.687 0 0 1 23.6-17.49zM158.37 542.02c.5 8.09-12.67 32.47-12.67 32.47s-16.13-22.54-16.64-30.63a14.68 14.68 0 0 1 29.3-1.84zM203.17 604.34c-3.64 7.24-27.33 21.64-27.33 21.64s-2.53-27.6 1.11-34.84a14.68 14.68 0 0 1 26.22 13.2zM226.46 659.1c-2.37 7.75-23.28 25.94-23.28 25.94s-7.17-26.77-4.8-34.53a14.682 14.682 0 0 1 28.08 8.59zM121.86 594.09c8 1.08 33.29-10.34 33.29-10.34s-21.34-17.68-29.38-18.76a14.68 14.68 0 0 0-3.91 29.1zM149.91 657.8c8-1.37 28.67-19.82 28.67-19.82s-25.66-10.48-33.65-9.11a14.68 14.68 0 1 0 5 28.93zM185.66 715.99c8.11 0 31.61-14.69 31.61-14.69s-23.51-14.67-31.62-14.67a14.68 14.68 0 0 0 0 29.36z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M776.55 365.41s33.9-60.05 85-77.35a104.53 104.53 0 0 0 52.92-39.59 175.34 175.34 0 0 0 15.59-28.13",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M962.14 209.34c-5.82 5.64-32.91 11.48-32.91 11.48s6.65-26.9 12.47-32.55a14.68 14.68 0 0 1 20.44 21.07zM946.82 257.97c-8 1.58-33.87-8.24-33.87-8.24s20.2-19 28.15-20.55a14.68 14.68 0 1 1 5.72 28.79zM891.06 310.65c-7.66-2.65-25.07-24.21-25.07-24.21s27-6.18 34.68-3.53a14.68 14.68 0 1 1-9.61 27.74zM839.82 341.01c-8-1.32-28.76-19.67-28.76-19.67s25.59-10.66 33.58-9.34a14.695 14.695 0 0 1-4.77 29zM890.36 228.7c-.01 8.11 14.7 31.64 14.7 31.64s14.69-23.5 14.69-31.6a14.68 14.68 0 1 0-29.35 0zM830.93 264.96c2.42 7.74 23.46 25.79 23.46 25.79s7-26.82 4.56-34.56a14.68 14.68 0 0 0-28 8.77zM778.06 308.13c1.08 8 18.76 29.37 18.76 29.37s11.41-25.25 10.33-33.28a14.68 14.68 0 1 0-29.09 3.91z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M962.14 209.34c-5.82 5.64-32.91 11.48-32.91 11.48s6.65-26.9 12.47-32.55a14.68 14.68 0 0 1 20.44 21.07zM946.82 257.97c-8 1.58-33.87-8.24-33.87-8.24s20.2-19 28.15-20.55a14.68 14.68 0 1 1 5.72 28.79zM891.06 310.65c-7.66-2.65-25.07-24.21-25.07-24.21s27-6.18 34.68-3.53a14.68 14.68 0 1 1-9.61 27.74zM839.82 341.01c-8-1.32-28.76-19.67-28.76-19.67s25.59-10.66 33.58-9.34a14.695 14.695 0 0 1-4.77 29zM890.36 228.7c-.01 8.11 14.7 31.64 14.7 31.64s14.69-23.5 14.69-31.6a14.68 14.68 0 1 0-29.35 0zM830.93 264.96c2.42 7.74 23.46 25.79 23.46 25.79s7-26.82 4.56-34.56a14.68 14.68 0 0 0-28 8.77zM778.06 308.13c1.08 8 18.76 29.37 18.76 29.37s11.41-25.25 10.33-33.28a14.68 14.68 0 1 0-29.09 3.91z",
    opacity: 0.25
  }), _react.default.createElement("path", {
    d: "M778.5 364.22s6.66-68.64 46.32-105.14a104.57 104.57 0 0 0 32.34-57.64 175.28 175.28 0 0 0 2.89-32",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M884.91 146.28c-3 7.52-25.44 23.84-25.44 23.84s-4.82-27.29-1.79-34.81a14.684 14.684 0 0 1 27.23 11zM890.62 197c-6.63 4.66-34.3 6.19-34.3 6.19s10.78-25.54 17.41-30.2a14.68 14.68 0 1 1 16.89 24zM860.96 267.78c-8.08.68-32.74-12-32.74-12s22.2-16.6 30.28-17.28a14.682 14.682 0 0 1 2.46 29.26zM826.45 316.27c-7.85 2-34.29-6.27-34.29-6.27s19.07-20.11 26.92-22.15a14.68 14.68 0 0 1 7.37 28.42zM827.15 193.12c3.28 7.41 26.22 23 26.22 23s3.9-27.44.62-34.85a14.68 14.68 0 0 0-26.84 11.88zM787.51 250.34c5.35 6.09 31.89 14.07 31.89 14.07s-4.48-27.35-9.83-33.44a14.68 14.68 0 1 0-22.06 19.37zM756.62 311.26c4.24 6.9 29.05 19.25 29.05 19.25s.21-27.71-4-34.62a14.68 14.68 0 0 0-25 15.37z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M784.44 154.07c1.66-6.09 3.66-12.21 5.06-18.38-1.68 6.17-3.69 12.31-5.06 18.38z",
    transform: "translate(-56.94 -58.66)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M777 212.73c-.14-.24-.24-.48-.35-.7 0-.1-.1-.18-.14-.28a6.26 6.26 0 0 1-.67.27c-.44.17-.89.33-1.35.46s-.65.2-1 .28a5.83 5.83 0 0 1-.89.23l.08.18c.37-.08.73-.15 1.1-.25l.1 1.24c.42 0 .81-.06 1.19-.06a4.91 4.91 0 0 1 .54 0h2c-.21-.45-.43-.92-.61-1.37zm203 323.13c-4.7-6.33-14.08-74.27-14.08-74.27S947.47 413.28 952.5 394s-13.74-68.61-13.74-68.61-12.4-5.39-13.07-13.39c0 0-50.63-16-53-28-1.92-9.84-33.32-16.9-44.6-19.13-3.44-13.88-6.9-26.83-9.45-33.9-.69-2.2-1.34-4.1-1.94-5.6-4.31-11-17.63-12-27.29-11.12a14.88 14.88 0 0 0-2.29-5.23 2.87 2.87 0 0 0-.91-1.39 5.31 5.31 0 0 0-.66-.48 3.16 3.16 0 0 0-.68-.86 4.81 4.81 0 0 0-.9-.64 6 6 0 0 0-.72-.33 9.61 9.61 0 0 0-1.79-.49 14.74 14.74 0 0 0-2.16-.28 13.15 13.15 0 0 0 4.61-3.37 9.61 9.61 0 0 0 1.89-3.48 10.24 10.24 0 0 0 .42-3.28 8.48 8.48 0 0 1-.9 1.29c.42-4.43-1.92-8.93-3.26-13.34a39.47 39.47 0 0 1-.88-17.65c1.34-8.86 4.66-17.82 6.91-26.84a.66.66 0 0 0 0-.15 69.68 69.68 0 0 0 2.18-13.69c.39-9.33-2-18.64-5.84-27.14-3.41-7.53-8.44-14.94-16.14-18-5.72-2.31-12.13-1.94-18.29-2.32-13.82-.86-27-5.72-40.14-10.14S683.2 58 669.37 58.77 641.31 66.21 635 78.45c-2 3.82-3.15 8.07-5.54 11.66-4.48 6.77-12.5 10.16-19.19 14.83s-12.58 11.3-15 19.21a25.63 25.63 0 0 0-.54 13.15 23.55 23.55 0 0 0 .84 2.9 20.55 20.55 0 0 0 4.35 7.11 21.21 21.21 0 0 0 4.94 3.83 29.07 29.07 0 0 0 7.3 2.84c-.09.3-.18.62-.28.93-.16.51-.3 1-.45 1.55-.33 1.23-.64 2.48-.9 3.74a1.17 1.17 0 0 0 0 .27 81.67 81.67 0 0 0-1.84 17.31 79.89 79.89 0 0 0 .42 8.24c4 40.58 37.5 72.59 78.89 74.67 1.42.07 2.85.11 4.3.11h2c.65.86 1.29 1.74 1.9 2.6s1.17 1.74 1.7 2.6l-1.45-1.5-1.45-1.33a11.79 11.79 0 0 1-1.31 1.51 24.33 24.33 0 0 0-2.89-.82c-4.15-.92-10.47-1.26-18.79 1.25-7.65 2.29-17 7-27.94 15.95l-53.31 32-28.84 17.54-10.39 25.4s-7.81 30.18-16.5 64.76c-.34.1-.67.2-1 .32a18.7 18.7 0 0 0-2.12-.12 19.49 19.49 0 0 0-19.52 18.71c-17.28 21-18.26 42-14.2 51.64a13.76 13.76 0 0 0 1.38 2.57c2.66 3.84 7.63 13.74 12.67 24.29-.13.87-.21 1.6-.25 2.15a5.34 5.34 0 0 0 0 .54s3 45.31-7 58.3c-2.19 2.83-1.86 6.55 0 10.67 6.7 14.82 33.19 34.61 33.19 34.61s31.77-.17 49.47-2.1c-.05 1.78-.09 3.55-.13 5.28-.4 17.48-.4 32.13-.4 32.13l-.66 18.33s-6 38.63-9 49.28c-1.89 6.68.29 68.53 2.19 114h313.02c3.68-26.9-1.51-108.63-1.51-108.63s-4.93-21.13-5.11-39.55a.15.15 0 0 1 0-.13c0-1.61 0-3.18.06-4.72l2.27-.08 4.08-.14h.37s.1-.38.33-1a19.11 19.11 0 0 1 2.19-4.37c1.74-2.57 4.46-5.09 8.55-5.26 2.26-.09 5.76-1.92 9.71-4.62a.18.18 0 0 0 .08 0c10.63-7.19 24.68-20.46 28.09-22.64 4.69-3 27.15-23 27.15-23s3.35-4.24 6.92-9.35l.13-.18c4.44-6.4 9.16-14.05 8-16.46-2-4.32 1.34-14.65 1.34-14.65 10.43-19.09-.62-44.39-5.32-50.72zM786.63 228.28a4 4 0 0 1 .18.92c-.25-.33-.5-.68-.75-1l-.24-.32-.17-.24.38-.52v.07a3.47 3.47 0 0 1 .6 1.09zm-3.36-8.86c-1.09.22-1.95.42-2.51.57-.71-1.26-1.39-2.52-2-3.8a29 29 0 0 1 4.51 3.23zm-1.88 1.58a.21.21 0 0 1 0-.06l.08.06c.41.27.81.53 1.18.8.33.24.63.47.93.71-.2.35-.42.71-.64 1-.35-.55-.68-1.08-1-1.63-.2-.22-.38-.52-.55-.88zm-6-12.34a29.59 29.59 0 0 1 5.81 0c.27 0 .51.05.75.09a8.31 8.31 0 0 1 1.59.41 11.62 11.62 0 0 1 2.11 5.61l-.54.08-.53.1c-1 .17-2 .34-2.78.5l-1 .21c-1.33.29-2.1.51-2.13.52-.13-.27-.26-.52-.4-.78-.22-.43-.45-.87-.65-1.3s-.46-.92-.67-1.37c-.14-.24-.24-.48-.35-.7 0-.1-.1-.18-.14-.28a2.41 2.41 0 0 1-.15-.33c-.61-1.24-1.17-2.48-1.71-3.7-.06-.12-.11-.25-.16-.37l.76-.05v.26zM536.8 829c-.08-14.89-1.16-31-4.16-46.12-1.28-6.43-2.6-12.86-3.94-19.18-.34-1.58-.67-3.14-1-4.7l-3.08.41h-.28c-8.4-39.61-17.18-74.51-17.18-74.51s-17.44-66.59-15.42-71.9c.26-.69-.07-2.55-.81-5.28-4.22-15.14-21.84-56.86-28-71.12 0-.06-.05-.13-.07-.18-1-2.39-1.72-4-1.94-4.47l1.45-21.28.08-1.28.19-2.72-.08-.07.08-1.26s-15.22-12.48-41-21.49c-1-.36-2.06-.71-3.11-1.05 1.29-8.61 3-18.33 5.23-27.8.21-.95.44-1.87.68-2.8.21-.93.45-1.83.69-2.74.38-1.48.79-2.94 1.21-4.38 1.39-.44 2.76-.93 4.11-1.45l.52-.2a73.8 73.8 0 0 0 45-86 73.39 73.39 0 0 0-12.88-27.15 53.682 53.682 0 0 0-3.07-3.76c2.89-6.57 6.3-12.82 6.58-19.21a19.71 19.71 0 0 0 0-2.43v-.1c-.37-4.11-2.19-8.27-6.43-12.64-6.19-6.41-15-9.66-23.81-11.22s-17.79-1.6-26.65-2.65c-14.69-1.76-29-6.29-43.69-7.68a103.81 103.81 0 0 0-52.83 9c-10.93 5-22 13.74-22.66 25.73-.54 9.91 6.36 19.41 4.62 29.2-1.73 9.62-11.53 17.19-10.67 26.92.33 3.8 2.28 7.2 4.72 10.23.84 1 1.73 2 2.65 3 3.56 3.77 7.48 7.39 9.47 12.14.08.2.16.4.23.6 1.69 4.69.93 10.62-3.25 13.31a.15.15 0 0 1 .05.07c.06.08.12.14.17.22a.07.07 0 0 0 0-.05 10.94 10.94 0 0 0 5.71 3.56l.85.26c-.69.75-1.34 1.53-2 2.35l-.43.57a41.62 41.62 0 0 0-3 4.65c-.51.9-1 1.8-1.41 2.7a33.92 33.92 0 0 0-2.95 8.67c-1.07 6.62.44 13.52-1.18 20-2 8-8.33 14.14-11.9 21.57-6.76 14-2.93 30.43-1.57 45.89 1.85 21-1.15 42.09-4.14 62.95q-2.38 16.64-4.76 33.31l-12 83.68c-1.46 10.22-3.19 21-10 28.89h.07s0 .06-.07.08a20.9 20.9 0 0 0 6.44 1.66c8.89.89 18.31-3.41 26.31-8.11a124.34 124.34 0 0 0 17.93-12.59c-.82 3-1.7 6.27-2.64 9.79a.54.54 0 0 1 0 .1c-11.29 43-29.45 121.83-29.45 121.83s-1.65 3.43-3.79 8.54h282c-3.3-4-6.37-7.83-8.77-10.92zM328 431.4c.07-.12.12-.23.19-.34v2.17c0 .14 0 0 0 0 0 .41-.09.82-.16 1.23s0 .05 0 .09l1 .37 1.16.48q10.28 4.06 20.82 7.35c.72.23 1.45.45 2.18.66l.15 1.24c.18 1.27.35 2.56.51 3.85v.1c.45 3.57.89 7.13 1.28 10.61 0 0-18.36-7-18.13 3.63a5.17 5.17 0 0 0 0 .57 4.74 4.74 0 0 0 0 .76c.17 8.28 2.76 13.19 3.28 15.71a.71.71 0 0 1-.16.28 5.47 5.47 0 0 0-.44 3.09 30.39 30.39 0 0 0 .42 5.34c-.54.33-1.07.66-1.6 1-.4.25-.78.53-1.17.81a148.5 148.5 0 0 0-9.59-24.72c-2.75-5.66-5.84-11.56-5.81-17.77 0-.4 0-.81.05-1.22a21 21 0 0 1 1.02-5.29c.23-.65.48-1.29.76-1.92a47.07 47.07 0 0 1 2.19-4.38c.52-.94 1.07-1.87 1.6-2.81.17-.28.33-.57.49-.85zm449-218.67c-.14-.24-.24-.48-.35-.7 0-.1-.1-.18-.14-.28a6.26 6.26 0 0 1-.67.27c-.44.17-.89.33-1.35.46s-.65.2-1 .28l-.89.23.08.18c.37-.08.73-.15 1.1-.25l.1 1.24c.42 0 .81-.06 1.19-.06h2.54c-.21-.45-.43-.92-.61-1.37z",
    transform: "translate(-56.94 -58.66)",
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    d: "M501.56 300.95l-6 2.65s-39.11 151.94-39.11 164.22 82.93 80.61 82.93 80.61l12.94-87.34s-18.58-200.29-50.76-160.14z",
    fill: "#e8f5ff"
  }), _react.default.createElement("path", {
    d: "M683.47 252.62l-34.65-18.08a69.41 69.41 0 0 0-10.16-23.15c-5.07-7.32-11.81-14.51-20.21-18.26-21.23-9.52 89.8-59.49 89.8-59.49a180.64 180.64 0 0 0 6.17 17.7c5.72 14.12 15.21 32.38 27.44 37.58 20.79 8.85-58.39 63.7-58.39 63.7z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M714.42 151.34a82.78 82.78 0 0 1-75.76 60.05c-5.07-7.32-11.81-14.51-20.21-18.26-21.23-9.52 89.8-59.49 89.8-59.49a180.64 180.64 0 0 0 6.17 17.7z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M717.54 126.11a82.73 82.73 0 1 1-82.72-82.71 82.34 82.34 0 0 1 82.72 82.71z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    fill: "#575a89",
    d: "M729.48 242l-22.56 52.64-19.9 34.94h-63.7l-18.58-47.77 7.53-49.54h48.65l31.41-1.77 10.61-3.54 6.84 3.88 19.7 11.16z"
  }), _react.default.createElement("path", {
    d: "M721.71 171.83s14.07 3 1.47 13.33-56.07 43.18-56.07 43.18 15.27 13.6 12.11 29.53l50.59-28.2 9-45.12s1.01-13.56-17.1-12.72z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M677.06 228.34l-32.18 5.31s6.64 24.55 3.32 31.52a4.68 4.68 0 0 0-.25.67l-13.13 35.49 9.84 27.87 34.06-46.45-11.61-17.58s12.27-16.26 19.57-21.9-9.62-14.93-9.62-14.93z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M677.06 226.97l-32.18 5.3s6.64 24.55 3.32 31.52a4.68 4.68 0 0 0-.25.67l-13.13 35.49 9.84 27.87 34.06-46.48-11.61-17.58s12.27-16.26 19.57-21.9-9.62-14.89-9.62-14.89z",
    fill: "#dce6f2"
  }), _react.default.createElement("path", {
    d: "M723.06 169.18s14.07 3 1.46 13.33-57.41 45.83-57.41 45.83 16.59 10.95 13.44 26.87l50.59-28.19 9-45.12s1-13.56-17.08-12.72z",
    fill: "#575a89"
  }), _react.default.createElement("path", {
    d: "M640.87 214.52s3.07 5.74 16.62 16.09c0 0-22.56 12-13.93 28.87l-34.51-9-5.31-16.59z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M639.54 213.2s3.07 5.74 16.62 16.09c0 0-22.56 11.94-13.93 28.86l-34.5-9-5.31-16.58z",
    fill: "#575a89"
  }), _react.default.createElement("path", {
    d: "M729.48 242l-22.56 52.64-19.86 34.94h-63.74l-18.58-47.77 7.52-49.54h13.53c-.22 11.56 4 25.14 3.73 30.19-.46 8.3 12.38 53.08 12.38 53.08s26.87-43.46 37.48-47.33c6.67-2.43 20.8-22.65 30.39-37.37z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M818.35 519.01l-2.29 2.88s16.59 83.27 12 102.18a53.69 53.69 0 0 0-1.33 10.38v.15c-.81 19.24 5 44.21 5 44.21s4.64 73.6 2 103.87H523.11c-1.82-44.76-3.78-102.75-2-109.18 3-10.61 9-49.1 9-49.1l.66-18.24s0-17.63.54-37.27c.23-8.83.57-18.1 1.06-26.32.63-10.34 1.51-19.05 2.72-23.33a51.44 51.44 0 0 0 1.28-9.88c0-.31 0-.63.06-.95 0-1 .1-2.08.14-3.19v-1c.19-6.44.12-14.08-.09-22v-1.31c-.17-5.94-.42-12-.7-17.76-.87-18-2-33.22-2-33.22l-38.15-126.4 10.28-25.32 28.53-17.48 52.75-31.85c25.73-21.15 42.67-18.61 49.13-16.29a17.08 17.08 0 0 1 1.84.75c.2.1.36.18.51.27a4.23 4.23 0 0 1 .59.34 12.18 12.18 0 0 0-4.48 3.69 16.32 16.32 0 0 0-2.77 6 27.92 27.92 0 0 0-.71 4.09c-.13 1.45-.18 2.95-.18 4.46a77.36 77.36 0 0 0 .85 9.89v.22c.33 2.34.74 4.63 1.14 6.78a.45.45 0 0 0 0 .11c.46 2.51.92 4.83 1.23 6.83.06.36.11.69.16 1a22.85 22.85 0 0 1 .31 4 48.61 48.61 0 0 0 1.3 9.6c.26 1.32.56 2.73.89 4.2.45 2 .94 4.18 1.47 6.4.29 1.22.6 2.48.92 3.73.12.5.25 1 .37 1.51l.2.79c2.13 8.47 4.44 16.9 5.86 22 .84 3 1.37 4.85 1.37 4.85s15.06-24.35 27.08-38.21c.18-.2.34-.39.51-.57 1.19-1.37 2.36-2.62 3.48-3.72 2.45-2.44 4.65-4.18 6.42-4.82a7 7 0 0 0 1.09-.51c4.92-2.79 12.86-12.92 20.29-23.53.73-1 1.44-2.09 2.16-3.12 1.65-2.38 3.25-4.77 4.76-7.06 1.16-1.75 2.27-3.45 3.32-5.07 5-7.78 8.52-13.58 8.52-13.58l6.94-.31 1.21-.06h.81l31.51-1.46s1.36.23 3.6.68c.12 0 .24 0 .37.08 11.18 2.22 42.24 9.25 44.14 19 2.32 11.94 52.42 27.87 52.42 27.87.66 8 12.93 13.27 12.93 13.27s18.58 49.1 13.61 68.34c-4.91 19 12.78 66 13.25 67.32l-3.39 4.28z",
    fill: "#e8f5ff"
  }), _react.default.createElement("path", {
    d: "M721.7 168.34s30.67-8.7 37.64 9.21 22.56 90.24 22.56 90.24-40.48 7.63-51.09 0a30.57 30.57 0 0 0-21.57-5.64l-22.89 15.59-6.76-2s36.62-54.44 44.58-72.94 10.65-26.77-2.47-34.46z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M720.37 164.34s30.69-8.7 37.69 9.21 22.56 90.24 22.56 90.24-40.47 7.63-51.09 0a30.54 30.54 0 0 0-21.56-5.64l-22.91 15.59-6.76-2s36.62-54.44 44.58-72.94 10.61-26.75-2.51-34.46z",
    fill: "#e8f5ff"
  }), _react.default.createElement("path", {
    d: "M514.5 452.89s22.89 5.64 27.21 18.58-16.92 13.27-16.92 13.27-12.94-22.89-10.29-31.85zM599.76 548.43s-56.06 114.79-43.12 125.74 43.12-125.74 43.12-125.74zM677.06 463.84s44.79 111.5 35.83 128.72 19.24 0 19.24 0z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M739.43 573.98s-151.28 7.3-107.15 54.41 134.69 2 134.69 2z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M717.54 126.11a82.34 82.34 0 0 1-6.27 31.62c-1.39.16-2.78.26-4.12.32-2-4.39-.93-9.46-.89-14.29s-1.74-10.51-6.39-11.81c-9.27-2.61-15.67 14.72-24.81 11.59-7-2.38-5.17-13-9.2-19.13-3.19-4.85-9.58-6.22-14.55-9.26-10.57-6.49-10.25-16.87-15.16-26.69-5.14-10.29-16-7.25-25.43-1.18-7.16 4.62-13.34 10.81-21 14.49-6.63 3.2-14.08 4.36-21.43 4.53a47.09 47.09 0 0 1-13.44-1.42 82.73 82.73 0 0 1 162.68 21.23z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M610.75 84.63c-7.17 4.62-13.34 10.8-21 14.5-6.63 3.19-14.08 4.35-21.43 4.52-9 .2-18.69-1.38-24.84-7.88-5.65-6-7-15.23-4.61-23.1s8.12-14.4 14.85-19.13 14.54-8 19-14.77c2.36-3.58 3.5-7.8 5.46-11.61 6.27-12.19 20.37-18.79 34-19.61s27.14 3.24 40.12 7.64 26.06 9.24 39.76 10.15c6.1.38 12.44 0 18.1 2.31 7.61 3.09 12.6 10.48 16 18 3.81 8.48 6.18 17.74 5.78 27-.84 19.77-13.9 39.17-8.16 58.11 1.52 5.05 4.37 10.23 2.85 15.28-2.22 7.37-11.73 9.05-19.42 9.4-2-4.39-.93-9.47-.89-14.29s-1.74-10.51-6.38-11.81c-9.28-2.59-15.68 14.71-24.8 11.59-6.95-2.39-5.15-13-9.19-19.13-3.19-4.86-9.59-6.22-14.55-9.26-10.57-6.49-10.25-16.87-15.16-26.69-5.18-10.34-16.05-7.3-25.49-1.22z",
    fill: "#99607e"
  }), _react.default.createElement("path", {
    d: "M464.06 465.16l-7.63 2.66s3 45.12-7 58.06 32.84 45.11 32.84 45.11 58.72-.33 60.38-5-3-83.6-3-83.6-31.52-12.28-28.87-31.85c0 0-9.62 46.11-23.88 44.12s-30.45-13.9-22.84-29.5z",
    fill: "#e8f5ff"
  }), _react.default.createElement("ellipse", {
    cx: 489.51,
    cy: 490.21,
    rx: 20.13,
    ry: 18.41,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M511.52 466.49s-4-122.08-38.82-94.88-35.16 59.73-28.53 69.34 27.89 57.72 27.89 57.72a24.33 24.33 0 0 0 36-16z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M728.73 157.26a2.94 2.94 0 0 0-.9-1.38c-1.72-1.57-5.42-2.12-11-1.64l.23 2.64c7.44-.64 8.91.84 9.1 1.09v.25l.23.33a11.16 11.16 0 0 1 2 8.8c-1.63 8.15-11.64 14.64-11.74 14.71l-.24.14-.15.23c-4.32 6.41-28.75 24.5-35.14 29.18l-.56-.64c-2.86 2.48-28 24.49-29.36 32.92-.88 5.29-6.84 7.34-9 7.91-2.28-1.73-9.68-7.62-13.53-14.22-3.61-6.21 10.92-18.33 12.2-23.06l-2-2.05c-.21.76-18.87 18.2-13.68 27.11 4.16 7.15 11.76 13.27 14.42 15.29-.85 7.72-6.14 53.05-14.27 63.79-10.1 13.35-18.59 80.63-17.65 104.12.83 20.87-4.62 60.29-22.82 77.22a29.17 29.17 0 0 1-24.07 8h-.44c-.26 0-26.66 2.7-48.84-16-18.15-15.27-28.43-40.19-30.57-74.09h-.44l-.18-9.87a19.25 19.25 0 1 0-2.87.23h.22l.18 9.81-.88.06c2.2 35 13 60.89 32 76.88a74 74 0 0 0 51.61 16.89 37.13 37.13 0 0 0 4 .22 32.8 32.8 0 0 0 23-9.25c19.17-17.85 25-58.72 24.09-80.3-1-24.89 7.91-89.75 16.85-101.56 8.76-11.59 14.07-56.75 15-65.5 3.17-.89 10.34-3.7 11.56-11 .88-5.28 17.67-21.55 28-30.56l-.31-.36c5.56-4.06 22.85-16.86 31.42-25.08 2.66-2.55 5.3-5.1 8.06-7.53 3.32-2.94 7.54-7.61 8.65-13.13a13.65 13.65 0 0 0-2.18-10.6z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M639.27 254.24c-.42-.29-10.38-7.42-15.37-16-5.18-8.91 13.48-26.34 13.68-27.1l2 2.05c-1.27 4.72-15.8 16.85-12.19 23.05 4.55 7.83 14.13 14.68 14.23 14.75z",
    fill: "#353146"
  }), _react.default.createElement("path", {
    d: "M679.82 213.55l-1.56-2.15c.32-.23 31.73-22.95 36.68-30.3l.16-.22.23-.15c.1-.07 10.11-6.55 11.74-14.71a11.09 11.09 0 0 0-2-8.79l-.23-.34v-.24c-.2-.26-1.67-1.73-9.11-1.09l-.23-2.65c5.59-.48 9.28.07 11 1.64a3 3 0 0 1 .91 1.39 13.66 13.66 0 0 1 2.26 10.61c-1.11 5.53-5.32 10.2-8.65 13.13-2.75 2.43-5.4 5-8.05 7.53-10.05 9.63-32.05 25.55-33.15 26.34zM476.39 404.607l2.65-.049.295 16.108-2.65.048z",
    fill: "#e8f5ff"
  }), _react.default.createElement("circle", {
    cx: 476.17,
    cy: 387.65,
    r: 19.35,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 476.17,
    cy: 387.65,
    r: 16.07,
    fill: "#e8f5ff"
  }), _react.default.createElement("path", {
    d: "M563.33 510.84a37.14 37.14 0 0 1-4-.21 74.11 74.11 0 0 1-51.61-16.89c-19-16-29.78-41.86-32-76.89l4-.25c2.14 33.9 12.42 58.83 30.58 74.09 22.18 18.65 48.57 16 48.83 16h.44a29.23 29.23 0 0 0 24.08-8c18.19-16.93 23.64-56.35 22.81-77.22-1-23.51 7.49-90.79 17.6-104.13 8.85-11.69 14.34-64.38 14.4-64.91l.15-1.5 1.48-.26c.09 0 8.73-1.64 9.81-8.1 1.4-8.42 26.5-30.43 29.35-32.92l2.61 3c-10.37 9-27.16 25.28-28 30.57-1.22 7.32-8.39 10.12-11.55 11-1 8.76-6.27 53.91-15 65.5-8.94 11.81-17.85 76.67-16.85 101.56.86 21.58-4.91 62.46-24.08 80.3a32.81 32.81 0 0 1-23.05 9.26z",
    fill: "#353146"
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M726.06 102.47c1.64-6.06 3.62-12.16 5-18.3-1.65 6.17-3.64 12.24-5 18.3zM709.33 150.09c-2-4.39-.93-9.47-.89-14.29s-1.74-10.46-6.38-11.81c-9.28-2.59-15.68 14.72-24.8 11.59-7-2.39-5.15-13-9.19-19.13-3.19-4.86-9.58-6.22-14.54-9.26-10.58-6.49-10.26-16.87-15.16-26.69-5.15-10.3-16-7.26-25.44-1.18-7.17 4.62-13.34 10.81-21 14.5-6.63 3.19-14.08 4.35-21.43 4.52-8.95.21-18.69-1.38-24.84-7.88-4.74-5-6.45-12.33-5.47-19.2-.17.47-.32.94-.47 1.41-2.4 7.87-1 17.12 4.61 23.1 6.15 6.5 15.89 8.08 24.84 7.88 7.36-.17 14.8-1.33 21.44-4.52 7.68-3.7 13.85-9.88 21-14.5 9.44-6.08 20.3-9.12 25.44 1.18 4.9 9.82 4.59 20.2 15.16 26.69 5 3 11.35 4.4 14.55 9.26 4 6.15 2.23 16.74 9.19 19.13 9.11 3.12 15.51-14.18 24.79-11.59 4.64 1.3 6.43 7 6.38 11.81s-1.09 9.9.89 14.29c7.69-.35 17.2-2 19.43-9.4a10.77 10.77 0 0 0 .42-3.27c-3.25 5.61-11.61 7.05-18.53 7.36z"
  })), _react.default.createElement("path", {
    d: "M890.06 396.49l11.61 12.28s9.29 67.67 13.93 74 15.6 31.51 5.31 50.42c0 0-3.32 10.29-1.33 14.6s-14.92 25.88-14.92 25.88-22.23 19.9-26.88 22.89-29.19 26.87-37.48 27.2-11 10.62-11 10.62l-46.78 1.66s-25.84-1.35-31.46 2.3c0 0 3-39.48-25.87-65.36l36.82-13.27s13.94-6 18.25-12.27a22.53 22.53 0 0 1 11-8.29s10.28-7.3 10.61-11.28 12.57-8.86 12.57-8.86l-6.93-59.15 3.65-98.2s11.61-82.28 36.16-77.63 42.74 112.46 42.74 112.46z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M894.06 396.49l11.61 12.28s9.29 67.67 13.93 74 15.6 31.51 5.31 50.42c0 0-3.31 10.29-1.32 14.6s-14.93 25.88-14.93 25.88-22.23 19.9-26.88 22.89-29.19 26.87-37.48 27.2-11 10.62-11 10.62l-46.78 1.66s-25.86-1.35-31.46 2.3c0 0 3-39.48-25.87-65.36l36.82-13.27s13.94-6 18.25-12.27a22.53 22.53 0 0 1 11-8.29s10.28-7.3 10.61-11.28 12.57-8.86 12.57-8.86l-6.93-59.15 3.65-98.2s11.61-82.28 36.16-77.63 42.74 112.46 42.74 112.46z",
    fill: "#e8f5ff"
  }), _react.default.createElement("path", {
    d: "M850.9 495.69s34.17-9 43.13 2-43.13-2-43.13-2zM842.94 510.78c11.61 8.13 47.44 8.46 47.44 8.46zM860.52 551.42c1 .33 24.63 25.55 34.55 17.92s-34.55-17.92-34.55-17.92zM542.28 339.76s6.94 47.78 3.52 67.24 9.06 43.57 9.06 43.57z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M388.64 359.19c-8 6.27-13.84 21.11-18.07 37.42-7.38 28.45-9.79 61.44-9.79 61.44s-63.7-14.6-59.06-21.23c2.92-4.17-1-35.59-4.27-58.37-1.95-13.46-3.69-23.91-3.69-23.91s116.78-12.61 94.88 4.65z",
    fill: "#ffccd0"
  }), _react.default.createElement("path", {
    d: "M388.64 357.86c-8 6.28-13.84 21.11-18.07 37.42a73.5 73.5 0 0 1-73.12-18.15c-1.95-13.47-3.69-23.92-3.69-23.92s116.78-12.6 94.88 4.65z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M422.88 322.12a73.68 73.68 0 1 1-16.21-46.08 73.64 73.64 0 0 1 16.21 46.08z",
    fill: "#ffccd0"
  }), _react.default.createElement("path", {
    d: "M480.96 782.68h-21l-1.77-37.09-1.85-38.39s4.77-.71 12.37-1.77l3.07-.41h.25c1.66 7.79 3.3 15.79 4.88 23.78a244.36 244.36 0 0 1 4.09 43v2.94c.06 2.67 0 5.34-.04 7.94z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M476.93 782.68H213.57c1.14-2.59 1.9-4.16 1.9-4.16s21.07-92.18 31.78-131.18a.51.51 0 0 0 0-.1 156 156 0 0 1 4.84-15.65 5.37 5.37 0 0 1 .47-1c5.3-8.62 11.94-17.91 2.65-31.18s-6-71.66-6-71.66 11.28-49.77 23.22-76.31a35.7 35.7 0 0 1 7.58-11 31 31 0 0 1 3.32-2.82 29.15 29.15 0 0 1 2.78-1.85l.19-.12a40.12 40.12 0 0 1 16.33-5.07 46.59 46.59 0 0 1 12.25.34c19.36 2.84 34.86 7.59 47.18 13 33.39 14.67 43.5 34.33 43.7 34.74l.08.17c1.34 3.13 20.94 48.89 28 70.24 1.83 5.56 2.83 9.47 2.43 10.54-2 5.3 15.26 71.65 15.26 71.65s8 32 16 69.51c.35 1.56.68 3.12 1 4.7 1.43 6.81 2.85 13.75 4.22 20.68a243.09 243.09 0 0 1 4.09 43.3q.22 6.79.09 13.23z",
    fill: "#ff748e"
  }), _react.default.createElement("path", {
    d: "M301.06 407.76s-18.17-7-17.95 3.62 4.43 15.7 3.1 17.25.66 10.84.66 10.84 24.55 0 35.83 5.08 52.86 15.26 58.17 18.36 25 17 25 17l1.77-26.32s-20.35-16.81-53.74-25.43-52.84-20.4-52.84-20.4z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M301.06 406.43s-18.17-7-17.95 3.62 4.43 15.7 3.1 17.25.66 10.84.66 10.84 24.55 0 35.83 5.09 52.86 15.26 58.17 18.35 25 17 25 17l1.79-26.24s-20.35-16.81-53.74-25.43-52.86-20.48-52.86-20.48z",
    fill: "#ff748e"
  }), _react.default.createElement("path", {
    d: "M355.91 469.77s34.72 37.59 32.95 48-32.95-48-32.95-48z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M384.22 683.19s-13.49 27.43-6.19 25.66 6.19-25.66 6.19-25.66z",
    fill: "none"
  }), _react.default.createElement("path", {
    d: "M299.51 605.56s-25.45 23.45-32.95 24.78 5.75 5.75 14.37 2.22 27-12.82 27-12.82z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M487.27 782.68h-59.35c-8.3-7.2-16.15-13.87-21.15-17.88-8-6.42-13.77-15.87-17.45-23.47-.83-1.73-1.55-3.35-2.16-4.82a80.39 80.39 0 0 1-2.88-7.75l43.95-26.1a68.71 68.71 0 0 1 6.83 6.68l.53.61c2.44 2.88 4.59 6.15 4.78 8.83.22 3.12 8.9 15.19 17.77 26.78 9 11.79 18.22 23.06 18.83 23.82s1.52 2.07 4 5.25c1.75 2.3 3.91 5.06 6.3 8.05z",
    fill: "#ffccd0"
  }), _react.default.createElement("path", {
    d: "M406.67 276.04c-2.11 4.76-4 9.7-4.28 15-.79 15.3.49 49.51-16.45 57.19-8.39 3.78-17.37-4.52-26.57-4.72-6.62-.14-12.69 4.06-16.73 9.31s-6.55 11.48-9.48 17.42a119 119 0 0 1-9.19 15.5 39 39 0 0 1-3.4 4.29 73.66 73.66 0 1 1 86.1-113.95z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M401.06 288.34c-.8 15.3.49 49.51-16.46 57.18-8.39 3.78-17.37-4.51-26.57-4.71-6.62-.15-12.68 4.06-16.73 9.3s-6.54 11.48-9.48 17.43a119.24 119.24 0 0 1-9.19 15.5c-2.06 2.92-4.34 5.85-7.51 7.49-5.52 2.88-12.21 1.26-18.13-.59q-11.52-3.63-22.7-8.18a22.9 22.9 0 0 0 .26-3.4c-.22.42-.46.81-.7 1.23l-.47.82c-.85 1.5-1.68 3-2.44 4.54-.29.59-.57 1.2-.82 1.81a23 23 0 0 0-1.87 7.16c-.51 6.67 2.78 13 5.7 19 11.23 23.21 18.17 50.35 9.72 74.7-3.66 10.59-10 20-14.63 30.23a97.67 97.67 0 0 0-6.83 57.78c2.31 12.12 6.94 24.12 5.8 36.41-2 21.15-20.24 36.89-38.51 47.71-9.87 5.82-21.95 11-32.43 6.4 6.68-7.8 8.4-18.59 9.84-28.77q5.91-41.65 11.85-83.34 2.37-16.59 4.73-33.18c2.94-20.78 5.92-41.79 4.08-62.7-1.34-15.41-5.12-31.77 1.56-45.72 3.53-7.39 9.82-13.51 11.78-21.47 1.61-6.47.11-13.35 1.17-19.94a33.94 33.94 0 0 1 2.92-8.64 42.45 42.45 0 0 1 6.7-10.22c-2.68-.78-5.18-1.85-6.7-4.09 4.3-2.8 4.95-9.11 3-13.85s-5.85-8.35-9.36-12.09-6.89-8.1-7.33-13.2c-.85-9.71 8.85-17.23 10.56-26.81 1.73-9.75-5.11-19.23-4.56-29.1.64-11.93 11.6-20.6 22.42-25.63a102 102 0 0 1 52.28-9c14.58 1.38 28.69 5.89 43.23 7.64 8.77 1 17.66 1.1 26.37 2.64s17.44 4.79 23.57 11.18c16.16 16.85-3.2 30.72-4.12 48.48z",
    fill: "#ffe0d0"
  }), _react.default.createElement("path", {
    d: "M387.54 741.34c-5.1-2.21-14.38-.89-30.31-5.74s-19-26.77-19-26.77v-.07c-.19-.5-1.67-3.76-11.69-15.18-11.07-12.61-35-76.3-35-76.3s-21.22-22.79-20.55-31.19-3.77-30.75-3.33-55.75 47.77-41.58 47.77-41.58c91.13-16.15 69.67 88.91 67.24 96.87s10.18 29.46 10.18 29.46c-1.78 9.36 7.3 23.85 7.3 23.85s2.2 12.82 2.65 17.69a3 3 0 0 0 .15.66c1.46 4.59 13.36 8.75 18.2 11.28 5.09 2.66 21.46 25.88 21.46 25.88 3.53 17.05-49.99 49.13-55.07 46.89z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M390.19 737.34c-5.09-2.22-14.38-.89-30.3-5.75s-19-26.76-19-26.76v-.07c-.18-.51-1.67-3.76-11.69-15.18-11.07-12.61-35-76.31-35-76.31s-21.22-22.78-20.56-31.18-3.76-30.75-3.32-55.73 47.74-41.55 47.74-41.55c91.13-16.15 69.67 88.91 67.24 96.87s10.18 29.46 10.18 29.46c-1.78 9.36 7.3 23.85 7.3 23.85s2.2 12.82 2.66 17.69a2.51 2.51 0 0 0 .14.66c1.46 4.59 13.36 8.75 18.21 11.28 5.08 2.65 21.46 25.88 21.46 25.88 3.55 17.02-49.97 49.1-55.06 46.84z",
    fill: "#ff748e"
  }), _react.default.createElement("path", {
    d: "M319.86 539.66s39.81 42 50.2 42-50.2-42-50.2-42z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M390.19 737.34c-5.09-2.22-14.38-.89-30.3-5.75s-19-26.76-19-26.76v-.07c10.55-7 37.27-26.77 47.8-34 7.41-5.07 13.46-12.52 17-17.46 1.46 4.59 13.36 8.75 18.21 11.28 5.08 2.65 21.46 25.88 21.46 25.88 3.44 17.06-50.08 49.14-55.17 46.88z",
    fill: "#ff748e"
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M245.06 348.19c.05.08.12.15.18.23.3-.38.61-.76.93-1.12a7.46 7.46 0 0 1-1.11.89zM268.26 394.03c.42-5.55 3.39-10.44 6.17-15.32-1.82-.7-3.64-1.41-5.44-2.15a22.66 22.66 0 0 0 .26-3.39c-2.81 5-5.87 9.92-6.3 15.55-.51 6.68 2.78 13 5.7 19 11.24 23.2 18.17 50.34 9.72 74.7-3.67 10.58-10 20-14.63 30.23a97.63 97.63 0 0 0-6.82 57.77c2.29 12.13 6.93 24.12 5.79 36.41-2 21.15-20.23 36.89-38.51 47.7-7.47 4.42-16.2 8.47-24.55 8.18a30.25 30.25 0 0 1-2.58 3.55c10.49 4.63 22.56-.58 32.43-6.42 18.29-10.8 36.56-26.5 38.56-47.69 1.14-12.29-3.5-24.28-5.8-36.41a97.71 97.71 0 0 1 6.8-57.77c4.6-10.22 11-19.65 14.63-30.23 8.45-24.36 1.51-51.5-9.72-74.7-2.91-6.04-6.22-12.33-5.71-19.01z"
  }), _react.default.createElement("path", {
    d: "M405.16 239.98a28.89 28.89 0 0 0-3.16-2.8c12.12 15.72-5.38 29.08-6.25 46-.78 15.3.5 49.52-16.45 57.18-8.38 3.79-17.37-4.51-26.56-4.71-6.63-.14-12.69 4.07-16.74 9.31s-6.54 11.48-9.47 17.42a119.76 119.76 0 0 1-9.2 15.5c-2 2.93-4.34 5.85-7.52 7.5-5.5 2.87-12.19 1.26-18.12-.6q-8.65-2.72-17.14-6a21.63 21.63 0 0 1-.26 3.11q11.19 4.56 22.71 8.18c5.92 1.86 12.61 3.47 18.12.6 3.17-1.65 5.47-4.58 7.52-7.51a117.8 117.8 0 0 0 9.19-15.49c2.94-5.94 5.42-12.19 9.48-17.43s10.11-9.44 16.73-9.3c9.2.2 18.19 8.5 26.57 4.71 16.95-7.66 15.66-41.88 16.45-57.18.92-17.79 20.28-31.65 4.1-48.49z"
  })), _react.default.createElement("path", {
    d: "M273.39 380.42c-.85 1.5-1.68 3-2.44 4.54-.29.59-.57 1.2-.82 1.81-5.24-5.28-18-17.83-25.12-21.72a42.65 42.65 0 0 1 6.7-10.22s16.97 8.97 21.68 25.59z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M273.86 379.6c-3.93-17.79-22.15-27.42-22.15-27.42a42.45 42.45 0 0 0-6.7 10.22c7.51 4.11 21.35 17.89 25.94 22.56z",
    fill: "#ff748e"
  }));
};

UndrawDoctor.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawDoctor;
exports.default = _default;