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

var UndrawSantaClaus = function UndrawSantaClaus(_props) {
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
    viewBox: "0 0 392.6 794",
    style: style
  }, props), _react.default.createElement("path", {
    d: "M196.3 0a25.14 25.14 0 0 0-25 28.3 24.82 24.82 0 0 0 2.82 8.7 25.64 25.64 0 0 0 1.69 2.75 25.2 25.2 0 0 0 31.42 8 22.14 22.14 0 0 0 2.48-1.38A25.16 25.16 0 0 0 196.3 0zm0 21.39a7.55 7.55 0 1 1 7.55-7.55 7.55 7.55 0 0 1-7.55 7.55z",
    fill: "#eeeff0"
  }), _react.default.createElement("path", {
    d: "M176.17 11.32l-.36 28.47a25.64 25.64 0 0 1-1.69-2.79zM210.14 11.32l-.43 35.14a22.14 22.14 0 0 1-2.48 1.38z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M221.3 28.3a25.17 25.17 0 0 1-49.94 0 58 58 0 0 1 49.94 0z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M254.18 83.05a58.27 58.27 0 0 1-1.41 12.75 57.28 57.28 0 0 1-9.47 21 59.59 59.59 0 0 1-5 6 57.81 57.81 0 0 1-29.28 16.66 51.57 51.57 0 0 1-6.11 1 53.83 53.83 0 0 1-6.64.39 57.82 57.82 0 0 1-21.19-4 53.43 53.43 0 0 1-5.65-2.58 58.06 58.06 0 0 1-27.9-32.44 54.73 54.73 0 0 1-1.73-6.11c-.36-1.59-.65-3.2-.87-4.84a59 59 0 0 1-.54-7.91 57.9 57.9 0 0 1 2.51-16.91c.33-1.11.71-2.2 1.11-3.29A57.89 57.89 0 0 1 244.1 50.42a57.62 57.62 0 0 1 10.08 32.63z",
    fill: "#eeeff0"
  }), _react.default.createElement("path", {
    d: "M142.04 62.85l-.48 39.06a54.73 54.73 0 0 1-1.73-6.11c-.36-1.59-.65-3.2-.87-4.84l2-24.82c.34-1.14.68-2.2 1.08-3.29zM176.17 50.33l-1.06 86.6a53.43 53.43 0 0 1-5.65-2.58zM210.14 50.33l-1.09 89.19a51.57 51.57 0 0 1-6.11 1zM244.12 50.33v.1l-.82 66.42a59.59 59.59 0 0 1-5 6l5.77-72.44z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M252.77 95.8a57.89 57.89 0 0 1-112.94 0 112.05 112.05 0 0 1 112.94 0z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M308.3 195a111.49 111.49 0 0 1-27.68 73.71c-2.36 2.68-4.82 5.25-7.41 7.69a111.56 111.56 0 0 1-47 26.55c-2.89.82-5.85 1.5-8.83 2.05a112.48 112.48 0 0 1-45.29-.65c-2.92-.63-5.8-1.4-8.63-2.27a111.7 111.7 0 0 1-45.2-26.82 99.677 99.677 0 0 1-6.83-7.25A112 112 0 1 1 308.3 195z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M118.22 275.3l1.31-140.66-8.14 133.41 6.83 7.25zM173.64 134.64l-1.59 169.75c-2.92-.63-5.8-1.4-8.63-2.27zM227.75 134.64L226.17 303c-2.89.82-5.85 1.5-8.83 2.05zM280.61 268.75l1.24-134.11-8.66 141.8 7.42-7.69z"
  }), _react.default.createElement("ellipse", {
    cx: 196.3,
    cy: 403.29,
    rx: 173.65,
    ry: 176.79,
    fill: "#eeeff0"
  }), _react.default.createElement("path", {
    d: "M369.95 403.29a178.6 178.6 0 0 1-15.84 73.87c-27.47 60.76-87.81 102.93-157.81 102.93S65.96 537.92 38.49 477.16a178.6 178.6 0 0 1-15.84-73.87c0-97.64 77.74-176.79 173.65-176.79s173.65 79.15 173.65 176.79z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M69.21 315.84L52.85 520.95H66.7l2.51-205.11zM93.11 315.84L76.75 520.95H90.6l2.51-205.11zM308.29 315.84l-16.36 205.11h13.85l2.51-205.11zM332.19 315.84l-16.36 205.11h13.85l2.51-205.11z"
  }), _react.default.createElement("path", {
    d: "M354.11 477.16c-27.47 60.76-87.81 102.93-157.81 102.93S65.96 537.92 38.49 477.16a196.33 196.33 0 0 1 315.62 0z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M392.6 597.7a195.47 195.47 0 0 1-51 132q-5.35 5.93-11.22 11.4a196.5 196.5 0 0 1-43.28 30.71q-6.39 3.36-13.08 6.24a194.78 194.78 0 0 1-41.2 12.59q-6.84 1.29-13.82 2.09a195.77 195.77 0 0 1-22.7 1.27q-8.91 0-17.6-.78c-4.62-.42-9.2-1-13.72-1.71a193.83 193.83 0 0 1-40.28-11q-6.52-2.51-12.82-5.51a195.57 195.57 0 0 1-41-26.25q-5.66-4.68-10.93-9.79a195.58 195.58 0 0 1-60-141.22q0-8.91.78-17.61c8.91-100.17 93-178.69 195.52-178.69s186.61 78.52 195.52 178.69q.82 8.66.83 17.57z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M72.97 526L70.9 748.71q-5.66-4.68-10.93-9.79zM127.08 526l-2.38 254.52q-6.52-2.52-12.82-5.52zM178.69 793.22l2.5-267.24-16.21 265.53 13.71 1.71zM232.83 790.6l2.46-264.62-16.28 266.71 13.82-2.09zM289.4 526l-2.29 245.79q-6.39 3.36-13.08 6.24zM343.51 526l-1.9 203.68q-5.35 5.93-11.22 11.4zM302 300.74c0 57-47.32 103.18-105.7 103.18S90.6 357.73 90.6 300.74a101.19 101.19 0 0 1 3.91-27.89c10.4-36.27 40.6-64.47 78.52-72.78a109.12 109.12 0 0 1 46.54 0c37.92 8.31 68.12 36.51 78.52 72.78a101.19 101.19 0 0 1 3.91 27.89z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M299.48 298.22a103 103 0 1 1-3.81-27.88 103.17 103.17 0 0 1 3.81 27.88z",
    fill: "#ffab9e"
  }), _react.default.createElement("rect", {
    x: 84.31,
    y: 192.52,
    width: 223.98,
    height: 72.98,
    rx: 12,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M295.67 270.34a16.93 16.93 0 0 1-2.48.2H99.41a16.93 16.93 0 0 1-2.48-.2 103.3 103.3 0 0 1 76.66-72.78h45.42a103.3 103.3 0 0 1 76.66 72.78z",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 84.31,
    y: 195.04,
    width: 223.98,
    height: 72.98,
    rx: 15.1,
    fill: "#eeeff0"
  }), _react.default.createElement("circle", {
    cx: 196.3,
    cy: 442.93,
    r: 127.09,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 196.3,
    cy: 440.41,
    r: 127.09,
    fill: "#eeeff0"
  }), _react.default.createElement("path", {
    d: "M323.39 440.41A127.18 127.18 0 0 1 247.05 557a119.32 119.32 0 0 1-11.88 4.48 124.9 124.9 0 0 1-22.21 5c-4 .53-8.1.87-12.24 1-1.48.05-2.95.07-4.42.07a128.27 128.27 0 0 1-17.31-1.17 120.55 120.55 0 0 1-12-2.23 124 124 0 0 1-21.87-7.33 116.8 116.8 0 0 1-11.08-5.54A125.31 125.31 0 0 1 111.43 535a127.09 127.09 0 1 1 212-94.59z",
    opacity: 0.03
  }), _react.default.createElement("path", {
    d: "M247.89 345.48c0 9.67-23.1 29.43-51.59 29.43s-51.59-19.76-51.59-29.43 23.1-5.62 51.59-5.62 51.59-4.06 51.59 5.62z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M245.37 346c0 9.2-22 28-49.07 28s-49.07-18.79-49.07-28 22-5.34 49.07-5.34 49.07-3.83 49.07 5.34z",
    fill: "#ffab9e"
  }), _react.default.createElement("path", {
    d: "M229.02 349.68c0 6.14-14.65 18.66-32.72 18.66s-32.72-12.52-32.72-18.66 14.65-3.56 32.72-3.56 32.72-2.58 32.72 3.56z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M392.6 595.19a196.43 196.43 0 0 1-5.25 45.29H5.3a196.43 196.43 0 0 1-5.25-45.29q0-8.91.78-17.62h391q.76 8.7.77 17.62z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M392.6 600.22a196.58 196.58 0 0 1-5.25 45.3H5.3a196.58 196.58 0 0 1-5.25-45.3q0-8.91.78-17.62h391q.76 8.7.77 17.62z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M392.6 597.7a196.51 196.51 0 0 1-5.25 45.3H5.3a196.51 196.51 0 0 1-5.25-45.3q0-8.91.78-17.61h391q.76 8.7.77 17.61z",
    fill: "#373e46"
  }), _react.default.createElement("circle", {
    cx: 138.42,
    cy: 288.16,
    r: 13.84,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 138.42,
    cy: 286.9,
    r: 13.84,
    fill: "#eeeff0"
  }), _react.default.createElement("circle", {
    cx: 254.18,
    cy: 288.16,
    r: 13.84,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 254.18,
    cy: 286.9,
    r: 13.84,
    fill: "#eeeff0"
  }), _react.default.createElement("circle", {
    cx: 138.42,
    cy: 286.9,
    r: 6.29,
    fill: "#373e46"
  }), _react.default.createElement("circle", {
    cx: 254.18,
    cy: 286.9,
    r: 6.29,
    fill: "#373e46"
  }), _react.default.createElement("circle", {
    cx: 139.67,
    cy: 284.38,
    r: 1.26,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 251.66,
    cy: 284.38,
    r: 1.26,
    fill: "#fff"
  }), _react.default.createElement("ellipse", {
    cx: 196.3,
    cy: 315.84,
    rx: 17.62,
    ry: 23.91,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 196.3,
    cy: 312.06,
    rx: 17.62,
    ry: 23.91,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 196.3,
    cy: 313.32,
    rx: 17.62,
    ry: 23.91,
    fill: "#ffab9e"
  }), _react.default.createElement("circle", {
    cx: 196.3,
    cy: 611.54,
    r: 44.04,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 196.3,
    cy: 611.54,
    r: 41.52,
    fill: "#eeeff0"
  }), _react.default.createElement("circle", {
    cx: 196.3,
    cy: 611.54,
    r: 32.72,
    fill: "#373e46"
  }), _react.default.createElement("circle", {
    cx: 120.8,
    cy: 315.84,
    r: 8.81,
    fill: "#f75842",
    opacity: 0.3
  }), _react.default.createElement("circle", {
    cx: 271.8,
    cy: 315.84,
    r: 8.81,
    fill: "#f75842",
    opacity: 0.3
  }), _react.default.createElement("path", {
    d: "M113.24 386.3L111.43 535a127.21 127.21 0 0 1-9.32-9.26zM147.21 386.3l-2.07 170.47a116.8 116.8 0 0 1-11.08-5.54zM181.19 386.3l-2.2 180a120.55 120.55 0 0 1-12-2.23zM215.16 386.3l-2.2 180.12c-4 .53-8.1.87-12.24 1zM249.14 386.3L247.05 557a119.32 119.32 0 0 1-11.88 4.48zM283.11 386.3l-1.81 148.59a127.81 127.81 0 0 1-10.73 8.67zM116.61 268.02l2.92-47.81-.44 47.81h-2.48zM173.19 268.02l.45-47.81-2.92 47.81h2.47zM227.74 220.21l-.45 47.81h-2.47l2.92-47.81zM278.93 268.02l2.92-47.81-.44 47.81h-2.48z",
    opacity: 0.1
  }));
};

UndrawSantaClaus.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawSantaClaus;
exports.default = _default;