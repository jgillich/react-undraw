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

var UndrawDesignerGirl = function UndrawDesignerGirl(_props) {
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
    viewBox: "0 0 747.16 726.47",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 489.16,
    y1: 128.69,
    x2: 489.16,
    y2: 92.59,
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
    x1: 505.51,
    y1: 136.32,
    x2: 505.51,
    y2: 112.73,
    gradientTransform: "rotate(33.29 505.577 124.557)",
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("circle", {
    cx: 233,
    cy: 105.08,
    r: 63,
    fill: "#fbd3af"
  }), _react.default.createElement("rect", {
    x: 239,
    y: 504.64,
    width: 45.13,
    height: 201.88,
    rx: 13,
    fill: "#c5cae9"
  }), _react.default.createElement("path", {
    d: "M190 477.77h143.16a19.5 19.5 0 0 1 19.5 19.5v32.48a1.75 1.75 0 0 1-1.75 1.75H172.22a1.75 1.75 0 0 1-1.75-1.75v-32.48a19.5 19.5 0 0 1 19.53-19.5z",
    fill: "#1a237e"
  }), _react.default.createElement("rect", {
    x: 198.88,
    y: 688.09,
    width: 131.21,
    height: 18.42,
    rx: 6,
    fill: "#1a237e"
  }), _react.default.createElement("path", {
    d: "M376.27 224.99c1.31-9.76 5.25-19.47 10.55-26s11.89-9.81 17.65-8.77a6.7 6.7 0 0 1 4.11 2.22 8.79 8.79 0 0 1 1.68 6.2 73.19 73.19 0 0 0-14.47 5.88 36.14 36.14 0 0 0-9.42 6.8 30.45 30.45 0 0 0-7.14 12.39 73.38 73.38 0 0 1-2.17 7.7c-.72 1.74-2.23 4-3.44 3.67a18.22 18.22 0 0 1 1.34-3.86 32.79 32.79 0 0 0 1.31-6.23zM550.89 675.08c0 3.07 0 6.25 1.33 9.08a23.15 23.15 0 0 0 3.65 5.12l14.31 16.62a61.64 61.64 0 0 0 8.63 8.53 5.25 5.25 0 0 1-2.6 9.38 74.33 74.33 0 0 1-35-4.51c-7.08-2.78-13.59-6.64-20.51-9.72-8-3.58-18-7.75-18.63-15.93-.62-8 8.23-13.42 13.3-19.94 6.67-8.56 7-19.84 7.09-30.37.75-54.89 4.83-109.7 8.91-164.47.29-3.8.62-7.77 2.77-11 5.73-8.68 28.06-11.19 28.59 1.54.65 15.74-3.45 32.74-4.82 48.48q-4.37 50-6 100.1-.96 28.53-1.02 57.09z",
    fill: "#fbd3af"
  }), _react.default.createElement("path", {
    d: "M513.92 470c6.19-.26 12.47-.52 18.53.72s12 4.17 15.22 9 3.24 11.75-1.09 15.82l-107.73-.3c-5.93 0-12 0-17.61-1.67-8.42-2.42-18.41-11.45-12.53-20.22 4.33-6.45 15-3.64 21.75-3.15 27.77 2.04 55.67.96 83.46-.2z",
    fill: "#fbd3af"
  }), _react.default.createElement("path", {
    d: "M546.72 421.3c12.07-.13 26.12.62 33.08 9.67 4.87 6.35 4.48 15.13 1.16 22.27s-9.15 13-14.87 18.73L426.58 611.46c-16 16-33 34.34-32.51 56.06.12 5.32 1.76 11.2 6.67 14s12.82 2.5 14.86 7.53c1.27 3.15-.93 6.76-4 8.52s-6.91 2.11-10.55 2.41c-7.48.64-15.15 1.26-22.41-.54s-14.13-6.53-15.94-13.23c-2.92-10.81 7.43-23.84-.26-32.45-3.32-3.72-9.06-5-12.44-8.68-5.23-5.7-2.53-14.84 3.19-20.12s13.61-7.93 20.73-11.5c17.35-8.69 30.41-23 43-37l99.49-110-105-1.82c-3.54-.06-7.22-.16-10.36-1.66-7-3.36-8.33-12-7.46-19.23s3-14.81-.14-21.44c-.68-1.44 29.39.32 32.13.29l40.38-.45z",
    fill: "#fbd3af"
  }), _react.default.createElement("path", {
    d: "M155.97 426.04c-3.22 20.29 4.9 43.14 22.8 53.22 11.68 6.57 25.67 7.13 39.07 7.52l38.47 1.14c23.19.68 46.43 1.36 69.58-.25 6.88-.48 13.77-1.16 20.67-1 25.54.51 49.47 12.16 71.59 25a116.83 116.83 0 0 0 14.09-27.48c7.19-19.71 9.15-44.1-5-59.59-9.27-10.13-23.51-14.14-37.19-15.33-28.63-2.47-59.54 5-84.89-8.5-4.4-2.35-8.47-5.27-12.67-8-25-16-51.84-40.67-81.49-38.66-15 1-25.55 20.55-35.25 32s-17.39 24.93-19.78 39.93z",
    fill: "#5c6bc0"
  }), _react.default.createElement("path", {
    d: "M237.43 151.96c3.8 4.84 7.7 9.86 9.87 16.44 3 9.17.53 24.63-.37 34.68-10.6-6.07-19.54-16.91-30.14-23-1.76-1-3.65-2.17-4.65-4.47-.93-2.15-.89-4.84-.83-7.36.18-6.58-1.67-41.47 2.61-44.07 3.66-2.18 20.34 23.65 23.51 27.78z",
    fill: "#fbd3af"
  }), _react.default.createElement("path", {
    d: "M166.58 222.91c-3.37 11.37-.35 23.67 4.15 34.64s10.52 21.4 13.46 32.89c5.56 21.78-.45 44.66-6.44 66.33l-9.84 35.64c12.48-2.19 25.83-4.29 37.43.79 3.34 1.46 6.46 3.5 10 4.38 9.21 2.29 18.23-3.65 27.5-5.68 19.2-4.19 41.25 8.23 57.94-2.16a324.11 324.11 0 0 0-12.75-45.5c-3.36-9.35-7.18-18.72-8-28.62-1.38-16.94 6.15-33.13 11.43-49.29s8-35.17-1.75-49.09c-4-5.78-9.89-10.08-16.09-13.46-30.47-16.6-93.86-25.41-107.04 19.13z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M280.58 375.71c-9 4.74-21 .11-27.21-7.47s-8.29-17.3-10.7-26.55c-6.3-24.18-16.17-47.4-25.36-70.74-9.38-23.85-14.9-47.5-21.46-71.95-2.85-10.61-6.2-20.87 4.05-29.55 8.41-7.12 23.05-7.13 31 .43 6.7 6.39 7.8 16 9.3 24.73 7.41 43.24 32.61 82.42 41.7 125.39",
    fill: "#fbd3af"
  }), _react.default.createElement("path", {
    d: "M275.8 328.24c32.09-31.3 74.58-69.06 103-103.2 4.71 2.54 9.49 5.14 13.22 8.8s6.32 8.63 5.7 13.61c-.64 5.18-4.52 9.46-8.23 13.4l-53.01 56.39-48.2 51.23c-3.56 3.78-7.35 7.72-12.48 9.39",
    fill: "#fbd3af"
  }), _react.default.createElement("path", {
    fill: "#002e4e",
    stroke: "#002e4e",
    strokeMiterlimit: 10,
    strokeWidth: 1.12,
    d: "M335.16 179.74l2.78-5.59 96.7 40.54 7.71 9.98-107.19-44.93z"
  }), _react.default.createElement("path", {
    d: "M398.32 250.47a67.24 67.24 0 0 0 11-16.27c3-6.44 4.8-14.36 4-21.07a14.62 14.62 0 0 1-.18-4c.36-2.28 1.85-4.16 2.17-6.44.34-2.45-.79-4.27-1-6.59-.25-3.53 1.76-7.51 1.59-11.08-.16-3.38-2.37-5.17-4.56-4.57s-4.3 3-6 5.81-3.12 5.95-4.78 8.8-3.65 5.46-5.84 6.4c-1.72.74-3.39.39-5.06.39a5.87 5.87 0 0 0-5 2.39c-2.43 3.24-2.48 8.68-3.82 13.13a55 55 0 0 1-3.77 8.32 20.88 20.88 0 0 0-2.49 8.93 17.49 17.49 0 0 0 1 5.08l3.75 12.19c1.07 3.45 2 9.38 3.68 11.94 1 1.5 1.76.21 3.3-1.16q2.06-1.83 4.07-3.79c2.72-2.64 5.36-5.45 7.94-8.41z",
    fill: "#fbd3af"
  }), _react.default.createElement("path", {
    fill: "#c5cae9",
    d: "M380.24 309.28L577.47 66.72l20.06 13.82-195.06 245.63-22.23-16.89z"
  }), _react.default.createElement("path", {
    fill: "#1a237e",
    d: "M519.39 178.93l21.31 13.16-38.44 45.8-19.4-12.96 36.53-46z"
  }), _react.default.createElement("path", {
    fill: "#1a237e",
    d: "M527 208.41l66.91 109.5-26.19 1.6-55.76-95.56L527 208.41z"
  }), _react.default.createElement("path", {
    fill: "#1a237e",
    d: "M441.8 316.95h195.84v9.21H441.8zM452.42 335.2h24.52v318.61h-24.52zM657.46 335.2h22.84v318.61h-22.84z"
  }), _react.default.createElement("path", {
    fill: "#536dfe",
    d: "M393.86 324.26h353.3v18.93h-353.3z"
  }), _react.default.createElement("path", {
    fill: "#1a237e",
    d: "M435.7 653.81h262.98v21.49H435.7zM658.82 675.3h21.17v51.17h-21.17zM454.65 675.3h21.17v51.17h-21.17z"
  }), _react.default.createElement("path", {
    d: "M205.22 167c-14.56 2.08-22.68 17.71-21.3 31.18s9.4 25.45 15.71 37.68c14 27.16 20.15 57.09 26.15 86.63 16.59-19.4 33.73-39.93 38.08-64.28 3.65-20.41-2.53-41.45-14.2-58.87-9.02-13.46-24.23-35.23-44.44-32.34z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M232.15 13.97a25.76 25.76 0 0 0-9.13-.35c-7.47 1.35-17-5.54-25-6.54-22.91-2.84-70.17 1.16-91.93 8.86-17.16 6-29.14 24.34-27.84 42.48.62 8.54 3.81 16.63 6 24.89 12.44 46 24.4 114.39-3.36 153.08-6.61 9.21-13.86 18.11-22.89 25-16.36 12.4-37.51 17.14-58 17 20 14.4 49.94 12.85 68.34-3.53a88.51 88.51 0 0 1-39 58.38c30.27-.7 63.45-7.22 82.16-31a199 199 0 0 1-28.25 45c35.9-14.43 68.54-38.78 88.59-71.87s26.38-75.28 12.51-111.41c-2.61-6.79-5.92-13.49-6.48-20.74-1.32-17 12.36-31 25-42.5l20.61-18.78c5.72-5.21 11.56-10.5 18.57-13.77s14.58-4.33 22.13-5.39c5.56-.78 22.44-.5 23.82-5.89 1.18-4.62-11-17.06-13.95-20.12a77.7 77.7 0 0 0-41.9-22.8z",
    fill: "#c62828"
  }), _react.default.createElement("path", {
    d: "M480.36 114.19c5.81 9.86 14.08 16.18 18.45 14.11s3.21-11.74-2.61-21.6-18.46-14.11-18.46-14.11-3.2 11.74 2.62 21.6z",
    transform: "translate(-226.42 -86.76)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("ellipse", {
    cx: 505.51,
    cy: 124.53,
    rx: 15.71,
    ry: 9.63,
    transform: "rotate(-33.29 247.264 459.803)",
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    d: "M258.46 37.97s-89.45 32.4-104.49 105.33c0 0 17.24-8.08 35.07 10.34 0 0 8.69-48.9 82.23-106.53z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M250.94 28.36c5.43 9.44 13.14 15.49 17.22 13.51s3-11.24-2.44-20.68-17.21-13.51-17.21-13.51-2.99 11.24 2.43 20.68z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M257.63 20.68c5.43 9.44 13.13 15.49 17.22 13.51s3-11.24-2.44-20.68S255.19 0 255.19 0s-2.99 11.24 2.44 20.68zM300.51 36.33c-10.4-4.77-20.5-5.56-22.56-1.77s4.69 10.73 15.09 15.5 22.54 1.77 22.54 1.77-4.67-10.73-15.07-15.5z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M300.51 42.47c-10.4-4.77-20.5-5.56-22.56-1.77s4.69 10.74 15.09 15.5 22.54 1.77 22.54 1.77-4.67-10.73-15.07-15.5z",
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 500.83,
    cy: 125.01,
    rx: 14.78,
    ry: 9.14,
    transform: "rotate(-35 248.757 443.66)",
    fill: primaryColor
  }));
};

UndrawDesignerGirl.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawDesignerGirl;
exports.default = _default;