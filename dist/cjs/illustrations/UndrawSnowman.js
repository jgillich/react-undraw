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

var UndrawSnowman = function UndrawSnowman(_props) {
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
    viewBox: "0 0 566.04 759.48",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 601.75,
    y1: 829.74,
    x2: 601.75,
    y2: 120.23,
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
    x1: 602.33,
    y1: 155.81,
    x2: 602.33,
    y2: 70.26,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 396.02,
    y1: 304.93,
    x2: 396.02,
    y2: 70.55,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 803.94,
    y1: 304.1,
    x2: 803.94,
    y2: 103.3,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M761.32 396.69a163.62 163.62 0 0 0 3.32-32.89c0-65-37.3-112.42-92.39-138.55 4.85-10.11 6.77-16.59 6.77-28.55 0-42.68-37.49-76.47-80.16-76.47S523.35 154 523.35 196.7c0 12 1 7.1 4.37 29.68-55.09 26.12-88.86 72.39-88.86 137.42 0 2.22.06 4.42.14 6.61a5.43 5.43 0 0 0 .18 3.55 163 163 0 0 0 3 22.73C398.92 443 372 508 372 580c0 140.72 102.85 249.79 229.73 249.79S831.47 720.67 831.47 580c0-72-26.9-137-70.15-183.31z",
    transform: "translate(-316.98 -70.26)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M435.92 330.31a154.54 154.54 0 0 0-85.13-170.64 73.19 73.19 0 1 0-132 0 154.31 154.31 0 0 0-88.27 139.49c0 2.1.05 4.18.14 6.26a5.14 5.14 0 0 0 .17 3.36 154.4 154.4 0 0 0 2.84 21.53c-41 43.89-66.45 105.43-66.45 173.59 0 133.29 97.42 241.34 217.6 241.34s217.6-108.05 217.6-241.34c-.05-68.16-25.54-129.7-66.5-173.59z",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 252.36,
    cy: 104.9,
    r: 6.94,
    fill: "#263238"
  }), _react.default.createElement("circle", {
    cx: 307.92,
    cy: 104.9,
    r: 6.94,
    fill: "#263238"
  }), _react.default.createElement("path", {
    d: "M218.79 159.3s50.93 57.87 57.87 96.07l24.36-10.42-34.72-62.5s56.71 3.47 84.49-23.15z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M274.35 127.08v63.29a4.81 4.81 0 0 0 4.81 4.81 4.81 4.81 0 0 0 4.8-4.43l5-63.29a4.81 4.81 0 0 0-4.8-5.19h-5a4.81 4.81 0 0 0-4.81 4.81z",
    fill: "#ff6e40"
  }), _react.default.createElement("path", {
    d: "M650 127.16V88.54a17.32 17.32 0 0 0-24.19-15.89c-16.28 7-30.64 4.39-41.57-.7a17.38 17.38 0 0 0-24.82 13.91l-4.43 41.31H540.3v28.65h124v-28.66z",
    transform: "translate(-316.98 -70.26)",
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M225.74 59.76h119.22v21.99H225.74z"
  }), _react.default.createElement("path", {
    d: "M268.82 5.33a44.78 44.78 0 0 0 37.88.64 15.78 15.78 0 0 1 22 14.48v41.63h-86.76l4.27-44.07a15.84 15.84 0 0 1 22.61-12.68z",
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 281.3,
    cy: 292.41,
    r: 8.1,
    fill: "#263238"
  }), _react.default.createElement("circle", {
    cx: 281.3,
    cy: 319.03,
    r: 8.1,
    fill: "#263238"
  }), _react.default.createElement("circle", {
    cx: 281.3,
    cy: 345.65,
    r: 8.1,
    fill: "#263238"
  }), _react.default.createElement("circle", {
    cx: 281.3,
    cy: 372.27,
    r: 8.1,
    fill: "#263238"
  }), _react.default.createElement("path", {
    d: "M470.88 292.87a167.92 167.92 0 0 1-98.23-87.26c23.45-1 41.47-18.9 50.53-39.69C435 138.69 438.46 107 444.52 78.15c1.6-7.63-10.11-10.89-11.71-3.23-5.17 24.67-9 50.14-16.38 74.26-6.57 21.5-21.43 44.68-46.6 44.33a6.14 6.14 0 0 0-2.24.39 170.35 170.35 0 0 1-10.2-83.9c1-7.74-11.15-7.64-12.15 0a177.66 177.66 0 0 0 1.76 56.76 42.18 42.18 0 0 0-27.22 6.68c-6.53 4.26-.43 14.78 6.13 10.49a30.32 30.32 0 0 1 24-4.46 182.27 182.27 0 0 0 117.74 125.11c7.44 2.5 10.6-9.24 3.23-11.71z",
    transform: "translate(-316.98 -70.26)",
    fill: "url(#prefix__c)"
  }), _react.default.createElement("path", {
    d: "M154.55 219.43a159.24 159.24 0 0 1-93.15-82.75c22.23-1 39.33-17.93 47.92-37.64 11.25-25.82 14.49-55.83 20.24-83.24 1.52-7.23-9.59-10.33-11.11-3.06-4.9 23.39-8.55 47.55-15.53 70.42-6.23 20.39-20.32 42.37-44.19 42a5.83 5.83 0 0 0-2.13.37 161.54 161.54 0 0 1-9.66-79.58c1-7.34-10.57-7.25-11.52 0a168.48 168.48 0 0 0 1.6 53.9 40 40 0 0 0-25.82 6.34c-6.19 4-.41 14 5.81 9.95a28.75 28.75 0 0 1 22.77-4.23 172.85 172.85 0 0 0 111.7 118.63c7.06 2.37 10.06-8.8 3.07-11.11z",
    fill: "#795548"
  }), _react.default.createElement("path", {
    d: "M880.22 172.57a42.2 42.2 0 0 0-27.22-6.69 177.74 177.74 0 0 0 1.75-56.81c-1-7.65-13.17-7.75-12.15 0 10.46 80-36.75 157.26-113.53 183-7.38 2.47-4.22 14.21 3.23 11.72A182.34 182.34 0 0 0 850.07 178.6a30.33 30.33 0 0 1 24 4.46c6.59 4.29 12.69-6.23 6.15-10.49z",
    transform: "translate(-316.98 -70.26)",
    fill: "url(#prefix__d)"
  }), _react.default.createElement("path", {
    d: "M554.75 106.19a40 40 0 0 0-25.82-6.34A168.48 168.48 0 0 0 530.59 46c-.95-7.25-12.48-7.34-11.52 0 9.92 75.87-34.83 149.07-107.62 173.44-7 2.34-4 13.47 3.06 11.11A172.85 172.85 0 0 0 526.17 111.9a28.75 28.75 0 0 1 22.77 4.23c6.23 4.07 12.01-5.9 5.81-9.94z",
    fill: "#795548"
  }));
};

UndrawSnowman.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawSnowman;
exports.default = _default;