function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawProcessing = function UndrawProcessing(_props) {
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
    viewBox: "0 0 880.92 737.5",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 194,
    y1: 524,
    x2: 194,
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
    x1: 256.5,
    y1: 341,
    x2: 256.5,
    y2: 261,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 698.41,
    y1: 686.91,
    x2: 698.41,
    y2: 411,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 521,
    y1: 592.5,
    x2: 564,
    y2: 592.5,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 864,
    y1: 667,
    x2: 864,
    y2: 506,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 587,
    y1: 666,
    x2: 587,
    y2: 505,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 818.5,
    y1: 672,
    x2: 818.5,
    y2: 507,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 692.5,
    y1: 520,
    x2: 692.5,
    y2: 503,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 696.5,
    y1: 492,
    x2: 696.5,
    y2: 407,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 696.5,
    y1: 503,
    x2: 696.5,
    y2: 482,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__k",
    x1: 695,
    y1: 448,
    x2: 695,
    y2: 438,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M0 0h388v524H0z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M23 8h358v506H23z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M6 8h17v506H6z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M82 383h240v6H82z"
  }), React.createElement("path", {
    fill: "#69f0ae",
    opacity: 0.4,
    d: "M82 406h240v6H82z"
  }), React.createElement("path", {
    fill: "#ff0",
    opacity: 0.4,
    d: "M82 429h240v6H82z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M82 452h240v6H82zM82 475h240v6H82z"
  }), React.createElement("path", {
    d: "M161.55 89.55c.1-1.11.16-2.23.16-3.36a37.33 37.33 0 0 0-1.45-10.3l-4.35.21-2-5.48 2.81-3.07a37.72 37.72 0 0 0-8.9-10.44l-3.43 2.66-4.78-3.34.55-4.13a37.17 37.17 0 0 0-13.27-3.45L125.6 53h-5.83l-1.92-3.7a37.33 37.33 0 0 0-18.13 8.63l2 3.84-4.12 4.12-4-1.25a37.29 37.29 0 0 0-5.73 12.46l3.88 2-1 5.74-4 1.25v.09a37.25 37.25 0 0 0 2.49 13.4l4.32-.59 2.46 5.28-2.53 3.3a37.76 37.76 0 0 0 9.76 9.64l3.19-3 5.05 2.92-.18 4.18a37.28 37.28 0 0 0 12.9 2.29h.63l.92-4.25 5.81-.51 2.24 3.52a37.32 37.32 0 0 0 12.38-5.9l-1.68-4 4.47-3.75 3.84 1.59a37.45 37.45 0 0 0 6.79-11.92l-3.68-2.32 1.51-5.63zm-37.3 24.68a28 28 0 1 1 28-28 28.07 28.07 0 0 1-28 28z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M207.55 158.55c.1-1.11.16-2.23.16-3.36a37.33 37.33 0 0 0-1.45-10.3l-4.35.21-2-5.48 2.81-3.07a37.72 37.72 0 0 0-8.9-10.44l-3.43 2.66-4.78-3.34.55-4.13a37.17 37.17 0 0 0-13.27-3.45L171.6 122h-5.83l-1.92-3.7a37.33 37.33 0 0 0-18.13 8.63l2 3.84-4.12 4.12-4-1.25a37.29 37.29 0 0 0-5.73 12.46l3.88 2-1 5.74-4 1.25v.09a37.25 37.25 0 0 0 2.49 13.4l4.32-.59 2.46 5.28-2.53 3.3a37.76 37.76 0 0 0 9.76 9.64l3.19-3 5.05 2.92-.18 4.18a37.28 37.28 0 0 0 12.9 2.29h.63l.92-4.25 5.81-.51 2.24 3.52a37.32 37.32 0 0 0 12.38-5.9l-1.68-4 4.47-3.75 3.84 1.59a37.45 37.45 0 0 0 6.79-11.92l-3.68-2.32 1.51-5.63zm-37.3 24.68a28 28 0 1 1 28-28 28.07 28.07 0 0 1-28 28z",
    fill: primaryColor,
    opacity: 0.6
  }), React.createElement("path", {
    d: "M254.55 89.55c.1-1.11.16-2.23.16-3.36a37.33 37.33 0 0 0-1.45-10.3l-4.35.21-2-5.48 2.81-3.07a37.72 37.72 0 0 0-8.9-10.44l-3.43 2.66-4.78-3.34.55-4.13a37.17 37.17 0 0 0-13.27-3.45L218.6 53h-5.83l-1.92-3.7a37.33 37.33 0 0 0-18.13 8.63l2 3.84-4.12 4.12-4-1.25a37.29 37.29 0 0 0-5.73 12.46l3.88 2-1 5.74-4 1.25v.09a37.25 37.25 0 0 0 2.49 13.4l4.32-.59 2.46 5.28-2.53 3.3a37.76 37.76 0 0 0 9.76 9.64l3.19-3 5.05 2.92-.18 4.18a37.28 37.28 0 0 0 12.9 2.29h.63l.92-4.25 5.81-.51 2.24 3.52a37.32 37.32 0 0 0 12.38-5.9l-1.68-4 4.47-3.75 3.84 1.59a37.45 37.45 0 0 0 6.79-11.92l-3.68-2.32 1.51-5.63zm-37.3 24.68a28 28 0 1 1 28-28 28.07 28.07 0 0 1-28 28z",
    fill: primaryColor,
    opacity: 0.4
  }), React.createElement("path", {
    d: "M311.55 158.55c.1-1.11.16-2.23.16-3.36a37.33 37.33 0 0 0-1.45-10.3l-4.35.21-2-5.48 2.81-3.07a37.72 37.72 0 0 0-8.9-10.44l-3.43 2.66-4.78-3.34.55-4.13a37.17 37.17 0 0 0-13.27-3.45L275.6 122h-5.83l-1.92-3.7a37.33 37.33 0 0 0-18.13 8.63l2 3.84-4.12 4.12-4-1.25a37.29 37.29 0 0 0-5.73 12.46l3.88 2-1 5.74-4 1.25v.09a37.25 37.25 0 0 0 2.49 13.4l4.32-.59 2.46 5.28-2.53 3.3a37.76 37.76 0 0 0 9.76 9.64l3.19-3 5.05 2.92-.18 4.18a37.28 37.28 0 0 0 12.9 2.29h.63l.92-4.25 5.81-.51 2.24 3.52a37.32 37.32 0 0 0 12.38-5.9l-1.68-4 4.47-3.75 3.84 1.59a37.45 37.45 0 0 0 6.79-11.92l-3.68-2.32 1.51-5.63zm-37.3 24.68a28 28 0 1 1 28-28 28.07 28.07 0 0 1-28 28z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10,
    d: "M161.25 22h-6"
  }), React.createElement("path", {
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10,
    strokeDasharray: "12.71 12.71",
    d: "M142.54 22H72.61"
  }), React.createElement("path", {
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10,
    d: "M66.25 22h-6v6"
  }), React.createElement("path", {
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10,
    strokeDasharray: "11.33 11.33",
    d: "M60.25 39.33v85"
  }), React.createElement("path", {
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10,
    d: "M60.25 130v6"
  }), React.createElement("path", {
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10,
    strokeDasharray: "12",
    d: "M207.75 222.5h136v-119"
  }), React.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M103 261h307v80H103z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M106 266h300v71H106z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M186 283h88v4h-88z"
  }), React.createElement("path", {
    opacity: 0.2,
    d: "M186 292h88v4h-88z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M186 307h172v4H186z"
  }), React.createElement("circle", {
    cx: 140,
    cy: 301,
    r: 19,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 140,
    cy: 301,
    r: 19,
    opacity: 0.2
  }), React.createElement("path", {
    d: "M763.66 564a1.34 1.34 0 0 0 .18-1.54c-4.3-8.61-8.61-6.45-21.33-31.06-13.54-26.17-10.17-34.94-15.24-39.94-2-2-4.06-8.68-6.78-9.85l-1.76-7.06a9.07 9.07 0 0 0 4.67-.72c2.8-1.24 4.93-3.6 6.82-6a45.56 45.56 0 0 0 7-11.84 32.36 32.36 0 0 0 2-9.73 33.28 33.28 0 0 0-.09-5 20.09 20.09 0 0 0 8.65-3.65 15 15 0 0 0 5.48-9.85c0-.39.09-.77.11-1.16a12.11 12.11 0 0 0 0-1.38 15 15 0 0 0-6.9-11.72 19.57 19.57 0 0 0-12-2.49 52.21 52.21 0 0 0-12.15 2.99c-1 .32-2.44.73-3.75 1.3a27.77 27.77 0 0 0-8.76-1.43c-4.86 0-9.62 1.28-14.31 2.54l-15.79 4.23c-3.5.94-7.15 2-9.76 4.47a8.26 8.26 0 0 0-.65.71l-.12.15a8.84 8.84 0 0 0-.57.81c-1.56 2.52-1.9 5.86 0 8.08a9.62 9.62 0 0 0 3.39 2.34 37.8 37.8 0 0 0 4.77 1.82 26 26 0 0 0-4.49 14.64v1.78a26.09 26.09 0 0 0 26.09 26.09h.43l.76 6.12a54 54 0 0 0-8.91 12.46 13.89 13.89 0 0 0-4.37 10.76c-.05 4.34 1.13 9.65 2.28 17l-37.09-15.76-23.16 49.88 17.82 6.57c-8.37.38-13 6.5-12.93 12.73a12.32 12.32 0 0 0 3.66 9.21c6.45 6.45 14.28 73.63 14.28 73.63h3.26v7.05c-13.21.8-26.61 2.43-26.61 5.74a10.77 10.77 0 0 0 4.22 8.21c-.19-.23-.38-.48-.56-.74a14.26 14.26 0 0 0 3.38 2.57h71.75v-14.82h.12v-1.79s-2.6 0-6.64.07v-6.34h3.26c2.91-26.22-9.78-60.24-12.53-67.2 4.47 0 9.17-.06 13.83-.32 19.79.89 53.82.67 60.67-10.75 7.61-12.62 1.52-19.37-1.63-21.81zm-99.43 31.6s1.49.15 4 .34c2.69 7.67 4.68 20.27 6.09 32.57a216.36 216.36 0 0 0-10.09-32.91zm28.63-116.44a26.17 26.17 0 0 0 5.55.6h.2l.16 1.31a25.89 25.89 0 0 1-5.91-1.92zm-12.32 191.45H680v-.26s-2.33 0-6 .06v-6.33h6.52z",
    transform: "translate(-159.54 -82)",
    fill: "url(#prefix__c)"
  }), React.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M537.03 512L521 672l19.03 1L564 512h-26.97z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M538 512l-12 158h12l17-158h-17z"
  }), React.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M865.16 506l15.76 161h-18.76l-15.08-161h18.08z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M865 507l12 158h-12l-17-158h17z"
  }), React.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M583.9 505L569 666h19.9L605 505h-21.1z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M585 505l-12 158h12l17-158h-17z"
  }), React.createElement("path", {
    fill: "url(#prefix__g)",
    d: "M821.69 507L837 672h-18.31L800 507h21.69z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M821 512l12 158h-12l-17-158h17z"
  }), React.createElement("path", {
    fill: "url(#prefix__h)",
    d: "M513 503h359v17H513z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M516 503h288v15H516zM804 503h66v15h-66z"
  }), React.createElement("path", {
    opacity: 0.2,
    d: "M804.46 503h66v15h-66z"
  }), React.createElement("path", {
    fill: "url(#prefix__i)",
    d: "M629 407h135v85H629z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M632 410h126v79H632z"
  }), React.createElement("path", {
    fill: "url(#prefix__j)",
    d: "M676 482h41v21h-41z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M677.5 482h35v21h-35z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M758 410h4v79h-4zM712 482h3v21h-3z"
  }), React.createElement("path", {
    fill: "url(#prefix__k)",
    d: "M690 438h10v10h-10z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M691 439h8v8h-8z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M499.84 430.1l65.39 27.79-22.01 41.81-64.64-23.82 21.26-45.78z"
  }), React.createElement("path", {
    fill: "#f8c198",
    d: "M502.52 563.62h17.96v14.96h-17.96zM526.47 563.62h17.96v14.96h-17.96z"
  }), React.createElement("circle", {
    cx: 542.87,
    cy: 376.5,
    r: 23.94,
    fill: "#f8c198"
  }), React.createElement("path", {
    fill: "#f8c198",
    d: "M565.31 410.92h-20.95l-2.99-23.94h17.96l5.98 23.94z"
  }), React.createElement("path", {
    d: "M577.35 476.83s12 6 3 21-68.84 9-68.84 9 15 35.91 12 62.85h-23.98S492.35 508 486.46 502c-7.63-7.63-1.86-22.22 13.11-19.23s77.78-5.94 77.78-5.94z",
    fill: "#263238"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M516.41 506.22s10.52 1 23.39 1.17c-9.34.1-18-.38-23.22-.75zM511.17 482.85c23.37-.45 66.18-6.56 66.18-6.56a9 9 0 0 1 .9.55c-12.19 1.66-49.19 6.43-67.08 6.01zM498.21 482.05c-10.19 1.55-13.34 13-6.88 19.45 5.92 5.92 13.11 67.57 13.11 67.57h-4.9s-7.19-61.65-13.08-67.57c-7.44-7.4-2.22-21.35 11.75-19.45z"
  })), React.createElement("path", {
    d: "M526.46 575.59s-47.89 0-47.89 6 6 9 6 9h41.89z",
    fill: "#263238"
  }), React.createElement("path", {
    d: "M526 575.36V577c-8.34.06-46.25.65-46.25 6a9.13 9.13 0 0 0 2.24 5.9 9.89 9.89 0 0 1-3.88-7.53c0-6.01 47.89-6.01 47.89-6.01z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M601.29 476.83s12 6 3 21-68.84 9-68.84 9 15 35.91 12 62.85h-23.99s-3-62.85-12-68.84-3-21 12-18 77.83-6.01 77.83-6.01zM550.46 575.59s-47.89 0-47.89 6 6 9 6 9h41.89z",
    fill: "#263238"
  }), React.createElement("path", {
    d: "M561.1 402h7.28c2.87 0 4.92 7.2 7 9.22 4.66 4.59 1.56 12.63 14 36.65 11.68 22.58 15.63 20.61 19.58 28.5s-70.5 7.53-70.5 7.53 3.79-15.12 3-26.21c-1.64-22.79-7.56-30.68.34-38.58-.02 0 8.45-17.11 19.3-17.11z",
    fill: "#ff5252"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M501.47 441.54l-9.81 21.26 6.54 3.27 9.81-21.26-6.54-3.27z"
  }), React.createElement("path", {
    d: "M542.87 354.2a24.23 24.23 0 0 1 2.45.12 23.94 23.94 0 0 0 0 47.64 24.23 24.23 0 0 1-2.45.12 23.945 23.945 0 1 1 0-47.89z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M516.75 350.31c2.4-2.3 5.75-3.24 9-4.1l14.49-3.88c4.31-1.15 8.67-2.32 13.13-2.33a25.48 25.48 0 0 1 8 1.31c1.2-.52 2.55-.9 3.44-1.19a47.91 47.91 0 0 1 11.11-2.68 18 18 0 0 1 11 2.29 13.55 13.55 0 0 1 1.19 22.12 18.43 18.43 0 0 1-7.93 3.35 30.08 30.08 0 0 1-1.72 13.47 41.81 41.81 0 0 1-6.39 10.87c-1.73 2.21-3.69 4.37-6.26 5.51s-5.88 1-7.86-1c-1.46-1.47-2-3.63-2.33-5.67-1.51-8.08-3-17.37-10-21.68-4.39-2.7-9.28-2.44-14.18-2.41a29.55 29.55 0 0 1-12.71-2.91 8.83 8.83 0 0 1-3.18-2.14c-2.2-2.52-1.2-6.63 1.2-8.93z",
    fill: "#fccc63"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M586.95 343a18 18 0 0 0-11-2.29 47.91 47.91 0 0 0-11.11 2.68c-.89.3-2.24.67-3.44 1.19a25.48 25.48 0 0 0-8-1.31c-4.46 0-8.82 1.17-13.13 2.33l-14.49 3.88c-3.21.86-6.56 1.8-9 4.1a8.12 8.12 0 0 0-2.19 3.86 7.54 7.54 0 0 1 2.19-7.13c2.4-2.3 5.75-3.24 9-4.1l14.49-3.88c4.31-1.15 8.67-2.32 13.13-2.33a25.48 25.48 0 0 1 8 1.31c1.2-.52 2.55-.9 3.44-1.19a47.91 47.91 0 0 1 11.11-2.68 18 18 0 0 1 11 2.29 13.79 13.79 0 0 1 6.33 10.75 13 13 0 0 1-.11 2.33 13.79 13.79 0 0 0-6.22-9.81zM580.34 368.44v1.31c0-.43 0-.85-.09-1.28z"
  })), React.createElement("path", {
    d: "M541.46 458c-1.64-22.79-7.56-30.68.34-38.58 0 0 8.46-17.11 19.32-17.11h7.28a3.33 3.33 0 0 1 2.4 1.63h-4.77c-10.86 0-19.32 17.11-19.32 17.11-7.9 7.9-2 15.79-.34 38.58.64 8.89-1.67 20.37-2.61 24.57h-5.29s3.77-15.12 2.99-26.2z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#ff5252",
    d: "M570.14 443.18h-26.16V425.2h26.16z"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M535.12 482.85c23.37-.45 66.18-6.56 66.18-6.56a9 9 0 0 1 .9.55c-12.2 1.66-49.19 6.43-67.08 6.01zM522.21 482.06c-10.26 1.56-13.42 13.09-5.8 18.17 9 6 12 68.84 12 68.84h-4.95s-3-62.85-12-68.84c-8.68-5.81-3.28-20.09 10.75-18.17zM540.35 506.22s10.52 1 23.39 1.17c-9.34.1-18-.38-23.22-.75z"
  })), React.createElement("path", {
    d: "M568.37 437.92v28.63a18.28 18.28 0 0 1-19 18.28c-12.65-.49-27.24-.68-28.91 1-1.39 1.39-4.7 4.06-7.86 6.52a4.64 4.64 0 0 1-7.47-4.1c.4-4.81 1.91-9.93 6.34-11.4 3.57-1.19 10-1.91 16.38-2.34a21 21 0 0 0 19.53-21v-15.59z",
    fill: "#f8c198"
  }), React.createElement("path", {
    d: "M505.16 488.23c.4-4.81 1.91-9.93 6.34-11.4 3.57-1.19 10-1.91 16.38-2.34a21 21 0 0 0 19.53-21v-15.57h21v1.63h-17.72v15.57a21 21 0 0 1-19.53 21c-6.42.43-12.82 1.15-16.38 2.34-4.43 1.48-5.95 6.6-6.34 11.4a4.62 4.62 0 0 0 1.11 3.44 4.67 4.67 0 0 1-4.39-5.07zM550.52 575.36V577c-8.34.06-46.25.65-46.25 6a9.13 9.13 0 0 0 2.24 5.9 9.89 9.89 0 0 1-3.88-7.53c0-6.01 47.89-6.01 47.89-6.01z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10,
    strokeWidth: 3,
    opacity: 0.5,
    d: "M233 518v218h385V452h11"
  }));
};

UndrawProcessing.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawProcessing;