function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawYacht = function UndrawYacht(_props) {
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
    viewBox: "0 0 882.39 796.86",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 629.98,
    y1: 312.89,
    x2: 629.98,
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
  }))), React.createElement("circle", {
    cx: 629.98,
    cy: 156.45,
    r: 156.45,
    fill: "url(#prefix__a)"
  }), React.createElement("circle", {
    cx: 629.98,
    cy: 156.45,
    r: 146.79,
    fill: "#ff5252"
  }), React.createElement("path", {
    d: "M532.4 197h-200a16.06 16.06 0 0 1-16.06-16.06V84.06A16.06 16.06 0 0 1 332.4 68h127.91a16.07 16.07 0 0 1 12.88 6.43l72.09 96.88A16.06 16.06 0 0 1 532.4 197z",
    fill: "#464353"
  }), React.createElement("rect", {
    x: 248.39,
    y: 164,
    width: 367,
    height: 136,
    rx: 16.06,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 159.39,
    y: 240,
    width: 545,
    height: 182,
    rx: 16.06,
    fill: "#464353"
  }), React.createElement("rect", {
    y: 716.55,
    width: 748.43,
    height: 10.71,
    rx: 5,
    fill: primaryColor
  }), React.createElement("rect", {
    y: 736.9,
    width: 277.32,
    height: 10.71,
    rx: 5,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 213.07,
    y: 761.52,
    width: 277.32,
    height: 10.71,
    rx: 5,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 444.35,
    y: 786.15,
    width: 277.32,
    height: 10.71,
    rx: 5,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 777.34,
    y: 716.55,
    width: 49.25,
    height: 10.71,
    rx: 5,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 495.74,
    y: 736.9,
    width: 49.25,
    height: 10.71,
    rx: 5,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 70.67,
    y: 761.52,
    width: 49.25,
    height: 10.71,
    rx: 5,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 546.07,
    y: 761.52,
    width: 49.25,
    height: 10.71,
    rx: 5,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 39.62,
    y: 786.15,
    width: 277.32,
    height: 10.71,
    rx: 5,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M882.38 375H88.45a16.07 16.07 0 0 0-16.07 16.06V437h804.38a343.29 343.29 0 0 0 5.62-62z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M876.76 437H72.38v228h649.33c79.78-49.99 137.48-131.98 155.05-228z",
    fill: "#464353"
  }), React.createElement("path", {
    d: "M72.38 665v35.94A16.07 16.07 0 0 0 88.45 717h451.93a340.32 340.32 0 0 0 181.33-52z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#fff",
    d: "M548.89 183.5h66.5v30h-66.5z"
  }), React.createElement("g", {
    opacity: 0.5,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M250.89 279.5h84v67h-84zM389.89 279.5h84v67h-84zM528.89 279.5h84v67h-84z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: primaryColor
  }, React.createElement("circle", {
    cx: 765.89,
    cy: 451.5,
    r: 9
  }), React.createElement("circle", {
    cx: 792.89,
    cy: 451.5,
    r: 9
  }), React.createElement("circle", {
    cx: 819.89,
    cy: 451.5,
    r: 9
  })), React.createElement("path", {
    fill: "#fff",
    d: "M316.39 88.5h68.5v9h-68.5zM316.39 103.5h68.5v9h-68.5z"
  }));
};

UndrawYacht.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawYacht;