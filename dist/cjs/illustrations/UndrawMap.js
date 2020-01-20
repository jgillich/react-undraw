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

var UndrawMap = function UndrawMap(_props) {
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
    viewBox: "0 0 923.8 753.71",
    style: style
  }, props), _react.default.createElement("ellipse", {
    cx: 1007.29,
    cy: 789.73,
    rx: 19.99,
    ry: 48.53,
    transform: "rotate(-45 849.945 919.851)",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 872.63,
    cy: 705.7,
    rx: 10.73,
    ry: 14.05,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 872.63,
    cy: 688.53,
    rx: 10.73,
    ry: 14.05,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 872.63,
    cy: 671.36,
    rx: 10.73,
    ry: 14.05,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 872.63,
    cy: 654.19,
    rx: 10.73,
    ry: 14.05,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 872.63,
    cy: 637.02,
    rx: 10.73,
    ry: 14.05,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 872.63,
    cy: 619.85,
    rx: 10.73,
    ry: 14.05,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 872.63,
    cy: 602.68,
    rx: 10.73,
    ry: 14.05,
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M912.8 485.18a51.13 51.13 0 0 0 4-5.88l-28.2-4.63 30.5.22a51.54 51.54 0 0 0 1-40.73l-40.91 21.23 37.71-27.74a51.41 51.41 0 1 0-84.9 57.53 51.16 51.16 0 0 0-5.86 9.37l36.6 19-39-13.1a51.45 51.45 0 0 0 8.29 48.27 51.4 51.4 0 1 0 80.8 0 51.41 51.41 0 0 0 0-63.56z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M821 516.96a51.16 51.16 0 0 0 11 31.78 51.4 51.4 0 1 0 80.8 0c6.89-8.74-91.8-37.55-91.8-31.78z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "#444053",
    d: "M846.97 0v720l-244-34-296.61 60.51-2.39.49-236-65V56l245-56 268 56 10.19-2.15L846.97 0z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M805.97 39.32v644.21l-218.31-30.42-265.39 54.14-2.14.43-211.16-58.15V89.42l219.22-50.1 239.78 50.1 9.12-1.92 228.88-48.18z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M602.97 686l-296.61 60.51L312.97 0l268 56 10.19-2.15L602.97 686z"
  }), _react.default.createElement("g", {
    opacity: 0.3,
    fill: "none",
    stroke: "#444053",
    strokeMiterlimit: 10,
    strokeWidth: 3
  }, _react.default.createElement("path", {
    d: "M573.35 138l.12 209.5h87v-86h149l17.5-22.44M88.97 204.5h323.5l20-9h8v202h140l6 18v91h108V619M483.2 619V397.5M826.97 559.66H483.2M740.87 138v481M87.97 517.14h739M177.91 619V138M349.69 138v481M88.97 259.5l571.5 2M255.3 138.87V619"
  }), _react.default.createElement("path", {
    d: "M87.97 370.82h261.72L483.2 517.14M512.12 138v259.5M483.2 443.98h343.77"
  })), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M585.97 442h-101v-44l95.5-.5 6 17-.5 27.5z"
  }), _react.default.createElement("path", {
    d: "M535.97 214a55.28 55.28 0 0 0-55.28 55.28c0 30.53 55.28 129.72 55.28 129.72s55.28-99.15 55.28-129.72A55.28 55.28 0 0 0 535.97 214zm0 78.86a24.32 24.32 0 1 1 24.32-24.32 24.32 24.32 0 0 1-24.32 24.31z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M535.97 214a55.28 55.28 0 0 0-55.28 55.28c0 30.53 55.28 129.72 55.28 129.72s55.28-99.15 55.28-129.72A55.28 55.28 0 0 0 535.97 214zm0 78.86a24.32 24.32 0 1 1 24.32-24.32 24.32 24.32 0 0 1-24.32 24.31z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M535.97 222a55.28 55.28 0 0 0-55.28 55.28c0 30.53 55.28 129.72 55.28 129.72s55.28-99.15 55.28-129.72A55.28 55.28 0 0 0 535.97 222zm0 78.86a24.32 24.32 0 1 1 24.32-24.32 24.32 24.32 0 0 1-24.32 24.31z",
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 649.86,
    cy: 806.61,
    rx: 33.45,
    ry: 13.78,
    transform: "rotate(-23.3 403.328 1104.861)",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 511.39,
    cy: 727.97,
    rx: 7.4,
    ry: 9.68,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 511.39,
    cy: 716.13,
    rx: 7.4,
    ry: 9.68,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 511.39,
    cy: 704.3,
    rx: 7.4,
    ry: 9.68,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 511.39,
    cy: 692.47,
    rx: 7.4,
    ry: 9.68,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 511.39,
    cy: 680.63,
    rx: 7.4,
    ry: 9.68,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 511.39,
    cy: 668.8,
    rx: 7.4,
    ry: 9.68,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 511.39,
    cy: 656.97,
    rx: 7.4,
    ry: 9.68,
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M483.7 575.98a36.12 36.12 0 0 1-2.76-4l19.44-3.2-21 .16a35.54 35.54 0 0 1-.68-28.07l28.2 14.58-26-19.12a35.43 35.43 0 1 1 58.51 39.65 35.55 35.55 0 0 1 4 6.46l-25.21 13.11 26.9-9a35.45 35.45 0 0 1-5.71 33.27 35.43 35.43 0 1 1-55.69 0 35.44 35.44 0 0 1 0-43.81z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M546.97 597.85a35.28 35.28 0 0 1-7.58 21.91 35.43 35.43 0 1 1-55.69 0c-4.75-6 63.27-25.85 63.27-21.91z",
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 186.29,
    cy: 767.73,
    rx: 19.99,
    ry: 48.53,
    transform: "rotate(-45 28.942 897.852)",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 51.63,
    cy: 683.7,
    rx: 10.73,
    ry: 14.05,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 51.63,
    cy: 666.53,
    rx: 10.73,
    ry: 14.05,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 51.63,
    cy: 649.36,
    rx: 10.73,
    ry: 14.05,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 51.63,
    cy: 632.19,
    rx: 10.73,
    ry: 14.05,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 51.63,
    cy: 615.02,
    rx: 10.73,
    ry: 14.05,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 51.63,
    cy: 597.85,
    rx: 10.73,
    ry: 14.05,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 51.63,
    cy: 580.68,
    rx: 10.73,
    ry: 14.05,
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M91.8 463.18a51.13 51.13 0 0 0 4-5.88l-28.2-4.63 30.5.22a51.54 51.54 0 0 0 1-40.73l-40.91 21.23 37.71-27.74A51.41 51.41 0 1 0 11 463.18a51.16 51.16 0 0 0-5.86 9.37l36.6 19-39-13.1a51.45 51.45 0 0 0 8.29 48.27 51.4 51.4 0 1 0 80.8 0 51.41 51.41 0 0 0 0-63.56z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M0 494.96a51.16 51.16 0 0 0 11 31.78 51.4 51.4 0 1 0 80.8 0C98.69 518 0 489.19 0 494.96z",
    opacity: 0.1
  }));
};

UndrawMap.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawMap;
exports.default = _default;