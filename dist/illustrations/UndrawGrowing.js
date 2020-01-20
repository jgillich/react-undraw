function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawGrowing = function UndrawGrowing(_props) {
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
    viewBox: "0 0 864 711.45",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 132.79,
    y1: 581.52,
    x2: 132.79,
    y2: 535.49,
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
    x1: 226.07,
    y1: 494.3,
    x2: 226.07,
    y2: 448.27,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 314.17,
    y1: 438.58,
    x2: 314.17,
    y2: 392.55,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 405.91,
    y1: 355,
    x2: 405.91,
    y2: 308.96,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 499.84,
    y1: 317.44,
    x2: 499.84,
    y2: 271.41,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 588.96,
    y1: 317.44,
    x2: 588.96,
    y2: 271.41,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 682.18,
    y1: 196.31,
    x2: 682.18,
    y2: 150.27,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 772.15,
    y1: 89.71,
    x2: 772.15,
    y2: 43.67,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 1136.24,
    y1: 225.44,
    x2: 1136.24,
    y2: 88.25,
    gradientTransform: "rotate(-2.32 4761.632 8999.205)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 274.12,
    y1: 785.99,
    x2: 274.12,
    y2: 634.59,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__k",
    x1: 417.52,
    y1: 546.79,
    x2: 417.52,
    y2: 416.57,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    fill: "#eceff1",
    opacity: 0.2,
    d: "M130.53 660.4v-87.21l85.21-87.22 76.35-55.72 79.67-83.59 94.06-37.55h120.61l99.59-121.14 86.31-106.6V660.4h-641.8z"
  }), React.createElement("g", {
    opacity: 0.2
  }, React.createElement("path", {
    fill: primaryColor,
    d: "M132.79 558.51v87.21"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    d: "M132.79 558.51v6"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    strokeDasharray: "10.75 10.75",
    d: "M132.79 575.25v59.1"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    d: "M132.79 639.72v6"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M226.07 471.29v174.43"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    d: "M226.07 471.29v6"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    strokeDasharray: "12.5 12.5",
    d: "M226.07 489.78v143.7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    d: "M226.07 639.72v6"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M314.17 415.56v230.16"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    d: "M314.17 415.56v6"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    strokeDasharray: "11.48 11.48",
    d: "M314.17 433.05v200.93"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    d: "M314.17 639.72v6"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M405.91 331.98v313.74"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    d: "M405.91 331.98v6"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    strokeDasharray: "12.07 12.07",
    d: "M405.91 350.05v283.64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    d: "M405.91 639.72v6"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M499.84 294.43v351.29"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    d: "M499.84 294.43v6"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    strokeDasharray: "11.7 11.7",
    d: "M499.84 312.13v321.74"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    d: "M499.84 639.72v6"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M588.96 294.43v351.29"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    d: "M588.96 294.43v6"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    strokeDasharray: "11.7 11.7",
    d: "M588.96 312.13v321.74"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    d: "M588.96 639.72v6"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M682.18 173.29v472.43"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    d: "M682.18 173.29v6"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    strokeDasharray: "11.81 11.81",
    d: "M682.18 191.1v442.72"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    d: "M682.18 639.72v6"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M772.15 66.69v579.03"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    d: "M772.15 66.69v6"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    strokeDasharray: "12.06 12.06",
    d: "M772.15 84.75v548.94"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#00f",
    strokeMiterlimit: 10,
    d: "M772.15 639.72v6"
  })), React.createElement("circle", {
    cx: 132.79,
    cy: 558.51,
    r: 23.02,
    fill: "url(#prefix__a)"
  }), React.createElement("circle", {
    cx: 226.07,
    cy: 471.29,
    r: 23.02,
    fill: "url(#prefix__b)"
  }), React.createElement("circle", {
    cx: 314.17,
    cy: 415.56,
    r: 23.02,
    fill: "url(#prefix__c)"
  }), React.createElement("circle", {
    cx: 405.91,
    cy: 331.98,
    r: 23.02,
    fill: "url(#prefix__d)"
  }), React.createElement("circle", {
    cx: 499.84,
    cy: 294.43,
    r: 23.02,
    fill: "url(#prefix__e)"
  }), React.createElement("circle", {
    cx: 588.96,
    cy: 294.43,
    r: 23.02,
    fill: "url(#prefix__f)"
  }), React.createElement("circle", {
    cx: 682.18,
    cy: 173.29,
    r: 23.02,
    fill: "url(#prefix__g)"
  }), React.createElement("circle", {
    cx: 772.15,
    cy: 66.69,
    r: 23.02,
    fill: "url(#prefix__h)"
  }), React.createElement("circle", {
    cx: 132.79,
    cy: 558.51,
    r: 18.17,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 226.07,
    cy: 471.29,
    r: 18.17,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 314.17,
    cy: 415.56,
    r: 18.17,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 405.91,
    cy: 331.98,
    r: 18.17,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 499.84,
    cy: 294.43,
    r: 18.17,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 588.96,
    cy: 294.43,
    r: 18.17,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 682.18,
    cy: 173.29,
    r: 18.17,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 772.15,
    cy: 66.69,
    r: 18.17,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M827.92 268.54c-3.72-2.27-21.51 6.93-27.51 8.38-4.39 1.07-14.17-2.85-19.09-5l.09-.87s-2.77-2.54-6.11-2.3c2.77-3 4.74-8.79 4.79-14.44l6-1s-10.27-18.6-20.92-6.84a5 5 0 0 0-2.32-2.42c-1.94-.78-4 .58-5.57 2s-3.14 3.15-5.23 3.17a.72.72 0 0 1-.44-.1.83.83 0 0 1-.24-.64 12.09 12.09 0 0 0-1.58-5.09c-2.95 2-3.63 6-3.91 9.6a1.29 1.29 0 0 0 .06.64 1.27 1.27 0 0 0 .62.53c1.87 1 4.1 1.67 6 .86 2.33-1 3.45-3.77 5.74-4.83a4.61 4.61 0 0 1 4 .13c-5.11 8.73.52 13.53 4.37 15.63a11.45 11.45 0 0 0 .69 1.83c-4.22-1.49-11-1.41-17.28 9.35l1.92.4-18.24 29.93s-3.48 3.77-2.17 6.14 7.25-.29 7.06-5.13c-.09-2.15 4-8.54 8.49-15l-2.14 4.47a45.17 45.17 0 0 0 4.61 3c-3 4.55-5.66 12.33 4.15 19.09l2.61 4.74s1.25-.61 3.07-1.38l.62.88c1.75 2.74.66.93.66.93l12.1 17.06s-15.68 13.41-14.81 23l-2.87.12a3.89 3.89 0 0 0-3.58 5s13.84 12.76 17.32 9-2.66-5.95-2.66-5.95l-.15-3.63-.26-.16c1.83-4.43 12.67-23.63 14.31-26.45 2.25-3.88-1.08-10.11-4.83-18.5l13.57-.49s2.7 21.37 11.62 25.31l.16-.08-1.64 2.71a3.89 3.89 0 0 0 2.32 5.68s18.16-4.93 16.82-9.88-6.45-.91-6.45-.91l-3.15-1.8-.42.21c-1.84-2.68-14.51-24.26-14.54-26.9s-13.73-5.87-23.53-6.83l-1.18-5.64a19.42 19.42 0 0 0 4.2-.79s-6.53-11.84-5.42-14.31 9.72.82 6.86-10l6-1.45v-.24l16.3 6a13 13 0 0 0 12-1.56l10.89-7.64c9.87 3.29 11.94-5.27 8.22-7.54z",
    transform: "translate(-168 -94.27)",
    fill: "url(#prefix__i)"
  }), React.createElement("path", {
    d: "M601.21 179.14a57.33 57.33 0 0 1 2-8.35c1.12-3 5 1.87 5 1.87l-.63 7.73z",
    fill: "#f6b9ad"
  }), React.createElement("circle", {
    cx: 772.39,
    cy: 260.38,
    r: 9.04,
    transform: "rotate(-24.42 470.48 601.417)",
    fill: "#f6b9ad"
  }), React.createElement("path", {
    d: "M596.12 229.94l24.26-.87s2.54 20.09 10.92 23.8l7.41-3.51s-13.08-21.31-13.85-25.55c-.61-3.36-27.89-8.78-29.65-5.85-1.12 1.86-1.6 6.24-1.81 9.19a2.62 2.62 0 0 0 2.72 2.79zM608.89 180.93a3.39 3.39 0 0 1 4.1-1.1c4.51 2 14 5.88 18.27 4.85 5.64-1.37 22.36-10 25.86-7.88 3.32 2 1.73 9.38-6.34 7.52a3.33 3.33 0 0 0-2.65.54l-7.79 5.46a14.91 14.91 0 0 1-13.74 1.78l-16.17-6a3.4 3.4 0 0 1-1.56-5.2zM587.89 181.89l-19.21 31.51s-3.27 3.55-2 5.77 6.82-.28 6.63-4.82 19.3-29.24 19.3-29.24z",
    fill: "#f6b9ad"
  }), React.createElement("path", {
    d: "M589.6 223.93l15.7 22.13s-15.4 13.15-13.9 22.19l7 4.27s12.55-23 13.76-25.6c1.44-3.09-8-28.13-11.38-28s-11.18 5.01-11.18 5.01z",
    fill: "#f6b9ad"
  }), React.createElement("path", {
    d: "M617.84 162.46s-11.06-20-21.78-3.67c-8.12 12.41 6.37 16.81 6.37 16.81l3.13-7-2.46-4.45 5.54-3.64.14 3.41z",
    fill: "#e96857"
  }), React.createElement("path", {
    d: "M598.56 156.73a5.72 5.72 0 0 0-2.57-3c-1.82-.74-3.81.55-5.23 1.9s-2.95 3-4.91 3a.68.68 0 0 1-.41-.09.78.78 0 0 1-.22-.6 11.37 11.37 0 0 0-1.49-4.79c-2.77 1.91-3.42 5.67-3.67 9a1.22 1.22 0 0 0 .06.6 1.19 1.19 0 0 0 .58.49c1.76.91 3.86 1.57 5.68.81 2.19-.91 3.25-3.54 5.39-4.54a4.35 4.35 0 0 1 4.31.42c.92.67 1.77 1.78 2.9 1.61 2.74-.36.07-3.81-.42-4.81z",
    fill: "#e96857"
  }), React.createElement("path", {
    d: "M586.5 203.57s-13.18 11.92.88 21.59l2.46 4.45s12-4.79 16.61-3.83l-6.21-20.49z",
    fill: "#e96a59"
  }), React.createElement("path", {
    d: "M600.38 176.14c-3.96-1.41-10.38-1.41-16.38 8.75l4.59 1-9.49 18.6s14.1 10.81 26.46 6.89c0 0-6.14-11.13-5.1-13.45s9.14.77 6.45-9.37l5.64-1.37.81-8s-2.76-2.54-6-2.15a15.1 15.1 0 0 1-6.98-.9zM591.94 267.66l-3.27.13a3.66 3.66 0 0 0-3.36 4.69s13 12 16.28 8.45-2.5-5.59-2.5-5.59l-.14-3.41zM631.59 252.55l-1.59 2.84a3.66 3.66 0 0 0 2.18 5.34s17.07-4.63 15.81-9.29-6.06-.85-6.06-.85l-3-1.7z",
    fill: "#76b6d7"
  }), React.createElement("path", {
    d: "M604.84 165.22c1 1.27 1.57 2.84 1.29 3.51s-1.3.17-2.29-1.1-1.57-2.83-1.29-3.5 1.3-.18 2.29 1.09z",
    fill: "#f6b9ad"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#47e6b1",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M37.16 0v711.45M0 673.35h864"
  }), React.createElement("path", {
    d: "M290.27 772l-3.27-5 3.6-27.25a60.36 60.36 0 0 0-6.47-8.25 60.66 60.66 0 0 1-1-10.21 138.45 138.45 0 0 0-4.49-19.2l5.67 1.55 8.24-20v-4.71l3.53-2.35s-4.71-7.06-9.42 0c0 0 1.18 4.71 0 7.06s-4.71 10.6-4.71 10.6h-3l.64-3.53h-6.16c-.3-.42-.6-.82-.91-1.18l4.71-10.6-2.23-1.73 8.09-10.12 1.18-21.19c4.68-1.56 5.74-6.22 5.93-9.19a2 2 0 0 0-2.51-2c-10.16 2.6-8.12 7.71-8.12 7.71l-3.53 20-4.83 7.59a10.59 10.59 0 0 0-6-7.86l2.66-3.32a21.38 21.38 0 0 0-11.72.57c-10.55 4-10.53 19.35 0 23.4a10.56 10.56 0 0 0 4.65.76v-1.18h.44c-.18 1.1-.35 2.33-.44 3.55-2.35 0-2.35 13 1.18 15.3l-1.18 13v7.06c2.35 5.89 7.06 5.89 7.06 5.89l3.53 16.48a6.12 6.12 0 0 0 4.14.12l.57 4.58s-10.6 8.24-10.6 20l-.39.77-.79-.77-7.06 5.89 9.4 11.76h9.42c2.35-5.89-7.06-7.06-7.06-7.06v-6.05l10.47-12.43a20.36 20.36 0 0 0 2.15 4.55l.09.86-1.08-.22-2.78 8.76 5.36 1.82a19.6 19.6 0 0 0 16.85-2c-1.24-6.28-9.81-2.23-9.81-2.23z",
    transform: "translate(-168 -94.27)",
    fill: "url(#prefix__j)"
  }), React.createElement("path", {
    d: "M98.91 589.32s-2.56 10.74 0 12.27l7.67-4.6-5.11-9.72zM131.71 587.01s-4.52-6.77-9 0c0 0 1.13 4.52 0 6.77s-4.52 10.16-4.52 10.16H108v5.64l12.42 3.39 7.9-19.19v-4.52z",
    fill: "#f6b9ad"
  }), React.createElement("path", {
    fill: "#5989a1",
    d: "M115.9 600.55l-2.26 12.42-9.03-2.26v-10.16h11.29z"
  }), React.createElement("circle", {
    cx: 97.84,
    cy: 582.49,
    r: 10.16,
    fill: "#f6b9ad"
  }), React.createElement("path", {
    d: "M95.58 581.36l9-11.29a20.5 20.5 0 0 0-11.24.54c-10.11 3.84-10.09 18.56 0 22.43a10.12 10.12 0 0 0 4.46.73V587h-3.39z",
    fill: "#fccc63"
  }), React.createElement("path", {
    d: "M120.42 557.66l-1.13 20.32-9 11.29-5.64-3.39 7.9-12.42 3.39-19.19s-2-4.89 7.79-7.39a1.92 1.92 0 0 1 2.41 2c-.22 2.85-1.24 7.28-5.72 8.78z",
    fill: "#f6b9ad"
  }), React.createElement("path", {
    d: "M110.22 643.22l5.81 7s-4.31 12.13 1.77 21.64l.26 2.51 4.68 1 3.68-27.8s-6.68-10.47-11.36-11.5z",
    fill: "#b98b82"
  }), React.createElement("path", {
    d: "M123 673.73l3.16 4.86s8.22-3.91 9.35 2.06a18.79 18.79 0 0 1-16.16 2l-5.14-1.75 2.67-8.4z",
    fill: "#3d203c"
  }), React.createElement("path", {
    d: "M111.39 646.84l1.13 9s-10.16 7.9-10.16 19.19l-1.13 2.26 3.39 3.39 18.06-21.45s0-12.42-3.39-15.8z",
    fill: "#f6b9ad"
  }), React.createElement("path", {
    d: "M105.7 679.42v5.8s9 1.13 6.77 6.77h-9l-9-11.29 6.77-5.64zM122.67 645.73s-10.16 7.9-14.68 5.64l-3.39-15.8s-4.52 0-6.77-5.64v-6.8l21.45 6.77s.01 12.42 3.39 15.83z",
    fill: "#3d203c"
  }), React.createElement("path", {
    d: "M113.64 589.26l-9-6.77s-4.52 13.55-6.77 13.55-2.29 12.42 1.13 14.69l-1.13 12.42 21.45 6.77s-3.39-22.58-10.16-30.48z",
    fill: "#76b6d7"
  }), React.createElement("path", {
    d: "M453.57 494.68s-1.42.65-2.4-1.48l-2.84 1.31-1.47-3.2 1.78-.82-6.64-23.64s.17-5.24-3.66-6.06c0 0-2.08-.77-10.21 2.12-3.41 1.21-6.13 2.26-8.16 3.07-1.77-1.6-5.66-5.78-5.74-11.73a9 9 0 0 0-1.16-4.16l5-1.5-.11-.24 14.64-5.6c.65 1.42 7.37-.82 8.85-3.22.68-1.1-.43-1.74-1.82-2.12a10 10 0 0 0-6 .3L416 444.07l-.21-.45a5.22 5.22 0 0 1-2.28.88l-1-.69 6.69-10.68c1.38.74 5.4-5.09 5.13-7.89-.12-1.29-1.39-1.14-2.73-.6a10 10 0 0 0-4.58 3.83l-8.34 12.71-1.61-1.18-1.19 3.2a23.72 23.72 0 0 0-5.5-2.31l-2.38-5.14a8.59 8.59 0 0 0 .75-13.45 27 27 0 0 1 4.86-1.46s-14-11.64-20.76 3.54v.43c-.28.13-.54.26-.76.34l-5.75 2.19a8.28 8.28 0 0 0-1.22.54 7.79 7.79 0 0 0-1.62 1.37 4.31 4.31 0 0 0-.9 1.18 3 3 0 0 0 .51 3 8.92 8.92 0 0 0 2.42 2l2.43 1.57a3.08 3.08 0 0 1 1.6 1.81c.22-1.79-.54-3.54-1.23-5.21a3.81 3.81 0 0 1-.4-2.5 3.59 3.59 0 0 1 2-1.9 21.46 21.46 0 0 1 3.09-1.3c.43 3.9 2 9.79 7.69 10.7l1.8 3.9c-1.08 1.66-1.29 4.6 1.91 9.75l7.86 17 .67.1c-.51 2.57-1.14 9.65 6.62 12.17L406 511.31s-14.17 18.47-11.61 22.3h.84l-.91 2.91-3.26-.69-1.46 6.88 19.12 4.06s1.9-5.19-6.67-6.21c0 0-1.53-.32-1-2.62l-2.08-.44 1.21-3.89s12.22-13.35 14.78-24.86c2-8.8 6.15-25.08 8-32.25l10.91-5s7.09 19.12 8.4 22l.36-.16 1.47 3.2-2.13 1 2.95 6.39 17.75-8.18s-1.61-5.38-9.1-1.07z",
    transform: "translate(-168 -94.27)",
    fill: "url(#prefix__k)"
  }), React.createElement("path", {
    fill: "#f6b9ad",
    d: "M273.875 398.36l4.168-1.922 1.922 4.168-4.169 1.922zM228.962 434.043l4.382 1.368-2.39 7.655-4.382-1.368z"
  }), React.createElement("circle", {
    cx: 393.59,
    cy: 429.93,
    r: 8.41,
    transform: "rotate(-24.75 94.67 765.6)",
    fill: "#f6b9ad"
  }), React.createElement("path", {
    fill: "#f6b9ad",
    d: "M221.66 341.647l6.937-3.198 5.439 11.797-6.939 3.198zM247 351.04l18.37-6.59a9.78 9.78 0 0 1 5.82-.3c1.36.37 2.44 1 1.78 2.07-1.44 2.35-8 4.53-8.65 3.14l-16.1 6.16z"
  }), React.createElement("path", {
    d: "M235.47 374.44s-3.42 10.83 7.79 13.24l22.21-10.24s6.93 18.68 8.21 21.46l6.25-2.88-6.45-23.11s.16-5.12-3.57-5.93c0 0-2-.75-10 2.08s-12.12 4.74-12.12 4.74z",
    fill: "#5f98be"
  }), React.createElement("path", {
    d: "M235.93 327.95s-13.66-11.38-20.28 3.46c0 0-.75 13 8.11 13.93a17.3 17.3 0 0 0-1.12-7.9c-1.64-3.46 7.09-8.32 13.29-9.49z",
    fill: "#3d213c"
  }), React.createElement("path", {
    d: "M209.27 334.3a8.1 8.1 0 0 0-1.19.53 7.61 7.61 0 0 0-1.58 1.34 4.21 4.21 0 0 0-.88 1.16 3 3 0 0 0 .5 2.9 8.72 8.72 0 0 0 2.36 2l2.38 1.54a3 3 0 0 1 1.57 1.77c.21-1.75-.53-3.46-1.2-5.09a3.73 3.73 0 0 1-.4-2.44 3.51 3.51 0 0 1 1.94-1.86 21 21 0 0 1 3.05-1.28 6.82 6.82 0 0 0 1.53-.62 1.89 1.89 0 0 0 .93-1.3 1.42 1.42 0 0 0-.92-1.46c-.72-.2-1.78.48-2.46.74zM282.41 398.67l-9 4.16 2.88 6.25 17.35-8s-1.55-5.18-8.86-1c-.03.03-1.42.65-2.37-1.41z",
    fill: "#3d213c"
  }), React.createElement("path", {
    d: "M237.25 350.9s8.17 1.29 10.62-.69l2.24 4.86-10.36 3.09z",
    fill: "#76b6d7"
  }), React.createElement("path", {
    d: "M228.31 347.03s-7.9 1.12-1.39 11.58l7.68 16.66s11.9 2.09 18.2-2.5c0 0-6.35-4.65-6.45-12.17s-11.53-14.05-18.04-13.57z",
    fill: "#76b6d7"
  }), React.createElement("path", {
    d: "M242 385.13l-3.75 31.24s-13.84 18-11.34 21.8h5.65s11.95-13 14.45-24.3 8.75-35 8.75-35z",
    fill: "#5f98be"
  }), React.createElement("path", {
    d: "M233.35 442.4l-9.72-2.06-1.43 6.73 18.69 4s1.86-5.07-6.52-6.07c0-.04-1.5-.36-1.02-2.6z",
    fill: "#3d213c"
  }), React.createElement("path", {
    d: "M238.38 351.73l10.71-16.32a9.78 9.78 0 0 1 4.47-3.74c1.31-.53 2.54-.67 2.66.58.26 2.74-3.67 8.44-5 7.72l-9.15 14.6z",
    fill: "#f6b9ad"
  }), React.createElement("path", {
    fill: "#76b6d7",
    d: "M237.47 351.63l1.83-4.94 8.01 5.53-6.88 3.51-2.96-4.1z"
  }));
};

UndrawGrowing.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawGrowing;