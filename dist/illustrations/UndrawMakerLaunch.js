function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawMakerLaunch = function UndrawMakerLaunch(_props) {
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
    viewBox: "0 0 1140.56 787.27",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 852.39,
    y1: 835.88,
    x2: 852.39,
    y2: 338.33,
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
    d: "M8.76 414.46c20.16-32.93 65.75-27.19 98.08-10s64.59 42.85 100.17 37.92c30-4.16 54.6-30.32 67.89-60.5s17.19-64.21 20.93-97.54q7.05-62.81 14.09-125.7c1.72-15.33 3.75-31.51 12.37-43.64 11.39-16 32.27-20.92 50.13-16.11s33.09 17.71 46.12 32.1c41.74 46.08 65.39 108.37 101.88 159.65 7.43 10.44 15.82 20.76 26.92 25.8 16 7.25 34.37 2.12 50-5.95 51-26.29 85.26-79.94 118.93-130 16.38-24.33 36.35-50.35 63.6-53 28.67-2.85 53.56 21.58 70.41 47.45 54.08 83.24 65.67 196.88 131 269.48 8.11 9 17.06 17.32 27.37 22.91a70.65 70.65 0 0 0 10.6 4.65c57 19.73 76 98.93 33.84 145.89-.91 1-1.84 2-2.78 3-6.26 6.61-13.35 12.86-21.81 14.83-7.87 1.82-16-.28-23.8-2.55-49.86-14.55-99.12-36.79-150.67-35.71-50.16 1-97.74 24.17-147.34 32.51-33.35 5.61-67.28 4.49-101 3.28q-168.46-6.06-336.85-14.1c-55.72-2.56-111.46-5-167.17-7.85-42.92-2.23-70.26-7.14-75.24-56.95-4.36-43.62-43.52-97.63-17.67-139.87z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 789.9,
    cy: 749.54,
    rx: 269.99,
    ry: 37.73,
    fill: "#30374e"
  }), React.createElement("path", {
    d: "M148.74 586.77s13.2-3 21.85 5.87c0 0-5.56 5-18.64-.54zM147.28 586.64s-7.82 11.08-2.86 22.45c0 0 6.76-3.25 6.57-17.45zM138.48 569.94s4.69-10.15 27 2.12c0 0-2.4 6.78-11.88 6.88s-12.32-4.01-15.12-9zM137.06 569.32s-11.17-.52-10.54 24.92c0 0 7.13 1 11.58-7.38s2.09-12.71-1.04-17.54zM129.28 549.52s5-17.68 28.47-6.88c0 0-4.1 16.19-25.8 12.64zM120.57 524.18s10.58-18.24 32.49-3.44c0 0-6.19 16.87-30.29 9.55zM116.43 499.78s12.63-16.95 34.36-2.31c0 0-12.06 14.94-34.09 6.4zM112.69 476.06s12.76-17.66 33.59-3.15c0 0-14.68 15.83-33.33 7.07zM112.51 454.8s13.15-22.53 32.65-9.17c0 0-14.42 19.57-32.37 13.26zM114.28 429.82s14-22.4 33.09-7.18c0 0-17.1 19.75-32.87 11.15zM117.91 407.36s17-21.31 33.55-14.37c0 0-17.68 22.6-34 19.76zM122.91 385.96s19.54-26 32.37-18.62c0 0-14.31 20.09-33.58 23.35zM130.53 361.02s17.17-21.32 31-17.24c0 0-14.45 21.89-33.1 23.68zM137.38 337.71s19.18-20.6 28.31-17.82c0 0-13.35 22.36-28.92 22.15zM144.15 316.15s16.09-24.15 25.82-23c0 0-9.31 21.19-25.66 25.33zM151.14 287.24s14.39-18.66 22.81-19.18c0 0-10.71 24.34-23.07 25zM155.14 268.03l12.58-37.69s3 33.1-14 44.62zM158.53 227.17s.44-30.79-1.33-33.17c0 0 12.47 24.74 2.14 46.71zM128.64 549.15s-16.26-8.62-24.77 15.73c0 0 14.5 8.28 27-9.81zM120 523.23s-19.72-7.45-27.35 17.88c0 0 15.47 9.15 29.51-11.76zM115.64 501.31s-14.79-15.11-34.36 2.33c0 0 13.94 13.19 34.63 1.79zM112.22 476.1s-15-15.81-33.71 1.36c0 0 16.66 13.73 34 2.55zM112.55 455.4s-11.36-23.47-31.83-11.67c0 0 12.86 20.63 31.24 15.74z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M115.45 429.64s-11.33-23.9-32.06-11.07c0 0 14.66 21.61 31.34 14.93zM119.98 407.34s-5.64-26.65-23.55-27.87c0 0 5.68 28.13 21.51 32.88zM123.37 385.98s-3.67-32.31-18.46-32.46c0 0 2.15 24.57 17.11 37.15zM132 359.99s-6.21-26.66-20.47-29c0 0 3.5 26 19.53 35.72zM139.06 337.79s-2-28.07-10.9-31.62c0 0-3.61 25.78 8.65 35.38zM144.79 315.8s-3.15-28.85-12.31-32.32c0 0-1.5 23.09 11.1 34.3zM152.54 289.46s-1.64-23.51-8.35-28.61c0 0-4.58 26.19 5.35 33.56z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M154.28 266.92l-8.8-38.74s-6.23 32.64 9.57 45.78zM152.91 227.92s-17.63-25.28-17.49-28.22c0 0 3.54 27.48 24.41 39.89zM154.28 220.03s-17.46-36.39-24.43-39c0 0 22.09 9.43 25.61 37.8z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M150.82 293.25l-1-.25c9.85-42 11.24-68.48 3.9-74.56l.68-.82c7.74 6.44 6.52 32.6-3.58 75.63z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M122.54 391.91l-1.55-.43c1.09-3.86 2.27-7.79 3.53-11.66 11-33.72 20.14-65 25.75-88.94l1.27-.75c-5.62 24-14.51 56.43-25.49 90.18-1.25 3.86-2.43 7.76-3.51 11.6z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M169.59 616.31c-.22-.21-22.22-21.87-39.12-60.24a232.37 232.37 0 0 1-18.61-70.77c-3-30.53 1.1-65.13 10-96.9l1.28 1.32c-20 71.31-6.19 130.34 9.23 165.4 16.73 38 38.48 59.45 38.7 59.66z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M193.81 502.1s8-1.83 13.22 3.55c0 0-3.37 3-11.27-.33zM192.94 502.03s-4.72 6.7-1.72 13.57c0 0 4.08-2 4-10.55zM187.62 491.92s2.83-6.13 16.3 1.29c0 0-1.45 4.09-7.18 4.15s-7.41-2.42-9.12-5.44zM186.76 491.55s-6.76-.31-6.38 15.06c0 0 4.31.6 7-4.46s1.27-7.68-.62-10.6zM182.03 479.58s3.07-10.69 17.23-4.18c0 0-2.47 9.79-15.59 7.64zM176.79 464.26s6.39-11 19.64-2.08c0 0-3.75 10.2-18.31 5.77zM174.28 449.51s7.64-10.25 20.77-1.4c0 0-7.28 9-20.6 3.87zM172.02 435.17s7.72-10.68 20.31-1.9c0 0-8.87 9.57-20.15 4.27zM171.92 422.31s8-13.61 19.73-5.54c0 0-8.72 11.83-19.57 8zM172.96 407.22s8.49-13.55 20-4.38c0 0-10.34 11.94-19.88 6.74zM175.18 393.64s10.27-12.88 20.28-8.68c0 0-10.69 13.66-20.53 11.94zM178.2 380.7s11.81-15.71 19.57-11.26c0 0-8.65 12.15-20.3 14.12zM182.81 365.64s10.38-12.89 18.76-10.42c0 0-8.73 13.23-20 14.31zM186.95 351.53s11.59-12.45 17.11-10.77c0 0-8.06 13.51-17.48 13.39zM191.04 338.5s9.73-14.6 15.61-13.92c0 0-5.62 12.81-15.51 15.32zM195.28 321.02s8.7-11.28 13.79-11.6c0 0-6.48 14.72-13.95 15.09zM197.69 309.4l7.59-22.76s1.8 20-8.49 27zM199.74 284.7s.26-18.61-.81-20.05c0 0 7.54 14.95 1.29 28.24zM181.66 479.36s-9.82-5.22-15 9.5c0 0 8.77 5 16.33-5.92zM176.45 463.64s-11.93-4.5-16.54 10.81c0 0 9.35 5.53 17.84-7.1zM173.8 450.43s-8.93-9.13-20.77 1.4c0 0 8.43 8 20.94 1.08zM171.74 435.19s-9.07-9.55-20.38.83c0 0 10.07 8.29 20.54 1.54zM171.94 422.64s-6.87-14.19-19.25-7.06c0 0 7.78 12.47 18.89 9.52z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M173.69 407.09s-6.85-14.45-19.41-6.69c0 0 8.86 13.07 18.95 9zM176.43 393.64s-3.41-16.12-14.24-16.85c0 0 3.43 17 13 19.87zM178.48 380.71s-2.2-19.53-11.2-19.63c0 0 1.3 14.86 10.34 22.47zM183.69 365s-3.75-16.12-12.37-17.54c0 0 2.12 15.71 11.81 21.59zM187.96 351.58s-1.23-17-6.58-19.12c0 0-2.19 15.59 5.22 21.39zM191.43 338.28s-1.9-17.44-7.44-19.54c0 0-.91 14 6.71 20.74zM196.11 322.36s-1-14.21-5-17.3c0 0-2.77 15.84 3.23 20.29z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M197.19 308.73l-5.32-23.42s-3.77 19.74 5.78 27.68zM196.34 285.16s-10.65-15.27-10.57-17.06c0 0 2.13 16.61 14.75 24.11zM197.14 280.38s-10.56-22-14.77-23.55c0 0 13.36 5.7 15.48 22.86z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M195.07 324.64l-.63-.15c6-25.39 6.8-41.4 2.36-45.07l.41-.5c4.71 3.9 3.97 19.72-2.14 45.72z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M177.98 384.3l-.94-.27c.66-2.33 1.38-4.7 2.14-7 6.63-20.39 12.17-39.3 15.56-53.77l.77-.46c-3.4 14.5-8.77 34.12-15.41 54.53-.76 2.31-1.47 4.64-2.12 6.97z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M206.42 519.96c-.13-.13-13.43-13.22-23.65-36.42a140.72 140.72 0 0 1-11.25-42.78c-1.83-18.46.67-39.38 6.06-58.59l.77.8c-12.09 43.11-3.74 78.8 5.58 100 10.12 23 23.26 35.93 23.4 36.06z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M236.5 569.96a38.24 38.24 0 0 0-7.5 2.14c-53.94 21.54-53.04 162.54-53.04 162.54h-15.88s-5-60.51-26.79-146.84c-19.63-77.67 60.88-147.28 77.23-160.48 1.84-1.47 2.86-2.25 2.86-2.25 81.09 29.8 23.12 144.89 23.12 144.89z",
    fill: "#afc0e0"
  }), React.createElement("path", {
    d: "M219.28 427.52c-1.87-.86-3.8-1.68-5.85-2.43 0 0-1 .78-2.86 2.25-16.35 13.2-96.86 82.81-77.23 160.48 21.79 86.33 26.74 146.82 26.74 146.82h8.93s-4.95-60.51-26.79-146.84c-19.55-77.31 60.18-146.66 77.06-160.28z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M504.04 587.82c-21.84 86.33-26.76 146.82-26.76 146.82h-15.91s1-147.36-56.73-163.81a31.53 31.53 0 0 0-3.81-.89s-58-115.09 23.12-144.87c0 0 .82.61 2.3 1.8 15.03 12.03 97.64 82.38 77.79 160.95z",
    fill: "#afc0e0"
  }), React.createElement("path", {
    d: "M236.5 569.96a38.24 38.24 0 0 0-7.5 2.14 979.21 979.21 0 0 1-18.48-144.76c1.84-1.47 2.86-2.25 2.86-2.25 81.09 29.78 23.12 144.87 23.12 144.87zM426.28 426.89a901 901 0 0 1-21.61 144 31.53 31.53 0 0 0-3.81-.89s-58-115.09 23.12-144.87c-.03-.04.79.57 2.3 1.76z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M396.59 591.78q-8.4 33.14-19.69 68s-35.72 37.21-122 0c0 0-8.62-24.3-18.1-65.61-20.87-90.83-45.9-263.92 7.43-441.71A661.75 661.75 0 0 1 311.41 0s45.56 52.31 79 152.43 54.72 248.07 6.18 439.35z",
    fill: "#e3e8f4"
  }), React.createElement("circle", {
    cx: 318.66,
    cy: 293.6,
    r: 71.63,
    fill: "#afc0e0"
  }), React.createElement("path", {
    d: "M369.46 293.64a50.8 50.8 0 0 1-83 39.29 51.33 51.33 0 0 1-9.52-10.33 50 50 0 0 1-3.28-5.39 50.7 50.7 0 0 1-5.79-23.57v-1.21a50.86 50.86 0 0 1 37-47.72 52.53 52.53 0 0 1 12.24-1.86h1.52a50.8 50.8 0 0 1 50.83 50.79z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M390.4 152.43c-81.27 38.91-146.22 0-146.22 0A661.75 661.75 0 0 1 311.41 0s45.56 52.31 78.99 152.43zM396.59 591.78q-5.7 22.44-12.7 45.65-3.32 11.07-7 22.32s-35.72 37.21-122 0c0 0-2.8-7.89-7-22.32-3.14-10.9-7.05-25.51-11.13-43.29 0 0 32.12 13.71 77.71 13.71a214.11 214.11 0 0 0 82.12-16.07z",
    fill: "#afc0e0"
  }), React.createElement("path", {
    d: "M383.89 637.43q-3.32 11.07-7 22.32s-35.72 37.21-122 0c0 0-2.8-7.89-7-22.32-.01 0 87.93 25.3 136 0z",
    fill: "#e3e8f4"
  }), React.createElement("path", {
    d: "M304.9 244.64l-.11.08-36.9 47.64v1.21a50.7 50.7 0 0 0 5.79 23.57l43.48-74.36zM316.68 287.64l-30.22 45.25a51.33 51.33 0 0 1-9.52-10.33l36-38.64z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M274.2 659.76s-8.62-24.31-18.1-65.61c-20.87-90.84-45.9-263.93 7.43-441.72a664.18 664.18 0 0 1 58.85-138.09c-6.77-9.49-11-14.33-11-14.33a661.68 661.68 0 0 0-67.2 152.42c-53.33 177.79-28.3 350.88-7.43 441.72 9.48 41.3 18.1 65.61 18.1 65.61 34.09 14.69 60.28 17.77 79.5 16.13-16.42-1.25-36.36-5.88-60.15-16.13z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M936.98 728.93s46.74-58.16 43.64-116.41a113.05 113.05 0 0 1 18.54-69.06 190.19 190.19 0 0 1 22-27",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M1019.39 479.78c-3.34 8.11 1.66 37.68 1.66 37.68s24.37-17.48 27.71-25.59a15.88 15.88 0 0 0-29.37-12.09zM976.61 514.72c1.61 8.62 21.88 30.72 21.88 30.72s11-27.91 9.35-36.54a15.884 15.884 0 0 0-31.23 5.82zM946.07 591.94c5.74 6.63 34.4 15.48 34.4 15.48s-4.64-29.63-10.38-36.27a15.88 15.88 0 0 0-24 20.79zM936.12 655.57c4.53 7.51 31.28 21.07 31.28 21.07s.44-30-4.09-37.5a15.884 15.884 0 1 0-27.19 16.43zM1028.68 559.71c-8.14 3.25-37.66-2.05-37.66-2.05s17.72-24.19 25.87-27.45a15.884 15.884 0 0 1 11.79 29.5zM1016.1 633.98c-8.74.67-35.32-13.22-35.32-13.22s24.14-17.79 32.89-18.46a15.89 15.89 0 0 1 2.43 31.68zM993.97 704.48c-8.51 2.14-37.05-7.06-37.05-7.06s20.79-21.61 29.3-23.74a15.88 15.88 0 1 1 7.75 30.8z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M1019.39 479.78c-3.34 8.11 1.66 37.68 1.66 37.68s24.37-17.48 27.71-25.59a15.88 15.88 0 0 0-29.37-12.09zM976.61 514.72c1.61 8.62 21.88 30.72 21.88 30.72s11-27.91 9.35-36.54a15.884 15.884 0 0 0-31.23 5.82zM946.07 591.94c5.74 6.63 34.4 15.48 34.4 15.48s-4.64-29.63-10.38-36.27a15.88 15.88 0 0 0-24 20.79zM936.12 655.57c4.53 7.51 31.28 21.07 31.28 21.07s.44-30-4.09-37.5a15.884 15.884 0 1 0-27.19 16.43zM1028.68 559.71c-8.14 3.25-37.66-2.05-37.66-2.05s17.72-24.19 25.87-27.45a15.884 15.884 0 0 1 11.79 29.5zM1016.1 633.98c-8.74.67-35.32-13.22-35.32-13.22s24.14-17.79 32.89-18.46a15.89 15.89 0 0 1 2.43 31.68zM993.97 704.48c-8.51 2.14-37.05-7.06-37.05-7.06s20.79-21.61 29.3-23.74a15.88 15.88 0 1 1 7.75 30.8z",
    opacity: 0.25
  }), React.createElement("path", {
    d: "M937.4 726.5s66.3-34.24 87.07-88.74a113 113 0 0 1 44.94-55.63 189.91 189.91 0 0 1 31-15.76",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M1113.7 532.1c-6.34 6.07-13.75 35.13-13.75 35.13s29.36-6.11 35.7-12.17a15.897 15.897 0 0 0-21.95-23zM1060.44 546.71c-2 8.54 7.55 37 7.55 37s21.29-21.07 23.35-29.66a15.88 15.88 0 0 0-30.9-7.34zM1001.22 604.93c2.56 8.39 25.18 28.09 25.18 28.09s7.77-29 5.21-37.35a15.885 15.885 0 0 0-30.39 9.26zM966.34 659.07c1.1 8.71 20.06 31.94 20.06 31.94s12.56-27.23 11.45-35.94a15.881 15.881 0 0 0-31.51 4zM1089.81 608.94c-8.77-.32-33.6-17.13-33.6-17.13s26-14.93 34.77-14.61a15.88 15.88 0 1 1-1.17 31.74zM1048.21 671.74c-8.27-2.93-26.94-26.4-26.94-26.4s29.29-6.47 37.55-3.54a15.882 15.882 0 1 1-10.61 29.94zM999.4 727.23c-8.64-1.49-31-21.47-31-21.47s27.77-11.32 36.41-9.83a15.881 15.881 0 1 1-5.4 31.3z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M1061.39 750.72L1010 676.19s-1-18.45-4.32-22.76-.72-13.9-.72-13.9 3.6-5.27.48-5.75-.48-12.23-.48-12.23l-.24-18.69s2.88-18 .48-22.28a7.07 7.07 0 0 1 .24-7.67s2.88-10.31 0-12.94-2.16-18.7-1.44-31.4-5.05-19.89-5.05-21.81-19-20.61-19-22.28-12-8.63-19.21-10.55-10.81-3.35-10.57-4.31-11.29-4.79-11.29-4.79-10.09-.72-13.94-5.76-15.59-6.48-15.93-6.53c-.07-.33-.15-.67-.22-1s-.15-.72-.22-1.08c.91-1.53 1.75-3.09 2.51-4.7.23-.49.45-1 .66-1.46 4.21-.19 8.53-1.09 11.83-3.67a16.11 16.11 0 0 0 5.75-11.49 25.19 25.19 0 0 0-2.81-12.77c-2.1-4.32-5.19-8.79-4.13-13.47.47-2 1.68-3.8 2.3-5.78 1.17-3.75.09-7.87-1.73-11.35s-4.35-6.54-6.37-9.91a38.7 38.7 0 0 1-5.07-14c-.41-2.6-.57-5.34-1.88-7.63a14.21 14.21 0 0 0-4.21-4.25 42.07 42.07 0 0 0-25.82-7.83c-6.54.23-13.06 2-19.55 1.19-3.91-.48-7.64-1.87-11.42-3-8.06-2.38-17.35-3.36-24.37 1.25s-9.81 13.68-14.56 20.77c-4.2 6.28-10.36 11.54-13.56 18.18 0-.12.06-.25.1-.38a21.75 21.75 0 0 0-1.79 4.84c-1.22 5.22-.2 10.68 1.07 15.89.65 2.69 1.55 5.61 3.88 7.1s5.63 1.16 8.39 1.65c-.1.45-.22.91-.32 1.37a54.9 54.9 0 0 0 38.09 64v1.46a36.33 36.33 0 0 1-.25 4.12s-24.15-5-30.64-1.6-19.22 6-21.14 7.9-6.72.48-11 11.75-4.8 22.76-10.33 28-8.4 8.87-8.64 12.71.72 4.79-1.45 6-5.28 6.23-4.32 8.15c0 0 1.2 4.79-2.64 7.18s-3.37 7.19-3.37 7.19-1.44 5.28-4.8 6.47-5.53 9.11-5.53 9.11L730.52 596l-21.59-23.9a9.1 9.1 0 0 0-12.85-.66l-10.6 9.56a20.94 20.94 0 0 0-10.61 6.32 27.35 27.35 0 0 0-5.49 8.18l-5.81 5.22a14.75 14.75 0 0 0-1.49 16.28l13.83 15.29.09.13c-5.23.66-9.85 2.34-13.38 5.45-20.65 18.21-20.9 35-17.77 42.65s29.3 37.15 29.3 37.15 15.21 19.77 37.17 30.29l-.17.17c-.43.46-.86 1-1.28 1.5l-.36.46-.33.46-.39.58c-.11.15-.21.31-.31.47s-.28.45-.41.69l-.27.46c-.16.3-.33.61-.49.93l-.16.31c-.2.42-.4.85-.59 1.3-.07.16-.13.33-.2.49-.12.31-.25.63-.37 1s-.15.41-.22.62-.21.62-.31.94-.14.45-.2.67-.2.7-.29 1.06-.11.42-.17.65c-.13.55-.26 1.12-.37 1.72 0 .22-.08.45-.12.68q-.12.6-.21 1.23c-.05.29-.08.58-.12.87s-.1.79-.15 1.19l-.09.92c0 .44-.08.9-.11 1.36 0 .28 0 .56-.05.84 0 .76-.08 1.52-.09 2.32-.48 28 1.16 32.11 1.16 32.11s3.39 8.93 12.75 9.57a16.3 16.3 0 0 0 4.11-.22c12.49-2.16 41.79-7.19 52.12-5.27 6.21 1.15 17.71-.55 25.9-2.1l2.15-.41 1.5 4.76 4.75-1.3 4 2.33 2.55 1.46c4.74 16.08 24 10.6 24 10.6L843 826l46.36 1.2s10 6 16.41 7.88a15.24 15.24 0 0 0 2.33.51 105.21 105.21 0 0 0 12.92.24c3.55-.09 6.3-.24 6.3-.24s-.47-12.59-1.15-26.68c17.72-.74 33.43-1.85 42.94-3.52 24.76-4.35 35.09-26.86 38.89-38.89a113.19 113.19 0 0 1 2.43 14.93 106.74 106.74 0 0 0 3.85 12.94 43.73 43.73 0 0 0 5.28 9.58c18.26-6.23 7.21-15.57 3.36-19.65s2.65-7.43 2.65-7.43 5-3.35 4.56-6.47-.72-6.47 15.61-6.23 15.65-13.45 15.65-13.45zm-253.66-153c.21 1.37 2.49 16.14 4.55 20 .43.82.6 3.73.54 7.89-9.68-.77-19.76-1.18-19.76-1.18a2.32 2.32 0 0 1 .52 1.23l-1.52-.34-2.21-.54 17.83-27.12zm-35.32 56.2l16.75 2.66 1.41.22a55.11 55.11 0 0 0-.87 7.91c0 .25.38.55.92.9a21.57 21.57 0 0 0-.33 4c.27 1.33 8.1 4.19 17.08 6.57-.12.48-.24.94-.36 1.37-7.93-4.17-20.43-6.12-21.87-9.22s-44-18-44-18-1.55-.82-4.23-2.12l11.2 2.12 3.08-.31a167.91 167.91 0 0 0 21.22 3.88z",
    transform: "translate(-29.72 -56.36)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M976.99 704.79s-6.66 40.23-40.47 46.18-146.66 4.76-146.66 4.76-64.52-9.28-87.85-63.8-38.33-76.19-18.33-77.14 127.85 36.43 134 36.9 165.26-82.85 159.31 53.1z",
    fill: "#434175"
  }), React.createElement("path", {
    d: "M976.99 704.79s-6.66 40.23-40.47 46.18-146.66 4.76-146.66 4.76-64.52-9.28-87.85-63.8-38.33-76.19-18.33-77.14 127.85 36.43 134 36.9 165.26-82.85 159.31 53.1z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M674.35 749.54s3.37 8.88 12.64 9.51a16.43 16.43 0 0 0 4.07-.22c12.38-2.14 41.43-7.14 51.66-5.24 6.16 1.15 17.55-.55 25.66-2.08 5.4-1 9.34-2 9.34-2S768.2 717.85 767 716.9s-42.85-25.95-42.85-25.95l-33-2.37h-.1s-6.11.41-11.18 6.57c-3.49 4.21-6.48 11.13-6.68 22.47-.46 27.87 1.16 31.92 1.16 31.92z",
    fill: "#565387"
  }), React.createElement("path", {
    d: "M674.35 749.54s3.37 8.88 12.64 9.51a135.54 135.54 0 0 1-9-13.08l.17-23.09c-1.47-17.29 6.62-28.36 13-34.27h-.1s-17.38 1.18-17.86 29 1.15 31.93 1.15 31.93z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M817.48 699.07l30.71-24 48.33-47.62s-5.22-.25-13.09-.59c-2 1.25-7.45 5.18-7.65 10-.24 5.82-13.07.4-19.73 3.73s-39.28 45.08-45 44.81-10.23-2.9-12.62 1.15c0 .09-.11.17-.17.26zM679.88 695.17c1.09.53 2.19 1 3.32 1.52 23.34 10 52.14 31 54.29 34.76 1.3 2.32 18 12.46 30.89 20.06 5.4-1 9.34-2 9.34-2S768.2 717.85 767 716.9s-42.85-25.95-42.85-25.95l-33-2.37h-.1s-6.1.43-11.17 6.59z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M615.12 626.93c3.09 7.62 29 36.91 29 36.91s16.42 21.42 39.76 31.42 52.14 31 54.28 34.76c1.38 2.45 20 13.65 33.08 21.35l2.93 1.71 6.5 3.77 3.44 2s8-6.4 15.91-12.84 15.63-12.75 15.76-13.11c.23-.71 3.32-8.81 2.61-9.28-.37-.25-2-3.55-5-7.37a33.82 33.82 0 0 0-12.13-10c-11-5-15.71-16.38-15.71-16.38s-1-.76-2.63-1.76c-2.82-1.78-7.35-4.34-10.7-4.77-5.25-.66-15-11.37-15-11.37s-6.67-4.29-9.29-9.76c-2.5-5.22-39.42-30.58-42.84-32.92l89.51 57.48 21.42 13.77 30.71-24 48.34-47.62s-6.5-.32-16-.72c-23.49-1-65.21-2.61-70.48-1.42a40.17 40.17 0 0 1-13.1.85s-11.88.54-19.74-3.61-20.25-6.09-21.68-9.16-43.57-17.85-43.57-17.85-57.37-30.47-77.85-12.37-20.63 34.68-17.53 42.29z",
    fill: "#434175"
  }), React.createElement("path", {
    d: "M800.1 452.19l7.38 24.52 9.52 55.23 35 2.38 10.13-16.8 10.15-16.77s6.3-22.32 10.83-43.91c4-19.1 6.62-37.64 2.26-39.65-3.86-1.79-6.4-8.22-8-15.14-.21-.85-.4-1.72-.58-2.59a134.62 134.62 0 0 1-2.32-17.75s-73.33-3.8-63.09 26.43a48.18 48.18 0 0 1 2.76 16.08 38.23 38.23 0 0 1-.25 4.09 34.3 34.3 0 0 1-13.79 23.88z",
    fill: "#ee8e9e"
  }), React.createElement("path", {
    d: "M784.86 448.14l2.62 41.66 5.95 35.47 6.67 16.43 5.95 89.88s57.41 6.64 71.37-.12a6.14 6.14 0 0 0 2.53-2c16.86-25.43 11.33-99.19 11.33-99.19l6.43-47.63-4.29-24.72-10.35-1.1-8-.85s-1.8 2.22-4.4 5.65c-7.06 9.32-20 27.65-19.17 35.3 1.18 10.48-1.43 21.19-5.48 22.86s-7.38 4.52-8.09 1.67-1.43-3.57-.72-7.62-3.1-16.43-3.1-16.43-6.42-14.52-6-20.71-.71-13.34-2.62-15-4.52-3.34-2.38-11-9.39-22.45-9.39-22.45z",
    fill: "#e3e8f4"
  }), React.createElement("path", {
    d: "M860.69 552.19l2.38 71.19 13.75 7.62a6.15 6.15 0 0 0 2.53-2c16.87-25.47 11.34-99.22 11.34-99.22l6.43-47.62-4.29-24.71-10.36-1.1c4-19.1 6.62-37.64 2.27-39.65-3.87-1.79-6.41-8.22-8.06-15.14l-7.4 50.4s.62 4.54.84 9.22c.17 3.48.11 7-.6 8.87-1.67 4.29-.48 11.91-.48 11.91-4.29 7.56-6.43 21.57-7.48 35.1-1.41 17.99-.87 35.13-.87 35.13z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M876.91 400.46s12 1.49 15.8 6.49 13.81 5.69 13.81 5.69 11.43 3.81 11.19 4.76 3.33 2.39 10.48 4.29 19 8.81 19 10.48S966 452.4 966 454.31s5.72 9 5 21.66-1.43 28.57 1.43 31.19 0 12.86 0 12.86a7 7 0 0 0-.15 7.62c2.38 4.29-.47 22.15-.47 22.15l.23 18.57s-2.62 11.66.48 12.14-.48 5.71-.48 5.71-2.62 9.53.72 13.81 4.28 22.62 4.28 22.62l51 74s.72 13.57-15.47 13.33-16 3.1-15.48 6.19-4.52 6.43-4.52 6.43-6.43 3.33-2.62 7.38 14.76 13.33-3.33 19.52a43.16 43.16 0 0 1-5.24-9.52 107.72 107.72 0 0 1-3.81-12.85s-1.67-18.1-5-20.48-2.86-13.81-2.86-13.81 4.76-9.28-1.9-13.09-103.43-57.33-103.43-57.33L862 551.22s-1.67-52.61 8.33-70.23c0 0-1.19-7.62.48-11.9s-.24-18.1-.24-18.1z",
    fill: "#565387"
  }), React.createElement("path", {
    d: "M814.51 429.02s-23.93-4.93-30.36-1.6-19 6-21 7.86-6.67.48-10.95 11.67-4.77 22.61-10.24 27.85-8.33 8.81-8.57 12.62.71 4.76-1.43 6-5.24 6.19-4.29 8.1 49.61 43.75 49.61 43.75 2.39 16 4.53 20-2.38 59.76-7.14 63.57 32.14 3.46 32.14 3.46 1.66-36.55 3.09-38.46-1-41-1-41-.24-33.33 2.86-42.14 2.75-38.06 2.75-38.06 2.74-17.57 6.07-21.67-6.07-21.95-6.07-21.95z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M813.8 428.31s-23.94-4.93-30.37-1.6-19 5.95-20.95 7.86-6.66.47-11 11.66-4.76 22.62-10.24 27.86-8.33 8.81-8.57 12.62.72 4.76-1.42 5.95-5.24 6.19-4.29 8.09 49.52 43.81 49.52 43.81 2.38 16 4.52 20-2.38 59.75-7.14 63.56 32.14 3.46 32.14 3.46 1.67-36.55 3.1-38.45-1-41-1-41-.23-33.33 2.86-42.14 2.75-38.1 2.75-38.1 2.74-17.57 6.06-21.66-5.97-21.92-5.97-21.92z",
    fill: "#565387"
  }), React.createElement("path", {
    d: "M811.28 408.14a48.18 48.18 0 0 1 2.76 16.08 54.63 54.63 0 0 0 62.65-24.76 134.62 134.62 0 0 1-2.32-17.75s-73.32-3.8-63.09 26.43z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M775.1 370.52a54.52 54.52 0 1 0 1.18-11.33 54.53 54.53 0 0 0-1.18 11.33z",
    fill: "#ee8e9e"
  }), React.createElement("path", {
    d: "M740.1 496.7l-13.09 4.05s1.19 4.76-2.62 7.14-3.33 7.15-3.33 7.15-1.43 5.23-4.76 6.42-5.48 9-5.48 9l-10.95 12.62s-4.05 3.33-3.33 5-4.29 2.14-4.29 2.14l2.62 42.42 22.62 4.29 14-1.43 11.43-4.29 10-6 4.56-11.57 20-30.47z",
    fill: "#565387"
  }), React.createElement("path", {
    d: "M695.58 553.64s-29-41.91-50.71-19.29 8.81 59.28 15.95 58.09 41.19-3.09 41.19-3.09z",
    fill: "#ee8e9e"
  }), React.createElement("rect", {
    x: 671.34,
    y: 583.93,
    width: 61.42,
    height: 69.8,
    rx: 12.62,
    ry: 12.62,
    transform: "rotate(-42.05 613.877 629.306)",
    fill: "#30374e"
  }), React.createElement("rect", {
    x: 671.34,
    y: 583.93,
    width: 61.42,
    height: 69.8,
    rx: 12.62,
    ry: 12.62,
    transform: "rotate(-42.05 613.877 629.306)",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 672.16,
    y: 580.48,
    width: 61.42,
    height: 69.8,
    rx: 12.62,
    ry: 12.62,
    transform: "rotate(-42.05 614.695 625.858)",
    fill: "#30374e"
  }), React.createElement("circle", {
    cx: 672.39,
    cy: 560.74,
    r: 13.57,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 672.39,
    cy: 560.74,
    r: 13.57,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 673.15,
    cy: 559.02,
    r: 13.57,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M676.78 562.41c-.24 31.43 64.76 38.09 64.76 38.09l16.6 2.64 7.44 1.18 3.1-30.68s-3.41-.51-7.67-1.5c-6.29-1.47-14.44-4-16.15-7.55-2.85-5.95-67.85-33.6-68.08-2.18z",
    fill: "#ee8e9e"
  }), React.createElement("path", {
    d: "M776.28 359.19a6.47 6.47 0 0 1 4 1.78c1.84 1.95 1.94 5.41 4.33 6.61a4.92 4.92 0 0 0 2.84.33c6.33-.9 10-8 16.07-10 3.46-1.12 7.27-.39 10.65.91a7.93 7.93 0 0 1 3.53 2.27c2 2.63.61 6.5 1.55 9.69 1.31 4.42 6.59 6.18 11.16 6.76s9.72.9 12.77 4.35c2.16 2.45 2.71 6 2.27 9.21a7.29 7.29 0 0 0 0 3.41c1.26 3.57 7.44 3 9.05.22 1.18-2.05.82-3.75 3.6-4.32 1.88-.39 4.09.4 5.83 1a42.71 42.71 0 0 0 15.08 2.32 54.53 54.53 0 1 0-102.73-34.54z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M845.42 393.07a7.29 7.29 0 0 1 0-3.41c.43-3.23-.11-6.77-2.27-9.21-3-3.45-8.2-3.78-12.77-4.35s-9.85-2.33-11.16-6.75c-.94-3.19.48-7.07-1.55-9.7a7.8 7.8 0 0 0-3.52-2.26c-3.39-1.31-7.2-2-10.66-.92-6.07 2-9.74 9.12-16.07 10a4.92 4.92 0 0 1-2.84-.33c-2.39-1.2-2.49-4.66-4.33-6.6-2.89-3.06-8.38-1.09-11.92-3.36-2.31-1.49-3.2-4.38-3.84-7.05-1.26-5.18-2.27-10.61-1.06-15.79 2.07-8.86 10-14.93 15-22.49 4.71-7.05 7.35-16 14.43-20.64s16.17-3.61 24.15-1.24c3.74 1.11 7.44 2.49 11.31 3 6.44.79 12.9-1 19.38-1.18a41.62 41.62 0 0 1 25.59 7.77 14.16 14.16 0 0 1 4.18 4.23c1.29 2.28 1.46 5 1.85 7.58a38.75 38.75 0 0 0 5 13.93c2 3.35 4.51 6.39 6.32 9.85s2.87 7.55 1.71 11.27c-.61 2-1.82 3.73-2.27 5.74-1.06 4.65 2 9.09 4.09 13.38a25.1 25.1 0 0 1 2.78 12.69 16 16 0 0 1-5.7 11.41c-3.37 2.64-7.8 3.52-12.07 3.66a42.78 42.78 0 0 1-15.38-2.31c-1.75-.6-4-1.39-5.83-1-2.78.57-2.42 2.27-3.6 4.32-1.52 2.8-7.69 3.33-8.95-.24z",
    fill: "#434175"
  }), React.createElement("path", {
    d: "M816.05 700.5l30.71-24 48.34-47.62s-6.5-.32-16-.72c-1.73 1.76-3.27 4-3.37 6.5-.24 5.82-13.07.41-19.73 3.74s-39.28 45.07-45 44.8-10.23-2.9-12.62 1.15a2.46 2.46 0 0 1-.17.27 6.77 6.77 0 0 1-3.63 2.15z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M754.15 698.83l15.43 49.26 2.42 7.74 7.35-2 16.2-4.45 72.16-19.82s13.56-.18 26-6.93c13.75-7.48 29.26-11.24 44.84-9.78 9.54.89 20.15-3.22 29-19.48 0 0 20-59-30.48-76s-52.88 9-52.88 9-.26.14-.68.42c-2 1.25-7.45 5.18-7.65 10-.24 5.82-13.07.4-19.73 3.73s-39.28 45.08-45 44.81-10.23-2.9-12.62 1.15c0 .09-.11.17-.17.26-1.76 2.43-7.06 3-10.57 3.09-1.91.06-3.3 0-3.3 0l-.45.14-3.74 1.04z",
    fill: "#434175"
  }), React.createElement("path", {
    d: "M758.14 603.14l7.44 1.18 3.1-30.68s-3.41-.51-7.67-1.5c1.13 4.25-1.43 20.82-2.87 31z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M952.82 459.64s22.14-6.43 16.66 56.43-46.42 102.57-46.42 102.57-47.14 20.71-68.33 17.38-36.66-4-36.66-4a53.79 53.79 0 0 0-21.43-5.71c-11.91-.48-36.9-7.86-37.38-10.24s6.19-37.38 3.33-40c0 0 33.33 1.37 36.67 3.78s8.09.68 11.66 0 14.53-10.21 36.19-1.87c0 0 7.38.71 10.24-1.19s7.44-.48 7.44-.48 4.49-1.67 5.18-2.67 6.42 0 6.42 0a2.54 2.54 0 0 0 3.58-1.67 15.56 15.56 0 0 1 3.33-5.23s6.43-36.19 18.57-49.76c0 0 3.57-3.1 2.62-6.91s19.79-58.06 48.33-50.43z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M952.28 454.8s22.14-6.43 16.67 56.43-46.48 102.61-46.48 102.61-47.14 20.71-68.33 17.38-36.66-4.05-36.66-4.05a53.72 53.72 0 0 0-21.43-5.71c-11.9-.48-36.9-7.86-37.38-10.24s6.19-37.38 3.34-40c0 0 33.33 1.37 36.66 3.78s8.1.68 11.67 0 14.52-10.2 36.19-1.87c0 0 7.38.71 10.23-1.19s7.45-.48 7.45-.48 4.46-1.67 5.17-2.62 6.43 0 6.43 0a2.53 2.53 0 0 0 3.57-1.66 15.54 15.54 0 0 1 3.33-5.24s6.43-36.19 18.57-49.76c0 0 3.57-3.1 2.62-6.9s19.76-58.1 48.38-50.48z",
    fill: "#565387"
  }), React.createElement("path", {
    d: "M780.28 691.01l31.44 38c.12-.11.2-.19.2-.22.24-.72 3.33-8.81 2.62-9.29s-6.19-12.38-17.14-17.38c-6.69-3-11.07-8.49-13.46-12.25z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M780.71 756.85l3.44 2s8-6.4 15.91-12.84 15.63-12.75 15.76-13.11c.23-.71 3.32-8.81 2.61-9.28-.37-.25-2-3.55-5-7.37-21.32-6-7.75 8.83-5.94 9.51 0 0-26-6-27.38 22.31a33.36 33.36 0 0 0 .6 8.78z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M807 768.83l4.53 2.62 46 1.19s9.86 6 16.26 7.82a13.93 13.93 0 0 0 2.31.51 103.27 103.27 0 0 0 12.8.24c3.52-.09 6.25-.24 6.25-.24s-2.18-58-3.82-64c-.78-2.92-4.63-2.28-8.43-.82a55.19 55.19 0 0 0-8.23 4.17s-19.52 1.89-22.62 3.57-11.9-1-17.38 0-15.23-6.45-15.23-6.45c-26.67-8.8-11.67 7.62-9.77 8.34 0 0-25.94-6-27.37 22.31s24.7 20.74 24.7 20.74z",
    fill: "#565387"
  }), React.createElement("path", {
    d: "M873.43 746.45c.5 12 9.85 26.89 15.42 34.76 3.52-.09 6.25-.24 6.25-.24s-2.18-58-3.82-64c-.78-2.92-4.63-2.28-8.43-.82-4.57 8.6-9.82 20.63-9.42 30.3z",
    fill: "#565387"
  }), React.createElement("path", {
    d: "M873.43 746.45c.5 12 9.85 26.89 15.42 34.76 3.52-.09 6.25-.24 6.25-.24s-2.18-58-3.82-64c-.78-2.92-4.63-2.28-8.43-.82-4.57 8.6-9.82 20.63-9.42 30.3z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M865.57 748.04c3.16 11.58 3.13 24.57 8.17 32.42a13.93 13.93 0 0 0 2.31.51 103.27 103.27 0 0 0 12.8.24c3.52-.09 6.25-.24 6.25-.24s-2.18-58-3.82-64c-.78-2.92-4.63-2.28-8.43-.82a55.19 55.19 0 0 0-8.23 4.17s-13.09 12.9-9.05 27.72z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M707.05 630.58s22.82 7.41 42.16 33.73z",
    opacity: 0.1
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M892.51 344.9a4.67 4.67 0 0 1-.14.5 16.15 16.15 0 0 1-.79 2 14.93 14.93 0 0 1 .93-2.5zM763.39 333.35a21.46 21.46 0 0 1 1.77-4.81c-.12.41-.25.82-.35 1.24-1.21 5.18-.2 10.61 1.06 15.79.65 2.67 1.53 5.56 3.84 7.05 3.55 2.27 9 .29 11.92 3.35 1.84 1.95 1.94 5.41 4.34 6.61a4.91 4.91 0 0 0 2.84.33c6.32-.9 10-8 16.07-10 3.46-1.12 7.26-.39 10.65.92a7.8 7.8 0 0 1 3.52 2.26c2 2.63.61 6.51 1.55 9.69 1.31 4.42 6.59 6.18 11.16 6.75s9.72.9 12.77 4.36c2.16 2.44 2.71 6 2.27 9.21a7.42 7.42 0 0 0 0 3.41c1.26 3.57 7.44 3 9 .22 1.18-2.05.83-3.75 3.61-4.32 1.87-.39 4.08.4 5.82 1a42.78 42.78 0 0 0 15.38 2.31c4.27-.15 8.71-1 12.07-3.66a14 14 0 0 0 3.7-4.5 15.14 15.14 0 0 1-5.1 8.08c-3.36 2.64-7.79 3.52-12.07 3.66a42.69 42.69 0 0 1-15.37-2.31c-1.75-.6-4-1.39-5.83-1-2.78.57-2.43 2.27-3.6 4.32-1.62 2.82-7.79 3.35-9.06-.22a7.42 7.42 0 0 1 0-3.41c.44-3.23-.1-6.77-2.26-9.21-3.06-3.45-8.21-3.78-12.78-4.35s-9.85-2.33-11.15-6.75c-.95-3.19.48-7.07-1.55-9.7a7.88 7.88 0 0 0-3.53-2.26c-3.39-1.31-7.19-2-10.65-.92-6.08 2-9.75 9.12-16.07 10a4.91 4.91 0 0 1-2.84-.33c-2.4-1.2-2.5-4.66-4.34-6.6-2.89-3.06-8.37-1.09-11.91-3.36-2.32-1.49-3.2-4.38-3.85-7.05-1.24-5.19-2.25-10.62-1.03-15.8z"
  })), React.createElement("path", {
    d: "M896.2 523.9c-4.36 5.89-9.34 11.34-13.2 17.57s-6.59 13.5-5.78 20.78c4-4.1 5.82-9.76 8.34-14.9 4.26-8.7 10.64-16.08 16-24.08 1-1.53 7.61-10.35 4.28-10.77-2.74-.35-8.15 9.39-9.64 11.4z",
    opacity: 0.1
  }));
};

UndrawMakerLaunch.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawMakerLaunch;