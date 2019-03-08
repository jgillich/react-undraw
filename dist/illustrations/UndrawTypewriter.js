function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawTypewriter = function UndrawTypewriter(_props) {
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
    viewBox: "0 0 1009.54 717.96",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 554.8,
    y1: 808.98,
    x2: 554.8,
    y2: 548.41,
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
    d: "M586.55 111.4c-64.72-2.25-126.36-23.14-185.22-46S284.17 17.21 221 5.1c-40.63-7.79-87.1-8.89-119.83 12.88-31.51 21-41.69 57.15-47.16 90.73-4.12 25.26-6.54 51.84 4.74 75.49 7.84 16.42 21.74 30.22 31.36 45.95 33.47 54.72 9.81 122.2-26.45 175.63-17 25.07-36.75 49-49.88 75.66s-19.2 57.25-7.71 84.47c11.38 27 38.51 47.24 67.9 61.49 59.69 28.94 130 37.23 198.61 41.92 151.83 10.39 304.46 5.89 456.69 1.39 56.34-1.67 112.92-3.36 168.34-12.07 30.78-4.84 62.55-12.52 84.9-31 28.36-23.53 35.39-63.38 16.38-92.88-31.88-49.49-120-61.78-142.31-114.9-12.26-29.23.33-61.8 18.16-88.91 38.24-58.16 102.33-109.19 105.7-175.67 2.32-45.67-28.49-91.4-76.13-113-49.93-22.65-119.18-19.8-156 17.69-37.95 38.56-104.61 53.41-161.76 51.43z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("g", {
    opacity: 0.2
  }, React.createElement("path", {
    d: "M248.96 627.27a24.22 24.22 0 0 1 1.5 3.57q-12 4.53-24 9.5c-.17-.29-.34-.6-.5-.91a20.44 20.44 0 0 1-2.49-10.45c.21-4.69 2.29-8.73 6-10.68s8.21-1.41 12.2 1a20.64 20.64 0 0 1 7.29 7.97z",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 322.94,
    cy: 705.95,
    rx: 13.02,
    ry: 17.05,
    transform: "rotate(-27.84 91.68 852.522)",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 313.21,
    cy: 687.53,
    rx: 13.02,
    ry: 17.05,
    transform: "rotate(-27.84 81.944 834.092)",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 303.48,
    cy: 669.1,
    rx: 13.02,
    ry: 17.05,
    transform: "rotate(-27.84 72.228 815.667)",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 293.75,
    cy: 650.68,
    rx: 13.02,
    ry: 17.05,
    transform: "rotate(-27.84 62.487 797.258)",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M88.84 456.36a63.91 63.91 0 0 1-7.62-4l27.63-21-32.59 17.53a62.46 62.46 0 0 1-24.13-43.15l55.92-.41-56.2-8.35a62.38 62.38 0 1 1 123.69 13.62 62.05 62.05 0 0 1 11.6 6.74l-28.49 41.14 34.45-36.17a62.46 62.46 0 0 1 18.46 56.49 62.38 62.38 0 1 1-86.7 45.78 62.38 62.38 0 0 1-36-68.19z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M205.35 438.44a62.12 62.12 0 0 1 6.21 40.33 62.38 62.38 0 1 1-86.7 45.78c-12.35-5.48 77.22-92.3 80.49-86.11z",
    opacity: 0.1
  })), React.createElement("g", {
    opacity: 0.2
  }, React.createElement("path", {
    d: "M691.54 496.75a31.77 31.77 0 0 0-1.38 5.2q17.42 3.91 34.85 8.49c.18-.43.36-.89.53-1.35a28.54 28.54 0 0 0 1.39-14.87c-1.19-6.4-4.82-11.56-10.31-13.55s-11.56-.37-16.58 3.76a28.59 28.59 0 0 0-8.5 12.32z",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 813.65,
    cy: 566.75,
    rx: 23.67,
    ry: 18.08,
    transform: "rotate(-70.04 701.07 589.192)",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 823.53,
    cy: 539.55,
    rx: 23.67,
    ry: 18.08,
    transform: "rotate(-70.1 709.9 562.249)",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 833.41,
    cy: 512.36,
    rx: 23.67,
    ry: 18.08,
    transform: "rotate(-70.04 720.826 534.807)",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 843.28,
    cy: 485.17,
    rx: 23.67,
    ry: 18.08,
    transform: "rotate(-70.04 730.698 507.616)",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M879.26 231.17a86.19 86.19 0 0 0 9.72-7l-42-23.55 48.17 17.9a86.75 86.75 0 0 0 25-63.94l-77 10.08 75.71-22.22a86.62 86.62 0 1 0-167.55 42.27 87 87 0 0 0-14.67 11.47l47 51.17-54.27-43.21a86.66 86.66 0 0 0-14.6 81.22 86.61 86.61 0 1 0 128 46.48 86.64 86.64 0 0 0 36.56-100.67z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M715.59 228.69a86.28 86.28 0 0 0-.86 56.67 86.61 86.61 0 1 0 128 46.48c15.91-9.86-123.82-112.28-127.14-103.15z",
    opacity: 0.1
  })), React.createElement("ellipse", {
    cx: 180.47,
    cy: 642.47,
    rx: 67.3,
    ry: 12.94,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 179.34,
    cy: 636.97,
    rx: 7.84,
    ry: 10.26,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 179.34,
    cy: 624.43,
    rx: 7.84,
    ry: 10.26,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 179.34,
    cy: 611.89,
    rx: 7.84,
    ry: 10.26,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 179.34,
    cy: 599.36,
    rx: 7.84,
    ry: 10.26,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 179.34,
    cy: 586.82,
    rx: 7.84,
    ry: 10.26,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 179.34,
    cy: 574.28,
    rx: 7.84,
    ry: 10.26,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 179.34,
    cy: 561.75,
    rx: 7.84,
    ry: 10.26,
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M208.68 475.98a36.86 36.86 0 0 0 2.91-4.3l-20.58-3.38 22.26.17a37.57 37.57 0 0 0 .72-29.74l-29.87 15.49 27.55-20.24a37.54 37.54 0 1 0-62 42 37.45 37.45 0 0 0-4.29 6.84l26.73 13.89-28.5-9.57a37.55 37.55 0 0 0 6.06 35.25 37.53 37.53 0 1 0 59 0 37.54 37.54 0 0 0 0-46.41z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M141.64 499.15a37.34 37.34 0 0 0 8 23.21 37.53 37.53 0 1 0 59 0c5.07-6.38-67-27.38-67-23.21z",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 268.41,
    y: 178.37,
    width: 483.61,
    height: 104.35,
    rx: 7.42,
    fill: "#35323e"
  }), React.createElement("path", {
    d: "M309.34 52.15s6.87 186.83-5.31 208.7h411.74s-17.49-143.71 0-208.7z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M309.34 52.15s6.87 186.83-5.31 208.7h411.74s-17.49-143.71 0-208.7z",
    opacity: 0.03
  }), React.createElement("path", {
    fill: "#35323e",
    d: "M351.51 252.89H653.3v37.49H351.51z"
  }), React.createElement("path", {
    d: "M787.67 694.19H228.31a29.82 29.82 0 0 1-29.64-33.12l11.44-103.09q1.13-10.28 1.63-20.61l2.15-69.9q.74-23.69 3.2-47.26 1.28-12.22 3-24.39l14.71-102.48a54 54 0 0 1 53.4-46.2h22.34a52.5 52.5 0 0 1 31.41 10.57c23.14 17.27 88.88 29.73 166.38 29.73s143.25-12.46 166.44-29.77a52.5 52.5 0 0 1 31.41-10.57h36.19a32.35 32.35 0 0 1 31.86 26.74l19.75 112q3 17.08 5.09 34.3 3.48 28.63 4.37 57.51l2 64.95a365.4 365.4 0 0 0 3.51 40.47l10.61 74.31a32.21 32.21 0 0 1-31.89 36.81z",
    fill: "#464353"
  }), React.createElement("rect", {
    x: 241.55,
    y: 434.88,
    width: 534.22,
    height: 229.63,
    rx: 19.96,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 275.91,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 275.91,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 275.91,
    cy: 458.93,
    rx: 15.31,
    ry: 12.81,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 294.03,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 294.03,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 294.03,
    cy: 503.61,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 304.03,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 304.03,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 304.03,
    cy: 548.29,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 265.29,
    cy: 556.41,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 265.29,
    cy: 556.41,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 265.29,
    cy: 553.6,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 322.77,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 322.77,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 322.77,
    cy: 592.96,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 271.54,
    cy: 597.34,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 271.54,
    cy: 597.34,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 271.54,
    cy: 594.52,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 364.95,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 364.95,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 364.95,
    cy: 592.96,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 409.62,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 409.62,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 409.62,
    cy: 592.96,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 450.86,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 450.86,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 450.86,
    cy: 592.96,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 496.47,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 496.47,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 496.47,
    cy: 592.96,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 537.71,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 537.71,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 537.71,
    cy: 592.96,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 578.63,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 578.63,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 578.63,
    cy: 592.96,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 623,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 623,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 623,
    cy: 592.96,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 664.55,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 664.55,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 664.55,
    cy: 592.96,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 710.47,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 710.47,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 710.47,
    cy: 592.96,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 757.65,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 757.65,
    cy: 595.77,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 757.65,
    cy: 592.96,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 346.52,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 346.52,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 346.52,
    cy: 548.29,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 389,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 389,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 389,
    cy: 548.29,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 432.74,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 432.74,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 432.74,
    cy: 548.29,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 474.6,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 474.6,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 474.6,
    cy: 548.29,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 517.4,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 517.4,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 517.4,
    cy: 548.29,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 558.33,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 558.33,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 558.33,
    cy: 548.29,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 602.69,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 602.69,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 602.69,
    cy: 548.29,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 644.87,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 644.87,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 644.87,
    cy: 548.29,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 687.98,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 687.98,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 687.98,
    cy: 548.29,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 731.09,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 731.09,
    cy: 551.1,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 731.09,
    cy: 548.29,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 337.14,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 337.14,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 337.14,
    cy: 503.61,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 380.26,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 380.26,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 380.26,
    cy: 503.61,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 421.81,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 421.81,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 421.81,
    cy: 503.61,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 463.36,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 463.36,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 463.36,
    cy: 503.61,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 505.22,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 505.22,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 505.22,
    cy: 503.61,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 546.46,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 546.46,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 546.46,
    cy: 503.61,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 590.19,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 590.19,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 590.19,
    cy: 503.61,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 631.43,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 631.43,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 631.43,
    cy: 503.61,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 675.48,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 675.48,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 675.48,
    cy: 503.61,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 718.59,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 718.59,
    cy: 506.42,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 718.59,
    cy: 503.61,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 315.9,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 315.9,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 315.9,
    cy: 458.93,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 358.39,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 358.39,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 358.39,
    cy: 458.93,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 399.31,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 399.31,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 399.31,
    cy: 458.93,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 441.49,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 441.49,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 441.49,
    cy: 458.93,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 483.04,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 483.04,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 483.04,
    cy: 458.93,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 525.53,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 525.53,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 525.53,
    cy: 458.93,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 567.08,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 567.08,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 567.08,
    cy: 458.93,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 609.25,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 609.25,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 609.25,
    cy: 458.93,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 652.68,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 652.68,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 652.68,
    cy: 458.93,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 695.16,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 695.16,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 695.16,
    cy: 458.93,
    rx: 15.31,
    ry: 12.81,
    fill: "#35323e"
  }), React.createElement("ellipse", {
    cx: 736.71,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 736.71,
    cy: 461.74,
    rx: 15.31,
    ry: 12.81,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 736.71,
    cy: 458.93,
    rx: 15.31,
    ry: 12.81,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 275.91,
    y: 625.77,
    width: 467.68,
    height: 24.68,
    rx: 9.07,
    fill: "#35323e"
  }), React.createElement("rect", {
    x: 275.91,
    y: 625.77,
    width: 467.68,
    height: 24.68,
    rx: 9.07,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 275.91,
    y: 623.89,
    width: 467.68,
    height: 24.68,
    rx: 9.07,
    fill: "#35323e"
  }), React.createElement("path", {
    d: "M679.86 331.46c0 26.4-83.56 54.67-177.77 54.67s-164-30.46-164-56.86 69.81-38.74 164-38.74 177.77 14.53 177.77 40.93z",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 762.64,
    cy: 228.52,
    rx: 10.31,
    ry: 25.46,
    fill: "#464353"
  }), React.createElement("ellipse", {
    cx: 257.79,
    cy: 228.52,
    rx: 10.31,
    ry: 25.46,
    fill: "#464353"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M265.29 222.43h497.35v7.5H265.29z"
  }), React.createElement("path", {
    fill: "#464353",
    d: "M265.29 221.18h497.35v7.5H265.29zM521.77 230.55c-4.07-1.25-11.56 23.43-11.56 23.43h22.8s-7.17-22.18-11.24-23.43zm-.32 3.12a2.19 2.19 0 1 1-2.18 2.19 2.19 2.19 0 0 1 2.19-2.19zm.26 7.06c2.67.65 7.4 12.31 7.4 12.31h-15s4.94-12.97 7.66-12.31z"
  }), React.createElement("path", {
    d: "M799.07 420.17h-582q1.28-12.22 3-24.39l14.71-102.48a54 54 0 0 1 53.4-46.2h22.34a52.5 52.5 0 0 1 31.41 10.57c23.14 17.27 88.88 29.73 166.38 29.73s143.27-12.42 166.46-29.73a52.5 52.5 0 0 1 31.41-10.57h36.19a32.35 32.35 0 0 1 31.86 26.74l19.75 112q3 17.14 5.09 34.33z",
    fill: "#fff",
    opacity: 0.03
  }), React.createElement("g", {
    "data-name": "woman"
  }, React.createElement("path", {
    d: "M585.71 639s-11.47-21-9.53-24.38a45.62 45.62 0 0 0 3.35-8.35s4.24-2.9 4.24-4.1 3.35-3.92 5.12-5.11.88-6.82 0-7.5a15.13 15.13 0 0 1-2.28-3.07s1.22-3.41 0-4.43.18-2 0-3.07a43.5 43.5 0 0 1 0-4.77 7.72 7.72 0 0 0-4.51-3.28l-.13-.54-.76-3.18s3.66-7-2.28-10.72a11.63 11.63 0 0 0-1.32-.7v-.46a29.81 29.81 0 0 0-.87-5.39c-.31-1-.71-1.65-1.24-1.5a.82.82 0 0 0-.33.19 3.63 3.63 0 0 0-.63.75 12.78 12.78 0 0 0-1.4 3.9 22.51 22.51 0 0 0-.4 2.45 13.24 13.24 0 0 0-.68 1.52c-.72 1.87-1.57 5.12 0 7.52 1.31 2 3.06 4.84 4.34 6.88v.07l.08.12-.13.09v.31l.11 1.72 1 14.85a6 6 0 0 0-.9-.19 7.39 7.39 0 0 0-1.32-.09c-.86-3.38-3.23-6.54-3.65-10.07a7.55 7.55 0 0 1-.07-1.06c0-2.23.59-4.46.54-6.68a10.11 10.11 0 0 0 0-1.23v-.34a10 10 0 0 0-5.46-7.6c-1-.51-2.13-.85-3.13-1.41-2.3-1.29-3.77-3.62-5.86-5.21a6.45 6.45 0 0 0-5.61-1.22 25.62 25.62 0 0 0-2.74.57 24.63 24.63 0 0 0-6.25 2.59c-.26.16-.53.32-.78.51a3.49 3.49 0 0 0-1.26 1.47 3.9 3.9 0 0 0-.2 1.59v1.17c-.12 6.52-7.15 11.59-7.73 18v1.67c.1 2.8 1.55 5.4 1.82 8.19v.74a12.4 12.4 0 0 1-.72 3.75 10.77 10.77 0 0 0-2.54 1c-2.13 1.37-6 3.75-7.4 8.29a12.05 12.05 0 0 0-.54 3.64 76.06 76.06 0 0 1-1.19 13 25.59 25.59 0 0 1-.75 3.2.72.72 0 0 0 0 .31l-.84 11-.16 1.94-.21 2.76s.06.17.15.45.23.76.34 1.27a6.93 6.93 0 0 1 .11 2.86 2 2 0 0 1-.6 1l-.07.08a8.47 8.47 0 0 0-.64 2.8c-.08.58-.14 1.21-.21 1.91-.41 4.34-.67 10.85-.82 16.23s-.2 9.5-.2 9.5a10.75 10.75 0 0 0 2.19 1.08 4.7 4.7 0 0 0-.17.45 20.94 20.94 0 0 0-1.33 5.6c-.35 4 .77 8.47 6.37 10.77a8.9 8.9 0 0 0 1.1.37 3.47 3.47 0 0 0 2.79-.17v.71c.06 1 .11 1.9.13 2.67.18 4.77 1.36 13.12 1.36 13.12s.41 3.41.05 4.44 0 5.11 0 5.11 1.24 2 0 3.07-1.58 6.14-1.23 6.82a.45.45 0 0 0 0 .08c.27 1.69-1.26 26.86-1.26 26.86s-1.44 3.85-2.58 7.85-2 7.93-.93 8.68a8.5 8.5 0 0 0 3.23.87v.51a14.87 14.87 0 0 1-.71 4.23c-.49.69-1 6.07-1.25 9v.32a29.33 29.33 0 0 0-1.32 3.82s-3.9 9.77-2.58 12.33a2 2 0 0 0 .49.6.74.74 0 0 0 .13.12c1.88 1.5 6.59 1.82 8.3 1.89l-.06 2.42v.17h2.23v-.06c0-.31.05-1.71.12-3.59v-1-.86a15 15 0 0 0 1-5.45 23.73 23.73 0 0 1 .86-6.32 17 17 0 0 1 1.13-3.08 14.05 14.05 0 0 0-.28-6.27 4.35 4.35 0 0 0-.8-1.41 2.26 2.26 0 0 0 0-.26v-.56a23.05 23.05 0 0 1 .52-5.23.19.19 0 0 1 0-.08c0-.15.06-.28.1-.42v-.09h.72c2.21.07 3.84.07 3.84.07s1.77-9 1.59-13v-.53a50.65 50.65 0 0 1 1.07-9.19l1.41-13.8a7.39 7.39 0 0 1 0-4.1c.44-1 1.34-3 2-4.35.29-.63.53-1.12.63-1.33v-.11a3 3 0 0 1-.63-.32c-.58-.39-1.09-1.14.63-2.24 2.65-1.71 1.77-6 1.77-6a3.07 3.07 0 0 1 .14-2.9c.92-1.36 0-6.48 0-6.48a21.12 21.12 0 0 0 1.81-4.26c.66-2 2.32-12 3.1-16.83.26-1.58.42-2.6.42-2.6v.52l.22 2.27v.3l.4 4.3s.82 11.3.31 15.73a.19.19 0 0 1 0 .08 4.88 4.88 0 0 1-.3 1.34c-.93 2.13-.76 10.56-.71 12.42v.38a6.58 6.58 0 0 0-.5 2.88 1.9 1.9 0 0 0 .32.86 2.16 2.16 0 0 1 .32 1.33v.59a11.35 11.35 0 0 1-.62 2.31s-1 2.49-.59 3.79a1.34 1.34 0 0 0 .24.46 1.13 1.13 0 0 1 .13.49c.33 2.75-.52 14.88-1 21.51-.2 2.62-.35 4.39-.35 4.39l-1.4 14.49.14.09c.16.12.46.31.86.55l-.06.44c-.2 1.4-.47 3-.76 4.26a2.68 2.68 0 0 0-.07.27 3.92 3.92 0 0 0-1.5.6c-3 5.28-1.66 9.46 0 10.68a4.25 4.25 0 0 1 1 2.49l.41 5.26v.61a1.56 1.56 0 0 0 .08.48l.13 1.59.17 2.22h1.35v-2.53h.08c2.14.08 5.58.17 7.09.05h.4a.77.77 0 0 0 .24-.07c.79-.38 2.78-6 1-7.28s-2.18-4.88-2.18-4.88c-.16-.48-.31-.93-.47-1.36a2.44 2.44 0 0 1 0-.27 22.49 22.49 0 0 1 .21-4.68 37.08 37.08 0 0 0 .47-5.59v-.52a6 6 0 0 0 .91-.29h.07a6.46 6.46 0 0 0 1.52-.9l4.95-22.16.52-2.58 3-14.65s-1.05-5.11 0-6c.39-.31.5-1.62.47-3.16 0-2.68-.47-6-.47-6s1.41-2.21 2.12-3.58 0-4.94 0-4.94l1.41-8.18a77.27 77.27 0 0 1 5.48-17.91c2.86-6 1-22.27-.83-30.93l-.15-.65 3.09-1.5.43-.2c1.45-.68 3-1.38 4.36-2h.09a32.13 32.13 0 0 1 3-1.13 4.36 4.36 0 0 1 .93-.19c2.5-.31-4.92-13.25-4.92-13.25zm-55.22 27.74h.73a7.5 7.5 0 0 0-.25.49 2.59 2.59 0 0 0-.14.29 16.48 16.48 0 0 0-.72 1.69c.08-.61.18-1.27.29-2zm-2 10.64v-.06c0-.06 0-.13-.07-.19l-.12-.39c.25-.08.51-.16.77-.26s0 .09 0 .14-.05.38-.07.57 0 .05 0 .08v.45c0 .15-.08.57-.11.85l-.24-.76c-.06-.18-.1-.32-.15-.45z",
    transform: "translate(-95.23 -91.02)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M486.25 482.54l-4.4 1.57-1.6-2.66c-1.23-2-2.93-4.83-4.18-6.86-2.21-3.57.68-9 .68-9s.51-5.44 2.38-7.14 2.38 7.14 2.38 7.14c7.47 3.39 3.47 11.38 3.47 11.38l.72 3.17z",
    fill: "#be6f72"
  }), React.createElement("path", {
    d: "M486.25 482.54l-4.4 1.57-1.6-2.66v-.23a7.7 7.7 0 0 1 5.47-1.08z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M479.13 500.42l2.21-1.87-1.11-16.82a7 7 0 0 1 9.94 2.25 43.31 43.31 0 0 0 0 4.76c.17 1-1.19 2 0 3s0 4.42 0 4.42a15.34 15.34 0 0 0 2.19 3.06c.85.68 1.7 6.29 0 7.48s-4.93 3.91-4.93 5.1-4.07 4.07-4.07 4.07l-3.59-4.74z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M431.38 602.55c-8.24-3.49-6.41-12-4.86-16.32a24.48 24.48 0 0 1 1.09-2.54l4.62-2.81s.94 2.41 1.95 5.64c2.34 7.46 5.03 19.35-2.8 16.03zM442.7 680.42a13.84 13.84 0 0 0-1.23 3.44 24.47 24.47 0 0 0-.51 5.85 22.3 22.3 0 0 0 .15 2.25l-9.18 6.31s.05-.74.14-1.83c.24-2.89.73-8.25 1.2-8.94a15 15 0 0 0 .69-4.22c.14-1.75.2-3.37.2-3.37s11.02-4.14 8.54.51zM464.36 684.98s0 1.75-.06 3.8a39 39 0 0 1-.44 5.57 22.25 22.25 0 0 0-.21 4.66c.06 2 .21 3.87.21 3.87s-9.37-8.85-8.42-9.55a4.43 4.43 0 0 0 .75-2c.28-1.24.54-2.86.73-4.25.23-1.65.37-3 .37-3z",
    fill: "#be6f72"
  }), React.createElement("path", {
    d: "M442.7 680.42a13.84 13.84 0 0 0-1.23 3.44 74.05 74.05 0 0 1-7.51-.58c.14-1.75.2-3.37.2-3.37s11.02-4.14 8.54.51zM464.36 684.98s0 1.75-.06 3.8c-2.92.74-5.92-.75-7.38-1.65.23-1.65.37-3 .37-3z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M483.55 598.13a79.17 79.17 0 0 0-5.27 17.85l-1.36 8.15s.68 3.57 0 4.93-2 3.57-2 3.57 1 8.33 0 9.18 0 5.94 0 5.94l-3.4 17.17-4.75 22.06c-4.59 3.74-10.69-1-10.69-1l1.35-14.45s2-25.32 1.19-26.34.34-4.24.34-4.24 1.19-3.06.34-4.25.17-3.74.17-3.74-.34-10.37.68-12.75 0-17.1 0-17.1l-.43-4.58-.23-2.54v-.25l-.41 2.6c-.75 4.79-2.35 14.73-3 16.78a21.15 21.15 0 0 1-1.75 4.24s.89 5.1 0 6.46a3.16 3.16 0 0 0-.13 2.89s.85 4.25-1.7 6 0 2.55 0 2.55-1.87 4.08-2.55 5.78a7.49 7.49 0 0 0 0 4.07l-1.36 13.77a50 50 0 0 0-1 9.69c.17 3.9-1.53 12.91-1.53 12.91s-13.08 0-15.1-1.53 3.38-16.48 3.38-16.48 1.53-26.17 1.19-26.85 0-5.78 1.19-6.8 0-3.06 0-3.06-.34-4.08 0-5.1a18.45 18.45 0 0 0-.06-4.42s-1.13-8.32-1.3-13.08-1-15.47-1-15.47.88-6.61 1-9.77a11.35 11.35 0 0 1 1.21-4 36.59 36.59 0 0 1 2.52-4.45s40.28-11.89 42-10.7c.44.31 1.1 2.43 1.74 5.54 1.71 8.67 3.47 24.82.72 30.82z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M483.55 598.13a79.17 79.17 0 0 0-5.27 17.85l-1.36 8.15s.68 3.57 0 4.93-2 3.57-2 3.57 1 8.33 0 9.18 0 5.94 0 5.94l-3.4 17.17-4.75 22.06c-4.59 3.74-10.69-1-10.69-1l1.35-14.45s2-25.32 1.19-26.34.34-4.24.34-4.24 1.19-3.06.34-4.25.17-3.74.17-3.74-.34-10.37.68-12.75 0-17.1 0-17.1l-.43-4.58-.23-2.54v-.25l-.41 2.6c-.75 4.79-2.35 14.73-3 16.78a21.15 21.15 0 0 1-1.75 4.24s.89 5.1 0 6.46a3.16 3.16 0 0 0-.13 2.89s.85 4.25-1.7 6 0 2.55 0 2.55-1.87 4.08-2.55 5.78a7.49 7.49 0 0 0 0 4.07l-1.36 13.77a50 50 0 0 0-1 9.69c.17 3.9-1.53 12.91-1.53 12.91s-13.08 0-15.1-1.53 3.38-16.48 3.38-16.48 1.53-26.17 1.19-26.85 0-5.78 1.19-6.8 0-3.06 0-3.06-.34-4.08 0-5.1a18.45 18.45 0 0 0-.06-4.42s-1.13-8.32-1.3-13.08-1-15.47-1-15.47.88-6.61 1-9.77a11.35 11.35 0 0 1 1.21-4 36.59 36.59 0 0 1 2.52-4.45s40.28-11.89 42-10.7c.44.31 1.1 2.43 1.74 5.54 1.71 8.67 3.47 24.82.72 30.82z",
    opacity: 0.15
  }), React.createElement("circle", {
    cx: 458.74,
    cy: 482.55,
    r: 11.73,
    fill: "#a1616a"
  }), React.createElement("path", {
    d: "M482.77 567.31c-1.35.69-2.25 1.17-2.25 1.17s-19 9-24.46 8.5c-4.19-.4-14.88-.18-19.53-.06a36.59 36.59 0 0 1 2.52-4.45s40.28-11.89 42-10.7c.39.31 1.05 2.43 1.72 5.54z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M450.58 501.27s-10.88 1.7-13.42 3.4-7.65 4.93-7.65 11.89a67.66 67.66 0 0 1-1.87 16.15c-.68 2 10.71 18.52 10.71 18.52l-4.08 25s16.33-.51 21.76 0 24.46-8.5 24.46-8.5 11.21-5.94 13.59-6.11-4.76-13.09-4.76-13.09-11-20.9-9.17-24.3a46.46 46.46 0 0 0 3.23-8.33l-2-17.33a6.67 6.67 0 0 0-5.61.85c-2.55 1.87-11.22.85-11.22.85z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M432.14 531.52l-4.25 1.19-1.18 16s1.52 4.25 0 5.61-1.87 30.42-1.87 30.42a11.09 11.09 0 0 0 10.7.85s-.85-3.23 1.7-15 2.53-17.61 2.53-17.61 0-14.61 1.19-17 0-8.33 0-8.33-2.38-3.23-2.21-4.42-6.61 8.29-6.61 8.29z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M434.18 586.52a10.83 10.83 0 0 1-7.66-.29 24.48 24.48 0 0 1 1.09-2.54l4.62-2.81s.94 2.41 1.95 5.64z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M431.89 531.52l-4.25 1.19-1.19 16s1.53 4.25 0 5.61-1.87 30.42-1.87 30.42a11.11 11.11 0 0 0 10.71.85s-.85-3.23 1.7-15 2.54-17.61 2.54-17.61 0-14.61 1.19-17 0-8.33 0-8.33-2.37-3.23-2.2-4.42-6.63 8.29-6.63 8.29z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M475.39 534.07s-2.21 19-8.67 22.6c.05 0 14.45-4.08 8.67-22.6zM442.93 535.77s8 3.91 6.12 6.62-6.12-6.62-6.12-6.62zM442.93 543.58s5.1 5.27 4.08 7.14-4.08-7.14-4.08-7.14zM484.06 499.91s2 3.4 2.18 5.61-2.18-5.61-2.18-5.61zM484.06 495.32s1-.85 3.56 0-3.56 0-3.56 0zM474.24 594.65a23.57 23.57 0 0 1-12.42-1.59l-2.15 5.48-.23-2.54c.35-2.13 1-4.41 2.38-5a20.57 20.57 0 0 0 12.42 3.65zM439.39 601.79s10.45 2.19 13.38 1.78zM440.47 604.53s4.46-.19 6.69.7zM440.98 606.37a39 39 0 0 0 6.18.83zM440.77 629.76c.2-.13 8.93-2.16 10-.7zM440.77 632.44s7.59-.89 7.78 0-7.78 0-7.78 0zM440.77 634.86s8.1-1.66 9-1.27-9 1.27-9 1.27zM441.11 691.98l-9.18 6.31s.05-.74.14-1.83a25.17 25.17 0 0 1 4.7-7.67c2.07-.53 3.38 0 4.19.94a22.3 22.3 0 0 0 .15 2.25z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M442 697.63a22.79 22.79 0 0 0-1.91 9.37 14.45 14.45 0 0 1-2 7.55 7.27 7.27 0 0 1-.64.92s-6.38 0-8.61-1.9a2.17 2.17 0 0 1-.59-.71c-1.28-2.55 2.48-12.3 2.48-12.3a27.07 27.07 0 0 1 6-11.53c7.18-1.85 5.27 8.6 5.27 8.6z",
    fill: "#35323e"
  }), React.createElement("path", {
    d: "M438.14 714.55a7.27 7.27 0 0 1-.64.92s-6.38 0-8.61-1.9c1.1-3.63 4.6-14.62 6.24-12.75s2.64 10.16 3.01 13.73z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M437.26 701.5l-.44 16.48h2.14s.34-14.44 1.3-16.46-3-.02-3-.02z",
    fill: "#35323e"
  }), React.createElement("path", {
    d: "M463.86 702.85s-9.37-8.85-8.42-9.55a4.43 4.43 0 0 0 .75-2c1.8-.32 4.88.44 7.46 7.63.06 2.05.21 3.92.21 3.92z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M465.26 712.73a1.3 1.3 0 0 1-.23.07 65.22 65.22 0 0 1-7.43 0 1.61 1.61 0 0 1-1.56-1.6v-2.16c-.11-2.51-.42-5.5-1.31-6.18-1.59-1.21-2.86-5.38 0-10.64 0 0 5.48-4.18 9.43 8.39 0 0 .38 3.59 2.1 4.87s-.24 6.87-1 7.25z",
    fill: "#35323e"
  }), React.createElement("path", {
    d: "M465.03 712.8a65.22 65.22 0 0 1-7.43 0 1.61 1.61 0 0 1-1.56-1.6v-2.16c.69-3 1.68-6.18 3-6.89-.09-.01 3.78-.45 5.99 10.65z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#35323e",
    d: "M455.38 701.77l1.02 13.7h1.31v-14.86l-2.33 1.16z"
  }), React.createElement("path", {
    d: "M458.57 463.86a23.38 23.38 0 0 0-10.46 3.36 4.34 4.34 0 0 0-2 2 6.64 6.64 0 0 0-.16 2.44c.11 7-7.73 12.35-7.48 19.37.1 2.79 1.5 5.38 1.75 8.16.43 4.63-2.31 8.9-4.94 12.74a10.53 10.53 0 0 0 7.45-2.47 56.47 56.47 0 0 1 1 28.48h3.76a2.9 2.9 0 0 1 1.1.14 2.61 2.61 0 0 1 .87.65c3.51 3.49 5.87 8.66 4.52 13.44l8-3a24 24 0 0 0 5.53-2.63 8 8 0 0 0 3.41-4.92c.21-1.22.15-2.69 1.15-3.4a6.49 6.49 0 0 1 1.58-.58c2.2-.78 3.17-3.32 3.61-5.6a32 32 0 0 0 .51-8.52c-.35-4.77-1.76-9.62-.6-14.27.66-2.61 2.12-5 2.24-7.75.19-4.45-3.29-8.29-3.81-12.72-.36-3.08.75-6.2.39-9.29a10 10 0 0 0-5.25-7.58c-1-.51-2.06-.85-3-1.4-2.22-1.29-3.63-3.61-5.64-5.2s-5.37-2.19-6.88-.12z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M458.57 463.35a23.38 23.38 0 0 0-10.46 3.36 4.34 4.34 0 0 0-2 2 6.64 6.64 0 0 0-.16 2.44c.11 7-7.73 12.35-7.48 19.37.1 2.79 1.5 5.39 1.75 8.16.43 4.64-2.31 8.9-4.94 12.74a10.53 10.53 0 0 0 7.49-2.44 56.47 56.47 0 0 1 1 28.48h3.76a2.9 2.9 0 0 1 1.1.14 2.61 2.61 0 0 1 .87.65c3.51 3.49 5.87 8.66 4.52 13.44l8-3a24 24 0 0 0 5.53-2.63 8 8 0 0 0 3.41-4.92c.21-1.22.15-2.69 1.15-3.4a6.49 6.49 0 0 1 1.58-.58c2.2-.78 3.17-3.32 3.61-5.6a32 32 0 0 0 .51-8.52c-.35-4.77-1.76-9.62-.6-14.27.66-2.61 2.12-5.05 2.24-7.75.19-4.45-3.29-8.29-3.81-12.72-.36-3.08.75-6.2.39-9.29a10 10 0 0 0-5.25-7.58c-1-.51-2.06-.85-3-1.4-2.22-1.29-3.63-3.61-5.64-5.2s-5.37-2.19-6.88-.12z",
    fill: "#a26565"
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M445.97 469.44v.47c-.01-.15 0-.31 0-.47zM475.65 485.78a43.09 43.09 0 0 0 .45-6.49 42.91 42.91 0 0 0-.45 6.49zM440.25 496.53c-.23-2.53-1.41-4.91-1.69-7.42a9.18 9.18 0 0 0-.06 1.39c.1 2.76 1.47 5.33 1.74 8.08a10 10 0 0 0 .01-2.05zM477.25 506.58a17.32 17.32 0 0 0-.42 5.07 15.67 15.67 0 0 1 .42-2.94c.66-2.61 2.12-5.05 2.24-7.75a8.69 8.69 0 0 0-.07-1.44c-.3 2.46-1.57 4.67-2.17 7.06zM442.77 506.81a10.63 10.63 0 0 1-6 2.46c-.47.72-1 1.44-1.43 2.13a10.53 10.53 0 0 0 7.43-2.42 56.42 56.42 0 0 1 2.37 15.26 56.17 56.17 0 0 0-2.37-17.43zM477.35 529.37c-.45 2.29-1.42 4.83-3.62 5.6a6.12 6.12 0 0 0-1.58.59c-1 .71-.94 2.18-1.15 3.39a8 8 0 0 1-3.41 4.92 24 24 0 0 1-5.53 2.63l-7.63 2.86a10.44 10.44 0 0 1-.37 2.27l8-3a24 24 0 0 0 5.53-2.63 8 8 0 0 0 3.41-4.92c.21-1.22.15-2.69 1.15-3.4a6.49 6.49 0 0 1 1.58-.58c2.2-.78 3.17-3.32 3.62-5.6a32.39 32.39 0 0 0 .57-7.22 33.46 33.46 0 0 1-.57 5.09zM449.54 536.06a2.76 2.76 0 0 0-.87-.65 2.9 2.9 0 0 0-1.1-.14h-3.33c-.13.71-.27 1.42-.43 2.12h3.76a2.9 2.9 0 0 1 1.1.14 2.61 2.61 0 0 1 .87.65 16.12 16.12 0 0 1 4.85 9.55c.43-4.24-1.76-8.6-4.85-11.67z"
  })), React.createElement("path", {
    d: "M430.89 549.98s3-1.28 3.72 0-3.72 0-3.72 0zM431.94 552.14s3-1.28 3.72 0-3.72 0-3.72 0z",
    opacity: 0.1
  })), React.createElement("path", {
    d: "M216.59 58.77l.27 2.1 9.13 1.29s.75-.56 1.92-1.32c2.17-1.41 5.79-3.53 8.89-4.13 4.77-.94 20-7.77 15.08-8.22s-4.39.57-4.39.57-5.4-5.3-11-.45c-4.23 3.68-13.54 7.63-17.77 9.32z",
    fill: "#efb7b9"
  }), React.createElement("path", {
    d: "M253.04 34.56a15.89 15.89 0 0 1 4.37-1.12 5.36 5.36 0 0 1 4.17 1.39c.59.61 1 1.39 1.54 2 2.78 3 8.18.75 11.53 3.07 2.06 1.42 2.7 4.12 3.43 6.52s2.06 5.05 4.52 5.56a13.41 13.41 0 0 0 3.57-.14 3.5 3.5 0 0 1 3.2 1.18c1.14 1.72-.43 4.62 1.22 5.85 1.47 1.09 4.15-.44 5.18 1.09a2.27 2.27 0 0 1-.35 2.5 17.37 17.37 0 0 0-1.68 2.1 3.19 3.19 0 0 0 3.14 4.66c1-.1 2.15-.7 3.06-.18a2.19 2.19 0 0 1 .92 1.71 4.49 4.49 0 0 1-4 4.75c-1.77.11-3.4-.85-5-1.66s-3.44-1.5-5.09-.83a8.12 8.12 0 0 0-2.05 1.45 22.6 22.6 0 0 1-6.29 3.73c-2 .78-4.35 1.26-6.28.28-2.17-1.11-3.29-3.82-5.59-4.64s-4.93.71-7.13 2-5.15 2.4-7.14.79-1.48-5.2-2.79-7.62a7.41 7.41 0 0 0-2.09-2.3c-1.47-1.14-3.14-2-4.61-3.1a7.71 7.71 0 0 1-3.16-4.42c-.43-2.19.62-4.39 1.8-6.28s2.57-3.75 3-5.94c.28-1.64 0-3.35.37-5a6.14 6.14 0 0 1 4-4.2c1.08-.37 1.28-.28 1.82-1.23a3.93 3.93 0 0 1 2.41-1.97z",
    fill: "#f86d70"
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M289.63 53.7a8.35 8.35 0 0 1 .17 2.93 7.77 7.77 0 0 1-.17-2.93zM293.77 64.75a3.15 3.15 0 0 0-.32 1.07 3.25 3.25 0 0 1 .11-2.71 17.37 17.37 0 0 1 1.68-2.1 3.29 3.29 0 0 0 .49-.95.71.71 0 0 1 .07.09 2.23 2.23 0 0 1-.35 2.5 18.62 18.62 0 0 0-1.68 2.1zM242.61 62.17c1.47 1.12 3.14 2 4.61 3.1a7.54 7.54 0 0 1 2.09 2.3c1.31 2.42.65 5.89 2.79 7.62s4.95.53 7.14-.79 4.72-2.87 7.13-2 3.42 3.53 5.59 4.64c1.93 1 4.27.5 6.28-.28a22.6 22.6 0 0 0 6.29-3.73 8.12 8.12 0 0 1 2.05-1.45c1.65-.67 3.51 0 5.09.83s3.22 1.77 5 1.66a4.52 4.52 0 0 0 4-4 3.18 3.18 0 0 1 .21.86 4.48 4.48 0 0 1-4 4.75c-1.78.11-3.41-.85-5-1.66s-3.45-1.5-5.1-.83a8.25 8.25 0 0 0-2 1.45 22.74 22.74 0 0 1-6.29 3.73c-2 .78-4.36 1.26-6.28.28-2.18-1.11-3.29-3.82-5.6-4.64s-4.93.71-7.12 2-5.15 2.39-7.14.79c-2.15-1.73-1.49-5.2-2.8-7.62a7.29 7.29 0 0 0-2.09-2.3c-1.46-1.14-3.13-2-4.61-3.1a7.65 7.65 0 0 1-3.15-4.42 5.14 5.14 0 0 1-.1-1.17 8.09 8.09 0 0 0 3.01 3.98z"
  })), React.createElement("path", {
    d: "M246.52 112.32l-3.31.71s3.27 5.37 8.3 1.85-4.99-2.56-4.99-2.56z",
    fill: "#4c4981"
  }), React.createElement("path", {
    d: "M246.52 112.32l-3.31.71s3.27 5.37 8.3 1.85-4.99-2.56-4.99-2.56z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M318.42 162.31s4.59 2.37 8.87 5.12c3.07 2 6 4.12 6.93 5.74 2.28 3.87 13.35 8.05 13.35 8.05l11 8.37c2.59.86 5.11 4 6.14 5.41.32.43.49.7.49.7l4.41-.57 2.32-3s.59-6.65-4-6.57a6.55 6.55 0 0 1-2.58-.66c-4.92-2.18-11.81-9-11.81-9s-11.71-14.63-15.21-15.11a5.74 5.74 0 0 1-1.1-.28c-3.56-1.25-8.66-5.84-8.66-5.84zM273.02 204.58c1.16 7 6.49 20.44 8.2 23.24 2.12 3.47 3.24 10.41 3.24 10.41l.62 4.82a5.75 5.75 0 0 0 .69 1.93 11 11 0 0 0 .61 1l8.82-2.71s-.51-2-1.28-4.36-1.93-5.25-3-6.33c-2.15-2.12-2.48-9.58-2.48-9.58s-1.79-14.36-2.34-16.16a24.56 24.56 0 0 1-1-5.3c-.08-1-.14-2.06-.15-3.31a68 68 0 0 0-1.39-10.66l-10.29 1.87-.27 11.49a7.7 7.7 0 0 0 .02 3.65z",
    fill: "#efb7b9"
  }), React.createElement("path", {
    d: "M364.7 194.98c.32.43.49.7.49.7l4.41-.57 2.32-3s.59-6.65-4-6.57a6.55 6.55 0 0 1-2.58-.66c-.37 2 1.86 3.64 1.86 3.64s.92.67.7 3.8c-.13 2.13-2.02 2.58-3.2 2.66z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M364.22 195.41c.29 1.07 3.07 2.65 5 3.63.95.49 1.69.83 1.84.9.45.22 2.78-2.38 3.1-4.47s5.89-8.62 5.89-8.62a23.39 23.39 0 0 0 2.07-8.16c.21-2.85-1-3.07-2.37-2.43a9.48 9.48 0 0 0-2.65 2.08 7 7 0 0 1-3.42 1.77 16.76 16.76 0 0 0-4.94 2.11c-1.35.87-2.66 1.93-2.9 2.87-.51 2.05 1.83 3.79 1.83 3.79s.92.68.71 3.8-4.19 2.63-4.16 2.73z",
    fill: "#ff6484"
  }), React.createElement("path", {
    d: "M369.22 199.04c.95.49 1.69.83 1.84.9.45.22 2.78-2.38 3.1-4.47s5.89-8.62 5.89-8.62a23.39 23.39 0 0 0 2.07-8.16c.21-2.85-1-3.07-2.37-2.43-.23 2.26-.8 6.65-2 8.94-1.34 2.72-6.98 11.47-8.53 13.84zM285.86 244.76a1.3 1.3 0 0 1-.08.17 11 11 0 0 0 .61 1l8.82-2.71s-.51-2-1.28-4.36c-3.49-1-8.49 5.13-8.49 5.13z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M285.3 251.33s7.35 2.58 10.67 2.18c2.51-.3 2.62-1.47 2.45-3.87-.06-.76-.14-1.65-.18-2.68-.17-4.25-1.88-5.1-1.88-5.1-2.8-7.35-10.87 2.51-10.87 2.51l.43.8a8.76 8.76 0 0 0-.83 4 11.37 11.37 0 0 0 .21 2.16z",
    fill: "#ff6484"
  }), React.createElement("path", {
    d: "M285.3 251.33s7.35 2.58 10.67 2.18c2.51-.3 2.62-1.47 2.45-3.87a7.77 7.77 0 0 1-6 1.73 23.76 23.76 0 0 1-7.33-2.19 11.37 11.37 0 0 0 .21 2.15z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M248.77 72.84l2.86 12.59.58 2.59 5.33.67 5.48.7 6-2.17s1.67-5.67.29-9.93a6.27 6.27 0 0 0-2.76-3.64 5.6 5.6 0 0 1-1.15-.9 4.8 4.8 0 0 1-1-1.37 5.8 5.8 0 0 1-.52-2c-.3-3.39 1.85-7.1 1.85-7.1s-12.66-4.32-11.67-1.53c.64 1.81-1.14 5-2.47 6.94-.72 1.08-1.31 1.82-1.31 1.82z",
    fill: "#efb7b9"
  }), React.createElement("circle", {
    cx: 260.22,
    cy: 57.02,
    r: 10.99,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 260.16,
    cy: 56.61,
    r: 10.99,
    fill: "#efb7b9"
  }), React.createElement("path", {
    d: "M249.59 114.62c.52 2.42 2.91 6.23 2.91 6.23l15.34 3.77 11-11.44v-.07c-.34-1.07-4.53-14.6-1.5-17.94s2-13.24 2-13.24-5.48-6.31-6.58-7.83-8.22-2.72-8.22-2.72c.35.48.68.94 1 1.37a13.84 13.84 0 0 1 1.75 3.72 5.54 5.54 0 0 1-.15 4 4.8 4.8 0 0 0-.37 1c-1.2 5.25-6.66 4.52-8.84 4-.56-.14-.9-.26-.9-.26l-5.23.17-3.28.11s1.49 25.86 1.14 27.92a3 3 0 0 0-.07 1.21z",
    fill: "#ff6484"
  }), React.createElement("path", {
    d: "M248.45 86.83l9.52-1.25h-.18a9.31 9.31 0 0 1-.9-.25l-5.23.17-3.28.11s.03.42.07 1.22zM259.12 122.51l4.13 1.01 6.49-.85 1.7-1.77-12.32 1.61zM265.98 124.19l1.87.46.77-.8-2.64.34z",
    fill: "#925978"
  }), React.createElement("path", {
    d: "M249.59 114.62c2.45.25 4.71.37 4.71.37l12.64-.47v-13.21a19 19 0 0 0-5.09-3.36c-2.2-.76-4.8-3.09-4.31-9.26 0-.35.06-.72.11-1.1a15 15 0 0 0 .11-2.07 11.1 11.1 0 0 0-3.5-8.14l-.19-.16-2.06-9.58a2.32 2.32 0 0 0-.41.05c-.72 1.08-1.31 1.82-1.31 1.82l-1.52 3.33 2.86 12.59-3.28.11s1.49 25.86 1.14 27.92a3 3 0 0 0 .1 1.16z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M253.89 115.04l12.64-.47v-13.2a18.71 18.71 0 0 0-5.06-3.39c-2.33-.81-5.1-3.37-4.2-10.37a11.47 11.47 0 0 0-3.39-10.21l-.19-.16-2.06-9.58a4.48 4.48 0 0 0-3.26 1.87 9.16 9.16 0 0 1-.76 1.06 2 2 0 0 1-2.54.76c-1.33-.59-7.06-3-8.35-.64s-1.53 16.52-1.53 16.52a10.83 10.83 0 0 1 3.72 6.12c.88 4 2.35 4.14 2.35 4.14l1.58 11.6s1.44 2.52.37 3.91",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M247.61 70.62l2.15 6.45 4.12.36-.19-.16-2.06-9.58a4.48 4.48 0 0 0-3.26 1.87 9.16 9.16 0 0 1-.76 1.06z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M216.59 58.77l.27 2.1 9.13 1.29s.75-.56 1.92-1.32c-1-.22-5.5-1.21-7.88-2-.87-.27-1.46-.5-1.48-.66s.06-.18.2-.3z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M205.88 72.39s10.34 7.85 16.75 9.12c0 0 9 2.67 12.56 5.75l3.89-14.89-2.31-1.63s-2.83 1.75-5.27 1.17-5.12-.92-5.12-.92a40.18 40.18 0 0 0-6.56-1.8c-1.74-.14-1-2.4.7-3.6a5.73 5.73 0 0 1 .73-.41 2.23 2.23 0 0 0 2.93.66 6.52 6.52 0 0 0 1.7-1.58 20.79 20.79 0 0 0 1.92-2.91s-5.39-1.15-8.08-2c-.87-.27-1.46-.5-1.48-.65-.08-.62 4.81-2.57 4.81-2.57s-4.19-2-5.89-.56c0 0 1.09.83.21 1.64s-11.62 9.05-11.62 9.05-5.33 2.61.13 6.13z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M214.77 64.77l5.72.82a5.73 5.73 0 0 1 .73-.41 2.23 2.23 0 0 0 2.93.66 6.52 6.52 0 0 0 1.7-1.58 21.55 21.55 0 0 0 1.57-2.44s-5.4-1.16-8.08-2z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M215.1 64.31l6.1.87a2.23 2.23 0 0 0 2.93.66c1.75-1 3.62-4.5 3.62-4.5s-5.39-1.15-8.08-2z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M328.57 154.63l-10.15 7.68s4.59 2.37 8.87 5.12c3.74-2.53 7.27-4.86 9.94-7-3.56-1.21-8.66-5.8-8.66-5.8zM273.02 204.58a34.68 34.68 0 0 0 7.44-1.78s1.87-.41 4.65-1.34c-.08-1-.14-2.06-.15-3.31a68 68 0 0 0-1.39-10.66l-10.29 1.87-.27 11.49a7.7 7.7 0 0 0 .01 3.73z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M254.69 157.91c2.08 3.07 7.73 16.07 7.73 16.07a54.28 54.28 0 0 0 4.3 6.63c2.25 2.84 3.81 9.2 5.52 14.29s-.51 4.13-.26 6.81 9.9-.77 9.9-.77 19.76-4.35 25.79-16.4 30.14-23 35-29.79-1.39-4-1.14-7.66-2.55-6.76-2.55-6.76-9.09-2.56-10.57-4.35-8.74-6.26-8.74-6.26-6.84-3-7.71-4-9-4.24-11.47-4.86-4.92-4.15-4.92-4.15-1.54.2-3.81-2-11.78-4.09-11.78-4.09c-16.27 11.92-27.5 10.22-27.5 10.22l-.26 2.26c-8.63 11.25.41 31.75 2.47 34.81z",
    fill: "#ff6484"
  }), React.createElement("path", {
    d: "M252.24 123.11s14 4.63 27.76-12.48c-16.27 11.92-27.5 10.22-27.5 10.22zM276.42 131.11s18.87 27.23 20 28.23-19.01-28.57-20-28.23zM267.7 128.98s13.07 20.29 12.8 23c0 .06-12.65-19.44-12.8-23zM260.09 134.59s2.41 11.35-1.22 17.77zM255.07 135.25s-.16 9.81-1.26 11.83zM287.07 126.49l17.35 6.8-6.35.83-11-7.63zM252.91 50.51c.87.57 1.59 1.5 2.62 1.63a4.06 4.06 0 0 0 2.13-.53c1.73-.75 3.69-1.33 5.48-.74 2.55.85 3.95 3.78 6.49 4.65a4.53 4.53 0 0 0 3.8-.42 4.49 4.49 0 0 0 2-2.75 5.7 5.7 0 0 0-2-5.35 11.91 11.91 0 0 0-5.39-2.45c-5.1-1.13-10.4-.75-15.61-.36a2.29 2.29 0 0 0-1.22.32c-.79.59-2.14 3.56-1.86 4.56.42 1.34 3.42.32 3.56 1.44z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M252.85 50.1c.87.57 1.59 1.5 2.63 1.63a4.09 4.09 0 0 0 2.13-.53c1.73-.75 3.69-1.33 5.47-.74 2.55.85 3.95 3.78 6.5 4.65a4.53 4.53 0 0 0 3.8-.42 4.44 4.44 0 0 0 2-2.75 5.69 5.69 0 0 0-2-5.35 11.9 11.9 0 0 0-5.4-2.45c-5.1-1.13-10.4-.75-15.6-.36a2.29 2.29 0 0 0-1.22.32c-.79.59-2.15 3.56-1.86 4.56.38 1.32 3.41.32 3.55 1.44z",
    fill: "#f86d70"
  }), React.createElement("path", {
    d: "M320.05 58.19l1.66 6.71 2.16-1.3 11.7-7.07s8.86-.32 9.55-7.45-9.85-.07-10.41.48-1.84 1.49-1.84 1.49l-10.9 6.07z",
    fill: "#efb7b9"
  }), React.createElement("path", {
    d: "M320.05 58.19l1.66 6.71 2.16-1.3c-.48-3-1.22-5.83-1.9-6.48zM262.28 102.07l2.38 14 14.12-3c-.34-1.07-4.53-14.6-1.5-17.94s2-13.24 2-13.24-5.48-6.31-6.58-7.83-8.22-2.72-8.22-2.72a5.8 5.8 0 0 1-.52-2 7.69 7.69 0 0 0-.54 1.49c0 2.56 1 4.31 3.77 5.6l.76.33c.43.17.9.33 1.4.49l.23.07c4.55 1.35 5.53 4.07 5.53 4.07a10.37 10.37 0 0 1 2.07 7.34c-.51 4.38-14.9 13.34-14.9 13.34z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M263.1 101.98l2.38 14 15.89-3.32s-.48-5.29-1.59-7.44-.89-10.51-.89-10.51c6.76-7.28 3.21-13.21 3.21-13.21s19.86-3.21 20.2-3.81 7-4.18 7-4.18 7.2-1.84 8.17-2.87a9.82 9.82 0 0 1 1.18-1.07 3.24 3.24 0 0 1 .39-.25l.53 4.59h.2a6.46 6.46 0 0 0 3.2-1.26c1.64-1.26-.43-15-2-15.51a1.9 1.9 0 0 0-.92 0 10 10 0 0 0-3.43 1.85l-.27.22-.1.08s-9 3.53-10.79 5.15-15.78 3.69-15.78 3.69-6.27 1.48-7.08.58-10.38-2.36-11.18-1-3 1.16-3 1.16c-1.58-1.81-2.67-1.11-3.34-.07a7.1 7.1 0 0 0-.84 2c0 2.79 1.22 4.61 4.53 5.93.49.2 1 .38 1.63.56 4.55 1.35 5.53 4.07 5.53 4.07a10.41 10.41 0 0 1 2.07 7.35c-.51 4.27-14.9 13.27-14.9 13.27z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M320.03 57.1a1.43 1.43 0 0 1 .51 0c1.59.49 3.66 14.25 2 15.51a6.39 6.39 0 0 1-2.79 1.21h-.24l-.53-4.59a3.24 3.24 0 0 0-.39.25v-.19a12 12 0 0 0-2.26-10.19z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M319 69.3l.53 4.59a6.43 6.43 0 0 0 3.44-1.28c1.64-1.26-.43-15-2-15.51-1.26-.39-3.47 1.18-4.35 1.85A11.92 11.92 0 0 1 319 69.3zM268.77 76.69l2.28-2.15-6-5.79a7.1 7.1 0 0 0-.84 2c0 2.8 1.21 4.62 4.56 5.94z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M252.77 49.28c.87.57 1.59 1.5 2.62 1.63a4.06 4.06 0 0 0 2.13-.53c1.73-.75 3.69-1.33 5.48-.74 2.55.85 4 3.78 6.49 4.65a4.53 4.53 0 0 0 3.8-.42 4.49 4.49 0 0 0 2-2.75 4.55 4.55 0 0 0 .11-1.22 4.68 4.68 0 0 1 0 2 4.41 4.41 0 0 1-3.36 3.3 4.55 4.55 0 0 1-2.43-.13c-2.55-.87-3.95-3.8-6.49-4.65-1.79-.59-3.75 0-5.48.74a4.06 4.06 0 0 1-2.13.53c-1-.13-1.76-1.06-2.63-1.63-.14-1.12-3.16-.1-3.54-1.44a1.51 1.51 0 0 1 0-.61c.57 1.06 3.27.22 3.43 1.27zM262.14 80.89s-1.27 3.56.34 4.75c0 0-1.76-4.7-2.79-4.6",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M340.77 46.28s-8.17 7.06-2.27 8.19 2.27-8.19 2.27-8.19z",
    fill: "#efb7b9"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M308.93 52.16l1.57 41.35 45.48-41.35h-47.05z"
  }), React.createElement("path", {
    opacity: 0.03,
    d: "M308.93 52.16l1.57 41.35 45.48-41.35h-47.05z"
  }), React.createElement("ellipse", {
    cx: 847.47,
    cy: 692.13,
    rx: 33.8,
    ry: 6.5,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 846.9,
    cy: 689.37,
    rx: 3.94,
    ry: 5.15,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 846.9,
    cy: 683.07,
    rx: 3.94,
    ry: 5.15,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 846.9,
    cy: 676.77,
    rx: 3.94,
    ry: 5.15,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 846.9,
    cy: 670.48,
    rx: 3.94,
    ry: 5.15,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 846.9,
    cy: 664.18,
    rx: 3.94,
    ry: 5.15,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 846.9,
    cy: 657.88,
    rx: 3.94,
    ry: 5.15,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 846.9,
    cy: 651.59,
    rx: 3.94,
    ry: 5.15,
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M861.64 608.5a21 21 0 0 0 1.46-2.16l-10.33-1.7 11.18.08a18.82 18.82 0 0 0 .36-14.93l-15 7.78 13.84-10.17a18.85 18.85 0 1 0-31.14 21.1 19.57 19.57 0 0 0-2.15 3.43l13.43 7-14.32-4.81a18.91 18.91 0 0 0 3 17.71 18.85 18.85 0 1 0 29.64 0 18.87 18.87 0 0 0 0-23.31z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M827.97 620.15a18.83 18.83 0 0 0 4 11.66 18.85 18.85 0 1 0 29.64 0c2.55-3.21-33.64-13.78-33.64-11.66z",
    opacity: 0.1
  }));
};

UndrawTypewriter.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawTypewriter;