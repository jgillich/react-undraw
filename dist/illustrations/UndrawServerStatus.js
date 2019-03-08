function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawServerStatus = function UndrawServerStatus(_props) {
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
    viewBox: "0 0 1055.52 773.82",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 1958.6,
    y1: 638.33,
    x2: 1958.6,
    y2: 355.69,
    gradientTransform: "matrix(-1 0 0 1 2766 0)",
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
  }))), React.createElement("path", {
    d: "M344.29 490.98c34.91-13.73 89.71-16.53 139.59-15.43 156.68 3.43 298.11 36.8 420.44 74.55 44.29 13.67 87.89 28.4 116.64 47.22 58.52 38.31 41.16 91.38-40.21 122.94-27.69 10.74-61.25 19-95.71 26.26-61.28 12.98-127.36 23.39-196.9 26.39-49.58 2.11-99.78.39-149.07-2.56-137.73-8.27-272.91-26.44-386.22-57.67-49.7-13.67-96.54-30.67-117-52.8s-7.38-50.15 43.37-63.25c21-5.41 46.08-7.86 70.65-10.15 36.16-3.38 72.9-6.72 105.53-13.59 33.71-7.1 73.62-20.83 66.95-36.54-7.19-16.86-12.93-31.66 21.94-45.37z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M503.38 30.13l-3.81 221s137.92 0 255.26 38.1l2.29-223.32S568.91 20.99 503.38 30.13z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M501.38 27.13l-3.81 221s137.92 0 255.26 38.1l2.29-223.32S566.91 17.99 501.38 27.13z",
    fill: "#f5f5fb"
  }), React.createElement("path", {
    d: "M444.64 29.96l3.81 221s-137.92 0-255.26 38.1L190.9 65.8s188.21-44.98 253.74-35.84z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M446.64 26.96l3.81 221s-137.92 0-255.26 38.1L192.9 62.8s188.21-44.98 253.74-35.84z",
    fill: "#f5f5fb"
  }), React.createElement("path", {
    d: "M790.41 97.42v218.69s45-5.33 139.44 111.25l8.39-218.69s-98.3-105.91-147.83-111.25z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M788.41 95.42v218.69s45-5.33 139.44 111.25l8.39-218.69s-98.3-105.91-147.83-111.25z",
    fill: "#f5f5fb"
  }), React.createElement("path", {
    d: "M160.06 103.91v218.7s-45-5.33-139.44 111.25l-8.38-218.69s98.29-105.91 147.82-111.26z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M162.06 100.91v218.7s-45-5.33-139.44 111.25l-8.38-218.69s98.29-105.91 147.82-111.26z",
    fill: "#f5f5fb"
  }), React.createElement("path", {
    d: "M668.06 469.68c0 7.45-47.31 50.5-155 50.5s-166-41.55-166-49 60.31 11 168 11 153-19.96 153-12.5z",
    fill: "#f7f7fd"
  }), React.createElement("ellipse", {
    cx: 316.11,
    cy: 365.5,
    rx: 11.46,
    ry: 1.57,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 272.22,
    cy: 369.95,
    rx: 11.46,
    ry: 1.57,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 220.54,
    cy: 363.93,
    rx: 11.46,
    ry: 1.57,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 289.79,
    cy: 382.62,
    rx: 8.14,
    ry: 1.12,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 244.24,
    cy: 381.5,
    rx: 8.14,
    ry: 1.12,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M271.98 369.6s16.06-52.67-2.52-73.76c-13.9-15.78-29.7-13.93-36.7-11.93a13.06 13.06 0 0 0-8.43 7c-2.47 5.33-2 14 15.42 24.08 29.19 16.9 31 40.09 31 40.09z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M235.24 291.37s47.36 14.81 36.74 78.23M262.9 296.68s-6.52 4.39-4.45 11M239.99 300.59s4-4.06 8.83-1.82M258.76 320.98s7-3.55 8.81.9M276.03 328.39s-5.26-.42-5.35 2.09",
    fill: "none",
    stroke: "#565987",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M272.63 370.02s-18.82-38.28-24-37.44c-2.45.4-3.58 2.81-4.1 5.24a15.4 15.4 0 0 0 1 9.32c2.71 6.12 9.88 17.77 27.1 22.88z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M248.76 339.84s19.75 28.64 23.57 29.9M246.97 344.31h4.61M252.49 354.79l7.22.31M256.89 346.41l-.79 3.76M264.57 357.86l-.14 3.42",
    fill: "none",
    stroke: "#565987",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M272.07 370.02s18.81-38.28 24-37.44c2.46.4 3.59 2.81 4.1 5.24a15.47 15.47 0 0 1-1 9.32c-2.71 6.12-9.88 17.77-27.1 22.88z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M295.91 339.84s-19.75 28.64-23.56 29.9M297.73 344.31h-4.61M292.21 354.79l-7.23.31M287.81 346.41l.79 3.76M280.13 357.86l.14 3.42",
    fill: "none",
    stroke: "#565987",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M239.76 378.96a3.26 3.26 0 0 1-1.07-1.62 1.42 1.42 0 0 1 .75-1.64c.68-.27 1.42.21 2 .69a2.64 2.64 0 0 0 1.92.93 2.94 2.94 0 0 1-.91-2.74 1.26 1.26 0 0 1 .26-.56c.38-.41 1.07-.23 1.53.09 1.45 1 1.85 3 1.86 4.77a8.56 8.56 0 0 0 0-2 2 2 0 0 1 .74-1.74 2.26 2.26 0 0 1 1.12-.27 2.34 2.34 0 0 1 1.83.52 1.84 1.84 0 0 1-.07 2.25 7.15 7.15 0 0 1-1.89 1.51 4.07 4.07 0 0 0-1.35 1.29.94.94 0 0 0-.1.23h-4.1a11.9 11.9 0 0 1-2.52-1.71zM311.46 363.54a3.24 3.24 0 0 1-1.07-1.61 1.43 1.43 0 0 1 .75-1.65 2.1 2.1 0 0 1 2 .7 2.59 2.59 0 0 0 1.92.92 2.93 2.93 0 0 1-.91-2.74 1.12 1.12 0 0 1 .26-.55c.38-.41 1.07-.24 1.53.08 1.45 1 1.85 3 1.86 4.78a8.64 8.64 0 0 0 0-2 2 2 0 0 1 .74-1.74 2.15 2.15 0 0 1 1.12-.26 2.3 2.3 0 0 1 1.83.52 1.82 1.82 0 0 1-.07 2.24 7.15 7.15 0 0 1-1.89 1.51 4.17 4.17 0 0 0-1.35 1.29.94.94 0 0 0-.1.23h-4.1a11.54 11.54 0 0 1-2.52-1.72zM287.56 378.96a3.26 3.26 0 0 1-1.07-1.62 1.43 1.43 0 0 1 .75-1.64c.69-.27 1.42.21 2 .69a2.65 2.65 0 0 0 1.92.93 2.93 2.93 0 0 1-.9-2.74 1.14 1.14 0 0 1 .25-.56c.38-.41 1.07-.23 1.53.09 1.45 1 1.86 3 1.87 4.77a9.17 9.17 0 0 0 0-2 2 2 0 0 1 .74-1.74 3 3 0 0 1 2.95.25 1.82 1.82 0 0 1-.07 2.25 7 7 0 0 1-1.89 1.51 4.26 4.26 0 0 0-1.35 1.29 1.6 1.6 0 0 0-.1.23h-4.09a11.71 11.71 0 0 1-2.54-1.71zM219.76 347.8s-1.53 2 .71 5 4.1 5.59 3.35 7.48c0 0-3.39-5.63-6.14-5.71s-.92-3.39 2.08-6.77z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M219.76 347.8a2.36 2.36 0 0 0-.31.63c-2.69 3.15-4.12 6.1-1.54 6.17 2.41.07 5.3 4.38 6 5.46a1.83 1.83 0 0 1-.08.25s-3.39-5.63-6.14-5.71-.93-3.42 2.07-6.8z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M216.94 350.35c0 .71.08 1.28.18 1.28s.17-.57.17-1.28-.09-.37-.19-.37-.16-.33-.16.37z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M215.96 351.2c.62.34 1.16.54 1.21.45s-.42-.43-1-.76-.38-.1-.42 0-.41.02.21.31z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M227.9 347.8s1.54 2-.71 5-4.09 5.59-3.34 7.48c0 0 3.38-5.63 6.14-5.71s.94-3.39-2.09-6.77z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M227.9 347.8a2.36 2.36 0 0 1 .31.63c2.69 3.15 4.12 6.1 1.54 6.17-2.41.07-5.29 4.38-6 5.46a1.83 1.83 0 0 0 .08.25s3.38-5.63 6.14-5.71.96-3.42-2.07-6.8z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M230.76 350.35c0 .71-.07 1.28-.17 1.28s-.18-.57-.18-1.28.1-.37.2-.37.15-.33.15.37z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M231.76 351.2c-.62.34-1.16.54-1.2.45s.41-.43 1-.76.38-.1.43 0 .36.02-.23.31z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M230.27 360.05s-4.3-.13-5.59-1.05-6.6-2-6.92-.55-6.45 7.35-1.61 7.39 11.26-.76 12.55-1.54 1.57-4.25 1.57-4.25z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M216.07 365.32c4.84 0 11.26-.75 12.55-1.54 1-.6 1.37-2.75 1.5-3.74h.15s-.28 3.46-1.57 4.25-7.7 1.58-12.55 1.54c-1.39 0-1.88-.51-1.85-1.25.19.46.73.73 1.77.74z",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 195.17,
    cy: 496.39,
    rx: 34.72,
    ry: 5.13,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 292.15,
    cy: 538.87,
    rx: 34.72,
    ry: 5.13,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 149.49,
    cy: 587.2,
    rx: 34.72,
    ry: 5.13,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 885.14,
    cy: 693.36,
    rx: 34.72,
    ry: 5.13,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 491.09,
    cy: 575.32,
    rx: 22.99,
    ry: 2.57,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 820.09,
    cy: 443.32,
    rx: 22.99,
    ry: 2.57,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 641.08,
    cy: 638.32,
    rx: 22.99,
    ry: 2.57,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 442.64,
    cy: 621.36,
    rx: 22.99,
    ry: 2.57,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 256.67,
    cy: 614.69,
    rx: 22.99,
    ry: 2.57,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 208.21,
    cy: 660.73,
    rx: 22.99,
    ry: 2.57,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("ellipse", {
    cx: 508.8,
    cy: 239.5,
    rx: 152.12,
    ry: 67.89
  }), React.createElement("path", {
    d: "M663.56 263.77c-6.73 35.4-73.23 63.19-154.29 63.19-81.77 0-148.73-28.28-154.47-64.11h-.57v57.69c26.74 27.94 85.94 47.37 154.66 47.37s127.92-19.43 154.67-47.37z"
  }), React.createElement("path", {
    d: "M663.56 333.97c-6.73 35.39-73.23 63.19-154.29 63.19-81.77 0-148.73-28.28-154.47-64.12h-.57v57.7c26.74 27.94 85.94 47.36 154.66 47.36s127.92-19.42 154.67-47.36z"
  }), React.createElement("path", {
    d: "M663.56 411.18c-6.73 35.4-73.23 63.19-154.29 63.19-81.77 0-148.73-28.27-154.47-64.11h-.57v62.22a9.59 9.59 0 0 0 3.08 7.06c28 25.71 85.39 35.78 151.58 35.78s123.55-10.07 151.59-35.78a9.59 9.59 0 0 0 3.08-7.06z"
  })), React.createElement("ellipse", {
    cx: 508.8,
    cy: 235.5,
    rx: 152.12,
    ry: 67.89,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M663.56 259.77c-6.73 35.4-73.23 63.19-154.29 63.19-81.77 0-148.73-28.28-154.47-64.11h-.57v57.69c26.74 27.94 85.94 47.37 154.66 47.37s127.92-19.43 154.67-47.37z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M663.56 329.97c-6.73 35.39-73.23 63.19-154.29 63.19-81.77 0-148.73-28.28-154.47-64.12h-.57v57.7c26.74 27.94 85.94 47.36 154.66 47.36s127.92-19.42 154.67-47.36z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M663.56 407.18c-6.73 35.4-73.23 63.19-154.29 63.19-81.77 0-148.73-28.27-154.47-64.11h-.57v62.22a9.59 9.59 0 0 0 3.08 7.06c28 25.71 85.39 35.78 151.58 35.78s123.55-10.07 151.59-35.78a9.59 9.59 0 0 0 3.08-7.06z",
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 733.03,
    cy: 571.25,
    rx: 57,
    ry: 10.26,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M773.27 503.61c2.88 1.7 7.4 2.81 13.09-.85l-.05 8.11c.4 5.56 7.28 25.83 7.28 25.83l4.85 16.67a130.07 130.07 0 0 1 5.33 36.28c0 4.06.38 8.26 1.55 11.42 2.59 7-1 16-2.57 19.32a80.1 80.1 0 0 1-8 2.25 5.83 5.83 0 0 0-.71.22v-.05s-7.28 2.89-10.52 2.49c-2.41-.29-3.92 2.72-2 4.93a14.88 14.88 0 0 1-4.84.64c-3.24-.4-4.86 5.16 1.21 6.75s40.46 0 40.46 0a4.87 4.87 0 0 0 2.58-5.38l4.3-.18s6.07-2.78 0-10.33l-.33.24-1.29-3.82V613s7.69-37 5.26-41.33-3.72-26.67-3.72-26.67l.85-24.2c2.19-4.52 3.31-11.62 3.88-17.17a36 36 0 0 0 1.55-8.14c.1-1.31.18-2.67.23-4.09a27.27 27.27 0 0 0-1.48-9.16 92.06 92.06 0 0 1 9.17-11.5 11.82 11.82 0 0 0 3.65-10.33l-2-13.51-4.86-23c.61-6.39-.72-10.07-2.2-12.15.35-2.07.68-4.13.93-6.21a79.6 79.6 0 0 0-1.42-27c-.7-3.08-1.66-6.25-3.83-8.59-2.45-2.66-6.43-4.27-7.35-7.74a20.66 20.66 0 0 0-.56-2.62c-.89-2.27-3.69-3.1-6.15-3.4-4.38-.53-10.71-.93-14.92.79A18.09 18.09 0 0 0 792 365a6.89 6.89 0 0 0-1 4.95 6.6 6.6 0 0 0 .69 1.7 15.39 15.39 0 0 0 8.94 19.7c.1.31.19.61.26.9a15.41 15.41 0 0 1 .4 2.17c-.08 1.4-.17 2.81-.23 4.22l-.15.57a105.13 105.13 0 0 0-10.17 5.18c2.42 3.58-.41 18.68-.41 18.68-6.07 3.57-12.13 12.71-5.66 22.25s2.83 19.86 2.83 19.86l-1 15.54-.2 3.11h.07l-.07 1.18h.17v1.27c-2.84 1.05-7 3.15-9.47 7.05a24.94 24.94 0 0 1-4.23 5.19 3.12 3.12 0 0 0 .5 5.09zm48.85-41.28a14.77 14.77 0 0 1 1.44-7.82h2.86a18.57 18.57 0 0 0 .35 1.88c.82 3.55-2.46 5.22-4.65 5.94z",
    transform: "translate(-72.24 -63.09)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M750.68 553.24l1.56 4.67-5.06 5.06-16.74 3.94-12.07-1.17.78-4.28a5.17 5.17 0 0 1 3.83-3.78c5-1.16 14.42-3.82 16.41-7.51z",
    fill: "#db8b8b"
  }), React.createElement("path", {
    d: "M750.68 553.24l1.56 4.67-5.06 5.06-16.74 3.94-12.07-1.17.78-4.28a5.17 5.17 0 0 1 3.83-3.78c5-1.16 14.42-3.82 16.41-7.51z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M722.26 564.53l2.34-3.11-2.34-3.61s-7 2.83-10.12 2.44-4.67 5.06 1.17 6.62 38.93 0 38.93 0 5.84-2.73 0-10.13l-5.06 3.9s-8.57 4.67-12.85 3.89z",
    fill: "#c17174"
  }), React.createElement("path", {
    d: "M711.76 571.15l12.07 1.17 16.74-3.9 5.06-5.06-.41-1.23-.58-1.74-.57-1.7-11.31-3.11a7 7 0 0 1-2.29 2.29c-3.67 2.51-10.25 4.32-14.12 5.22a3.82 3.82 0 0 0-.48.15 5 5 0 0 0-2 1.21 5.1 5.1 0 0 0-1.38 2.42z",
    fill: "#db8b8b"
  }), React.createElement("path", {
    d: "M711.76 571.15l12.07 1.17 16.74-3.9 5.06-5.06-.41-1.23-4.65 3.57s-8.57 4.67-12.85 3.89h-12.08l2.34-3.11-2.1-3.24a5 5 0 0 0-2 1.21 5.1 5.1 0 0 0-1.38 2.42z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M715.64 569.98l2.34-3.11-2.34-3.61s-7 2.83-10.12 2.44-4.67 5.06 1.17 6.62 38.93 0 38.93 0 5.84-2.73 0-10.12l-5.06 3.89s-8.57 4.67-12.85 3.89z",
    fill: "#c17174"
  }), React.createElement("path", {
    d: "M725.37 344.18s18.69 2 16-5.84a13.91 13.91 0 0 1-.58-6.88 18.94 18.94 0 0 1 3.3-7.91l-17.52 2.72a21.86 21.86 0 0 1 2.38 5.63c2.05 8.26-3.58 12.28-3.58 12.28z",
    fill: "#db8b8b"
  }), React.createElement("path", {
    d: "M757.3 432.91s-.39 16.74-4.28 24.92l-.78 23.75s1.16 21.8 3.5 26.08-5.06 40.49-5.06 40.49v6.23s-12.46 4.67-16-.78l3.5-46.33-1.56-64.23z",
    fill: "#474463"
  }), React.createElement("path", {
    d: "M757.3 432.91s-.39 16.74-4.28 24.92l-.78 23.75s1.16 21.8 3.5 26.08-5.06 40.49-5.06 40.49v6.23s-12.46 4.67-16-.78l3.5-46.33-1.56-64.23z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M765.08 379.22l2.34 6.23 2 13.23a11.75 11.75 0 0 1-3.51 10.13c-4.67 4.67-10.9 14.4-10.9 14.4l-7.39-22.19s7.39-1.17 6.22-6.23-.77-14.4-.77-14.4z",
    fill: "#ff748e"
  }), React.createElement("path", {
    d: "M765.17 379.13l2.33 6.23 2 13.24a11.7 11.7 0 0 1-3.5 10.12c-4.68 4.67-10.9 14.41-10.9 14.41l-7.45-22.22s7.4-1.17 6.23-6.23-.78-14.41-.78-14.41z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M730.48 557.91c5 7.86 12.77 3.4 14.15 2.52l-.57-1.7-11.3-3.15a7 7 0 0 1-2.28 2.33z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M714.86 448.13c.39 5.45 7 25.3 7 25.3l4.67 16.34a130.39 130.39 0 0 1 5.13 35.54 34.71 34.71 0 0 0 1.49 11.19c3.12 8.57-3.11 20.24-3.11 20.24 5.45 9.74 14.79 3.12 14.79 3.12v-6.23s7.4-33.87 5.45-40.49-2.72-24.52-2.72-24.52V456.3a36.67 36.67 0 0 0 10.68-23.24c.09-1.28.17-2.62.22-4 .31-8.78-5.7-19.08-8-22.75-.56-.89-.92-1.39-.92-1.39l-34.37 13.64h-.08v4.29z",
    fill: "#474463"
  }), React.createElement("path", {
    d: "M726.54 326.27a21.86 21.86 0 0 1 2.38 5.63 15.22 15.22 0 0 0 11.84-.44 18.94 18.94 0 0 1 3.3-7.91z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 734.33,
    cy: 316.93,
    r: 15.18,
    fill: "#db8b8b"
  }), React.createElement("path", {
    d: "M714.86 422.82h.17c16.32 3.36 36.82-13.65 36.82-13.65a20.31 20.31 0 0 1-1.42-2.9c-.56-.89-.92-1.39-.92-1.39l-34.37 13.64-.09 1.36z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M719.15 343.79s21.8-13.24 28.8-7.79l9.74 12.46s6.23 1.95 5.07 14.45l4.67 22.58-14 3.5s-8.17 7.79-1.55 19.08c0 0-20.64 17.13-37 13.62l1.17-18.29s3.5-10.13-2.72-19.47-.39-18.3 5.45-21.8c-.02-.04 2.7-14.84.37-18.34z",
    fill: "#ff748e"
  }), React.createElement("path", {
    d: "M717.98 423.21s-8.18 1.56-12.07 7.79a24.3 24.3 0 0 1-4.08 5.09 3.08 3.08 0 0 0 .49 4.92c3.09 1.86 8.12 3 14.49-2.23 10.95-8.95 1.17-15.57 1.17-15.57z",
    fill: "#db8b8b"
  }), React.createElement("path", {
    d: "M730.05 351.19s7.78-.78 9.73 19.46 5.06 24.92 5.06 24.92 1.95 10.51-2.73 16.74-13.62 19.47-13.62 19.47-9.73 2.72-11.68-7l12.07-22.58s1.94-7.79-2.73-13.24-8.17-41.67 3.9-37.77z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M729.27 350.02s7.78-.78 9.73 19.47 5.06 24.91 5.06 24.91 2 10.51-2.72 16.74-13.58 19.47-13.58 19.47-9.73 2.72-11.68-7l12.07-22.58s1.95-7.79-2.73-13.24-8.22-41.66 3.85-37.77z",
    fill: "#ff748e"
  }), React.createElement("path", {
    d: "M722.84 364.62s-.77 12.07 2.73 18.69 3.5 15.18 0 19.85M720.9 349.82s3.11-3.11 12.07-3.5 12.84-3.11 12.84-3.11",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M742.55 297.31c2.37.29 5.07 1.1 5.92 3.32a22.14 22.14 0 0 1 .55 2.57c.88 3.4 4.71 5 7.07 7.58 2.08 2.3 3 5.4 3.68 8.43a79.17 79.17 0 0 1 1.37 26.45c-.76 6.45-2.32 12.81-2.75 19.29s.36 13.31 3.9 18.76c1.53 2.34 3.54 4.4 4.62 7-2.23 1.81-5.31 2.07-8.19 2.17q-5 .17-10.05 0a10.67 10.67 0 0 1-5.1-1.07 7.86 7.86 0 0 1-2.68-2.87c-1.92-3.25-2.4-7.16-2.32-10.93s.68-7.52.75-11.3a9.82 9.82 0 0 0-1.31-5.92 19.07 19.07 0 0 0-3.26-3c-4.17-3.7-5.6-9.62-5.74-15.19s.78-11.14.31-16.69c-.18-2.17-1-4.78-3.13-5.2a11.38 11.38 0 0 1-2-.26c-1.71-.66-1.54-3.07-2-4.84-.55-2-2.25-3.53-2.73-5.53-1.12-4.71 4.88-10.34 8.81-12s10.07-1.29 14.28-.77z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M742.94 296.53c2.37.29 5.07 1.1 5.92 3.33a21.54 21.54 0 0 1 .55 2.56c.88 3.4 4.71 5 7.07 7.58 2.08 2.3 3 5.4 3.68 8.43a79.17 79.17 0 0 1 1.36 26.48c-.75 6.45-2.31 12.81-2.74 19.3s.36 13.3 3.9 18.75c1.53 2.35 3.54 4.4 4.62 7-2.23 1.82-5.31 2.07-8.19 2.17q-5 .16-10.05 0a10.66 10.66 0 0 1-5.1-1.06 7.89 7.89 0 0 1-2.68-2.88c-1.92-3.25-2.4-7.16-2.32-10.93s.68-7.52.75-11.29c0-2.06-.12-4.24-1.31-5.92a18.73 18.73 0 0 0-3.26-3c-4.17-3.7-5.6-9.62-5.74-15.19s.78-11.14.31-16.69c-.18-2.17-1-4.78-3.13-5.2a11.38 11.38 0 0 1-2-.26c-1.71-.66-1.54-3.07-2-4.84-.55-2-2.25-3.52-2.73-5.53-1.12-4.71 4.88-10.34 8.81-12s10.1-1.33 14.28-.81z",
    fill: "#464353"
  }), React.createElement("path", {
    d: "M128.04 572.77s10.72-.33 13.94-2.63 16.48-5.05 17.28-1.36 16.1 18.34 4 18.44-28.1-1.89-31.33-3.85-3.89-10.6-3.89-10.6z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M163.48 585.91c-12.09.1-28.1-1.88-31.32-3.84-2.45-1.5-3.43-6.86-3.76-9.34h-.36s.68 8.64 3.9 10.6 19.23 3.94 31.33 3.85c3.49 0 4.69-1.27 4.63-3.11-.49 1.15-1.82 1.84-4.42 1.84z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M808.93 432.12s7.35-.23 9.57-1.81 11.31-3.46 11.86-.93 11.06 12.59 2.75 12.66-19.29-1.3-21.5-2.64-2.68-7.28-2.68-7.28z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M833.26 441.16c-8.3.06-19.29-1.3-21.5-2.64-1.69-1-2.36-4.71-2.58-6.41h-.25s.47 5.93 2.68 7.28 13.2 2.7 21.5 2.64c2.4 0 3.23-.87 3.18-2.14-.33.78-1.24 1.25-3.03 1.27z",
    opacity: 0.2
  }), React.createElement("circle", {
    cx: 31.29,
    cy: 21.63,
    r: 21.63,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 961.29,
    cy: 83.63,
    r: 21.63,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 16,
    cy: 106.18,
    r: 16,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 178,
    cy: 16.18,
    r: 16,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 834,
    cy: 18.18,
    r: 16,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M889.62 646.4s4 5.24-1.85 13.15-10.68 14.58-8.73 19.51c0 0 8.83-14.68 16-14.89s2.48-8.93-5.42-17.77z",
    fill: "#fc6681"
  }), React.createElement("path", {
    d: "M889.62 646.4a6.42 6.42 0 0 1 .81 1.65c7 8.24 10.76 15.93 4 16.12-6.28.18-13.81 11.41-15.62 14.25a5.39 5.39 0 0 0 .22.64s8.83-14.68 16-14.89 2.49-8.93-5.41-17.77z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M897.06 653.08c0 1.84-.21 3.34-.46 3.34s-.46-1.5-.46-3.34.26-1 .51-1 .41-.85.41 1z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M899.62 655.28c-1.62.88-3 1.41-3.16 1.19s1.1-1.12 2.71-2 1-.24 1.11 0 .96-.07-.66.81z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M868.46 646.4s-4 5.24 1.85 13.15 10.68 14.58 8.73 19.51c0 0-8.84-14.68-16-14.89s-2.49-8.93 5.42-17.77z",
    fill: "#fc6681"
  }), React.createElement("path", {
    d: "M868.46 646.4a6.61 6.61 0 0 0-.82 1.65c-7 8.24-10.75 15.93-4 16.12 6.28.18 13.82 11.41 15.62 14.25-.06.21-.13.43-.21.64 0 0-8.84-14.68-16-14.89s-2.5-8.93 5.41-17.77z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M861.01 653.08c0 1.84.21 3.34.47 3.34s.46-1.5.46-3.34-.26-1-.52-1-.41-.85-.41 1z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M858.46 655.28c1.62.88 3 1.41 3.15 1.19s-1.09-1.12-2.71-2-1-.24-1.1 0-.96-.07.66.81z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M862.29 678.38s11.2-.35 14.57-2.75 17.23-5.27 18.07-1.42 16.82 19.17 4.18 19.27-29.38-2-32.74-4-4.08-11.1-4.08-11.1z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M899.34 692.14c-12.65.1-29.38-2-32.75-4-2.56-1.56-3.59-7.17-3.93-9.76h-.37s.71 9 4.08 11.08 20.1 4.12 32.74 4c3.65 0 4.91-1.33 4.84-3.25-.5 1.18-1.9 1.91-4.61 1.93z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M316.45 125.97a21 21 0 1 0 21 21 21 21 0 0 0-21-21zm0 4.07a17 17 0 1 1-17 17 17 17 0 0 1 17-17m11.89 11.05l-1.91-1.93a1 1 0 0 0-1.44 0l-12 11.89-5.06-5.14a1 1 0 0 0-1.44 0l-1.92 1.91a1 1 0 0 0 0 1.44l7.7 7.76a1 1 0 0 0 1.44 0l14.63-14.52a1 1 0 0 0 0-1.44zM83.97 232.29a21 21 0 1 0 25.22 15.76 21 21 0 0 0-25.22-15.76zm.92 4a17 17 0 1 1-12.71 20.34 17 17 0 0 1 12.71-20.34m14.07 8.1l-2.3-1.48a1 1 0 0 0-1.4.32l-9 14.28-6.09-3.85a1 1 0 0 0-1.4.32l-1.45 2.3a1 1 0 0 0 .32 1.4l9.24 5.83a1 1 0 0 0 1.41-.32l11-17.43a1 1 0 0 0-.31-1.4zM622.52 129.01a21 21 0 1 0 21 21 21 21 0 0 0-21-21zm0 4.07a17 17 0 1 1-17 17 17 17 0 0 1 17-17m11.89 11.05l-1.91-1.93a1 1 0 0 0-1.44 0l-12 11.89-5.07-5.11a1 1 0 0 0-1.44 0l-1.91 1.93a1 1 0 0 0 0 1.44l7.7 7.76a1 1 0 0 0 1.44 0l14.63-14.52a1 1 0 0 0 0-1.44zM863.45 232.72a21 21 0 1 0 19.31 22.59 21 21 0 0 0-19.31-22.59zm-.32 4.05a17 17 0 1 1-18.22 15.6 16.95 16.95 0 0 1 18.22-15.6m11 11.94l-1.76-2.07a1 1 0 0 0-1.43-.12l-12.87 10.93-4.66-5.49a1 1 0 0 0-1.44-.12l-2.07 1.76a1 1 0 0 0-.11 1.43l7.07 8.33a1 1 0 0 0 1.43.12l15.72-13.34a1 1 0 0 0 .12-1.43z",
    fill: "#3acc6c",
    opacity: 0.7
  }));
};

UndrawServerStatus.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawServerStatus;