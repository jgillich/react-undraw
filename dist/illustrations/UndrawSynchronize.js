function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawSynchronize = function UndrawSynchronize(_props) {
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
    viewBox: "0 0 874.169 657",
    style: style
  }, props), React.createElement("path", {
    fill: "#f2f2f2",
    d: "M169 26.672h352V321.92H169z"
  }), React.createElement("path", {
    d: "M612.5 509s8 29 8 33 13 3 13 3l10-16s-8-16-10-24-21 4-21 4z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M627.5 536s12 3 12-6 5-5 5-5 12 7 7 14-14 15-17 22-12 26-22 22-3-13-3-13 8-12 6-22-3-15 0-15 8-3 8 1 4 2 4 2z",
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 627,
    cy: 126.5,
    r: 38,
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 623,
    cy: 94.5,
    r: 34,
    fill: "#2f2e41"
  }), React.createElement("path", {
    fill: "#3f3d56",
    d: "M605 295.5l-20-2-8.165-19.972L578 255.5h27v40z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M605 295.5l-20-2-8.165-19.972L578 255.5h27v40z"
  }), React.createElement("path", {
    d: "M606.5 152s-1 25-5 28 6 15 6 15l16-4 12-11-5-1s0-14 3-18-27-9-27-9z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M606.5 152s-1 25-5 28 6 15 6 15l16-4 12-11-5-1s0-14 3-18-27-9-27-9z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M578.5 250s10 26 8 48 45 3 45 3l14-9s4-27 0-33-12-27-12-27l-21-3zM746.642 364.791s17.052-18.849 19.904-20.662-3.753-10.629-3.753-10.629l-15.94.121s-7.784 12.957-12.582 18.009 12.37 13.161 12.37 13.161z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M759.095 341.858s-3.3-9.917-9.717-5.838-5.831-1.299-5.831-1.299-.448-11.729 6.81-11.336 17.04 3.184 23.392 2.15 23.978-3.228 25.659 5.716-7.91 8.031-7.91 8.031-12.183-.265-18.407 5.693-9.336 8.938-10.696 6.799-5.765-4.345-2.913-6.158-.387-3.758-.387-3.758z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M595.5 170s-12-7-15-27-24-90-24-90-14-48-19-32 6 34 6 34l14 65s12 84 18 88 20-38 20-38zM644.196 173.884s13.891-.15 26.388-16.052 65.36-66.362 65.36-66.362 35.902-34.8 32.338-18.42-22.027 26.586-22.027 26.586l-44.307 49.576s-51.964 67.081-59.157 67.591 1.405-42.919 1.405-42.919z",
    fill: "#fbbebe"
  }), React.createElement("circle", {
    cx: 623.5,
    cy: 143,
    r: 25,
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M647.278 276.264S612.5 301 599.5 297s-15-7-15-7-12 82-3 114c0 0 1 32 10 44l21 69s23-1 23-9c0 0-3-17-3-29s-16-42-16-42l11-84s42 84 59 78 65-69 65-69l-15-14s-42 25-47 38c0 0-33.444-102.472-42.222-109.736z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M620.5 183s13-10 15-10h13s10 24 6 34c0 0-5 26-6 28s0 8 2 14 8 19 5 22-6 11-8 11-18-15-21-25-3-13-10-9-38 2-36 18a226.277 226.277 0 0 0 4 24s-12 4-14-15-4-20 2-27-2-36-2-36 10-17 12-26 10-18 10-18 5-3 8-1 4.605 1 4.605 1-5.605 14 .395 14 15 1 15 1z",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 605.5,
    cy: 288.5,
    rx: 1.5,
    ry: 3,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 626,
    cy: 120.5,
    rx: 30,
    ry: 19,
    fill: "#2f2e41"
  }), React.createElement("ellipse", {
    cx: 113,
    cy: 192.5,
    rx: 42,
    ry: 57,
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M123.53 228.598S140.5 212 142.5 206s26-108 26-108 20-57 29-43-15 47-15 47-6 63-10 78-18 71-27 77l-9 18-10 2-9-25 1-10zM173.5 494s24 7 27 3 14 20 14 20v9l-10 2s-30-13-35-13 4-21 4-21z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M204.5 509s-14-12-11-14 15-16 21-8 33 52 26 62-12 4-12 4-18.598-25-25.8-25c0 0 9.8-11 1.8-19z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M104.5 584s1 33-8 43 12 8 12 8l22-15s-6-16-4-31z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M130.5 612s-2-2-7 4-15 13-21 7-6-1-6-1-13 21-24 24-3 13 7 9 59-21 59-21-1-14-8-22z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M57.5 346l-15 23s-37 29-18 32 30-27 30-27l13-16z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M52.5 342s17 25 25 27 5-19 5-19z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M52.5 342s17 25 25 27 5-19 5-19z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M74.5 340l3 52s-11 77 6 95c0 0 10 27 10 37s7 70 7 70h29s6-83-10-109V343z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M74.007 443.051c.142 18.341 2.337 36.372 9.493 43.949 0 0 10 27 10 37s7 70 7 70h29s6-83-10-109v-37.13",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M105.5 352l-30 79s-18 68 4 75 79 5 88 12 14-21 11-24-51-19-71-19c0 0 53-72 40-88s-31-36-42-35z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M98.5 200s1 27-4 28a76.88 76.88 0 0 0-12 4v15l8 5 20-12 8-7 8-7s-5-14 0-23z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M98.5 200s1 27-4 28a76.88 76.88 0 0 0-12 4v15l8 5 20-12 8-7 8-7s-5-14 0-23z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M94.5 243s17-16 21-15 15.5-6.5 15.5-6.5a128.935 128.935 0 0 0-4.5 23.5c-.542 6.5.677 10.066 1.908 11.97a31.528 31.528 0 0 1 3.451 6.881c1.655 4.838 4.721 10.682 8.641 4.149 0 0-2 11-4 43s9 54 9 54 9 24 5 29c0 0-31-20-29-29 0 0-72-10-72-23a22.828 22.828 0 0 1 10-19 84.025 84.025 0 0 1 4-18s-11-23-1-42c0 0-9-26 3-32s27-3 27-3-14 9-5 14z",
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 113.5,
    cy: 187,
    r: 25,
    fill: "#a0616a"
  }), React.createElement("ellipse", {
    cx: 115.5,
    cy: 172,
    rx: 27.5,
    ry: 14.5,
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 83,
    cy: 145.5,
    r: 8,
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 143,
    cy: 145.5,
    r: 8,
    fill: "#2f2e41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M0 656.5h851.223M191 .5h352v295.248H191z"
  }), React.createElement("path", {
    d: "M367 97.764V78.879l-24.73 25.18 24.73 25.18v-18.885c20.401 0 37.095 16.996 37.095 37.77a38.034 38.034 0 0 1-4.329 17.625l8.966 9.129a49.996 49.996 0 0 0 7.729-26.754c0-27.698-22.258-50.36-49.461-50.36zm0 88.13c-20.403 0-37.095-16.998-37.095-37.77a38.066 38.066 0 0 1 4.327-17.627l-8.964-9.127a49.182 49.182 0 0 0-7.729 26.754c0 27.697 22.258 50.36 49.461 50.36v18.885l24.73-25.18L367 167.01z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M806.64 532.313a20.813 20.813 0 1 0 2.773-39.915l.52 10.712-5.068-9.18a20.734 20.734 0 0 0-10.683 11.722 20.409 20.409 0 0 0-1.197 5.63 20.809 20.809 0 0 0 13.656 21.031z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M831.718 656.557c-1.789-9.11 5.964-17.187 13.621-22.437s16.605-10.408 19.218-19.317c3.755-12.804-7.43-24.53-16.136-34.642a125.3 125.3 0 0 1-16.523-24.557c-1.811-3.532-3.476-7.225-3.953-11.166-.686-5.676 1.137-11.323 2.974-16.737q9.18-27.052 19.629-53.65",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M807.498 529.555a20.813 20.813 0 1 0 2.772-39.915l.52 10.712-5.068-9.18a20.734 20.734 0 0 0-10.683 11.722 20.409 20.409 0 0 0-1.197 5.63 20.809 20.809 0 0 0 13.656 21.031z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M829.174 470.352a20.788 20.788 0 0 1 14.98-13.198l1.714 10.184 3.177-10.696a20.81 20.81 0 1 1-19.87 13.71z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M830.317 466.674a20.788 20.788 0 0 1 14.98-13.197l1.714 10.184 3.177-10.696a20.81 20.81 0 1 1-19.87 13.71z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M844.768 580.368a20.81 20.81 0 0 0 18.419-37.023l-2.441 8.22-1.731-10.304a.363.363 0 0 0-.053-.02 20.811 20.811 0 1 0-14.194 39.127z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M845.758 576.643a20.81 20.81 0 0 0 18.42-37.023l-2.442 8.22-1.731-10.304a.363.363 0 0 0-.053-.02 20.811 20.811 0 1 0-14.194 39.127z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M823.1 614.93a20.801 20.801 0 1 0 4.012-16.297l9.272 13.957-12.67-7.408a20.616 20.616 0 0 0-.613 9.748z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M823.958 612.173a20.801 20.801 0 1 0 4.01-16.298l9.273 13.957-12.67-7.408a20.616 20.616 0 0 0-.613 9.749z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }));
};

UndrawSynchronize.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSynchronize;