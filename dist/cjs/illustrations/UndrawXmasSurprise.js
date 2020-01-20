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

var UndrawXmasSurprise = function UndrawXmasSurprise(_props) {
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
    viewBox: "0 0 783.79 812",
    style: style
  }, props), _react.default.createElement("path", {
    fill: "#373e46",
    d: "M728.72 0l-7.31 7.04-79.52 76.63-134.81 129.91 6.35 556.08L.67 643.42V275.37L194.1 52.39 728.72 0z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M728.72 0l-7.31 7.04-79.52 76.63-134.81 129.91 6.35 556.08L.67 643.42V275.37L194.1 52.39 728.72 0z"
  }), _react.default.createElement("path", {
    fill: "#373e46",
    d: "M783.79 353.28l-14.77 377.45-529.25 80.6L.67 643.42V280.74l506.41-67.16 276.71 139.7z"
  }), _react.default.createElement("path", {
    fill: "#373e46",
    d: "M783.12 353.28l-14.78 377.45-529.24 80.6L0 643.42V280.74l506.41-67.16 276.71 139.7z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M239.77 421.78v389.55L.67 643.42V280.98l239.1 140.8zM721.41 7.04l-79.52 76.63-383.31 42.6-68.51-67.17L721.41 7.04zM507.08 213.58l5.37 560.14 256.57-42.99 14.77-377.45-276.71-139.7z"
  }), _react.default.createElement("path", {
    fill: "#373e46",
    d: "M783.79 353.28l-103.43-9.41-248.45-123.01 75.17-7.28 276.71 139.7zM194.1 52.39l68.51 67.16L722 68.51 728.72 0 194.1 52.39z"
  }), _react.default.createElement("path", {
    d: "M347.9 259.92a43.49 43.49 0 0 1-1 9.47 42.71 42.71 0 0 1-7 15.63 45.23 45.23 0 0 1-3.7 4.47 42.7 42.7 0 0 1-26.3 13.13 42.3 42.3 0 0 1-4.94.28 42.81 42.81 0 0 1-15.73-3 41.86 41.86 0 0 1-4.2-1.91 43.07 43.07 0 0 1-20.71-24.09 38.65 38.65 0 0 1-1.29-4.54c-.27-1.18-.48-2.38-.65-3.59a44 44 0 0 1-.4-5.88 42.7 42.7 0 0 1 1.87-12.56c.24-.82.52-1.63.82-2.44a43 43 0 0 1 75.79-9.23 42.75 42.75 0 0 1 7.44 24.26z",
    fill: "#eeeff0"
  }), _react.default.createElement("ellipse", {
    cx: 344.55,
    cy: 211.56,
    rx: 57.09,
    ry: 79.25,
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 344.55,
    cy: 211.56,
    rx: 57.09,
    ry: 79.25,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M441.9 20.82a119.55 119.55 0 0 0-90.65 197.49c2.31 2.7 4.75 5.29 7.3 7.73a119.17 119.17 0 0 0 48.25 28.64c3 .93 6.1 1.75 9.21 2.42a120.15 120.15 0 0 0 48.35.7c3.18-.59 6.34-1.32 9.43-2.19a119.09 119.09 0 0 0 50.19-28.34q4.15-3.91 7.91-8.21A119.54 119.54 0 0 0 441.9 20.82zm0 22.84a8.06 8.06 0 1 1 8.06-8.06 8.06 8.06 0 0 1-8.06 8.06z",
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 549.39,
    cy: 229.03,
    rx: 40.3,
    ry: 61.79,
    fill: "#975656"
  }), _react.default.createElement("ellipse", {
    cx: 549.39,
    cy: 229.03,
    rx: 21.49,
    ry: 32.95,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 441.93,
    cy: 435.89,
    rx: 139.7,
    ry: 154.47,
    fill: "#975656"
  }), _react.default.createElement("ellipse", {
    cx: 441.93,
    cy: 435.89,
    rx: 139.7,
    ry: 154.47,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 334.47,
    cy: 229.03,
    rx: 40.3,
    ry: 61.79,
    fill: "#975656"
  }), _react.default.createElement("ellipse", {
    cx: 334.47,
    cy: 229.03,
    rx: 21.49,
    ry: 32.95,
    opacity: 0.1
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M350.52 217.98l1.4-150.15-8.69 142.42 7.29 7.73zM409.68 67.83L407.99 249c-3.11-.67-6.19-1.49-9.21-2.42zM467.44 67.83l-1.67 179.72c-3.09.87-6.25 1.6-9.43 2.19zM523.87 211l1.33-143.17-9.24 151.38 7.91-8.21z"
  }), _react.default.createElement("rect", {
    x: 322.38,
    y: 137.68,
    width: 239.1,
    height: 77.91,
    rx: 12,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M552.08 250.52a110 110 0 1 1-4.07-29.77 110.15 110.15 0 0 1 4.07 29.77z",
    fill: "#975656"
  }), _react.default.createElement("path", {
    d: "M548.01 220.75a16.4 16.4 0 0 1-2.64.22H338.51a16.53 16.53 0 0 1-2.65-.22 110.27 110.27 0 0 1 81.83-77.69h48.49a110.27 110.27 0 0 1 81.83 77.69z",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 322.38,
    y: 140.37,
    width: 239.1,
    height: 77.91,
    rx: 16.12,
    fill: "#eeeff0"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M348.8 210.22l3.12-51.04-.47 51.04h-2.65zM409.21 210.22l.47-51.04-3.12 51.04h2.65zM467.44 159.18l-.48 51.04h-2.64l3.12-51.04zM522.08 210.22l3.12-51.04-.47 51.04h-2.65z"
  }), _react.default.createElement("circle", {
    cx: 400.29,
    cy: 237.09,
    r: 14.78,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 400.29,
    cy: 235.74,
    r: 14.78,
    fill: "#eeeff0"
  }), _react.default.createElement("circle", {
    cx: 400.29,
    cy: 235.74,
    r: 6.72,
    fill: "#373e46"
  }), _react.default.createElement("circle", {
    cx: 401.63,
    cy: 233.06,
    r: 1.34,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 488.95,
    cy: 237.09,
    r: 14.78,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 488.95,
    cy: 235.74,
    r: 14.78,
    fill: "#eeeff0"
  }), _react.default.createElement("circle", {
    cx: 488.95,
    cy: 235.74,
    r: 6.72,
    fill: "#373e46"
  }), _react.default.createElement("circle", {
    cx: 486.26,
    cy: 233.06,
    r: 1.34,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 444.62,
    cy: 281.41,
    r: 44.33,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 444.62,
    cy: 278.73,
    r: 44.33,
    fill: primaryColor
  }), _react.default.createElement("path", {
    fill: "#373e46",
    d: "M783.12 355.29l-6.11 131.24-2.47 53.03-8.88 190.5L236.41 812V421.11l546.71-65.82z"
  }), _react.default.createElement("path", {
    fill: "#373e46",
    d: "M.67 280.74l101.99-13.53 215.02 115.62-77.91 38.95L.67 280.74z"
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M.67 280.74l101.99-13.53 215.02 115.62-77.91 38.95L.67 280.74z"
  }), _react.default.createElement("path", {
    d: "M241.72 314.59l-13.54-7.25a3 3 0 0 0-3.46.48l-11.07 10.63a3 3 0 0 1-5-2.66l2.71-15.11a3 3 0 0 0-1.52-3.14l-13.54-7.25a3 3 0 0 1 1-5.56l15.21-2.09a3 3 0 0 0 2.52-2.42l2.7-15.11a3 3 0 0 1 5.6-.77l6.69 13.82a3 3 0 0 0 3.08 1.64l15.2-2.09a3 3 0 0 1 2.47 5.08l-11.08 10.63a3 3 0 0 0-.61 3.44l6.69 13.82a3 3 0 0 1-4.05 3.91z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M239.71 311.79l-12-6.42a2.64 2.64 0 0 0-3.07.42l-9.82 9.43a2.63 2.63 0 0 1-4.41-2.36l2.4-13.4a2.63 2.63 0 0 0-1.35-2.79l-12-6.42a2.63 2.63 0 0 1 .88-4.93l13.49-1.86a2.63 2.63 0 0 0 2.23-2.14l2.4-13.41a2.63 2.63 0 0 1 5-.68l5.94 12.25a2.62 2.62 0 0 0 2.73 1.46l13.48-1.85a2.63 2.63 0 0 1 2.19 4.5l-9.9 9.41a2.61 2.61 0 0 0-.55 3l5.94 12.26a2.63 2.63 0 0 1-3.58 3.53z",
    fill: "#eeeff0"
  }), _react.default.createElement("path", {
    d: "M740.02 700.08l-8.36-4.48a1.83 1.83 0 0 0-2.14.29l-6.85 6.58a1.83 1.83 0 0 1-3.07-1.65l1.67-9.34a1.83 1.83 0 0 0-.94-1.94l-8.37-4.48a1.84 1.84 0 0 1 .62-3.44l9.4-1.29a1.85 1.85 0 0 0 1.56-1.5l1.67-9.34a1.84 1.84 0 0 1 3.46-.48l4.13 8.55a1.85 1.85 0 0 0 1.91 1l9.4-1.29a1.83 1.83 0 0 1 1.52 3.14l-6.84 6.59a1.85 1.85 0 0 0-.39 2.13l4.14 8.54a1.84 1.84 0 0 1-2.52 2.41z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M738.79 698.35l-7.43-4a1.62 1.62 0 0 0-1.89.26l-6.07 5.83a1.63 1.63 0 0 1-2.73-1.46l1.48-8.29a1.62 1.62 0 0 0-.83-1.72L713.9 685a1.63 1.63 0 0 1 .55-3l8.33-1.15a1.61 1.61 0 0 0 1.38-1.32l1.49-8.29a1.63 1.63 0 0 1 3.07-.42l3.66 7.58a1.63 1.63 0 0 0 1.69.9l8.34-1.15a1.63 1.63 0 0 1 1.35 2.79l-6.07 5.83a1.62 1.62 0 0 0-.34 1.88l3.67 7.58a1.62 1.62 0 0 1-2.23 2.12z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M303.46 499.93l-8.36-4.48a1.85 1.85 0 0 0-2.14.3l-6.85 6.57a1.83 1.83 0 0 1-3.07-1.65l1.67-9.34a1.84 1.84 0 0 0-.94-1.94l-8.37-4.48a1.83 1.83 0 0 1 .62-3.43l9.4-1.3a1.84 1.84 0 0 0 1.56-1.49l1.67-9.35a1.84 1.84 0 0 1 3.46-.47l4.14 8.54a1.82 1.82 0 0 0 1.9 1l9.4-1.3a1.84 1.84 0 0 1 1.52 3.15l-6.84 6.57a1.82 1.82 0 0 0-.33 2.17l4.13 8.54a1.84 1.84 0 0 1-2.57 2.39z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M302.23 498.21l-7.42-4a1.65 1.65 0 0 0-1.9.26l-6.07 5.83a1.63 1.63 0 0 1-2.73-1.46l1.48-8.28a1.61 1.61 0 0 0-.83-1.72l-7.42-4a1.62 1.62 0 0 1 .55-3l8.33-1.15a1.62 1.62 0 0 0 1.38-1.33l1.49-8.28a1.63 1.63 0 0 1 3.07-.42l3.66 7.57a1.62 1.62 0 0 0 1.69.9l8.39-1.13a1.62 1.62 0 0 1 1.35 2.78l-6.07 5.83a1.63 1.63 0 0 0-.34 1.89l3.67 7.57a1.63 1.63 0 0 1-2.28 2.14z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M740.02 620.83l-8.36-4.48a1.83 1.83 0 0 0-2.14.29l-6.85 6.57a1.83 1.83 0 0 1-3.07-1.64l1.67-9.34a1.85 1.85 0 0 0-.94-2l-8.37-4.47a1.84 1.84 0 0 1 .62-3.44l9.4-1.3a1.83 1.83 0 0 0 1.56-1.49l1.67-9.34a1.84 1.84 0 0 1 3.46-.48l4.13 8.54a1.84 1.84 0 0 0 1.91 1l9.4-1.29a1.83 1.83 0 0 1 1.52 3.14l-6.84 6.57a1.85 1.85 0 0 0-.39 2.13l4.14 8.54a1.84 1.84 0 0 1-2.52 2.49z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M738.79 619.1l-7.43-4a1.61 1.61 0 0 0-1.89.26l-6.07 5.83a1.63 1.63 0 0 1-2.73-1.46l1.48-8.29a1.62 1.62 0 0 0-.83-1.72l-7.42-4a1.63 1.63 0 0 1 .55-3l8.33-1.15a1.61 1.61 0 0 0 1.38-1.32l1.49-8.29a1.63 1.63 0 0 1 3.07-.42l3.66 7.57a1.64 1.64 0 0 0 1.69.91l8.34-1.15a1.63 1.63 0 0 1 1.35 2.79l-6.07 5.83a1.61 1.61 0 0 0-.34 1.88l3.67 7.57a1.63 1.63 0 0 1-2.23 2.16z",
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 371.41,
    cy: 421.78,
    rx: 27.54,
    ry: 45,
    fill: "#975656"
  }), _react.default.createElement("ellipse", {
    cx: 523.2,
    cy: 405.66,
    rx: 27.54,
    ry: 45,
    fill: "#975656"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M777.01 486.53l-2.47 53.03-538.13 55.33L.67 487.51v-51.62l235.74 102.9 540.6-52.26z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M236.41 538.79v56.1L.67 487.51v-51.62l235.74 102.9z"
  }));
};

UndrawXmasSurprise.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawXmasSurprise;
exports.default = _default;