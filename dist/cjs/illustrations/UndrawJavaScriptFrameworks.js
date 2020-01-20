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

var UndrawJavaScriptFrameworks = function UndrawJavaScriptFrameworks(_props) {
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
    viewBox: "0 0 787.17 730",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 278.97,
    y1: 470.3,
    x2: 278.97,
    y2: 199.62,
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
    x1: 191.8,
    y1: 163.04,
    x2: 191.8,
    y2: 0,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 563.67,
    y1: 215.47,
    x2: 563.67,
    y2: 0.88,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 639.88,
    y1: 470.3,
    x2: 639.88,
    y2: 255.7,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 453.7,
    y1: 780.9,
    x2: 453.7,
    y2: 650.04,
    gradientTransform: "matrix(-1 0 0 1 1039.58 -85)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 488.73,
    y1: 780.9,
    x2: 488.73,
    y2: 650.04,
    gradientTransform: "matrix(-1 0 0 1 1039.58 -85)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__g",
    x1: 259.49,
    y1: 698.31,
    x2: 357.92,
    y2: 698.31,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__h",
    x1: 235.32,
    y1: 696.9,
    x2: 235.32,
    y2: 566.04,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__i",
    x1: 270.35,
    y1: 696.9,
    x2: 270.35,
    y2: 566.04,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__j",
    x1: 319.81,
    y1: 696.88,
    x2: 319.81,
    y2: 561.94,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__k",
    x1: 840.16,
    y1: 682.09,
    x2: 972.2,
    y2: 682.09,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M136.93 199.62h284.09V470.3H136.93z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M143.02 205.71h271.9V464.2h-271.9z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M152.78 215.47h252.39v238.98H152.78z"
  }), _react.default.createElement("path", {
    d: "M325.16 268.55h30.8l-77 132.81-77-132.81h58.9l18.09 30.8 17.71-30.8z",
    fill: "#41b883"
  }), _react.default.createElement("path", {
    d: "M201.98 268.55l77 132.81 77-132.81h-30.8l-46.2 79.69-46.58-79.69z",
    fill: "#41b883"
  }), _react.default.createElement("path", {
    d: "M232.39 268.55l46.58 80.07 46.2-80.07h-28.49l-17.71 30.8-18.09-30.8z",
    fill: "#35495e"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M5.25 0h373.1v163.04H5.25z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M10.12 2.09h363.34v156.07H10.12z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M20.56 11.85h342.46v136.56H20.56z"
  }), _react.default.createElement("path", {
    d: "M304.58 56.7l10.26.06-20.63 28a12 12 0 0 0-1.63 2.24 52 52 0 0 0-2 7.32h-9.39s1.46-5.24 1.4-8c-.05-2.44-1.3-4.87-2-7.32s-1.66-7.32-1.66-7.32h9.65l1.33 5.32 14.67-20.3",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M285.14 62.15c1.89 1.14 3.06 7.44 3.06 7.44s-9.91.15-15.3.15h-4.66l-5.66 24.62h-8.65s5.38-26.76 6.66-31.61c.41-1.57 2.82-1.3 6.89-1.3h6.5c4.2 0 9.1-.54 11.16.71m-40.28 12a5.19 5.19 0 0 0-.91-3.41c-1-1.56-1.95-1.92-4.61-2-7.52-.24-7.37 5.33-7.37 5.33zm8.15-6.38c1.1 4-1 13.31-1 13.31s-11-.18-17 0c-1.87.06-4.1-.2-4.66.67-.78 1.22.29 3.09 1.19 3.88s3.07 1 3.8 1.11c4.87.62 15.08.16 15.08.16l-1.77 7.83s-14.42.72-21.63-1a7.34 7.34 0 0 1-3.66-2c-.25-.27-.46-.63-.69-.94a8.75 8.75 0 0 1-1-1.72c-1.65-4.39.19-12.8 2-17.3.21-.52.47-1.18.75-1.75s.64-1.49.91-1.91.42-.48.61-.75a11.17 11.17 0 0 1 .72-.91 13.71 13.71 0 0 1 2.33-2c3-2.25 8.44-4 15-3.33 2.46.25 6.17 1.13 8 3.66a11.17 11.17 0 0 1 1 3zm-39.68-6.35h8.39s-4.68 22.18-7.06 33h-9.65c-6.74 0-12.75.84-15.31-4s-.11-12.4 1-17.64c.79-3.71 2.44-11.28 2.44-11.28l8.69-.08s-2.46 11.8-3.48 17.69c-.37 2.11-1.12 4.1-.33 5.66s1.8 1.59 5 1.66h4.33l6-25m-39.27 16c.88-3.12 2.16-6.5 2-9.32a8 8 0 0 0-4.33-6.32 11.08 11.08 0 0 0-11.31 2.66c-2.36 2.56-3.16 5.54-4 9.65-.62 3.05-1.13 6.27 0 8.65 2 4.21 8.25 3.29 15 3.33 1-2.68 1.82-5.68 2.66-8.65zm11.65-12.31c1 7-2.72 14.66-5.25 21.35 2.58.23 4.85 0 5 .16s-1.73 8-2.39 8c-2 .05-8.84.11-11.67.11-9.24 0-17.89.6-22.29-4a14.49 14.49 0 0 1-3.33-7.32 31 31 0 0 1 1-11.31 34.24 34.24 0 0 1 3.33-8.65c3.88-6.78 10.64-11.81 22-10.65a21.09 21.09 0 0 1 7.32 2.33c.14.08.61.46.72.53 2.66 1.69 5.09 5.74 5.6 9.46zm-40.89-3.62c-.56 2.55-1.12 5.43-1.71 7.95h-9.32c.72-2.79 1.27-5.56 2-8h9m-11.33 10.27h9c-1.17 6.5-3.5 17-5.32 24.29-1.14 4.57-1.9 7.9-5 10.32-.28.22-.44.11-.67.33-.57.54-3.2 1.17-4.66 1.33a67 67 0 0 1-8 0c.76-2.79 1.62-6.13 2.3-8.63 7.1.86 7.28-5.85 8.65-12.31.8-3.73 3.2-13.81 3.66-15.31",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M112.51 88.7l-.19.5c-3.28 6.39-9.09 10.31-17.39 10.48a24.31 24.31 0 0 1-10-2 25.79 25.79 0 0 1-12-11.31c-3.43-6.65-4-15.89 3.08-22.79.11 0-.87 1.5-.76 1.5l-.2.64c-5.14 16.1 10.7 29.89 26.09 28.31a20.22 20.22 0 0 0 11.31-5.32",
    fill: "#21609b"
  }), _react.default.createElement("path", {
    d: "M103.19 82a14.73 14.73 0 0 0 10.32-4.33c-2.1 5.32-8.17 8.74-16.3 7.65-6.82-.91-13.31-7.77-14-14.64-.49-5 1.25-8 4.13-11.61a12.15 12.15 0 0 0-1.46 4.29C84.8 74.23 94.58 82 103.19 82",
    fill: "#21609b"
  }), _react.default.createElement("path", {
    d: "M113.12 68.61c-.6 1.38-4.07 4-5.6 4.32-6.06 1.29-9.95-1.58-12-4.85a15 15 0 0 1-1-2.16c-.79-2.68-.43-6.74 1.93-8.84a11 11 0 0 0-.44 5.82 12.93 12.93 0 0 0 1.6 3.5 9.22 9.22 0 0 0 3.66 3.23 9.71 9.71 0 0 0 1.84.88c1.53.45 4.75 1.63 9.95-1.9",
    fill: "#21609b"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M456.38.88h214.59v214.59H456.38z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M462.47 6.97h202.4v202.4h-202.4z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M472.23 16.73h182.89v182.89H472.23z"
  }), _react.default.createElement("path", {
    d: "M497.72 69.52L563.77 46l67.81 23.1-11 87.4-56.81 31.5-56-31.07z",
    fill: "#e23237"
  }), _react.default.createElement("path", {
    d: "M631.58 69.1L563.77 46v142l56.81-31.45 11-87.44z",
    fill: "#b52e31"
  }), _react.default.createElement("path", {
    d: "M563.87 62.57l-41.16 91.58 15.38-.26 8.26-20.66h36.93l9 20.92 14.7.26-43.15-91.84zm.11 29.34L577.89 121h-26.15l12.24-29.08z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M497.83 255.7h284.09v214.59H497.83z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M503.93 261.8h271.9v202.4h-271.9z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M513.68 271.55h252.39v182.89H513.68z"
  }), _react.default.createElement("path", {
    d: "M563.78 362.59c0 11.57 11.23 22.41 29 28.55-3.61 17.89-.74 32.34 9 38 10 5.81 24.95 1.86 39.16-10.49 13.78 11.93 27.72 16.66 37.48 11 10-5.77 13.13-21.17 9.53-39.64 18.57-6.07 29-15.25 29-27 0-11.3-11.25-21.11-28.8-27.22 4-19.22.71-33.31-9.43-39.2-9.77-5.68-23.91-.8-38 11.35-14.54-13-28.52-17-38.68-11.15-9.8 5.63-12.64 20.32-9.13 38.57-17.17 6.01-29.1 15.97-29.13 27.23z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M684.44 341.85q-2.17-.75-4.38-1.39.37-1.49.69-3c3.37-16.08 1.24-29.06-6.15-33.35-7.08-4.12-18.71.12-30.46 10.28q-1.74 1.51-3.4 3.1-1.1-1.07-2.25-2.09c-12.25-10.95-24.55-15.58-32-11.33-7.1 4.08-9.24 16.26-6.31 31.53q.44 2.27 1 4.51c-1.74.49-3.43 1-5 1.57-14.42 5-23.64 12.82-23.67 21 0 8.43 9.82 16.92 24.81 22.1q1.82.63 3.68 1.16-.61 2.41-1.08 4.85c-2.89 15-.71 26.89 6.35 31 7.29 4.24 19.56-.06 31.54-10.45q1.42-1.23 2.85-2.61 1.79 1.73 3.67 3.37c11.53 10 22.94 14 30 10 7.31-4.2 9.72-17 6.69-32.54q-.35-1.78-.8-3.64 1.29-.38 2.53-.78c15.61-5.14 25.83-13.49 25.83-22.04 0-8.19-9.44-16.15-24.12-21.25z",
    fill: "#53c1de"
  }), _react.default.createElement("path", {
    d: "M680.93 379.57c-.74.24-1.51.48-2.29.71a136.42 136.42 0 0 0-6.83-17.28 136.36 136.36 0 0 0 6.68-17c1.39.41 2.74.84 4 1.29 12.58 4.37 20.24 10.81 20.22 15.74 0 5.26-8.33 12.06-21.81 16.48zm-5.62 11.06c1.34 6.88 1.51 13.1.6 18-.82 4.37-2.46 7.27-4.48 8.43-4.3 2.47-13.46-.79-23.32-9.33q-1.7-1.47-3.41-3.13a136.59 136.59 0 0 0 11.45-14.45 135.68 135.68 0 0 0 18.43-2.82q.41 1.68.73 3.29zm-56.59 25.8c-4.19 1.47-7.53 1.5-9.54.33-4.28-2.49-6-12-3.56-24.86q.44-2.27 1-4.51a136.68 136.68 0 0 0 18.33 2.71 141.44 141.44 0 0 0 11.63 14.45q-1.27 1.22-2.6 2.38c-5.29 4.6-10.59 7.85-15.26 9.49zm-19.51-37.14c-6.63-2.29-12.1-5.25-15.84-8.48-3.37-2.9-5.06-5.78-5.05-8.1 0-5 7.42-11.25 19.75-15.51q2.32-.8 4.69-1.46a139.4 139.4 0 0 0 6.58 17.2 141.51 141.51 0 0 0-6.76 17.4q-1.71-.49-3.37-1.07zm6.72-44.76c-2.52-13.08-.79-22.93 3.49-25.39 4.56-2.62 14.61 1.17 25.19 10.62.68.6 1.36 1.24 2 1.89a139.29 139.29 0 0 0-11.64 14.31 142 142 0 0 0-18.16 2.76q-.51-2.09-.92-4.2zm58.65 14.66q-2-3.45-4.12-6.82c4.34.56 8.5 1.3 12.4 2.21a124 124 0 0 1-4.39 11.7q-1.89-3.58-3.89-7.09zm-23.87-23.39a124.3 124.3 0 0 1 8 9.69q-8-.41-16.08-.05c2.65-3.48 5.37-6.71 8.1-9.64zm-24.13 23.28q-2 3.47-3.86 7c-1.68-4-3.12-8-4.29-11.79 3.88-.86 8-1.55 12.34-2.08q-2.19 3.4-4.19 6.87zm4.19 34.75a123.76 123.76 0 0 1-12.53-2.06c1.21-3.88 2.71-7.9 4.45-12q1.83 3.57 3.84 7.05t4.21 7.01zm19.9 16.56c-2.75-3-5.48-6.28-8.16-9.82q3.91.17 8 .18t8.21-.16a123.6 123.6 0 0 1-8.08 9.79zm27.84-30.64a123.44 123.44 0 0 1 4.53 12 123.35 123.35 0 0 1-12.7 2.12q2.17-3.41 4.2-6.91t4-7.2zm-9 4.28q-3.11 5.36-6.56 10.51c-4 .28-8.21.41-12.46.4s-8.35-.16-12.32-.43q-3.51-5.16-6.62-10.57t-5.77-11q2.7-5.58 5.82-11 3.11-5.36 6.63-10.48c4-.29 8.2-.44 12.39-.43s8.37.19 12.41.51q3.45 5.13 6.52 10.49t5.81 10.97q-2.74 5.6-5.88 11zm12.2-64.87c4.55 2.64 6.29 13.24 3.38 27.13q-.29 1.36-.62 2.7a139.24 139.24 0 0 0-18.18-2.93 136.54 136.54 0 0 0-11.46-14.39q1.53-1.47 3.14-2.86c10.07-8.71 19.47-12.13 23.74-9.65z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M640.58 350.74a12.15 12.15 0 1 1-12.19 12.11 12.15 12.15 0 0 1 12.19-12.11",
    fill: "#53c1de"
  }), _react.default.createElement("g", {
    opacity: 0.7
  }, _react.default.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M602.37 565.04V695.9H569.4V565.04h32.97z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M567.34 565.04V695.9H534.36V565.04H567.34z",
    opacity: 0.1
  })), _react.default.createElement("path", {
    d: "M357.33 674.11a19.11 19.11 0 0 0-7.58-20.26 56.45 56.45 0 0 1-5.08-3.28c-2.57-2.16-4-5.35-5.09-8.53-2.54-7.64-3.34-16.2-7.8-23.1-4.06-6.28-12-8.12-19-8.74-2.55-.23-5.23-.35-7.57.71-3.91 1.77-5.77 6.38-5.94 10.66s.94 8.51 1.22 12.79-.48 9-3.64 11.88-7.68 3.24-11.86 3.82a78.55 78.55 0 0 0-16.08 4c-4.37 1.59-9.23 4.46-9.44 9.1-.17 3.8 2.89 6.82 5.2 9.84 4.3 5.65 6.45 13.09 5 20s-6.45 13.14-7.35 20.3a8.81 8.81 0 0 0 .72 5.36 9.81 9.81 0 0 0 2.72 2.88c2.7 2.09 5.71 3.76 8.26 6 5.32 4.71 8.21 11.56 10.43 18.32.21.65.4 1.31.61 2h-5.23a19.41 19.41 0 0 0-19.36 19.36 19.41 19.41 0 0 0 19.36 19.36h52.27a19.41 19.41 0 0 0 19.36-19.36 19.41 19.41 0 0 0-19.36-19.36h-14.33c3.39-4.54 6.93-8.8 12.16-10.55s11.56-.72 15.66-4.37a12.27 12.27 0 0 0 3.55-7 21 21 0 0 0-2.29-13.94c-1.65-2.94-4.06-5.61-4.58-8.94-.45-2.85.58-5.73 2-8.25 3.93-7.2 10.92-12.81 13.06-20.7z",
    transform: "translate(-206.42 -85)",
    fill: "url(#prefix__g)",
    opacity: 0.7
  }), _react.default.createElement("path", {
    d: "M106.2 529.39c-2.43-.22-5-.33-7.21.68-3.72 1.68-5.49 6.08-5.66 10.16s.9 8.1 1.16 12.18-.46 8.56-3.47 11.32-7.31 3.09-11.3 3.64a74.8 74.8 0 0 0-15.31 3.8c-4.16 1.51-8.79 4.25-9 8.67-.16 3.61 2.76 6.5 4.95 9.38 4.1 5.38 6.14 12.47 4.75 19.09s-6.14 12.51-7 19.33a8.39 8.39 0 0 0 .69 5.11 9.34 9.34 0 0 0 2.59 2.74c2.57 2 5.44 3.58 7.87 5.73 5.07 4.49 7.81 11 9.93 17.44A141.28 141.28 0 0 1 84.08 678c4.37-2.81 10-2.77 14.68-5.05 9.93-4.87 13.26-19 23.74-22.47 5-1.66 11-.69 14.91-4.16a11.69 11.69 0 0 0 3.38-6.7 20 20 0 0 0-2.21-13.27c-1.57-2.8-3.86-5.34-4.36-8.51-.43-2.71.56-5.46 1.88-7.86 3.77-6.85 10.43-12.16 12.46-19.71a18.2 18.2 0 0 0-7.19-19.27 53.76 53.76 0 0 1-4.83-3.13c-2.44-2.06-3.84-5.09-4.85-8.13-2.42-7.27-3.19-15.43-7.43-22-3.87-6-11.39-7.74-18.06-8.35z",
    fill: "#4db6ac"
  }), _react.default.createElement("path", {
    d: "M106.13 529.64s9.22 123.5-14.75 144.7",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    opacity: 0.6
  }), _react.default.createElement("rect", {
    x: 56.36,
    y: 660.52,
    width: 86.64,
    height: 36.87,
    rx: 14.3,
    ry: 14.3,
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M55.44 577.57s23.56-2.75 52.33 14.75M107.31 607.06a60.88 60.88 0 0 1 41.21-25.8M57.74 627.8s32.66-5.54 47.67 3.68M103.58 644.15s17.1-7.76 36.33-1.46",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    opacity: 0.6
  }), _react.default.createElement("g", {
    opacity: 0.7
  }, _react.default.createElement("path", {
    fill: "url(#prefix__h)",
    d: "M218.83 566.04V696.9H251.81V566.04H218.83z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "url(#prefix__i)",
    d: "M253.87 566.04V696.9h32.97V566.04h-32.97z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "url(#prefix__j)",
    d: "M352.6 688.38l-27.35-102.54-1.59-5.97-4.78-17.93-31.86 8.5 4.78 17.92 1.27 4.76 21.56 80.86 1.6 5.98 4.51 16.92 31.86-8.5z",
    opacity: 0.1
  })), _react.default.createElement("path", {
    fill: "#535461",
    d: "M222.21 569.24h31.31V693.5h-31.31z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M222.21 586.85h31.31v5.87h-31.31zM222.21 670.99h31.31v5.87h-31.31z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M245.69 569.24h7.83V693.5h-7.83z"
  }), _react.default.createElement("path", {
    fill: "#535461",
    d: "M255.47 569.24h31.31V693.5h-31.31z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M255.47 586.85h31.31v5.87h-31.31zM255.47 670.99h31.31v5.87h-31.31z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M278.95 569.24h7.83V693.5h-7.83z"
  }), _react.default.createElement("path", {
    fill: "#535461",
    d: "M286.914 573.46l30.254-8.066 32.014 120.065-30.253 8.067z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M291.456 590.478l30.253-8.067 1.513 5.672-30.253 8.066zM313.14 671.777l30.253-8.066 1.513 5.672-30.253 8.066z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M309.617 567.413l7.566-2.017 32.014 120.065-7.566 2.018z"
  }), _react.default.createElement("path", {
    fill: "#535461",
    d: "M598.17 693.5h-31.31V569.24h31.31z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M598.17 592.73h-31.31v-5.87h31.31zM598.17 676.87h-31.31V671h31.31z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M574.69 693.5h-7.83V569.24h7.83z"
  }), _react.default.createElement("path", {
    fill: "#535461",
    d: "M564.91 693.5H533.6V569.24h31.31z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M564.91 592.73H533.6v-5.87h31.31zM564.91 676.87H533.6V671h31.31z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M541.43 693.5h-7.83V569.24h7.83z"
  }), _react.default.createElement("path", {
    d: "M964.86 721.52h-55.92l.74-6.29c15.8-14.18 26-52 26-52a5.23 5.23 0 0 0-.67.14c-9.3 1.87-15.86 5.68-20.47 10.25l2-16.73c29.19-6.29 40.76-44.9 40.76-44.9-18.63 4.13-30.24 10.53-37.45 16.59l2.84-24.58c19.73 6.77 40.16-29.21 40.16-29.21l-.78-.16.38-.25-.58.21c-21.81-4.7-33.47 7.77-37.26 12.95l.28-2.41q-.87 2.28-1.68 4.54v.06q-2.28 6.28-4.24 12.4-1.68 5.23-3.14 10.34s-.9-22-24.07-27.76c0 0 2.43 47.93 20.79 40.08-1.7 6.92-3.12 13.64-4.29 20.13q-1.15 6.34-2 12.39l-.11.12.11-.09v.32q-.77 5.46-1.32 10.64c.36-6.65-.86-25.88-23.51-44 0 0-30.09 52.93 21.23 63.34l.34.29-.08-.24.47.1.21-2.72a285.24 285.24 0 0 0 .18 34.05c.05.78.11 1.54.16 2.28h-56.55c-21.57 44.63 12 69.08 12 69.08h92.69c35.92-45.33 12.78-68.96 12.78-68.96zm-60.25-50.72z",
    transform: "translate(-206.42 -85)",
    fill: "url(#prefix__k)",
    opacity: 0.7
  }), _react.default.createElement("path", {
    d: "M699.38 653.47s-14.67-64.09 17.76-146.72",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 3,
    opacity: 0.6
  }), _react.default.createElement("path", {
    d: "M642.23 634.16h113.52s22.39 28.57-12.36 71h-89.57s-32.43-29.3-11.59-71z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M715.51 511s11.28-20.08 38.31-13.9c0 0-22.34 38-42.44 25.58zM708.35 532.3s-.87-20.53-23.26-25.94c0 0 2.35 44.79 20.09 37.45zM701.03 562.63s4.13-21.51 47.38-30.78c0 0-13.79 44.49-49.36 42.71z",
    fill: "#4db6ac"
  }), _react.default.createElement("path", {
    d: "M697.58 586.77s4.55-22.49-22.48-43.34c0 0-29.37 49.93 21.22 59.33z",
    fill: "#4db6ac"
  }), _react.default.createElement("path", {
    d: "M696.72 617.69s-3.14-31.79 30.86-37.97c0 0-12.41 44.39-30.91 52.31z",
    fill: "#4db6ac"
  }), _react.default.createElement("path", {
    d: "M711.73 523s29.34-22.39 41.7-26.25M698.99 574.32s35.52-37.84 49.42-42.47M685.09 506.37s21.62 29.34 20.08 37.07M675.05 543.43s11.58 52.51 20.85 59.46M696.67 632.23s18.53-51 30.89-52.51",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    opacity: 0.3
  }), _react.default.createElement("path", {
    d: "M755.75 634.16H642.23c-.26.52-.5 1-.75 1.54h110.4s21.84 27.88-11.12 69.5h2.62c34.76-42.47 12.37-71.04 12.37-71.04z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M0 692.4h787.17v26.68H0zM33.35 719.08h720.46V730H33.35z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M33.35 719.08h720.46v3.64H33.35z"
  }));
};

UndrawJavaScriptFrameworks.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawJavaScriptFrameworks;
exports.default = _default;