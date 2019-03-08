function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawSecurity = function UndrawSecurity(_props) {
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
    viewBox: "0 0 1145.57 819.91",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 591.3,
    y1: 646.08,
    x2: 591.3,
    y2: 107.75,
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
    x1: 944.34,
    y1: 854.67,
    x2: 944.34,
    y2: 289.29,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M1127.43 551.22c-26.57 54.81-80.52 91.46-136.43 115.63-75.27 32.55-158.16 45.46-239.91 40q-21.49-1.43-42.85-4.57a540.44 540.44 0 0 1-143.27-41.72q-19.74-8.89-38.68-19.41a494.85 494.85 0 0 1-60.46-39.54q-7.23-5.52-14.26-11.32c-3.25-2.68-6.47-5.42-9.74-8.08-6.9-5.61-14-10.94-21.92-14.93a78.31 78.31 0 0 0-7.34-3.24c-25.08-9.54-54-5.94-80.11 1.5-19.86 5.66-39.22 13.41-59.06 18.94a196 196 0 0 1-26.91 5.72 143.21 143.21 0 0 1-60.46-5.31l-1.67-.52q-4.2-1.32-8.33-2.89l-1.67-.64q-4-1.54-7.83-3.31l-1.67-.76q-4-1.86-7.83-3.93c-.92-.48-1.83-1-2.73-1.49a163.67 163.67 0 0 1-39.16-30.49c-.33-.33-.64-.67-1-1-1.59-1.72-3.15-3.47-4.66-5.26-.56-.66-1.12-1.32-1.67-2q-2.69-3.28-5.19-6.71c-.25-.33-.49-.67-.73-1a144.59 144.59 0 0 1-16.86-30.49c-.14-.33-.27-.67-.39-1q-2-5.15-3.65-10.47c-.45-1.48-.88-3-1.26-4.48-.13-.44-.25-.89-.36-1.33-5.52-21.73-6.15-44.32-6.15-66.78v-7.85c.16-36.33.72-73.28 6.08-109.11 0-.25.07-.5.11-.74a340.76 340.76 0 0 1 7.31-35.82 264.25 264.25 0 0 1 12.31-36.3c12.33-29 30.26-55.39 50.17-79.85C199.35 79.12 265.12 27.45 342.1 8.11c82.95-20.83 175.14-.87 242.05 52.4 20.4 16.24 38.73 35.47 61.64 47.92 20 10.84 43.41 15.33 64.83 6.8 17.7-7.05 29.22-10.55 49.1-9.48a411.56 411.56 0 0 1 120.36 25.21c1.56.57 3.12 1.16 4.67 1.75 100.71 38.53 187.28 115.08 232.28 213.45q1.79 3.9 3.47 7.86c26.83 62.67 36.53 136.12 6.93 197.2z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 120.3,
    cy: 728.81,
    rx: 88.28,
    ry: 14.18,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 912.26,
    cy: 804.71,
    rx: 156.53,
    ry: 15.2,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 116.14,
    y: 107.75,
    width: 950.33,
    height: 538.33,
    rx: 12.49,
    ry: 12.49,
    fill: "url(#prefix__a)"
  }), React.createElement("rect", {
    x: 117.65,
    y: 115.32,
    width: 947.42,
    height: 528.97,
    rx: 12.49,
    ry: 12.49,
    fill: "#fff"
  }), React.createElement("rect", {
    x: 117.65,
    y: 115.32,
    width: 947.42,
    height: 528.97,
    rx: 12.49,
    ry: 12.49,
    fill: "#fff"
  }), React.createElement("rect", {
    x: 117.65,
    y: 115.32,
    width: 947.42,
    height: 528.97,
    rx: 12.49,
    ry: 12.49,
    fill: "#fff",
    opacity: 0.04
  }), React.createElement("path", {
    d: "M1060.26 109.25h-937.8a4.81 4.81 0 0 0-4.81 4.81v20.33h947.38v-20.33a4.81 4.81 0 0 0-4.77-4.81z",
    fill: "#5a5773"
  }), React.createElement("g", {
    "data-name": "buttons",
    fill: "#fff"
  }, React.createElement("circle", {
    cx: 136.57,
    cy: 121.82,
    r: 6.5
  }), React.createElement("circle", {
    cx: 154.07,
    cy: 121.82,
    r: 6.5
  }), React.createElement("circle", {
    cx: 171.57,
    cy: 121.82,
    r: 6.5
  })), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M195.68 181.67h254.25v21.58H195.68z"
  }), React.createElement("path", {
    fill: "#5a5773",
    opacity: 0.1,
    d: "M195.68 268.2h791.36v331.96H195.68z"
  }), React.createElement("path", {
    d: "M659.03 289.85h-13.55v-26.32c0-29.7-23.68-54.39-53.38-54.84a54.28 54.28 0 0 0-54.85 54.11v27.05h-13.52a22.62 22.62 0 0 0-22.55 22.55v108.22a22.62 22.62 0 0 0 22.55 22.55h135.3a22.61 22.61 0 0 0 22.54-22.55V312.4a22.61 22.61 0 0 0-22.54-22.55zm-59.75 70.35v38.76a8.09 8.09 0 0 1-7.5 8.12 7.91 7.91 0 0 1-8.28-7.9v-39a18 18 0 1 1 15.78 0zm30.44-70.35h-76.69V262.8a38.33 38.33 0 0 1 76.66 0z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M659.03 287.85h-13.55v-26.32c0-29.7-23.68-54.39-53.38-54.84a54.28 54.28 0 0 0-54.85 54.11v27.05h-13.52a22.62 22.62 0 0 0-22.55 22.55v108.22a22.62 22.62 0 0 0 22.55 22.55h135.3a22.61 22.61 0 0 0 22.54-22.55V310.4a22.61 22.61 0 0 0-22.54-22.55zm-59.75 70.35v38.76a8.09 8.09 0 0 1-7.5 8.12 7.91 7.91 0 0 1-8.28-7.9v-39a18 18 0 1 1 15.78 0zm30.44-70.35h-76.69V260.8a38.33 38.33 0 0 1 76.66 0z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#5a5773",
    opacity: 0.1,
    d: "M906.94 236.25h80.1v18.91h-80.1z"
  }), React.createElement("path", {
    d: "M1041.27 849.33a28.47 28.47 0 0 0-2.68-7.61l-12-17.92h.07s-1.89-9 0-13.42-6.74-15.29-6.74-15.29-1.05-2.73 1.69-6.09-1.69-13.2-1.69-13.2-2.1-20.55-2.31-23.69-1.9-20.54-1.9-20.54l-4-36.89-7.12-97.77-.13-1.83c.88-.43 1.35-.7 1.35-.7l-1.42-54.06 1.23-1.11c10.74-9.72 35.51-32.22 35.26-32.71s-3-37.57-3.32-46.85a55.83 55.83 0 0 0-4.26-19.18c-.62-1.23-2.41-9.34-3.15-12.77-.2-.94-.33-1.53-.33-1.53s-7.26-13.84-6.63-20.13 1.89-11-13.59-13.2c0 0-13-1.94-20.74-7.23a59 59 0 0 0-14.86-7.44s-4.34-8-7.36-5.29a42 42 0 0 1-2.85-8.91l-.09-.56a29.47 29.47 0 0 0 11.64-16.66c.1-.38.18-.77.27-1.15a3.25 3.25 0 0 0 .93.17c2.63 0 4.25-2.93 6.71-3.86 1-.39 2.23-.45 3-1.24a2.93 2.93 0 0 0 .66-2.21 4.51 4.51 0 0 0 0-.82 2.93 2.93 0 0 0 0-.29v.1c-.67-3.64-3.49-6.87-3.18-10.57.3-3.48 3.36-6.54 3.11-9.93a5.4 5.4 0 0 0-.07-.8v.12a8.56 8.56 0 0 0-2-3.54 11.36 11.36 0 0 0-4.12-3.46c-1.39-.61-3-.75-4.3-1.48-3.82-2.08-3.81-7.5-6.08-11.2A9.91 9.91 0 0 0 961 292c-2.84.28-5.41 1.79-8.22 2.28-3.84.68-7.75-.57-11.39-2s-7.33-3-11.24-3-8.14 2-9.32 5.69c-.63 2-.32 4.15-.8 6.18-.86 3.58-4 6.14-7.25 7.92-2 1.11-4.38 2.38-5 4.48v-.16a3.84 3.84 0 0 0-.1.51 3.75 3.75 0 0 0 0 .67c0 1.44.76 2.81 1.27 4.18a11.53 11.53 0 0 1-.06 8.06c-.74 1.9-2 3.57-2.72 5.46a10.75 10.75 0 0 0-.66 2.74v-.16a11 11 0 0 0 0 1.28 9 9 0 0 0 1 4.2 7.54 7.54 0 0 0 4.49 3.77c2 .46 3.25-1.5 5.36-1a8.42 8.42 0 0 1 1.11.35c.07.45.14.9.22 1.34a29.39 29.39 0 0 0 10.14 17.17c0 .24.08.48.11.73a67.15 67.15 0 0 1 .83 12.06s-3.15-4.61-7.47 4.29c0 0-11.27 6.5-15.16 7.24s-17.7 5.55-17.7 5.55a12.18 12.18 0 0 1-7.16 2.31c-4.31 0-7.89 9.43-7.37 14.56s-.31 8.91-4.32 9.12-1.82 8.34-1.79 8.48l-.37 1.75c-.78 3.58-2.48 11.26-3.08 12.46a56 56 0 0 0-4.27 19.18c-.31 9.28-3 46.22-3.31 46.85-.21.41 16.76 15.92 28.69 26.76l1.73 1.56-5.49 51.28a13.69 13.69 0 0 0 5.64 10c0 .6 0 1.21-.06 1.84-.24 6-.72 13.26-1.68 15.16-1.68 3.36-1.26 21.38-1.26 21.38s-1.69 36.68-3.79 40.67-2.53 12.36-1.9 14-2.11 45.69-2.11 45.69l-2.1 19.71s.63 18.86-1.27 19.28-2.95 13.42-2.95 13.42-6.73 9.22-3.79 12.57-.43 4.83-.74 5.66-6.42 4-2 15.72a3.45 3.45 0 0 0 .14.34c-4.14 5.75-17.26 24.3-16.46 27.12a7.43 7.43 0 0 0 3.5 4.2c3.09 1.85 8.39 2.71 16.82 0 14-4.51 13-7.76 13-7.76a5.94 5.94 0 0 1 5.9-5.66c5.79-.42 10.11-5.76 10.11-5.76l-.68-2.53-.93-3.5c.11-1 .82-2.75 4-3.72 4.85-1.47 3.58-10.69 3.58-10.69s-.42-9.64 1.68-10.9 1.27-17.19 1.27-17.19 2.32-11.53 5.68-19.29 7.38-53.86 7.38-53.86 2.73-22.64 5.26-29.14 4.85-24.73 4.85-24.73 15.59-30.19 15.79-36.9c0 0 2-6.29 4 .63s7.62 23.48 7.62 23.48l5.47 20.33 6.53 30.39 4.22 25.58s-.64 9.64 1 13 4 11.1 2.74 12.57 2.52 8.39 3.58 9.85 0 32.49 0 32.49 4.84 26.41 11.79 31a8.5 8.5 0 0 0 1.54.8c-.1 2.86-.2 6.69-.07 8.69a3.33 3.33 0 0 0 .22 1.31c.63.84 7.79 6.5 9.27 6.5s6.73 3.67 6.95 5.45 15.39 9.32 17.54 9.54 12.57 2.09 14-.84a4.85 4.85 0 0 0 .29-2.71zM1004 471.61l1.08.93s1.11 8.65 1.9 11.24-.16 7.63-.16 7.63a17.55 17.55 0 0 0 1.11 5.5c.94 1.89-1.9 6-1.9 6h-2.53l-.79-32.38zm-75.23-96.68v-.19c-.02.06-.03.13-.03.19zm-38.85 124.65a3.65 3.65 0 0 1-.16-2.67 8 8 0 0 0 .53-1.48 22.92 22.92 0 0 0 .58-4 .28.28 0 0 0 0-.05c-.09-.48-.9-5.12-.15-7.58s1.89-11.24 1.89-11.24l.72-.61 1.67-1.45s0-.54.12-1.43c.35 7.6.63 16 .18 16.42-.84.83-3.9 9-3.16 9.32.24.11-.09 3.38-.65 7.78a15.94 15.94 0 0 1-1.57-3.01z",
    transform: "translate(-26.97 -40.04)",
    fill: "url(#prefix__b)"
  }), React.createElement("path", {
    d: "M943.55 342.88v12.44l-25.52 12.83s-25.34-15.33-19.09-21.43c4-3.86 3.23-14.46 2.15-21.75-.63-4.24-1.36-7.35-1.36-7.35s45.52-13 38.64-3.13c-2.3 3.3-2.48 7.57-1.71 11.8 1.56 8.39 6.89 16.59 6.89 16.59z",
    fill: "#c37098"
  }), React.createElement("path", {
    d: "M873.64 464.53l-3.29 40.52s-4.93-4.47-11.31-10.29c-11.83-10.79-28.63-26.22-28.43-26.63.31-.63 3-37.39 3.29-46.63a55.8 55.8 0 0 1 4.22-19.08c.6-1.2 2.29-8.84 3-12.41.24-1.11.39-1.83.39-1.83l5.52-2.22s23 25.66 23 26.13-1.57 20.18-1.57 20.18l-1.63 1.42-.71.61s-1.1 8.61-1.88 11.19.06 7.06.15 7.54a23.25 23.25 0 0 1-.57 4 8.38 8.38 0 0 1-.53 1.47 3.67 3.67 0 0 0 .16 2.66 16.08 16.08 0 0 0 1.72 3.29zM1013.03 468.13c.24.49-24.29 22.88-34.92 32.55l-4.82 4.37-3.26-40.52h8.45s2.82-4.07 1.88-5.95a17.39 17.39 0 0 1-1.09-5.47s.93-5 .15-7.59-1.88-11.19-1.88-11.19l-1.07-.92-1.27-1.11s-1.57-19.71-1.57-20.18 23-26.13 23-26.13l5.48 2.19s.12.59.32 1.53c.74 3.41 2.51 11.48 3.12 12.71a55.8 55.8 0 0 1 4.22 19.08c.26 9.24 2.94 46 3.26 46.63zM1013.13 812.07c-1.47 2.92-11.79 1-13.92.84s-17.17-7.73-17.38-9.5-5.42-5.42-6.88-5.42-8.55-5.64-9.18-6.47a3.19 3.19 0 0 1-.21-1.3c-.22-3.43.21-12.26.21-12.26l30.25 1.67 14.7 22.11a28.52 28.52 0 0 1 2.66 7.57 5 5 0 0 1-.25 2.76z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M1013.13 812.07c-1.47 2.92-11.79 1-13.92.84s-17.17-7.73-17.38-9.5-5.42-5.42-6.88-5.42-8.55-5.64-9.18-6.47a3.19 3.19 0 0 1-.21-1.3c-.22-3.43.21-12.26.21-12.26l30.25 1.67 14.7 22.11a28.52 28.52 0 0 1 2.66 7.57 5 5 0 0 1-.25 2.76z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M1013.13 812.07c-1.47 2.92-11.79 1-13.92.84s-17.17-7.73-17.38-9.5-5.42-5.42-6.88-5.42-8.55-5.64-9.18-6.47a3.19 3.19 0 0 1-.21-1.3l9.8 6.2s6.26 4 7.93 6.37 14.83 7.3 15.92 7.4c.81.08 9.45-1.58 14.17-.88a5 5 0 0 1-.25 2.76z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M870.13 793.82s-4.28 5.32-10 5.73a5.89 5.89 0 0 0-5.84 5.63s1 3.24-12.83 7.73c-8.35 2.69-13.6 1.84-16.66 0a7.44 7.44 0 0 1-3.47-4.18c-.94-3.33 17.52-28.68 17.52-28.68l16.8-1 12 5.42 1.84 6.87z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M870.13 793.82s-4.28 5.32-10 5.73a5.89 5.89 0 0 0-5.84 5.63s1 3.24-12.83 7.73c-8.35 2.69-13.6 1.84-16.66 0a7.44 7.44 0 0 1-3.47-4.18c-.94-3.33 17.52-28.68 17.52-28.68l16.8-1 12 5.42 1.84 6.87z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M870.13 793.82s-4.28 5.32-10 5.73a5.89 5.89 0 0 0-5.84 5.63s1 3.24-12.83 7.73c-8.35 2.69-13.6 1.84-16.66 0 7.87-.82 25.26-5.79 27-7.51 2.09-2.09 4.7-7.83 6.47-7.93 1.23-.08 7.48-3.84 11.23-6.17z",
    fill: "none"
  }), React.createElement("path", {
    d: "M870.13 793.82s-4.28 5.32-10 5.73a5.89 5.89 0 0 0-5.84 5.63s1 3.24-12.83 7.73c-8.35 2.69-13.6 1.84-16.66 0 7.87-.82 25.26-5.79 27-7.51 2.09-2.09 4.7-7.83 6.47-7.93 1.23-.08 7.48-3.84 11.23-6.17z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M998.94 770.56c-1.88 4.38 0 13.35 0 13.35s-28 1.46-34.84-3.13-11.68-30.88-11.68-30.88 1-30.87 0-32.33-4.8-8.34-3.55-9.8-1-9.18-2.71-12.52-1-12.93-1-12.93l-4.18-25.46-6.46-30.24-5.49-20.24s-5.63-16.48-7.54-23.36-3.93-.63-3.93-.63c-.2 6.68-15.64 36.72-15.64 36.72s-2.3 18.15-4.8 24.61-5.22 29-5.22 29-4 45.89-7.3 53.61-5.57 19.19-5.57 19.19.84 15.86-1.25 17.11-1.75 10.85-1.75 10.85 1.25 9.17-3.55 10.64-4 4.59-4 4.59-26.7 4.38-31.08-7.31 1.67-14.8 2-15.64 3.66-2.29.74-5.64 3.75-12.51 3.75-12.51 1.05-12.93 2.92-13.35 1.26-19.19 1.26-19.19l2.08-19.61s2.72-43.81 2.09-45.48-.21-10 1.88-14 3.75-40.48 3.75-40.48-.42-17.93 1.25-21.27c1-1.89 1.42-9.16 1.66-15.09.18-4.53.22-8.28.22-8.28l23.36-8.76 30-9.59 25.24 12.1 36.93 7.09.46 6.37 7.05 97.31 4 36.71s1.67 17.31 1.88 20.44 2.29 23.58 2.29 23.58 4.38 9.8 1.67 13.14-1.67 6-1.67 6 8.61 10.93 6.73 15.31z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M938.39 314.49c-2.3 3.3-2.48 7.57-1.71 11.8a29.34 29.34 0 0 1-35.57-1.33c-.63-4.24-1.36-7.35-1.36-7.35s45.52-12.98 38.64-3.12z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M949.03 301.73a29.3 29.3 0 1 1-29.3-29.3 29.16 29.16 0 0 1 29.3 29.3z",
    fill: "#c37098"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M955.13 350.42l-9.6 170.95-52.15-10.95-10.33-68.53 10.23-92 7.7.99 13.58 1.73 13.45.83 14.58-1.62 12.54-1.4z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M955.13 351.67l-9.6 170.95-52.15-10.95-10.33-68.53 10.23-91.99 7.7.98 13.58 1.73 13.45.83 14.58-1.62 12.54-1.4z"
  }), React.createElement("path", {
    d: "M912.26 356.26l18.78.63-5.28 7.39s.37 14.93 2.88 19.21 1.77 70.4 1.77 70.4l-5 9.49-8.55-10.64.11-87.3z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M912.26 356.26l18.78.63-5.28 7.39s.37 14.93 2.88 19.21 1.77 70.4 1.77 70.4l-5 9.49-8.55-10.64.11-87.3z",
    opacity: 0.1
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M941.67 336.86l-17.52 19.4 10.01 10.43 16.59-16.17-9.08-13.66z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M941.67 335.61l-17.52 19.4 10.01 10.43 16.59-16.17-9.08-13.66z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M916.75 355.32l-17.74-17.73-1.67 9.28 8.14 20.34 11.27-11.89z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M917.37 354.07l-17.73-17.73-1.67 9.28 8.14 20.34 11.26-11.89z"
  }), React.createElement("path", {
    d: "M977.08 558.1a86.57 86.57 0 0 1-27 7.81c-17.21 2.19-28.47-19.71-28.47-19.71l-6.57 8.55c-2.09 9.08-33.9 11.37-46.83 7.93a20.69 20.69 0 0 1-7.42-3.51c.18-4.53.22-8.28.22-8.28l23.36-8.76 30-9.59 25.24 12.1 36.93 7.09zM955.13 351.68l-9.59 170.94-52.16-10.95-10.35-68.52 10.22-92 7.7 1a93.48 93.48 0 0 1-1.13 10c-1.25 5.85 6.47 47.36 6.47 47.36s14.67 46.55 21.27 39.84 16-42.14 16-42.14c6.37-13.14.11-50-.36-50.74a14.88 14.88 0 0 1-.6-3.35zM977.66 483.96l.44 16.75-4.82 4.37-3.25-40.55h7.2zM864.4 453.06a23.25 23.25 0 0 1-.57 4c0-.37 0-.58-.08-.61-.3-.08.06-1.61.65-3.39zM873.64 464.53l-3.29 40.52s-4.93-4.47-11.31-10.29l.76-7.18s2.69-17.64 3.67-26.34a16.08 16.08 0 0 0 1.72 3.29z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M901.93 336.96s-3.12-4.59-7.4 4.27c0 0-11.16 6.47-15 7.2s-17.5 5.53-17.5 5.53a12.08 12.08 0 0 1-7.09 2.29c-4.28 0-7.83 9.39-7.31 14.5s-.31 8.87-4.27 9.08-1.78 8.44-1.78 8.44l26.39 30.25s1.67 27.85.84 28.69-3.86 9-3.13 9.28-4 31.08-4 31.08l-6.36 59.77s0 10 12.94 13.45 44.77 1.17 46.82-7.91l6.57-8.56s11.26 21.91 28.47 19.72 28.17-8.45 28.17-8.45l-1.88-71.63-1.25-51.63 26.87-44.15s-7.2-13.77-6.57-20 1.87-10.95-13.46-13.14c0 0-12.93-1.93-20.55-7.2a58.74 58.74 0 0 0-14.7-7.4s-4.3-8-7.29-5.26c0 0 3 11.31 2.75 13s.47 9.33.94 10.12 6.73 37.6.36 50.74c0 0-9.35 35.43-16 42.14s-21.27-39.84-21.27-39.84-7.72-41.52-6.47-47.36 2.16-27.02 2.16-27.02z",
    fill: "#3f3d56"
  }), React.createElement("circle", {
    cx: 924.25,
    cy: 469.12,
    r: 4.59,
    fill: "#3f3d56"
  }), React.createElement("circle", {
    cx: 924.25,
    cy: 490.76,
    r: 4.59,
    fill: "#3f3d56"
  }), React.createElement("circle", {
    cx: 924.25,
    cy: 469.12,
    r: 4.59,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 924.25,
    cy: 490.76,
    r: 4.59,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M965.5 764.3s18.84 1.46 20.71 2.92-20.71-2.92-20.71-2.92zM853.33 749.49s4 5 2.3 7.3-2.3-7.3-2.3-7.3zM858.13 767.52s7.3-4.8 10.22-1.61-10.22 1.61-10.22 1.61z",
    stroke: primaryColor,
    strokeMiterlimit: 10,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M949.03 301.73a29.16 29.16 0 0 1-.94 7.41 3.33 3.33 0 0 1-1.94-3.26c.13-1.19.92-2.28.75-3.46-.25-1.82-2.45-2.56-3.61-4-1.43-1.74-1.12-4.27-1-6.52s-.45-5-2.56-5.77c-.63-.23-1.32-.25-1.93-.51-1.66-.7-2.17-2.76-3.28-4.18-2.22-2.86-6.63-2.8-10-1.44a47.53 47.53 0 0 1-4.5 1.88 5.88 5.88 0 0 1-4.71-.35c-.66-.42-1.19-1-1.87-1.42-2.26-1.36-5.22 0-7.18 1.75s-3.53 4.1-6 5.17c-1.11.5-2.48.8-3 1.88a3.94 3.94 0 0 0-.32 1.87c0 3.89.46 7.84-.35 11.65-.52 2.45-2.24 5.23-4.73 4.93a4.67 4.67 0 0 1-.91-.23 29.3 29.3 0 1 1 58.1-5.42z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M889.64 305.47c.75.17 1.46.56 2.23.66 2.49.3 4.21-2.48 4.73-4.93.81-3.81.39-7.76.36-11.65a3.81 3.81 0 0 1 .31-1.87c.57-1.08 1.94-1.38 3-1.88 2.42-1.08 4-3.38 6-5.17s4.91-3.11 7.17-1.75c.67.4 1.21 1 1.87 1.42a6 6 0 0 0 4.72.35c1.55-.46 3-1.27 4.49-1.88 3.34-1.36 7.76-1.41 10 1.43 1.11 1.43 1.62 3.48 3.28 4.18.61.26 1.3.29 1.93.52 2.11.79 2.65 3.52 2.56 5.77s-.39 4.78 1 6.52c1.16 1.42 3.36 2.16 3.61 4 .16 1.18-.62 2.28-.75 3.46a3.32 3.32 0 0 0 3.13 3.54c2.6 0 4.21-2.91 6.64-3.84 1-.39 2.21-.45 3-1.24a3.31 3.31 0 0 0 .62-2.71c-.49-3.83-3.56-7.16-3.23-11 .31-3.68 3.72-6.89 3-10.51a8.52 8.52 0 0 0-2-3.57 11.56 11.56 0 0 0-4.08-3.45c-1.39-.6-3-.74-4.27-1.47-3.78-2.07-3.77-7.47-6-11.15a9.79 9.79 0 0 0-9.12-4.54c-2.81.28-5.36 1.77-8.14 2.27-3.81.68-7.67-.57-11.28-2s-7.26-3-11.13-3-8.06 2-9.24 5.66c-.62 2-.31 4.14-.79 6.15-.84 3.57-4 6.11-7.18 7.88-2.19 1.22-4.82 2.62-5.08 5.11-.17 1.58.7 3 1.25 4.53a11.53 11.53 0 0 1-.06 8c-.73 1.89-1.95 3.55-2.69 5.43a9.75 9.75 0 0 0 .26 8 7.46 7.46 0 0 0 4.57 3.75c1.97.47 3.21-1.48 5.31-1.02z",
    fill: "#3f3d56"
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M896.6 299.02c-.52 2.45-2.25 5.23-4.74 4.93-.77-.1-1.47-.49-2.23-.66-2.09-.46-3.33 1.5-5.3 1a7.48 7.48 0 0 1-4.58-3.75 8.66 8.66 0 0 1-.93-3.27 9.13 9.13 0 0 0 .93 5.15 7.48 7.48 0 0 0 4.58 3.75c2 .46 3.21-1.5 5.3-1a22.61 22.61 0 0 0 2.23.65c2.49.31 4.22-2.47 4.74-4.92a28.89 28.89 0 0 0 .48-6.57 24.63 24.63 0 0 1-.48 4.69zM882.9 283.96a11.51 11.51 0 0 0-.66-4.83 25.53 25.53 0 0 1-1.15-3.16 4.59 4.59 0 0 0-.1.51c-.17 1.57.71 3 1.25 4.53a11.47 11.47 0 0 1 .66 2.95zM959.3 278.69c-.47 2.84-2.77 5.51-3 8.5a7.15 7.15 0 0 0 0 1.54c.5-3.49 3.59-6.58 3-10.04zM959.47 299.79a2.35 2.35 0 0 1-.57 1.12c-.74.79-2 .85-3 1.24-2.43.93-4 3.87-6.64 3.84a3.35 3.35 0 0 1-3-2.32 5.18 5.18 0 0 0-.14.66 3.32 3.32 0 0 0 3.13 3.53c2.61 0 4.21-2.91 6.64-3.83 1-.39 2.22-.45 3-1.24a3.31 3.31 0 0 0 .62-2.71c-.01-.12-.03-.2-.04-.29zM946.93 298.96c-.25-1.82-2.45-2.56-3.61-4a5.48 5.48 0 0 1-1.1-3.28c-.08 1.86-.05 3.76 1.1 5.16s2.9 2 3.46 3.44a3.21 3.21 0 0 0 .15-1.32zM942.28 288.49c.08-2.25-.46-5-2.57-5.77-.62-.23-1.31-.26-1.92-.51-1.66-.7-2.18-2.76-3.28-4.18-2.23-2.85-6.64-2.8-10-1.44-1.5.61-2.93 1.42-4.49 1.88a5.88 5.88 0 0 1-4.71-.35c-.66-.42-1.2-1-1.87-1.42-2.27-1.36-5.23 0-7.18 1.75s-3.53 4.09-6 5.17c-1.12.5-2.48.8-3.06 1.88a3.93 3.93 0 0 0-.31 1.87v1.17a2.84 2.84 0 0 1 .29-1.16c.58-1.08 1.94-1.38 3.06-1.88 2.42-1.08 4-3.38 6-5.17s4.91-3.11 7.18-1.75c.67.4 1.21 1 1.87 1.41a5.84 5.84 0 0 0 4.71.35 46.21 46.21 0 0 0 4.49-1.87c3.35-1.36 7.76-1.42 10 1.43 1.1 1.42 1.62 3.48 3.28 4.18.61.26 1.3.29 1.92.52 1.71.64 2.39 2.56 2.54 4.46z"
  })), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M893.03 298.96a7.67 7.67 0 0 1 5.78-7.17 24 24 0 0 1 13.48.61c9.49 3.14-1.2 14.44-1.2 14.44s-7.11 7-13.74 2.11a10.39 10.39 0 0 1-3.87-6 15.3 15.3 0 0 1-.45-3.99zM945.2 298.96a7.67 7.67 0 0 0-5.79-7.17 24 24 0 0 0-13.47.61c-9.49 3.14 1.2 14.44 1.2 14.44s7.1 7 13.74 2.11a10.39 10.39 0 0 0 3.87-6 15.3 15.3 0 0 0 .45-3.99z"
  }), React.createElement("path", {
    d: "M910.5 291.48v.47h17.33v-.56l-17.33.09zM916.03 296.49h.55v-1.59s1.76-1.37 4.68 0v1.42h1v-.93h-.49s.2-1.93-3.06-1.62c0 0-2.62-.25-2.56 1.41h-.6z"
  })), React.createElement("path", {
    d: "M893.03 298.31a7.67 7.67 0 0 1 5.78-7.17 24.13 24.13 0 0 1 13.48.61c9.49 3.15-1.2 14.44-1.2 14.44s-7.11 7-13.74 2.11a10.33 10.33 0 0 1-3.87-6 15.21 15.21 0 0 1-.45-3.99zM945.2 298.31a7.67 7.67 0 0 0-5.79-7.17 24.09 24.09 0 0 0-13.47.61c-9.49 3.15 1.2 14.44 1.2 14.44s7.1 7 13.74 2.11a10.33 10.33 0 0 0 3.87-6 15.21 15.21 0 0 0 .45-3.99z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M910.5 290.85v.48h17.33v-.57l-17.33.09zM916.03 295.86h.55v-1.59s1.76-1.36 4.68 0v1.43h1v-.94h-.49s.2-1.92-3.06-1.62c0 0-2.62-.24-2.56 1.41h-.6z"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M117.46 457.19h5.68v127.9h-5.68z"
  }), React.createElement("path", {
    d: "M158.84 584.7l-.36 5.76-.5 8.13-.21 3.39-.5 8.14-.22 3.39-.5 8.13-5.73 92.47a15.66 15.66 0 0 1-15.63 14.7h-29.78a15.65 15.65 0 0 1-15.62-14.7l-5.76-92.47-.5-8.13-.21-3.39-.49-8.16-.21-3.39-.5-8.13-.36-5.76a8.11 8.11 0 0 1 8.1-8.61h60.89a8.1 8.1 0 0 1 8.09 8.63z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M158.48 590.46l-.5 8.13H82.61l-.5-8.13h76.37zM157.77 601.98l-.5 8.14H83.33l-.51-8.14h74.95zM157.05 613.51l-.5 8.13h-72.5l-.51-8.13h73.51z"
  }), React.createElement("path", {
    d: "M73.44 505.13c33.08 23.93 46.86 61.37 46.86 61.37s-39.87-1.37-73-25.3S.44 479.83.44 479.83s39.91 1.37 73 25.3z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M.49 479.83s41.38 23 54.65 42 65.16 44.68 65.16 44.68",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M94.79 456.96c18 13 25.51 33.4 25.51 33.4s-21.7-.74-39.71-13.77-25.5-33.4-25.5-33.4 21.7.69 39.7 13.77z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M55.09 443.14s22.52 12.5 29.74 22.85 35.47 24.32 35.47 24.32",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M146.47 489.28c-20.69 22.73-25.06 52.43-25.06 52.43s29.16-7.15 49.84-29.88 25.06-52.44 25.06-52.44-29.16 7.15-49.84 29.89z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M196.31 459.39s-26.94 23.3-33.79 39.36-41.11 43-41.11 43",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }));
};

UndrawSecurity.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSecurity;