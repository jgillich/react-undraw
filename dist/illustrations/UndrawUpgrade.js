function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawUpgrade = function UndrawUpgrade(_props) {
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
    viewBox: "0 0 1066 773.96",
    style: style
  }, props), React.createElement("path", {
    d: "M995.19 369.87c.59-6.77.9-13.65.9-20.6 0-108.83-73.84-197.06-164.92-197.06-29 0-56.34 9-80 24.75-64.47-50-148.64-80.21-240.72-80.21-149.83 0-278.71 80.07-335.89 194.9a138.6 138.6 0 0 0-9.6-.34C73.83 291.31 0 379.53 0 488.36c0 40 10 77.23 27.14 108.31 0 97.91 78.45 177.31 175.22 177.31h122l.54-.93c7.17-11.64 24.34-14.55 36.3-7.94 3.16 1.74 6.1 4 9.63 4.8 14.13 3 23.62-19.73 37.92-17.52 7.18 1.11 12.78 8.53 20 7.77 4.79-.51 8.42-4.52 12.92-6.22 7.21-2.74 14.52 1.06 19.57 7.23 2.93-8.43 2.91-18.42 7.65-26.15 7.17-11.64 24.34-14.55 36.3-7.94 3.16 1.74 6.1 4 9.63 4.8 14.13 3 23.62-19.73 37.92-17.52 7.18 1.11 12.78 8.53 20 7.77 4.79-.51 8.42-4.52 12.92-6.22 11.22-4.27 22.71 7.32 25.47 19a81 81 0 0 1 1.69 15.64c9.68-4.69 17.86-17.88 28.91-16.17 7.18 1.11 12.78 8.53 20 7.77 4.79-.51 8.42-4.52 12.92-6.22 11.22-4.27 22.71 7.32 25.47 19 1.47 6.2 1.57 12.64 1.82 19h202.15c76 0 137.58-62.32 137.58-139.2 15.42-30 24.33-65.28 24.33-103.06 0-67-28-126.2-70.81-161.8z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 623,
    cy: 179,
    r: 87,
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#fff",
    d: "M594.99 182.28l27.87-27.87 28.15 27.87h-19.13v21.31h-17.76v-21.17l-19.13-.14zM737.52 401.2a29.75 29.75 0 0 0-55.63-8 23.81 23.81 0 0 0 2.58 47.48h51.66A19.93 19.93 0 0 0 756 420.86a19.62 19.62 0 0 0-18.48-19.66zm-22.85 11.72v15.06H702v-15.1h-13.55l19.87-19.87 19.86 19.87zM889.52 648.2a29.75 29.75 0 0 0-55.63-8 23.81 23.81 0 0 0 2.58 47.48h51.66A19.93 19.93 0 0 0 908 667.86a19.62 19.62 0 0 0-18.48-19.66zm-22.85 11.72v15.06H854v-15.1h-13.55l19.87-19.87 19.86 19.87zM329.45 469.98a46 46 0 0 0-86-12.28 36.8 36.8 0 0 0 4 73.38h79.85a30.8 30.8 0 0 0 30.7-30.72 30.33 30.33 0 0 0-28.55-30.38zm-35.31 18.1v23.34h-19.65v-23.34h-20.88l30.71-30.7 30.68 30.7zM673 549.98v-24.3l11.2 11.2 2.8-2.9-16-16-16 16 2.8 2.8 11.2-11.1v24.3zM114 582.98v-24.3l11.2 11.2 2.8-2.9-16-16-16 16 2.8 2.8 11.2-11.1v24.3zM672 320.98v-18.21l8.4 8.4 2.1-2.17-12-12-12 12 2.1 2.1 8.4-8.33v18.21zM453 188.98v-18.21l8.4 8.4 2.1-2.17-12-12-12 12 2.1 2.1 8.4-8.33v18.21zM371 368.98v-18.21l8.4 8.4 2.1-2.17-12-12-12 12 2.1 2.1 8.4-8.33v18.21zM885 452.98v-18.21l8.4 8.4 2.1-2.17-12-12-12 12 2.1 2.1 8.4-8.33v18.21zM353 613.98v-18.21l8.4 8.4 2.1-2.17-12-12-12 12 2.1 2.1 8.4-8.33v18.21z"
  }), React.createElement("circle", {
    cx: 789,
    cy: 293,
    r: 6,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 224,
    cy: 277,
    r: 6,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 401,
    cy: 429,
    r: 6,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 925,
    cy: 531,
    r: 3,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 700,
    cy: 614,
    r: 3,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 315,
    cy: 684,
    r: 3,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 96,
    cy: 441,
    r: 3,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 125,
    cy: 377,
    r: 3,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 770,
    cy: 713,
    r: 3,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 215,
    cy: 609,
    r: 3,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 284,
    cy: 334,
    r: 3,
    fill: "#fff"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M386.5 227.5H371V212h-2v15.5h-15.5v2H369V245h2v-15.5h15.5v-2zM764 513.89h-9.39v-9.39h-1.22v9.39H744v1.22h9.39v9.39h1.22v-9.39H764v-1.22zM707 688.89h-9.39v-9.39h-1.22v9.39H687v1.22h9.39v9.39h1.22v-9.39H707v-1.22zM240 666.89h-9.39v-9.39h-1.22v9.39H220v1.22h9.39v9.39h1.22v-9.39H240v-1.22zM174 490.89h-9.39v-9.39h-1.22v9.39H154v1.22h9.39v9.39h1.22v-9.39H174v-1.22z"
  }), React.createElement("path", {
    fill: "#3f3d56",
    d: "M453.46 669.68l.07-5.63-3.38-.04-.07 5.63-5.83 16.84 14.64.17-5.43-16.97z"
  }), React.createElement("path", {
    fill: "#3f3d56",
    d: "M468.15 670l.07-5.77-3.47-.05-.07 5.78-5.98 17.27 15.02.17-5.57-17.4z"
  }), React.createElement("path", {
    fill: "#3f3d56",
    d: "M482.75 670.03l.07-5.63-3.38-.04-.07 5.63-5.83 16.84 14.65.17-5.44-16.97zM587.17 671.42l.07-5.78-3.47-.04-.07 5.78-5.98 17.26 15.02.18-5.57-17.4zM602.19 671.6l.07-5.78-3.47-.04-.07 5.78-5.98 17.26 15.02.18-5.57-17.4zM617.21 671.78l.07-5.78-3.47-.04-.07 5.78-5.98 17.26 15.02.18-5.57-17.4zM518.99 670.61l.07-5.78-3.47-.04-.07 5.78-5.98 17.26 15.02.18-5.57-17.4zM534.01 670.79l.07-5.78-3.46-.04-.07 5.78-5.99 17.26 15.02.18-5.57-17.4zM549.03 670.97l.07-5.78-3.46-.04-.07 5.78-5.99 17.26 15.03.18-5.58-17.4z"
  }), React.createElement("path", {
    d: "M508.76 266.58c-.21-19.9-23.65-55.18-36.3-55.33s-35.78 34.57-36.46 54.46h-.6l-4.77 399.81 73.38.87 4.77-399.8zM642.8 268.18c-.21-19.9-23.65-55.18-36.3-55.33s-35.78 34.57-36.45 54.46h-.6l-4.77 399.81 73.38.87 4.77-399.8z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M576.86 80.92C576.75 51.75 553.5.15 540.86 0s-36 50.89-36.77 80h-.59l-7 586.24 73.37.88 7-586.25z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M509.13 395.43l27.88-27.88 28.14 27.88h-19.12v21.31h-17.77v-21.18l-19.13-.13z"
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M574.87 274.92c7.59-17.71 22.41-36.18 31.63-36.07 12 .14 33.62 31.79 36.07 52l.26-21.71c-.21-19.9-23.65-55.18-36.3-55.33-9.1-.11-23.64 17.88-31.32 35.38zM435.41 291.7h.6c.67-19.89 23.81-54.61 36.45-54.46 8.26.1 21.11 15.17 29.1 31.16l1.94-162.36h.59c.78-29.16 24.13-80.2 36.77-80 11.94.14 33.36 46.21 35.78 75.9l.23-20c-.11-29.17-23.36-80.77-36-80.92s-36 50.89-36.77 80.05h-.59l-1.94 162.36c-8-16-20.84-31.06-29.1-31.16-12.64-.15-35.78 34.57-36.45 54.46h-.6l-4.77 399.81h.3z"
  })), React.createElement("rect", {
    x: 600.73,
    y: 88.44,
    width: 13.87,
    height: 30.05,
    rx: 6.93,
    transform: "rotate(.68 5887.073 -5572.534)",
    fill: "#ececf3"
  }));
};

UndrawUpgrade.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawUpgrade;