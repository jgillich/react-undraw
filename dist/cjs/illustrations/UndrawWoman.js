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

var UndrawWoman = function UndrawWoman(_props) {
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
    viewBox: "0 0 626.12 698.31",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 445.06,
    y1: 472.29,
    x2: 445.06,
    y2: 295.16,
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
    x1: 139.14,
    y1: 646.22,
    x2: 166.86,
    y2: 646.22,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 207.95,
    y1: 646.22,
    x2: 235.66,
    y2: 646.22,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 413.73,
    y1: 586.32,
    x2: 538.68,
    y2: 586.32,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 410.06,
    y1: 781.74,
    x2: 453.79,
    y2: 781.74,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 495.33,
    y1: 781.74,
    x2: 539.06,
    y2: 781.74,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__g",
    x1: 188.06,
    y1: 206.65,
    x2: 188.06,
    y2: 0,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M591.52 412q.18-.64.3-1.29c0-.16 0-.32.07-.47s.09-.6.11-.9 0-.42 0-.63v-.78-.62c0-.2 0-.56-.06-.84s-.05-.35-.07-.52c0-.32-.1-.64-.16-1v-.15l-22.3-100.52c-14.46 2-6.77.24-14.46 2s0 0-13.48 4.38l5.61 25.28L527 305.79a14.2 14.2 0 0 0-10.2-6.35 93.35 93.35 0 0 1-14.75-2.79 37.77 37.77 0 0 0-10.52-1.49h-34a37.72 37.72 0 0 0-10.53 1.49 93.35 93.35 0 0 1-14.75 2.79 14.2 14.2 0 0 0-10.2 6.35l-51.57 77.5-49.8-65.8c-11.91 7.81-5.69 2.88-11.91 7.81s0 0-10.72 10.09L359.84 417a14.18 14.18 0 0 0 10 5.56h2.45c.38 0 .77-.08 1.16-.14h.05a14.22 14.22 0 0 0 9.7-6.28l34.86-51 5.25 84.1c0 12.67 11.16 23 23.57 23h55.31c12.41 0 22.57-10.36 22.57-23l4.3-84.1 36.81 51c0 .06.09.12.13.19s.23.31.35.47.37.5.58.74c0 .06.1.11.14.17a14.31 14.31 0 0 0 5.46 3.88 1 1 0 0 1 .16.06c.36.13.72.26 1.09.37a5.73 5.73 0 0 0 .56.14l.75.18c.24.05.49.08.74.12l.62.08h1.97c.31 0 .61 0 .92-.06l.34-.05c.38 0 .77-.12 1.15-.2h.11a11.66 11.66 0 0 0 1.28-.37h.05a14.26 14.26 0 0 0 3.41-1.69 14.5 14.5 0 0 0 5.79-8.18z",
    transform: "translate(-286.94 -100.84)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M139.14 628.95h27.71v34.53h-27.71z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M207.95 628.95h27.71v34.53h-27.71z"
  }), _react.default.createElement("path", {
    d: "M498.11 431.17h-45.37c-29.16 0-39 23.61-39 51.49l8.8 258.8h39.83V538a12.91 12.91 0 0 1 11.47-12.74c7.89-.9 14.66 5 14.66 12.4v203.8h39.82l10.37-258.8c-.01-27.88-11.43-51.49-40.58-51.49z",
    transform: "translate(-286.94 -100.84)",
    fill: "url(#prefix__d)"
  }), _react.default.createElement("path", {
    d: "M453.79 764.33v34.83H414.4a4.12 4.12 0 0 1-3-7.13c7.91-7.28 18-18.75 14.68-27.7",
    transform: "translate(-286.94 -100.84)",
    fill: "url(#prefix__e)"
  }), _react.default.createElement("path", {
    d: "M495.33 764.33v34.83h39.4a4.12 4.12 0 0 0 3-7.13c-7.9-7.28-18-18.75-14.68-27.7",
    transform: "translate(-286.94 -100.84)",
    fill: "url(#prefix__f)"
  }), _react.default.createElement("path", {
    fill: "#ffd9cb",
    d: "M141.08 625.82h26.22v34.17h-26.22zM206.19 625.82h26.22v34.17h-26.22z"
  }), _react.default.createElement("path", {
    d: "M209.23 330.33H166.3c-27.59 0-36.91 23.36-36.91 50.95l8.33 256.09h37.69v-201.3a12.58 12.58 0 0 1 10.85-12.59 12.39 12.39 0 0 1 13.87 12.27v201.62h37.69l9.8-256.09c0-27.59-10.8-50.95-38.39-50.95zM167.3 659.99v34.47h-37.24a4.1 4.1 0 0 1-2.83-7.06c7.48-7.2 17-18.55 13.89-27.41M206.61 659.99v34.47h37.28a4.1 4.1 0 0 0 2.83-7.06c-7.48-7.2-17-18.55-13.89-27.41",
    fill: "#212121"
  }), _react.default.createElement("ellipse", {
    cx: 188.06,
    cy: 103.32,
    rx: 98.06,
    ry: 103.32,
    fill: "url(#prefix__g)"
  }), _react.default.createElement("ellipse", {
    cx: 188.06,
    cy: 103.32,
    rx: 93.17,
    ry: 98.17,
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 186.69,
    cy: 110.54,
    rx: 76.85,
    ry: 78.64,
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 187.69,
    cy: 107.54,
    rx: 76.85,
    ry: 78.64,
    opacity: 0.3
  }), _react.default.createElement("rect", {
    x: 522.41,
    y: 265.86,
    width: 55.2,
    height: 27.31,
    rx: 4.47,
    transform: "rotate(-74.09 339.772 419.168)",
    fill: "#bdbdbd"
  }), _react.default.createElement("rect", {
    x: 305.17,
    y: 288.14,
    width: 5.69,
    height: 24.46,
    rx: 1.99,
    transform: "rotate(-26.97 -45.65 848.258)",
    fill: "#ffcfbe"
  }), _react.default.createElement("rect", {
    x: 295.21,
    y: 292.8,
    width: 5.69,
    height: 24.08,
    rx: 1.99,
    transform: "rotate(-60 67.262 502.92)",
    fill: "#ffcfbe"
  }), _react.default.createElement("path", {
    d: "M12.79 209.98c-2.24 1.27-13.93 8.9 1.1 22.86a5.39 5.39 0 0 0 6.86.37l10.6-7.85a5.39 5.39 0 0 0 1.89-6.08l-3-8.84a8.42 8.42 0 0 0-13.36-3.74l-3.29 2.75a4.57 4.57 0 0 1-.8.53z",
    fill: "#ffcfbe"
  }), _react.default.createElement("rect", {
    x: 274.41,
    y: 176.06,
    width: 5.69,
    height: 15.73,
    rx: 1.99,
    fill: "#ffcfbe"
  }), _react.default.createElement("path", {
    d: "M264.51 188.31s-19.78.34-7.19 25.29l21-4.28 2.23-21a3 3 0 0 0-3.8-3.26z",
    fill: "#ffcfbe"
  }), _react.default.createElement("rect", {
    x: 551.66,
    y: 267.37,
    width: 5.69,
    height: 25.22,
    rx: 1.99,
    transform: "rotate(-25.19 185.344 871.657)",
    fill: "#ffcfbe"
  }), _react.default.createElement("rect", {
    x: 547.24,
    y: 270.63,
    width: 5.69,
    height: 21.81,
    rx: 1.99,
    transform: "rotate(-25.19 180.91 873.204)",
    fill: "#ffcfbe"
  }), _react.default.createElement("rect", {
    x: 543.13,
    y: 275.79,
    width: 5.69,
    height: 20.68,
    rx: 1.99,
    transform: "rotate(-25.19 176.804 877.808)",
    fill: "#ffcfbe"
  }), _react.default.createElement("rect", {
    x: 539.43,
    y: 282.44,
    width: 5.69,
    height: 18.18,
    rx: 1.99,
    transform: "rotate(-25.19 173.107 883.208)",
    fill: "#ffcfbe"
  }), _react.default.createElement("path", {
    d: "M302.64 308.91c.11-.41.21-.83.29-1.25 0-.15 0-.3.07-.45s.09-.58.11-.87 0-.41 0-.62v-.75-.6c0-.2 0-.55-.05-.82s0-.33-.07-.5-.1-.62-.16-.93v-.14l-22.06-97.52c-14.3 1.94-6.7.24-14.3 1.94s0 0-13.34 4.25l5.55 24.51-19.85-29.23a14.09 14.09 0 0 0-10.09-6.16 93.7 93.7 0 0 1-14.59-2.7 37.92 37.92 0 0 0-10.4-1.45h-33.64a38 38 0 0 0-10.4 1.45 93.7 93.7 0 0 1-14.59 2.7 14.09 14.09 0 0 0-10.06 6.16l-51 75.13-49.25-63.79c-11.78 7.57-5.63 2.8-11.78 7.57s0 0-10.6 9.79l61.1 79.13a14 14 0 0 0 9.89 5.39h2.42c.38 0 .76-.07 1.15-.13h.07a14.13 14.13 0 0 0 9.6-6.08l36.4-53.73 4.17 85.81a22.39 22.39 0 0 0 22.33 22.32h54.69a22.39 22.39 0 0 0 22.33-22.32l4.16-85.81 36.52 53.75.14.18.34.45c.18.25.37.5.57.73l.15.16a14.2 14.2 0 0 0 5.39 3.76 1 1 0 0 1 .16.06c.36.13.72.26 1.08.36l.55.14.74.17c.24.05.49.08.73.11l.62.08h1.95c.3 0 .61 0 .91-.06l.33-.05c.38-.05.76-.11 1.14-.19h.11c.42-.1.85-.22 1.27-.35a13.81 13.81 0 0 0 3.37-1.64 14 14 0 0 0 5.73-7.92z",
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 186.94,
    cy: 109.75,
    r: 67.43,
    fill: "#e53935"
  }), _react.default.createElement("rect", {
    x: 174.3,
    y: 160.81,
    width: 27.51,
    height: 50.99,
    rx: 13.76,
    fill: "#ffe0b2"
  }), _react.default.createElement("circle", {
    cx: 186.94,
    cy: 121.44,
    r: 52.15,
    fill: "#ffe0b2"
  }), _react.default.createElement("circle", {
    cx: 169.55,
    cy: 107.05,
    r: 3.15,
    fill: "#db7657"
  }), _react.default.createElement("circle", {
    cx: 204.32,
    cy: 107.05,
    r: 3.15,
    fill: "#db7657"
  }), _react.default.createElement("path", {
    d: "M199.82 138.99c0 4.21-5.77 7.63-12.89 7.63s-12.87-3.46-12.87-7.63 25.76-4.21 25.76 0z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M161.16 64.8s-8.39 42 81.52 33.57L220.5 61.81z",
    fill: "#e53935"
  }), _react.default.createElement("ellipse", {
    cx: 421.73,
    cy: 219.14,
    rx: 5.39,
    ry: 9.29,
    transform: "rotate(-19.62 -13.315 998.47)",
    fill: "#ffcfbe"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M181.54 103.91h13.04v6.29h-13.04z"
  }), _react.default.createElement("circle", {
    cx: 267.29,
    cy: 163.25,
    r: 2.81,
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M184.74 265.84a20.23 20.23 0 0 0-28.54 28.68l28.68 28.53 28.53-28.67a20.23 20.23 0 1 0-28.67-28.54z",
    fill: "#fff"
  }), _react.default.createElement("ellipse", {
    cx: 526.02,
    cy: 219.14,
    rx: 9.29,
    ry: 5.39,
    transform: "rotate(-70.1 312.873 372.847)",
    fill: "#ffcfbe"
  }), _react.default.createElement("circle", {
    cx: 167.46,
    cy: 191.79,
    r: 3.82,
    fill: "#fff"
  }), _react.default.createElement("rect", {
    x: 165.66,
    y: 191.79,
    width: 3.3,
    height: 39.11,
    rx: 1.15,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 210.56,
    cy: 191.79,
    r: 3.82,
    fill: "#fff"
  }), _react.default.createElement("rect", {
    x: 208.91,
    y: 191.79,
    width: 3.3,
    height: 32.59,
    rx: 1.15,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 158.53,
    cy: 107.05,
    r: 25.39,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 158.53,
    cy: 107.05,
    r: 17.79,
    opacity: 0.3
  }), _react.default.createElement("circle", {
    cx: 217.29,
    cy: 107.05,
    r: 25.39,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 217.29,
    cy: 107.05,
    r: 17.79,
    opacity: 0.3
  }), _react.default.createElement("path", {
    d: "M622.49 507.94c-.33 23.45-20.12 42-43.58 42h-3.26a11 11 0 0 0-7.73 3.12 10.78 10.78 0 0 0-3.14 5.48 10.1 10.1 0 0 0-.33 2.59v41.41a41.52 41.52 0 0 1-6.56 22.46 59.35 59.35 0 0 0-9.76 31.95 20 20 0 0 1-20.33 20c-11-.2-19.57-9.63-19.57-20.6v-10.41l-5.44.64v10.37a20 20 0 0 1-20.34 20c-11-.2-19.57-9.63-19.57-20.6v-5.29c-5.44 2.26-36.27 2.26-44.83.07l-2.32-.18v6a20 20 0 0 1-20.34 20c-11-.2-19.57-9.63-19.57-20.6v-8.62l-1.81-.16V657a19.94 19.94 0 0 1-20.33 20c-10-.18-18.07-8.07-19.39-17.81a23.35 23.35 0 0 1-.18-2.79v-43.43a66.36 66.36 0 0 1 14.15-41 12.3 12.3 0 0 0 .34-14.53c-10.16-14.87-25.17-40-24.69-57.76.13-5.15 1.55-9.67 4.76-13.17.2-.22.4-.44.6-.64 14.61-15.3 40.35-3.26 38.12 17.78a59 59 0 0 0 1.54 21 64.68 64.68 0 0 0 4.13 11.27 19.11 19.11 0 0 0 19.57 10.88 69.1 69.1 0 0 1 8.18-.49h83.89a23.56 23.56 0 0 0 22.31-16 23 23 0 0 0 1.27-7.6v-65.27a12.7 12.7 0 0 1 13.09-12.7 12.35 12.35 0 0 1 8.76 4.08 13.65 13.65 0 0 1 3.54 9.15 6.72 6.72 0 0 0 6.73 6.72h39.52a42.6 42.6 0 0 1 42.62 43.25z",
    fill: "#f3ad55"
  }), _react.default.createElement("path", {
    d: "M373.39 661.9a20 20 0 0 1-19.71 15c-10-.18-18.07-8.07-19.39-17.81 12.08-3.26 28.82-5.51 39.1 2.81zM415.11 661.9a20 20 0 0 1-19.72 15c-10-.18-18.06-8.07-19.38-17.81 12.05-3.26 28.82-5.51 39.1 2.81zM502.17 661.9a20 20 0 0 1-19.72 15c-10-.18-18.06-8.07-19.38-17.81 12.08-3.26 28.82-5.51 39.1 2.81zM547.51 661.9a20 20 0 0 1-19.71 15c-10-.18-18.07-8.07-19.39-17.81 12.08-3.26 28.82-5.51 39.1 2.81zM368.93 524.64c-14.09-5.66-31.29-16-45-25 .13-5.15 1.55-9.67 4.76-13.17.2-.22.4-.44.6-.64 14.61-15.3 40.35-3.26 38.12 17.78a59 59 0 0 0 1.52 21.03zM385.99 546.43s38.81 48.85 102.29-.12M508.23 455.63s23.58 30.83 0 68.92M564.45 560.82s-20.76 25.81-.26 46.31",
    fill: "#fbdca3"
  }), _react.default.createElement("path", {
    d: "M566.27 555.38c-1.54 1.45-1 2.85-1.49 5l-67.43-17.66c3.62-2.8 8.12-6.12 9.61-10.54 8.1 6.24 24.1 16.76 59.31 23.2z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M567.92 553.06a10.78 10.78 0 0 0-3.14 5.48l-65.72-17.14a23.45 23.45 0 0 0 7.91-11.07c8.09 6.28 25.71 16.29 60.95 22.73z",
    fill: "#383f4d"
  }), _react.default.createElement("path", {
    d: "M509.43 533.96s20.56 15.47 55 20.26",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M509.43 532.16s20.56 15.46 55 20.25",
    fill: "#f3ad55"
  }), _react.default.createElement("path", {
    d: "M560.83 533.62s34.46 10.88 43.53-23.58z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M560.83 531.8s34.46 10.89 43.53-23.58z",
    fill: "#fbdca3"
  }), _react.default.createElement("ellipse", {
    cx: 622.5,
    cy: 503.69,
    rx: 3.63,
    ry: 6.35,
    fill: "#383f4d"
  }), _react.default.createElement("path", {
    d: "M347.71 634.28l7.26-58s-21.77 34.46-7.26 58",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M356.78 576.24s-21.76 34.46-7.25 58z",
    fill: "#fbdca3"
  }));
};

UndrawWoman.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawWoman;
exports.default = _default;