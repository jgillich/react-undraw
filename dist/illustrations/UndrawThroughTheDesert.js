function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawThroughTheDesert = function UndrawThroughTheDesert(_props) {
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
    viewBox: "0 0 910 594.44",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 623.46,
    y1: 711.48,
    x2: 623.46,
    y2: 335.25,
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
    x1: 586.82,
    y1: 530.24,
    x2: 586.82,
    y2: 228.37,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M291.61 493.22c9.28-.7 18.55 1 27.41 2.87 53.2 11 107.62 26.72 163 20.87 29.39-3.11 57-12.23 86.78-12.73 50.46-.86 96.43 23 146.64 19.84 10.26-.65 22.79-1.89 29 3.15 7.2 5.88-.63 16.06 8.6 20.77 2.75 1.4 6.63 2 8.68 3.78 3.16 2.76.12 6.66-4 8.9-25 13.52-67-6.55-96.88 2.57-6.63 2-12 5.34-18.37 7.61-9.07 3.22-19.76 4.17-30.15 5.06l-159 13.66c-38.07 3.27-76.63 6.54-114.84 3.93s-76.66-11.78-101.64-29.65c-5.37-3.84-10.18-8.21-11.57-13.19-6.55-23.49 26.8-54.44 66.34-57.44z",
    fill: "#252223",
    opacity: 0.1
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.3,
    d: "M214.9 169.13l107.45 123.75 107.46 123.75H0l107.45-123.75L214.9 169.13z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.3,
    d: "M350.63 170.85L458.08 294.6l107.45 123.75h-429.8L243.18 294.6l107.45-123.75z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M585.29 0L253.71 418.35l479.33-2.58H910L585.29 0z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M910 415.77H733.04L585.29 0 910 415.77z"
  }), React.createElement("path", {
    d: "M818 392.49c-.8-5-3.57-11.16-12.26-12.29 0 0 7.94-24.91-46.45-24.53a13.65 13.65 0 0 0-20-8.15v-12.27s-31.92 11.08-5.86 40.39v20.08a6.25 6.25 0 0 0 .19 1.52 6.29 6.29 0 0 1 .18 1.18c.33 6 2.08 52.9-24.14 63.88-28 11.73-32.57-42.35-32.57-42.35-3.43-70.31-34.44-75.92-42-76.24-.91 0-1.82-.14-2.73-.26-3.48-.45-14.88 1.36-26.29 39.36-13.68 45.6-29.32 30.62-29.32 30.62C541 384.11 509 397.79 509 397.79c-77 27.64-32.52 115.24-23.12 132C477 552.06 460 591 450.73 591c-13 0-45 39.74 5.86 120.52h17.59s-39.52-78.52 8.25-104.78a54.13 54.13 0 0 1-4.66 6.69c-30.62 35.18 39.09 97.72 39.09 97.72h19.54L503.17 648c-13-26.06 22.8-38.44 22.8-38.44 44.3-24.76 31.92-67.1 31.92-67.1h92.49c-15.66 22.3-43.2 79.1-4.22 168.41h13L667 613.1s7-20 34.89-46.94c1.37 40.44 7.05 111.29 29.61 144.66h18.89s-10.17-68-6.25-91.84c1.59-9.7 3-19.42 4-29.2l5-51.1a43.82 43.82 0 0 0 27.64-41.32l-.37-90.36a9.36 9.36 0 0 1 9.84-9.38l22.08 1.14a5.48 5.48 0 0 0 5.67-6.27z",
    transform: "translate(-145 -152.78)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M555.12 383.22s-2.56 124.07 29.42 171.4h18.55s-10-66.71-6.14-90.16c1.56-9.52 3-19.06 3.88-28.67l8-82.63z",
    fill: "#535461"
  }), React.createElement("path", {
    d: "M555.12 383.22s-2.56 124.07 29.42 171.4h18.55s-10-66.71-6.14-90.16c1.56-9.52 3-19.06 3.88-28.67l8-82.63z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M349.18 362.11s-27.5 74.83-40.29 74.83-44.13 39 5.76 118.32h17.27s-43.49-86.34 17.27-106.8c-.01-.01 21.74-62.69-.01-86.35z",
    fill: "#535461"
  }), React.createElement("path", {
    d: "M349.18 362.11s-27.5 74.83-40.29 74.83-44.13 39 5.76 118.32h17.27s-43.49-86.34 17.27-106.8c-.01-.01 21.74-62.69-.01-86.35z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M586.45 245.27v-19.71c-25.58-28.78 5.76-39.65 5.76-39.65v21.1c74.83-7 65.23 23 65.23 23 8.53 1.11 11.25 7.17 12 12.07a5.38 5.38 0 0 1-5.61 6.18l-21.64-1.04a9.19 9.19 0 0 0-9.66 9.2l.29 88.69a43.68 43.68 0 0 1-15.27 33.46c-7.51 6.33-18.55 11.25-34.61 10.77H414.1s12.15 41.57-31.34 65.87c0 0-35.17 12.15-22.38 37.73l32.62 62h-19.19s-68.43-61.4-38.37-95.93c0 0 28.46-32.94 9.59-79.3 0 0-62.68-102.33 21.1-132.39 0 0 31.34-13.43 66.51 15.35 0 0 15.35 14.71 28.78-30.06 11.19-37.31 22.38-39.08 25.8-38.64.89.12 1.78.21 2.68.25 7.41.31 37.86 5.82 41.23 74.84 0 0 4.48 53.08 32 41.57 25.74-10.78 24-56.86 23.7-62.71a6.17 6.17 0 0 0-.17-1.16 6.14 6.14 0 0 1-.21-1.49z",
    fill: "#535461"
  }), React.createElement("path", {
    d: "M513.55 378.74s-63.31 60.12-12.79 175.87h12.79l7.67-95.93s13.43-38.37 77.38-79.94z",
    fill: "#535461"
  }), React.createElement("circle", {
    cx: 598.93,
    cy: 209.58,
    r: 13.43,
    fill: "#535461"
  }), React.createElement("path", {
    d: "M671.91 438.5c19.64-20.3 10.84-23.58 6.09-30.78-3.24-4.92-36.75-12.88-57.7-17.45-.13-1.7-.35-4.56-.55-8 0 0-.53-6.44-.49-10.86v-.11l1.34.18v-1.3l26.22 3.52c22.35 3.27 25.06-5.24 25.06-5.24 3.39-15.06-24.38-5.24-24.38-5.24-5.44 1.5-18.24-2.82-28.16-6.77a57.52 57.52 0 0 1 .74-6.65 50 50 0 0 0 1.24-10.16 16.54 16.54 0 0 0-1.79-8.48c-5-9.5-13.59-20.62-21.66-28.83a45.84 45.84 0 0 1 4.78-16.73 21.05 21.05 0 0 0 15.06-20 20.32 20.32 0 0 0-.93-6.09c5.81-5.3 5.62-16.23.28-23.25a15.61 15.61 0 0 0-1.9-2.06 20.77 20.77 0 0 0-13.6-5.77c-5.69-.33-11.35 1.2-16.59 3.39-6.17 2.59-12.35 6.21-19.06 5.68-4.83-.38-9.45-2.92-14.25-2.32-6.24.78-10.42 6.48-13.38 11.85s-6 11.38-11.73 13.85c-5 2.14-10.75 1-16.21 1.31-7.63.41-15.36 4.13-19 10.63-3.25 5.83-2.26 13.86 2.65 18.27a12.17 12.17 0 0 0 2.52 2 24.34 24.34 0 0 1 2.88 1.84 2.75 2.75 0 0 1 .75 2 5.85 5.85 0 0 1-1 2.46A14 14 0 0 0 498 310.5a7.15 7.15 0 0 0 2.16 3.44 5 5 0 0 0 1 .87c3.47 2.38 8.89-.48 12.34 1.92l.26.2c1.39 1.61 1.82 4 2.78 5.92a11 11 0 0 0 2.57 3.32 16.19 16.19 0 0 0 10.73 4.52c5.12.27 10.14-1.28 15-2.95 6.37-2.19 13.48-5.47 15.14-11.81 1-3.86-.31-8.07.91-11.87a10.87 10.87 0 0 1 3.14-4.7 40.35 40.35 0 0 0-2.58 9.86 54 54 0 0 0-.55 8.26 58.41 58.41 0 0 0 3.69 21.09c2.62 7.1 5.7 17.52 5.84 27.55a35.44 35.44 0 0 1-2.08 12.1c-4.26 11.23-5 16.25-4.81 18.5-.17 2.93.74 3.12.74 3.12l.26-.1a14.81 14.81 0 0 0 3.08 11.26c27.09 17.68 90.07 11.79 90.07 11.79-12.87 2-27.76 33.4-27.76 33.4a47.12 47.12 0 0 1-12.5 18.13v-.12c-6.43-2.2-15.36 3.63-21.95 6.8l-.54.25a4.86 4.86 0 0 0-2.18 7l18.24 29.5c11.47 11.89 19 13.94 21.62 11.68 1.73-1.47 1.37-4.79-1.3-8.41-6.49-8.78-.86-32.27-.38-34.24 5.58-7.23 24.47-31.22 40.97-48.28z",
    transform: "translate(-145 -152.78)",
    fill: "url(#prefix__b)"
  }), React.createElement("path", {
    d: "M460.14 130.27s-9.59 14.07-7.67 28.14l-22.38-17.91s8.31-.64 10.23-19.83z",
    fill: "#f9d5c6"
  }), React.createElement("path", {
    d: "M457.59 235.16s65.87 13.43 70.35 20.47 12.79 10.23-5.76 30.06-40.29 49.24-40.29 49.24l-15.35-10.87a45.36 45.36 0 0 0 16-21.1s14.07-30.7 26.22-32.62c0 0-59.48 5.76-85.06-11.51 0 0-6.4-7-.64-18.55s34.53-5.12 34.53-5.12z",
    fill: "#353535"
  }), React.createElement("path", {
    d: "M437.12 142.42s-15.71-7.18-19.3 18.32a57.62 57.62 0 0 0 3 27.38c3.63 10.17 8.2 27.32 3.55 40-7 19.19-3.84 19.83-3.84 19.83l9.4-3.55a74.38 74.38 0 0 1 39.76-3.57l3.92.72s-2.56-29.93-.32-42.53c1.06-6 2.23-11.5-.52-16.91-8.46-16.57-27.77-38.21-35.65-39.69z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M437.12 141.15s-15.71-7.18-19.3 18.32a57.62 57.62 0 0 0 3 27.38c3.63 10.17 8.2 27.32 3.55 40-7 19.19-3.84 19.83-3.84 19.83l9.4-3.55a74.38 74.38 0 0 1 39.76-3.57l3.92.72s-2.56-29.93-.32-42.53c1.06-6 2.23-11.5-.52-16.91-8.46-16.62-27.77-38.22-35.65-39.69z",
    fill: "#409cd6"
  }), React.createElement("path", {
    d: "M427.15 160.29c4.32-7.74 15.43-8 20.45-.7a30.24 30.24 0 0 1 4.23 10.33c4.48 19.19 8.31 31.34 8.31 31.34s9.91 3.52 14.17 6.25c-.42 6.22-.6 12.69-.6 12.69l-21.24-3-22.38-39.65s-7.55-9-2.94-17.26z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M427.15 159.01c4.32-7.74 15.43-8 20.45-.7a30.24 30.24 0 0 1 4.23 10.33c4.48 19.19 8.31 31.34 8.31 31.34s30.06 14.71 39 12.15c0 0 26.22-9.59 23 5.12 0 0-2.56 8.31-23.66 5.12l-46-6.4-22.39-39.65s-7.55-9.05-2.94-17.31z",
    fill: "#f9d5c6"
  }), React.createElement("path", {
    d: "M436.8 128.67c1.19-2.84 2.35-1.43 2.88-6.72l19.83 9.59a48.87 48.87 0 0 0-3.35 6.06c-2 .63-4.38 0-6.56 0-4.93.03-9.27-6.03-12.8-8.93z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 450.55,
    cy: 116.84,
    r: 20.47,
    fill: "#f9d5c6"
  }), React.createElement("path", {
    d: "M459.65 113.76c-3.59-.48-7.28-2.34-10.67-1.05-3.89 1.48-5.23 6.32-5.21 10.48s.82 8.53-.9 12.32c-2.26 5-8 7.21-13.14 9.11s-10.82 4.57-12.45 9.8c-1.16 3.72.09 7.82-.86 11.59-1.57 6.2-8.28 9.39-14.3 11.54-4.56 1.62-9.3 3.14-14.13 2.88s-9.84-2.65-11.92-7c-1.09-2.29-1.45-5.14-3.51-6.62-3.26-2.35-8.38.45-11.65-1.88a6.72 6.72 0 0 1-2.3-3.57 14 14 0 0 1 1.07-10.84 5.82 5.82 0 0 0 1-2.41c.1-2.1-2.29-3.26-4.07-4.37-6.13-3.81-7.67-12.84-4.24-19.19s10.73-10 17.93-10.38c5.15-.29 10.59.81 15.31-1.28 5.43-2.41 8.28-8.27 11.07-13.52s6.74-10.81 12.64-11.57c4.54-.59 8.9 1.9 13.46 2.27 6.33.51 12.17-3 18-5.55 4.94-2.14 10.29-3.64 15.66-3.31s10.8 2.67 14 7c7.21 9.83 4.43 27.58-10.79 25.55z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M459 113.12c-3.59-.48-7.28-2.34-10.67-1.05-3.89 1.48-5.23 6.32-5.21 10.48s.82 8.53-.9 12.32c-2.26 5-8 7.21-13.14 9.11s-10.82 4.57-12.45 9.8c-1.16 3.72.09 7.82-.86 11.59-1.57 6.2-8.28 9.39-14.3 11.54-4.56 1.62-9.3 3.14-14.13 2.88s-9.84-2.65-11.92-7c-1.09-2.29-1.45-5.14-3.51-6.62-3.26-2.35-8.38.45-11.65-1.88a6.72 6.72 0 0 1-2.3-3.57 14 14 0 0 1 1.04-10.85 5.82 5.82 0 0 0 1-2.41c.1-2.1-2.29-3.26-4.07-4.37-6.13-3.81-7.67-12.84-4.24-19.19s10.73-10 17.93-10.38c5.15-.29 10.59.81 15.31-1.28 5.43-2.41 8.28-8.27 11.07-13.52s6.74-10.81 12.64-11.57c4.54-.59 8.9 1.9 13.46 2.27 6.33.51 12.17-3 18-5.55 4.94-2.14 10.29-3.64 15.66-3.31s10.8 2.67 14 7c7.24 9.84 4.47 27.59-10.76 25.56z",
    fill: "#2f302f"
  }), React.createElement("path", {
    d: "M455.35 165.13s-26.22-3.2-27.5 15.35-5.12-22.38-5.12-22.38l12.15-9 14.12 4.52z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M454.71 164.49s-26.22-3.2-27.5 15.35-5.12-22.38-5.12-22.38l12.15-9 14.07 4.48zM447.43 334.22l17.19 28.84c10.83 11.61 17.93 13.62 20.41 11.41 1.63-1.44 1.3-4.68-1.23-8.21-6.4-9-.32-33.58-.32-33.58-11.51-2.56-12.79-12.15-12.79-12.15-6-2.14-14.47 3.55-20.7 6.62l-.51.24a4.83 4.83 0 0 0-2.05 6.83z",
    fill: "#409cd6"
  }), React.createElement("path", {
    d: "M483.49 332.69s-12.79-.64-12.79-12.15c0 0 1.92 10.23 12.79 12.15zM447.43 334.22l17.19 28.84c10.83 11.61 17.93 13.62 20.41 11.41-5.94-3.14-22.27-14.37-35-47.32l-.51.24a4.83 4.83 0 0 0-2.09 6.83z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M52.84 459.84s-67.63 40.8 57 103.62c0 0 27.46-51-2.9-92.57a40.94 40.94 0 0 0-53.08-11.67z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M53.62 458.98s57.88 44.24 56.25 104.48",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M106.15 563.22s-21.19-72 4-124.91a113.65 113.65 0 0 0 9.19-71.3 191.13 191.13 0 0 0-10.09-33.46",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M124.88 300.06c0 8.82-16 34.39-16 34.39s-16-25.57-16-34.39a16 16 0 1 1 31.93 0zM151.27 348.91c-4.79 7.4-32.09 20.19-32.09 20.19s.5-30.14 5.29-37.54a16 16 0 1 1 26.8 17.36zM150.12 432.38c-7.87 4-37.89 1.23-37.89 1.23s15.64-25.77 23.52-29.74a16 16 0 0 1 14.38 28.51zM135 495.33c-7.09 5.24-37.14 7.61-37.14 7.61s11.06-28 18.15-33.29a16 16 0 1 1 19 25.67zM85.65 370.8c6.32 6.14 35.79 12.51 35.79 12.51s-7.22-29.27-13.54-35.41a16 16 0 1 0-22.25 22.9zM68.94 444.66c7.87 4 37.89 1.23 37.89 1.23s-15.64-25.77-23.52-29.74a16 16 0 1 0-14.38 28.51zM62.54 518.67c7.09 5.24 37.14 7.61 37.14 7.61s-11.06-28-18.15-33.29a16 16 0 1 0-19 25.67z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M124.88 300.06c0 8.82-16 34.39-16 34.39s-16-25.57-16-34.39a16 16 0 1 1 31.93 0zM151.27 348.91c-4.79 7.4-32.09 20.19-32.09 20.19s.5-30.14 5.29-37.54a16 16 0 1 1 26.8 17.36zM150.12 432.38c-7.87 4-37.89 1.23-37.89 1.23s15.64-25.77 23.52-29.74a16 16 0 0 1 14.38 28.51zM135 495.33c-7.09 5.24-37.14 7.61-37.14 7.61s11.06-28 18.15-33.29a16 16 0 1 1 19 25.67zM85.65 370.8c6.32 6.14 35.79 12.51 35.79 12.51s-7.22-29.27-13.54-35.41a16 16 0 1 0-22.25 22.9zM68.94 444.66c7.87 4 37.89 1.23 37.89 1.23s-15.64-25.77-23.52-29.74a16 16 0 1 0-14.38 28.51zM62.54 518.67c7.09 5.24 37.14 7.61 37.14 7.61s-11.06-28-18.15-33.29a16 16 0 1 0-19 25.67z",
    opacity: 0.25
  }), React.createElement("path", {
    d: "M167.19 587.57s-21.19-72 4-124.91a113.65 113.65 0 0 0 9.19-71.3 191.13 191.13 0 0 0-10.09-33.46",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M185.92 324.43c0 8.82-16 34.39-16 34.39S154 333.22 154 324.43a16 16 0 0 1 31.93 0zM212.31 373.28c-4.79 7.4-32.09 20.19-32.09 20.19s.5-30.14 5.29-37.54a16 16 0 1 1 26.8 17.36zM211.16 456.75c-7.87 4-37.89 1.23-37.89 1.23s15.63-25.76 23.51-29.76a16 16 0 1 1 14.38 28.51zM196.06 519.7c-7.09 5.24-37.14 7.61-37.14 7.61s11.06-28 18.15-33.29a16 16 0 0 1 19 25.67zM146.69 395.22c6.32 6.14 35.79 12.51 35.79 12.51s-7.22-29.27-13.54-35.41a16 16 0 0 0-22.25 22.9zM130 469.03c7.87 4 37.89 1.23 37.89 1.23s-15.64-25.77-23.52-29.74A16 16 0 1 0 130 469.03zM123.57 543.04c7.09 5.24 37.14 7.61 37.14 7.61s-11.06-28-18.15-33.29a16 16 0 1 0-19 25.67z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M414.5 13.22h-5.91a4.14 4.14 0 0 0 0-8.28h-47.88a4.14 4.14 0 0 0 0 8.28h5.91a4.14 4.14 0 0 0 0 8.28h-8.28a4.14 4.14 0 0 0 0 8.28h47.88a4.14 4.14 0 1 0 0-8.28h8.28a4.14 4.14 0 1 0 0-8.28zM315.71 76.82h-5.91a4.14 4.14 0 0 0 0-8.28h-47.87a4.14 4.14 0 0 0 0 8.28h5.91a4.14 4.14 0 0 0 0 8.28h-8.28a4.14 4.14 0 1 0 0 8.28h47.88a4.14 4.14 0 1 0 0-8.28h8.28a4.14 4.14 0 0 0 0-8.28zM807.93 64.8H802a4.14 4.14 0 1 0 0-8.28h-47.85a4.14 4.14 0 1 0 0 8.28h5.91a4.14 4.14 0 1 0 0 8.28h-8.28a4.14 4.14 0 1 0 0 8.28h47.88a4.14 4.14 0 1 0 0-8.28h8.28a4.14 4.14 0 0 0 0-8.28z",
    fill: "#252223",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 171.24,
    cy: 48.96,
    r: 43.81,
    fill: primaryColor,
    opacity: 0.3
  }), React.createElement("path", {
    d: "M386 320.41s18 23.19 24.91 42.09 2.58 24.05 2.58 24.05",
    opacity: 0.05
  }));
};

UndrawThroughTheDesert.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawThroughTheDesert;