function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawOrganizeResume = function UndrawOrganizeResume(_props) {
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
    viewBox: "0 0 1000.79 738.83",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 534.54,
    y1: 548.83,
    x2: 534.54,
    y2: 87.83,
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
    x1: 1028.82,
    y1: 815.41,
    x2: 1028.82,
    y2: 407.41,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 799.21,
    y1: 589.03,
    x2: 799.21,
    y2: 340.83,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 2225.35,
    y1: 817.55,
    x2: 2225.35,
    y2: 423.13,
    gradientTransform: "translate(-1556)",
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M27.66 463.89c-12 1.95-27.05 7.53-26.91 20.5.07 6.58 4.44 12.19 8.69 17a323 323 0 0 0 61.33 54.17c10.82 7.33 22.45 14.34 29.64 25.67s9 25.75 9.57 39.47a303.38 303.38 0 0 1-11.34 96.25c35.23 6.71 74.52 12.59 103.88-8.6 17.58-12.69 29.47-33.95 49.06-42.75 13.08-5.88 27.89-5.36 42.15-4.61q101.25 5.33 202 20c28.13 4.1 56.8 8.74 84.63 3.44s55.21-22.59 65.47-50.62c1.58-4.32 3-9.14 6.54-11.74 3.2-2.32 7.39-2.27 11.28-2.13l235.08 8.08c12.88.44 26.21.8 38-4.5 11.43-5.13 20.22-15 28.68-24.67 19.35-22.06 40.16-49.2 34.47-79.14-4.55-24-24.89-40.77-45.06-52.51s-42.42-21.35-57.24-40.12c-22.55-28.57-21.66-69.46-23.06-106.53a591.77 591.77 0 0 0-12.35-99.83c-6.11-28.89-14.62-57.82-30.53-82.22s-40.24-43.94-67.76-47.52c-35.94-4.68-72.07 17.74-107.23 8.22-29.7-8-50.14-36.43-74.75-56.13-43.71-35-101.07-42.33-155.3-43-57.5-.73-116.52 5.09-167.77 32.09-11.74 6.18-23.22 13.66-31.35 24.58-12.46 16.75-15.48 39.25-23.63 58.83C171 194.41 64.16 211.41 29.48 289.41c-12.31 27.67-12.19 59.94-3.22 89 9.65 31.27 36.81 48.54 47.58 75.8-11.59 7.46-32.13 7.39-46.18 9.68z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("g", {
    opacity: 0.2
  }, React.createElement("path", {
    d: "M885.55 370.92s4.8-63.77 40.84-98.42a96.9 96.9 0 0 0 28.83-54.09 163 163 0 0 0 2-29.73",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M979.84 166.71c-2.66 7-23.1 22.61-23.1 22.61s-5-25.21-2.36-32.24a13.615 13.615 0 1 1 25.47 9.63zM986.16 213.62c-6.05 4.46-31.68 6.42-31.68 6.42s9.49-23.89 15.54-28.35a13.61 13.61 0 1 1 16.14 21.92zM960.07 279.84c-7.48.79-30.59-10.45-30.59-10.45s20.25-15.83 27.72-16.63a13.616 13.616 0 1 1 2.87 27.08zM929.05 325.5c-7.24 2-31.92-5.13-31.92-5.13s17.28-19 24.52-21.07a13.612 13.612 0 1 1 7.4 26.2zM927.23 211.3c3.19 6.81 24.77 20.77 24.77 20.77s3.07-25.52-.12-32.33a13.613 13.613 0 1 0-24.65 11.56zM891.62 265.16c5.08 5.54 29.85 12.41 29.85 12.41s-4.71-25.27-9.79-30.81a13.614 13.614 0 0 0-20.07 18.4zM864.2 322.25c4.07 6.32 27.33 17.27 27.33 17.27s-.37-25.7-4.44-32a13.615 13.615 0 0 0-22.89 14.75z",
    fill: primaryColor
  })), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M164.14 87.83v461h740.8v-461h-740.8z"
  }), React.createElement("path", {
    fill: "#f6f7f9",
    d: "M171.97 92.7h725.15v35.21H171.97z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M171.97 92.7h725.15v35.21H171.97z",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#f6f7f9",
    d: "M171.97 127.91h725.15v416.05H171.97z"
  }), React.createElement("circle", {
    cx: 189.36,
    cy: 110.09,
    r: 7.83,
    fill: "#f6f7f9"
  }), React.createElement("circle", {
    cx: 210.22,
    cy: 110.09,
    r: 7.83,
    fill: "#f6f7f9"
  }), React.createElement("circle", {
    cx: 231.09,
    cy: 110.09,
    r: 7.83,
    fill: "#f6f7f9"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M197.18 179.65h373.01v26.95H197.18zM665.83 179.65h195.63v26.95H665.83z",
    opacity: 0.2
  }), React.createElement("g", {
    opacity: 0.2,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M269.78 434.41h26.08v86.08h-26.08zM320.21 372.67h26.08v147.81h-26.08zM370.64 310.94h26.08v209.54h-26.08zM421.07 330.94h26.08v189.55h-26.08zM471.5 390.06h26.08v130.42H471.5z"
  })), React.createElement("path", {
    fill: primaryColor,
    d: "M665.4 265.73h195.63v240.41H665.4z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M1097.45 517.39c-1.25-6.36-3.65-12.58-3.71-19.06-.09-10.52 5.51-22.74-1.85-30.51-1.68-1.77-3.93-3.09-5.18-5.16a11.36 11.36 0 0 1-1.3-5.82c-.12-12.27 6.64-24.73 2.59-36.36a12.36 12.36 0 0 0-4.64-6.47c-2.34-1.52-5-1.81-7.87-1.76-2.59 0-5.32.29-8 .34a17.29 17.29 0 0 1-4.49-.59c-3.1-.88-5.73-2.91-8.8-3.91a14.38 14.38 0 0 0-5-.69c-6.72-.22-12.86 4.25-17.64 8.58a65.86 65.86 0 0 1-7.55 5.49c.4-.28-9.33 6.4-5.67 6.47a12.74 12.74 0 0 1 7.24 2.52 19.56 19.56 0 0 0 1 22.68c-1.59-1.56-3.35-3.27-5.15-5-5.36-5.27-12.85-12.34-16.37-14.27C999.27 430.76 991 424 991 424s-10.75 6-7.44 14.33a33.45 33.45 0 0 1 4.61 1.81 8.63 8.63 0 0 0 .63 3.23 35.6 35.6 0 0 1 9.55 4.68 16.28 16.28 0 0 1 .92 1.43c1.43 2.5 5.88 7.05 11.32 12.11 3.82 3.83 8.85 8.41 13.86 12.82-1.51 3-3.1 6-3.38 9a11.09 11.09 0 0 1-1.13-.52c-7.44-4-24.8-3.58-24.8-3.58s-14.47-7.56-17.36-24.67c0 0-2.89-10.35-2.07-13.13h-.05l.37-.08 3.47-6.29a2.78 2.78 0 0 0-2.28-4.08c-16.92-1.52-17.72 14-17.72 14h.15l-.05.13c2.07 9.95 3.72 9.15 3.31 17.11l6.61 17.51s.41 6 12.4 13.93 25.63 20.3 25.63 20.3-7.23 3.78-4.55 21.09c3.28 21.16-1.65 51.34-1.65 51.34v19.5l.92-.25c-.12.65-.23 1.34-.35 2.09a109.8 109.8 0 0 0-.57 29.61c2.48 20.7 12.4 49 12.4 49s3.72 9.95 4.55 17.91a16.51 16.51 0 0 0 1.06 4.6 36.17 36.17 0 0 1 2.9 13.81 97.24 97.24 0 0 0 6.37 34.91c4.19 10.64 5.75 16.88 6.21 20.52-3 3.88-6.86 8.11-9.93 8.53-5.79.8-16.95 1.59-9.51 11.14a6.8 6.8 0 0 0 .86.91c-5.65.9-11.86 2.88-5.82 10.63 7.44 9.55 51.25 5.17 51.25 5.17s.28-5.31 0-11.14c3.07-.21 5-.4 5-.4s1.24-23.08-4.13-25.87a11.6 11.6 0 0 0-2.9.7c-.58-3.19-1-7.16-1.3-10.09l2.13-.16v-.16h.13v-34.78s-2.48-21.49-11.57-31a19.32 19.32 0 0 1-3-4l-.12-.25c.06-2.72.06-6.39 0-10.6l.13-.23c.16-.26.32-.49.47-.7a8.71 8.71 0 0 1 .68-.8l.13-.17s5-6 21.91-43.78c10.33-23.06 7.6-36 3.9-42.67-.78-3-2.41-9.72-4.45-21.23a83.23 83.23 0 0 1-1.19-14.79 29.74 29.74 0 0 0 7.84.88 26.62 26.62 0 0 0 12-2.56c-2.7-3.94-5.52-8.56-4.16-13.09 1.54-5.16 7.64-7.53 11.16-11.69 4.24-5.03 4.35-12.21 3.1-18.58z",
    transform: "translate(-99.6 -80.59)",
    fill: "url(#prefix__b)"
  }), React.createElement("path", {
    d: "M893.11 347.66s-10.26 5.92-7.1 14.21c0 0 10.66 3.16 15 11.05s37.89 36.31 37.89 36.31L963.4 397s-8.51-11.36-35.43-19.3c0 0-15.87-17-21.4-20.17s-13.46-9.87-13.46-9.87z",
    fill: "#797c9c"
  }), React.createElement("path", {
    d: "M898.11 352.66s-10.26 5.92-7.1 14.21c0 0 10.66 3.16 15 11.05s37.89 36.31 37.89 36.31L968.4 402s-8.51-11.36-35.43-19.3c0 0-15.87-17-21.4-20.17s-13.46-9.87-13.46-9.87z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M15.62 643.82s-57.66 34.79 48.63 88.35c0 0 23.42-43.48-2.47-78.93a34.91 34.91 0 0 0-45.29-9.92z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M16.28 643.08s49.35 37.75 48 89.08",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M67.04 732.8s-18.07-61.39 3.36-106.5a96.9 96.9 0 0 0 7.84-60.79 163 163 0 0 0-8.61-28.53",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M83.01 508.41c0 7.52-13.61 29.32-13.61 29.32s-13.61-21.8-13.61-29.32a13.615 13.615 0 1 1 27.23 0zM105.51 550.09c-4.09 6.31-27.36 17.21-27.36 17.21s.42-25.7 4.51-32a13.612 13.612 0 1 1 22.85 14.8zM104.53 621.25c-6.71 3.39-32.31 1-32.31 1s13.34-22 20.05-25.36a13.613 13.613 0 0 1 12.26 24.31zM91.66 674.93c-6 4.47-31.67 6.49-31.67 6.49s9.43-23.91 15.48-28.38a13.613 13.613 0 1 1 16.19 21.89zM49.57 568.76c5.39 5.24 30.52 10.67 30.52 10.67s-6.15-25-11.55-30.2a13.624 13.624 0 1 0-19 19.53zM35.31 631.73c6.71 3.39 32.31 1 32.31 1s-13.34-22-20.05-25.36a13.613 13.613 0 0 0-12.26 24.31zM29.86 694.83c6 4.47 31.67 6.49 31.67 6.49s-9.43-23.91-15.48-28.38a13.613 13.613 0 1 0-16.19 21.89z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M83.01 508.41c0 7.52-13.61 29.32-13.61 29.32s-13.61-21.8-13.61-29.32a13.615 13.615 0 1 1 27.23 0zM105.51 550.09c-4.09 6.31-27.36 17.21-27.36 17.21s.42-25.7 4.51-32a13.612 13.612 0 1 1 22.85 14.8zM104.53 621.25c-6.71 3.39-32.31 1-32.31 1s13.34-22 20.05-25.36a13.613 13.613 0 0 1 12.26 24.31zM91.66 674.93c-6 4.47-31.67 6.49-31.67 6.49s9.43-23.91 15.48-28.38a13.613 13.613 0 1 1 16.19 21.89zM49.57 568.76c5.39 5.24 30.52 10.67 30.52 10.67s-6.15-25-11.55-30.2a13.624 13.624 0 1 0-19 19.53zM35.31 631.73c6.71 3.39 32.31 1 32.31 1s-13.34-22-20.05-25.36a13.613 13.613 0 0 0-12.26 24.31zM29.86 694.83c6 4.47 31.67 6.49 31.67 6.49s-9.43-23.91-15.48-28.38a13.613 13.613 0 1 0-16.19 21.89z",
    opacity: 0.25
  }), React.createElement("path", {
    d: "M108.85 733.97s-18.07-61.35 3.39-106.5a96.9 96.9 0 0 0 7.84-60.79 163 163 0 0 0-8.61-28.53",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M124.82 509.61c0 7.52-13.61 29.32-13.61 29.32s-13.61-21.8-13.61-29.32a13.615 13.615 0 0 1 27.23 0zM147.33 551.25c-4.09 6.31-27.36 17.21-27.36 17.21s.42-25.7 4.51-32a13.612 13.612 0 0 1 22.85 14.8zM146.34 622.41c-6.71 3.39-32.31 1-32.31 1s13.34-22 20.05-25.36a13.636 13.636 0 1 1 12.26 24.36zM133.47 676.1c-6 4.47-31.67 6.49-31.67 6.49s9.43-23.91 15.48-28.38a13.613 13.613 0 1 1 16.19 21.89zM91.4 569.92c5.39 5.24 30.52 10.67 30.52 10.67s-6.15-25-11.55-30.2a13.624 13.624 0 1 0-19 19.53zM77.12 632.89c6.71 3.39 32.31 1 32.31 1s-13.34-22-20.05-25.36a13.613 13.613 0 1 0-12.26 24.31zM71.67 696c6 4.47 31.67 6.49 31.67 6.49s-9.43-23.91-15.48-28.38A13.613 13.613 0 0 0 71.67 696zM24.54 731.83h953v7h-953z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M698.23 340.83H900.2v248.2H698.23z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M701.4 344.73h195.63v240.41H701.4z"
  }), React.createElement("path", {
    fill: "#e8eaf1",
    d: "M714.54 365.83h40v40h-40zM734.54 429.83h142v8h-142zM734.54 446.83h142v8h-142zM734.54 463.83h142v8h-142zM734.54 480.83h142v8h-142zM734.54 497.83h142v8h-142zM734.54 514.83h142v8h-142zM734.54 531.83h142v8h-142z"
  }), React.createElement("path", {
    d: "M957.05 684.3s1.18 17.36 3.16 19.34-17.76 3.16-17.76 3.16l2.76-22.5z",
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M957.05 684.3s1.18 17.36 3.16 19.34-17.76 3.16-17.76 3.16l2.76-22.5z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M961.4 697.72s-2.76 0-12.63 5.13c0 0-6.71-1.18-9.47-10.66 0 0-8.29 14.21-13.81 15s-16.18 1.58-9.08 11.05 48.94 5.13 48.94 5.13 1.17-22.89-3.95-25.65z",
    fill: "#e4e2f3"
  }), React.createElement("path", {
    d: "M961.4 697.72s-2.76 0-12.63 5.13c0 0-6.71-1.18-9.47-10.66 0 0-8.29 14.21-13.81 15s-16.18 1.58-9.08 11.05 48.94 5.13 48.94 5.13 1.17-22.89-3.95-25.65z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M955.47 711.14l-2.76 7.5-18.15-5.13 1-7.44.25-1.8.69-5s15.39-3.95 15.39-2a30.62 30.62 0 0 0 1 4.81c.63 2.43 1.42 5.19 2 7 .34 1.27.58 2.06.58 2.06z",
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M945.56 608.21a10.79 10.79 0 0 0 0 11 19.12 19.12 0 0 0 2.84 3.93c8.68 9.47 11.05 30.78 11.05 30.78v34.33l-5.92.45-9.47.73-14.21-58.41s-8.29-42.62-4.34-50.12 7.5-54.46 7.5-54.46l3.28-3.39 7.77-8.05h22.5a15.13 15.13 0 0 1 4.38 4.89c3.78 6.25 7.17 19.25-3.19 43.25-16.18 37.49-20.92 43.41-20.92 43.41a9.09 9.09 0 0 0-1.27 1.66z",
    fill: "#4c4c78"
  }), React.createElement("path", {
    d: "M945.69 608.04a10.79 10.79 0 0 0 0 11 19.12 19.12 0 0 0 2.84 3.93c8.68 9.47 11.05 30.78 11.05 30.78v34.33l-5.92.45-9.47.73-14.21-58.41s-8.29-42.62-4.34-50.12 7.5-54.46 7.5-54.46l3.28-3.39 7.77-8.05h22.5a15.13 15.13 0 0 1 4.38 4.89c3.78 6.25 7.17 19.25-3.19 43.25-16.18 37.49-20.92 43.41-20.92 43.41a9.09 9.09 0 0 0-1.27 1.66z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M952.93 702.13l-17.09 2.14.69-5s15.39-3.95 15.39-2a30.62 30.62 0 0 0 1.01 4.86z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M944.4 557.62s1 31.07 1.14 50.59v11a24.33 24.33 0 0 1-.32 4.33c-1.18 3.55 1.18 11.44 1.18 11.44a113.91 113.91 0 0 1 7.1 48.94v17.36l-18.94 2.37s3.16-2.37-5.53-25.26a99.76 99.76 0 0 1-6.09-34.62 37.05 37.05 0 0 0-2.77-13.7 16.9 16.9 0 0 1-1-4.56c-.79-7.89-4.34-17.76-4.34-17.76s-9.47-28-11.84-48.54a113 113 0 0 1 .55-29.36 73.27 73.27 0 0 1 1.42-7.34s38.58-24.28 53.15-7.5a19 19 0 0 1 3.29 5.53 36.47 36.47 0 0 1 1.86 6.15c4.53 22.25-18.86 30.93-18.86 30.93z",
    fill: "#4c4c78"
  }), React.createElement("circle", {
    cx: 943.23,
    cy: 364.64,
    r: 20.13,
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M932.18 377.26s8.29 23.28 0 35.52 26.44 8.29 26.44 8.29l13.42-16.18s-15.79 0-16.58-27.63-23.28 0-23.28 0z",
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M972.04 524.47a51.79 51.79 0 0 1-8.79 2.2c-4.91.76-10.71.79-14.1-2.2-2-1.77-7-2-12.91-1.42-12.53 1.2-29.48 5.87-32.72 6.79a73.27 73.27 0 0 1 1.42-7.34s38.58-24.28 53.15-7.5h8.42a15.13 15.13 0 0 1 4.38 4.89c.73 3.14 1.15 4.58 1.15 4.58zM955.47 711.14l-2.76 7.5-18.15-5.13 1-7.44c3.12 6.9 8.44 7.84 8.44 7.84a64.37 64.37 0 0 1 10.86-4.76c.37 1.2.61 1.99.61 1.99z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M956.65 709.17s-2.76 0-12.63 5.13c0 0-6.71-1.18-9.47-10.66 0 0-8.29 14.21-13.81 15s-16.18 1.58-9.08 11.05 48.94 5.13 48.94 5.13 1.18-22.89-3.95-25.65z",
    fill: "#e4e2f3"
  }), React.createElement("path", {
    d: "M863.02 368.49s.77-15.37 16.92-13.87a2.76 2.76 0 0 1 2.18 4l-3.31 6.23z",
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M956.26 409.62s-19.34-3.16-24.47-7.1c0 0-3.95 7.5-11.05 3.55s-23.68-3.55-23.68-3.55a35.79 35.79 0 0 1-16.58-24.47s-2.76-10.26-2-13c0 0-10.26-10.66-15.39 3.55 2 9.87 3.55 9.08 3.16 17l6.31 17.36s.39 5.92 11.84 13.81 24.47 20.13 24.47 20.13-6.91 3.75-4.34 20.92c3.14 21-1.58 50.91-1.58 50.91v19.34s39.47-11.44 46.17-5.53 22.89 0 22.89 0-2-6.71-4.74-22.89.39-32 .39-32 10.26-27.23 15-38.28-3.55-26-11.84-31.57-11.37-2.21-11.37-2.21 14.57 10.48-3.19 14.03z",
    fill: "#797c9c"
  }), React.createElement("path", {
    d: "M905.55 466.63s3.15-.76 18.93-3.13 43.41 3.16 43.41 3.16",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M919.19 351.6c9 .19 15.66 11.29 11.67 19.3-1.75 3.52-5.14 6.62-4.79 10.53.16 1.78 1.11 3.39 1.52 5.13 1.89 8-7.68 15.49-5.49 23.39a16.89 16.89 0 0 0 3.42 5.73l16.62 20.94a15.73 15.73 0 0 1 2.48 3.84 16.19 16.19 0 0 1 .72 6.15c-.08 10 .57 20.73 6.47 28.84 7.09 9.74 21.54 13.24 32.29 7.81-2.58-3.91-5.27-8.49-4-13 1.47-5.11 7.29-7.47 10.65-11.59 4.06-5 4.16-12.1 3-18.41s-3.49-12.48-3.54-18.9c-.08-10.43 5.26-22.55-1.77-30.25-1.61-1.76-3.75-3.06-4.95-5.12a11.63 11.63 0 0 1-1.24-5.78c-.11-12.16 6.34-24.53 2.47-36.06a12.25 12.25 0 0 0-4.43-6.42c-5.48-3.69-13.08-.11-19.42-2-3-.87-5.47-2.89-8.4-3.88-7.9-2.67-15.21 2.69-20.67 7.83a63 63 0 0 1-7.21 5.44c.39-.21-8.9 6.41-5.4 6.48z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M920.19 351.6c9 .19 15.66 11.29 11.67 19.3-1.75 3.52-5.14 6.62-4.79 10.53.16 1.78 1.11 3.39 1.52 5.13 1.89 8-7.68 15.49-5.49 23.39a16.89 16.89 0 0 0 3.42 5.73l16.62 20.94a15.73 15.73 0 0 1 2.48 3.84 16.19 16.19 0 0 1 .72 6.15c-.08 10 .57 20.73 6.47 28.84 7.09 9.74 21.54 13.24 32.29 7.81-2.58-3.91-5.27-8.49-4-13 1.47-5.11 7.29-7.47 10.65-11.59 4.06-5 4.16-12.1 3-18.41s-3.49-12.48-3.54-18.9c-.08-10.43 5.26-22.55-1.77-30.25-1.61-1.76-3.75-3.06-4.95-5.12a11.63 11.63 0 0 1-1.24-5.78c-.11-12.16 6.34-24.53 2.47-36.06a12.25 12.25 0 0 0-4.43-6.42c-5.48-3.69-13.08-.11-19.42-2-3-.87-5.47-2.89-8.4-3.88-7.9-2.67-15.21 2.69-20.67 7.83a63 63 0 0 1-7.21 5.44c.39-.21-8.9 6.41-5.4 6.48z",
    fill: "#b36362"
  }), React.createElement("path", {
    d: "M717.68 622.54a34.68 34.68 0 0 1-5.91-7.25c-3.46-5.44-9.25-8.37-13.22-9.83v-1.77h.24l-.11-1.64h.11l-.28-4.34-1.41-21.68S692 561.5 701 548.2s.56-26.06-7.9-31.05c0 0-4-21.07-.56-26.06a145.27 145.27 0 0 0-14.2-7.23q-.11-.39-.21-.8c-.09-2-.21-3.93-.32-5.89a21.54 21.54 0 0 1 .56-3c.11-.41.23-.83.36-1.26a21.63 21.63 0 0 0 13.81-20.06 21.24 21.24 0 0 0-1.34-7.44 9.48 9.48 0 0 0 1-2.36 9.63 9.63 0 0 0-1.34-6.92c-2.24-5-7.89-9.57-12-11.24-5.87-2.4-14.71-1.83-20.82-1.1-3.43.41-7.35 1.57-8.59 4.74a32.85 32.85 0 0 0-.78 3.65c-1.28 4.84-6.83 7.1-10.26 10.8-3 3.27-4.36 7.69-5.34 12a110.79 110.79 0 0 0-2 37.67c.35 2.9.81 5.78 1.3 8.66-2.06 2.9-3.92 8-3.07 17l-6.77 32.16-2.82 18.85a16.48 16.48 0 0 0 5.08 14.42c4.32 4.24 9.56 11.41 12.79 16.06a38.24 38.24 0 0 0-2.06 12.78c.07 2 .18 3.89.32 5.71a50.84 50.84 0 0 0 2.16 11.3c.79 7.74 2.36 17.64 5.42 24l1.13 33.82s-1.69 31.05-5.08 37.15 7.34 57.67 7.34 57.67v7.21l-1.81 5.28-.45-.34c-8.47 10.54 0 14.42 0 14.42s2.3.11 6 .25a6.81 6.81 0 0 0 3.61 7.51s48 2.22 56.46 0 6.21-10 1.69-9.43a20.65 20.65 0 0 1-6.76-.89c2.64-3.09.53-7.28-2.83-6.87-4.52.55-14.68-3.47-14.68-3.47v.07a7.63 7.63 0 0 0-1-.3 113.24 113.24 0 0 1-11.17-3.15c-2.18-4.67-7.2-17.23-3.6-27 1.63-4.4 2.16-10.26 2.16-15.94a182.08 182.08 0 0 1 7.43-50.58l6.77-23.27s9.6-28.28 10.16-36l-.08-11.32c7.94 5.11 14.24 3.56 18.27 1.19a4.35 4.35 0 0 0 .7-7.06zm-75.35-58.82c.19-.81.35-1.7.49-2.63h4a20.6 20.6 0 0 1 2 10.91c-3.06-1-7.64-3.38-6.49-8.28z",
    transform: "translate(-99.6 -80.59)",
    fill: "url(#prefix__d)"
  }), React.createElement("path", {
    d: "M548.1 706.26l-2.17 6.52 7.06 7.06 23.36 5.43 16.84-1.63-1.09-6a7.21 7.21 0 0 0-5.35-5.26c-6.92-1.63-20.12-5.33-22.9-10.49z",
    fill: "#db8b8b"
  }), React.createElement("path", {
    d: "M548.1 706.26l-2.17 6.52 7.06 7.06 23.36 5.43 16.84-1.63-1.09-6a7.21 7.21 0 0 0-5.35-5.26c-6.92-1.63-20.12-5.33-22.9-10.49z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M587.76 722.02l-3.26-4.35 3.26-5s9.78 3.95 14.12 3.4 6.52 7.06-1.63 9.24-54.33 0-54.33 0-8.15-3.8 0-14.12l7.06 5.43s12 6.52 17.93 5.43z",
    fill: "#474463"
  }), React.createElement("path", {
    d: "M602.4 731.25l-16.84 1.63-23.34-5.47-7.06-7 .58-1.73.81-2.42.79-2.37 15.75-4.35a9.76 9.76 0 0 0 3.19 3.2c5.12 3.5 14.31 6 19.7 7.29a5.65 5.65 0 0 1 .67.2 7.18 7.18 0 0 1 4.68 5.06z",
    fill: "#db8b8b"
  }), React.createElement("path", {
    d: "M602.4 731.25l-16.84 1.63-23.34-5.47-7.06-7 .58-1.73 6.49 5s12 6.52 17.93 5.43H597l-3.26-4.35 2.93-4.52a7.18 7.18 0 0 1 4.68 5.06z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M596.99 729.62l-3.26-4.35 3.26-5s9.78 3.95 14.12 3.4 6.52 7.06-1.63 9.24-54.33 0-54.33 0-8.15-3.8 0-14.12l7.06 5.43s12 6.52 17.93 5.43z",
    fill: "#474463"
  }), React.createElement("path", {
    d: "M583.4 414.53s-26.08 2.72-22.27-8.15a19.56 19.56 0 0 0 .8-9.59 26.59 26.59 0 0 0-4.61-11.05l24.45 3.8a30.62 30.62 0 0 0-3.31 7.85c-2.91 11.53 4.94 17.14 4.94 17.14z",
    fill: "#db8b8b"
  }), React.createElement("path", {
    d: "M538.86 538.41s.54 23.36 6 34.77l1.09 33.14s-1.63 30.42-4.89 36.4 7.06 56.5 7.06 56.5v8.69s17.36 6.5 22.28-1.1l-4.89-64.65 2.17-89.64z",
    fill: "#474463"
  }), React.createElement("path", {
    d: "M538.86 538.41s.54 23.36 6 34.77l1.09 33.14s-1.63 30.42-4.89 36.4 7.06 56.5 7.06 56.5v8.69s17.36 6.5 22.28-1.1l-4.89-64.65 2.17-89.64z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M528 463.41l-3.26 8.69-2.72 18.47a16.34 16.34 0 0 0 4.89 14.12c6.52 6.52 15.21 20.1 15.21 20.1l10.32-31s-10.32-1.63-8.69-8.69 1.09-20.1 1.09-20.1z",
    fill: "#cbcdda"
  }), React.createElement("path", {
    d: "M528 462.41l-3.26 8.69-2.72 18.47a16.34 16.34 0 0 0 4.89 14.12c6.52 6.52 15.21 20.1 15.21 20.1l10.32-31s-10.32-1.63-8.69-8.69 1.09-20.1 1.09-20.1z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M576.28 712.72c-7 11-17.81 4.75-19.74 3.51l.79-2.37 15.75-4.35a9.76 9.76 0 0 0 3.2 3.21z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M598.08 559.58c-.54 7.61-9.78 35.31-9.78 35.31l-6.51 22.8a181.41 181.41 0 0 0-7.16 49.6c0 5.56-.51 11.3-2.08 15.61-4.35 12 4.35 28.25 4.35 28.25-7.61 13.58-20.64 4.35-20.64 4.35v-8.69s-10.32-47.26-7.61-56.5 3.8-34.23 3.8-34.23v-45.09a51.17 51.17 0 0 1-14.91-32.44c-.13-1.78-.23-3.65-.3-5.59-.44-12.26 7.94-26.63 11.21-31.75.79-1.24 1.28-1.93 1.28-1.93l48 19h.11V524.25z",
    fill: "#474463"
  }), React.createElement("path", {
    d: "M581.78 389.54a30.62 30.62 0 0 0-3.31 7.85 21.26 21.26 0 0 1-16.53-.6 26.59 26.59 0 0 0-4.61-11.05z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 570.91,
    cy: 376.5,
    r: 21.19,
    fill: "#db8b8b"
  }), React.createElement("path", {
    d: "M598.08 524.27h-.23c-22.78 4.68-51.38-19.06-51.38-19.06a28.16 28.16 0 0 0 2-4c.79-1.24 1.28-1.93 1.28-1.93l48 19 .12 1.9z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M592.1 413.98s-30.42-18.47-40.2-10.87l-13.58 17.38s-8.69 2.72-7.06 20.1l-6.52 31.51 19.56 4.89s11.41 10.87 2.17 26.62c0 0 28.79 23.9 51.61 19l-1.68-25.51s-4.89-14.12 3.8-27.16.54-25.53-7.61-30.42c.06 0-3.75-20.65-.49-25.54z",
    fill: "#cbcdda"
  }), React.createElement("path", {
    d: "M593.73 524.81s11.41 2.17 16.84 10.87a33.86 33.86 0 0 0 5.69 7.1 4.31 4.31 0 0 1-.67 6.87c-4.31 2.59-11.34 4.19-20.22-3.11-15.22-12.49-1.64-21.73-1.64-21.73z",
    fill: "#db8b8b"
  }), React.createElement("path", {
    d: "M576.89 424.31s-10.87-1.09-13.58 27.16-7.06 34.77-7.06 34.77-2.72 14.67 3.8 23.36 19 27.16 19 27.16 13.58 3.8 16.3-9.78l-16.84-31.51s-2.72-10.87 3.8-18.47 11.42-58.13-5.42-52.69z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M577.98 422.68s-10.87-1.09-13.58 27.16-7.06 34.77-7.06 34.77-2.72 14.67 3.8 23.36 19 27.16 19 27.16 13.58 3.8 16.3-9.78l-16.84-31.51s-2.71-10.86 3.8-18.43 11.42-58.17-5.42-52.73z",
    fill: "#cbcdda"
  }), React.createElement("path", {
    d: "M586.94 443.05s1.09 16.84-3.8 26.08-4.89 21.19 0 27.71M589.66 422.41s-4.35-4.35-16.84-4.89-17.93-4.35-17.93-4.35",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M559.4 349.12c-3.3.41-7.07 1.54-8.26 4.64a32.71 32.71 0 0 0-.75 3.58c-1.23 4.75-6.57 7-9.87 10.58-2.91 3.2-4.19 7.53-5.14 11.76a110.48 110.48 0 0 0-1.91 36.91c1.06 9 3.23 17.88 3.83 26.93s-.5 18.57-5.45 26.17c-2.13 3.27-4.93 6.14-6.44 9.74 3.12 2.53 7.41 2.89 11.43 3q7 .24 14 0c2.45-.08 5-.24 7.13-1.48a11 11 0 0 0 3.74-4c2.67-4.54 3.35-10 3.23-15.25s-.95-10.49-1-15.76c-.05-2.87.17-5.91 1.82-8.26 1.19-1.7 3-2.84 4.55-4.21 5.82-5.15 7.81-13.42 8-21.19s-1.09-15.55-.43-23.29c.26-3 1.39-6.67 4.37-7.26a16.81 16.81 0 0 0 2.84-.36c2.39-.92 2.16-4.29 2.84-6.76.77-2.77 3.13-4.91 3.8-7.71 1.56-6.57-6.8-14.42-12.28-16.71-5.63-2.35-14.13-1.78-20.05-1.07z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M558.9 348.03c-3.3.41-7.07 1.54-8.26 4.64a32.71 32.71 0 0 0-.75 3.58c-1.23 4.75-6.57 7-9.87 10.58-2.91 3.2-4.19 7.53-5.14 11.76a110.48 110.48 0 0 0-1.91 36.91c1.06 9 3.23 17.88 3.83 26.93s-.5 18.57-5.45 26.17c-2.13 3.27-4.93 6.14-6.44 9.74 3.12 2.53 7.41 2.89 11.43 3q7 .24 14 0c2.45-.08 5-.24 7.13-1.48a11 11 0 0 0 3.74-4c2.67-4.54 3.35-10 3.23-15.25s-.95-10.49-1-15.76c-.05-2.87.17-5.91 1.82-8.26 1.19-1.7 3-2.84 4.55-4.21 5.82-5.15 7.81-13.42 8-21.19s-1.09-15.55-.43-23.29c.26-3 1.39-6.67 4.37-7.26a16.81 16.81 0 0 0 2.84-.36c2.39-.92 2.16-4.29 2.84-6.76.77-2.77 3.13-4.91 3.8-7.71 1.56-6.57-6.8-14.42-12.28-16.71-5.67-2.35-14.17-1.79-20.05-1.07z",
    fill: "#472727"
  }));
};

UndrawOrganizeResume.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawOrganizeResume;