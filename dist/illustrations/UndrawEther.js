function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawEther = function UndrawEther(_props) {
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
    viewBox: "0 0 1073 741.95",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 717.06,
    y1: 814.6,
    x2: 717.06,
    y2: 285.55,
    gradientTransform: "rotate(-1.34 820.96 554.388)",
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
    d: "M66 161.46s185.59 155.27 248.79 248.83 222.71 77.64 222.71 77.64",
    fill: "none",
    stroke: "#5d596a",
    strokeMiterlimit: 10,
    strokeWidth: 3,
    opacity: 0.5
  }), React.createElement("path", {
    d: "M865 796.59c-1.21-5.16-4.51-7-11.78-6.12-7.9 1-15.79 1.93-25.45-4.87-5.12-3.6-9.1-6.78-11.73-9l.43-.11S796.9 752 798.15 737.9s-9.1-50.52-9.1-50.52-.56-23.79-6-37.6a60.66 60.66 0 0 1-3.3-11.21c-3.22-17.42-12.92-63.47-28.64-83.77l-1-40.59v-1.56l.41.41a18.49 18.49 0 0 0 3.5-5.36c4.61 2.37 14.55 7.28 19.93 8.33 7.16 1.39 16 7.43 16 7.43s20.35 23.72 35.94 13.21-29.15-27.42-29.15-27.42-15.24-8.23-21.62-10.42c-4.52-1.55-13.91-7.68-19-11.13q-.13-.83-.3-1.69c-2.94-15.22-7.24-21-5.46-30.39a34.56 34.56 0 0 1 2.21-7c6-14.19-19-33.9-19-33.9s-17-14.43-10.82-22.38c0 0 9.48-1 1.38-8.62a61.429 61.429 0 0 0-4.26-3.64c.06-.21.12-.41.19-.62a44 44 0 0 1 7.78-14.3c.54-.67 1.12-1.33 1.73-2a30.53 30.53 0 0 0 22.67-30.06 30.06 30.06 0 0 0-8.18-19.92 8 8 0 0 0 2.6-6.82c.82-9.9-19.05-19.9-27.35-18.44-4.73.83-9 3.38-13.74 4.25-4.91.9-10-.08-15 0a36.48 36.48 0 0 0-18.89 5.52 9.62 9.62 0 0 0-3.48 3.31 12.52 12.52 0 0 0-1 5.14c-1.4 18.21-14.58 33.36-28.58 45.33a18.9 18.9 0 0 0-4.74 5.15c-1.42 2.68-1.39 5.85-1.41 8.87-.22 30.18-10.92 61.88-35.2 80.28.38.24.76.47 1.16.68-.37.29-.74.6-1.12.88 7.89 5.13 19.75 2.63 25-5a73.9 73.9 0 0 1-10 23.49l1-.05c-.33.54-.65 1.08-1 1.61 10.82-.23 18.79-9.66 25.2-18.26.07.83.12 1.67.15 2.5a50.39 50.39 0 0 1-7.33 26.38l1-.09q-.47.84-1 1.66 2.39-.2 4.78-.49c-6.38 13-16.39 36.7-16.39 36.7L615 525a42.37 42.37 0 0 1-8.63 13.31c-4.05 4.23-9.16 9.37-11.35 10.74-3.9 2.43-13.46 33.88 3.84 28.79s23.86-29.44 23.86-29.44a23.59 23.59 0 0 1 4.49-11 29.5 29.5 0 0 0 3.28-5.89 314.81 314.81 0 0 1 16.11-30.85 107.61 107.61 0 0 0 8.63-17.78 52.4 52.4 0 0 1 5.09-10 56.25 56.25 0 0 0 11-6.13 29.33 29.33 0 0 0 7.43-7.5 141.18 141.18 0 0 0 4.47 14.53c4.2 11.36 11.87 37.66.76 55.25-10.19 16.14-10.41 23.95-9.65 27.17 0 .17-.1.34-.15.52a29.21 29.21 0 0 0 2.55 21.42 27.47 27.47 0 0 1 3.13 11.91v1.19a26.63 26.63 0 0 1-1.08 8.14c-2.17 7.36-6.69 23.58-8.2 35.33-2 15.66-15.11 30.79-15.11 30.79s-34.75 37.5-48 81.52c0 0-7.47 18.91-12.92 22.94 0 0-10.37 6.17-12.1 18 0 .32-.09.64-.12 1l-2.25 5.52S599.4 805 603.36 804.9l2.26-4.74 20.15 15.14 30.07-.7a9.49 9.49 0 0 0 2.17-2c1.44-1.88 2.29-4.82-2.27-7.88a10.93 10.93 0 0 0-7.66-1.61c-3.87.57-11.27-.72-18.2-15.19l-3.82-7.12.49.17s-6.59-10.77 6.54-25.13 32-52.26 32-52.26 25.64-20.89 30.08-34.27c0 0 17.1-28.87 27-46 1.65 3.58 3 6.29 3 6.29s20.44 27.62 23.31 48.63S770.74 751 779 764.88s8.37 19.32 8.37 19.32-5.12 13.12-1.91 23.9l.1.34.15 6.24 23 .24-.07-3.12 29.32.87s28.31-8.47 27.37-14.69q-.17-.73-.33-1.39z",
    transform: "translate(-63.5 -79.02)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M673.58 284.59a46 46 0 0 0-9.56 8.9 43.36 43.36 0 0 0-7.52 14 38.63 38.63 0 0 0-2 12.74l-14.85-12.67-19 4.28a60 60 0 0 0 10.17-12.86 64.36 64.36 0 0 0 6-13.47 49.88 49.88 0 0 0 2.09-9.34s55.02-5.84 34.67 8.42z",
    fill: "#efb4b6"
  }), React.createElement("path", {
    d: "M596.62 732.46a9.22 9.22 0 0 1-2.1 2l-29.09.68-19.49-14.86-2.19 4.65c-3.83.09-22.45-10.2-22.45-10.2l2.17-5.41c0-.32.07-.64.12-1 1.67-11.66 11.7-17.7 11.7-17.7l3.79-1.62 23.11 5.59 7.21 13.62c6.71 14.2 13.86 15.47 17.61 14.91a10.45 10.45 0 0 1 7.41 1.58c4.42 3.03 3.59 5.92 2.2 7.76zM797.09 718.22c.91 6.11-26.47 14.41-26.47 14.41l-28.36-.87.07 3.06-22.21-.25-.14-6.12-.1-.33c-3.1-10.58 1.84-23.45 1.84-23.45l2.21-3.88 22.05-6.64a148.35 148.35 0 0 0 14.83 11.91c9.35 6.67 17 5.73 24.62 4.78 7-.87 10.23.95 11.4 6q.15.66.26 1.38z",
    fill: "#c17174"
  }), React.createElement("path", {
    d: "M664.91 535.22c-.73 1.56-3.13 5.89-6.32 11.52-9.52 16.82-26.09 45.14-26.09 45.14-4.25 13.1-29 33.62-29 33.62s-18.27 37.19-31 51.27-6.31 24.65-6.31 24.65l-30.89-10.76c5.27-4 12.49-22.5 12.49-22.5 12.77-43.19 46.37-80 46.37-80s12.67-14.85 14.61-30.21c1.45-11.53 5.82-27.44 7.92-34.66a26.48 26.48 0 0 0 1-8v-1.17a27.27 27.27 0 0 0-3-11.68 29 29 0 0 1-2.48-21 24.18 24.18 0 0 1 3-7.1l7.55-2.2 26.74-7.78s1.65 5.81 3.88 14.12c5.17 19.39 13.57 52.4 11.53 56.74z",
    fill: "#5d596a"
  }), React.createElement("path", {
    d: "M664.91 535.22c-.73 1.56-3.13 5.89-6.32 11.52-9.52 16.82-26.09 45.14-26.09 45.14-4.25 13.1-29 33.62-29 33.62s-18.27 37.19-31 51.27-6.31 24.65-6.31 24.65l-30.89-10.76c5.27-4 12.49-22.5 12.49-22.5 12.77-43.19 46.37-80 46.37-80s12.67-14.85 14.61-30.21c1.45-11.53 5.82-27.44 7.92-34.66a26.48 26.48 0 0 0 1-8v-1.17a27.27 27.27 0 0 0-3-11.68 29 29 0 0 1-2.48-21 24.18 24.18 0 0 1 3-7.1l7.55-2.2 26.74-7.78s1.65 5.81 3.88 14.12c5.17 19.39 13.57 52.4 11.53 56.74z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M749.88 697.12l-28.16 7.55s-.13-5.36-8.1-19-26.78-64.47-29.56-85.08-22.56-47.68-22.56-47.68-1.3-2.66-2.9-6.17c-1.48-3.25-3.2-7.22-4.38-10.5-2.46-6.83-13.41-16.53-13.41-16.53-20-11.12-24-24.43-24.23-32.76a23.54 23.54 0 0 1 1.07-8.05l5.14-6.74 9.71-12.76 32.87-35.23 20 4.13 1.2 51.28c15.21 19.92 24.61 65.1 27.73 82.2a60.2 60.2 0 0 0 3.2 11c5.27 13.55 5.82 36.89 5.82 36.89s10 35.76 8.82 49.57 17.74 37.88 17.74 37.88z",
    fill: "#5d596a"
  }), React.createElement("path", {
    d: "M688.04 411.38s15.58 11.12 21.75 13.28 20.92 10.23 20.92 10.23 43.28 16.6 28.2 26.91-34.77-13-34.77-13-8.56-5.93-15.49-7.3-21.66-9.45-21.66-9.45z",
    fill: "#efb4b6"
  }), React.createElement("path", {
    d: "M673.58 284.59a46 46 0 0 0-9.56 8.9 30 30 0 0 1-5.53.64c-8.42.2-12.78-9-18.34-14.5 1.75-5.56-1.23-3.42-1.23-3.42s55.01-5.88 34.66 8.38z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 721.26,
    cy: 341.77,
    r: 29.86,
    transform: "rotate(-1.34 -2688.243 3017.917)",
    fill: "#efb4b6"
  }), React.createElement("path", {
    d: "M654.5 320.27l-14.85-12.67-19 4.28a60 60 0 0 0 10.17-12.9h.13a25.56 25.56 0 0 1 18.49 3.53 75.69 75.69 0 0 1 7.06 5 38.63 38.63 0 0 0-2 12.76zM685.37 428.29l.27 11.45c-2.31-2.31-13.79-13.22-10.66 2.58 3.47 17.53-16.9 30.26-16.9 30.26a73 73 0 0 1-4.74 5.89c-16.16 17.91-30.48 12.51-36.77 8.51a21.75 21.75 0 0 1-3.4-2.59 5.43 5.43 0 0 1-1-2.9 24.18 24.18 0 0 1 3-7.1l7.55-2.2 9.78-12.79 32.87-35.23z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M686 438.61s-14.53-15.36-11.05 2.17-16.9 30.26-16.9 30.26c-23.74 32.72-44.91 11.77-44.91 11.77s-5.5-6 8.52-28.54c10.74-17.26 3.32-43.06-.75-54.21a140.5 140.5 0 0 1-4.41-14.7l-1-4-2.32-9.38a100.58 100.58 0 0 1-2.5-33.43 95.92 95.92 0 0 1 4.66-22c1.54-4.56 3.27-8.48 5.13-10.82a17.37 17.37 0 0 1 10.49-6 25.52 25.52 0 0 1 18.54 3.57 69.39 69.39 0 0 1 11 8.4c7.83 7.47-1.33 8.46-1.33 8.46-5.94 7.8 10.47 22 10.47 22s24.19 19.34 18.39 33.27-.33 18.39 3.16 36.69-5.19 26.49-5.19 26.49z",
    fill: "#9f9eff"
  }), React.createElement("path", {
    d: "M655.78 219.24c-4.58.82-8.72 3.31-13.29 4.16-4.75.88-9.63-.08-14.47 0a34.9 34.9 0 0 0-18.27 5.41 9.35 9.35 0 0 0-3.4 3.22 12.43 12.43 0 0 0-1 5c-1.35 17.87-14.09 32.73-27.63 44.46a18.43 18.43 0 0 0-4.59 5c-1.38 2.63-1.34 5.74-1.36 8.71-.2 29.61-10.54 60.71-34 78.76 7.92 5.23 20 2.39 24.76-5.82a73 73 0 0 1-10.14 25.46c10.46-.22 18.17-9.48 24.37-17.91a49.89 49.89 0 0 1-7 29.92c14-1.21 28.3-4.23 39.62-12.51 5.18-3.79 9.89-9.31 9.78-15.73-.06-3.68-1.7-7.11-2.87-10.6-3.05-9.08-2.32-20.53 5.23-26.42a28.52 28.52 0 0 0 4-3.16c1.73-1.94 2.34-4.61 2.69-7.19a51.33 51.33 0 0 0-.94-18.82 13.85 13.85 0 0 1-.61-4c.17-2.83 2.3-5.2 4.72-6.66s5.18-2.26 7.75-3.47a26.58 26.58 0 0 0 14.89-23.5c0-2.87-.38-6.07 1.44-8.28 2.69-3.28 8.28-2.16 11.5-4.91 3.05-2.61 2.71-7.47 4.84-10.88 1.75-2.8 5-4.29 7.37-6.54 11.9-10.96-13.78-25.41-23.39-23.7z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M653.26 332.36v.19l-18.86 25.61-11.56 15.69s-3.15 3-7.36 7.51l-2.3-9.38a100.58 100.58 0 0 1-2.5-33.43c4.37-8.72 9.07-14.56 13.47-18.49a17.51 17.51 0 0 1 29.11 12.3z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M655.74 217.71c-4.58.82-8.72 3.31-13.29 4.16-4.75.88-9.63-.08-14.47 0a34.9 34.9 0 0 0-18.27 5.41 9.35 9.35 0 0 0-3.4 3.22 12.43 12.43 0 0 0-1 5c-1.35 17.87-14.09 32.73-27.63 44.46a18.43 18.43 0 0 0-4.59 5c-1.38 2.63-1.34 5.74-1.36 8.71-.2 29.61-10.54 60.71-34 78.76 7.92 5.23 20 2.39 24.76-5.82a73 73 0 0 1-10.14 25.46c10.46-.22 18.17-9.48 24.37-17.91a49.89 49.89 0 0 1-7 29.92c14-1.21 28.3-4.23 39.62-12.51 5.18-3.79 9.89-9.31 9.78-15.73-.06-3.68-1.7-7.11-2.87-10.6-3.05-9.08-2.32-20.53 5.23-26.42a28.52 28.52 0 0 0 4-3.16c1.73-1.94 2.34-4.61 2.69-7.19a51.33 51.33 0 0 0-.94-18.82 13.85 13.85 0 0 1-.61-4c.17-2.83 2.3-5.2 4.72-6.66s5.18-2.26 7.75-3.47a26.58 26.58 0 0 0 14.89-23.5c0-2.87-.38-6.07 1.44-8.28 2.69-3.28 8.28-2.16 11.5-4.91 3.05-2.61 2.71-7.47 4.84-10.88 1.75-2.8 5-4.29 7.37-6.54 11.9-11-13.78-25.43-23.39-23.7z",
    fill: "#c17174"
  }), React.createElement("path", {
    d: "M651.69 330.86v.19l-18.87 25.61-11.56 15.69s-21.76 20.43-27.47 36.63a106.16 106.16 0 0 1-8.34 17.44 310.22 310.22 0 0 0-15.57 30.26 29 29 0 0 1-3.17 5.77 23.34 23.34 0 0 0-4.34 10.82s-6.33 23.89-23.06 28.88-7.5-25.86-3.73-28.25c2.12-1.34 7.06-6.38 11-10.53a41.6 41.6 0 0 0 8.34-13.06l3.65-9.11s17.4-41.76 20.41-44.13a10.2 10.2 0 0 0 2.2-2.66c2.41-3.93 4.86-7.83 7.38-11.69 3.31-5.05 8.55-15.15 16.06-35.27.53-1.41 1.06-2.77 1.61-4.07 5.13-12.32 11-20 16.37-24.82a17.51 17.51 0 0 1 29.09 12.3z",
    fill: "#efb4b6"
  }), React.createElement("path", {
    d: "M651.69 330.86v.19l-18.87 25.61-26.62-13.26c5.13-12.32 11-20 16.37-24.82a17.51 17.51 0 0 1 29.12 12.28z",
    fill: "#9f9eff"
  }), React.createElement("path", {
    d: "M628.33 310.52s20.41 8.74 30.38 9.27M797.09 718.22c.91 6.11-26.47 14.41-26.47 14.41l-28.36-.87.07 3.06-22.21-.25-.14-6.12-.1-.33 51 1.06 25.9-12.32q.2.64.31 1.36zM596.62 732.46a9.22 9.22 0 0 1-2.1 2l-29.09.68-19.49-14.86-2.19 4.65c-3.83.09-22.45-10.2-22.45-10.2l2.17-5.41c0-.32.07-.64.12-1l22.69 10 19.48 14.09zM616.5 478.54s10.94-23.23 22.26-30.39M660 374.89s6.41 11.95 25.83 7.36",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M839.98 632.06s-67.63 40.8 57 103.62c0 0 27.46-51-2.9-92.57a40.94 40.94 0 0 0-53.12-11.64z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M840.76 631.2s57.88 44.28 56.25 104.48",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M900.29 736.42s-21.19-72 4-124.91a113.65 113.65 0 0 0 9.19-71.3 191.13 191.13 0 0 0-10.09-33.46",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M919.02 473.28c0 8.82-16 34.39-16 34.39s-16-25.57-16-34.39a16 16 0 0 1 31.93 0zM945.41 522.13c-4.79 7.4-32.09 20.19-32.09 20.19s.5-30.14 5.29-37.54a16 16 0 1 1 26.8 17.36zM944.26 605.59c-7.87 4-37.89 1.23-37.89 1.23s15.64-25.77 23.52-29.74a16 16 0 1 1 14.38 28.51zM929.17 668.55c-7.09 5.24-37.14 7.61-37.14 7.61s11.06-28 18.15-33.29a16 16 0 0 1 19 25.67zM879.8 543.98c6.32 6.14 35.79 12.51 35.79 12.51s-7.22-29.27-13.54-35.41a16 16 0 0 0-22.25 22.9zM863.08 617.88c7.87 4 37.89 1.23 37.89 1.23s-15.64-25.78-23.47-29.75a16 16 0 1 0-14.38 28.51zM856.68 691.89c7.09 5.24 37.14 7.61 37.14 7.61s-11.06-28-18.15-33.29a16 16 0 1 0-19 25.67z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M919.02 473.28c0 8.82-16 34.39-16 34.39s-16-25.57-16-34.39a16 16 0 0 1 31.93 0zM945.41 522.13c-4.79 7.4-32.09 20.19-32.09 20.19s.5-30.14 5.29-37.54a16 16 0 1 1 26.8 17.36zM944.26 605.59c-7.87 4-37.89 1.23-37.89 1.23s15.64-25.77 23.52-29.74a16 16 0 1 1 14.38 28.51zM929.17 668.55c-7.09 5.24-37.14 7.61-37.14 7.61s11.06-28 18.15-33.29a16 16 0 0 1 19 25.67zM879.8 543.98c6.32 6.14 35.79 12.51 35.79 12.51s-7.22-29.27-13.54-35.41a16 16 0 0 0-22.25 22.9zM863.08 617.88c7.87 4 37.89 1.23 37.89 1.23s-15.64-25.78-23.47-29.75a16 16 0 1 0-14.38 28.51zM856.68 691.89c7.09 5.24 37.14 7.61 37.14 7.61s-11.06-28-18.15-33.29a16 16 0 1 0-19 25.67z",
    opacity: 0.25
  }), React.createElement("path", {
    d: "M949.33 737.79s-21.19-72 4-124.91a113.65 113.65 0 0 0 9.19-71.3 191.13 191.13 0 0 0-10.09-33.46",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M968.06 474.65c0 8.82-16 34.39-16 34.39s-16-25.57-16-34.39a16 16 0 0 1 31.93 0zM994.5 523.5c-4.79 7.4-32.09 20.19-32.09 20.19s.5-30.14 5.29-37.54a16 16 0 1 1 26.8 17.36zM993.3 606.98c-7.87 4-37.89 1.23-37.89 1.23s15.64-25.77 23.52-29.74a16 16 0 1 1 14.37 28.51zM978.2 669.92c-7.09 5.24-37.14 7.61-37.14 7.61s11.06-28 18.15-33.29a16 16 0 0 1 19 25.67zM928.83 545.39c6.32 6.14 35.79 12.51 35.79 12.51s-7.22-29.27-13.54-35.41a16 16 0 0 0-22.25 22.9zM912.12 619.25c7.87 4 37.89 1.23 37.89 1.23s-15.64-25.78-23.51-29.75a16 16 0 0 0-14.38 28.51zM905.72 693.26c7.09 5.24 37.14 7.61 37.14 7.61s-11.06-28-18.15-33.29a16 16 0 1 0-19 25.67zM455 733.95h137v5H455zM639 733.95h205v5H639zM893 733.95h62v5h-62z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M65.5-.02l-1.43 4.86v141.14l1.43 1.43 65.48-38.71z",
    fill: "#343434"
  }), React.createElement("path", {
    d: "M65.5-.02L0 108.65l65.5 38.71V-.02z",
    fill: "#8c8c8c"
  }), React.createElement("path", {
    d: "M65.5 159.76l-.81 1v50.22l.81 2.35 65.52-92.27z",
    fill: "#3c3c3b"
  }), React.createElement("path", {
    d: "M65.5 213.34v-53.58L0 121.07z",
    fill: "#8c8c8c"
  }), React.createElement("path", {
    d: "M65.5 147.36l65.48-38.7L65.5 78.89z",
    fill: "#141414"
  }), React.createElement("path", {
    d: "M0 108.65l65.5 38.71V78.89z",
    fill: "#393939"
  }), React.createElement("path", {
    d: "M973.3 331.81c-2.44-118.57-88.71-213.83-194.8-213.83-51.89 0-99 22.8-133.95 60-72.65 7.6-133.73 60-161.11 132.44C400.27 335.33 339 420.59 339 521.98c0 121 87.23 219 194.84 219a177 177 0 0 0 89.84-24.63 175.87 175.87 0 0 0 167.62 2.63 176.76 176.76 0 0 0 86.86 23c107.61 0 194.84-98 194.84-219 0-82.14-40.21-153.68-99.7-191.17z",
    fill: primaryColor,
    opacity: 0.1
  }));
};

UndrawEther.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawEther;