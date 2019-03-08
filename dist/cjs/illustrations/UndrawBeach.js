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

var UndrawBeach = function UndrawBeach(_props) {
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
    viewBox: "0 0 1077.99 858.58",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 303.23,
    y1: 380.44,
    x2: 303.23,
    y2: 379.07,
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
    x1: 303.23,
    y1: 379.75,
    x2: 303.23,
    y2: 378.38,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 347.52,
    y1: 736.02,
    x2: 347.52,
    y2: 366.17,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 355.14,
    y1: 565.29,
    x2: 355.14,
    y2: 531.2,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 266.1,
    y1: 444.08,
    x2: 266.1,
    y2: 444.08,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M963.79 469.58c-39.2 65.34-33 153.7-16.87 223.23 5.4 23.28 11.64 47.85 6.51 74-6.27 32-28.11 57.35-50.09 71.94-40.07 26.6-85.48 26.39-118.23-.53-28.3-23.27-46.65-64.19-75.56-86.19-48.38-36.74-115.56-13.35-174.08 22.26-41.41 25.19-87 57-124.82 39.76-26.6-12.16-42.87-47.16-50.22-85.36-3.55-18.45-5.59-38.61-14.05-52.6-5-8.32-12-13.84-19.27-18.34-66.19-41.14-156.77-5-220.52-51.75-43.06-31.54-67-97.43-74.32-168.11s.19-146.48 9.38-221.14c6.54-53.06 15.22-109.89 42.34-153.31 28.74-45.93 73.46-66.81 112.1-63s71.92 29 100.52 59.93c35.74 38.61 67.81 88.08 114.5 100.13 31.79 8.2 66.74-2.13 100.68-8.14 56.73-10.05 112.53-8 167.94-5.13 53 2.76 106.39 6.35 155.63 25.27 34.84 13.39 61.38 41.79 93.83 60.07 21.15 11.92 45.15 13.19 64.81 29.18 24.21 19.7 44.94 56.37 34.63 103.12-9.77 44.42-44.03 70.03-64.84 104.71z",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M631.12 467.46c0 32.75-21.07 60.32-49.73 68.51a64.58 64.58 0 0 1-34.23.35c-29.29-7.74-51-35.63-51-68.86 0-35.2 24.33-64.41 56.27-70a64.64 64.64 0 0 1 23.06.12c31.63 5.87 55.63 34.93 55.63 69.88z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M581.39 535.98a64.58 64.58 0 0 1-34.23.35c-29.69-67.45-8.15-117.26 5.29-138.88a64.64 64.64 0 0 1 23.06.12c49.82 47.72 26.77 105.34 5.88 138.41z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M581.39 535.98a64.58 64.58 0 0 1-34.23.35c-29.69-67.45-8.15-117.26 5.29-138.88a64.64 64.64 0 0 1 23.06.12c49.82 47.72 26.77 105.34 5.88 138.41z",
    fill: "#fff",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M172.65 442.96s86 16 148-68c0 0-52-51-88-40s-60 76-60 76z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M172.65 442.96s86 16 148-68c0 0-52-51-88-40s-60 76-60 76z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "#504f60",
    d: "M211.66 374.96l87.99 181 21-11-90.99-170h-18z"
  }), _react.default.createElement("path", {
    d: "M320.65 374.96a195 195 0 0 0-47.22 6.33 204.35 204.35 0 0 0-59.92 26.7c-26.61 17.33-40.86 35-40.86 35-63.45-111.55-49.26-312.7-48.07-328.1V113.97c42.07-.01 196.07 260.99 196.07 260.99z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M1076.12 591.75l-97.47 26.21s-150 3-202 48-203 40-207 40-60-49-162 2-224 19-224 19-127 53-163 35-14-42-14-42 74-57 17-120 10-63 10-63h192.79a95.77 95.77 0 0 0 45.21-10.87c15.06-8.05 32.78-5.48 44.64-2.09a71.38 71.38 0 0 0 31.54 1.7c96.77-16.41 158.52-11.71 184.16-8.13a143 143 0 0 0 32.23.79c32.7-2.85 100.56-8.9 137.41-13.28 10.14-1.2 17.93-2.27 22-3.12 11.4-2.38 65.22 8.11 119.66 22.14 60.16 15.49 121.09 35.31 126.34 46.86 7.24 15.92 71.05 16.65 105.76 15.84a2.52 2.52 0 0 1 .73 4.95z",
    fill: "#eed1d7"
  }), _react.default.createElement("path", {
    d: "M696.65 664.96l-24 5s-95-51-108-34M672.65 518.96s-154-31-218 6",
    fill: "#ccb2bb"
  }), _react.default.createElement("path", {
    d: "M556.78 574.67s-38.5-15.74-36.82-6.74 21.36 18 21.36 18-38.78-3.37-37.1 10.12c0 0 44.4-1.12 42.72 9s0 23.61 7.31 20.8 11.8-35.41 31.48-19.67 16.86-16.3-7.31-19.11c0 0 12.93-9.56 11.8-14.05s-33.44 1.65-33.44 1.65z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M556.22 572.98s-38.5-15.74-36.82-6.74 21.36 18 21.36 18-38.78-3.37-37.1 10.12c0 0 44.4-1.12 42.72 9s0 23.61 7.31 20.8 11.8-35.41 31.48-19.67 16.86-16.3-7.31-19.11c0 0 12.93-9.56 11.8-14.05s-33.44 1.65-33.44 1.65z",
    fill: "#f89898"
  }), _react.default.createElement("path", {
    d: "M855.65 603.96s-55-17-60-14M428.65 618.96s74-21 102-5",
    fill: "#ccb2bb"
  }), _react.default.createElement("path", {
    d: "M551.15 533.46s20-59 60-47 70 43 70 43l-130 10z",
    fill: "#eed1d7"
  }), _react.default.createElement("path", {
    d: "M116.15 599.46s31 13 83 8 93 26 93 26",
    fill: "#ccb2bb"
  }), _react.default.createElement("path", {
    d: "M273.43 381.29a204.35 204.35 0 0 0-59.92 26.7l-88.93-293.1-.43-1.42.47.84z",
    fill: "#fff",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M692.99 474.49s62.88-29.2 111.86 17.54c0 0-30.71 34.36-43.86 28.51s-52.64-16.08-57-27.05a80.7 80.7 0 0 0-11-19z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M692.99 474.49s62.88-29.2 111.86 17.54c0 0-30.71 34.36-43.86 28.51s-52.64-16.08-57-27.05a80.7 80.7 0 0 0-11-19z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M797.99 526.5l-3.34 12.71-1.37 5.21-13.29 50.7h-85.53v-82.53c7.41-.88 13.11-1.66 16.08-2.28 8.34-1.74 47.68 5.98 87.45 16.19z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M804.85 492.03l-1 3.92-10.63 40.34-1.37 5.21-13.32 50.69h-85.54v-117.7q1.84 1.21 3.67 2.32c52.77 32.34 102.68 17.06 107.76 15.37z",
    fill: primaryColor
  }), _react.default.createElement("g", {
    opacity: 0.1,
    fill: "#fff"
  }, _react.default.createElement("path", {
    d: "M804.33 494.01l.52-2-.42.15c-2.39.79-14.72 4.6-32.6 5a131.1 131.1 0 0 0 32.5-3.15zM696.67 476.81q-1.83-1.11-3.67-2.32v117.7h6.58V478.55c-.97-.57-1.94-1.14-2.91-1.74z"
  })), _react.default.createElement("path", {
    d: "M819.76 517.45c-1.37 9.63-10.75 17.71-27.91 24.05q-1.16.44-2.37.86a50.65 50.65 0 0 1-16.71 2.87c-18.11 0-36.52-9.89-54.09-29.23a192.43 192.43 0 0 1-25.69-36.71v-4.8q1.84 1.21 3.67 2.32a191 191 0 0 0 25.33 36.29c22 24.22 44.24 32.67 66 25.11 1.81-.63 3.53-1.27 5.17-1.93 13.68-5.51 21.14-12 22.2-19.45 1.33-9.35-8-18-11.59-20.89-.8-.65-1.3-1-1.33-1l1.94-2.74.59-.84c.74.46 16.78 11.98 14.79 26.09z",
    fill: "#504f60"
  }), _react.default.createElement("circle", {
    cx: 830.15,
    cy: 261.46,
    r: 66,
    fill: "#ffdf9c"
  }), _react.default.createElement("path", {
    d: "M303.07 380.44a2.35 2.35 0 0 0 .33-1.37 8.57 8.57 0 0 0-.33 1.37z",
    transform: "translate(-61.01 -20.71)",
    fill: "url(#prefix__a)",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M303.07 379.75a2.35 2.35 0 0 0 .33-1.37 8.57 8.57 0 0 0-.33 1.37z",
    transform: "translate(-61.01 -20.71)",
    fill: "url(#prefix__b)",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M605.17 697.76c-1.56.78-14.37-1.09-25.19-2.86 5.83-1.33 10.1-3.1 12.11-5.41 11.63-13.37-39.6-5.63-55.8-2.9l-13-2.61-14.6-3.37c-10.07-14.15-25.33-42.85-32.72-57.08 2.45-.55 4-.82 4-.82-.12-.45-.24-.88-.36-1.31l.36-.06c-13.77-52.32-37.17-44.75-37.17-44.75-2.8 0-6.91 1.21-11.77 3.19a111.44 111.44 0 0 0-6.08-16.22l-.57-1.23 2.59.49s-.13-.36-.4-1h.24l.57.11h.35l.6.12s-18.9-51.29-59.08-82.15a72.69 72.69 0 0 0-36.75-14.89c-.71-.07-1.4-.13-2.09-.18h-.62l-1.54-.07h-1.08c-9.12-.13-15.77 2.12-23.45 6-1.4.69-2.83 1.43-4.31 2.24a31.21 31.21 0 0 1-3.42-.61q-.92-.22-1.8-.51a38.56 38.56 0 0 0 19.71-49.81 26.28 26.28 0 0 1 11.93-10.95 3.85 3.85 0 0 0 1.64-1.09 3.59 3.59 0 0 0 .46-2.06v-.36-.3A13.28 13.28 0 0 0 316.46 394a21.07 21.07 0 0 1-5.52-1.59c-4.27-1.94-7.76-6.27-8-10.76a8.76 8.76 0 0 1 .11-1.2l-.1.15c0-.28.06-.56.1-.84a4 4 0 0 1-5.44 1 6.24 6.24 0 0 1-2.15-4.93 11.4 11.4 0 0 1 .16-1.54 21.84 21.84 0 0 0 .52-4.31c.07-1.53-.22-2.93-1.46-3.74-2.63 3.24-6.89 4.78-11 5.11s-8.32-.4-12.45-.95c-10.23-1.4-21.72-1.25-29.41 5.6-5 4.45-7.53 11-9.87 17.26-3.31 8.86-6.62 18.48-6.52 27.72a30.7 30.7 0 0 0 2.41 12.59c3.22 7.42 9.76 13.28 11.76 21.12a22.38 22.38 0 0 0 1.57 5.35c1.81 3.31 6 4.64 9.81 4.13a38.75 38.75 0 0 0 4.6 3.91c0 .43-.07.87-.11 1.3-.26 2.71-.62 5.39-1.12 8-.31-.44-.73-.2-2-.2h-.54l-.5.06-.54.09h-.12l-.63.13-.69.17h-.09l-.77.21-.84.24c-2.4.72-5.32 1.77-8.4 3A37.74 37.74 0 0 0 229 460.84a20.6 20.6 0 0 0 2.59-4.79c1-2.8 0-4.73-1.84-6.39a38.22 38.22 0 0 0-5.43-4.21 79.73 79.73 0 0 0-28.19-13.31 29 29 0 0 0-10.07-1.05 29.55 29.55 0 0 0-9.16 2.93 87.69 87.69 0 0 0-13.24 7.65c-2.81 2-5.57 4.14-8.81 5.26-4.87 1.69-10.5.9-15 3.44-6.28 3.55-7.69 12.07-6.76 19.23s3.47 14.29 2.34 21.42c-1.69 10.67-10.94 18.25-19.44 24.91-2.68 2.1-5.55 4.56-6 7.94-.26 2.11.52 4.19 1.17 6.22a52.86 52.86 0 0 1-.53 34.06 47.6 47.6 0 0 1-22.23 25.61c-3.91 2-8.65 4.13-9.56 8.44-.62 2.9.75 5.46 3 7.51a20.55 20.55 0 0 0 7.72 4.84 69.48 69.48 0 0 0 13.22 3.45c4 .63 8.21.87 11.83-.87 4.21-2 6.78-6.32 9-10.43 5.69-10.5 12.23-17.49 17.63-25.94.71 3.09 1.29 5.24 1.32 5.36-4.48 4-6.58 10.68-4.13 21.36 9.64 42 22 52.32 22 52.32a14.6 14.6 0 0 1 2.55-6.29l.55.66c5.88 7.14 12.63 14.57 18.24 18.7a95.9 95.9 0 0 1 17.31 16.45 3.45 3.45 0 0 1-1.18 5.27c-8.83 4.3-28.13 15.34-5.11 20.27s41.8-8.12 48.39-13.57a3.46 3.46 0 0 0 .5-4.83l-21-26.2-2.51-3.26c1.39 1 2.8 2 4.26 3.08l-3.74-6 11.84 1.23c.34.72.69 1.43 1 2.11 2.36 4.85 4.86 8.63 7.46 10.74a25.43 25.43 0 0 0 3.36 13.93c9.45 17.13 61.48 17 76.06 16.65a34 34 0 0 0 4.1.4 34.31 34.31 0 0 0 6.79-.45l.48-.08a17.49 17.49 0 0 0 7.84-3.22l20.71-4.14.47.11c11.69 2.41 33.93 6.26 46.7 3.81 12.24-2.35 19.33 1.73 22.59 4.55a38 38 0 0 1-1.25 3.71h.18c-.81 1.8-3.83 10.5 8.43 20.31 8 6.4 62.54 8.07 81.23 4.13 13.46-2.84-5.67-11-8.26-11-5.87 0-24.09-12.36-26-13.65l-2-2.68c12.67 1.69 35 4.37 39.37 2.9 6.2-2.07 33.73 1.38 33.73 1.38s37.17 8.26 55.07 2.75-.66-17.18-3.42-15.81z",
    transform: "translate(-61.01 -20.71)",
    fill: "url(#prefix__c)"
  }), _react.default.createElement("path", {
    d: "M362.17 552.52c-2.17.93-7.33 5.79-14 12.77-2.13-14-3.5-26.64-2.61-31.89a4.73 4.73 0 0 1 .79-2.19c4-.27 12.18 9.77 18.71 18.86-1.84 1.44-2.89 2.45-2.89 2.45z",
    transform: "translate(-61.01 -20.71)",
    fill: "url(#prefix__d)",
    opacity: 0.05
  }), _react.default.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M266.1 444.08z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M407.99 593.11s35 69.42 43.81 72.12 14.83-1.35 14.83-1.35 72.79-13.48 59.31 2-131.43 6.07-131.43 6.07l-29.62-66.66z",
    fill: "#ef91a3"
  }), _react.default.createElement("path", {
    d: "M307.6 594.46s56.62-37.74 72.12-37.74c0 0 22.92-7.41 36.4 43.81 0 0-46.51 8.09-45.83 30.33l-8.76-18.87-37.74 41.79-45.83-31z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M307.6 593.11s56.62-37.74 72.12-37.74c0 0 22.92-7.41 36.4 43.81 0 0-46.51 8.09-45.83 30.33l-8.76-18.87-37.74 41.79-45.83-31z",
    fill: "#5d526e"
  }), _react.default.createElement("path", {
    d: "M369.6 574.24c-3.37 16.18-20.89 18.87-20.89 18.87l-24.94-15.5s-3.52-23.22-6.49-37.37c-1.14-5.44-2.2-9.54-2.95-10.48-2.7-3.37 39.77-2.7 39.77-2.7a167 167 0 0 1 8.13 15.55c4.62 10.11 9.17 22.99 7.37 31.63zM261.76 452.29l-14.15 67.4-34.37-8.76s-31.68-24.99-22.25-40.49c3.09-5.07 4.66-12.44 5.38-20.07 1.48-15.71-.66-32.51-.66-32.51s37.74-10.11 30.33 17.52c-3 11.35 2.43 16.22 9.95 18 10.79 2.61 25.77-1.09 25.77-1.09z",
    fill: "#ef91a3"
  }), _react.default.createElement("path", {
    d: "M235.99 453.41a37.51 37.51 0 0 1-17.36 4.23c-8.32 0-16.34-5.21-22.58-9.77a154 154 0 0 0-.34-30s37.74-10.11 30.33 17.52c-3.05 11.35 2.43 16.22 9.95 18.02z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 218.63,
    cy: 418.54,
    r: 37.74,
    fill: "#ef91a3"
  }), _react.default.createElement("path", {
    d: "M215.8 497.29l10.24 14.28 5.82-21.11a105.06 105.06 0 0 0 3.53-25.88 17.78 17.78 0 0 1 3.46-10.29c10.5-5.73 18.3-8.75 31.54-7.39a71.18 71.18 0 0 1 36 14.58c39.34 30.22 57.84 80.43 57.84 80.43s-53.94-10.81-51.24 1.32c0 0-23.59-37.74-29-31.68s11.46 86.27 11.46 86.27l-110.54 8.09-29-76.84 1.35-57.29s28.65-13.14 34.71-13.14c2.12 0 1.8-.74 2.7 2.7 3.49 13.24 13.16 24.82 21.13 35.95z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M362.23 542.61c-9.38-1.69-35.93-6-44.95-2.37-1.14-5.44-2.2-9.54-2.95-10.48-2.7-3.37 39.77-2.7 39.77-2.7a167 167 0 0 1 8.13 15.55z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M217.15 496.6l10.24 14.28 5.82-21.11a105.06 105.06 0 0 0 3.53-25.88 17.78 17.78 0 0 1 3.45-10.29c10.5-5.73 18.3-8.75 31.54-7.39a71.18 71.18 0 0 1 36 14.58c39.34 30.22 57.84 80.43 57.84 80.43s-53.92-10.78-51.22 1.35c0 0-23.59-37.74-29-31.68s11.46 86.27 11.46 86.27l-110.54 8.13-29-76.84 1.35-57.29s28.65-13.14 34.71-13.14c2.12 0 1.8-.74 2.7 2.7 3.48 13.19 13.15 24.77 21.12 35.88z",
    fill: "#dfecfb"
  }), _react.default.createElement("path", {
    d: "M192.42 445.21c-3.79.68-8.2-.6-10-4a21.91 21.91 0 0 1-1.54-5.24c-2-7.68-8.36-13.41-11.51-20.68-5.31-12.25-.65-26.29 4-38.8 2.3-6.14 4.77-12.54 9.67-16.9 7.53-6.7 18.77-6.86 28.76-5.54 4 .53 8.12 1.25 12.19.93s8.24-1.83 10.82-5c2.17 1.41 1.37 4.67.92 7.21s-.08 5.46 2 7 5.82.27 5.65-2.27c-1.82 5.4 2.2 11.37 7.39 13.72a20.63 20.63 0 0 0 5.41 1.56 13 13 0 0 1 11.07 13.09v.06a3.52 3.52 0 0 1-.45 2 3.77 3.77 0 0 1-1.6 1.06 25.71 25.71 0 0 0-12.15 11.6c-1.4 2.73-2.45 5.89-5 7.56-3.17 2-7.31 1-11.07 1.32a15.71 15.71 0 0 0-13.56 11.13c-.87 3.12-.76 6.52-2.71 9.3a5.3 5.3 0 0 1-3.69 2.32c-2.92.32-4.27-2.31-6.36-3.66-4.93-3.18-8.07 1-9.63 5-1.74 4.31-2.93 6.22-8.61 7.23z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M192.42 444.53c-3.79.68-8.2-.6-10-4a21.91 21.91 0 0 1-1.54-5.24c-2-7.68-8.36-13.41-11.51-20.68-5.31-12.25-.65-26.29 4-38.8 2.3-6.14 4.77-12.54 9.67-16.9 7.53-6.7 18.77-6.86 28.76-5.54 4 .53 8.12 1.25 12.19.93s8.24-1.83 10.82-5c2.17 1.41 1.37 4.67.92 7.21s-.08 5.46 2 7 5.82.27 5.65-2.27c-1.82 5.4 2.2 11.37 7.39 13.72a20.63 20.63 0 0 0 5.41 1.56 13 13 0 0 1 11.15 13.06v.06a3.52 3.52 0 0 1-.45 2 3.77 3.77 0 0 1-1.6 1.06 25.71 25.71 0 0 0-12.15 11.6c-1.4 2.73-2.45 5.89-5 7.56-3.17 2-7.31 1-11.07 1.32a15.71 15.71 0 0 0-13.56 11.13c-.87 3.12-.76 6.52-2.71 9.3a5.3 5.3 0 0 1-3.69 2.32c-2.92.32-4.27-2.31-6.36-3.66-4.93-3.18-8.07 1-9.63 5-1.82 4.38-3.01 6.25-8.69 7.26z",
    fill: "#572142"
  }), _react.default.createElement("g", {
    opacity: 0.05
  }, _react.default.createElement("path", {
    d: "M299.63 460.1c36.39 27.95 54.95 73 57.53 79.61 5 .82 8.4 1.5 8.4 1.5s-18.5-50.22-57.84-80.43a71.18 71.18 0 0 0-36-14.58 61.15 61.15 0 0 0-5.21-.31 71.55 71.55 0 0 1 33.12 14.21zM187.99 459.99c3.46 13.24 13.13 24.82 21.11 35.94l10.24 14.28 2.11-7.66-4.26-5.94c-8-11.12-17.65-22.7-21.11-35.94-.9-3.43-.57-2.7-2.7-2.7a22.38 22.38 0 0 0-5.59 1.26zM310.75 537.03c2.19 3.29 3.59 5.53 3.59 5.53-1.18-5.29 8.42-6.22 19.62-5.59-8.79-.93-17.91-1.34-23.21.06zM284.56 513.05c-3.19-3-5.87-4.45-7.3-2.85-5.39 6.07 11.46 86.27 11.46 86.27L185.81 604l.46 1.23 110.54-8.09s-14.67-69.85-12.25-84.09z"
  })), _react.default.createElement("path", {
    d: "M182.43 673.51c-6.45 5.34-24.76 18.13-47.38 13.28s-3.63-15.64 5-19.85a3.38 3.38 0 0 0 1.15-5.16 93.9 93.9 0 0 0-16.94-16.1c-5.49-4-12.11-11.32-17.86-18.31-3-3.66-5.8-7.23-8.07-10.23a3.38 3.38 0 0 1 3.59-5.3l44.19 12a3.37 3.37 0 0 1 1.75 1.15l14.52 18.15 20.52 25.65a3.39 3.39 0 0 1-.47 4.72z",
    fill: "#ef91a3"
  }), _react.default.createElement("path", {
    d: "M162.39 643.13c-36.87-26.89-50.79-22.09-56-15.76-3-3.66-5.8-7.23-8.07-10.23a3.38 3.38 0 0 1 3.59-5.3l44.19 12a3.37 3.37 0 0 1 1.75 1.15z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M131.68 560.08s-59.31-19.55-49.88 21.57 21.57 51.22 21.57 51.22 3.37-32.35 60.66 10.11l-20.22-32.35 23.59-29.66z",
    fill: "#5d526e"
  }), _react.default.createElement("path", {
    d: "M117.53 523.01s-5.39 28.31 14.15 62.68c15.49 27.25-2.9 39.67-11.18 43.65a5.84 5.84 0 0 1-6.64-1.11c-5.46-5.4-15.93-19.1-9.81-40.52l4-10.78-22.24-16.18s-6-22.32-3.35-27.34 24.24-18.5 24.24-18.5z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M117.53 521.67s-5.39 28.31 14.15 62.68c15.49 27.25-2.9 39.67-11.18 43.65a5.84 5.84 0 0 1-6.64-1.11c-5.46-5.4-15.93-19.1-9.81-40.52l4-10.78-22.24-16.18s-6-22.32-3.35-27.34 24.24-18.5 24.24-18.5z",
    fill: "#ef91a3"
  }), _react.default.createElement("path", {
    d: "M166.73 467.75s-48.53 27.63-68.74 45.83-16.18 24.26-16.18 24.26 19.55-36.4 36.4-4.72c0 0 47.18-34.37 60-19.55s-11.48-45.82-11.48-45.82z",
    fill: "#dfecfb"
  }), _react.default.createElement("path", {
    fill: "#5d526e",
    d: "M148.53 626.81l40.44-8.09-4.71 20.89-29.31-3.05-6.42-9.75z"
  }), _react.default.createElement("path", {
    d: "M218.63 537.84l-1.35 14.83-48.53-8.09-14.83-9.44-22.24-8.09a38.71 38.71 0 0 0 1.18-22.54 34.21 34.21 0 0 0-3.88-9.14c-9.44-15.5 39.77-8.76 39.77-8.76a65.07 65.07 0 0 0-.74 10.56c.1 11.26 3.29 27.14 21 24.49l14.83 8.76z",
    fill: "#ffc1cd"
  }), _react.default.createElement("path", {
    d: "M170.77 516.95s24.94-10.78 37.07 11.46 17.53 20.88 17.53 20.88l-24.26-15.5z",
    fill: "#ffc1cd"
  }), _react.default.createElement("path", {
    d: "M191.67 629.51s-18.87 15.5-8.09 35 78.18 16.18 78.18 16.18-42.79-16.08-32.18-70c.01-.01-30.5 8.71-37.91 18.82zM281.31 652.42l-6.74 25.61 23.59-4.74s-10.11-21.57-8.76-27.63-8.09 6.76-8.09 6.76z",
    fill: "#5f5470"
  }), _react.default.createElement("path", {
    d: "M300.18 621.42s61.33 6.07 78.18 15.5l12.81 4s4.72-1.35 14.83 7.41l52.57 12.13 40.42 8.14s37.07 6.74 39.77 5.39 20.89 10.11 3.37 15.5-53.92-2.7-53.92-2.7-27-3.37-33-1.35-47.18-4-47.18-4l-40.44 2.7s-6.74-10.11-24.26-6.74c-12.51 2.4-34.28-1.37-45.72-3.73a11.38 11.38 0 0 1-8.9-9.06l-4-21.59z",
    fill: "#ffc1cd"
  }), _react.default.createElement("path", {
    d: "M300.18 621.42s61.33 6.07 78.18 15.5l12.81 4s4.72-1.35 14.83 7.41l52.57 12.13 40.42 8.14s37.07 6.74 39.77 5.39 20.89 10.11 3.37 15.5-53.92-2.7-53.92-2.7-27-3.37-33-1.35-47.18-4-47.18-4l-40.44 2.7s-6.74-10.11-24.26-6.74c-12.51 2.4-34.28-1.37-45.72-3.73a11.38 11.38 0 0 1-8.9-9.06l-4-21.59z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M167.99 497.18a37.14 37.14 0 0 1-35.15 7.34 34.21 34.21 0 0 0-3.88-9.14c-9.44-15.5 39.77-8.76 39.77-8.76a65.07 65.07 0 0 0-.74 10.56z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 143.82,
    cy: 467.74,
    r: 37.07,
    fill: "#ffc1cd"
  }), _react.default.createElement("path", {
    d: "M128.31 522.29s28.31 15.5 29.66 25.61-4 22.24-4 22.24 12.81 76.84 29 82.23l43.14-41.79 36.4-16.18s-21.57-1.35-23.59-21.57 2.7-27-21.57-36.4-37.41-20.56-37.41-20.56l-6.27 1.58 32.21 17s18.2 10.78-29 2.7l-44.53-16.16z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M127.64 520.99s28.35 15.5 29.65 25.61-4 22.24-4 22.24 12.81 76.84 29 82.23l43.08-41.78 36.4-16.18s-21.57-1.35-23.59-21.57 2.7-27-21.57-36.4-37.41-20.56-37.41-20.56l-6.27 1.58 32.21 17s18.2 10.78-29 2.7l-44.48-16.18z",
    fill: "#ff808c"
  }), _react.default.createElement("path", {
    d: "M137.75 526.38s-27.64-10.09-20.9 22.25 41.79 88.29 41.79 88.29l82.23-28.31s25.61-19.55 18.87-21.57-42.46 10.78-42.46 10.78l-48.53 7.47-11.46-32.4s10.78-7.41 7.41-16.85l-.1-.28a52.13 52.13 0 0 0-25.78-28.83z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M136.4 525.04s-27.64-10.11-20.9 22.25 41.79 88.29 41.79 88.29l82.23-28.29s25.61-19.55 18.87-21.57-42.46 10.78-42.46 10.78l-48.53 7.41-11.41-32.37s10.78-7.41 7.41-16.85l-.1-.28a52.13 52.13 0 0 0-25.78-28.83z",
    fill: "#ffc1cd"
  }), _react.default.createElement("path", {
    d: "M138.99 414.58a28.44 28.44 0 0 0-9.86-1 28.93 28.93 0 0 0-9 2.86 85.86 85.86 0 0 0-13 7.49c-2.75 1.93-5.45 4.05-8.63 5.15-4.76 1.65-10.28.88-14.67 3.37-6.15 3.48-7.53 11.82-6.62 18.82s3.39 14 2.29 21c-1.65 10.45-10.71 17.87-19 24.39-2.62 2.05-5.43 4.47-5.84 7.77-.25 2.07.51 4.11 1.14 6.09a51.75 51.75 0 0 1-.52 33.35 46.61 46.61 0 0 1-21.77 25.07c-3.83 2-8.47 4-9.36 8.26-1.14 5.36 4.63 9.51 9.77 11.41a68 68 0 0 0 12.94 3.38c3.88.61 8 .85 11.58-.85 4.12-2 6.64-6.19 8.82-10.21 8.49-15.66 18.9-23.34 24.39-40.28 1.18-3.65 3.07-8 6.9-8.37 2.39-.23 4.55 1.28 6.59 2.56 9.81 6.18 20.11-.75 29.24-7.89 2.11-1.65 3.92-3.73 6.27-5 5-2.74 12.27-2 15.27-6.8a13.47 13.47 0 0 0 1.43-4.09c1.23-5.27 2.45-10.8 1-16-1.31-4.83-4.73-8.79-6.75-13.38s-2.13-10.85 2-13.69c1.24-.85 2.72-1.29 3.94-2.18 3.54-2.57 3.62-7.7 3.6-12.07a6.43 6.43 0 0 1 .54-3.16 7.58 7.58 0 0 1 2.49-2.29 24.53 24.53 0 0 0 8.82-11c1.79-4.82-2.79-7-6.44-9.7a78.06 78.06 0 0 0-27.56-13.01z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M138.3 413.91a28.44 28.44 0 0 0-9.86-1 28.93 28.93 0 0 0-9 2.86 85.86 85.86 0 0 0-13 7.49c-2.75 1.93-5.45 4.05-8.63 5.15-4.76 1.65-10.28.88-14.67 3.37-6.15 3.48-7.53 11.82-6.62 18.82s3.39 14 2.29 21c-1.65 10.45-10.71 17.87-19 24.39-2.62 2.05-5.43 4.47-5.84 7.77-.25 2.07.51 4.11 1.14 6.09a51.75 51.75 0 0 1-.52 33.35 46.61 46.61 0 0 1-21.77 25.07c-3.83 2-8.47 4-9.36 8.26-1.14 5.36 4.63 9.51 9.77 11.41a68 68 0 0 0 12.98 3.35c3.88.61 8 .85 11.58-.85 4.12-2 6.64-6.19 8.82-10.21 8.49-15.66 18.9-23.34 24.39-40.28 1.18-3.65 3.07-8 6.9-8.37 2.39-.23 4.55 1.28 6.59 2.56 9.81 6.18 20.11-.75 29.24-7.89 2.11-1.65 3.92-3.73 6.27-5 5-2.74 12.27-2 15.27-6.8a13.47 13.47 0 0 0 1.42-4.16c1.23-5.27 2.45-10.8 1-16-1.31-4.83-4.73-8.79-6.75-13.38s-2.13-10.85 2-13.69c1.24-.85 2.72-1.29 3.94-2.18 3.54-2.57 3.62-7.7 3.6-12.07a6.43 6.43 0 0 1 .54-3.16 7.58 7.58 0 0 1 2.49-2.29 24.53 24.53 0 0 0 8.81-10.88c1.79-4.82-2.79-7-6.44-9.7a78.06 78.06 0 0 0-27.58-13.03z",
    fill: "#b46d86"
  }), _react.default.createElement("path", {
    d: "M452.17 709.38c-18.3 3.86-71.69 2.22-79.53-4-12-9.6-9-18.12-8.25-19.88h-.18s6.74-16.18 0-28.31c0 0-.67-14.83-14.83-26.29s-29.66-43.81-29.66-43.81l-8.09 16.85s-12.16 37-24.77 53.42a26.19 26.19 0 0 0-5 11.11c-.84 4.46-3.72 10.07-12.68 11.63l-.47.08a33.42 33.42 0 0 1-33-14c-6-8.69-12.87-20.74-14.41-32.48a28.56 28.56 0 0 1 6.61-22.16l.07-.09c14.52-17.15 64.85-76.16 72.91-79.61 0 0 36.4-35 50.55 12.13s18.84 61.32 18.84 61.32 16.92 30.23 21.57 40.44c4.8 10.55 24.76 36.88 26.79 39.54 1.85 1.27 19.69 13.37 25.44 13.37 2.54-.05 21.27 7.95 8.09 10.74z",
    fill: "#ffc1cd"
  }), _react.default.createElement("path", {
    d: "M366.99 666.64c.57-5.24.26-11.48-2.76-16.91 0 0-.67-14.83-14.83-26.29s-29.66-43.81-29.66-43.81l-8.09 16.85s-12.16 37-24.77 53.42a26.19 26.19 0 0 0-5 11.11c-.84 4.46-3.72 10.07-12.68 11.63l-.47.08a33.42 33.42 0 0 1-33-14c-6-8.59-12.71-20.47-14.35-32.09a28 28 0 0 0-.06 7.7c1.55 11.74 8.38 23.8 14.41 32.48a33.42 33.42 0 0 0 33 14l.47-.08c9-1.56 11.84-7.17 12.68-11.63a26.19 26.19 0 0 1 5-11.11c12.61-16.43 24.77-53.42 24.77-53.42l8.09-16.85s15.5 32.35 29.66 43.81 14.83 26.29 14.83 26.29a24.08 24.08 0 0 1 2.76 8.82zM191.33 579.29s29-.67 27-10.11",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M666.65 612.96s45-31 89-20 11 49 11 49z",
    fill: "#eed1d7"
  }), _react.default.createElement("path", {
    d: "M648.65 592.96s44-19 74 1 90 30 90 30",
    fill: "#ccb2bb"
  }));
};

UndrawBeach.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawBeach;
exports.default = _default;