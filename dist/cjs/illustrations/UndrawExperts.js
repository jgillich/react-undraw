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

var UndrawExperts = function UndrawExperts(_props) {
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
    viewBox: "0 0 1081.95 662.59",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 863.76,
    y1: 427.61,
    x2: 863.76,
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
    x1: 853.83,
    y1: 307.88,
    x2: 989.67,
    y2: 307.88,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 218.19,
    y1: 542.13,
    x2: 218.19,
    y2: 114.52,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 211.43,
    y1: 414.37,
    x2: 362.74,
    y2: 414.37,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 543.14,
    y1: 662.59,
    x2: 543.14,
    y2: 234.98,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 526.51,
    y1: 527.82,
    x2: 701.7,
    y2: 527.82,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M645.57 0h436.38v427.61H645.57z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M647.76 3.29h432v421.03h-432z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M691.62 38.25h344.28v267.27H691.62z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M988 341a40.35 40.35 0 0 0-12-28c-6.76-6.64-15.85-14.26-25.7-18.87h-.06a43.5 43.5 0 0 0-13.24-4v-16.36a36.7 36.7 0 0 0 8.19-10.63v1.31s15.69-15.85 15.33-34.45c.23-11.17-5.14-23.46-23.15-34-41.82-24.4-57.84 11.08-60.89 19.29a5.5 5.5 0 0 0-.44 1.25l-.12.38a4.38 4.38 0 0 0 0 1.16v.12a4.84 4.84 0 0 0 0 .62c0 2.74 2.33 5.26 6.28 7.32A36.58 36.58 0 0 0 900.44 281v10.5l-.81-1.53s-5.59 3.35-12.8 8.49c-12.08 8.61-28.72 22.25-31.22 33.52-4 18 0 94.18 0 94.18l134.06 2zm-41.37-79.35zm-1.34 1.47zm.1-.11l.05-.05zm.2-.21zm-69.5-44zm.18.59v.06zm.25.59v.08zm.32.58l.06.1zm.39.57l.08.11zm.46.56l.11.12zm.53.55l.13.13zm4.54 3l.14.07zm-3.94-2.49l.16.14zm.66.53l.19.14zm.73.51l.22.15zm.79.5l.26.15zm.85.48l.29.16z",
    transform: "translate(-59.03 -118.7)",
    fill: "url(#prefix__b)",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#fda57d",
    d: "M841.99 155.57h35.59v52.2h-35.59z"
  }), _react.default.createElement("path", {
    d: "M843.17 163.87c3.72 1.32 5.32 2.37 9.49 2.37a35.42 35.42 0 0 0 23.73-9.12v-.37h-33.22z",
    opacity: 0.05
  }), _react.default.createElement("circle", {
    cx: 853.85,
    cy: 129.47,
    r: 35.59,
    fill: "#fda57d"
  }), _react.default.createElement("circle", {
    cx: 821.82,
    cy: 118.79,
    fill: "#ff0"
  }), _react.default.createElement("ellipse", {
    cx: 849.93,
    cy: 101.34,
    rx: 31.81,
    ry: 12.09
  }), _react.default.createElement("path", {
    d: "M856.29 105.8l29.26 17.81v22s38.17-38.58-7.63-65.29-59.8 20.36-59.8 20.36 12.72 10.21 38.17 5.12z"
  }), _react.default.createElement("ellipse", {
    cx: 886.9,
    cy: 129.47,
    rx: 3.56,
    ry: 5.93,
    fill: "#fda57d"
  }), _react.default.createElement("g", {
    opacity: 0.05
  }, _react.default.createElement("path", {
    d: "M885.55 123.61l-19.48-11.85a74.71 74.71 0 0 1-16.1 1.67c-17.1 0-31-5.13-31.77-11.56v.11a4.71 4.71 0 0 0 0 .6c0 6.68 14.24 12.09 31.81 12.09a74.71 74.71 0 0 0 16.15-1.67l19.47 11.85zM885.55 145.65v1.27s15.25-15.42 14.9-33.52c-.36 17.54-14.9 32.25-14.9 32.25z"
  })), _react.default.createElement("path", {
    d: "M841.19 171.75s-38.94 23.36-42.83 40.88 0 91.64 0 91.64l130.44 1.95-1.66-84.82a39.27 39.27 0 0 0-11.7-27.25c-9.74-9.57-24.47-21.26-39.21-22.4l-17.52 33.1z",
    fill: "#4d8af0"
  }), _react.default.createElement("path", {
    d: "M823.21 211.4s-10.18 53.43-1.27 70M896.97 211.4s10.18 53.43 1.27 70",
    opacity: 0.05
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M841.02 171.95l36.97-.52-24.24 61.59-12.73-61.07z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M841.02 168.14v3.81h36.9l.07-3.81h-36.97z"
  }), _react.default.createElement("path", {
    d: "M856.29 168.14h5.09v5.09h-5.09z"
  }), _react.default.createElement("path", {
    fill: "#4d8af0",
    d: "M841.02 171.95l-7.63 7.64 16.54 28.18-8.91-35.82zM876.64 174.5l6.37 6.36-19.09 25.44 12.72-31.8z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    opacity: 0.1,
    d: "M841.02 171.95l-7.63 7.64 16.54 28.18-8.91-35.82zM876.64 174.5l6.37 6.36-19.09 25.44 12.72-31.8z"
  }), _react.default.createElement("path", {
    d: "M858.83 170.68l-20.35 85.8 12.72 19.08 16.54-19.08-8.91-85.8z"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M715.95 343.06h304v14h-304zM764.45 371.06h207v14h-207z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M0 114.52h436.38v427.61H0z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M2.19 117.81h432v421.03h-432z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M46.05 152.77h344.28v267.27H46.05z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M357.18 488.85h5.56l-1.74-17.8h-.19c1.06-10.88 2.65-59.09-49.18-78.3L307 389.7l-.35.31V377a37.26 37.26 0 0 0 8.35-10.76v1.33A65.48 65.48 0 0 0 326.2 351a65.4 65.4 0 0 1-9.92 13.9v-.12c6.51-7.43 33.13-41.92-9.29-66.67-47.78-27.87-56.8 18.89-56.8 18.89l3.81 5.1s-9.25 18.52-9.25 27.26a37.14 37.14 0 0 0 24.75 35v11.1c-3.45 1.26-51.4 19.81-51.4 75.58l-6.68 17.8 2.23 1v49.61h109s6.68-52.85 4.45-70.65l6.68 4.45v15.58h1.48v.39h-.43l.43 1.44v47.68h21.88v-47.66l.25-1.44h-.25zm-123.66 4.08l.16-4.08z",
    transform: "translate(-59.03 -118.7)",
    fill: "url(#prefix__d)",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#fda57d",
    d: "M211.21 259.53h35.59v52.2h-35.59z"
  }), _react.default.createElement("path", {
    d: "M212.4 267.83c3.72 1.32 5.32 2.37 9.49 2.37a35.41 35.41 0 0 0 23.73-9.12v-.37H212.4z",
    opacity: 0.05
  }), _react.default.createElement("circle", {
    cx: 223.08,
    cy: 233.43,
    r: 35.59,
    fill: "#fda57d"
  }), _react.default.createElement("circle", {
    cx: 191.05,
    cy: 222.75,
    fill: "#ff0"
  }), _react.default.createElement("path", {
    d: "M225.51 216.12l29.26 11.45v22s38.2-38.53-7.63-65.27c-41.18-24-48.64 4.91-53.82 10.47a1.34 1.34 0 0 0 .07 1.9c5.09 4.79 9.44 23.99 32.12 19.45z",
    fill: "#4d4545"
  }), _react.default.createElement("path", {
    fill: "#fda57d",
    d: "M274.27 367.13h20.97v52.25h-20.97z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M272.85 352.2v14.93h27.72l-1.69-17.06-26.03 2.13z"
  }), _react.default.createElement("path", {
    fill: "#fda57d",
    d: "M157.68 367.13v53.32h17.06l1.98-49.41-19.04-3.91z"
  }), _react.default.createElement("path", {
    d: "M223.79 292.49l-12.38-14.93s-49.44 17.06-49.44 72.51l14.93 17.06-2.13 53.32h87.44s6.4-55.45 4.27-72.51l6.4 4.27h25.59s9.84-59.72-52-78.91z",
    fill: "#235067"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M161.94 350.07l-6.39 17.06 20.94 9.6.38-9.6-14.93-17.06z"
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M202.62 283.54l8.38 18.75 11.97-9.84-11.56-13.62-8.79 4.71z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M202.62 282.27l8.38 18.74 11.97-9.83-11.56-13.62-8.79 4.71z"
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M247.14 273.37l7.63 5.09-21.62 20.35-7.57-6.57 21.56-18.87z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M247.14 272.1l7.63 5.08-21.62 20.36-7.57-6.57 21.56-18.87z"
  }), _react.default.createElement("path", {
    d: "M178.44 362.42a76 76 0 0 1 15.27-45.8M263.68 349.7v-7.64l7.63 5.09-5.09-1.27-2.54 3.82zM273.86 367.51l.41 1.37h20.97l.24-1.37h-21.62zM157.68 368.11v1.46l18.7 8.03-.48-1.19-18.22-8.3zM265.55 235.01a62.69 62.69 0 0 1-9.5 13.32V226.3l-29.26-11.45c-21.93 4.39-25.39-13.25-31.54-18.9a1.35 1.35 0 0 0-1.9.08 1.34 1.34 0 0 0 .07 1.9c5.1 4.78 9.44 24 32.13 19.44l29.26 11.45v22a62.76 62.76 0 0 0 10.74-15.81z",
    opacity: 0.05
  }), _react.default.createElement("ellipse", {
    cx: 256.12,
    cy: 233.43,
    rx: 3.56,
    ry: 5.93,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M58.95 452.06h304v14h-304zM107.45 480.06h207v14h-207z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M324.95 234.98h436.38v427.61H324.95z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M327.14 238.27h432V659.3h-432z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M371 273.24h344.28v267.27H371z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M632.51 558.78l1-.75 1.43-1.06 66.76-49.59-22.95-91.79v-.3c.19-2.8 1.26-24.47-10.45-20.56-11.44 3.81-7.2 19.82-6.38 22.54l.13.4 14.6 77.19-46.4 27.06-6.44-.72a57.9 57.9 0 0 0 11.11-34.69c0-28.8-19.61-52.15-43.81-52.15s-43.81 23.35-43.81 52.15c0 21.57 11 40.09 26.69 48l-16.61 8.31v.09c-4.76-1-22.82-.7-15.5 65.58a69.92 69.92 0 0 1-10.81 45.8l-4.58 6.37 114.35.7h.35s-16.19-25.95-8.68-102.58z",
    transform: "translate(-59.03 -118.7)",
    fill: "url(#prefix__f)",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M500.37 424.67s-23.6-10.19-16.72 59.84a82.67 82.67 0 0 1-12.87 53.17l-1.45 2.23h21.94l16.52-17.5zM618.22 299.52v-.29l-16.5 1.94.12.4 14.31 75.66-49.08 28.63 2 36.81 71.57-53.17z",
    fill: "#3ad29f"
  }), _react.default.createElement("ellipse", {
    cx: 532.34,
    cy: 369.04,
    rx: 42.94,
    ry: 51.12,
    fill: "#ff0"
  }), _react.default.createElement("path", {
    fill: "#fda57d",
    d: "M523.14 386.42h30.67v44.99h-30.67z"
  }), _react.default.createElement("path", {
    d: "M532.34 424.3l-8.18-12.27-24.54 12.27v20.3s-8.91 15.7-1.65 33.78c-2 26.58-7.42 61.42-7.42 61.42l90.91.67s-16.36-26.23-8.18-103.93l-2-32.72-18.4-2z",
    fill: "#3ad29f"
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M571.19 403.81l2.05 2.04 2.04 32.25-2.38 1.77-1.71-36.06zM524.16 393.58c3.2 1.13 4.59 2 8.18 2a30.52 30.52 0 0 0 20.45-7.86v-.32h-28.63z"
  }), _react.default.createElement("circle", {
    cx: 533.36,
    cy: 363.93,
    r: 30.67,
    fill: "#fda57d"
  }), _react.default.createElement("ellipse", {
    cx: 564.04,
    cy: 363.93,
    rx: 3.07,
    ry: 5.11,
    fill: "#fda57d"
  }), _react.default.createElement("circle", {
    cx: 505.76,
    cy: 354.73,
    fill: "#ff0"
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M506.58 354.33v1.44h52.65v1.44h-53.37l.72-2.88z"
  }), _react.default.createElement("path", {
    fill: "#ff0",
    d: "M505.76 330.19h53.17v26.58h-53.17z"
  }), _react.default.createElement("path", {
    d: "M607.97 279.07c-11.21 3.74-7.06 19.43-6.26 22.1l16.5-1.94c.22-2.75 1.27-23.99-10.24-20.16z",
    fill: "#fda57d"
  }), _react.default.createElement("g", {
    opacity: 0.05
  }, _react.default.createElement("path", {
    d: "M492.36 539.8s5.38-34.84 7.42-61.42c-7.21-18 1.69-33.78 1.69-33.78v-20.3l22.89-11.45-.55-.82-24.53 12.27v20.3s-8.9 15.75-1.69 33.78c-2 26.58-7.42 61.42-7.42 61.42l90.91.67zM534.19 424.25l20.25-22.27-1.99-.22-19.19 21.1.93 1.39z"
  })), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M516.46 416.99l15.71 36.18 28.8-49.41-7.96-1.02-19.74 19.73-8.77-9.86-8.04 4.38z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M516.46 415.89l15.71 36.19 28.8-49.41-7.96-1.03-19.74 19.74-8.77-9.87-8.04 4.38z"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M391.95 569.06h304v14h-304zM440.45 597.06h207v14h-207z"
  }));
};

UndrawExperts.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawExperts;
exports.default = _default;