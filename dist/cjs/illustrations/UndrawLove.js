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

var UndrawLove = function UndrawLove(_props) {
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
    viewBox: "0 0 994.995 662.08",
    style: style
  }, props), _react.default.createElement("path", {
    d: "M994.938 380.87a287.137 287.137 0 0 1-163.69 254.01 282.147 282.147 0 0 1-121.25 27.2q-9.045 0-17.96-.56a3110.258 3110.258 0 0 0-389.08 0q-8.91.555-17.96.56a282.058 282.058 0 0 1-138.92-36.35A287.21 287.21 0 0 1 .058 380.87c-3.16-160.68 124.03-292.05 283.61-292.79 84.99-.39 161.37 36.69 213.83 95.77 52.46-59.08 128.84-96.16 213.83-95.77 159.58.74 286.77 132.11 283.61 292.79z",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M831.248 634.88a282.147 282.147 0 0 1-121.25 27.2q-9.045 0-17.96-.56a3110.258 3110.258 0 0 0-389.08 0q-8.91.555-17.96.56a282.058 282.058 0 0 1-138.92-36.35c64.13-27.78 189.39-46.65 333.42-46.65 159.34 0 295.71 23.09 351.75 55.8z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M633.875 237.157a22.982 22.982 0 0 0-23.874-3.782c-11.878 5.18-17.05 19.732-16.22 32.663S600 291.1 603.489 303.58c4.688 16.762 5.905 34.929.411 51.444s-18.42 31.069-35.186 35.737c-15.563 4.334-32.071-.011-47.634-4.344",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M662.05 211.319a13.569 13.569 0 1 0-27.092-1.563l-1.562 27.093 27.092 1.562a13.569 13.569 0 1 0 1.563-27.092zM632.918 281.862a13.569 13.569 0 1 0-27.092-1.563l-1.563 27.093 27.093 1.562a13.569 13.569 0 0 0 1.562-27.092zM593.88 206.294a13.569 13.569 0 1 0-17.427 20.801l20.801 17.428 17.429-20.801a13.569 13.569 0 1 0-20.802-17.428z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M755.922 224.806a22.982 22.982 0 0 0-22.005-10.005c-12.828 1.829-21.69 14.477-24.334 27.162s-.682 25.813-.642 38.77c.053 17.405-3.613 35.24-13.308 49.695s-26.03 25.04-43.435 25.073c-16.154.032-30.909-8.553-44.755-16.875",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M789.962 207.406a13.569 13.569 0 0 0-25.697-8.723l-8.723 25.698 25.697 8.723a13.569 13.569 0 1 0 8.723-25.698zM743.091 267.64a13.569 13.569 0 0 0-25.697-8.723l-8.723 25.698 25.697 8.723a13.569 13.569 0 1 0 8.723-25.698zM725.594 184.404a13.569 13.569 0 1 0-22.34 15.407l15.408 22.34 22.34-15.408a13.569 13.569 0 0 0-15.408-22.34z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M697.444 43.905a22.982 22.982 0 0 1 22.287 9.357c7.37 10.658 4.105 25.752-3.41 36.308s-18.484 18.031-28.021 26.803c-12.811 11.781-23.412 26.584-27.439 43.517s-.7 36.112 11.095 48.91c10.948 11.879 27.27 16.878 42.782 21.39",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M687.097 7.102a13.569 13.569 0 1 1 23.855 12.938l-12.938 23.855-23.855-12.938a13.569 13.569 0 1 1 12.938-23.855zM674.717 82.413a13.569 13.569 0 1 1 23.855 12.938l-12.938 23.855-23.855-12.938a13.569 13.569 0 1 1 12.938-23.855zM747.696 38.727a13.569 13.569 0 1 1 3.863 26.861l-26.862 3.863-3.862-26.862a13.569 13.569 0 1 1 26.861-3.862z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    fill: "#fbbebe",
    d: "M440.498 331.08h25v13h-25z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M440.498 331.08h25v13h-25z"
  }), _react.default.createElement("circle", {
    cx: 394.498,
    cy: 112.08,
    r: 32,
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M466.998 324.58s-10-3-12-2 7 9 7 9z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M466.998 324.58s-10-3-12-2 7 9 7 9z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M397.998 580.58s23 3 27 3 15 4 9 9-44 12-49 9-12-12-7-13 20-8 20-8z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    fill: "#fbbebe",
    d: "M356.998 617.58l-8 14 10 5 19 4 10-13-4-15-27 5z"
  }), _react.default.createElement("path", {
    d: "M409.998 514.58s-13 55-11 58 6 11 2 14-20 4-20 4l5-29 7-35z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M373.998 398.58l13 59s2 29-3 40-32 127-32 127 28 1 34-2 16.119-72.265 16.119-72.265 32.88-65.735 31.88-78.735 4.97-79.037-3.515-84.018-56.484 11.018-56.484 11.018z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M375.998 635.58l12-12s32 16 37 17 16 9 5 12-52 1-62 0-30-2-27-8 8-27 8-27 2.763-3.82 4.381 1.09 2.619 11.91 6.619 11.91 16 5 16 5z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M529.998 381.58l28-2 19 10-2 12-8 2s-22-9-35-6-2-16-2-16z",
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M562.998 385.58s11 12.032 0 16.516c0 0 2 3.484 10 4.484s19 8 22 8 16-2 8-13-40-35-40-35-9-4-12 4-4.583 9.828-4.583 9.828 14.583 3.172 16.583 5.172z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M478.998 481.58s9 34 9 36 12-8 12-8l2-18s-8-8-8-13-15 3-15 3z",
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M496.998 505.58s-7 9-12 6l3 34s2 17 9 10 14-42 14-42 10-21 2-24a83.282 83.282 0 0 0-14-4s0 21-2 20z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M431.998 391.58l30 62s10 35 14 36 19-6 21-7-17-40-17-47-23-46-23-46z",
    fill: "#ff6584"
  }), _react.default.createElement("path", {
    d: "M431.998 391.58l30 62s10 35 14 36 19-6 21-7-17-40-17-47-23-46-23-46z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M452.998 283.58s1 21-3 35 5 60 5 60 15 1 19 0 58-2 61 0 2 37 0 36-54-12-79-8-28-2-29-4-18-56-18-56l-6-26-8-28 5-27z",
    fill: "#ff6584"
  }), _react.default.createElement("circle", {
    cx: 392.498,
    cy: 126.08,
    r: 27,
    fill: "#a0616a"
  }), _react.default.createElement("circle", {
    cx: 341.998,
    cy: 189.58,
    r: 27,
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M399.998 144.58s18 12 15 19-11 15-11 15l-1 11 15 5 38 2s-2-34-14-43-26-15-28-23-14 14-14 14z",
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M449.614 169.246c-6.545-12.226-24.957-10.74-28.773 2.591a12.062 12.062 0 0 0 1.157 9.743c7 12 12 21 12 21l22-2s.432-18.6-6.384-31.334z",
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M407.284 174.994s-26.286 16.586-24.286 27.586 4 30 4 37 7 29 17 33 10-7 24 6 29 19 28 21 4-18-4-26-17-31-9-41 15-36 15-36-1-6-7-5-43-3-45-8a8.443 8.443 0 0 1 1.286-8.586z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M403.553 183.474s27.445-29.894 31.445-28.894 15.519 12.834 15.519 12.834l-15.52-10.834-31.444 28.579z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M364.998 194.58s3.756 40.446 8.878 44.223-38.878 2.777-38.878 2.777 10-31 4-35 26-12 26-12z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M374.998 227.58s-34-9-38-4-12 48-12 48 4 29 11 50 16 95 23 95 19-11 22-11 21-9 32-7a38.933 38.933 0 0 0 19-1s-5-42-17-53-18-87-18-87-17-32-22-30z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M426.998 322.58s11.37 15.433 22.685 16.217l6.315-.217s-10 26-5 27 20-19 15-30-20-28-20-28z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M466.998 322.58s-17 16-10 23 16 0 16 0 7-10-6-23z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M466.998 322.58s-17 16-10 23 16 0 16 0 7-10-6-23z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 401.498,
    cy: 106.08,
    r: 32,
    fill: "#2f2e41"
  }), _react.default.createElement("circle", {
    cx: 416.498,
    cy: 79.08,
    r: 19,
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M401.498 73.08a19 19 0 0 1 17-18.893 19.193 19.193 0 0 0-2-.107 19 19 0 1 0 2 37.893 19 19 0 0 1-17-18.893z",
    fill: "#2f2e41"
  }), _react.default.createElement("ellipse", {
    cx: 390.998,
    cy: 119.08,
    rx: 25.5,
    ry: 19,
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M343.124 179.556c-.35 1.877-1.184 3.763-.48 5.696.521 1.432 1.79 2.567 2.553 3.924 1.535 2.73.518 6.226-2.122 7.295a7.147 7.147 0 0 0-4.912-.83 3.199 3.199 0 0 0-2.478 3.467c.352 2.309 3.043 3.788 4.412 5.848a15.131 15.131 0 0 1 1.672 4.959c.674 2.697 1.86 5.374 1.996 8.072s-1.175 5.548-3.852 5.935c-2.25.324-4.67-1.201-6.298-3.053s-2.726-4.049-4.217-5.999c-4.845-6.335-13.127-9.288-18.734-15.037-7.186-7.367-8.708-18.28-6.137-26.978 1.08-3.653 2.866-7.145 5.901-9.374 3.186-2.339 7.44-3.087 11.008-4.906 3.815-1.945 6.741-5.056 10.116-7.596s7.554-4.576 12.159-3.891c3.212.477 6.259 2.226 9.446 3.05a15.283 15.283 0 0 0 10.417-.858l-2.962 3.178a15.083 15.083 0 0 0 6.713 1.018 8.138 8.138 0 0 1-4.505 4.069 8.086 8.086 0 0 0 5.615 1.693c-2.198 2.511-4.56 5.124-7.946 6-1.659.428-3.466.407-5.178.687-3.65.597-6.724 2.524-9.704 4.415-1.565.993-3.533 2.119-3.522 4.18.01 1.717 1.397 3.118 1.039 5.036z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M354.998 237.58s-9 33 7 40 49 33 55 42 13 12 13 12 24-20 19-26-25-24-25-24-51-55-69-44z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M433.998 238.58s-36.74-10.502-47.87-12.251-40.13 1.251-34.13 6.251 41 9 41 9l42 16z",
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M433.998 197.58s3 20 3 27 5 13 1 13-7-4-7 0-6 28 0 28 21-4 24-4 13-2 12-13-5-23-3-25 3-12 1-14-7-15-7-15z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M645.367 401.129a7.009 7.009 0 1 0-1.67 13.917l13.916 1.67 1.671-13.916a7.009 7.009 0 1 0-13.917-1.671zM813.097 334.252a7.009 7.009 0 0 0-6.883 12.211l12.21 6.883 6.884-12.21a7.009 7.009 0 1 0-12.211-6.884zM738.367 429.129a7.009 7.009 0 1 0-1.67 13.917l13.916 1.67 1.671-13.916a7.009 7.009 0 1 0-13.917-1.671z",
    fill: primaryColor,
    opacity: 0.3
  }));
};

UndrawLove.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawLove;
exports.default = _default;