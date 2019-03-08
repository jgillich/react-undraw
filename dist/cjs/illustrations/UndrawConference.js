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

var UndrawConference = function UndrawConference(_props) {
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
    viewBox: "0 0 1054 753.98",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 613.8,
    y1: 704.36,
    x2: 613.8,
    y2: 170.99,
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
    x1: 554.79,
    y1: 1161.25,
    x2: 554.79,
    y2: 1156.08,
    gradientTransform: "translate(105.54 -998.88)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 844.73,
    y1: 797.04,
    x2: 844.73,
    y2: 293.44,
    gradientTransform: "translate(-592.04)",
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("ellipse", {
    cx: 510,
    cy: 707.44,
    rx: 510,
    ry: 25.5,
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("path", {
    d: "M915.91 625.93a15.39 15.39 0 0 1-1.49 2.3q-7.42-5.24-15.14-10.24.15-.33.33-.66a14.53 14.53 0 0 1 5.15-5.62c2.83-1.74 6-2.13 8.65-.74s4.1 4.26 4.25 7.56a14.43 14.43 0 0 1-1.75 7.4z",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 987.67,
    cy: 681.57,
    rx: 12.07,
    ry: 9.22,
    transform: "rotate(-62.09 890.602 705.711)",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 994.58,
    cy: 668.53,
    rx: 12.07,
    ry: 9.22,
    transform: "rotate(-62.09 897.505 692.665)",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 1001.48,
    cy: 655.49,
    rx: 12.07,
    ry: 9.22,
    transform: "rotate(-62.09 904.415 679.624)",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 1008.39,
    cy: 642.45,
    rx: 12.07,
    ry: 9.22,
    transform: "rotate(-62.09 911.317 666.578)",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M952.14 463.99a45.63 45.63 0 0 1-.67-6.07l23.29 7.82-23.26-12.09a44.21 44.21 0 0 1 15.64-31.33l22.54 32.58-17.5-36.25a44.18 44.18 0 1 1 41.34 77.85 43.52 43.52 0 0 1 .68 9.48l-35.45-.28 34.92 5.75a44.45 44.45 0 0 1-4.58 13.62A44 44 0 0 1 988 544.81a44.19 44.19 0 1 1-61.38-32.5 44.2 44.2 0 0 1 25.52-48.32z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M1009.09 525.1A44 44 0 0 1 988 544.81a44.19 44.19 0 1 1-61.38-32.5c-1.76-9.42 84.79 8.4 82.47 12.79z",
    opacity: 0.1
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("path", {
    d: "M888.22 365.3a26.41 26.41 0 0 1-1.93 4q-13-6.94-26.38-13.5c.13-.37.26-.75.4-1.13a23.51 23.51 0 0 1 7.16-10c4.2-3.36 9.25-4.63 13.75-2.92s7.43 6 8.34 11.3a23.52 23.52 0 0 1-1.34 12.25z",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 955.76,
    cy: 410.66,
    rx: 19.55,
    ry: 14.93,
    transform: "matrix(.36 -.93 .93 .36 158.97 1084.82)",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 964.26,
    cy: 388.34,
    rx: 19.55,
    ry: 14.93,
    transform: "rotate(-69.16 874.844 404.771)",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 972.76,
    cy: 366.01,
    rx: 19.55,
    ry: 14.93,
    transform: "rotate(-69.16 883.343 382.446)",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 981.26,
    cy: 343.68,
    rx: 19.55,
    ry: 14.93,
    transform: "rotate(-69.16 891.84 360.109)",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M914.18 97.99a71.37 71.37 0 0 1-2.29-9.63l39 7.94-39.77-14.8A71.61 71.61 0 0 1 930 27.99l42.7 47.86-35.34-54.75a71.53 71.53 0 1 1 81.9 116.89 71.78 71.78 0 0 1 3 15.09l-57 6.61 57.24 2.29a71.52 71.52 0 0 1-34.67 58.67 71.52 71.52 0 1 1-105.09-40 71.55 71.55 0 0 1 31.44-82.66z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M1017.84 184.75a71.21 71.21 0 0 1-30 35.88 71.52 71.52 0 1 1-105.09-40c-4.67-14.78 137.94-3.39 135.09 4.12z",
    opacity: 0.1
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("path", {
    d: "M201.71 439.59a31.58 31.58 0 0 0 1.69 5q16.38-6.29 33.12-12c-.1-.45-.2-.93-.31-1.39a28.05 28.05 0 0 0-7-12.91c-4.46-4.59-10.24-6.83-15.8-5.47s-9.66 6-11.5 12.11a27.91 27.91 0 0 0-.2 14.66z",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 285.23,
    cy: 480.78,
    rx: 17.76,
    ry: 23.25,
    transform: "rotate(-13.72 -54.81 747.526)",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 278.49,
    cy: 453.17,
    rx: 17.76,
    ry: 23.25,
    transform: "rotate(-13.72 -61.568 719.94)",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 271.75,
    cy: 425.57,
    rx: 17.76,
    ry: 23.25,
    transform: "rotate(-13.72 -68.284 692.358)",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 265.02,
    cy: 397.97,
    rx: 17.76,
    ry: 23.25,
    transform: "rotate(-13.72 -74.996 664.735)",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M210.49 120.31a83.8 83.8 0 0 0 4.12-11l-47.14 3.62 49.11-11.6a85.22 85.22 0 0 0-14.4-65.86l-57.45 50.17 49.78-59.39A85.06 85.06 0 1 0 80.6 151.99a85.08 85.08 0 0 0-5.75 17.37l66.3 16.21-67.88-5.75a85.11 85.11 0 0 0 32.27 74.35 85.06 85.06 0 1 0 129.89-31.68 85.05 85.05 0 0 0-24.94-102.18z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M75.38 207.42a84.72 84.72 0 0 0 30.16 46.78 85.06 85.06 0 1 0 129.89-31.71c7.65-16.76-162.31-24.34-160.05-15.07z",
    opacity: 0.1
  })), _react.default.createElement("path", {
    d: "M1031.16 171H196.44a7.45 7.45 0 0 0-7.43 7.46v510.85a15 15 0 0 0 15 15.05h819.61a15 15 0 0 0 15-15.05V178.45a7.45 7.45 0 0 0-7.46-7.45z",
    transform: "translate(-73 -73.01)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M962.22 129.7v483.59a14.88 14.88 0 0 1-14.87 14.88H134.4a14.88 14.88 0 0 1-14.87-14.88V129.7z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M962.22 108.21v21.49H119.53v-21.49a7.37 7.37 0 0 1 7.37-7.38h828a7.37 7.37 0 0 1 7.32 7.38z",
    fill: "#ededf4"
  }), _react.default.createElement("circle", {
    cx: 132.88,
    cy: 115.05,
    r: 3.45,
    fill: "#fa5959",
    opacity: 0.8
  }), _react.default.createElement("circle", {
    cx: 142.36,
    cy: 115.05,
    r: 3.45,
    fill: "#fed253",
    opacity: 0.8
  }), _react.default.createElement("circle", {
    cx: 151.84,
    cy: 115.05,
    r: 3.45,
    fill: "#8ccf4d",
    opacity: 0.8
  }), _react.default.createElement("path", {
    transform: "rotate(90 660.335 86.785)",
    fill: "url(#prefix__b)",
    d: "M658.61 157.21h3.45v5.17h-3.45z"
  }), _react.default.createElement("path", {
    fill: "#ededf4",
    d: "M313.33 172.09h81v8.62h-81zM313.33 197.07h454.95v8.62H313.33zM313.33 222.06h454.95v8.62H313.33zM313.33 247.05h454.95v8.62H313.33zM313.33 272.04h454.95v8.62H313.33zM400.21 319.7h280.9v217.14h-280.9z"
  }), _react.default.createElement("ellipse", {
    cx: 905.6,
    cy: 748.81,
    rx: 26.87,
    ry: 5.17,
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 905.15,
    cy: 746.62,
    rx: 3.13,
    ry: 4.09,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 905.15,
    cy: 741.61,
    rx: 3.13,
    ry: 4.09,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 905.15,
    cy: 736.61,
    rx: 3.13,
    ry: 4.09,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 905.15,
    cy: 731.6,
    rx: 3.13,
    ry: 4.09,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 905.15,
    cy: 726.6,
    rx: 3.13,
    ry: 4.09,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 905.15,
    cy: 721.6,
    rx: 3.13,
    ry: 4.09,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 905.15,
    cy: 716.59,
    rx: 3.13,
    ry: 4.09,
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M916.86 682.34a14.27 14.27 0 0 0 1.16-1.71l-8.21-1.35 8.88.06a14.93 14.93 0 0 0 .29-11.87l-11.93 6.19 11-8.09a15 15 0 1 0-24.74 16.77 14.55 14.55 0 0 0-1.71 2.73l10.67 5.55-11.38-3.82a15 15 0 0 0 2.42 14.07 15 15 0 1 0 23.55 0 15 15 0 0 0 0-18.53z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M890.1 691.6a14.92 14.92 0 0 0 3.21 9.27 15 15 0 1 0 23.55 0c2.01-2.55-26.76-10.95-26.76-9.27z",
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 76.98,
    cy: 682.04,
    rx: 12.16,
    ry: 2.34,
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 76.77,
    cy: 681.05,
    rx: 1.42,
    ry: 1.85,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 76.77,
    cy: 678.78,
    rx: 1.42,
    ry: 1.85,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 76.77,
    cy: 676.52,
    rx: 1.42,
    ry: 1.85,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 76.77,
    cy: 674.25,
    rx: 1.42,
    ry: 1.85,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 76.77,
    cy: 671.99,
    rx: 1.42,
    ry: 1.85,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 76.77,
    cy: 669.72,
    rx: 1.42,
    ry: 1.85,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 76.77,
    cy: 667.45,
    rx: 1.42,
    ry: 1.85,
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M82.07 651.99a5.84 5.84 0 0 0 .53-.77l-3.72-.62h4a6.8 6.8 0 0 0 .13-5.37l-5.4 2.8 5-3.66a6.78 6.78 0 1 0-11.2 7.59 6.59 6.59 0 0 0-.77 1.24l4.83 2.51-5.15-1.72a6.78 6.78 0 0 0 1.09 6.37 6.78 6.78 0 1 0 10.66 0 6.79 6.79 0 0 0 0-8.39z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M70 656.14a6.76 6.76 0 0 0 1.45 4.2 6.78 6.78 0 1 0 10.66 0c.89-1.16-12.11-4.96-12.11-4.2z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M351.93 377.47h-46.64a3.07 3.07 0 0 0-3 2.45l-12.62 62.26a2.19 2.19 0 0 0 0 .51l-1.2.13-1.07.11a1.33 1.33 0 0 1-.19-.05 1.44 1.44 0 0 1-.6-1 45.9 45.9 0 0 1-1.33-6.76 60.86 60.86 0 0 1 0-7.52c.06-2 0-3.95 0-5.92a55.41 55.41 0 0 0 .59-6.69 24.18 24.18 0 0 0-.7-7.1 24.73 24.73 0 0 0-1.4-3.67c-.44-3.36-.92-6.73-1.41-10.08-.37-2.49-.74-5-1.23-7.46.11-.41.2-.82.27-1.24a11.83 11.83 0 0 0-4.41-10.85 14.18 14.18 0 0 0-3.29-2 30.38 30.38 0 0 0-3-1.05l-16.09-5c-1.49-2.17-3-4.36-4.34-6.6a44.51 44.51 0 0 1-3.41-6.34 25.12 25.12 0 0 0 6.65-33.86c-.27-.42-.55-.84-.84-1.24a16.4 16.4 0 0 0-.67-5.73 8.91 8.91 0 0 0-.61-2 10.24 10.24 0 0 0-1.65-2.38c-.13-.15-.28-.29-.42-.44a26.13 26.13 0 0 0-4.4-3.86c-5.34-3.87-12.5-8.57-19.05-10.15a22.68 22.68 0 0 0-9.84-.05l-.5-.14-.95-.19c.24.1.47.23.71.34a22.06 22.06 0 0 0-10.41.19c-4.24 1.26-5.72 4.62-7.51 8.29a37.55 37.55 0 0 1-12.78 14.61c-3.52 2.36-7.69 4.4-9.38 8.27-1.58 3.61-.51 7.74-.14 11.67A32.15 32.15 0 0 1 162.78 365c-4.81 3.7-11.23 6.8-12.26 12.76-.73 4.25 1.67 8.31 3.48 12.23 3.83 8.26 5.14 18.35.64 26.28-1.27 2.25-3 4.31-3.68 6.8-1.2 4.43 1.35 9.25 5.17 11.83s8.61 3.27 13.23 3.25c.79 0 1.59 0 2.4-.11-.4 3.87-.9 7.74-1.53 11.58-.93 5.67-2.12 11.36-1.76 17.09.19 3.1.9 6.31 2.91 8.7 3.16 3.77 8.66 4.54 13.59 4.35 7.8-.3 15.47-2.33 23.23-2.78a2.37 2.37 0 0 0-.22 1c0 1.35.83 2.84.45 4.18a4.54 4.54 0 0 1-.7 1.3c-2 2.94-4.37 6.22-3.68 9.71.34 1.7 1.4 3.4.91 5.07a7.9 7.9 0 0 1-1.28 2.15c-2.74 4.08-2.17 9.45-1.48 14.32l.92.26c-.26.56-.52 1.13-.76 1.7a22.58 22.58 0 0 0-1.91 8 32.08 32.08 0 0 0 1.56 9.12c1.36 5 2.77 10 4.56 14.83 1.52 4.15 3.31 8.18 5.08 12.22.56 1.24 1.11 2.49 1.66 3.74q5.12 11.6 10.26 23.22a14 14 0 0 1 1 2.78c.18.82.22 1.65.35 2.48.54 3.22 2.64 5.93 4.18 8.82 5.19 9.75 3.9 21.51 2.49 32.46a13.2 13.2 0 0 0 2.57 2c-.15 1.1-.3 2.21-.53 3.27-1.37 6.25-3 12.45-3.95 18.8a59.45 59.45 0 0 0-.7 9.33c0 3 1.07 6.05 1.07 9 .73 3 1.84 5.86 2.62 8.83.32 4.61.86 9.22 1.55 13.82q.34 6.26.7 12.53c.21 3.7.38 7.59-1.28 10.91 0 .11-.12.22-.18.33a8.59 8.59 0 0 0-7.53 3.52 16.65 16.65 0 0 0-2.91 8.61 7.22 7.22 0 0 0 .43 3.86c.48 1 1.32 1.67 1.87 2.59a9.81 9.81 0 0 1 1 3.42c1.12 6.92 2.25 13.86 2.85 20.85.18 2.13.35 4.38 1.6 6.12s4 2.59 5.57 1.12a123 123 0 0 1-2.34-24.32 5.58 5.58 0 0 1 1.58 0c.31 1.41.74 2.81 1.14 4.2a24.12 24.12 0 0 0 1 3c-.16 1.37 0 3.43-.06 4.43q-.12 6.63 0 13.25.09 3.78.27 7.56a1.77 1.77 0 0 0 .16.81.37.37 0 0 0 .32.14h2.53a27.71 27.71 0 0 0 .11-3v-6.88-5.88c.59 3.51 1.43 7 2.28 10.45l1.8 7.38.18.74 1.53 6.25a2.93 2.93 0 0 0 .22.65 2.59 2.59 0 0 0 .75.76 22.37 22.37 0 0 0 22.17 2.38 2.51 2.51 0 0 0 .75-.47 2.64 2.64 0 0 0 .51-1.87 12.31 12.31 0 0 1 1.14-5.79 9.79 9.79 0 0 0 1.12-2.15 5.66 5.66 0 0 0-.68-3.57l-1.65-3.85a18.22 18.22 0 0 0 2.33-.24c1.17-1 .32-3.07 1.29-4.25a10.56 10.56 0 0 1 1.29-1c1.22-1.07 1.1-3 .55-4.53-1.78-4.93-6.54-8.07-11-10.85l-.58-.36c-3.64-17-10.06-33.75-8.35-51 .37-3.68 1.11-7.32 1.71-11 3-18.1 2.81-36.67 6.27-54.68a11.59 11.59 0 0 0 5.08-1.5c2.93-1.82 4.36-5.34 4.75-8.75s-.08-6.85 0-10.29c.09-4.93 1.27-9.77 2.45-14.58 1.38-5.61-1-11.56.44-17.15a41.49 41.49 0 0 0 1.3-5.25c.3-2.51-.2-5.16.69-7.54.4-1.09 1.09-2.06 1.55-3.13 2-4.52-.2-10 1.81-14.54a12 12 0 0 0 1.43-3.4 7 7 0 0 0-.35-2.76c-.51-2.08-1-4.18-1.33-6.29a9.62 9.62 0 0 1-.19-2.21 11.7 11.7 0 0 1 .53-2.31c1.52-5.26 1.71-10.81 1.88-16.3.09-2.91.17-6-1.06-8.62a9.77 9.77 0 0 0-1.4-2.2l.15-.08c-.77-3.13-1.38-6.77-.26-9.8.47-1.29 1.28-2.53 1.13-3.9s-1.09-2.31-1.47-3.53c-.65-2 .34-4.16.92-6.22 1-3.52.77-7.26.54-10.92a4.91 4.91 0 0 0-.52-2.27c-.26-.43-.65-.76-.9-1.2a3.84 3.84 0 0 1 .07-3.4 17.9 17.9 0 0 0 1.35-3.24 3.36 3.36 0 0 0 0-1.05c.74-.32 1.4-.8 2.11-1.18 3-1.6 6.55-1.36 9.93-1.45s7.14-.76 9.16-3.45a2.57 2.57 0 0 1 .8-.84 1.38 1.38 0 0 1 .34-.12c1.23.17 2 .16 1.83-.16.56-.25.82-.86 1.15-1.37a3.37 3.37 0 0 1 .28-.38 28 28 0 0 1 3.92-1.94 3 3 0 0 0-.73 0 18.72 18.72 0 0 1 6.46-.9c2.09 0 5.69.29 7.32-1.33 3-1.91 3.89-5.74 5.28-9a33 33 0 0 1 1.55-3.09l7.77-.76a3.08 3.08 0 0 0 2.71-2.44l11.66-57.59a3.06 3.06 0 0 0-2.88-3.66zm-147.15 79a13.78 13.78 0 0 1-10.94 0c-.52-.23-1.09-.87-.67-1.25s.76-.06 1.1-.22c.65-.32.18-1.28-.18-1.9-1-1.8-.31-4.08.68-5.9s2.26-3.62 2.3-5.69a11 11 0 0 1 0-2 7.44 7.44 0 0 1 1.48-2.56c.18-.26.33-.54.49-.82.27.42.54.83.82 1.24q1.35 2.07 2.69 4.17a6.71 6.71 0 0 1 1.31 3.23 5.34 5.34 0 0 0 .11 2.08c.4.88 1.64 1.61 1.18 2.46a3.3 3.3 0 0 0 0 2.94c.47.81 1.17 1.48 1.64 2.28a5.07 5.07 0 0 1 .34.75c-.76.4-1.55.84-2.35 1.19zm97-10.79c-.59.14-1.18.28-1.77.44-.08-.36-.11-.56-.11-.56l-3.12.93a7.15 7.15 0 0 1-3.44-.71l12.88-1.26c-1.47.42-2.95.81-4.44 1.16z",
    transform: "translate(-73 -73.01)",
    fill: "url(#prefix__c)"
  }), _react.default.createElement("path", {
    d: "M134 231.99a37.35 37.35 0 0 1-12.63 14.54c-3.49 2.35-7.61 4.37-9.28 8.22-1.56 3.59-.5 7.71-.14 11.61a32 32 0 0 1-12.07 27.8c-4.75 3.69-11.1 6.77-12.12 12.7-.72 4.22 1.66 8.27 3.45 12.16 3.78 8.22 5.08 18.26.63 26.14-1.26 2.24-3 4.29-3.64 6.77-1.19 4.41 1.33 9.2 5.11 11.76s8.52 3.26 13.08 3.24c3.31 0 6.9-.5 9.26-2.83 1.58-1.56 2.36-3.73 3.1-5.82l5.75-16.29c1-2.94 2.14-6 4.32-8.2 4.63-4.72 12.17-4.22 18.78-4.14a86.54 86.54 0 0 0 28.63-4.51c5.4-1.83 11.26-4.93 12.52-10.48s-2.48-10.6-5.75-15.1q-3.67-5-6.94-10.35c-2.13-3.44-4.16-7.07-4.75-11.07-1-6.65 2.15-13.11 4.56-19.38s4.1-13.69.59-19.42a21 21 0 0 0-5.69-5.65c-5.28-3.85-12.36-8.52-18.83-10.09a21.81 21.81 0 0 0-10.53.14c-4.19 1.3-5.66 4.64-7.41 8.25z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M205 309.72a81.2 81.2 0 0 1 2.75 13.5c1.6 11 3.21 22.14 2.91 33.29a64.19 64.19 0 0 0 0 7.47 46.84 46.84 0 0 0 1.33 6.73 1.41 1.41 0 0 0 .59 1c.38.19.83 0 1.25-.05 1.43-.17 2.49 1.21 3.59 2.14a6.84 6.84 0 0 0 7.76.58 8.64 8.64 0 0 0 3.31 8.86 11.74 11.74 0 0 0 9.61 1.75c-1.66-.26-3.25.9-4.16 2.31-.32.5-.58 1.11-1.13 1.36s-1.5-.07-2.15.27a2.65 2.65 0 0 0-.79.84c-2 2.68-5.71 3.34-9.05 3.43s-6.88-.14-9.82 1.45c-.73.39-1.41.89-2.17 1.21-2.32 1-5.09 0-6.89-1.71a14.82 14.82 0 0 1-3.54-6.54c-3-9.68-2.4-20.05-1.79-30.16.97-16.07 3.01-32.53 8.39-47.73z",
    fill: "#454b69"
  }), _react.default.createElement("path", {
    d: "M205 309.72a81.2 81.2 0 0 1 2.75 13.5c1.6 11 3.21 22.14 2.91 33.29a64.19 64.19 0 0 0 0 7.47 46.84 46.84 0 0 0 1.33 6.73 1.41 1.41 0 0 0 .59 1c.38.19.83 0 1.25-.05 1.43-.17 2.49 1.21 3.59 2.14a6.84 6.84 0 0 0 7.76.58 8.64 8.64 0 0 0 3.31 8.86 11.74 11.74 0 0 0 9.61 1.75c-1.66-.26-3.25.9-4.16 2.31-.32.5-.58 1.11-1.13 1.36s-1.5-.07-2.15.27a2.65 2.65 0 0 0-.79.84c-2 2.68-5.71 3.34-9.05 3.43s-6.88-.14-9.82 1.45c-.73.39-1.41.89-2.17 1.21-2.32 1-5.09 0-6.89-1.71a14.82 14.82 0 0 1-3.54-6.54c-3-9.68-2.4-20.05-1.79-30.16.97-16.07 3.01-32.53 8.39-47.73z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M156.16 604.25c.84 3.49 2.22 6.84 3 10.34a59.56 59.56 0 0 1 1 9.14l.86 15.52c.21 3.68.38 7.55-1.26 10.85-1.13 2.29-3.09 4.21-3.65 6.7-.88 3.9 1.91 7.59 4.53 10.62l12.86 14.9c4 4.67 8.43 9.58 14.4 11.17a4.78 4.78 0 0 0 2.75.1c1.66-.55 2.47-2.56 2.23-4.3a10.93 10.93 0 0 0-2.29-4.67c-3.37-4.73-7-9.38-9.16-14.76-2.78-6.84-3.07-14.41-2.9-21.79.68-30.1 8.25-59.85 7.39-90-6.57-.5-13.4-1.59-20-1.53-5.87.06-5.17 6-6.19 10.75-1.36 6.22-3 12.39-3.91 18.7a59 59 0 0 0-.69 9.29c0 3.03 1.03 6.06 1.03 8.97z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M156.16 604.25c.84 3.49 2.22 6.84 3 10.34a59.56 59.56 0 0 1 1 9.14l.86 15.52c.21 3.68.38 7.55-1.26 10.85-1.13 2.29-3.09 4.21-3.65 6.7-.88 3.9 1.91 7.59 4.53 10.62l12.86 14.9c4 4.67 8.43 9.58 14.4 11.17a4.78 4.78 0 0 0 2.75.1c1.66-.55 2.47-2.56 2.23-4.3a10.93 10.93 0 0 0-2.29-4.67c-3.37-4.73-7-9.38-9.16-14.76-2.78-6.84-3.07-14.41-2.9-21.79.68-30.1 8.25-59.85 7.39-90-6.57-.5-13.4-1.59-20-1.53-5.87.06-5.17 6-6.19 10.75-1.36 6.22-3 12.39-3.91 18.7a59 59 0 0 0-.69 9.29c0 3.03 1.03 6.06 1.03 8.97z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M160.05 650.49c-3-.62-6.12 1-8 3.44a16.56 16.56 0 0 0-2.88 8.56 7 7 0 0 0 .43 3.84c.47.95 1.3 1.67 1.84 2.58a9.68 9.68 0 0 1 1 3.4c1.12 6.89 2.24 13.79 2.82 20.74.18 2.12.35 4.36 1.59 6.09s4 2.57 5.51 1.12a123.32 123.32 0 0 1-2.33-24.09c3.51-.48 6.57 2.28 8.86 5a77.55 77.55 0 0 1 6.43 8.73 55.09 55.09 0 0 0 5.64 8.19 20.64 20.64 0 0 0 18.22 6.23c1.16-1 .31-3.06 1.27-4.23a10.46 10.46 0 0 1 1.28-1c1.21-1.06 1.08-3 .54-4.5-1.75-4.91-6.46-8-10.87-10.8-8-5-16.1-10-24.15-14.84a16 16 0 0 1-6.63-8.18c-.29-.87-1.55-10.61-.57-10.28z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M160.05 650.49c-3-.62-6.12 1-8 3.44a16.56 16.56 0 0 0-2.88 8.56 7 7 0 0 0 .43 3.84c.47.95 1.3 1.67 1.84 2.58a9.68 9.68 0 0 1 1 3.4c1.12 6.89 2.24 13.79 2.82 20.74.18 2.12.35 4.36 1.59 6.09s4 2.57 5.51 1.12a123.32 123.32 0 0 1-2.33-24.09c3.51-.48 6.57 2.28 8.86 5a77.55 77.55 0 0 1 6.43 8.73 55.09 55.09 0 0 0 5.64 8.19 20.64 20.64 0 0 0 18.22 6.23c1.16-1 .31-3.06 1.27-4.23a10.46 10.46 0 0 1 1.28-1c1.21-1.06 1.08-3 .54-4.5-1.75-4.91-6.46-8-10.87-10.8-8-5-16.1-10-24.15-14.84a16 16 0 0 1-6.63-8.18c-.29-.87-1.55-10.61-.57-10.28z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M158.75 595.51c-1.61 20.11 2.9 40.13 6.91 59.9a22.48 22.48 0 0 1 .61 4.82 37 37 0 0 1-1 6c-1.52 8.16.42 16.52 2.35 24.59 1.34 5.59 3.23 11.9 8.44 14.34 3.67 1.73 8 1 12 .19a7.13 7.13 0 0 0 3.61-1.45c1.44-1.35 1.49-3.58 1.37-5.54-1.38-22.2-12.62-43.49-10.43-65.63.36-3.66 1.09-7.28 1.69-10.92 3.1-18.82 2.7-38.19 6.7-56.82a3.43 3.43 0 0 0 0-2 3.34 3.34 0 0 0-1.53-1.46c-3.64-2.18-7.53-4.11-11.73-4.7-3.28-.46-7.4-.1-10.16 1.93s-3.08 6.72-3.93 10.07a160.61 160.61 0 0 0-4.9 26.68z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M164 708.44a1.68 1.68 0 0 0 .15.8.38.38 0 0 0 .32.15h2.51c.1-1 .1-2 .11-3v-6.84c0-5.42 0-10.86-.24-16.25a1.78 1.78 0 0 0-.09-.59.53.53 0 0 0-.28-.26c-.59-.28-2-1.15-2.5-.15s-.28 4.15-.31 5.46q-.12 6.59 0 13.18.17 3.75.33 7.5zM207.91 470.51a9.63 9.63 0 0 0 .19 2.2c.36 2.1.81 4.18 1.32 6.25a7.21 7.21 0 0 1 .34 2.75 12.25 12.25 0 0 1-1.41 3.38c-2 4.47.15 10-1.79 14.46-.46 1.07-1.14 2-1.54 3.12-.87 2.37-.38 5-.67 7.5a41 41 0 0 1-1.29 5.22c-1.41 5.56.92 11.48-.44 17.06-1.16 4.78-2.34 9.6-2.42 14.51-.07 3.41.4 6.83 0 10.23s-1.81 6.89-4.7 8.7c-2.28 1.43-5.11 1.59-7.81 1.64-5.19.09-10.41-.06-15.6-.46s-10.76-1.25-14.41-4.94c1.39-10.89 2.66-22.58-2.47-32.29-1.52-2.87-3.6-5.57-4.13-8.77-.14-.82-.18-1.65-.35-2.46a14.28 14.28 0 0 0-1-2.77q-5.07-11.57-10.15-23.11c-.54-1.24-1.08-2.48-1.64-3.72-1.75-4-3.51-8-5-12.14-1.77-4.84-3.17-9.8-4.51-14.76a32 32 0 0 1-1.54-9.08 22.56 22.56 0 0 1 1.89-7.91c.6-1.46 1.3-2.89 2-4.29a211.55 211.55 0 0 1 61.43-5.26 33.82 33.82 0 0 1 9.71 1.61 14.12 14.12 0 0 1 5.59 3.65 9.78 9.78 0 0 1 1.73 2.59c1.21 2.64 1.13 5.68 1.05 8.58-.18 5.45-.36 11-1.86 16.21a11.45 11.45 0 0 0-.52 2.3z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M193.81 697.28a22.89 22.89 0 0 1-10.41 4.38c-3.34.49-7 .14-9.65-2-3-2.39-4.07-6.45-4.93-10.21l-1.15-5c-.42-1.8-.83-3.6-1.16-5.42a58.31 58.31 0 0 1-.75-14.57c-2.74 1.07-4.38 4.32-4.56 7.25s.73 5.8 1.56 8.62a16.36 16.36 0 0 0 1.49 3.91c.49.82 1.13 1.55 1.55 2.41a12 12 0 0 1 .89 4 111.51 111.51 0 0 0 2.69 13.4l1.78 7.34.18.74 1.51 6.22a2.69 2.69 0 0 0 .22.64 2.44 2.44 0 0 0 .74.76 22 22 0 0 0 21.92 2.37 2.64 2.64 0 0 0 .75-.47 2.68 2.68 0 0 0 .49-1.85 12.45 12.45 0 0 1 1.14-5.77 9.85 9.85 0 0 0 1.1-2.14 5.74 5.74 0 0 0-.67-3.55l-3.7-8.66a8.54 8.54 0 0 0-1.03-2.4z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M185.13 336.99a23 23 0 0 1-1.12 5.6 7.87 7.87 0 0 1-2.29 3.4c-1.72-2.32-4.79-3.12-7.12-4.83a25.75 25.75 0 0 1-4.95-5.64c-3-4-6.42-7.55-9.62-11.33-.49-.58-1-1.15-1.43-1.73a50.57 50.57 0 0 1-4.43-6.33c-2.67-4.6-4.5-9.89-8.52-13.37-2.19-1.9-4.94-3.15-6.88-5.3a17.82 17.82 0 0 0 2.27-6.59c.46-2.23.91-4.47 1.15-6.74.07-.6.11-1.2.13-1.8v-.77c0-1.85-1.19-5 .7-6.06 1.73-1 4.57-1 6.61-.94h.37a24.37 24.37 0 0 1 13.29 4.12 8.13 8.13 0 0 1 2.3 2.11 8.82 8.82 0 0 1 1 5.46c0 .44 0 .88-.07 1.31v.64c-.07 2.14.14 4.43 1.64 5.92s4.16 1.68 6.35 2.36c.36.12.7.24 1.05.38a14.09 14.09 0 0 1 5.91 5 24.16 24.16 0 0 1 3.43 8.25 47.35 47.35 0 0 1 1.15 8 114.18 114.18 0 0 1-.92 18.88z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M166.55 287.51v.64c-2.67 1-9.18-1.76-12.19-1.76-6 0-7.82 1.17-12.14-2.31.09-.85.15-1.71.17-2.57 0-1.85-1.19-5 .7-6.06s4.9-1 6.94-.94a24.37 24.37 0 0 1 13.29 4.12 8.13 8.13 0 0 1 2.3 2.11c1.27 1.92 1.07 4.45.93 6.77z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M183.1 262.6a25.13 25.13 0 0 1-30 24.66 25.16 25.16 0 0 1-20.27-24.66 25.15 25.15 0 1 1 50.29 0z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M140.8 292.31a5.23 5.23 0 0 0-2.78-1.19 3.93 3.93 0 0 0-3.31 2.56c-.61 1.35-.8 2.84-1.33 4.23a9.27 9.27 0 0 1-3.72 4.52c-1.19.74-2.6 1.26-3.41 2.4-1.28 1.81-.5 4.34.58 6.28 4 7.23 11.3 12 18.29 16.41l7.88 5a102.77 102.77 0 0 0 9.82 5.75c5.47 2.7 11.39 4.43 16.83 7.19 2.5 1.26 5 2.77 7.73 3.2a25.34 25.34 0 0 0 1.09-5.73c1.35-12 2.68-24.27 0-36.05a12.89 12.89 0 0 0-2.78-6.21 13.51 13.51 0 0 0-3.5-2.42 99 99 0 0 0-9.84-4.62 11.24 11.24 0 0 0-5.06-1.12 10.74 10.74 0 0 0 1.16 3.76q6.33 14.11 12.68 28.23a12.86 12.86 0 0 1 1.54 5.57c-.09 2.77-2 5.47-1.19 8.13a189.67 189.67 0 0 0-25.25-29.66 4.06 4.06 0 0 1-1-1.25 5.06 5.06 0 0 1-.14-2.33c.09-1.48-.22-3.46-1.46-4.45-.86-.69-2.13-.89-3.08-1.49-3.31-2.1-6.5-4.47-9.75-6.71z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M208 443.06a54.18 54.18 0 0 1-20.37 5.63 162 162 0 0 1-21.25.12l-16.12-.61c-7.32-.29-14.51-.88-21.49-3.08.6-1.46 1.3-2.89 2-4.29a211.55 211.55 0 0 1 61.43-5.26 33.82 33.82 0 0 1 9.71 1.61 14.12 14.12 0 0 1 5.59 3.65c.16.76.34 1.51.5 2.23z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M206.87 364.48c-2.78 9.41-.87 19.71.86 29.36a2.82 2.82 0 0 1 1.14 3.07 18.73 18.73 0 0 1-1.34 3.22 3.81 3.81 0 0 0-.08 3.37c.25.44.64.78.9 1.21a4.89 4.89 0 0 1 .51 2.25c.22 3.64.44 7.36-.54 10.87-.57 2-1.54 4.16-.9 6.18.38 1.22 1.32 2.25 1.45 3.52s-.65 2.59-1.12 3.87c-1.11 3-.51 6.63.26 9.75a54.18 54.18 0 0 1-20.37 5.63 160.28 160.28 0 0 1-21.25.12l-16.12-.61c-7.38-.28-14.62-.88-21.65-3.12-.68-4.85-1.25-10.19 1.47-14.24a8.36 8.36 0 0 0 1.26-2.15c.48-1.66-.57-3.35-.9-5-.69-3.47 1.64-6.74 3.63-9.65a4.31 4.31 0 0 0 .7-1.3c.37-1.34-.44-2.81-.45-4.16a2.33 2.33 0 0 1 .26-1.12c.29-.57.85-1 1.15-1.52a4.05 4.05 0 0 0 .28-2.32q-.56-7.55-1.82-15c-.08-.44-.16-.9-.27-1.35a7.18 7.18 0 0 0-.73-2c-.47-.81-1.16-1.46-1.62-2.27a3.28 3.28 0 0 1 0-2.93c.45-.84-.78-1.57-1.17-2.44a5.5 5.5 0 0 1-.11-2.07 6.69 6.69 0 0 0-1.3-3.22c-.88-1.39-1.76-2.77-2.66-4.14q-6-9.31-12.51-18.3c-2.06-2.87-4.17-5.73-6.3-8.55-1.73-2.28-3.51-4.59-4.38-7.32a10.59 10.59 0 0 1-.36-1.45 12.39 12.39 0 0 1 1.07-7.72 39.05 39.05 0 0 1 4-5.61 68.29 68.29 0 0 1 4.6-6.18 9.59 9.59 0 0 1 6.69-3.37c1.49 0 3.23.42 4.26-.65.38-.38.58-.89 1-1.26 1.09-1 2.88-.33 4.19.41l25.18 14.23 4.08 2.32c.74.44 1.5.88 2.24 1.33a87.63 87.63 0 0 1 10.02 6.82c4.66 3.74 9.83 7.18 13.89 11.56.39.41.76.82 1.12 1.25q1.1-7.68 2.2-15.38a19.26 19.26 0 0 0 .29-4.48 19 19 0 0 0-1.08-4.31c-.16-.5-.33-1-.49-1.5-.91-2.72-1.82-5.43-2.72-8.15-1.33-4-2.75-8.13-5.75-11.07a15.49 15.49 0 0 1-2-2.05 3 3 0 0 1-.5-2.65l21.21 6.62c1 .32 2 .63 3 1a13.85 13.85 0 0 1 3.26 2 11.8 11.8 0 0 1 4.35 10.79c-.21 1.33-.67 2.59-.95 3.9-.49 2.37-1.25 5.1-.22 7.3s2 4.14 2.93 6.21a31.27 31.27 0 0 1 2 4.91 24 24 0 0 1 .69 7.07 53.36 53.36 0 0 1-2.72 15.6c-.63 1.59-1.26 3.21-1.76 4.87z",
    fill: "#454b69"
  }), _react.default.createElement("path", {
    fill: "#3f3d56",
    d: "M163.59 376.4l50.29-4.73 8.79-.99-8.08 2.86-51 2.86z"
  }), _react.default.createElement("path", {
    fill: "#3f3d56",
    d: "M162.46 378.84v-3.79l53.31-2.63 2.6 2.23-55.91 4.19z"
  }), _react.default.createElement("path", {
    d: "M162.63 371.63c1.12-.3 2.32-.24 3.45-.51 1.47-.35 2.79-1.25 4.29-1.44a9.17 9.17 0 0 1 2.76.2l6.9 1.2c.53.1 1.15.26 1.34.77a1.31 1.31 0 0 1-.42 1.27c-1.24 1.31-3.22 1.5-5 1.61l-4.81.29a5.79 5.79 0 0 0-2.7.62 2 2 0 0 0-.9 2.38 2.52 2.52 0 0 0 1.1 1 10.28 10.28 0 0 0 6.29 1.19 30.05 30.05 0 0 0 5.14-1.46 32.4 32.4 0 0 1 13.12-1.39c1.15.11 2.49.44 2.9 1.52a2.44 2.44 0 0 1-.46 2.22c-1.72 2.39-5.14 2.47-8 3.12a16.48 16.48 0 0 0-7.35 3.81c.64 1.31.11 2.87-.53 4.17a26.59 26.59 0 0 1-2.58 4.28 5.49 5.49 0 0 1-2.17 1.95 5.84 5.84 0 0 1-1.81.32 78.06 78.06 0 0 1-17.87-1 2.91 2.91 0 0 1-1.72-.72 2.84 2.84 0 0 1-.55-1.39c-.61-3-1.15-6-1.61-9.07a9 9 0 0 1 .52-5.69c.74-1.39 1.9-1.84 3.08-2.78 2.56-2.03 4.2-5.57 7.59-6.47z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M227.58 309.09l-12.48 61.9a3 3 0 0 0 3.27 3.62l47.07-4.62a3 3 0 0 0 2.68-2.42l11.53-57.29a3 3 0 0 0-3-3.63h-46.1a3 3 0 0 0-2.97 2.44z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M251 382.78c3-1.89 3.85-5.71 5.22-8.94a56.14 56.14 0 0 1 3.78-6.85c1.2-2 2.4-4.39 1.45-6.5a6 6 0 0 0-3.46-2.81 6.75 6.75 0 0 0-4.27-.53c-1.62.44-2.82 1.78-3.91 3.05l-3.88 4.5a25.34 25.34 0 0 1-5.92 5.55 22.63 22.63 0 0 1-4.48 1.89c-2.78.92-5.6 1.73-8.45 2.41a23.14 23.14 0 0 0-4.77 1.48 2.49 2.49 0 0 0-1.4 1.3 2.89 2.89 0 0 0 .49 2.14c1 1.83 2.11 5.56 4.16 6.21a34.47 34.47 0 0 0 5.95.93c2 .21 3.51-.59 5.28-1.34a17.44 17.44 0 0 1 7-1.12c2.04-.04 5.6.25 7.21-1.37z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M225.23 374.39s1.77 11.91 12.87 10.6c0 0-5.91 2.35-5.29 3.67s-13.7-2.57-13.7-2.57l-.74-6.21s-.47-3.43 0-3.52 6.86-1.97 6.86-1.97z",
    fill: "#454b69"
  }), _react.default.createElement("path", {
    d: "M225.23 374.39s1.77 11.91 12.87 10.6c0 0-5.91 2.35-5.29 3.67s-13.7-2.57-13.7-2.57l-.74-6.21s-.47-3.43 0-3.52 6.86-1.97 6.86-1.97zM173.93 324.62a6 6 0 0 1 2.58 2.5 17.41 17.41 0 0 1 2.09 4.78c.55 2 .81 4.35 2.33 5.83M127.26 357.61a11.67 11.67 0 0 1-.94 8.65q-6-9.31-12.51-18.3c-2.06-2.87-4.17-5.73-6.3-8.55-1.73-2.28-3.51-4.59-4.38-7.32a10.59 10.59 0 0 1-.36-1.45 8 8 0 0 1 4.51-3.25c2.92 8.47 10.32 14.54 15.62 21.78a25 25 0 0 1 4.36 8.44zM164.54 400.99l-17.52.6c-1.49.05-3.33.34-3.8 1.76-.14.45-.12.94-.26 1.39-.49 1.59-2.62 1.78-4.29 1.77-1.45 0-2.9.06-4.34.17a2.33 2.33 0 0 1 .26-1.12c.29-.57.85-1 1.15-1.52a4.05 4.05 0 0 0 .28-2.32q-.56-7.55-1.82-15c-.08-.44-.16-.9-.27-1.35a8.36 8.36 0 0 1 4.57-1.38c1.44.16 2.76 1 4.2.93 2.5-.13 4.23-2.92 6.73-3.08a4.16 4.16 0 0 0 1.58-.19c.79-.4.92-1.45 1.33-2.23.6-1.16 2.28-1.44 3.55-1.14a51.31 51.31 0 0 0 .51 7.92 13.83 13.83 0 0 0 .8 3.36 16.17 16.17 0 0 0 1.78 3.1c1.88 2.8 3.68 5.51 5.56 8.33z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M106.32 326.44c-3.11.78-5.32 3.7-6.23 6.78s-.75 6.36-.66 9.57A190.2 190.2 0 0 1 97 378.38c-.92 5.64-2.1 11.3-1.75 17 .19 3.09.9 6.28 2.88 8.66 3.13 3.74 8.57 4.51 13.45 4.32 8.76-.34 17.36-2.91 26.13-2.85 1.67 0 3.79-.19 4.29-1.78.14-.44.11-.93.26-1.38.46-1.42 2.3-1.72 3.8-1.77l17.52-.59c-1.88-2.77-3.68-5.49-5.56-8.26a17.1 17.1 0 0 1-1.79-3.1 14.39 14.39 0 0 1-.8-3.37 51.09 51.09 0 0 1-.5-7.91c-1.27-.29-3 0-3.56 1.13-.41.79-.54 1.83-1.32 2.23a3.83 3.83 0 0 1-1.59.19c-2.49.17-4.22 3-6.72 3.09-1.44.07-2.77-.78-4.2-.93-2.27-.24-4.3 1.26-6.38 2.18a13.49 13.49 0 0 1-10.82 0c-.51-.22-1.08-.86-.66-1.24s.75-.06 1.09-.22c.64-.32.17-1.27-.18-1.89-1-1.79-.3-4 .67-5.86s2.24-3.61 2.27-5.67a10.79 10.79 0 0 1 0-2 7.44 7.44 0 0 1 1.47-2.55 11.49 11.49 0 0 0 1.28-9.19 25 25 0 0 0-4.37-8.43c-5.26-7.2-12.66-13.28-15.59-21.75z",
    fill: "#454b69"
  }), _react.default.createElement("path", {
    d: "M153.71 320.49l4.08 2.32a37.41 37.41 0 0 1-3.84 1.53c-9.2 3.09-5.92 7.38-15.62 7.26-6.61-.07-14.15-.58-18.78 4.14-2.18 2.22-3.28 5.26-4.32 8.2-.48 1.34-.95 2.68-1.42 4-2.06-2.87-4.17-5.73-6.3-8.55-1.73-2.28-3.51-4.59-4.38-7.32a12.4 12.4 0 0 1 .71-9.17 39.05 39.05 0 0 1 4-5.61 68.29 68.29 0 0 1 4.6-6.18 9.59 9.59 0 0 1 6.69-3.37c1.49 0 3.23.42 4.26-.65.38-.38.58-.89 1-1.26 1.09-1 2.88-.33 4.19.41z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M178.05 244.06a13.35 13.35 0 0 0-.88-3.49 10.41 10.41 0 0 0-1.63-2.37 22.81 22.81 0 0 0-16.88-7.67 3.73 3.73 0 0 0-1.63.26 1.65 1.65 0 0 0-.36.22c-4.61-3.11-10-6.16-15-7.37a21.81 21.81 0 0 0-10.53.14c-4.19 1.26-5.65 4.6-7.43 8.25a37.27 37.27 0 0 1-12.63 14.54c-3.48 2.35-7.61 4.37-9.28 8.22-1.56 3.59-.5 7.71-.13 11.61a32.1 32.1 0 0 1-12.07 27.8c-4.76 3.69-11.11 6.77-12.12 12.7-.72 4.22 1.65 8.27 3.44 12.16 3.79 8.22 5.09 18.26.64 26.14-1.27 2.24-3 4.29-3.65 6.77-1.19 4.41 1.34 9.2 5.11 11.76s8.52 3.26 13.08 3.24c3.32 0 6.91-.5 9.26-2.83a14.84 14.84 0 0 0 3.11-5.82q2.88-8.15 5.77-16.29c1-2.94 2.14-6 4.32-8.2 4.62-4.72 12.17-4.22 18.77-4.14 9.71.12 6.43-4.16 15.62-7.26 5.4-1.82 11.27-4.92 12.53-10.48s-2.48-10.6-5.75-15.1q-3.68-5-6.94-10.35c-2.13-3.44-4.16-7.07-4.75-11.07-1-6.65 15.15-10.36 17.57-16.63a46.29 46.29 0 0 0 1.74-5.42c1.16-.09 2.23-.2 3-.23 3.09-.14 6.56-1.35 7.62-4.25a9.78 9.78 0 0 0 .08-4.84z",
    fill: "#3f3d56"
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M150.9 228.58a3.93 3.93 0 0 1 1.63-.25h.23a41.66 41.66 0 0 0-11-4.88l-.93-.19a66.1 66.1 0 0 1 9.76 5.54 2.16 2.16 0 0 1 .31-.22zM178.05 243.87a13.35 13.35 0 0 0-.88-3.49 10.19 10.19 0 0 0-1.63-2.37 22.85 22.85 0 0 0-13.11-7.33 22.43 22.43 0 0 1 7 5.32 9.75 9.75 0 0 1 1.63 2.36 12.76 12.76 0 0 1 .88 3.5 9.78 9.78 0 0 1-.06 4.84c-1.05 2.9-4.53 4.11-7.61 4.24-.75 0-1.83.15-3 .23a45.85 45.85 0 0 1-1.74 5.43c-2.42 6.26-18.54 10-17.56 16.63.58 4 2.62 7.63 4.74 11.07s4.5 7 6.94 10.35c3.27 4.5 7 9.67 5.75 15.1s-7.12 8.66-12.52 10.48c-9.2 3.1-5.92 7.38-15.62 7.26-6.61-.08-14.16-.58-18.78 4.14-2.18 2.22-3.28 5.26-4.32 8.2l-5.77 16.29a15 15 0 0 1-3.1 5.82c-2.36 2.33-5.95 2.81-9.26 2.82a33.12 33.12 0 0 1-5.63-.42c3.52 1.91 7.71 2.46 11.75 2.44 3.32 0 6.91-.5 9.26-2.83a14.84 14.84 0 0 0 3.11-5.82q2.88-8.14 5.77-16.29c1-2.94 2.14-6 4.32-8.2 4.62-4.72 12.17-4.22 18.77-4.14 9.71.12 6.43-4.16 15.62-7.26 5.4-1.82 11.27-4.92 12.53-10.48s-2.48-10.6-5.75-15.1q-3.68-5-6.94-10.35c-2.13-3.44-4.16-7.07-4.75-11.07-1-6.65 15.15-10.36 17.57-16.63a46.29 46.29 0 0 0 1.74-5.42c1.16-.09 2.23-.2 3-.23 3.09-.14 6.56-1.35 7.62-4.25a9.78 9.78 0 0 0 .03-4.84z"
  })));
};

UndrawConference.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawConference;
exports.default = _default;