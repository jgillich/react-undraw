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

var UndrawBeTheHero = function UndrawBeTheHero(_props) {
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
    viewBox: "0 0 1066.61 876.03",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 660.62,
    y1: 785.23,
    x2: 660.62,
    y2: 108.23,
    gradientTransform: "rotate(6.1 644.055 452.113)",
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
    x1: 636.28,
    y1: 829.65,
    x2: 636.28,
    y2: 226.73,
    gradientTransform: "matrix(.97 .05 -.05 1 52.93 -28.22)",
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M60.08 449.66c3 33.76 22.14 64.32 33.82 96.47a228.68 228.68 0 0 1 4.45 142c-2.78 9.58-6.21 19.19-6.21 29 0 33.82 38.53 56.27 73.54 71.2a1340.62 1340.62 0 0 0 276.82 83.64c31.07 5.87 69.88 8.4 89.54-13.67 9.44-10.6 11.72-24.44 18.65-36.33 17.67-30.33 60.67-42.11 99.27-48.86a1212.54 1212.54 0 0 1 140.67-16.19c47.48-2.67 101.39-5 132.86-36.17 20-19.82 25.82-47.17 26.62-73 2.61-84.74-37.88-176.44 14.09-249.83 21.79-30.78 57.37-53.26 79-84.13 31.31-44.73 28.61-101.54 7.41-149.21s-58.75-88.2-95.76-127.92c-12.24-13.13-25.3-26.79-43.68-32.88-19.13-6.34-40.82-3.43-61.33-.43-93.3 13.62-190.14 28.46-268.39 75.24-38.86 23.23-71.32 53.36-106 81.07-74.89 59.87-161.65 115.17-260.54 138.81-80.34 19.21-162.05 71.02-154.83 151.19z",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M804.1 785.48c1.61-22.22 1.12-39.26-1-41-.9-.75-1.73-3.45-2.39-6.3 2.27-1.7 3.49-3.69 2.94-6-2.66-11.1-44.74-92.82-51.51-94.31s-5.37-122.59-5.37-122.59l9.88-92.38h-.14a67.34 67.34 0 0 1 4.07-14.6c.38-.93.78-1.83 1.18-2.72 8.18.29 16-3.34 22.76-12.89 7.36-10.4 14.2-19.65 20.4-27.76 14.64-11.4 32.66-29 37.89-49.41 9.25-36.08-33-73-33-73l-13.15-8.85c-.17-.5-.32-1-.46-1.5s-.26-1-.37-1.46a41.72 41.72 0 0 0 8.91-2.06 9.15 9.15 0 0 0 9 .77l.18-.1a8.52 8.52 0 0 0 1.43-.5 25.38 25.38 0 0 0 4.06-2.75c5.14-3.78 11.28-5.87 16.89-8.89 9.55-5.13 17.89-13.58 20.32-24.17a57.5 57.5 0 0 0 1.09-10.42 20.25 20.25 0 0 0-.62-7.52c-.66-1.92-1.89-3.59-2.66-5.47-1.67-4.08-1-8.68-1.09-13.09-.12-8.31-3-16.71-8.82-22.66s-14.53-9.14-22.63-7.41a43.5 43.5 0 0 0-6.36 2c-.93.34-1.85.7-2.77 1-3.63 1.33-7.25 2.34-11 1.47-4.49-1.05-8.4-4.82-13-4.28a8.92 8.92 0 0 0-2.76.84 15 15 0 0 0-4.57 2.4 52.45 52.45 0 0 0-5.89 4.88c-2.34 2.25-4.58 4.95-4.91 8.18a10.15 10.15 0 0 0 2.56 7.37 42.29 42.29 0 0 0-18.65 59.73q-.12.69-.25 1.4a103.32 103.32 0 0 1-2.5 10.48 9.06 9.06 0 0 1 .29-1.9c-.67-.15-1.36-.28-2.07-.4h-.32q-.94-.16-1.9-.28h-.16c-9.61-1.21-21.34-.14-28 3.67a57.17 57.17 0 0 0-24.29 27.67 68.52 68.52 0 0 0-15.79 25 34.21 34.21 0 0 0-15.76-3.26c-8.1-16-23.42-35.94-43.5-14.63-21.13 22.43 4.82 29 22.61 30.93a19.71 19.71 0 0 0 2.72 5.76 53.88 53.88 0 0 0 4.23 5.58 3.48 3.48 0 0 1-1.76.09c-4.09-1.14-3.79 40.64 14.5 52.83a102.56 102.56 0 0 1-11.74 21.53 120.75 120.75 0 0 0-15.73 31.29c-1.89 5.81-3.24 11.34-2.86 14.5a5.6 5.6 0 0 0 .22 1.07 3.51 3.51 0 0 0 .17.43 2.61 2.61 0 0 0 .22.37 2.07 2.07 0 0 0 .26.29 1.83 1.83 0 0 0 .29.22 1.84 1.84 0 0 0 .33.15 2.15 2.15 0 0 0 .36.07h.06a2.81 2.81 0 0 0 .4 0h.08a3.88 3.88 0 0 0 .44-.06h.1l.45-.12h.15l.46-.18.2-.08.5-.24.22-.11.57-.33.21-.12.71-.45.14-.09.91-.65c-.88 1.72-1.9 3.59-3.07 5.52-5.78 9.44-15.28 20.38-29.28 23.46-26 5.71-92.91 91.23-92.91 91.23s-20.63-1.43-12.27 64.33 9.94 101.45 9.94 101.45l.37.23c-7.84 8.92-23.83 24.94-37.73 25.13-19.28.26-30.64 12.94-21.48 20.87s109-4.56 109-4.56.66-26.09-4.09-38.08a23.09 23.09 0 0 0 2.24-2.27l-4.93-131.89s62.33-53.43 92.72-58.61c-.2-.11-.4-.21-.59-.31a21.39 21.39 0 0 1 5.81-.11c26.56 3.61 46.72 124.69 46.72 124.69s4.89 19.06 19.49 33.75 47 71.44 47 71.44l1.35-.15.18.31c0 8.6-1.31 21.51-8 31.58-11 16.58 19.87 23 19.87 23s22.45 6.23 24.05-15.99z",
    transform: "translate(-66.64 -11.98)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M455.17 689.22s-23.23 30.53-42.45 30.8-30.55 12.86-21.41 20.74 108.74-4.5 108.74-4.5.94-37.52-7.68-43-37.2-4.04-37.2-4.04zM704.62 725.87s3.56 24.18-7.42 40.67 19.82 22.85 19.82 22.85 22.37 6.23 24-15.86 1.1-39-1-40.8-3.85-14.23-3.85-14.23z",
    fill: "#444176"
  }), _react.default.createElement("path", {
    d: "M703.64 735.02s-32.36-56.44-46.92-71-19.45-33.56-19.45-33.56-20.14-120.39-46.63-124-99.16 58.5-99.16 58.5l5.18 131.08c-15.77 18.28-46.71-1.16-46.71-1.16s-1.59-35.56-9.93-100.95 12.21-64 12.21-64 66.67-85 92.61-90.68c14-3.05 23.42-13.93 29.19-23.31a76.67 76.67 0 0 0 7.16-15l110.83 11.85-9.82 91.85s-1.36 120.4 5.4 121.89 48.74 82.76 51.4 93.79-35.36 14.7-35.36 14.7z",
    fill: "#565387"
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M585.45 506.8a10.92 10.92 0 0 0-3.91-1.39c-26.49-3.6-99.16 58.5-99.16 58.5l5.19 131.11c-4.73 5.48-10.83 7.57-17 7.81 9.37 2.18 20.22 2 27.67-6.67l-5.23-131.14s62.14-53.07 92.44-58.22zM740.51 720.5c-2.66-11-44.64-92.3-51.4-93.79s-5.4-121.89-5.4-121.89l9.82-91.85-10.63-1.14-9.82 91.85s-1.36 120.4 5.4 121.89 48.74 82.76 51.4 93.79c1.8 7.47-15 11.54-26.11 13.39l1.39 2.4s38.01-3.62 35.35-14.65z"
  })), _react.default.createElement("path", {
    d: "M757.73 257.83s-104.81-3.53-85.65-17.6c11.82-8.69 16.93-25.68 19.12-37.43a99.61 99.61 0 0 0 1.58-12.57s55.87-5.54 42.13 15.25c-3.6 5.46-3.75 11.65-2 17.81 4.93 17.36 24.82 34.54 24.82 34.54z",
    fill: "#ffbec7"
  }), _react.default.createElement("path", {
    d: "M643.72 232.59s-25.36 14.18-30.36 46.66-9.11-1-9.11-1-14.53 13.8-19 12.56-3.68 48.74 20.21 55.14 42.76-98.31 42.76-98.31z",
    fill: "#dfe5ee"
  }), _react.default.createElement("path", {
    d: "M643.72 232.59s-25.36 14.18-30.36 46.66-9.11-1-9.11-1-14.53 13.8-19 12.56-3.68 48.74 20.21 55.14 42.76-98.31 42.76-98.31z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M607.36 278.6s-19.48-62-49.78-29.89 36.55 31.55 36.55 31.55z",
    fill: "#ffbec7"
  }), _react.default.createElement("path", {
    d: "M734.92 205.49c-3.6 5.46-3.75 11.65-2 17.81a42 42 0 0 1-41.72-20.5 99.61 99.61 0 0 0 1.58-12.57s55.88-5.54 42.14 15.26z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 794.29,
    cy: 192.12,
    r: 41.99,
    transform: "rotate(-81.78 754.009 224.623)",
    fill: "#ffbec7"
  }), _react.default.createElement("path", {
    d: "M692.02 412.81l-1.44 13.43c-12.23-3.27-96.13-25-113.89-11.94a20.47 20.47 0 0 1-2.66 1.69 76.67 76.67 0 0 0 7.16-15z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M779.43 306.22c-5.59 21.77-25.82 40.27-40.86 51.46a169.62 169.62 0 0 1-17.31 11.42s-15.57 9.07-23.81 29.34a68.77 68.77 0 0 0-5 24.4s-96.22-26.41-115.38-12.34c-10.07 7.4-8.48-3.06-4.7-14.64a119.83 119.83 0 0 1 15.67-31.1c5.29-7.61 11.93-18.76 13.93-29.15 2.65-13.8 20.64-66.29 29-90.29a57.16 57.16 0 0 1 25.62-31.11c7.76-4.39 22.28-5.12 32.4-2.89 0 0-3.26 10.85 11.72 12.79 1.62.21 3.23.5 4.82.87 6 1.41 20.79 4.22 27.35-.52l13.61 9.13s42.15 36.76 32.94 72.63z",
    fill: "#dfe5ee"
  }), _react.default.createElement("path", {
    d: "M735.15 161.3c.95-1.78.26-4.08-1.1-5.58a14.92 14.92 0 0 0-5.09-3.21l-9.13-4.14a31.78 31.78 0 0 1-8.49-5c-2.44-2.22-4.2-5.43-3.87-8.7s2.56-5.9 4.9-8.13a52.22 52.22 0 0 1 5.87-4.85 12.77 12.77 0 0 1 5.71-2.62c4.57-.54 8.47 3.21 12.95 4.26 6.75 1.58 13.24-3.09 20-4.53 8.08-1.72 16.81 1.46 22.57 7.37s8.68 14.27 8.8 22.53c.07 4.39-.57 9 1.09 13 .76 1.87 2 3.53 2.65 5.44a20.08 20.08 0 0 1 .62 7.48 57 57 0 0 1-1.05 10.4c-2.42 10.53-10.74 18.92-20.26 24-5.6 3-11.72 5.08-16.84 8.83a25.28 25.28 0 0 1-4 2.73 9.15 9.15 0 0 1-8.94-.77 6.52 6.52 0 0 1-3-5.4c.1-2.14 1.54-3.95 2.65-5.78 2.9-4.77 3.58-11.53-.28-15.58-1.69-1.77-4-2.81-5.67-4.62-2.68-3-3-7.32-3.09-11.32-.26-7.47-.45-15.25 2.67-22",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M735.66 155.12a14.92 14.92 0 0 0-5.09-3.21l-9.13-4.14a31.78 31.78 0 0 1-8.49-5c-2.44-2.22-4.2-5.43-3.87-8.7s2.56-5.9 4.9-8.13a52.22 52.22 0 0 1 5.87-4.85 12.77 12.77 0 0 1 5.71-2.62c4.57-.54 8.47 3.21 12.95 4.26 6.75 1.58 13.24-3.09 20-4.53 8.08-1.72 16.81 1.46 22.57 7.37s8.68 14.27 8.8 22.53c.07 4.39-.57 9 1.09 13 .76 1.87 2 3.53 2.65 5.44a20.08 20.08 0 0 1 .62 7.48 57 57 0 0 1-1.08 10.36c-2.42 10.53-10.74 18.92-20.26 24-5.6 3-11.72 5.08-16.84 8.83a25.28 25.28 0 0 1-4 2.73 9.15 9.15 0 0 1-8.94-.77 6.52 6.52 0 0 1-3-5.4c.1-2.14 1.54-3.95 2.65-5.78 2.9-4.77 3.58-11.53-.28-15.58-1.69-1.77-4-2.81-5.67-4.62-2.68-3-3-7.32-3.09-11.32-.26-7.47-1.53-14.51 1.59-21.3",
    fill: "#88455e"
  }), _react.default.createElement("path", {
    d: "M764.36 325.88c-6.15 7.11-15 17.71-25.76 31.8a169.62 169.62 0 0 1-17.31 11.42s-15.57 9.07-23.81 29.34c-32.77 1.72-72.38-63.42-72.38-63.42l25.94-27.17 44.22 31.6 14.4-30.85a52 52 0 0 1 42.07-29.78l.69-.06c9.21-.84 14.53 4.66 17.59 11.62a33.72 33.72 0 0 1-5.65 35.5z",
    opacity: 0.1
  }), _react.default.createElement("g", {
    opacity: 0.05
  }, _react.default.createElement("path", {
    d: "M682.16 210.59s-3.26 10.85 11.72 12.79c1.62.21 3.23.5 4.82.87a80.55 80.55 0 0 0 13.58 2.05c-2.69-.42-5.07-.92-6.75-1.32s-3.2-.66-4.82-.87c-15-1.94-11.72-12.79-11.72-12.79a54.79 54.79 0 0 0-8.95-1.14c.73.13 1.44.26 2.12.41zM746.5 233.6l-13.61-9.13a11.74 11.74 0 0 1-3.34 1.61l10.12 6.79s42.14 36.75 32.93 72.62c-5.59 21.77-25.82 40.27-40.86 51.46a169.62 169.62 0 0 1-17.31 11.42s-15.57 9.07-23.81 29.34a68.6 68.6 0 0 0-4.92 23.31c4.27 1.09 6.78 1.78 6.78 1.78a68.77 68.77 0 0 1 5-24.4c8.24-20.27 23.81-29.34 23.81-29.34a169.62 169.62 0 0 0 17.31-11.42c15-11.18 35.27-29.69 40.86-51.46 9.18-35.83-32.96-72.58-32.96-72.58zM570.27 409.77l-.72.5c.38 3.16 2.5 3.94 7.55.23 6-4.38 19.39-4.84 35-3.39-18.46-2.23-35.02-2.34-41.83 2.66z"
  })), _react.default.createElement("path", {
    d: "M597.19 349.37s7.73 20 18.46 27.25 24.78 19.54 24.78 19.54",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M810 721.69l-16.12-69.62C787 640.64 779.93 634.5 774 631.23c-7.64-4.7-13.72-4.67-15.64-4.5l-2.16-2.28c-8.22-11.61-12.58-42-12.58-42-.43-14.25-9.46-23.9-21.08-30.42-19.58-11.73-47.66-14-53.63-14.35l-4.76-9.47-1.28-.31-.3-.6c-1-.27-2.13-.5-3.22-.72l8.42-172.79.08-1.67 33.25 1.62a10.07 10.07 0 0 0 1-20.1l-38.93-1.9v-.84l3.64-74.66v-.84a15.25 15.25 0 0 0 5.84-11.34 14.62 14.62 0 1 0-29.2-1.42 15.25 15.25 0 0 0 4.71 11.85v.84L644.5 330v.84L605.53 329a10.07 10.07 0 0 0-1 20.1l31.63 1.54-.08 1.67-8.53 175a231.4 231.4 0 0 0-36.14 7.51l-13.76 48.85-40.19 7.28-20.94 46L497 671.18c-2.07.76-4.08 1.57-6 2.4-72.75 30.7-75.7 106.94-75.7 106.94 20.27 34.56 122.63 19.41 122.63 19.41 58.42 52.37 174.54 21.94 174.54 21.94 28 6.9 50.16 9.89 67.64 10.56 48.74 1.86 61-14.37 61-14.37 17.54-44.48-31.11-96.37-31.11-96.37z",
    transform: "translate(-66.64 -11.98)",
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M572.74 329.57l9.349-87.482 18.633 1.991-9.349 87.482z"
  }), _react.default.createElement("path", {
    fill: "#f0f5fa",
    d: "M543.975 529.675l20.948-196.023 31.59 3.376-20.948 196.023z"
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M581.169 335.38l15.392 1.645-20.949 196.024-15.392-1.645z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M564.065 341.763l.866-8.104 31.59 3.376-.866 8.104zM572.74 329.575l.951-8.91 18.634 1.992-.952 8.91z"
  }), _react.default.createElement("rect", {
    x: 590.3,
    y: 334.41,
    width: 116.49,
    height: 19.55,
    rx: 9.78,
    ry: 9.78,
    transform: "rotate(6.1 727.949 -287.037)",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M353.42 771.54s-.81-78.2 76.57-110l17.92-34.21 18.74-45.62 39.92-9 11.4-48.06s44-15.48 72.5-9.78l5.7 9.78s73.32-.81 76.57 39.1c0 0 7.33 36.66 17.92 43.18 0 0 17.92-4.07 35.84 22l19.55 66.8s51.32 48.06 35.84 92.05c0 0-21.18 30.14-128.71 9.78 0 0-114.86 35-176-13 .07.01-101.76 19.56-123.76-13.02z",
    fill: "#a8a8a8"
  }), _react.default.createElement("path", {
    d: "M404.74 759.32s16.29-22.81 15.48-39.1 3.84-56.05 3.84-56.05M464.21 698.22s16.29-30.14 14.66-46.43c0 0 17.11-31 30.14-28.51M553.82 612.69s44.8-16.29 47.25-29.33M570.11 650.16s47.25-21.14 47.25-26.88h23.62s34.21 44.8 30.14 64.36M625.51 682.74s-45.62-3.26-61.91 9.78-45.62 19.55-45.62 19.55-17.11 36.66-23.62 43.18-17.11 29.33-17.11 29.33M625.51 725.92s4.85 17.1 11.4 26.88 16.29 44.8 16.29 44.8M702.08 775.61s10.34 28.77 19.43 29",
    fill: "none",
    stroke: "#000",
    strokeMiterlimit: 10,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M634.36 652.12s26.86 7.26 38.09 24.85 45.57 33.55 45.57 33.55M645.87 565.44s0 37.47 10.59 37.47 34.22 4.11 34.22 4.11M594 520.97s-2.71 64.73-16.55 81.48",
    fill: "none",
    stroke: "#000",
    strokeMiterlimit: 10,
    opacity: 0.1
  }), _react.default.createElement("g", {
    opacity: 0.05
  }, _react.default.createElement("path", {
    d: "M744.44 694.96l-19.55-66.8c-17.92-26.07-35.84-22-35.84-22-10.59-6.51-17.92-43.14-17.92-43.14-3.26-39.92-76.57-39.1-76.57-39.1l-5.7-9.78c-7.22-1.44-15.43-1.53-23.66-.85 2 .2 3.89.48 5.74.85l5.7 9.78s73.32-.81 76.57 39.1c0 0 7.33 36.66 17.92 43.18 0 0 17.92-4.07 35.84 22l19.55 66.8s51.32 48.02 35.84 92.02c0 0-10.45 14.87-53.93 16.66 58.61 2.15 71.85-16.66 71.85-16.66 15.48-44-35.84-92.06-35.84-92.06zM457.69 783.76a380.76 380.76 0 0 1-52.19 5.65c20.4.78 41.63-1.42 55.31-3.31q-1.57-1.14-3.12-2.34zM633.65 796.79a334.73 334.73 0 0 1-76.93 12.16c37.55 1.36 73.12-6.46 87.79-10.22-3.52-.59-7.15-1.23-10.86-1.94z"
  })), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M590.687 242.591l9.724 1.04-8.483 79.378-9.724-1.04z"
  }), _react.default.createElement("path", {
    d: "M600.75 244.11l-.68 6.36a14.67 14.67 0 0 1-18.63-2l.68-6.36z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 658.68,
    cy: 249.42,
    r: 14.66,
    transform: "rotate(-83.9 618.673 280.508)",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M606.62 239.02a14.66 14.66 0 0 1-16.14 13l3.12-29.16a14.66 14.66 0 0 1 13.02 16.16z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M656.86 310.77l-10.22 16.57-9.78-8.49-13.4-11.64s-24.78 2-40.64-22c-6.8-10.27-1.51-16.15 6.74-19.5a34.24 34.24 0 0 1 39.41 10.5z",
    fill: "#ffbec7"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M656.86 310.77l-10.21 16.57-9.78-8.5 14.37-15.04 5.62 6.97z"
  }), _react.default.createElement("path", {
    d: "M713.02 305.89l-14.4 30.84-44.26-31.6-25.9 27.17s59.42 97.72 92.9 50.62c20.31-28.61 36.67-48.53 46.38-59.76a33.7 33.7 0 0 0 5.67-35.5c-3.06-7-8.38-12.45-17.59-11.62l-.69.07a52 52 0 0 0-42.11 29.78z",
    fill: "#dfe5ee"
  }), _react.default.createElement("path", {
    d: "M919.19 660.37s-13.26-45 2.49-78.14a71.09 71.09 0 0 0 5.75-44.6 119.57 119.57 0 0 0-6.31-20.93",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M930.9 495.76c0 5.52-10 21.51-10 21.51s-10-16-10-21.51a10 10 0 0 1 20 0zM947.42 526.31c-3 4.63-20.08 12.63-20.08 12.63s.31-18.86 3.31-23.49a10 10 0 0 1 16.77 10.86zM946.69 578.53c-4.93 2.48-23.71.77-23.71.77s9.79-16.12 14.71-18.6a10 10 0 1 1 9 17.84zM937.25 617.92c-4.44 3.28-23.24 4.76-23.24 4.76s6.92-17.54 11.36-20.82a10 10 0 1 1 11.88 16.06zM906.36 540.02c4 3.84 22.39 7.83 22.39 7.83s-4.51-18.31-8.47-22.15a10 10 0 1 0-13.92 14.32zM895.91 586.21c4.93 2.48 23.71.77 23.71.77s-9.79-16.12-14.71-18.6a10 10 0 1 0-9 17.84zM891.9 632.51c4.44 3.28 23.24 4.76 23.24 4.76s-6.92-17.54-11.36-20.82a10 10 0 0 0-11.88 16.06zM74.62 505.89s41.84 41.84 18.22 103.92 40.52 165.32 40.52 165.32-.69-.1-2-.32C45.43 759.64 2.74 661.37 50.52 588.36c17.77-27.15 32.35-58.99 24.1-82.47z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M74.62 506.58s41.84 41.84 18.22 103.92 40.52 165.32 40.52 165.32-.69-.1-2-.32C45.44 760.33 2.75 662.02 50.53 589.02c17.76-27.11 32.34-59 24.09-82.44z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M74.62 505.89s23.62 51.28 0 93.12-4 159.25 58.71 176.12",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M.11 675.1s47.74-7.6 52.09 35.18 91.8 48.74 91.8 48.74l-1.64 1.07c-72.2 47.4-141.23 30.19-130.82-32.75 3.82-23.39 3.55-46.89-11.43-52.24z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M.11 675.1s37.06 8.13 34 41.83S89.15 791.02 144 759.02",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M878.48 650.82s22.41-.69 29.16-5.5 34.47-10.55 36.14-2.84 33.67 38.35 8.38 38.56-58.78-3.94-65.52-8-8.16-22.22-8.16-22.22z",
    fill: "#a8a8a8"
  }), _react.default.createElement("path", {
    d: "M952.61 678.36c-25.3.2-58.78-3.94-65.52-8-5.13-3.13-7.18-14.34-7.86-19.52h-.75s1.42 18.07 8.16 22.18 40.22 8.25 65.52 8c7.3-.06 9.82-2.66 9.69-6.5-1.02 2.34-3.81 3.79-9.24 3.84z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M181.02 762.56s-37.61-7.54-47.66-17.54-55.15-27.57-60.16-15-67.66 55.1-25.04 62.62 100.27 10 112.8 5 20.06-35.08 20.06-35.08z",
    fill: "#a8a8a8"
  }), _react.default.createElement("path", {
    d: "M48.16 788.02c42.62 7.52 100.27 10 112.8 5 9.55-3.82 16.18-22.16 18.8-30.7l1.25.26s-7.52 30.08-20.05 35.09-70.19 2.51-112.8-5c-12.3-2.17-15.82-7.27-14.49-13.72 1.04 4.18 5.33 7.42 14.49 9.07z",
    opacity: 0.2
  }));
};

UndrawBeTheHero.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawBeTheHero;
exports.default = _default;