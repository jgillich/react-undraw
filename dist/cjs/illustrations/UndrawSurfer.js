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

var UndrawSurfer = function UndrawSurfer(_props) {
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
    viewBox: "0 0 1132 622.38",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 773.72,
    y1: 729.73,
    x2: 773.72,
    y2: 298.86,
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
    d: "M152.05 140.7s-2.5-8.48.47-14.72a13.36 13.36 0 0 0 1.08-8.41 22.44 22.44 0 0 0-1.19-3.95",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M154.26 109.68c0 1-1.88 4-1.88 4s-1.89-3-1.89-4a1.89 1.89 0 1 1 3.77 0zM157.37 115.44c-.56.87-3.78 2.38-3.78 2.38s.06-3.56.62-4.43a1.883 1.883 0 1 1 3.16 2.05zM157.24 125.28c-.93.47-4.47.14-4.47.14s1.84-3 2.77-3.5a1.883 1.883 0 1 1 1.7 3.36zM155.46 132.7c-.84.62-4.38.9-4.38.9s1.3-3.31 2.14-3.93a1.88 1.88 0 0 1 2.24 3zM149.63 118.02c.75.72 4.22 1.47 4.22 1.47s-.85-3.45-1.59-4.17a1.885 1.885 0 0 0-2.63 2.7zM147.66 126.73c.93.46 4.47.14 4.47.14s-1.84-3-2.77-3.51a1.89 1.89 0 0 0-1.7 3.37zM146.91 135.45c.83.62 4.38.9 4.38.9s-1.31-3.31-2.14-3.92a1.88 1.88 0 1 0-2.24 3z",
    fill: primaryColor
  }), _react.default.createElement("g", {
    opacity: 0.7,
    fill: "#fff"
  }, _react.default.createElement("path", {
    d: "M152.05 140.7s-2.5-8.48.47-14.72a13.36 13.36 0 0 0 1.08-8.41 22.44 22.44 0 0 0-1.19-3.95"
  }), _react.default.createElement("path", {
    d: "M154.26 109.68c0 1-1.88 4-1.88 4s-1.89-3-1.89-4a1.89 1.89 0 1 1 3.77 0zM157.37 115.44c-.56.87-3.78 2.38-3.78 2.38s.06-3.56.62-4.43a1.883 1.883 0 1 1 3.16 2.05zM157.24 125.28c-.93.47-4.47.14-4.47.14s1.84-3 2.77-3.5a1.883 1.883 0 1 1 1.7 3.36zM155.46 132.7c-.84.62-4.38.9-4.38.9s1.3-3.31 2.14-3.93a1.88 1.88 0 0 1 2.24 3zM149.63 118.02c.75.72 4.22 1.47 4.22 1.47s-.85-3.45-1.59-4.17a1.885 1.885 0 0 0-2.63 2.7zM147.66 126.73c.93.46 4.47.14 4.47.14s-1.84-3-2.77-3.51a1.89 1.89 0 0 0-1.7 3.37zM146.91 135.45c.83.62 4.38.9 4.38.9s-1.31-3.31-2.14-3.92a1.88 1.88 0 1 0-2.24 3z"
  })), _react.default.createElement("path", {
    d: "M399.86 104.68s-2.5-8.49.47-14.73a13.34 13.34 0 0 0 1.08-8.41 22.36 22.36 0 0 0-1.19-3.94",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M402.07 73.65c0 1-1.88 4.06-1.88 4.06s-1.89-3-1.89-4.06a1.89 1.89 0 0 1 3.77 0zM405.18 79.41c-.56.87-3.78 2.38-3.78 2.38s.06-3.55.62-4.43a1.883 1.883 0 0 1 3.16 2.05zM405.05 89.25c-.93.47-4.47.15-4.47.15s1.84-3 2.77-3.51a1.883 1.883 0 0 1 1.7 3.36zM403.27 96.68c-.84.61-4.38.89-4.38.89s1.3-3.3 2.14-3.92a1.88 1.88 0 0 1 2.24 3zM397.44 81.99c.75.73 4.22 1.48 4.22 1.48s-.85-3.45-1.59-4.18a1.885 1.885 0 0 0-2.63 2.7zM395.47 90.7c.93.47 4.47.14 4.47.14s-1.84-3-2.77-3.5a1.883 1.883 0 0 0-1.7 3.36zM394.72 99.43c.83.62 4.38.89 4.38.89s-1.31-3.3-2.14-3.92a1.88 1.88 0 1 0-2.24 3z",
    fill: primaryColor
  }), _react.default.createElement("g", {
    opacity: 0.7,
    fill: "#fff"
  }, _react.default.createElement("path", {
    d: "M399.86 104.68s-2.5-8.49.47-14.73a13.34 13.34 0 0 0 1.08-8.41 22.36 22.36 0 0 0-1.19-3.94"
  }), _react.default.createElement("path", {
    d: "M402.07 73.65c0 1-1.88 4.06-1.88 4.06s-1.89-3-1.89-4.06a1.89 1.89 0 0 1 3.77 0zM405.18 79.41c-.56.87-3.78 2.38-3.78 2.38s.06-3.55.62-4.43a1.883 1.883 0 0 1 3.16 2.05zM405.05 89.25c-.93.47-4.47.15-4.47.15s1.84-3 2.77-3.51a1.883 1.883 0 0 1 1.7 3.36zM403.27 96.68c-.84.61-4.38.89-4.38.89s1.3-3.3 2.14-3.92a1.88 1.88 0 0 1 2.24 3zM397.44 81.99c.75.73 4.22 1.48 4.22 1.48s-.85-3.45-1.59-4.18a1.885 1.885 0 0 0-2.63 2.7zM395.47 90.7c.93.47 4.47.14 4.47.14s-1.84-3-2.77-3.5a1.883 1.883 0 0 0-1.7 3.36zM394.72 99.43c.83.62 4.38.89 4.38.89s-1.31-3.3-2.14-3.92a1.88 1.88 0 1 0-2.24 3z"
  })), _react.default.createElement("path", {
    d: "M626.6 129.6s-1.65-5.61.31-9.74a8.83 8.83 0 0 0 .72-5.56 14.33 14.33 0 0 0-.79-2.61",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M628.06 109.08a10 10 0 0 1-1.24 2.68 10 10 0 0 1-1.25-2.68 1.25 1.25 0 1 1 2.49 0zM630.12 112.89a10 10 0 0 1-2.5 1.57 10 10 0 0 1 .41-2.93 1.25 1.25 0 1 1 2.09 1.36zM630 119.4a9.78 9.78 0 0 1-2.95.09 10 10 0 0 1 1.83-2.32 1.25 1.25 0 0 1 1.12 2.23zM628.86 124.31a9.86 9.86 0 0 1-2.9.59 9.93 9.93 0 0 1 1.41-2.6 1.25 1.25 0 0 1 1.49 2zM625 114.59a10 10 0 0 0 2.8 1 10 10 0 0 0-1.06-2.76 1.24 1.24 0 1 0-1.74 1.76zM623.7 120.35a9.92 9.92 0 0 0 3 .1 9.78 9.78 0 0 0-1.84-2.32 1.243 1.243 0 0 0-1.12 2.22zM623.2 126.13a9.8 9.8 0 0 0 2.9.59 9.55 9.55 0 0 0-1.42-2.59 1.244 1.244 0 1 0-1.48 2z",
    fill: primaryColor
  }), _react.default.createElement("g", {
    opacity: 0.7,
    fill: "#fff"
  }, _react.default.createElement("path", {
    d: "M626.6 129.6s-1.65-5.61.31-9.74a8.83 8.83 0 0 0 .72-5.56 14.33 14.33 0 0 0-.79-2.61"
  }), _react.default.createElement("path", {
    d: "M628.06 109.08a10 10 0 0 1-1.24 2.68 10 10 0 0 1-1.25-2.68 1.25 1.25 0 1 1 2.49 0zM630.12 112.89a10 10 0 0 1-2.5 1.57 10 10 0 0 1 .41-2.93 1.25 1.25 0 1 1 2.09 1.36zM630 119.4a9.78 9.78 0 0 1-2.95.09 10 10 0 0 1 1.83-2.32 1.25 1.25 0 0 1 1.12 2.23zM628.86 124.31a9.86 9.86 0 0 1-2.9.59 9.93 9.93 0 0 1 1.41-2.6 1.25 1.25 0 0 1 1.49 2zM625 114.59a10 10 0 0 0 2.8 1 10 10 0 0 0-1.06-2.76 1.24 1.24 0 1 0-1.74 1.76zM623.7 120.35a9.92 9.92 0 0 0 3 .1 9.78 9.78 0 0 0-1.84-2.32 1.243 1.243 0 0 0-1.12 2.22zM623.2 126.13a9.8 9.8 0 0 0 2.9.59 9.55 9.55 0 0 0-1.42-2.59 1.244 1.244 0 1 0-1.48 2z"
  })), _react.default.createElement("path", {
    d: "M158.27 37.31v49.34c0 8.13-10.05 12.13-15.51 6.11l-.19-.21c-1.77-2-4.19-4.39-6.62-3.34a12.55 12.55 0 0 0-2 1.41 28.16 28.16 0 0 1 1.26 3.31c2.1 7 .46 14.47-1.78 21.39s-5.12 13.76-5.5 21a64 64 0 0 0 .61 10.44c.76 6.59 1.55 13.3 4.3 19.33 1.51 3.3 3.64 6.63 3.19 10.23a104.12 104.12 0 0 1-35.08-4.45c7.85-7.92 7.84-20.47 7.32-31.6l-1.27-26.9c-.13-2.63-.27-5.34-1.47-7.69-1.64-3.19-5-5.19-8.52-6a37.28 37.28 0 0 0-10.71-.35 5.73 5.73 0 0 1 .74-4.06 51.2 51.2 0 0 0 17.65 4.13 2.25 2.25 0 0 0 2.88-2.62 46.9 46.9 0 0 0-1.21-13.26c-3.23.77-6.09 3.32-9.41 3.07-4.36-.33-6.94-5.21-11-6.71-3.15-1.16-6.61-.14-9.9.46s-7.21.56-9.38-2c-2.73-3.23-1-8.35-2.79-12.19-2.52-5.48-10.14-5.58-16.13-4.83a19 19 0 0 1 10.11-7.61c-2.17-3.88-9.91-3.62-9.5-8.29a4.45 4.45 0 0 1 1.5-2.86q3.33-3.06 6.68-6.1l-9.91-3.75c-2.8-1.05-6-2.53-5.63-6.21a6.09 6.09 0 0 1 1.82-3.62l.63-.64a13.94 13.94 0 0 1 9.86-4l58-16.74a36.8 36.8 0 0 1 47 35.51z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M158.27 37.31v49.34c0 8.13-10.05 12.13-15.51 6.11l-.19-.21c-1.77-2-4.19-4.39-6.62-3.34a12.55 12.55 0 0 0-2 1.41 28.16 28.16 0 0 1 1.26 3.31c2.1 7 .46 14.47-1.78 21.39s-5.12 13.76-5.5 21a64 64 0 0 0 .61 10.44c.76 6.59 1.55 13.3 4.3 19.33 1.51 3.3 3.64 6.63 3.19 10.23a104.12 104.12 0 0 1-35.08-4.45c7.85-7.92 7.84-20.47 7.32-31.6l-1.27-26.9c-.13-2.63-.27-5.34-1.47-7.69-1.64-3.19-5-5.19-8.52-6a37.28 37.28 0 0 0-10.71-.35 5.73 5.73 0 0 1 .74-4.06 51.2 51.2 0 0 0 17.65 4.13 2.25 2.25 0 0 0 2.88-2.62 46.9 46.9 0 0 0-1.21-13.26c-3.23.77-6.09 3.32-9.41 3.07-4.36-.33-6.94-5.21-11-6.71-3.15-1.16-6.61-.14-9.9.46s-7.21.56-9.38-2c-2.73-3.23-1-8.35-2.79-12.19-2.52-5.48-10.14-5.58-16.13-4.83a19 19 0 0 1 10.11-7.61c-2.17-3.88-9.91-3.62-9.5-8.29a4.45 4.45 0 0 1 1.5-2.86q3.33-3.06 6.68-6.1l-9.91-3.75c-2.8-1.05-6-2.53-5.63-6.21a6.09 6.09 0 0 1 1.82-3.62l.63-.64a13.94 13.94 0 0 1 9.86-4l58-16.74a36.8 36.8 0 0 1 47 35.51z",
    fill: "#fff",
    opacity: 0.7
  }), _react.default.createElement("path", {
    d: "M623.55 60.01v27.34a5 5 0 0 1-8.6 3.39l-.1-.12c-1-1.1-2.32-2.43-3.67-1.85a6.53 6.53 0 0 0-1.11.78 17 17 0 0 1 .7 1.84c1.16 3.85.25 8-1 11.85s-2.83 7.62-3 11.65a35 35 0 0 0 .34 5.78c.42 3.65.86 7.37 2.38 10.71.84 1.83 2 3.68 1.77 5.67a57.34 57.34 0 0 1-19.44-2.47c4.35-4.38 4.35-11.34 4.06-17.51q-.36-7.45-.7-14.91a10.24 10.24 0 0 0-.82-4.26 6.94 6.94 0 0 0-4.72-3.33 20.65 20.65 0 0 0-5.93-.19 3.16 3.16 0 0 1 .41-2.25 28.23 28.23 0 0 0 9.78 2.29 1.25 1.25 0 0 0 1.59-1.46 25.83 25.83 0 0 0-.66-7.34c-1.79.42-3.38 1.84-5.22 1.7-2.41-.19-3.85-2.89-6.12-3.72-1.75-.64-3.66-.08-5.49.25s-4 .31-5.19-1.1c-1.52-1.79-.57-4.63-1.55-6.76-1.4-3-5.62-3.09-8.94-2.68a10.53 10.53 0 0 1 5.6-4.21c-1.2-2.16-5.49-2-5.27-4.59a2.49 2.49 0 0 1 .84-1.59l3.7-3.38-5.49-2.08c-1.55-.58-3.34-1.4-3.12-3.44a3.36 3.36 0 0 1 1-2l.36-.36a7.68 7.68 0 0 1 5.46-2.23l32.11-9.24a20.39 20.39 0 0 1 26 19.68z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M623.55 60.01v27.34a5 5 0 0 1-8.6 3.39l-.1-.12c-1-1.1-2.32-2.43-3.67-1.85a6.53 6.53 0 0 0-1.11.78 17 17 0 0 1 .7 1.84c1.16 3.85.25 8-1 11.85s-2.83 7.62-3 11.65a35 35 0 0 0 .34 5.78c.42 3.65.86 7.37 2.38 10.71.84 1.83 2 3.68 1.77 5.67a57.34 57.34 0 0 1-19.44-2.47c4.35-4.38 4.35-11.34 4.06-17.51q-.36-7.45-.7-14.91a10.24 10.24 0 0 0-.82-4.26 6.94 6.94 0 0 0-4.72-3.33 20.65 20.65 0 0 0-5.93-.19 3.16 3.16 0 0 1 .41-2.25 28.23 28.23 0 0 0 9.78 2.29 1.25 1.25 0 0 0 1.59-1.46 25.83 25.83 0 0 0-.66-7.34c-1.79.42-3.38 1.84-5.22 1.7-2.41-.19-3.85-2.89-6.12-3.72-1.75-.64-3.66-.08-5.49.25s-4 .31-5.19-1.1c-1.52-1.79-.57-4.63-1.55-6.76-1.4-3-5.62-3.09-8.94-2.68a10.53 10.53 0 0 1 5.6-4.21c-1.2-2.16-5.49-2-5.27-4.59a2.49 2.49 0 0 1 .84-1.59l3.7-3.38-5.49-2.08c-1.55-.58-3.34-1.4-3.12-3.44a3.36 3.36 0 0 1 1-2l.36-.36a7.68 7.68 0 0 1 5.46-2.23l32.11-9.24a20.39 20.39 0 0 1 26 19.68z",
    fill: "#fff",
    opacity: 0.7
  }), _react.default.createElement("path", {
    d: "M970.23 44.02v19.17a3.48 3.48 0 0 0 6 2.37l.07-.08c.69-.77 1.63-1.71 2.58-1.3a5.23 5.23 0 0 1 .78.55 10.06 10.06 0 0 0-.49 1.29c-.82 2.71-.18 5.63.7 8.33s2 5.35 2.14 8.18a25.15 25.15 0 0 1-.24 4.06 24.84 24.84 0 0 1-1.68 7.52c-.58 1.29-1.41 2.59-1.24 4a40.48 40.48 0 0 0 13.66-1.74c-3.06-3.08-3.06-8-2.85-12.3.16-3.49.33-7 .49-10.47a7.21 7.21 0 0 1 .57-3 4.87 4.87 0 0 1 3.32-2.34 14.54 14.54 0 0 1 4.17-.14 2.3 2.3 0 0 0-.29-1.58 19.87 19.87 0 0 1-6.87 1.61 1.13 1.13 0 0 1-.85-.19 1.1 1.1 0 0 1-.27-.83 17.87 17.87 0 0 1 .47-5.16c1.25.3 2.37 1.29 3.66 1.19 1.7-.13 2.7-2 4.3-2.61 1.23-.45 2.57-.05 3.86.18s2.8.22 3.64-.78c1.07-1.25.4-3.25 1.09-4.74 1-2.13 4-2.17 6.28-1.88a7.34 7.34 0 0 0-3.94-3c.85-1.52 3.86-1.41 3.7-3.23a1.68 1.68 0 0 0-.58-1.11l-2.6-2.38 3.86-1.46c1.09-.41 2.34-1 2.19-2.42a2.39 2.39 0 0 0-.71-1.4l-.25-.25a5.39 5.39 0 0 0-3.84-1.57l-22.57-6.52a14.33 14.33 0 0 0-18.3 13.82z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M970.23 44.02v19.17a3.48 3.48 0 0 0 6 2.37l.07-.08c.69-.77 1.63-1.71 2.58-1.3a5.23 5.23 0 0 1 .78.55 10.06 10.06 0 0 0-.49 1.29c-.82 2.71-.18 5.63.7 8.33s2 5.35 2.14 8.18a25.15 25.15 0 0 1-.24 4.06 24.84 24.84 0 0 1-1.68 7.52c-.58 1.29-1.41 2.59-1.24 4a40.48 40.48 0 0 0 13.66-1.74c-3.06-3.08-3.06-8-2.85-12.3.16-3.49.33-7 .49-10.47a7.21 7.21 0 0 1 .57-3 4.87 4.87 0 0 1 3.32-2.34 14.54 14.54 0 0 1 4.17-.14 2.3 2.3 0 0 0-.29-1.58 19.87 19.87 0 0 1-6.87 1.61 1.13 1.13 0 0 1-.85-.19 1.1 1.1 0 0 1-.27-.83 17.87 17.87 0 0 1 .47-5.16c1.25.3 2.37 1.29 3.66 1.19 1.7-.13 2.7-2 4.3-2.61 1.23-.45 2.57-.05 3.86.18s2.8.22 3.64-.78c1.07-1.25.4-3.25 1.09-4.74 1-2.13 4-2.17 6.28-1.88a7.34 7.34 0 0 0-3.94-3c.85-1.52 3.86-1.41 3.7-3.23a1.68 1.68 0 0 0-.58-1.11l-2.6-2.38 3.86-1.46c1.09-.41 2.34-1 2.19-2.42a2.39 2.39 0 0 0-.71-1.4l-.25-.25a5.39 5.39 0 0 0-3.84-1.57l-22.57-6.52a14.33 14.33 0 0 0-18.3 13.82z",
    fill: "#fff",
    opacity: 0.7
  }), _react.default.createElement("path", {
    d: "M763.65 208.32h45.72c16.84 0-47.31 42-61.46 52.1-16.24 11.57-38.25 15.89-59.06 20.74a705.39 705.39 0 0 0-86 25.91c-5.08 1.9-10.3 3.95-13.84 7.45-3.94 3.9-5.27 9.05-7.64 13.71-9.28 18.18-33.47 27.66-54.84 37.11s-44 23.4-45 43c-.42 7.8 3.89 16.53 13 19.23 11 3.29 26.66-2.55 33.43 5.21 2.7 3.11 2.52 7.26 1.82 11-4.5 23.87-25 43.38-43.84 62.14-9.05 9-17.45 23.38-6.37 30.78 8.85 5.91 24.82 2.23 31.33 9.86 2.24 2.64 2.64 6 2.66 9.19.14 22.91-17.05 45.34-42.53 55.46-16.48 6.56-35.25 8.09-53.58 9.13-23.18 1.33-46.41 2.06-69.65 2-12.08 0-24.22-.32-36.14-1.92s-23.5-4.51-35-7.42l-191.3-48.17c-6.08-1.53-12.36-3.15-17.12-6.57-5.31-3.83-8.07-9.45-9.75-15-9-30.12 8.32-62 1.33-92.5-7.63-33.3-42.61-58.53-54.55-91-8.08-22-5-45.49-1.79-68.27l11.78-85.3c218.72-7.62 438.71-10.43 657.3-.62 53.74 2.37 37.73 8.42 91.09 2.75z",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M776.19 208.32a5.82 5.82 0 0 1-4.47-9.55c10.78-12.89 28.8-35 31.2-41.41 3.44-9.26 126.77-41.68 126.77-41.68s53.73-21.62 61.31-34c4.49-7.31 26.6-24.9 43.9-38 13.37-10.16 11.13 5 27.34 9.32 12.66-10.48 45.66-8 45.66 22.22l23.9 120.84a10.27 10.27 0 0 1-10.07 12.27z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M776.19 208.32a5.82 5.82 0 0 1-4.47-9.55c10.78-12.89 28.8-35 31.2-41.41 3.44-9.26 126.77-41.68 126.77-41.68s53.73-21.62 61.31-34c4.49-7.31 26.6-24.9 43.9-38 13.37-10.16 11.13 5 27.34 9.32 12.66-10.48 45.66-8 45.66 22.22l23.9 120.84a10.27 10.27 0 0 1-10.07 12.27z",
    fill: "#fff",
    opacity: 0.7
  }), _react.default.createElement("path", {
    d: "M7.41 209.81s71.67-75.62 149.76-72.56 223.57-28.88 223.57-28.88 116.59-22.44 144.4-10.68 70.6 30.3 100.56 30.3 56.69 84.28 56.69 84.28-674.98-8.64-674.98-2.46z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M7.41 209.81s71.67-75.62 149.76-72.56 223.57-28.88 223.57-28.88 116.59-22.44 144.4-10.68 70.6 30.3 100.56 30.3 56.69 84.28 56.69 84.28-674.98-8.64-674.98-2.46z",
    fill: "#fff",
    opacity: 0.7
  }), _react.default.createElement("path", {
    d: "M784.85 586.58a6.6 6.6 0 0 1-1.1 8.11 268.81 268.81 0 0 0 43 7.94c3.72.38 8.06.44 10.49-2.4 1.63-1.92 2-4.77 3.81-6.49a9.12 9.12 0 0 1 3.95-1.85c4.48-1.25 9.22-1.88 13.27-4.16s7.32-6.91 6.16-11.41c-1.34-5.18-7.37-7.35-12.56-8.7l-16.17-4.22a167.94 167.94 0 0 0-29.46-5.21c-5.54-.44-14.56-2.81-19.83-.38-6.52 3-3.88 8.86-6.06 14.64-1.07 2.83-6.11 7.17-3.88 10.66 1.27 2 6.32.19 8.38 3.47zM607.18 551.7s-60.11-2.45-42 12 34.59 16.37 42 25.33 9.09 7.6 35.51 10.26 52.55 2.52 53.52-8 3.68-26.81 0-31.57-89.03-8.02-89.03-8.02z",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M1062.78 621.72l2.09-.78-7.36-12.94c4.58-2.89 3.32-7.78 4.52-31.91 1.44-28.93-11.27-30.22-13.19-30.24h-.24c-56.15-30-187.17-32.72-258.29-31.78a21.89 21.89 0 0 0-2.18-8.7 14.84 14.84 0 0 1-1.77-7.12v-.38-1.71s-2.11-20.24-2.21-35.45c.05-6 .46-11 1.52-13.2 1.38-2.84 1.95-10.06 1.9-18.51.1-15.08-2-35.18-5.19-40.86s-12.13-13.37-18.65-19.34a19.74 19.74 0 0 1-6.29-12.33s-1.24 0-3.23.23l-.33-1v-.1a3.83 3.83 0 0 0 2.71-.76 6.29 6.29 0 0 0 1.34-1.69l6.36-10.32a6 6 0 0 0 1.27-3.67c-.23-2.13-2.69-3.86-2.09-5.92.26-.88 1-1.5 1.44-2.32a6.21 6.21 0 0 0 .48-2.58c.12-2.88.08-6.15-2-8.11a3.22 3.22 0 0 1-.94-1.08 3 3 0 0 1 .06-1.54c.53-3-1.06-6.07-3.33-8.09s-5.14-3.18-7.95-4.31-5.93-2.21-8.77-1.21c.13-2.79-3-4.76-5.72-4.75s-5.34 1.31-8 2a37.82 37.82 0 0 1-8.43.94 6.4 6.4 0 0 1-3.11-.4 2.25 2.25 0 0 1-1.27-2.62 2.26 2.26 0 0 0-2.75.35 11.3 11.3 0 0 0-1.78 2.48 11.09 11.09 0 0 1-4 3.74 8.37 8.37 0 0 0 .75-3.85c-1-.65-2.29.17-2.75 1.23a16.7 16.7 0 0 0-.63 3.41c-.62 2.88-3.19 4.94-4.2 7.71a9.33 9.33 0 0 0 1.78 8.79 13.53 13.53 0 0 0 4.17 3.38c-.1.29-.21.58-.3.88a25.81 25.81 0 0 0 14.88 31l.65 1.3c1.46 2.93 3.28 6.76 4.78 10.57l.26.65a21.29 21.29 0 0 0-1.15 2.05s4.13 4.69 0 9.73c0 0-15 11.34-14.52 38.41a79.55 79.55 0 0 0 1.09 13.89 432.3 432.3 0 0 1 5.67 61.34c-2.54 2.17-6.24 10.43-9.42 18.51-184.77-2.23-225.79 30.6-234.79 43.75a13.63 13.63 0 0 0-2.49 5.32c-10.33 22.06 2.58 46.22 2.58 46.22l.84 1.1c24.21 31.16 61.88 46.29 213.5 50.9v.47l-.21 16.5a41.37 41.37 0 0 1-4.45 18 3.33 3.33 0 0 1 0 1v.08c-.25 2.43-2.72 8.55-20.35 12.84 0 0-27.12-4.25-13.08 7.74 12 10.29 47 11 56.7 11.05a2.34 2.34 0 0 0 2.31-2.54l-1.87-21.28-.09-1h.62c-1.2-11.81 6.54-41.87 6.54-41.87a3.53 3.53 0 0 0 .21-.32c9.29.2 18.94.36 29 .49 27.78.36 53.76-.39 77.94-1.95a47 47 0 0 1 4.06 4.9l8.15 14.37 2.09 3.68 2.68 4.72V690l.17 23.47s-23.16 20.25 1.38 14.16l8.9-.89a5.36 5.36 0 0 0 3-1.35 99 99 0 0 0 11 2.57 28.21 28.21 0 0 0 4.64.39 27.06 27.06 0 0 0 22-11.37c12 .37 27 1 45.51 2.06 45.33 2.51 90.5 6.12 90.93 6.16 1.33.13 32.79 3.11 47.28-18.12 12.19-17.63 8.64-46.34-10.38-85.36zM863.26 725.89a98.23 98.23 0 0 1-10-2.3.54.54 0 0 1 0-.11l3-6.79c6.9-.21 16.75-.2 30.81.2a24.49 24.49 0 0 1-23.81 9zm25.28-11c-14.09-.42-24.17-.46-31.41-.25l13.2-30.3a4.65 4.65 0 0 0-.53-4.62c-2.13-2.89-6.22-7.71-10.64-9.24a8.55 8.55 0 0 0-2-.45l-1.39-1.33-.73-.71c6.81-.23 19.5 1.66 31.7 15.77 8.6 10 7.16 21.67 2.94 29.29-.37.57-.74 1.19-1.14 1.79zm183.08-9c-13.8 20.21-45.07 17.27-45.41 17.23s-46.72-3.73-92.61-6.26c-17.14-.94-31.16-1.56-42.66-1.93.18-.3.35-.59.52-.9a27.22 27.22 0 0 0-3.19-31.68c-13.91-16.1-28.56-17-35.21-16.36l-1.43-1.44c-1.55-1.58-3.28-3.38-5-5.29 123.1-11.3 193.05-42.93 203.67-48l1.43-.71 1.63-.6 4.57 13.63 2.93-1.1c18.71 38.35 22.35 66.41 10.76 83.4z",
    transform: "translate(-34 -138.81)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M674.2 586.47a2.31 2.31 0 0 1-2.3 2.5c-9.65 0-44.51-.75-56.5-10.91-14-11.84 13-7.64 13-7.64 17.57-4.24 20-10.28 20.28-12.68a.25.25 0 0 1 0-.08 3.19 3.19 0 0 0 0-1l.7-.41 2.65-1.57 19.89 6 .41 4.71z",
    fill: "#ec8c9c"
  }), _react.default.createElement("path", {
    d: "M832.15 587.6a27.83 27.83 0 0 1-4.61-.38 111.53 111.53 0 0 1-16-4.06c-6.3-2.08-8.62-3.6-8.25-5.45.35-1.7 1-4.9 49.8-3.43.4-.6.78-1.21 1.12-1.82 4.2-7.53 5.65-19.09-2.93-28.92-17.69-20.29-36.42-15-36.61-14.93l-.59-2c.2-.06 20.14-5.79 38.75 15.54a26.7 26.7 0 0 1 3.17 31.31c-.16.3-.34.6-.51.89 11.45.37 25.43 1 42.5 1.91 45.73 2.49 91.84 6.14 92.3 6.18s31.49 2.94 45.24-17c11.76-17.08 7.8-45.49-11.76-84.44l1.84-.93c19.93 39.69 23.84 68.8 11.61 86.54-14.45 21-45.79 18-47.12 17.89-.43 0-45.44-3.6-90.6-6.09-18.49-1-33.38-1.66-45.36-2a27.05 27.05 0 0 1-21.99 11.19zm-26.8-9.51c.28.34 1.5 1.37 6.81 3.11a108.53 108.53 0 0 0 15.71 4 24.54 24.54 0 0 0 23.69-8.89c-37.56-1.12-45.05.67-46.21 1.78z",
    fill: "#535461"
  }), _react.default.createElement("path", {
    d: "M803.43 543.49l-.34 5.15.17 24.27s-23.08 20 1.37 14l8.87-.89a5.43 5.43 0 0 0 4.41-3.2l17-38.7a4.56 4.56 0 0 0-.52-4.56c-2.79-3.75-8.91-10.77-14.75-9.44-7.89 1.79-16.21 13.37-16.21 13.37z",
    fill: "#ec8c9c"
  }), _react.default.createElement("path", {
    d: "M1026 437.29c-1.55 30.88 1 29.85-10.3 34l-1.42.7C1001 478.26 895 525.64 708.51 523.25c-197.74-2.55-241.13-17.2-267.95-51.41-.28-.36-.57-.72-.85-1.09 0 0-12.86-23.85-2.57-45.64a13.64 13.64 0 0 1 2.49-5.26c9.49-13.74 54.72-49.24 267.71-42.44 0 0 226.48-11.66 305.22 30h.24c1.92.05 14.58 1.32 13.2 29.88z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M822.47 530.63l-19.38 18-2.67-4.66-2.08-3.64-8.12-14.14c-13.21-18.35-54.73-39.46-54.73-39.46-8.82-3.64-12.19-7.27-13.47-9.42-1-1.69-2-3.4-3.15-5a67 67 0 0 1-7.34-14.78 119.91 119.91 0 0 1-4.19-14.51c-1-4.29-1.56-8-1.93-10.57-.32-2.3-.45-3.66-.45-3.66l3-10.88 9.38-34.25 35-1.71s.17 19.78.14 37.84v9.88c0 4-.07 7.63-.12 10.66-.09 3.76-.2 6.56-.34 7.84a29.48 29.48 0 0 0-.21 4.7c.25 5.93 2.81 11.7 12 14.68 11.58 3.78 32.51 23.86 34.4 33.12 1.24 6.09 11.38 17.15 18.17 24 1.62 1.63 3 3 4.11 4.06 1.2 1.18 1.98 1.9 1.98 1.9z",
    fill: "#565388"
  }), _react.default.createElement("path", {
    d: "M822.47 530.63l-19.38 18-2.67-4.66-2.08-3.64-8.12-14.14c-13.21-18.35-54.73-39.46-54.73-39.46-8.82-3.64-12.19-7.27-13.47-9.42-1-1.69-2-3.4-3.15-5a67 67 0 0 1-7.34-14.78 119.91 119.91 0 0 1-4.19-14.51c-1-4.29-1.56-8-1.93-10.57-.32-2.3-.45-3.66-.45-3.66l3-10.88 9.38-34.25 35-1.71s.17 19.78.14 37.84v9.88c0 4-.07 7.63-.12 10.66-.09 3.76-.2 6.56-.34 7.84a29.48 29.48 0 0 0-.21 4.7c.25 5.93 2.81 11.7 12 14.68 11.58 3.78 32.51 23.86 34.4 33.12 1.24 6.09 11.38 17.15 18.17 24 1.62 1.63 3 3 4.11 4.06 1.2 1.18 1.98 1.9 1.98 1.9z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M752.45 419.72v9.88c-10.08 2.43-33.84 2.79-47 2.78-.32-2.3-.46-3.66-.46-3.66l3-10.88c13.32 2.4 35.11 2.13 44.46 1.88zM752 448.1a29.41 29.41 0 0 0-.21 4.69c-26.35-2.2-36.47 1.15-40.22 4.67a119.91 119.91 0 0 1-4.19-14.51c10.34-3.16 35-2.93 45-2.69-.17 3.76-.28 6.56-.38 7.84z",
    fill: "#dfe5ee"
  }), _react.default.createElement("path", {
    d: "M672.33 565.45h-.49l-23.16-7.72a.25.25 0 0 1 0-.07c.23-.45.44-.91.66-1.37l2.65-1.57 19.89 6z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M747.84 353.74l3.43 4.63s-.47 5.66 1.74 9.1 10.1 31.05-27 38.94c0 0-21.1 36-35.85 50.27l-5.66 10.64s-1.21 12.52 0 18.52 3.77 24.71-5.15 37.23c0 0-7.72 29.68-6.52 41.35h-1l-23.16-7.72a40.44 40.44 0 0 0 4.41-17.84l.22-16.3v-59.58a64.63 64.63 0 0 1 3.17-20 35.47 35.47 0 0 0 1.76-10.52c.1-7.46 1-21.82 6-32.9 2.46-5.51 4.89-11 7-16.69 3.52-9.44 8.59-21.82 11.79-24.51l5-9.43 26.65 2.57z",
    fill: "#565388"
  }), _react.default.createElement("path", {
    d: "M724 232.88s-32.43 20.15-29.69 14.49c1.15-2.38-.45-7.88-2.71-13.47-1.5-3.76-3.31-7.55-4.76-10.44s-2.65-5.09-2.65-5.09 33.46-20.23 32.25-12.51a22.06 22.06 0 0 0 .69 7.51c.47 2 1.08 4.19 1.77 6.3 2.23 6.87 5.1 13.21 5.1 13.21z",
    fill: "#ec8c9c"
  }), _react.default.createElement("path", {
    d: "M440.56 471.84c-.28-.36-.57-.72-.85-1.09 0 0-12.86-23.85-2.57-45.64a13.64 13.64 0 0 1 2.49-5.26z",
    fill: "#535461"
  }), _react.default.createElement("path", {
    d: "M550.37 451.45a18 18 0 1 1-18-18c.55 0 1.1 0 1.64.07a18 18 0 0 1 16.36 17.93z",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M542.65 460.71l-13.38 4.55-9.58-26.61a18 18 0 0 1 12.67-5.22c.55 0 1.1 0 1.64.07z",
    fill: "#535461"
  }), _react.default.createElement("path", {
    d: "M714.36 210.98c-4.51 7-9.62 14.1-18.61 14.1a25.07 25.07 0 0 1-8.91-1.62c-1.51-3-2.65-5.09-2.65-5.09s33.46-20.23 32.25-12.51c-.29 1.93-2.74 2.21-2.08 5.12z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M721.14 198.66a25.39 25.39 0 0 1-50.78 0 25 25 0 0 1 1-7.07 25.39 25.39 0 0 1 49.77 7.07z",
    fill: "#ec8c9c"
  }), _react.default.createElement("path", {
    d: "M724 232.88s-32.43 20.15-29.69 14.49c1.15-2.38-.45-7.88-2.71-13.47 6.42-10.67 20.65-13.49 27.3-14.23 2.23 6.87 5.1 13.21 5.1 13.21z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M722.45 222.5s-21-1.18-28.75 14.6a14.74 14.74 0 0 1-3 11.13s-19.21 14.41-13.38 49.58a410 410 0 0 1 5.68 62.62s5-4.63 15.79 0 52.49 0 52.49 0-4.46-42.37-.68-50.09 1.52-48.16-3.28-56.57c-3.23-5.65-12.1-13.2-18.59-19.1a19.47 19.47 0 0 1-6.27-12.17z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M722.45 220.44s-24 .34-31.74 16.12c0 0 4.12 4.64 0 9.61 0 0-19.21 14.41-13.38 49.58a410 410 0 0 1 5.67 62.62s5-4.63 15.79 0 52.49 0 52.49 0-4.46-42.37-.68-50.09 1.52-48.16-3.28-56.57c-3.23-5.64-12.1-13.2-18.59-19.1a19.47 19.47 0 0 1-6.27-12.17z",
    fill: "#dfe5ee"
  }), _react.default.createElement("path", {
    d: "M720.71 371.76l-2.71 5.66 2.21 10.88a52.93 52.93 0 0 0 11.69 24.17c5.91 6.83 13 11.5 16.64.63 4.5-13.51 1-20.3-1.9-23.37a65.53 65.53 0 0 1-6.77-8.69c-2.87-4.18-6.87-9.13-11.17-10.85-7.89-3-7.99 1.57-7.99 1.57z",
    fill: "#ec8c9c"
  }), _react.default.createElement("path", {
    d: "M705.64 301.41l-.06 8.15 1.42 15.36a101.07 101.07 0 0 1 6.58 19c3 12 3.37 35.52 3.37 35.52s15.89-5.11 19-3.57c0 0 .92-35-2.34-46s-1.89-25.88-1.89-25.88z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M706.67 299.36L705 309.99l3 12.87a101.07 101.07 0 0 1 6.58 19c3 12 3.37 35.52 3.37 35.52s14.75-4 17.84-2.41c0 0 2.06-36.19-1.2-47.17s-1.89-25.89-1.89-25.89z",
    fill: "#565388"
  }), _react.default.createElement("path", {
    d: "M721.14 198.66a25.32 25.32 0 0 1-9.55 19.84l-1.28-.43a5.18 5.18 0 0 1-1.7-.83 4.4 4.4 0 0 1-1.21-2.05c-.93-2.76-1.21-5.72-2.25-8.46s-3.11-5.35-6-5.83a1.35 1.35 0 0 0-.95.11 1.71 1.71 0 0 0-.57 1.07 8.44 8.44 0 0 1-5.07 5.51c-1.51.56-4.19 1-5.63 0-1.25-.87-1.21-2.35-1.51-3.72-.81-3.77-2.66-7.58-6.32-9.29a30.24 30.24 0 0 0-3.84-1.26 18.34 18.34 0 0 1-3.9-1.65 25.39 25.39 0 0 1 49.77 7.07z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M679.11 193.47a29.37 29.37 0 0 0-3.85-1.26 15.7 15.7 0 0 1-7.75-4.82 9.18 9.18 0 0 1-1.78-8.69c1-2.73 3.57-4.77 4.18-7.62a17.7 17.7 0 0 1 .63-3.35c.46-1.05 1.8-1.86 2.75-1.22a8.16 8.16 0 0 1-.75 3.8 11.18 11.18 0 0 0 4-3.69 10.32 10.32 0 0 1 1.76-2.43 2.24 2.24 0 0 1 2.74-.34 2.21 2.21 0 0 0 1.26 2.58 6.5 6.5 0 0 0 3.1.4 38.78 38.78 0 0 0 8.41-.94c2.66-.7 5.23-2 8-2s5.84 1.93 5.71 4.69c2.83-1 5.93.11 8.73 1.22s5.66 2.27 7.92 4.26 3.85 5 3.31 8a2.92 2.92 0 0 0-.05 1.52 3.06 3.06 0 0 0 .93 1.07c2.09 1.93 2.12 5.17 2 8a6 6 0 0 1-.47 2.54c-.41.81-1.18 1.42-1.44 2.29-.6 2 1.85 3.74 2.09 5.85a5.93 5.93 0 0 1-1.27 3.62l-6.36 10.24a6.41 6.41 0 0 1-1.33 1.68c-1.64 1.3-4 .68-6 0l-5.26-1.79a5.33 5.33 0 0 1-1.69-.83 4.5 4.5 0 0 1-1.21-2.08c-.94-2.77-1.21-5.73-2.24-8.47s-3.11-5.35-6-5.82a1.3 1.3 0 0 0-.95.1 1.71 1.71 0 0 0-.57 1.07 8.42 8.42 0 0 1-5.07 5.51c-1.51.56-4.19 1-5.63 0-1.25-.88-1.21-2.36-1.51-3.74-.83-3.83-2.68-7.63-6.34-9.35z",
    fill: "#603456"
  }), _react.default.createElement("ellipse", {
    cx: 915.29,
    cy: 400.49,
    rx: 21.62,
    ry: 9.26,
    fill: "#535461"
  }), _react.default.createElement("ellipse", {
    cx: 915.29,
    cy: 488.25,
    rx: 21.62,
    ry: 9.26,
    fill: "#535461"
  }), _react.default.createElement("ellipse", {
    cx: 975.51,
    cy: 442.95,
    rx: 21.62,
    ry: 9.26,
    fill: "#535461"
  }), _react.default.createElement("path", {
    d: "M1026 437.29c-1.55 30.88 1 29.85-10.3 34l-1.42.7-1.43-64.52c1.87-.01 14.53 1.26 13.15 29.82z",
    fill: "#535461"
  }), _react.default.createElement("path", {
    fill: "#535461",
    d: "M1015.91 466.63l5.92 17.5 6.95-2.58-10.81-18.78-2.06 3.86z"
  }), _react.default.createElement("path", {
    d: "M703.06 250.43s-17.15-2.54-7.37 38.12c0 0 8.06 20.58 8.23 23.5 0 0 15.27-11.32 27.45-2.74 0 0 2.4-24.88-3.77-36.55 0 0-4.17-28.39-24.54-22.33z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M704.09 248.37s-17.15-2.54-7.37 38.12c0 0 8.06 20.59 8.23 23.5 0 0 15.27-11.32 27.45-2.74 0 0 2.4-24.88-3.77-36.55 0 0-4.17-28.39-24.54-22.33z",
    fill: "#dfe5ee"
  }), _react.default.createElement("path", {
    d: "M703.24 288.38s5.66-3.78 6.52-6.18 5.51 1.89 3.52 3.95-10.04 2.23-10.04 2.23z",
    fill: "#565388"
  }), _react.default.createElement("path", {
    d: "M820.39 528.66l-20 15.32-2.08-3.64 17.94-15.74c1.65 1.59 3.07 3.03 4.14 4.06z",
    fill: "#535461"
  }), _react.default.createElement("path", {
    d: "M734.34 267.6s5.85 23.37 3.45 31.76M803.09 548.64v1.09l20.7-19.31-1.32.21-19.38 18.01zM692.67 241.86s25.77-7.67 31.33-13.67",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M158.27 437.19c34-.27 62.79-7.31 83.38-6.88s39.12-.78 58.68 3.43M53.07 389.19c34-.26 62.79-7.3 83.38-6.87s39.11-.78 58.67 3.43M269.24 532.81c34-.4 62.79-11.08 83.38-10.42s39.11-1.19 58.67 5.2M284.88 482.54c34-.75 62.8-21 83.38-19.75s39.12-2.26 58.68 9.85M344.93 247.19c34-.13 62.79-3.65 83.38-3.44s39.12-.39 58.68 1.72M142.83 231.59c34-.13 62.79-3.65 83.38-3.43s39.12-.4 58.67 1.71M273.9 311.72c34-.14 62.8-3.66 83.38-3.44s39.12-.39 58.68 1.71M71.8 269.32c34-.13 62.8-3.65 83.38-3.44s39.12-.39 58.68 1.72",
    fill: primaryColor,
    opacity: 0.1
  }));
};

UndrawSurfer.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawSurfer;
exports.default = _default;