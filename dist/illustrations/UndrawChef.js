function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawChef = function UndrawChef(_props) {
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
    viewBox: "0 0 943.47 819.5",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 262.65,
    y1: 854.48,
    x2: 262.65,
    y2: 218.92,
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
  }))), React.createElement("ellipse", {
    cx: 377.4,
    cy: 747.78,
    rx: 324,
    ry: 11.55,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M290.59 32.43c31.93-28.45 82.05-34.25 127.67-32 143.3 7.12 272.66 76.3 384.55 154.56 40.5 28.33 80.38 58.86 106.68 97.87 53.52 79.42 37.64 189.43-36.76 254.89-25.32 22.25-56 39.32-87.54 54.44-56 26.9-116.49 48.49-180.08 54.64-45.36 4.38-91.26.81-136.35-5.3-126.03-17.11-249.63-54.89-353.27-119.52-45.45-28.35-88.29-63.59-107-109.45S1.73 278.59 48.13 251.45c19.2-11.23 42.15-16.3 64.62-21.06 33.07-7 66.68-13.91 96.52-28.16 30.83-14.71 67.33-43.17 61.23-75.74-6.55-34.95-11.77-65.64 20.09-94.06z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 126.74,
    cy: 802.04,
    rx: 86.65,
    ry: 17.46,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 856.81,
    cy: 756.44,
    rx: 86.65,
    ry: 7.67,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#464a5f",
    d: "M256.74 160.2h256.77v56.73H256.74z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M256.74 160.2h256.77v1.47H256.74z"
  }), React.createElement("path", {
    fill: "#65617d",
    d: "M244.22 34.57h282.93v125.62H244.22z"
  }), React.createElement("path", {
    d: "M139.1 34.57h109.54v265.62H119.7V54a19.4 19.4 0 0 1 19.4-19.4z",
    fill: "#65617d"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M139.04 51.33h93.2v235.04h-93.2z"
  }), React.createElement("path", {
    fill: "#d1d9ec",
    d: "M137.57 49.86h93.2V284.9h-93.2z"
  }), React.createElement("circle", {
    cx: 230.77,
    cy: 272.93,
    r: 9.49,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 230.77,
    cy: 271.45,
    r: 9.49,
    fill: "#464a5f"
  }), React.createElement("path", {
    d: "M520.15 34.57H628.7A20.4 20.4 0 0 1 649.09 55v245.19H520.15V34.57z",
    fill: "#65617d"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M539.49 51.33h93.2v235.04h-93.2z"
  }), React.createElement("path", {
    fill: "#d1d9ec",
    d: "M538.02 49.86h93.2V284.9h-93.2z"
  }), React.createElement("circle", {
    cx: 631.23,
    cy: 272.93,
    r: 9.49,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 631.23,
    cy: 271.45,
    r: 9.49,
    fill: "#464a5f"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M267.06 51.33h100.66v100.66H267.06z"
  }), React.createElement("path", {
    fill: "#d1d9ec",
    d: "M265.59 49.86h100.66v100.66H265.59z"
  }), React.createElement("circle", {
    cx: 366.25,
    cy: 152,
    r: 6.08,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 366.25,
    cy: 150.53,
    r: 6.08,
    fill: "#464a5f"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M499.89 152H399.23V51.34h100.66z"
  }), React.createElement("path", {
    fill: "#d1d9ec",
    d: "M501.36 150.53H400.7V49.87h100.66z"
  }), React.createElement("circle", {
    cx: 400.7,
    cy: 152,
    r: 6.08,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 400.7,
    cy: 150.53,
    r: 6.08,
    fill: "#464a5f"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M381.63 34.57h4.05v125.62h-4.05zM265.59 208.09h16.95v5.16h-16.95z"
  }), React.createElement("path", {
    fill: "#53526b",
    d: "M265.59 206.61h16.95v5.16h-16.95z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M390.11 201.82h88.78v11.42h-88.78z"
  }), React.createElement("path", {
    fill: "#53526b",
    d: "M390.11 200.35h88.78v11.42h-88.78z"
  }), React.createElement("circle", {
    cx: 440.82,
    cy: 207.53,
    r: 2.21,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 440.82,
    cy: 206.06,
    r: 2.21,
    fill: "#b65256"
  }), React.createElement("circle", {
    cx: 453.47,
    cy: 207.53,
    r: 2.21,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 453.47,
    cy: 206.06,
    r: 2.21,
    fill: "#ffd77c"
  }), React.createElement("path", {
    fill: "#65617d",
    d: "M90.42 470.32h587.96v250.51H90.42z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M90.42 470.32h587.96v5.16H90.42z"
  }), React.createElement("path", {
    fill: "#65617d",
    d: "M82.68 460.74h603.44V474H82.68z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M82.68 460.74h603.44v2.21H82.68z"
  }), React.createElement("path", {
    fill: "#65617d",
    d: "M71.5 457.06h625.79v4.42H71.5z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M109.2 479.16h128.94v39.79H109.2z"
  }), React.createElement("path", {
    fill: "#d1d9ec",
    d: "M110.68 477.69h128.94v39.79H110.68z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M109.2 537h128.94v80.68H109.2z"
  }), React.createElement("path", {
    fill: "#d1d9ec",
    d: "M110.68 535.52h128.94v80.68H110.68z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M109.2 629.83h128.94v80.68H109.2z"
  }), React.createElement("path", {
    fill: "#d1d9ec",
    d: "M110.68 628.36h128.94v80.68H110.68z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M155.25 495.37h36.84v7.37h-36.84z"
  }), React.createElement("path", {
    fill: "#464a5f",
    d: "M155.25 493.9h36.84v7.37h-36.84z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M543.18 479.16h128.94v39.79H543.18z"
  }), React.createElement("path", {
    fill: "#d1d9ec",
    d: "M544.65 477.69h128.94v39.79H544.65zM544.65 530.74h128.94v173.15H544.65z"
  }), React.createElement("path", {
    fill: "#464a5f",
    d: "M589.23 493.9h36.84v7.37h-36.84z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M155.25 575.31h36.84v7.37h-36.84z"
  }), React.createElement("path", {
    fill: "#464a5f",
    d: "M155.25 573.84h36.84v7.37h-36.84z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M155.25 660.78h36.84v7.37h-36.84z"
  }), React.createElement("path", {
    fill: "#464a5f",
    d: "M155.25 659.31h36.84v7.37h-36.84z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M563.62 548.97h93.94v139.62h-93.94z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.3,
    d: "M562.15 547.5h93.94v139.62h-93.94z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M82.68 718.36h603.44v25.05H82.68z"
  }), React.createElement("path", {
    fill: "#65617d",
    d: "M82.68 719.36h603.44v25.05H82.68z"
  }), React.createElement("path", {
    fill: "#464a5f",
    d: "M250.67 490.64H533.6V673H250.67z"
  }), React.createElement("path", {
    d: "M253.98 505.38s158.78 16.21 275.19.73v14.37s-119 14.74-275.19-2.58z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M253.98 503.9s158.78 16.21 275.19.74v14.37s-119 14.73-275.19-2.58z",
    fill: "#d1d9ec"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.3,
    d: "M282.53 538.9h219.2v104.26h-219.2z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M250.67 490.64H533.6v5.53H250.67z"
  }), React.createElement("path", {
    fill: "#464a5f",
    d: "M246.25 452.7h291.77v42H246.25z"
  }), React.createElement("circle", {
    cx: 270.19,
    cy: 471.85,
    r: 10.68,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 270.19,
    cy: 470.38,
    r: 10.68,
    fill: "#d1d9ec"
  }), React.createElement("circle", {
    cx: 296.35,
    cy: 471.85,
    r: 10.68,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 296.35,
    cy: 470.38,
    r: 10.68,
    fill: "#d1d9ec"
  }), React.createElement("circle", {
    cx: 488.65,
    cy: 471.85,
    r: 10.68,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 488.65,
    cy: 470.38,
    r: 10.68,
    fill: "#d1d9ec"
  }), React.createElement("circle", {
    cx: 514.81,
    cy: 471.85,
    r: 10.68,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 514.81,
    cy: 470.38,
    r: 10.68,
    fill: "#d1d9ec"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M350.14 460.06h81.42v25.42h-81.42z"
  }), React.createElement("path", {
    fill: "#53526b",
    d: "M351.61 458.59h78.84v25.42h-78.84z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M270.19 457.39h2.95v25.97h-2.95z"
  }), React.createElement("path", {
    fill: "#53526b",
    d: "M268.72 457.39h2.95v25.97h-2.95z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M514.81 457.39h2.95v25.97h-2.95z"
  }), React.createElement("path", {
    fill: "#53526b",
    d: "M513.34 457.39h2.95v25.97h-2.95z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M496.798 461.63l2.086 2.086-18.364 18.364-2.086-2.086z"
  }), React.createElement("path", {
    fill: "#53526b",
    d: "M496.794 460.153l2.086 2.086-18.363 18.364-2.086-2.086z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M309.33 470.38v2.95h-25.97v-2.95z"
  }), React.createElement("path", {
    fill: "#53526b",
    d: "M309.34 468.9v2.95h-25.97v-2.95z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M250.67 668.69H533.6v4.3H250.67z"
  }), React.createElement("path", {
    fill: "#464a5f",
    d: "M246.25 670.17h291.77v75.03H246.25z"
  }), React.createElement("path", {
    d: "M361.6 428.53c-1.41-2.74-8.87-19.71-8.87-19.71l-12.49-32.38s-8.87-13.65-8.87-16.19-16.13-12.68-16.13-12.68-13.1-3.9-14.11-4.29-16.53-5.53-16.53-5.53-6.11-8-7-5.93l-.09-.15a20.7 20.7 0 0 1-2.33-7.52c0-.23-.07-.48-.1-.72a29.9 29.9 0 0 0 13.13-24.63 30.29 30.29 0 0 0-.21-3.8 2.21 2.21 0 0 1 .34-.18c.25-.11.19-.2 0-.29l.19-.09c.34-.15.12-.26-.21-.39.46-.2-.12-.33-.58-.54 0-.13-.05-.27-.08-.4a2.4 2.4 0 0 0 .19-.8l.12.06a3.3 3.3 0 0 0 0-1.53 1.76 1.76 0 0 1-.1.3 3.92 3.92 0 0 0-.32-1.4 4 4 0 0 0-.85-.91l-.08-.06.86-8.75c12.6-.6 14.81-22 11.94-23.23s0-3.78 0-8.94-9.51-10.92-9.51-10.92-4 2-10.17-7.94-29-11.52-30.52-8.94-11.72 6-25 9.73-10.83 19.46-8.62 22.84a19.26 19.26 0 0 1 3.1 9.33c0 2 4.2 10.32 4.2 10.32-1.33 2.89 2 18.72 3 23.22v.42a2.53 2.53 0 0 0-.13.22 2.58 2.58 0 0 0-.2 1.5 3.08 3.08 0 0 0 .22 1.63 29.79 29.79 0 0 0 10.55 22.2c0 .27 0 .54.05.82.18 3.68.29 8 .1 12.18v.63a4.81 4.81 0 0 0-3.38 2.66c-1.25 2.41-8.5 6.11-8.5 6.11s-12.7.59-13.91 2.93-19.55 10.14-19.55 10.14-9.68 5.66-8.27 12.1c.74 3.36-1.33 8.59-3.47 12.81a61.35 61.35 0 0 0-13.92-3.47l10.28 9.83-.34.53-5.85 20.68s-2 7.22-4 9 1.81 17.75 1.81 17.75-2.21 11.32-4 14.24 2.82 10.15 2.82 10.15l9.28 21.06 24.51 6.22 4.28.91c-.08.5-.16 1-.25 1.51-1.19 6.71-2.74 12.88-4.64 14.55-4.63 4.1-4.43 22.43-4.43 22.43l.2 25.95s1.61 32 .81 33.16c-.51.74.51 1.94 3.2 3-.07.49-.15 1-.22 1.47-.76 5.31-1.1 11.36.64 14a10.68 10.68 0 0 1 1.21 4.68c0 2.54 3.83 7.81 3.83 7.81s-3 21.65 2 29.06 9.27 20.87 6.85 24c0 0-4.23 9.17-2.21 13.27s0 6.44-2.63 7.41-2.39 9-2.39 9l4.81 38s2.62 7.81.41 10.54-2.22 16.38 1.21 21.07-4.87 13.35-4.87 13.35-5 7.22 3 9.56c0 0 1.61.39-1.41 3.51s-3.63 7-1.61 8.39a10.42 10.42 0 0 0 1.31.65c-.08.46-.16.94-.26 1.45-.77 4.07-2.23 9.38-4.88 11.94a85.1 85.1 0 0 0-13.2 17.59c-2.77 5.25-4 10.15-.91 12.46 7.26 5.46 16.53 7.21 22 5.07s13.1-8.78 13.1-8.78l1.82-7.61s-1.21-4.68 4.83-6.44 11.69-8 11.69-8v-10.14a41.74 41.74 0 0 0 4.24-2.76s2.82-9.95 0-13.26-3.83-4.49-.2-6.64 4.12-6.82 1.45-10.92-6.9-10.14-3.27-18.73 5-34.92 5-34.92-1.69-17.94 0-22-1.94-12.29-1.94-12.29 1.16-10.13 3.43-14.86 4-29.46 4-29.46 4-10.53 4-17.36-6.24-23.21 3-27.51c0 0 4 3.52 2.42 17.56 0 0 4.63 16.39 4.63 21.46s3.43 23.41 3.43 23.41.4 5.85 1.81 8 0 8 0 8 5.24 4.88 3.83 8 .24 10.16.24 10.16l-1.25 43.68s-3.62 18.73 4.84 30c0 0-3 16.58-4.84 17.75s6.66 11.32 6.66 11.32-2.35 6.57 2.42 6.89v10.86a23.09 23.09 0 0 0 6.65 7.41c4.43 3.12 2.62 13.85 2.62 13.85s5.64 13.66 20.56 10.73 16.93-4.29 16.12-9.17c-.29-1.78-.93-5-1.86-8.56-1.6-6.26-4.06-13.82-7-17.55-4.63-5.88-8.46-18.17-8.46-18.17s-1.82-4.1 0-5.46 1-3.9 1-3.9 1.76-5.07.17-8.19 3.05-9.56 3.05-9.56l-1.41-30 1.41-43.7s-6.25-7.22-3.63-11.51-3-10.34-3-10.34-.61-.19 1-5.07a12.15 12.15 0 0 0-.41-8.78s-3.42-12.09 2.62-21.26c0 0 2.62-12.1 3.43-18.34.56-4.34 4-20.54 6.11-30l.34-1.54c3 .16 5.24.35 5.24.35s-4.63-32.19 0-38.82-3.63-57.35-3.63-57.35-2-8.86-3.19-17.91c-.07-.51-.13-1-.2-1.54a95.36 95.36 0 0 1 11.25-.25c9.68.58 19.15-3.12 19.35-6.83s5.45-18.34 6.25-21.65 1.43-14.66.03-17.39z",
    transform: "translate(-128.27 -40.25)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M115.73 764.59v18.06s-5.44 6.22-11.27 8-4.66 6.41-4.66 6.41l-1.74 7.57s-7.39 6.6-12.63 8.74-14.18.39-21.17-5.05c-3-2.29-1.79-7.18.88-12.4a84.48 84.48 0 0 1 12.72-17.51c2.55-2.55 4-7.84 4.7-11.89.56-3 .73-5.39.73-5.39z",
    fill: "#4c495a"
  }), React.createElement("path", {
    d: "M115.73 778.07v4.58s-5.44 6.22-11.27 8-4.66 6.41-4.66 6.41l-1.74 7.57s-7.39 6.6-12.63 8.74-14.18.39-21.17-5.05c-3-2.29-1.79-7.18.88-12.4-.13 5.49 1.5 11.65 9.41 11.43a40.14 40.14 0 0 0 23.5-8.6s-.2-12.81 8.74-15.73a27.08 27.08 0 0 0 8.94-4.95z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M186.8 810.82c-14.37 2.91-19.81-10.69-19.81-10.69s1.75-10.68-2.52-13.79a22.89 22.89 0 0 1-6.41-7.38V761.1l17.48-12.43 9.46 8.37.64.56s3.69 12.24 8.16 18.09c2.83 3.71 5.2 11.24 6.75 17.48.89 3.58 1.51 6.75 1.79 8.52.78 4.85-1.16 6.21-15.54 9.13z",
    fill: "#4c495a"
  }), React.createElement("path", {
    d: "M186.8 810.82c-14.37 2.91-19.81-10.69-19.81-10.69s1.75-10.68-2.52-13.79a22.89 22.89 0 0 1-6.41-7.38v-6.92c2.77 2.93 8 8.6 9.13 11 1.55 3.3 1.75 15.35 8.93 17.48s21.17 4.08 22.34-1.36a29.73 29.73 0 0 1 2.09-6c.89 3.58 1.51 6.75 1.79 8.52.78 4.86-1.16 6.22-15.54 9.14zM83.28 761.1l32.45 3.49v9.55c-3.66 2.17-8.9 4.47-11.85 2.1-4.35-3.48-17.28-7.9-21.32-9.75.55-3.04.72-5.39.72-5.39zM185.64 759.15c-4.47-1.55-12.43 5.25-22.92 9.52a10.89 10.89 0 0 1-4.66 1v-8.61l17.48-12.43L185 757a12 12 0 0 0 .64 2.15z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M197.1 545.32s-.62 2.85-1.49 7c-2 9.44-5.36 25.58-5.89 29.9-.78 6.21-3.3 18.25-3.3 18.25-5.83 9.13-2.53 21.17-2.53 21.17a12.49 12.49 0 0 1 .39 8.74c-1.55 4.86-1 5-1 5s5.44 6 2.91 10.3 3.5 11.46 3.5 11.46l-1.36 43.5 1.4 29.96s-4.47 6.41-2.94 9.52-.17 8.16-.17 8.16.78 2.52-1 3.88 0 5.44 0 5.44c-4.47-1.55-12.43 5.24-22.92 9.52s-7-5.83-7-5.83-8.16-10.1-6.41-11.27 4.66-17.67 4.66-17.67c-8.16-11.26-4.66-29.91-4.66-29.91l1.2-43.49s-1.59-7-.23-10.11-3.69-8-3.69-8 1.36-5.82 0-8-1.75-8-1.75-8-3.3-18.26-3.3-23.31-4.47-21.36-4.47-21.36c1.56-14-2.33-17.48-2.33-17.48-8.93 4.27-2.91 20.58-2.91 27.38s-3.88 17.29-3.88 17.29-1.75 24.66-3.89 29.32-3.31 14.87-3.31 14.87 3.5 8.16 1.86 12.24 0 22 0 22-1.28 26.22-4.77 34.76.58 14.57 3.15 18.65 2.09 8.74-1.41 10.87-2.52 3.31.2 6.61 0 13.21 0 13.21-11.07 8.74-15.93 4.85-20.39-8.93-22.33-10.29-1.36-5.25 1.55-8.35 1.36-3.5 1.36-3.5c-7.77-2.33-2.91-9.52-2.91-9.52s8-8.54 4.66-13.2-3.3-18.26-1.17-21-.39-10.49-.39-10.49l-4.63-37.87s-.22-8 2.3-8.94 4.47-3.3 2.53-7.38 2.13-13.2 2.13-13.2c2.34-3.11-1.74-16.51-6.6-23.89s-1.94-28.94-1.94-28.94-3.69-5.25-3.69-7.77a10.87 10.87 0 0 0-1.17-4.66c-1.67-2.67-1.35-8.69-.62-14 .71-5.11 1.79-9.52 1.79-9.52z",
    fill: "#5f5d7e"
  }), React.createElement("path", {
    d: "M159.03 325.26l-38.3 8.94s-18.8-15.93-14.14-24.45c1.6-2.93 2.31-7.94 2.55-13.24.19-4.14.08-8.47-.09-12.13-.28-5.29-.71-9.2-.71-9.2s39.23-22.14 37.87 0a56.27 56.27 0 0 0 .26 11.07 21.13 21.13 0 0 0 2.26 7.5c2.1 3.73 4.69 3.79 4.69 3.79z",
    fill: "#fdc2cc"
  }), React.createElement("path", {
    d: "M146.47 286.22a30.08 30.08 0 0 1-37.42-1.87c-.28-5.29-.71-9.2-.71-9.2s39.23-22.14 37.87 0a56.27 56.27 0 0 0 .26 11.07z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 128.93,
    cy: 260.98,
    r: 30.1,
    fill: "#fdc2cc"
  }), React.createElement("path", {
    d: "M159.03 325.26l-38.3 8.94s-18.8-15.93-14.14-24.45c1.6-2.93 2.31-7.94 2.55-13.24a19.5 19.5 0 0 0 7 11.69c8.74 5.83 7.38 13 7.38 13l15.73-.58c-1-6.41 4.86-9.9 6.8-10.68s1-4.27 1-4.27l1.68-11.92c2.1 3.73 4.69 3.79 4.69 3.79zM197.1 545.32s-.62 2.85-1.49 7c-4.23-.22-9.82-.39-12.3.18-4.27 1-21.37 1.36-21.37 1.36l-42.34 1.5v-1.3a124.83 124.83 0 0 0-14.56 1c-7.19 1-18.45-.39-25.64-1.56a27.58 27.58 0 0 1-6.45-1.74c.71-5.11 1.79-9.52 1.79-9.52z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M193.8 421.98c-.62 3.63-.17 9.65.61 15.58 1.17 9 3.08 17.83 3.08 17.83s8 50.5 3.49 57.1 0 38.65 0 38.65-13.4-1.16-17.67-.19-21.37 1.36-21.37 1.36l-42.34 1.5v-1.31a124.83 124.83 0 0 0-14.56 1c-7.19 1-18.45-.39-25.64-1.55s-10.1-3.5-9.32-4.66-.78-33-.78-33l-.19-25.83s-.2-18.26 4.27-22.34c1.82-1.66 3.32-7.8 4.47-14.49 1.64-9.67 2.52-20.47 2.52-20.47l-29.52-79-.58-1.56s8.54-13.21 7.18-19.62 8-12 8-12 17.67-7.77 18.84-10.1 13.4-2.91 13.4-2.91 7-3.69 8.19-6.08a4.61 4.61 0 0 1 3.26-2.65 19.56 19.56 0 0 0 7 11.84c8.74 5.82 7.38 13 7.38 13l15.73-.58c-1-6.41 4.86-9.91 6.8-10.68s1-4.28 1-4.28l1.82-12.57c.84-2.09 6.72 5.91 6.72 5.91s15 5.11 15.93 5.5 13.6 4.27 13.6 4.27 15.53 10.1 15.53 12.62 8.55 16.13 8.55 16.13-.1.54-.29 1.53c-2.03 10.59-13.69 73.7-15.11 82.05z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M131.65 390.52s-33.6-8.93-36.91-11.07-22.72 10.29 1 27.19c0 0 29 6 36.73 0s-.82-16.12-.82-16.12z",
    fill: "#fdc2cc"
  }), React.createElement("path", {
    d: "M204.28 337.3l4.08.2 12 32.24s7.19 16.9 8.55 19.62.78 14 0 17.28-5.83 17.87-6 21.56-9.32 7.38-18.65 6.8-31.07 2.33-31.07 2.33-23.23-2.43-37.49 4.85c0 0-9.12-18.84-8.15-54 0 0 16.12-1 20.2.58s23.89 6 26.41 3.69 14 4.28 14 4.28a9.82 9.82 0 0 0 0-8.16c-1.94-4.66-5.24-19.23-1-23.89s17.12-27.38 17.12-27.38z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M194.41 437.56c-9.64.65-20.42 2.1-20.42 2.1s-23.23-2.43-37.49 4.85c0 0-9.13-18.84-8.16-54 0 0 16.12-1 20.2.58s23.89 6 26.42 3.69 14 4.28 14 4.28a9.86 9.86 0 0 0 0-8.16c-1.94-4.66-5.24-19.23-1-23.89s17.09-27.39 17.09-27.39l3.79.18c-2 10.71-13.63 73.82-15.05 82.17-.61 3.64-.16 9.66.62 15.59z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M205.06 338.08l4.08.2 12 32.24s7.19 16.89 8.55 19.61.77 14 0 17.29-5.83 17.87-6 21.56-9.33 7.38-18.65 6.79-31.07 2.34-31.07 2.34-23.24-2.43-37.49 4.85c0 0-9.13-18.84-8.16-54 0 0 16.12-1 20.2.58s23.89 6 26.42 3.69 14 4.27 14 4.27a9.83 9.83 0 0 0 0-8.15c-1.94-4.67-5.24-19.23-1-23.89s17.12-27.38 17.12-27.38z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#dfe6f5",
    d: "M168.922 412.418l-4.846-3.001 27.01-43.614 4.846 3.001z"
  }), React.createElement("ellipse", {
    cx: 328.21,
    cy: 397.09,
    rx: 16.42,
    ry: 11.51,
    transform: "rotate(-58.23 227.979 492.133)",
    fill: "#dfe6f5"
  }), React.createElement("ellipse", {
    cx: 328.21,
    cy: 397.09,
    rx: 11.78,
    ry: 8.26,
    transform: "rotate(-58.23 227.979 492.133)",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#53526b",
    d: "M155.116 434.715l-4.846-3 16.806-27.138 4.846 3z"
  }), React.createElement("path", {
    d: "M121.73 433.64l11.85-3.3s58.46 1.55 38.84-22.53c0 0-10.29-9.91-31.85-1.95s-27.58 8.94-27.58 8.94z",
    fill: "#fdc2cc"
  }), React.createElement("circle", {
    cx: 113,
    cy: 329.73,
    r: 2.33,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 153.01,
    cy: 328.37,
    r: 2.33,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 113,
    cy: 328.95,
    r: 2.33,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 116.31,
    cy: 361.97,
    r: 2.33,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 154.18,
    cy: 359.64,
    r: 2.33,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 116.31,
    cy: 361.19,
    r: 2.33,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 153.21,
    cy: 472.11,
    r: 2.33,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 122.53,
    cy: 472.11,
    r: 2.33,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 153.21,
    cy: 471.33,
    r: 2.33,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 124.86,
    cy: 511.13,
    r: 2.33,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 154.18,
    cy: 508.8,
    r: 2.33,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 124.86,
    cy: 510.36,
    r: 2.33,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 122.53,
    cy: 471.33,
    r: 2.33,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 154.18,
    cy: 508.02,
    r: 2.33,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 153.01,
    cy: 327.59,
    r: 2.33,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 154.18,
    cy: 358.86,
    r: 2.33,
    fill: "#fff"
  }), React.createElement("path", {
    d: "M157.67 440.63s.39 53.22 1.56 62.73c0 0 .42-60.22-1.56-62.73zM167.58 465.3c-.8 0 15.92 62.34 16.7 66.81s-12.04-66.81-16.7-66.81zM180.78 455.2c0 .58 9.33 33.79 14 35.54s-14-35.54-14-35.54zM217.49 390.52s-19.81.88-20.39 3.74 20.39-3.74 20.39-3.74zM182.53 643.75s-14.18 6-12 6.4 12-6.4 12-6.4zM153.2 634.85c-.55-1.24 9.52 5 9.52 5.83s-8.74-4.08-9.52-5.83zM166.41 655.24s11.07-.55 11.85 3.71-11.85-3.71-11.85-3.71zM86.78 655.22s12-2.35 13 0-13 0-13 0zM91.25 728.47s.79 9.9-2.13 12.23 2.13-12.23 2.13-12.23zM89.78 749.44c3.8.39 23.8-3.11 23.61 0s-23.61 0-23.61 0zM181.56 737.4s-6.82-1-5.16 3.55zM54.73 349.75h-3.69l-5.63 20.59s-1.94 7.19-3.88 8.94 1.74 17.67 1.74 17.67-2.13 11.27-3.88 14.18 2.72 10.1 2.72 10.1l8.93 21 23.7 6.22s41.76 9.13 43.7 10.49 3.69-.59 5-13.21 5.05-37.1 8-38.26c0 0-23.31 2.52-25.25 2.13s-11.26.2-11.26.2-12.24-.78-14.18.39 2.52-5.64 2.52-5.64a18.74 18.74 0 0 0 0-9.51c-1.35-5.29-2.12-64.73-28.54-45.29z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M130.67 409.75c-2.91 1.16-6.6 25.64-8 38.26s-3.11 14.57-5 13.21c-1.58-1.11-29.41-7.34-39.81-9.64 1.64-9.67 2.52-20.47 2.52-20.47l-29.52-79h3.11c26.41-19.43 27.19 40 28.55 45.25a18.74 18.74 0 0 1 0 9.51s-4.47 6.8-2.53 5.64 14.18-.39 14.18-.39 9.32-.58 11.27-.19 25.23-2.18 25.23-2.18z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M53.96 350.51h-3.69l-5.64 20.59s-1.94 7.18-3.88 8.93 1.75 17.72 1.75 17.72-2.14 11.26-3.89 14.18 2.72 10.09 2.72 10.09l8.94 21 23.69 6.22s41.76 9.12 43.7 10.48 3.69-.58 5-13.2 5-37.1 8-38.26c0 0-23.3 2.52-25.24 2.13s-11.27.2-11.27.2-12.24-.78-14.18.38 2.53-5.64 2.53-5.64a18.73 18.73 0 0 0 0-9.51c-1.35-5.3-2.13-64.73-28.54-45.31z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M66.58 420.82s-10.68 20.2-12.62 17.87 12.62-17.87 12.62-17.87zM55.51 409.32s-9.9 8.2-5.24 10.33 5.24-10.33 5.24-10.33zM64.83 399.26c.78.2 14.38 2.9 14.57 4.07s-14.57-4.07-14.57-4.07zM159.12 256.98a2 2 0 0 0-1.33 2.08c-.79.7-1.91-.12-2.55-1s-1.39-2-2.38-1.86a8.36 8.36 0 0 0-1.36.57c-1.55.49-2.86-1.33-3.73-2.93l-4.55-8.41c-3 1.77-6.63-.08-9.64-1.91s-6.6-3.68-9.65-1.92c-4.47 2.58-4.63 11.18-9.26 13.3-1.49.69-3.22.54-4.61 1.48s-2.1 2.73-2.72 4.44a4.64 4.64 0 0 1-1.52 2.51 3.28 3.28 0 0 1-1.57.38 6.68 6.68 0 0 1-4-.57 3.41 3.41 0 0 1-1.4-4 1.71 1.71 0 0 1 .13-.23 14 14 0 0 0 1.33-1.92c.47-1.23-.2-2.67 0-4 .24-2.28 2.66-3.49 3.07-5.73.17-.88 0-1.82.15-2.7a3.57 3.57 0 0 1 .1-.35l-1.42 1c1.59-1.85 2.39-4.43 3.55-6.69a20.61 20.61 0 0 1 12.57-10.23c5.07-1.47 10.42-1.07 15.53.18a51.33 51.33 0 0 1 13.83 5.69 13.85 13.85 0 0 1 4 3.28 25.08 25.08 0 0 1 2.38 4.4c1.51 3.12 5.63 6 2.35 6.45-2.73.36-.24 2.27 1.19 3.56a3.73 3.73 0 0 1 .82.91 3.2 3.2 0 0 1-.17 3.11c-.62.63 1.62.77.86 1.11z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M159.12 256.21a2 2 0 0 0-1.33 2.08c-.79.7-1.91-.13-2.55-1s-1.39-2-2.38-1.86a8.36 8.36 0 0 0-1.36.57c-1.55.5-2.86-1.33-3.73-2.93-1.52-2.8-3-5.61-4.55-8.4-3 1.76-6.63-.09-9.64-1.92s-6.6-3.68-9.65-1.92c-4.47 2.58-4.63 11.18-9.26 13.31-1.49.68-3.22.53-4.61 1.47s-2.1 2.73-2.72 4.45a4.61 4.61 0 0 1-1.52 2.5 3.29 3.29 0 0 1-1.57.39 6.75 6.75 0 0 1-4-.57 3.43 3.43 0 0 1-1.4-4 1.71 1.71 0 0 1 .13-.23c.39-.68 1-1.16 1.33-1.92.47-1.23-.2-2.67 0-4 .24-2.29 2.66-3.49 3.07-5.74.17-.88 0-1.82.15-2.7a3.37 3.37 0 0 1 .1-.34l-1.42 1c1.59-1.86 2.39-4.44 3.55-6.69a20.63 20.63 0 0 1 12.57-10.24c5.07-1.47 10.42-1.07 15.53.18a51 51 0 0 1 13.83 5.7 13.65 13.65 0 0 1 4 3.27 25.08 25.08 0 0 1 2.38 4.4c1.51 3.13 5.63 6 2.35 6.45-2.73.37-.24 2.28 1.19 3.57a3.56 3.56 0 0 1 .82.9 3.2 3.2 0 0 1-.17 3.11c-.62.65 1.62.76.86 1.11z",
    fill: "#865a61"
  }), React.createElement("path", {
    d: "M157.54 251.01l-.31 3.27s-32.6-41.32-58 5.34c0 0-.12-.57-.33-1.53.39-.68 1-1.16 1.33-1.92.47-1.23-.2-2.67 0-4 .24-2.29 2.66-3.49 3.07-5.74.17-.88 0-1.82.15-2.7a3.37 3.37 0 0 1 .1-.34l-1.42 1c1.59-1.86 2.39-4.44 3.55-6.69a20.63 20.63 0 0 1 12.57-10.24c5.07-1.47 10.42-1.07 15.53.18a51 51 0 0 1 13.83 5.7 13.65 13.65 0 0 1 4 3.27 25.08 25.08 0 0 1 2.38 4.4c1.51 3.13 5.63 6 2.35 6.45-2.72.35-.23 2.29 1.2 3.55z",
    opacity: 0.1
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M158.34 255.75a1.61 1.61 0 0 0-.37 1.35c-.79.7-1.9-.13-2.54-1s-1.4-2-2.38-1.86a8 8 0 0 0-1.36.57c-1.56.5-2.87-1.33-3.74-2.93l-4.54-8.41c-3 1.77-6.63-.08-9.64-1.91s-6.61-3.68-9.65-1.92c-4.47 2.58-4.63 11.18-9.26 13.3-1.5.69-3.23.54-4.61 1.48s-2.11 2.73-2.72 4.44a4.7 4.7 0 0 1-1.52 2.51 3.22 3.22 0 0 1-1.57.38 6.66 6.66 0 0 1-4-.56 3.69 3.69 0 0 1-1.52-2.14 3.5 3.5 0 0 0 1.52 3.69 6.74 6.74 0 0 0 4 .57 3.46 3.46 0 0 0 1.57-.38 4.74 4.74 0 0 0 1.52-2.51c.61-1.72 1.35-3.51 2.72-4.45s3.11-.79 4.61-1.47c4.63-2.12 4.79-10.72 9.26-13.3 3-1.77 6.63.09 9.65 1.92s6.6 3.67 9.64 1.91l4.54 8.4c.87 1.6 2.18 3.43 3.74 2.93a8.85 8.85 0 0 1 1.36-.56c1-.13 1.72 1 2.38 1.85s1.75 1.72 2.54 1a2 2 0 0 1 1.33-2.08c.61-.24-.68-.39-.96-.82zM155.8 248.02a2.75 2.75 0 0 1 .74-.18c1.44-.2 1.45-.87.88-1.82a2.3 2.3 0 0 1-.88.26c-1.56.21-1.42.93-.74 1.74zM158.78 254.53a3.54 3.54 0 0 0 0-1.52 2.28 2.28 0 0 1-.39.85c-.26.31.04.51.39.67zM100.45 252.29a2.51 2.51 0 0 0 0 .27 8.74 8.74 0 0 0 .15 2.09 7.56 7.56 0 0 0-.15-2.36zM103.61 242.81a12.08 12.08 0 0 1-1.31 1.95l1.26-.86a6.58 6.58 0 0 1 .05-1.09z"
  })), React.createElement("path", {
    d: "M99.27 258.84s-4.69-21-3.2-24.32c0 0-4-8.3-4-10.28a19.68 19.68 0 0 0-3-9.29c-2.13-3.36-4.47-19 8.31-22.73s22.59-7.12 24.08-9.69 23.44-1 29.41 8.9 9.8 7.9 9.8 7.9 9.16 5.74 9.16 10.88-2.77 7.71 0 8.89.64 22.54-11.51 23.13l-1.06 11.27s-32.63-41.32-57.99 5.34z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M100.67 196.3s-2.82 16.51 2.33 22zM113.87 192.51s-7.18 17.68-5.43 21.08zM120.09 186.88s-4.86 23-2.53 24.86zM128.44 193.09s-6 14.77-3.59 16.8zM139.8 194.84s-7.09 12-5.63 14.18zM154.37 206.59s-7.58 2-6 4.47zM161.56 219.12s-6.8 3.3-5.54 5.05zM96.07 234.52s43.42-17.63 62.22 7.71c0 0-22.82-19.4-62.22-7.71z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#53526b",
    d: "M80.39 379.43l6.05-6.12 17.1 16.91-6.05 6.12-15.73-15.55-1.37-1.36z"
  }), React.createElement("path", {
    d: "M40.73 340.2s26.47 2.25 51.12 30l-10.27 10.39z",
    fill: "#dfe6f5"
  }), React.createElement("path", {
    d: "M120.12 389.8s-25.45-9.28-27.95-11.5-17.22 10.69.73 28.24c0 0 22 6.25 27.82 0s-.6-16.74-.6-16.74z",
    fill: "#fdc2cc"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M858.05 511.12h5.17v116.44h-5.17z"
  }), React.createElement("path", {
    d: "M895.73 627.2l-.33 5.25-.45 7.4-.19 3.08-.46 7.41-.2 3.09-.46 7.4-5.21 84.19a14.27 14.27 0 0 1-14.24 13.38h-27.1a14.26 14.26 0 0 1-14.23-13.38l-5.22-84.19-.46-7.4-.19-3.09-.47-7.41-.18-3.08-.46-7.4-.33-5.25a7.38 7.38 0 0 1 7.37-7.84h55.45a7.38 7.38 0 0 1 7.36 7.84z",
    fill: "#65617d"
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M895.4 632.45l-.46 7.4h-68.61l-.46-7.4h69.53zM894.75 642.93l-.46 7.41h-67.31l-.46-7.41h68.23zM894.09 653.43l-.45 7.4h-66.01l-.46-7.4h66.92z"
  }), React.createElement("path", {
    d: "M817.97 554.75c30.12 21.79 42.66 55.87 42.66 55.87s-36.29-1.24-66.41-23-42.66-55.87-42.66-55.87 36.29 1.22 66.41 23z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M751.56 531.75s37.67 20.91 49.75 38.22 59.32 40.68 59.32 40.68",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M837.41 510.86c16.39 11.86 23.22 30.41 23.22 30.41s-19.75-.68-36.15-12.53-23.22-30.41-23.22-30.41 19.76.67 36.15 12.53z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M801.26 498.33s20.47 11.42 27.08 20.8 32.29 22.14 32.29 22.14",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M884.45 540.33c-18.83 20.69-22.81 47.74-22.81 47.74s26.55-6.52 45.38-27.21 22.81-47.74 22.81-47.74-26.55 6.51-45.38 27.21z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M929.83 513.12s-24.53 21.21-30.76 35.83-37.43 39.12-37.43 39.12",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }));
};

UndrawChef.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawChef;