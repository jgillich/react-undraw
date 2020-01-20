function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawPresentation = function UndrawPresentation(_props) {
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
    viewBox: "0 0 906 685.39",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 345.27,
    y1: 402.37,
    x2: 345.27,
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
    x1: 24.7,
    y1: 22.44,
    x2: 24.7,
    y2: 10.76,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 37.98,
    y1: 22.44,
    x2: 37.98,
    y2: 10.76,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 51.26,
    y1: 22.44,
    x2: 51.26,
    y2: 10.76,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 352.54,
    y1: 251.95,
    x2: 352.54,
    y2: 55.93,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 234.93,
    y1: 165.29,
    x2: 234.93,
    y2: 144.65,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 286.51,
    y1: 132.27,
    x2: 286.51,
    y2: 111.64,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 349.25,
    y1: 103.14,
    x2: 349.25,
    y2: 82.51,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 406.19,
    y1: 165.29,
    x2: 406.19,
    y2: 144.65,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 466.02,
    y1: 136.4,
    x2: 466.02,
    y2: 115.77,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__k",
    x1: 352.54,
    y1: 287.5,
    x2: 352.54,
    y2: 274.78,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__l",
    x1: 352.54,
    y1: 305.68,
    x2: 352.54,
    y2: 292.96,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__m",
    x1: 352.54,
    y1: 323.85,
    x2: 352.54,
    y2: 311.13,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__n",
    x1: 352.54,
    y1: 342.02,
    x2: 352.54,
    y2: 329.3,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__o",
    x1: 853.28,
    y1: 792.7,
    x2: 853.28,
    y2: 246.48,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M0 0h690.54v402.37H0z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M9.3 6.64h673.28v20.58H9.3z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M9.3 27.22h673.28v364.53H9.3z"
  }), React.createElement("circle", {
    cx: 24.7,
    cy: 16.6,
    r: 5.84,
    fill: "url(#prefix__b)"
  }), React.createElement("circle", {
    cx: 37.98,
    cy: 16.6,
    r: 5.84,
    fill: "url(#prefix__c)"
  }), React.createElement("circle", {
    cx: 51.26,
    cy: 16.6,
    r: 5.84,
    fill: "url(#prefix__d)"
  }), React.createElement("circle", {
    cx: 24.7,
    cy: 16.6,
    r: 4.78,
    fill: "#ff5252"
  }), React.createElement("circle", {
    cx: 37.85,
    cy: 16.6,
    r: 4.78,
    fill: "#ff0"
  }), React.createElement("circle", {
    cx: 50.99,
    cy: 16.6,
    r: 4.78,
    fill: "#69f0ae"
  }), React.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M154.46 55.93h396.15v196.01H154.46z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M158.59 60.06h387.9v185.7h-387.9z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDasharray: "0 4",
    d: "M179.22 84.82v134.11"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M178.19 228.22H520.7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    opacity: 0.3,
    d: "M217.39 92.04h266.17M217.39 122.99h266.17M217.39 153.94h266.17M217.39 184.89h266.17"
  }), React.createElement("path", {
    d: "M234.93 228.22v-74.28s-6.19-32 56.74-30.95c57.23-8.12 57.23-31.74 57.23-31.74s52.64-5.73 55.31 50.28a30.5 30.5 0 0 0 12.63 23.49c21.69 15.29 40.52-15.18 49.18-42v105.2z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("circle", {
    cx: 286.51,
    cy: 121.96,
    r: 8.25,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 286.51,
    cy: 121.96,
    r: 8.25,
    fill: "#fff",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 234.93,
    cy: 154.97,
    r: 10.32,
    fill: "url(#prefix__f)"
  }), React.createElement("circle", {
    cx: 286.51,
    cy: 121.96,
    r: 10.32,
    fill: "url(#prefix__g)"
  }), React.createElement("circle", {
    cx: 349.25,
    cy: 92.83,
    r: 10.32,
    fill: "url(#prefix__h)"
  }), React.createElement("circle", {
    cx: 406.19,
    cy: 154.97,
    r: 10.32,
    fill: "url(#prefix__i)"
  }), React.createElement("circle", {
    cx: 466.02,
    cy: 126.08,
    r: 10.32,
    fill: "url(#prefix__j)"
  }), React.createElement("circle", {
    cx: 234.93,
    cy: 154.97,
    r: 8.25,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 234.93,
    cy: 154.97,
    r: 8.25,
    opacity: 0.2
  }), React.createElement("circle", {
    cx: 349.25,
    cy: 92.83,
    r: 8.25,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 349.25,
    cy: 92.83,
    r: 8.25,
    opacity: 0.2
  }), React.createElement("circle", {
    cx: 406.19,
    cy: 154.97,
    r: 8.25,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 406.19,
    cy: 154.97,
    r: 8.25,
    fill: "#fff",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 466.02,
    cy: 126.08,
    r: 8.25,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 466.02,
    cy: 126.08,
    r: 8.25,
    opacity: 0.2
  }), React.createElement("path", {
    fill: "url(#prefix__k)",
    d: "M156.28 274.78H548.8v12.72H156.28z"
  }), React.createElement("path", {
    fill: "url(#prefix__l)",
    d: "M156.28 292.96H548.8v12.72H156.28z"
  }), React.createElement("path", {
    fill: "url(#prefix__m)",
    d: "M156.28 311.13H548.8v12.72H156.28z"
  }), React.createElement("path", {
    fill: "url(#prefix__n)",
    d: "M156.28 329.3H548.8v12.72H156.28z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M158.1 276.6h388.88v9.09H158.1zM158.1 294.77h388.88v9.09H158.1zM158.1 312.95h388.88v9.09H158.1zM158.1 331.12h388.88v9.09H158.1z"
  }), React.createElement("path", {
    d: "M1042.51 584.93l-3.5-25.63-8.16-22.14-22.14-82.72-.21.09-.14.06a6.84 6.84 0 0 0 0-3.92c-2.27-11.69-6.48-22.92-11.1-33.89-4.11-9.75-8.62-19.44-15-27.88l-.94-1.22c1.47.7 2.94 1.38 4.43 2s3.23 1.4 4.77 2.24l.76.44c.5.3 1 .62 1.44 1q.34.25.67.52a12 12 0 0 1 1.22 1.15q.28.31.53.64a8.87 8.87 0 0 1 1.25 2.18 9.47 9.47 0 0 1 .28.91 18.07 18.07 0 0 1 .41 1.77c.16.91.29 1.83.52 2.72 1.2 4.71 5.45 7.84 10.15 8.84a15.81 15.81 0 0 0 1.78.27 15.33 15.33 0 0 0 1.79.06 13.13 13.13 0 0 0 5.92-1.49 10.68 10.68 0 0 0 3.37-2.82c3.83-4.89 3.8-11.85 7.06-17.14 1.69-2.73 4.19-4.9 5.7-7.73 4.62-8.69-1.65-18.84-4-28.39-2.44-10-.44-20.39-.74-30.63-.63-21.23-11.6-41.55-27.84-55.25s-37.34-21-58.55-22.29c-12.9-.78-26.75 1-37.42 7.81-.73.47-1.44 1-2.14 1.48l-.63.48q-.77.59-1.51 1.22l-.6.52c-.66.59-1.31 1.2-1.93 1.84a43.1 43.1 0 0 0-4.39 5.39c-4.39 6.3-7.47 13.59-11.46 20.22q-.46.76-1 1.52l-.34.51-.66 1-.45.63-.61.83-.52.68-.59.75-.57.69-.59.69-.62.69-.6.63-.66.68-.62.59c-.23.22-.45.44-.69.65a27 27 0 0 1-8.83 5.5c-.43.15-.86.29-1.29.42l-.33.09q-.55.15-1.12.28l-.72.13-.85.14c-.55.07-1.11.13-1.68.15.15 3 3.85 3.41 7.09 2.63a12.4 12.4 0 0 0 2.26-.77c1.59-.73 3.66-1.89 6-3.23l1-.58 2.13-1.21 1.1-.62 2.26-1.25c1.14-.63 2.31-1.25 3.47-1.84l.38-.19a28.78 28.78 0 0 0 9.89 42.52v8.94h-3a11.93 11.93 0 0 0-7.29 2.48c-1.81.73-4 1.65-6.22 2.77-.72.36-1.46.73-2.2 1.12l-1.12.6c-.75.41-1.49.84-2.23 1.29-1.48.9-2.95 1.87-4.33 2.91a32.11 32.11 0 0 0-5.51 5.13 9.86 9.86 0 0 1-1 1c-.12.11-.25.2-.37.3s-.46.37-.7.54l-.49.31c-.22.13-.43.26-.66.37l-.58.28-.62.25c-.23.09-.45.17-.68.25l-.51.15a19.37 19.37 0 0 1-3.43.62c-4.23.39-9-.22-13.27-.38h-1.91c-14.45.06-29.18.34-43.64.41L723.82 366l-2.29-.05h-1.17v-.58h-65.25c-2.85 1.9-1.06 3.8-.29 4.43a4.74 4.74 0 0 0 .88.81L672 374l-1.22 2-.83-.18-2 3.39c1 1.2 1.93 2.23 2.84 3.15 14.59 15.4 19.88-2.57 19.88-2.57l30.29 3.5 37.57 5.53 37 5.53v-.08c1.12.51 2.62.34 4 .68 14.13 3.44 28.62 3.32 43.15 3.45h4.73a27.54 27.54 0 0 1 4.59.52 14.88 14.88 0 0 1 1.72.47 8 8 0 0 1 4.61 3.58 13.17 13.17 0 0 1 1.24 4.76l2.52 19.26c.18 1.38.36 2.78.44 4.18 0 .52.05 1 .06 1.55a15.25 15.25 0 0 1-.89 5.57 15.08 15.08 0 0 1-1.56 2.95c-.41.62-.86 1.22-1.31 1.82s-.93 1.18-1.39 1.78l-.68.89a40.47 40.47 0 0 0-4.57 7.77q-.46 1-.87 2.09a42.49 42.49 0 0 0-2.75 17.73q.07 1.13.2 2.25a39.81 39.81 0 0 0 .77 4.45 13.44 13.44 0 0 0 .49 1.66 5.41 5.41 0 0 0 1 1.71c0 .05.08.12.13.17a4.2 4.2 0 0 0 .8.62 4.91 4.91 0 0 0 .57.3 6.5 6.5 0 0 0 1.18.4 11.15 11.15 0 0 0 1.49.23h.65-.32l-6.43 109.14s-10.49 8.16-1.17 14h1.13l-10.44 156.69s-7 7-29.13 0c-4.32-1.36-6.06-.64-5.84 1.28-.79 6.05 25.94 29.57 50 26.14a14.14 14.14 0 0 0 11.88-11.89l24.72-172.58c1-1 3.43-4.21-.38-9L901.53 508l8.16 90.88s-7.7 2.2-1.72 8.74-15.15 23.3 73.4 142.14c0 0 7 7-3.5 21 0 0-11.65 0-9.32 9.32h.45c0 .19.07.38.12.58h21s19.81-23.3 18.64-29.13-60.59-128.16-60.59-128.16v-15.14h3.5s4.66-2.33 0-9.32L950 490.31a6.15 6.15 0 0 0-1.16-3.51 70.58 70.58 0 0 0-2.09-49.11c-2-4.8-4.65-9.46-5.44-14.62s.75-11.14 5.26-13.75l27.69 57.81.07.13a4.84 4.84 0 0 0 .87 1.36 2.14 2.14 0 0 0 .46.35 2 2 0 0 0 .67.22h.13l32.29 77.28 12.82 24.47 3.5 29.13 12.82 12.82h.63l.4-.06c1-.2 2.44-.73 2.44-2.22 0 0 3.5-1.17 3.5-3.5 0 0 4.66-1.17 4.66-3.5a3.42 3.42 0 0 0 3.5-3.5zM920.18 338.3a28 28 0 0 0 5-3.27 48.34 48.34 0 0 0 5.38 9.93c.93 1.35 1.9 2.67 2.89 4 .4.51.81 1 1.21 1.52-1.08-.33-2.16-.62-3.23-.85l-.33-.06-1-.19a11.94 11.94 0 0 0-6.77-2.1h-3.15z",
    transform: "translate(-147 -107.3)",
    fill: "url(#prefix__o)"
  }), React.createElement("path", {
    d: "M708.42 379.41l-6.15 104.48 39.11 4.47 11.17-87.16 7.82 87.16h40.23L799 384.21a5.93 5.93 0 0 0-6-5.84z",
    fill: primaryColor
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M712.89 381.65l84.6-1h.23a5.89 5.89 0 0 0-4.7-2.25l-84.6 1-6.15 104.48 4.57.52z"
  }), React.createElement("path", {
    d: "M753.12 401.76l1.39 21.26 5.87 65.33h4.27l-11.53-86.59z"
  })), React.createElement("path", {
    d: "M759.26 497.3s-14.53 22.35 70.4 136.32c0 0 6.7 6.7-3.35 20.11 0 0-11.17 0-8.94 8.94h20.11s19-22.35 17.88-27.93-58.1-122.91-58.1-122.91V497.3z",
    fill: "#263238"
  }), React.createElement("path", {
    d: "M830.21 653.17c10.06-13.41 3.35-20.11 3.35-20.11-84.92-114-70.4-136.32-70.4-136.32h-4.46s-14.53 22.35 70.4 136.32c0 0 6.7 6.7-3.35 20.11 0 0-11.17 0-8.94 8.94h4.47c-2.28-8.94 8.93-8.94 8.93-8.94z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M702.27 497.3l-10.05 150.84s-6.7 6.7-27.93 0c-18.94-6 13.68 29.82 42.36 25.73a13.56 13.56 0 0 0 11.4-11.4l23.9-166.86z",
    fill: "#263238"
  }), React.createElement("path", {
    d: "M668.75 652.06c21.23 6.7 27.93 0 27.93 0L707.3 496.7h-5l-10.08 150.89s-6.7 6.7-27.93 0c-9-2.83-6.37 3.7 1.88 10.92-4.37-5.13-4.45-8.68 2.58-6.45z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("rect", {
    x: 731.33,
    y: 247,
    width: 53.63,
    height: 44.7,
    rx: 12,
    ry: 12,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 758.14,
    cy: 214.6,
    r: 26.82,
    fill: "#ffbec5"
  }), React.createElement("path", {
    d: "M754 229.68h8.25a8.17 8.17 0 0 1 8.17 8.17v11.56a11 11 0 0 1-11 11h-2.58a11 11 0 0 1-11-11v-11.56a8.17 8.17 0 0 1 8.16-8.17z",
    fill: "#ffbec5"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M579.36 264.88l70.96 1.67 1.11 25.7-72.07-10.61v-16.76z"
  }), React.createElement("path", {
    d: "M516.79 264.88h62.57v16.76l-29.05-3.35s-5.59 19-21.23 0l3.35-5.59-15.64-3.35s-3.35-2.23 0-4.47z",
    fill: "#ffbec5"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M824.07 363.21l31.29 74.86 21.23-8.94-21.23-79.33-31.29 13.41z"
  }), React.createElement("path", {
    d: "M855.36 438.08l12.29 23.47 3.35 27.93 12.29 12.29s3.35 0 3.35-2.23c0 0 3.35-1.12 3.35-3.35 0 0 4.47-1.12 4.47-3.35a3.28 3.28 0 0 0 3.35-3.35l-10.06-14.53-3.35-24.58-7.82-21.23z",
    fill: "#ffbec5"
  }), React.createElement("path", {
    d: "M702.27 483.89s-10.06 7.82-1.12 13.41h40.23s4.47-3.35 0-8.94zM760.38 488.36s-7.82 2.23-1.12 8.94h41.34s4.47-2.23 0-8.94z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M702.27 483.89s-10.06 7.82-1.12 13.41h40.23s4.47-3.35 0-8.94zM760.38 488.36s-7.82 2.23-1.12 8.94h41.34s4.47-2.23 0-8.94zM582.12 281.64v-16.71l-2.2-.05v16.76l70.96 10.61-.02-.33-68.74-10.28zM855.36 349.8l-.2.08 20.31 75.9-21.23 8.94-29.93-71.62-.24.11 31.29 74.86 21.23-8.94-21.23-79.33z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M736.35 214.04a26.82 26.82 0 0 1 24-26.67 27.11 27.11 0 0 0-2.79-.14 26.82 26.82 0 1 0 0 53.63 27.11 27.11 0 0 0 2.79-.14 26.82 26.82 0 0 1-24-26.68z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M519.58 267.7h59.22v-3.35h-62.57c-3.35 2.23 0 4.47 0 4.47l2 .42a3.27 3.27 0 0 1 1.35-1.54zM531.87 281.08l3.35-5.59-4.75-1-2 3.25a38.66 38.66 0 0 0 4.52 4.71c-.33-.44-.72-.88-1.12-1.37z"
  })), React.createElement("path", {
    d: "M743.23 272.92c8.1 4.63 17.87 5.25 27.19 4.79a14.5 14.5 0 0 0 6.38-1.35c5.57-3.08 2.09-21.43.9-27.68 19.3 2.1 40.62 22.79 52.33 38.27 6.12 8.09 10.45 17.39 14.39 26.74 4.44 10.52 8.47 21.29 10.65 32.5a6.38 6.38 0 0 1-.08 3.86c-.66 1.45-2.26 2.2-3.72 2.84l-24.41 10.51c-1 .44-2.25.88-3.23.33a3.71 3.71 0 0 1-1.34-1.76l-26.56-55.44c-4.33 2.51-5.81 8.24-5 13.19s3.26 9.42 5.22 14a67.68 67.68 0 0 1 1.87 47.54q-44.12-.14-88.22-1.83c-1.89-.07-4-.23-5.31-1.58a6.94 6.94 0 0 1-1.54-3.39 40.31 40.31 0 0 1 6.91-32.88c1.72-2.29 3.72-4.45 4.74-7.13 1.3-3.41.85-7.21.37-10.84l-2.41-18.48a12.63 12.63 0 0 0-1.19-4.57c-2.21-4-7.66-4.37-12.22-4.42-14.87-.18-29.72.18-44.17-3.34-1.87-.45-3.91.06-4.92-1.58a7.65 7.65 0 0 1-.73-4.28c.14-5.76 0-14.66.13-20.42 14.14-.06 28.56-.34 42.7-.4 7.89 0 18.19 2.58 23.21-3.51 7.83-9.49 25.71-15.08 25.71-15.08s-4.54 21.46 2.35 25.39z",
    fill: "#00695c"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#fff",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M758.14 277.45l-1.59 100.84"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M777.13 277.7a14.5 14.5 0 0 0 6.38-1.35c5.17-2.86 2.54-18.89 1.18-26.17a36.23 36.23 0 0 0-7-1.52c1.19 6.25 4.67 24.6-.9 27.68a14.5 14.5 0 0 1-6.38 1.35l-1.33.05c2.7.14 5.39.11 8.05-.04zM721.82 262.64c4.59-5.57 12.64-9.79 18.51-12.33.27-1.69.49-2.75.49-2.75s-17.88 5.59-25.71 15.08c-2.13 2.58-5.21 3.59-8.65 3.91 5.96.35 11.91.28 15.36-3.91zM829 361.96l-26.56-55.44a10.05 10.05 0 0 0-4.24 5.18l24.08 50.28a3.71 3.71 0 0 0 1.34 1.76c1 .55 2.19.11 3.23-.33l2.35-1zM716.25 379.45c-1.89-.07-4-.23-5.31-1.58a6.94 6.94 0 0 1-1.54-3.39 40.31 40.31 0 0 1 6.91-32.88c1.72-2.29 3.72-4.45 4.74-7.13 1.3-3.41.85-7.21.37-10.84L719 305.16a12.64 12.64 0 0 0-1.19-4.57c-2.21-4-7.66-4.37-12.22-4.42-14.87-.18-29.72.18-44.17-3.34-1.87-.45-3.91.06-4.92-1.58a7.65 7.65 0 0 1-.73-4.28c.14-5.76 0-14.66.13-20.42 12.53-.05 25.26-.27 37.84-.37h-1.84c-14.14.06-28.56.34-42.7.4-.14 5.76 0 14.66-.13 20.42a7.65 7.65 0 0 0 .73 4.28c1 1.63 3.06 1.12 4.92 1.58 14.45 3.51 29.3 3.15 44.17 3.34 4.55.06 10 .45 12.22 4.42a12.64 12.64 0 0 1 1.19 4.57l2.41 18.48c.47 3.62.93 7.42-.37 10.84-1 2.68-3 4.84-4.74 7.13a40.31 40.31 0 0 0-6.91 32.88 6.94 6.94 0 0 0 1.54 3.39c1.33 1.35 3.42 1.51 5.31 1.58q44.09 1.69 88.22 1.83v-.05q-40.76-.28-81.51-1.82z"
  })), React.createElement("path", {
    d: "M764.66 210.93c1.32.41 2.76.29 4.08.7 5.24 1.66 4.49 9.08 4.6 14.57.16 8.3 4.73 15.84 9.79 22.41a127.94 127.94 0 0 0 50.25 39.09c4 1.75 8.59 3.69 10.2 7.79a42.21 42.21 0 0 1 1.16 5.17c2.3 9 16.31 12 22.07 4.66 3.68-4.69 3.64-11.37 6.77-16.43 1.62-2.61 4-4.7 5.46-7.41 4.43-8.33-1.58-18.06-3.83-27.23-2.34-9.54-.42-19.55-.71-29.37-.61-20.36-11.13-39.85-26.7-53s-35.8-20.12-56.14-21.35c-15.22-.92-31.81 1.86-42.42 12.81-6.72 6.94-10.22 16.29-15.2 24.56s-12.67 16.15-22.32 16.54c.18 3.62 5.67 3.3 9 1.78 7-3.22 23.45-14.94 31.28-12.61s5.1 14.49 12.66 17.32z",
    fill: "#5d4037"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M738.51 184.55c5-8.28 8.48-17.62 15.2-24.56q1-1 2.07-2a36.23 36.23 0 0 0-6.54 5.32c-6.72 6.94-10.22 16.29-15.2 24.56a45 45 0 0 1-8.11 10.11c5.16-3.09 9.42-8.18 12.58-13.43zM849.21 297.33a42.24 42.24 0 0 0-1.16-5.17c-1.61-4.09-6.16-6-10.2-7.79a128 128 0 0 1-50.25-39.11c-5.06-6.57-9.64-14.12-9.79-22.41-.1-5.49.64-12.91-4.6-14.57-1.32-.42-2.76-.29-4.08-.7-7.56-2.84-4.76-15-12.69-17.32s-24.31 9.39-31.28 12.61c-2.35 1.09-5.83 1.55-7.68.41a19 19 0 0 1-5.75 1.16c.18 3.62 5.67 3.3 9 1.78 7-3.22 23.45-14.94 31.28-12.61s5.13 14.48 12.69 17.32c1.32.41 2.76.29 4.08.7 5.24 1.66 4.49 9.08 4.6 14.57.16 8.3 4.73 15.84 9.79 22.41a128 128 0 0 0 50.21 39.09c4 1.75 8.59 3.69 10.2 7.79a42.24 42.24 0 0 1 1.16 5.17c2.3 9 16.31 12 22.07 4.66l.08-.12c-6.6 2.67-15.89-.67-17.68-7.87z"
  })), React.createElement("path", {
    d: "M872.12 489.48l-3.35-27.93-12.29-23.47 20.26-8.53-.15-.41-21.23 8.94 12.29 23.47 3.35 27.93 12.29 12.29a6.1 6.1 0 0 0 1-.11zM858.71 435.84l-31.01-74.19-3.63 1.56 31.29 74.86 21.23-8.94-.2-.74-17.68 7.45z",
    fill: "#fff",
    opacity: 0.2
  }));
};

UndrawPresentation.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawPresentation;