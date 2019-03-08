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

var UndrawFrozenFigure = function UndrawFrozenFigure(_props) {
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
    d: "M110.67 267.75l1.31-140.66-8.14 133.41 6.83 7.25zM166.09 127.09l-1.59 169.75c-2.92-.63-5.8-1.4-8.63-2.27zM220.2 127.09l-1.58 168.35c-2.89.82-5.85 1.5-8.83 2.05zM273.06 261.2l1.24-134.11-8.66 141.8 7.42-7.69z"
  }), _react.default.createElement("path", {
    d: "M392.6 597.7a195.47 195.47 0 0 1-51 132q-5.35 5.93-11.22 11.4c-1.1 1-2.21 2-3.33 3a1.37 1.37 0 0 1-.25.23c-.61.57-1.23 1.11-1.85 1.63a195.76 195.76 0 0 1-37.85 25.83q-2.67 1.41-5.41 2.73c-2.53 1.23-5.08 2.4-7.67 3.51-1.74.75-3.5 1.47-5.26 2.17a193.87 193.87 0 0 1-35.94 10.42c-1.79.34-3.59.66-5.4.93-2.78.46-5.6.85-8.42 1.16-1.71.2-3.43.38-5.16.53q-8.67.78-17.55.78t-17.6-.78c-1.8-.16-3.6-.35-5.39-.57-2.79-.31-5.57-.7-8.33-1.14-1.7-.28-3.38-.57-5.07-.88a194.24 194.24 0 0 1-35.21-10.11c-1.81-.7-3.6-1.43-5.38-2.21q-3.76-1.57-7.44-3.35c-1.67-.8-3.35-1.62-5-2.48a195 195 0 0 1-36-23.77c-1.82-1.49-3.59-3-5.35-4.59s-3.75-3.42-5.58-5.2c-1.64-1.58-3.26-3.19-4.84-4.84A195.53 195.53 0 0 1 0 597.7q0-8.91.78-17.61c8.91-100.17 93-178.69 195.52-178.69s186.61 78.52 195.52 178.69q.77 8.7.78 17.61z",
    fill: "#eeeff0"
  }), _react.default.createElement("path", {
    d: "M392.6 597.7a195.47 195.47 0 0 1-51 132q-5.35 5.93-11.22 11.4c-1.1 1-2.21 2-3.33 3a1.37 1.37 0 0 1-.25.23c-.61.57-1.23 1.11-1.85 1.63a195.76 195.76 0 0 1-37.85 25.83q-2.67 1.41-5.41 2.73c-2.53 1.23-5.08 2.4-7.67 3.51-1.74.75-3.5 1.47-5.26 2.17a193.87 193.87 0 0 1-35.94 10.42c-1.79.34-3.59.66-5.4.93-2.78.46-5.6.85-8.42 1.16-1.71.2-3.43.38-5.16.53q-8.67.78-17.55.78t-17.6-.78c-1.8-.16-3.6-.35-5.39-.57-2.79-.31-5.57-.7-8.33-1.14-1.7-.28-3.38-.57-5.07-.88a194.24 194.24 0 0 1-35.21-10.11c-1.81-.7-3.6-1.43-5.38-2.21q-3.76-1.57-7.44-3.35c-1.67-.8-3.35-1.62-5-2.48a195 195 0 0 1-36-23.77c-1.82-1.49-3.59-3-5.35-4.59s-3.75-3.42-5.58-5.2c-1.64-1.58-3.26-3.19-4.84-4.84A195.53 195.53 0 0 1 0 597.7q0-8.91.78-17.61a196.3 196.3 0 0 1 190.35-178.61c1.72-.05 3.45-.08 5.17-.08q6.19 0 12.27.38a196.3 196.3 0 0 1 183.25 178.31q.77 8.7.78 17.61z",
    opacity: 0.03
  }), _react.default.createElement("path", {
    d: "M330.76 454.67c-12.14 5-28.32 9.13-47.23 12.12l-2.49.39a439.46 439.46 0 0 1-51.67 4.45c-.91 0-1.81.06-2.73.08q-6.29.16-12.72.16-7 0-13.85-.19-6.82.2-13.81.19c-3.68 0-7.35 0-11-.11l-2.72-.08a444.75 444.75 0 0 1-51.35-4.2l-2.49-.37c-21-3.18-38.71-7.79-51.49-13.35l-1.75-.79-1.17-.55a195.5 195.5 0 0 1 126.84-50.94 36.85 36.85 0 0 0 8.93 4.24 38.65 38.65 0 0 0 8.5-3.94 195.66 195.66 0 0 1 122.2 52.89zM67.54 531l-2 213.11c-1.89-1.7-3.75-3.42-5.58-5.2-1.64-1.58-3.26-3.19-4.84-4.84zM121.64 531l-2.34 247.31q-3.76-1.57-7.44-3.35c-1.67-.8-3.35-1.62-5-2.48zM175.75 531l-2.45 261.65c-2.79-.31-5.57-.7-8.33-1.14-1.7-.28-3.38-.57-5.07-.88zM229.86 531l-2.43 260.52c-2.78.46-5.6.85-8.42 1.16-1.71.2-3.43.38-5.16.53zM283.97 531l-2.27 243.5c-2.53 1.23-5.08 2.4-7.67 3.51-1.74.75-3.5 1.47-5.26 2.17zM338.07 531l-1.9 203.69q-5.37 5.92-11.23 11.4z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M72.98 427.83c0 21.54 63.1 39 140.94 39s140.93-17.47 140.93-39-140.93-65.43-140.93-39-140.94 17.46-140.94 39z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M354.85 427.83c0 6.74-6.19 13.09-17.08 18.63l-1.73.85c-12.54 6-30.71 11-52.51 14.44l-2.49.39a439.36 439.36 0 0 1-51.67 4.46c-.91 0-1.81.06-2.73.07q-6.29.18-12.72.17-7 0-13.85-.19c-8.49-.23-16.77-.67-24.75-1.3l-2.64-.21a346.67 346.67 0 0 1-51.39-7.93l-2.2-.53c-28.3-7.15-46.06-17.43-46.06-28.85 0-17.37 91.57-14.91 127.08-27.14 8.55-2.95 13.85-6.75 13.85-11.87-.04-26.42 140.89 17.47 140.89 39.01z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M327.17 427.83c0 11.1-16.74 21.1-43.59 28.21l-2.22.57a335.16 335.16 0 0 1-52 8.36l-2.64.23c-8.57.72-17.49 1.21-26.67 1.45q-6.82.18-13.81.19c-3.68 0-7.35 0-11-.12l-2.72-.07a444.75 444.75 0 0 1-51.35-4.2c-.84-.13-1.67-.26-2.49-.37-21-3.18-38.71-7.79-51.49-13.35l-1.75-.79c-12.8-5.87-20.16-12.75-20.16-20.11 0-21.54 140.93-65.43 140.93-39 0 5.12 5.3 8.92 13.83 11.87 35.54 12.22 127.13 9.76 127.13 27.13z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M299.48 298.22a103 103 0 1 1-3.81-27.88 103.17 103.17 0 0 1 3.81 27.88z",
    fill: "#eeeff0"
  }), _react.default.createElement("path", {
    d: "M299.48 298.22a103 103 0 1 1-3.81-27.88 103.17 103.17 0 0 1 3.81 27.88z",
    opacity: 0.03
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
  }), _react.default.createElement("circle", {
    cx: 196.3,
    cy: 505.84,
    r: 25.17,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 196.3,
    cy: 567.5,
    r: 25.17,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 196.3,
    cy: 629.16,
    r: 25.17,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 196.3,
    cy: 690.82,
    r: 25.17,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 196.3,
    cy: 752.48,
    r: 25.17,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 196.3,
    cy: 505.84,
    r: 22.65,
    fill: "#373e46"
  }), _react.default.createElement("circle", {
    cx: 196.3,
    cy: 567.5,
    r: 22.65,
    fill: "#373e46"
  }), _react.default.createElement("circle", {
    cx: 196.3,
    cy: 629.16,
    r: 22.65,
    fill: "#373e46"
  }), _react.default.createElement("circle", {
    cx: 196.3,
    cy: 690.82,
    r: 22.65,
    fill: "#373e46"
  }), _react.default.createElement("circle", {
    cx: 196.3,
    cy: 752.48,
    r: 22.65,
    fill: "#373e46"
  }), _react.default.createElement("path", {
    d: "M250.41 352.33c0 6.25-24.22 26.42-54.11 26.42s-54.11-20.17-54.11-26.42c0-2.91 5.22-2.3 13.81-.82 9.9 1.71 24.29 4.59 40.3 4.59s30.4-2.88 40.3-4.59c8.59-1.51 13.81-2.09 13.81.82z",
    fill: "#373e46"
  }), _react.default.createElement("path", {
    d: "M196.3 382.53a10.07 10.07 0 0 1-10.07-10.07l4.71-73a5.36 5.36 0 0 1 5.36-5 5.36 5.36 0 0 1 5.36 5l4.71 73a10.07 10.07 0 0 1-10.07 10.07z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M196.3 380a10.06 10.06 0 0 1-10.07-10l4.71-73a5.37 5.37 0 0 1 5.36-5 5.37 5.37 0 0 1 5.36 5l4.71 73a10.06 10.06 0 0 1-10.07 10z",
    fill: primaryColor
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
    opacity: 0.1,
    d: "M67.21 448.73l.32-34.74-2.07 33.95 1.75.79zM121.64 414l-.4 43.22-.05 5.24c-.84-.13-1.67-.26-2.49-.37l.34-5.4zM175.75 414l-.45 51.35v1.37l-2.72-.07.09-1.51zM229.86 414l-.48 51v1.63c-.91 0-1.81.06-2.73.07l.1-1.47zM283.97 414l-.39 42v5.71l-2.49.39.32-5.53zM337.77 446.46l.3-32.47-2.04 33.32 1.74-.85zM109.06 260.47l2.92-47.81-.44 47.81h-2.48zM165.65 260.47l.44-47.81-2.92 47.81h2.48zM220.19 212.66l-.45 47.81h-2.47l2.92-47.81zM271.38 260.47l2.92-47.81-.44 47.81h-2.48z"
  }));
};

UndrawFrozenFigure.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawFrozenFigure;
exports.default = _default;