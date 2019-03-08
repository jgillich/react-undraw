function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawDroneRace = function UndrawDroneRace(_props) {
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
    viewBox: "0 0 1022.76 761.09",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 616.05,
    y1: 543.92,
    x2: 616.05,
    y2: 426.21,
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
    x1: 404.29,
    y1: 575,
    x2: 404.29,
    y2: 496.58,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 222.33,
    y1: 432.82,
    x2: 222.33,
    y2: 379.12,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 533.77,
    y1: 346.42,
    x2: 533.77,
    y2: 316.03,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 398.54,
    y1: 299.67,
    x2: 398.54,
    y2: 275.44,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 367.05,
    y1: 437.96,
    x2: 367.05,
    y2: 395.77,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 2606.45,
    y1: 160.59,
    x2: 2848.25,
    y2: 160.59,
    gradientTransform: "matrix(-1 0 0 1 3342 0)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 2483.29,
    y1: 816.51,
    x2: 2483.29,
    y2: 211.49,
    gradientTransform: "matrix(-1 0 0 1 3342 0)",
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M174.8 110.92c-5.48 5.72-7.59 13.78-9.95 21.35-19 61-65.82 110.07-119.14 145.13C23.13 292.25-4.36 312.16.58 338.77c2.66 14.3 14.33 24.82 23 36.46A99.86 99.86 0 0 1 39 461.93c-9.86 33.21-37.42 64.19-28.89 97.77 5.26 20.7 23.12 35.38 40.29 48q40.18 29.57 82.92 55.39c19.1 11.54 39.42 22.77 61.68 24.23 19.6 1.29 38.8-5.12 57.41-11.46 16.26-5.53 32.93-11.3 46.06-22.39 8.57-7.24 15.4-16.58 24.92-22.51 22.36-13.92 51.08-5.1 76.72.83a306.77 306.77 0 0 0 182.82-14.42c88.31-35.74 155.62-110.79 242-151.06 37.14-17.32 77.54-28.07 111.93-50.37a193.89 193.89 0 0 0 49.2-45.85c26-34.55 40.06-78.59 36-121.69s-26.81-84.65-62.54-109c-38.25-26-86.56-30.91-130.08-46.56-44.94-16.15-84.92-43.93-129.43-61.25-72.77-28.28-156.63-26.64-228.28 4.49-48.44 21.06-97.54 70.29-151.49 74-38.44 2.63-115.43-30.54-145.44.84z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 133.46,
    cy: 386.14,
    rx: 40.83,
    ry: 6.15,
    opacity: 0.03
  }), React.createElement("path", {
    d: "M743 430.15a149 149 0 0 0-21.3 1.32 5.11 5.11 0 1 0-10.23 0 149 149 0 0 0-21.3-1.32c-15.77 0-28.55 1.76-28.55 3.94s12.8 3.91 28.57 3.91a149 149 0 0 0 21.3-1.32 5.36 5.36 0 0 0 .33 1.85 3.53 3.53 0 0 0-.34 5.68 9.54 9.54 0 0 0-5.6 5.3 8.58 8.58 0 0 0-4.9-1.83l-53.06-2.44a20.56 20.56 0 0 0-16.63-8.56h-33.45a20.56 20.56 0 0 0-16.71 8.68l-50.42 2.32a8.58 8.58 0 0 0-4.59 1.59 9.56 9.56 0 0 0-4.91-4.84 3.52 3.52 0 0 0 1.55-2.93 3.48 3.48 0 0 0-2.35-3.31 5.39 5.39 0 0 0 .22-1.5 149 149 0 0 0 21.3 1.32c15.77 0 28.55-1.76 28.55-3.94s-12.78-3.94-28.55-3.94a149 149 0 0 0-21.3 1.32 5.19 5.19 0 0 0-5.11-5.26 5.19 5.19 0 0 0-5.11 5.26 149 149 0 0 0-21.3-1.32c-15.77 0-28.55 1.76-28.55 3.94s12.76 3.93 28.53 3.93a149 149 0 0 0 21.3-1.32 5.36 5.36 0 0 0 .33 1.85 3.54 3.54 0 0 0-.21 5.79 9.67 9.67 0 0 0-6.09 9v6.48a9.55 9.55 0 0 0 9.42 9.68h3.75a9.31 9.31 0 0 0 7.55-3.91 8.61 8.61 0 0 0 5.71 2.41l49.44 1.42a21.19 21.19 0 0 0 6.13 6.42c-4.73 4.94-23.19 26.86-20.22 65.49 0 0 3 5.69 10.65 0 0 0-4.9-43 22.54-60.76a6.83 6.83 0 0 0 6.43 4.7h3.5a18.83 18.83 0 0 0-11.6 17.52 18.33 18.33 0 1 0 36.64 0 18.83 18.83 0 0 0-11.6-17.52h3.5a6.83 6.83 0 0 0 6.43-4.7c27.44 17.73 22.54 60.76 22.54 60.76 7.67 5.69 10.65 0 10.65 0 3.41-44.23-21.3-66.57-21.3-66.57h-.45a21.26 21.26 0 0 0 4.63-5.26l52-1.5a8.63 8.63 0 0 0 6-2.65 9.33 9.33 0 0 0 7.73 4.15h3.75a9.55 9.55 0 0 0 9.42-9.68v-6.48a9.69 9.69 0 0 0-5.58-8.83 3.52 3.52 0 0 0-.6-6.35 5.39 5.39 0 0 0 .22-1.5A149 149 0 0 0 743 438c15.77 0 28.55-1.76 28.55-3.94s-12.77-3.91-28.55-3.91z",
    transform: "translate(-88.62 -69.46)",
    fill: "url(#prefix__a)"
  }), React.createElement("circle", {
    cx: 525.99,
    cy: 432.38,
    r: 17.76,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 525.99,
    cy: 432.38,
    r: 11.98,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 525.99,
    cy: 432.38,
    r: 11.98,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("circle", {
    cx: 525.99,
    cy: 432.38,
    r: 7.85,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 525.99,
    cy: 432.38,
    r: 7.85,
    opacity: 0.25
  }), React.createElement("path", {
    d: "M498.31 405.94s-24 21.07-20.65 62.78c0 0 2.89 5.37 10.33 0 0 0-6.2-52.87 35.11-62.78zM553.66 405.94s24 21.07 20.65 62.78c0 0-2.89 5.37-10.33 0 0 0 6.2-52.87-35.11-62.78z",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 488.2,
    y: 370.01,
    width: 72.7,
    height: 40.27,
    rx: 16.95,
    ry: 16.95,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M500.1 401.15l-56.72-1.61a8.51 8.51 0 0 1-8.27-8.5v-2.18a8.51 8.51 0 0 1 8.13-8.5l56.72-2.54a8.51 8.51 0 0 1 8.89 8.5v6.31a8.51 8.51 0 0 1-8.75 8.52zM551.46 401.15l56.72-1.61a8.51 8.51 0 0 0 8.27-8.5v-2.18a8.51 8.51 0 0 0-8.13-8.5l-56.72-2.54a8.51 8.51 0 0 0-8.89 8.5v6.31a8.51 8.51 0 0 0 8.75 8.52z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M500.1 401.15l-56.72-1.61a8.51 8.51 0 0 1-8.27-8.5v-2.18a8.51 8.51 0 0 1 8.13-8.5l56.72-2.54a8.51 8.51 0 0 1 8.89 8.5v6.31a8.51 8.51 0 0 1-8.75 8.52zM551.46 401.15l56.72-1.61a8.51 8.51 0 0 0 8.27-8.5v-2.18a8.51 8.51 0 0 0-8.13-8.5l-56.72-2.54a8.51 8.51 0 0 0-8.89 8.5v6.31a8.51 8.51 0 0 0 8.75 8.52z",
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("rect", {
    x: 417.77,
    y: 376.62,
    width: 21.89,
    height: 24.37,
    rx: 9.21,
    ry: 9.21,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 612.32,
    y: 376.62,
    width: 21.89,
    height: 24.37,
    rx: 9.21,
    ry: 9.21,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 422.31,
    y: 371.25,
    width: 13.22,
    height: 6.61,
    rx: 2.78,
    ry: 2.78,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 423.55,
    y: 360.1,
    width: 9.91,
    height: 14.87,
    rx: 4.17,
    ry: 4.17,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 402.9,
    cy: 367.53,
    rx: 27.67,
    ry: 3.72,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 454.12,
    cy: 367.53,
    rx: 27.67,
    ry: 3.72,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 617.28,
    y: 371.25,
    width: 13.22,
    height: 6.61,
    rx: 2.78,
    ry: 2.78,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 618.52,
    y: 360.1,
    width: 9.91,
    height: 14.87,
    rx: 4.17,
    ry: 4.17,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 597.86,
    cy: 367.53,
    rx: 27.67,
    ry: 3.72,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 649.08,
    cy: 367.53,
    rx: 27.67,
    ry: 3.72,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 402.9,
    cy: 367.53,
    rx: 27.67,
    ry: 3.72,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 454.12,
    cy: 367.53,
    rx: 27.67,
    ry: 3.72,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 597.86,
    cy: 367.53,
    rx: 27.67,
    ry: 3.72,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 649.08,
    cy: 367.53,
    rx: 27.67,
    ry: 3.72,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("rect", {
    x: 509.47,
    y: 402.64,
    width: 33.04,
    height: 13.22,
    rx: 5.56,
    ry: 5.56,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 509.47,
    y: 402.64,
    width: 33.04,
    height: 13.22,
    rx: 5.56,
    ry: 5.56,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("g", {
    opacity: 0.7
  }, React.createElement("path", {
    d: "M488.88 499.2a99.25 99.25 0 0 0-14.19.88 3.41 3.41 0 1 0-6.81 0 99.25 99.25 0 0 0-14.19-.88c-10.5 0-19 1.18-19 2.63s8.51 2.63 19 2.63a99.25 99.25 0 0 0 14.19-.88 3.57 3.57 0 0 0 .22 1.23 2.35 2.35 0 0 0-.22 3.78 6.36 6.36 0 0 0-3.73 3.53 5.72 5.72 0 0 0-3.27-1.22l-35.35-1.63a13.7 13.7 0 0 0-11.08-5.7h-22.29a13.7 13.7 0 0 0-11.16 5.79l-33.59 1.55a5.71 5.71 0 0 0-3.06 1.06 6.37 6.37 0 0 0-3.27-3.23 2.35 2.35 0 0 0 1-2 2.32 2.32 0 0 0-1.56-2.21 3.59 3.59 0 0 0 .14-1 99.24 99.24 0 0 0 14.19.88c10.5 0 19-1.18 19-2.63s-8.51-2.63-19-2.63a99.25 99.25 0 0 0-14.19.88 3.45 3.45 0 0 0-3.41-3.5 3.45 3.45 0 0 0-3.41 3.5 99.25 99.25 0 0 0-14.19-.88c-10.5 0-19 1.18-19 2.63s8.51 2.63 19 2.63a99.25 99.25 0 0 0 14.19-.88 3.57 3.57 0 0 0 .22 1.23 2.36 2.36 0 0 0-.14 3.86 6.44 6.44 0 0 0-4.06 6V519a6.36 6.36 0 0 0 6.27 6.45h2.5a6.2 6.2 0 0 0 5-2.61 5.74 5.74 0 0 0 3.8 1.6l32.94.95a14.12 14.12 0 0 0 4.08 4.28c-3.15 3.29-15.45 17.9-13.47 43.63 0 0 2 3.79 7.1 0 0 0-3.27-28.67 15-40.48a4.55 4.55 0 0 0 4.29 3.13h2.33a12.55 12.55 0 0 0-7.73 11.67 12.21 12.21 0 1 0 24.41 0 12.55 12.55 0 0 0-7.61-11.62h2.33a4.55 4.55 0 0 0 4.29-3.13c18.28 11.81 15 40.48 15 40.48 5.11 3.79 7.1 0 7.1 0C439.76 543.88 423.3 529 423.3 529h-.3a14.16 14.16 0 0 0 3.09-3.51l34.67-1a5.75 5.75 0 0 0 4-1.76 6.22 6.22 0 0 0 5.15 2.77h2.5a6.36 6.36 0 0 0 6.27-6.45v-4.35a6.46 6.46 0 0 0-3.71-5.88 2.34 2.34 0 0 0-.4-4.23 3.59 3.59 0 0 0 .14-1 99.24 99.24 0 0 0 14.19.88c10.5 0 19-1.18 19-2.63s-8.52-2.64-19.02-2.64z",
    transform: "translate(-88.62 -69.46)",
    fill: "url(#prefix__b)"
  }), React.createElement("circle", {
    cx: 314.71,
    cy: 477.51,
    r: 11.83,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 314.71,
    cy: 477.51,
    r: 7.98,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 314.71,
    cy: 477.51,
    r: 7.98,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("circle", {
    cx: 314.71,
    cy: 477.51,
    r: 5.23,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 314.71,
    cy: 477.51,
    r: 5.23,
    opacity: 0.25
  }), React.createElement("path", {
    d: "M296.28 459.89s-16 14-13.76 41.83c0 0 1.93 3.58 6.88 0 0 0-4.13-35.22 23.39-41.83zM333.15 459.89s16 14 13.76 41.83c0 0-1.93 3.58-6.88 0 0 0 4.13-35.22-23.39-41.83z",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 289.54,
    y: 435.95,
    width: 48.43,
    height: 26.83,
    rx: 11.29,
    ry: 11.29,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M297.47 456.7l-37.79-1.06a5.67 5.67 0 0 1-5.51-5.66v-1.44a5.67 5.67 0 0 1 5.41-5.66l37.8-1.71a5.67 5.67 0 0 1 5.92 5.66v4.21a5.67 5.67 0 0 1-5.83 5.66zM331.68 456.7l37.79-1.06a5.67 5.67 0 0 0 5.51-5.66v-1.44a5.67 5.67 0 0 0-5.41-5.66l-37.79-1.69a5.67 5.67 0 0 0-5.92 5.66v4.21a5.67 5.67 0 0 0 5.82 5.64z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M297.47 456.7l-37.79-1.06a5.67 5.67 0 0 1-5.51-5.66v-1.44a5.67 5.67 0 0 1 5.41-5.66l37.8-1.71a5.67 5.67 0 0 1 5.92 5.66v4.21a5.67 5.67 0 0 1-5.83 5.66zM331.68 456.7l37.79-1.06a5.67 5.67 0 0 0 5.51-5.66v-1.44a5.67 5.67 0 0 0-5.41-5.66l-37.79-1.69a5.67 5.67 0 0 0-5.92 5.66v4.21a5.67 5.67 0 0 0 5.82 5.64z",
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("rect", {
    x: 242.62,
    y: 440.36,
    width: 14.58,
    height: 16.24,
    rx: 6.14,
    ry: 6.14,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 372.23,
    y: 440.36,
    width: 14.58,
    height: 16.24,
    rx: 6.14,
    ry: 6.14,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 245.64,
    y: 436.78,
    width: 8.81,
    height: 4.4,
    rx: 1.85,
    ry: 1.85,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 246.47,
    y: 429.35,
    width: 6.6,
    height: 9.91,
    rx: 2.78,
    ry: 2.78,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 232.71,
    cy: 434.3,
    rx: 18.44,
    ry: 2.48,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 266.83,
    cy: 434.3,
    rx: 18.44,
    ry: 2.48,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 375.53,
    y: 436.78,
    width: 8.81,
    height: 4.4,
    rx: 1.85,
    ry: 1.85,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 376.36,
    y: 429.35,
    width: 6.6,
    height: 9.91,
    rx: 2.78,
    ry: 2.78,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 362.6,
    cy: 434.3,
    rx: 18.44,
    ry: 2.48,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 396.72,
    cy: 434.3,
    rx: 18.44,
    ry: 2.48,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 232.71,
    cy: 434.3,
    rx: 18.44,
    ry: 2.48,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 266.83,
    cy: 434.3,
    rx: 18.44,
    ry: 2.48,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 362.6,
    cy: 434.3,
    rx: 18.44,
    ry: 2.48,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 396.72,
    cy: 434.3,
    rx: 18.44,
    ry: 2.48,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("rect", {
    x: 303.71,
    y: 457.69,
    width: 22.01,
    height: 8.81,
    rx: 3.71,
    ry: 3.71,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 303.71,
    y: 457.69,
    width: 22.01,
    height: 8.81,
    rx: 3.71,
    ry: 3.71,
    fill: "#f5f5f5",
    opacity: 0.2
  })), React.createElement("g", {
    opacity: 0.5
  }, React.createElement("path", {
    d: "M280.25 380.92a68 68 0 0 0-9.72.6 2.33 2.33 0 1 0-4.66 0 68 68 0 0 0-9.72-.6c-7.19 0-13 .8-13 1.8s5.83 1.8 13 1.8a68 68 0 0 0 9.72-.6 2.45 2.45 0 0 0 .15.84 1.61 1.61 0 0 0-.15 2.59 4.35 4.35 0 0 0-2.56 2.42 3.92 3.92 0 0 0-2.24-.83l-24.2-1.12a9.38 9.38 0 0 0-7.58-3.9H214a9.38 9.38 0 0 0-7.62 4l-23 1.06a3.91 3.91 0 0 0-2.09.73 4.36 4.36 0 0 0-2.24-2.21 1.61 1.61 0 0 0 .71-1.34 1.59 1.59 0 0 0-1.07-1.51 2.46 2.46 0 0 0 .1-.69 68 68 0 0 0 9.72.6c7.19 0 13-.8 13-1.8s-5.83-1.8-13-1.8a68 68 0 0 0-9.72.6 2.37 2.37 0 0 0-2.33-2.4 2.37 2.37 0 0 0-2.33 2.4 68 68 0 0 0-9.72-.6c-7.19 0-13 .8-13 1.8s5.83 1.8 13 1.8a68 68 0 0 0 9.72-.6 2.45 2.45 0 0 0 .15.84 1.61 1.61 0 0 0-.09 2.64 4.41 4.41 0 0 0-2.78 4.13v3a4.36 4.36 0 0 0 4.3 4.42h1.71a4.25 4.25 0 0 0 3.44-1.78 3.93 3.93 0 0 0 2.6 1.1l22.55.65a9.67 9.67 0 0 0 2.8 2.93c-2.16 2.25-10.58 12.25-9.22 29.87 0 0 1.36 2.6 4.86 0 0 0-2.24-19.63 10.28-27.72a3.12 3.12 0 0 0 2.93 2.15h1.6a8.59 8.59 0 0 0-5.29 8 8.36 8.36 0 1 0 16.71 0 8.59 8.59 0 0 0-5.29-8H227a3.12 3.12 0 0 0 2.93-2.15c12.52 8.09 10.28 27.72 10.28 27.72 3.5 2.6 4.86 0 4.86 0 1.55-20.18-9.72-30.36-9.72-30.36h-.2a9.7 9.7 0 0 0 2.11-2.4l23.74-.68a3.94 3.94 0 0 0 2.72-1.21 4.26 4.26 0 0 0 3.52 1.89H269a4.36 4.36 0 0 0 4.3-4.42v-3a4.42 4.42 0 0 0-2.54-4 1.6 1.6 0 0 0-.28-2.9 2.46 2.46 0 0 0 .1-.69 68 68 0 0 0 9.72.6c7.19 0 13-.8 13-1.8s-5.86-1.87-13.05-1.87z",
    transform: "translate(-88.62 -69.46)",
    fill: "url(#prefix__c)"
  }), React.createElement("circle", {
    cx: 133.06,
    cy: 344.17,
    r: 8.1,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 133.06,
    cy: 344.17,
    r: 5.46,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 133.06,
    cy: 344.17,
    r: 5.46,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("circle", {
    cx: 133.06,
    cy: 344.17,
    r: 3.58,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 133.06,
    cy: 344.17,
    r: 3.58,
    opacity: 0.25
  }), React.createElement("path", {
    d: "M120.43 332.1s-10.93 9.61-9.42 28.64c0 0 1.32 2.45 4.71 0 0 0-2.83-24.12 16-28.64zM145.68 332.1s10.93 9.61 9.42 28.64c0 0-1.32 2.45-4.71 0 0 0 2.83-24.12-16-28.64z",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 115.82,
    y: 315.72,
    width: 33.16,
    height: 18.37,
    rx: 7.73,
    ry: 7.73,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M121.25 329.92l-25.87-.72a3.88 3.88 0 0 1-3.77-3.88v-1a3.88 3.88 0 0 1 3.71-3.88l25.87-1.16a3.88 3.88 0 0 1 4.05 3.88v2.88a3.88 3.88 0 0 1-3.99 3.88zM144.67 329.92l25.87-.72a3.88 3.88 0 0 0 3.77-3.88v-1a3.88 3.88 0 0 0-3.71-3.88l-25.87-1.16a3.88 3.88 0 0 0-4.05 3.88v2.88a3.88 3.88 0 0 0 3.99 3.88z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M121.25 329.92l-25.87-.72a3.88 3.88 0 0 1-3.77-3.88v-1a3.88 3.88 0 0 1 3.71-3.88l25.87-1.16a3.88 3.88 0 0 1 4.05 3.88v2.88a3.88 3.88 0 0 1-3.99 3.88zM144.67 329.92l25.87-.72a3.88 3.88 0 0 0 3.77-3.88v-1a3.88 3.88 0 0 0-3.71-3.88l-25.87-1.16a3.88 3.88 0 0 0-4.05 3.88v2.88a3.88 3.88 0 0 0 3.99 3.88z",
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("rect", {
    x: 83.69,
    y: 318.73,
    width: 9.99,
    height: 11.12,
    rx: 4.2,
    ry: 4.2,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 172.43,
    y: 318.73,
    width: 9.99,
    height: 11.12,
    rx: 4.2,
    ry: 4.2,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 85.76,
    y: 316.28,
    width: 6.03,
    height: 3.01,
    rx: 1.27,
    ry: 1.27,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 86.33,
    y: 311.2,
    width: 4.52,
    height: 6.78,
    rx: 1.9,
    ry: 1.9,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 76.91,
    cy: 314.59,
    rx: 12.62,
    ry: 1.7,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 100.27,
    cy: 314.59,
    rx: 12.62,
    ry: 1.7,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 174.69,
    y: 316.28,
    width: 6.03,
    height: 3.01,
    rx: 1.27,
    ry: 1.27,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 175.26,
    y: 311.2,
    width: 4.52,
    height: 6.78,
    rx: 1.9,
    ry: 1.9,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 165.84,
    cy: 314.59,
    rx: 12.62,
    ry: 1.7,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 189.2,
    cy: 314.59,
    rx: 12.62,
    ry: 1.7,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 76.91,
    cy: 314.59,
    rx: 12.62,
    ry: 1.7,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 100.27,
    cy: 314.59,
    rx: 12.62,
    ry: 1.7,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 165.84,
    cy: 314.59,
    rx: 12.62,
    ry: 1.7,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 189.2,
    cy: 314.59,
    rx: 12.62,
    ry: 1.7,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("rect", {
    x: 125.52,
    y: 330.6,
    width: 15.07,
    height: 6.03,
    rx: 2.54,
    ry: 2.54,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 125.52,
    y: 330.6,
    width: 15.07,
    height: 6.03,
    rx: 2.54,
    ry: 2.54,
    fill: "#f5f5f5",
    opacity: 0.2
  })), React.createElement("g", {
    opacity: 0.5
  }, React.createElement("path", {
    d: "M566.55 317a38.46 38.46 0 0 0-5.5.34 1.32 1.32 0 1 0-2.64 0 38.46 38.46 0 0 0-5.5-.34c-4.07 0-7.37.46-7.37 1s3.3 1 7.37 1a38.46 38.46 0 0 0 5.5-.34 1.38 1.38 0 0 0 .09.48.91.91 0 0 0-.09 1.47 2.46 2.46 0 0 0-1.45 1.37 2.22 2.22 0 0 0-1.27-.47L542 321a5.31 5.31 0 0 0-4.29-2.21h-8.63a5.31 5.31 0 0 0-4.32 2.24l-13 .6a2.21 2.21 0 0 0-1.18.41 2.47 2.47 0 0 0-1.27-1.25.91.91 0 0 0 .4-.76.9.9 0 0 0-.61-.86 1.39 1.39 0 0 0 .06-.39 38.46 38.46 0 0 0 5.5.34c4.07 0 7.37-.46 7.37-1s-3.3-1-7.37-1a38.46 38.46 0 0 0-5.5.34 1.34 1.34 0 0 0-1.32-1.36 1.34 1.34 0 0 0-1.32 1.36A38.46 38.46 0 0 0 501 317c-4.07 0-7.37.46-7.37 1s3.3 1 7.37 1a38.46 38.46 0 0 0 5.5-.34 1.38 1.38 0 0 0 .09.48.91.91 0 0 0-.05 1.49 2.5 2.5 0 0 0-1.57 2.34v1.67a2.47 2.47 0 0 0 2.43 2.5h1a2.4 2.4 0 0 0 1.95-1 2.22 2.22 0 0 0 1.47.62l12.76.37a5.47 5.47 0 0 0 1.58 1.66c-1.22 1.28-6 6.94-5.22 16.91 0 0 .77 1.47 2.75 0 0 0-1.27-11.11 5.82-15.69a1.76 1.76 0 0 0 1.66 1.21h.9a4.86 4.86 0 0 0-3 4.52 4.73 4.73 0 1 0 9.46 0 4.86 4.86 0 0 0-3-4.52h.9a1.76 1.76 0 0 0 1.66-1.21c7.09 4.58 5.82 15.69 5.82 15.69 2 1.47 2.75 0 2.75 0 .88-11.42-5.5-17.19-5.5-17.19H541a5.49 5.49 0 0 0 1.2-1.36l13.44-.39a2.23 2.23 0 0 0 1.54-.68 2.41 2.41 0 0 0 2 1.07h1a2.47 2.47 0 0 0 2.43-2.5v-1.67a2.5 2.5 0 0 0-1.44-2.28.91.91 0 0 0-.16-1.64 1.39 1.39 0 0 0 .06-.39 38.46 38.46 0 0 0 5.5.34c4.07 0 7.37-.46 7.37-1s-3.32-1.01-7.39-1.01z",
    transform: "translate(-88.62 -69.46)",
    fill: "url(#prefix__d)"
  }), React.createElement("circle", {
    cx: 444.78,
    cy: 266.1,
    r: 4.59,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 444.78,
    cy: 266.1,
    r: 3.09,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 444.78,
    cy: 266.1,
    r: 3.09,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("circle", {
    cx: 444.78,
    cy: 266.1,
    r: 2.03,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 444.78,
    cy: 266.1,
    r: 2.03,
    opacity: 0.25
  }), React.createElement("path", {
    d: "M437.63 259.27s-6.19 5.44-5.33 16.21c0 0 .75 1.39 2.67 0 0 0-1.6-13.65 9.06-16.21zM451.92 259.27s6.19 5.44 5.33 16.21c0 0-.75 1.39-2.67 0 0 0 1.6-13.65-9.06-16.21z",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 435.02,
    y: 250,
    width: 18.77,
    height: 10.4,
    rx: 4.38,
    ry: 4.38,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M438.09 258.03l-14.64-.41a2.2 2.2 0 0 1-2.13-2.2v-.56a2.2 2.2 0 0 1 2.1-2.19l14.64-.66a2.2 2.2 0 0 1 2.29 2.19v1.63a2.2 2.2 0 0 1-2.26 2.2zM451.38 258.03l14.64-.41a2.2 2.2 0 0 0 2.13-2.2v-.56a2.2 2.2 0 0 0-2.1-2.19l-14.67-.65a2.2 2.2 0 0 0-2.29 2.19v1.63a2.2 2.2 0 0 0 2.29 2.19z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M438.09 258.03l-14.64-.41a2.2 2.2 0 0 1-2.13-2.2v-.56a2.2 2.2 0 0 1 2.1-2.19l14.64-.66a2.2 2.2 0 0 1 2.29 2.19v1.63a2.2 2.2 0 0 1-2.26 2.2zM451.38 258.03l14.64-.41a2.2 2.2 0 0 0 2.13-2.2v-.56a2.2 2.2 0 0 0-2.1-2.19l-14.67-.65a2.2 2.2 0 0 0-2.29 2.19v1.63a2.2 2.2 0 0 0 2.29 2.19z",
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("rect", {
    x: 416.84,
    y: 251.7,
    width: 5.65,
    height: 6.29,
    rx: 2.38,
    ry: 2.38,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 467.07,
    y: 251.7,
    width: 5.65,
    height: 6.29,
    rx: 2.38,
    ry: 2.38,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 418.01,
    y: 250.32,
    width: 3.41,
    height: 1.71,
    rx: 0.72,
    ry: 0.72,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 418.33,
    y: 247.44,
    width: 2.56,
    height: 3.84,
    rx: 1.08,
    ry: 1.08,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 413,
    cy: 249.36,
    rx: 7.15,
    ry: 0.96,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 426.22,
    cy: 249.36,
    rx: 7.15,
    ry: 0.96,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 468.35,
    y: 250.32,
    width: 3.41,
    height: 1.71,
    rx: 0.72,
    ry: 0.72,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 468.67,
    y: 247.44,
    width: 2.56,
    height: 3.84,
    rx: 1.08,
    ry: 1.08,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 463.33,
    cy: 249.36,
    rx: 7.15,
    ry: 0.96,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 476.56,
    cy: 249.36,
    rx: 7.15,
    ry: 0.96,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 413,
    cy: 249.36,
    rx: 7.15,
    ry: 0.96,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 426.22,
    cy: 249.36,
    rx: 7.15,
    ry: 0.96,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 463.33,
    cy: 249.36,
    rx: 7.15,
    ry: 0.96,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 476.56,
    cy: 249.36,
    rx: 7.15,
    ry: 0.96,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("rect", {
    x: 440.51,
    y: 258.42,
    width: 8.53,
    height: 3.41,
    rx: 1.44,
    ry: 1.44,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 440.51,
    y: 258.42,
    width: 8.53,
    height: 3.41,
    rx: 1.44,
    ry: 1.44,
    fill: "#f5f5f5",
    opacity: 0.2
  })), React.createElement("g", {
    opacity: 0.3
  }, React.createElement("path", {
    d: "M424.67 276.25a30.66 30.66 0 0 0-4.38.27 1.05 1.05 0 1 0-2.1 0 30.66 30.66 0 0 0-4.38-.27c-3.24 0-5.88.36-5.88.81s2.63.81 5.88.81a30.66 30.66 0 0 0 4.38-.27 1.1 1.1 0 0 0 .07.38.73.73 0 0 0-.07 1.17 2 2 0 0 0-1.15 1.09 1.77 1.77 0 0 0-1-.38l-10.92-.5a4.23 4.23 0 0 0-3.42-1.76h-6.88a4.23 4.23 0 0 0-3.44 1.79l-10.38.48a1.76 1.76 0 0 0-.94.33 2 2 0 0 0-1-1 .72.72 0 0 0 .32-.6.72.72 0 0 0-.48-.68 1.11 1.11 0 0 0 0-.31 30.66 30.66 0 0 0 4.38.27c3.24 0 5.88-.36 5.88-.81s-2.63-.81-5.88-.81a30.66 30.66 0 0 0-4.38.27 1.07 1.07 0 0 0-1.05-1.08 1.07 1.07 0 0 0-1.05 1.08 30.66 30.66 0 0 0-4.38-.27c-3.24 0-5.88.36-5.88.81s2.63.81 5.88.81a30.66 30.66 0 0 0 4.38-.27 1.1 1.1 0 0 0 .07.38.73.73 0 0 0 0 1.19 2 2 0 0 0-1.25 1.86v1.33a2 2 0 0 0 1.94 2h.77a1.92 1.92 0 0 0 1.55-.81 1.77 1.77 0 0 0 1.18.5l10.18.29a4.36 4.36 0 0 0 1.26 1.32c-1 1-4.77 5.53-4.16 13.48 0 0 .61 1.17 2.19 0 0 0-1-8.86 4.64-12.51a1.41 1.41 0 0 0 1.32 1h.72a3.88 3.88 0 0 0-2.39 3.61 3.77 3.77 0 1 0 7.54 0 3.88 3.88 0 0 0-2.39-3.61h.72a1.41 1.41 0 0 0 1.32-1c5.65 3.65 4.64 12.51 4.64 12.51 1.58 1.17 2.19 0 2.19 0 .7-9.1-4.38-13.7-4.38-13.7h-.09a4.38 4.38 0 0 0 1-1.08l10.71-.31a1.78 1.78 0 0 0 1.23-.54 1.92 1.92 0 0 0 1.59.85h.77a2 2 0 0 0 1.94-2V281a2 2 0 0 0-1.15-1.82.72.72 0 0 0-.12-1.31 1.11 1.11 0 0 0 0-.31 30.66 30.66 0 0 0 4.38.27c3.24 0 5.88-.36 5.88-.81s-2.69-.77-5.93-.77z",
    transform: "translate(-88.62 -69.46)",
    fill: "url(#prefix__e)"
  }), React.createElement("circle", {
    cx: 309.62,
    cy: 221.55,
    r: 3.66,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 309.62,
    cy: 221.55,
    r: 2.47,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 309.62,
    cy: 221.55,
    r: 2.47,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("circle", {
    cx: 309.62,
    cy: 221.55,
    r: 1.62,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 309.62,
    cy: 221.55,
    r: 1.62,
    opacity: 0.25
  }), React.createElement("path", {
    d: "M303.92 216.11s-4.93 4.34-4.25 12.92c0 0 .6 1.11 2.13 0 0 0-1.28-10.88 7.23-12.92zM315.32 216.11s4.93 4.34 4.25 12.92c0 0-.6 1.11-2.13 0 0 0 1.28-10.88-7.23-12.92z",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 301.84,
    y: 208.71,
    width: 14.96,
    height: 8.29,
    rx: 2.23,
    ry: 2.23,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M304.29 215.12l-11.67-.33a1.75 1.75 0 0 1-1.7-1.75v-.45a1.75 1.75 0 0 1 1.67-1.75l11.67-.52a1.75 1.75 0 0 1 1.83 1.75v1.3a1.75 1.75 0 0 1-1.8 1.75zM314.86 215.12l11.67-.33a1.75 1.75 0 0 0 1.7-1.75v-.45a1.75 1.75 0 0 0-1.67-1.75l-11.67-.52a1.75 1.75 0 0 0-1.83 1.75v1.3a1.75 1.75 0 0 0 1.8 1.75z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M304.29 215.12l-11.67-.33a1.75 1.75 0 0 1-1.7-1.75v-.45a1.75 1.75 0 0 1 1.67-1.75l11.67-.52a1.75 1.75 0 0 1 1.83 1.75v1.3a1.75 1.75 0 0 1-1.8 1.75zM314.86 215.12l11.67-.33a1.75 1.75 0 0 0 1.7-1.75v-.45a1.75 1.75 0 0 0-1.67-1.75l-11.67-.52a1.75 1.75 0 0 0-1.83 1.75v1.3a1.75 1.75 0 0 0 1.8 1.75z",
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("rect", {
    x: 287.35,
    y: 210.07,
    width: 4.51,
    height: 5.02,
    rx: 1.21,
    ry: 1.21,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 327.39,
    y: 210.07,
    width: 4.51,
    height: 5.02,
    rx: 1.21,
    ry: 1.21,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 288.28,
    y: 208.97,
    width: 2.72,
    height: 1.36,
    rx: 0.37,
    ry: 0.37,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 288.54,
    y: 206.67,
    width: 2.04,
    height: 3.06,
    rx: 0.55,
    ry: 0.55,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 284.29,
    cy: 208.2,
    rx: 5.7,
    ry: 0.77,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 294.83,
    cy: 208.2,
    rx: 5.7,
    ry: 0.77,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 328.41,
    y: 208.97,
    width: 2.72,
    height: 1.36,
    rx: 0.37,
    ry: 0.37,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 328.66,
    y: 206.67,
    width: 2.04,
    height: 3.06,
    rx: 0.55,
    ry: 0.55,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 324.41,
    cy: 208.2,
    rx: 5.7,
    ry: 0.77,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 334.96,
    cy: 208.2,
    rx: 5.7,
    ry: 0.77,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 284.29,
    cy: 208.2,
    rx: 5.7,
    ry: 0.77,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 294.83,
    cy: 208.2,
    rx: 5.7,
    ry: 0.77,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 324.41,
    cy: 208.2,
    rx: 5.7,
    ry: 0.77,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 334.96,
    cy: 208.2,
    rx: 5.7,
    ry: 0.77,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("rect", {
    x: 306.22,
    y: 215.43,
    width: 6.8,
    height: 2.72,
    rx: 0.73,
    ry: 0.73,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 306.22,
    y: 215.43,
    width: 6.8,
    height: 2.72,
    rx: 0.73,
    ry: 0.73,
    fill: "#f5f5f5",
    opacity: 0.2
  })), React.createElement("g", {
    opacity: 0.3
  }, React.createElement("path", {
    d: "M412.55 397.18a53.39 53.39 0 0 0-7.63.47 1.83 1.83 0 1 0-3.66 0 53.39 53.39 0 0 0-7.63-.47c-5.65 0-10.23.63-10.23 1.41S388 400 393.62 400a53.39 53.39 0 0 0 7.63-.47 1.92 1.92 0 0 0 .12.66 1.26 1.26 0 0 0-.12 2 3.42 3.42 0 0 0-2 1.9 3.08 3.08 0 0 0-1.76-.66l-19-.88a7.37 7.37 0 0 0-6-3.07h-12a7.37 7.37 0 0 0-6 3.11l-18.07.83a3.07 3.07 0 0 0-1.64.57 3.43 3.43 0 0 0-1.76-1.74 1.26 1.26 0 0 0 .55-1.05 1.25 1.25 0 0 0-.84-1.19 1.93 1.93 0 0 0 .08-.54 53.39 53.39 0 0 0 7.63.47c5.65 0 10.23-.63 10.23-1.41s-4.58-1.41-10.23-1.41a53.39 53.39 0 0 0-7.63.47 1.86 1.86 0 0 0-1.83-1.88 1.86 1.86 0 0 0-1.83 1.88 53.39 53.39 0 0 0-7.63-.47c-5.65 0-10.23.63-10.23 1.41s4.61 1.47 10.26 1.47a53.39 53.39 0 0 0 7.63-.47 1.92 1.92 0 0 0 .12.66 1.27 1.27 0 0 0-.07 2.07 3.47 3.47 0 0 0-2.18 3.24v2.32a3.42 3.42 0 0 0 3.38 3.47h1.34a3.34 3.34 0 0 0 2.71-1.4 3.09 3.09 0 0 0 2 .86l17.72.51a7.59 7.59 0 0 0 2.2 2.3c-1.7 1.77-8.31 9.63-7.25 23.47 0 0 1.07 2 3.82 0 0 0-1.76-15.42 8.08-21.78a2.45 2.45 0 0 0 2.31 1.69h1.26a6.75 6.75 0 0 0-4.16 6.28 6.57 6.57 0 1 0 13.13 0 6.75 6.75 0 0 0-4.16-6.28h1.26a2.45 2.45 0 0 0 2.31-1.69c9.84 6.35 8.08 21.78 8.08 21.78 2.75 2 3.82 0 3.82 0 1.22-15.85-7.63-23.86-7.63-23.86h-.16a7.62 7.62 0 0 0 1.66-1.89l18.65-.54a3.09 3.09 0 0 0 2.14-.95 3.34 3.34 0 0 0 2.77 1.49h1.34a3.42 3.42 0 0 0 3.38-3.47v-2.32a3.47 3.47 0 0 0-2-3.17 1.26 1.26 0 0 0-.22-2.28 1.93 1.93 0 0 0 .08-.54 53.39 53.39 0 0 0 7.63.47c5.65 0 10.23-.63 10.23-1.41s-4.57-1.38-10.22-1.38z",
    transform: "translate(-88.62 -69.46)",
    fill: "url(#prefix__f)"
  }), React.createElement("circle", {
    cx: 277.92,
    cy: 353.42,
    r: 6.37,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 277.92,
    cy: 353.42,
    r: 4.29,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 277.92,
    cy: 353.42,
    r: 4.29,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("circle", {
    cx: 277.92,
    cy: 353.42,
    r: 2.81,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 277.92,
    cy: 353.42,
    r: 2.81,
    opacity: 0.25
  }), React.createElement("path", {
    d: "M267.99 343.94s-8.59 7.55-7.4 22.5c0 0 1 1.92 3.7 0 0 0-2.22-18.95 12.58-22.5zM287.83 343.94s8.59 7.55 7.4 22.5c0 0-1 1.92-3.7 0 0 0 2.22-18.95-12.58-22.5z",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 264.37,
    y: 331.07,
    width: 26.05,
    height: 14.43,
    rx: 6.07,
    ry: 6.07,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M268.64 342.22l-20.33-.57a3 3 0 0 1-3-3v-.78a3 3 0 0 1 2.91-3l20.33-.91a3 3 0 0 1 3.19 3v2.26a3 3 0 0 1-3.1 3zM287.04 342.22l20.33-.57a3 3 0 0 0 3-3v-.78a3 3 0 0 0-2.91-3l-20.33-.91a3 3 0 0 0-3.19 3v2.26a3 3 0 0 0 3.1 3z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M268.64 342.22l-20.33-.57a3 3 0 0 1-3-3v-.78a3 3 0 0 1 2.91-3l20.33-.91a3 3 0 0 1 3.19 3v2.26a3 3 0 0 1-3.1 3zM287.04 342.22l20.33-.57a3 3 0 0 0 3-3v-.78a3 3 0 0 0-2.91-3l-20.33-.91a3 3 0 0 0-3.19 3v2.26a3 3 0 0 0 3.1 3z",
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("rect", {
    x: 239.13,
    y: 333.43,
    width: 7.85,
    height: 8.73,
    rx: 3.3,
    ry: 3.3,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 308.86,
    y: 333.43,
    width: 7.85,
    height: 8.73,
    rx: 3.3,
    ry: 3.3,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 240.76,
    y: 331.51,
    width: 4.74,
    height: 2.37,
    rx: 1,
    ry: 1,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 241.2,
    y: 327.51,
    width: 3.55,
    height: 5.33,
    rx: 1.5,
    ry: 1.5,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 233.8,
    cy: 330.18,
    rx: 9.92,
    ry: 1.33,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 252.16,
    cy: 330.18,
    rx: 9.92,
    ry: 1.33,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 310.63,
    y: 331.51,
    width: 4.74,
    height: 2.37,
    rx: 1,
    ry: 1,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 311.08,
    y: 327.51,
    width: 3.55,
    height: 5.33,
    rx: 1.5,
    ry: 1.5,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 303.67,
    cy: 330.18,
    rx: 9.92,
    ry: 1.33,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 322.03,
    cy: 330.18,
    rx: 9.92,
    ry: 1.33,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 233.8,
    cy: 330.18,
    rx: 9.92,
    ry: 1.33,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 252.16,
    cy: 330.18,
    rx: 9.92,
    ry: 1.33,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 303.67,
    cy: 330.18,
    rx: 9.92,
    ry: 1.33,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 322.03,
    cy: 330.18,
    rx: 9.92,
    ry: 1.33,
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("rect", {
    x: 271.99,
    y: 342.76,
    width: 11.84,
    height: 4.74,
    rx: 1.99,
    ry: 1.99,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 271.99,
    y: 342.76,
    width: 11.84,
    height: 4.74,
    rx: 1.99,
    ry: 1.99,
    fill: "#f5f5f5",
    opacity: 0.2
  })), React.createElement("ellipse", {
    cx: 538.74,
    cy: 535.43,
    rx: 82.71,
    ry: 12.46,
    opacity: 0.03
  }), React.createElement("ellipse", {
    cx: 767.74,
    cy: 724.43,
    rx: 243.26,
    ry: 36.66,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 443.95,
    cy: 302.29,
    rx: 23.11,
    ry: 3.48,
    opacity: 0.03
  }), React.createElement("ellipse", {
    cx: 319.73,
    cy: 524.32,
    rx: 59.63,
    ry: 8.99,
    opacity: 0.03
  }), React.createElement("ellipse", {
    cx: 283.58,
    cy: 391.28,
    rx: 34.35,
    ry: 5.18,
    opacity: 0.03
  }), React.createElement("ellipse", {
    cx: 310.12,
    cy: 247.13,
    rx: 19.73,
    ry: 2.97,
    opacity: 0.03
  }), React.createElement("path", {
    d: "M73.7 509.36s27.21 53.4 5 82.63 2 108.82 2 108.82",
    fill: "none",
    stroke: "#fc6681",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M81.77 492.73c0 10.3-7.56 18.64-7.56 18.64s-7.56-8.35-7.56-18.64 7.56-18.64 7.56-18.64 7.56 8.34 7.56 18.64z",
    fill: "#fc6681"
  }), React.createElement("path", {
    d: "M87.81 509.36s-27.21 53.4-5 82.63-2 108.82-2 108.82",
    fill: "none",
    stroke: "#ffd037",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M79.75 492.73c0 10.3 7.56 18.64 7.56 18.64s7.56-8.35 7.56-18.64-7.56-18.64-7.56-18.64-7.56 8.34-7.56 18.64z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M98.9 509.36s27.21 53.4 5 82.63 2 108.82 2 108.82",
    fill: "none",
    stroke: "#fc6681",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M106.96 492.73c0 10.3-7.56 18.64-7.56 18.64s-7.56-8.35-7.56-18.64 7.54-18.64 7.54-18.64 7.58 8.34 7.58 18.64zM102.72 535.54c-7.14 7.42-18.37 8.19-18.37 8.19s.34-11.25 7.48-18.67 18.37-8.19 18.37-8.19-.34 11.23-7.48 18.67zM103.38 572.36c-7.14 7.42-18.37 8.19-18.37 8.19s.34-11.25 7.48-18.67 18.37-8.19 18.37-8.19-.29 11.25-7.48 18.67zM64.72 592.63c6.75 7.77 6.51 19 6.51 19s-11.18-1.35-17.93-9.12-6.51-19-6.51-19 11.18 1.35 17.93 9.12zM70.98 514.06c8.58 5.69 11.36 16.6 11.36 16.6s-11.13 1.69-19.71-4-11.36-16.6-11.36-16.6 11.11-1.69 19.71 4z",
    fill: "#fc6681"
  }), React.createElement("path", {
    d: "M113 509.36s-27.21 53.4-5 82.63-2 108.82-2 108.82",
    fill: "none",
    stroke: "#ffd037",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M104.94 492.73c0 10.3 7.56 18.64 7.56 18.64s7.56-8.35 7.56-18.64-7.56-18.64-7.56-18.64-7.56 8.34-7.56 18.64zM107.12 536.31c-7.23 7.33-7.7 18.58-7.7 18.58s11.24-.64 18.47-8 7.7-18.58 7.7-18.58-11.21.67-18.47 8zM121.29 587.32c-7.23 7.33-7.7 18.58-7.7 18.58s11.24-.64 18.47-8 7.7-18.58 7.7-18.58-11.25.67-18.47 8z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M100.44 576.11s16.38-25.81 39.36-26.37",
    fill: "none",
    stroke: "#ffd037",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M87.69 560.54s-16.38-25.81-39.36-26.37",
    fill: "none",
    stroke: "#fc6681",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M85.56 597.37s16.38-25.81 39.36-26.37",
    fill: "none",
    stroke: "#ffd037",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("circle", {
    cx: 139.05,
    cy: 549.55,
    r: 4.25,
    fill: "#ffd037"
  }), React.createElement("circle", {
    cx: 48.72,
    cy: 534.31,
    r: 4.25,
    fill: "#fc6681"
  }), React.createElement("path", {
    d: "M97.6 605.87s-16.37-25.82-39.36-26.33",
    fill: "none",
    stroke: "#fc6681",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("circle", {
    cx: 58.64,
    cy: 579.66,
    r: 4.25,
    fill: "#fc6681"
  }), React.createElement("circle", {
    cx: 125.24,
    cy: 571.16,
    r: 4.25,
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M188.13 669.8s-39.47-7.89-50-18.42-57.88-28.94-63.14-15.79-71 57.88-26.31 65.78 105.24 10.52 118.4 5.26 21.05-36.83 21.05-36.83z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M48.68 696.48c44.73 7.89 105.24 10.52 118.4 5.26 10-4 17-23.26 19.73-32.22l1.32.27s-7.89 31.57-21 36.83-73.67 2.63-118.4-5.26c-12.91-2.28-16.6-7.63-15.21-14.4 1.06 4.43 5.55 7.83 15.16 9.52z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M920.68 544.13s10.42 13.63-4.81 34.2-27.79 37.94-22.71 50.77c0 0 23-38.21 41.68-38.75s6.42-23.24-14.16-46.22z",
    fill: "#fc6681"
  }), React.createElement("path", {
    d: "M920.68 544.13a16.88 16.88 0 0 1 2.13 4.27c18.25 21.44 28 41.45 10.43 42-16.34.47-35.94 29.69-40.64 37.07a15.84 15.84 0 0 0 .56 1.68s23-38.21 41.68-38.75 6.42-23.29-14.16-46.27z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M940.05 561.54c0 4.8-.54 8.68-1.2 8.68s-1.2-3.89-1.2-8.68.67-2.54 1.34-2.54 1.06-2.3 1.06 2.54z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M946.7 567.22c-4.21 2.3-7.88 3.68-8.2 3.1s2.84-2.92 7-5.21 2.55-.62 2.87 0 2.54-.18-1.67 2.11z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M865.64 544.13s-10.42 13.63 4.81 34.2 27.79 37.94 22.71 50.77c0 0-23-38.21-41.68-38.75s-6.42-23.24 14.16-46.22z",
    fill: "#fc6681"
  }), React.createElement("path", {
    d: "M865.64 544.13a16.88 16.88 0 0 0-2.13 4.27c-18.25 21.44-28 41.45-10.43 42 16.34.47 35.94 29.69 40.64 37.07a15.84 15.84 0 0 1-.56 1.68s-23-38.21-41.68-38.75-6.42-23.29 14.16-46.27z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M846.26 561.54c0 4.8.54 8.68 1.2 8.68s1.2-3.89 1.2-8.68-.67-2.54-1.34-2.54-1.06-2.3-1.06 2.54z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M839.62 567.22c4.21 2.3 7.88 3.68 8.2 3.1s-2.84-2.92-7-5.21-2.55-.62-2.87 0-2.57-.18 1.67 2.11z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M849.58 627.32s29.14-.9 37.92-7.15 44.82-13.72 47-3.69 43.79 49.87 10.89 50.14-76.43-5.12-85.2-10.46-10.61-28.84-10.61-28.84z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M945.98 663.12c-32.89.27-76.43-5.12-85.2-10.46-6.67-4.07-9.33-18.65-10.22-25.38h-1s1.85 23.5 10.61 28.84 52.3 10.73 85.2 10.46c9.5-.08 12.78-3.45 12.6-8.46-1.31 3.06-4.93 4.95-11.99 5z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M500.22 165.18c-2.83-4.62-7.06-8.85-6.4-14.09 7.76.89 15.12-1 22.23-4.28s13.71-7.57 20.36-11.76c2.62-1.65 5.23-3.27 7.83-4.77 4.12-2.37 8.21-5 12.4-7.31 6-3.3 12.13-6 18.86-6.52 1.21-.09 2.44-.11 3.67-.09 8.3.17 16.9 2.39 24.2-1.33l.45-.24c4.13-2.27 7.15-6.14 10.7-9.26a47.71 47.71 0 0 1 8.29-5.76c5.38-3 11.22-5.4 16.74-8.23a26.31 26.31 0 0 0 4-2.57l.94-.75.21-.18.68-.58.43-.38.44-.4.34-.32.55-.52.06-.06.88-.87.35-.35.61-.62.36-.37 1.84-1.89c.72-.73 1.46-1.45 2.22-2.15l.72-.64.21-.18.58-.49.28-.23.57-.44.28-.22.86-.62a6.06 6.06 0 0 1 .84-.48l-1.8-4.56 5.38-2.22 74.19 180.05-5.38 2.22-42.45-103-.3.3a85.29 85.29 0 0 1-35.09 20.88h-.08c-7.39 2.23-15.66 3.81-21.88 8a21 21 0 0 0-5.65 5.41c-1.46 2.08-2.48 4.45-4.05 6.45-.29.37-.61.73-.93 1.07a34.73 34.73 0 0 1-6 4.75l-1 .65a194.5 194.5 0 0 1-20.1 12.4 79.13 79.13 0 0 1-12.49 5.2c-3.13 1-6.36 1.73-9.49 2.72a36.87 36.87 0 0 0-6.12 2.46c-5.3 2.77-9.37 7.11-13.22 11.74-3.37 4.06-6.57 8.35-10.27 12.05-2.31 2.31-5.84 4.48-8.65 3.13a4.82 4.82 0 0 1-.56-.33c.08-.15.16-.3.23-.46 2.21-4.63-.51-10.35-4.17-14.07-.38-.38-.77-.76-1.17-1.13s-1.11-1-1.69-1.5c-3.13-2.69-6.46-5.19-8.63-8.66a28.41 28.41 0 0 1-3.32-9.41c-1-4.71-1.66-9.56-4.22-13.57-1.69-2.65-4.18-4.91-6-7.45a11.26 11.26 0 0 1-2.2-5.13c-.41-3.26 1.1-6.44 1.67-9.68a12 12 0 0 0 .2-2.68 14.15 14.15 0 0 0-2.34-6.68z",
    transform: "translate(-88.62 -69.46)",
    fill: "url(#prefix__g)"
  }), React.createElement("path", {
    fill: "#d6d8e1",
    d: "M644.927 178.619l-5.298 2.183L566.666 3.78l5.297-2.183z"
  }), React.createElement("path", {
    d: "M422.07 126.73c2.52 3.94 3.18 8.71 4.15 13.34a27.93 27.93 0 0 0 3.27 9.25c2.14 3.41 5.41 5.88 8.48 8.52.56.48 1.12 1 1.66 1.47s.78.73 1.15 1.11c3.6 3.65 6.27 9.27 4.1 13.83-.07.15-.14.3-.23.45a4.74 4.74 0 0 0 .55.32c2.76 1.33 6.23-.81 8.5-3.08 3.64-3.64 6.79-7.86 10.1-11.85 3.78-4.56 7.79-8.82 13-11.55a36.25 36.25 0 0 1 6-2.42c3.07-1 6.25-1.71 9.33-2.68a77.8 77.8 0 0 0 12.29-5.11 191.24 191.24 0 0 0 19.76-12.19l.94-.64a34.15 34.15 0 0 0 5.9-4.67c.32-.34.63-.69.91-1.05 1.54-2 2.55-4.3 4-6.34a20.67 20.67 0 0 1 5.56-5.32c6.12-4.07 14.24-5.63 21.51-7.82h.08a83.86 83.86 0 0 0 34.5-20.53 5.57 5.57 0 0 0 1.73-2.54c.31-1.41-.45-2.8-1.18-4q-1.28-2.18-2.49-4.4a196.66 196.66 0 0 1-9.87-20.74 189 189 0 0 1-1.83-4.68q-2.27-6-4.14-12.17c-.41-1.37-.81-2.73-1.19-4.11-.07-.26-.14-.54-.22-.84-1.66-6.75-3.88-22.32-10.71-17.65a38.7 38.7 0 0 0-5.65 4.9c-1.33 1.35-2.63 2.74-4 4.08a39.53 39.53 0 0 1-3.53 3.09 25.88 25.88 0 0 1-4 2.52c-5.42 2.78-11.17 5.11-16.46 8.09a46.92 46.92 0 0 0-8.15 5.66c-3.49 3.08-6.46 6.88-10.52 9.11l-.45.23c-7.18 3.66-15.63 1.47-23.79 1.3-1.21 0-2.42 0-3.61.09-6.62.51-12.68 3.17-18.54 6.41-4.12 2.28-8.14 4.86-12.19 7.19-2.56 1.47-5.12 3.06-7.7 4.69-6.55 4.12-13.17 8.45-20 11.56s-14.23 5.09-21.86 4.21c-.65 5.15 3.51 9.31 6.29 13.86a13.91 13.91 0 0 1 2.35 6.56 11.74 11.74 0 0 1-.2 2.63c-.56 3.19-2 6.31-1.64 9.52a11.07 11.07 0 0 0 2.16 5c1.77 2.56 4.19 4.79 5.88 7.39z",
    fill: "#e6e8ed"
  }), React.createElement("path", {
    d: "M554.48 20.72l5.58 13.25 18.32-7.72c-1.65-6.71-3.87-22.28-10.7-17.61-4.95 3.38-8.3 8.32-13.2 12.08zM515.38 46.1l2.38 5.66 21.14-8.9-4.86-11.54a46.92 46.92 0 0 0-8.15 5.66c-3.51 3.09-6.44 6.89-10.51 9.12zM469 54.14l6.49 15.4 21.14-8.9-5.48-13c-1.21 0-2.42 0-3.61.09-6.62.5-12.68 3.16-18.54 6.41zM429.08 77.54l4.12 9.78 21.14-8.9-5.24-12.44c-6.54 4.16-13.17 8.48-20.02 11.56z",
    fill: "#5a5773"
  }), React.createElement("path", {
    fill: "#5a5773",
    d: "M568.946 55.064l-21.144 8.897-8.897-21.145 21.144-8.897zM526.662 72.855l-21.144 8.897-8.897-21.144 21.144-8.897zM484.383 90.656l-21.145 8.897-8.897-21.144 21.145-8.897zM415.67 104.84l5.29 12.56 21.14-8.9-8.9-21.14-19.68 8.28a13.91 13.91 0 0 1 2.35 6.56 11.74 11.74 0 0 1-.2 2.64zM568.96 55.11l8.9 21.14 17.78-7.48a196.66 196.66 0 0 1-9.87-20.74zM556.706 85.104l-21.144 8.897-8.897-21.144 21.144-8.897z"
  }), React.createElement("path", {
    fill: "#5a5773",
    d: "M514.414 102.9l-21.145 8.897-8.897-21.145 21.145-8.897zM472.134 120.71l-21.145 8.897-8.897-21.144 21.145-8.897zM556.71 85.15l6.37 15.13a83.86 83.86 0 0 0 20.84-9.62l-6.07-14.42zM514.38 102.95l8.9 21.14 7.71-3.25c.32-.34.63-.69.91-1.05 1.54-2 2.55-4.3 4-6.34a20.67 20.67 0 0 1 5.56-5.32l-5.92-14.08zM502.184 132.94l-21.144 8.897-8.897-21.145 21.144-8.897zM429.85 138.54l8.12 19.3c.56.48 1.12 1 1.66 1.47l20.26-8.53-8.9-21.14zM426.22 140.07l3.63-1.53-8.9-21.14-4.77 2c1.77 2.5 4.22 4.72 5.88 7.32 2.53 3.95 3.19 8.72 4.16 13.35zM502.18 132.99l2.25 5.36a191.24 191.24 0 0 0 19.76-12.19l-.87-2.07zM459.9 150.79l3.92 9.31c3.78-4.56 7.79-8.82 13-11.55a36.25 36.25 0 0 1 6-2.42l-1.79-4.24z"
  }), React.createElement("path", {
    d: "M720.51 252.37l5.43 58.11s6.41 12.11 13.81 16c5.07 2.65 15 11 20.73 16l1.26 1.1c-.51 1.43-.78 2.31-.78 2.31s19.73 38.74 32.06 44.55 3.95 54.72 4.44 77.48c.34 15.9 5.74 24.7 11.66 29.06-.21.32-.42.65-.62 1-8.76 14.57-12.29 46.41-8.57 61a9 9 0 0 0 .76 2c-2.19 12-4.37 31.45 2.2 40.16 9.87 13.07 21.21 66.34 21.21 66.34s7.4 37.29 12.82 43.58c3.94 4.57 3.72 44.81 3.3 66.56a78.1 78.1 0 0 1-8.73-.7c-23.49-3.13-2.64 11.09 6.28 16.7-4 2.56-11.31 4.5-25 2.67-18.79-2.5-9.2 6.1 0 12.51a36.6 36.6 0 0 0 20.23 6.45l68 1.26a106 106 0 0 0 .69-19.7l18 .33s2.15-15.61-.16-25.49l1.15-.18-8.88-69.25s-.49-63.92 1-67.79c4.47-11.7 2-30.28-1-44.23a91.39 91.39 0 0 1-.73-35.21c5.17-29-2.37-51.5-7.5-62.58-.24-.52-.47-1-.7-1.47 3.08.06 5 .16 5 .16-9.37-6.78 1-69.25 10.36-82.32s30.66-5.78 30.66-5.78a38.43 38.43 0 0 0 5.34-5.33h1.05c7.68.21 18.44.25 29.61-.51 21.21-1.45 16.28-16 16.28-16L992.79 324s-21.21-47.94-27.13-33.9 10.85 36.32 10.85 36.32 7.4 37.77 0 43.1c-4.68 3.37-12.43 1.24-17.5-.77-1.59-.63-2.92-1.25-3.8-1.69l-1.16-.6c-8-4-28.48-11.55-37.21-11.94-10.85-.48-31.57-7.26-31.57-7.26-1.67-5.75-6.45-9.23-11.39-11.34a106 106 0 0 1-.8-15.36 7.83 7.83 0 0 0 1.79-1.41 5.32 5.32 0 0 0 .94-1c1.51-2.24.77-5.35 2.05-7.72.23-.42-3.05-3.17-2.73-3.52 2-1.76 4.9-2.72 6.62-4.59a5.47 5.47 0 0 0 1.56-2.17c1.35-3.6 1.42-4.8 1-8.61-.33-3.36.69-6 .18-8.84 1.88-1.7 2.77-3.73.74-5.75-3.73-3.72-14-4.6-19-4.87-3.92-.22-7.93 0-11.67-1.15-4.36-1.36-7.9-4.47-11.86-6.72s-9.1-3.6-13-1.27c-3 1.79-5 5.56-8.51 5.79-2.9.19-5.76-2.27-8.48-1.27l.14.32a3.82 3.82 0 0 0-.63.17 37.1 37.1 0 0 0 16 18 24.74 24.74 0 0 0-4.41 14.12 25.06 25.06 0 0 0 12 21.33.21.21 0 0 0 0 .06l.15 1.56a57.41 57.41 0 0 1-.46 12.72l-.93 1.27c-2.28 1.12-3.65 2-3.65 2a100.05 100.05 0 0 0-19.73-4.36c-9.87-1-33-15-33-15a5.94 5.94 0 0 0-1.24.27l-.7-.69a38 38 0 0 0-18.78-9.75s-1.23-3.63-3.95-10.17c-1.9-4.57-13.81-30-13.81-30s-4.93-20.34-3.95-30.51-15.25-29.53-17.76-27.11-4.4 31 2.51 40.68zm142.27 321.88l.28.13c.69.4 1.33 2.58 1.94 6 2.12 12.1 3.73 39.81 4.75 61.72.19 4.16.36 8.11.51 11.7-2.44-11.21-5-23.49-5.22-27.18-.33-4.68-1.49-33.17-2.26-52.37z",
    transform: "translate(-88.62 -69.46)",
    fill: "url(#prefix__h)"
  }), React.createElement("path", {
    d: "M772.38 695.67s-.48 12.9-28.67 9.08 9.56 18.64 9.56 18.64l76 1.43s4.47-33-6.69-33c-.49.03-50.2 3.85-50.2 3.85z",
    fill: "#4a4347"
  }), React.createElement("path", {
    d: "M772.38 695.67s-.48 12.9-28.67 9.08 9.56 18.64 9.56 18.64l76 1.43s4.47-33-6.69-33c-.49.03-50.2 3.85-50.2 3.85z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M713.13 489.7a9.58 9.58 0 0 0 2.27 4.15c11.07 12.25 54.55 8.54 58.9 11.14.66.4 1.29 2.55 1.88 6 2.05 11.94 3.62 39.29 4.6 60.91.76 16.79 1.17 30.13 1.17 30.13l2.43 104.64 28.14-4.4 17.7-2.73-8.6-68.34s-.48-63.08 1-66.91c4.34-11.57 1.92-30-1-43.73a91.13 91.13 0 0 1-.71-34.59c5-28.69-2.28-50.89-7.25-61.84a59.79 59.79 0 0 0-4-7.5s-70.25-1-82.68 6.69a17.73 17.73 0 0 0-5.55 6.24c-8.47 14.33-11.9 45.75-8.3 60.14z",
    fill: "#5a5773"
  }), React.createElement("path", {
    d: "M754.23 714.79s-.48 12.9-28.67 9.08c-18.21-2.47-8.91 6 0 12.35a35 35 0 0 0 19.68 6.48l65.9 1.24s4.47-33-6.69-33c-.52.03-50.22 3.85-50.22 3.85z",
    fill: "#4a4347"
  }), React.createElement("path", {
    d: "M852.68 330.08s4.29.32 11 .51c7.44.21 17.87.25 28.69-.51 20.55-1.43 15.77-15.77 15.77-15.77l-8.12-56.39s-20.55-47.31-26.28-33.45 10.51 35.84 10.51 35.84 7.17 37.28 0 42.53c-4.54 3.33-12 1.23-17-.76a44.51 44.51 0 0 1-4.82-2.27zM636.19 187.19l5.26 57.35s6.21 11.95 13.38 15.77c4.91 2.62 14.51 10.83 20.09 15.75 2.57 2.27 4.29 3.84 4.29 3.84l14.34-22.94a27.67 27.67 0 0 0-3.31-3.76 36.56 36.56 0 0 0-18.2-9.62s-1.19-3.58-3.82-10c-1.84-4.51-13.38-29.63-13.38-29.63s-4.78-20.07-3.82-30.11-14.81-29.15-17.2-26.76-4.32 30.55 2.37 40.11zM743.24 285.64s51.61 7.17 44.92-4.3c-1.84-3.15-2.92-7.72-3.52-12.68-1.58-13.08.18-28.9.18-28.9l-38.71 6.69a52.24 52.24 0 0 1 1.59 22.92 63.37 63.37 0 0 1-4.46 16.27z",
    fill: "#a1616a"
  }), React.createElement("circle", {
    cx: 761.16,
    cy: 234.27,
    r: 24.85,
    fill: "#a1616a"
  }), React.createElement("path", {
    d: "M721.44 429.54a18 18 0 0 0 7.94 3.8c7.65 1.43 32.5 4.3 42.06-3.35 7.58-6.06 32.29-6.12 42.19-5.88a59.79 59.79 0 0 0-4-7.5s-70.25-1-82.68 6.69a17.73 17.73 0 0 0-5.51 6.24zM674.92 276.06c2.57 2.27 4.29 3.84 4.29 3.84l14.34-22.94a27.67 27.67 0 0 0-3.31-3.76c-6.98 1.34-13.04 16.42-15.32 22.86zM852.68 330.08s4.29.32 11 .51c10.56-12.67 4.95-25.19 3.61-28.51a44.51 44.51 0 0 1-4.82-2.27zM743.24 285.64s51.61 7.17 44.92-4.3c-1.84-3.15-2.92-7.72-3.52-12.68a42.89 42.89 0 0 0-13.2-3.09c-8.86-2.21-18.34 1.22-23.74 3.8a63.37 63.37 0 0 1-4.46 16.27z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M771.44 266.54s20.55 1 24.37 14.34c0 0 20.07 6.69 30.59 7.17s38.71 11.95 39.19 13.86 10 18.64-8.12 33.93c0 0-20.55-7.17-29.63 5.73s-19.12 74.55-10 81.24c0 0-36.8-1.91-46.36 5.73s-34.41 4.78-42.06 3.35-18.16-9.56-18.64-32 7.65-70.73-4.3-76.46-31.06-44-31.06-44 7.65-24.85 16.73-25.81c0 0 22.46 13.86 32 14.81a95.45 95.45 0 0 1 19.12 4.3s14.79-9.56 28.17-6.19z",
    fill: "#605d82"
  }), React.createElement("path", {
    d: "M787.69 603.92s-4.07-18-6.91-32c.76 16.79 1.17 30.13 1.17 30.13l2.43 104.62 28.14-4.4z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M716 481.54s-9.56 36.8 0 49.7 20.55 65.47 20.55 65.47 7.17 36.8 12.43 43 2.87 79.33 2.87 79.33l62.13-3.35-28.2-111.83s-9.08-40.14-9.56-47.31-2.87-69.3-2.87-69.3z",
    fill: "#5a5773"
  }), React.createElement("path", {
    d: "M746.11 222.94a36.42 36.42 0 0 1-21-20.4c2.64-1 5.41 1.44 8.22 1.25 3.4-.23 5.33-4 8.24-5.72 3.79-2.3 8.77-1 12.6 1.26s7.26 5.29 11.49 6.63c3.62 1.15 7.51.92 11.31 1.14 4.82.27 14.76 1.13 18.37 4.81 2 2 1.1 4-.72 5.68.49 2.81-.5 5.4-.18 8.72a14.77 14.77 0 0 1-1.12 8.47c-1.37 3.73-3.3 6.66-5.17 10.17-1.24 2.34-.53 5.41-2 7.62a7.86 7.86 0 0 1-3 2.39 31.94 31.94 0 0 1-23 2.77c-2.6-.68-5.28-1.84-6.67-4.14-2.31-3.83 0-8.71-.24-13.18-.27-6.32-5.6-11.49-7.13-17.47z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M746.58 222.46a36.42 36.42 0 0 1-21-20.4c2.64-1 5.41 1.44 8.22 1.25 3.4-.23 5.33-4 8.24-5.72 3.79-2.3 8.77-1 12.6 1.26s7.26 5.29 11.49 6.63c3.62 1.15 7.51.92 11.31 1.14 4.82.27 14.76 1.13 18.37 4.81 2 2 1.1 4-.72 5.68.49 2.81-.5 5.4-.18 8.72a14.77 14.77 0 0 1-1.12 8.47c-1.37 3.73-3.3 6.66-5.17 10.17-1.24 2.34-.53 5.41-2 7.62a7.86 7.86 0 0 1-3 2.39 31.94 31.94 0 0 1-23 2.77c-2.6-.68-5.28-1.84-6.67-4.14-2.31-3.83 0-8.71-.24-13.18-.26-6.31-5.59-11.49-7.13-17.47z",
    fill: "#4a4347"
  }), React.createElement("path", {
    d: "M751.6 255.77l-3.48 1.23-.16-1.67s-.18.92 3.64.44z",
    opacity: 0.1
  }));
};

UndrawDroneRace.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawDroneRace;