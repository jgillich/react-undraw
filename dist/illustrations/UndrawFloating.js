function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawFloating = function UndrawFloating(_props) {
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
    viewBox: "0 0 1165.21 858",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 739.11,
    y1: 600.75,
    x2: 739.11,
    y2: 35,
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
    x1: 686.68,
    y1: 717.39,
    x2: 686.68,
    y2: 670.55,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 645.13,
    y1: 725.98,
    x2: 645.13,
    y2: 664.77,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 748.64,
    y1: 691.12,
    x2: 748.64,
    y2: 649.87,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 726.3,
    y1: 801.01,
    x2: 726.3,
    y2: 704.54,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 765.68,
    y1: 709.46,
    x2: 765.68,
    y2: 663.19,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 725,
    y1: 858,
    x2: 725,
    y2: 712.51,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 325.86,
    y1: 102.02,
    x2: 325.86,
    y2: 41.73,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 314.63,
    y1: 112.46,
    x2: 314.63,
    y2: 96.95,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 96.86,
    y1: 558.16,
    x2: 96.86,
    y2: 473.87,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__k",
    x1: 85.49,
    y1: 580.32,
    x2: 85.49,
    y2: 558.64,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__l",
    x1: 401.86,
    y1: 498.21,
    x2: 401.86,
    y2: 402,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__m",
    x1: 390.42,
    y1: 526.19,
    x2: 390.42,
    y2: 501.45,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__n",
    x1: 281.25,
    y1: 152.04,
    x2: 281.25,
    y2: 80.66,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__o",
    x1: 269.97,
    y1: 167.89,
    x2: 269.97,
    y2: 149.53,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__p",
    x1: 35.42,
    y1: 97.02,
    x2: 35.42,
    y2: 46.61,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__q",
    x1: 24.26,
    y1: 102.64,
    x2: 24.26,
    y2: 89.68,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__r",
    x1: 452.42,
    y1: 84.02,
    x2: 452.42,
    y2: 33.61,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__s",
    x1: 441.26,
    y1: 89.64,
    x2: 441.26,
    y2: 76.68,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__t",
    x1: 102.82,
    y1: 287.6,
    x2: 102.82,
    y2: 212.78,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__u",
    x1: 91.51,
    y1: 305.14,
    x2: 91.51,
    y2: 285.9,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__v",
    x1: 999.82,
    y1: 89.49,
    x2: 999.82,
    y2: 19,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__w",
    x1: 988.54,
    y1: 104.92,
    x2: 988.54,
    y2: 86.79,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__x",
    x1: 1136.82,
    y1: 98.6,
    x2: 1136.82,
    y2: 23.78,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__y",
    x1: 1125.51,
    y1: 116.14,
    x2: 1125.51,
    y2: 96.9,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__z",
    x1: 1070.86,
    y1: 285.65,
    x2: 1070.86,
    y2: 219,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__A",
    x1: 1059.6,
    y1: 299.19,
    x2: 1059.6,
    y2: 282.05,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__B",
    x1: 1140.25,
    y1: 492.61,
    x2: 1140.25,
    y2: 419,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__C",
    x1: 1128.95,
    y1: 509.55,
    x2: 1128.95,
    y2: 490.62,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M1014.54 317.87c0 156.23-130.51 282.87-269.47 282.87S463.68 474.1 463.68 317.87 606.11 35 745.07 35s269.47 126.65 269.47 282.87z",
    transform: "translate(-10.88 -19)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M990.76 298.87c0 148.91-124.4 269.63-256.86 269.63S465.7 447.79 465.7 298.87 601.45 29.24 733.91 29.24 990.76 150 990.76 298.87z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M705.6 687.58c0-9.41-8.47-17-18.92-17s-18.92 7.63-18.92 17c0 7.93 6 14.58 14.19 16.48v13.33h9.46v-13.33c8.16-1.9 14.19-8.54 14.19-16.48z",
    transform: "translate(-10.88 -19)",
    fill: "url(#prefix__b)"
  }), React.createElement("path", {
    d: "M637.46 689.71l-19.16-19.16-.38.38v-.09c-2-4.24-5.4-6.86-7.52-5.85s-2.2 5.28-.17 9.52a16.23 16.23 0 0 0 1.55 2.59l-2 2s49 49 68.14 46.85l3.61-13.36s-16.38.54-44.07-22.88z",
    transform: "translate(-10.88 -19)",
    fill: "url(#prefix__c)"
  }), React.createElement("circle", {
    cx: 675.34,
    cy: 669.16,
    r: 15.76,
    fill: "#f8c198"
  }), React.createElement("path", {
    fill: "#f8c198",
    d: "M671.4 680.99h7.88v15.76h-7.88z"
  }), React.createElement("rect", {
    x: 659.58,
    y: 690.84,
    width: 31.52,
    height: 70.93,
    rx: 8,
    ry: 8,
    fill: "#605b38"
  }), React.createElement("path", {
    d: "M668.83 692.27s-15.16.54-40.78-21.14l-17.73-17.73-7.88 7.88s45.32 45.32 63 43.35z",
    fill: "#605b38"
  }), React.createElement("ellipse", {
    cx: 617.26,
    cy: 674.37,
    rx: 3.94,
    ry: 7.88,
    transform: "rotate(-25.56 569.942 688.849)",
    fill: "#f8c198"
  }), React.createElement("circle", {
    cx: 748.64,
    cy: 670.49,
    r: 20.63,
    fill: "url(#prefix__d)"
  }), React.createElement("circle", {
    cx: 748.64,
    cy: 670.49,
    r: 18.65,
    fill: "#f8c198"
  }), React.createElement("path", {
    fill: "#f8c198",
    d: "M743.97 684.48h9.33v18.65h-9.33z"
  }), React.createElement("path", {
    d: "M772.46 713.56h-23.1a7.89 7.89 0 0 0-6.44 3.36c-17.55 2.28-53.66 5.8-57.32-3.36l-1.68 1.26a18.46 18.46 0 0 0-1.23-3.35c-2.32-4.84-6.16-7.83-8.58-6.67s-2.51 6-.19 10.86a17.3 17.3 0 0 0 3 4.42l-1 .77s36.93 15.55 65.59 13.61v58.67a7.91 7.91 0 0 0 7.89 7.89h23.1a7.91 7.91 0 0 0 7.89-7.89v-71.69a7.91 7.91 0 0 0-7.93-7.88z",
    transform: "translate(-10.88 -19)",
    fill: "url(#prefix__e)"
  }), React.createElement("rect", {
    x: 729.98,
    y: 696.14,
    width: 37.3,
    height: 83.93,
    rx: 8,
    ry: 8,
    fill: "#53ad9b"
  }), React.createElement("path", {
    d: "M740.47 698.05s-59.45 9.74-64.11-1.92l-9.33 7s44.3 18.65 72.27 11.66 1.17-16.74 1.17-16.74z",
    fill: "#53ad9b"
  }), React.createElement("ellipse", {
    cx: 680.25,
    cy: 715.14,
    rx: 4.66,
    ry: 9.33,
    transform: "rotate(-25.56 632.914 729.624)",
    fill: "#f8c198"
  }), React.createElement("path", {
    d: "M741.29 669.35a2.36 2.36 0 0 1 2.34 1.37c1.92-4.2 6.46-6.77 11-7.36s9.21.51 13.58 2c5.59 1.91 11.06 4.55 15.27 8.69s7 10 6.51 15.87c-.38 4.33-2.47 8.3-4.53 12.12-1.27 2.37-2.65 4.83-4.92 6.26-4.74 3-11.46-.17-14-5.16-.84-1.65-1.36-3.45-2.29-5-2.81-4.84-8.63-6.82-13.64-9.33-8.76-4.45-9.45-10.57-9.32-19.46z",
    transform: "translate(-10.88 -19)",
    fill: "url(#prefix__f)"
  }), React.createElement("path", {
    fill: "url(#prefix__g)",
    d: "M640.8 712.51h168.4V858H640.8z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M645.79 712.51h159.59v137.92H645.79z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#ad7676",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M803.41 712.51l6.66-126.03M649.73 712.51l-9.01-126.03"
  }), React.createElement("path", {
    d: "M732.82 669.55A18.64 18.64 0 0 1 750.05 651c-.47 0-.94-.07-1.42-.07a18.65 18.65 0 0 0 0 37.3c.48 0 .95 0 1.42-.07a18.64 18.64 0 0 1-17.23-18.61zM661.87 667.66a18.64 18.64 0 0 1 17.25-18.58c-.47 0-.94-.07-1.42-.07a18.65 18.65 0 0 0 0 37.3c.48 0 .95 0 1.42-.07a18.64 18.64 0 0 1-17.25-18.58z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M672.23 682a18.87 18.87 0 0 1 2.82 2.3c3.35 4.17-3 10.63-.62 15.43 1.05 2.12 3.55 3.2 4.67 5.28 2.13 3.95-1.44 9.73 1.65 13 .83.87 2 1.38 2.65 2.4 1.25 2-.5 4.66-.22 7 .35 3 3.63 4.6 6.46 5.66 2.41.9 5.57 1.62 7.21-.37.79-1 .94-2.31 1.68-3.32 1.38-1.89 4.16-1.9 6.19-3.06 3.15-1.8 3.92-6 3.92-9.61s-.36-7.55 1.62-10.6c2.24-3.46 6.89-4.75 9.13-8.21 3.39-5.26-.35-12.61 2.07-18.38.84-2 2.38-3.69 2.88-5.79.83-3.47-1.39-7-4-9.33s-5.87-4.16-8.08-7c-1.55-2-2.56-4.35-4.39-6.06-4.44-4.14-11.5-2.66-17.43-4-5.49-1.19-10.55-4.95-16.14-4.32-4.89.55-8.71 4.31-12.12 7.86a6.29 6.29 0 0 0-1.9 2.92c-1 4.83 3.69 9.8 5.75 13.34 2.63 4.74 1.82 11.19 6.2 14.86z",
    fill: "#fccc63"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M662.12 654.79c3.41-3.55 7.23-7.31 12.12-7.86 5.58-.63 10.65 3.13 16.14 4.32 5.93 1.29 13-.19 17.43 4 1.83 1.71 2.84 4.1 4.39 6.06 2.21 2.79 5.43 4.58 8.08 7a12.9 12.9 0 0 1 3.95 5.88c0-.11.07-.22.1-.33.83-3.47-1.39-7-4.05-9.33s-5.87-4.16-8.08-7c-1.55-2-2.56-4.35-4.39-6.06-4.44-4.14-11.5-2.66-17.43-4-5.49-1.19-10.55-4.95-16.14-4.32-4.89.55-8.71 4.31-12.12 7.86a6.29 6.29 0 0 0-1.9 2.92 7.58 7.58 0 0 0 .13 3.32 7.35 7.35 0 0 1 1.77-2.46zM683.52 724.43a9.29 9.29 0 0 0-.34 3 4.32 4.32 0 0 0 .27 1.08c.32-1.42.67-2.85.07-4.08zM679.69 710.59a18.28 18.28 0 0 0-.12 5 18.73 18.73 0 0 0 .12-5zM720.81 693.36a46.51 46.51 0 0 0-.17-6.52 46.24 46.24 0 0 0 .17 6.52zM708.6 717.82v-1.07-.54c.01.54 0 1.08 0 1.61zM675.78 689.42c-.72 3.15-2.55 6.61-1.65 9.55.7-3.29 2.62-6.76 1.65-9.55z"
  })), React.createElement("path", {
    d: "M731.82 651.32a2.22 2.22 0 0 1 2.2 1.29c1.81-4 6.08-6.38 10.4-6.94s8.68.48 12.8 1.89c5.27 1.8 10.42 4.29 14.39 8.19s6.62 9.41 6.13 15c-.36 4.08-2.33 7.82-4.27 11.42-1.2 2.23-2.5 4.55-4.64 5.9-4.47 2.81-10.8-.16-13.21-4.86-.79-1.55-1.28-3.25-2.16-4.75-2.65-4.56-8.14-6.42-12.85-8.79-8.27-4.19-8.92-9.96-8.79-18.35z",
    fill: "#263238"
  }), React.createElement("path", {
    d: "M731.82 653.22a2.22 2.22 0 0 1 2.2 1.29c1.81-4 6.08-6.38 10.4-6.94s8.68.48 12.8 1.89c5.27 1.8 10.42 4.29 14.39 8.19a20 20 0 0 1 6.15 12.66c.33-5.41-2.28-10.74-6.15-14.55s-9.12-6.39-14.39-8.19c-4.12-1.41-8.49-2.45-12.8-1.89s-8.59 3-10.4 6.94a2.22 2.22 0 0 0-2.2-1.29v2.36c-.01-.16-.01-.32 0-.47z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M692.76 577.96h59.6v20.81h-59.6z"
  }), React.createElement("path", {
    d: "M733.91 28.3c-3.16 0-6.31.09-9.47.23 128.86 5.56 247.41 124 247.41 269.4s-118.56 263.84-247.41 269.4c3.16.14 6.32.23 9.47.23 132.45 0 256.86-120.72 256.86-269.63S866.36 28.3 733.91 28.3z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M480.83 298.87c0-146.78 131.9-266.17 262.53-269.55-1.89 0-3.78-.08-5.67-.08-132.45 0-268.21 120.76-268.21 269.63S605.24 568.5 737.69 568.5c1.89 0 3.78 0 5.67-.08C612.74 565 480.83 445.66 480.83 298.87z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M639.78 530.66h171.24v55.82H639.78z"
  }), React.createElement("path", {
    d: "M639.77 48.88s-203.4 232.49 0 500l67.17-.23s-185.43-221-8.51-516.55l-33.11 7.55zM816.69 45.33s203.4 236 0 503.54l-67.17-.23s185.43-222.88 8.51-518.44l33.09 6.61z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M356 71.87c0 16.65-14.28 30.13-29.48 30.13s-30.79-13.5-30.79-30.14 15.58-30.14 30.79-30.14S356 55.23 356 71.87z",
    transform: "translate(-10.88 -19)",
    fill: "url(#prefix__h)"
  }), React.createElement("path", {
    d: "M343.71 52.87c0 15.87-13.61 28.73-28.1 28.73s-29.35-12.86-29.35-28.73 14.86-28.73 29.35-28.73 28.1 12.86 28.1 28.73z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: "url(#prefix__i)",
    d: "M305.42 96.95h18.43v15.5h-18.43z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M305.97 96.95h17.46v14.7h-17.46z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#ad7676",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M323.21 96.95l.73-13.43M306.4 96.95l-.99-13.43"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M310.12 98.22a1 1 0 0 0 0 .32.45.45 0 0 0 0 .11.65.65 0 0 0 0-.43zM309.67 96.75a1.9 1.9 0 0 0 0 .53 1.94 1.94 0 0 0 0-.53zM312.84 97.52V97.35v.17z"
  })), React.createElement("path", {
    fill: primaryColor,
    d: "M311.1 82.62h6.52v2.22h-6.52z"
  }), React.createElement("path", {
    d: "M315.61 24h-1c14.1.59 27.07 13.22 27.07 28.71s-13 28.12-27.07 28.71h1c14.49 0 28.1-12.86 28.1-28.73S330.12 24 315.61 24z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M287.92 52.87c0-15.64 14.43-28.36 28.72-28.72h-.62c-14.49 0-29.35 12.86-29.35 28.73s14.85 28.73 29.35 28.73h.62c-14.29-.37-28.72-13.09-28.72-28.74z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M305.31 77.57h18.74v5.95h-18.74z"
  }), React.createElement("path", {
    d: "M305.31 26.23s-22.26 24.77 0 53.28h7.35s-20.29-23.55-.93-55l-3.62.81zM324.66 25.86s22.26 25.15 0 53.66h-7.35s20.29-23.75.93-55.25l3.62.71z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M139 516c0 23.28-20 42.15-41.22 42.15s-43-18.87-43-42.15 21.79-42.15 43-42.15S139 492.74 139 516z",
    transform: "translate(-10.88 -19)",
    fill: "url(#prefix__j)"
  }), React.createElement("path", {
    d: "M126.12 497c0 22.19-19 40.17-39.29 40.17s-41-18-41-40.17 20.77-40.17 41-40.17 39.29 18 39.29 40.17z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    fill: "url(#prefix__k)",
    d: "M72.61 558.64h25.76v21.68H72.61z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M73.37 558.64h24.41v20.55H73.37z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#ad7676",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M97.49 558.64l1.02-18.77M73.98 558.64l-1.38-18.77"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M79.12 560.42a1.35 1.35 0 0 0-.05.45.63.63 0 0 0 0 .16.91.91 0 0 0 .05-.61zM78.56 558.36a2.65 2.65 0 0 0 0 .74 2.72 2.72 0 0 0 0-.74zM82.98 559.44v-.24.24z"
  })), React.createElement("path", {
    fill: "#4d8af0",
    d: "M80.56 538.6h9.12v3.1h-9.12z"
  }), React.createElement("path", {
    d: "M86.85 456.7H85.4c19.71.83 37.85 18.48 37.85 40.14S105.12 536.18 85.4 537h1.45c20.26 0 39.29-18 39.29-40.17s-19.02-40.13-39.29-40.13z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M48.12 497c0-21.87 20.18-39.66 40.16-40.16h-.87c-20.26 0-41 18-41 40.17s20.77 40.17 41 40.17h.87c-19.96-.51-40.16-18.3-40.16-40.18z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#4d8af0",
    d: "M72.45 531.55h26.2v8.32h-26.2z"
  }), React.createElement("path", {
    d: "M72.45 459.76s-31.12 34.64 0 74.5h10.28s-28.37-32.93-1.3-77l-5.07 1.13zM99.52 459.24s31.12 35.17 0 75H89.24S117.61 501 90.54 457l5.07 1z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M450 450.1c0 26.57-22.79 48.1-47.05 48.1s-49.13-21.54-49.13-48.1S378.64 402 402.9 402s47.1 21.54 47.1 48.1z",
    transform: "translate(-10.88 -19)",
    fill: "url(#prefix__l)"
  }), React.createElement("path", {
    d: "M436.82 431.1c0 25.33-21.7 45.9-44.84 45.9s-46.86-20.57-46.86-45.9 23.7-45.85 46.83-45.85 44.87 20.53 44.87 45.85z",
    fill: "#47e6b1"
  }), React.createElement("path", {
    fill: "url(#prefix__m)",
    d: "M375.72 501.45h29.4v24.74h-29.4z"
  }), React.createElement("path", {
    fill: "#f2f2f2",
    d: "M376.59 501.45h27.87v23.45h-27.87z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#ad7676",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M404.11 501.45l1.16-21.44M377.28 501.45l-1.57-21.44"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M383.18 503.47a1.54 1.54 0 0 0-.06.51.72.72 0 0 0 0 .18 1 1 0 0 0 .06-.69zM382.51 501.12a3 3 0 0 0 0 .85 3.1 3.1 0 0 0 0-.85zM387.56 502.35v-.27.27z"
  })), React.createElement("path", {
    fill: "#47e6b1",
    d: "M384.79 478.57h10.41v3.54h-10.41z"
  }), React.createElement("path", {
    d: "M391.98 385.09h-1.65c22.5.95 43.2 21.09 43.2 45.81s-20.7 44.87-43.2 45.81h1.65c23.13 0 44.85-20.53 44.85-45.85s-21.71-45.77-44.85-45.77z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M347.79 431.1c0-25 23-45.26 45.84-45.84h-1c-23.13 0-46.83 20.53-46.83 45.85S369.51 477 392.64 477h1c-22.82-.63-45.85-20.93-45.85-45.9z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#47e6b1",
    d: "M375.54 470.52h29.9v9.49h-29.9z"
  }), React.createElement("path", {
    d: "M375.54 388.59s-35.52 39.54 0 85h11.73s-32.38-37.58-1.49-87.84L380 387zM406.43 388s35.52 40.14 0 85.63H394.7s32.38-37.9 1.49-88.17l5.78 1.13z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M316 116.35c0 19.71-16.47 35.69-34 35.69s-35.5-16-35.5-35.69 18-35.69 35.5-35.69 34 15.98 34 35.69z",
    transform: "translate(-10.88 -19)",
    fill: "url(#prefix__n)"
  }), React.createElement("path", {
    d: "M303.49 97.35c0 18.79-15.69 34-32.41 34s-33.84-15.23-33.84-34 17.13-34 33.84-34 32.41 15.21 32.41 34z",
    fill: "#47e6b1"
  }), React.createElement("path", {
    fill: "url(#prefix__o)",
    d: "M259.34 149.53h21.25v18.36h-21.25z"
  }), React.createElement("path", {
    fill: "#e6e6e6",
    d: "M259.97 149.53h20.13v17.4h-20.13z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#ad7676",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M279.86 149.53l.84-15.9M260.47 149.53l-1.14-15.9"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M264.73 151a1.17 1.17 0 0 0 0 .38.54.54 0 0 0 0 .14.79.79 0 0 0 0-.52zM264.25 149.29a2.31 2.31 0 0 0 0 .63 2.36 2.36 0 0 0 0-.63zM267.9 150.2v-.2.2z"
  })), React.createElement("path", {
    fill: "#47e6b1",
    d: "M265.9 132.56h7.52v2.63h-7.52z"
  }), React.createElement("path", {
    d: "M271.12 63.21h-1.19c16.26.7 31.21 15.65 31.21 34s-15 33.29-31.21 34h1.19c16.71 0 32.41-15.23 32.41-34s-15.73-34-32.41-34z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M239.12 97.35c0-18.52 16.64-33.58 33.12-34h-.72c-16.71 0-33.84 15.23-33.84 34s17.13 34 33.84 34h.72c-16.44-.42-33.12-15.48-33.12-34z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#47e6b1",
    d: "M259.21 126.59h21.6v7.04h-21.6z"
  }), React.createElement("path", {
    d: "M259.21 65.81s-25.66 29.33 0 63.08h8.47s-23.39-27.89-1.07-65.2l-4.18 1zM281.53 65.36s25.66 29.78 0 63.53h-8.47s23.39-28.12 1.07-65.41l4.18.84z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M60 71.82C60 85.74 48.34 97 36 97S10.88 85.74 10.88 71.82 23.57 46.61 36 46.61s24 11.28 24 25.21z",
    transform: "translate(-10.88 -19)",
    fill: "url(#prefix__p)"
  }), React.createElement("path", {
    d: "M47.94 52.82c0 13.27-11.09 24-22.89 24s-23.93-10.73-23.93-24 12.1-24 23.9-24 22.92 10.73 22.92 24z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: "url(#prefix__q)",
    d: "M16.75 89.68h15.01v12.96H16.75z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M17.2 89.68h14.22v12.29H17.2z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#ad7676",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M31.24 89.68l.6-11.24M17.55 89.68l-.8-11.24"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M20.56 90.74a.83.83 0 0 0 0 .27.38.38 0 0 0 0 .1.56.56 0 0 0 0-.37zM20.22 89.5a1.63 1.63 0 0 0 0 .44 1.67 1.67 0 0 0 0-.44zM22.79 90.15v-.1.1z"
  })), React.createElement("path", {
    fill: primaryColor,
    d: "M21.38 77.69h5.31v1.85h-5.31z"
  }), React.createElement("path", {
    d: "M25.05 28.7h-.84c11.48.5 22 11.05 22 24s-10.56 23.51-22 24h.84c11.8 0 22.89-10.76 22.89-24s-11.09-24-22.89-24z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M2.5 52.82c0-13.08 11.75-23.72 23.39-24h-.51c-11.8 0-23.9 10.76-23.9 24s12.1 24 23.9 24h.51C14.25 76.53 2.5 65.9 2.5 52.82z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M16.66 73.47h15.26v4.97H16.66z"
  }), React.createElement("path", {
    d: "M16.66 30.54s-18.13 20.72 0 44.56h6S6.12 55.38 21.89 29l-3 .67zM32.42 30.22s18.13 21 0 44.87h-6s16.52-19.86.76-46.2l3 .59z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M477 58.82C477 72.74 465.34 84 453 84s-25.07-11.29-25.07-25.21S440.57 33.61 453 33.61s24 11.28 24 25.21z",
    transform: "translate(-10.88 -19)",
    fill: "url(#prefix__r)"
  }), React.createElement("path", {
    d: "M464.94 39.82c0 13.27-11.09 24-22.89 24s-23.93-10.73-23.93-24 12.1-24 23.9-24 22.92 10.73 22.92 24z",
    fill: "#f55f44"
  }), React.createElement("path", {
    fill: "url(#prefix__s)",
    d: "M433.75 76.68h15.01v12.96h-15.01z"
  }), React.createElement("path", {
    fill: "#e6e6e6",
    d: "M434.2 76.68h14.22v12.29H434.2z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#ad7676",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M448.24 76.68l.6-11.24M434.55 76.68l-.8-11.24"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M437.56 77.74a.83.83 0 0 0 0 .27.38.38 0 0 0 0 .1.56.56 0 0 0 0-.37zM437.22 76.5a1.63 1.63 0 0 0 0 .44 1.67 1.67 0 0 0 0-.44zM439.79 77.15v-.1.1z"
  })), React.createElement("path", {
    fill: "#f55f44",
    d: "M438.38 64.69h5.31v1.85h-5.31z"
  }), React.createElement("path", {
    d: "M442.05 15.7h-.84c11.48.5 22 11.05 22 24s-10.56 23.51-22 24h.84c11.8 0 22.89-10.76 22.89-24s-11.09-24-22.89-24z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M419.5 39.82c0-13.08 11.75-23.72 23.39-24h-.51c-11.8 0-23.9 10.76-23.9 24s12.1 24 23.9 24h.51c-11.64-.29-23.39-10.92-23.39-24z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#f55f44",
    d: "M433.66 60.47h15.26v4.97h-15.26z"
  }), React.createElement("path", {
    d: "M433.66 17.54s-18.13 20.72 0 44.56h6s-16.54-19.72-.77-46.1l-3 .67zM449.42 17.22s18.13 21 0 44.87h-6s16.52-19.86.76-46.2l3 .59z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M139.25 250.19c0 20.66-17.26 37.41-35.64 37.41s-37.22-16.75-37.22-37.41 18.84-37.41 37.22-37.41 35.64 16.75 35.64 37.41z",
    transform: "translate(-10.88 -19)",
    fill: "url(#prefix__t)"
  }), React.createElement("path", {
    d: "M126.66 231.19c0 19.7-16.45 35.66-34 35.66s-35.47-16-35.47-35.66 18-35.66 35.47-35.66 34 15.96 34 35.66z",
    fill: "#f55f44"
  }), React.createElement("path", {
    fill: "url(#prefix__u)",
    d: "M80.38 285.9h22.27v19.24H80.38z"
  }), React.createElement("path", {
    fill: "#e6e6e6",
    d: "M81.04 285.9h21.11v18.24H81.04z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#ad7676",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M101.88 285.9l.88-16.67M81.56 285.9l-1.19-16.67"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M86.02 287.47a1.23 1.23 0 0 0 0 .4.57.57 0 0 0 0 .14.83.83 0 0 0 0-.54zM85.52 285.64a2.42 2.42 0 0 0 0 .66 2.48 2.48 0 0 0 0-.66zM89.34 286.6V286.39v.21z"
  })), React.createElement("path", {
    fill: "#f55f44",
    d: "M87.25 268.1h7.88v2.75h-7.88z"
  }), React.createElement("path", {
    d: "M92.69 195.4h-1.25c17 .74 32.72 16.41 32.72 35.63S108.48 266 91.44 266.7h1.25c17.52 0 34-16 34-35.66s-16.48-35.64-34-35.64z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M59.22 231.19c0-19.41 17.45-35.2 34.72-35.65h-.75c-17.52 0-35.47 16-35.47 35.66s18 35.66 35.47 35.66h.75c-17.28-.47-34.72-16.26-34.72-35.67z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#f55f44",
    d: "M80.24 261.85h22.65v7.38H80.24z"
  }), React.createElement("path", {
    d: "M80.24 198.12s-26.9 30.75 0 66.13h8.88S64.6 235 88 195.9l-4.38 1zM103.64 197.66s26.9 31.22 0 66.6h-8.88s24.53-29.48 1.13-68.57l4.38.88z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M1034.14 54.25c0 19.47-16.26 35.25-33.58 35.25S965.5 73.71 965.5 54.25 983.25 19 1000.56 19s33.58 15.78 33.58 35.25z",
    transform: "translate(-10.88 -19)",
    fill: "url(#prefix__v)"
  }), React.createElement("path", {
    d: "M1021.65 35.25c0 18.55-15.5 33.6-32 33.6s-33.42-15-33.42-33.6 16.92-33.6 33.42-33.6 32 15.04 32 33.6z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    fill: "url(#prefix__w)",
    d: "M978.05 86.79h20.98v18.13h-20.98z"
  }), React.createElement("path", {
    fill: "#e6e6e6",
    d: "M978.67 86.79h19.89v17.19h-19.89z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#ad7676",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M998.31 86.79l.83-15.71M979.16 86.79l-1.12-15.71"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M983.37 88.27a1.16 1.16 0 0 0 0 .38.54.54 0 0 0 0 .13.78.78 0 0 0 0-.51zM982.89 86.55a2.28 2.28 0 0 0 0 .62 2.33 2.33 0 0 0 0-.62zM986.49 87.45v-.2.2z"
  })), React.createElement("path", {
    fill: "#ffcc80",
    d: "M984.52 70.02h7.43v2.59h-7.43z"
  }), React.createElement("path", {
    d: "M989.65 1.53h-1.18c16.06.69 30.83 15.46 30.83 33.57s-14.78 32.9-30.83 33.6h1.18c16.5 0 32-15 32-33.6s-15.53-33.57-32-33.57z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M958.12 35.25c0-18.29 16.44-33.17 32.71-33.59h-.71c-16.5 0-33.42 15-33.42 33.6s16.92 33.6 33.42 33.6h.71c-16.28-.45-32.71-15.32-32.71-33.61z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#ffcc80",
    d: "M977.92 64.13h21.34v6.96h-21.34z"
  }), React.createElement("path", {
    d: "M977.92 4.1s-25.34 29 0 62.3h8.37S963.18 38.83 985.22 2l-4.13.94zM999.96 3.65s25.34 29.41 0 62.74h-8.37s23.11-27.77 1.06-64.6l4.13.83z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M1173.25 61.19c0 20.66-17.26 37.41-35.64 37.41s-37.22-16.75-37.22-37.41 18.84-37.41 37.22-37.41 35.64 16.75 35.64 37.41z",
    transform: "translate(-10.88 -19)",
    fill: "url(#prefix__x)"
  }), React.createElement("path", {
    d: "M1160.66 42.19c0 19.7-16.45 35.66-34 35.66s-35.47-16-35.47-35.66 18-35.66 35.47-35.66 34 15.96 34 35.66z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: "url(#prefix__y)",
    d: "M1114.38 96.9h22.27v19.24h-22.27z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M1115.04 96.9h21.11v18.24h-21.11z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#ad7676",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M1135.88 96.9l.88-16.67M1115.56 96.9l-1.19-16.67"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M1120.02 98.47a1.23 1.23 0 0 0 0 .4.57.57 0 0 0 0 .14.83.83 0 0 0 0-.54zM1119.52 96.64a2.42 2.42 0 0 0 0 .66 2.48 2.48 0 0 0 0-.66zM1123.34 97.6V97.39v.21z"
  })), React.createElement("path", {
    fill: primaryColor,
    d: "M1121.25 79.1h7.88v2.75h-7.88z"
  }), React.createElement("path", {
    d: "M1126.69 6.4h-1.25c17 .74 32.72 16.41 32.72 35.63S1142.48 77 1125.44 77.7h1.25c17.52 0 34-16 34-35.66s-16.48-35.64-34-35.64z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M1093.22 42.19c0-19.41 17.45-35.2 34.72-35.65h-.75c-17.52 0-35.47 16-35.47 35.66s18 35.66 35.47 35.66h.75c-17.28-.47-34.72-16.26-34.72-35.67z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M1114.24 72.85h22.65v7.38h-22.65z"
  }), React.createElement("path", {
    d: "M1114.24 9.12s-26.9 30.75 0 66.13h8.88S1098.6 46 1122 6.9l-4.38 1zM1137.64 8.66s26.9 31.22 0 66.6h-8.88s24.53-29.48 1.13-68.57l4.38.88z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M1104.18 252.32c0 18.4-15.79 33.32-32.59 33.32s-34-14.92-34-33.32 17.23-33.32 34-33.32 32.59 14.92 32.59 33.32z",
    transform: "translate(-10.88 -19)",
    fill: "url(#prefix__z)"
  }), React.createElement("path", {
    d: "M1091.74 233.32c0 17.54-15 31.76-31.07 31.76s-32.44-14.22-32.44-31.76 16.42-31.76 32.44-31.76 31.07 14.22 31.07 31.76z",
    fill: "#f55f44"
  }), React.createElement("path", {
    fill: "url(#prefix__A)",
    d: "M1049.41 282.05h20.37v17.14h-20.37z"
  }), React.createElement("path", {
    fill: "#e6e6e6",
    d: "M1050.01 282.05h19.3v16.25h-19.3z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#ad7676",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M1069.08 282.05l.8-14.85M1050.49 282.05l-1.09-14.85"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M1054.58 283.45a1.07 1.07 0 0 0 0 .36.5.5 0 0 0 0 .13.72.72 0 0 0 0-.49zM1054.12 281.82a2.1 2.1 0 0 0 0 .59 2.15 2.15 0 0 0 0-.59zM1057.61 282.68v-.19.19z"
  })), React.createElement("path", {
    fill: "#f55f44",
    d: "M1055.7 266.2h7.21v2.45h-7.21z"
  }), React.createElement("path", {
    d: "M1060.67 201.45h-1.15c15.59.66 29.92 14.61 29.92 31.74s-14.34 31.08-29.92 31.74h1.15c16 0 31.07-14.22 31.07-31.76s-15.05-31.72-31.07-31.72z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M1030.06 233.32c0-17.29 16-31.35 31.75-31.75h-.69c-16 0-32.44 14.22-32.44 31.76s16.44 31.76 32.44 31.76h.69c-15.79-.41-31.75-14.48-31.75-31.77z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#f55f44",
    d: "M1049.29 260.63H1070v6.58h-20.71z"
  }), React.createElement("path", {
    d: "M1049.29 203.87s-24.6 27.39 0 58.9h8.12s-22.43-26-1-60.85l-4 .89zM1070.68 203.45s24.6 27.81 0 59.32h-8.12s22.43-26.26 1-61.07l4 .78z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M1176.09 455.8c0 20.33-17 36.8-35.06 36.8s-36.61-16.48-36.61-36.8S1122.95 419 1141 419s35.09 16.48 35.09 36.8z",
    transform: "translate(-10.88 -19)",
    fill: "url(#prefix__B)"
  }), React.createElement("path", {
    d: "M1163.53 436.8c0 19.37-16.19 35.08-33.42 35.08s-34.9-15.71-34.9-35.08 17.66-35.08 34.9-35.08 33.42 15.71 33.42 35.08z",
    fill: "#47e6b1"
  }), React.createElement("path", {
    fill: "url(#prefix__C)",
    d: "M1118 490.62h21.91v18.93H1118z"
  }), React.createElement("path", {
    fill: "#e6e6e6",
    d: "M1118.65 490.62h20.76v17.94h-20.76z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#ad7676",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M1139.16 490.62l.86-16.4M1119.16 490.62l-1.17-16.4"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M1123.55 492.17a1.21 1.21 0 0 0 0 .39.56.56 0 0 0 0 .14.81.81 0 0 0 0-.53zM1123.06 490.37a2.38 2.38 0 0 0 0 .65 2.44 2.44 0 0 0 0-.65zM1126.82 491.31V491.1v.21z"
  })), React.createElement("path", {
    fill: "#47e6b1",
    d: "M1124.76 473.12h7.75v2.71h-7.75z"
  }), React.createElement("path", {
    d: "M1130.12 401.6h-1.23c16.77.72 32.19 16.14 32.19 35.05s-15.42 34.33-32.19 35.05h1.23c17.23 0 33.42-15.71 33.42-35.08s-16.2-35.02-33.42-35.02z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M1097.18 436.8c0-19.1 17.16-34.63 34.16-35.07h-.74c-17.23 0-34.9 15.71-34.9 35.08s17.66 35.08 34.9 35.08h.74c-17-.45-34.16-15.99-34.16-35.09z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#47e6b1",
    d: "M1117.86 466.96h22.28v7.26h-22.28z"
  }), React.createElement("path", {
    d: "M1117.86 404.28s-26.46 30.25 0 65.05h8.74s-24.13-28.75-1.11-67.21l-4.31 1zM1140.88 403.82s26.46 30.71 0 65.52h-8.74s24.13-29 1.11-67.45l4.31.86z",
    fill: "#fff",
    opacity: 0.2
  }));
};

UndrawFloating.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawFloating;