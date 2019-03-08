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

var UndrawGraduation = function UndrawGraduation(_props) {
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
    viewBox: "0 0 851.55 585.04",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 555.01,
    y1: 665.76,
    x2: 555.01,
    y2: 227.01,
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
    x1: -612.66,
    y1: 2808.97,
    x2: -612.66,
    y2: 2735.27,
    gradientTransform: "rotate(90 964.065 2208.625)",
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M971.56 388.66a17 17 0 0 0-8.5-14.72v-47.77h-.31V326h-36.68l-385.31-99-402.31 113.34v19.83L331 432.85l-11.22 193.64c102.44 29.17 183.08 39.75 246.42 39.26h3.34C755.8 663.23 790.39 564.2 790.39 564.2c-10.09-52.49-8.68-110.73-7-139.87l168.21-75.45-2.39-14.32h2.54v37.34a17 17 0 0 0-4.5 32.1l-12.5 30a10.85 10.85 0 0 0 5.07 3.57l-33.4 89.93a75.19 75.19 0 0 0 11.46 7.58l5.39 3.59.13-.89c9.12 4 20.61 6.52 31 1.6l2.82-.71-.45-.56a31.16 31.16 0 0 0 6.27-5l-2.83-96.33-2.42-31.48a17 17 0 0 0 13.77-16.64z",
    transform: "translate(-138.45 -182)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M645.49 379.08s-60.7 173.83-458 60.7l11.06-190.38 306.26-44.15 135.2 19.31s-8.32 82.78 5.48 154.52z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    opacity: 0.15,
    d: "M198.5 249.4v16.55l229.01 80.02 201.42-85.53 2.76-16.56-204.18 74.5L198.5 249.4z"
  }), _react.default.createElement("path", {
    d: "M640.28 224.57l-135.2-19.31-4.43.64 130.73 18.68s-8.28 82.77 5.52 154.51c0 0-34 97.39-217.75 98.93 191.53 1.59 226.64-98.93 226.64-98.93-13.79-71.75-5.51-154.52-5.51-154.52z",
    opacity: 0.15
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M802.91 147.31h11.04v49.82h-11.04z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M802.91 147.31h11.04v49.82h-11.04z"
  }), _react.default.createElement("path", {
    d: "M758.77 343.36s33.11 27.9 55.18 5.52l-2.76-93.81-16.55-8.28z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M758.77 343.36s33.11 27.9 55.18 5.52l-2.76-93.81-16.55-8.28z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M10.88 161.11v19.31l416.63 157.27 375.24-168.3-2.75-16.56-375.25 165.55L10.88 161.11z"
  }), _react.default.createElement("path", {
    opacity: 0.07,
    d: "M10.88 161.11v19.31l416.63 157.27 375.24-168.3-2.75-16.56-375.25 165.55L10.88 161.11z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M10.88 161.11l415.87 161.27L800 152.83 402.68 50.74 10.88 161.11z"
  }), _react.default.createElement("ellipse", {
    cx: 410.88,
    cy: 145.86,
    rx: 27.51,
    ry: 17.86,
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 410.88,
    cy: 145.86,
    rx: 27.51,
    ry: 17.86,
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M430.12 147.16h383.52v8.28H430.12z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M430.12 147.16h383.52v8.28H430.12z"
  }), _react.default.createElement("circle", {
    cx: 805.67,
    cy: 208.17,
    r: 16.55,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 805.67,
    cy: 208.17,
    r: 16.55,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M786.36 252.31s5.52 8.58 24.83 2.76l-2.76-35.87h-8.28z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M786.36 252.31s5.52 8.58 24.83 2.76l-2.76-35.87h-8.28z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "#fff",
    opacity: 0.2,
    d: "M766.89 348.73l11.03-13.8-2.76 19.32-8.27-5.52zM797.24 340.45v16.56l11.03-2.76-11.03-13.8z"
  }), _react.default.createElement("path", {
    d: "M242.65 348.73s82.77 27.59 132.44 11zM467.77 368s87.08 5.46 130.85-23.26zM527.55 433.5s50.63-19.16 76.58-38.7zM220.55 390.12s88.32 35.88 110.4 22.07z",
    opacity: 0.15
  }), _react.default.createElement("ellipse", {
    cx: 172.54,
    cy: 542.89,
    rx: 35.09,
    ry: 5.26,
    transform: "rotate(-68.68 -29.902 553.21)",
    fill: "#e0e0e0"
  }), _react.default.createElement("ellipse", {
    cx: 628.58,
    cy: 721.1,
    rx: 35.09,
    ry: 3.58,
    transform: "rotate(-68.68 426.12 731.418)",
    fill: "#e0e0e0"
  }), _react.default.createElement("path", {
    fill: "#f55f44",
    d: "M234.445 461.792l17.36 11.923-39.735 57.859-17.36-11.923z"
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M243.154 538.607l-23.45-3.363 9.962-69.48 23.45 3.363z"
  }), _react.default.createElement("path", {
    fill: "#f55f44",
    d: "M241.853 539.225l-20.849-2.949 9.827-69.488 20.849 2.949z"
  }), _react.default.createElement("path", {
    transform: "rotate(-68.68 198.117 642.217)",
    fill: "url(#prefix__b)",
    d: "M363.72 387.11h73.7v489.57h-73.7z"
  }), _react.default.createElement("path", {
    d: "M477.39 571.6c-8.91-3.34-462.6-180.57-456.06-178 20.86-39 25.52-65.38 25.52-65.38l456.06 178s-12.95 28.28-25.52 65.38z",
    fill: "#f5f5f5"
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M247.837 403.78l37.534 14.53-25.268 65.277-37.535-14.53z"
  }), _react.default.createElement("path", {
    fill: "#f55f44",
    d: "M247.935 406.673l34.328 13.398-25.52 65.386-34.327-13.397z"
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M252.837 408.59l22.889 8.932-25.52 65.387-22.888-8.933z"
  }), _react.default.createElement("path", {
    fill: "#f55f44",
    d: "M254.477 409.23l19.619 7.656-25.52 65.387-19.618-7.657z"
  }), _react.default.createElement("circle", {
    cx: 455.91,
    cy: 745.92,
    r: 2.93,
    transform: "rotate(-.86 -11737.608 9879.75)",
    fill: "#dbdbdb"
  }), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M85.55 482h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M95.55 489v3h-17v-3z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M841.55 270h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M851.55 277v3h-17v-3z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M103.55 59h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M113.55 66v3h-17v-3z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M751.55 33h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M761.55 40v3h-17v-3z"
  })), _react.default.createElement("path", {
    d: "M68.45 253.46a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.32 1.27 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.37-.25zM240.45 56.46a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.32 1.27 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.37-.25zM285.45 578.46a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.32 1.27 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.37-.25z",
    fill: "#4d8af0",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 815.55,
    cy: 444,
    r: 6,
    fill: "#f55f44",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 551.55,
    cy: 574,
    r: 6,
    fill: "#4d8af0",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 653.55,
    cy: 463,
    r: 6,
    fill: "#47e6b1",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 467.55,
    cy: 6,
    r: 6,
    fill: "#f55f44",
    opacity: 0.5
  }));
};

UndrawGraduation.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawGraduation;
exports.default = _default;