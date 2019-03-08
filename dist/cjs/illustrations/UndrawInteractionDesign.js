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

var UndrawInteractionDesign = function UndrawInteractionDesign(_props) {
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
    viewBox: "0 0 1121.04 851.8",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 590.32,
    y1: 444.05,
    x2: 590.32,
    y2: 24.1,
    gradientTransform: "matrix(-1 0 0 1 852.2 0)",
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
    x1: 493.3,
    y1: 875.74,
    x2: 493.3,
    y2: 319.35,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("g", {
    opacity: 0.9
  }, _react.default.createElement("path", {
    d: "M1119.76 402.74v.12a.15.15 0 0 0 0 .06c0 .29-.08.58-.13.87-.37 2.36-.81 4.73-1.34 7.1-3.61 16.19-11 32.23-20.89 46.73-.39.56-.78 1.12-1.18 1.67-.76 1.09-1.53 2.16-2.32 3.23-.55.73-1.1 1.46-1.67 2.19a156 156 0 0 1-12.54 14.37c-2.44 2.46-5 4.84-7.53 7.11l-1.12 1q-2.07 1.8-4.2 3.5c-.61.49-1.23 1-1.85 1.45l-1.08.84-.77.57c-.69.53-1.39 1-2.1 1.55l-.5.35c-1.67 1.19-3.35 2.34-5.06 3.45a124.1 124.1 0 0 1-11.29 6.5q-2.69 1.37-5.41 2.57-3.3 1.47-6.65 2.69c-.6.23-1.21.44-1.82.66-1.71.59-3.44 1.14-5.16 1.64l-.88.26-.44.12-1.06.29a135.91 135.91 0 0 1-15.64 3.26l-.86.13-.45.07c-6.69 1-13.36 1.5-20 1.83a251.24 251.24 0 0 1-27.45 0l-2.5-.17h-.45c-1.73-.13-3.46-.29-5.18-.47-1-.1-2-.21-3-.34-1.52-.18-3-.39-4.54-.61h-.07l-1.45-.23c-1.31-.21-2.6-.43-3.89-.69l-1.32-.24-2-.41-.39-.08q-6.28-1.35-12.32-3.28l-.92-.31q-4.38-1.46-8.6-3.25-3.13-1.35-6.15-2.87-4.32-2.19-8.42-4.71-5.73-3.51-11.1-7.56c-4.71-3.51-9.24-7.29-13.64-11.21l-.91-.82-1.66-1.5a269.69 269.69 0 0 1-56.13-71.36q-2.28-4.26-4.42-8.66c-.44-.9-.87-1.8-1.3-2.71a2.14 2.14 0 0 1-.1-.22l-.66-1.4c-1.8-3.88-3.5-7.85-5.1-11.87l-.72-1.82-1.12-2.94-.45-1.23q-2.07-5.6-3.86-11.35c-.2-.66-.41-1.32-.61-2q-.95-3.12-1.81-6.28c-.53-1.94-1-3.91-1.51-5.9-.08-.31-.15-.62-.22-.94-4-16.88-5.71-35.12-1.65-53.63.27-1.26.57-2.52.91-3.77.48-1.87 1-3.74 1.66-5.61.14-.44.29-.88.44-1.32l.18-.48c0-.11.07-.23.11-.34a.68.68 0 0 0 .07-.2c.35-.92.7-1.84 1.08-2.77s.78-1.85 1.19-2.77l.06-.13c0-.12.11-.23.16-.35.33-.72.67-1.44 1-2.14l.36-.72.1-.36c.19-.37.39-.75.59-1.11a90 90 0 0 1 9.68-14.69 82.9 82.9 0 0 1 6.6-7.25 71.48 71.48 0 0 1 11.59-9.28q1-.6 1.92-1.17a47.93 47.93 0 0 1 17.37-6.3c7.94-1.12 15.39.17 22.64 1.9l.73.18c1.22.29 2.44.6 3.65.91 4.23 1.07 8.49 2.18 12.79 3.13 4 .89 8 1.65 12.13 2.18a85.33 85.33 0 0 0 12.55.7c.62 0 1.26 0 1.89-.06a68.25 68.25 0 0 0 22.5-4.94 43.33 43.33 0 0 0 14.64-9.67 32.88 32.88 0 0 0 2.26-2.6 30.24 30.24 0 0 0 3.18-5c.28-.53.55-1.07.81-1.6.1-.18.2-.38.3-.57l1.53-3c.06-.11.11-.22.17-.32.74-1.43 1.48-2.84 2.24-4.22a80.88 80.88 0 0 1 10.82-15.94 45.31 45.31 0 0 1 16.06-11.53c1-.43 2-.84 3.11-1.22a45.16 45.16 0 0 1 14.48-2.59h1.73a50.55 50.55 0 0 1 14.42 2.55 74.65 74.65 0 0 1 19.81 10.26 133.59 133.59 0 0 1 24.81 22.79c.58.68 1.16 1.38 1.73 2.08a172.85 172.85 0 0 1 16.59 24.47c14.46 25.62 23.94 55.63 30.78 86.19l.33 1.46c.16.72.32 1.44.47 2.15.32 1.48.64 3 .94 4.43.23 1.09.46 2.19.68 3.28.16.79.32 1.57.47 2.37.1.49.2 1 .29 1.49a238.63 238.63 0 0 1 3.63 24.75c0 .31 0 .62.07.93a136 136 0 0 1-.74 30.7z",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M1046.87 483.98c-1.1-.29-3 1-5.44 3.11-1.18 1-2.49 2.25-3.91 3.61l-.67.65-.3.28c-1.88 1.81-3.94 3.81-6.12 5.83-1.36 1.26-2.76 2.53-4.21 3.78-1.91 1.65-3 6.18-3.52 12.38a135.91 135.91 0 0 1-15.64 3.26l-.86.13-.45.07c-.31-1.86-.54-3.08-.54-3.08s-9-7.51-6.38-16.89c1.51-5.38 16.28-15.45 28.61-23.07 1.51-.92 3-1.82 4.39-2.66l.91-.55c.57-.34 1.11-.67 1.65-1l4.1-2.4c2.84-1.64 4.9-2.79 5.63-3.2l.3-.17s5.26 20.66 2.45 19.92z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M1046.87 483.98c-1.1-.29-3 1-5.44 3.11-1.18 1-2.49 2.25-3.91 3.61l-.67.65-.3.28c-1.88 1.81-3.94 3.81-6.12 5.83-1.36 1.26-2.76 2.53-4.21 3.78-1.91 1.65-3 6.18-3.52 12.38a135.91 135.91 0 0 1-15.64 3.26l-.86.13-.45.07c-.31-1.86-.54-3.08-.54-3.08s-9-7.51-6.38-16.89c1.51-5.38 16.28-15.45 28.61-23.07 1.51-.92 3-1.82 4.39-2.66l.91-.55c.57-.34 1.11-.67 1.65-1l4.1-2.4c2.84-1.64 4.9-2.79 5.63-3.2l.3-.17s5.26 20.66 2.45 19.92z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M1044.71 472.72s-1.84 1.89-4.7 4.88c-1.2 1.25-2.59 2.7-4.09 4.29l-.14.15-.78.81c-1.78 1.88-3.7 3.91-5.67 6-10.22 10.94-21.78 23.75-21.78 25.79a6.64 6.64 0 0 1-.49 2.22l-.86.13-.45.07c-6.69 1-13.36 1.5-20 1.83a251.24 251.24 0 0 1-27.45 0l-2.5-.17h-.45c-1.73-.13-3.46-.29-5.18-.47-1-.1-2-.21-3-.34 1.18-1.64 2.41-3.36 3.63-5.12 2.45-3.52 4.88-7.16 6.9-10.46.12-.19.23-.38.35-.56 1.21-2 2.26-3.89 3.07-5.52a14.74 14.74 0 0 0 1.63-4.62 25.25 25.25 0 0 1 1.79-5.73c4.41-11.2 15.94-34 22.38-46.59l.58-1.12.56-1.08c2.07-4 3.4-6.56 3.4-6.56l15.75-4.25 1-.27 3.48-.94 1.34-.36 7.45-2h.09l.27-.08 7.86-2.11 2.61-.71 3-.79 7.6 12.95 2.22 32.34z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M937.27 516.32c-3.08-4-4.87-6.45-4.87-6.45s4.37-1.06 10.07-2.67c2.91-.83 6.17-1.79 9.37-2.84 2-.67 4-1.37 5.91-2.08 1-.36 1.91-.74 2.8-1.11 4.14-1.74 7.25-3.51 7.88-5.09a3.29 3.29 0 0 0-.16-1.89 51.24 51.24 0 0 0-3.68-8.34c-.53-1-1.11-2.09-1.73-3.22-2-3.65-4.39-7.83-7-12.24-2.19-3.68-4.54-7.53-6.92-11.39-2.1-3.39-4.23-6.8-6.32-10.1-.06-.1-.13-.2-.19-.31-9.53-15.06-18.09-28-18.44-28.49l-5.62 13.49-.24.22-9.25 8.21-.22.21c-2.88 2.55-6.15 5.47-9.48 8.45-2.47 2.21-5 4.45-7.35 6.61-3.41 3.06-6.6 5.95-9.19 8.32a73.67 73.67 0 0 0-6.21 6 64.9 64.9 0 0 0-4 10.81c4.4 3.92 8.93 7.7 13.64 11.22 3.59 2.68 7.28 5.21 11.1 7.55q4.11 2.52 8.42 4.71 3 1.51 6.15 2.87 4.21 1.8 8.6 3.25l.92.31q6 1.94 12.32 3.28l.39.08 2 .41z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M1014.03 421.49l-.9 1.38c-.36.57-.83 1.3-1.4 2.17s-1.36 2.14-2.21 3.45l-.62 1c-1.46 2.26-3.16 4.91-5 7.84-.23.35-.46.7-.69 1.07s-.47.74-.71 1.11c-12 18.8-29.74 46.66-34.2 54.7a20.62 20.62 0 0 0-1 1.89c-.57 1.43-3.14 3-6.69 4.57-.79.36-1.64.71-2.51 1.07-1.94.77-4.06 1.52-6.22 2.25-3.15 1.06-6.4 2-9.36 2.89-6.26 1.81-11.24 3-11.24 3s1.72 2.33 4.67 6.21l-2-.41-.39-.08q-6.28-1.35-12.32-3.28l-.92-.31q-4.38-1.46-8.6-3.25-3.13-1.35-6.15-2.87-4.32-2.19-8.42-4.71-5.73-3.51-11.1-7.56c-4.71-3.51-9.24-7.29-13.64-11.21l-.91-.82a68.23 68.23 0 0 1 3.77-10c0-.22 2.92-3 7.22-6.9 2.65-2.43 5.84-5.31 9.19-8.32l7.35-6.59 8.69-7.76.22-.2 9-8 .24-.22 5.63-13.5h1.14l20.47.32h3.22l6.42.1 7.64.11 8.89.14 34.85.54h1.13l6.61.1z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M1014.59 282.17l-3.38 30.73s-34.62 13.79-35.46 13.51-23.08-20.27-19.42-33.5c1.83-6.63 2.68-15.83 3.06-23.34s.32-13.25.32-13.25 50.38-18 45.87-5.63c-1.63 4.5-.9 9.89.71 14.92a69.75 69.75 0 0 0 8.3 16.56z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M1006.29 265.56c-.3.36-.62.7-.93 1a33.75 33.75 0 0 1-46 2.92c.38-7.45.32-13.25.32-13.25s50.38-18 45.87-5.63c-1.6 4.54-.87 9.93.74 14.96z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M1014.59 242.29a33.76 33.76 0 1 1-33.77-33.78 33.56 33.56 0 0 1 33.77 33.78z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M972.93 314.02s-13.22-29.32-17.73-29.32-11.54 151.65-11.54 151.65l69 1.09 2.82-79.63-14.08-70.58s-12.7 27.87-28.47 26.79z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M972.93 316.27s-13.22-29.32-17.73-29.32-11.54 151.66-11.54 151.66l78.25 1.18-6.47-79.73-14.08-70.57s-12.66 27.87-28.43 26.78z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M972.93 315.14s-13.22-29.31-17.73-29.31-11.54 151.65-11.54 151.65l78.25 1.18-6.47-79.76-14.08-70.58s-12.66 27.91-28.43 26.82z",
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M960.1 276.62s-2.36-3.46-5.74-2.33-5.91-2-9.29 1.12-16.89 7.32-19.42 5.91-11.54 4.79-13.51 8.45-8.45 13.51-8.45 13.51-5.62 6.75-4.78 10.41-2 7.88-5.35 9.57-10.13 18.58-10.13 18.58 1.82 22.58-5.78 26.52-2 21.11-2 21.11l35.9-8.51 10.16-23.06s-3.94 67.55-8.73 73.74-5.34 10.14-5.34 10.14 18.57 3.94 22.51 7.31 14.36-.84 14.36-.84l10.13-89.79s3.66-16.88 3.66-25.61 1.8-56.23 1.8-56.23z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M958.98 276.62s-2.37-3.46-5.75-2.33-5.91-2-9.29 1.12-16.88 7.32-19.42 5.91-11.54 4.79-13.51 8.45-8.44 13.51-8.44 13.51-5.63 6.75-4.79 10.41-2 7.88-5.34 9.57-10.14 18.58-10.14 18.58 1.82 22.58-5.78 26.52c-1.9 1-3 3.18-3.51 5.92-2.18 11 6.86 21.12 18.1 20.77l19.34-8 10.13-29.15s-3.94 67.55-8.72 73.74-5.34 10.12-5.34 10.12 18.58 3.94 22.52 7.31 14.35-.84 14.35-.84l10.13-89.79s3.66-16.88 3.66-25.61 1.8-56.21 1.8-56.21z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M896.94 325.51s3.38 9.29 12.67 8.45-12.67-8.45-12.67-8.45zM905.95 311.44s6.19 1.13 8.44 6.47-8.44-6.47-8.44-6.47zM923.4 301.9c0 1.13 3.94 20.83 0 29s-3.38 17.73-3.38 17.73zM1006.52 269.84s2.21-2.59 4.46-2.31 3.66 1.69 6.48 2.82 9.56 1.4 9.56 2.25 5.92 4.22 9.86 5.06 16.32 9.29 19.42 25.62 8.44 21.11 8.44 21.11l-29.83 14.63s23.08 97.95 25.89 105 3.1 48.69 3.1 48.69-18.3 8.16-23.08 10.7-2.82-24.21-12.67-39.69-21.11-38-21.11-38l-17.17-48.13s-11-64.17-1.69-76 19.14-27.52 18.34-31.75z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M1064.96 492.12v.58l-1.09.49-.77.34-7.64 3.46c-4.19 1.91-8.82 4-11.74 5.48-.73.35-1.35.67-1.83.93a1.06 1.06 0 0 1-1.14 0c-1.5-1-2.18-6.08-3.24-12.7-.44-2.74-.94-5.74-1.6-8.81-.1-.48-.21-1-.32-1.44a70.75 70.75 0 0 0-2.86-9.62 40.28 40.28 0 0 0-3.51-7.12c-1.3-2-2.61-4.18-3.92-6.38-3.52-5.92-7-12.23-9.92-17.64-.2-.39-.4-.76-.6-1.13-.74-1.38-1.44-2.69-2.07-3.91-1.31-2.5-2.41-4.62-3.2-6.16l-1.27-2.51a2.34 2.34 0 0 0-.13-.26l-1.55-4.34-3-8.38-3.49-9.79-1.65-4.61-1.19-3.35-.38-1.06-5.92-16.61s-.42-2.41-1-6.38c-1.57-10.44-4.42-31.67-4.41-48.3a90.08 90.08 0 0 1 .7-12.13c.07-.44.13-.87.21-1.29s.16-.92.25-1.36a16.18 16.18 0 0 1 2.57-6.53c9.28-11.82 19.18-27.52 18.34-31.74l.19-.21a9.24 9.24 0 0 1 1.36-1.18 5.33 5.33 0 0 1 2-.9 3.4 3.4 0 0 1 .9 0c2.25.28 3.66 1.69 6.47 2.82s9.57 1.4 9.57 2.25 5.91 4.22 9.85 5.07 16.33 9.28 19.42 25.61c3 15.73 8.06 20.74 8.43 21.1l-1.11.54-16.93 8.31-3.63 1.77-8.17 4s2.14 9.07 5.19 21.89c0 .17.09.35.13.53.09.38.18.77.28 1.16 2.24 9.4 4.92 20.6 7.59 31.65l.24 1 .78 3.2c.24 1 .49 2 .73 3l.39 1.59c.74 3.06 1.48 6.08 2.2 9 1.07 4.33 2.09 8.44 3 12.2 2.6 10.36 4.61 17.95 5.33 19.73 1 2.58 1.72 9.83 2.18 18 .79 12.5.96 27.09.98 30.14z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M1068.63 393.06c-.83.14-1.89.26-3.12.38-9 .82-26.71 1-26.71 1s-13.23-26.18-24.49-25.33c0 0 10.41-11.82 14.64-10.41.7.23 1.14-.29 1.36-1.3 1.12-5-2.77-22.35-2.77-22.35l-5.35-23.36 31 7.6c2.82.56 11.54 5.07 11.54 5.07s.28 12.1 2.53 14.91 4.79 16.33 4.51 19.71 3.09 19.14-.28 23.36 4.18 9.56-2.86 10.72z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M1069.76 393.06c-.84.14-1.89.26-3.12.38-9 .82-26.72 1-26.72 1s-13.23-26.18-24.48-25.33c0 0 10.41-11.82 14.63-10.41.71.23 1.15-.29 1.36-1.3 1.13-5-2.77-22.35-2.77-22.35l-5.34-23.36 31 7.6c2.81.56 11.54 5.07 11.54 5.07s.28 12.1 2.53 14.91 4.78 16.33 4.5 19.71 3.1 19.14-.28 23.36 4.18 9.56-2.85 10.72z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M1037.95 331.7s25.9 2.82 27 9.29-27-9.29-27-9.29zM1014.59 242.29a33.56 33.56 0 0 1-9.23 23.18.48.48 0 0 1-.08-.16c-1-2.14-2-4.36-1.88-6.71.09-2.83 1.72-5.39 2.25-8.19.67-3.54-.49-7.13-1.63-10.54-.83-2.5-2.44-5.53-5.06-5.22a6.9 6.9 0 0 1-1.55.18c-1.4-.22-1.68-2-1.83-3.44a15.59 15.59 0 0 0-12.73-13.35 3.93 3.93 0 0 0-2.23.15c-1 .44-1.5 1.49-2.38 2.1-2.86 2-6.5-1.81-10-1.52-3 .25-4.75 3.27-6 6s-2.74 5.77-5.63 6.4a1.71 1.71 0 0 1-1.37-.15c-.9-.66-.28-2 .19-3.07 1.18-2.67.39-4.8-1.06-6.71a33.76 33.76 0 0 1 60.15 21.08z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M905.57 505.9q-4.32-2.19-8.42-4.71-5.73-3.51-11.1-7.56l-3.45-28-.11-.92-6.55-53.28-.39-3.15 10.88-.33 7.7-.23.52 4.53 4.38 37.55.11.9z",
    fill: "#b2b1bb"
  }), _react.default.createElement("path", {
    d: "M897.15 501.17q-5.73-3.51-11.1-7.56l-3.45-28-.11-.92-6.55-53.28-.39-3.15 10.88-.33-.47 1.74.27 2.19 5.45 44.51.11.92z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M972.09 408.82l-.59 4.77-.91 7.23-2 15.93-.14 1.1-.14 1.13-5.46 43.65-1.69 13.57-.56 4.45-.06.52-2.2 17.73-2.5-.17h-.45c-1.73-.13-3.46-.29-5.18-.47-1-.1-2-.21-3-.34-1.52-.18-3-.39-4.54-.61h-.07l-1.45-.23 1.37-9.88v-.34l6.4-47.86 2.71-20.27.15-1.12.15-1.12 2.13-15.92.9-6.68.52-3.94.65-.05z",
    fill: "#b2b1bb"
  }), _react.default.createElement("path", {
    d: "M962.8 411.36l-.28 2.39-.82 6.93-1.88 15.93-.13 1.11-.17 1.18-3.72 31.54-4 33.58v.39l-1 8.38-.64 5.46c-1-.1-2-.21-3-.34-1.52-.18-3-.39-4.54-.61h-.07l-1.45-.23 1.42-9.87v-.34l6.4-47.86 2.71-20.27.15-1.12.15-1.12 2.13-15.92.9-6.68.52-3.94.65-.05z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M1043.73 502.47l.43 2.91q-2.69 1.37-5.41 2.57-3.3 1.47-6.65 2.69l-1.67-13.18-1.1-8.59-1.89-14.83-1.82-14.32-.31-2.39-4.43-34.76-.78-6.1-.24-2-.23-1.8-.53-4.16h.36l7.61-.83 2.44-.25.76 5.09 1.08 7.24 7.14 47.7 1.52 10.15 1.42 9.49 2.22 14.86z",
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M1043.73 502.47l.43 2.91q-2.69 1.37-5.41 2.57-3.3 1.47-6.65 2.69l-1.67-13.18-1.1-8.59-1.89-14.83-1.82-14.32-.31-2.39-4.43-34.76-.78-6.1-.24-2-.23-1.8-.53-4.16h.36l7.61-.83 2.44-.25.76 5.09 1.08 7.24 7.14 47.7 1.52 10.15 1.42 9.49 2.22 14.86z",
    fill: "#ccc",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M1044.16 505.38q-2.69 1.37-5.41 2.57l-1.14-9.94-.76-6.66-1.07-9.31-.18-1.59-1.21-10.6-5.65-49.39-.91-7.91-.29-2.6-.47-2.28 2.44-.25.76 5.09 1.08 7.24 7.14 47.7 1.52 10.15 1.42 9.49 2.22 14.86.08.52z",
    fill: "#b2b1bb"
  }), _react.default.createElement("path", {
    d: "M1068.07 407.98l-.06 3.83-1.2 78.86c-.61.49-1.23 1-1.85 1.45v.58l-1.09.49-.77.34c-.69.53-1.39 1-2.1 1.55l-.5.35c-1.67 1.19-3.35 2.34-5.06 3.45v-2.41l1-68 .06-4.18.18-12.26.08-5.45 7.58.95z",
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M1068.07 407.98l-.06 3.83-1.2 78.86c-.61.49-1.23 1-1.85 1.45v.58l-1.09.49-.77.34c-.69.53-1.39 1-2.1 1.55l-.5.35c-1.67 1.19-3.35 2.34-5.06 3.45v-2.41l1-68 .06-4.18.18-12.26.08-5.45 7.58.95z",
    fill: "#ccc",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M1068.07 407.98l-.06 3.83-1.2 78.86c-.61.49-1.23 1-1.85 1.45v.58l-1.09.49v-.23l.18-31 .3-50.11v-4.36z",
    fill: "#b2b1bb"
  }), _react.default.createElement("path", {
    d: "M1119.74 402.9a.15.15 0 0 0 0 .06c0 .29-.08.58-.13.87-.37 2.36-.81 4.73-1.34 7.1l-50.25.92-3.65.07-7.63.14-3.21.06h-1.12l-22.13.41h-2.44l-8 .15h-.17l-6.14.12-9.91.18h-1.11l-31 .57-9 .16-7.56.14-6.59.12h-3.61l-5 .09-22.77-1-1.12-.05-21.18-.91-8.42-.37-10.29-.45-62.23-2.69q-2.28-4.26-4.42-8.66c-.44-.9-.87-1.8-1.3-2.71l63.34-1 39-.6 7.37-.11h1.13l20-.31 6.85.38h.12l3.44.19 1.12.06 13.66.76 33.21 1.83 1.15.06 15.52.86 4.69.26h.1l31 1.71 1.14.07h.25z",
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M1119.74 402.9a.13.13 0 0 1 0 .06c0 .29-.08.58-.13.87-.37 2.36-.81 4.73-1.34 7.1l-50.25.92-3.64.07-7.64.14-3.21.06h-1.12l-22.13.41h-2.44l-8 .15h-.17l-6.14.12-9.91.18h-1.11l-31 .57-9 .16-7.56.14-6.59.12h-3.61l-5 .09-22.78-1h-1.12l-21.17-.92-8.43-.36-10.29-.44-62.23-2.7q-2.28-4.26-4.42-8.66c-.44-.9-.87-1.8-1.3-2.71l63.34-1 39-.6 7.37-.11h1.13l20-.31 6.85.38h.13l3.44.19 1.12.07 13.66.75 33.21 1.83 1.14.06 15.52.86 4.69.26h.1l31 1.71 1.14.07h.25z",
    fill: "#b2b1bb"
  }), _react.default.createElement("path", {
    d: "M1119.74 402.9a.13.13 0 0 1 0 .06l-68.41.17h-1.12l-31.17.08h-20.07l-49.38.12h-4.27l-27.25.07h-1.12l-28.45.07-79.21-3.42c-.44-.9-.87-1.8-1.3-2.71l63.34-1 39-.6 7.37-.11h1.13l20-.31 6.85.38h.13l3.44.19 1.12.07 13.66.75 33.21 1.83 1.14.06 15.52.86 4.69.26h.1l31 1.71 1.14.07h.25zM1053.43 357.04c1.69.56 11.54 3.09 13.51 9s-13.51-9-13.51-9z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M1024.38 366.9s-14.35 4.36-20.83 4.36-31.8-.14-31.8-.14-66.15-22.1-46.3 8.16 51.22 13.37 51.22 13.37 2.54.56 5.63 1.27 62.91.14 64.88-2.25-22.8-24.77-22.8-24.77z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M1065.52 393.44c-9 .82-26.71 1-26.71 1s-13.23-26.18-24.49-25.33c0 0 10.41-11.82 14.64-10.41.7.23 1.14-.29 1.36-1.3 11 3.37 32 11.61 34.1 26.06.54 3.91.89 7.19 1.1 9.98z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M1066.64 393.44c-9 .82-26.72 1-26.72 1s-13.23-26.18-24.48-25.33c0 0 10.41-11.82 14.63-10.41.71.23 1.15-.29 1.36-1.3 11 3.37 32 11.61 34.11 26.06.55 3.91.9 7.19 1.1 9.98z",
    fill: "#464353"
  }), _react.default.createElement("path", {
    d: "M1065.52 393.44c-9 .83-26.71 1-26.71 1s-13.23-26.18-24.49-25.33c0 0 10.41-11.82 14.64-10.42.7.24 1.14-.28 1.36-1.29 11 3.37 32 11.61 34.1 26.06.54 3.92.89 7.2 1.1 9.98zM987.57 468.78s25.33-6.2 29.27-2.82-29.27 2.82-29.27 2.82zM914.95 492.98s10.7 6.19 11.82 11.26-11.82-11.26-11.82-11.26z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M869.68 282.9v110.92c0 1.91 1 2.18 2.69 3.1 5.63 3.12 19.49 8.68 36.13-.12 1.71-.9 2.76-1.2 2.76-3.14V283.59s-21.15 8.53-41.58-.69z",
    fill: "#333f4f"
  }), _react.default.createElement("ellipse", {
    cx: 890.47,
    cy: 282.81,
    rx: 20.79,
    ry: 4.42,
    fill: "#2d394a",
    stroke: "#40868e",
    strokeMiterlimit: 10
  }), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 328.95,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 329.61,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 330.54,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 331.67,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 332.34,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 332.61,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 331.48,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 332.14,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 330.54,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 331.01,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 329.61,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 331.21,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 332.14,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 332.61,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 332.61,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 331.24,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 331.91,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 332.84,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 333.97,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 334.64,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 334.9,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 333.77,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 334.44,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 332.84,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 333.31,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 331.91,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 333.5,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 334.44,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 334.9,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 334.9,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 333.54,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 334.2,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 335.14,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 336.27,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 336.94,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 337.2,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 336.07,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 336.73,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 335.14,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 335.6,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 334.2,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 335.8,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 336.73,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 337.2,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 337.2,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 335.84,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 336.5,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 337.43,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 338.56,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 339.23,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 339.49,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 338.36,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 339.03,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 337.43,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 337.9,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 336.5,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 338.09,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 339.03,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 339.49,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 339.49,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 338.13,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 338.79,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 339.73,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 340.86,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 341.53,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 341.79,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 340.66,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 341.32,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 339.73,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 340.19,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 338.79,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 340.39,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 341.32,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 341.79,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 341.79,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 340.43,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 341.09,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 342.02,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 343.15,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 343.82,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 344.09,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 342.95,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 343.62,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 342.02,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 342.49,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 341.09,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 342.69,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 343.62,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 344.09,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 344.09,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 342.72,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 343.38,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 344.32,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 345.45,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 346.12,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 346.38,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 345.25,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 345.91,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 344.32,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 344.78,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 343.38,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 344.98,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 345.91,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 346.38,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 346.38,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 345.02,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 345.68,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 346.61,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 347.74,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 348.41,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 348.68,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 347.55,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 348.21,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 346.61,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 347.08,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 345.68,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 347.28,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 348.21,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 348.68,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 348.68,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 347.31,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 347.98,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 348.91,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 350.04,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 350.71,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 350.97,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 349.84,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 350.51,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 348.91,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 349.38,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 347.98,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 349.57,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 350.51,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 350.97,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 350.97,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 349.61,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 350.27,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 351.2,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 352.33,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 353,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 353.27,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 352.14,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 352.8,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 351.2,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 351.67,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 350.27,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 351.87,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 352.8,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 353.27,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 353.27,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 351.9,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 352.57,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 353.5,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 354.63,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 355.3,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 355.56,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 354.43,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 355.1,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 353.5,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 353.97,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 352.57,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 354.16,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 355.1,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 355.56,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 355.56,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 354.2,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 354.86,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 355.8,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 356.93,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 357.6,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 357.86,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 356.73,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 357.39,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 355.8,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 356.26,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 354.86,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 356.46,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 357.39,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 357.86,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 357.86,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 356.5,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 357.16,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 358.09,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 359.22,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 359.89,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 360.15,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 359.02,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 359.69,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 358.09,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 358.56,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 357.16,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 358.75,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 359.69,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 360.15,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 360.15,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 358.79,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 359.45,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 360.39,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 361.52,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 362.19,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 362.45,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 361.32,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 361.98,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 360.39,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 360.85,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 359.45,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 361.05,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 361.98,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 362.45,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 362.45,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 361.09,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 361.75,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 362.68,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 363.81,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 364.48,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 364.75,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 363.61,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 364.28,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 362.68,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 363.15,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 361.75,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 363.35,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 364.28,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 364.75,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 364.75,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 363.38,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 364.04,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 364.98,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 366.11,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 366.78,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 367.04,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 365.91,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 366.57,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 364.98,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 365.44,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 364.04,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 365.64,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 366.57,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 367.04,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 367.04,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 365.68,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 366.34,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 367.27,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 368.4,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 369.07,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 369.34,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 368.21,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 368.87,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 367.27,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 367.74,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 366.34,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 367.94,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 368.87,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 369.34,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 369.34,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 367.97,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 368.64,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 369.57,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 370.7,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 371.37,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 371.63,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 370.5,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 371.17,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 369.57,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 370.04,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 368.64,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 370.23,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 371.17,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 371.63,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 371.63,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 370.27,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 370.93,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 371.86,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 372.99,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 373.66,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 373.93,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 372.8,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 373.46,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 371.86,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 372.33,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 370.93,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 372.53,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 373.46,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 373.93,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 373.93,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 372.56,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 373.23,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 374.16,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 375.29,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 375.96,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 376.22,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 375.09,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 375.76,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 374.16,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 374.63,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 373.23,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 374.82,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 375.76,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 376.22,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 376.22,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 374.86,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 375.52,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 376.46,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 377.59,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 378.26,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 378.52,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 377.39,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 378.05,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 376.46,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 376.92,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 375.52,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 377.12,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 378.05,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 378.52,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 378.52,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 377.16,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 377.82,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 378.75,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 379.88,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 380.55,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 380.81,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 379.68,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 380.35,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 378.75,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 379.22,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 377.82,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 379.41,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 380.35,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 380.81,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 380.81,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 379.45,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 380.11,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 381.05,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 382.18,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 382.85,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 383.11,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 381.98,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 382.64,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 381.05,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 381.51,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 380.11,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 381.71,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 382.64,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 383.11,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 383.11,
    r: 0.47
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("circle", {
    cx: 871.57,
    cy: 381.75,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 873.94,
    cy: 382.41,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 876.86,
    cy: 383.34,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 882.11,
    cy: 384.47,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 887.64,
    cy: 385.14,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 893.37,
    cy: 385.4,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 901.59,
    cy: 384.27,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 898.87,
    cy: 384.94,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 906.68,
    cy: 383.34,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 904.23,
    cy: 383.81,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 909.37,
    cy: 382.41,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 879.54,
    cy: 384.01,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 884.96,
    cy: 384.94,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 890.83,
    cy: 385.4,
    r: 0.47
  }), _react.default.createElement("circle", {
    cx: 896.17,
    cy: 385.4,
    r: 0.47
  })), _react.default.createElement("path", {
    d: "M945.75 226.7s13.69-5.12 18.24 5.43l1.28.33 2.87.74c7.25-10.83 26.34 0 26.34 0l26.8 11.85-1 1.67-26.86-9.37s-3.55 11-8.21 13.65-12.23-1.47-12.23-1.47c-4.72-1.89-5.08-10.18-5-14.18l-4.06-.81c-.28 4-1.76 11.71-9 12.58-9.85 1.18-10.54-7.51-10.54-7.51s-.25-11.06 1.37-12.91z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M955.52 226.8c-.45 1-1.08 2.41-.17 3.06a1.69 1.69 0 0 0 1.36.16c2.89-.63 4.42-3.71 5.63-6.41s3-5.72 6-6c3.47-.29 7.1 3.49 10 1.51.88-.6 1.41-1.66 2.39-2.1a3.89 3.89 0 0 1 2.22-.14 15.58 15.58 0 0 1 12.73 13.34c.15 1.4.44 3.22 1.83 3.44a5.91 5.91 0 0 0 1.55-.18c2.62-.3 4.22 2.72 5.06 5.22 1.14 3.41 2.29 7 1.63 10.55-.52 2.79-2.16 5.35-2.25 8.19-.08 2.34.91 4.57 1.88 6.7s2.55 4.63 4.87 4.33c1.9-.25 2.95-2.27 3.87-4s2.56-3.51 4.41-3c.82.24 1.68.94 2.43.51a1.75 1.75 0 0 0 .71-1.22c.9-3.94-.39-8.36 1.52-11.91 1.47-2.73 4.46-4.21 6.89-6.15a19.7 19.7 0 0 0 2.66-28.22c-2.59-3-6.33-5.73-6.54-9.72-.16-3 1.9-5.84 1.92-8.88s-1.88-5.61-4-7.63a26.23 26.23 0 0 0-23.58-6.21c-2.18.52-4.37 1.34-6.6 1.06-2.58-.32-4.74-2-7.06-3.22-7.62-3.85-17.93-1.05-22.54 6.13-2.67 4.15-3.71 9.57-7.69 12.48-2.62 1.91-6.36 2.62-7.81 5.52-.87 1.74-.62 3.8-.36 5.73a13.42 13.42 0 0 0 4.28 8.19c2.28 2.58 4.36 5.2 2.76 8.87z",
    fill: "#464353"
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M1027.33 199.42a14.89 14.89 0 0 0 .6-2.34 13.86 13.86 0 0 0-.6 2.34zM956.06 224.36a8.41 8.41 0 0 1 .56-1.5c1.62-3.67-.46-6.29-2.88-8.76a13.42 13.42 0 0 1-4.28-8.19 20.75 20.75 0 0 1-.24-2.61 5.76 5.76 0 0 0-.53.82c-.87 1.74-.62 3.8-.36 5.73a13.42 13.42 0 0 0 4.28 8.19c1.85 1.86 3.5 3.86 3.45 6.32zM1019.52 257.64c-1.85-.54-3.49 1.28-4.4 3s-2 3.71-3.88 4c-2.31.3-3.9-2.2-4.87-4.33s-2-4.36-1.88-6.7c0-.28 0-.56.08-.83a15.42 15.42 0 0 0-1.2 4.77c-.08 2.34.91 4.57 1.88 6.7s2.55 4.63 4.87 4.33c1.9-.25 2.95-2.27 3.87-4s2.56-3.51 4.41-3c.82.24 1.68.94 2.43.51a1.75 1.75 0 0 0 .71-1.22 15 15 0 0 0 .33-2.68c-.7.32-1.52-.29-2.35-.55zM1031.1 238.9c-2.42 1.94-5.41 3.42-6.89 6.15a9.93 9.93 0 0 0-1 3.81c1.5-2.65 4.42-4.11 6.81-6a20 20 0 0 0 7.1-12 20 20 0 0 1-6.02 8.04zM1005.71 248.82a22.77 22.77 0 0 0 1.07-3.47c.66-3.54-.5-7.14-1.64-10.55-.83-2.5-2.44-5.52-5-5.22a5.94 5.94 0 0 1-1.56.18c-1.39-.22-1.68-2-1.82-3.44a15.59 15.59 0 0 0-12.73-13.34 3.92 3.92 0 0 0-2.23.14c-1 .44-1.51 1.5-2.38 2.1-2.87 2-6.5-1.8-10-1.51-2.94.24-4.75 3.26-6 6s-2.74 5.78-5.63 6.41a1.69 1.69 0 0 1-1.36-.16 1.08 1.08 0 0 1-.45-.84 6.41 6.41 0 0 1-.51 1.72c-.45 1-1.08 2.41-.17 3.06a1.69 1.69 0 0 0 1.36.16c2.89-.63 4.42-3.71 5.63-6.41s3-5.72 6-6c3.47-.29 7.1 3.49 10 1.51.88-.6 1.41-1.66 2.39-2.1a3.89 3.89 0 0 1 2.22-.14 15.58 15.58 0 0 1 12.73 13.34c.15 1.4.44 3.22 1.83 3.44a5.91 5.91 0 0 0 1.55-.18c2.62-.3 4.22 2.72 5.06 5.22 1.04 3.26 2.12 6.69 1.64 10.08z"
  }))), _react.default.createElement("g", {
    opacity: 0.9
  }, _react.default.createElement("path", {
    d: "M.03 206.81c0 .93 0 1.86.07 2.8a195.83 195.83 0 0 0 3.52 30.36c5.73 29.8 17.7 59.6 31.86 88 .23.45.46.9.68 1.35.34.67.67 1.34 1 2q1 2.06 2.08 4.08l1.57 3c.37.72.76 1.44 1.14 2.17.23.44.47.89.72 1.34a249.56 249.56 0 0 0 12.85 21.76l.53.78a135.11 135.11 0 0 0 20.36 24c13.54 12.45 30.74 21.45 49.11 26.59.62.18 1.24.34 1.87.51 1.2.31 2.42.61 3.64.9.84.2 1.68.39 2.53.56a132.78 132.78 0 0 0 17.77 2.57c3.24.25 6.49.37 9.72.37h1.4a118.48 118.48 0 0 0 11.95-.7l.57-.07a103.62 103.62 0 0 0 31.16-8.39q2.37-1.06 4.65-2.25l.78-.4.38-.21a126.18 126.18 0 0 0 14.66-9.17c5.45-3.91 10.59-8.15 15.56-12.51a239.41 239.41 0 0 0 21-20.68l.3-.33q4.23-4.77 8.07-9.8v-.06q2.67-3.51 5.12-7.15c.08-.1.15-.21.23-.33 2.39-3.57 4.61-7.23 6.63-11l.46-.87q2.19-4.14 4-8.42c6.92-16.08 10-33.49 11.69-50.94 3.45-35.26 1.44-71.59-7.89-106.86q-1.89-7.16-4.19-14.25c-.21-.63-.41-1.27-.63-1.9-.33-1-.68-2-1-3.05-.14-.42-.29-.85-.44-1.27q-2-5.76-4.33-11.45l-.81-2c-.85-2-1.72-4.09-2.63-6.12-.83-1.87-1.69-3.75-2.59-5.61-.15-.3-.29-.59-.43-.89-7.7-15.81-17.8-31.18-32.16-42.77-1-.79-2-1.56-3-2.31q-2.25-1.68-4.65-3.22l-1.13-.72-.42-.26-.3-.18-.17-.1c-.81-.49-1.64-1-2.47-1.42s-1.7-.9-2.56-1.33h-.12l-.34-.16c-.67-.34-1.35-.66-2-1l-.7-.31-.27-.12-1.13-.47a79 79 0 0 0-15.94-4.77 73.63 73.63 0 0 0-9.16-1.12 60.65 60.65 0 0 0-13.93.75c-.7.12-1.39.25-2.08.4a42.47 42.47 0 0 0-16.15 7c-6.29 4.56-10.73 10.67-14.76 17l-.41.64c-.68 1.07-1.34 2.14-2 3.21-2.31 3.74-4.62 7.5-7.06 11.19-2.26 3.42-4.63 6.78-7.19 10a85.19 85.19 0 0 1-8.4 9.14c-.45.42-.91.84-1.38 1.25a62.47 62.47 0 0 1-18.91 11.57c-6.28 2.35-13 3.41-19.53 2.05a26.09 26.09 0 0 1-5.38-1.72c-3.26-1.44-6.45-2.85-9.59-4.1a71 71 0 0 0-17.53-5 39 39 0 0 0-18.49 2c-1 .35-1.95.75-2.94 1.19a41.76 41.76 0 0 0-11.82 7.91c-.41.39-.81.79-1.21 1.19-8.75 8.94-13.57 21.31-16.16 33.41a152 152 0 0 0-3.25 34.72z",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M167 436.82l-2 2.32c.62.18 1.24.34 1.87.51 1.2.31 2.42.61 3.64.9.84.2 1.68.39 2.53.56a132.78 132.78 0 0 0 17.77 2.57c3.24.25 6.49.37 9.72.37a15.28 15.28 0 0 0 1.62-2.89c1.32-3.09 6.47-8.57 12-13.84-.11.89-.18 1.4-.18 1.4v.35l-.06 14.27.57-.07a103.62 103.62 0 0 0 31.16-8.39q2.37-1.06 4.65-2.25l.78-.4.38-.21c.69-3.44 1.32-6.74 1.83-9.37l.06-.37c.07-.35.13-.7.2-1s.11-.62.17-.9.07-.41.11-.6c.34-1.81.53-2.89.53-2.89a14.11 14.11 0 0 1 .18-1.64 14.44 14.44 0 0 1 3.87-8.1 7.59 7.59 0 0 0 1.86-3.21c1.1-3.4.91-7.84.75-9.86-.05-.67-.11-1.07-.11-1.07s3.81-2 6.06-8.21a24.53 24.53 0 0 0 1.09-4c1.63-8.79 6.66-27.33 7.28-29.61l.06-.22s.13-.32.36-.93c0-.07.05-.14.07-.22l.09-.23c2.26-6.19 11-31.28 10.29-47.94-.77-19.13 1.16-29.09 1.16-29.09l2.26-41.58v-.44l.13-2.43v-.69c.33.25.63.49.87.69l.55.46.19.18v-.48c.35.29.55.48.55.48s1-16.15.9-25.28c0-1.07 0-2.06-.08-2.9 6.76-2.29 17-6.07 17.63-8 .49-1.59 4.29-5.09 7.56-7.89l1.79-1.5.93-.77c1.3-1.06 2.19-1.75 2.19-1.75a2 2 0 0 1-.71-.27c.36-.16.75-.35 1.15-.57 1-.52 2-1.16 3.16-1.91 4.81-3.17 10.68-8.17 13.95-13 1.82-2.71 2.83-5.38 2.39-7.65a4.28 4.28 0 0 0-.16-.64l13.82-19.87 1.61-2.32a3.78 3.78 0 0 0-.34-4.74l.06-.08-.1-.07-.6-.4.11.1a2 2 0 0 0-2.6.56l-.24.35L341 149.27l-2.35 3.39c-5.2-1.57-12.77 2.85-18.74 7.35a96.47 96.47 0 0 0-5.67 4.63l-1 .91c-.47-1-.74-1.7-.74-1.7-.29 3.16-11.45 7.9-14.05 9.62a9.51 9.51 0 0 1-3.89 1.31c.37-12-8.92-24.65-8.92-24.65l-18-22.95-1.11-1.41-3.56-4.53a20.85 20.85 0 0 1-.32-4.28 26.53 26.53 0 0 1 1-6.94c.11-.36.23-.73.35-1.1a23.61 23.61 0 0 1 1.25-3c.19-.37.38-.75.59-1.12h.1c-.39 1.38-.8 2.77-1.08 4.16-.08.38-.15.75-.2 1.13l-.06.47a15.22 15.22 0 0 0-.08 1.79v.26c.18 2.41 1.95 11.15 4.37 10.76a1.42 1.42 0 0 0 1.3-.63 6.22 6.22 0 0 0 .72-1 6.52 6.52 0 0 0 .41-.84 9.41 9.41 0 0 0 .41-1.2 24.16 24.16 0 0 0 .57-7 20.2 20.2 0 0 1-.36 3.26c.13-2.53-.08-5.19-.16-7.35v-1.35-1.37c0-.46 0-.92.05-1.39h.28V104.49h.29a30 30 0 0 0 6.63-2 30.5 30.5 0 0 0 7.24-4.41 7.59 7.59 0 0 0 1.42-.2 7.49 7.49 0 0 0 3.59-2l.2-.22a5.06 5.06 0 0 1-.86 4.58.76.76 0 0 1-.11.14h.14c2.87-.2 5.32-2.39 6.51-5a1.59 1.59 0 0 0 .12-.27 18.31 18.31 0 0 0 .87-8.89 60.09 60.09 0 0 1-.65-9c0-.73.13-1.46.2-2.19v-.26a14.19 14.19 0 0 0 0-2.44 1.11 1.11 0 0 0 0-.17 9.45 9.45 0 0 0-.24-1.31h.09a2.14 2.14 0 0 0 1.65-.85l.18-.15a3.47 3.47 0 0 0 .58-.68 5.23 5.23 0 0 0 .55-1 16.87 16.87 0 0 0 .69-2.45 37.44 37.44 0 0 0 1.17-10.29c-.07 1-.2 2.1-.36 3.15.28-4-.28-7.84-2.91-10.72-1.8-2-4.33-3.15-6.77-4.3a5.08 5.08 0 0 1-2.19-1.56 6.45 6.45 0 0 1-.68-2.74c-.85-5.82-6.32-9.85-11.76-12.21-7-3-15.43-4.35-22.16-.73-3.27 1.75-5.85 4.51-8.8 6.76-3.74 2.83-8 4.82-12 7.3S226.92 46 225 50.22s-1.62 9.2-1.09 14c.27 2.44.6 4.88.73 7.28v.59a37.55 37.55 0 0 1-3 16.1 31.54 31.54 0 0 1-10.33 13.19 11.66 11.66 0 0 0-2.92 2.53 3.15 3.15 0 0 0-.24 3.61 3.91 3.91 0 0 0 .81.76 6.44 6.44 0 0 1 .93.8 2.8 2.8 0 0 1 .52.88 5.3 5.3 0 0 1 .08 2.91c0 .09 0 .18-.05.26l-.12.5a28.45 28.45 0 0 1-7.74 13.09c.16 1.18 1.6 1.64 2.79 1.82a64.8 64.8 0 0 0 9.45.68h1.36c-.15.36-.29.73-.44 1.12-.32.85-.67 1.8-1 2.8-1.44 4.25-2.78 9.45-2.18 12.89 1.16 6.7 4.63 37.31 2.9 42.67s2.7 44.58 2.7 44.58.12.61.35 1.68c.28 1.32.73 3.34 1.31 5.81 0 .1-.08.21-.13.31-2.7 6.35-5.74 13.3-7.28 16.12-2.07 3.79-2.1 17.83 1.23 30.68 1.71 6.62 4.32 12.92 8 17.34 0 0 3.78 5.33 3.49 8a1.84 1.84 0 0 1-.19.64c-.82 1.6-.4 4.05-.07 5.37.14.58.27.94.27.94v1l1.67 36.93a97.58 97.58 0 0 1-.8 11.57c-4.61 5.71-11.72 14-15.08 15.4-5.18 2.11-43.82 49-43.82 49s.31.56.91 1.48z",
    transform: "translate(-39.48 -24.1)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M282.28 159.02a10 10 0 0 1-3.7 1.4c-4.83.15-8.81-12.93-8.81-12.93s1.38-1.39 3.57-3.34c6.47-5.76 20.05-16.39 26.42-10.44 7.14 6.67-9.16 20.81-17.48 25.31zM133.52 417.01a132.78 132.78 0 0 0 17.77 2.57c-2.53-4.47-19-9.78-19-9.78l-2.23 2.6-1.06 1.25-1.62 1.9c1.2.31 2.42.61 3.64.9.82.2 1.66.39 2.5.56z",
    fill: "#a1616a"
  }), _react.default.createElement("path", {
    d: "M282.28 159.02a10 10 0 0 1-3.7 1.4c-4.83.15-8.81-12.93-8.81-12.93s1.38-1.39 3.57-3.34c1.54 3.56 5.9 13.1 8.94 14.87z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M251.3 154.31s4 .29 6.54-1.42 13.5-6.39 13.78-9.52c0 0 6.54 15.92 10.23 16.49 0 0-11.37 8.95-12.22 11.79s-23 9.8-23 9.8z",
    fill: "#ff748e"
  }), _react.default.createElement("path", {
    d: "M251.3 154.31s4 .29 6.54-1.42 13.5-6.39 13.78-9.52c0 0 6.54 15.92 10.23 16.49 0 0-11.37 8.95-12.22 11.79s-23 9.8-23 9.8z",
    fill: "#5e5a6b"
  }), _react.default.createElement("path", {
    d: "M128.98 413.65c.49.75 1.16 1.71 2 2.8.84.2 1.68.39 2.53.56a132.78 132.78 0 0 0 17.77 2.57c-2.53-4.47-19-9.78-19-9.78l-2.23 2.6z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M129.15 410.9s.3.56.89 1.47a42.53 42.53 0 0 0 3.49 4.61 132.78 132.78 0 0 0 17.77 2.57c3.24.25 6.49.37 9.72.37h1.4a14.32 14.32 0 0 0 1-2c1.23-2.92 5.89-8 11-13 .24-.25.5-.49.74-.73 7.29-7.07 15.17-13.76 15.17-13.76l.76-48.69s-1.73 2.31-4.19 5.39c-4.52 5.65-11.51 13.9-14.79 15.25-5.07 2.14-42.96 48.52-42.96 48.52z",
    fill: "#5e5a6b"
  }), _react.default.createElement("path", {
    d: "M129.15 410.9s.3.56.89 1.47a42.53 42.53 0 0 0 3.49 4.61 132.78 132.78 0 0 0 17.77 2.57c3.24.25 6.49.37 9.72.37h1.4a14.32 14.32 0 0 0 1-2c1.23-2.92 5.89-8 11-13 .24-.25.5-.49.74-.73 7.29-7.07 15.17-13.76 15.17-13.76l.76-48.69s-1.73 2.31-4.19 5.39c-4.52 5.65-11.51 13.9-14.79 15.25-5.07 2.14-42.96 48.52-42.96 48.52z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M148.99 403.97a60.35 60.35 0 0 0 12.65 0c7.53-.71 1.88 3.84-12.65 0zM145.58 408.81s9.95 5.68 13.79 2.84-3.7 2.74-13.79-2.84z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M185.65 289.18a3.9 3.9 0 0 1 .16 2.78 6.22 6.22 0 0 0-.42 3.23 14 14 0 0 0 .31 1.9c.16.67.31 1.12.31 1.12l1.68 37.51a98.12 98.12 0 0 1-.78 11.46c-.54 4-1.46 8.11-3 10.52-3.39 5.2-7.82 39.2-8.74 46.54l-.17 1.39-.06 13.54a103.62 103.62 0 0 0 31.16-8.39q2.37-1.06 4.65-2.25l.78-.4.38-.21c.69-3.52 1.32-6.83 1.79-9.35l.06-.37c.07-.36.14-.7.2-1s.11-.62.17-.9.07-.41.11-.6c.2-1.12.32-1.76.32-1.76a17.25 17.25 0 0 1 .39-2.77 13.64 13.64 0 0 1 3.57-6.88 8.61 8.61 0 0 0 2.16-4.43 32.78 32.78 0 0 0 .29-9.57 5.19 5.19 0 0 0 .55-.39c1.16-.82 4.27-3.46 5.95-9.28a23.92 23.92 0 0 0 .6-2.55c1.71-9.28 7.2-29.56 7.2-29.56s.21-.55.57-1.54c.13-.33.27-.72.42-1.15 0-.07.05-.14.07-.22l.09-.23c2.87-8.21 10.06-30.49 9.46-45.68-.77-18.94 1.13-28.8 1.13-28.8l2.37-44V205.79l.22-4.14-21.8-.65h-1.27l-5.18-.16H220.63l-7-.21-3.13-.09-5.64-.17h-2.06l-4.35-.13-12.68 7.39s-.49 1.23-1.3 3.18c-.17.44-.37.93-.59 1.44s-.43 1.07-.68 1.66l-1.8 4.32c-.21.51-.42 1-.64 1.54-2.68 6.38-5.73 13.44-7.27 16.27-1.91 3.52-2 16 .63 28 1.65 7.41 4.37 14.66 8.41 19.57a28 28 0 0 1 3.12 5.57z",
    fill: "#5e5a6b"
  }), _react.default.createElement("path", {
    d: "M199.86 390.33s7.77 6.13 11 6.11-11-6.11-11-6.11z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M246.61 133.9v12.51l-8.26-3.56-8.22-3.55-17.9-17.62s-14.17-9.21-21.75-17.59c-4.33-4.79-6.51-9.3-2.69-11.68a23.68 23.68 0 0 0 4.95-4.35 80.91 80.91 0 0 0 9.88-14.58c.12-.21.24-.42.35-.63 3.69-6.77 6.13-12.55 6.13-12.55s10.38 3.33 17.06 8c.54.37 1.05.76 1.54 1.16 3.73 3.06 5.57 6.59 2.15 10.12a26.72 26.72 0 0 0-2.45 2.92 21.67 21.67 0 0 0-1.52 2.39c-.21.37-.4.74-.58 1.11a25.55 25.55 0 0 0-2.28 15.17z",
    fill: "#a1616a"
  }), _react.default.createElement("path", {
    d: "M245.1 44.6c.43.74 1 1.39 1.43 2.15.84 1.6.7 3.5.62 5.31a30.37 30.37 0 0 0 .55 8.46c.59 2.49 1.68 4.9 1.77 7.46.13 3.62-1.75 7-3.57 10.09a7.28 7.28 0 0 0 5.2-2.42 5 5 0 0 1-1 4.67c3-.14 5.51-2.48 6.65-5.23a18.39 18.39 0 0 0 .85-8.79 59 59 0 0 1-.64-8.89 34.28 34.28 0 0 0 .26-4.85c-.28-3.22-2.26-6-4.16-8.62l-3.85-5.27a2.7 2.7 0 0 0-1.06-1c-3.63-1.55-4.07 5.15-3.05 6.93z",
    fill: "#464353"
  }), _react.default.createElement("path", {
    d: "M229.85 79.57a26.72 26.72 0 0 0-2.45 2.92 21.67 21.67 0 0 0-1.52 2.39c-.21.37-.4.74-.58 1.11a29.58 29.58 0 0 1-14.19-4.51 29.93 29.93 0 0 1-8.14-7.58c-.12-.16-.24-.33-.35-.5.12-.21.24-.42.35-.63 3.69-6.77 6.13-12.55 6.13-12.55s10.38 3.33 17.06 8c.54.37 1.05.76 1.54 1.16 3.73 3.13 5.57 6.66 2.15 10.19z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M256.82 55.07a29.86 29.86 0 0 1-24.43 29.36 31.1 31.1 0 0 1-5.41.48h-1.13a29.58 29.58 0 0 1-14.77-4.54 30 30 0 0 1-8.14-7.55 29.82 29.82 0 1 1 53.88-17.75z",
    fill: "#a1616a"
  }), _react.default.createElement("path", {
    d: "M230.89 128.83s15 8.48 11.18 1.33l-19.61-29 22.26 28.61s14.21 19.51 6.44 33c0 0-1.14 11.18.19 13.83s-.38 30.89-.38 30.89-5.3-4.93-8.15-4-22.92 2.65-22.92 2.65z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M249.64 201.59l-.28 5.24c-1.8-1.31-4.3-2.77-6-2.22-2.84.95-22.92 2.66-22.92 2.66l.92-6.52z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M231.46 128.83s15 8.48 11.17 1.33l-19.61-29 22.27 28.61s14.21 19.51 6.44 33c0 0-1.14 11.18.19 13.83s-.38 30.89-.38 30.89-5.31-4.93-8.15-4-22.87 2.64-22.87 2.64z",
    fill: "#464353"
  }), _react.default.createElement("path", {
    d: "M239.52 143.37c-.88 9.1-4.63 19.94-4.63 19.94s-2.64 26.91-6 34.87-1.9 18.94-3.8 39.21c-.68 7.3-3 12.31-6.2 15.7-5.22 5.57-12.67 6.73-18.55 6.38-.48 0-.94-.06-1.39-.1-9.48-1-18.57-46.61-18.57-46.61s-4.35-38.84-2.65-44.14-1.7-35.62-2.84-42.25c-.72-4.2 1.45-11.07 3.13-15.54 1-2.58 1.79-4.36 1.79-4.36s3.22-10.23 8.53-15.53a7.77 7.77 0 0 1 5.62-2.36 13.93 13.93 0 0 1 7 2.2l.24.16s34.49 35.24 37.7 43.38c.84 2.28.93 5.58.62 9.05z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M238.35 142.8c-.88 9.1-4.62 19.94-4.62 19.94s-2.65 26.91-6.06 34.87-1.9 18.94-3.79 39.22c-.68 7.29-3 12.31-6.21 15.69-5.22 5.57-12.66 6.73-18.55 6.39l-1.39-.11c-9.47-.94-18.57-46.61-18.57-46.61s-4.35-38.84-2.65-44.14-1.7-35.62-2.84-42.25c-.72-4.2 1.45-11.07 3.13-15.54 1-2.58 1.79-4.36 1.79-4.36s3.23-10.23 8.53-15.53a7.83 7.83 0 0 1 5.62-2.36 13.93 13.93 0 0 1 7 2.2l.25.16s34.48 35.24 37.7 43.39c.91 2.27 1.01 5.53.66 9.04z",
    fill: "#5e5a6b"
  }), _react.default.createElement("path", {
    d: "M199.72 281.49s-7.81 7-10.51 6.68 10.51-6.68 10.51-6.68zM201.8 288.18s-8.24 3.82-10.7 4.39 7.52-5.38 10.7-4.39zM233.68 183.58s12.22.15 14.07 4-10.09-5.56-14.07-4zM231.98 190.26s9.38 2 12.22 4.27-12.22-4.27-12.22-4.27zM216.21 167.1s-1.13 38.51-5.33 43.48 5.33-43.48 5.33-43.48zM205.69 275.95s-7.8 34 7.89 36.09 10.87-38.65 10.87-38.65z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M205.12 275.38s-7.8 34 7.89 36.09 10.87-38.65 10.87-38.65z",
    fill: "#a1616a"
  }), _react.default.createElement("path", {
    d: "M256.63 51.78a10.89 10.89 0 0 1-1.11-2.06c-2.09-4.35-7.45-2.23-11.39-.14l-2.11 2.7a17.5 17.5 0 0 0-2.4 3.7 29.49 29.49 0 0 0-1 3.32c-.54 1.92-1.34 3.76-2.06 5.63a66.17 66.17 0 0 0-4.21 19.5 31.1 31.1 0 0 1-5.41.48h-.13v-.14c.2-.75.37-1.51.52-2.27a39.37 39.37 0 0 0 .3-13v-.28c-.15-1-.33-1.93-.42-2.9-.36.67-.71 1.34-1.08 2-2.37 4.46-4.87 8.83-9.36 10.78a19.53 19.53 0 0 1-5.69 1.28 32.51 32.51 0 0 0-7.11 1.18 4.5 4.5 0 0 0-2.07 1.25 6.17 6.17 0 0 0-1 3.11 25.41 25.41 0 0 1-1.13 4.32 37.88 37.88 0 0 1-9.25 13.8l-1 1a19.18 19.18 0 0 1-6.14 4.25 18.54 18.54 0 0 1-6.51 1c1-2.58 1.79-4.36 1.79-4.36s3.23-10.23 8.53-15.53a7.83 7.83 0 0 1 5.62-2.36 83.25 83.25 0 0 0 10.16-15.24 29.84 29.84 0 1 1 53.66-21z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M258.52 28.51c-1.77-2-4.25-3.12-6.64-4.25a5 5 0 0 1-2.15-1.57 6.69 6.69 0 0 1-.67-2.71c-.83-5.77-6.19-9.76-11.53-12.1-6.87-3-15.12-4.3-21.72-.72-3.2 1.74-5.74 4.47-8.63 6.69-3.66 2.81-7.89 4.77-11.8 7.23s-7.64 5.55-9.5 9.78c-2.87 6.52-.72 14-.35 21.12.56 11.21-4 22.94-13.06 29.58a11.53 11.53 0 0 0-2.87 2.51 3.15 3.15 0 0 0-.23 3.57c.45.62 1.2 1 1.7 1.55 1 1.18.82 3 .42 4.5a28.22 28.22 0 0 1-7.58 13c.15 1.17 1.57 1.63 2.73 1.8a63.91 63.91 0 0 0 9.26.68 15.58 15.58 0 0 0 13-5.23c5.5-5.19 10.19-11.68 11.44-19.14a6.3 6.3 0 0 1 1-3.12 4.68 4.68 0 0 1 2.07-1.25c4.12-1.42 8.8-.72 12.8-2.46 5.18-2.25 7.7-7.7 10.44-12.8.09 1 .27 1.94.42 2.9a39.3 39.3 0 0 1-.77 15.61c-.74 2.88-1.82 5.75-1.74 8.73.06 2.18 2.3 13.75 5.25 10.29s1.86-11.1 1.87-15.39a65.92 65.92 0 0 1 4.34-23.48c.71-1.87 1.51-3.7 2.06-5.63a26.83 26.83 0 0 1 1-3.31 17.25 17.25 0 0 1 2.4-3.7l2.11-2.71c3.94-2.08 9.3-4.21 11.39.14.81 1.67 1.23 3.51 3.3 1.89 1.24-1 1.64-2.85 2-4.28 1.3-6.06 2.38-13.14-1.76-17.72z",
    fill: "#464353"
  }), _react.default.createElement("path", {
    d: "M218.52 132.82c-.81-20.41-29.36-24.63-36-5.33-.05.13-.09.26-.13.39-4.36 13.08-2.47 46.18-2.47 46.18s.57 22.22 2.66 29.61 7.95 28.61 7.95 32 5.45 16.48 7.74 17.43 3.46 8.33 4 9.66 2.25 18.59 2.25 18.59 21.41-1.33 21.79-4.74-4.74-20.08-4.74-20.08-3.77-6.82-4.25-12.32-3.51-8-2.95-11.74-1.7-5.69-1.7-8.15-1.71-9.1-1.71-9.1-3.6-2.84-3-6.25-5.11-10.23-3.6-12.69 1.9-8.53 1.9-8.53 1.89-27.28 3.22-34.67 9.09-19.32 9.09-19.32 0-.34-.05-.94z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M217.67 252.52c-5.22 5.57-12.66 6.73-18.55 6.39-.67-2.59-1.67-5.76-3.12-6.36-2.3-.95-7.74-14-7.74-17.43s-5.87-24.63-8-32-2.65-29.61-2.65-29.61-1.9-33.1 2.46-46.17c0-.14.09-.27.13-.4 6.67-19.3 35.23-15.08 36 5.33v.94s-7.77 11.93-9.09 19.32-3.23 34.67-3.23 34.67-.38 6.07-1.89 8.53 4.17 9.29 3.6 12.7 3 6.25 3 6.25 1.7 6.63 1.7 9.09 2.28 4.36 1.71 8.15 2.47 6.25 2.95 11.75a30.49 30.49 0 0 0 2.72 8.85z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M217.41 132.25c-.8-20.41-29.36-24.63-36-5.33 0 .13-.09.26-.13.4-4.36 13.07-2.46 46.17-2.46 46.17s.56 22.22 2.65 29.61 8 28.61 8 32 5.44 16.48 7.74 17.43 3.45 8.33 4 9.66 2.27 18.57 2.27 18.57 21.4-1.33 21.78-4.74-4.74-20.06-4.74-20.06-3.77-6.82-4.26-12.32-3.51-7.95-2.94-11.74-1.71-5.69-1.71-8.15-1.7-9.09-1.7-9.09-3.6-2.85-3-6.26-5.12-10.23-3.6-12.69 1.89-8.53 1.89-8.53 1.9-27.28 3.22-34.67 9.1-19.32 9.1-19.32-.08-.29-.11-.94z",
    fill: "#5e5a6b"
  }), _react.default.createElement("path", {
    d: "M182.24 184.72c.57-.57 11.37-12.5 14.78-8.24s-14.78 8.24-14.78 8.24zM183.24 193.96c.42-.43 10.8-.85 13.36-6.68s-13.36 6.68-13.36 6.68z",
    opacity: 0.1
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M171.42 89.19a2.79 2.79 0 0 1 .57 1 4.45 4.45 0 0 0-.57-3.87c-.51-.58-1.25-.92-1.71-1.54l-.09-.16a3 3 0 0 0 .09 3c.46.64 1.2.99 1.71 1.57zM185.88 52.36v-3.22c-.2-3.87-.91-7.84-1.08-11.71-.22 4.74.84 9.73 1.08 14.55 0 .12-.01.25 0 .38zM230.16 99.82c-2.63 3.09-4.69-5.79-5.15-9.29a12.53 12.53 0 0 0-.09 1.84c.06 2.18 2.29 13.75 5.24 10.29 2-2.34 2.19-6.33 2.07-10-.1 2.76-.58 5.42-2.07 7.16zM227.42 68.03a37.62 37.62 0 0 1 .41 4.5 39.21 39.21 0 0 0-.41-7.34c-.15-1-.33-1.93-.41-2.9-2.74 5.1-5.27 10.55-10.44 12.8-4 1.73-8.68 1-12.81 2.46a4.51 4.51 0 0 0-2.06 1.25 6.17 6.17 0 0 0-1 3.12c-1.25 7.46-5.94 14-11.45 19.14a15.5 15.5 0 0 1-13 5.22 62.32 62.32 0 0 1-9.26-.67 6.18 6.18 0 0 1-1.39-.36c-.43.48-.88 1-1.35 1.4.16 1.17 1.58 1.63 2.74 1.8a63.7 63.7 0 0 0 9.26.68 15.54 15.54 0 0 0 13-5.23c5.51-5.19 10.2-11.68 11.45-19.14a6.21 6.21 0 0 1 1-3.12 4.59 4.59 0 0 1 2.06-1.25c4.13-1.42 8.81-.72 12.81-2.46 5.17-2.25 7.7-7.7 10.44-12.8.08.97.26 1.94.41 2.9zM260.58 43.35c-.32 1.43-.72 3.32-1.95 4.28-2.07 1.62-2.5-.22-3.3-1.89-2.09-4.35-7.46-2.23-11.39-.14l-2.11 2.7a17.37 17.37 0 0 0-2.4 3.7 29.49 29.49 0 0 0-1 3.32c-.54 1.92-1.34 3.76-2.06 5.63a65.84 65.84 0 0 0-4.34 23.48v1.16a66.16 66.16 0 0 1 4.32-21.8c.72-1.87 1.52-3.7 2.06-5.63a28.72 28.72 0 0 1 1-3.31 16.88 16.88 0 0 1 2.4-3.7l2.11-2.71c3.93-2.08 9.3-4.21 11.39.14.8 1.67 1.23 3.51 3.3 1.89 1.23-1 1.63-2.85 1.95-4.28A37 37 0 0 0 261.71 36a47.08 47.08 0 0 1-1.13 7.35z"
  })), _react.default.createElement("path", {
    d: "M286.42 150.9l.59.41a2.34 2.34 0 0 1-.6-3.26l26.33-38.23a2.35 2.35 0 0 1 3.26-.6l-.58-.4a3.76 3.76 0 0 1 1 5.23l-24.76 35.85a3.77 3.77 0 0 1-5.24 1z",
    fill: "#464353"
  }), _react.default.createElement("path", {
    d: "M315.516 108.87l.593.41-28.993 42.09-.593-.408a1.74 1.74 0 0 1-.446-2.42l27.02-39.225a1.74 1.74 0 0 1 2.42-.446z",
    fill: "#9f9eff"
  }), _react.default.createElement("rect", {
    x: 350.43,
    y: 138.44,
    width: 0.47,
    height: 4.17,
    rx: 0.17,
    ry: 0.17,
    transform: "rotate(34.56 369.694 65.033)",
    fill: "#464353"
  })), _react.default.createElement("path", {
    d: "M853.71 783.67l-8-25.46s-6.7-18.07-5.62-27.76-2.25-20.27-2.25-20.27l6.58-34.25s.36-3.73.34-8.65c0-8.2-1.16-19.7-6.84-22.69-9.08-4.79-27.69-45.28-31.59-45.28s-16.44-2.61-16.44-7a2.61 2.61 0 0 0 0-.48v-.15c0-.05-.06-.23-.1-.35l-.06-.17-.18-.4-.06-.11a10.68 10.68 0 0 0-1.81-2.37c16.94-3.23 33.8-6.78 50.54-10.91h-.62l.62-.15a56.7 56.7 0 0 1-6.65-.46l-.49.11c-24.62-3.36-46.75-22.61-52.77-47-6.68-27 5-55.18 4.48-83a95.32 95.32 0 0 0-15.11-49.58c-1.28-2-2.64-3.92-4.06-5.8a38 38 0 0 0 14.63-55.82c-.43-.62-.88-1.22-1.34-1.81a38.11 38.11 0 0 1-6.22 47.14 37.77 37.77 0 1 0-66.53-35.77c-.81-.36-1.62-.72-2.43-1.05a37.76 37.76 0 0 1 33.14-24.73 33.6 33.6 0 0 0-2.25-.07 37.73 37.73 0 0 0-34.79 23.26c-11.32-4.15-23.13-5.87-34.75-2.92a38.2 38.2 0 0 0-6.3 2.19l.52-.41a28.11 28.11 0 0 0-7.87 5c-3.48 3.21-5.93 7.37-8.88 11.09a46.84 46.84 0 0 1-10.55 9.58c.33-.16.66-.35 1-.52-13.4 9.48-31.61 12.21-46.93 6.11-4.3-1.72-8.45-4.07-13-4.7a19.64 19.64 0 0 0-10.29 1.5c.14-.11.27-.23.42-.34a26.91 26.91 0 0 0-10.8 8.1c-5 6.17-7.51 14-9.3 21.71a70.71 70.71 0 0 0-2 16.72c.07 7.22 1.69 14.19 6 19.84 6.68 8.66 15.8 11 25.32 12.56-.28 1-.55 1.92-.79 2.9A86 86 0 0 0 629 554.71l1.85 3.14.6.14c4.43 7.49 9.28 15.9 13.78 24 .24.43.47.86.71 1.28l-8.51 4.38c-2.23 1.15-7.77 4.16-10.84 7.12a7.21 7.21 0 0 0-2 2.83c-1.3 4.36-8.22 15.68-13 18.72s-8.66 17.85-8.22 25.67-2.6 7-10.39 7.42 0 11.75 0 11.75l.2.76c-.36.62-.77 1.29-1.22 2-2 3.07-4.63 6.47-6.55 6.29-3.47-.33-5.63 8.16-5.41 9.46s-6.06 11.75-8.44 12.84-12.55 3.17-9.74 12.91l-12.34 12.56-10 9.58s-14.28-8.06-37.44 17a20.69 20.69 0 0 1 7.68.72l-.66.32c-6.1 2.89-16.66 7.82-24.47 11L443 757.89v-31s-3.68-8.7-8 0l-1.09 31.32-90.4 2.93 16.94-18 .22-.24a14.83 14.83 0 0 0 3.33-14.67l-70.68-222.17-.49-1.56a12.16 12.16 0 0 0-9.95-8.38l-98.18-13.25-.68-.09-9.02 2.45a8.84 8.84 0 0 0-6.16 11c2.32 8 6.13 21.06 11 37.47h-13.56l10.39 89.68 6.33 34.5q2.43 13.2 5.67 26.24c5.21 21 15.52 65.79 15.75 91.77l-76 82.86v16.83h485.45a.8.8 0 0 0 .08.16h236.51s-2.59-4.57 3-11.1 2.82-32.43 2.82-32.43-3.14-4.14.7-13.28-3.27-35.26-3.27-35.26zm-603.19-19.55l-12.9.42-12-78.06c8.89 28.52 17.51 55.66 24.9 77.64zm332.18 47.44l-8.37-17.08a9.31 9.31 0 0 0 5.43-1.45c5.41-3.92 8.65-13.06 8.65-13.06l14.52-17.25 1.2-1.44c2.94 8.21 6.4 14.69 9.17 17.82 6.92 7.84 7.79 30.47 9.92 38.74s.47 4.79 0 9.58a12.51 12.51 0 0 0 .29 3.49c-9.57-10.27-23.18-19.61-40.81-19.35z",
    transform: "translate(-39.48 -24.1)",
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    fill: "#514e7f",
    d: "M93.83 834.98l85.35-92.51 339-10.91 59.18 120.08H93.83v-16.66z"
  }), _react.default.createElement("path", {
    opacity: 0.2,
    d: "M93.83 834.98l85.35-92.51 339-10.91 59.18 120.08H93.83v-16.66z"
  }), _react.default.createElement("path", {
    d: "M535.42 827.26v3.2a6.24 6.24 0 0 1-6.24 6.24H346.96c-3.45 0 0-6.89 0-6.89l-2.06-45.13a7.45 7.45 0 0 1 5.62-7.56c10.14-2.56 17.12 1.55 17.12 1.55l112.88-2.87a36.19 36.19 0 0 1 7 .33 30.66 30.66 0 0 1 20.69 12.26l25.94 35.17a6.24 6.24 0 0 1 1.27 3.7z",
    fill: "#514e7f"
  }), _react.default.createElement("path", {
    d: "M535.42 830.46a6.24 6.24 0 0 1-6.24 6.24H346.96c-3.45 0 0-6.89 0-6.89s10.06-4.88 25-4l133-2.88s15.71.36 24.9 1.36a6.23 6.23 0 0 1 5.56 6.17z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M483.7 783.55H369.36l3.16 34.77 132.44-2.3-21.26-32.47z"
  }), _react.default.createElement("path", {
    d: "M289.79 807.97v12.07L170 824.9s-27.39-1.87-30.75-18.7a15.7 15.7 0 0 1 .1-5.3c1.21-7.09 7.29-19.47 34.09-25.19l33-3.39h73.58s9.5 9.51 9.77 35.65z",
    fill: "#514e7f"
  }), _react.default.createElement("path", {
    d: "M289.79 808.35v11.69L170 824.9s-27.39-1.87-30.75-18.7a15.7 15.7 0 0 1 .1-5.3s16.56 15.66 39 13.36l105.44-4.59a59.28 59.28 0 0 0 6-1.32z",
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 237.35,
    cy: 813.97,
    rx: 36.83,
    ry: 6.32,
    transform: "rotate(-2.95 -250.07 1569.405)",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M209.52 786.9l-19.38 9.58-20.62-4.88-.1-33.61c1.31-24.53-10-73.63-15.59-95.88q-3.23-12.9-5.65-26l-6.34-34.15-10.32-88.74h24.56l14.44 20.68z",
    fill: "#514e7f"
  }), _react.default.createElement("path", {
    d: "M209.52 786.9l-19.38 9.58-12.36-71.78c.24-12.23-15.09-70.29-16.09-72.68C149.47 622.85 139 513.26 139 513.26h17.09l14.43 20.64z",
    fill: "#514e7f"
  }), _react.default.createElement("path", {
    d: "M209.52 786.9l-19.38 9.58-12.36-71.78c.24-12.23-15.09-70.29-16.09-72.68C149.47 622.85 139 513.26 139 513.26h17.09l14.43 20.64z",
    opacity: 0.15
  }), _react.default.createElement("path", {
    d: "M325.05 720.32l-66 69.55-7.74.55-9.43.68a10.63 10.63 0 0 1-10.48-6.29c-20-45-83.94-262.59-97.4-308.68a8.74 8.74 0 0 1 6.13-10.9l9-2.42.67.08 96.15 12.9a14.65 14.65 0 0 1 12 10.06l70.38 219.93a14.64 14.64 0 0 1-3.28 14.54z",
    fill: "#514e7f"
  }), _react.default.createElement("path", {
    d: "M325.05 720.32l-66 69.55-7.74.55-9.43.68a10.63 10.63 0 0 1-10.48-6.29c-20-45-83.94-262.59-97.4-308.68a8.74 8.74 0 0 1 6.13-10.9l9-2.42.67.08 96.15 12.9a14.65 14.65 0 0 1 12 10.06l70.38 219.93a14.64 14.64 0 0 1-3.28 14.54z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M324.82 720.56l-65.77 69.34-7.74.55-98.7-316a30.15 30.15 0 0 1-2.77-11.55l97.76 13.12a12.08 12.08 0 0 1 9.9 8.3l70.77 221.15a15.2 15.2 0 0 1-3.45 15.09z",
    fill: "#514e7f"
  }), _react.default.createElement("path", {
    d: "M320 708.9a14.66 14.66 0 0 1-2.66 3.3l-64.75 60.2-88.34-292.79 84.83 8.4a14.87 14.87 0 0 1 12.79 10.53l59.59 198.43A14.93 14.93 0 0 1 320 708.9z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M320 708.9l-70.92-220.89a14.87 14.87 0 0 1 12.79 10.53l59.59 198.43A14.93 14.93 0 0 1 320 708.9z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 700.27,
    cy: 344.15,
    r: 37.55,
    fill: "#945b79"
  }), _react.default.createElement("path", {
    d: "M662.33 338.58a37.55 37.55 0 0 1 35.31-37.49c-.74 0-1.48-.07-2.23-.07a37.56 37.56 0 1 0 0 75.11c.75 0 1.49 0 2.23-.07a37.55 37.55 0 0 1-35.31-37.48z",
    fill: "#945b79"
  }), _react.default.createElement("path", {
    d: "M667.19 344.15a37.55 37.55 0 0 1 35.33-37.48c-.74 0-1.49-.07-2.24-.07a37.56 37.56 0 0 0 0 75.11c.75 0 1.5 0 2.24-.08a37.54 37.54 0 0 1-35.33-37.48z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M507 765.18a101.83 101.83 0 0 1-10.82 4.93c-9.66 3.8-24.38 8.16-38.09 6.49-23.05-2.8-36.84 4.74-36.84 4.74l-5.17-38.35s17-5 23.91-6.25c5.18-1 23.87-9.61 32.84-13.84 3-1.4 4.87-2.32 4.87-2.32h17.24z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M507 765.18a101.83 101.83 0 0 1-10.82 4.93c-1.17-34.15-14.27-44.29-23.35-47.21 3-1.4 4.87-2.32 4.87-2.32h17.24z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M570.78 650.56v84l-4.51 5.34-14.45 17.1s-3.23 9-8.62 12.92-17.68-1.29-17.68-1.29l-3.45 5.6s-7.75 1.51-11.41 0-12.72 4.31-12.72 4.31c1.3-61.62-32.1-56.66-32.1-56.66 23.05-24.78 37.27-16.81 37.27-16.81l9.92-9.48 12.28-12.44c-2.8-9.63 7.32-11.69 9.69-12.77s8.62-11.42 8.41-12.71 1.93-9.7 5.38-9.37c1.92.18 4.55-3.19 6.53-6.22 1.58-2.44 2.74-4.66 2.74-4.66zM600.61 566.59l25.4-13-1.44 15.23 5 15.3s-4.59 11.85-5.16 13.14-11.49 28.3-11.49 28.3l-8.76-11.06z",
    fill: "#ff6584"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M604.17 614.5l-3.56-47.91 25.4-12.99"
  }), _react.default.createElement("path", {
    d: "M709.75 552.31s-8.44 12.14-20 27.61c-26.9 36-70.66 90-64 50.82.22-1.28.39-2.56.54-3.85-1.64 1.1-5.4.14-9.5-1.81l-.28-.13a48.9 48.9 0 0 1-5.84-3.38c-.21-.13-.41-.27-.61-.41-4.55-3.17-8.19-6.88-8-9.44 3.23-56.24 16.32-29.42 20-23.18a4.06 4.06 0 0 0 .84 1.17q-.24-.66-.54-1.38c-2.58-6.33-7.51-15.79-13.14-25.9v-.1l-.75-1.34c-4.68-8.35-9.75-17.08-14.31-24.74l-1.23-2.06c-7.2-12.08-12.8-21.09-12.8-21.09s32.71-29.92 60.28-48.1c23-15.19 42.48-22.2 36.25 3.28-4 16.38-2.83 30.39.86 42 .13.43.27.86.42 1.28a67.8 67.8 0 0 0 2.56 6.51 73.94 73.94 0 0 0 4.48 8.5 82.39 82.39 0 0 0 24.77 25.74z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M658.9 506.9c-15.51 16.85-18.81 33-43.52 33a85 85 0 0 1-21.31-2.7c-7.79-13.1-14-23.15-14-23.15s110.22-100.79 96.53-44.82c-4.18 16.91-21.71 25.77-17.7 37.67z",
    opacity: 0.15
  }), _react.default.createElement("path", {
    d: "M700.27 452.34a84.9 84.9 0 1 1-84.89-84.9 84.52 84.52 0 0 1 84.89 84.9z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M613.44 599.28s1.51 24.13 16.81 22.19 3.66 51.28 3.66 51.28l-17 15.51-18.34 5.64s-16.16-4.74-15.94-5.61 6.46-51.27 6.46-51.27l9.48-26.94z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M613.44 601s1.51 24.13 16.81 22.2 3.66 51.28 3.66 51.28l-17 15.51-18.32 5.6s-16.16-4.74-15.94-5.6 6.46-51.28 6.46-51.28l9.48-26.93z",
    fill: "#514e7f"
  }), _react.default.createElement("path", {
    d: "M570.78 650.56v84l-4.51 5.34c-4.65-12.34-8.19-29.07-6-44.11 2.85-19.94-2.83-45.46-4.89-53.73 1.58-2.44 2.74-4.66 2.74-4.66zM615.38 603.59a49.27 49.27 0 0 1-3.65 13.74c-.56 1.33-1.13 2.62-1.7 3.83-4.55-3.17-8.19-6.88-8-9.44 3.23-56.24 16.32-29.42 20-23.18-1.8 1.36-5.82 5.36-6.65 15.05zM622.31 588.33c-2.7-6.63-8-16.7-13.93-27.34l.75-.38 13.72 27.38a2.92 2.92 0 0 0-.54.34zM709.75 552.31s-93.51 134.45-84 78.43c.22-1.28.39-2.56.54-3.85-1.68 1.12-5.57.1-9.78-1.94.64-3.74 1-6.3 1-6.3l10.35-29.28s6-23.27 5.17-28l.28-.19 51.46-34.55h.05a82.39 82.39 0 0 0 24.93 25.68z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M806.71 654.01l-7.33 37.89-22 159.87H586.52s3.44-28 3.44-32.32-3.87-10.77-3.44-15.51 2.08-1.3 0-9.48-3-30.6-9.87-38.35-18.13-36.21-14.7-60.3-5.61-56.45-5.61-56.45-7.75-11.21 0-11.64 10.78.39 10.35-7.34 3.44-22.39 8.18-25.41 11.64-14.22 12.93-18.53a7.23 7.23 0 0 1 2-2.81c3.88-3.72 11.77-7.53 11.77-7.53l7.54-3.77v.1l13.68 27.28s-6.4 3.11-7.47 15.6a49.17 49.17 0 0 1-3.65 13.74 86.56 86.56 0 0 1-4.26 8.84c-1.41 2.55-2.42 4.12-2.42 4.12s-.37 2.92-.93 7c-1.15 8.38-3.09 21.66-4.24 24.84-1 2.82-3 7.67-4.11 12-.7 2.71-1.1 5.22-.73 6.86 0 .13.06.26.1.38 1.29 4 7.75-13.2 7.75-13.2s4.74-14.65 6.9-14.65c1.65 0 5.36-20.68 7-30.22.48-2.85.77-4.7.77-4.7l10.35-29.29s1.43-5.53 2.8-11.75c1.44-6.54 2.81-13.83 2.37-16.26l.28-.19 51.46-34.55h.05l.79-.53h-.08c-.36 0-1.4-.64-3.39-5.32a72.9 72.9 0 0 1-1.71-4.41s16.46-6.61 22.33-1.77a5.23 5.23 0 0 1 1 1.06 4.19 4.19 0 0 1 .43.71c3.88 8 5.6 14 9.48 19.18a16.68 16.68 0 0 0 1.36 1.57c4.69 4.91 14 10.66 12.43 12.22-1.72 1.72 12.93 9 12.93 9s8.57 4.9 11.26 9a4.1 4.1 0 0 1 .8 2.18c0 4.31 12.5 6.89 16.38 6.89s22.41 40.08 31.45 44.82 6.44 31.13 6.44 31.13z",
    fill: "#ff6584"
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M613.37 589.71s-6.4 3.11-7.47 15.6a48.85 48.85 0 0 1-3.66 13.74 87.82 87.82 0 0 1-4.25 8.84c-1.41 2.55-2.42 4.12-2.42 4.12s-.37 2.92-.93 7c-1.12 8.45-3.12 21.73-4.25 24.89-1 2.82-3 7.67-4.11 12-.7 2.71-1.1 5.22-.73 6.86 0 .13.06.26.1.38 1.29 4 7.75-13.2 7.75-13.2s4.74-14.65 6.9-14.65c.61 0 1.51-2.86 2.48-6.94.49-3.27 1-6.54 1.33-9.28.56-4.1.93-7 .93-7s.57-.88 1.45-2.4c.92-5.27 1.56-9.25 1.56-9.25l10.35-29.29s.75-2.92 1.69-6.89l-11-21.87-7.54 3.77zM800.24 622.98c-9-4.74-27.57-44.82-31.45-44.82s-16.38-2.58-16.38-6.89-12.06-11.21-12.06-11.21-14.65-7.32-12.93-9c1.55-1.56-7.74-7.31-12.43-12.22a18 18 0 0 1-1.36-1.57c-3.88-5.18-5.6-11.21-9.48-19.18a4.72 4.72 0 0 0-.43-.72 5.82 5.82 0 0 0-1-1.06c-2.64-2.17-7.4-2-11.86-1.22a7.15 7.15 0 0 1 2.38 1.22 5.82 5.82 0 0 1 1 1.06 4.72 4.72 0 0 1 .43.72c3.88 8 5.6 14 9.48 19.18a18 18 0 0 0 1.37 1.53c4.69 4.91 14 10.66 12.43 12.22-1.72 1.72 12.93 9 12.93 9s12.06 6.9 12.06 11.21 12.5 6.89 16.38 6.89 22.41 40.08 31.45 44.82 6.47 31 6.47 31l-7.34 37.96-22 159.87h9.48l22-159.87 7.33-37.92s2.58-26.26-6.47-31z"
  })), _react.default.createElement("path", {
    d: "M423.92 743.77s-54.81-15.86-58.69 8.49 22.41 38.35 39.21 37.92 24.13-16.38 24.13-16.38zM698.76 818.62s-12.28 8.83-38.35 8.83-56.45 5.6-56.45 5.6-38.78-91.35-116.56-13.15c0 0-14 18.1 58.6 20 0 0 25.64-.86 31.24 11.85h145l19.83-14.85z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M407.03 704.42s-3.66-8.61-8 0l-2.35 66.8 5.16 15.73 5.16-14z",
    fill: "#514e7f"
  }), _react.default.createElement("path", {
    d: "M703.72 517.34c-7.52 2.56-15.77 8.56-18.2 10.44-.45 0-2-1-5.1-9.73-.01 0 18.6-7.47 23.3-.71z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M622.85 589.71s-6.4 3.11-7.47 15.6a49.17 49.17 0 0 1-3.65 13.74l-4.21 8.85-3.35 11.14.35 22.68-8.76 14.18-.73 6.86-2.27 21.22-11.64-5.6s4.8-34.22 8.4-41.15 8.41-43.63 8.41-43.63-.22-13.47 1.51-15.84-3-1.94-3.45-6.89c-.26-2.94-3.54-11.1-6.17-17.25 3.88-3.72 11.77-7.53 11.77-7.53l7.54-3.77z",
    fill: "#ff6584"
  }), _react.default.createElement("path", {
    d: "M622.85 589.71s-6.4 3.11-7.47 15.6a49.17 49.17 0 0 1-3.65 13.74l-4.21 8.85-3.35 11.14.35 22.68-8.76 14.18-.73 6.86-2.27 21.22-11.64-5.6s4.8-34.22 8.4-41.15 8.41-43.63 8.41-43.63-.22-13.47 1.51-15.84-3-1.94-3.45-6.89c-.26-2.94-3.54-11.1-6.17-17.25 3.88-3.72 11.77-7.53 11.77-7.53l7.54-3.77zM714.99 540.53c-9.61 7.86-35.45 30.16-38.42 45.32-3.66 18.69-14.65 16.88-14.65 16.88-13.73-29.78-23.18-37.08-28.59-38.11l51.46-34.56h.05l.79-.53h-.11c-.36 0-1.4-.63-3.39-5.31l20.62-6.19a5.23 5.23 0 0 1 1 1.06 4.63 4.63 0 0 1 .43.71c3.88 8 5.6 14 9.48 19.18a18.09 18.09 0 0 0 1.33 1.55z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M714.99 538.8c-9.61 7.86-35.45 30.17-38.42 45.33-3.66 18.68-14.65 16.87-14.65 16.87-13.73-29.77-23.18-37.1-28.59-38.1l51.46-34.55h.05l.79-.53h-.11c-.36 0-1.4-.64-3.39-5.32l20.62-6.18a5.23 5.23 0 0 1 1 1.06 4.19 4.19 0 0 1 .43.71c3.88 8 5.6 14 9.48 19.18a16.68 16.68 0 0 0 1.33 1.53z",
    fill: "#ff6584"
  }), _react.default.createElement("path", {
    d: "M656.75 689.77c.64-.21 34.22-19.22 30.36-4.76s-30.36 4.76-30.36 4.76zM511.52 707.98s17.66 27.47 23.91 26.61-23.91-26.61-23.91-26.61zM533.52 697.75s1.08 21.33 10.35 22.83-10.35-22.83-10.35-22.83zM631.52 766.26s21.94 36.5 17.67 49.13zM656.96 770.57s29.68 39 24.54 42.23-24.54-42.23-24.54-42.23zM590.23 707.98s-3.05 27.73 8.4 35.79z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M723.33 584.63s-50.81 39.43-42.67 80.37 16 43.95 16 43.95 3 16.37 8.62 23.27 4.74 11.42 4.74 11.42 5.17-2.37 6.89 9.48 10.77 20.25 10.77 20.25 3 9.48-4.74 14.65-6 10.78-6 10.78l-31.46 18.31 35.04 34.69h90.5s-2.59-4.52 3-11 2.81-32.1 2.81-32.1-3.13-4.1.7-13.15-3.29-34.9-3.29-34.9l-8-25.21s-6.68-17.88-5.6-27.47-2.2-20.07-2.2-20.07l-17.37-54.8s.86-54.72-57.74-48.47z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M725.05 584.63S674.2 624.06 682.39 665s15.94 43.95 15.94 43.95 3 16.37 8.62 23.27 4.74 11.42 4.74 11.42 5.17-2.37 6.9 9.48 10.77 20.25 10.77 20.25 3 9.48-4.74 14.65-6 10.78-6 10.78l-31.46 18.31 35.12 34.69h90.49s-2.58-4.52 3-11 2.8-32.1 2.8-32.1-3.13-4.1.7-13.15-3.29-34.9-3.29-34.9l-8-25.21s-6.68-17.88-5.6-27.47-2.22-20.07-2.22-20.07l-17.37-54.8s.86-54.72-57.74-48.47z",
    fill: "#ff6584"
  }), _react.default.createElement("path", {
    d: "M742.07 612.42s36.2 12.28 45.89 18.32-14.22-23.92-45.89-18.32zM761.03 798.8s51.49 6.46 48.49 16.59-48.49-16.59-48.49-16.59zM750.94 809.78s37.67 12.07 31 22-31-22-31-22zM751.61 569.09c-20.55 4-41.2 7.42-61.86 10.83l-5.38.89c-11.36 1.87-22.79 3.75-34.31 3.69-5.61 0-11.39-.58-16.37-3.18a18 18 0 0 1-3-2c-3.49-2.8-6-6.87-5.94-11.29.06-8.06 7.71-13.65 14.29-18.31 9.63-6.83 19.14-15.5 22.86-26.39a30.07 30.07 0 0 0 1.45-6.3c1.1-9.25-2.27-18.38-5.86-27-3.92-9.35-9.3-19.4-17.16-25.08a23.58 23.58 0 0 0-10.81-4.37c-12.08-1.6-23.51 7-35.68 6.52-9.89-.43-18.29-6.78-24.24-14.25-4.33-5.44-7.07-12.72-13.59-15.95-7.06-3.51-15.09-4.34-22.94-5.51a84.9 84.9 0 1 1 144.34 78.87c.13.43.27.86.42 1.28a67.8 67.8 0 0 0 2.56 6.51s16.46-6.61 22.33-1.77a5.23 5.23 0 0 1 1 1.06 4.19 4.19 0 0 1 .43.71c3.88 8 5.6 14 9.48 19.18a16.68 16.68 0 0 0 1.36 1.57c4.69 4.91 14 10.66 12.43 12.22-1.72 1.72 12.93 9 12.93 9s8.57 4.95 11.26 9.07z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M508.67 416.09c-7.66-9.88-6.83-23.84-4-36 1.78-7.67 4.31-15.38 9.27-21.49s12.77-10.39 20.58-9.33c4.57.62 8.7 2.95 13 4.65 19.3 7.64 43.24 1.29 56.22-14.92 2.94-3.67 5.37-7.79 8.85-11a31.42 31.42 0 0 1 13.58-6.85c21.72-5.48 44.12 5.31 62.7 17.82 15.86 10.68 30.94 23.15 41.35 39.18a93.88 93.88 0 0 1 15 49.07c.53 27.6-11.11 55.44-4.45 82.22 6.57 26.45 32.4 46.81 59.65 47-37.42 9.18-75.48 15.47-113.49 21.74-11.37 1.88-22.79 3.76-34.31 3.69-5.61 0-11.4-.58-16.37-3.18s-9-7.65-9-13.26c.06-8.07 7.72-13.65 14.29-18.31 11.42-8.1 22.67-18.79 24.32-32.69 1.1-9.25-2.27-18.39-5.87-27-5.49-13.1-13.86-27.61-27.94-29.49-12.07-1.61-23.51 7-35.68 6.51-9.88-.43-18.29-6.78-24.24-14.25-4.33-5.44-7.07-12.72-13.58-15.95-16.09-7.96-37.32-1.97-49.88-18.16z",
    fill: "#945b79"
  }), _react.default.createElement("path", {
    d: "M728.75 365.75a37.55 37.55 0 0 0 10.66-50.38c.46.58.9 1.18 1.33 1.79a37.56 37.56 0 1 1-61.71 42.82c-.42-.62-.83-1.25-1.21-1.88a37.55 37.55 0 0 0 50.93 7.65z",
    fill: "#945b79"
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M609.76 335.37c2.94-3.68 5.37-7.8 8.85-11a22.51 22.51 0 0 1 1.79-1.47 27.66 27.66 0 0 0-7.82 4.91c-3.48 3.18-5.91 7.3-8.85 11a46.21 46.21 0 0 1-10.49 9.54 47.46 47.46 0 0 0 16.52-12.98zM692.99 574.61c-11.36 1.87-22.79 3.75-34.31 3.68-5.61 0-11.39-.57-16.37-3.17s-9-7.65-8.95-13.27c.06-8.06 7.71-13.64 14.29-18.31 11.42-8.1 22.66-18.79 24.31-32.69 1.1-9.24-2.27-18.39-5.87-27-5.49-13.1-13.85-27.62-27.94-29.49-12.07-1.61-23.5 7-35.67 6.5-9.88-.42-18.29-6.77-24.24-14.24-4.34-5.44-7.08-12.72-13.59-15.95-16.16-8-37.39-2-50-18.22-7.66-9.88-6.82-23.85-4-36 1.78-7.67 4.31-15.38 9.26-21.5a28 28 0 0 1 4.72-4.57 26.84 26.84 0 0 0-10.75 8c-5 6.11-7.49 13.83-9.27 21.49-2.83 12.18-3.66 26.15 4 36 12.56 16.19 33.79 10.2 50 18.22 6.51 3.24 9.25 10.52 13.58 16 6 7.46 14.36 13.82 24.24 14.24 12.17.52 23.61-8.12 35.68-6.51 14.08 1.88 22.45 16.39 27.94 29.5 3.6 8.58 7 17.72 5.87 27-1.65 13.9-12.9 24.59-24.32 32.69-6.57 4.66-14.23 10.25-14.29 18.31 0 5.61 4 10.67 9 13.27s10.76 3.14 16.37 3.17c11.52.07 23-1.81 34.31-3.69 38-6.27 76.07-12.55 113.49-21.74a56.19 56.19 0 0 1-6.62-.46c-33.34 7.59-67.13 13.17-100.87 18.74z"
  })), _react.default.createElement("ellipse", {
    cx: 410.72,
    cy: 755.48,
    rx: 16.4,
    ry: 8.96,
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M681.7 89.12c-18.25-4.87-36.68-9.76-55.56-10.54s-38.49 2.88-53.9 13.8c-7.71 5.46-14.11 12.53-20.6 19.41a668.22 668.22 0 0 1-114.66 96.94c-16.81 11.23-34.78 21.94-54.81 24.73s-42.66-4.15-53-21.51l6.16-3.16",
    fill: "none",
    stroke: "#000",
    strokeMiterlimit: 10,
    strokeWidth: 0.75,
    strokeDasharray: "12",
    opacity: 0.3
  }), _react.default.createElement("path", {
    d: "M842.81 62.84H713.58a9.23 9.23 0 0 1-9.23-9.23V35.15a9.23 9.23 0 0 1 9.23-9.25h129.23a9.23 9.23 0 0 1 9.23 9.23v18.48a9.23 9.23 0 0 1-9.23 9.23zm-13.85-25.38a6.92 6.92 0 1 0 6.93 6.92 6.92 6.92 0 0 0-6.93-6.92zm-18.46 0a6.92 6.92 0 1 0 6.92 6.92 6.92 6.92 0 0 0-6.9-6.92zM842.81 109H713.58a9.24 9.24 0 0 1-9.23-9.24V81.3a9.23 9.23 0 0 1 9.23-9.23h129.23a9.23 9.23 0 0 1 9.23 9.23v18.46a9.24 9.24 0 0 1-9.23 9.24zm-13.85-25.39a6.93 6.93 0 1 0 6.93 6.92 6.92 6.92 0 0 0-6.93-6.92zm-18.46 0a6.93 6.93 0 1 0 6.92 6.92 6.92 6.92 0 0 0-6.9-6.92zm32.31 71.54H713.58a9.23 9.23 0 0 1-9.23-9.23v-18.46a9.23 9.23 0 0 1 9.23-9.23h129.23a9.23 9.23 0 0 1 9.23 9.23v18.44a9.23 9.23 0 0 1-9.23 9.25zm-13.85-25.39a6.93 6.93 0 1 0 6.93 6.93 6.92 6.92 0 0 0-6.93-6.93zm-18.46 0a6.93 6.93 0 1 0 6.92 6.93 6.92 6.92 0 0 0-6.9-6.93z",
    fill: "#514e7f"
  }), _react.default.createElement("path", {
    d: "M863.73 87.55c8.29-.89 17.16-.64 24.27 3.73 7.53 4.63 11.88 13.27 13.34 22s.44 17.65-.6 26.43l-5.6 47.36c-.79 6.63-1.55 13.53.6 19.86s8.1 11.89 14.75 11.3M322.09 489.6c21.35.53 45.42 0 60.17-15.44 11.2-11.72 13.83-28.89 17.6-44.66 6.81-28.47 19.19-55.87 38-78.32s44.2-39.75 72.62-46.73c22.84-5.62 46.86-4.56 69.82-9.61s46.54-18.66 52.89-41.3",
    fill: "none",
    stroke: "#000",
    strokeMiterlimit: 10,
    strokeWidth: 0.75,
    strokeDasharray: "12",
    opacity: 0.3
  }), _react.default.createElement("path", {
    d: "M680 203.95l-57.61 21a1.13 1.13 0 0 0-.22 2l8.6 4.77a2.18 2.18 0 0 1 1 1.3l4.93 15.6c0 .66 1.2 1 1.31.36l.69-12.2a4.41 4.41 0 0 1 1.33-2.29l31.66-23a.71.71 0 0 1 .63-.08.64.64 0 0 1 .2 1.06l-28.15 25.67a5.4 5.4 0 0 0-1.29 2.26l-3 10.19c0 .92.64 1.37 1.34.64l6-5.27a1.09 1.09 0 0 1 1.55 0l11.82 11.6a1.08 1.08 0 0 0 1.78-.41l18.71-51.72a1.09 1.09 0 0 0-1.38-1.43z",
    fill: primaryColor,
    opacity: 0.5
  }));
};

UndrawInteractionDesign.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawInteractionDesign;
exports.default = _default;