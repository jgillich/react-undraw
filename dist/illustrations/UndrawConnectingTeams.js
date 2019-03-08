function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawConnectingTeams = function UndrawConnectingTeams(_props) {
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
    viewBox: "0 0 818.94 750",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 391.06,
    y1: 181.72,
    x2: 391.06,
    y2: 30.67,
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
    x1: 710.91,
    y1: 187.1,
    x2: 710.91,
    y2: 36.05,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 551,
    y1: 311.01,
    x2: 551,
    y2: 159.96,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 66.72,
    y1: 439.07,
    x2: 66.72,
    y2: 305.63,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 77.31,
    y1: 432.72,
    x2: 77.31,
    y2: 299.28,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 509.01,
    y1: 292.43,
    x2: 509.01,
    y2: 202.06,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 371.86,
    y1: 825,
    x2: 371.86,
    y2: 147.87,
    xlinkHref: "#prefix__a"
  })), React.createElement("circle", {
    cx: 391.06,
    cy: 106.19,
    r: 75.53,
    fill: "url(#prefix__a)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 391.21,
    cy: 105.71,
    r: 73.93,
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M431.88 113c0 24.59-17.67 36.7-40.61 36.7S348.8 137.6 348.8 113s18.6-44.53 41.54-44.53S431.88 88.4 431.88 113z",
    fill: "#333"
  }), React.createElement("path", {
    d: "M391.27 179.93a73.59 73.59 0 0 0 40.64-12.16c-2.73-14.89-13.09-15.77-13.09-15.77h-57.17s-9.78.8-12.84 14.5a73.59 73.59 0 0 0 42.46 13.43z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M379 133.87h22.87v18.93A10.8 10.8 0 0 1 391 163.6h-1.28A10.8 10.8 0 0 1 379 152.8v-18.93z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M381 133h18.75a2.06 2.06 0 0 1 2.06 2.06V152a10.8 10.8 0 0 1-10.8 10.8h-1.28A10.8 10.8 0 0 1 379 152v-16.91a2.06 2.06 0 0 1 2-2.09z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M379.02 142.51a32.91 32.91 0 0 0 22.87.06v-2.81h-22.87z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 390.49,
    cy: 111.26,
    r: 32.77,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M352.72 113.41s20.41-2.47 35.87-22.27c0 0 20.41 22.47 34.63 20 0 0 8.25-8.66 0-17.32s-14.64-19.58-25.56-18.14-24.33 2.06-30.1 7.22-14.84 30.51-14.84 30.51z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M352.72 113s20.41-2.47 35.87-22.27c0 0 20.41 22.47 34.63 20 0 0 8.25-8.66 0-17.32s-14.64-19.58-25.56-18.14-24.33 2.06-30.1 7.22S352.72 113 352.72 113z",
    fill: "#333"
  }), React.createElement("ellipse", {
    cx: 357.7,
    cy: 111.23,
    rx: 3.05,
    ry: 5.72,
    fill: "#fda57d"
  }), React.createElement("ellipse", {
    cx: 423.26,
    cy: 111.23,
    rx: 3.05,
    ry: 5.72,
    fill: "#fda57d"
  }), React.createElement("circle", {
    cx: 710.91,
    cy: 111.58,
    r: 75.53,
    fill: "url(#prefix__b)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 711.06,
    cy: 111.1,
    r: 73.93,
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M711.12 185.32a73.59 73.59 0 0 0 40.64-12.16c-2.72-14.89-13.09-15.74-13.09-15.74h-57.2s-9.78.8-12.84 14.5a73.59 73.59 0 0 0 42.49 13.4z",
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 710.34,
    cy: 109.54,
    r: 35.69,
    fill: "#72351c"
  }), React.createElement("path", {
    d: "M698.83 139.26h22.87v18.93A10.8 10.8 0 0 1 710.9 169h-1.28a10.8 10.8 0 0 1-10.8-10.8v-18.94h.01z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M700.89 138.41h18.75a2.06 2.06 0 0 1 2.06 2.06v16.87a10.8 10.8 0 0 1-10.8 10.8h-1.28a10.8 10.8 0 0 1-10.8-10.8v-16.87a2.06 2.06 0 0 1 2.06-2.06z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M698.87 147.9a32.91 32.91 0 0 0 22.87.06v-2.81h-22.87z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 710.34,
    cy: 116.65,
    r: 32.77,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M687 86.84s13.81 28 52.78 11.75l-9.07-14.22-16.08-5.77z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M687 86.43s13.81 28 52.78 11.75L730.71 84l-16.08-5.77z",
    fill: "#72351c"
  }), React.createElement("path", {
    d: "M686.88 84.53a18.93 18.93 0 0 1 4.69-7.63c6.45-6.37 17-7.72 22.44-15a4.24 4.24 0 0 1-1.94 6c5.19 0 11.21-.49 14.15-4.76a9.71 9.71 0 0 1-1.64 10.26c4.6.21 9.52 3.33 9.81 7.93.2 3.06-1.72 6-4.24 7.72a23.57 23.57 0 0 1-8.56 3.22c-8.76 1.93-40.42 10.02-34.71-7.74zM743.12 116.94h-.87l-16.9 15c-16.29-7.63-28.24 0-28.24 0l-17.74-14.38-1.79.22a32.77 32.77 0 0 0 65.53-.84zm-32.82 20.82c-6.38 0-11.54-1.29-11.54-2.89s5.17-2.89 11.54-2.89 11.54 1.29 11.54 2.89-5.17 2.89-11.54 2.89z",
    fill: "#72351c"
  }), React.createElement("ellipse", {
    cx: 677.56,
    cy: 116.62,
    rx: 3.05,
    ry: 5.72,
    fill: "#fda57d"
  }), React.createElement("ellipse", {
    cx: 743.11,
    cy: 116.62,
    rx: 3.05,
    ry: 5.72,
    fill: "#fda57d"
  }), React.createElement("circle", {
    cx: 551,
    cy: 235.49,
    r: 75.53,
    fill: "url(#prefix__c)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 551,
    cy: 235.08,
    r: 73.93,
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M522.14 235.73s-8.38 41.3-13 39c0 0 44.12 38.11 83.08 0 0 0-6.86-29.1-16.77-39z",
    fill: "#333"
  }), React.createElement("path", {
    d: "M551.2 309.23a73.59 73.59 0 0 0 40.64-12.16c-2.72-14.89-13.09-15.74-13.09-15.74h-57.16s-9.78.8-12.84 14.5a73.59 73.59 0 0 0 42.45 13.4z",
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 550.43,
    cy: 233.45,
    r: 32.77,
    fill: "#333"
  }), React.createElement("path", {
    d: "M538.91 263.17h22.87v18.93A10.8 10.8 0 0 1 551 292.9h-1.3a10.8 10.8 0 0 1-10.8-10.8v-18.93h.01z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M541 262.32h18.75a2.06 2.06 0 0 1 2.06 2.06v16.87A10.8 10.8 0 0 1 551 292h-1.3a10.8 10.8 0 0 1-10.8-10.8v-16.82a2.06 2.06 0 0 1 2.06-2.06z",
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M538.95 271.8a32.91 32.91 0 0 0 22.87.06v-2.81h-22.87z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 550.43,
    cy: 240.56,
    r: 32.77,
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M519.09 228.11h62.5s-5.34-25.24-29-23.63-33.5 23.63-33.5 23.63z",
    fill: "#333"
  }), React.createElement("ellipse", {
    cx: 518.33,
    cy: 239.16,
    rx: 3.05,
    ry: 5.72,
    fill: "#be7c5e"
  }), React.createElement("ellipse", {
    cx: 582.35,
    cy: 239.16,
    rx: 3.05,
    ry: 5.72,
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M519.09 229h62.5s-5.34-25.24-29-23.63-33.5 23.63-33.5 23.63z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M551 166.65a68.84 68.84 0 1 1-68.84 68.84A68.84 68.84 0 0 1 551 166.65m0-17a85.84 85.84 0 1 0 85.84 85.84A85.94 85.94 0 0 0 551 149.65z",
    fill: "#ccc"
  }), React.createElement("path", {
    fill: "#ccc",
    d: "M538.29 129.58h20.12v21.18h-20.12zM583.384 156.327l10.909-18.155 17.246 10.363-10.908 18.154zM618.628 183.12l18.525-10.269 9.754 17.598-18.524 10.268zM618.93 286.316l10.662-17.063 17.962 11.224-10.662 17.063zM455.08 190.452l9.755-17.597 18.524 10.268-9.754 17.598zM454.45 280.48l17.963-11.223 10.662 17.062-17.962 11.224zM490.445 148.529l17.247-10.363L518.6 156.32l-17.246 10.362zM538.29 320.21h20.12v21.18h-20.12zM583.385 314.657l17.246-10.362 10.909 18.154-17.246 10.363zM494.936 322.41l11.013-18.214 17.304 10.462-11.014 18.215zM442.97 227.02h24.36v18h-24.36zM659.02 245.01h-24.36v-18h24.36zM710.91 42.74a68.84 68.84 0 1 1-68.84 68.84 68.84 68.84 0 0 1 68.84-68.84m0-17a85.84 85.84 0 1 0 85.84 85.84 85.94 85.94 0 0 0-85.84-85.84z"
  }), React.createElement("path", {
    fill: "#ccc",
    d: "M698.2 5.67h20.12v21.18H698.2zM743.298 32.41l10.908-18.155 17.246 10.363-10.908 18.155zM778.55 59.214l18.524-10.269 9.755 17.598-18.525 10.268zM778.838 162.412L789.5 145.35l17.962 11.223-10.662 17.063zM615.007 66.54l9.754-17.597 18.525 10.268-9.754 17.598zM614.36 156.57l17.962-11.224 10.662 17.062-17.962 11.224zM650.365 24.612l17.246-10.363 10.909 18.155-17.246 10.363zM698.2 196.3h20.12v21.18H698.2zM743.305 190.75l17.246-10.362 10.909 18.155-17.247 10.363zM655.292 197.426l11.013-18.215 17.303 10.463-11.013 18.215zM602.89 103.11h24.36v18h-24.36zM818.94 121.11h-24.36v-18h24.36zM391.04 37.44h2.43a68.84 68.84 0 0 1-2.35 137.64h-2.43a68.84 68.84 0 0 1 2.35-137.64m0-17a85.84 85.84 0 0 0-2.93 171.63c1 0 2 .05 3 .05a85.84 85.84 0 0 0 2.95-171.62c-1 0-2-.05-3-.05z"
  }), React.createElement("path", {
    fill: "#ccc",
    d: "M381.336 21.17L382.07.001l20.108.699-.735 21.167zM426.208 28.296l11.533-17.765 16.876 10.956-11.533 17.765zM460.495 56.317l18.87-9.62 9.137 17.926-18.87 9.62zM457.22 159.458l11.248-16.683 17.56 11.841-11.247 16.682zM296.79 57.954l10.36-17.248 18.157 10.905-10.36 17.248zM294.964 148.867l18.427-10.59 10.06 17.505-18.427 10.59zM333.596 17.296l17.596-9.757 10.272 18.522-17.596 9.758zM374.721 211.691l.736-21.167 20.108.699-.736 21.167zM420.706 186.551l17.595-9.757 10.272 18.522-17.596 9.758zM327.56 191.096l11.533-17.765 16.876 10.955-11.532 17.765zM283.4 94.074l24.344.846-.625 17.99-24.345-.847zM498.708 119.527l-24.346-.846.625-17.989 24.346.846z"
  }), React.createElement("circle", {
    cx: 66.72,
    cy: 372.35,
    r: 66.72,
    fill: "url(#prefix__d)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 66.85,
    cy: 371.93,
    r: 65.31,
    fill: "#e6e6e6"
  }), React.createElement("path", {
    d: "M66.9 437.5a65 65 0 0 0 35.9-10.74c-2.41-13.15-11.57-13.9-11.57-13.9h-50.5s-8.64.71-11.34 12.81A65 65 0 0 0 66.9 437.5z",
    fill: "#ccc"
  }), React.createElement("circle", {
    cx: 66.22,
    cy: 370.55,
    r: 31.53,
    fill: "#ccc"
  }), React.createElement("path", {
    d: "M56 396.81h20.2v16.72a9.54 9.54 0 0 1-9.54 9.54h-1.08a9.54 9.54 0 0 1-9.58-9.54v-16.72z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M56.65 396.06h19a.6.6 0 0 1 .6.6v16.12a9.54 9.54 0 0 1-9.54 9.54h-1.13a9.54 9.54 0 0 1-9.58-9.54v-16.12a.6.6 0 0 1 .6-.6z",
    fill: "#ccc"
  }), React.createElement("path", {
    d: "M56.08 404.43a29.07 29.07 0 0 0 20.2.06V402h-20.2z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 66.22,
    cy: 376.83,
    r: 28.95,
    fill: "#ccc"
  }), React.createElement("path", {
    d: "M45.6 350.5s12.2 24.77 46.62 10.38l-8-12.57-14.21-5.1z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M45.6 350.13s12.2 24.77 46.62 10.38l-8-12.57-14.21-5.1z",
    fill: "#ccc"
  }), React.createElement("path", {
    d: "M45.47 348.46a16.73 16.73 0 0 1 4.15-6.74c5.7-5.63 15-6.82 19.82-13.24a3.75 3.75 0 0 1-1.72 5.29c4.58 0 9.91-.43 12.5-4.21a8.58 8.58 0 0 1-1.45 9.06c4.07.18 8.41 2.94 8.67 7 .18 2.71-1.52 5.27-3.75 6.82a20.82 20.82 0 0 1-7.56 2.85c-7.71 1.71-35.66 8.85-30.66-6.83z",
    fill: "#ccc"
  }), React.createElement("ellipse", {
    cx: 37.25,
    cy: 376.81,
    rx: 2.69,
    ry: 5.05,
    fill: "#ccc"
  }), React.createElement("ellipse", {
    cx: 95.17,
    cy: 376.81,
    rx: 2.69,
    ry: 5.05,
    fill: "#ccc"
  }), React.createElement("circle", {
    cx: 77.31,
    cy: 366,
    r: 66.72,
    fill: "url(#prefix__e)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 77.44,
    cy: 365.57,
    r: 65.31,
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M77.47 431.14a65 65 0 0 0 35.9-10.74c-2.41-13.15-11.57-13.9-11.57-13.9H51.3s-8.64.71-11.34 12.81a65 65 0 0 0 37.51 11.83z",
    fill: "#ccc"
  }), React.createElement("circle", {
    cx: 76.81,
    cy: 364.19,
    r: 31.53,
    fill: "#ccc"
  }), React.createElement("path", {
    d: "M66.63 390.45h20.2v16.72a9.54 9.54 0 0 1-9.54 9.54h-1.12a9.54 9.54 0 0 1-9.54-9.54v-16.72z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M67.24 389.7h19a.6.6 0 0 1 .6.6v16.12A9.54 9.54 0 0 1 77.3 416h-1.13a9.54 9.54 0 0 1-9.54-9.54v-16.15a.6.6 0 0 1 .61-.61z",
    fill: "#ccc"
  }), React.createElement("path", {
    d: "M66.67 398.08a29.07 29.07 0 0 0 20.2.06v-2.48h-20.2z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 76.81,
    cy: 370.48,
    r: 28.95,
    fill: "#ccc"
  }), React.createElement("path", {
    d: "M56.19 344.14s12.2 24.77 46.62 10.38l-8-12.57-14.21-5.1z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M56.19 343.78s12.2 24.77 46.62 10.38l-8-12.57-14.21-5.1z",
    fill: "#ccc"
  }), React.createElement("path", {
    d: "M56.08 342.11a16.73 16.73 0 0 1 4.15-6.74c5.7-5.63 15-6.82 19.82-13.24a3.75 3.75 0 0 1-1.72 5.29c4.58 0 9.91-.43 12.5-4.21a8.58 8.58 0 0 1-1.45 9.06c4.07.18 8.41 2.94 8.67 7 .18 2.71-1.52 5.27-3.75 6.82a20.82 20.82 0 0 1-7.56 2.85c-7.73 1.71-35.71 8.85-30.66-6.83z",
    fill: "#ccc"
  }), React.createElement("ellipse", {
    cx: 47.84,
    cy: 370.45,
    rx: 2.69,
    ry: 5.05,
    fill: "#ccc"
  }), React.createElement("ellipse", {
    cx: 105.76,
    cy: 370.45,
    rx: 2.69,
    ry: 5.05,
    fill: "#ccc"
  }), React.createElement("path", {
    d: "M516 213.14v3.2l-9-.8v20l-23.55 34.51-1.45-.85-3.2 4 30.43 19.22v-7.21l-1.71-1c2.13-7.95 10.85-39.65 15.83-43.84 0 0 9-6.41 13.86-15.22s2.42-39.24-21.21-12.01z",
    transform: "translate(-190.53 -75)",
    fill: "url(#prefix__f)"
  }), React.createElement("path", {
    d: "M468.35 288.68s-32.62-6.89-50.52-14.15a76.53 76.53 0 0 0-26.26-5.63l-19.57-.64-9.75-5.85 3-7.87c.3-.13.6-.27.9-.44l.28-1.69a46.36 46.36 0 0 0 4.62-1.4 12.1 12.1 0 0 0 3.86 10.34 11.89 11.89 0 0 0 8.91 3.94 12 12 0 0 0 12-13l-1.4-17.66-.71.37-.09-1.18-.26.14a46.67 46.67 0 0 0 .79-52.65l.76-.7v-19.45c-.26-.25-.53-.48-.8-.71v-.09c-16.14-15-38.32-13.82-54.36-10a29.47 29.47 0 0 0-22.52 25.61c-21.41 5.84-14.26 17.07-14.6 21.41-1.66 21.15 5.15 33.59 12.55 40.79a38.7 38.7 0 0 0 10.63 7.74l-4.69 9.37-1.37-.05-3.75 11.18h-.18l-46.45 31.46-32.09 35.4a10.38 10.38 0 0 0 8.47 17.32l32.83-2.48s23.22 45.44 16 90.88c-2.42 15.27-1.41 24.61 1 30.3a55.73 55.73 0 0 1-5 17.75c-8.81 18.42-8.81 37.64 2.4 60.06l3.2 116.12s4 54.46 0 65.67 1.6 64.87 1.6 64.87H297v29.64l60 1.6s14-6.64 16.51-11.66l30.16 9.27s33.18-5.72 13.77-13.62c-14.49-5.9-18.09-14.31-19-18.21l47.43-136.37s-8.81-116.12-40.84-156.17l-3.25-23.61h.45l6.81-137.88.56.08-.16.05c22.63 3.42 40.81 1.61 52.86-.82a82.35 82.35 0 0 0 15.31-4.29l.9-.36h.19a46.36 46.36 0 0 0 10.42-5.94l20-30.59-30.43-21zm-125.73 469l15.22-106.51v-54.42l27.23 56.86-29.3 123.22-1.54-.43-6.76 24.27a15.94 15.94 0 0 1-4.85-6.91z",
    transform: "translate(-190.53 -75)",
    fill: "url(#prefix__g)"
  }), React.createElement("path", {
    d: "M85.05 231s-45.19 10.63-37.21 75.75c0 0 16.35-5.78 22.06-6.44 5.42-.63 21.8 1.13 21.8 1.13L99.47 272z",
    fill: "#535461"
  }), React.createElement("path", {
    d: "M311.47 152.78v19.12l-22.77 33.36 22.77 14.81s10.12-39 15.57-43.59c0 0 8.57-6.12 13.24-14.53s2.34-37.47-20.25-11.47v3.06zM130.2 198.37l9-18a3.34 3.34 0 0 1 2.82-1.84l34.24-1.75a3.34 3.34 0 0 1 3.29 4.54l-8.83 22.83a3.34 3.34 0 0 1-3.41 2.12l-34.42-3.06a3.34 3.34 0 0 1-2.69-4.84z",
    fill: "#fda57d"
  }), React.createElement("path", {
    fill: "#edeef9",
    d: "M132.74 190.63l-5.81 17.06 59.72-2.14-22.94-13.77-30.97-1.15zM284.53 207.84l3.06-3.82 25.99 15.29v6.88l-29.05-18.35z"
  }), React.createElement("path", {
    d: "M108.86 377s4.37 17.41-4 35-8.41 35.94 2.29 57.35l3.06 110.88s3.82 52 0 62.7 1.53 61.94 1.53 61.94h42.82v-34.4l14.53-101.7v-52l26 54.29-29.85 125.41 39 16.06 48.94-140.7s-8.41-110.88-39-149.11L208.47 381z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M110.95 733.18v-28.3h43.59s3.06 11.47 22.94 13.76-9.18 16.06-9.18 16.06z",
    fill: "#333"
  }), React.createElement("path", {
    d: "M158.02 715.56l7.59-27.26 42 11.69s-.13 11.87 18.41 19.41-13.15 13-13.15 13z",
    fill: "#333"
  }), React.createElement("path", {
    d: "M208.47 383.33l-99.58-4a55.71 55.71 0 0 1 .75 18.05c4.56 10.72 14.33 7.78 14.33 7.78l87.13-2.68z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M128.92 201.34l-44.35 30 8.79 48s22.18 43.39 15.29 86.78 15.29 36.71 15.29 36.71l87.53-2.67 6.5-131.65s52.79 7.49 76.5-10.85l19.12-29.2-29.06-20-9.94 14.18s-31.12-6.64-48.24-13.54a73.07 73.07 0 0 0-25.07-5.37z",
    fill: "#535461"
  }), React.createElement("path", {
    d: "M129.68 413.16s-5.35 26.76 25.23 71.12M218.38 268.63s36.7-12.23 52.76-12.23 13.38 6.94 13.38 6.94-25.61 11.41-66.14 5.29zM176.76 178.29l-14.6 1.71c-.46.06-.88.64-1.13 1.54 3.21 5.79 7.23 9.25 11.59 9.25a9 9 0 0 0 4.43-1.23l1.12-6.76c.37-2.23-.37-4.64-1.41-4.51z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 166.57,
    cy: 144.69,
    r: 44.6,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M204.47 100.85v18.58l-2.25 2.06a7.71 7.71 0 0 0 2.25 12.81s-3.72 29.73-8.36 40.88l7.9-4.18 1.34 16.86a11.5 11.5 0 0 1-11.46 12.41 11.5 11.5 0 0 1-10.23-16.75c1.89-3.68 5.24-7.55 6.88-13 6-20-6-16.26-8.83-12.54s.46 13.47.46 13.47 8.83 16.26-37.63 12.54c0 0-30.66-6.5-27.41-47.85.33-4.14-6.5-14.87 13.94-20.44a28.13 28.13 0 0 1 21.5-24.45c15.34-3.59 36.52-4.74 51.9 9.6z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M203.74 100.09v18.58l-2.27 2.06a7.71 7.71 0 0 0 2.25 12.81s-3.72 29.73-8.36 40.88l7.9-4.18 1.34 16.86a11.5 11.5 0 0 1-11.46 12.41 11.5 11.5 0 0 1-10.23-16.75c1.89-3.68 5.24-7.55 6.88-13 6-20-6-16.26-8.83-12.54s.46 13.47.46 13.47 8.83 16.26-37.63 12.54c0 0-30.66-6.5-27.41-47.85.33-4.14-6.5-14.87 13.94-20.44a28.13 28.13 0 0 1 21.5-24.45c15.33-3.6 36.51-4.75 51.92 9.6z",
    fill: "#72351c"
  }));
};

UndrawConnectingTeams.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawConnectingTeams;