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

var UndrawModernLife = function UndrawModernLife(_props) {
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
    viewBox: "0 0 664.5 714",
    style: style
  }, props), _react.default.createElement("path", {
    fill: "#3c354c",
    d: "M132.5 713h532v1h-532z"
  }), _react.default.createElement("path", {
    d: "M297.37 323.23c-.12-5-1.52-9.19-3.53-11.5l-1.59 6.27v-7.53a3.82 3.82 0 0 0-2.33-.55c-3.91.36-6.93 6.93-6.75 14.67s3.5 13.73 7.41 13.37 6.97-6.96 6.79-14.73z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M296.42 327c-1.64.36-3.23 1.37-4.87 1.57s-3.44-.58-4.47-3.11c-.56-1.36-.84-3.08-1.31-4.57a9.29 9.29 0 0 0-1.79-3.32 25.86 25.86 0 0 0-.76 7c.18 7.74 3.5 13.72 7.41 13.36 3.28-.3 5.93-5 6.59-11.06a7 7 0 0 0-.8.13z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M622.25 271.54c-3.5-3.51-7.43-5.61-10.48-5.9l3.13 5.6-5.15-5.49a3.87 3.87 0 0 0-2.07 1.2c-2.59 3-.25 9.8 5.22 15.29s12 7.54 14.58 4.58.21-9.82-5.23-15.28z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M624.11 274.91c-.94 1.38-1.4 3.21-2.45 4.48s-2.89 1.95-5.38.84c-1.35-.6-2.74-1.66-4.1-2.41a9.28 9.28 0 0 0-3.59-1.19 26.05 26.05 0 0 0 4.28 5.61c5.47 5.49 12 7.54 14.58 4.58 2.16-2.48.86-7.69-2.84-12.55a5.23 5.23 0 0 0-.5.64z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M365.18 292l-17.22-10s-41.62-5.74-35.88-25.83 34.45 0 34.45 0L365.18 269z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M365.18 292l-17.22-10s-41.62-5.74-35.88-25.83 34.45 0 34.45 0L365.18 269z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M428.32 190.11s-41.61 30.14-41.61 20.09c0-6-7.26-24.53-13.06-38.32-3.84-9.14-7-16.21-7-16.21l43-11.48a50.21 50.21 0 0 0 .48 21 40.48 40.48 0 0 0 18.19 24.92zM342.25 445.94s-33 73.19-21.53 100.45c0 0-35.87 109.07-47.35 113.37s28.7 11.48 28.7 11.48 47.33-63.14 50.18-113.37S406.8 456 406.8 456zM418.25 475.68s18.65 60.28 43.05 77.5c0 0 50.23 83.23 43 109.06 0 0 28.7 4.31 30.14 0 0 0-12.92-90.41-44.49-126.28S472.81 457 472.81 457z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M291.99 661.2s-17.22-14.35-30.13-2.87-35.88 8.61-53.1 2.87-15.78 8.61 24.4 27.26 63.14 23 63.14 23 5.74-23 5.74-28.7 3.57-16.47 3.57-16.47zM518.73 659.37s-17.22-10-20.09 8.61-44.49 30.14-44.49 30.14-20.09 18.65 41.62 12.88 57.4-17.22 57.4-17.22l-19.54-37.14z",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M365.18 379.54s-44.49 63.14-27.27 70.31 15.79-11.48 33 8.61 61.71 10 67.45 5.74 20.09-23 31.57-21.52-18.68-73.19-18.68-73.19z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M406.25 159c-6.14 5.73-10.48 15.45-19.54 15.45a34.21 34.21 0 0 1-13.06-2.57c-3.84-9.14-7-16.21-7-16.21l43-11.48c-1.4 8.22-4.87 8.97-3.4 14.81z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 386.71,
    cy: 137.01,
    r: 34.44,
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M406.8 185.81s-14.88 15.1-21.79 16.16-32.76 45.54-25.57 81.42-8.61 110.5-1.43 114.8 122-15.78 122-15.78z",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M421.15 178.63s-25.83-8.61-34.44 37.31-20.09 7.18-20.09 66-4.31 80.37 2.87 130.59 12.91 50.23 4.3 67.45 91.84 12.92 116.24-20.09-7.18-156.42-20.09-175.08-12.92-76.05-23-90.4a38.51 38.51 0 0 0-25.79-15.78z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M420.38 459.52l-12.71-15.9L367.1 250l27.27-50.9a30.2 30.2 0 0 1 23.18-15.75 29.62 29.62 0 0 1 26 10c39.47 44.94 59.28 184.29 60.1 190.2l.08.56-4 10.41-21 47.07zm-8.71-17.78l10.24 12.8L475.55 438l20.16-45.18 3.59-9.27c-1.42-9.78-21.59-144.83-59-187.41a25.84 25.84 0 0 0-42.15 4.94l-26.52 49.53z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M333.61 266.17L296.32 233a2.25 2.25 0 0 1-.37-2.92l.46-.7a2 2 0 0 1 3.07-.36l34 31.5a3.9 3.9 0 0 1 .13 5.65z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M333.61 266.17L296.32 233a2.25 2.25 0 0 1-.37-2.92l.46-.7 37.11 33.28a2.41 2.41 0 0 1 .09 3.51z",
    fill: "#192534"
  }), _react.default.createElement("path", {
    d: "M444.11 273.34s-53.1-4.3-63.14-23-35.88-8.61-28.7 0 5.74 28.7 25.83 30.14S448.41 292 448.41 292z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M501.51 383.84s-35.88 2.87-44.49 40.18-47.35 18.66-47.35 18.66-4.31 97.58 58.83 73.19 77.5-70.32 77.5-76.06-43.05-40.18-44.49-55.97z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M412.54 449.85s38.71 18.66 47.35-18.65c8.2-35.54 41.11-39.83 44.23-40.16a19.21 19.21 0 0 1-2.61-7.2s-35.88 2.87-44.49 40.18-47.35 18.66-47.35 18.66-1.4 31.85 9.17 54.61c-7.43-21.73-6.3-47.44-6.3-47.44zM545.69 442a12 12 0 0 0 .31-2.16c0-4.91-31.51-30.84-41.51-48.11 2.12 13.34 31.4 38.79 41.2 50.27z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M342.25 112.85c-2 6.28 4.47 12.63 11 13.29s12.86-2.47 18.84-5.27 12.66-5.42 19.05-3.72c7 1.85 11.66 8.36 14.77 14.86a74.12 74.12 0 0 1 5.89 17.88c1.28 6.62 1.87 13.9 6.42 18.9s12.1 6.35 19 6.32 13.88-1 20.53.7c13.2 3.44 21.37 16.59 26.08 29.36s7.54 26.68 16.07 37.31c7.11 8.88 17.48 14.51 27.87 19.18 5.24 2.35 10.67 4.54 16.39 5.08s11.86-.79 16-4.71c4.67-4.38 6.17-11.06 7.44-17.32 1.85-9.08 3.7-18.41 2.17-27.56-2-12-9.71-22.55-11.48-34.6-1.72-11.72 2.33-23.55 1.92-35.39-.69-19.82-15.28-38.4-34.41-43.83-7-2-14.35-2.36-21.07-5-8.76-3.49-15.51-10.51-22.67-16.64a137.89 137.89 0 0 0-59.51-29.73c-14.74-3.27-32.18-3.32-42.6 7.57-4.23 4.43-7 10.42-12.4 13.38-2.77 1.53-5.95 2.08-8.93 3.11-14.72 5.06-23.18 23.4-17.47 37.84",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M552.82 252.39c-5.72-.54-11.15-2.73-16.39-5.08-10.39-4.67-20.75-10.3-27.87-19.18-8.53-10.63-11.37-24.53-16.07-37.31s-12.88-25.92-26.08-29.36c-6.65-1.74-13.66-.73-20.53-.7s-14.35-1.24-19-6.32-5.14-12.28-6.42-18.9a74 74 0 0 0-5.89-17.88c-3.11-6.5-7.79-13-14.77-14.86-6.39-1.7-13.07.92-19.05 3.72s-12.26 5.93-18.84 5.27-13-7-11-13.29l-1 1a27.7 27.7 0 0 1-.68-17.67c-8.47 7.95-12.26 21.1-7.94 32l1-1c-2 6.28 4.47 12.63 11 13.29s12.86-2.47 18.84-5.27 12.66-5.42 19.05-3.72c7 1.85 11.66 8.36 14.77 14.86a74.12 74.12 0 0 1 5.89 17.88c1.28 6.62 1.87 13.9 6.42 18.9s12.1 6.35 19 6.32 13.88-1 20.53.7c13.2 3.44 21.37 16.59 26.08 29.36s7.54 26.68 16.07 37.31c7.11 8.88 17.48 14.51 27.87 19.18 5.24 2.35 10.67 4.54 16.39 5.08s11.86-.79 16-4.71c3.52-3.3 5.24-7.92 6.42-12.68a21.88 21.88 0 0 1-13.8 3.06z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M406.8 198.72s-4.31 31.57 11.48 38.75S445.54 269 445.54 269l-12.91 2.87s-4.31 20.09 7.17 25.83 43.05 0 43.05 0 14.36-7.18 2.87-30.14-44.47-73.14-44.47-73.14-17.23-18.66-34.45 4.3z",
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 411,
    cy: 137.5,
    rx: 6.91,
    ry: 10.36,
    fill: "#ffc1c7"
  }), _react.default.createElement("circle", {
    cx: 411,
    cy: 138.65,
    r: 3.45,
    fill: "#f2f2f2"
  }), _react.default.createElement("ellipse", {
    cx: 675.87,
    cy: 236.83,
    rx: 4.03,
    ry: 1.73,
    transform: "rotate(-63.3 466.557 407.517)",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M553.37 36.23c-.12-4.95-1.52-9.19-3.53-11.5L548.25 31v-7.53a3.82 3.82 0 0 0-2.33-.55c-3.91.36-6.93 6.93-6.75 14.67s3.5 13.73 7.41 13.37 6.97-6.96 6.79-14.73z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M552.42 40c-1.64.36-3.23 1.37-4.87 1.57s-3.44-.58-4.47-3.11c-.56-1.36-.84-3.08-1.31-4.57a9.29 9.29 0 0 0-1.79-3.32 25.86 25.86 0 0 0-.76 7c.18 7.74 3.5 13.72 7.41 13.36 3.28-.3 5.93-5 6.59-11.06a7 7 0 0 0-.8.13z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M625.87 444.17c4.53-2 7.9-4.93 9.26-7.68l-6.35.92 7-2.84a3.87 3.87 0 0 0-.38-2.36c-1.83-3.47-9.06-3.74-16.14-.6s-11.34 8.49-9.51 12 9.03 3.7 16.12.56z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M622.05 444.72c-1-1.37-2.5-2.45-3.31-3.89s-.79-3.4 1.15-5.32c1-1 2.52-2 3.71-3a9.14 9.14 0 0 0 2.39-2.92 26.11 26.11 0 0 0-6.76 2c-7.08 3.14-11.34 8.49-9.51 12 1.54 2.91 6.88 3.57 12.74 1.85a7.1 7.1 0 0 0-.41-.72z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M240.87 490.17c4.53-2 7.9-4.93 9.26-7.68l-6.35.92 7-2.84a3.87 3.87 0 0 0-.38-2.36c-1.83-3.47-9.06-3.74-16.14-.6s-11.34 8.49-9.51 12 9.03 3.7 16.12.56z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M237.05 490.72c-1-1.37-2.5-2.45-3.31-3.89s-.79-3.4 1.15-5.32c1-1 2.52-2 3.71-3a9.14 9.14 0 0 0 2.39-2.92 26.11 26.11 0 0 0-6.76 2c-7.08 3.14-11.34 8.49-9.51 12 1.54 2.91 6.88 3.57 12.74 1.85a7.1 7.1 0 0 0-.41-.72z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "#3c354c",
    opacity: 0.3,
    d: "M63 38h127v12H63z"
  }), _react.default.createElement("path", {
    d: "M247.5 192.87L221.72 148H0V1h292v147h-44.5zM1 147h221.3l24.2 42.13V147H291V2H1z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M247.5 191.87L221.72 147H0V0h292v147h-44.5zM1 146h221.3l24.2 42.13V146H291V1H1z",
    fill: "#f2f2f2"
  }), _react.default.createElement("circle", {
    cx: 33,
    cy: 44,
    r: 16.5,
    fill: "#3c354c",
    opacity: 0.3
  }), _react.default.createElement("circle", {
    cx: 239.5,
    cy: 112.5,
    r: 6,
    fill: primaryColor,
    opacity: 0.3
  }), _react.default.createElement("circle", {
    cx: 254.5,
    cy: 112.5,
    r: 6,
    fill: primaryColor,
    opacity: 0.3
  }), _react.default.createElement("circle", {
    cx: 269.5,
    cy: 112.5,
    r: 6,
    fill: primaryColor,
    opacity: 0.3
  }));
};

UndrawModernLife.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawModernLife;
exports.default = _default;