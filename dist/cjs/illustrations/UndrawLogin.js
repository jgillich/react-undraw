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

var UndrawLogin = function UndrawLogin(_props) {
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
    viewBox: "0 0 576.43 733.94",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 657.92,
    y1: 287.71,
    x2: 657.92,
    y2: 197.91,
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
    x1: 772.98,
    y1: 816.94,
    x2: 772.98,
    y2: 144.06,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    fill: "#535461",
    d: "M0 17.06h444v657H0z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M323 691.06l-323-17v-657l323-17v691z"
  }), _react.default.createElement("circle", {
    cx: 296,
    cy: 377.06,
    r: 4,
    fill: "#535461"
  }), _react.default.createElement("path", {
    fill: "#535461",
    d: "M296 377.66l2.77 4.8 2.78 4.8h-11.1l2.78-4.8 2.77-4.8z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M337 691.06l-19.78-.06L318 .06h19v691z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M337.22 691h-20l1-691h19v691z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 296,
    cy: 348.06,
    r: 13,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 296,
    cy: 346.06,
    r: 13,
    fill: "#535461"
  }), _react.default.createElement("path", {
    d: "M657.74 280.55v7.16l30.26-19.1-3.18-4-1.48.87-23.41-34.3v-19.9l-8.91.8v-3.18c-23.5-27.06-25.93 3.18-21.07 11.94S643.7 236 643.7 236c5 4.17 13.62 35.67 15.73 43.57z",
    transform: "translate(-311.78 -83)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M854.06 264.64l-4.13-2.8h-.18L846 250.7l-1.36.05-4.66-9.31a38.43 38.43 0 0 0 10.75-7.89c7.28-7.18 13.92-19.5 12.28-40.33-.34-4.31 6.77-15.47-14.51-21.27a29.28 29.28 0 0 0-22.38-25.44 81.15 81.15 0 0 0-25.17-2.2c-16.33 1.39-30.65 13.39-30.65 29.78 0 0-4.93 1.52-5.2 17.69h.63A46.43 46.43 0 0 0 799.6 248l.28 1.68c.29.16.59.3.89.44l3 7.82-9.69 5.82-19.44.64a76 76 0 0 0-26.1 5.59c-17.8 7.15-50.21 14.01-50.21 14.01L688 269.23l-30.24 20.84 19.9 30.39a46.06 46.06 0 0 0 10.35 5.9h.2l.9.36a81.84 81.84 0 0 0 15.21 4.26c12 2.41 30 4.2 52.53.81l-.16-.05.56-.07 6.76 137h.44l-3.23 23.46c-31.85 39.87-40.61 155.3-40.61 155.3l47.13 135.51c-.89 3.87-4.47 12.23-18.86 18.09-19.29 7.85 13.68 13.54 13.68 13.54l30-9.21c2.48 5 16.41 11.59 16.41 11.59l59.69-1.59V785.9h-.8s5.57-53.32 1.59-64.46 0-65.26 0-65.26l3.18-115.4c11.14-22.28 11.14-41.38 2.39-59.69a55.38 55.38 0 0 1-5-17.64c2.4-5.65 3.41-14.93 1-30.11-7.16-45.14 15.92-90.34 15.92-90.34a77.76 77.76 0 0 0-32.88-78.36zm-35.6 528.12l-6.72-24.11-1.53.43-29.12-122.45 27.06-56.5v54.12l15.12 105.85v35.8a15.84 15.84 0 0 1-4.81 6.86z",
    transform: "translate(-311.78 -83)",
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    d: "M351.97 138.85V158l22.77 33.36-22.77 14.81s-10.12-39-15.57-43.59c0 0-8.57-6.12-13.24-14.53s-2.34-37.47 20.25-11.47v3.06zM533.22 184.44l-9-18a3.34 3.34 0 0 0-2.82-1.84l-34.18-1.78a3.34 3.34 0 0 0-3.29 4.54l8.83 22.83a3.34 3.34 0 0 0 3.41 2.12l34.42-3.06a3.34 3.34 0 0 0 2.63-4.81z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    fill: "#edeef9",
    d: "M530.73 176.7l5.81 17.05-59.72-2.14 22.94-13.77 30.97-1.14zM378.94 193.9l-3.06-3.82-26 15.29v6.89l29.06-18.36z"
  }), _react.default.createElement("path", {
    d: "M554.61 363.07s-4.37 17.41 4 35 8.41 35.94-2.29 57.35l-3.03 110.88s-3.82 52 0 62.7-1.53 61.94-1.53 61.94h-42.82v-34.4l-14.53-101.7v-52l-26 54.29 29.81 125.41-39 16.06-48.94-140.7s8.41-110.88 39-149.11l5.74-41.68z",
    fill: "#7a7478"
  }), _react.default.createElement("path", {
    d: "M552.53 719.24v-28.29h-43.59s-3.06 11.47-22.94 13.76 9.22 16.06 9.22 16.06z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M505.45 701.63l-7.59-27.26-42 11.69s.13 11.87-18.41 19.41 13.15 13 13.15 13z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M455.03 369.4l99.58-4a55.71 55.71 0 0 0-.75 18.05c-4.56 10.72-14.33 7.78-14.33 7.78l-87.13-2.68z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M534.56 187.4l4 2.69a74.71 74.71 0 0 1 31.59 75.33s-22.18 43.39-15.29 86.78-15.29 36.71-15.29 36.71l-87.56-2.69-6.5-131.65s-52.76 7.51-76.47-10.85l-19.12-29.2 29.06-20 9.94 14.18s31.14-6.58 48.24-13.51a73.07 73.07 0 0 1 25.06-5.39z",
    fill: "#252a62"
  }), _react.default.createElement("path", {
    d: "M533.79 399.22s5.35 26.76-25.23 71.12M445.09 254.7s-36.7-12.23-52.76-12.23-13.38 6.94-13.38 6.94 25.61 11.4 66.14 5.29zM486.71 164.35l14.61 1.75c.46.06.88.64 1.13 1.54-3.21 5.79-7.23 9.25-11.59 9.25a9 9 0 0 1-4.43-1.23l-1.12-6.76c-.38-2.26.37-4.67 1.4-4.55z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 496.9,
    cy: 130.75,
    r: 44.6,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M458.97 105.5l2.25 2.06a7.71 7.71 0 0 1-2.25 12.81s20 20 22.76 23.69-.46 13.47-.46 13.47-8.83 16.26 37.63 12.54c0 0 30.66-6.5 27.41-47.85-.33-4.14 6.5-14.87-13.94-20.44a28.13 28.13 0 0 0-21.5-24.45 78 78 0 0 0-24.18-2.12 30.36 30.36 0 0 0-27.72 30.29z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M458 103.06s-4.73 1.46-5 17l6.73-.46s15.58 41.67 13.94 36.24c-6-20 6-16.26 8.83-12.54s-.46 13.47-.46 13.47-8.82 16.23 37.63 12.54c0 0 30.66-6.5 27.41-47.85-.33-4.14 6.5-14.87-13.94-20.44a28.13 28.13 0 0 0-21.5-24.45 78 78 0 0 0-24.18-2.12C471.76 75.79 458 87.31 458 103.06z",
    fill: "#72351c"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    opacity: 0.1,
    d: "M52.82 16.11v661.05M109.82 12.11v667.05M166.82 9.11V683M223.82 6.11v681.05M280.82 3.11V688"
  }));
};

UndrawLogin.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawLogin;
exports.default = _default;