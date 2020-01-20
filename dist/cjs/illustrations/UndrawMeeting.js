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

var UndrawMeeting = function UndrawMeeting(_props) {
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
    viewBox: "0 0 892.65 718.78",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 778.13,
    y1: 826.39,
    x2: 778.13,
    y2: 223.09,
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
    x1: 438.15,
    y1: 323,
    x2: 438.15,
    y2: 212,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 311.15,
    y1: 111,
    x2: 311.15,
    y2: 0,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 59.15,
    y1: 113,
    x2: 59.15,
    y2: 2,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 831.15,
    y1: 114,
    x2: 831.15,
    y2: 3,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 226.86,
    y1: 468.27,
    x2: 226.86,
    y2: 371.35,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__g",
    x1: 271.06,
    y1: 636.86,
    x2: 271.06,
    y2: 501.01,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__h",
    x1: 236.47,
    y1: 808.17,
    x2: 236.47,
    y2: 680.41,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__i",
    x1: 236.47,
    y1: 714.55,
    x2: 236.47,
    y2: 680.41,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__j",
    x1: 219.18,
    y1: 625.65,
    x2: 219.18,
    y2: 464.27,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__k",
    x1: 259.05,
    y1: 791.09,
    x2: 259.05,
    y2: 625.65,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__l",
    x1: 285.46,
    y1: 816.81,
    x2: 285.46,
    y2: 788.95,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__m",
    x1: 225.91,
    y1: 481.56,
    x2: 225.91,
    y2: 418.16,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__n",
    x1: 72.29,
    y1: 384.52,
    x2: 72.29,
    y2: 356.77,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__o",
    x1: 225.91,
    y1: 452.74,
    x2: 225.91,
    y2: 421.04,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__p",
    x1: 78.06,
    y1: 342.25,
    x2: 78.06,
    y2: 238.51,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__q",
    x1: 219,
    y1: 490.8,
    x2: 219,
    y2: 331.7,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__r",
    x1: 219,
    y1: 488.71,
    x2: 219,
    y2: 329.61,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__s",
    x1: 196.07,
    y1: 424.59,
    x2: 196.07,
    y2: 403.83,
    gradientTransform: "rotate(68.23 196.066 414.202)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__t",
    x1: 173.65,
    y1: 518.04,
    x2: 173.65,
    y2: 404.34,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__u",
    x1: 241.07,
    y1: 598.36,
    x2: 241.07,
    y2: 503.76,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__v",
    x1: 315.81,
    y1: 597.79,
    x2: 315.81,
    y2: 566.11,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M1005 725s2.51-354.58-129.54-454.28c7.24-14.5 10.62-33.27-15.25-39.52-20.61-5-32.27 4.3-38.85 15.62a128.25 128.25 0 0 0-22.12-1.9h-4.54a106.12 106.12 0 0 0-11 3.07c-5.2-7.86-20.46-28.11-37.73-24.41-16.84 3.61-7.1 32.83-2.25 45-20.9 15.88-39.59 41.49-36.41 81.74-1.55.81-2.49 1.28-2.49 1.28a22.23 22.23 0 0 0-6.36 8.69c-4.11 9.25-4.68 21.7-4.58 29.14-.07 5.54.28 9.42.28 9.42 7.62 21.34 29 21.34 29 21.34 2.35.13 4.61.21 6.85.27l.85 1.61q-.34 2-.7 3.87c-7.89 4.41-35.32 20.18-40.53 29.3-6.1 10.67-50.29-38.1-50.29-38.1s-3-19.81-22.86-19.81c-7.53 0-13.3-4.84-17.56-10.85-10.24-14.44-33.07-10.59-36.85 6.7-.1.44-.17.89-.24 1.33a34.83 34.83 0 0 0-9.36 7.39s-3-45.72-24.39 0a76 76 0 0 0-7.22 32.46c-.4 28.92 17.52 54.63 58.13 49.49a35.75 35.75 0 0 0 10.06 9.5c20 12.24 34.35 29.33 40.64 37.68A207.93 207.93 0 0 0 602 572.24c-21 5.24-55.73 29.18-40.44 132.9 0 0-32 3-3 21.34 0 0 26.74 17 55.25 8.7a99.84 99.84 0 0 0 27.1 16.19c-1.83 10.57-3.39 22.06-4.63 34.56 0 0-22.07 10.25-20.3 16.57-.76 3.19 2.9 5.77 15.65 6.29v.37c-.23 2.29-.19 14.6 27.48 11.83 0 0 0 12.19 53.34 0 46.73-10.68 161.32-71.67 189-86.61 15.68 27.42 45.88 47.42 102.11 42.41v-10.68s16.76 6.1 19.81 1.52 0-13.72 0-13.72 12.19 3 12.19-1.52-.06-21.34-30.56-27.39z",
    transform: "translate(-147.85 -107.61)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M739.36 506.28s-39.87 168.34 109.28 155.05v-10.34s16.24 5.91 19.2 1.48 0-13.29 0-13.29 11.81 3 11.81-1.48 0-20.67-29.53-26.58c0 0 3.3-465.16-199.36-465.16h-4.43s-140.29 28.06-60.55 174.25c0 0-35.44 19.2-41.35 29.53s-48.73-36.92-48.73-36.92-3-19.2-22.15-19.2c-7.3 0-12.89-4.69-17-10.51-9.92-14-32-10.26-35.7 6.49a18.77 18.77 0 0 0-.44 4c0 17.72 0 76.79 26.58 93s42.82 41.35 42.82 41.35l-16.24 34s-73.84-10.34-53.16 130c0 0-31 3-3 20.67 0 0 32.49 20.67 63.5 4.43l266.55.74z",
    fill: "#926b5a"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M389.65 212h97v111h-97z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M391.65 214h93v107h-93z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M398.65 239h46v4h-46z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    fill: "#eee",
    d: "M398.65 254h76v4h-76zM398.65 264h64v4h-64zM398.65 274h56v4h-56zM398.65 284h72v4h-72zM398.65 294h31v4h-31z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M446.65 304h24v4h-24z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M391.65 214h93v17h-93z"
  }), _react.default.createElement("path", {
    d: "M723.86 393.31s19.2 84.17 5.91 124",
    fill: "none",
    stroke: "#000",
    strokeMiterlimit: 10,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M653.71 264.1s78.27 34 4.43 153.58c0 0-94.51 84.17-104.85 128.47s-48.73 93-48.73 93-84.62-20.61-62.31-126.94a200.77 200.77 0 0 1 68.43-113 246.31 246.31 0 0 1 61.81-37.68s22.15-56.11 11.81-97.46z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M655.15 264.1s78.27 34 4.43 153.58c0 0-94.51 84.17-104.85 128.47s-48.73 93-48.73 93-84.62-20.61-62.31-126.94a200.77 200.77 0 0 1 68.43-113 246.31 246.31 0 0 1 61.81-37.68s22.15-56.11 11.81-97.46z",
    fill: "#c5a692"
  }), _react.default.createElement("path", {
    d: "M664.05 175.49s3-53.16 45.78-42.82 3 56.11 3 56.11z",
    fill: "#926b5a"
  }), _react.default.createElement("path", {
    d: "M669.85 172.76s2.43-43.76 37.68-35.25 2.43 46.19 2.43 46.19z",
    fill: "#c5a692"
  }), _react.default.createElement("path", {
    d: "M637.47 151.87s-17.72-31-38.39-26.58 0 48.73 0 48.73z",
    fill: "#926b5a"
  }), _react.default.createElement("path", {
    d: "M669.96 252.28s13.29 69.41-93 63.5c0 0-20.67 0-28.06-20.67 0 0-3-32.49 10.34-42.82 0 0 32.49-16.24 32.49-23.63s78.23 23.62 78.23 23.62z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M669.96 249.33s13.29 69.41-93 63.5c0 0-20.67 0-28.06-20.67 0 0-3-32.49 10.34-42.82 0 0 32.49-16.24 32.49-23.63s78.23 23.62 78.23 23.62z",
    fill: "#926b5a"
  }), _react.default.createElement("path", {
    d: "M553.04 257.75s25.36-5.47 40.13 6.34c0 0-10.06 22.85-22.75 22.5s-17.38-28.84-17.38-28.84z",
    fill: "#c5a692"
  }), _react.default.createElement("path", {
    d: "M609.41 531.39s-97.46-54.65-116.66 138.8c0 0-41.35 19.2-4.43 20.67 0 0-3 14.77 26.58 11.81 0 0 0 11.81 51.68 0s189-87.13 189-87.13z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M609.41 532.86s-97.46-54.64-116.66 138.81c0 0-41.35 19.2-4.43 20.67 0 0-3 14.77 26.58 11.81 0 0 0 11.81 51.68 0s189-87.13 189-87.13l-2.79-6.63a130.63 130.63 0 0 0-143.37-77.53z",
    fill: "#926b5a"
  }), _react.default.createElement("path", {
    d: "M411.53 298.06s-3-44.3-23.63 0 3 106.32 90.08 65c0 0-4.43-32.49-10.34-35.44s0-23.63-10.34-26.58-19.15 14.74-19.15 14.74 0-25.1-8.86-26.58-17.76 8.86-17.76 8.86z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M411.53 299.54s-3-44.3-23.63 0 3 106.32 90.08 65c0 0-4.43-32.49-10.34-35.44s0-23.63-10.34-26.58-19.15 14.74-19.15 14.74 0-25.1-8.86-26.58-17.76 8.86-17.76 8.86z",
    fill: "#926b5a"
  }), _react.default.createElement("path", {
    d: "M573.23 360.82s57.59-11.81 85.65 56.11",
    fill: "none",
    stroke: "#000",
    strokeMiterlimit: 10,
    opacity: 0.1
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M274.65 16h93v107h-93z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M262.65 0h97v111h-97z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M264.65 2h93v107h-93z"
  }), _react.default.createElement("path", {
    fill: "#3ad29f",
    d: "M273.65 15h14v15h-14z"
  }), _react.default.createElement("path", {
    fill: "#eee",
    d: "M298.65 20h46v4h-46zM287.65 43h46v4h-46zM287.65 52h46v4h-46zM287.65 61h46v4h-46zM287.65 70h46v4h-46zM287.65 79h46v4h-46zM287.65 88h46v4h-46z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M22.65 19h93v107h-93z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M10.65 2h97v111h-97z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M12.65 4h93v107h-93z"
  }), _react.default.createElement("path", {
    fill: "#eee",
    d: "M48.65 29h46v4h-46zM48.65 56h46v4h-46zM48.65 83h46v4h-46z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M22.65 23.5h16v16h-16zM22.65 49.5h16v16h-16zM22.65 75.5h16v16h-16z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M799.65 20h93v107h-93z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M782.65 3h97v111h-97z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M784.65 5h93v107h-93z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M810.65 23h46v4h-46z"
  }), _react.default.createElement("path", {
    fill: "#eee",
    d: "M810.65 81h46v4h-46zM810.65 90h46v4h-46zM835.65 42h34v4h-34zM835.65 51h34v4h-34zM835.65 60h34v4h-34z"
  }), _react.default.createElement("path", {
    d: "M806.65 40a14 14 0 1 0 14 14h-14z",
    fill: "#3ad29f"
  }), _react.default.createElement("path", {
    d: "M808.65 37v14h14a14 14 0 0 0-14-14z",
    fill: "#3ad29f",
    opacity: 0.25
  }), _react.default.createElement("path", {
    d: "M174.11 411.6l25.09 49.13s55.4 14.63 77.35 3.14c0 0 7.32-88.85 0-92s-107.66 7.32-102.44 39.73z",
    transform: "translate(-147.85 -107.61)",
    fill: "url(#prefix__f)"
  }), _react.default.createElement("path", {
    d: "M292 633.66l-19 3.2-22.85-135.45.82-.14a18.38 18.38 0 0 1 21.18 15.06z",
    transform: "translate(-147.85 -107.61)",
    fill: "url(#prefix__g)"
  }), _react.default.createElement("path", {
    d: "M320 711.47v65.63a31.07 31.07 0 0 1-31 31.07H184a31.07 31.07 0 0 1-31.1-31.07v-65.63a31 31 0 0 1 31.1-31.06h105a31 31 0 0 1 31 31.06z",
    transform: "translate(-147.85 -107.61)",
    fill: "url(#prefix__h)"
  }), _react.default.createElement("path", {
    d: "M318.16 700.79c-61.45 31-163.38 0-163.38 0A31.09 31.09 0 0 1 184 680.41h105a31.09 31.09 0 0 1 29.16 20.38z",
    transform: "translate(-147.85 -107.61)",
    fill: "url(#prefix__i)"
  }), _react.default.createElement("path", {
    d: "M276.82 625.65H161.55V513.1a48.83 48.83 0 0 1 48.83-48.83h31.06c27 0 35.38 21.86 35.38 48.83z",
    transform: "translate(-147.85 -107.61)",
    fill: "url(#prefix__j)"
  }), _react.default.createElement("path", {
    d: "M311 625.65H161.55c0 24.93 20.21 54.75 45.15 54.75h95.1L236.47 789c55.71 0 1 4.8 55.71 0l59.65-100.61a33.66 33.66 0 0 0 4.71-17.17A45.53 45.53 0 0 0 311 625.65z",
    transform: "translate(-147.85 -107.61)",
    fill: "url(#prefix__k)"
  }), _react.default.createElement("path", {
    d: "M334.46 816.81h-98V789h71.33a26.65 26.65 0 0 1 26.65 26.65z",
    transform: "translate(-147.85 -107.61)",
    fill: "url(#prefix__l)"
  }), _react.default.createElement("path", {
    d: "M219 481.56h-9.41v-63.4h32.66v40.15A23.25 23.25 0 0 1 219 481.56z",
    transform: "translate(-147.85 -107.61)",
    fill: "url(#prefix__m)"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__n)",
    d: "M59.3 356.77l34.13 22.95-22.1 4.8-20.17-2.88 8.14-24.87z"
  }), _react.default.createElement("path", {
    d: "M209.58 450.11a51.86 51.86 0 0 0 32.66 0V421h-32.66z",
    transform: "translate(-147.85 -107.61)",
    fill: "url(#prefix__o)",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 78.06,
    cy: 290.38,
    r: 51.87,
    fill: "url(#prefix__p)"
  }), _react.default.createElement("path", {
    d: "M228.47 386.51s32.41 13.59 61.67 0c0 0-12.54-60.63-62.72-54.36s-113.94 80.49-57.49 121.26L219 490.8l-8.3-28s-41.81-39.7 17.77-76.29z",
    transform: "translate(-147.85 -107.61)",
    fill: "url(#prefix__q)",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M228.47 384.42s32.41 13.59 61.67 0c0 0-12.54-60.63-62.72-54.36s-113.94 80.49-57.49 121.26L219 488.71l-8.3-28s-41.81-39.71 17.77-76.29z",
    transform: "translate(-147.85 -107.61)",
    fill: "url(#prefix__r)"
  }), _react.default.createElement("ellipse", {
    cx: 196.07,
    cy: 414.21,
    rx: 10.98,
    ry: 5.23,
    transform: "rotate(-68.23 42.709 469.525)",
    fill: "url(#prefix__s)"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__t)",
    d: "M142.29 423.16l7.81 94.88 54.91-21.71-8.36-91.99-54.36 18.82z"
  }), _react.default.createElement("path", {
    d: "M175.5 517.64c6.72 18.25 38.3 87 130.78 80.26a1.13 1.13 0 0 0 1-1.35l-3.58-17s-54.25-1.64-76.07-41.42a76.43 76.43 0 0 0-23.9-26.8c-9.18-6.22-19.49-10.59-25.7-5a10.38 10.38 0 0 0-2.53 11.31z",
    transform: "translate(-147.85 -107.61)",
    fill: "url(#prefix__u)"
  }), _react.default.createElement("path", {
    d: "M303.72 579.54s22.09-22.09 28.82-9.61-18.25 24-25.94 27.86l-8.6-9.6z",
    transform: "translate(-147.85 -107.61)",
    fill: "url(#prefix__v)"
  }), _react.default.createElement("path", {
    d: "M29.65 311l24 47s53 14 74 3c0 0 7-85 0-88s-103 7-98 38z",
    fill: "#fdd835"
  }), _react.default.createElement("path", {
    d: "M105.134 398a18.463 18.463 0 0 1 21.32 15.07l19.21 111.87-18.196 3.125L105.134 398z",
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M169.25 597.87v62.78a29.72 29.72 0 0 1-29.71 29.74H39.08a29.72 29.72 0 0 1-29.72-29.72v-62.8a29.68 29.68 0 0 1 29.72-29.72h100.46a29.68 29.68 0 0 1 29.72 29.72z",
    fill: "#3ad29f"
  }), _react.default.createElement("path", {
    d: "M167.45 587.65c-58.78 29.61-156.29 0-156.29 0a29.75 29.75 0 0 1 27.92-19.5h100.46a29.75 29.75 0 0 1 27.91 19.5z",
    fill: "#fff",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M127.9 515.77H17.63V408.1a46.71 46.71 0 0 1 46.71-46.71h29.71c25.8 0 33.85 20.91 33.85 46.71z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M160.62 515.77h-143c0 23.85 19.34 52.38 43.19 52.38h91l-62.5 103.84c53.3 0 .92 4.59 53.3 0l57.07-96.25a32.2 32.2 0 0 0 4.5-16.42 43.55 43.55 0 0 0-43.56-43.55z",
    fill: "#0e0d15"
  }), _react.default.createElement("path", {
    d: "M89.3 672h67.08A26.65 26.65 0 0 1 183 698.64H89.3V672z",
    fill: "#0e0d15"
  }), _react.default.createElement("path", {
    d: "M65.07 318.78h31.25v37.4a23.25 23.25 0 0 1-23.25 23.25h-8v-60.65z",
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M61.25 361.49l32.65 21.95-21.14 4.6-19.29-2.76 7.78-23.79z"
  }), _react.default.createElement("path", {
    d: "M63.58 347.83a49.61 49.61 0 0 0 31.24 0v-27.8H63.58z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 80.7,
    cy: 299.48,
    r: 49.62,
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M81.65 287s31 13 59 0c0 0-12-58-60-52s-109 77-55 116l46.94 35.76L64.65 360s-40-38 17-73z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M81.65 285s31 13 59 0c0 0-12-58-60-52s-109 77-55 116l46.94 35.76L64.65 358s-40-38 17-73z",
    fill: "#fdd835"
  }), _react.default.createElement("ellipse", {
    cx: 200,
    cy: 422.61,
    rx: 10.5,
    ry: 5,
    transform: "rotate(-68.23 46.635 477.924)",
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M140.65 425l7.47 90.77L200.65 495l-8-88-52 18z"
  }), _react.default.createElement("path", {
    d: "M32.48 413.94c6.42 17.45 36.67 83.26 125.1 76.77a1.08 1.08 0 0 0 1-1.29l-3.43-16.26s-51.89-1.57-72.77-39.63a73.11 73.11 0 0 0-22.86-25.64c-8.79-5.95-18.65-10.13-24.58-4.74a9.93 9.93 0 0 0-2.46 10.79z",
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M153.63 471.66s21.14-21.14 27.57-9.19-17.46 23-24.81 26.65l-8.24-9.19z",
    fill: "#fdb797"
  }));
};

UndrawMeeting.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawMeeting;
exports.default = _default;