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

var UndrawDevelopment = function UndrawDevelopment(_props) {
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
    viewBox: "0 0 923 585.89",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 337.02,
    y1: 284.7,
    x2: 337.02,
    y2: 157.05,
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
    x1: 277.82,
    y1: 250.69,
    x2: 277.82,
    y2: 249.92,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 445.5,
    y1: 447,
    x2: 445.5,
    y2: 83.79,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 1022.23,
    y1: 742.95,
    x2: 1022.23,
    y2: 530.74,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 477.63,
    y1: 628.29,
    x2: 583.5,
    y2: 628.29,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    d: "M353.32 212.24c1-4.57 1.57-8.3 1.16-10.18l-.41.06.63-.28 1.7-1.57h.05l1.4-1.29a19.31 19.31 0 0 0 27.94-8.82c1.69 1 3 1.43 3.22.55a42.78 42.78 0 0 0 2.08-12.39 20.46 20.46 0 0 0-.47-4.45c-2.13-9.49-11.86-15.85-21.54-16.75-7.43-.69-15.55 1.62-20.05 7.57-3.9 5.16-11.57 8.62-15 14.1-2.77 4.42-1.91 10.35-3.22 15.44a45.57 45.57 0 0 0-4.1 3 29.19 29.19 0 0 0-7.93 7.86 112.53 112.53 0 0 0-9.26 12.42c-14.86 22.83-23.86 30.25-28.93 32.35l42.62.27a107.59 107.59 0 0 0 29 34.48l.26-.14.18.15 7.06-3.91a156.05 156.05 0 0 1-16.56-35.25c1-2.8 2.29-6.6 3.67-10.82 9.82 13.22 24.07 27.66 43.48 36.48l3.15-5.6s-25.09-21.86-40.13-53.28z",
    transform: "translate(-137.5 -157.05)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M280.61 250h-5.57s1.53 1.62 5.57 0z",
    transform: "translate(-137.5 -157.05)",
    fill: "url(#prefix__b)"
  })), _react.default.createElement("path", {
    d: "M205.84 73.18c9 12.88 22.71 27.77 42 36.56l2.87-5.11s-34-29.72-43.95-68.58l-1 .87c-8.48 7.38-8.48 23.98.08 36.26z",
    fill: "#4d8af0"
  }), _react.default.createElement("path", {
    d: "M205.84 73.18c9 12.88 22.71 27.77 42 36.56l2.87-5.11s-34-29.72-43.95-68.58l-1 .87c-8.48 7.38-8.48 23.98.08 36.26z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    fill: "#fda57d",
    d: "M210.07 31.31l-6.62 3.84-7.29 11.18 10.4 4.08 8.85-3.95 6.05-5.58-11.39-9.57z"
  }), _react.default.createElement("path", {
    d: "M203.64 35.76s-12.48-1-29.44 25.08c-24.35 37.41-31.47 29.48-31.47 29.48l60.56.38s13.47-36.82 11.91-44c.01-.04-11.64 2.25-11.56-10.94z",
    fill: "#4d8af0"
  }), _react.default.createElement("path", {
    d: "M209.89 31.18c.73 5.29 2.77 11.17 7.12 13.88l3.24-3-10.36-10.9z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 365.05,
    cy: 185.94,
    r: 17.65,
    transform: "rotate(-89.64 217.263 176.601)",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M246.72 36.34c1.38-4.87 2.58-10 1.47-15-1.95-8.66-10.82-14.46-19.65-15.28-6.78-.63-14.19 1.48-18.29 6.91-3.56 4.7-4.14 11.06-7.27 16.06-2.9 4.63-7.85 7.88-10 12.89a3.13 3.13 0 0 0-.3 2.19c.39 1.15 1.76 1.55 2.92 1.9a21.89 21.89 0 0 1 13.22 11.18c-.33-9.36 6.43-17.29 12.81-24.14 3-3.2 8-7.9 12.5-4.91.61.48 11.83 10.88 12.59 8.2z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M212.94 56.87s3.55 9.65-4.09 12.81",
    fill: primaryColor
  }), _react.default.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M0 83.79h891V447H0z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M7 89h878v352H7z"
  }), _react.default.createElement("path", {
    d: "M215 124v93h38v25c11-19 27-25 27-25h152v-93zM66 277v72h38v25c11-19 27-25 27-25h169v-72z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M840 172v72h-38v25c-11-19-27-25-27-25H606v-72zM840 367v41h-14v25c-11-19-27-25-27-25H406v-41z",
    fill: "#e0e0e0"
  }), _react.default.createElement("circle", {
    cx: 821,
    cy: 387,
    r: 7,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 801,
    cy: 387,
    r: 7,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 781,
    cy: 387,
    r: 7,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 761,
    cy: 387,
    r: 7,
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M179.1 71.95a98.19 98.19 0 0 0 34 50.14l6.44-3.57s-27.42-40.68-19.14-80.34l-1.76.41a26.59 26.59 0 0 0-19.54 33.36z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M179.5 71.95a98.19 98.19 0 0 0 34 50.14l6.44-3.57S192.5 77.8 200.82 38.14l-1.76.41a26.59 26.59 0 0 0-19.56 33.4z",
    fill: "#4d8af0"
  }), _react.default.createElement("path", {
    d: "M246.72 35.95c1.38-4.87 2.58-10 1.47-15-1.95-8.66-10.82-14.46-19.65-15.28-6.78-.63-14.19 1.48-18.29 6.91-3.56 4.7-10.55 7.86-13.68 12.86-2.9 4.63-1.44 11.07-3.62 16.09a3.13 3.13 0 0 0-.3 2.19c.39 1.15 1.76 1.55 2.92 1.9a21.89 21.89 0 0 1 13.22 11.18c-.33-9.36 6.43-17.29 12.81-24.14 3-3.2 8-7.9 12.5-4.91.64.47 11.86 10.87 12.62 8.2z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M213.67 122.26s9.34 14 11.35 8-4.67-12-4.67-12z",
    fill: "#fda57d"
  }), _react.default.createElement("ellipse", {
    cx: 359.37,
    cy: 190.7,
    rx: 4.67,
    ry: 2,
    transform: "rotate(-63.43 163.52 223.425)",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M1032.94 539.2c10.78 17.8 13.5 31.58 13.5 31.58 3.2-57-14.15-36.7-15.83-35.74v-.07l-5.8 3.35a13.34 13.34 0 0 0-9.33-3.93 13 13 0 0 0-7 2.07c-4.13.1-7.43 2.2-7.43 4.8a3.13 3.13 0 0 0 .26 1.22 15 15 0 0 0 8.95 24.95l1.53 10.88-2.42 1.9a13.37 13.37 0 0 0-5.16 9.69c-.23 4 1.43 8.64 9 11 0 0-.13 1.39-.38 3.59l-12.8 25.6s-5.12 11.73.37 12.08c7.89-1.37 6.52-4.46 7.55-7.21l.6-2h3c-2.45 13.4-10.45 59.48-9.65 86.62v7.85l-.51 3.89-14.74 4.42a3.71 3.71 0 0 0 1.19 7.26l20.83-.69a3.71 3.71 0 0 0 3.58-3.7V728h3.75v-8.47l3.77-45.19.49-1.16.45 5.87 16.95 37.66 3.77 6.59 1.64-.88-.52 6.19-6.86 6a3.71 3.71 0 0 0-.95 4.32 3.71 3.71 0 0 0 5 1.8l18.7-9.2a3.71 3.71 0 0 0 1.74-4.85l-1.65-3.65a3.69 3.69 0 0 0-2.58-2.08l-3.54-3.54 1.22-.66-2.82-6.59-16.95-39.54-.7-22.26a15.07 15.07 0 0 0 7.14-15.41h1.09s-2.4-14-3.65-29.19l-.12-1.48V600s-.13-.72-.35-1.88c-1.33-15-3.39-27-14.63-28.33l-.08.07v-4.63a17 17 0 0 0 7.29-14.31 18.14 18.14 0 0 0-2.18-8.68l5.25-3z",
    transform: "translate(-137.5 -157.05)",
    fill: "url(#prefix__d)",
    opacity: 0.5
  }), _react.default.createElement("ellipse", {
    cx: 878.33,
    cy: 396.43,
    rx: 13.98,
    ry: 15.97,
    fill: "#795548"
  }), _react.default.createElement("path", {
    fill: "#fda57d",
    d: "M875.2 566.37v8.22h-10.96l.91-7 10.05-1.22zM905.33 559.95l-.91 11h.61a17.6 17.6 0 0 0 11.7-4.45l3.21-2.86-8.22-8.22z"
  }), _react.default.createElement("path", {
    fill: "#4d8af0",
    d: "M882.5 508.85l.91 11.87 16.44 36.52 12.78-6.39-16.43-38.35-.92-29.21h-14.61l1.83 25.56z"
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M882.5 508.85l.91 11.87 16.44 36.52 12.78-6.39-16.43-38.35-.92-29.21h-14.61l1.83 25.56z"
  }), _react.default.createElement("path", {
    d: "M878.85 442.21l-15.52 31s-5 11.38.36 11.71c7.65-1.33 6.32-4.33 7.32-7l9.66-33z",
    fill: "#fda57d"
  }), _react.default.createElement("circle", {
    cx: 875.45,
    cy: 398.06,
    r: 14.61,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    fill: "#fda57d",
    d: "M885.24 419.38L875 424.72l-2.54-18.12h12.78v12.78z"
  }), _react.default.createElement("path", {
    d: "M875.2 472.34s-11 56.6-10 87.65h13.69l3.65-43.82 10-23.74s13.69-4.56 9.13-20.09z",
    fill: "#4d8af0"
  }), _react.default.createElement("path", {
    fill: "#4d8af0",
    d: "M865.15 558.7h13.69v9.49h-13.69z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    opacity: 0.05,
    d: "M865.15 558.7h13.69v9.49h-13.69z"
  }), _react.default.createElement("path", {
    fill: "#4d8af0",
    d: "M899.48 556.39l3.8 7.3 12.09-6.37-3.23-7.5-12.66 6.57z"
  }), _react.default.createElement("path", {
    d: "M867.56 572.09l-17.19 3.56a3.59 3.59 0 0 0-2.56 3.44 3.59 3.59 0 0 0 3.71 3.59l20.2-.67a3.59 3.59 0 0 0 3.47-3.59v-3.88c0-2 .39-2.59-1.59-2.59h-5a3.59 3.59 0 0 0-1.04.14z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M885.32 414.74l-12.9 10.15a13 13 0 0 0-5 9.4c-.22 3.9 1.39 8.38 8.69 10.66 0 0-2.74 29.22-7.3 31h34.69s-2.33-13.53-3.53-28.3c-1.4-17.04-2.41-31.44-14.65-32.91z",
    fill: "#eee"
  }), _react.default.createElement("path", {
    d: "M885.24 433.08l8.22 14.61-.96 32.86s-4.56 7.3-.91 8.22 9.13-1.83 8.22-7.3v-37.44s-2.74-15.52-5.48-19.17z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M911.5 564.95l-13.56 9.61a3.59 3.59 0 0 0-.92 4.19 3.59 3.59 0 0 0 4.86 1.75l18.14-8.92a3.59 3.59 0 0 0 1.69-4.7l-1.6-3.54c-.82-1.81-1.8-2.2-3.61-1.38l-5 3c-.32.13.26-.24 0-.01z",
    fill: "#333"
  }), _react.default.createElement("path", {
    fill: "#795548",
    d: "M892.59 386.91l-3.31 1.64-2.33-4.04 3.27-1.75 2.37 4.15z"
  }), _react.default.createElement("path", {
    d: "M890.22 382.77s21.92-23.1 17.37 33a129.42 129.42 0 0 0-15-28.82z",
    fill: "#795548"
  }), _react.default.createElement("ellipse", {
    cx: 879.66,
    cy: 396.43,
    rx: 12.65,
    ry: 13.98,
    fill: "#795548"
  }), _react.default.createElement("ellipse", {
    cx: 871.84,
    cy: 387.11,
    rx: 7.49,
    ry: 4.66,
    fill: "#795548"
  }), _react.default.createElement("path", {
    d: "M583.33 560.38c-1.51-4.53-10.49 1.59-10.49 1.59l-.74 1-16 21.57-39.04-21.84v-9.78a13.58 13.58 0 0 0 11.88-15.8 14.73 14.73 0 0 0 5-4c1.36-1.45 2.82-3.2 2.68-5.13a3.56 3.56 0 0 0-.05-.92 4.92 4.92 0 0 0-3.34-3.38 31.8 31.8 0 0 0-4.86-1c-3.87-.76-7.37-2.78-11.15-3.93a25.37 25.37 0 0 0-5.27-1 7.68 7.68 0 0 0-3.79.42 13 13 0 0 0-3.25 2.67 14.78 14.78 0 0 1-4.26 2.77c-2.34 1-5 1.4-7.08 2.81a4.17 4.17 0 0 0-1.43 1.43 3.89 3.89 0 0 0-.38 2 10.19 10.19 0 0 0 .14 1.84 20.57 20.57 0 0 0 2.11 7.52 21.26 21.26 0 0 0 4.26 4.78l3.55 3.25a8 8 0 0 0 2.44 1.81 1.87 1.87 0 0 1 .55-1.34l-1.15 8a23.26 23.26 0 0 0-6.6-1c-3 0-6.07.51-7.4 2.57a2.85 2.85 0 0 0-.2.39c-4.16 4.94-13.7 20.94-8.09 59.79-.48 4.75-.77 7.76-.77 7.76v.84l.06.05 3.12 42.9-6 42.28h1.34v4.7h-1.51v7.55s21-1.34 24.16-6c2.65-3.9-10.54-2.37-15.1-1.73V713h.08v-1.59h1.59l6-28.69c6.21-10.74 3-37.58 3-37.58l7.55 4.53 6 31.54-4.4 46.79h1.34v3.27h-1.76v7.55s21-1.34 24.16-6c2.64-3.9-10.53-2.37-15.1-1.73l-.51-3h.92l6-42.28c3-11.45-1.08-45.07-1.62-49.37l7.49-49.45-.11-.14.11-.7 30.2 10.57s3 3 6.12-6c2.9-8.39 10.86-19.64 11.89-21.07l.11-.15s9.11-4.59 7.6-9.12z",
    transform: "translate(-137.5 -157.05)",
    fill: "url(#prefix__e)",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#fda57d",
    d: "M342.99 550.68v7.35h7.35v-10.29l-7.35 2.94zM370.93 565.39v8.82l7.35-1.47-1.47-8.82-5.88 1.47z"
  }), _react.default.createElement("path", {
    d: "M354.83 400.78s-17.56 13.15-8.9 64.62z",
    fill: "#4d8af0"
  }), _react.default.createElement("path", {
    d: "M354.83 400.78s-17.56 13.15-8.9 64.62zM377.63 569.88l-.74-4.41-5.88 1.47v2.94h6.62zM343.07 553.71h7.35v-4.42l-7.35 2.94v1.48z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    fill: "#fda57d",
    d: "M368.15 392.04l-1.47 10.29 13.23 7.36v-14.71l-11.76-2.94z"
  }), _react.default.createElement("path", {
    d: "M341.68 552.16l5.88-41.21-3.06-42.61 38.23 10.29s4.74 36.6 1.63 48.52l-5.88 41.17h-8.82l4.41-45.58-5.88-30.72-7.35-4.41s3.1 26.14-2.94 36.6l-5.88 27.94z",
    fill: "#eee"
  }), _react.default.createElement("path", {
    d: "M444.45 405.11c-1.47-4.41-10.21 1.55-10.21 1.55l-.72 1 3.47 6.45.11-.15s8.82-4.44 7.35-8.85z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M367.99 401.52s-11.76-3.1-14.7 1.47-8.79 66.17-8.79 66.17 17.48 14.7 38.23 10.29l7.31-48.5z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M417.98 428.64l-46.48-26a23.2 23.2 0 0 0-11-3c-2.94 0-5.92.5-7.2 2.5-2.94 4.57-8.82 66.17-8.82 66.17s17.48 14.7 38.23 10.29l7.35-48.52 29.44 10.32s2.94 2.94 6-5.8c2.82-8.17 10.57-19.12 11.57-20.52l-3.57-6.44z",
    fill: "#4d8af0"
  }), _react.default.createElement("path", {
    d: "M367.95 394.33a13.21 13.21 0 0 0 10.41 5.07 13.36 13.36 0 0 0 1.47-.08v-2.87l-11.76-2.94z",
    opacity: 0.05
  }), _react.default.createElement("circle", {
    cx: 378.44,
    cy: 384.69,
    r: 13.23,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M341.5 556.73v7.35s20.42-1.31 23.53-5.88-16.17-1.47-16.17-1.47zM369.21 571.52v7.35s20.42-1.31 23.53-5.88-16.17-1.47-16.17-1.47z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M370.05 390.76l5.17-7.4a12.64 12.64 0 0 1 2.62-3 4.28 4.28 0 0 1 3.77-.84 7.67 7.67 0 0 1 2.06 1.25c1.93 1.41 4.31 2.45 6.66 2s4.35-2.36 6.06-4.19c1.42-1.51 2.95-3.36 2.56-5.4a4.79 4.79 0 0 0-3.25-3.23 31 31 0 0 0-4.73-1c-3.77-.74-7.18-2.71-10.86-3.82a24.7 24.7 0 0 0-5.13-1 7.48 7.48 0 0 0-3.69.41 12.65 12.65 0 0 0-3.16 2.6 14.39 14.39 0 0 1-4.15 2.7c-2.28 1-4.82 1.37-6.89 2.73a4.06 4.06 0 0 0-1.39 1.38 5.32 5.32 0 0 0-.24 3.28 20 20 0 0 0 2.06 7.32 20.7 20.7 0 0 0 4.14 4.65l3.45 3.17a7.76 7.76 0 0 0 2.38 1.76c-.15-1.1 1.91-2.44 2.56-3.37z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M370.05 390.27l5.17-7.4a12.64 12.64 0 0 1 2.62-3 4.28 4.28 0 0 1 3.77-.84 7.67 7.67 0 0 1 2.06 1.25c1.93 1.41 4.31 2.45 6.66 2s4.35-2.36 6.06-4.19c1.42-1.51 2.95-3.36 2.56-5.4a4.79 4.79 0 0 0-3.25-3.29 31 31 0 0 0-4.73-1c-3.77-.74-7.18-2.71-10.86-3.82a24.7 24.7 0 0 0-5.13-1 7.48 7.48 0 0 0-3.69.41 12.65 12.65 0 0 0-3.16 2.6 14.39 14.39 0 0 1-4.15 2.7c-2.28 1-4.82 1.37-6.89 2.73a4.06 4.06 0 0 0-1.39 1.39 5.32 5.32 0 0 0-.24 3.28 20 20 0 0 0 2.06 7.32 20.7 20.7 0 0 0 4.14 4.65l3.45 3.17a7.76 7.76 0 0 0 2.38 1.76c-.15-1.05 1.91-2.39 2.56-3.32z",
    fill: "#333"
  }));
};

UndrawDevelopment.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawDevelopment;
exports.default = _default;