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

var UndrawArtificialIntelligence = function UndrawArtificialIntelligence(_props) {
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
    viewBox: "0 0 1028.53 752.52",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 493.91,
    y1: 571.16,
    x2: 493.91,
    y2: 526.24,
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
    x1: 579.64,
    y1: 682.92,
    x2: 579.64,
    y2: 218.06,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 448.98,
    y1: 716.3,
    x2: 448.98,
    y2: 571.17,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 533.65,
    y1: 716.3,
    x2: 533.65,
    y2: 571.17,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("ellipse", {
    cx: 512.26,
    cy: 706.43,
    rx: 256,
    ry: 43,
    fill: "#dee3f3",
    opacity: 0.5
  }), _react.default.createElement("g", {
    opacity: 0.45
  }, _react.default.createElement("path", {
    d: "M450.77 258.97a11.13 11.13 0 0 0 .1 1.44 11.1 11.1 0 0 1-.1-1.44zM579.69 228.08c0 .13 0 .25.06.38l-.06-.38zM579.42 226.81c0 .13.07.27.1.4-.03-.14-.06-.27-.1-.4zM579.55 261.38c0 .22-.11.44-.17.65.07-.21.12-.43.17-.65zM579.73 260.33c0 .23-.06.47-.11.7.05-.23.09-.47.11-.7zM456.73 268.78a11.13 11.13 0 0 1-2.37-1.67 11.09 11.09 0 0 0 2.37 1.67zM454.27 267.04a11.15 11.15 0 0 1-.94-1 11.11 11.11 0 0 0 .94 1zM644.52 478.43a11 11 0 0 0-.47-1.29 11 11 0 0 1 .47 1.29zM639.01 471.77a11.11 11.11 0 0 1 1.26.77 11.05 11.05 0 0 0-1.26-.77zM641.49 473.53a11.13 11.13 0 0 1 1.77 2.14 11.11 11.11 0 0 0-1.77-2.14zM640.27 472.56a11.18 11.18 0 0 1 1.05.85 11.11 11.11 0 0 0-1.05-.85zM643.95 476.95a11 11 0 0 0-.55-1 11 11 0 0 1 .55 1zM644.82 479.8a11 11 0 0 0-.24-1.09 11 11 0 0 1 .24 1.09z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M978.47 419.14h-63.65a11.06 11.06 0 0 0 4.76-9.09v-29.22a11.07 11.07 0 0 0-11.07-11.07h-73.24a11.08 11.08 0 0 0 7.71-10.55v-29.23a11.06 11.06 0 0 0-4.76-9.09h70.32a11.07 11.07 0 0 0 11.07-11.07v-29.23a11.07 11.07 0 0 0-11.07-11.07h-78.27a11.08 11.08 0 0 0 7.71-10.55v-29.23a11.06 11.06 0 0 0-4.76-9.09h75.33a11.07 11.07 0 0 0 11.07-11.07v-29.23a11.07 11.07 0 0 0-11.12-11.09h-39.43a11.08 11.08 0 0 0 7.71-10.55v-29.2a11.07 11.07 0 0 0-11.07-11.07H758.8a11.07 11.07 0 0 0-11.07 11.07 11.07 11.07 0 0 0-11.07-11.07H629.74a11.07 11.07 0 0 0-10 6.41 11.1 11.1 0 0 1 .21 2.16v29.25a11 11 0 0 1-1 4.65 11.05 11.05 0 0 0 3.85 6.42h27.46a11 11 0 0 1 7 2.51h12a11.08 11.08 0 0 0-7.71 10.55 11.1 11.1 0 0 0-.28-2.13v29.34a11.06 11.06 0 0 1-.36 2.76 4 4 0 0 1 .48.61 11.16 11.16 0 0 0 .09-1.39 11 11 0 0 0 .19 1.91 3.27 3.27 0 0 1 .25 1.11 11.09 11.09 0 0 0 4.33 6.07h-9.52l.24-.19c-.88 0-1.78-.07-2.66-.08a2.46 2.46 0 0 1-.92-.19 11.06 11.06 0 0 1-3.18.47l-65.61 2a11.06 11.06 0 0 0-4.76 9.09v29.22a11.08 11.08 0 0 0 7.71 10.55l62.66.52a11.07 11.07 0 0 1 3.25.49 12.11 12.11 0 0 1 2.07.36h.16a11 11 0 0 0-1.91-.82h15.42a11.08 11.08 0 0 0-7.71 10.55 11.12 11.12 0 0 0-.17-1.92 2.46 2.46 0 0 1-.24.3 11.12 11.12 0 0 1 .21 2.14v29.22c0 1.36.2 1 .2-.52a11.06 11.06 0 0 0 4.76 9.09l39.09 1.25a11 11 0 0 1 3.92.73h9.41a11.12 11.12 0 0 0-3.83 4.68 11 11 0 0 1 1.57 5.66v29.19a11 11 0 0 1-.93 4.43 11.1 11.1 0 0 0 6.13 4.87h-10.28a11 11 0 0 1-6 1.78h-38.79a11.05 11.05 0 0 0-5.07 9.3c0-3.9-1.45 34.56-1.45 34.56 0 3.45 60.34 5 60.34 5a11 11 0 0 1 4.45.94 7.75 7.75 0 0 1 1.92-.16h-.06 9.52a11.06 11.06 0 0 0-4.76 9.09 11.09 11.09 0 0 0-.12-1.58c-.05.12-.11.24-.17.35a11.08 11.08 0 0 1 .29 2.48v28a11.07 11.07 0 0 0 11.07 11.07h-17a11 11 0 0 1-5.11 1.25h-69.44a11.07 11.07 0 0 0-6 9.82v29.22a11.07 11.07 0 0 0 11.07 11.07h106.94a11.07 11.07 0 0 0 11.07-11.07 11.07 11.07 0 0 0 11.07 11.07h106.91a11.07 11.07 0 0 0 11.07-11.07v-29.29a11.07 11.07 0 0 0-11.07-11.07h86.45a11.07 11.07 0 0 0 11.07-11.07v-29.19a11.07 11.07 0 0 0-11.06-11.12zM713.64 220.65a11.06 11.06 0 0 0-4.76 9.09 11.06 11.06 0 0 0-4.76-9.09zm-12.47 48.87a11.08 11.08 0 0 0 7.71-10.55 11.08 11.08 0 0 0 7.71 10.55zm38.84-100.26a11.08 11.08 0 0 0 7.71-10.55 11.08 11.08 0 0 0 7.71 10.55zm34 312.31a11.07 11.07 0 0 0-11.07-11.07h22.15a11.07 11.07 0 0 0-11.06 11.09zm11.73-62.45a11.06 11.06 0 0 0 4.76-9.09 11.06 11.06 0 0 0 4.76 9.09zm4.76-38.32a11.08 11.08 0 0 0-7.68-10.54h15.45a11.08 11.08 0 0 0-7.75 10.57zm-4.76-61.92a11.06 11.06 0 0 0 4.76-9.09 11.06 11.06 0 0 0 4.76 9.09zm4.76-38.32a11.08 11.08 0 0 0-7.71-10.55h15.48a11.08 11.08 0 0 0-7.75 10.58zm-4.76-61.92a11.06 11.06 0 0 0 4.76-9.09 11.06 11.06 0 0 0 4.76 9.09zm4.76-38.32a11.08 11.08 0 0 0-7.71-10.55h15.48a11.08 11.08 0 0 0-7.75 10.58zm74.77 240.8a11.06 11.06 0 0 0-4.76 9.09 11.06 11.06 0 0 0-4.76-9.09zm-15.84 49.39a11.07 11.07 0 0 0 11.07-11.07 11.07 11.07 0 0 0 11.07 11.07z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M644.98 481.59a11.14 11.14 0 0 0-.1-1.41 11.11 11.11 0 0 1 .1 1.41zM579.83 258.97c0 .35 0 .7-.05 1 .03-.31.05-.65.05-1zM450.9 260.62a11 11 0 0 0 .28 1.32 11 11 0 0 1-.28-1.32zM326.97 325.91a2.52 2.52 0 0 1-.47-.56 2.7 2.7 0 0 1-.31-.92 22.36 22.36 0 0 0 0 2.28 11 11 0 0 1 .51 3.27 11 11 0 0 1 .49-3.19 4.58 4.58 0 0 1-.23-.77s.01-.07.01-.11z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M478.54 118.43H371.63a11.07 11.07 0 0 0-11.07 11.07 11.07 11.07 0 0 0-11.07-11.07H242.58a11.07 11.07 0 0 0-11.07 11.07v29.22a11.08 11.08 0 0 0 7.7 10.54h-82.88a11.07 11.07 0 0 0-11.06 11.09v29.22a11.06 11.06 0 0 0 4.76 9.09H74.68a11.07 11.07 0 0 0-11.07 11.07v29.22a11.07 11.07 0 0 0 11.07 11.07h78.28a11.08 11.08 0 0 0-7.69 10.57v29.22a11.06 11.06 0 0 0 4.76 9.09H79.7a11.07 11.07 0 0 0-11.07 11.07v29.22a11.07 11.07 0 0 0 11.07 11.07h73.26a11.08 11.08 0 0 0-7.69 10.57v29.22a11.07 11.07 0 0 0 11.07 11.07h63.65a11.06 11.06 0 0 0-4.76 9.09v29.22a11.07 11.07 0 0 0 11.04 11.08h-86.43a11.07 11.07 0 0 0-11.07 11.07v29.22a11.07 11.07 0 0 0 11.07 11.07h106.9a11.07 11.07 0 0 0 11.07-11.07 11.07 11.07 0 0 0 11.07 11.07H375.8a11.07 11.07 0 0 0 11.07-11.07v-29.21a11.07 11.07 0 0 0-6-9.82h-23.02a11 11 0 0 1-5.11-1.25H333.2a11.07 11.07 0 0 0 11.07-11.08c0 4.82 2.51-28 2.51-28a11.07 11.07 0 0 1 11.07-11.07l40.75-1.25a11.15 11.15 0 0 0 2.93-3 11 11 0 0 1-.88-4.29V382.6a11 11 0 0 1 1.83-6.09 11.11 11.11 0 0 0-4.2-5h-58.01a11 11 0 0 1-6-1.78h-15.25a11.08 11.08 0 0 0 7.71-10.55l-.39-29c0-1.31-.07-2.46-.12-3.49a11.09 11.09 0 0 0-4.25-5.82h9.52l-.21.16c5.4-.31 67.07-3.93 72.09-8a8.7 8.7 0 0 1-.07-2.32 11.1 11.1 0 0 1-.14-1.68v-29.17c0-.36 0-.72.05-1.07a11.09 11.09 0 0 0-7.56-8.75h13.48a11 11 0 0 1 5.11-1.25h30.57a11.06 11.06 0 0 0 6-9.82v-29.23a11.06 11.06 0 0 0-4.76-9.09l-31.78-2c-5.38 0-8.95-2-6.11 0h-9.52a11.05 11.05 0 0 0 4.76-9 11.12 11.12 0 0 1-.2-2v-29.28-.07a11.09 11.09 0 0 0-7.51-8.5h11.58a11 11 0 0 1 7-2.51h71.31a11 11 0 0 0 4.07-8.57v-29.21a11.07 11.07 0 0 0-11.11-11.08zM197.43 220.65a11.06 11.06 0 0 0-4.76 9.09 11.06 11.06 0 0 0-4.76-9.09zm-4.76 38.32a11.08 11.08 0 0 0 7.71 10.55h-15.42a11.08 11.08 0 0 0 7.7-10.55zm9.77 61.92a11.06 11.06 0 0 0-4.76 9.09 11.06 11.06 0 0 0-4.76-9.09zm-12.47 48.86a11.08 11.08 0 0 0 7.71-10.55 11.08 11.08 0 0 0 7.71 10.55zm136.51-149.1a11.06 11.06 0 0 0-4.76 9.09 11.06 11.06 0 0 0-4.76-9.09zm-68.66 260.94a11.07 11.07 0 0 0-11.07-11.07h22.15a11.07 11.07 0 0 0-11.08 11.07zm11.73-62.45a11.06 11.06 0 0 0 4.76-9.09 11.06 11.06 0 0 0 4.76 9.09zm4.72-38.31a11.08 11.08 0 0 0-7.67-10.57h15.42a11.08 11.08 0 0 0-7.75 10.57zm-4.76-61.92a11.06 11.06 0 0 0 4.76-9.09 11.06 11.06 0 0 0 4.76 9.09zm4.76-38.32a11.08 11.08 0 0 0-7.71-10.55h15.42a11.08 11.08 0 0 0-7.71 10.55zm-4.76-61.92a11.06 11.06 0 0 0 4.76-9.09 11.06 11.06 0 0 0 4.76 9.09zm4.76-38.32a11.08 11.08 0 0 0-7.71-10.55h15.42a11.08 11.08 0 0 0-7.71 10.55zm39.7 89.16a11.08 11.08 0 0 0 7.71-10.55 11.08 11.08 0 0 0 7.71 10.55zm38.88-100.25a11.08 11.08 0 0 0 7.71-10.55 11.08 11.08 0 0 0 7.71 10.55zM454.41 221.55l.16-.14zM453.68 222.26l-.16.18zM452.75 223.44l.08-.11z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M451.27 262.16a11 11 0 0 0 .46 1.27 11 11 0 0 1-.46-1.27zM452.43 264.79a11.08 11.08 0 0 0 .82 1.14 11.06 11.06 0 0 1-.82-1.14zM451.77 263.54a11 11 0 0 0 .66 1.24 11 11 0 0 1-.66-1.24zM451.08 227.21c0-.14.07-.27.1-.4-.04.13-.07.26-.1.4zM451.45 225.96c0-.11.08-.22.12-.33l-.12.33zM450.85 228.46c0-.13 0-.26.06-.38l-.06.38zM452.06 224.57z",
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 318.49,
    y: 192.17,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 340.15 180.99)",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 704.4,
    y: 192.17,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 726.06 180.99)",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 876.05,
    y: 242.29,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 897.715 231.11)",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 665.56,
    y: 292.41,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 687.215 281.225)",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 876.05,
    y: 343.78,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 897.715 332.595)",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 876.05,
    y: 444.02,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 897.715 432.835)",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M852.43 420.4H739.5a8.06 8.06 0 0 0-7.74 5.8 5.15 5.15 0 0 1-.09 1.36 5.71 5.71 0 0 1-.23.77v35.38a8.06 8.06 0 0 0 8.06 8.06h112.93a8.06 8.06 0 0 0 8.06-8.06v-35.25a8.06 8.06 0 0 0-8.06-8.06z",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 730.71,
    y: 544.25,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 752.37 533.07)",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 359.84,
    y: 242.29,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 381.495 231.11)",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 279.65,
    y: 292.41,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 301.305 281.225)",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 230.78,
    y: 343.78,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 252.44 332.595)",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 283.41,
    y: 393.9,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 305.065 382.715)",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 230.78,
    y: 444.02,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 252.44 432.835)",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 172.4,
    y: 494.19,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 194.06 483.005)",
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 925.92,
    y: 393.84,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 947.575 382.66)",
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 920.44,
    y: 292.58,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 942.1 281.4)",
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 985.21,
    y: 543.45,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 1006.87 532.27)",
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 85.73,
    y: 544.36,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 107.395 533.18)",
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 103.07,
    y: 443.11,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 124.725 431.92)",
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 103.07,
    y: 343.67,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 124.725 332.485)",
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 107.63,
    y: 242.41,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 129.29 231.225)",
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 107.63,
    y: 242.41,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 129.29 231.225)",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 189.73,
    y: 192.24,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 211.39 181.055)",
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 302.2,
    y: 494.14,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 323.86 482.95)",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 214.49,
    y: 544.25,
    width: 129.05,
    height: 51.37,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 236.155 533.07)",
    opacity: 0.1
  })), _react.default.createElement("circle", {
    cx: 810.34,
    cy: 28.92,
    r: 28.92,
    fill: primaryColor,
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M251.94 81.35h-6.88a4.82 4.82 0 0 0 0-9.63h-55.73a4.82 4.82 0 1 0 0 9.63h6.88a4.82 4.82 0 0 0 0 9.63h-9.63a4.82 4.82 0 1 0 0 9.63h55.69a4.82 4.82 0 0 0 0-9.63h9.63a4.82 4.82 0 0 0 0-9.63zM806.67 25.44h-5.24a3.67 3.67 0 0 0 0-7.33h-42.41a3.67 3.67 0 0 0 0 7.33h5.25a3.67 3.67 0 1 0 0 7.33h-7.33a3.67 3.67 0 0 0 0 7.33h42.42a3.67 3.67 0 1 0 0-7.33h7.33a3.67 3.67 0 1 0 0-7.33zM383.94 13.35h-6.88a4.82 4.82 0 1 0 0-9.63h-55.73a4.82 4.82 0 1 0 0 9.63h6.88a4.82 4.82 0 0 0 0 9.63h-9.63a4.82 4.82 0 1 0 0 9.63h55.69a4.82 4.82 0 0 0 0-9.63h9.63a4.82 4.82 0 0 0 0-9.63z",
    fill: "#dee3f3",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M552.66 540.06h19v-13.82h-155.5v13.82h19v13.83h-31.1v17.27h179.7v-17.27h-31.1v-13.83z"
  }), _react.default.createElement("path", {
    d: "M765.69 626.46c1.36-18.6.88-34.61-1-48.4-2.13-15.87-6.08-28.78-11.09-39.28-10-21-24.25-32.39-36.76-38.58a69.16 69.16 0 0 0-26.9-7.34 12.08 12.08 0 0 0-23.91-.05v-31.06h-65.66v-17.28h88.48a10 10 0 0 0 10-10V343.9a10 10 0 0 0-10-10h-33.59v-89.28a13.48 13.48 0 0 0 7.93-12.28v-.4-.4a13.49 13.49 0 0 0-27 0v.8a13.48 13.48 0 0 0 7.14 11.9v89.65H518.81v-89.65a13.48 13.48 0 0 0 7.14-11.9v-.4-.4a13.49 13.49 0 0 0-27 0v.8a13.48 13.48 0 0 0 7.93 12.28v89.26h-36.45a10 10 0 0 0-10 10v90.56a10 10 0 0 0 10 10h88.48v17.28h-65.66v25.46a12.07 12.07 0 0 0-2.61-4.35l-.29-.29a12.09 12.09 0 0 0-20.64 8.55v1.73s-12.42 0-27.27 7.35c-12.51 6.19-26.75 17.58-36.76 38.58-5 10.5-9 23.42-11.09 39.28-1.86 13.78-2.35 29.8-1 48.4-27.73 23 7 56.46 7 56.46 28.45 0 27.82-47.23 27.5-55.29h.14s-.08-.4-.2-1.14a176.9 176.9 0 0 1-1.71-39.9c.79-10.17 2.74-20.93 6.74-30.61a54.35 54.35 0 0 1 13.68-20.05 46.75 46.75 0 0 1 23-11.07v7.77a12.09 12.09 0 0 0 23.53 3.91V600H666v-62.19a12.07 12.07 0 0 0 3.07 6.44l.33.35a12.09 12.09 0 0 0 20.68-8.6v-11.08a46.62 46.62 0 0 1 22.46 11 54.35 54.35 0 0 1 13.68 20.05c4 9.69 5.94 20.44 6.74 30.61a176.9 176.9 0 0 1-1.71 39.9c-.12.74-.2 1.14-.2 1.14h.14c-.32 8.06-.95 55.29 27.5 55.29 0 .01 34.73-33.43 7-56.45z",
    transform: "translate(-85.73 -73.74)",
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M412.7 572.75v15.7h20.74V692.12h-24.2v24.18h65.66v-24.18h-10.36V588.45h24.18v-17.28H412.7v1.58z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M495.64 572.75v15.7h31.1V692.12h-24.19v24.18h65.66v-24.18h-10.37V588.45h13.82v-17.28h-76.02v1.58z"
  }), _react.default.createElement("rect", {
    x: 377.91,
    y: 264.74,
    width: 232.01,
    height: 107.6,
    rx: 12.97,
    ry: 12.97,
    fill: primaryColor
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M396.4 355.83h195.02v2.02H396.4z"
  }), _react.default.createElement("path", {
    opacity: 0.3,
    d: "M396.4 281.55h195.02v73.97H396.4z"
  }), _react.default.createElement("circle", {
    cx: 441.79,
    cy: 320.08,
    r: 26.9,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 441.79,
    cy: 318.54,
    r: 26.9,
    fill: "#dee3f3"
  }), _react.default.createElement("circle", {
    cx: 546.03,
    cy: 320.08,
    r: 26.9,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 546.03,
    cy: 318.54,
    r: 26.9,
    fill: "#dee3f3"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M473.73 372.34h40.35v23.54h-40.35z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M409.85 389.15h168.12v134.5H409.85zM569.57 523.65v13.45h-18.5v13.45H436.74V537.1h-18.48v-13.45h151.31z"
  }), _react.default.createElement("path", {
    opacity: 0.3,
    d: "M569.57 523.65v13.45h-18.5v13.45H436.74V537.1h-18.48v-13.45h151.31z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M406.49 550.55h174.85v16.81H406.49zM414.89 567.37h73.97v16.81h-73.97zM495.59 567.37h73.97v16.81h-73.97zM411.53 685.05h63.89v23.54h-63.89z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M435.07 607.71v77.34h30.26V584.17h-30.26v23.54zM525.85 584.17V685.05h30.27V584.17h-30.27zM502.32 685.05h63.89v23.54h-63.89zM410.49 417.73v41.25a11.77 11.77 0 0 1-23.5-.9v-40.35a11.76 11.76 0 0 1 20.08-8.32l.28.29a11.72 11.72 0 0 1 3.13 7.13c-.01.29.01.6.01.9zM601.37 421.09v40.36a11.76 11.76 0 0 1-20.1 8.32l-.32-.34a11.73 11.73 0 0 1-3.13-8v-40.34a11.77 11.77 0 0 1 23.54 0zM386.95 419.41v31.1a45.49 45.49 0 0 0-22.35 10.75 52.88 52.88 0 0 0-13.33 19.54c-3.89 9.42-5.78 19.89-6.55 29.79a170.32 170.32 0 0 0 1.86 40h-33.61c-1.43-18.59-1-34.53.88-48.23 2.08-15.44 5.92-28 10.79-38.22 9.74-20.43 23.6-31.52 35.77-37.54 14.46-7.19 26.54-7.19 26.54-7.19z"
  }), _react.default.createElement("path", {
    d: "M319.7 604.35s-33.79-32.53-6.81-54.93h33.51s3.56 54.93-26.7 54.93z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M319.7 604.35s-33.79-32.53-6.81-54.93h33.51s3.56 54.93-26.7 54.93zM436.75 409.33h114.32v87.42H436.75zM435.07 584.17h30.26v23.54h-30.26zM435.07 627.89h30.26v30.26h-30.26zM435.07 674.96h30.26v10.09h-30.26zM525.85 584.17h30.26v23.54h-30.26zM525.85 627.89h30.26v30.26h-30.26zM525.85 674.96h30.26v10.09h-30.26zM386.95 419.41v31.1a45.49 45.49 0 0 0-22.35 10.75l-4.18-34.73c14.45-7.12 26.53-7.12 26.53-7.12zM351.27 480.8c-3.89 9.42-5.78 19.89-6.55 29.79l-30.88-8.27c2.08-15.44 5.92-28 10.79-38.22z",
    opacity: 0.3
  }), _react.default.createElement("path", {
    d: "M600.88 419.41v31.1a45.49 45.49 0 0 1 22.39 10.75 52.88 52.88 0 0 1 13.31 19.51c3.89 9.42 5.78 19.89 6.55 29.79a170.32 170.32 0 0 1-1.86 40h33.62c1.43-18.59 1-34.53-.88-48.23-2.08-15.44-5.92-28-10.79-38.22-9.74-20.43-23.6-31.52-35.77-37.54-14.49-7.16-26.57-7.16-26.57-7.16z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M668.13 604.35s33.79-32.53 6.81-54.93h-33.52s-3.55 54.93 26.71 54.93z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M668.13 604.35s33.79-32.53 6.81-54.93h-33.52s-3.55 54.93 26.71 54.93zM600.88 419.41v31.1a45.49 45.49 0 0 1 22.39 10.75l4.18-34.73c-14.49-7.12-26.57-7.12-26.57-7.12zM636.54 480.8c3.89 9.42 5.78 19.89 6.55 29.79l30.88-8.27c-2.08-15.44-5.92-28-10.79-38.22z",
    opacity: 0.3
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M473.73 372.34h40.35v2.79h-40.35zM580.96 413.12v56.31a11.73 11.73 0 0 1-3.13-8v-40.34a11.71 11.71 0 0 1 3.13-7.97zM410.45 416.83v42.15a11.72 11.72 0 0 1-3.13 7.13V409.7a11.72 11.72 0 0 1 3.13 7.13zM418.26 523.65h151.31v1.99H418.26zM414.89 567.37h73.97v1.54h-73.97zM495.59 567.37h73.97v1.54h-73.97z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M423.14 165.17h11.58v99.58h-11.58zM555.91 165.17h11.58v99.58h-11.58z"
  }), _react.default.createElement("circle", {
    cx: 428.55,
    cy: 165.94,
    r: 13.12,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 428.55,
    cy: 165.17,
    r: 13.12,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 562.09,
    cy: 165.94,
    r: 13.12,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 562.09,
    cy: 165.17,
    r: 13.12,
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M151.53 470.26s38.4 75.38 7.11 116.62 2.84 153.6 2.84 153.6",
    fill: "none",
    stroke: "#fc6681",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M162.9 446.74c0 14.52-10.63 26.32-10.63 26.32s-10.7-11.8-10.7-26.32 10.7-26.31 10.7-26.31 10.63 11.83 10.63 26.31z",
    fill: "#fc6681"
  }), _react.default.createElement("path", {
    d: "M171.44 470.26s-38.4 75.38-7.11 116.62-2.84 153.6-2.84 153.6",
    fill: "none",
    stroke: "#ffd037",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M160.06 446.74c0 14.53 10.67 26.31 10.67 26.31s10.67-11.78 10.67-26.31-10.67-26.31-10.67-26.31-10.67 11.83-10.67 26.31z",
    fill: "#ffd037"
  }), _react.default.createElement("path", {
    d: "M187.08 470.26s38.4 75.38 7.11 116.62 2.84 153.6 2.84 153.6",
    fill: "none",
    stroke: "#fc6681",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M198.46 446.74c0 14.53-10.67 26.31-10.67 26.31s-10.66-11.79-10.66-26.31 10.67-26.31 10.67-26.31 10.66 11.83 10.66 26.31zM192.48 507.14c-10.07 10.47-25.93 11.57-25.93 11.57s.48-15.88 10.55-26.36 25.93-11.57 25.93-11.57-.48 15.89-10.55 26.36zM193.48 559.14c-10.07 10.47-25.93 11.57-25.93 11.57s.48-15.88 10.55-26.36 25.93-11.57 25.93-11.57-.48 15.89-10.55 26.36zM138.85 587.75c9.53 11 9.19 26.86 9.19 26.86s-15.78-1.9-25.3-12.87-9.19-26.86-9.19-26.86 15.77 1.9 25.3 12.87zM147.69 476.85c12.11 8 16 23.43 16 23.43s-15.71 2.38-27.82-5.64-16-23.43-16-23.43 15.7-2.38 27.82 5.64z",
    fill: "#fc6681"
  }), _react.default.createElement("path", {
    d: "M206.99 470.26s-38.4 75.38-7.11 116.62-2.84 153.6-2.84 153.6",
    fill: "none",
    stroke: "#ffd037",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M195.62 446.74c0 14.52 10.65 26.32 10.65 26.32s10.67-11.78 10.67-26.31-10.67-26.32-10.67-26.32-10.65 11.83-10.65 26.31zM198.68 508.26c-10.2 10.35-10.87 26.23-10.87 26.23s15.87-.9 26.07-11.25 10.87-26.23 10.87-26.23-15.87.9-26.07 11.25zM218.68 580.26c-10.2 10.35-10.87 26.23-10.87 26.23s15.87-.9 26.07-11.25 10.87-26.23 10.87-26.23-15.87.9-26.07 11.25z",
    fill: "#ffd037"
  }), _react.default.createElement("path", {
    d: "M189.27 564.43s23.12-36.44 55.56-37.22",
    fill: "none",
    stroke: "#ffd037",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M171.27 542.43S148.14 506 115.7 505.26",
    fill: "none",
    stroke: "#fc6681",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M168.27 594.43s23.12-36.44 55.56-37.22",
    fill: "none",
    stroke: "#ffd037",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("circle", {
    cx: 243.76,
    cy: 526.93,
    r: 6,
    fill: "#ffd037"
  }), _react.default.createElement("circle", {
    cx: 116.26,
    cy: 505.43,
    r: 6,
    fill: "#fc6681"
  }), _react.default.createElement("path", {
    d: "M185.27 606.43S162.14 570 129.7 569.26",
    fill: "none",
    stroke: "#fc6681",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("circle", {
    cx: 130.26,
    cy: 569.43,
    r: 6,
    fill: "#fc6681"
  }), _react.default.createElement("circle", {
    cx: 224.26,
    cy: 557.43,
    r: 6,
    fill: "#ffd037"
  }), _react.default.createElement("path", {
    d: "M313.03 696.67s-55.7-11.14-70.56-26-81.7-40.85-89.13-22.28-100.26 81.7-37.13 92.87 148.54 14.85 167.11 7.43 29.71-52.02 29.71-52.02z",
    fill: "#a8a8a8"
  }), _react.default.createElement("path", {
    d: "M116.21 734.33c63.13 11.14 148.54 14.85 167.11 7.43 14.14-5.66 24-32.83 27.85-45.48l1.86.39s-11.14 44.56-29.71 52-104 3.71-167.11-7.43c-18.22-3.22-23.43-10.77-21.47-20.33 1.53 6.23 7.91 11.03 21.47 13.42z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M914.65 483.52s13.35 17.45-6.16 43.81-35.59 48.6-29.09 65c0 0 29.43-48.94 53.39-49.62s8.22-29.76-18.14-59.19z",
    fill: "#fc6681"
  }), _react.default.createElement("path", {
    d: "M914.65 483.52a21.62 21.62 0 0 1 2.73 5.47c23.37 27.46 35.83 53.09 13.36 53.73-20.93.6-46 38-52 47.47a20.28 20.28 0 0 0 .71 2.15s29.43-48.94 53.39-49.62 8.17-29.77-18.19-59.2z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M939.47 505.76c0 6.14-.69 11.12-1.54 11.12s-1.54-5-1.54-11.12.86-3.25 1.71-3.25 1.37-2.89 1.37 3.25z",
    fill: "#ffd037"
  }), _react.default.createElement("path", {
    d: "M947.98 513.1c-5.39 2.94-10.1 4.72-10.5 4s3.64-3.74 9-6.68 3.27-.8 3.67-.05 3.22-.21-2.17 2.73z",
    fill: "#ffd037"
  }), _react.default.createElement("path", {
    d: "M844.16 483.52s-13.35 17.45 6.16 43.81 35.59 48.6 29.09 65c0 0-29.43-48.94-53.39-49.62s-8.22-29.76 18.14-59.19z",
    fill: "#fc6681"
  }), _react.default.createElement("path", {
    d: "M844.16 483.52a21.62 21.62 0 0 0-2.73 5.47c-23.37 27.46-35.83 53.09-13.36 53.73 20.93.6 46 38 52 47.47a20.28 20.28 0 0 1-.71 2.15s-29.43-48.94-53.39-49.62-8.17-29.77 18.19-59.2z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M819.34 505.76c0 6.14.69 11.12 1.54 11.12s1.54-5 1.54-11.12-.86-3.25-1.71-3.25-1.37-2.89-1.37 3.25z",
    fill: "#ffd037"
  }), _react.default.createElement("path", {
    d: "M810.83 513.1c5.39 2.94 10.1 4.72 10.5 4s-3.64-3.74-9-6.68-3.27-.8-3.67-.05-3.22-.21 2.17 2.73z",
    fill: "#ffd037"
  }), _react.default.createElement("path", {
    d: "M823.59 590.06s37.32-1.15 48.56-9.16 57.4-17.57 60.19-4.73 56.08 63.88 13.95 64.22-97.89-6.56-109.12-13.4-13.58-36.93-13.58-36.93z",
    fill: "#a8a8a8"
  }), _react.default.createElement("path", {
    d: "M947.05 635.93c-42.13.34-97.89-6.56-109.12-13.4-8.55-5.21-12-23.89-13.09-32.51h-1.25s2.36 30.1 13.59 36.93 67 13.74 109.12 13.4c12.16-.1 16.36-4.42 16.13-10.83-1.69 3.92-6.33 6.33-15.38 6.41z",
    opacity: 0.2
  }));
};

UndrawArtificialIntelligence.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawArtificialIntelligence;
exports.default = _default;