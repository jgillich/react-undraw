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

var UndrawModernWoman = function UndrawModernWoman(_props) {
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
    viewBox: "0 0 1004.92 901",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 152.96,
    y1: 771.64,
    x2: 152.96,
    y2: 156.39,
    gradientTransform: "matrix(-1 0 0 1 1031 0)",
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
    x1: 540.11,
    y1: 738.57,
    x2: 540.11,
    y2: 575.92,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 456.49,
    y1: 738.57,
    x2: 456.49,
    y2: 724.03,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 485.72,
    y1: 738.57,
    x2: 485.72,
    y2: 724.03,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 546.71,
    y1: 738.57,
    x2: 546.71,
    y2: 724.03,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 578.48,
    y1: 738.57,
    x2: 578.48,
    y2: 724.03,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__g",
    x1: 451.29,
    y1: 631.9,
    x2: 451.29,
    y2: 599.87,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__h",
    x1: 514.84,
    y1: 662.35,
    x2: 514.84,
    y2: 647.08,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__i",
    x1: 568.32,
    y1: 631.83,
    x2: 568.32,
    y2: 583.55,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__j",
    x1: 600.78,
    y1: 689.69,
    x2: 600.78,
    y2: 657.25,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__k",
    x1: 581.17,
    y1: 656.92,
    x2: 581.17,
    y2: 637.16,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__l",
    x1: 582.35,
    y1: 655.65,
    x2: 582.35,
    y2: 635.89,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__m",
    x1: 584.77,
    y1: 652.62,
    x2: 584.77,
    y2: 638.43,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__n",
    x1: 584.77,
    y1: 651.35,
    x2: 584.77,
    y2: 637.16,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__o",
    x1: 616.75,
    y1: 639.33,
    x2: 616.75,
    y2: 621.67,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__p",
    x1: 616.75,
    y1: 638.06,
    x2: 616.75,
    y2: 620.4,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__q",
    x1: 644.7,
    y1: 621.67,
    x2: 644.7,
    y2: 612.77,
    gradientTransform: "matrix(-1 0 0 1 835.92 .5)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__r",
    x1: 452.99,
    y1: 708.71,
    x2: 452.99,
    y2: 668.05,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__s",
    x1: 454.26,
    y1: 708.71,
    x2: 454.26,
    y2: 668.05,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M1.15 783.77c5.46 64 28.56 117 28.56 117l975 .22.2-901-318.99.94S560.72-13.44 432.37 88.1q-6 4.75-11.79 9.77a350.13 350.13 0 0 0-49 52 363 363 0 0 0-71.66 176.41c-6.19 50.26-21.88 114.14-60.07 167.07q-2 2.71-4 5.4c-26.34 34.57-62.75 64-113 81.05-47.54 16.15-77.93 42.33-96.57 73-24.54 40.18-28.8 88.06-25.13 130.97z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M833.82 171.89h171v481h-171zM635.82 652.88h-198v-375h198zM239.82 493.41v159.48h198v-503h-66.28a363 363 0 0 0-71.69 176.44c-6.18 50.26-21.85 114.17-60.03 167.08zM833.82 652.88h-198v-583h198z"
  }), _react.default.createElement("path", {
    d: "M1.23 783.89h1003.59v-131H26.27C1.8 693.1-2.45 740.98 1.23 783.89z",
    fill: "#fff",
    opacity: 0.1
  }), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#f55f44"
  }, _react.default.createElement("path", {
    d: "M533.08 376.34c4.44 2 9 4.29 11.87 8.22 4.82 6.56 3.61 15.93-.08 23.19s-9.48 13.22-13.92 20-7.56 15.33-5 23.07 9.7 12.51 16.09 17.37a149.21 149.21 0 0 1 22.88 21.61c5.75 6.7 11.14 16 7.16 23.86-3.25 6.44-11.14 8.6-17.77 11.47-12.39 5.37-22.87 15.68-26.92 28.54-4.12 13.09-1.54 27.75-6.72 40.46-1.31 3.23-3.22 6.37-6.19 8.21a18.63 18.63 0 0 1-7.17 2.23c-6.41.95-13 .91-19.29 2.28-13.2 2.85-24.35 11.51-34.31 20.63a281.8 281.8 0 0 0-27.39 28.87c-4.85-9.15-14.7-14.6-20.58-23.13-12.5-18.16-4.53-45.93-19.33-62.27-7-7.73-18.47-11.94-21.86-21.8-1.66-4.81-1-10.15.66-15a39.82 39.82 0 0 1 16.76-20.92c5.46-3.34 11.93-5.51 15.9-10.54 3.39-4.3 4.37-10 4.41-15.51.14-15.59-6.25-31.34-2.4-46.45 3.61-14.16 16.83-25.32 31.4-26.5 3.82-.31 7.7 0 11.46-.71 6.26-1.19 11.65-5.11 16.37-9.39 11.32-10.28 20.61-23.71 34.42-31 12.56-6.63 27.39-2.28 39.55 3.21z"
  }), _react.default.createElement("path", {
    d: "M532.92 376.84s-136.7 205.75-115.75 266M574.26 509.71s-38.29-27.81-105.42-25.48M455.24 510.3s-1.61-50.45-46.44-85.14M521.17 594.8s-51.39-41.54-86.49-40.17M425.54 578.5s-22.15-30.19-61.76-38",
    stroke: "#535461",
    strokeMiterlimit: 10,
    opacity: 0.6
  })), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    d: "M821.79 376.83c4.59-1.63 9.46-3.12 14.25-2.29 8 1.4 13.64 9 16 16.79s2.31 16.1 3.83 24.1 5.16 16.29 12.34 20.13 15.66 2.32 23.63 1.4a149.21 149.21 0 0 1 31.47-.29c8.79.85 19.1 3.82 21.68 12.26 2.11 6.9-2.08 13.92-4.88 20.57-5.23 12.43-5.65 27.14.34 39.23 6.09 12.3 18.1 21.1 23.16 33.85 1.28 3.24 2.09 6.83 1.22 10.2a18.63 18.63 0 0 1-3.63 6.58c-4 5.12-8.72 9.63-12.34 15-7.55 11.2-9.6 25.16-10.48 38.64a281.8 281.8 0 0 0 .22 39.79c-9.84-3.24-20.72-.35-30.86-2.44-21.59-4.45-35.07-30-57.06-31.56-10.4-.73-21.59 4.16-30.87-.6-4.52-2.32-7.73-6.65-9.88-11.26a39.82 39.82 0 0 1-2.39-26.7c1.63-6.19 4.8-12.24 4.18-18.61-.53-5.45-3.79-10.26-7.55-14.24-10.71-11.35-26.25-18.29-33.91-31.88-7.2-12.72-5.38-29.93 4.31-40.86 2.54-2.87 5.56-5.33 7.78-8.45 3.69-5.19 4.87-11.75 5.31-18.11 1.05-15.25-1.54-31.38 3.39-46.19 4.48-13.45 18.14-20.58 30.74-25.06z",
    fill: "#4db6ac"
  }), _react.default.createElement("path", {
    d: "M822.04 377.28s43.77 243.11 100.62 272.1M943.83 444.57s-46.88 6.44-93.72 54.59M858.35 527.38s-36.09-35.29-92.43-29.28M964.43 542.72s-65.84 5.59-90.22 30.88M884.11 597.14s-36.89-6.46-70.9 15.3",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    opacity: 0.6
  })), _react.default.createElement("path", {
    d: "M741 749.39c9.37-5.55 14.31-24.08 15.79-30.61l11.17-144.35s8.39-47.77 40.25-115.83c.38-40.52 1.88-168.64 5.51-182.43l21.5-26.17a49.44 49.44 0 0 0-3.52-5.33l-5.5 15.55-19.87-2.22 10.72-20.49a35.8 35.8 0 0 1-6.73-48.51 8.81 8.81 0 0 1 .37-11.18 45.82 45.82 0 0 1 11.76-9.77 41.86 41.86 0 0 1 61.06 57.09 9.14 9.14 0 0 0 4.17 2.67c7.52 2.11 13.5 7.43 17.4 11.83a7.24 7.24 0 0 1-1.52 10.91l-3.25 2.07a7.23 7.23 0 0 1-8.48-.52l-6.72-5.55a.53.53 0 0 0-.73.78 6.53 6.53 0 0 1-3.18 10.81h-.14l.14.07-.19.16c6 6 12.27 14.82 17.86 27.7 9 10.95 17.19 33.1 16.61 77.57q1 12.15 1.33 26l10.36 42.73S1007 579.6 987.19 599c0 0-12 2.13-28.8 6.58l47.79 63.34-.66.63 30.48 22.28s-5.61 14.24-9.5 16.4-5.18 11.22-5.18 11.22-14.68 29.78-25.47 28.06-3-13.81 0-26.76c2.35-10.07-6.53-25.37-10.59-31.67l-1.06 1s-56.74-42.62-78.44-66.47c-11.88 5.28-23.22 11.45-32.49 18.55 0 0-16.31-39.72-31.61-105.49l-.13.2c-13.4 20-35.95 55.08-36.86 66-1.29 15.54-6.47 72.08-14.24 87.19l-5.61 29.35h-.34l5.2 38.92s-14.17 5.8-18.41 4.49-11.69 4-11.69 4-31.66 10-37.88 1 7.82-11.66 19.3-18.43z",
    transform: "translate(-195.08 .5)",
    fill: "url(#prefix__a)",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 657.51,
    cy: 210.25,
    r: 40.06
  }), _react.default.createElement("path", {
    d: "M753.52 591.62l52 69-21.06 20.24s-73-54.81-82.07-72.89a7.26 7.26 0 0 1-.93-3.1c.03-13.66 52.06-13.25 52.06-13.25zM657.3 520.59s-43.38 61.91-44.6 76.81-6.19 69-13.63 83.42l-5.37 28.08h-26.84l10.74-138.76s9.5-54.1 47.08-128.43l47.49 26z",
    fill: "#252a62"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M662.05 451.84h-37.99V290.78h37.99z"
  }), _react.default.createElement("path", {
    d: "M628.4 445.02l-16.57 24.8s6.66-169.34 10.79-185l26.84-32.62 9.09 24-20.63 25.52s-12.8 38-10.74 75.16 1.22 68.14 1.22 68.14z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "#ffc533",
    d: "M628.39 240.6l-14.04 26.84 19 2.07 9.5-26.85-14.46-2.06z"
  }), _react.default.createElement("circle", {
    cx: 646.15,
    cy: 221.19,
    r: 34.28,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M646.15 269.09s-3.3-11.56-12.39-19.82l32.21-8.26 7.85 17.76z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M660.61 255.5s55.75-4.13 59.47 137.93l9.91 40.88s76.4 140.82 57.4 159.41c0 0-71.86 12.8-109 41.3 0 0-28.49-69.38-44.6-175.92 0 0-8.67-116 8.26-155.28L633.79 284z",
    fill: "#3ad29f"
  }), _react.default.createElement("path", {
    d: "M627.16 445.02l-15.33 24.8s5.42-169.34 9.55-185l26.84-32.62 9.09 24-20.65 25.6s-12.8 38-10.74 75.16 1.24 68.06 1.24 68.06z",
    fill: "#3ad29f"
  }), _react.default.createElement("path", {
    d: "M627.16 445.02l-15.33 24.8s5.42-169.34 9.55-185l26.84-32.62 9.09 24-20.65 25.6s-12.8 38-10.74 75.16 1.24 68.06 1.24 68.06z",
    opacity: 0.05
  }), _react.default.createElement("circle", {
    cx: 638.3,
    cy: 329.39,
    r: 1.65,
    fill: "#4d8af0"
  }), _react.default.createElement("circle", {
    cx: 638.3,
    cy: 391.33,
    r: 1.65,
    fill: "#4d8af0"
  }), _react.default.createElement("path", {
    d: "M801.84 658.94l32.21 23.56s-5.37 13.63-9.09 15.69-5 10.74-5 10.74-14 28.49-24.37 26.84-2.89-13.22 0-25.6-12-33-12-33zM593.07 706.6l5.28 39.54s-13.56 5.55-17.62 4.29-11.18 3.85-11.18 3.85-30.29 9.57-36.24 1 7.54-11.23 18.49-17.71 15.58-31.5 15.58-31.5z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M686 267.65l-42.95 37.16-1.23-.82 43.36-36.75.82.41z"
  }), _react.default.createElement("path", {
    fill: "#3ad29f",
    d: "M673.82 267.24l-24.16-4.55-21.06 28.08 12.18 7.36 33.04-30.89z"
  }), _react.default.createElement("path", {
    d: "M618.72 203.32l15.66 16.6v10.17a51.09 51.09 0 0 0 3.82 19.41l10.52 25.66a6.92 6.92 0 0 0 8.95 3.81l8.87-3.51a6.92 6.92 0 0 0 3.78-9.21l-2.49-5.75a.51.51 0 0 1 .89-.5l5.06 7.2a6.92 6.92 0 0 0 7.34 2.73l4.89-1.22a6.25 6.25 0 0 0 3-10.34.51.51 0 0 1 .7-.74l6.43 5.31a6.92 6.92 0 0 0 8.11.5l3.11-2a6.92 6.92 0 0 0 1.45-10.44c-3.72-4.21-9.45-9.3-16.64-11.32-7.55-2.12-10.25-15.44-11.17-26.46a37.76 37.76 0 0 0-24.26-32.41c-11.25-4.17-25.07-3.83-38.24 11a8.46 8.46 0 0 0 .22 11.51z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M618.72 202.11l15.66 16.6v10.17a51.09 51.09 0 0 0 3.82 19.38l10.52 25.66a6.92 6.92 0 0 0 8.95 3.81l8.87-3.51a6.92 6.92 0 0 0 3.78-9.21l-2.49-5.67a.51.51 0 0 1 .89-.5l5.06 7.2a6.92 6.92 0 0 0 7.34 2.73l4.89-1.22a6.25 6.25 0 0 0 3-10.34.51.51 0 0 1 .7-.74l6.43 5.31a6.92 6.92 0 0 0 8.11.5l3.11-2a6.9 6.9 0 0 0 1.5-10.38c-3.72-4.22-9.47-9.34-16.69-11.37-7.55-2.13-10.25-15.53-11.15-26.57a37.76 37.76 0 0 0-25-32.57c-11.08-3.86-24.54-3.21-37.39 11.23a8.5 8.5 0 0 0 .09 11.49z",
    fill: "#ffc533"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M633.29 451.83l.13 2.08-8.39-1.04.44-1.04h7.82z"
  }), _react.default.createElement("path", {
    d: "M633.56 453.9h-3.1s8.61 79.67 17 81.13l.65-1s-13.73-64.85-14.55-80.13z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M618.53 191.92a44.11 44.11 0 0 1 11.24-9.35 40.05 40.05 0 0 1 58.43 54.63c-1.49 1.77-36.89-10.22-36.89-10.22a108.67 108.67 0 0 1-32.59-23.66c-.12-.13-.24-.27-.35-.41a8.44 8.44 0 0 1 .16-10.99z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M618.53 190.71a44.11 44.11 0 0 1 11.24-9.35 40.05 40.05 0 0 1 58.43 54.63c-1.49 1.77-36.89-10.22-36.89-10.22a108.67 108.67 0 0 1-32.59-23.66c-.12-.13-.24-.27-.35-.41a8.44 8.44 0 0 1 .16-10.99z",
    fill: "#252a62"
  }), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    d: "M386.3 620.2c.23 16.43 14.1 29.43 30.53 29.43h2.29a7.72 7.72 0 0 1 5.41 2.19 7.54 7.54 0 0 1 2.2 3.84 7.19 7.19 0 0 1 .23 1.82v29a29.07 29.07 0 0 0 4.6 15.73 41.57 41.57 0 0 1 6.84 22.39 14 14 0 0 0 14.24 14c7.69-.14 13.71-6.75 13.71-14.43v-7.26l3.81.44v7.27a14 14 0 0 0 14.24 14c7.69-.14 13.71-6.75 13.71-14.43v-3.67c3.81 1.59 25.41 1.59 31.41.05l1.63-.13v4.21a14 14 0 0 0 14.24 14c7.69-.14 13.71-6.75 13.71-14.43v-6l1.27-.11v6.61a14.17 14.17 0 0 0 .43 3.47 14 14 0 0 0 13.81 10.51 14.22 14.22 0 0 0 13.58-12.48 16.51 16.51 0 0 0 .13-2v-30.44a46.51 46.51 0 0 0-9.9-28.78 8.62 8.62 0 0 1-.24-10.18c7.12-10.42 17.64-28 17.29-40.47a13.67 13.67 0 0 0-3.33-9.23l-.42-.44c-10.24-10.68-28.27-2.26-26.72 12.48a41.35 41.35 0 0 1-1.08 14.74 45.11 45.11 0 0 1-2.86 7.9 13.4 13.4 0 0 1-13.71 7.62 47.38 47.38 0 0 0-5.73-.34h-58.75a16.51 16.51 0 0 1-15.63-11.19 16 16 0 0 1-.89-5.32v-45.75a8.9 8.9 0 0 0-9.17-8.89 8.65 8.65 0 0 0-6.14 2.86 9.56 9.56 0 0 0-2.48 6.41 4.71 4.71 0 0 1-4.71 4.71h-27.69a29.85 29.85 0 0 0-29.86 30.29z",
    transform: "translate(-195.08 .5)",
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    d: "M560.81 728.06a14 14 0 0 0 13.81 10.51 14.22 14.22 0 0 0 13.58-12.48c-8.46-2.28-20.2-3.86-27.39 1.97z",
    transform: "translate(-195.08 .5)",
    fill: "url(#prefix__c)"
  }), _react.default.createElement("path", {
    d: "M531.58 728.06a14 14 0 0 0 13.81 10.51A14.22 14.22 0 0 0 559 726.09c-8.48-2.28-20.21-3.86-27.42 1.97z",
    transform: "translate(-195.08 .5)",
    fill: "url(#prefix__d)"
  }), _react.default.createElement("path", {
    d: "M470.59 728.06a14 14 0 0 0 13.81 10.51 14.22 14.22 0 0 0 13.6-12.48c-8.47-2.28-20.2-3.86-27.41 1.97z",
    transform: "translate(-195.08 .5)",
    fill: "url(#prefix__e)"
  }), _react.default.createElement("path", {
    d: "M438.83 728.06a14 14 0 0 0 13.81 10.51 14.22 14.22 0 0 0 13.58-12.48c-8.46-2.28-20.22-3.86-27.39 1.97z",
    transform: "translate(-195.08 .5)",
    fill: "url(#prefix__f)"
  }), _react.default.createElement("path", {
    d: "M563.94 631.9c9.87-4 21.92-11.22 31.54-17.52a13.67 13.67 0 0 0-3.33-9.23l-.42-.44c-10.25-10.71-28.28-2.29-26.73 12.45a41.35 41.35 0 0 1-1.06 14.74z",
    transform: "translate(-195.08 .5)",
    fill: "url(#prefix__g)"
  }), _react.default.createElement("path", {
    d: "M552 647.17s-27.19 34.22-71.66-.09",
    transform: "translate(-195.08 .5)",
    fill: "url(#prefix__h)"
  }), _react.default.createElement("path", {
    d: "M466.35 583.55s-16.52 21.6 0 48.29",
    transform: "translate(-195.08 .5)",
    fill: "url(#prefix__i)"
  }), _react.default.createElement("path", {
    d: "M427 657.25s14.55 18.08.18 32.44",
    transform: "translate(-195.08 .5)",
    fill: "url(#prefix__j)"
  }), _react.default.createElement("path", {
    d: "M425.69 653.44c1.08 1 .71 2 1 3.48L474 644.54c-2.54-2-5.69-4.28-6.73-7.38-5.7 4.4-16.89 11.77-41.58 16.28z",
    transform: "translate(-195.08 .5)",
    fill: "url(#prefix__k)",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M424.53 651.81a7.54 7.54 0 0 1 2.2 3.84l46-12a16.41 16.41 0 0 1-5.54-7.75c-5.62 4.38-17.97 11.4-42.66 15.91z",
    transform: "translate(-195.08 .5)",
    fill: "url(#prefix__l)"
  }), _react.default.createElement("path", {
    d: "M465.51 638.43S451.1 649.26 427 652.62",
    transform: "translate(-195.08 .5)",
    opacity: 0.1,
    fill: "url(#prefix__m)"
  }), _react.default.createElement("path", {
    d: "M465.51 637.16S451.1 648 427 651.35",
    transform: "translate(-195.08 .5)",
    fill: "url(#prefix__n)"
  }), _react.default.createElement("path", {
    d: "M429.5 638.19s-24.14 7.62-30.5-16.52z",
    transform: "translate(-195.08 .5)",
    fill: "url(#prefix__o)",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M429.5 636.92s-24.14 7.62-30.5-16.52z",
    transform: "translate(-195.08 .5)",
    fill: "url(#prefix__p)"
  }), _react.default.createElement("ellipse", {
    cx: 191.21,
    cy: 617.72,
    rx: 2.54,
    ry: 4.45,
    fill: "url(#prefix__q)"
  }), _react.default.createElement("path", {
    d: "M578.8 708.71L573.72 668s15.25 24.14 5.08 40.66",
    transform: "translate(-195.08 .5)",
    opacity: 0.1,
    fill: "url(#prefix__r)"
  }), _react.default.createElement("path", {
    d: "M572.45 668s15.25 24.14 5.08 40.66z",
    transform: "translate(-195.08 .5)",
    fill: "url(#prefix__s)"
  })), _react.default.createElement("path", {
    d: "M195.92 622.39c.22 15.68 13.45 28.08 29.13 28.08h2.18a7.37 7.37 0 0 1 5.17 2.09 7.19 7.19 0 0 1 2.1 3.66 6.86 6.86 0 0 1 .22 1.73v27.68a27.74 27.74 0 0 0 4.39 15 39.66 39.66 0 0 1 6.52 21.36 13.35 13.35 0 0 0 13.59 13.34c7.34-.13 13.08-6.44 13.08-13.77v-6.92l3.64.42V722a13.35 13.35 0 0 0 13.59 13.34c7.34-.13 13.08-6.44 13.08-13.77v-3.5c3.64 1.52 24.25 1.52 30 0l1.55-.12v4a13.35 13.35 0 0 0 13.59 13.34c7.34-.13 13.08-6.44 13.08-13.77v-5.76l1.21-.11v6.3a13.52 13.52 0 0 0 .41 3.31 13.36 13.36 0 0 0 13.18 10 13.57 13.57 0 0 0 13-11.91 15.75 15.75 0 0 0 .12-1.87v-29a44.38 44.38 0 0 0-9.46-27.44 8.22 8.22 0 0 1-.23-9.71c6.79-9.94 16.83-26.72 16.5-38.62a13 13 0 0 0-3.18-8.8l-.4-.42c-9.77-10.23-27-2.18-25.49 11.88a39.46 39.46 0 0 1-1 14.06 43 43 0 0 1-2.73 7.54 12.79 12.79 0 0 1-13.08 7.27 45.21 45.21 0 0 0-5.47-.33H288.1a15.76 15.76 0 0 1-14.91-10.68 15.3 15.3 0 0 1-.85-5.08v-43.51a8.49 8.49 0 0 0-8.75-8.49 8.26 8.26 0 0 0-5.86 2.73 9.12 9.12 0 0 0-2.36 6.11 4.5 4.5 0 0 1-4.5 4.5h-26.43a28.48 28.48 0 0 0-28.52 28.9z",
    fill: "#f3ad55"
  }), _react.default.createElement("path", {
    d: "M362.47 725.32a13.36 13.36 0 0 0 13.18 10 13.57 13.57 0 0 0 13-11.91c-8.12-2.15-19.31-3.66-26.18 1.91zM334.58 725.32a13.36 13.36 0 0 0 13.18 10 13.57 13.57 0 0 0 13-11.91c-8.11-2.15-19.3-3.66-26.18 1.91zM276.38 725.32a13.36 13.36 0 0 0 13.18 10 13.57 13.57 0 0 0 13-11.91c-8.11-2.15-19.3-3.66-26.18 1.91zM246.07 725.32a13.36 13.36 0 0 0 13.18 10 13.57 13.57 0 0 0 13-11.91c-8.11-2.15-19.33-3.66-26.18 1.91z",
    fill: "#f38143"
  }), _react.default.createElement("path", {
    d: "M365.45 633.56c9.42-3.78 20.92-10.71 30.09-16.72a13 13 0 0 0-3.18-8.8l-.4-.42c-9.77-10.23-27-2.18-25.49 11.88a39.46 39.46 0 0 1-1.02 14.06zM354.05 648.13s-25.94 32.66-68.38-.08M272.33 587.43s-15.76 20.61 0 46.07M234.75 657.75s13.88 17.25.17 31",
    fill: "#f8dea5"
  }), _react.default.createElement("path", {
    d: "M233.54 654.11c1 1 .68 1.9 1 3.32l45.08-11.81c-2.42-1.87-5.43-4.09-6.43-7-5.41 4.15-16.1 11.19-39.65 15.49z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M232.43 652.56a7.19 7.19 0 0 1 2.1 3.66l43.94-11.46a15.65 15.65 0 0 1-5.29-7.4c-5.4 4.2-17.19 10.89-40.75 15.2z",
    fill: "#383f4d"
  }), _react.default.createElement("path", {
    d: "M271.53 639.79s-13.75 10.34-36.78 13.54",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M271.53 638.58s-13.75 10.34-36.78 13.54",
    fill: "#f3ad55"
  }), _react.default.createElement("path", {
    d: "M230.17 643.56s-23 7.27-29.1-15.76z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M230.17 642.35s-23 7.27-29.1-15.76z",
    fill: "#f3ad55"
  }), _react.default.createElement("ellipse", {
    cx: 195.95,
    cy: 619.56,
    rx: 2.42,
    ry: 4.24,
    fill: "#383f4d"
  }), _react.default.createElement("path", {
    d: "M379.64 706.85l-4.85-38.8s14.55 23 4.85 38.8",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M373.58 668.05s14.55 23 4.85 38.8z",
    fill: "#f3ad55"
  }), _react.default.createElement("path", {
    d: "M272.33 646.56s71.22 40.23 124.29 19.45c20.53-8 35.31-26.14 40.19-47.64a106.81 106.81 0 0 1 14.2-33.87c19.23-30 53-47.33 88.63-46.82 36.91.52 106.19-4.49 126.51-47.36",
    fill: "none",
    stroke: "#383f4d",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M272.33 645.35s71.22 40.23 124.29 19.45c20.53-8 35.31-26.14 40.19-47.64a106.81 106.81 0 0 1 14.2-33.82c19.23-30 53-47.33 88.63-46.82 36.91.52 106.19-4.49 126.51-47.36",
    fill: "none",
    stroke: "#383f4d",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M689.1 459.06s2.93 43.63-25.75 52.82a6.13 6.13 0 0 1-8-5.45c-.48-7.42 1.89-22.7 15.56-53.56z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M687.45 458.23s2.93 43.63-25.75 52.82a6.13 6.13 0 0 1-8-5.45c-.48-7.42 1.89-22.7 15.56-53.56z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M682.08 284.37s41.3-8.26 36.34 96.63c0 0-9.91 76.81-27.26 81.77l-26-6.61 10.32-71.86-10.32-37.17s-8.24-56.15 16.92-62.76z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M678.36 284.37s41.3-8.26 36.34 96.63c0 0-9.91 76.81-27.26 81.77l-26-6.61 10.32-71.86-10.32-37.17s-8.27-56.15 16.92-62.76z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M680.43 284.37s41.3-8.26 36.34 96.63c0 0-9.91 76.81-27.26 81.77l-26-6.61 10.32-71.86-10.32-37.17s-8.27-56.15 16.92-62.76z",
    fill: "#3ad29f"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M687.53 464.91v-2.64l-20.44-5.19-.95 2.23 21.39 5.6z"
  }));
};

UndrawModernWoman.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawModernWoman;
exports.default = _default;