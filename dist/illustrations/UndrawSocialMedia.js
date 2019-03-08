function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawSocialMedia = function UndrawSocialMedia(_props) {
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
    viewBox: "0 0 946 662.82",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 234.56,
    y1: 283.2,
    x2: 234.56,
    y2: 231.17,
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
    x1: 421,
    y1: 184.6,
    x2: 421,
    y2: 143.59,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 779.75,
    y1: 193.65,
    x2: 779.75,
    y2: 135.98,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 955.09,
    y1: 258.09,
    x2: 955.09,
    y2: 208.09,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 566,
    y1: 144.09,
    x2: 614,
    y2: 144.09,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 473,
    y1: 662.82,
    x2: 473,
    y2: 623.18,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 480.94,
    y1: 627,
    x2: 480.94,
    y2: 607.6,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 608.04,
    y1: 637.16,
    x2: 608.04,
    y2: 273.59,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 275.92,
    y1: 743.91,
    x2: 275.92,
    y2: 646.42,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 235.47,
    y1: 719.27,
    x2: 235.47,
    y2: 656.06,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M229.44 244.77l2.81 4.13 6.62-4.5 4.23 8-5.79 3.94L251.36 277l-9.1 6.18-14.06-20.67-4.13 2.81-5.07-7.42 4.13-2.81-2.79-4.09s-6.09-7.35.43-13.59l9.1-6.18 4.5 6.62-4.13 2.81a3 3 0 0 0-.8 4.11z",
    transform: "translate(-127 -118.59)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M104.44 123.18l2.81 4.13 6.62-4.5 4.23 8-5.79 3.94 14.05 20.66-9.1 6.18-14.06-20.67-4.13 2.81-5.07-7.42 4.13-2.81-2.79-4.09s-6.09-7.35.43-13.59l9.1-6.18 4.5 6.62-4.13 2.81a3 3 0 0 0-.8 4.11z",
    fill: "#3b5998"
  }), React.createElement("path", {
    d: "M441 150.59l5-1s-4.2 4.7-5 5a20.12 20.12 0 0 0 0 3c-9.6 41.2-45 23-45 23 12.9.3 14-5 14-5-7.5-1.1-9-6-9-6a3.09 3.09 0 0 0 4-1c-8.1-2.1-7-10-7-10a10.4 10.4 0 0 0 4.9 1.9c-.9-1.1-8.5-10.2-3.9-14.9 0 0 5.6 10 20.3 10.9l1-.2a7.85 7.85 0 0 1-.2-2.2 10.5 10.5 0 0 1 10.5-10.5c7 0 8.5 4 8.5 4l5-3c-.1 0-.6 5-3.1 6z",
    transform: "translate(-127 -118.59)",
    fill: "url(#prefix__b)"
  }), React.createElement("path", {
    d: "M316 29l5-1s-4.2 4.7-5 5a20.12 20.12 0 0 0 0 3c-9.6 41.2-45 23-45 23 12.9.3 14-5 14-5-7.5-1.1-9-6-9-6a3.09 3.09 0 0 0 4-1c-8.1-2.1-7-10-7-10a10.4 10.4 0 0 0 4.9 1.9c-.9-1.1-8.5-10.2-3.9-14.9 0 0 5.6 10 20.3 10.9l1-.2a7.85 7.85 0 0 1-.2-2.2A10.5 10.5 0 0 1 305.6 22c7 0 8.5 4 8.5 4l5-3c-.1 0-.6 5-3.1 6z",
    fill: "#00aced"
  }), React.createElement("path", {
    d: "M790.83 190.85l5.48-18.85s.09-4.24-3.71-5.14-5.22-.69-7.53.83l-5.76 19.78-9.6-2.8 8.67-29.76 9.6 2.8-1.29 4.42s5-5.22 11.25-2.87c5.84 2.12 9.19 7.05 7.89 15.11l.19.06-5.6 19.2zM768 147.74a6 6 0 1 1 7.44-4.08 6 6 0 0 1-7.44 4.08zm-5 35l-9.6-2.8 8.67-29.76 9.6 2.8z",
    transform: "translate(-127 -118.59)",
    fill: "url(#prefix__c)"
  }), React.createElement("path", {
    d: "M665.83 69.26l5.48-18.85s.09-4.24-3.71-5.14-5.22-.69-7.53.83l-5.76 19.78-9.6-2.8 8.67-29.76 9.6 2.8-1.29 4.42s5-5.22 11.25-2.87c5.84 2.12 9.19 7.05 7.89 15.11l.19.06-5.6 19.2zM643 26.15a6 6 0 1 1 7.44-4.08 6 6 0 0 1-7.44 4.08zm-5 35l-9.6-2.8 8.67-29.76 9.6 2.8z",
    fill: "#0077b5"
  }), React.createElement("path", {
    d: "M974 228.09c-1.1 5.3-1.9 12.5-13 15 0 0-6.5 1.7-8.6-3-1.3 5.1-2.6 9.8-3.4 11a62.41 62.41 0 0 1-5 7s.9-9 1-11c.1-3.1 3-17 3-17s-2.7-9.8 4-11c0 0 5.5-1.3 4 6 0 0-1.1 4.8-2.5 10.3l.5.7a5.62 5.62 0 0 0 4 3c2.7.3 9.8-4.5 10-13s-1.6-10.9-9-13-13.7 1.5-16 8c-2.6 7.4-.5 9.2 1 11l-1 5s-7.2-2.4-7-10 4.5-19 20-19 19.1 14.6 18 20z",
    transform: "translate(-127 -118.59)",
    fill: "url(#prefix__d)"
  }), React.createElement("path", {
    d: "M849 106.5c-1.1 5.3-1.9 12.5-13 15 0 0-6.5 1.7-8.6-3-1.3 5.1-2.6 9.8-3.4 11a62.41 62.41 0 0 1-5 7s.9-9 1-11c.1-3.1 3-17 3-17s-2.7-9.8 4-11c0 0 5.5-1.3 4 6 0 0-1.1 4.8-2.5 10.3l.5.7a5.62 5.62 0 0 0 4 3c2.7.3 9.8-4.5 10-13s-1.6-10.9-9-13-13.7 1.5-16 8c-2.6 7.4-.5 9.2 1 11l-1 5s-7.2-2.4-7-10 4.5-19 20-19 19.1 14.6 18 20z",
    fill: "#bd081c"
  }), React.createElement("path", {
    d: "M612.5 144.59H606v6.5a1.54 1.54 0 0 1-1.5 1.5h-1a1.54 1.54 0 0 1-1.5-1.5v-6.5h-6.5a1.54 1.54 0 0 1-1.5-1.5v-1a1.54 1.54 0 0 1 1.5-1.5h6.5v-6.5a1.54 1.54 0 0 1 1.5-1.5h1a1.54 1.54 0 0 1 1.5 1.5v6.5h6.5a1.54 1.54 0 0 1 1.5 1.5v1a1.54 1.54 0 0 1-1.5 1.5zM589.9 127a10 10 0 0 1 2.1 6.1 10.57 10.57 0 0 1-6.8 9.6c.3 1 1.3 2.1 3.8 3.9 4.8 3.5 5 10 5 10v.5c0 5.2-6.3 9.5-14 9.5s-14-4.3-14-9.5c0-5 5.7-9.1 13-9.5v-4.1c-5.6-.7-10-5.1-10-10.4 0-5.8 5.1-10.5 11.5-10.5h.5s11.5-.9 13-1 1 2 1 2zM573 156.59c0 3.3 3.4 6 7.5 6s7.5-2.7 7.5-6-3.4-6-7.5-6-7.5 2.7-7.5 6zm12.2-24.5c-.8-3.8-3.6-6.5-6.2-6s-4 4.1-3.2 7.9 3.6 6.5 6.2 6 4-3.99 3.2-7.9z",
    transform: "translate(-127 -118.59)",
    fill: "url(#prefix__e)"
  }), React.createElement("path", {
    d: "M487.5 23H481v6.5a1.54 1.54 0 0 1-1.5 1.5h-1a1.54 1.54 0 0 1-1.5-1.5V23h-6.5a1.54 1.54 0 0 1-1.5-1.5v-1a1.54 1.54 0 0 1 1.5-1.5h6.5v-6.5a1.54 1.54 0 0 1 1.5-1.5h1a1.54 1.54 0 0 1 1.5 1.5V19h6.5a1.54 1.54 0 0 1 1.5 1.5v1a1.54 1.54 0 0 1-1.5 1.5zM464.9 5.41a10 10 0 0 1 2.1 6.1 10.57 10.57 0 0 1-6.8 9.6c.3 1 1.3 2.1 3.8 3.9 4.8 3.5 5 10 5 10v.5c0 5.2-6.3 9.5-14 9.5s-14-4.3-14-9.5c0-5 5.7-9.1 13-9.5v-4.1c-5.6-.7-10-5.1-10-10.4 0-5.8 5.1-10.5 11.5-10.5h.5s11.5-.9 13-1 1 2 1 2zM448 35c0 3.3 3.4 6 7.5 6s7.5-2.7 7.5-6-3.4-6-7.5-6-7.5 2.7-7.5 6zm12.2-24.5c-.8-3.8-3.6-6.5-6.2-6s-4 4.1-3.2 7.9 3.6 6.5 6.2 6 4-3.99 3.2-7.9z",
    fill: "#d34836"
  }), React.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M0 623.18h946v39.64H0z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M3.21 623.18h938.5v33.21H3.21z"
  }), React.createElement("path", {
    d: "M549.74 485.15s13.61 91.83 93.88 122.45H318.45c80.27-30.61 93.88-122.45 93.88-122.45z",
    fill: "#e0e0e0"
  }), React.createElement("path", {
    fill: "url(#prefix__g)",
    d: "M316.82 607.6h328.23V627H316.82z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M318.45 607.6h325.16v14.97H318.45z"
  }), React.createElement("path", {
    d: "M872.44 273.59H343.63A10.72 10.72 0 0 0 333 284.42v311.3c0 22.89 18.16 41.44 40.56 41.44h468.92c22.4 0 40.56-18.55 40.56-41.44v-311.3a10.72 10.72 0 0 0-10.6-10.83z",
    transform: "translate(-127 -118.59)",
    fill: "url(#prefix__h)"
  }), React.createElement("path", {
    d: "M223.43 163.73h515.21a10.75 10.75 0 0 1 10.75 10.75v286.18H212.67V174.48a10.75 10.75 0 0 1 10.76-10.75z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M708.25 509.64H253.82a41.15 41.15 0 0 1-41.15-41.15v-7.83H749.4v7.83a41.15 41.15 0 0 1-41.15 41.15z",
    fill: "#f5f5f5"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M239.2 187.78h485.7v239.7H239.2z"
  }), React.createElement("path", {
    d: "M313.2 743.91h-74.57a4.5 4.5 0 0 1-4.5-4.5v-93h83.57v93a4.5 4.5 0 0 1-4.5 4.5z",
    transform: "translate(-127 -118.59)",
    fill: "url(#prefix__i)"
  }), React.createElement("path", {
    d: "M235.47 719.27c-13.73 0-24.91-14.18-24.91-31.6s11.17-31.6 24.91-31.6 24.91 14.18 24.91 31.6-11.17 31.6-24.91 31.6zm0-57.46c-10.68 0-19.37 11.6-19.37 25.86s8.69 25.86 19.37 25.86 19.37-11.6 19.37-25.86-8.68-25.86-19.37-25.86z",
    transform: "translate(-127 -118.59)",
    fill: "url(#prefix__j)"
  }), React.createElement("path", {
    d: "M109.28 598c-13.29 0-24.11-13.22-24.11-29.46s10.81-29.46 24.11-29.46 24.11 13.22 24.11 29.46S122.57 598 109.28 598zm0-53.57c-10.34 0-18.75 10.81-18.75 24.11s8.41 24.11 18.75 24.11S128 581.83 128 568.54s-8.38-24.13-18.72-24.13z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M109 528.9h79.85v88.71a4.5 4.5 0 0 1-4.5 4.5h-70.86a4.5 4.5 0 0 1-4.5-4.5V528.9h.01z",
    fill: primaryColor
  }));
};

UndrawSocialMedia.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSocialMedia;