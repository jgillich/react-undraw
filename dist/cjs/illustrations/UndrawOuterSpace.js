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

var UndrawOuterSpace = function UndrawOuterSpace(_props) {
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
    viewBox: "0 0 1135.18 814.22",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 277.46,
    y1: 697.11,
    x2: 277.46,
    y2: 669.52,
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
    id: "prefix__c",
    x1: 748.15,
    y1: 567.16,
    x2: 748.15,
    y2: 544.13,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 556.93,
    y1: 707.16,
    x2: 556.93,
    y2: 42.89,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__b",
    x1: 456.95,
    y1: 628.14,
    x2: 456.95,
    y2: 692.54,
    gradientUnits: "userSpaceOnUse"
  }, _react.default.createElement("stop", {
    offset: 0,
    stopColor: "#e0e0e0"
  }), _react.default.createElement("stop", {
    offset: 0.31,
    stopColor: "#fccc63"
  }), _react.default.createElement("stop", {
    offset: 0.77,
    stopColor: "#f55f44"
  })), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 534.05,
    y1: 628.14,
    x2: 534.05,
    y2: 692.54,
    xlinkHref: "#prefix__b"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 582.35,
    y1: 628.14,
    x2: 582.35,
    y2: 692.54,
    xlinkHref: "#prefix__b"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__g",
    x1: 660.3,
    y1: 628.14,
    x2: 660.3,
    y2: 692.54,
    xlinkHref: "#prefix__b"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__h",
    x1: 766.05,
    y1: 409.23,
    x2: 766.05,
    y2: 340.57,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__i",
    x1: 331.05,
    y1: 577.85,
    x2: 331.05,
    y2: 529.94,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M991 708.36a139.92 139.92 0 0 1-27.7-.37c-101.12-11.18-238.82-8-351.07 61.55-155.24 96.17-398.53 13.84-505.85-30.95-82-34.21-124.57-118-99-196.65.36-1.11.73-2.22 1.12-3.33 16.09-46.74 47.85-83.32 87.18-102.71 34.28-16.9 84.33-52.19 106.6-120 9.2-28 21.82-54.34 38.21-77.3 43.89-61.49 135.77-153.06 293.79-152.49a254.66 254.66 0 0 1 81.41 13.78c57.73 19.67 109.87 59.66 149.63 115.1 25.37 35.36 63.39 68.23 117.82 70.91 75.54 3.74 147.63 38.91 201.71 101.5 1.56 1.8 3.1 3.61 4.64 5.44 96.29 114.71 29.41 304.34-98.49 315.52z",
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 277.46,
    cy: 683.31,
    r: 13.8,
    fill: "url(#prefix__a)",
    opacity: 0.7
  }), _react.default.createElement("circle", {
    cx: 277.46,
    cy: 683.31,
    r: 13.18,
    opacity: 0.2
  }), _react.default.createElement("circle", {
    cx: 203.11,
    cy: 414.14,
    r: 5.1,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 567.11,
    cy: 710.14,
    r: 5.1,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 352.11,
    cy: 736.14,
    r: 2.85,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 983.11,
    cy: 598.14,
    r: 2.85,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 820.11,
    cy: 342.14,
    r: 2.85,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 1051.11,
    cy: 467.14,
    r: 2.85,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 293.11,
    cy: 247.14,
    r: 5.1,
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M152.94 592.21h-4.54v-4.54h-1.85v4.54h-4.54v1.85h4.54v4.53h1.85v-4.53h4.54v-1.85zM266.94 590.21h-4.54v-4.54h-1.85v4.54h-4.54v1.85h4.54v4.53h1.85v-4.53h4.54v-1.85zM429.94 682.21h-4.54v-4.54h-1.85v4.54h-4.54v1.85h4.54v4.53h1.85v-4.53h4.54v-1.85zM656.97 130.71h-2.07v-2.07h-.84v2.07h-2.07v.84h2.07v2.07h.84v-2.07h2.07v-.84zM951.97 320.71h-2.07v-2.07h-.84v2.07h-2.07v.84h2.07v2.07h.84v-2.07h2.07v-.84zM777.97 444.71h-2.07v-2.07h-.84v2.07h-2.07v.84h2.07v2.07h.84v-2.07h2.07v-.84zM69.97 522.71H67.9v-2.07h-.84v2.07h-2.07v.84h2.07v2.07h.84v-2.07h2.07v-.84zM154.97 692.71h-2.07v-2.07h-.84v2.07h-2.07v.84h2.07v2.07h.84v-2.07h2.07v-.84zM421.97 155.71h-2.07v-2.07h-.84v2.07h-2.07v.84h2.07v2.07h.84v-2.07h2.07v-.84zM295.97 454.71h-2.07v-2.07h-.84v2.07h-2.07v.84h2.07v2.07h.84v-2.07h2.07v-.84zM322.97 368.71h-2.07v-2.07h-.84v2.07h-2.07v.84h2.07v2.07h.84v-2.07h2.07v-.84z"
  }), _react.default.createElement("circle", {
    cx: 748.15,
    cy: 555.65,
    r: 11.52,
    fill: "url(#prefix__c)",
    opacity: 0.7
  }), _react.default.createElement("circle", {
    cx: 748.15,
    cy: 555.65,
    r: 10.67,
    opacity: 0.2
  }), _react.default.createElement("circle", {
    cx: 776.88,
    cy: 630.76,
    r: 11.93,
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M702.38 349.92a154.77 154.77 0 0 0-17.5-72c-5.49-10.44-10.5-16.92-14.36-20.91a10.25 10.25 0 0 0-11.74-2.26 10.64 10.64 0 0 0-4.11 2.65c-5.21 5.4-9.92 12.54-14 20.13a155.43 155.43 0 0 0-18.37 74v15.48h-9.93V187c0-37.72-8.44-74.93-25-107.93-7.84-15.64-15-25.36-20.49-31.33a14.2 14.2 0 0 0-21.35 0c-7.44 8.09-14.16 18.79-20 30.16-17.39 33.72-26.22 72-26.22 110.82v178.22h-8.58v-16.23a155.39 155.39 0 0 0-18.37-73.95c-4.11-7.59-8.82-14.73-14-20.13a10.27 10.27 0 0 0-12-2.18l.36.19a10.76 10.76 0 0 0-3.35 2.34c-3.85 4-8.86 10.47-14.35 20.91a154.77 154.77 0 0 0-17.5 72v269h30.64L438.78 641v66.13h25.06V641l-3.35-22.12h30.2v-245h8.58v243.94h24.47L520.23 641v66.13h25.06V641l-3.51-23.21h33L571.25 641v66.13h25.06V641l-3.51-23.21h19.54V373.91h9.93v245.37h8.05v-.37h26.62L653.6 641v66.13h25.06V641l-3.35-22.12h27.07z",
    transform: "translate(-32.41 -42.89)",
    fill: "url(#prefix__d)",
    opacity: 0.7
  }), _react.default.createElement("path", {
    fill: "#535461",
    d: "M436.4 585.25h-23.73l4.24-28.81h15.25l4.24 28.81z"
  }), _react.default.createElement("path", {
    d: "M415.73 567.88h17.61l-1.18-8.05h-15.25l-1.18 8.05z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "#535461",
    d: "M639.75 585.25h-23.72l4.23-28.81h15.26l4.23 28.81z"
  }), _react.default.createElement("path", {
    d: "M619.08 567.88h17.62l-1.18-8.05h-15.26l-1.18 8.05z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "#535461",
    d: "M513.5 585.25h-23.72l4.23-28.81h15.26l4.23 28.81z"
  }), _react.default.createElement("path", {
    d: "M492.83 567.88h17.62l-1.18-8.05h-15.26l-1.18 8.05z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "#535461",
    d: "M561.8 585.25h-23.72l4.23-28.81h15.25l4.24 28.81z"
  }), _react.default.createElement("path", {
    d: "M541.13 567.88h17.62l-1.19-8.05h-15.25l-1.18 8.05z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "#535461",
    d: "M436.4 318.35h169.46v6.78H436.4z"
  }), _react.default.createElement("path", {
    d: "M632.05 211.27a9.55 9.55 0 0 0-14.16 0c-4.93 5.26-9.39 12.21-13.28 19.6a154.77 154.77 0 0 0-17.39 72v260.84h75V301.77a154.22 154.22 0 0 0-16.57-70.14c-5.21-10.16-9.95-16.52-13.6-20.36zM416.98 211.27a9.55 9.55 0 0 1 14.16 0c4.94 5.26 9.39 12.21 13.29 19.6a154.89 154.89 0 0 1 17.39 72v260.84h-75V301.77a154.22 154.22 0 0 1 16.57-70.14c5.2-10.16 9.94-16.52 13.59-20.36z",
    fill: "#e0e0e0"
  }), _react.default.createElement("path", {
    fill: "#535461",
    d: "M387.25 307.33l17.8.09v21.94h-17.8v-22.03zM444.02 307.33l17.8.09v21.94h-17.8v-22.03zM587.22 307.33l17.79.09v21.94h-17.79v-22.03zM643.99 307.33l17.79.09v21.94h-17.79v-22.03z"
  }), _react.default.createElement("path", {
    d: "M444.43 230.53c-3.9-7.39-8.35-14.34-13.29-19.6a9.51 9.51 0 0 0-11.33-2.13 10.11 10.11 0 0 1 2.86 2.13c4.93 5.26 9.39 12.21 13.28 19.6a154.75 154.75 0 0 1 17.39 72v260.82h8.48V302.54a154.88 154.88 0 0 0-17.39-72.01zM611.39 231.25c3.89-7.39 8.35-14.34 13.28-19.6a9.92 9.92 0 0 1 3.28-2.34 9.54 9.54 0 0 0-10.9 2.34c-4.94 5.26-9.4 12.21-13.29 19.6a154.89 154.89 0 0 0-17.39 72v260.86H594V303.27a154.77 154.77 0 0 1 17.39-72.02z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M457.27 692.54h-.65A11.54 11.54 0 0 1 445.08 681v-52.86h23.73V681a11.54 11.54 0 0 1-11.54 11.54z",
    transform: "translate(-32.41 -42.89)",
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    d: "M534.38 692.54h-.66A11.54 11.54 0 0 1 522.19 681v-52.86h23.72V681a11.54 11.54 0 0 1-11.53 11.54z",
    transform: "translate(-32.41 -42.89)",
    fill: "url(#prefix__e)"
  }), _react.default.createElement("path", {
    d: "M582.67 692.54H582A11.54 11.54 0 0 1 570.49 681v-52.86h23.72V681a11.54 11.54 0 0 1-11.54 11.54z",
    transform: "translate(-32.41 -42.89)",
    fill: "url(#prefix__f)"
  }), _react.default.createElement("path", {
    d: "M660.63 692.54H660A11.54 11.54 0 0 1 648.44 681v-52.86h23.72V681a11.54 11.54 0 0 1-11.53 11.54z",
    transform: "translate(-32.41 -42.89)",
    fill: "url(#prefix__g)"
  }), _react.default.createElement("path", {
    d: "M533.93 6.75a13.2 13.2 0 0 0-20.21 0c-7 7.88-13.4 18.29-19 29.37-16.46 32.84-24.82 70.12-24.82 107.92v418.61h107V142.36c0-36.73-8-73-23.64-105.1-7.35-15.23-14.12-24.7-19.33-30.51z",
    fill: "#eee"
  }), _react.default.createElement("rect", {
    x: 494.79,
    y: 53.25,
    width: 55.84,
    height: 25.59,
    rx: 11,
    fill: "#535461"
  }), _react.default.createElement("path", {
    d: "M470.48 158.35h105.91v4.11H470.48z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M793.45 354.22a34.62 34.62 0 0 0-10.22-9 34.33 34.33 0 1 0-17.17 64.07c.73 0 1.46 0 2.17-.08a34.32 34.32 0 0 0 25.23-54.93z",
    transform: "translate(-32.41 -42.89)",
    fill: "url(#prefix__h)"
  }), _react.default.createElement("path", {
    d: "M766.09 332.01a32.45 32.45 0 0 1-30.4 32.38c-.67 0-1.36.07-2.05.07a32.46 32.46 0 1 1 16.23-60.56 32.59 32.59 0 0 1 9.66 8.56 32.3 32.3 0 0 1 6.56 19.55z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M725.65 311.42a34.88 34.88 0 0 0-4.84 2.55 7.61 7.61 0 0 0-2.59 2.32 3 3 0 0 0-.06 3.31c.79 1.08 2.31 1.24 3.65 1.32a9.34 9.34 0 0 0 4.18-.42 9 9 0 0 0 2.44-1.77l2.79-2.53c1-.88 2-2.09 1.61-3.33a3 3 0 0 0-2.37-1.6 9.92 9.92 0 0 0-7 1.23",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 714,
    cy: 344.82,
    r: 1.71,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 748.72,
    cy: 334,
    r: 6.26,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M759.59 312.46a8.54 8.54 0 1 1-9.67-8.56 32.59 32.59 0 0 1 9.67 8.56zM760.17 350.69a32.37 32.37 0 0 1-24.48 13.7c0-.45-.06-.9-.06-1.36a15.38 15.38 0 0 1 24.54-12.34z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M350.17 539.47a24.15 24.15 0 0 0-7.14-6.32 24 24 0 1 0-12 44.7c.51 0 1 0 1.52-.05a24 24 0 0 0 17.6-38.33z",
    transform: "translate(-32.41 -42.89)",
    fill: "url(#prefix__i)"
  }), _react.default.createElement("path", {
    d: "M321.28 511.01a22.64 22.64 0 0 1-21.21 22.59h-1.43a22.64 22.64 0 1 1 11.32-42.25 22.67 22.67 0 0 1 6.74 6 22.52 22.52 0 0 1 4.58 13.66z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M293.06 496.65a23.5 23.5 0 0 0-3.37 1.77 5.54 5.54 0 0 0-1.81 1.62 2.13 2.13 0 0 0 0 2.31 3.23 3.23 0 0 0 2.54.92 6.51 6.51 0 0 0 2.92-.29 6.29 6.29 0 0 0 1.71-1.24l1.94-1.76c.68-.62 1.42-1.46 1.12-2.32a2 2 0 0 0-1.65-1.12 6.87 6.87 0 0 0-4.87.86",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 284.93,
    cy: 519.94,
    r: 1.19,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 309.16,
    cy: 512.4,
    r: 4.37,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M316.71 497.37a6 6 0 1 1-6.75-6 22.67 22.67 0 0 1 6.75 6zM317.15 524.04a22.59 22.59 0 0 1-17.08 9.56v-1a10.73 10.73 0 0 1 17.12-8.61z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M837.69 539.42l21.8 11.6-17.02 19.04"
  }), _react.default.createElement("circle", {
    cx: 954.9,
    cy: 428.23,
    r: 1.84,
    fill: "#fff"
  }));
};

UndrawOuterSpace.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawOuterSpace;
exports.default = _default;