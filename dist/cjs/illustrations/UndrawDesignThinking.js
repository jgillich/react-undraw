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

var UndrawDesignThinking = function UndrawDesignThinking(_props) {
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
    viewBox: "0 0 832.88 669.688",
    style: style
  }, props), _react.default.createElement("path", {
    d: "M819.4 244.26a20.981 20.981 0 0 0-26.51 10.73c-.21.45-.42.9-.61 1.37a22.621 22.621 0 0 0-.88 3.03 20.986 20.986 0 0 1 28.5-19.22 20.664 20.664 0 0 1 4.66 2.52 20.978 20.978 0 0 0-35.59 15.58 30.069 30.069 0 0 0-39.97 4.56 27.005 27.005 0 0 0-11.76 24.97c-7.31 4.63-16.61 14.48-16.61 14.48s-34.13 27.63-50.4 44.95c-16.27 17.33-.04 22.48-.04 22.48s16.33 1.54 29.71 1.31c-1.24 4.56-.9 9.98 2.13 16.23 0 0-2.13 19.53-8.23 21.48-2.29.73-.54 1.19 2.52 1.48l-1.06 2.03a15.342 15.342 0 0 0-3.82-.14s-6.32 7.05-13.67 15.3c-4.6-.68-8.29-.96-8.2-.11.11 1.18 3.01 2.22 5.69 2.93-8.97 10.09-18.57 20.97-19.8 22.72-2.36 3.38-59.14 56.6-75.11 81.53-15.97 24.94-19.63 28.9-19.63 28.9s3.11 3.04 7.92 7.59c-5.19 13.86-17.55 45.15-28.09 58.36.37-1.2-5.28-.72-11.45 5.46 0 0-.58.32-1.6.84-5.37 2.78-22.97 11.34-31.12 9.12-9.7-2.64-14.61 9.98-10.03 12.22 4.95 2.44 12.57 9.1 25.21 9.66a64.189 64.189 0 0 0 15.94-1.84c6.95-1.5 12.86-3.2 15.57-2.16 4.67 1.78 23.41.39 20.17-5.13-3.24-5.53.69-15.8.69-15.8s-1.3.13-3.29.24c4.66-12.62 23.04-35.48 33.5-47.91 2.72 2.31 5.41 4.55 8 6.62 18.04 14.4 27.38 17.97 27.38 17.97s-.38-12.99 14.6-29.74c4.62-5.17 11.52-14.16 18.85-24.11 4.89 25.01 12.39 57.9 18.47 60.88a18.02 18.02 0 0 0 6.4 1.41c3.88 9.9 10.19 26.42 14.88 40.95h25.84c-5.68-14.6-11.08-31.55-11.34-44 4.96-.98 8.37-1.8 8.37-1.8 6.79-17.75-5.14-70.5-10.41-87.51-5.27-17 3.12-27.71 3.12-27.71 12.94-24.45 12.31-37.27 10.49-43.08a89.563 89.563 0 0 0 2.85-8.57c.88-3.2 1.77-6.07 2.65-8.64 17.7.27 35.88.36 38.26-.32 1.68-.48 3.35-2.28 4.8-4.42a29.627 29.627 0 0 0 4.95-15.54c.44-11.38 1.01-35.74-.99-56.03 6.08-15.74 9.3-34.04.03-44.86 0 0-1.26-.71-3.17-1.64a55.586 55.586 0 0 1 .6-12.11 29.618 29.618 0 0 0 6.26-2.32c.43-.22.85-.44 1.27-.68.84-.47 1.65-.99 2.44-1.54a29.846 29.846 0 0 0 10.78-13.83c.19-.5.37-1 .53-1.5.06-.17.1-.34.15-.51.11-.34.21-.67.3-1 .05-.21.1-.41.14-.61.08-.3.16-.61.22-.91.05-.22.08-.43.12-.65.06-.29.11-.58.16-.88.04-.22.06-.44.09-.66.04-.28.08-.57.11-.86.03-.23.04-.45.06-.67.03-.29.05-.57.06-.85.02-.23.02-.45.03-.68.01-.28.02-.56.02-.84 0-.23-.01-.45-.01-.68v-.01c.09.05.17.1.26.15a21.039 21.039 0 0 0 13.74 14.06 21.087 21.087 0 0 1-10.74-12.69 20.747 20.747 0 0 0 4.3 1.05 21.024 21.024 0 0 0 20.52 7.26 21.076 21.076 0 0 1-16.86-7.06 21.371 21.371 0 0 0 3.92-.53 20.663 20.663 0 0 0 3.82-1.28 21.225 21.225 0 0 0 6.59-4.63 20.81 20.81 0 0 0 2.55-3.24 21.445 21.445 0 0 0 1.91-3.8c.18-.47.32-.95.46-1.43a20.961 20.961 0 0 0-12.57-25.69zM539.64 630.43a2.267 2.267 0 0 1 .48-.57c-.16.19-.32.39-.48.57zM739.6 337.68c-13.34 3.73-37.44 10.36-45.77 12.02 6.89-14.83 31.99-35.8 31.99-35.8s10.18-5.33 16.04-13.42a26.817 26.817 0 0 0 8.15 7.74c.03 3.1-.01 6.29-.19 9.32-1.31-.23-2.09-.18-2.02.49.22 2.23.95 14.29-4.21 16.6a15.983 15.983 0 0 0-3.99 3.05zm9.44 88.98c-1.31.02-3.12.09-5.27.21 3.41-4.99 9.29-13.43 14.28-19.79.58 8.24.75 13.68.75 13.68s1.01 5.74-9.76 5.9z",
    fill: "#f2f2f2"
  }), _react.default.createElement("circle", {
    cx: 590.5,
    cy: 216,
    r: 30,
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M610.69 193.81a30 30 0 0 1-42.38 42.38 30 30 0 1 0 42.38-42.38z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 621.5,
    cy: 184,
    r: 21,
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M621.5 202a20.986 20.986 0 0 1-20.924-19.5c-.035.497-.076.994-.076 1.5a21 21 0 0 0 42 0c0-.506-.04-1.003-.076-1.5A20.986 20.986 0 0 1 621.5 202z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M599.5 180a20.927 20.927 0 0 1 26.257-20.31 20.991 20.991 0 1 0-13.514 39.62A21.002 21.002 0 0 1 599.5 180z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M618.456 198.464a20.927 20.927 0 0 1 18.858-27.318 20.991 20.991 0 1 0-.857 41.852 21.002 21.002 0 0 1-18-14.534z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M625.215 200.101a20.927 20.927 0 0 1 2.936-33.065 20.991 20.991 0 1 0 19.89 36.834 21.002 21.002 0 0 1-22.826-3.769z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M615 258.5s-32 22-30 12c1.12-5.62-3.13-17.57-7.07-26.95-3.06-7.3-5.93-13.05-5.93-13.05l35-9a55.551 55.551 0 0 0 .13 16.05A51.388 51.388 0 0 0 615 258.5zM567 352.5l-2 17 28-3 5-18-31 4zM533 326.5l-6 7s-17 1-8-21 31-60 31-60 14-34 19-21-10 30-10 30-19 34-17 49z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M533 326.5l-6 7s-17 1-8-21 31-60 31-60 14-34 19-21-10 30-10 30-19 34-17 49z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M629 560.5s45 48 50 62-8 36-13 37-6 7 0 8 26-8 32-18 10-17 13-19 5-11 0-16-46-43-51-66z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M705 610.5s-2 20-20 11c0 0-8-9-8 2s-4 30-17 37 9 10 12 9 23-8 26-14 14-20 18-25-1-22-11-20zM612 397.5s14 6 9 47c0 0-4 13 7 27s41 59 41 78c0 0-29 20-40 19s-54-75-54-75z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M612 397.5s14 6 9 47c0 0-4 13 7 27s41 59 41 78c0 0-29 20-40 19s-54-75-54-75z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M504 550.5s2 72-10 80c0 0-16 23-26 23s-9 8-4 9 6 4 26-4 30-10 33-10 6-4 0-16 17-73 17-73z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M525 625.5s-10 5-17 6-10.937-6.08-9.469-8.54S494 622.5 490 631.5c0 0-17 20-27 21s-10.078 14.538-5 15c5.5.5 15 4 27 0s23-15 28-15 22-8 17-12-5-15-5-15z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M588 273.106S546 304.5 540 307.5s-13 26-13 26 36-10 42-17 19-43.394 19-43.394z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M588 273.106S546 304.5 540 307.5s-13 26-13 26 36-10 42-17 19-43.394 19-43.394z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 584.5,
    cy: 221,
    r: 27,
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M562 365.5s-18 47-19 51-35 74-41 103-8 34-8 34 30 13 52 20 32 7 32 7-5-12 3-33 24-88 24-88 12.794-39.501 10-68a106.444 106.444 0 0 1-.24-22.113 8.649 8.649 0 0 0-9.16-9.655c-14.837 1.017-38.835 3.045-43.6 5.768z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M615 252.5s-13-2-19 1-16 2-15 4 6 13 2 17-8 22-16 27-20 22-4 37c0 0 5 19 0 23s16-4 16-4a43.557 43.557 0 0 1 13 5c7 4 23 3 23 3s7-31 11-38 13-62-11-75z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M608 268.5s-23 4-8 27 28 54 28 54 3 5-7 9-49 23-49 23-26 4-25 6 11 0 11 0-7 19 5 19 18-12 18-12 65-23 69-26c1.4-1.05 2.31-3.325 2.901-5.839a29.641 29.641 0 0 0-.931-16.287c-6.752-19.895-28.877-81.228-43.97-77.874z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M604.55 201.95a22 22 0 1 0-29.1 29.1 22 22 0 1 0 29.1-29.1z",
    fill: "#2f2e41"
  }), _react.default.createElement("ellipse", {
    cx: 577,
    cy: 230.5,
    rx: 2.5,
    ry: 6.5,
    fill: "#ffc1c7"
  }), _react.default.createElement("circle", {
    cx: 336,
    cy: 50.5,
    r: 22,
    fill: primaryColor
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M41 306.5h32v32H41z"
  }), _react.default.createElement("rect", {
    x: 181,
    y: 154.5,
    width: 228,
    height: 133,
    rx: 16.004,
    fill: "#f2f2f2"
  }), _react.default.createElement("circle", {
    cx: 116.5,
    cy: 155,
    r: 90,
    fill: "#f2f2f2"
  }), _react.default.createElement("circle", {
    cx: 131.5,
    cy: 146,
    r: 90,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("rect", {
    x: 158.5,
    y: 132,
    width: 228,
    height: 133,
    rx: 14.693,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 345,
    cy: 41.5,
    r: 22,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M46 300.5h32v32H46z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M0 6.5h32v32H0z"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M5 .5h32v32H5zM400.5 669h413"
  }));
};

UndrawDesignThinking.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawDesignThinking;
exports.default = _default;