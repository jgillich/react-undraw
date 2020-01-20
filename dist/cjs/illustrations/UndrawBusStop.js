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

var UndrawBusStop = function UndrawBusStop(_props) {
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
    viewBox: "0 0 894.09 426",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 255.91,
    y1: 453.73,
    x2: 255.91,
    y2: 237,
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
    x1: 110.93,
    y1: 303.6,
    x2: 110.93,
    y2: 63,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 352.87,
    y1: 463.34,
    x2: 352.87,
    y2: 282.02,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 192.59,
    y1: 302.38,
    x2: 192.59,
    y2: 100.44,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 489.54,
    y1: 78,
    x2: 489.54,
    y2: 61,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 284.54,
    y1: 303,
    x2: 284.54,
    y2: 75.62,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__g",
    x1: 695.54,
    y1: 303,
    x2: 695.54,
    y2: 75.62,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__h",
    x1: 488.09,
    y1: 233,
    x2: 488.09,
    y2: 226,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__i",
    x1: 488.09,
    y1: 243,
    x2: 488.09,
    y2: 236,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__j",
    x1: 488.09,
    y1: 253,
    x2: 488.09,
    y2: 246,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__k",
    x1: 488.09,
    y1: 262,
    x2: 488.09,
    y2: 255,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__l",
    x1: 641.04,
    y1: 460,
    x2: 641.04,
    y2: 452,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__m",
    x1: 488.09,
    y1: 273,
    x2: 488.09,
    y2: 259,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__n",
    x1: 555.09,
    y1: 302,
    x2: 555.09,
    y2: 271.6,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__o",
    x1: 422.09,
    y1: 302,
    x2: 422.09,
    y2: 271.6,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__p",
    x1: 324.59,
    y1: 206,
    x2: 324.59,
    y2: 148,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__q",
    x1: 324.59,
    y1: 302,
    x2: 324.59,
    y2: 204.53,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__r",
    x1: 165.59,
    y1: 358,
    x2: 165.59,
    y2: 353.79,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__s",
    x1: 269.59,
    y1: 341,
    x2: 269.59,
    y2: 336.79,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__t",
    x1: 314.59,
    y1: 358,
    x2: 314.59,
    y2: 353.79,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__u",
    x1: 344.59,
    y1: 406,
    x2: 344.59,
    y2: 401.79,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__v",
    x1: 113.09,
    y1: 415,
    x2: 113.09,
    y2: 410.79,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__w",
    x1: 136.59,
    y1: 426,
    x2: 136.59,
    y2: 421.79,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__x",
    x1: 328.09,
    y1: 416,
    x2: 328.09,
    y2: 411.79,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__y",
    x1: 472.09,
    y1: 388,
    x2: 472.09,
    y2: 383.79,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__z",
    x1: 543.59,
    y1: 365,
    x2: 543.59,
    y2: 360.79,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__A",
    x1: 664.59,
    y1: 406,
    x2: 664.59,
    y2: 401.79,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__B",
    x1: 644.09,
    y1: 422,
    x2: 644.09,
    y2: 417.79,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__C",
    x1: 253.97,
    y1: 119.91,
    x2: 253.97,
    y2: 106.53,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__D",
    x1: 239.23,
    y1: 107,
    x2: 239.23,
    y2: 102.21,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__E",
    x1: 252.71,
    y1: 142.41,
    x2: 252.71,
    y2: 117.66,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__F",
    x1: 222.98,
    y1: 248.86,
    x2: 222.98,
    y2: 67.6,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__G",
    x1: 253.09,
    y1: 122,
    x2: 253.09,
    y2: 115.22,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__H",
    x1: 375.66,
    y1: 541,
    x2: 375.66,
    y2: 473,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__I",
    x1: 536.83,
    y1: 356.91,
    x2: 536.83,
    y2: 343.53,
    gradientTransform: "matrix(-1 0 0 1 1371.04 -237)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__J",
    x1: 522.09,
    y1: 344,
    x2: 522.09,
    y2: 339.21,
    gradientTransform: "matrix(-1 0 0 1 1371.04 -237)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__K",
    x1: 535.58,
    y1: 379.41,
    x2: 535.58,
    y2: 354.66,
    gradientTransform: "matrix(-1 0 0 1 1371.04 -237)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__L",
    x1: 505.85,
    y1: 485.86,
    x2: 505.85,
    y2: 304.6,
    gradientTransform: "matrix(-1 0 0 1 1371.04 -237)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__M",
    x1: 535.96,
    y1: 359,
    x2: 535.96,
    y2: 352.22,
    gradientTransform: "matrix(-1 0 0 1 1371.04 -237)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__N",
    x1: 505.57,
    y1: 541,
    x2: 505.57,
    y2: 473,
    gradientTransform: "matrix(-1 0 0 1 1524 0)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__O",
    x1: -166.62,
    y1: 539.47,
    x2: -166.62,
    y2: 424.51,
    gradientTransform: "matrix(-1 0 0 1 443.33 0)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__P",
    x1: 1733.1,
    y1: 461.39,
    x2: 1817.46,
    y2: 461.39,
    gradientTransform: "matrix(-1 0 0 1 2570 0)",
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M339.54 348.82a46.54 46.54 0 0 0-9.61-69.61 27.52 27.52 0 0 0 4.4-15c0-15-11.91-27.22-26.62-27.22a26.71 26.71 0 0 0-25.54 19.6 39.46 39.46 0 0 0-34-19.6c-21.91 0-39.67 18.16-39.67 40.57a41.27 41.27 0 0 0 2.43 14c-.8-.06-1.61-.12-2.43-.12-17.5.01-31.8 14.56-31.8 32.56a32.49 32.49 0 0 0 .17 3.29A40.46 40.46 0 0 0 153 364.45c0 22.33 17.7 40.44 39.53 40.44a38.7 38.7 0 0 0 6.85-.62c-.12 1.35-.19 2.71-.19 4.09 0 25.05 19.86 45.37 44.36 45.37a43.5 43.5 0 0 0 25.27-8.08 32.55 32.55 0 0 0 21.45 8.08c18.3 0 33.14-15.18 33.14-33.9 0-.81-.06-1.61-.12-2.4h.12c19.61 0 35.5-16.25 35.5-36.3a36.38 36.38 0 0 0-19.37-32.31z",
    transform: "translate(-152.96 -237)",
    fill: "url(#prefix__a)",
    "data-name": "<Group>"
  }), _react.default.createElement("path", {
    "data-name": "<Path>",
    d: "M181.45 111.61a43.7 43.7 0 0 0-9-65.34 25.84 25.84 0 0 0 4.13-14.07c0-14.11-11.18-25.55-25-25.55a25.08 25.08 0 0 0-24 18.39A37.06 37.06 0 0 0 95.7 6.65c-20.56 0-37.23 17-37.23 38.08a38.9 38.9 0 0 0 2.28 13.15c-.76-.06-1.51-.12-2.28-.12-16.51 0-29.89 13.68-29.89 30.56 0 1 .06 2.07.16 3.09a38 38 0 0 0-22.45 34.87c0 21 16.62 38 37.11 38a36.79 36.79 0 0 0 6.43-.57c-.11 1.26-.18 2.54-.18 3.83 0 23.52 18.65 42.59 41.64 42.59a40.8 40.8 0 0 0 23.75-7.64 30.53 30.53 0 0 0 20.13 7.59c17.19 0 31.11-14.24 31.11-31.82 0-.76-.06-1.51-.11-2.25h.11c18.4 0 33.32-15.26 33.32-34.07a34.16 34.16 0 0 0-18.15-30.33z",
    fill: "#00897b"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M106.09 63h9.67v240.6h-9.67z"
  }), _react.default.createElement("path", {
    fill: "#795548",
    d: "M108.84 66.38h4.87V303.6h-4.87z"
  }), _react.default.createElement("path", {
    fill: "#795548",
    d: "M108.398 136.275l39.93-43.122 3.574 3.31-39.931 43.12zM67.329 146.224l2.903-3.91 41.402 30.747-2.904 3.91z"
  }), _react.default.createElement("path", {
    d: "M278.81 375.57a37.54 37.54 0 0 1-10.19-25.66 38.11 38.11 0 0 1 18.7-32.58 22.09 22.09 0 0 1-3.9-12.53c0-12.58 10.58-22.8 23.58-22.8a23.47 23.47 0 0 1 22.62 16.4 35.37 35.37 0 0 1 30.07-16.4c19.4 0 35.13 15.2 35.13 33.94a32.86 32.86 0 0 1-2.15 11.72c.71-.05 1.42-.1 2.15-.1 15.57 0 28.19 12.19 28.19 27.24 0 .93-.05 1.84-.14 2.75a33.82 33.82 0 0 1 21.13 31.1c0 18.68-15.67 33.83-35 33.83a36.61 36.61 0 0 1-6-.48c.1 1.13.17 2.27.17 3.42 0 21-17.59 38-39.29 38a40.05 40.05 0 0 1-22.38-6.76 29.8 29.8 0 0 1-19 6.76c-16.22 0-29.36-12.7-29.36-28.36 0-.68.06-1.34.11-2h-.11c-17.36 0-31.43-13.59-31.43-30.37a30.26 30.26 0 0 1 17.1-27.12z",
    transform: "translate(-152.96 -237)",
    fill: "url(#prefix__c)",
    "data-name": "<Group>"
  }), _react.default.createElement("path", {
    "data-name": "<Path>",
    d: "M129.04 138.45a35.93 35.93 0 0 1-9.75-24.57 36.44 36.44 0 0 1 17.9-31.17 21.17 21.17 0 0 1-3.74-12c0-12 10.1-21.8 22.57-21.8a22.48 22.48 0 0 1 21.65 15.69 33.85 33.85 0 0 1 28.78-15.69c18.57 0 33.63 14.54 33.63 32.48a31.48 31.48 0 0 1-2.04 11.22c.68-.05 1.36-.1 2.06-.1 14.9 0 27 11.67 27 26.07a25.64 25.64 0 0 1-.14 2.64A32.38 32.38 0 0 1 287.18 151c0 17.89-15 32.38-33.52 32.38a34.65 34.65 0 0 1-5.8-.49c.1 1.08.16 2.17.16 3.27 0 20.07-16.83 36.34-37.6 36.34a38.34 38.34 0 0 1-21.38-6.5 28.54 28.54 0 0 1-18.18 6.48c-15.52 0-28.1-12.16-28.1-27.15 0-.65.06-1.29.1-1.92h-.1c-16.61 0-30.08-13-30.08-29.07a29 29 0 0 1 16.36-25.89z",
    fill: "#009688"
  }), _react.default.createElement("path", {
    "data-name": "<Path>",
    fill: "#795548",
    d: "M192.77 100.44v201.94"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M187.09 100.44h11v201.94h-11z"
  }), _react.default.createElement("path", {
    fill: "#795548",
    d: "M189.73 100.44h6.08v201.94h-6.08z"
  }), _react.default.createElement("path", {
    "data-name": "<Path>",
    fill: "#795548",
    d: "M193.39 160.92l-36.06-36.78"
  }), _react.default.createElement("path", {
    fill: "#795548",
    d: "M155.157 126.275l4.341-4.256 36.06 36.784-4.343 4.256z"
  }), _react.default.createElement("path", {
    "data-name": "<Path>",
    fill: "#795548",
    d: "M193.39 192.53l37.38-26.22"
  }), _react.default.createElement("path", {
    fill: "#795548",
    d: "M191.648 190.041l37.383-26.234 3.492 4.977-37.383 26.234z"
  }), _react.default.createElement("path", {
    fill: "#b0bec5",
    d: "M35.24 301.17h858.85v3.65H35.24z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M265.04 61h449v17h-449z",
    "data-name": "<Rectangle>"
  }), _react.default.createElement("path", {
    "data-name": "<Rectangle>",
    fill: "#00838f",
    d: "M269.17 63.26h441.92v12.37H269.17z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M276.04 75.62h17V303h-17z",
    "data-name": "<Rectangle>"
  }), _react.default.createElement("path", {
    "data-name": "<Rectangle>",
    fill: "#00838f",
    d: "M279.92 75.62h11.29v224.72h-11.29z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__g)",
    d: "M687.04 75.62h17V303h-17z",
    "data-name": "<Rectangle>"
  }), _react.default.createElement("path", {
    "data-name": "<Rectangle>",
    fill: "#00838f",
    d: "M690.39 75.62h11.29v224.72h-11.29z"
  }), _react.default.createElement("path", {
    fill: "#00bcd4",
    d: "M418.44 219.66h6.08v43.79h-6.08z"
  }), _react.default.createElement("path", {
    opacity: 0.3,
    d: "M418.44 219.66h6.08v43.79h-6.08z"
  }), _react.default.createElement("path", {
    fill: "#00bcd4",
    d: "M552.25 219.66h6.08v43.79h-6.08z"
  }), _react.default.createElement("path", {
    opacity: 0.3,
    d: "M552.25 219.66h6.08v43.79h-6.08z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__h)",
    d: "M407.09 226h162v7h-162z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__i)",
    d: "M407.09 236h162v7h-162z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__j)",
    d: "M407.09 246h162v7h-162z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__k)",
    d: "M407.09 255h162v7h-162z"
  }), _react.default.createElement("path", {
    fill: "#00bcd4",
    d: "M408 226.96h160.21v4.87H408zM408 246.42h160.21v4.87H408zM408 236.69h160.21v4.87H408z"
  }), _react.default.createElement("path", {
    d: "M722 460c-.47-4.51-3.3-8-6.69-8H566.74c-3.4 0-6.22 3.49-6.7 8z",
    transform: "translate(-152.96 -237)",
    fill: "url(#prefix__l)"
  }), _react.default.createElement("path", {
    d: "M568.13 222.09a6.73 6.73 0 0 0-6.62-5.73H414.68a6.72 6.72 0 0 0-6.61 5.73zM408.04 256.16v3a6.72 6.72 0 0 0 6.69 6.7h146.78a6.72 6.72 0 0 0 6.69-6.7v-3z",
    fill: "#00bcd4"
  }), _react.default.createElement("path", {
    "data-name": "<Rectangle>",
    fill: "#00bcd4",
    d: "M399.13 259.77h177.95v11.83H399.13z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__m)",
    d: "M398.09 259h180v14h-180z",
    "data-name": "<Rectangle>"
  }), _react.default.createElement("path", {
    "data-name": "<Rectangle>",
    opacity: 0.2,
    d: "M399.13 259.77h177.95v11.83H399.13z"
  }), _react.default.createElement("path", {
    "data-name": "<Rectangle>",
    fill: "#00bcd4",
    d: "M415.26 271.6h13.44v29.57h-13.44zM548.85 271.6h13.44v29.57h-13.44z"
  }), _react.default.createElement("path", {
    "data-name": "<Rectangle>",
    opacity: 0.1,
    d: "M415.26 271.6h13.44v29.57h-13.44z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__n)",
    d: "M547.09 271.6h16V302h-16z",
    "data-name": "<Rectangle>"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__o)",
    d: "M414.09 271.6h16V302h-16z",
    "data-name": "<Rectangle>"
  }), _react.default.createElement("path", {
    "data-name": "<Rectangle>",
    opacity: 0.1,
    d: "M548.85 271.6h13.44v29.57h-13.44z"
  }), _react.default.createElement("g", {
    "data-name": "<Group>"
  }, _react.default.createElement("rect", {
    x: 302.09,
    y: 148,
    width: 45,
    height: 58,
    rx: 6.42,
    ry: 6.42,
    fill: "url(#prefix__p)",
    "data-name": "<Rectangle>"
  }), _react.default.createElement("rect", {
    "data-name": "<Rectangle>",
    x: 303.68,
    y: 149.2,
    width: 41.99,
    height: 55.33,
    rx: 6.42,
    ry: 6.42,
    fill: primaryColor
  }), _react.default.createElement("rect", {
    "data-name": "<Rectangle>",
    x: 308.73,
    y: 158.57,
    width: 31.9,
    height: 33.7,
    rx: 5.42,
    ry: 5.42,
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__q)",
    d: "M321.09 204.53h7V302h-7z",
    "data-name": "<Rectangle>"
  }), _react.default.createElement("path", {
    "data-name": "<Rectangle>",
    fill: "#00838f",
    d: "M322.43 204.53h4.69v96.6h-4.69z"
  }), _react.default.createElement("path", {
    "data-name": "<Path>",
    d: "M311.38 178.94v-3.51h1.22l.17-4.85s-.13-1.23 1.73-1.23h20.81s1.06-.38 1.16.67l.46.3v5.11h1.21v3.51a1.27 1.27 0 0 1-.88 1.28h-1.55v-2.37a5.85 5.85 0 0 0-6.35.71v2.95h-9.44v-3.66a3.73 3.73 0 0 0-4.86 0v3.66h-2.43a7.33 7.33 0 0 1-1.25-2.57z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    "data-name": "<Path>",
    fill: "#f3f9fe",
    d: "M313.82 176.65V173h1.21v-1.22h1.22v4.87h-2.43zM317.47 171.78h4.87v4.87h-4.87zM324.77 171.78h4.87v4.87h-4.87z"
  }), _react.default.createElement("path", {
    "data-name": "<Path>",
    fill: "#f3f9fe",
    d: "M329.63 171.78h4.87v4.87h-4.87z"
  }), _react.default.createElement("circle", {
    "data-name": "<Path>",
    cx: 317.8,
    cy: 179.53,
    r: 1.03,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    "data-name": "<Path>",
    cx: 332.94,
    cy: 179.53,
    r: 1.03,
    fill: primaryColor
  })), _react.default.createElement("path", {
    fill: "url(#prefix__r)",
    d: "M109.09 353.79h113V358h-113z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__s)",
    d: "M233.09 336.79h73V341h-73z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__t)",
    d: "M294.09 353.79h41V358h-41z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__u)",
    d: "M336.09 401.79h17V406h-17z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__v)",
    d: "M101.09 410.79h24V415h-24z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__w)",
    d: "M121.09 421.79h31V426h-31z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__x)",
    d: "M315.09 411.79h26V416h-26z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__y)",
    d: "M426.09 383.79h92V388h-92z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__z)",
    d: "M528.09 360.79h31V365h-31z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__A)",
    d: "M649.09 401.79h31V406h-31z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__B)",
    d: "M617.09 417.79h54V422h-54z"
  }), _react.default.createElement("path", {
    fill: "#b0bec5",
    d: "M110.66 354.69h110.7v2.43h-110.7zM235.96 337.66h68.12v2.43h-68.12zM298 354.69h34.06v2.43H298zM428.17 385.11h88.8v2.43h-88.8zM530.35 361.99h26.76v2.43h-26.76zM103.36 411.87h20.68v2.43h-20.68zM124.04 422.82h25.55v2.43h-25.55zM317.47 411.87h20.68v2.43h-20.68zM338.15 402.14h13.38v2.43h-13.38zM620.38 417.95h45.01v2.43h-45.01zM652.01 402.14h24.33v2.43h-24.33z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__C)",
    d: "M251.09 106.53h5.76v13.38h-5.76z"
  }), _react.default.createElement("path", {
    fill: "#4dd0e1",
    d: "M251.77 106.53h3.65v13.38h-3.65z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__D)",
    d: "M221.36 102.21h35.73V107h-35.73z"
  }), _react.default.createElement("path", {
    fill: "#4dd0e1",
    d: "M221.36 102.88h34.06v3.65h-34.06z"
  }), _react.default.createElement("circle", {
    cx: 252.71,
    cy: 130.04,
    r: 12.37,
    fill: "url(#prefix__E)",
    "data-name": "<Group>"
  }), _react.default.createElement("circle", {
    "data-name": "<Path>",
    cx: 252.71,
    cy: 128.04,
    r: 11.4,
    fill: "#ffeb3b"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__F)",
    d: "M220.09 67.6h5.79v181.26h-5.79z"
  }), _react.default.createElement("path", {
    fill: "#4dd0e1",
    d: "M221.36 67.6h3.65v181.26h-3.65z"
  }), _react.default.createElement("circle", {
    "data-name": "<Path>",
    cx: 222.91,
    cy: 60.68,
    r: 9.08,
    fill: "#37474f"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__G)",
    d: "M234.09 115.22h38V122h-38z"
  }), _react.default.createElement("path", {
    fill: "#4dd0e1",
    d: "M235.96 116.26h34.06v3.65h-34.06z"
  }), _react.default.createElement("path", {
    d: "M375.66 540.83c-7.36 0-13.38 1.65-13.38-5.24v-50.07c0-6.89 6-12.52 13.38-12.52 7.34 0 13.34 5.63 13.34 12.52v50.07c0 6.89-6 5.24-13.34 5.24z",
    transform: "translate(-152.96 -237)",
    fill: "url(#prefix__H)",
    "data-name": "<Group>"
  }), _react.default.createElement("path", {
    "data-name": "<Path>",
    d: "M222.7 301.18c-6.39 0-11.61 1.53-11.61-4.86v-46.45a11.65 11.65 0 0 1 11.61-11.62 11.65 11.65 0 0 1 11.61 11.62v46.45c0 6.39-5.22 4.86-11.61 4.86z",
    fill: "#4dd0e1"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__I)",
    d: "M831.33 106.53h5.76v13.38h-5.76z"
  }), _react.default.createElement("path", {
    fill: "#4dd0e1",
    d: "M832.76 106.53h3.65v13.38h-3.65z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__J)",
    d: "M831.09 102.21h35.73V107h-35.73z"
  }), _react.default.createElement("path", {
    fill: "#4dd0e1",
    d: "M832.76 102.88h34.06v3.65h-34.06z"
  }), _react.default.createElement("circle", {
    cx: 835.46,
    cy: 130.04,
    r: 12.37,
    fill: "url(#prefix__K)",
    "data-name": "<Group>"
  }), _react.default.createElement("circle", {
    "data-name": "<Path>",
    cx: 835.46,
    cy: 128.04,
    r: 11.4,
    fill: "#ffeb3b"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__L)",
    d: "M862.3 67.6h5.79v181.26h-5.79z"
  }), _react.default.createElement("path", {
    fill: "#4dd0e1",
    d: "M863.17 67.6h3.65v181.26h-3.65z"
  }), _react.default.createElement("circle", {
    "data-name": "<Path>",
    cx: 865.27,
    cy: 60.68,
    r: 9.08,
    fill: "#37474f"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__M)",
    d: "M816.09 115.22h38V122h-38z"
  }), _react.default.createElement("path", {
    fill: "#4dd0e1",
    d: "M818.16 116.26h34.06v3.65h-34.06z"
  }), _react.default.createElement("path", {
    d: "M1018.43 540.83c7.36 0 13.38 1.65 13.38-5.24v-50.07c0-6.89-6-12.52-13.38-12.52-7.36 0-13.39 5.63-13.39 12.52v50.07c-.04 6.89 6.03 5.24 13.39 5.24z",
    transform: "translate(-152.96 -237)",
    fill: "url(#prefix__N)",
    "data-name": "<Group>"
  }), _react.default.createElement("path", {
    "data-name": "<Path>",
    d: "M865.47 301.18c6.39 0 11.61 1.53 11.61-4.86v-46.45a11.65 11.65 0 0 0-11.61-11.62 11.65 11.65 0 0 0-11.61 11.62v46.45c0 6.39 5.18 4.86 11.61 4.86z",
    fill: "#4dd0e1"
  }), _react.default.createElement("path", {
    d: "M569.41 494.83c.25 1 5.66 1.52 8.7 1.69a1.94 1.94 0 0 0-.87 2.34c.74 2.19.27 9.69.27 9.69s7.58-.93 10.8-3.94l2.81.59a40.85 40.85 0 0 0-2.81 5.44c-2.12 4.88-3.87 8.64-4.59 10.16l-.15.32-.7-.29s-2 4-2.58 5.3a24.59 24.59 0 0 1-2 3.1l-1.42 2.83a15.79 15.79 0 0 0-1.43 4.43c-.07 1.61 3.34 2 6.53 2.67s1.84-2.89 1.68-4.26 2.18-5.34 2.18-5.34 1.37-1.7 1.32-2.41 1-2.14 1-2.14 1.35-1.49.79-1.51a1.38 1.38 0 0 1-.37-.09l.24-.27c1.61-1.87 5.83-6.67 7.45-7.62 2-1.2 5.51-5.25 5.14-6.21s3.94-7 3.94-7a11.66 11.66 0 0 0 2.39-2.81 1.74 1.74 0 0 0 .1-.19c.3 1 .68 1.64 1.14 1.63.62 0 1.15-.74 1.62-1.76l.16.16c1.54 1.55 4.45 4.44 4.91 4.7.63.35 1.61 2 2.87 3.67a27.5 27.5 0 0 1 2 3.29v1.56c0 2.29 3.43 5.15 3.43 5.15s1.25 3.88 2.39 4.18 2.93 3.32 5.42 2.75c.52-.12 1-.72 1.31-1.6l.37.38.44.46-.34.13a53.24 53.24 0 0 1 3.23 5.41 17.37 17.37 0 0 0 1.08 2.56 24 24 0 0 1 2.09 3.45c.54 1.29 3.23 4 3.23 4s4.24-.92 6.36-2.58.47-3.12-1.08-3.72-2.42-2.85-2.42-2.85a19.77 19.77 0 0 1-1.61-2.23c-.07-.3-1.38-.56-1.45-1a36.79 36.79 0 0 0-1.79-3.32s-2.08-2.65-2.37-2.45l-.13-.34-.11-.2c-.41-.8-2-3.8-4.11-7.49a7.69 7.69 0 0 0-.14-1.89 63.23 63.23 0 0 1-1-10.49c.14-1.33-2.86-4.35-4.51-5-1.23-.52-1.88-3.73-2.13-5.37h.14c1.08 0 10.3-.42 10.64-1.77s-9.45-1.67-10.13-1.7c-.19-.63-.77-2.36-1.51-2.82-.91-.57-1.28-2.69-1.28-2.69a4.87 4.87 0 0 1-.31-2.59c.34-1-1.34-2.72-1.34-2.72a16.52 16.52 0 0 1 .07-2.06 1.4 1.4 0 0 0-.91-1.42 15.92 15.92 0 0 1 0-1.86c.06-.57-1.08-1.2-.95-1.83a24.64 24.64 0 0 0 0-3.25 2.41 2.41 0 0 1-.5-1.86 3.63 3.63 0 0 0-1.08-2.42l-.2-3.55-1.51-4.91c-1.52-4.91-.58-3-2.7-5.24a7.07 7.07 0 0 0-3.91-1.72c0-.29-.05-.58-.09-.86-.26-2-.7-4.12.26-5.87.58-1.05 1.64-1.94 1.66-3.13a2.25 2.25 0 0 0-.22-1c-.57-1.48-2.59-2.5-2.85-4.14a1.11 1.11 0 0 0 .07.16v-.1a1.81 1.81 0 0 0-.16-.81.58.58 0 0 0-.08-.18 1.3 1.3 0 0 0-.41-.36 10.14 10.14 0 0 0-1-.55 2.46 2.46 0 0 0 .47-1.22 1.91 1.91 0 0 0-.06-.48 2.7 2.7 0 0 0-.69-1.23 3.48 3.48 0 0 0-1.11-.83l.14.14a2.4 2.4 0 0 0-.7-.23 9.08 9.08 0 0 0-1.28 0 10 10 0 0 1-2.1-.38c-2.54-.63-5.38-.88-7.67.37a10.64 10.64 0 0 0-4 4.63 5.21 5.21 0 0 0-.75 2.31 9 9 0 0 0 .4 2.16.93.93 0 0 1 0 .44c-.1.36-.56.47-.91.63a2.7 2.7 0 0 0-1.37 1.54 8.07 8.07 0 0 0-.4 2.07 2.94 2.94 0 0 0 .08 1.32c.3.74 1.13 1.09 1.86 1.43a5.84 5.84 0 0 1 2.14 1.56 39.07 39.07 0 0 0-4.41 3.87c-2 .57-4.28 1.37-4.8 2.12-1 1.46-1.55.8-1.68 5.91a28.88 28.88 0 0 1-.74 7v7.17s.74 4.71 0 6-.61 6.5-.61 6.5 1 5-.61 6.57-1.68 4.58-1.68 4.58l.14.05c-2.9.11-8.9.56-8.64 1.58zm17.25-8.25c.61-1.53 1.82-5.77 1.82-5.77s.67-3.19 0-3.79.94-4.91.94-4.91A5.14 5.14 0 0 1 590 475c-.14 1.66 0 5.24 0 5.24s-1.1 3.45-.92 5.11-2.65 3.45-2.25 4.11a7.81 7.81 0 0 1 .68 1.9h-1c-.08-1.84-.19-3.91.15-4.78z",
    transform: "translate(-152.96 -237)",
    fill: "url(#prefix__O)"
  }), _react.default.createElement("path", {
    d: "M473.83 250.83s10.21.35 9.88 1.68-9.29 1.74-10.33 1.74-2.56-1.92-2.56-1.92z",
    fill: "#f6b9ad"
  }), _react.default.createElement("path", {
    fill: "#67647e",
    d: "M467.51 251.6h-5.89v-5.43h5.89z"
  }), _react.default.createElement("path", {
    opacity: 0.12,
    d: "M467.51 251.6h-5.89v-5.43h5.89z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M470.64 251.81l5.41 10.93-6.86 2.23-5.54-4.75-2.62-5.08-5.31.43-5.66 2.82-4.57 2.79-2.77 5.18-3.97 2.24-8.51-1.81L429 261l6.94-4.65 2.52-3.81 10.2-1.48 2.95-4.41 10.21 2.47 8.82 2.69z"
  }), _react.default.createElement("path", {
    opacity: 0.3,
    d: "M470.64 251.81l5.41 10.93-6.86 2.23-5.54-4.75-2.62-5.08-5.31.43-5.66 2.82-4.57 2.79-2.77 5.18-3.97 2.24-8.51-1.81L429 261l6.94-4.65 2.52-3.81 10.2-1.48 2.95-4.41 10.21 2.47 8.82 2.69z"
  }), _react.default.createElement("path", {
    d: "M456.42 194.42a1.35 1.35 0 0 1 .4.35 2 2 0 0 1 .15.81c.21 2 3 3 2.93 5 0 1.18-1.05 2.05-1.61 3.09-.93 1.73-.51 3.84-.25 5.79.2 1.48.2 3.21-.94 4.18-.46.4-1.07.62-1.49 1.06-.86.9-.67 2.38-1.25 3.49a1 1 0 0 1-.23.31.8.8 0 0 1-.33.17 3 3 0 0 1-3.1-1 5.27 5.27 0 0 1-1.07-3.23 26.7 26.7 0 0 1 .26-3.45c.21-2.21.14-4.45.32-6.66a5.28 5.28 0 0 1 .46-2c.17-.33.4-.63.56-1a5.15 5.15 0 0 0 .38-1.46l.61-3.9c.13-.78.23-2.18 1.13-2.48s2.34.51 3.07.93z",
    fill: "#e3787d"
  }), _react.default.createElement("path", {
    d: "M456.42 194.42a1.35 1.35 0 0 1 .4.35 2 2 0 0 1 .15.81c.21 2 3 3 2.93 5 0 1.18-1.05 2.05-1.61 3.09-.93 1.73-.51 3.84-.25 5.79.2 1.48.2 3.21-.94 4.18-.46.4-1.07.62-1.49 1.06-.86.9-.67 2.38-1.25 3.49a1 1 0 0 1-.23.31.8.8 0 0 1-.33.17 3 3 0 0 1-3.1-1 5.27 5.27 0 0 1-1.07-3.23 26.7 26.7 0 0 1 .26-3.45c.21-2.21.14-4.45.32-6.66a5.28 5.28 0 0 1 .46-2c.17-.33.4-.63.56-1a5.15 5.15 0 0 0 .38-1.46l.61-3.9c.13-.78.23-2.18 1.13-2.48s2.34.51 3.07.93z",
    fill: "#3d213c"
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M456.78 195v-.16a.53.53 0 0 1 .12.14 1.83 1.83 0 0 1 .16.81.38.38 0 0 0 0 .1 2.72 2.72 0 0 1-.28-.89zM450.52 217a3 3 0 0 0 3.09 1 1.09 1.09 0 0 0 .34-.17 1 1 0 0 0 .23-.32c.57-1.11.38-2.59 1.24-3.49a17.5 17.5 0 0 1 1.5-1.05c1.13-1 1.13-2.71.93-4.19-.26-1.95-.68-4 .25-5.79.56-1 1.59-1.91 1.61-3.08a1.17 1.17 0 0 0 0-.33 2.35 2.35 0 0 1 .29 1.11c0 1.18-1.06 2.05-1.62 3.09-.93 1.73-.51 3.84-.25 5.79.2 1.48.2 3.21-.93 4.18a18.11 18.11 0 0 0-1.49 1.06c-.87.9-.68 2.37-1.25 3.49a1 1 0 0 1-.23.31 1.09 1.09 0 0 1-.34.17 3 3 0 0 1-3.09-1 4.31 4.31 0 0 1-.88-1.81 4.15 4.15 0 0 0 .6 1.03z"
  })), _react.default.createElement("path", {
    d: "M427.47 256.79s-10.21.35-9.88 1.68 9.29 1.75 10.34 1.75 2.55-1.92 2.55-1.92z",
    fill: "#f6b9ad"
  }), _react.default.createElement("path", {
    d: "M454.94 210.27s5-.29 7.06 1.9 1.14.33 2.61 5.17l1.48 4.84.19 3.5a3.57 3.57 0 0 1 1 2.38 2.38 2.38 0 0 0 .49 1.84 25.73 25.73 0 0 1 0 3.2c-.13.62 1 1.24.92 1.8a15.39 15.39 0 0 0 0 1.83 1.39 1.39 0 0 1 .88 1.41 18.65 18.65 0 0 0-.07 2s1.64 1.73 1.31 2.68a4.75 4.75 0 0 0 .3 2.55s.36 2.09 1.24 2.65 1.54 3 1.54 3-.82 2.12-.82 2.22.59 5.56 2.19 6.25 4.51 3.66 4.38 5a63.7 63.7 0 0 0 1 10.34c.43 1.11-.06 12.46-2.48 13s-4.16-2.42-5.27-2.71-2.32-4.12-2.32-4.12-3.31-2.81-3.34-5.07-.13-5.14-.13-5.14 3.86-6.54 4.64-7 3-3.27 1.28-5.66a25.38 25.38 0 0 1-2.78-5.43l-1.83-1.63-1.54-5.86-2.83-9.16-2.65-9-2.26-9.45-5.94-4.14s-1.03-2.7 1.75-3.19z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M454.94 210.27s5-.29 7.06 1.9 1.14.33 2.61 5.17l1.48 4.84.19 3.5a3.57 3.57 0 0 1 1 2.38 2.38 2.38 0 0 0 .49 1.84 25.73 25.73 0 0 1 0 3.2c-.13.62 1 1.24.92 1.8a15.39 15.39 0 0 0 0 1.83 1.39 1.39 0 0 1 .88 1.41 18.65 18.65 0 0 0-.07 2s1.64 1.73 1.31 2.68a4.75 4.75 0 0 0 .3 2.55s.36 2.09 1.24 2.65 1.54 3 1.54 3-.82 2.12-.82 2.22.59 5.56 2.19 6.25 4.51 3.66 4.38 5a63.7 63.7 0 0 0 1 10.34c.43 1.11-.06 12.46-2.48 13s-4.16-2.42-5.27-2.71-2.32-4.12-2.32-4.12-3.31-2.81-3.34-5.07-.13-5.14-.13-5.14 3.86-6.54 4.64-7 3-3.27 1.28-5.66a25.38 25.38 0 0 1-2.78-5.43l-1.83-1.63-1.54-5.86-2.83-9.16-2.65-9-2.26-9.45-5.94-4.14s-1.03-2.7 1.75-3.19z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M456.8 262s.37.39.94 1c1.5 1.52 4.32 4.37 4.77 4.62.61.35 1.57 2 2.79 3.62a41.48 41.48 0 0 1 2.88 5.23s4.1 5.76 6.5 6.37c1.62.42 3.85 2.55 5.11 3.89.6.63 1 1.09 1 1.09l4.71-1.84-.61-1.61a2.28 2.28 0 0 1-.1-.21c-.46-.88-2.32-4.49-4.78-8.73a57.78 57.78 0 0 0-7.17-9.43s-3.74-3.44-3.88-5a21.37 21.37 0 0 1 0-2.62c.07-1.13.18-2.09.18-2.09l-5.71-3.71-4.36 1.82zM431.15 284.81l4.65 2.29.62-.73c1.56-1.84 5.67-6.57 7.24-7.51 2-1.18 5.35-5.17 5-6.12s3.83-6.9 3.83-6.9a11.44 11.44 0 0 0 2.33-2.77 3.15 3.15 0 0 0 .45-2.23c-.56-2.19-2.39-7-2.39-7s-.88-1.47-1-1.57-3.27-1.21-3.27-1.21l-3.17-.33-4 3.4s.15.81.37 1.94c.48 2.47 1.32 6.48 1.73 6.73.58.36-2.72 3-2.72 3s-2.19 1.86-4.91 8.21c-2.06 4.81-3.76 8.51-4.46 10-.17.54-.3.8-.3.8z",
    fill: "#f6b9ad"
  }), _react.default.createElement("path", {
    d: "M459.11 254.36l-2.31 7.6s.37.39.94 1a39.53 39.53 0 0 0 1.46-5c.61-2.49 6.89-1.84 8-1.84.48 0 1.15 1.1 1.82 2.27.07-1.13.18-2.09.18-2.09l-5.71-3.71zM441.49 254.13s.15.81.37 1.94a8.35 8.35 0 0 1 2-2.83c3-2.71 7.11-.39 7.11-.39.41.15.62.58 1.07 1.12a9.56 9.56 0 0 1 2.2 5.57 18 18 0 0 0 .54 3.53 3.15 3.15 0 0 0 .45-2.23c-.56-2.19-2.39-7-2.39-7s-.88-1.47-1-1.57-3.27-1.21-3.27-1.21l-3.17-.33z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M436.74 257.21c0 1.09 4.1 2.79 4.1 2.79s0-4.58 3.05-7.29 7.11-.39 7.11-.39c.41.16.62.59 1.07 1.12a9.56 9.56 0 0 1 2.2 5.58c.14 2.32.77 5.5 1.74 5.47 1.53 0 2.57-4.62 3.19-7.11s6.89-1.83 8-1.83 3.18 5.67 4 5-.87-6.16-.87-6.16l-5.29-6.39-1.13-1.36-23.16 1.26-1.14 1.77c-.53.83-1.06 1.66-1.08 1.73s-1.84 4.72-1.79 5.81z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M436.74 257.21c0 1.09 4.1 2.79 4.1 2.79s0-4.58 3.05-7.29 7.11-.39 7.11-.39c.41.16.62.59 1.07 1.12a9.56 9.56 0 0 1 2.2 5.58c.14 2.32.77 5.5 1.74 5.47 1.53 0 2.57-4.62 3.19-7.11s6.89-1.83 8-1.83 3.18 5.67 4 5-.87-6.16-.87-6.16l-5.29-6.39-1.13-1.36-23.16 1.26-1.14 1.77c-.53.83-1.06 1.66-1.08 1.73s-1.84 4.72-1.79 5.81z",
    opacity: 0.12
  }), _react.default.createElement("path", {
    d: "M460.17 250.26c0 .05-4.26 4.62-4.45 5.31a22.06 22.06 0 0 0-.4 2.34 14.76 14.76 0 0 0-.24-2.08c-.15-.45.49-1.52 1-1.86a6.37 6.37 0 0 0 1.42-1.28c.12-.27.66-3.12.66-3.12l1.76-.39zM452.17 249.8s2.71 3.11 2.65 3.56-2.65-3.56-2.65-3.56z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M438.31 213.12l3.14 4.36 8.62 1.74s8.73-2.18 2.8-4.45a3.4 3.4 0 0 1-1.45-1c-1-1.25-.66-3.14.21-5a27.16 27.16 0 0 1 3.92-5.7s-12.27-5.43-10.88.24a5.69 5.69 0 0 1-.06 3c-.74 2.56-3.05 4.59-4.66 5.73a15.4 15.4 0 0 1-1.64 1.08z",
    fill: "#f6b9ad"
  }), _react.default.createElement("path", {
    d: "M438.31 213.12l3.14 4.36 8.62 1.74s8.73-2.18 2.8-4.45a3.4 3.4 0 0 1-1.45-1c-1.41.63-2.87 1.12-3.61.9 0 0-4.85-1.42-7.86-2.62a15.4 15.4 0 0 1-1.64 1.07zM439.53 249.93a32.8 32.8 0 0 1 3.65-.9 5.13 5.13 0 0 1 2.89 0c1.22.79 4.19 2.53 5.23 2.53a1.51 1.51 0 0 0 1.4-.87 24.69 24.69 0 0 1 5.32 0c1.4.23 4.69-1.44 6.73-2.57l.29-.12-1.13-1.36-23.16 1.26-1.14 1.77z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M440.4 243.56l-.87 5.84a34 34 0 0 1 3.65-.89 5 5 0 0 1 2.89 0c1.22.78 4.19 2.53 5.23 2.53a1.51 1.51 0 0 0 1.4-.87 24.69 24.69 0 0 1 5.32 0c1.4.23 4.69-1.44 6.73-2.58 1-.57 1.73-1 1.73-1l-1.31-4.59-4-4.28-.61-6.19-1-7.15-1.45-4.38-2.69-6.37-.48-1.13s-.52.31-1.3.72c-.35.19-.76.4-1.2.61-1.66.82-3.7 1.65-4.63 1.37 0 0-4.31-1.26-7.33-2.41a9.73 9.73 0 0 1-2.8-1.37.26.26 0 0 1-.07-.14v.17c-.19 1.92-.83 16.66-.83 16.66z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M436.74 228.12l3.66 15.44-.87 5.84a34 34 0 0 1 3.65-.89c.21-2.4.44-6.44-.19-7.79-.91-2-1.43-8.17-1.43-8.17l-1.08-19.75-.1-1.91a15 15 0 0 0-2.7.54h-.11c-.19 1.95-.83 16.69-.83 16.69zM429.4 257.63c2.28.68 5.35 1.43 5.68.62a10.61 10.61 0 0 0 .16-3.19c-1.11.08-2.78.3-3 .9s-1.84 1.04-2.84 1.67z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M439.33 210.89c-.2-.13-7.33 1.44-8.31 2.88s-1.5.79-1.63 5.82a28.34 28.34 0 0 1-.72 6.87v7.07s.72 4.64 0 5.88-.59 6.41-.59 6.41 1 4.91-.59 6.48-1.63 4.51-1.63 4.51 7.65 2.75 8.17 1.44-.26-6.41.33-7.91 1.77-5.69 1.77-5.69.65-3.14 0-3.73.91-4.84.91-4.84a5.07 5.07 0 0 1 .59 2.81c-.13 1.64 0 5.17 0 5.17s-1.07 3.4-.89 5-2.58 3.4-2.18 4a7.93 7.93 0 0 1 .65 1.86s-3.66 0-4.06.95-3.4 1.36-3.66 2.65-3 1.67-2.29 3.83.26 9.55.26 9.55 13.22-1.63 11.78-7.65-8.2-3.25-8.2-3.25 5.43-3.2 8.56-2.81 4.39-7.85 4.39-7.85.91-7.66 0-9.62-1.44-8.17-1.44-8.17z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M439.33 210.89c-.2-.13-7.33 1.44-8.31 2.88s-1.5.79-1.63 5.82a28.34 28.34 0 0 1-.72 6.87v7.07s.72 4.64 0 5.88-.59 6.41-.59 6.41 1 4.91-.59 6.48-1.63 4.51-1.63 4.51 7.65 2.75 8.17 1.44-.26-6.41.33-7.91 1.77-5.69 1.77-5.69.65-3.14 0-3.73.91-4.84.91-4.84a5.07 5.07 0 0 1 .59 2.81c-.13 1.64 0 5.17 0 5.17s-1.07 3.4-.89 5-2.58 3.4-2.18 4a7.93 7.93 0 0 1 .65 1.86s-3.66 0-4.06.95-3.4 1.36-3.66 2.65-3 1.67-2.29 3.83.26 9.55.26 9.55 13.22-1.63 11.78-7.65-8.2-3.25-8.2-3.25 5.43-3.2 8.56-2.81 4.39-7.85 4.39-7.85.91-7.66 0-9.62-1.44-8.17-1.44-8.17z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M433.31 253.67s-.32-.62-2.65-.22a6.65 6.65 0 0 1-3.5-.13s4.71 2.09 6.15.35zM433.97 223.55c0 .1-1.7 2.65-.4 4.71a32.93 32.93 0 0 1 2.62 6c.23.62.55 1.57.55 1.57",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M440.12 207.75s-6.15 4.61-6.12 6.77a2.49 2.49 0 0 0 1.86.69c1.28 0 3.57-.62 3.83-2.06s1.24 0 .69.75-.89 1.15-.89 1.15-5.81 1.6-6.93 2.35.48 1.6.48 1.6 1.63 2.94 1.54 3.43 4 6.9 4 6.9 1.37 6.94 1.31 8.25-.17 4.08-.17 4.08l2.63 3.6s.64-11.12.22-12.62-1.57-11-1.57-11-1.31-5.76-.79-6.41a7.21 7.21 0 0 0 .71-2.68z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M440.64 207.49s-6.15 4.61-6.12 6.77a2.5 2.5 0 0 0 1.87.69c1.27 0 3.56-.62 3.82-2.06s1.25 0 .69.75-.88 1.15-.88 1.15-5.82 1.6-6.93 2.35.45 1.64.45 1.64 1.64 2.94 1.54 3.43 4 6.9 4 6.9 1.38 6.94 1.31 8.24-.16 4.09-.16 4.09l2.1 3.6s1.17-11.12.74-12.63-1.57-11-1.57-11-1.31-5.76-.78-6.41a7.45 7.45 0 0 0 .71-2.69z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M440.64 207.49s-6.15 4.61-6.12 6.77a2.5 2.5 0 0 0 1.87.69c1.27 0 3.56-.62 3.82-2.06s1.25 0 .69.75-.88 1.15-.88 1.15-5.82 1.6-6.93 2.35.45 1.64.45 1.64 1.64 2.94 1.54 3.43 4 6.9 4 6.9 1.38 6.94 1.31 8.24-.16 4.09-.16 4.09l2.1 3.6s1.17-11.12.74-12.63-1.57-11-1.57-11-1.31-5.76-.78-6.41a7.45 7.45 0 0 0 .71-2.69z",
    opacity: 0.12
  }), _react.default.createElement("path", {
    d: "M452.22 212.92a3.9 3.9 0 0 0 .22.92c.24.72.62 1.71.92 2.71.47 1.55 1.9 4.35 2.75 7s2.13 8.31 2.13 8.31-.27 5.2 1.47 6.51 3.69 6.12 3.69 6.12.62 1.6 1.35 3.12c1-.57 1.73-1 1.73-1l-1.31-4.61-4-4.28-.61-6.19-1-7.15-1.45-4.38-2.69-6.37-1.21-.1s-.24-.15-.57-.31c-.6-.3-1.44-.68-1.42-.3z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M455.26 213.8s6.07.52 7.42.36.79 2.91.79 2.91 1.05 6.25.82 6.91-1.47 5.56-.72 6.73 3.07 7.3 3.07 7.3.75 2.71 1.41 5.43 2.19 7.91 2.58 8.37 3.74 6.49 3.36 7.43-5.53-7.95-6.57-8.74-3-5.75-3-5.75-2-4.81-3.7-6.12-1.47-6.51-1.47-6.51-1.27-5.66-2.12-8.31-2.28-5.45-2.75-7-1.11-3-1.15-3.63 2.03.62 2.03.62z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M454.74 213.54s6.06.52 7.42.36.79 2.91.79 2.91 1 6.25.81 6.9-1.47 5.56-.72 6.74 3.08 7.3 3.08 7.3.75 2.71 1.41 5.43 2.19 7.91 2.58 8.37 3.74 6.48 3.36 7.43-5.54-8-6.57-8.74-3-5.76-3-5.76-2-4.8-3.7-6.11-1.47-6.51-1.47-6.51-1.28-5.66-2.13-8.31-2.27-5.45-2.74-7a35.75 35.75 0 0 1-1.15-3.63c0-.59 2.03.62 2.03.62z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M454.74 213.54s6.06.52 7.42.36.79 2.91.79 2.91 1 6.25.81 6.9-1.47 5.56-.72 6.74 3.08 7.3 3.08 7.3.75 2.71 1.41 5.43 2.19 7.91 2.58 8.37 3.74 6.48 3.36 7.43-5.54-8-6.57-8.74-3-5.76-3-5.76-2-4.8-3.7-6.11-1.47-6.51-1.47-6.51-1.28-5.66-2.13-8.31-2.27-5.45-2.74-7a35.75 35.75 0 0 1-1.15-3.63c0-.59 2.03.62 2.03.62z",
    opacity: 0.12
  }), _react.default.createElement("path", {
    d: "M457.09 229.68s-.75 3.77.49 5.55-.13-4.75-.49-5.55zM443.68 242.13s3.47.62 4.61 2.45-4.61-2.45-4.61-2.45zM443.68 245.86s4.42 1.4 3.6 1.89-2.81-.39-3.37-.22-.23-1.67-.23-1.67zM479.79 286.65c.6.63 1 1.09 1 1.09l4.71-1.84-.61-1.61a2.28 2.28 0 0 1-.1-.21c-.28.2-2.37 1.54-2.37 1.54z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M482.64 286.13s2.09-1.33 2.37-1.52 2.3 2.39 2.3 2.39 1.67 2.85 1.74 3.23 1.34.65 1.4.94a21 21 0 0 0 1.57 2.17s.85 2.2 2.36 2.78 3.11 2 1 3.62-6.18 2.52-6.18 2.52a22 22 0 0 1-3.14-3.94 23.24 23.24 0 0 0-2-3.37 16.29 16.29 0 0 1-1-2.49 53.68 53.68 0 0 0-3.14-5.26z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M431.15 284.81l4.65 2.29.62-.73a19.8 19.8 0 0 1-2.24-1.14l-2.68-1.16c-.22.48-.35.74-.35.74z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M433.92 285.47a12.77 12.77 0 0 0 2.62 1.23c.55 0-.76 1.47-.76 1.47s-1 1.4-1 2.09-1.29 2.34-1.29 2.34-2.27 3.86-2.12 5.2 1.47 4.85-1.63 4.16-6.41-1-6.35-2.61a15.42 15.42 0 0 1 1.4-4.31l1.37-2.76a24 24 0 0 0 2-3c.61-1.22 2.5-5.17 2.5-5.17z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M452.67 215c-2.94-1.12-2.31-4-.93-6.6a7.83 7.83 0 0 0 3.67-2.89c.88.38 1.68 1.44 1.35 2.32a2.8 2.8 0 0 1-.49.74 5 5 0 0 0 .41 6.29c.25.26.55.53.55.89s-.46.73-.87.88a5.71 5.71 0 0 1-1.68.34c.23-.6-.23-1.28-2.01-1.97z",
    fill: "#3d213c"
  }), _react.default.createElement("path", {
    d: "M434.04 255.08s-3.14.12-4.19.82a4.2 4.2 0 0 0-1.45 1.73",
    opacity: 0.1
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M456.32 208.64a5 5 0 0 0-.53 4.86 5 5 0 0 1 .26-5.38 3 3 0 0 0 .49-.75 1.27 1.27 0 0 0 0-.88 1.56 1.56 0 0 1 .27 1.41 3.65 3.65 0 0 1-.49.74zM454.73 216.49a6.24 6.24 0 0 0 1.41-.31c.41-.15.87-.44.88-.89v-.07a1 1 0 0 1 .27.6c0 .44-.46.73-.88.88a5.39 5.39 0 0 1-1.68.33.77.77 0 0 0 0-.54zM452.45 214.54c1.41.54 2 1.08 2.05 1.58a4.32 4.32 0 0 0-1.79-1.05 3.05 3.05 0 0 1-1.9-1.75 3.25 3.25 0 0 0 1.64 1.22z"
  })), _react.default.createElement("path", {
    d: "M444.61 206.34c1 1.94 4.48 2.85 4.6 2.85a7.76 7.76 0 0 0 2.42-.38 27.16 27.16 0 0 1 3.92-5.7s-12.27-5.43-10.88.24a5.69 5.69 0 0 1-.06 2.99z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M441.45 200.91a7.75 7.75 0 0 0 7.14 7.73h.62a7.77 7.77 0 1 0-7.76-7.76z",
    fill: "#f6b9ad"
  }), _react.default.createElement("path", {
    d: "M441.45 200.91a7.75 7.75 0 0 0 7.14 7.73 11.21 11.21 0 0 0 2.76-3.69 3.48 3.48 0 0 0 .5-1.92c-.06-.58-.4-1.1-.5-1.68a4.18 4.18 0 0 1 .81-2.71 10.41 10.41 0 0 1 1.55-2.26c.35-.32.67-.64 1-1a7.76 7.76 0 0 0-13.24 5.5z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M455.09 194.37a3 3 0 0 0 .83-1.7 2.38 2.38 0 0 0-.71-1.6 2.92 2.92 0 0 0-1.64-1 8.66 8.66 0 0 0-1.25 0 9.66 9.66 0 0 1-2-.39c-2.47-.62-5.22-.86-7.45.37a10.5 10.5 0 0 0-3.89 4.56 5.42 5.42 0 0 0-.74 2.28 9.3 9.3 0 0 0 .4 2.13.89.89 0 0 1 0 .43c-.1.37-.54.47-.88.62a2.65 2.65 0 0 0-1.33 1.53 7.76 7.76 0 0 0-.39 2 2.84 2.84 0 0 0 .08 1.3c.29.73 1.1 1.08 1.8 1.42a5.7 5.7 0 0 1 2.09 1.53 2.79 2.79 0 0 1 .56 2.46 2.91 2.91 0 0 1-1.53 1.69 8.93 8.93 0 0 1-2.2.69 2.62 2.62 0 0 0-.92.35 1.61 1.61 0 0 0-.14 2.22 3.31 3.31 0 0 0 2.18 1.06 8 8 0 0 0 5.23-1.11 4.1 4.1 0 0 0 2.05-2.54 8.68 8.68 0 0 1 .28-2.06c.37-.83 1.3-1.2 2.07-1.67a10.1 10.1 0 0 0 3.5-4.22 3.4 3.4 0 0 0 .51-1.92c-.06-.58-.4-1.1-.5-1.68a4.18 4.18 0 0 1 .81-2.71 9.75 9.75 0 0 1 1.55-2.26 14.33 14.33 0 0 0 1.63-1.78z",
    fill: "#3d213c"
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M437.09 205.72a7 7 0 0 1 1.36.83l-.58-.31a5.38 5.38 0 0 1-1.37-.81zM437.14 215.68a7.94 7.94 0 0 0 5.23-1.11 4.12 4.12 0 0 0 2.06-2.54 9.38 9.38 0 0 1 .27-2.06c.37-.82 1.31-1.2 2.08-1.67a10 10 0 0 0 3.5-4.22 3.49 3.49 0 0 0 .51-1.92c-.07-.58-.4-1.1-.5-1.68a4.07 4.07 0 0 1 .81-2.71 9.75 9.75 0 0 1 1.55-2.26 16.94 16.94 0 0 0 1.64-1.74 3 3 0 0 0 .83-1.71 2.4 2.4 0 0 0-.71-1.59 2.13 2.13 0 0 0-.3-.3 3.33 3.33 0 0 1 1.08.82 2.36 2.36 0 0 1 .71 1.6 3 3 0 0 1-.83 1.7 16 16 0 0 1-1.64 1.75 9.64 9.64 0 0 0-1.55 2.26 4.16 4.16 0 0 0-.84 2.7c.1.57.44 1.1.51 1.68a3.6 3.6 0 0 1-.51 1.92 10.19 10.19 0 0 1-3.51 4.22c-.77.47-1.7.84-2.07 1.66a9.38 9.38 0 0 0-.28 2.06 4.09 4.09 0 0 1-2 2.55 8 8 0 0 1-5.23 1.1 3.52 3.52 0 0 1-2-.85 4.55 4.55 0 0 0 1.19.34z"
  })), _react.default.createElement("path", {
    d: "M531.4 297.15c-.12 1.53-.41 4-.41 4s-1.23.15-3.13.32l-1.29.11c-1 .08-2.1.16-3.27.23-2.17.12-4.55.19-6.79.13-1.12 0-2.21-.08-3.22-.18-.45 0-.88-.09-1.3-.16-2.57-.38-4.4-1.11-4.57-2.4a8 8 0 0 1-.06-1.65c.24-2.89 2.6-2.31 2.6-2.31a19.87 19.87 0 0 1 .89-5.09c.29-1.13.54-2 .54-2l16.59-1.15h.06a.82.82 0 0 1 .81.86c-.1 2-.24 6.54.57 6.65a2.5 2.5 0 0 1 2 1.47 6.51 6.51 0 0 1-.02 1.17zM517.3 275.3s-6.26 7.54-9.27 5.45l-.21-.15a7.67 7.67 0 0 1-2.7-5.27c-.06-.54-.15-1.08-.24-1.62a11.44 11.44 0 0 1 .54-5.5c.1-.28.17-.44.17-.44 2.09-.58 11.71 7.53 11.71 7.53z",
    fill: "#ff9800"
  }), _react.default.createElement("path", {
    d: "M513.94 276s-2 1.39-4.75 3.65a10.14 10.14 0 0 1-1.37 1 7.67 7.67 0 0 1-2.7-5.27c-.06-.54-.15-1.08-.24-1.62a11.44 11.44 0 0 1 .54-5.5c3.89.23 8.52 7.74 8.52 7.74z",
    fill: "#eec5cd"
  }), _react.default.createElement("path", {
    d: "M511.79 275.26s-1 .74-2.53 1.94a4.93 4.93 0 0 1-.73.51 4.08 4.08 0 0 1-1.44-2.81c0-.29-.08-.58-.13-.87a5.88 5.88 0 0 1 .29-2.93c2.07.15 4.54 4.16 4.54 4.16z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M521.36 275.3s6.25 7.54 9.27 5.45l.2-.15a7.67 7.67 0 0 0 2.7-5.27c.06-.54.15-1.08.25-1.62a11.29 11.29 0 0 0-.55-5.5c-.1-.28-.17-.44-.17-.44-2.09-.58-11.7 7.53-11.7 7.53z",
    fill: "#ff9800"
  }), _react.default.createElement("path", {
    d: "M524.72 276s2 1.39 4.75 3.65a10.11 10.11 0 0 0 1.36 1 7.67 7.67 0 0 0 2.7-5.27c.06-.54.15-1.08.25-1.62a11.29 11.29 0 0 0-.55-5.5c-3.89.23-8.51 7.74-8.51 7.74z",
    fill: "#eec5cd"
  }), _react.default.createElement("path", {
    d: "M526.87 275.25s1 .74 2.53 1.94a5 5 0 0 0 .72.5 4 4 0 0 0 1.43-2.79c0-.29.08-.58.13-.86a5.84 5.84 0 0 0-.29-2.92c-2.06.14-4.52 4.13-4.52 4.13zM527.98 287a15.29 15.29 0 0 1-2.39 3.06c-2.5 2.2-13.22 1.33-13.91 1.22-.15 0-.45-.46-.83-1.17.29-1.13.54-2 .54-2z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M519.49 274.67h-1.31c-2.24 0-9.78.06-10.62 3.1-1 3.58 3.42 13.2 4.12 13.31s11.41 1 13.91-1.22 5.73-9.09 5.56-9.73c0 .04 3.09-6.48-11.66-5.46z",
    fill: "#ff9800"
  }), _react.default.createElement("path", {
    d: "M519.25 280.49a7.91 7.91 0 0 0-8.1 4.58 6.63 6.63 0 0 0 .48 6.68c.86 1.21 2.13 2.11 3.89 1.39 3.91-1.62 3.73-12.65 3.73-12.65z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M519.04 280.14a7.92 7.92 0 0 0-8.11 4.58 6.64 6.64 0 0 0 .49 6.68c.86 1.21 2.12 2.11 3.88 1.39 3.95-1.62 3.74-12.65 3.74-12.65z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M519.04 280.31a7.94 7.94 0 0 0-8.11 4.59 6.62 6.62 0 0 0 .49 6.67c.86 1.22 2.12 2.12 3.88 1.39 3.95-1.61 3.74-12.65 3.74-12.65z",
    fill: "#eec5cd"
  }), _react.default.createElement("path", {
    d: "M513.13 285.07s-.76.69-.47.87.47-.87.47-.87zM513.94 286s-.41.91-.12 1 .47-.65.47-.65zM512.12 287.33s-.4 1.07 0 1.07 0-1.07 0-1.07z",
    fill: "#3f2b3b"
  }), _react.default.createElement("path", {
    d: "M511.62 290.19a3.05 3.05 0 0 0 2.9 1.92M513.5 290.8a1.46 1.46 0 0 0 1.74.23",
    fill: "none",
    stroke: "#3f2b3b",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M519.95 280.49a7.92 7.92 0 0 1 8.11 4.58 6.61 6.61 0 0 1-.49 6.68c-.86 1.21-2.12 2.11-3.88 1.39-3.91-1.62-3.74-12.65-3.74-12.65z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M520.12 280.14a7.92 7.92 0 0 1 8.11 4.58 6.63 6.63 0 0 1-.48 6.68c-.86 1.21-2.13 2.11-3.89 1.39-3.91-1.62-3.74-12.65-3.74-12.65z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M520.12 280.31a7.94 7.94 0 0 1 8.11 4.59 6.62 6.62 0 0 1-.48 6.67c-.86 1.22-2.13 2.12-3.89 1.39-3.91-1.61-3.74-12.65-3.74-12.65z",
    fill: "#eec5cd"
  }), _react.default.createElement("path", {
    d: "M526.04 285.07s.75.69.46.87-.46-.87-.46-.87zM525.27 286s.41.91.11 1-.46-.65-.46-.65zM527.09 287.33s.4 1.07 0 1.07 0-1.07 0-1.07z",
    fill: "#3f2b3b"
  }), _react.default.createElement("path", {
    d: "M527.58 290.19a3.05 3.05 0 0 1-2.9 1.92M525.7 290.8a1.46 1.46 0 0 1-1.74.23",
    fill: "none",
    stroke: "#3f2b3b",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M516.98 296.05a8 8 0 0 1 5.74 0z",
    fill: "#3f2b3b"
  }), _react.default.createElement("path", {
    d: "M512.04 301.58c-2.57-.38-4.4-1.11-4.57-2.4a8 8 0 0 1-.06-1.65 4 4 0 0 1 1-.35 4.36 4.36 0 0 1 2.26.3c1.21.35 1.13 1.78 1.39 3.65a1.33 1.33 0 0 1-.02.45z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M508.17 297.35s-3.34.61-1.53 3.5a1.22 1.22 0 0 0 .61.51c.22.08.42.08.4-.23l1.48 1.7s2.95.34 2.69-1.52-.17-3.31-1.39-3.66a4.46 4.46 0 0 0-2.26-.3z",
    fill: "#ff9800"
  }), _react.default.createElement("path", {
    d: "M508.97 299.29s.71 1.62 1.69.26M507.34 299.93s.37 1.53 1.76.39",
    fill: "none",
    stroke: "#3f2b3b",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M531.4 297.15c-.12 1.53-.41 4-.41 4s-1.23.15-3.13.32a1.76 1.76 0 0 1 0-.32c.26-1.87.18-3.3 1.39-3.65a4.88 4.88 0 0 1 2.15-.35z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M531.7 297.35s3.35.61 1.53 3.5a1.22 1.22 0 0 1-.61.51c-.22.08-.42.08-.4-.23l-1.48 1.7s-3 .34-2.69-1.52.17-3.31 1.39-3.66a4.47 4.47 0 0 1 2.26-.3z",
    fill: "#ff9800"
  }), _react.default.createElement("path", {
    d: "M530.9 299.29s-.71 1.62-1.69.26M532.53 299.93s-.37 1.53-1.76.39",
    fill: "none",
    stroke: "#3f2b3b",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M516.51 301.92c-1.12 0-2.21-.08-3.22-.18l-1-3.37a2.21 2.21 0 0 1-.09-.62 2.15 2.15 0 0 1 4.29 0c.01 1.3.02 2.97.02 4.17z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M512.12 298.37l1.18 4s-2-.05-1.46 1.22c0 0 .5.47.68.3 0 0-.26.83.78.83 0 0 1.13.6 1.56.17s1.35-1.09 1.44-1.35 0-3.5 0-5.78a2.15 2.15 0 0 0-2.14-2.13 2.15 2.15 0 0 0-2.04 2.74z",
    fill: "#ff9800"
  }), _react.default.createElement("path", {
    d: "M513.71 303.38s-.87.84-.41 1.32M513.33 302.85a1.18 1.18 0 0 0-.81 1",
    fill: "none",
    stroke: "#3f2b3b",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M527.61 297.75a2.21 2.21 0 0 1-.09.62l-1 3.19c-1 .08-2.1.16-3.27.23v-4a2.15 2.15 0 0 1 4.29 0z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M527.69 298.37l-1.18 4s2-.05 1.46 1.22c0 0-.5.47-.68.3 0 0 .27.83-.78.83 0 0-1.12.6-1.56.17s-1.35-1.09-1.44-1.35 0-3.5 0-5.78a2.15 2.15 0 0 1 2.15-2.13 2.14 2.14 0 0 1 2.03 2.74z",
    fill: "#ff9800"
  }), _react.default.createElement("path", {
    d: "M526.1 303.38s.88.84.41 1.32M526.48 302.85a1.18 1.18 0 0 1 .81 1",
    fill: "none",
    stroke: "#3f2b3b",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M519.04 279.45s-4.08-.13-4.21 3 6.38 1.82 6.38 1.82 2.74-.37 2.26-2.29-1.43-2.36-4.43-2.53z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M519.04 279.1s-4.08-.13-4.21 3 6.38 1.83 6.38 1.83 2.74-.37 2.26-2.3-1.43-2.36-4.43-2.53z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M519.04 279.27s-4.08-.13-4.21 3 6.38 1.83 6.38 1.83 2.74-.37 2.26-2.29-1.43-2.36-4.43-2.54z",
    fill: "#3f2b3b"
  }), _react.default.createElement("path", {
    d: "M509.96 295.22s1.37.49 1.65 1.43M529.42 294.53s-1 .41-.91 2.12",
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 662.92,
    cy: 538.45,
    rx: 0.64,
    ry: 1.06,
    transform: "matrix(.87 -.5 .5 .87 -333.37 166.6)",
    fill: "#eec5cd"
  }), _react.default.createElement("ellipse", {
    cx: 682.93,
    cy: 538.45,
    rx: 1.06,
    ry: 0.64,
    transform: "rotate(-60 401.205 552.412)",
    fill: "#eec5cd"
  }), _react.default.createElement("path", {
    d: "M754.6 526.37a19.58 19.58 0 0 1 3.33.82 1.12 1.12 0 0 0 .21.13 4.07 4.07 0 0 0 2.6.19s3.55.45 5.56-1.15c.76-.61 1.53-1.31 2.2-2a1.32 1.32 0 0 1 1.69-.11l.35-.25a8.65 8.65 0 0 0 3-3.7c.21-.61.46-1.2.73-1.79a6.22 6.22 0 0 0 .73-2.39c0-.82 2.38-8 3.85-11.39A13.52 13.52 0 0 0 780 500a4.33 4.33 0 0 0-.08-1.29c-.3-.68-.44-4.09.66-5.57l2.94-8.14 4.2-12.62.13-.38a16.74 16.74 0 0 0 1-1.52A13.38 13.38 0 0 0 790 468c.06-.17.11-.34.16-.51-1.62-.51-.37-5.14-.37-5.14s.79-1.3.61-5.12a53.65 53.65 0 0 1 .31-8.78c0-.43.09-.86.13-1.3-3.55 1.66-12.79 5.94-13.68 5.94-1.1 0-4 1.81-4 1.81s-5.8 3.4-10.87 1.08 4-5.35 6.54-4.92 7.71-2.75 7.71-2.75l9.48-5.64 3.93-2.36c-1.5-3.37-2.77-9.39.1-13.64l1.11-1.19a46 46 0 0 1-.78-9.67c0-2.94.15-5.89.12-8.83a8.65 8.65 0 0 1-3.77-7.13 8.84 8.84 0 0 1 .28-2.2 5.1 5.1 0 0 1-1.33-1.22 5.33 5.33 0 0 1 .08-5.94 4.89 4.89 0 0 1 1.68-1.85 10.81 10.81 0 0 1 2.22-1c-.26.13-.51.26-.76.41l-.2.15c.79-.32 1.62-.56 2.39-.94a8.09 8.09 0 0 0 1-.56c-.37.16-.75.29-1.13.43l.14-.06c1.31-.64 2.41-1.64 3.7-2.33a8.36 8.36 0 0 1 1.67-.68l-.2.1c-.24.13-.47.27-.7.41a10.46 10.46 0 0 1 9.49 1 13.42 13.42 0 0 1 5.62 8.76c.45 2.39.37 4.9 1.25 7.18 1.78 4.59 7.08 7.17 8.84 11.77a20.21 20.21 0 0 1 .86 6.59 73.42 73.42 0 0 0 6.65 28.13 8.42 8.42 0 0 0 2.09 3.08h.3a3.41 3.41 0 0 0 .76.39l-.32.06.32.13c-.22.05-.45.09-.68.12a1.71 1.71 0 0 0 .39.17 10.89 10.89 0 0 1-7.79-1.51 20 20 0 0 1-5.75-5.59c-.13-.17-.25-.35-.37-.52l.11.31c.29.72 1.4 12.31 1.4 13.1s.22 8 .58 8.83 4.63 11.87-1 10.57c-3.6-.83-4.26-4.32-4.26-6.75l-.27-.09c-.49-.16-1-.33-1.66-.49v1a15.13 15.13 0 0 1 .46 2.39 14 14 0 0 0 .58 2.75v.07c.29.65 2.61 6 2.65 9.92l2.17 5.72 2.35 4.12s6.68 8 7.86 15.86l4 11.76s.9-1.12 1-.69.44 2.68.8 2.75.52 1.67.52 1.67 2 2.39 2.2 3.83a.78.78 0 0 1 0 .14 7.68 7.68 0 0 1 .08 1.26.13.13 0 0 1 0 .06 1.62 1.62 0 0 1 0 .22v.54s-.07 1.08-2.86 1.74-5.73 1-7.2 1.81a26.45 26.45 0 0 1-5.53 1.44l-5.52-.29a2 2 0 0 1-1.34-3.49l3.8-1 .32-.09s2.07.29 2.69-1.16a5.22 5.22 0 0 0 2.59-4.92s-.44-4.49.66-4a3 3 0 0 1 .37.16 2.43 2.43 0 0 0 0-.38v-.12-.32a.5.5 0 0 1 0-.12c0-.13-.06-.27-.1-.41 0-.15-.1-.31-.15-.46a.61.61 0 0 1-.05-.12l-.15-.34c0-.06 0-.11-.08-.16s-.12-.22-.18-.33l-.09-.15c-.1-.16-.2-.31-.32-.47-2.05-2.75-5.51-9.12-5.51-9.12l-3.23-6.52s-1.76-3.76-3.3-4.48a13.11 13.11 0 0 1-5-5.72L800 479.48a2.5 2.5 0 0 0-.23.89s-3.41 8.69-5.18 10.14a35.51 35.51 0 0 0-2.9 4.42c-.19.43-.4.84-.63 1.25a4.18 4.18 0 0 0-.66 1.67 11 11 0 0 1-1.32 3v2.93a23.44 23.44 0 0 1-5.19 13.22l-2.53 4.24-4.65 7.12-.18.26a3 3 0 0 0 .74-.2l-1.47 3.18a12 12 0 0 0-.47 1.74c0 .34-1.2 3.35-1.2 3.35v.85a.76.76 0 0 1 0 .11.61.61 0 0 1-.05.12.54.54 0 0 0 0 .11l-.08.12-.06.1a1.19 1.19 0 0 1-.15.18h-.06l-.06.06-.08.06-.06.05-.23.14h-.07l-.22.08h-.09a1.6 1.6 0 0 1-.33.07h-.97s-6.39-2.12-7.37-2.34-6-2.34-6-2.34-5.63-3.14-5.51-5.26.56-2.55 1.86-2.43z",
    transform: "translate(-152.96 -237)",
    fill: "url(#prefix__P)"
  }), _react.default.createElement("path", {
    d: "M641.46 162.39a7.65 7.65 0 0 1 .58 1.61c.14.73.06 1.49.27 2.2a7.75 7.75 0 0 0 1.87 2.57 9.24 9.24 0 0 1 2.18 6.09 26.28 26.28 0 0 0-.14 3.86c.14 1 .55 1.94.78 2.92a11.66 11.66 0 0 1 .26 2.83 27.14 27.14 0 0 1-1.73 9.52.86.86 0 0 1-.25.42 1 1 0 0 1-.44.14l-2.83.41a1.22 1.22 0 0 1-.78-.07 1.18 1.18 0 0 1-.42-.56c-2.07-4.59-2.43-9.77-2.4-14.81s.41-10.1-.31-15.09c-.23-1.58-.57-3.14-.67-4.73-.07-1 .35-3.38 1.82-2.16 1.07.9 1.64 3.54 2.21 4.85z",
    fill: "#e96857"
  }), _react.default.createElement("path", {
    d: "M638.11 157.27a3.89 3.89 0 0 0 0 .88c.1 1.58.44 3.15.67 4.72.72 5 .34 10.06.31 15.1s.33 10.21 2.4 14.8a1.16 1.16 0 0 0 .42.57 1.22 1.22 0 0 0 .78.06l2.83-.4a1 1 0 0 0 .45-.15v-.05c-.12.36-.24.72-.37 1.08a.91.91 0 0 1-.25.41 1 1 0 0 1-.45.15l-2.82.4a1.24 1.24 0 0 1-.79-.06 1.2 1.2 0 0 1-.41-.57c-2.08-4.59-2.43-9.76-2.4-14.8s.41-10.11-.32-15.1c-.22-1.57-.56-3.14-.67-4.72a3.46 3.46 0 0 1 .62-2.32z",
    fill: "#e96857",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M642.94 184.76c-.82 1.5-1.57 2.59-1.62 2.66l8.16-3.36s8-5.85 6.14-6.14c-.43-.07-1-.78-1.73-1.82a61.28 61.28 0 0 1-3.6-6.65c-1-2-1.68-3.63-1.68-3.63l-7.29 3.36a36.15 36.15 0 0 1 2 3.66 22.91 22.91 0 0 1 1.64 4.41c.51 2.19-.83 5.3-2.02 7.51z",
    fill: "#f6b9ad"
  }), _react.default.createElement("path", {
    d: "M659.04 231.92a39.74 39.74 0 0 1 1 4.6 13.8 13.8 0 0 0 .58 2.74s2.59 5.76 2.62 9.93l2.13 5.69 2.31 4.11s6.55 8 7.7 15.76l4.5 13.25-8.06.5a6.13 6.13 0 0 0-.94-5.54c-2-2.74-5.4-9.07-5.4-9.07l-3.16-6.48s-1.73-3.74-3.24-4.46a13 13 0 0 1-4.9-5.69L646.12 239l-3.82-9.21z",
    fill: "#ffc2c8"
  }), _react.default.createElement("path", {
    d: "M642.3 229.83l3.82 9.21 8.06 18.22a13 13 0 0 0 4.86 5.74c1.51.72 3.24 4.46 3.24 4.46l3.16 6.48s3.39 6.33 5.4 9.07a6.07 6.07 0 0 1 1.2 3.1 5.94 5.94 0 0 1-.26 2.44l8.06-.5-.58-1.72-3.88-11.53c-1.15-7.77-7.7-15.76-7.7-15.76l-2.31-4.11-2.13-5.69c0-4.17-2.62-9.93-2.62-9.93a13.8 13.8 0 0 1-.58-2.74 39.74 39.74 0 0 0-1-4.6z",
    fill: "#f6b9ad"
  }), _react.default.createElement("path", {
    d: "M671.82 288.5l8.06-.5-.58-1.72c-.66 1.07-5.32 1.14-5.32 1.14a9.69 9.69 0 0 0-1.9-1.36 5.94 5.94 0 0 1-.26 2.44z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M663.15 300.88l5.4.29a24.93 24.93 0 0 0 5.43-1.44c1.44-.79 4.32-1.15 7.06-1.8s2.8-1.72 2.8-1.72a5.89 5.89 0 0 0 0-2.1.59.59 0 0 0 0-.13c-.21-1.44-2.16-3.82-2.16-3.82s-.14-1.58-.5-1.66-.65-2.3-.79-2.73-1 .68-1 .68c-.38 1.18-5.38 1.26-5.38 1.26a8.78 8.78 0 0 0-2.23-1.51c-1.08-.43-.65 4-.65 4a5.21 5.21 0 0 1-2.55 4.9c-.6 1.44-2.63 1.15-2.63 1.15l-.31.08-3.73 1h-.05a2 2 0 0 0 1.29 3.55z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M663.15 300.88l5.4.29a24.93 24.93 0 0 0 5.43-1.44c1.44-.79 4.32-1.15 7.06-1.8s2.8-1.72 2.8-1.72 0-.08.05-.23 0-.2 0-.34a7.09 7.09 0 0 0-.06-1.53l-5.85 2s-4.32 1.43-6 1.72c0 0-5.84.43-6.41.43s-.38-1 0-1.93l-3.73 1h-.05a2 2 0 0 0 1.36 3.55z",
    fill: "#e8f5ff"
  }), _react.default.createElement("circle", {
    cx: 675.73,
    cy: 295.61,
    r: 0.34,
    fill: "#e8f5ff"
  }), _react.default.createElement("circle", {
    cx: 674.25,
    cy: 289.01,
    r: 0.34,
    fill: "#e8f5ff"
  }), _react.default.createElement("circle", {
    cx: 673.64,
    cy: 290.74,
    r: 0.34,
    fill: "#e8f5ff"
  }), _react.default.createElement("circle", {
    cx: 672.86,
    cy: 292.39,
    r: 0.34,
    fill: "#e8f5ff"
  }), _react.default.createElement("circle", {
    cx: 671.8,
    cy: 293.92,
    r: 0.34,
    fill: "#e8f5ff"
  }), _react.default.createElement("circle", {
    cx: 670.61,
    cy: 295.13,
    r: 0.34,
    fill: "#e8f5ff"
  }), _react.default.createElement("circle", {
    cx: 669.19,
    cy: 296.3,
    r: 0.34,
    fill: "#e8f5ff"
  }), _react.default.createElement("circle", {
    cx: 667.51,
    cy: 297.2,
    r: 0.34,
    fill: "#e8f5ff"
  }), _react.default.createElement("circle", {
    cx: 673.98,
    cy: 296.14,
    r: 0.34,
    fill: "#e8f5ff"
  }), _react.default.createElement("path", {
    d: "M668.51 300.26a19 19 0 0 0 5.13-1.13c.6-.24 4.28-1.13 4.32-1.15s2.81-.85 3.71-1.09a16.36 16.36 0 0 0 2.17-.91v-.34a17 17 0 0 1-2.27 1c-.91.25-3.69 1.09-3.72 1.1s-3.73.9-4.35 1.16a19.14 19.14 0 0 1-5 1.1z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M649.15 229.63l.06.28.92 4.15.6 2.75 4.63-1.38 4.29-1.28v-3.1l-10.5-1.42z"
  }), _react.default.createElement("path", {
    fill: "#e8f4ff",
    d: "M649.15 229.34l.06.28.92 4.16.6 2.74 4.63-1.38 4.29-1.28v-3.1l-10.5-1.42z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M649.15 229.34l.06.28.92 4.16.6 2.74 4.63-1.38 4.29-1.28v-3.1l-10.5-1.42z"
  }), _react.default.createElement("path", {
    d: "M641.32 169.18a36.15 36.15 0 0 1 2 3.66h.1a8.59 8.59 0 0 0 6.86-3.4c-1-2-1.68-3.63-1.68-3.63z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 643.43,
    cy: 163.63,
    r: 8.64,
    fill: "#f6b9ad"
  }), _react.default.createElement("path", {
    d: "M640.14 202.54l-6.05 3.67-9.28 5.62s-5.11 3.17-7.56 2.73-11.38 2.6-6.41 4.9 10.66-1.08 10.66-1.08 2.8-1.8 3.88-1.8 14.76-6.58 14.76-6.58zM618.26 287.57v3.92l5.83 1.19.84-1.31 4.56-7.08 2.48-4.21a23.5 23.5 0 0 0 5.07-13.08v-2.92a10.86 10.86 0 0 0 1.3-3 4.22 4.22 0 0 1 .64-1.66c.23-.41.43-.82.62-1.25a36.65 36.65 0 0 1 2.84-4.39c1.73-1.44 5.08-10.08 5.08-10.08 0-1.05 1.14-2.57 2.08-3.67.7-.82 1.3-1.41 1.3-1.41l-11.34-3.56-3.78.32-.12.38-4.13 12.55-2.88 8.09c-1.08 1.48-.93 4.86-.64 5.55a4.22 4.22 0 0 1 .08 1.28 13.61 13.61 0 0 1-1.05 4.77c-1.44 3.37-3.83 10.51-3.77 11.33a6.57 6.57 0 0 1-.72 2.38c-.26.58-.51 1.17-.72 1.78a8.55 8.55 0 0 1-2.93 3.68c-.39.24-.64.4-.64.4z",
    fill: "#f6b9ad"
  }), _react.default.createElement("path", {
    d: "M635.7 235.75a10.16 10.16 0 0 0 4.15 1.06c1.58 0 6.82 2 9.79 3.21.7-.82 1.3-1.41 1.3-1.41l-11.34-3.56-3.78.32z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M635.82 235.37a10.23 10.23 0 0 0 4.32 1.15c2.23 0 11.88 4.07 11.88 4.07l1.17-1.91 2.17-3.54 1.22-2 1.06-1.73s-4.05-1-8.44-1.79c-5.21-1-10.9-1.7-10.86-.28a6 6 0 0 1-.37 2.07 13.81 13.81 0 0 1-1.15 2.44 15.63 15.63 0 0 1-1 1.52z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M635.82 235.37a10.23 10.23 0 0 0 4.32 1.15c2.23 0 11.88 4.07 11.88 4.07l1.17-1.91-11.15-5.11a50.33 50.33 0 0 1-5.19.28 15.63 15.63 0 0 1-1.03 1.52z",
    fill: "#fff",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M618.26 287.57v3.92l5.83 1.19.84-1.31a9.77 9.77 0 0 1-1.32.11c-1.56 0-3.6-2-3.6-2-.31-.16-.52-.82-.67-1.57a1.28 1.28 0 0 0-.45-.76c-.38.26-.63.42-.63.42z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M601.24 292c-.12 2.11 5.4 5.23 5.4 5.23s4.9 2.11 5.86 2.33 7.22 2.33 7.22 2.33c2.86.28 2.69-2.19 2.69-2.19s1.17-3 1.17-3.33a12 12 0 0 1 .46-1.73l1.44-3.17a5.45 5.45 0 0 1-2.16.34c-1.56 0-3.6-2-3.6-2-.31-.16-.52-.82-.67-1.57a1.28 1.28 0 0 0-2.16-.69c-.66.63-1.42 1.33-2.16 1.93-2 1.59-5.45 1.15-5.45 1.15a4 4 0 0 1-2.55-.19 1.12 1.12 0 0 1-.21-.13 18.29 18.29 0 0 0-3.26-.81c-1.28-.18-1.9.35-2.02 2.5z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M601.24 292c-.12 2.11 5.4 5.23 5.4 5.23s4.9 2.11 5.86 2.33 7.22 2.33 7.22 2.33a2.57 2.57 0 0 0 2-.48 1.64 1.64 0 0 0 .28-.31 2.4 2.4 0 0 0 .4-1.4 19.4 19.4 0 0 1-3.15-.62s-8.33-2.31-9.45-3.19c0 0-4-1.8-4.23-2.67a6.51 6.51 0 0 0 1.15-2.8 1.12 1.12 0 0 1-.21-.13 18.29 18.29 0 0 0-3.26-.81c-1.27-.16-1.89.37-2.01 2.52z",
    fill: "#e8f5ff"
  }), _react.default.createElement("path", {
    d: "M607.04 296.6c.75 1 4.93 2.22 5.44 2.32s3.57 1.11 3.6 1.12l3 .91a4.84 4.84 0 0 0 2.2.43h.4a1.64 1.64 0 0 0 .28-.31 5.61 5.61 0 0 1-2.78-.37l-3-.93c-.13 0-3.13-1-3.64-1.13s-4.61-1.32-5.26-2.2z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M637.97 231.41a.46.46 0 0 0 .16.07c1.58.51 7.48.65 7.48.65a24.58 24.58 0 0 0 4.51 1.65c1.41.33 2.8.41 3.56-.21a4.18 4.18 0 0 1 2.9-.43 21.84 21.84 0 0 1 3.06.62v-3l-10.5-1.42.06.28c-5.21-1-10.9-1.7-10.86-.28a6 6 0 0 1-.37 2.07zM641.32 187.42l8.16-3.36s8-5.85 6.14-6.14c-.43-.07-1-.78-1.73-1.82a12.12 12.12 0 0 0-5.7 3.62c-1.62 1.8-4.34 4.23-5.25 5-.82 1.54-1.57 2.63-1.62 2.7z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M637.77 225.8s-1.23 4.6.36 5.11 7.48.65 7.48.65 6.12 3 8.07 1.43c1.37-1.12 5.37 0 7.58.69.92.3 1.53.54 1.53.54s1.61-8-1-12.6.79-15.77.94-16.85V202c-.06-3.69-.32-9.71-.74-10.55a19.47 19.47 0 0 1-1.08-3.09s-.36-2.88-.94-3.31a3.59 3.59 0 0 1-.79-1.8s-.72-3-1.44-3.82-1-3.24-1-3.24a5.1 5.1 0 0 0-2.49.1 12 12 0 0 0-6.09 3.72c-2 2.19-5.56 5.3-5.56 5.3l-4.58 5c-3 4.54-1.36 11.09.22 14.26.81 1.61.7 4.73.4 7.4a54.28 54.28 0 0 0-.31 8.74c.21 3.79-.56 5.09-.56 5.09z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M650.44 188.36l.79 4.73s5.18 11.23 6 12.61a24.06 24.06 0 0 1 1.81 4.9s.29 6.27.87 7.49 1.22 8.79 1.22 8.79l.36 5a13.32 13.32 0 0 0-.19 1.76c.92.3 1.53.54 1.53.54s1.61-8-1-12.6.79-15.77.94-16.85v-2.77l-1-3.92-1.3-6.48-.48-.9-1.68-3.06-5.54-1.8z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M650.73 187.78l.78 4.73s5.18 11.23 6 12.62a24.06 24.06 0 0 1 1.72 4.88s.29 6.26.87 7.49 1.22 8.78 1.22 8.78l.36 5s-1.58 7.85 4 9.14 1.37-9.64 1-10.51-.58-8-.58-8.78-1.08-12.31-1.37-13a29.43 29.43 0 0 1-.72-3l-2-7.65-1.3-6.48-.49-.89-1.67-3.07-5.54-1.8z",
    fill: "#f6b9ad"
  }), _react.default.createElement("path", {
    d: "M650.73 187.78l.78 4.73c.15-8.13 9.22-.91 9.22-.91s-.19-.59-.49-1.47l-1.67-3.07-5.54-1.8z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M653.53 178s3.89 1.73 4.47 4.18 2.73 8.85 2.73 8.85-9.5-7.56-9.21 1.51a5.19 5.19 0 0 1-1.23-3.16c-.14-2.09-2.16-6.56-.46-8.43a15.53 15.53 0 0 1 3.7-2.95z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M633.76 160.23a5.37 5.37 0 0 1 1.44-7.27 31.68 31.68 0 0 1 3.58-1.55c1.29-.64 2.37-1.63 3.63-2.32a10 10 0 0 1 10.06.66 13.37 13.37 0 0 1 5.5 8.72c.45 2.38.37 4.87 1.23 7.13 1.74 4.58 6.94 7.14 8.67 11.71a20.33 20.33 0 0 1 .84 6.56 73.93 73.93 0 0 0 6.5 27.9c.67 1.5 1.54 3.1 3.08 3.66a10.58 10.58 0 0 1-7.63-1.51 19.91 19.91 0 0 1-5.65-5.55 35.73 35.73 0 0 1-6.54-22.37c.09-1.76.27-3.7-.78-5.11s-2.9-1.81-4.3-2.81c-3.37-2.42-3.3-7.32-4.54-11.28a4.41 4.41 0 0 0-1-1.9c-3.75-3.58-10.95-.55-14.09-4.67z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M634.04 159.94a5.36 5.36 0 0 1 1.44-7.27 35.77 35.77 0 0 1 3.58-1.55c1.29-.64 2.37-1.63 3.63-2.32a10 10 0 0 1 10.06.66 13.37 13.37 0 0 1 5.5 8.72c.45 2.38.36 4.88 1.23 7.14 1.74 4.57 6.94 7.13 8.67 11.7a20.64 20.64 0 0 1 .84 6.56 74.11 74.11 0 0 0 6.49 27.9c.68 1.5 1.55 3.1 3.09 3.66a10.57 10.57 0 0 1-7.63-1.5 19.81 19.81 0 0 1-5.65-5.56 35.65 35.65 0 0 1-6.54-22.34c.09-1.76.27-3.69-.78-5.11s-2.9-1.81-4.3-2.81c-3.37-2.41-3.3-7.32-4.54-11.28a4.41 4.41 0 0 0-1-1.9c-3.75-3.64-10.95-.58-14.09-4.7z",
    fill: "#e96857"
  }), _react.default.createElement("circle", {
    cx: 619.03,
    cy: 291.17,
    r: 0.34,
    fill: "#e8f5ff"
  }), _react.default.createElement("circle", {
    cx: 617.39,
    cy: 292.15,
    r: 0.34,
    fill: "#e8f5ff"
  }), _react.default.createElement("circle", {
    cx: 615.64,
    cy: 292.83,
    r: 0.34,
    fill: "#e8f5ff"
  }), _react.default.createElement("circle", {
    cx: 613.79,
    cy: 293.18,
    r: 0.34,
    fill: "#e8f5ff"
  }), _react.default.createElement("circle", {
    cx: 611.97,
    cy: 293.39,
    r: 0.34,
    fill: "#e8f5ff"
  }), _react.default.createElement("circle", {
    cx: 610.07,
    cy: 293.39,
    r: 0.34,
    fill: "#e8f5ff"
  }), _react.default.createElement("circle", {
    cx: 608.15,
    cy: 293.18,
    r: 0.34,
    fill: "#e8f5ff"
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M644.14 148c-1.26.69-2.34 1.68-3.63 2.32a16.83 16.83 0 0 1-1.58.64l.14-.06c1.29-.64 2.37-1.63 3.63-2.32a7.67 7.67 0 0 1 1.63-.67zM635.49 152.48a10.69 10.69 0 0 1 2.18-1 5.81 5.81 0 0 0-.74.4 5.36 5.36 0 0 0-1.44 7.27c3.13 4.12 10.33 1.09 14.06 4.7a4.41 4.41 0 0 1 1 1.9c1.24 4 1.17 8.87 4.54 11.28 1.4 1 3.27 1.42 4.3 2.81s.87 3.35.78 5.11a35.65 35.65 0 0 0 6.54 22.34 19.81 19.81 0 0 0 5.65 5.56 11.35 11.35 0 0 0 5.44 1.69 3.34 3.34 0 0 0 .75.39 10.57 10.57 0 0 1-7.63-1.51 19.68 19.68 0 0 1-5.65-5.56 35.63 35.63 0 0 1-6.54-22.34c.09-1.75.27-3.69-.78-5.1s-2.9-1.81-4.3-2.81c-3.37-2.42-3.3-7.32-4.54-11.28a4.36 4.36 0 0 0-1-1.9c-3.73-3.61-10.93-.59-14.06-4.7a5.36 5.36 0 0 1 1.44-7.25z"
  })), _react.default.createElement("path", {
    d: "M645.97 225.63s-5.73-.59-6.86-.48 6.86.48 6.86.48zM644.51 227.07s-3.48-.48-4.82 0 4.82 0 4.82 0zM644.04 228.55a35.14 35.14 0 0 1-5 .17M646.73 199.52s-4.34 1.92-4.73 3-3 1.78-3 1.78",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M763.44 274.91s-5.11 9.68-5.51 11.06a1.87 1.87 0 0 1-1.73 1.38s-5.1 1.22-6.32 1.39-11.78 1-11.78 1-2.68.08-3-.89-5.48-5.58-8.48-1.49a3 3 0 0 0-.43 2.66c.55 1.76 1.68 4.54 2.9 2.81 1.7-2.44 3.69-1.75 3.69-.45s2.73.81 3.62 1c.48.1 2.17.54 3.62.93a26.26 26.26 0 0 0 5.15.86c2.87.19 7.12.34 8.62-.23a23.59 23.59 0 0 1 6.34-.88 2.15 2.15 0 0 0 1.24-.44 19.31 19.31 0 0 0 4.69-5.34c2.12-3.66 6.47-11.23 6.17-13.42s-8.79.05-8.79.05z",
    fill: "#efb7b9"
  }), _react.default.createElement("path", {
    d: "M763.44 274.91s-5.11 9.68-5.51 11.06a1.87 1.87 0 0 1-1.73 1.38s-5.1 1.22-6.32 1.39-11.78 1-11.78 1-2.68.08-3-.89-5.48-5.58-8.48-1.49a3 3 0 0 0-.43 2.66c.55 1.76 1.68 4.54 2.9 2.81 1.7-2.44 3.69-1.75 3.69-.45s2.73.81 3.62 1c.48.1 2.17.54 3.62.93a26.26 26.26 0 0 0 5.15.86c2.87.19 7.12.34 8.62-.23a23.59 23.59 0 0 1 6.34-.88 2.15 2.15 0 0 0 1.24-.44 19.31 19.31 0 0 0 4.69-5.34c2.12-3.66 6.47-11.23 6.17-13.42s-8.79.05-8.79.05z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M704.71 348.07c2.32 2.52 4 3.51 4 .85-.25-8 13.89-44.42 13.89-44.42l-4.18-.31a108.3 108.3 0 0 0-13.71 43.88z",
    fill: "none"
  }), _react.default.createElement("path", {
    d: "M684.77 365.62a20.11 20.11 0 0 0 40.15 1.73c0-.33 0-.65.06-1v-.73a20.11 20.11 0 1 0-40.22 0z",
    fill: "#65617d"
  }), _react.default.createElement("circle", {
    cx: 704.89,
    cy: 365.62,
    r: 10.97,
    fill: "#dce0ed"
  }), _react.default.createElement("circle", {
    cx: 704.89,
    cy: 365.62,
    r: 6.58,
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M757.7 327.43l48.43 1v-7.15c-.43-5.74-6.32-7.76-11.7-8.39a33.61 33.61 0 0 0-12.51.94c-10.28 2.72-16.83 3.25-20 3.3a3.08 3.08 0 0 0-3 2.5c-.15.81-.3 1.7-.44 2.58-.11.69-.21 1.37-.3 2-.3 1.79-.48 3.22-.48 3.22z",
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M719.04 366.92h100.63a4 4 0 0 0 3.67-2.37c.76-1.81-.3-3-1.43-3.64a11.38 11.38 0 0 1-5-6.06c-1.08-3.16-2.12-8.13-2.54-15.88-.42-8-3.32-12-6.46-13.89a12.78 12.78 0 0 0-8.49-1.55l-40.79.32a8.16 8.16 0 0 0-2 1.3c-3.64 3.39 1.66 7.81 1.66 7.81 11.38 12 2.76 24.21 2.76 24.21h-20.81a19.15 19.15 0 0 1-10.93-3.35 10.9 10.9 0 0 1-4.34-5c-.32-.87-.65-1.74-1-2.59-5.47-11.87 1.13-31.19 4-38.42.71-1.79 1.18-2.84 1.18-2.84l-6.54-.5-4.14-.31a108.3 108.3 0 0 0-13.66 43.88c-.1 1.13-.19 2.22-.26 3.27a14.63 14.63 0 0 0 14.49 15.61z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M758.15 324.18h48v-2h-47.7c-.11.69-.21 1.37-.3 2z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M756.69 325.15h50.89a1 1 0 0 0 .38-.07 12.78 12.78 0 0 0-8.49-1.55l-40.79.32a8.16 8.16 0 0 0-1.99 1.3z",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 755.27,
    y: 322.67,
    width: 71.12,
    height: 2,
    rx: 1,
    ry: 1,
    fill: "#dce0ed"
  }), _react.default.createElement("path", {
    d: "M704.71 348.07c2.32 2.52 4 3.51 4 .85-.25-8 13.89-44.42 13.89-44.42l-4.18-.31a108.3 108.3 0 0 0-13.71 43.88z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M684.89 363.42c2.4.58 5.37 1.16 9 1.7q2 .3 4.38.57c3.74.45 8.06.83 13 1.13 1.42.09 2.89.16 4.41.23q4.28.19 9.16.3l.06-1c-4.55-1.84-11.7-6.74-12.85-19.49a20.12 20.12 0 0 0-27.24 16.56z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M728.77 366.92s-23.09-2.5-15.14-37.68c0 0-11.41 10.46-18.5 16.27s-19.75 13.83-19.75 13.83 7.56 7.06 53.39 7.58z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M728.77 366.92s-23.09-2.5-15.14-37.68c0 0-11.41 10.46-18.5 16.27s-19.75 13.83-19.75 13.83 7.56 7.06 53.39 7.58z",
    fill: "#fff",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 790.46,
    cy: 365.62,
    r: 20.11,
    fill: "#65617d"
  }), _react.default.createElement("circle", {
    cx: 790.46,
    cy: 365.62,
    r: 10.97,
    fill: "#dce0ed"
  }), _react.default.createElement("circle", {
    cx: 790.46,
    cy: 365.62,
    r: 6.58,
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M767.9 359.58a23.04 23.04 0 1 1 46.08 0c0 .55 0 1.1-.06 1.63h-46c0-.53-.02-1.08-.02-1.63z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M768.75 359.18a22.19 22.19 0 1 1 44.37 0c0 .53 0 1.05-.05 1.57h-44.26c-.04-.52-.06-1.04-.06-1.57z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M768.75 359.18v1.57h44.29v-.49-1.08a22.19 22.19 0 1 0-44.37 0z",
    fill: "#fff",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M768.78 360.26v.49h44.26v-.49z",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 916.19,
    y: 598.24,
    width: 59.6,
    height: 5.2,
    rx: 2.6,
    ry: 2.6,
    transform: "rotate(-180 869.51 482.335)",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 916.19,
    y: 597.75,
    width: 59.6,
    height: 5.2,
    rx: 2.6,
    ry: 2.6,
    transform: "rotate(-180 869.51 481.85)",
    fill: "#dce0ed"
  }), _react.default.createElement("ellipse", {
    cx: 864.67,
    cy: 557.12,
    rx: 7.35,
    ry: 2.92,
    transform: "rotate(-65.67 604.512 557.128)",
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 864.42,
    cy: 556.88,
    rx: 7.35,
    ry: 2.92,
    transform: "rotate(-65.67 604.273 556.886)",
    fill: "#dce0ed"
  }), _react.default.createElement("path", {
    d: "M718.41 304.19V308h7.43a12.76 12.76 0 0 0 2.07-.17c.71-1.79 1.18-2.84 1.18-2.84l-6.54-.5z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M718.41 307.52h7.43c6.54 0 11.83-4.88 11.83-10.91v-1c0-6-5.29-10.92-11.83-10.92l-7.43.68z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M730.66 291.14s-4.45 2.38-1.89 6.4c0 0 3.14 5.15 8.08 4.67l1.79-11.07s-5.91-.54-7.98 0z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M732.37 290.93a4.7 4.7 0 0 0-3.61 1.91 3.87 3.87 0 0 0 0 4.7s3.14 5.15 8.08 4.67l1.79-11.07a55.09 55.09 0 0 0-6.26-.21zM718.66 307.52a6 6 0 0 1-6-6V291.3a6 6 0 0 1 6-6v22.22z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M718.41 307.52a6 6 0 0 1-6-6V291.3a6 6 0 0 1 6-6v22.22z",
    fill: "#dce0ed"
  }), _react.default.createElement("path", {
    d: "M771.2 313.83s-1.15.42-2.67 1a60.87 60.87 0 0 0-7.08 3.06c-1.18.74-5.65 2-9 2.85a29.25 29.25 0 0 1-7.57.94h-6.6a3 3 0 0 0-.46 0c-.91.15-.87.76-.85.91 5.36 3.25 11.86 17.8 12.27 20.24.3 1.83 3 6.89 4.3 9.32l.74 1.32-1.63 1.87-4.71 2.12-4.47 1.95s-4.72.24-4.8 0-.08-2.77-.08-2.77a12.33 12.33 0 0 0 1.63-1.24 27.47 27.47 0 0 0 3-3.06c2.6-3.09-2.61-9-2.61-9l-10-13s-.81-1.46-4.71-7.31 0-9 0-9l6.86-2.85c11.91-4.46 26.27-8 26.27-8h.21l3-.38z",
    fill: "#efb7b9"
  }), _react.default.createElement("path", {
    d: "M740.52 357.47s-.85 1-.21 1.09a10.71 10.71 0 0 0 2.32-.27l10.63-5.61s1.16-.82 1.43.79.46 1.47.46 1.47 1.4 3 0 3.64-9.81 3.09-9.81 3.09-12.22 2.77-13.38-.43 2.07-2.65 2.07-2.65 4-1 5.4-2.92c0 0 1.98.55 1.09 1.8z",
    fill: "#444053"
  }), _react.default.createElement("path", {
    d: "M725.94 314l6.86-2.85c11.91-4.46 26.27-8 26.27-8h.21l3-.38 8.88 11.13s-1.15.42-2.67 1a60.87 60.87 0 0 0-7.08 3.06c-1.18.74-5.65 2-9 2.85a29.25 29.25 0 0 1-7.57.94h-6.6a3 3 0 0 0-.46 0c-.91.15-.87.76-.85.91 5.36 3.25 11.86 17.8 12.27 20.24.3 1.83 3 6.89 4.3 9.32a3.58 3.58 0 0 1 .18.32c.35-.06.8.07.95 1 .28 1.62.46 1.47.46 1.47s1.4 3 0 3.64-9.81 3.09-9.81 3.09-12.22 2.77-13.38-.43 2.07-2.65 2.07-2.65 4-1 5.4-2.92a2.55 2.55 0 0 1 .35.13c.15-.12.3-.24.46-.39a27.47 27.47 0 0 0 3-3.06c2.6-3.09-2.61-9-2.61-9l-10-13s-.81-1.46-4.71-7.31.08-9.11.08-9.11z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M779.39 259.45l-.37.47-.21.26-1.29 1.63s-3.09 1-5.79 1.63-5.22 1-3.31-.64c1.19-1 1.26-2.64.83-4.41a18.05 18.05 0 0 0-1.55-3.93l-.28-.54a32.82 32.82 0 0 0-2-3.24 56.47 56.47 0 0 1 5.38-3.31c2.24-1.16 4.07-1.66 2.91.63a5.31 5.31 0 0 0 .19 4.67c.06.13.11.25.18.38a16.24 16.24 0 0 0 2.3 3.38 26.52 26.52 0 0 0 3.01 3.02z",
    fill: "#efb7b9"
  }), _react.default.createElement("path", {
    fill: "#444053",
    d: "M763.95 296.59l-1.65 1.51-1.6 6.14h2.66l2.95-3.82-2.36-3.83z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M766.31 300.42l-1.78 2.31-1.16 1.51h-2.67l.27-1.05 1.17-4.47.16-.62 1.65-1.51 2.26 3.66.1.17z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M766.31 300.42l-1.78 2.31-1.16 1.51h-2.67l.27-1.05 1.17-4.47.16-.62 1.65-1.51 2.26 3.66.1.17z"
  }), _react.default.createElement("path", {
    d: "M775.16 316.58s-1.15.42-2.67 1a60.87 60.87 0 0 0-7.08 3.06c-1.18.74-5.65 2-9 2.85a29.24 29.24 0 0 1-7.57.93h-6.6a2.92 2.92 0 0 0-.46 0c-.91.15-.87.76-.85.91 5.36 3.25 11.86 17.8 12.27 20.23.3 1.83 3 6.9 4.3 9.32.45.82.74 1.33.74 1.33l-1.63 1.87-4.71 2.11-4.47 1.95s-4.71.25-4.8 0-.08-2.76-.08-2.76a13.61 13.61 0 0 0 1.63-1.24 26.85 26.85 0 0 0 3-3.07c2.6-3.09-2.61-9-2.61-9l-10-13s-.81-1.46-4.71-7.31 0-9 0-9l6.25-3.58c9.75-5.93 23.49-9.35 23.49-9.35h.2l3.05-.38z",
    fill: "#efb7b9"
  }), _react.default.createElement("path", {
    d: "M758.26 356.24l-1.63 1.87-4.71 2.11-4.47 1.95s-4.71.25-4.8 0-.08-2.76-.08-2.76a13.61 13.61 0 0 0 1.63-1.24c.51.27 1.08.78.53 1.56 0 0-.86 1-.22 1.1a10.71 10.71 0 0 0 2.32-.27l10.64-5.56h.05c.45.73.74 1.24.74 1.24z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M744.48 360.22s-.85 1-.21 1.1a10.56 10.56 0 0 0 2.32-.28l10.63-5.6s1.16-.83 1.43.79.46 1.46.46 1.46 1.4 3 0 3.64-9.81 3.1-9.81 3.1-12.26 2.77-13.38-.43 2.07-2.65 2.07-2.65 4-1 5.4-2.93c0 0 1.98.58 1.09 1.8z",
    fill: "#444053"
  }), _react.default.createElement("path", {
    d: "M774.51 252.06c-1.41 1-3.56 2.52-5.39 2.52a8.25 8.25 0 0 1-1.42-.12 31.8 31.8 0 0 0-2.29-3.78s10.73-7.48 8.29-2.68c-.81 1.58-.02 2.37.81 4.06z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M777.89 245.31a8.74 8.74 0 0 1-4 7.36 8 8 0 0 1-.86.5 8.72 8.72 0 0 1-3.91.92 8.6 8.6 0 0 1-1.7-.17 8.78 8.78 0 1 1 10.47-8.61z",
    fill: "#efb7b9"
  }), _react.default.createElement("path", {
    d: "M775.16 316.58s-1.15.42-2.67 1a13.28 13.28 0 0 0-2.37-1.82c-.89-.33-3.82-2-3.74-2.52a4.23 4.23 0 0 0-2.35-2.68c-1.14-.33-.49-2-.49-2s-2.19-.81-2.74-1.95-2.22-2.6-1.65-2.52a1.77 1.77 0 0 0 .69-.27l3.05-.38z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M781.83 313.66s-3.74 3.09-3.92 4.47-2.67 1.3-2.67 1.3-3.74-3.58-4.63-3.9-3.82-2-3.74-2.52a4.3 4.3 0 0 0-2.35-2.69c-1.14-.32-.49-2-.49-2s-2.2-.81-2.74-1.95-2.22-2.6-1.65-2.52a3.86 3.86 0 0 0 1.33-.63c.8-.47 1.82-1.15 2.65-1.71l1.54-1.06 1-.17c3.54-.51 15.06-1.82 17.74 2.44a6.57 6.57 0 0 1 .79 1.82c1.24 4.51-2.86 9.12-2.86 9.12z",
    fill: "#444053"
  }), _react.default.createElement("path", {
    d: "M777.91 303.8s3.82 2.16 5.25 2.16-5.25-2.16-5.25-2.16zM775.36 305.45s5.69 1.91 5.69 3.41.53-4.02-5.69-3.41zM761.75 296.84l.08.11c.08.11-.07-.09-.08-.11zM779.39 259.45l-.37.47-.21.26-1.29 1.63s-3.09 1-5.79 1.63-5.22 1-3.31-.64c1.19-1 1.26-2.64.83-4.41l.09-.11s-.09 1.64.89 1.68c1.31 0 1.32-.4 2.53-.91a8.17 8.17 0 0 0 3.61-2.62 26.52 26.52 0 0 0 3.02 3.02z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M784.73 304.51a2.82 2.82 0 0 1-2.09 0c-2.52-.82-6.5-2.78-8.37-1.92-1.5.69-7.53.67-9.75.09-.55-.14-.87-.32-.82-.53a1.49 1.49 0 0 0-.08-.72 13.06 13.06 0 0 0-1.49-2.76l.16-.62 1.66-1.51 2.25 3.66c3.54-.51 15.06-1.82 17.74 2.44a6.57 6.57 0 0 1 .79 1.87z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M786.37 302.61a2.76 2.76 0 0 1-3.49 1.46c-2.52-.82-6.5-2.78-8.37-1.92s-10.81.62-10.56-.44-2.2-4.39-2.2-4.39 1.33-.24 2.16-4.59c.12-.63.23-1.35.32-2.17a27.88 27.88 0 0 0 .14-5.06c-.33-4.7-2-6.63-2-6.63a5.46 5.46 0 0 1-.32-6.17c1-1.88 5.14-7.07 5.2-9.39 0-2.1 2.06-4.54 2.06-4.54s-.09 1.64.89 1.67c1.31 0 1.32-.4 2.53-.91 1.78-.75 3.61-2.07 3.73-3 0 0 7.45-.37 9.07 7.19s1.06 11.7.81 12.6-2.35 12.43-.64 17.31a16.77 16.77 0 0 1 .67 8.98z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M774.23 289.33a19.26 19.26 0 0 1-5.29 5.78 37.12 37.12 0 0 0-4.26.28c.12-.63.23-1.35.32-2.17a27.88 27.88 0 0 0 .14-5.06 1.85 1.85 0 0 0 1-1.18c.41-1.38 4-8 4-8s8.48-2.19 8.78 0-2.58 6.7-4.69 10.35z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M771.41 274.91s-5.11 9.68-5.51 11.06a1.87 1.87 0 0 1-1.73 1.38s-5.1 1.22-6.32 1.39-11.78 1-11.78 1-2.68.08-3-.89-5.48-5.58-8.48-1.49a3 3 0 0 0-.43 2.66c.55 1.76 1.68 4.54 2.9 2.81 1.7-2.44 3.69-1.75 3.69-.45s2.73.81 3.62 1c.48.1 2.16.54 3.62.93a26.26 26.26 0 0 0 5.15.86c2.87.19 7.12.34 8.62-.23a23.54 23.54 0 0 1 6.34-.88 2.15 2.15 0 0 0 1.24-.44 19.48 19.48 0 0 0 4.69-5.34c2.12-3.66 6.46-11.23 6.17-13.42s-8.79.05-8.79.05z",
    fill: "#efb7b9"
  }), _react.default.createElement("path", {
    d: "M773.13 261.48a64.55 64.55 0 0 0-4 7.81c-1.27 3.25-2.82 8.94-2.82 8.94l7.64-.9.64-1.06s5.46 3.42 4.81 4.88a12.81 12.81 0 0 0 1.3-6.34c-.17-4.14.58-11.54 0-13.33s-5.78-1.38-7.57 0z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M780.69 274.33c.16 4.14-1.95 7.8-1.3 6.33s-4.81-4.87-4.81-4.87l-.64 1.05-7.64.9s1.55-5.69 2.82-8.94a48.26 48.26 0 0 1 2.61-5.36c.78-1.42 1.4-2.44 1.4-2.44a8.63 8.63 0 0 1 5.06-1.18 7 7 0 0 1 .83.1 2.29 2.29 0 0 1 1.58.86 1.47 1.47 0 0 1 .1.22c.57 1.78-.18 9.18-.01 13.33z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M784.1 285.68s-3.23 4.45-4.21 4.57c0 0 4.15-.91 4.21-4.57zM784.1 292s-6.1 6.16-8 6.22 8-6.22 8-6.22zM784.1 294.58s-3.91 4.57-4.15 4.57 4.21-1.58 4.15-4.57zM780.6 260.78a5.33 5.33 0 0 1-1.79-.6c-.21-.11-.42-.23-.62-.36a14.5 14.5 0 0 1-2.22-1.83 9.58 9.58 0 0 1-2.71-3.77 8.89 8.89 0 0 1-.23-1.05c-.27-1.88 0-3.95-1.38-5.22a3.1 3.1 0 0 0-.86-.58c-1.9-.91-4.66-.32-6.07-1.95-.91-1-.88-2.47-1.58-3.59a7.53 7.53 0 0 0-1.35-1.36 8.78 8.78 0 1 1 12.1 12.2c.06.13.11.25.18.38a23.14 23.14 0 0 0 5.32 6.4l-.37.47a2.29 2.29 0 0 1 1.58.86z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M765.2 245.18c1.65 1.89 5.12.79 6.94 2.52 1.59 1.52 1 4.17 1.61 6.28a9.46 9.46 0 0 0 2.7 3.77c1.64 1.59 3.73 3.2 6 2.75 1.32-.27 2.62-1.26 3.89-.81a4.46 4.46 0 0 1 1.57 1.27 10.86 10.86 0 0 0 6 3.1 2.5 2.5 0 0 0 1.36-.07c.68-.27 1.05-1 1.67-1.42 1.22-.78 2.79 0 4 .72a28.33 28.33 0 0 0 23.28 1.71l-2-1c.42-.86 1.55-1.05 2.27-1.67 1.49-1.29.62-3.87-1-5.06s-3.61-1.59-5.24-2.7a1.36 1.36 0 0 1-.69-.91 1.45 1.45 0 0 1 .26-.82c.87-1.53 1.83-3.17 1.64-4.92-.3-2.67-3.23-4.33-5.92-4.51s-5.35.62-8 .67a5.32 5.32 0 0 1-2.84-.59c-1.17-.7-1.75-2-2.46-3.2a13.18 13.18 0 0 0-5.24-4.83c-2.44-1.23-5.2-1.66-7.73-2.67s-5-2.68-7.65-3.35c-3.94-1-8.15.3-11.55 2.51-1.63 1.06-6.86 4.46-6.81 6.64 0 1.29 1.71 2 2.34 3s.7 2.56 1.6 3.59z",
    fill: "#f44336"
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M818.14 251.61a1.49 1.49 0 0 0-.27.82.75.75 0 0 0 .09.29 10.21 10.21 0 0 0 1.58-4 15.81 15.81 0 0 1-1.4 2.89zM824.77 261.1c-.72.62-1.86.81-2.28 1.67l.7.34a7.65 7.65 0 0 0 1.33-.79 2.3 2.3 0 0 0 .76-1.9 2.06 2.06 0 0 1-.51.68zM801.19 262.07c-1.27-.7-2.84-1.5-4-.72-.62.4-1 1.15-1.67 1.43a2.61 2.61 0 0 1-1.36.06 10.77 10.77 0 0 1-6-3.1 4.55 4.55 0 0 0-1.57-1.27c-1.27-.45-2.57.54-3.9.81-2.23.46-4.32-1.16-6-2.75a9.46 9.46 0 0 1-2.7-3.77c-.66-2.11 0-4.76-1.62-6.28-1.82-1.73-5.28-.63-6.93-2.52-.9-1-.88-2.47-1.58-3.59-.58-.95-2.1-1.63-2.31-2.77a2 2 0 0 0-.27 1c0 1.29 1.72 2 2.34 3s.67 2.56 1.57 3.59c1.66 1.89 5.12.79 6.94 2.52 1.59 1.52 1 4.17 1.61 6.28a9.56 9.56 0 0 0 2.7 3.77c1.64 1.59 3.73 3.2 6 2.75 1.33-.27 2.62-1.26 3.9-.81a4.51 4.51 0 0 1 1.56 1.27 10.9 10.9 0 0 0 6 3.1 2.5 2.5 0 0 0 1.36-.07c.68-.27 1.05-1 1.67-1.42 1.22-.78 2.79 0 4 .72a28.33 28.33 0 0 0 23.29 1.7l-1.36-.67a28.4 28.4 0 0 1-21.67-2.26z"
  })), _react.default.createElement("path", {
    d: "M740.94 325.33l-2-1V324a11.28 11.28 0 0 1 2.9.46c-.96.11-.92.72-.9.87z",
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 739.16,
    cy: 296.9,
    rx: 4.94,
    ry: 6.01,
    fill: primaryColor
  }), _react.default.createElement("path", {
    fill: "#dda2a6",
    d: "M786.7 289.08l7.94 7.83 26.11-.46-7.18-7.37H786.7z"
  }), _react.default.createElement("path", {
    fill: "#b77b7f",
    d: "M786.7 315.87v-26.79l7.94 7.83v26.21l-7.94-7.25z"
  }), _react.default.createElement("path", {
    fill: "#dda2a6",
    d: "M820.75 296.45v26.67h-26.11v-26.21l26.11-.46z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    opacity: 0.3,
    d: "M820.75 296.45v26.67h-26.11v-26.21l26.11-.46z"
  }), _react.default.createElement("path", {
    fill: "#dce0ed",
    d: "M796.77 304.25l19.41-3.33 2.53 12.74-19.99 3.67-1.95-13.08z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M800.6 307.23l13.05-2.05.33 1.7-13.05 2.21-.33-1.86zM804.19 310.87l7.42-1.08.33 1.89-7.75 1.09v-1.9z"
  }), _react.default.createElement("path", {
    fill: "#65617d",
    d: "M789.91 303.14l.36-10.55 2.04 2.02-.36 10.57-2.04-2.04z"
  }), _react.default.createElement("path", {
    fill: "#65617d",
    d: "M816.2 291.78l-25.09.34-.84.47 2.04 2.02.7-.42 24.85-.71-1.66-1.7z"
  }));
};

UndrawBusStop.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawBusStop;
exports.default = _default;