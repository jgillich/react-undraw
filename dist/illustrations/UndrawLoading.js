function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawLoading = function UndrawLoading(_props) {
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
    viewBox: "0 0 1097.1 845.39",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 710.55,
    y1: 844.17,
    x2: 710.55,
    y2: 713.15,
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
    x1: 527.5,
    y1: 850.63,
    x2: 527.5,
    y2: 206.25,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 465.67,
    y1: 168.51,
    x2: 652.94,
    y2: 168.51,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M870.17 694.75c16 8.09 35.57 3.17 53.75 3.74 2.49.08 5.12.32 7.12 1.71s3 3.67 4.35 5.61c5.09 7.21 15.53 9.53 24.65 8.31s17.49-5.28 26.1-8.37c14.88-5.33 31.89-7.76 46.57-1.94a8.47 8.47 0 0 0 4.21.93c3.22-.47 4.17-4.35 6.43-6.56 4.06-4 12.88-2.9 14.67-8.16 1-3.09-1.36-6.25-4-8.35-10-8.06-24.38-9.39-37.52-8.14s-26 4.66-39.23 4.68c-16.44 0-32.33-5.26-48.61-7.41-11.28-1.5-23.59-1.31-34.17 3.09-11.43 4.8-13.94 15.44-24.32 20.86zM11.85 429.97c17.36 74.2 54.11 138.34 112.18 169.43 120.71 64.61 392.92 31.28 596.07-7a465.2 465.2 0 0 0 264.54-151.22zM1077.2 80.69H965.73a9.63 9.63 0 0 1 0-19.26H985a9.64 9.64 0 0 1 0-19.27h-13.76a9.64 9.64 0 0 1 0-19.27h58.18c-12.91-6-28-10.27-45.39-12.5-158.64-20.38-215.28-6.9-235.26 7-24.65 17.1-52.15 29.68-81.54 35.74-97.88 20.19-280.93 44.49-446.84-7.77-82.46-26-143.74 17.91-180.48 91.28h1056.64c-1.38-21.33-5.51-41-13.09-58.25a9.56 9.56 0 0 1-6.26 2.3zM2.39 275.1a491.11 491.11 0 0 0 4.32 129.45l978.68 35.8a460 460 0 0 0 68-103.7zm387.08 92.35H370.2a9.63 9.63 0 1 1 0 19.26H258.73a9.63 9.63 0 1 1 0-19.26H278a9.64 9.64 0 0 1 0-19.27h-13.76a9.64 9.64 0 0 1 0-19.27h111.47a9.64 9.64 0 0 1 0 19.27h13.76a9.64 9.64 0 0 1 0 19.27zM1096.6 137.29l-1068.48 26c-13 33.4-21.57 71.17-25.57 110.33h1075.33a457.44 457.44 0 0 0 15.53-70.34c3.2-23.01 4.48-45.26 3.19-65.99zm-877.13 85.16H200.2a9.63 9.63 0 1 1 0 19.26H88.73a9.63 9.63 0 0 1 0-19.26H108a9.64 9.64 0 0 1 0-19.27H94.24a9.64 9.64 0 0 1 0-19.27h111.47a9.64 9.64 0 0 1 0 19.27h13.76a9.64 9.64 0 0 1 0 19.27z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M583.31 593.62s28.2-69.5 80.86-95.29a113.62 113.62 0 0 0 51.57-50.07 191.29 191.29 0 0 0 12.93-32.48",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M761.76 399.34c-5.49 6.9-33.9 17-33.9 17s3.42-29.95 8.91-36.85a16 16 0 1 1 25 19.88zM752.01 453.99c-8.36 2.81-37.68-4.17-37.68-4.17s19.15-23.28 27.51-26.09a16 16 0 1 1 10.17 30.26zM699.15 518.6c-8.63-1.79-30.42-22.63-30.42-22.63s28.29-10.43 36.92-8.63a16 16 0 0 1-6.5 31.26zM648.15 558.48c-8.81-.31-33.81-17.16-33.81-17.16s26.12-15.06 34.93-14.76a16 16 0 1 1-1.12 31.92zM687.03 430.29c1.12 8.74 20.22 32.07 20.22 32.07s12.58-27.4 11.45-36.15a16 16 0 1 0-31.67 4.08zM627.97 477.69c3.69 8 28.9 24.55 28.9 24.55s3.79-29.91.1-37.92a16 16 0 0 0-29 13.37zM576.89 531.62c2.29 8.51 24.33 29.08 24.33 29.08s8.8-28.84 6.52-37.35a16 16 0 0 0-30.85 8.27z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M761.76 399.34c-5.49 6.9-33.9 17-33.9 17s3.42-29.95 8.91-36.85a16 16 0 1 1 25 19.88zM752.01 453.99c-8.36 2.81-37.68-4.17-37.68-4.17s19.15-23.28 27.51-26.09a16 16 0 1 1 10.17 30.26zM699.15 518.6c-8.63-1.79-30.42-22.63-30.42-22.63s28.29-10.43 36.92-8.63a16 16 0 0 1-6.5 31.26zM648.15 558.48c-8.81-.31-33.81-17.16-33.81-17.16s26.12-15.06 34.93-14.76a16 16 0 1 1-1.12 31.92zM687.03 430.29c1.12 8.74 20.22 32.07 20.22 32.07s12.58-27.4 11.45-36.15a16 16 0 1 0-31.67 4.08zM627.97 477.69c3.69 8 28.9 24.55 28.9 24.55s3.79-29.91.1-37.92a16 16 0 0 0-29 13.37zM576.89 531.62c2.29 8.51 24.33 29.08 24.33 29.08s8.8-28.84 6.52-37.35a16 16 0 0 0-30.85 8.27z",
    opacity: 0.25
  })), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M604.41 488.39s3.56-74.92 44.69-116.7a113.64 113.64 0 0 0 32.05-64.35 191.18 191.18 0 0 0 1.4-34.92",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M708.34 245.93c-2.89 8.33-26.35 27.25-26.35 27.25s-6.7-29.39-3.82-37.72a16 16 0 1 1 30.17 10.47zM717.27 300.69c-7 5.43-36.94 8.56-36.94 8.56s10.35-28.32 17.3-33.74a16 16 0 0 1 19.64 25.18zM688.83 379.2c-8.74 1.17-36.21-11.26-36.21-11.26s23.23-19.25 31.93-20.39a16 16 0 0 1 4.24 31.65zM653.93 433.74c-8.41 2.63-37.58-5-37.58-5s19.64-22.87 28.06-25.5a16 16 0 1 1 9.52 30.48zM648.1 299.91c4 7.87 29.72 23.55 29.72 23.55s2.77-30-1.19-37.9a16 16 0 1 0-28.53 14.35zM608.1 364.2c6.14 6.33 35.4 13.58 35.4 13.58s-6.33-29.47-12.47-35.8a16 16 0 1 0-22.93 22.22zM577.8 432.03c5 7.28 32.6 19.36 32.6 19.36s-1.27-30.12-6.24-37.39a16 16 0 1 0-26.36 18z",
    fill: primaryColor
  })), React.createElement("path", {
    d: "M988.6 622.69s5.5 7.19-2.53 18-14.65 20-12 26.77c0 0 12.12-20.14 22-20.43s3.38-12.23-7.47-24.34z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M988.6 622.69a9 9 0 0 1 1.13 2.26c9.62 11.3 14.74 21.85 5.49 22.11-8.61.25-18.94 15.65-21.42 19.54a9.24 9.24 0 0 0 .29.89s12.12-20.14 22-20.43 3.36-12.26-7.49-24.37z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M998.82 631.84c0 2.53-.29 4.58-.64 4.58s-.63-2.05-.63-4.58.35-1.34.7-1.34.57-1.19.57 1.34z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M1002.32 634.86c-2.22 1.21-4.16 1.94-4.32 1.63s1.49-1.53 3.71-2.74 1.35-.33 1.52 0 1.32-.06-.91 1.11z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M959.55 622.69s-5.5 7.19 2.53 18 14.65 20 12 26.77c0 0-12.11-20.14-22-20.43s-3.34-12.23 7.47-24.34z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M959.55 622.69a9 9 0 0 0-1.13 2.26c-9.62 11.3-14.74 21.85-5.49 22.11 8.61.25 18.94 15.65 21.42 19.54a7.16 7.16 0 0 1-.3.89s-12.11-20.14-22-20.43-3.31-12.26 7.5-24.37z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M949.37 631.84c0 2.53.29 4.58.64 4.58s.63-2.05.63-4.58-.35-1.34-.7-1.34-.57-1.19-.57 1.34z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M945.87 634.86c2.22 1.21 4.15 1.94 4.32 1.63s-1.49-1.53-3.71-2.74-1.35-.33-1.52 0-1.31-.06.91 1.11z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M951.12 666.54s15.36-.47 20-3.77 23.63-7.23 24.78-2 23.08 26.3 5.74 26.44-40.29-2.71-44.91-5.52-5.61-15.15-5.61-15.15z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M1001.94 685.41c-17.34.14-40.29-2.7-44.91-5.51-3.52-2.14-4.92-9.83-5.39-13.38h-.52s1 12.39 5.6 15.2 27.57 5.65 44.91 5.52c5-.05 6.73-1.83 6.64-4.46-.72 1.61-2.61 2.6-6.33 2.63z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M.84 718.52c20.68 7.48 45.91 2.93 69.37 3.46 3.21.07 6.62.29 9.19 1.58s3.85 3.39 5.61 5.18c6.58 6.67 20 8.82 31.83 7.69s22.57-4.88 33.71-7.74c19.21-4.93 41.17-7.18 60.12-1.8a14.52 14.52 0 0 0 5.43.86c4.15-.44 5.39-4 8.3-6.06 5.24-3.69 16.63-2.69 18.94-7.56 1.35-2.85-1.76-5.77-5.14-7.72-12.95-7.45-31.48-8.68-48.42-7.53s-33.61 4.32-50.65 4.33c-21.22 0-41.73-4.86-62.75-6.85-14.56-1.38-30.44-1.21-44.09 2.86-14.82 4.4-18.08 14.28-31.45 19.3z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M234.64 698.91a11.63 11.63 0 0 0 3.84-5.78c.49-2.3-.49-5.05-2.68-5.89-2.46-.94-5.09.76-7.08 2.48s-4.28 3.69-6.89 3.33a10.49 10.49 0 0 0 3.24-9.82 4.12 4.12 0 0 0-.9-2c-1.36-1.46-3.84-.83-5.48.32-5.2 3.66-6.65 10.72-6.67 17.08-.53-2.3-.09-4.68-.1-7s-.66-5-2.64-6.22a8 8 0 0 0-4-1c-2.34-.08-4.94.15-6.54 1.86-2 2.12-1.47 5.69.26 8s4.35 3.8 6.76 5.42a15 15 0 0 1 4.84 4.61 4.41 4.41 0 0 1 .36.82h14.59a40.44 40.44 0 0 0 9.09-6.21z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M118.21 714.69s-14-47.71 2.63-82.83a75.4 75.4 0 0 0 6.1-47.27 127.52 127.52 0 0 0-6.7-22.19",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M130.63 540.21c0 5.85-10.59 22.8-10.59 22.8s-10.59-17-10.59-22.8a10.59 10.59 0 1 1 21.18 0zM148.13 572.6c-3.18 4.9-21.28 13.38-21.28 13.38s.32-20 3.5-24.89a10.59 10.59 0 0 1 17.78 11.51zM147.36 627.94c-5.22 2.63-25.13.82-25.13.82s10.38-17.09 15.6-19.72a10.583 10.583 0 1 1 9.53 18.9zM137.35 669.69c-4.7 3.47-24.63 5-24.63 5s7.34-18.6 12-22.08a10.59 10.59 0 1 1 12.59 17zM104.62 587.12c4.19 4.07 23.73 8.29 23.73 8.29s-4.79-19.41-9-23.48a10.59 10.59 0 1 0-14.75 15.19zM93.55 636.09c5.22 2.63 25.13.81 25.13.81s-10.37-17.09-15.6-19.72a10.59 10.59 0 0 0-9.53 18.91zM89.29 685.16c4.7 3.48 24.63 5 24.63 5s-7.34-18.6-12-22.07a10.59 10.59 0 1 0-12.59 17z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M130.63 540.21c0 5.85-10.59 22.8-10.59 22.8s-10.59-17-10.59-22.8a10.59 10.59 0 1 1 21.18 0zM148.13 572.6c-3.18 4.9-21.28 13.38-21.28 13.38s.32-20 3.5-24.89a10.59 10.59 0 0 1 17.78 11.51zM147.36 627.94c-5.22 2.63-25.13.82-25.13.82s10.38-17.09 15.6-19.72a10.583 10.583 0 1 1 9.53 18.9zM137.35 669.69c-4.7 3.47-24.63 5-24.63 5s7.34-18.6 12-22.08a10.59 10.59 0 1 1 12.59 17zM104.62 587.12c4.19 4.07 23.73 8.29 23.73 8.29s-4.79-19.41-9-23.48a10.59 10.59 0 1 0-14.75 15.19zM93.55 636.09c5.22 2.63 25.13.81 25.13.81s-10.37-17.09-15.6-19.72a10.59 10.59 0 0 0-9.53 18.91zM89.29 685.16c4.7 3.48 24.63 5 24.63 5s-7.34-18.6-12-22.07a10.59 10.59 0 1 0-12.59 17z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M85 711.69s17.11-3.4 21.67-7.93 25.1-12.46 27.38-6.79 30.8 24.91 11.41 28.31-45.63 4.53-51.34 2.27S85 711.69 85 711.69z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M145.46 723.17c-19.4 3.4-45.63 4.53-51.34 2.26-4.34-1.72-7.36-10-8.55-13.87l-.57.12s3.42 13.59 9.12 15.86 31.94 1.13 51.34-2.27c5.59-1 7.19-3.28 6.59-6.2-.5 1.9-2.43 3.37-6.59 4.1z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M343.82 813.24c39.32 13.21 87.29 5.17 131.9 6.11 6.11.13 12.58.51 17.48 2.79s7.3 6 10.66 9.16c12.51 11.78 38.12 15.58 60.51 13.57s42.92-8.62 64-13.66c36.52-8.72 78.27-12.68 114.29-3.18 3.31.87 6.79 1.87 10.33 1.52 7.9-.77 10.25-7.1 15.78-10.71 10-6.52 31.62-4.75 36-13.34 2.57-5-3.34-10.21-9.77-13.64-24.61-13.17-59.83-15.34-92.06-13.3s-63.9 7.62-96.29 7.64c-40.35 0-79.34-8.58-119.3-12.1-27.68-2.45-57.89-2.14-83.84 5-28.07 7.83-34.27 25.27-59.69 34.14z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M761.38 739.83c.22-1.91.54-3.81.88-5.71 1.5-8.23-.79-16.07-2-19.3-.35-1-.61-1.57-.61-1.57-6.07-1.65-30 16.89-38.68 23.88-3 0-6.3.13-9.87.37-1.56.11-3.13.15-4.69.12h-5.71c-8.09-6.51-33.1-26.1-39.34-24.4 0 0-.25.56-.61 1.57-1.17 3.23-3.45 11.07-2 19.3.35 1.9.66 3.8.88 5.71.47 4.19 2.22 12.2 8.58 17.63 1.35 9.9 6.45 22.91 10.37 30.81a22.38 22.38 0 0 0 1.33 4.36c-1.62 6.24-3.48 14.39-3 17.08 0 0-8.45-2.05-9.31 8.13v.31c-3.06 1.41-6.87 4.61-2.58 11.34a4.38 4.38 0 0 0 2.21 1.79c.76.27 1.5.27 1.42-.8l5.29 6s9.58 1.1 9.69-4.46l.56.09c1.29.19 2.64.35 4 .49l.66 2.2s-7.19-.15-5.23 4.27c0 0 1.81 1.68 2.43 1.07 0 0-.93 2.9 2.8 2.9 0 0 4 2.14 5.59.62s4.83-3.82 5.14-4.74c.09-.25.13-2.51.14-5.63h.62c8 .19 16.54-.07 24.3-.49h.62c0 3.39.05 5.87.14 6.14.31.92 3.58 3.21 5.14 4.74s5.59-.62 5.59-.62c3.73 0 2.8-2.9 2.8-2.9.62.61 2.43-1.07 2.43-1.07 2-4.42-5.23-4.27-5.23-4.27l.85-2.82 4-.33.62-.06c-.38 6.05 9.69 4.89 9.69 4.89l5.29-6c-.08 1.07.66 1.07 1.42.8a4.38 4.38 0 0 0 2.21-1.79c6.48-10.14-5.5-12.29-5.5-12.29a5.56 5.56 0 0 0-1.13-.18v-.53a22.61 22.61 0 0 0 .08-4c-.45-1.83-3.41-4.73-7.14-5.19-2.43-.3-2.49-11.49-2.23-19.25a22.66 22.66 0 0 0 .38-4.43 23.62 23.62 0 0 0-1-7.06c4.77-8.08 8.59-16.54 9-19.09 6.5-5.46 8.24-13.46 8.71-17.63z",
    transform: "translate(-51.45 -27.31)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M700.72 789.69c-.38 5.27-1.4 13.73-1.4 13.73s-4.24.52-10.79 1.11l-4.44.38c-3.42.27-7.24.54-11.28.77-7.48.41-15.69.66-23.42.48-3.87-.09-7.62-.29-11.1-.63-1.55-.15-3-.33-4.49-.55-8.87-1.32-15.18-3.85-15.76-8.3a25.61 25.61 0 0 1-.21-5.66c.83-10 9-8 9-8-.53-2.76 1.45-11.34 3-17.55 1-3.91 1.87-6.88 1.87-6.88l57.23-3.84h.19a2.81 2.81 0 0 1 2.8 2.95c-.34 6.86-.83 22.58 2 22.93 3.6.45 6.45 3.3 6.88 5.1a21.71 21.71 0 0 1-.08 3.96zM652.1 714.34s-21.58 26-32 18.79c-.25-.17-.49-.35-.72-.53-7-5.3-8.83-13.82-9.31-18.15-.21-1.88-.51-3.74-.84-5.61-1.45-8.08.76-15.77 1.88-18.95.34-1 .58-1.53.58-1.53 7.24-2 40.41 25.98 40.41 25.98z",
    fill: "#d3899b"
  }), React.createElement("path", {
    d: "M640.55 716.74s-6.8 4.8-16.39 12.59a34.24 34.24 0 0 1-4.71 3.27c-7-5.3-8.83-13.82-9.31-18.15-.21-1.88-.51-3.74-.84-5.61-1.45-8.08.76-15.77 1.88-18.95 13.37.94 29.37 26.85 29.37 26.85z",
    fill: "#eec5cd"
  }), React.createElement("path", {
    d: "M633.12 714.18s-3.63 2.56-8.75 6.72a19.49 19.49 0 0 1-2.52 1.79c-3.73-2.83-4.71-7.38-5-9.69-.11-1-.27-2-.45-3a20.81 20.81 0 0 1 1-10.11c7.2.46 15.72 14.29 15.72 14.29z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M666.09 714.34s21.59 26 32 18.79l.72-.53c7-5.3 8.82-13.82 9.3-18.15.21-1.88.52-3.74.85-5.61 1.44-8.08-.76-15.77-1.89-18.95-.34-1-.59-1.53-.59-1.53-7.21-2-40.39 25.98-40.39 25.98z",
    fill: "#d3899b"
  }), React.createElement("path", {
    d: "M677.68 716.74s6.8 4.8 16.39 12.59a34.89 34.89 0 0 0 4.72 3.27c7-5.3 8.82-13.82 9.3-18.15.21-1.88.52-3.74.85-5.61 1.44-8.08-.76-15.77-1.89-18.95-13.41.94-29.37 26.85-29.37 26.85z",
    fill: "#eec5cd"
  }), React.createElement("path", {
    d: "M685.13 714.16s3.61 2.55 8.7 6.68a18.6 18.6 0 0 0 2.5 1.74c3.7-2.81 4.68-7.34 4.94-9.63.11-1 .27-2 .44-3a20.8 20.8 0 0 0-1-10.06c-7.11.52-15.58 14.27-15.58 14.27zM688.95 754.77c-2.72 4.31-5.62 8.2-8.27 10.53-8.59 7.59-45.56 4.6-48 4.2-.5-.08-1.55-1.58-2.87-4 1-3.91 1.87-6.88 1.87-6.88z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M659.66 712.16c-1.5.11-3 .14-4.51.12-7.73-.13-33.73.21-36.62 10.7-3.4 12.34 11.79 45.52 14.19 45.92s39.37 3.4 48-4.2 19.79-31.37 19.19-33.57c-.04 0 10.64-22.5-40.25-18.97z",
    fill: "#d3899b"
  }), React.createElement("path", {
    d: "M658.85 732.23s-19-2.93-28 15.81a22.83 22.83 0 0 0 1.68 23c3 4.18 7.33 7.29 13.4 4.78 13.51-5.55 12.92-43.59 12.92-43.59z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M658.25 731.03s-19-2.93-28 15.81a22.83 22.83 0 0 0 1.68 23c3 4.18 7.33 7.29 13.4 4.79 13.51-5.56 12.92-43.6 12.92-43.6z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M658.25 731.63s-19-2.93-28 15.81a22.83 22.83 0 0 0 1.68 23c3 4.18 7.33 7.29 13.4 4.78 13.51-5.53 12.92-43.59 12.92-43.59z",
    fill: "#eec5cd"
  }), React.createElement("path", {
    d: "M637.71 748.01s-2.6 2.4-1.6 3 1.6-3 1.6-3zM640.55 751.08s-1.41 3.13-.41 3.48 1.61-2.25 1.61-2.25zM634.23 755.81s-1.38 3.7 0 3.7 0-3.7 0-3.7z",
    fill: "#3f2b3b"
  }), React.createElement("path", {
    d: "M632.55 765.69s2.77 7.1 10 6.6M639.01 767.8s2.9 2.8 6 .8",
    fill: "none",
    stroke: "#3f2b3b",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M661.25 732.23s19-2.93 28 15.81a22.79 22.79 0 0 1-1.68 23c-3 4.18-7.33 7.29-13.39 4.78-13.53-5.55-12.93-43.59-12.93-43.59z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M661.85 731.03s19-2.93 28 15.81a22.79 22.79 0 0 1-1.68 23c-3 4.18-7.33 7.29-13.39 4.79-13.53-5.56-12.93-43.6-12.93-43.6z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M661.85 731.63s19-2.93 28 15.81a22.79 22.79 0 0 1-1.68 23c-3 4.18-7.33 7.29-13.39 4.78-13.53-5.53-12.93-43.59-12.93-43.59z",
    fill: "#eec5cd"
  }), React.createElement("path", {
    d: "M682.38 748.01s2.6 2.4 1.6 3-1.6-3-1.6-3zM679.55 751.08s1.42 3.13.41 3.48-1.61-2.25-1.61-2.25zM685.86 755.81s1.38 3.7 0 3.7 0-3.7 0-3.7z",
    fill: "#3f2b3b"
  }), React.createElement("path", {
    d: "M687.55 765.69s-2.78 7.1-10 6.6M681.08 767.8s-2.9 2.8-6 .8",
    fill: "none",
    stroke: "#3f2b3b",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M651 785.89c.5-.1 10-4.2 19.79 0z",
    fill: "#3f2b3b"
  }), React.createElement("path", {
    d: "M633.8 804.98c-8.87-1.32-15.18-3.85-15.76-8.3a25.61 25.61 0 0 1-.21-5.66 13.09 13.09 0 0 1 3.39-1.24c1.61-.45 3.6-.15 7.8 1s3.9 6.15 4.8 12.59a5 5 0 0 1-.02 1.61z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M620.63 790.38s-11.55 2.12-5.3 12.07a4.23 4.23 0 0 0 2.13 1.76c.73.26 1.44.26 1.37-.79l5.09 5.85s10.2 1.2 9.3-5.25-.6-11.39-4.8-12.59-6.19-1.5-7.79-1.05z",
    fill: "#d3899b"
  }), React.createElement("path", {
    d: "M623.37 797.08s2.45 5.6 5.85.9M617.76 799.28s1.27 5.28 6.06 1.34",
    fill: "none",
    stroke: "#3f2b3b",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M700.72 789.69c-.38 5.27-1.4 13.73-1.4 13.73s-4.24.52-10.79 1.11a6.07 6.07 0 0 1 0-1.11c.9-6.44.6-11.39 4.8-12.59 3.86-1.09 5.86-1.44 7.39-1.14z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M701.77 790.38s11.54 2.12 5.3 12.07a4.3 4.3 0 0 1-2.14 1.76c-.73.26-1.44.26-1.36-.79l-5.1 5.85s-10.19 1.2-9.29-5.25.6-11.39 4.79-12.59 6.19-1.5 7.8-1.05z",
    fill: "#d3899b"
  }), React.createElement("path", {
    d: "M699.02 797.08s-2.45 5.6-5.85.9M704.64 799.28s-1.27 5.28-6.07 1.34",
    fill: "none",
    stroke: "#3f2b3b",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M649.39 806.16c-3.87-.09-7.62-.29-11.1-.63l-3.45-11.64a7.4 7.4 0 1 1 14.49-2.2c.03 4.57.07 10.31.06 14.47z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M634.24 793.89l4.07 13.73s-6.93-.15-5 4.2c0 0 1.74 1.65 2.34 1 0 0-.89 2.85 2.7 2.85 0 0 3.89 2.09 5.39.6s4.66-3.75 5-4.65c.19-.59.13-12.07.07-20a7.4 7.4 0 0 0-7.4-7.33 7.39 7.39 0 0 0-7.17 9.6z",
    fill: "#d3899b"
  }), React.createElement("path", {
    d: "M639.74 811.17s-3 2.9-1.43 4.55M638.41 809.36s-2.8.91-2.8 3.51",
    fill: "none",
    stroke: "#3f2b3b",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M687.67 791.78a7.44 7.44 0 0 1-.31 2.11l-3.27 11c-3.42.27-7.24.54-11.28.77 0-4.11 0-9.59.06-14a7.4 7.4 0 0 1 14.8.06z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M687.95 793.89l-4.07 13.73s6.93-.15 5 4.2c0 0-1.74 1.65-2.34 1 0 0 .9 2.85-2.7 2.85 0 0-3.88 2.09-5.39.6s-4.65-3.75-5-4.65c-.2-.59-.14-12.07-.07-20a7.39 7.39 0 0 1 7.39-7.33 7.39 7.39 0 0 1 7.18 9.6z",
    fill: "#d3899b"
  }), React.createElement("path", {
    d: "M682.45 811.17s3 2.9 1.43 4.55M683.78 809.36s2.8.91 2.8 3.51",
    fill: "none",
    stroke: "#3f2b3b",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M658.25 728.63s-14.09-.45-14.54 10.49 22 6.3 22 6.3 9.45-1.27 7.8-7.91-5.06-8.28-15.26-8.88z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M658.25 727.43s-14.09-.45-14.54 10.49 22 6.3 22 6.3 9.45-1.27 7.8-7.91-5.06-8.28-15.26-8.88z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M658.25 728.03s-14.09-.45-14.54 10.49 22 6.3 22 6.3 9.45-1.27 7.8-7.91-5.06-8.28-15.26-8.88z",
    fill: "#3f2b3b"
  }), React.createElement("path", {
    d: "M626.8 783.04s4.72 1.7 5.68 4.94M693.92 780.69s-3.38 1.42-3.15 7.34",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 678.25,
    cy: 831.84,
    rx: 2.2,
    ry: 3.64,
    transform: "rotate(-30 601.564 914.189)",
    fill: "#eec5cd"
  }), React.createElement("ellipse", {
    cx: 747.24,
    cy: 831.84,
    rx: 3.64,
    ry: 2.2,
    transform: "matrix(.5 -.87 .87 .5 -398.22 1035.74)",
    fill: "#eec5cd"
  }), React.createElement("path", {
    d: "M682.31 433.41c-3.25-1.06-22.38-15.89-23.82-22.6s10.1-69.2 10.1-69.2-1.06-.05-2.76-.21v-1l2.37-82.11s9.74-55.07-8.66-51.9-6.86 51.9-6.86 51.9-2.1 24.72-3.57 32.14c-1.43 7.14-7.85 36.26-3.46 45.31a6.88 6.88 0 0 0 .54.93s.72 31.06-7.22 35.3c-7.58 4-10.73 24.36-11 26.19l-.4-.18a22.07 22.07 0 0 1-5.88-5.24c-.15-.21-.29-.44-.44-.66a29.86 29.86 0 0 0-.83-41.14l-.75-.73A5.26 5.26 0 0 0 621 348c1.4-4.22-3.44-7.61-5.95-10.25-5.81-6.18-11.05-13.75-19.15-17.25a32.35 32.35 0 0 1 6.4 4.76 27.31 27.31 0 0 0-8.27-4.9c-8.48-3-18.24-.52-25.64 4.54s-12.87 12.35-17.87 19.7l-2.42 3.6a58.93 58.93 0 0 0-6.9-6.59c-4.69-3.53-14.07-15.18-14.07-15.18s-29.23-29.66-31.4-37.78-31.39-56.85-37.89-48.37 22.37 45.54 22.37 45.54 5.42 13.42 9.75 18 36.44 50.49 36.44 50.49l2.72 5.5.51 1-.34-.19v6.71l3 .27a28.44 28.44 0 0 0-3.64 3.89 25.1 25.1 0 0 0-3.58 7.77c-4.73 15.63-2.8 32.74 3.3 47.91 1.26 3.12 2.7 6.23 3.08 9.56.55 4.66-1 9.27-1.94 13.88-1.3 6.47-1.25 13.52 2 19.29 4.35 7.66 14.1 11.65 22.94 10.22a26 26 0 0 0 11.14-4.74 29.69 29.69 0 0 0 9.71-11.28c1.65-3.37 2.68-7 4.32-10.38.31-.65.66-1.27 1-1.9 3.74 4.19 7.1 8 7.1 8s7.94 38.13 1.08 48.72a65.31 65.31 0 0 1-13.11 14.12 25.58 25.58 0 0 0-3.49 3.49c-.68.49-1.08.75-1.08.75s-.18.51-.44 1.29a23.58 23.58 0 0 0-3.44 7.79 5.14 5.14 0 0 0-.26 2.22c.49 1-3.53 5-2.35 6.71-10 11.5-11.92 28.94-11.92 28.94l-18.23 27.19c-9.38 24.18-23.45 26.66-23.45 26.66s-33-21.72-33.93-22.78-13.53-6.35-13.53-6.35a14.17 14.17 0 0 0-6.49-5.83c-4.33-1.76-4.69-8.29-4.69-8.29-.54-15.36-9.75-16.6-9.75-16.6-7.42-.61-13.1.68-17.45 3.05l-1.32.1c-6.39.51-14.09 1.07-22.55 1.62-23.47 1.52-29.05 16.42-29.05 16.42s-2.89 3.17.9 6.61 28 .06 29-.08a15.69 15.69 0 0 1-5.51-.37c3.82-.14 9.06-.27 13.52-.28h1.09a55.35 55.35 0 0 0-.4 7c0 4.42 12.45 7.24 12.45 7.24l37.89 33s23.82 10.42 39 25.42 28.51 2.12 28.51 2.12c16-3.88 62.21-58.55 62.25-58.6 0 1.68 1 54.77 2.84 65.44a7 7 0 0 0 .4 1.58c2.17 4.6-.72 17.13-2 22.43s-.91 13.41-.91 13.41-17.3 64.92-15.81 70.57-9.39 32.13-9.39 32.13v22.06s.69 0 1.89-.09a10.41 10.41 0 0 0-.68 1.09 2 2 0 0 0-.12.24s11.54 2.47 19.3 1.76 21.11 5.87 21.11 5.87 4.52 2.08 18.41 3 13.89-6 13.89-6c-1.6-9.39-23.53-12.52-24.22-12.61-1.77-1.09-3.43-2.28-4.79-3.3l-.29-.23a3.45 3.45 0 0 0 .25-.63c2.35-9.36-10.64-13.42-10.64-13.42v-2.29c8.47-4.24 10.1-33.37 10.1-33.37s12.63-36 14.43-42 0-15 0-15l1.27-7.76s2.7-5.3 2.7-6.36a15.56 15.56 0 0 1 3.07-7.41c2-2.3-2.16-7.77-2.16-7.77l3.61-9.18v-10.12l8.47-36.54s8.85-42.55 5.78-56.5 3.61-21 3.61-21a18.68 18.68 0 0 1-1.86.83 50.14 50.14 0 0 0 2.19-5.87l19 2.31v.27h6.85s-2.16-26.13-2.16-36.72 7.22-48.37 7.22-48.37 3.22-37.08-.02-38.14zm-84.26-31v.43c0 1-.1 2.11-.17 3.2l-.38.58-.69-.59-.87 1.31a5.11 5.11 0 0 1 1.48-4.6 5.45 5.45 0 0 1 .63-.32zm63.12 122.33h.42l-.68 1.72c.09-.56.17-1.13.26-1.71zm-69.31 312.4l-2.59-.63 1.44-.24 1.3.85.16.1zm26.44-3.7c-.86-.45-1.73-1-2.57-1.48.27.15 1.38.72 2.57 1.48z",
    transform: "translate(-51.45 -27.31)",
    fill: "url(#prefix__b)"
  }), React.createElement("path", {
    fill: "#f1d2d7",
    d: "M616.03 471l-16.55 43.12-2.32-1.9-9.22 14.31 28.09 3.5V471z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M616.01 471l-16.56 43.12-4.16-1.12-7.38 13.53 28.1 3.5V471z"
  }), React.createElement("path", {
    fill: "#f1d2d7",
    d: "M590.09 498.59h25.94l9.52-78.36h-35.46v78.36z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M590.09 498.59h25.94l9.52-78.36h-35.46v78.36z"
  }), React.createElement("path", {
    d: "M539.42 438.79l5.59-1 12.87-2.1s38.65-8.7 46.66-9.4c5-.44 10.53-2.5 14-4 2.09-.89 3.42-1.58 3.42-1.58l-13.92-25.43-21.6-16s-13.66-2.91-19.45-10.86a12.84 12.84 0 0 1-1.79-12.13c3.53-10.94-21.06 10.45-21.06 10.45s.24 5.12 0 11.65c0 1.29-.12 2.63-.21 4-.06.9-.14 1.8-.22 2.72-.61 6.48-1.84 13.16-4.26 17.15-5.9 9.71-.03 36.53-.03 36.53z",
    fill: "#ffbec7"
  }), React.createElement("path", {
    d: "M544.12 378.88h.54c1 0 1.77-2.08 2.73-2.18 7.69-.74 14.71-2.35 19.59-7.79a12.87 12.87 0 0 1-1.79-12.13c3.53-10.94-21 10.44-21 10.44s.19 5.12-.07 11.66z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M514.19 347.89a30 30 0 0 0 30 29.95 28.26 28.26 0 0 0 2.92-.15 29.95 29.95 0 1 0-32.87-29.8z",
    fill: "#ffbec7"
  }), React.createElement("path", {
    d: "M514.19 347.89a30 30 0 0 0 30 29.95 28.26 28.26 0 0 0 2.92-.15 3.64 3.64 0 0 0 1.38-1 4.41 4.41 0 0 0 .54-3.65c-1.18-5.85-6.49-10.05-8.4-15.71-1.68-5-.42-10.67 2.16-15.29s6.39-8.43 10.15-12.17a6.18 6.18 0 0 1 2.32-1.68c3.2-1 8 1.8 10.54-1.06a30 30 0 0 0-51.56 20.74z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M554.16 327.69a6.07 6.07 0 0 0-2.32 1.68c-3.75 3.74-7.56 7.54-10.14 12.17s-3.84 10.26-2.16 15.28c1.9 5.67 7.22 9.87 8.39 15.72a4.39 4.39 0 0 1-.54 3.64c-1 1.25-2.9 1.32-4.2 2.26-1.66 1.21-2 3.61-1.5 5.6a23.85 23.85 0 0 0 2.75 5.48c2.8 4.95 4 11.39 1 16.2a25.74 25.74 0 0 1-5 5.21 76.79 76.79 0 0 0-8.72 9.13 45 45 0 0 0-5.82 8.9c-1.58 3.33-2.58 6.92-4.17 10.25-3.73 7.79-11.07 14-19.6 15.41s-17.94-2.53-22.13-10.08c-3.16-5.7-3.2-12.65-1.95-19 .89-4.54 2.4-9.09 1.88-13.69-.38-3.28-1.77-6.35-3-9.43-5.88-15-7.75-31.84-3.19-47.26a25.19 25.19 0 0 1 3.46-7.67 46.55 46.55 0 0 1 5.46-5.69c6.23-6.09 10.82-13.62 15.65-20.87s10.09-14.45 17.24-19.44 16.56-7.46 24.74-4.47c8.56 3.13 13.85 11.11 19.79 17.53 2.41 2.62 7.09 5.95 5.74 10.12-1.97 5.88-7.91 1.84-11.66 3.02z",
    fill: "#493545"
  }), React.createElement("path", {
    d: "M500.55 453.19c8.52-1.41 15.86-7.62 19.59-15.42 1.6-3.32 2.59-6.91 4.18-10.24a45 45 0 0 1 5.81-8.9 77.77 77.77 0 0 1 8.73-9.14 25.44 25.44 0 0 0 5-5.21c3-4.81 1.85-11.25-.94-16.19a24.36 24.36 0 0 1-2.76-5.49c-.52-2-.16-4.39 1.5-5.59 1.31-.94 3.19-1 4.21-2.26a4.39 4.39 0 0 0 .54-3.64c-1.18-5.86-6.5-10.05-8.4-15.72-1.68-5-.43-10.66 2.16-15.29s6.38-8.41 10.1-12.17a6.16 6.16 0 0 1 2.33-1.67c3.74-1.18 9.69 2.86 11.61-3.05 1.35-4.17-3.33-7.51-5.74-10.12-5.11-5.53-9.75-12.21-16.41-16 7.81 3.42 12.87 10.91 18.5 17 2.41 2.61 7.09 5.94 5.74 10.11-1.92 5.91-7.87 1.87-11.61 3.05a6.18 6.18 0 0 0-2.33 1.68c-3.75 3.74-7.55 7.54-10.14 12.17s-3.84 10.26-2.16 15.29c1.9 5.66 7.22 9.86 8.4 15.71a4.39 4.39 0 0 1-.54 3.64c-1 1.25-2.91 1.32-4.21 2.27-1.66 1.2-2 3.6-1.5 5.59a23.49 23.49 0 0 0 2.76 5.48c2.79 4.95 4 11.39.94 16.2a25.69 25.69 0 0 1-5 5.21 78.47 78.47 0 0 0-8.73 9.13 45.25 45.25 0 0 0-5.81 8.9c-1.59 3.34-2.58 6.92-4.18 10.25-3.73 7.79-11.07 14-19.59 15.41a22.59 22.59 0 0 1-14.63-2.66 22.56 22.56 0 0 0 12.58 1.67z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M532.28 802.69l5.23 3.45.79.53.16.11 6.19 4.09 14.44 2.44 12.72-.87s3.66-7.66-2.09-7.49a12 12 0 0 1-5.26-1.5l-.78-.41c-.83-.44-1.67-.93-2.48-1.45-1.7-1.08-3.31-2.25-4.62-3.26-1.9-1.47-3.17-2.59-3.17-2.59z",
    fill: "#ffbec7"
  }), React.createElement("path", {
    d: "M537.55 806.16l.79.53.16.11 6.19 4.09 14.44 2.44 12.72-.87s3.66-7.66-2.09-7.49a12 12 0 0 1-5.26-1.5 4.6 4.6 0 0 1 2 2.37c.23 2-9.4 5.5-9.4 5.5l-13.59-3.59s-2.31-.65-5.48-1.47l-.3-.08z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M514.35 809.5s11.14 2.43 18.63 1.74 20.37 5.78 20.37 5.78 4.36 2 17.76 2.93 13.44-5.93 13.44-5.93c-1.54-9.25-22.71-12.35-23.38-12.43.27.14 1.34.71 2.48 1.45 1.5 1 3.13 2.27 3.25 3.3.23 2-9.4 5.5-9.4 5.5l-13.58-3.58s-2.31-.66-5.49-1.48l-.3-.08a117.58 117.58 0 0 0-14.24-3c-5.85-.62-8.85 4.36-9.46 5.51-.05.21-.08.29-.08.29z",
    fill: "#bd577a"
  }), React.createElement("path", {
    d: "M338.83 563.81l5.92 4.53s1.72-.08 4.28-.17h.82c3.68-.13 8.74-.26 13.05-.27 4 0 7.32.12 8.32.47 3 1 8.18-16.89 8.18-16.89l-5.94-1.4-2-.46-1.38-.32-4.82-1.13-14.63 1.65-10.27 6.62z",
    fill: "#ffbec7"
  }), React.createElement("path", {
    d: "M338.83 563.81l5.92 4.53s1.72-.08 4.28-.17a5.18 5.18 0 0 1-2.71-2.45c-3.83-10.62 15.15-15.14 15.15-15.14l8.84-.39 1.71-.07 1.44-.07-2-.46-1.38-.32-4.82-1.13-14.63 1.65-10.27 6.62z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M327.16 568.59c3.58 3.32 27 .06 28-.08a14.63 14.63 0 0 1-5.32-.37c-3.27-.92-4.06-2.94-4.06-2.94-3.82-10.62 15.15-15.15 15.15-15.15l8.85-.38 1.71-.08 21.48-.93 1.05-5.92s-7 .67-17.94 1.54c-6.17.5-13.61 1.06-21.76 1.59-22.65 1.5-28 16.2-28 16.2s-2.77 3.13.84 6.52z",
    fill: "#bd577a"
  }), React.createElement("path", {
    d: "M590.1 312.15a7.31 7.31 0 0 0 .51.92l5.23 7.66 13.58 1.4.15-5.38 2.28-81s9.41-54.33-8.35-51.19-6.62 51.19-6.62 51.19-2 24.38-3.45 31.69c-1.37 7.06-7.57 35.78-3.33 44.71zM559.62 513.31l3.86 6.62 8.65 14.8s15.7 5.75 19.7 1.39c2.21-2.4 4.58-10.73 6.25-17.72 1.37-5.69 2.28-10.49 2.28-10.49z",
    fill: "#ffbec7"
  }), React.createElement("path", {
    d: "M559.62 513.31l3.86 6.62a4.94 4.94 0 0 0 .67-.7c4.36-5.58 23.61-1.18 33.93-.83 1.37-5.69 2.28-10.49 2.28-10.49zM362.9 567.87c4 0 7.32.12 8.32.47 3 1 8.18-16.89 8.18-16.89l-7.85-1.86 21.48-.93 1.05-5.92s-7 .67-17.94 1.54a22.17 22.17 0 0 0-6 5l-.33.4c-4.57 5.61-6.26 12.85-6.91 18.19zM532.28 802.69l6 4c9-1.62 17.21-4.17 18.18-8.16a1.77 1.77 0 0 0 0-.2c-1.9-1.47-3.17-2.59-3.17-2.59zM514.46 809.26a204.86 204.86 0 0 0 23.7-2.54 117.58 117.58 0 0 0-14.24-3c-5.85-.59-8.85 4.39-9.46 5.54z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M363.55 574.78c0 4.35 12 7.14 12 7.14l36.57 32.56s23 10.27 37.61 25.07 27.53 2.14 27.53 2.14c15.49-3.83 60.07-57.81 60.07-57.81s1.05 61.64 3.14 66.17-.7 16.89-1.92 22.12-.87 13.23-.87 13.23-16.72 63.9-15.32 69.47-9.06 31.69-9.06 31.69v21.77s40.92-1.57 43.18-10.8-10.27-13.23-10.27-13.23v-2.31c8.18-4.18 9.75-32.91 9.75-32.91s12.19-35.53 13.93-41.39 0-14.81 0-14.81l1.22-7.66s2.61-5.22 2.61-6.26a15.56 15.56 0 0 1 3-7.32c1.92-2.26-2.09-7.66-2.09-7.66l3.49-9v-9.93l8.18-36s8.53-42 5.57-55.72 3.49-20.73 3.49-20.73c-14 7.34-21-9-23.33-16-.6-1.81-.88-3-.88-3s-19.19-7.08-37.07-5.4a43.55 43.55 0 0 0-10.64 2.26c-19.85 7.14-23 36.74-23 36.74l-17.59 26.82c-9 23.85-22.64 26.29-22.64 26.29s-31.86-21.42-32.73-22.46-13.06-6.27-13.06-6.27a13.82 13.82 0 0 0-6.27-5.75c-4.18-1.74-4.52-8.18-4.52-8.18-.53-15.15-9.41-16.37-9.41-16.37-30.84-2.72-30.67 29.15-30.67 33.5z",
    fill: "#e7aeb8"
  }), React.createElement("path", {
    fill: "#f1d2d7",
    d: "M559.62 489.63h-18.81V431.3h18.81z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M557.88 487.24h-18.81v-58.33h18.81zM590.09 312.02a1.16 1.16 0 0 0 0 .13 7.31 7.31 0 0 0 .51.92l5.23 7.66 13.58 1.4.15-5.38c-4.24-.37-13.88-1.53-19.47-4.73z"
  }), React.createElement("path", {
    d: "M590.61 313.07s.7 30.64-7 34.82-10.64 26-10.64 26 23.18 15.28 28.4 22 17.06 22.73 14.63 26.56 5.96 21.24 5.96 21.24-15.33 31.35-11.84 43.19 3.83 43.18 3.83 43.18h6.6s-2.09-25.77-2.09-36.22 7-47.71 7-47.71 3.13-36.57 0-37.61-21.59-15.67-23-22.29 9.75-68.26 9.75-68.26-14.28-.72-21.6-4.9z",
    fill: "#f1d2d7"
  }), React.createElement("path", {
    d: "M540.47 425.9a29.67 29.67 0 0 0 4.54 11.94l12.87-2.15s38.65-8.7 46.66-9.4c5-.44 10.53-2.5 14-4a61.55 61.55 0 0 0-17.29-28.34l-4.91-4.55a83.23 83.23 0 0 0-24.72-15.82c.57.49 41.12 35.11 32.24 41.9s-32.77-9.79-32.77-9.79l-27.19-23.36-1-.85-1.58 2.44a23.61 23.61 0 0 1 2.35 1.13 40 40 0 0 1 19.07 23.77c5.61 18.8-22.27 17.08-22.27 17.08zM532.11 512.96s25.77 14.28 32 6.27c1.38-1.76 4.24-2.53 7.84-2.74-.6-1.81-.88-3-.88-3s-19.19-7.08-37.07-5.4c-1.15 2.97-1.89 4.87-1.89 4.87z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M543.96 381.5l28.17 24.19s23.82 16.6 32.76 9.76-32.24-41.91-32.24-41.91a83 83 0 0 1 24.73 15.82l4.91 4.55c12.9 11.95 15.81 11.95 16.24 29.53.11 4.32-1.36 10.54-2.49 11.67-4.18 4.14-7.12 33.86-6.47 37.34s-7.81 33.54-5 41.9-34.12-4.18-40.39 3.83-32-6.27-32-6.27 14.28-36.57 17.76-39 7.66-21.25 0-30-8.39-17.01-8.39-17.01 27.88 1.73 22.29-17.06a39.45 39.45 0 0 0-21.42-24.9z",
    fill: "#e8e8f0"
  }), React.createElement("path", {
    d: "M581.55 443.14s-10.8 20.38-24.79 25.67c-.44.16-.88.31-1.33.45-14.62 4.43 27.17-19.85 26.12-26.12z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M430.42 262.92s5.22 13.24 9.4 17.76 35.17 49.8 35.17 49.8l2.63 5.43 2.25 4.67 19.85-2.09 1.39-8-.76-.93c-2-2.39-7.43-8.81-11.08-11.61-4.52-3.48-13.58-15-13.58-15s-28.21-29.26-30.29-37.26-30.3-56.07-36.57-47.71 21.59 44.94 21.59 44.94z",
    fill: "#ffbec7"
  }), React.createElement("path", {
    d: "M477.62 335.91l2.25 4.67 19.85-2.09 1.39-8-.76-.93c-2.14 1.05-18.01 8.66-22.73 6.35z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M550.91 388.29s-4.87-7.66-7.66-5.57-3.87-6.27-5.42-4.88-6.25 5.28-8.16-.16c-1.52-4.32-18-31.62-24.72-42.62l-2.79-4.58s-18.81 9.41-23.33 6.27v6.62l3.83.35 20.54 38.3s6.46 10.25 6 13.84 8.26 19.25 9.65 20.29 16.37 18.46 16.37 18.46 7.66 37.61 1 48.06-18.11 18.11-18.11 18.11-3.45 10.09-3 11.14-4 5.57-1.93 7 4.88 11.15 4.88 11.15 9.75-15.67 15-18.11 12-34.48 12-34.48 1.92-18.89 2.08-31.08-.41-58.11 3.77-58.11z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M549.87 388.29s-4.88-7.66-7.66-5.57-3.87-6.27-5.42-4.88-6.25 5.28-8.16-.16c-1.53-4.32-18-31.62-24.72-42.62-1.72-2.83-2.8-4.58-2.8-4.58s-18.8 9.41-23.33 6.27v6.62l3.83.35 20.55 38.3s6.45 10.25 6 13.84 8.27 19.25 9.66 20.29 16.37 18.46 16.37 18.46 7.66 37.61 1 48.06a63.77 63.77 0 0 1-12.64 13.92 24.44 24.44 0 0 0-8.16 13.15 5.16 5.16 0 0 0-.24 2.18c.51 1-4 5.57-1.93 7s4.87 11.15 4.87 11.15 9.75-15.67 15-18.11 12-34.48 12-34.48 1.91-18.89 2.07-31.08-.47-58.11 3.71-58.11z",
    fill: "#f1d2d7"
  }), React.createElement("path", {
    d: "M502.16 546.74s14.63 2.79 20.55 7-22.29-6.62-22.29-6.62zM537.33 583.83s15.32 12.71 12.54 24.21-9.8 40.4-9.8 40.4zM403.87 559.37s-21.51 2.35-20.12 5.13 20.12-2.56 20.12-2.56zM569.02 665.15s1.4 1.74-6.61 0-2.09-7.1-2.09-7.1zM566.24 689.18s-11 1.74-16.81 0 16.81 0 16.81 0zM543.77 783.2s-1.91-2.09-11.49 1.75-13.41 4-16.19 2.78 27.68-4.53 27.68-4.53zM554.4 556.41l-13.59 18.89s7.32-16.54 13.59-18.89zM527.93 382.69s-.58 6.27-9.34 8.71-10.42 4.43-10.42 4.43M505.24 337.25s-11.55 8.22-23.63 6.47M514.04 512.79s3.38 2.12 11.48-7.15M598.19 414.56c.33-1.69-.85-3.27-2-4.59l-2.27-2.71a10.71 10.71 0 0 0-1.48-1.53c-1.34-1.05-3.12-1.37-4.54-2.31",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M633.78 75.92H484.83a19.05 19.05 0 0 0-19.16 18.94v147.29a19.05 19.05 0 0 0 19.16 18.94h149a19.05 19.05 0 0 0 19.16-18.94V94.86a19.05 19.05 0 0 0-19.21-18.94z",
    transform: "translate(-51.45 -27.31)",
    fill: "url(#prefix__c)"
  }), React.createElement("rect", {
    x: 415.58,
    y: 48.61,
    width: 185.18,
    height: 185.18,
    rx: 18.95,
    ry: 18.95,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M476.34 166.9a11 11 0 1 0 7.77 3.22 10.67 10.67 0 0 0-7.77-3.22zM473.89 143.69a12.29 12.29 0 1 0-3.6 8.65 11.78 11.78 0 0 0 3.6-8.65zM544.9 115.48a6.13 6.13 0 1 0-4.35-1.79 5.91 5.91 0 0 0 4.35 1.79zM476.34 95.9a13.45 13.45 0 1 0 9.53 3.94 13 13 0 0 0-9.53-3.94zM564.8 138.44a7.4 7.4 0 1 0 2.14 5.2 7.09 7.09 0 0 0-2.14-5.2zM544.9 169.35a8.62 8.62 0 1 0 6 2.53 8.28 8.28 0 0 0-6-2.53zM510.62 182.82a9.8 9.8 0 1 0 6.93 2.87 9.48 9.48 0 0 0-6.93-2.87zM510.62 79.98a14.61 14.61 0 1 0 10.41 4.28 14.2 14.2 0 0 0-10.41-4.28z",
    fill: "#eaeaf3"
  }));
};

UndrawLoading.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawLoading;