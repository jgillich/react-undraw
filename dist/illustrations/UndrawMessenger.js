function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawMessenger = function UndrawMessenger(_props) {
  var props = Object.assign({}, _props);
  var primaryColor = props.primaryColor || defaultProps.primaryColor;
  var style = Object.assign({
    height: props.height || defaultProps.height,
    width: '100%'
  }, props.style);
  delete props.primaryColor;
  delete props.height;
  delete props.style;
  return React.createElement("svg", _extends({
    "data-name": "Layer 1",
    width: "1em",
    height: "1em",
    viewBox: "0 0 936.89 830",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 28.76,
    y1: 305.07,
    x2: 28.76,
    y2: 212.89,
    gradientTransform: "matrix(0 -1 -1 0 931.32 376.98)",
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: 0,
    stopColor: "gray",
    stopOpacity: 0.25
  }), React.createElement("stop", {
    offset: 0.54,
    stopColor: "gray",
    stopOpacity: 0.12
  }), React.createElement("stop", {
    offset: 1,
    stopColor: "gray",
    stopOpacity: 0.1
  })), React.createElement("linearGradient", {
    id: "prefix__b",
    x1: -12.78,
    y1: 348.28,
    x2: -12.78,
    y2: 256.1,
    gradientTransform: "matrix(-1 0 0 1 761.21 12.96)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: -251.56,
    y1: 214.87,
    x2: -251.56,
    y2: 122.69,
    gradientTransform: "matrix(0 -1 -1 0 851.27 -6.15)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: -38.6,
    y1: 396.54,
    x2: -38.6,
    y2: 304.36,
    gradientTransform: "matrix(0 -1 -1 0 797.39 358.05)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 5.1,
    y1: 303.89,
    x2: 5.1,
    y2: 211.71,
    gradientTransform: "matrix(0 -1 -1 0 673.96 304.05)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 8.02,
    y1: 379.51,
    x2: 8.02,
    y2: 287.33,
    gradientTransform: "matrix(-1 0 0 1 561.18 2.45)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 222.55,
    y1: 344.87,
    x2: 222.55,
    y2: 252.69,
    gradientTransform: "matrix(-1 0 0 1 560.23 65.2)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: -232.1,
    y1: 207.78,
    x2: -232.1,
    y2: 115.6,
    gradientTransform: "matrix(-1 0 0 1 695.8 -56.66)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 81.08,
    y1: 150.19,
    x2: 81.08,
    y2: 86.04,
    gradientTransform: "matrix(-1 0 0 1 701.15 59.18)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 516.74,
    y1: 89.41,
    x2: 516.74,
    y2: 25.26,
    gradientTransform: "matrix(-1 0 0 1 708.54 220.35)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__k",
    x1: -103.84,
    y1: 299.15,
    x2: -103.84,
    y2: 235,
    gradientTransform: "matrix(-1 0 0 1 742.42 -17.51)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__l",
    x1: 5.85,
    y1: 100.35,
    x2: 5.85,
    y2: 36.2,
    gradientTransform: "matrix(-1 0 0 1 678.13 35.41)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__m",
    x1: -301.21,
    y1: 237.7,
    x2: -301.21,
    y2: 173.55,
    gradientTransform: "matrix(-1 0 0 1 706.99 -84.53)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__n",
    x1: 460.43,
    y1: -26.58,
    x2: 460.43,
    y2: -90.72,
    gradientTransform: "matrix(-1 0 0 1 662.94 207.84)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__o",
    x1: -53.79,
    y1: 240.48,
    x2: -53.79,
    y2: 148.3,
    gradientTransform: "matrix(0 -1 -1 0 677.47 190.28)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__p",
    x1: 417.01,
    y1: 548.49,
    x2: 417.01,
    y2: 166.82,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__q",
    x1: 2864.89,
    y1: 548.49,
    x2: 2864.89,
    y2: 166.82,
    gradientTransform: "matrix(-1 0 0 1 3576 0)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__r",
    x1: 540.33,
    y1: 551.53,
    x2: 540.33,
    y2: 551.26,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__s",
    x1: 523.98,
    y1: 692.77,
    x2: 523.98,
    y2: 292.62,
    xlinkHref: "#prefix__a"
  })), React.createElement("ellipse", {
    cx: 425.31,
    cy: 780.79,
    rx: 295.92,
    ry: 49.21,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M239.74 756s-17.45-59.24 3.27-102.84a93.57 93.57 0 0 0 7.57-58.7 157.36 157.36 0 0 0-8.31-27.55",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M255.16 539.37c0 7.26-13.15 28.31-13.15 28.31s-13.15-21.05-13.15-28.31a13.15 13.15 0 1 1 26.29 0zM276.89 579.59c-3.95 6.09-26.45 16.62-26.45 16.62s.41-24.82 4.35-30.91a13.15 13.15 0 0 1 22.07 14.29zM275.94 648.31c-6.48 3.27-31.2 1-31.2 1s12.88-21.22 19.36-24.49a13.15 13.15 0 1 1 11.84 23.48zM263.51 700.15c-5.84 4.32-30.58 6.27-30.58 6.27s9.11-23.09 14.95-27.41a13.15 13.15 0 1 1 15.63 21.14zM222.86 597.62c5.21 5.06 29.47 10.3 29.47 10.3s-5.94-24.1-11.15-29.16a13.15 13.15 0 1 0-18.32 18.86zM209.1 658.42c6.48 3.27 31.2 1 31.2 1s-12.86-21.2-19.36-24.47a13.15 13.15 0 1 0-11.84 23.48zM203.83 719.36c5.84 4.32 30.58 6.27 30.58 6.27s-9.11-23.09-14.95-27.41a13.15 13.15 0 1 0-15.63 21.14z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M255.16 539.37c0 7.26-13.15 28.31-13.15 28.31s-13.15-21.05-13.15-28.31a13.15 13.15 0 1 1 26.29 0zM276.89 579.59c-3.95 6.09-26.45 16.62-26.45 16.62s.41-24.82 4.35-30.91a13.15 13.15 0 0 1 22.07 14.29zM275.94 648.31c-6.48 3.27-31.2 1-31.2 1s12.88-21.22 19.36-24.49a13.15 13.15 0 1 1 11.84 23.48zM263.51 700.15c-5.84 4.32-30.58 6.27-30.58 6.27s9.11-23.09 14.95-27.41a13.15 13.15 0 1 1 15.63 21.14zM222.86 597.62c5.21 5.06 29.47 10.3 29.47 10.3s-5.94-24.1-11.15-29.16a13.15 13.15 0 1 0-18.32 18.86zM209.1 658.42c6.48 3.27 31.2 1 31.2 1s-12.86-21.2-19.36-24.47a13.15 13.15 0 1 0-11.84 23.48zM203.83 719.36c5.84 4.32 30.58 6.27 30.58 6.27s-9.11-23.09-14.95-27.41a13.15 13.15 0 1 0-15.63 21.14z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M585.55 752.07s-17.45-59.24 3.27-102.84a93.57 93.57 0 0 0 7.57-58.7 157.36 157.36 0 0 0-8.31-27.53",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M600.97 535.42c0 7.26-13.15 28.31-13.15 28.31s-13.15-21.05-13.15-28.31a13.15 13.15 0 0 1 26.29 0zM622.7 575.63c-3.95 6.09-26.42 16.62-26.42 16.62s.41-24.82 4.35-30.91a13.15 13.15 0 1 1 22.07 14.29zM621.75 644.36c-6.48 3.27-31.2 1-31.2 1s12.88-21.22 19.36-24.49a13.15 13.15 0 0 1 11.84 23.48zM609.32 696.19c-5.84 4.32-30.58 6.27-30.58 6.27s9.11-23.09 14.95-27.41a13.15 13.15 0 0 1 15.63 21.14zM568.67 593.66c5.21 5.06 29.47 10.3 29.47 10.3s-5.94-24.1-11.15-29.16a13.15 13.15 0 0 0-18.32 18.86zM554.91 654.47c6.48 3.27 31.2 1 31.2 1s-12.88-21.21-19.36-24.47a13.15 13.15 0 0 0-11.84 23.48zM549.64 715.4c5.84 4.32 30.58 6.27 30.58 6.27s-9.11-23.09-14.95-27.41a13.15 13.15 0 0 0-15.63 21.14z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M600.97 535.42c0 7.26-13.15 28.31-13.15 28.31s-13.15-21.05-13.15-28.31a13.15 13.15 0 0 1 26.29 0zM622.7 575.63c-3.95 6.09-26.42 16.62-26.42 16.62s.41-24.82 4.35-30.91a13.15 13.15 0 1 1 22.07 14.29zM621.75 644.36c-6.48 3.27-31.2 1-31.2 1s12.88-21.22 19.36-24.49a13.15 13.15 0 0 1 11.84 23.48zM609.32 696.19c-5.84 4.32-30.58 6.27-30.58 6.27s9.11-23.09 14.95-27.41a13.15 13.15 0 0 1 15.63 21.14zM568.67 593.66c5.21 5.06 29.47 10.3 29.47 10.3s-5.94-24.1-11.15-29.16a13.15 13.15 0 0 0-18.32 18.86zM554.91 654.47c6.48 3.27 31.2 1 31.2 1s-12.88-21.21-19.36-24.47a13.15 13.15 0 0 0-11.84 23.48zM549.64 715.4c5.84 4.32 30.58 6.27 30.58 6.27s-9.11-23.09-14.95-27.41a13.15 13.15 0 0 0-15.63 21.14z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M113.55 634.95s21 41.15 3.88 63.67 1.55 83.86 1.55 83.86",
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M119.76 622.14c0 7.93-5.82 14.36-5.82 14.36s-5.82-6.43-5.82-14.36 5.82-14.36 5.82-14.36 5.82 6.42 5.82 14.36z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M124.44 634.95s-21 41.15-3.88 63.67-1.55 83.86-1.55 83.86",
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M118.21 622.14c0 7.93 5.82 14.36 5.82 14.36s5.82-6.43 5.82-14.36-5.82-14.36-5.82-14.36-5.82 6.42-5.82 14.36z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M118.21 622.14c0 7.93 5.82 14.36 5.82 14.36s5.82-6.43 5.82-14.36-5.82-14.36-5.82-14.36-5.82 6.42-5.82 14.36z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M132.96 634.95s21 41.15 3.88 63.67 1.6 83.86 1.6 83.86",
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M139.17 622.14c0 7.93-5.82 14.36-5.82 14.36s-5.82-6.43-5.82-14.36 5.82-14.36 5.82-14.36 5.82 6.42 5.82 14.36zM135.91 655.11c-5.5 5.72-14.16 6.31-14.16 6.31s.26-8.67 5.76-14.39 14.16-6.31 14.16-6.31-.23 8.67-5.76 14.39zM136.44 683.5c-5.5 5.72-14.16 6.31-14.16 6.31s.26-8.67 5.76-14.39 14.16-6.31 14.16-6.31-.25 8.67-5.76 14.39zM106.63 699.12c5.2 6 5 14.66 5 14.66s-8.61-1-13.81-7-5-14.66-5-14.66 8.62 1.01 13.81 7zM111.44 638.57c6.61 4.38 8.76 12.79 8.76 12.79s-8.58 1.3-15.19-3.08-8.76-12.79-8.76-12.79 8.59-1.3 15.19 3.08z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M111.44 638.57c6.61 4.38 8.76 12.79 8.76 12.79s-8.58 1.3-15.19-3.08-8.76-12.79-8.76-12.79 8.59-1.3 15.19 3.08z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M143.83 634.95s-21 41.15-3.88 63.67-1.51 83.86-1.51 83.86",
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M137.62 622.14c0 7.93 5.82 14.36 5.82 14.36s5.82-6.43 5.82-14.36-5.82-14.37-5.82-14.37-5.82 6.43-5.82 14.37z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M137.62 622.14c0 7.93 5.82 14.36 5.82 14.36s5.82-6.43 5.82-14.36-5.82-14.37-5.82-14.37-5.82 6.43-5.82 14.37z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M139.29 655.72c-5.57 5.65-5.93 14.32-5.93 14.32s8.66-.49 14.23-6.14 5.93-14.32 5.93-14.32-8.66.49-14.23 6.14z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M139.29 655.72c-5.57 5.65-5.93 14.32-5.93 14.32s8.66-.49 14.23-6.14 5.93-14.32 5.93-14.32-8.66.49-14.23 6.14z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M150.21 695c-5.57 5.65-5.93 14.32-5.93 14.32s8.66-.49 14.23-6.14 5.93-14.3 5.93-14.3-8.66.5-14.23 6.12z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M134.15 686.39s12.62-19.89 30.29-20.32M124.32 674.38s-12.62-19.89-30.33-20.32M122.68 702.77s12.62-19.89 30.33-20.32",
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10
  }), React.createElement("circle", {
    cx: 163.91,
    cy: 665.92,
    r: 3.28,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 94.3,
    cy: 654.18,
    r: 3.28,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M131.96 709.32s-12.62-19.89-30.33-20.32",
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10
  }), React.createElement("circle", {
    cx: 101.94,
    cy: 689.12,
    r: 3.28,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 153.26,
    cy: 682.57,
    r: 3.28,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M201.72 758.58s-30.41-6.08-38.52-14.19-44.6-22.3-48.66-12.16-54.74 44.6-20.27 50.69 81.1 8.11 91.23 4.05 16.22-28.39 16.22-28.39z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M94.27 779.14c34.47 6.08 81.1 8.11 91.23 4.05 7.72-3.09 13.08-17.92 15.21-24.83l1 .21s-6.07 24.34-16.21 28.43-56.77 2-91.23-4.05c-9.95-1.76-12.79-5.88-11.72-11.1.89 3.37 4.31 5.99 11.72 7.29z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M709.17 685.05s10 13.13-4.63 33-26.77 36.56-21.88 48.91c0 0 22.14-36.81 40.16-37.33s6.17-22.44-13.65-44.58z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M709.17 685.05a16.26 16.26 0 0 1 2.05 4.12c17.58 20.66 26.95 39.94 10 40.42-15.74.45-34.63 28.6-39.15 35.71a15.26 15.26 0 0 0 .54 1.62s22.14-36.81 40.16-37.33 6.22-22.4-13.6-44.54z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M727.83 701.79c0 4.62-.52 8.37-1.16 8.37s-1.16-3.75-1.16-8.37.65-2.45 1.29-2.45 1.03-2.17 1.03 2.45z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M734.24 707.31c-4.06 2.21-7.59 3.55-7.9 3s2.73-2.81 6.79-5 2.46-.6 2.76 0 2.4-.22-1.65 2z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M656.14 685.05s-10 13.13 4.63 33 26.77 36.56 21.88 48.91c0 0-22.14-36.81-40.16-37.33s-6.18-22.44 13.65-44.58z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M656.14 685.05a16.26 16.26 0 0 0-2.05 4.12c-17.58 20.66-26.95 39.94-10 40.42 15.74.45 34.63 28.6 39.15 35.71a15.26 15.26 0 0 1-.54 1.62s-22.14-36.81-40.16-37.33-6.23-22.4 13.6-44.54z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M637.44 701.79c0 4.62.52 8.37 1.16 8.37s1.16-3.75 1.16-8.37-.65-2.45-1.29-2.45-1.03-2.17-1.03 2.45z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M631.07 707.31c4.06 2.21 7.59 3.55 7.9 3s-2.73-2.81-6.79-5-2.46-.6-2.76 0-2.41-.22 1.65 2z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M640.67 765.2s28.07-.86 36.53-6.89 43.18-13.22 45.28-3.56 42.19 48.05 10.49 48.31-73.64-4.94-82.08-10.08-10.22-27.78-10.22-27.78z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M733.54 799.7c-31.69.26-73.64-4.94-82.08-10.08-6.43-3.92-9-18-9.85-24.46h-.94s1.77 22.68 10.22 27.84 50.39 10.34 82.08 10.08c9.15-.07 12.31-3.33 12.13-8.15-1.26 2.9-4.75 4.72-11.56 4.77z",
    opacity: 0.2
  }), React.createElement("path", {
    transform: "rotate(-70.52 581.763 423.765)",
    fill: "url(#prefix__a)",
    d: "M626.25 273.22h92.18v149.99h-92.18z"
  }), React.createElement("path", {
    fill: "#f4f6f7",
    d: "M457.695 328.598l28.689-81.106 136.615 48.324-28.69 81.106z"
  }), React.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M502.947 274.847l-17.385-6.15 4.549-12.859 17.384 6.15zM557.699 322.374l-66.738-23.607 1.474-4.167 66.738 23.607zM555.024 334.615l-48.523-17.034.974-2.773 48.523 17.035z"
  })), React.createElement("path", {
    transform: "rotate(-21.13 614.512 650.364)",
    fill: "url(#prefix__b)",
    d: "M698.99 269.06h149.99v92.18H698.99z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M558.405 265.719L693.57 213.48l31.013 80.246-135.167 52.238z"
  }), React.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M588.73 275.558l-17.2 6.647-4.917-12.723 17.2-6.647zM661.245 275.997l-66.03 25.519-1.594-4.123 66.03-25.519zM664.7 284.933l-48.15 18.608-1.063-2.752 48.15-18.608z"
  })), React.createElement("path", {
    transform: "rotate(-82.24 596.633 303.28)",
    fill: "url(#prefix__c)",
    d: "M636.4 170.42h92.18v149.99H636.4z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M475.744 243.751l12.044-85.17 143.46 20.288-12.043 85.17z"
  }), React.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M506.094 180.529l-18.271-2.49 1.842-13.515 18.27 2.49zM569.364 215.943l-70.141-9.558.597-4.38 70.141 9.559zM568.072 225.447l-51.147-6.97.398-2.923 51.147 6.97z"
  })), React.createElement("path", {
    transform: "rotate(-82.24 361.084 454.501)",
    fill: "url(#prefix__d)",
    d: "M400.85 321.65h92.18v149.99h-92.18z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M237.18 393.59l11.616-85.241 143.583 19.566-11.616 85.242z"
  }), React.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M270.538 331.739l-18.271-2.49 1.841-13.515 18.272 2.49zM336.097 365.527l-70.082-9.91.618-4.376 70.083 9.91zM332.506 376.657l-51.148-6.97.399-2.923 51.147 6.97z"
  })), React.createElement("path", {
    transform: "rotate(-82.24 330.312 356.8)",
    fill: "url(#prefix__e)",
    d: "M370.07 223.95h92.18v149.99h-92.18z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M206.398 295.887l11.616-85.242 143.583 19.566-11.616 85.243z"
  }), React.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M239.774 234.042l-18.271-2.49 1.842-13.515 18.27 2.49zM303.033 269.466l-70.142-9.559.597-4.38 70.142 9.56zM301.742 278.96l-51.147-6.97.398-2.923 51.147 6.97z"
  })), React.createElement("path", {
    transform: "rotate(-16.6 367.59 769.335)",
    fill: "url(#prefix__f)",
    d: "M478.16 289.78h149.99v92.18H478.16z"
  }), React.createElement("path", {
    fill: "#f4f6f7",
    d: "M338.972 279.851l138.87-41.399 24.579 82.445-138.87 41.399z"
  }), React.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M368.439 292.053l-17.672 5.269-3.897-13.072 17.672-5.268zM440.694 298.216l-67.84 20.224-1.262-4.236 67.84-20.224zM443.436 307.403l-49.47 14.747-.842-2.827 49.469-14.747z"
  })), React.createElement("path", {
    transform: "rotate(-16.6 152.066 797.47)",
    fill: "url(#prefix__g)",
    d: "M262.69 317.89h149.99v92.18H262.69z"
  }), React.createElement("path", {
    fill: "#f4f6f7",
    d: "M123.48 307.94l138.871-41.399 24.578 82.445-138.87 41.399z"
  }), React.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M152.97 320.184l-17.671 5.269-3.897-13.072 17.671-5.268zM225.223 326.33l-67.84 20.224-1.262-4.236 67.84-20.224zM225.83 336.215l-49.556 14.97-.855-2.832 49.555-14.97z"
  })), React.createElement("path", {
    transform: "rotate(-21.13 768.445 440.202)",
    fill: "url(#prefix__h)",
    d: "M852.9 58.94h149.99v92.18H852.9z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M712.331 55.604L847.498 3.366l31.013 80.246-135.167 52.238z"
  }), React.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M742.623 65.433l-17.2 6.647-4.917-12.723 17.2-6.647zM815.138 65.862l-66.03 25.519-1.594-4.123 66.03-25.519zM818.593 74.807l-48.15 18.609-1.063-2.752 48.15-18.608z"
  })), React.createElement("path", {
    transform: "rotate(-21.13 460.58 512.496)",
    fill: "url(#prefix__i)",
    d: "M567.89 145.23h104.38v64.15H567.89z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M430.055 132.255l94.06-36.352 21.582 55.845-94.06 36.351z"
  }), React.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M451.148 139.099l-11.967 4.625-3.421-8.852 11.967-4.625zM501.609 139.4l-45.948 17.757-1.11-2.873 45.948-17.757zM504.007 145.617l-33.505 12.949-.74-1.913 33.506-12.948z"
  })), React.createElement("path", {
    transform: "rotate(-21.13 32.24 612.89)",
    fill: "url(#prefix__j)",
    d: "M139.61 245.6h104.38v64.15H139.61z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M1.756 232.614l94.06-36.351 21.582 55.845-94.06 36.35z"
  }), React.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M22.89 239.509l-11.967 4.625-3.42-8.852 11.967-4.625zM73.342 239.803l-45.948 17.758-1.11-2.873 45.948-17.758zM75.75 246.027l-33.506 12.948-.739-1.912 33.505-12.948z"
  })), React.createElement("path", {
    transform: "rotate(-21.13 686.806 584.76)",
    fill: "url(#prefix__k)",
    d: "M794.07 217.5h104.38v64.15H794.07z"
  }), React.createElement("path", {
    fill: "#f4f6f7",
    d: "M656.243 204.55l94.06-36.35 21.583 55.844-94.06 36.351z"
  }), React.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M677.333 211.353l-11.968 4.625-3.42-8.852 11.967-4.625zM727.785 211.657l-45.948 17.757-1.11-2.872 45.947-17.758zM730.192 217.88l-33.505 12.95-.74-1.913 33.506-12.948z"
  })), React.createElement("path", {
    transform: "rotate(-21.13 512.787 438.873)",
    fill: "url(#prefix__l)",
    d: "M620.08 71.62h104.38v64.15H620.08z"
  }), React.createElement("path", {
    fill: "#f4f6f7",
    d: "M482.25 58.65L576.31 22.3l21.583 55.844-94.06 36.352z"
  }), React.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M503.333 65.487l-11.967 4.625-3.421-8.852 11.967-4.625zM553.794 65.788l-45.948 17.757-1.11-2.873 45.948-17.757zM556.2 72.012L522.697 84.96l-.739-1.912L555.462 70.1z"
  })), React.createElement("path", {
    transform: "rotate(-21.13 848.754 456.263)",
    fill: "url(#prefix__m)",
    d: "M956.01 89.02h104.38v64.15H956.01z"
  }), React.createElement("path", {
    fill: "#f4f6f7",
    d: "M818.187 76.072l94.06-36.35 21.582 55.844-94.06 36.351z"
  }), React.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M839.266 82.861L827.3 87.486l-3.421-8.852 11.967-4.625zM889.718 83.166l-45.948 17.757-1.11-2.873 45.948-17.757zM892.128 89.399l-33.505 12.948-.739-1.912 33.505-12.949z"
  })), React.createElement("path", {
    transform: "rotate(-21.13 42.947 484.396)",
    fill: "url(#prefix__n)",
    d: "M150.32 117.12H254.7v64.15H150.32z"
  }), React.createElement("path", {
    fill: "#f4f6f7",
    d: "M12.48 104.132l94.06-36.351 21.583 55.844-94.06 36.351z"
  }), React.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M33.586 111.021l-11.968 4.625-3.42-8.852 11.967-4.625zM84.047 111.322l-45.948 17.757-1.11-2.872 45.948-17.758zM86.444 117.55L52.94 130.497l-.74-1.912 33.505-12.949z"
  })), React.createElement("path", {
    transform: "rotate(-82.24 397.223 301.933)",
    fill: "url(#prefix__o)",
    d: "M436.99 169.08h92.18v149.99h-92.18z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M273.305 241.03l11.616-85.242 143.583 19.566-11.616 85.242z"
  }), React.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M306.687 179.173l-18.271-2.49 1.841-13.515 18.271 2.49zM369.957 214.597l-70.141-9.558.596-4.38 70.142 9.559zM368.665 224.101l-51.148-6.97.399-2.923 51.147 6.97z"
  })), React.createElement("path", {
    d: "M551.12 449.54a64.35 64.35 0 0 0-19.31-39.88c-13.14-12.75-36.37-29.66-75-42.19-70.55-22.91-97.12-43.06-128.27-98l-27.49-67.8v31.15l-17.41-66s-7.79 70.09 16 126c0 0-11.91 10.08 0 27.49 0 0-28.4-4.58-4.58 42.15l20.16 29.32s-20.16 9.16 8.25 41.23L340 448.56s-39.4 12.83 12.83 58.64c0 0 66.88 54.06 120.94 38.48C521.12 532 555.8 498 551.12 449.54z",
    transform: "translate(-131.56 -35)",
    fill: "url(#prefix__p)"
  }), React.createElement("path", {
    d: "M416.3 412.31a62.79 62.79 0 0 0-18.86-38.91c-12.82-12.44-35.49-28.94-73.13-41.17-68.84-22.35-94.76-42-125.16-95.66l-26.82-66.15v30.4l-17-64.37s-7.6 68.39 15.64 122.92c0 0-11.62 9.83 0 26.82 0 0-27.71-4.47-4.47 41.12l19.67 28.61s-19.67 8.94 8 40.23l16.09 15.2s-38.44 12.52 12.52 57.21c0 0 65.26 52.74 118 37.55 46.25-13.3 80.09-46.47 75.52-93.8z",
    fill: "#dfe5ee"
  }), React.createElement("path", {
    d: "M213.92 308.54L162.07 180.7s5.36 60.79 18.77 86.72c0 0-17-11.62 7.15 37.55 0 0-51.85-39.33 0 40.23l20.56 19.67s-36.53-15.65-17.65 16a89.45 89.45 0 0 0 28.9 29.53l15.57 9.91s-51.85-16.09-17.88 31.29c0 0 36.65 34.87 59.9 37.55 0 0-59.9-38.44-45.59-52.74s53.64 10.7 53.64 10.7-69.73-48.27-66.15-60.79 37.55 16.09 37.55 16.09-71.52-68.84-67.94-79.56 5.36-11.62 28.61 11.62c0 0-30.4-42.91-25.93-49.17s22.34 23.24 22.34 23.24z",
    fill: "#ebf1f6"
  }), React.createElement("path", {
    d: "M390.93 464.09s50-59-47.38-93a493 493 0 0 1-71.77-31.22A176.36 176.36 0 0 1 185.61 233c-2.41-8.49-3.52-14.89-2.09-16.57 0 0 29.5 78.67 91.19 106.38l81.35 30.4s92.98 34.9 34.87 110.88z",
    fill: "#ebf1f6"
  }), React.createElement("path", {
    d: "M577 449.54a64.35 64.35 0 0 1 19.31-39.88c13.14-12.75 36.37-29.66 75-42.19 70.55-22.91 97.12-43.06 128.27-98L827 201.63v31.15l17.41-66s7.79 70.09-16 126c0 0 11.91 10.08 0 27.49 0 0 28.4-4.58 4.58 42.15l-20.16 29.32s20.17 9.17-8.26 41.26l-16.49 15.58s39.4 12.83-12.83 58.64c0 0-66.88 54.06-120.94 38.48C607 532 572.31 498 577 449.54z",
    transform: "translate(-131.56 -35)",
    fill: "url(#prefix__q)"
  }), React.createElement("path", {
    d: "M448.69 412.31a62.79 62.79 0 0 1 18.84-38.91c12.82-12.44 35.49-28.94 73.13-41.17 68.84-22.35 94.76-42 125.16-95.66l26.82-66.15v30.4l17-64.37s7.6 68.39-15.64 122.92c0 0 11.62 9.83 0 26.82 0 0 27.71-4.47 4.47 41.12l-19.67 28.61s19.67 8.94-8 40.23l-16.09 15.2s38.44 12.52-12.52 57.21c0 0-65.26 52.74-118 37.55-46.23-13.3-80.07-46.47-75.5-93.8z",
    fill: "#dfe5ee"
  }), React.createElement("path", {
    d: "M651.08 308.54l51.85-127.84s-5.36 60.79-18.77 86.72c0 0 17-11.62-7.15 37.55 0 0 51.85-39.33 0 40.23l-20.57 19.66s36.53-15.65 17.65 16a89.45 89.45 0 0 1-28.9 29.53l-15.57 9.91s51.82-16.1 17.88 31.28c0 0-36.65 34.87-59.9 37.55 0 0 59.9-38.44 45.59-52.74s-53.64 10.73-53.64 10.73 69.73-48.27 66.15-60.79-37.55 16.09-37.55 16.09 71.52-68.84 67.94-79.56-5.36-11.62-28.61 11.62c0 0 30.4-42.91 25.93-49.17s-22.33 23.23-22.33 23.23z",
    fill: "#ebf1f6"
  }), React.createElement("path", {
    d: "M474.07 464.09s-50-59 47.38-93a493 493 0 0 0 71.77-31.22A176.36 176.36 0 0 0 679.38 233c2.41-8.49 3.52-14.89 2.09-16.57 0 0-29.5 78.67-91.19 106.38l-81.35 30.4s-92.97 34.9-34.86 110.88z",
    fill: "#ebf1f6"
  }), React.createElement("path", {
    d: "M539.78 551.26a.92.92 0 0 0 1.09.14 3.72 3.72 0 0 1-1.09-.14z",
    transform: "translate(-131.56 -35)",
    fill: "url(#prefix__r)"
  }), React.createElement("path", {
    d: "M661.88 352.81c-2.15-.63-5.23-1.65-8.93-2.93a46.87 46.87 0 0 0 8.28-16.68l-.32.12c.11-.37.22-.74.32-1.11-7.1 2.88-15-2-20-8.28s-8.4-14.06-13.88-19.84a63.46 63.46 0 0 0-7.36-6.33c-1.62-1.25-3.36-2.55-5.33-2.61-3.2-.09-5.7 3-8.79 4a12 12 0 0 1-6.13-.23c-7.94-1.82-15.61-5.19-23.68-6.07a27.75 27.75 0 0 0-12.85 1.45c-4.07 1.55-5.93 4.62-9.23 7.09-3.55 2.65-10.62 2.59-14.8 3.06a106 106 0 0 1-15.29.63 35.79 35.79 0 0 0-8.8.33c-6.07 1.33-11 6.16-15.51 10.8a8 8 0 0 0-2.56 4 5.07 5.07 0 0 0 0 1.33 8.63 8.63 0 0 0 .61 3.53 46.66 46.66 0 0 0 5.89 11.71c1.86 2.66 4 5.17 5.08 8.32a16.14 16.14 0 0 1 .78 4.79 34.85 34.85 0 0 1-.54 5.15 64.75 64.75 0 0 1-3.94 13.71c-1 2.34-2.08 4.68-2.3 7.24a11.45 11.45 0 0 0 0 1.53c-.3 7.91 7.68 13.6 9.22 21.46a12.82 12.82 0 0 1 .22 2c-.17 4.9-3 9.7-7.08 11.59.36.14.73.26 1.1.39a10 10 0 0 1-1.1.6c.75.29 1.52.53 2.3.75a53.43 53.43 0 0 0-11.66 14.29C481.82 454.36 388 504.9 388 504.9s.53.29 1.39.79l-1.13.73c-8.12 5.4-27.19 21.16-10 41.08 0 0 13.46-21.23 22.88-30.28.42-.4.83-.78 1.24-1.13a2.75 2.75 0 0 1 .36 2.18l61.72-34.68s21.93-15.36 28.05-18.83c2.11-1.19 7.48-4.5 13.91-6l-.72.3a28.17 28.17 0 0 1 7.08-1c10.93.17 22.76 8.17 26.66 39.86 5.23 42.44 2.8 50.09 1.13 51.14a3.08 3.08 0 0 1-.57-.06 1 1 0 0 0 .16.12 3.21 3.21 0 0 1-.67-.12 1 1 0 0 0 .91.22.85.85 0 0 0 .69-.08 7.09 7.09 0 0 0 .82 0q0 .58-.08 1.19c-.08 0-.49.22-.05.25-.13 2.39-.12 5 0 7.72-5.43.3-10.85.62-15.6.91l.42-2.24.19-1c4.17-.33 8.12-1.56 8.59-4.94 1-7.43-9.18-11.39-17.85-11.89s-60.7 3-60.7 3-7.8 10.1 16.94 13.23q1.1.57 2.29 1.25c9.69 5.53 22.84 15.69 29.14 20.71l.88.7-2.83 2.25c15.3 3.47 30.09 61.93 38.26 88.68s26 25.76 40.81 21.8c13.86-3.72 15.63-44 15.8-49v-.52l24.65 30.39 1.87 2.31q1.08.56 2.13 1.06c18.67 8.88 39.29-8.15 33.42-27.52-5.93-19.57-15.13-48.49-21.27-60.73-5.14-10.24-11.78-27.25-15.81-37.91a12.8 12.8 0 0 0 1.52-.73s-.09-.48-.25-1.35l.25-.14s-5.93-30.82-6.26-52.71v-1.15-.71c4.46-1 7.28-1.41 7.28-1.41l.08-1-.52.11 2.48-28.39s9.1-19.37 2.13-27.44a16.94 16.94 0 0 1-4.09-8.38c-1.16-7.42 0-19.79 16.24-30.07 25-15.85 34.69-28.73 34.69-28.73s.52-9.47-14.78-13.93zm-49.63 19.69v-13.12c4.64-.23 9.37.31 14 0a35.5 35.5 0 0 0 6.77-1.13l1.12.78a123.38 123.38 0 0 1-21.89 13.47zm-70.87 205.63c1.84 1.27 3.68 2.59 5.49 3.91 1.12 6.47 2.12 11 2.19 11.36a89.69 89.69 0 0 0-7.68-15.27z",
    transform: "translate(-131.56 -35)",
    fill: "url(#prefix__s)"
  }), React.createElement("path", {
    d: "M449.44 532.35l-1.08 5.86-.82 4.48-1.51 8.2-14.64 10.25s-1.32-1.12-3.5-2.91c-6-4.94-18.61-15-27.87-20.4a31.21 31.21 0 0 0-7.66-3.53z",
    fill: "#ffbdc6"
  }), React.createElement("path", {
    d: "M449.44 532.35l-1.08 5.86a45.49 45.49 0 0 1-9.66-.49l-34.16.49c-1.62-.1-3.13-.22-4.54-.37a31.21 31.21 0 0 0-7.66-3.53z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M438.69 536.74s17.08 2.93 18.05-4.39-8.78-11.22-17.08-11.71-58.07 2.93-58.07 2.93-8.78 11.71 22.93 13.66z",
    fill: "#7679b4"
  }), React.createElement("path", {
    d: "M449.44 532.35l-1.08 5.86-.82 4.48-1.51 8.2-14.64 10.25s-1.32-1.12-3.5-2.91c-6-4.94-18.61-15-27.87-20.4a31.21 31.21 0 0 0-7.66-3.53z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M449.44 532.35l-1.08 5.86a45.49 45.49 0 0 1-9.66-.49l-34.16.49c-1.62-.1-3.13-.22-4.54-.37a31.21 31.21 0 0 0-7.66-3.53z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M438.69 536.74s17.08 2.93 18.05-4.39-8.78-11.22-17.08-11.71-58.07 2.93-58.07 2.93-8.78 11.71 22.93 13.66z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#a66477",
    d: "M386.73 296.18h89.3v105.89h-89.3z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M386.73 296.18h89.3v105.89h-89.3z"
  }), React.createElement("path", {
    d: "M282.06 477.46c-1.47.37-3.35 1.79-5.44 3.85-9 8.91-21.89 29.82-21.89 29.82-16.48-19.63 1.71-35.13 9.53-40.47 1.89-1.29 3.16-2 3.16-2zM448.44 329.61s4.39 30.74 19.52 38.06-19.52 21-19.52 21l-47.33-17.57s26.84-8.78 21.47-34.65zM397.7 514.54l-1.08 5.86-.82 4.48-1.51 8.2-14.64 10.25s-1.32-1.12-3.5-2.91c-6-4.94-18.61-15-27.87-20.4a31.21 31.21 0 0 0-7.66-3.53z",
    fill: "#ffbdc6"
  }), React.createElement("path", {
    d: "M397.7 514.54l-1.08 5.86a45.49 45.49 0 0 1-9.66-.49l-34.16.49c-1.62-.1-3.13-.22-4.54-.37a31.21 31.21 0 0 0-7.66-3.53z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M386.97 518.93s17.08 2.93 18.05-4.39-8.78-11.22-17.08-11.71-58.07 2.93-58.07 2.93-8.78 11.71 22.93 13.66z",
    fill: "#7679b4"
  }), React.createElement("path", {
    d: "M395.8 524.89l-1.51 8.2-14.64 10.25s-1.32-1.12-3.5-2.91l19.36-15.88z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M492.44 636.6q-1-.49-2-1l-1.79-2.27-23.61-29.98v.51c-.16 5-1.85 44.62-15.11 48.28-14.15 3.9-31.23 4.88-39-21.47s-22-83.93-36.6-87.34l21.71-17.81s14.38 16.82 20.25 32.92c-.22-1-10.15-47.41-1.95-55.61h71.2s11 31.32 18.54 46.84c5.87 12.05 14.68 40.54 20.35 59.82 5.61 19.08-14.11 35.86-31.99 27.11z",
    fill: "#7679b4"
  }), React.createElement("path", {
    d: "M490.44 511.61c-11 6.51-59.29 3.86-75 2.8l-4.27-.31c-.46 0 .07-.26.07-.26l.44-4.43 11.71-29.77 62.7-36.35c-1.27 3.83-1.7 9.69-1.6 16.4.25 21.57 5.95 51.92 5.95 51.92z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M490.44 510.15c-11 6.51-59.29 3.86-75 2.8l-4.27-.31-.71-.05.78-.2 3.85-1 8.3-33.18 62.7-36.35c-1.27 3.83-1.7 9.69-1.6 16.4.25 21.54 5.95 51.89 5.95 51.89z",
    fill: "#f2f1f2"
  }), React.createElement("path", {
    d: "M484.44 458.24c-12.75 2.94-40.81 11.57-51.59 32.4-7.19 13.88-13.24 19.83-17.46 22.32l-4.27-.31.07-.26 3.85-1 8.3-33.18 62.7-36.35c-1.29 3.8-1.71 9.66-1.6 16.38zM267.44 468.67l14.64 8.78c-1.47.37-3.35 1.79-5.44 3.85-1.22-3.56-8.89-8.53-12.36-10.64 1.87-1.29 3.16-1.99 3.16-1.99zM408.49 513.22a.87.87 0 0 1-1-.14 3.52 3.52 0 0 0 1 .14z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M441.62 365.72s-13.17 1.46-22.45-8.3c0 0-39 11.22-52.21 36.6s-103 75.15-103 75.15 15.61 8.78 14.15 13.17l59-34.16s21-15.13 26.84-18.54 38.06-24.4 44.89 32.69 0 50.26 0 50.26 9.76 3.42 23.91-23.91S490.9 455 490.9 455l2.44-28.79s8.71-19.08 2-27a16.89 16.89 0 0 1-3.91-8.26c-1.11-7.31 0-19.49 15.53-29.61 23.91-15.61 33.18-28.3 33.18-28.3s.49-9.27-14.15-13.66-74.17-28.3-74.17-28.3l-2 8.3 46.84 33.18s-23.42 19-42 18.54c.14-.02 3.55 14.13-13.04 14.62z",
    fill: "#565388"
  }), React.createElement("path", {
    d: "M450.66 343a95.9 95.9 0 0 1-2.7-11.92l-25.86 6.83a28.51 28.51 0 0 1-.59 14.92 27.81 27.81 0 0 0 29.15-9.83z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 429.18,
    cy: 324.48,
    r: 27.81,
    fill: "#ffbdc6"
  }), React.createElement("path", {
    d: "M443.97 261.24c7.72.87 15.06 4.19 22.65 6a11.19 11.19 0 0 0 5.86.22c3-.91 5.35-4 8.41-3.91 1.89.06 3.55 1.34 5.1 2.57a61.24 61.24 0 0 1 7 6.24c5.24 5.69 8.49 13.35 13.28 19.54s12.32 11 19.11 8.16c-4.62 18-19.75 31.71-36.12 32.83-6.53.45-13.22-.92-19.54 1a17.11 17.11 0 0 1-4.93 1.2c-3.64 0-6.57-3.34-8.84-6.59-5.32-7.64-9.53-16.31-15.52-23.28-2-2.3-4.31-4.49-7.11-4.91s-5.37.91-7.86 2.2c-4.11 2.13-8.32 4.33-11.5 8s-5.19 9.1-3.88 14c.71 2.66 2.33 5.06 2.36 7.84.05 4.43-3.86 7.68-4.64 12a46.24 46.24 0 0 0-.19 5.46c-.34 5.92-4.21 10.77-8.25 14.49-1.57 1.45-3.31 3-3.77 5.23-.31 1.53 0 3.14-.2 4.69-.59 3.84-4.42 5.79-7.81 6.29a22.64 22.64 0 0 1-11.72-1.39c4.74-2.25 7.65-8.62 6.56-14.34-1.51-7.92-9.47-13.6-8.8-21.67a25.07 25.07 0 0 1 2.2-7.13 65.23 65.23 0 0 0 3.77-13.51c.59-3.57.88-7.36-.23-10.77-1-3.1-3.09-5.57-4.86-8.19a46.51 46.51 0 0 1-5.6-11.51 8.08 8.08 0 0 1-.54-3.82 7.9 7.9 0 0 1 2.45-3.95c4.36-4.57 9-9.33 14.83-10.63a33.26 33.26 0 0 1 8.42-.32 98.53 98.53 0 0 0 14.63-.62c4-.47 10.76-.4 14.16-3 3.16-2.43 4.93-5.46 8.83-7a25.84 25.84 0 0 1 12.29-1.42zM459.44 548.46s16.1 31.72 11.22 41.48M488.63 633.28l-23.59-29.93v.51s-1.36-9.68 3.13-6.43c9.84 7.12 25.58 18.79 25.92 20.8s-3.19 10.08-5.46 15.05z",
    opacity: 0.1
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M455.28 351.08s2 8.24-4.45 12.36c9.9-1.7 10.34-9.4 10-12.75a31.23 31.23 0 0 1-5.55.39zM269.86 467.21s89.78-49.77 103-75.15c9.45-18.21 32.23-29.13 44.34-33.85-8.83 3-38.54 14.3-49.7 35.8-13.17 25.37-103 75.15-103 75.15zM472.73 347.2c15.28-4.75 29.88-16.62 29.88-16.62l-46.84-33.18 1.07-4.55-4.49-1.79-2 8.3 46.84 33.18a113 113 0 0 1-24.46 14.66zM473.03 459.65a116.07 116.07 0 0 1 18.41-4.65l.08-.94a124.31 124.31 0 0 0-18.49 5.59zM416.25 510.77h-.43a.88.88 0 0 1-1-.14 3.64 3.64 0 0 0 1 .14c1.6-.93 4-8.22-1-50.4-5.39-45-26.55-41.49-38.13-36.31 11.84-3.26 28.13-.44 32.76 38.26 5 42.18 2.64 49.46 1 50.4a10.82 10.82 0 0 0 5.8-1.95zM410.44 512.73a3.64 3.64 0 0 1-1-.14.88.88 0 0 0 1 .14z"
  })), React.createElement("path", {
    d: "M443.97 260.26c7.72.87 15.06 4.19 22.65 6a11.19 11.19 0 0 0 5.86.22c3-.91 5.35-4 8.41-3.91 1.89.06 3.55 1.34 5.1 2.57a61.24 61.24 0 0 1 7 6.24c5.24 5.69 8.49 13.35 13.28 19.54s12.32 11 19.11 8.16c-4.62 18-19.75 31.71-36.12 32.83-6.53.45-13.22-.92-19.54 1a17.11 17.11 0 0 1-4.93 1.2c-3.64 0-6.57-3.34-8.84-6.59-5.32-7.64-9.53-16.31-15.52-23.28-2-2.3-4.31-4.49-7.11-4.91s-5.37.91-7.86 2.2c-4.11 2.13-8.32 4.33-11.5 8s-5.19 9.1-3.88 14c.71 2.66 2.33 5.06 2.36 7.84.05 4.43-3.86 7.68-4.64 12a46.24 46.24 0 0 0-.19 5.46c-.34 5.92-4.21 10.77-8.25 14.49-1.57 1.45-3.31 3-3.77 5.23-.31 1.53 0 3.14-.2 4.69-.59 3.84-4.42 5.79-7.81 6.29a22.64 22.64 0 0 1-11.72-1.39c4.74-2.25 7.65-8.62 6.56-14.34-1.51-7.92-9.47-13.6-8.8-21.67a25.07 25.07 0 0 1 2.2-7.13 65.23 65.23 0 0 0 3.77-13.51c.59-3.57.88-7.36-.23-10.77-1-3.1-3.09-5.57-4.86-8.19a46.51 46.51 0 0 1-5.6-11.53 8.08 8.08 0 0 1-.54-3.82 7.9 7.9 0 0 1 2.45-3.95c4.36-4.57 9-9.33 14.83-10.63a33.26 33.26 0 0 1 8.42-.32 98.53 98.53 0 0 0 14.63-.62c4-.47 10.76-.4 14.16-3 3.16-2.43 4.93-5.46 8.83-7a25.84 25.84 0 0 1 12.29-1.4z",
    fill: "#a66477"
  }));
};

UndrawMessenger.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawMessenger;