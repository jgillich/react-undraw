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

var UndrawEnvelope = function UndrawEnvelope(_props) {
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
    viewBox: "0 0 1034.95 831.61",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 924.49,
    y1: 836.62,
    x2: 924.49,
    y2: 217.05,
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
  }))), _react.default.createElement("path", {
    d: "M601.31 95.07c-66.35-1.91-129.54-19.75-189.84-39.27S291.31 14.69 226.55 4.35c-41.65-6.65-89.28-7.59-122.84 11-32.3 17.89-42.73 48.78-48.34 77.45-4.23 21.56-6.71 44.26 4.86 64.44 8 14 22.29 25.79 32.15 39.21 34.3 46.71 10.06 104.3-27.12 149.9-17.44 21.39-37.67 41.8-51.13 64.57S-5.53 459.8 6.22 483c11.67 23 39.48 40.31 69.61 52.48 61.19 24.7 133.3 31.77 203.61 35.78 155.64 8.86 312.12 5 468.18 1.18 57.75-1.42 115.76-2.86 172.58-10.3 31.55-4.13 64.12-10.68 87-26.5 29.08-20.08 36.28-54.09 16.8-79.27-32.68-42.24-123-52.73-145.89-98.06-12.58-24.95.34-52.75 18.61-75.89 39.2-49.64 104.91-93.19 108.37-149.93 2.37-39-29.21-78-78.05-96.44-51.19-19.33-122.18-16.9-160 15.1-38.81 32.94-107.15 45.65-165.73 43.92z",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 435.45,
    cy: 802.29,
    rx: 290.75,
    ry: 29.32,
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M169.47 799.11s-12.9-73.09-60.78-109.31c-20.09-15.2-34.79-35.87-41.21-59.41a179.25 179.25 0 0 1-5.78-34.1",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M31.68 573.29c4 7.83 30.73 23.68 30.73 23.68s3.36-29.61-.67-37.45-14-11.11-22.32-7.31-11.77 13.24-7.74 21.08zM29.13 628.08c7.9 4.51 39.44 4.11 39.44 4.11s-14.23-26.58-22.1-31.09-18.16-2.13-22.94 5.32-2.29 17.15 5.6 21.66zM68.34 701.8c9.22.13 36.23-15.25 36.23-15.25s-26.49-16.16-35.72-16.3-16.82 6.82-17 15.53 7.26 15.86 16.49 16.02zM111.3 751.23c9.06 1.61 38.44-9.25 38.44-9.25s-23.22-20.18-32.27-21.76-17.8 4-19.5 12.6 4.26 16.81 13.33 18.41zM100.91 619.25c-3.15 8.19-28 26.55-28 26.55s-6.58-29.12-3.43-37.31 12.74-12.42 21.41-9.45 13.17 12.03 10.02 20.21zM150.38 677.69c-5.6 6.93-35.12 17.43-35.12 17.43s3-29.65 8.56-36.57a17.38 17.38 0 0 1 23.42-3 15.2 15.2 0 0 1 3.14 22.14zM190.2 740.72c-4.28 7.72-31.49 22.78-31.49 22.78s-2.39-29.69 1.89-37.41 14.37-10.7 22.55-6.66 11.32 13.57 7.05 21.29z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M31.68 573.29c4 7.83 30.73 23.68 30.73 23.68s3.36-29.61-.67-37.45-14-11.11-22.32-7.31-11.77 13.24-7.74 21.08zM29.13 628.08c7.9 4.51 39.44 4.11 39.44 4.11s-14.23-26.58-22.1-31.09-18.16-2.13-22.94 5.32-2.29 17.15 5.6 21.66zM68.34 701.8c9.22.13 36.23-15.25 36.23-15.25s-26.49-16.16-35.72-16.3-16.82 6.82-17 15.53 7.26 15.86 16.49 16.02zM111.3 751.23c9.06 1.61 38.44-9.25 38.44-9.25s-23.22-20.18-32.27-21.76-17.8 4-19.5 12.6 4.26 16.81 13.33 18.41zM100.91 619.25c-3.15 8.19-28 26.55-28 26.55s-6.58-29.12-3.43-37.31 12.74-12.42 21.41-9.45 13.17 12.03 10.02 20.21zM150.38 677.69c-5.6 6.93-35.12 17.43-35.12 17.43s3-29.65 8.56-36.57a17.38 17.38 0 0 1 23.42-3 15.2 15.2 0 0 1 3.14 22.14zM190.2 740.72c-4.28 7.72-31.49 22.78-31.49 22.78s-2.39-29.69 1.89-37.41 14.37-10.7 22.55-6.66 11.32 13.57 7.05 21.29z",
    opacity: 0.25
  }), _react.default.createElement("path", {
    d: "M167.85 797.19s19.57-71.76-8.65-123.2c-11.84-21.58-16.41-46.1-12.17-70.08a180 180 0 0 1 9.35-33.38",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M138.8 538.02c.32 8.7 17.93 33.41 17.93 33.41s15.78-25.79 15.46-34.5-8.05-15.52-17.27-15.22-16.45 7.6-16.12 16.31zM112.96 587.14c5.28 7.14 34.28 18.84 34.28 18.84s-1.6-29.74-6.88-36.89a17.35 17.35 0 0 0-23.26-3.91 15.23 15.23 0 0 0-4.14 21.96zM117.16 669.51c8.38 3.65 39.68-.07 39.68-.07s-17.29-24.92-25.67-28.57-18.3-.2-22.17 7.71-.21 17.28 8.16 20.93zM135.21 731.16c7.61 4.94 39.12 6.25 39.12 6.25s-12.58-27.31-20.18-32.24a17.33 17.33 0 0 0-23.23 4 15.23 15.23 0 0 0 4.29 21.99zM182.37 606.53c-6.4 6.28-37 13.57-37 13.57s6.49-29.15 12.88-35.43a17.42 17.42 0 0 1 23.63-.44 15.16 15.16 0 0 1 .49 22.3zM202.47 678.88c-8.09 4.19-39.58 2.5-39.58 2.5s15.43-26 23.52-30.16 18.25-1.39 22.68 6.25 1.51 17.22-6.62 21.41zM211.86 751.74c-7.23 5.42-38.57 8.78-38.57 8.78s10.56-28.07 17.79-33.49a17.38 17.38 0 0 1 23.47 2.55 15.19 15.19 0 0 1-2.69 22.16z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M1074.74 412.36c.6-1.64-3.9-10.73-3.9-11.18s-4.65-5.52-4.65-8.35-6.16-8.94-6.16-8.94-8.25-3.43-9.15-10.88-9.89-7.61-9.91-7.61 0-.68.06-1.71c0-2.32-.07-6.46-1.11-8.72a8.85 8.85 0 0 0-5.11-4.33s-.9-5.81-2.7-7.6A8.56 8.56 0 0 1 1030 335c.9-2.83-1.2-10-5.56-11s-9.3-2.68-9.3-2.68-.49.09-1.2.19l-.6-.19a26.78 26.78 0 0 1-3.16.39 3.85 3.85 0 0 1-2.54-.84c-1.51-1.64-13.67-4.77-15.92-4.77s-8.71-3-8.71-3l-6.44-4.92c-1.81-1.38-5.16-7-5.65-7.79l-.06-.11a27 27 0 0 1-1.36-3.92 35.44 35.44 0 0 0 5.58-7.67c.16-.29.3-.59.44-.88a3.59 3.59 0 0 0 1-.16c.13 0 .26-.1.39-.15a6.55 6.55 0 0 0 3.19-3.81c.11-.32.21-.65.29-1 0-.11 0-.23.07-.34s.1-.45.14-.68.05-.26.07-.38.07-.45.1-.68 0-.25 0-.37c0-.29.07-.57.11-.85a30.28 30.28 0 0 1 .47-3.15c.9-4 3.33-7.46 5.06-11.2a21.338 21.338 0 0 0 1.28-3.44l.15-.56c.11-.44.21-.89.3-1.34 0-.2.08-.4.11-.6.1-.62.19-1.24.24-1.87a23.18 23.18 0 0 0-1.49-10.51c-1.13-2.8-2.8-5.32-3.94-8.12-1.73-4.24-2.18-9-4.29-13.08-3.53-6.78-11.85-10.17-18.69-7.62-3.27 1.21-6.1 3.57-9.41 4.63-4.44 1.41-9.18.35-13.77-.29s-9.67-.69-13.36 2.31c-4.25 3.45-5.42 9.94-9.41 13.73-1.67 1.59-3.76 2.61-5.53 4.08a9 9 0 0 0-2.77 3.79c0 .11-.07.21-.1.32s-.07.25-.1.38-.06.3-.08.45 0 .21 0 .31a5.33 5.33 0 0 0 0 .8 6.54 6.54 0 0 0 .13.75v.21c0 .07.12.41.19.62a.56.56 0 0 0 0 .12c.08.23.17.45.26.68l.15.34.12.28a17.38 17.38 0 0 1 1.39 3.46 3.91 3.91 0 0 1-.13 2.29 7 7 0 0 1-1.67 2.18 31 31 0 0 0-6.77 10.85c-.17.46-.34.92-.49 1.4l.21.05a8.52 8.52 0 0 0 1.31.29c.25 0 .5.06.76.08a11.75 11.75 0 0 0 3.06-.24c.25-.05.51-.11.76-.18a18.87 18.87 0 0 0 3-1.11v1.42a35.47 35.47 0 0 0 19.69 31.71c0 .32.09.65.13 1s.07.54.1.81l-.4-.39s-2.71-1.34-5.26 2.53-7.35 5.67-7.35 5.67-27.32 4.32-28.37 7.9l-12.76.74s-4.51.6-5 10-2.85 10.29-2.85 10.29-5.25 9.24-4.8 14-4 7.16-4 7.16l-.6 8.49s-5-.74-6.31 5.07-3.75 8.5-3.75 8.5-8.26 6.86-8.71 12.67l-5.1 3.13s-11.86-2.68-14.56-7.45l-.83-.78a.75.75 0 0 1-.07-.12.28.28 0 0 0 0 .06c-1.78-1.68-5.54-5.18-5-4.38a3.64 3.64 0 0 1 .24 2.4l-.88-1-2.36-2.62s-19.17-18-30.43-19.38c-.15-.29-.87-3.12-2.79-1.35a15.65 15.65 0 0 0-.11 23l17.95 16.77.46.34 3.86 5a60.03 60.03 0 0 0-1.65 4.45s0 .09-.05.13c-.09.3-.19.58-.28.86l-.09.3c-.08.28-.17.56-.25.82s-.09.33-.14.49 0 .19-.08.28c-.42 1.5-.7 2.65-.84 3.29l-1-.31 1 .42v.16l-.06.31.92.4c5.26 2.29 31.51 13.8 32.86 15.55 1.5 1.93 11.4 7.6 20.41 2.83s11-12.08 11-12.08 8.7-12.07 9-13.86 7.06-3.88 7.06-3.88.6 20-2.85 27.28-9.91 39.66-9.91 39.66a4.76 4.76 0 0 1 1.28-.08c-.24 1.17-.38 1.87-.38 1.87a4.46 4.46 0 0 1 1.59 0c-.48 3.68-3.24 20.76-3.24 20.76s-.9 7.75-2.4 10.43-1.65 16.7-1.65 16.7l-2.4 10.13a19.57 19.57 0 0 0 .91 1.75s2.58 5.72 6.91 8.93a18.3 18.3 0 0 1-1.21 4.64 16.07 16.07 0 0 0-1.2 7.15s-2.55 11.48-2.25 14.76-1.65 11.33-1.65 11.33L854.54 613s-1.8 22.51-.9 28.63-.61 14.45-.61 14.45 1.8 17.74 1.35 19.68-2.7 10.28-1.35 14.91.61 17.29.61 17.29.9 16.69 1.94 22.06-.3 12.23-.3 12.23-1 11.47-1.5 11.47-4.35 7.9 3.6 15.66 3 6.55 3 6.55-6.3-3.13-5.56 3.28c.72 6.1 1.71 4.51 1.8 4.34l-1.5 4.9 1 .15-.87 1a23.29 23.29 0 0 1-3 3.14c-1.81 1.34-2 4.32-2 4.32s-11.1 12.08-21.46 18.19c-5.45 3.22-10.15 5.94-12.2 8.19-1.85 2-1.55 3.66 2.29 4.93 8.11 2.68 22.36 4 32.57.6a38.06 38.06 0 0 0 15.91-10.29s6.46-3.28 12.77-2.09 18.91-7 18.91-7l-.23-2.12-.67-6.09a4.79 4.79 0 0 1-1.05-3.72 19.31 19.31 0 0 0-.53-5.36c-.1-.59-.22-1.18-.33-1.73l1.15-.21s-1.49-7.61 1.21-9.1 1.94-21 1.94-21-3.44-4.47-5.25-5.21-.15-10 .16-11.19 2.7-24.3 2.7-24.3-.9-7.3.3-10.43S897 694 897 694s-.9-1.49.76-3.28 1-17.74 1-17.74-.14-8.05-.14-10.14 1.8-9.69 3.45-12.22.6-10.44.6-10.44l.09-.59c0-.23.08-.51.14-.85l.13-.79a112.6 112.6 0 0 1 2.97-13.01c2-6.26 4.2-17.29 4.2-17.29l14-36.4.16-.43s6.45 11.93 6.45 23c0 0 1.65 13.27 1.2 16.85s1.33 20.33 1.33 20.33 1.95 24.15 1.95 25.2 2.4 19.68 3.91 22.51-1.51 11.48-2.41 12.37.3 22.81.3 22.81-2.25 17.29-2.7 20.87-2.25 17.3-.75 22.66.9 6.11.9 6.11 5.41 5.52 2.25 6a8.25 8.25 0 0 0-6 10.87 139.25 139.25 0 0 0 6.61 16s.93-.21 2.48-.52v1.77l.18 8.88s1 8.5.45 10.44c-.44 1.42-1 8.1-1.33 11.59-.11 1.27-.17 2.12-.17 2.12s0 7.9 16.66 5.52 19.66-8.94 19.66-8.94 0-.31.12-.82c.25-1.51.79-4.71 1.23-6.49.6-2.39-4.8-13.12-4.8-13.12s-.9-7.3-2.41-8.94a7.92 7.92 0 0 1-1.2-3.13c-.14-.6-.26-1.23-.36-1.84a11 11 0 0 1 1.11.2s-.9-5.22 2.56-6.86 2.55-5.06 2.1-6.56 1.35-9.84 1.35-9.84a4.85 4.85 0 0 1 1.2-4.76c2.11-2.1 3.75-16.7 3.75-16.7l.3-56.35s1.06-10-.14-14-2.41-11.77-.76-13.86.15-11.77.15-11.77 0-20.43 2.26-25.49 1.5-37.12 1.5-37.12l.59-21s4.91-4.64 3.75-28.83c5.23-.33 11.13-.52 12 .2 1.65 1.35 12.31 8.2 18.61 3.88 1.35-.6 7.5-5.81 7.5-5.81l-2.64-44.7c1.65 2.49 2.65 4.15 2.65 4.15 0-6.26 17.71-26.54 17.71-26.54s16.51-21.31 20.11-23.85 10.66-15.95 10.66-15.95a64.65 64.65 0 0 1 3.61-7.45c1.71-2.75-3.7-9.91-3.1-11.55zM1036 428c-4.5.45-14 10.74-14.11 13-.07 1.18-1.07 2.76-2 4-.07-.9-.15-1.82-.22-2.75-1.06-13.17-2.21-29.22-1.69-30.78.91-2.68.6-14.75.6-14.75l.16-.23c3 9.35 12.43 20.38 12.43 20.38s1.65 4.77 3.6 4.92S1036 428 1036 428z",
    transform: "translate(-82.53 -34.2)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M712.81 390.41s5.47-28.7 23.08-28.85l12.87 26.48-8.58 5.92s-18.64.59-27.37-3.55z",
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M748.76 388.04l-8.58 5.92s-13.12.42-22.5-1.89a26.92 26.92 0 0 1-4.87-1.66s0-.16.1-.46v-.11a64.76 64.76 0 0 1 3.33-10.54c.55-1.29 1.16-2.62 1.82-3.95 2.58-5 6.2-9.82 11.16-12.23a15.17 15.17 0 0 1 5.87-1.53h.78l.28.59 4.35 8.94z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M894.92 507.28s18.5-1.77 20.12-.44 12.13 8.13 18.35 3.84 2.07-19.23 2.07-19.82-.59-21.75-.59-21.75l-11.1-14.94-13.9-26.18-28.4-2.82.74 41.58-.15 21.3z",
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M894.92 507.28s18.5-1.77 20.12-.44 12.13 8.13 18.35 3.84 2.07-19.23 2.07-19.82-.59-21.75-.59-21.75l-11.1-14.94-13.9-26.18-28.4-2.82.74 41.58-.15 21.3z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M732.19 360.8s-1.48 18.05-12.72 18.34c0 0-3.19-1.92-7.48-5.12-9.88-7.39-25.55-21.6-21.22-34.82 6.21-18.93 36.39 16 36.39 16l2.31 2.6z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M732.19 360.8s-1.48 18.05-12.72 18.34c0 0-3.19-1.92-7.48-5.12l-.95-1.23a14.79 14.79 0 0 0 6.16 1.66 8.33 8.33 0 0 0 8-5.07 63.51 63.51 0 0 0 3.11-7.16 20.87 20.87 0 0 0 1.16-4.42z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M727.31 393.52l-2.53-3.26-8.52-11-4.34-5.61a14.62 14.62 0 0 0 6.16 1.66c2.83.07 6-1 8-5.06a64.62 64.62 0 0 0 3.11-7.17c1.4-4 1.38-6 .88-6.73s3.14 2.68 4.89 4.34l.06.06.82.77.3.6 4.29 8.57v.36c.42 2.75 1.87 20.02-13.12 22.47z",
    fill: "#e7effd"
  }), _react.default.createElement("path", {
    d: "M815.93 774.31s-12.43 8.14-18.64 7-12.58 2.08-12.58 2.08a37.48 37.48 0 0 1-15.69 10.21c-10 3.4-24.1 2.06-32.09-.6-3.78-1.26-4.09-2.88-2.27-4.89 2-2.24 6.66-4.93 12-8.13 10.21-6.06 21.15-18 21.15-18s.15-3 1.93-4.28a23.06 23.06 0 0 0 3-3.12c1.59-1.88 3.08-3.84 3.08-3.84l36.56 1.06s.62 2.63 1.11 5.32a19.27 19.27 0 0 1 .51 5.33 4.82 4.82 0 0 0 1 3.69l.66 6zM892.41 784.52c-.44 1.77-1 4.94-1.21 6.43l-.13.82s-3 6.51-19.37 8.88-16.42-5.48-16.42-5.48.06-.84.16-2.11c.29-3.46.88-10.09 1.32-11.5.58-1.92-.45-10.36-.45-10.36l-.17-8.81-.13-6.12 27.23-2.82a49.4 49.4 0 0 0 .88 6.06 7.75 7.75 0 0 0 1.19 3.11c1.48 1.63 2.36 8.88 2.36 8.88s5.33 10.65 4.74 13.02z",
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M812.38 751.8s.62 2.63 1.11 5.32c-3.95.73-21.21 3.72-25.52 1.63-4.89-2.37-15.39-3.7-15.39-3.7l.17-.6c1.59-1.88 3.08-3.84 3.08-3.84zM884.12 759.51c-6.9-1.17-22 1.66-28 2.88l-.13-6.12 27.23-2.82a49.4 49.4 0 0 0 .9 6.06z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M899.47 535.24l-.59 20.86s.74 31.81-1.48 36.84-2.22 25.3-2.22 25.3 1.48 9.61-.15 11.68-.44 9.76.74 13.76.15 13.91.15 13.91l-.3 55.92s-1.62 14.49-3.7 16.57a4.85 4.85 0 0 0-1.18 4.73s-1.77 8.28-1.33 9.77 1.33 4.88-2.07 6.5-2.52 6.81-2.52 6.81c-8.13-1.93-31.21 3.26-31.21 3.26a138.84 138.84 0 0 1-6.51-15.84 8.19 8.19 0 0 1 5.92-10.79c3.1-.45-2.22-5.92-2.22-5.92s.59-.74-.89-6.06.29-19 .74-22.5l2.66-20.71s-1.18-21.74-.29-22.63 3.84-9.47 2.37-12.28-3.86-21.3-3.86-22.34-1.91-25-1.91-25-1.78-16.72-1.33-20.27-1.19-16.71-1.19-16.71c0-11-6.36-22.79-6.36-22.79l-.16.43-13.71 36.12s-2.22 10.94-4.14 17.15a112.18 112.18 0 0 0-2.89 12.85l-.13.79c0 .33-.1.61-.13.83l-.09.6s1 7.84-.6 10.36-3.4 10.06-3.4 12.13.15 10.06.15 10.06.59 15.83-1 17.61-.75 3.25-.75 3.25 2.66 12 1.48 15.09-.29 10.35-.29 10.35-2.37 22.94-2.66 24.12-1.93 10.36-.15 11.1 5.17 5.17 5.17 5.17.75 19.39-1.92 20.86-1.19 9-1.19 9-21.44 4.14-26.32 1.77-15.39-3.7-15.39-3.7l1.47-4.86c-.09.17-1.07 1.75-1.77-4.31-.73-6.36 5.48-3.26 5.48-3.26s4.88 1.19-3-6.5-4-15.54-3.55-15.54 1.49-11.38 1.49-11.38 1.33-6.81.29-12.14-1.92-21.9-1.92-21.9.74-12.57-.59-17.15.88-12.88 1.33-14.8-1.38-19.48-1.38-19.48 1.48-8.28.59-14.34.89-28.41.89-28.41l2.66-25.74s1.92-8 1.63-11.25 2.23-14.64 2.23-14.64a16 16 0 0 1 1.18-7.1c1.48-3 2.07-12.72 2.07-12.72l14.21-32.55 7-28.7 93.93-.89s.35 2.49.92 7 1.37 11.21 2.26 19.48c.82 7.51 1.72 16.34 2.59 26.17 2.84 31.38-3.16 37-3.16 37z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M890.78 276.2l-21.9 23.38s-28.1-11.25-25.14-15.09c1.14-1.49 1-6.19.3-11.37-1-8.2-3.26-17.63-3.26-17.63s49.11-8 45 .29c-1.51 3-1.25 6.56-.31 9.83a37 37 0 0 0 5.31 10.59z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M885.75 255.8c-1.51 3-2.23 3.32-1.29 6.59-6.42 6.87-14.59 14.41-24.75 14.41a35.06 35.06 0 0 1-15.67-3.67c-1-8.2-3.26-17.63-3.26-17.63s49.11-8 44.97.3z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M894.93 240.69a35.22 35.22 0 0 1-70.43 0v-.5a35.21 35.21 0 0 1 70.42.5z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M900.02 472.98c-4.66 0-20.19.17-37.55.44h-.21l-5.73.1h-.18c-20.58.33-40.87-3.69-49-2.93-17.3 1.62 6.22-16 6.22-16a144.78 144.78 0 0 0 39.43 4l5-.26c15.72-.89 31.53-2.37 39.79-4.85.55 4.58 1.34 11.23 2.23 19.5z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M900.02 472.09c-4.66 0-20.19.17-37.55.44h-.21l-5.73.1h-.18c-20.58.33-40.87-3.69-49-2.93-17.3 1.63 6.22-16 6.22-16a144.78 144.78 0 0 0 39.43 4l5-.26c15.72-.89 31.53-2.37 39.79-4.84.55 4.58 1.34 11.2 2.23 19.49z",
    fill: "#5f5d7e"
  }), _react.default.createElement("path", {
    d: "M850.25 285.96l-27.22 12.73-21 162.43s12.42-5.62 19.53-2.07 29 .3 29 .3 16-.89 18.35.89 30.16-7.44 30.16-7.44 5-11.24 1.18-13 1.22-19.21 1.22-19.21l-2.4-117.17-4.74-15.09-12.72-7.69-13 10.35-6.21.89z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M850.25 284.19l-27.22 12.72-21 162.44s12.42-5.62 19.53-2.07 29 .29 29 .29 16-.88 18.35.89 30.18-7.4 30.18-7.4 5-11.24 1.18-13 1.2-19.26 1.2-19.26l-2.4-117.16-4.74-15.08-12.72-7.7-13 10.36-6.21.89z",
    fill: "#e7effd"
  }), _react.default.createElement("path", {
    d: "M849.8 291.73s7.84 9.32 7.7 11.25-.45 6.51-.45 6.51l-5.92 12s-3.25 14.94-3.25 18.05-5.18 30-5.18 30l-6.23 41.43-7.84 54.3 8 13.75 9.46-8 12.58-96.76 2.66-19.08s2.81-34.32 2.81-37.87-1.62-12.87-1.62-12.87 1.92-8.88 9.91-11-.59-.45-.59-.45l-4.59-3.69-4 1.62s-11.08-3.33-13.45.81z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M848.91 290.85s7.85 9.32 7.7 11.24-.45 6.51-.45 6.51l-5.91 12s-3.26 14.94-3.26 18.05-5.18 30-5.18 30l-6.21 41.42-7.84 54.3 8 13.76 9.47-8 12.57-96.75 2.67-19.07s2.81-34.32 2.81-37.87-1.62-12.87-1.62-12.87 1.92-8.88 9.91-10.95-.59-.44-.59-.44l-4.59-3.7-4 1.63s-11.11-3.41-13.48.74z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M843.74 275.31s-1.19.89-1.48 6.81-4.44 19.23-4.44 19.23 15.39-10.65 23.08-9.47z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M843.74 273.54s-1.19.88-1.48 6.8-4.44 19.23-4.44 19.23 15.39-10.65 23.08-9.46z",
    fill: "#e7effd"
  }), _react.default.createElement("path", {
    d: "M885.75 270.58l-24.28 21.3s20.42 12.13 23.08 15.09 5.32-29 5.32-29z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M886.64 268.8l-24.26 21.31s20.41 12.13 23.09 15.09 5.32-29 5.32-29z",
    fill: "#e7effd"
  }), _react.default.createElement("path", {
    d: "M844.62 275.31s-2.66-1.33-5.17 2.52a16.8 16.8 0 0 1-7.25 5.62s-26.93 4.29-28 7.84l-12.58.74s-4.44.59-4.88 9.91-2.81 10.21-2.81 10.21-5.18 9.17-4.73 13.9-4 7.11-4 7.11l18.49 48.08s.6 19.82-2.81 27.07-9.76 39.35-9.76 39.35 2.66-.59 2.51 1.18-3.16 21.16-3.16 21.16-.89 7.69-2.37 10.36-1.63 16.56-1.63 16.56l-2.36 10.06s5.62 12.58 14.2 10.8 24.11-35.35 24.11-35.35l9.92-36.25 7.69-35.8 2.22-24.26 3.55-53.7 5.18-35.51s5.72-19.11 3.64-21.6z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M843.74 273.54s-2.67-1.33-5.18 2.51a16.71 16.71 0 0 1-7.25 5.62s-26.92 4.29-28 7.84l-12.58.74s-4.43.6-4.88 9.92-2.81 10.2-2.81 10.2-5.18 9.18-4.73 13.91-4 7.1-4 7.1l18.5 48.08s.59 19.82-2.81 27.07-9.77 39.36-9.77 39.36 2.66-.6 2.52 1.18-3.26 21.15-3.26 21.15-.89 7.7-2.37 10.36-1.62 16.57-1.62 16.57l-2.37 10.06s5.62 12.57 14.2 10.8 24.14-35.36 24.14-35.36l9.91-36.24 7.69-35.8 2.22-24.27 3.55-53.7 5.18-35.5s5.79-19.09 3.72-21.6z",
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M748.76 388.04l-8.58 5.92s-13.12.42-22.5-1.89l-4.77-2.12-1-.42 1 .31c4.95 1.47 8.82 1.44 11.85.42 12.14-4.09 10.8-24.14 10.33-28.67 0-.46-.08-.75-.1-.86a.28.28 0 0 1 0-.06l.07.12a6.62 6.62 0 0 0 .56.78c.17.19.35.39.54.58l4.29 8.57v.36z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M778.47 330.2l-4.15 1.18-.59 8.43s-4.88-.74-6.21 5-3.7 8.44-3.7 8.44-8.14 6.8-8.58 12.57l-5 3.11s-11.69-2.67-14.35-7.4c0 0 5.33 38.17-23.08 28.85 0 0 31.81 13.9 33.29 15.83s11.24 7.54 20.12 2.81 10.8-12 10.8-12 8.58-12 8.87-13.76 7-3.85 7-3.85l12.72-30.77z",
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M882.35 288.33l4.29-19.53s1.92 6.36 3.85 7.84l6.36 4.89s6.36 2.95 8.58 2.95 14.2 3.11 15.68 4.74 7.4.44 7.4.44 4.88 1.63 9.17 2.66 6.36 8.14 5.47 11a8.53 8.53 0 0 0 2.07 8c1.78 1.78 2.67 7.55 2.67 7.55a8.66 8.66 0 0 1 5 4.29c1.48 3.25 1 10.35 1 10.35l-22 31.07s.29 12-.59 14.65 3.1 47.93 3.1 47.93l4.59 77.81s-6.07 5.18-7.4 5.77-2.66-27.51-2.66-28.55S894.76 431 894.76 431s-4.59-7.39-4.59-9-4.29-16.57-4.29-16.57l-6.51-28.85z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M955.78 331.8v1.7l-22 31s.3 12-.58 14.64c-.52 1.55.61 17.47 1.66 30.55.74 9.43 1.44 17.38 1.44 17.38l1.95 33 2.63 44.8s-6.06 5.18-7.39 5.77-2.66-27.51-2.66-28.55-34.18-51.18-34.18-51.18-4.59-7.41-4.59-9-4.29-16.57-4.29-16.57l-6.5-28.85 2.95-88.17 2.42-19.52s3.7 6.37 5.62 7.84l6.36 4.88s6.36 3 8.58 3 14.21 3.1 15.69 4.73 7.39.44 7.39.44 4.88 1.63 9.17 2.66 6.37 8.14 5.48 11a8.51 8.51 0 0 0 2.07 8c1.77 1.77 2.66 7.54 2.66 7.54a8.7 8.7 0 0 1 5 4.3c1.06 2.15 1.16 6.26 1.12 8.61z",
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M774.95 725.94c.73 0 31.8 1.18 31.21 6.21s-31.21-6.21-31.21-6.21zM781.9 734.37s20.86 3.4 15.38 6.51-15.38-6.51-15.38-6.51zM859.47 722.68s34.62 3 29.44 6.81-17.46 4.43-18 4.58-11.44-11.39-11.44-11.39zM855.28 737.92s19.23 3.25 19.82 7-19.82-7-19.82-7zM865.93 648.86s17.6 4.14 18.64 7zM798.02 661.58s-9.17 2.66-.29 8 .29-8 .29-8zM838.71 519.41c1 0 17.16-5.32 22.78-3a37.49 37.49 0 0 0 12.57 2.39zM840.78 536.27l-.16 1.47-13.75 36.12s-2.22 10.94-4.14 17.15a112.18 112.18 0 0 0-2.89 12.85l12.21-75.72z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M862.26 472.53l-5.73.1h-.18l-3.36-14.91 5-.27z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M932.06 454.47l-3.69 3-12.29 10.13s-33.29 17.76-42.46.89c-8.08-14.86 29.66-25.47 38.75-27.78 1.23-.31 1.93-.47 1.93-.47z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M789.89 309.04s6.51 3 8 7.1-8-7.1-8-7.1zM769.77 353.42s-9.47 11.54-5.62 16 5.62-16 5.62-16zM939.01 315.55s-8.88.89-9.17 8.58zM856.76 436.86c.88-.89 21.3-31.07 26-28.4zM894.93 240.69a35 35 0 0 1-4.17 16.62l-.26-.05c-2.23-.47-3.39-3.07-5.1-4.69a6.93 6.93 0 0 0-8-1.12 8.13 8.13 0 0 0-3.92 7.59c-1.13-4.74-.77-9.77-1.87-14.52s-4.41-9.55-8.95-9.63c-2 0-4.23.71-5.65-.75-.85-.88-1-2.27-1.66-3.35-3.24-5.24-13.11-2.59-17.14.1s-8.7 7-13.71 9.3a35.21 35.21 0 0 1 70.42.5z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M855.36 229.91c.64 1.07.81 2.46 1.66 3.34 1.41 1.47 3.7.71 5.65.75 4.54.08 7.85 4.88 8.95 9.63s.74 9.78 1.87 14.52a8.11 8.11 0 0 1 3.93-7.59 6.93 6.93 0 0 1 8 1.12c1.71 1.62 2.87 4.22 5.1 4.69s4.38-1.67 5.19-4 .75-4.93 1.28-7.37c1-4.61 4-8.4 5.68-12.79a23.17 23.17 0 0 0-.15-16.52c-1.11-2.78-2.76-5.28-3.89-8.05-1.7-4.22-2.14-9-4.22-13-3.48-6.73-11.68-10.09-18.43-7.56-3.21 1.2-6 3.54-9.27 4.59-4.37 1.41-9.05.35-13.57-.28s-9.53-.69-13.17 2.28c-4.19 3.43-5.33 9.87-9.27 13.63-1.65 1.58-3.7 2.59-5.44 4s-3.25 3.63-3 6c.26 3.06 3.26 5.84 2.15 8.68a7 7 0 0 1-1.64 2.17 30.93 30.93 0 0 0-7.16 12.18c7.91 2.48 16.48-6.25 22.68-10.38 3.97-2.63 13.83-5.29 17.07-.04z",
    fill: "#7c5c5c"
  }), _react.default.createElement("path", {
    d: "M932.06 454.47l-3.69 3c-3.25-5.4-16.58-16.2-16.58-16.2l.58-.56c1.23-.31 1.93-.47 1.93-.47z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M935.61 448.99s-1.33 3.3-2.69 6.14-2.86 5.44-2.93 3.33c-.15-4.14-17.31-18.05-17.31-18.05l2.33-2.26 2.69-2.62z",
    fill: "#e7effd"
  }), _react.default.createElement("path", {
    d: "M936.2 427.09l1.95 33c-4.6-7.15-17.22-25.47-25.33-24.88l19.65-22.61a26.81 26.81 0 0 0 2.26-2.89c.74 9.43 1.47 17.38 1.47 17.38z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M935.61 448.99s-1.33 3.3-2.69 6.14c-5.16-7.07-12.25-15.42-17.91-17l2.69-2.62z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M950.4 329.31l5.33 4.14s8.87.15 9.76 7.55 9 10.8 9 10.8 6.06 6.06 6.06 8.87 4.59 7.84 4.59 8.29 4.44 9.47 3.84 11.09 4.74 8.73 3.11 11.39a65.63 65.63 0 0 0-3.55 7.4s-6.95 13.32-10.5 15.83-19.83 23.67-19.83 23.67-17.45 20.12-17.45 26.33c0 0-17-28.4-27.08-27.66l19.68-22.64s3.4-3.69 3.55-5.91 9.47-12.43 13.91-12.87c0 0 .73-6.07-1.19-6.22s-3.55-4.88-3.55-4.88-13-15.38-13.17-25.15 17.49-30.03 17.49-30.03z",
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M958.24 343.36s-12.42 9.18-9.76 12.13 9.76-12.13 9.76-12.13zM958.83 381.24s23.08-7.4 25.45 0zM815.93 774.31s-12.43 8.14-18.64 7-12.58 2.08-12.58 2.08a37.48 37.48 0 0 1-15.69 10.21c-10 3.4-24.1 2.06-32.09-.6-3.78-1.26-4.09-2.88-2.27-4.89 8.69 1.73 28.1 5.18 33.33 2.67 6.8-3.26 16.57-10.36 16.57-10.36s12.73-1.77 14.5-1.77c1.26 0 11.09-4.06 16.64-6.38zM891.2 790.95l-.13.82s-3 6.51-19.37 8.88-16.42-5.48-16.42-5.48.06-.84.16-2.11c5.2 1.97 16.54 4.17 35.76-2.11zM796.03 341.59s0 33.73-2.89 37.06 2.89-37.06 2.89-37.06zM929.39 352.46l4.29 12.06s1.71-11.84-4.29-12.06z",
    opacity: 0.1
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M824.79 223.15c1.08-2.78-1.76-5.5-2.13-8.48a5.56 5.56 0 0 0-.47 2.68c.19 2.24 1.84 4.33 2.28 6.41a4 4 0 0 0 .32-.61zM873.89 255.01c-1.06-4.66-.75-9.6-1.83-14.27s-4.41-9.55-8.94-9.63c-2 0-4.24.72-5.65-.74-.86-.88-1-2.28-1.67-3.35-3.24-5.25-13.1-2.59-17.14.1-6 4-14.36 12.43-22.12 10.53-.37.89-.71 1.8-1 2.73 7.91 2.48 16.48-6.25 22.68-10.38 4-2.68 13.9-5.34 17.14-.09.64 1.07.81 2.46 1.66 3.34 1.41 1.47 3.7.71 5.65.75 4.54.08 7.85 4.88 8.95 9.63s.74 9.78 1.87 14.52a8.16 8.16 0 0 1 .4-3.14zM896.13 249.47c-.8 2.34-2.91 4.5-5.19 4s-3.39-3.07-5.09-4.7a7 7 0 0 0-8-1.11 8.06 8.06 0 0 0-3.93 7.16 7.76 7.76 0 0 1 3.49-4.28 6.93 6.93 0 0 1 8 1.12c1.71 1.62 2.87 4.22 5.1 4.69s4.38-1.67 5.19-4a20.21 20.21 0 0 0 .81-4.25 11.1 11.1 0 0 1-.38 1.37zM903.09 229.31c-1.66 4.39-4.68 8.17-5.68 12.79-.2.93-.32 1.88-.43 2.84 1-4.6 4-8.37 5.67-12.75a22.81 22.81 0 0 0 1.37-6.13 22.39 22.39 0 0 1-.93 3.25z"
  })), _react.default.createElement("circle", {
    cx: 689.3,
    cy: 336.07,
    r: 0.36,
    fill: "#e6e8ec"
  }), _react.default.createElement("ellipse", {
    cx: 817.04,
    cy: 792.28,
    rx: 86.34,
    ry: 8.81,
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M499.55 214.39L238.04 384.05l170.66 307.8a11.91 11.91 0 0 0 7.6 5.8l154.63 37.72a11.92 11.92 0 0 0 13.54-6.41l76.7-159.35 84.06-112.37-199.48-236a35.35 35.35 0 0 0-46.2-6.85z",
    fill: "#dcdfed"
  }), _react.default.createElement("path", {
    d: "M747.89 458.57l-.74 1-49.24 65.83-.89 1.19-33.19 44.37-65.6 136.31-1.84 3.81-9.26 19.23a11.92 11.92 0 0 1-13.56 6.41l-154.63-37.74a11.89 11.89 0 0 1-7.6-5.8l-14.87-26.77-2.67-4.82-107.33-193.66-.92-1.65-44.86-80.9 5.42-3.52 41.09-26.65.95-.62 86.53-56.14 5.46-3.54 122.05-79.19a35.34 35.34 0 0 1 46.22 6.84l91 107.7 4 4.8 66.05 78.14.36.43 33.21 39.28 4.18 4.95z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M707.26 412.3l-8.06 56-2.43 16.9-1.39 36-.11 2.81-7.23 188.1a11.93 11.93 0 0 1-14.51 11.17l-77.94-17.4-.84-.19-199.89-44.61-3.67-.82-109.89-24.54 2.52-169.12.08-5.65.76-51.19.84-56.5 86.53-56.14 5.46-3.54c80.26 8.23 187 24.06 259.31 35.35l4 4.8 66 78.14z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M716.39 345.9l-9.49 66-8.7 60.44-2.43 16.86-1.39 36-7.34 190.91a11.93 11.93 0 0 1-14.51 11.17l-78.78-17.59-199.89-44.61-113.56-25.36 2.6-174.77.76-51.19.89-59.88.91-61.59c18.78-.89 49.68 1.12 86.57 4.83 82.6 8.29 195.2 25.06 268.82 36.61 45.08 7.07 75.54 12.17 75.54 12.17z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M740.47 451.58l-42.27 20.73-215.73 105.8L283.66 413.8l-40.19-33.27-5.42 3.52 44.86 80.9-2.6 174.77 113.56 25.36 14.84 26.77a11.89 11.89 0 0 0 7.6 5.8l154.63 37.72a11.92 11.92 0 0 0 13.53-6.41l9.26-19.23 78.78 17.59a11.93 11.93 0 0 0 14.51-11.17l7.34-190.91 50.13-67 .14-1.69z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M238.04 384.05l-17.83 305.33a11.92 11.92 0 0 0 9.31 12.33l473.52 105.15a11.92 11.92 0 0 0 14.43-10.67l27.75-338.95-262.75 128.87z",
    fill: "#dcdfed"
  }), _react.default.createElement("path", {
    d: "M223.47 696.37l246-151.77a18.06 18.06 0 0 1 23 3.6l220.18 256.79c.8.92 1.19.26 0 0L223.47 696.37c-1.4-.31-1.22.73 0 0z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M225.23 696.12l243.46-147.07a19.09 19.09 0 0 1 24.28 3.82L711.16 803.8a2.63 2.63 0 0 1-2.55 4.29L226.02 700.93a2.62 2.62 0 0 1-.79-4.81z",
    fill: "#e3e5f1"
  }));
};

UndrawEnvelope.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawEnvelope;
exports.default = _default;