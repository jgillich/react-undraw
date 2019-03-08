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

var UndrawFastLoading = function UndrawFastLoading(_props) {
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
    viewBox: "0 0 942 745.6",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 219.48,
    y1: 505.38,
    x2: 219.48,
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
    x1: 425.02,
    y1: 459.78,
    x2: 425.02,
    y2: 162.72,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 600,
    y1: 824.36,
    x2: 600,
    y2: 334.87,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 617.59,
    y1: 479.82,
    x2: 617.59,
    y2: 137.05,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("rect", {
    x: 52.32,
    width: 334.33,
    height: 505.38,
    rx: 4.5,
    ry: 4.5,
    fill: "url(#prefix__a)",
    opacity: 0.5
  }), _react.default.createElement("rect", {
    x: 56.6,
    y: 3.71,
    width: 325.76,
    height: 495.16,
    rx: 4.5,
    ry: 4.5,
    fill: "#f2f2f2"
  }), _react.default.createElement("rect", {
    x: 89.18,
    y: 94.93,
    width: 65.15,
    height: 58.64,
    rx: 4.5,
    ry: 4.5,
    fill: primaryColor,
    opacity: 0.5
  }), _react.default.createElement("rect", {
    x: 173.88,
    y: 94.93,
    width: 175.91,
    height: 6.52,
    rx: 2.82,
    ry: 2.82,
    fill: "#e0e0e0"
  }), _react.default.createElement("rect", {
    x: 173.88,
    y: 114.47,
    width: 146.23,
    height: 6.52,
    rx: 2.82,
    ry: 2.82,
    fill: "#e0e0e0"
  }), _react.default.createElement("rect", {
    x: 89.18,
    y: 186.14,
    width: 65.15,
    height: 58.64,
    rx: 4.5,
    ry: 4.5,
    fill: primaryColor,
    opacity: 0.5
  }), _react.default.createElement("rect", {
    x: 173.88,
    y: 186.14,
    width: 175.91,
    height: 6.52,
    rx: 2.82,
    ry: 2.82,
    fill: "#e0e0e0"
  }), _react.default.createElement("rect", {
    x: 173.88,
    y: 205.68,
    width: 175.91,
    height: 6.52,
    rx: 2.82,
    ry: 2.82,
    fill: "#e0e0e0"
  }), _react.default.createElement("rect", {
    x: 89.18,
    y: 277.35,
    width: 65.15,
    height: 58.64,
    rx: 4.5,
    ry: 4.5,
    fill: primaryColor,
    opacity: 0.5
  }), _react.default.createElement("rect", {
    x: 173.88,
    y: 277.35,
    width: 175.91,
    height: 6.52,
    rx: 2.82,
    ry: 2.82,
    fill: "#e0e0e0"
  }), _react.default.createElement("rect", {
    x: 173.88,
    y: 296.9,
    width: 19.55,
    height: 6.52,
    rx: 2.82,
    ry: 2.82,
    fill: "#e0e0e0"
  }), _react.default.createElement("rect", {
    x: 260.36,
    y: 162.72,
    width: 329.32,
    height: 297.06,
    rx: 4.5,
    ry: 4.5,
    fill: "url(#prefix__b)",
    opacity: 0.5
  }), _react.default.createElement("rect", {
    x: 265.45,
    y: 165.7,
    width: 319.7,
    height: 287.73,
    rx: 4.5,
    ry: 4.5,
    fill: "#fff"
  }), _react.default.createElement("rect", {
    x: 296.84,
    y: 227.52,
    width: 68.69,
    height: 61.82,
    rx: 4.5,
    ry: 4.5,
    fill: primaryColor,
    opacity: 0.5
  }), _react.default.createElement("rect", {
    x: 386.14,
    y: 227.52,
    width: 185.46,
    height: 6.87,
    rx: 2.98,
    ry: 2.98,
    fill: "#e0e0e0"
  }), _react.default.createElement("rect", {
    x: 386.14,
    y: 248.13,
    width: 185.46,
    height: 6.87,
    rx: 2.98,
    ry: 2.98,
    fill: "#e0e0e0"
  }), _react.default.createElement("rect", {
    x: 289.97,
    y: 322.92,
    width: 281.63,
    height: 6.87,
    rx: 2.98,
    ry: 2.98,
    fill: "#e0e0e0"
  }), _react.default.createElement("rect", {
    x: 289.97,
    y: 343.53,
    width: 281.63,
    height: 6.87,
    rx: 2.98,
    ry: 2.98,
    fill: "#e0e0e0"
  }), _react.default.createElement("rect", {
    x: 289.97,
    y: 371,
    width: 281.63,
    height: 6.87,
    rx: 2.98,
    ry: 2.98,
    fill: "#e0e0e0"
  }), _react.default.createElement("rect", {
    x: 289.97,
    y: 391.61,
    width: 212.94,
    height: 6.87,
    rx: 2.98,
    ry: 2.98,
    fill: "#e0e0e0"
  }), _react.default.createElement("path", {
    d: "M726.64 352.64l1.17-5.22-1.64 5.1a510.06 510.06 0 0 0-130.8-17.64C277.05 333 129 614.33 129 614.33l301.66 159.16s37-114.74 168.41-111a226.18 226.18 0 0 1 27 2.36l-39.98 124.53a22.2 22.2 0 1 0 37.07 24.4v-.06a22.07 22.07 0 0 0 3.27-11.2c0-.67 0-1.34-.07-2l28.9-129.14c86.1 26.48 112.19 102.1 112.19 102.1L1071 621.73S957 415.2 726.64 352.64z",
    transform: "translate(-129 -78.76)",
    fill: "url(#prefix__c)",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M466.43 259.24C152.17 257.41 6 535.13 6 535.13l297.82 157.11s36.54-113.28 166.27-109.63a223.22 223.22 0 0 1 27.29 2.42L596 276.78a503.55 503.55 0 0 0-129.57-17.54z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M596 276.78l-98.62 308.28C605 601.41 636.35 692.24 636.35 692.24L936 542.44s-112.59-203.9-340-265.66z",
    fill: "#e0e0e0"
  }), _react.default.createElement("path", {
    d: "M497.06 718.95l100.12-447.33-139.92 436.33a21.92 21.92 0 1 0 36.59 24.09v-.06a21.79 21.79 0 0 0 3.23-11.05c.06-.69.03-1.33-.02-1.98z",
    fill: "#535461"
  }), _react.default.createElement("path", {
    d: "M662.25 337.47l-2.62-.49 5.17-19c8.14-61-22.61-67.19-34.14-67.4a37.91 37.91 0 0 0-4.05-1.23v-7.2a38.22 38.22 0 0 0 28.55-30.86h.1c1.83 0 3.32-2.79 3.32-6.23a8.64 8.64 0 0 0-1.45-5.14q.2-2 .2-4A39.72 39.72 0 0 0 645 167.13a25.6 25.6 0 0 0-2.82-7.58c-2.83-5-7.54-10.18-5.62-15.59l-12.43 1.28-.12-8.19c-3.88.7-5.51 5.19-7.81 8.39-5.54 7.7-16.65 8.77-24 14.77-2.5 2-8.12 8.24-7.05 12.31a39.66 39.66 0 0 0-7.58 23.37q0 2 .2 4a8.64 8.64 0 0 0-1.45 5.14c0 3.44 1.49 6.23 3.32 6.23h.1a38.22 38.22 0 0 0 28.55 30.86v7.2a37.91 37.91 0 0 0-4.05 1.23c-11.53.21-42.28 6.36-34.14 67.4l5.17 19-1.23.23a14.17 14.17 0 0 0-11.33 16.53l20.43 109.19a4.29 4.29 0 0 0 5 3.43l3.59-.67v2.12a11.92 11.92 0 0 0-6.64 10.68v1.35h24.08v-1.35a11.92 11.92 0 0 0-5.81-10.23v-4.75l3.28-.61a4.29 4.29 0 0 0 3.43-5l-19.14-102.58H644l-19.12 102.59a4.29 4.29 0 0 0 3.43 5l3.28.61v4.75a11.92 11.92 0 0 0-5.81 10.23v1.35h24.08v-1.35a11.92 11.92 0 0 0-6.64-10.68v-2.12l3.59.67a4.29 4.29 0 0 0 5-3.43l20.64-110.56a12.75 12.75 0 0 0-10.2-14.88z",
    transform: "translate(-129 -78.76)",
    fill: "url(#prefix__d)",
    opacity: 0.7
  }), _react.default.createElement("path", {
    fill: "#fdb797",
    d: "M463.72 373h11.18v15.18h-11.18zM502.06 373h11.18v15.18h-11.18z"
  }), _react.default.createElement("path", {
    fill: "#4d8af0",
    d: "M451.74 248.4h73.49v26.36h-73.49z"
  }), _react.default.createElement("path", {
    d: "M451.74 248.4h73.49v26.36h-73.49z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M451.74 253.19s27.42 6.39 36.74 6.39 36.74-6.39 36.74-6.39v-4h-73.48z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M525.22 252.39s-27.42 6.39-36.74 6.39-36.74-6.39-36.74-6.39v-43.93a36.74 36.74 0 0 1 36.74-36.74 36.74 36.74 0 0 1 36.74 36.74z",
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M479.7 153.34h17.57v21.14a7.61 7.61 0 0 1-7.61 7.61h-2.34a7.61 7.61 0 0 1-7.61-7.61v-21.14h-.01z",
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M477 378.46l-15.75 2.94a5.17 5.17 0 0 1-6-4.13l-18.78-100.64a17.06 17.06 0 0 1 13.64-19.91l4.06-.76a5.17 5.17 0 0 1 6 4.13l21 112.33a5.17 5.17 0 0 1-4.17 6.04zM499.92 378.46l15.75 2.94a5.17 5.17 0 0 0 6-4.13l19.1-102.32a15.36 15.36 0 0 0-12.28-17.91l-5.74-1.07a5.17 5.17 0 0 0-6 4.13l-21 112.33a5.17 5.17 0 0 0 4.17 6.03z",
    fill: "#4d8af0"
  }), _react.default.createElement("path", {
    d: "M479.7 166.66a36.77 36.77 0 0 0 17.57 0v-12.52H479.7z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 488.48,
    cy: 121.39,
    r: 38.34,
    fill: "#333"
  }), _react.default.createElement("circle", {
    cx: 488.48,
    cy: 130.18,
    r: 36.74,
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M464.22 87.06c7.07-5.77 17.76-6.8 23.08-14.21 2.21-3.08 3.78-7.41 7.51-8.08l.11 7.88 12-1.23c-1.85 5.2 2.68 10.2 5.41 15a24.66 24.66 0 0 1 3.19 11.61c-4.15 2.49-9.3-.23-13.92-1.68s-9.27-1.56-14-1.69a29.05 29.05 0 0 0-7.22.4 36.41 36.41 0 0 0-6 2.19c-3.18 1.33-13.23 6.36-16.18 3.12-3.32-3.67 3.29-11.08 6.02-13.31z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M466.22 111.75a16.85 16.85 0 0 0 6.5 2 57.24 57.24 0 0 0 27.89-3.13c1.46 3.69 5 6.23 8.79 7.43s7.81 1.26 11.78 1.32a4.36 4.36 0 0 0 2.53-.48c1.77-1.19.91-3.93-.12-5.79l-5.12-9.28c-1.51-2.74-3.07-5.54-5.41-7.61-2.94-2.6-6.84-3.82-10.68-4.59a60.24 60.24 0 0 0-27.42.91c-9.57 2.53-21.86 11.28-8.74 19.22z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M466.22 110.95a16.85 16.85 0 0 0 6.5 2 57.24 57.24 0 0 0 27.89-3.13c1.46 3.69 5 6.23 8.79 7.43s7.81 1.26 11.78 1.32a4.36 4.36 0 0 0 2.53-.48c1.77-1.19.91-3.93-.12-5.79l-5.12-9.28c-1.51-2.74-3.07-5.54-5.41-7.61-2.94-2.6-6.84-3.82-10.68-4.59a60.24 60.24 0 0 0-27.42.91c-9.57 2.51-21.86 11.29-8.74 19.22z",
    fill: "#333"
  }), _react.default.createElement("ellipse", {
    cx: 524.83,
    cy: 130.18,
    rx: 3.2,
    ry: 5.99,
    fill: "#fdb797"
  }), _react.default.createElement("ellipse", {
    cx: 452.14,
    cy: 130.18,
    rx: 3.2,
    ry: 5.99,
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M479.84 174.16s-46.48-7.24-36.89 64.65l5.59 20.61 16-.64s-10.38-24-4-39.94 19.3-44.68 19.3-44.68zM497.12 174.16s46.48-7.24 36.89 64.65l-5.59 20.61-16-.64s10.38-24 4-39.94-19.3-44.68-19.3-44.68z",
    fill: "#f55f44"
  }), _react.default.createElement("circle", {
    cx: 457.33,
    cy: 261.97,
    r: 8.79,
    fill: "#fdb797"
  }), _react.default.createElement("circle", {
    cx: 521.23,
    cy: 261.97,
    r: 8.79,
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M467.37 381.79h3.09a10 10 0 0 1 10 10v2.74h-23.13v-2.74a10 10 0 0 1 10.04-10zM506.51 381.79h3.09a10 10 0 0 1 10 10v2.74h-23.13v-2.74a10 10 0 0 1 10.04-10z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M459.73 212.45s-3.2 16.77 2.4 24M517.24 212.45s3.2 16.77-2.4 24",
    opacity: 0.1
  }));
};

UndrawFastLoading.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawFastLoading;
exports.default = _default;