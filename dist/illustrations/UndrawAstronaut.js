function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawAstronaut = function UndrawAstronaut(_props) {
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
    viewBox: "0 0 995.79 756.3",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 263.72,
    y1: 238.68,
    x2: 263.72,
    y2: 208.45,
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
    x1: 537.72,
    y1: 134.68,
    x2: 537.72,
    y2: 104.45,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 814.72,
    y1: 181.68,
    x2: 814.72,
    y2: 151.45,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 358.87,
    y1: 217.6,
    x2: 358.87,
    y2: 193.82,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 708.87,
    y1: 160.6,
    x2: 708.87,
    y2: 136.82,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 909.87,
    y1: 160.6,
    x2: 909.87,
    y2: 136.82,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 343.18,
    y1: 57.12,
    x2: 343.18,
    y2: 44.98,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 344.18,
    y1: 133.12,
    x2: 344.18,
    y2: 120.98,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 663.18,
    y1: 41.12,
    x2: 663.18,
    y2: 28.98,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 802.18,
    y1: 149.12,
    x2: 802.18,
    y2: 136.98,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__k",
    x1: 490.73,
    y1: 580.9,
    x2: 490.73,
    y2: 313.1,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__l",
    x1: 592.83,
    y1: 800.34,
    x2: 592.83,
    y2: 416.27,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__m",
    x1: 593.61,
    y1: 431.93,
    x2: 593.61,
    y2: 298.81,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__n",
    x1: 551.03,
    y1: 816.05,
    x2: 551.03,
    y2: 767.07,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__o",
    x1: 635.59,
    y1: 816.05,
    x2: 635.59,
    y2: 767.07,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__p",
    x1: 745.34,
    y1: 828.15,
    x2: 745.34,
    y2: 252.93,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__q",
    x1: 924.91,
    y1: 439.7,
    x2: 924.91,
    y2: 234.67,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__r",
    x1: 436.34,
    y1: 828.15,
    x2: 436.34,
    y2: 252.93,
    gradientTransform: "matrix(-1 0 0 1 891 0)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__s",
    x1: 615.91,
    y1: 439.7,
    x2: 615.91,
    y2: 234.67,
    gradientTransform: "matrix(-1 0 0 1 891 0)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__t",
    x1: 492.29,
    y1: 513.56,
    x2: 492.29,
    y2: 403.93,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__u",
    x1: 798.43,
    y1: 18.6,
    x2: 798.43,
    y2: 0,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__v",
    x1: 765.43,
    y1: 143.6,
    x2: 765.43,
    y2: 125,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__w",
    x1: 630.43,
    y1: 160.6,
    x2: 630.43,
    y2: 142,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__x",
    x1: 545.43,
    y1: 61.6,
    x2: 545.43,
    y2: 43,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__y",
    x1: 436.43,
    y1: 115.6,
    x2: 436.43,
    y2: 97,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__z",
    x1: 247.43,
    y1: 75.6,
    x2: 247.43,
    y2: 57,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__A",
    x1: 214.43,
    y1: 234.6,
    x2: 214.43,
    y2: 216,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__B",
    x1: 736.95,
    y1: 40.66,
    x2: 736.95,
    y2: 30.61,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__C",
    x1: 472.95,
    y1: 168.66,
    x2: 472.95,
    y2: 158.61,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__D",
    x1: 185.95,
    y1: 97.66,
    x2: 185.95,
    y2: 87.61,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__E",
    x1: 250.95,
    y1: 224.66,
    x2: 250.95,
    y2: 214.61,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__F",
    x1: 364.95,
    y1: 207.66,
    x2: 364.95,
    y2: 197.61,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__G",
    x1: 529.95,
    y1: 128.66,
    x2: 529.95,
    y2: 118.61,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M441.78 45.34h-1.89c-.39 0-1.37-1.55-1.37-2v-1.8c0-1.41-1.59-5.27-3-5.27s-3 3.86-3 5.27v1.8c0 .64-.49 2-1.09 2h-1.94c-1.41 0-5.27 1.09-5.27 2.5s3.86 2.5 5.27 2.5h2.31c.74 0 .72.75.72 1.14v2.4c0 1.41 1.59 5.27 3 5.27s3-3.86 3-5.27v-2.4c0-.32.64-1.14 1-1.14h2.31c1.41 0 5.27-1.09 5.27-2.5s-3.91-2.5-5.32-2.5z",
    fill: "#2196f3"
  }), React.createElement("path", {
    d: "M271.88 220.43h-2.57c-.52 0-1.81-2.05-1.81-2.64v-2.38c0-1.86-2.11-7-4-7s-4 5.1-4 7v2.38c0 .84-.65 2.64-1.44 2.64h-2.56c-1.86 0-7 1.44-7 3.3s5.1 3.3 7 3.3h3.06c1 0 .94 1 .94 1.51v3.18c0 1.85 2.1 7 4 7s4-5.11 4-7v-3.18c0-.42.85-1.51 1.32-1.51h3.06c1.86 0 7-1.44 7-3.3s-5.14-3.3-7-3.3z",
    transform: "translate(-102.11 -71.85)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M545.88 116.43h-2.57c-.52 0-1.81-2.05-1.81-2.64v-2.38c0-1.86-2.11-7-4-7s-4 5.1-4 7v2.38c0 .84-.65 2.64-1.44 2.64h-2.56c-1.86 0-7 1.44-7 3.3s5.1 3.3 7 3.3h3.06c1 0 .94 1 .94 1.51v3.18c0 1.85 2.1 7 4 7s4-5.11 4-7v-3.18c0-.42.85-1.51 1.32-1.51h3.06c1.86 0 7-1.44 7-3.3s-5.14-3.3-7-3.3z",
    transform: "translate(-102.11 -71.85)",
    fill: "url(#prefix__b)"
  }), React.createElement("path", {
    d: "M822.88 163.43h-2.57c-.52 0-1.81-2.05-1.81-2.64v-2.38c0-1.86-2.11-7-4-7s-4 5.1-4 7v2.38c0 .84-.65 2.64-1.44 2.64h-2.56c-1.86 0-7 1.44-7 3.3s5.1 3.3 7 3.3h3.06c1 0 .94 1 .94 1.51v3.18c0 1.85 2.1 7 4 7s4-5.11 4-7v-3.18c0-.42.85-1.51 1.32-1.51h3.06c1.86 0 7-1.44 7-3.3s-5.14-3.3-7-3.3z",
    transform: "translate(-102.11 -71.85)",
    fill: "url(#prefix__c)"
  }), React.createElement("path", {
    d: "M610.7 75.34h-1.24c-.25 0-1-1-1-1.26v-1.15c0-.9-1.1-3.36-2-3.36s-2 2.46-2 3.36v1.15c0 .4 0 1.26-.41 1.26h-1.23c-.9 0-3.36.6-3.36 1.5s2.46 1.5 3.36 1.5h1.47c.47 0 .17.68.17.92v1.53c0 .9 1.1 3.36 2 3.36s2-2.46 2-3.36v-1.53c0-.2.52-.92.75-.92h1.48c.89 0 3.35-.6 3.35-1.5s-2.45-1.5-3.34-1.5z",
    fill: "#1976d2"
  }), React.createElement("path", {
    d: "M365.28 203.23h-2c-.41 0-1.61-1.6-1.61-2.06v-1.87c0-1.46-1.8-5.48-3.26-5.48s-3.26 4-3.26 5.48v1.87c0 .66 0 2.06-.66 2.06h-2c-1.46 0-5.48 1-5.48 2.45s4 2.44 5.48 2.44h2.4c.77 0 .28 1.11.28 1.5v2.5c0 1.47 1.79 5.48 3.26 5.48s3.26-4 3.26-5.48v-2.5c0-.33.85-1.5 1.22-1.5h2.4c1.47 0 5.48-1 5.48-2.44s-4.04-2.45-5.51-2.45z",
    transform: "translate(-102.11 -71.85)",
    fill: "url(#prefix__d)"
  }), React.createElement("path", {
    d: "M715.28 146.23h-2c-.41 0-1.61-1.6-1.61-2.06v-1.87c0-1.46-1.8-5.48-3.26-5.48s-3.26 4-3.26 5.48v1.87c0 .66 0 2.06-.66 2.06h-2c-1.46 0-5.48 1-5.48 2.45s4 2.44 5.48 2.44h2.4c.77 0 .28 1.11.28 1.5v2.5c0 1.47 1.79 5.48 3.26 5.48s3.26-4 3.26-5.48v-2.5c0-.33.85-1.5 1.22-1.5h2.4c1.47 0 5.48-1 5.48-2.44s-4.04-2.45-5.51-2.45z",
    transform: "translate(-102.11 -71.85)",
    fill: "url(#prefix__e)"
  }), React.createElement("path", {
    d: "M916.28 146.23h-2c-.41 0-1.61-1.6-1.61-2.06v-1.87c0-1.46-1.8-5.48-3.26-5.48s-3.26 4-3.26 5.48v1.87c0 .66 0 2.06-.66 2.06h-2c-1.46 0-5.48 1-5.48 2.45s4 2.44 5.48 2.44h2.4c.77 0 .28 1.11.28 1.5v2.5c0 1.47 1.79 5.48 3.26 5.48s3.26-4 3.26-5.48v-2.5c0-.33.85-1.5 1.22-1.5h2.4c1.47 0 5.48-1 5.48-2.44s-4.04-2.45-5.51-2.45z",
    transform: "translate(-102.11 -71.85)",
    fill: "url(#prefix__f)"
  }), React.createElement("path", {
    d: "M260.7 132.34h-1.24c-.25 0-1-1-1-1.26v-1.15c0-.9-1.1-3.36-2-3.36s-2 2.46-2 3.36v1.15c0 .4 0 1.26-.41 1.26h-1.23c-.9 0-3.36.6-3.36 1.5s2.46 1.5 3.36 1.5h1.47c.47 0 .17.68.17.92v1.53c0 .9 1.1 3.36 2 3.36s2-2.46 2-3.36v-1.53c0-.2.52-.92.75-.92h1.48c.89 0 3.35-.6 3.35-1.5s-2.45-1.5-3.34-1.5z",
    fill: "#1976d2"
  }), React.createElement("circle", {
    cx: 544.97,
    cy: 51.84,
    r: 7.5,
    fill: "#64b5f6"
  }), React.createElement("circle", {
    cx: 529.97,
    cy: 123.17,
    r: 2.5,
    fill: "#0071bc"
  }), React.createElement("circle", {
    cx: 247.43,
    cy: 66.3,
    r: 6.96,
    fill: "#64b5f6"
  }), React.createElement("circle", {
    cx: 185.95,
    cy: 92.63,
    r: 3.48,
    fill: "#64b5f6"
  }), React.createElement("circle", {
    cx: 472.95,
    cy: 163.63,
    r: 3.48,
    fill: "#82a9ff"
  }), React.createElement("circle", {
    cx: 214.27,
    cy: 225.76,
    r: 6.5,
    fill: "#82a9ff"
  }), React.createElement("circle", {
    cx: 343.18,
    cy: 51.05,
    r: 6.07,
    fill: "url(#prefix__g)"
  }), React.createElement("circle", {
    cx: 344.18,
    cy: 127.05,
    r: 6.07,
    fill: "url(#prefix__h)"
  }), React.createElement("circle", {
    cx: 663.18,
    cy: 35.05,
    r: 6.07,
    fill: "url(#prefix__i)"
  }), React.createElement("circle", {
    cx: 802.18,
    cy: 143.05,
    r: 6.07,
    fill: "url(#prefix__j)"
  }), React.createElement("circle", {
    cx: 343.18,
    cy: 51.05,
    r: 3.71,
    fill: "#0d47a1"
  }), React.createElement("circle", {
    cx: 435.97,
    cy: 105.84,
    r: 7.5,
    fill: "#64b5f6"
  }), React.createElement("rect", {
    x: 411.64,
    y: 313.1,
    width: 158.17,
    height: 267.8,
    rx: 13,
    fill: "url(#prefix__k)"
  }), React.createElement("rect", {
    x: 416.17,
    y: 318.74,
    width: 150.17,
    height: 255.21,
    rx: 13,
    fill: primaryColor
  }), React.createElement("path", {
    fill: "none",
    d: "M416.17 664.36h66.32l-16.31 66.61"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M536.72 380.06l-85.78 1.77-23.75-27.29 127.88-2.3-18.35 27.82z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M555.07 354.37H427.19l25.52-13.65 75.15-2.48 27.21 16.13z"
  }), React.createElement("path", {
    d: "M751.58 462.48c-12.09-5.36-28.3 2-31.74 14.37-9.09-25.88-31.1-47-57.54-56.54-4.37-1.58-16.5-6.39-19.86-2.64-1.56 1.74-4.57 8.61-4.38 14.34h-89.93v-3.36c0-13.07-10.51-13.52-23.21-10.47a70.4 70.4 0 0 0-29.63 15.92c-13.51 11.91-22.9 27.45-32.08 42.72l-16-15.89c-1.76-1.75-3.86-3.63-6.39-3.51-2.68.13-4.62 2.44-6.18 4.54-7.06 9.52-14.34 19.53-16 31.12-1.66 11.41 2.31 22.81 6.23 33.69 3.82 10.64 8.9 25.68 19.89 29.47 11.83 4.09 24.31 4.57 34.55-2.44 16-11 32.49-22.37 44.17-37.42v114.26h1.35l-11 169.7 73.54-.38 5.25-169.32h2.16L598.31 800l74.82.38-11.21-169.7h2.32V515.24l2 1.66 36.29 30.35c7.55 6.32 16.19 13 26.17 12.51 7.17-.36 13.67-12.38 18.25-17.71s7.55-11.75 10.46-18.09c4.82-10.49 9.73-21.33 10.06-32.8s-5.07-23.89-15.89-28.68z",
    transform: "translate(-102.11 -71.85)",
    fill: "url(#prefix__l)"
  }), React.createElement("path", {
    d: "M642.59 393.27c-11.57-5.31-27.07 2-30.36 14.27-8.7-25.69-29.75-46.61-55-56.1-4.19-1.57-14.29-6.34-17.5-2.63-1.5 1.73-1.38 8.55-1.2 14.24h-95v-3.34c-.05-13-5.57-13.41-17.72-10.38-10.59 2.64-20.33 8.46-28.34 15.79-12.93 11.82-21.91 27.23-30.68 42.39l-15.32-15.77c-1.69-1.73-3.7-3.61-6.12-3.49s-4.41 2.42-5.91 4.51c-6.75 9.45-13.71 19.38-15.33 30.88-1.59 11.32 2.21 22.63 5.95 33.43 3.66 10.55 8.52 22.36 19 26.13 11.31 4.05 23.25-3.24 33-10.19 15.34-10.88 31.07-22.2 42.25-37.13v124.27h1.29l-10.5 168.37h67.34l8-168.37h2.06l6.22 168.37h68.76l-10.65-168.37h2.21V437.86l1.89 1.64 34.71 30.11c7.22 6.27 15.49 12.92 25 12.42 6.87-.36 13.08-4.52 17.47-9.81s7.22-11.66 10-17.94c4.61-10.41 9.31-21.16 9.62-32.55s-4.79-23.7-15.14-28.46z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M668.79 348.62h-13.48c-7.93-29.27-32.62-49.81-61.87-49.81s-53.93 20.54-61.86 49.81h-13.14V379h11.24c4.84 31.84 31.54 52.94 63.76 52.94s58.93-21.1 63.77-52.94h11.58z",
    transform: "translate(-102.11 -71.85)",
    fill: "url(#prefix__m)"
  }), React.createElement("path", {
    d: "M562.89 278.69h-12.8c-7.53-26.66-31-48.21-58.77-48.21s-51.23 21.55-58.77 48.21H420.1v27.64h10.67c4.6 29 30 48.21 60.57 48.21s56-19.22 60.58-48.21h11z",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 490.99,
    cy: 297.12,
    r: 49.62,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M588.92 802.13c0 16.57-17 13.73-37.89 13.73s-37.89 2.84-37.89-13.73 17-35.06 37.89-35.06 37.89 18.49 37.89 35.06z",
    transform: "translate(-102.11 -71.85)",
    fill: "url(#prefix__n)"
  }), React.createElement("path", {
    d: "M673.48 802.13c0 16.57-17 13.73-37.89 13.73s-37.89 2.84-37.89-13.73 17-35.06 37.89-35.06 37.89 18.49 37.89 35.06z",
    transform: "translate(-102.11 -71.85)",
    fill: "url(#prefix__o)"
  }), React.createElement("path", {
    d: "M484 729.38c0 15.17-15.71 12.58-35.08 12.58s-35.09 2.59-35.09-12.58 15.71-32.08 35.09-32.08S484 714.21 484 729.38zM569.07 731.51c0 15.17-15.71 12.57-35.08 12.57s-35.1 2.6-35.1-12.57 15.71-32.09 35.09-32.09 35.09 16.92 35.09 32.09z",
    fill: "#e0e0e0"
  }), React.createElement("path", {
    d: "M758.05 265.64a12.72 12.72 0 1 0-21.92 8.76v549.2a4.56 4.56 0 0 0 4.55 4.55h8.13a4.57 4.57 0 0 0 4.55-4.55V275.51a12.69 12.69 0 0 0 4.69-9.87z",
    transform: "translate(-102.11 -71.85)",
    fill: "url(#prefix__p)"
  }), React.createElement("path", {
    d: "M654.39 193.79a11.17 11.17 0 1 0-17 9.5v545.86a4.55 4.55 0 0 0 4.5 4.5h3.25a4.56 4.56 0 0 0 4.55-4.54V202.86a11.15 11.15 0 0 0 4.7-9.07z",
    fill: "#e0e0e0"
  }), React.createElement("path", {
    d: "M636.18 400.87c-2 3.09-6 5.66-9.33 4-2.68-1.33-3.54-4.69-3.88-7.66a61.27 61.27 0 0 1 .95-19.94c.86-4 2.69-8.47 6.62-9.52 2.46-.65 5.07.28 7.23 1.63s4 3.1 6.23 4.37c4.24 2.44 9.4 2.88 14.24 2.17 2.4-.35 4.76-1 7.17-1.17a11.94 11.94 0 0 1 7.05 1.23 6.37 6.37 0 0 1 3.32 6c-.3 2.41-2.84 4.45-5.17 3.77a14.85 14.85 0 0 1 5.18 4.71 6.73 6.73 0 0 1 .38 6.71c-1.2 2-4.16 3-6.07 1.61 1.95 1.6 4 3.3 4.88 5.65s.17 5.53-2.18 6.45a20.37 20.37 0 0 1-3 .56c-1 .24-2 .92-2.13 1.95-.09 1.19 1.1 2 1.8 3 1.57 2.12.7 5.31-1.19 7.14s-4.52 2.65-7 3.41c-3.76 1.13-7.52 2.26-11.3 3.32-4.14 1.16-8.48 2.24-12.68 1.34a13.86 13.86 0 0 1-5.16-24.83c2.07-1.48 2.45-4 4.12-5.89a12.78 12.78 0 0 0 3.05-8.77c0-4.72 1.8-9.28.7-13.87-.26 0-.45.05-.71.1-.27 7.88 1.59 15.38-3.12 22.53z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M1097.89 402.18c-115.32-130-230.64 130-346 0v-130c115.32 130 230.64-130 346 0z",
    transform: "translate(-102.11 -71.85)",
    fill: "url(#prefix__q)"
  }), React.createElement("path", {
    d: "M992.07 325.47c-114.08-118.38-228.18 118.39-342.25 0V207.09c114.08 118.38 228.17-118.39 342.25 0z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M442 265.64a12.72 12.72 0 1 1 21.92 8.76v549.2a4.56 4.56 0 0 1-4.55 4.55h-8.13a4.57 4.57 0 0 1-4.55-4.55V275.51a12.69 12.69 0 0 1-4.69-9.87z",
    transform: "translate(-102.11 -71.85)",
    fill: "url(#prefix__r)"
  }), React.createElement("path", {
    d: "M341.39 193.79a11.17 11.17 0 1 1 17 9.5v545.86a4.55 4.55 0 0 1-4.5 4.5h-3.25a4.56 4.56 0 0 1-4.55-4.54V202.86a11.15 11.15 0 0 1-4.7-9.07z",
    fill: "#e0e0e0"
  }), React.createElement("path", {
    d: "M102.11 402.18c115.32 130 230.64-130 346 0v-130c-115.32-130-230.64 130-346 0z",
    transform: "translate(-102.11 -71.85)",
    fill: "url(#prefix__s)"
  }), React.createElement("path", {
    d: "M3.71 325.47c114.08 118.39 228.17-118.38 342.25 0V207.09c-114.07-118.39-228.17 118.38-342.25 0z",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 441.39,
    y: 403.93,
    width: 101.8,
    height: 109.63,
    rx: 6.38,
    fill: "url(#prefix__t)"
  }), React.createElement("rect", {
    x: 443.48,
    y: 407.32,
    width: 97.13,
    height: 102.82,
    rx: 6.38,
    fill: primaryColor
  }), React.createElement("path", {
    opacity: 0.2,
    d: "M456.08 426.88h17.8v47.46h-17.8zM494.72 444.2h23.41v16.02h-23.41zM511.73 418.88h12.94v11.51h-12.94z"
  }), React.createElement("circle", {
    cx: 519.08,
    cy: 482.23,
    r: 14.09,
    opacity: 0.2
  }), React.createElement("path", {
    d: "M497.25 258.46a49.55 49.55 0 0 1 39.64 19.74 49.63 49.63 0 1 0-85.5 48.8 49.64 49.64 0 0 1 45.88-68.54z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M314.28 156.34h-1.94c-.39 0-1.37-1.55-1.37-2v-1.8c0-1.41-1.59-5.27-3-5.27s-3 3.86-3 5.27v1.8c0 .64-.49 2-1.09 2h-1.94c-1.41 0-5.27 1.09-5.27 2.5s3.86 2.5 5.27 2.5h2.31c.74 0 .72.75.72 1.14v2.4c0 1.41 1.59 5.27 3 5.27s3-3.86 3-5.27v-2.4c0-.32.64-1.14 1-1.14h2.31c1.41 0 5.27-1.09 5.27-2.5s-3.86-2.5-5.27-2.5z",
    fill: "#2196f3"
  }), React.createElement("circle", {
    cx: 397.47,
    cy: 226.17,
    r: 3.5,
    fill: "#0d47a1"
  }), React.createElement("circle", {
    cx: 776.93,
    cy: 158.3,
    r: 6.96,
    fill: "#64b5f6"
  }), React.createElement("circle", {
    cx: 511.47,
    cy: 209.17,
    r: 2.5,
    fill: "#0071bc"
  }), React.createElement("circle", {
    cx: 344.18,
    cy: 127.05,
    r: 3.71,
    fill: "#0d47a1"
  }), React.createElement("path", {
    d: "M718.78 92.34h-1.89c-.39 0-1.37-1.55-1.37-2v-1.8c0-1.41-1.59-5.27-3-5.27s-3 3.86-3 5.27v1.8c0 .64-.49 2-1.09 2h-1.94c-1.41 0-5.27 1.09-5.27 2.5s3.86 2.5 5.27 2.5h2.31c.74 0 .72.75.72 1.14v2.4c0 1.41 1.59 5.27 3 5.27s3-3.86 3-5.27v-2.4c0-.32.64-1.14 1-1.14h2.31c1.41 0 5.27-1.09 5.27-2.5s-3.91-2.5-5.32-2.5z",
    fill: "#2196f3"
  }), React.createElement("path", {
    d: "M811.7 75.34h-1.24c-.25 0-1-1-1-1.26v-1.15c0-.9-1.1-3.36-2-3.36s-2 2.46-2 3.36v1.15c0 .4 0 1.26-.41 1.26h-1.23c-.9 0-3.36.6-3.36 1.5s2.46 1.5 3.36 1.5h1.47c.47 0 .17.68.17.92v1.53c0 .9 1.1 3.36 2 3.36s2-2.46 2-3.36v-1.53c0-.2.52-.92.75-.92h1.48c.89 0 3.35-.6 3.35-1.5s-2.45-1.5-3.34-1.5z",
    fill: "#1976d2"
  }), React.createElement("circle", {
    cx: 801.97,
    cy: 142.17,
    r: 3.5,
    fill: "#0d47a1"
  }), React.createElement("circle", {
    cx: 662.97,
    cy: 35.17,
    r: 3.5,
    fill: "#0d47a1"
  }), React.createElement("circle", {
    cx: 798.43,
    cy: 9.3,
    r: 9.3,
    fill: "url(#prefix__u)"
  }), React.createElement("circle", {
    cx: 765.43,
    cy: 134.3,
    r: 9.3,
    fill: "url(#prefix__v)"
  }), React.createElement("circle", {
    cx: 630.43,
    cy: 151.3,
    r: 9.3,
    fill: "url(#prefix__w)"
  }), React.createElement("circle", {
    cx: 545.43,
    cy: 52.3,
    r: 9.3,
    fill: "url(#prefix__x)"
  }), React.createElement("circle", {
    cx: 436.43,
    cy: 106.3,
    r: 9.3,
    fill: "url(#prefix__y)"
  }), React.createElement("circle", {
    cx: 247.43,
    cy: 66.3,
    r: 9.3,
    fill: "url(#prefix__z)"
  }), React.createElement("circle", {
    cx: 214.43,
    cy: 225.3,
    r: 9.3,
    fill: "url(#prefix__A)"
  }), React.createElement("circle", {
    cx: 798.43,
    cy: 9.3,
    r: 6.96,
    fill: "#64b5f6"
  }), React.createElement("circle", {
    cx: 736.95,
    cy: 35.63,
    r: 5.03,
    fill: "url(#prefix__B)"
  }), React.createElement("circle", {
    cx: 472.95,
    cy: 163.63,
    r: 5.03,
    fill: "url(#prefix__C)"
  }), React.createElement("circle", {
    cx: 185.95,
    cy: 92.63,
    r: 5.03,
    fill: "url(#prefix__D)"
  }), React.createElement("circle", {
    cx: 250.95,
    cy: 219.63,
    r: 5.03,
    fill: "url(#prefix__E)"
  }), React.createElement("circle", {
    cx: 364.95,
    cy: 202.63,
    r: 5.03,
    fill: "url(#prefix__F)"
  }), React.createElement("circle", {
    cx: 529.95,
    cy: 123.63,
    r: 5.03,
    fill: "url(#prefix__G)"
  }), React.createElement("circle", {
    cx: 736.95,
    cy: 35.63,
    r: 3.48,
    fill: "#82a9ff"
  }), React.createElement("circle", {
    cx: 765.27,
    cy: 134.76,
    r: 6.5,
    fill: "#64b5f6"
  }), React.createElement("path", {
    d: "M365.6 400.87c2.05 3.09 6 5.66 9.33 4 2.68-1.33 3.54-4.69 3.88-7.66a61.27 61.27 0 0 0-.95-19.94c-.86-4-2.69-8.47-6.62-9.52-2.46-.65-5.07.28-7.23 1.63s-4 3.1-6.23 4.37c-4.24 2.44-9.4 2.88-14.24 2.17-2.4-.35-4.76-1-7.17-1.17a11.94 11.94 0 0 0-7.05 1.23 6.37 6.37 0 0 0-3.32 6c.3 2.41 2.84 4.45 5.17 3.77a14.85 14.85 0 0 0-5.18 4.71 6.73 6.73 0 0 0-.38 6.71c1.2 2 4.16 3 6.07 1.61-2 1.6-4 3.3-4.88 5.65s-.17 5.53 2.18 6.45a20.37 20.37 0 0 0 3 .56c1 .24 2.05.92 2.13 1.95.09 1.19-1.1 2-1.8 3-1.57 2.12-.7 5.31 1.19 7.14s4.52 2.65 7 3.41c3.76 1.13 7.52 2.26 11.3 3.32 4.14 1.16 8.48 2.24 12.68 1.34a13.86 13.86 0 0 0 5.16-24.83c-2.07-1.48-2.45-4-4.12-5.89a12.78 12.78 0 0 1-3-8.77c0-4.72-1.8-9.28-.7-13.87.26 0 .45.05.71.1.22 7.88-1.64 15.38 3.07 22.53z",
    fill: primaryColor
  }));
};

UndrawAstronaut.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawAstronaut;