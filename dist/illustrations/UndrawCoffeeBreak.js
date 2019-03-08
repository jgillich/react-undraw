function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawCoffeeBreak = function UndrawCoffeeBreak(_props) {
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
    viewBox: "0 0 995.001 836.749",
    style: style
  }, props), React.createElement("path", {
    d: "M711.33 91.377c-84.986-.39-161.368 36.692-213.83 95.77-52.461-59.078-128.843-96.16-213.828-95.77C124.086 92.111-3.1 223.487.058 384.163 3.119 539.997 129.52 665.374 285 665.374q9.048 0 17.96-.56a3110.914 3110.914 0 0 1 389.08 0q8.908.558 17.96.56c155.48 0 281.881-125.377 284.943-281.21C998.1 223.487 870.915 92.11 711.33 91.376z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M657.381 7.457a22.982 22.982 0 0 0-19.81 13.851c-4.953 11.974 1.425 26.04 11 34.77s21.873 13.723 33.048 20.283c15.01 8.811 28.497 21.043 36.007 36.744s8.309 35.15-.52 50.15c-8.193 13.922-23.092 22.255-37.301 29.94",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("ellipse", {
    cx: 670.001,
    cy: 8.5,
    rx: 17.5,
    ry: 8.5,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 684.001,
    cy: 64.5,
    rx: 17.5,
    ry: 8.5,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 652.001,
    cy: 73.5,
    rx: 17.5,
    ry: 8.5,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 702.001,
    cy: 120.5,
    rx: 17.5,
    ry: 8.5,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 737.001,
    cy: 120.5,
    rx: 17.5,
    ry: 8.5,
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M749.861 286.247a22.982 22.982 0 0 0-23.901 3.605c-9.759 8.525-10.296 23.96-5.599 36.036s13.497 22.014 20.593 32.856c9.53 14.564 16.177 31.515 15.927 48.918s-8.177 35.18-22.751 44.695c-13.528 8.831-30.577 9.675-46.722 10.244",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("ellipse", {
    cx: 863.202,
    cy: 324.415,
    rx: 8.5,
    ry: 17.5,
    transform: "rotate(-63.615 786.457 391.235)",
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 850.858,
    cy: 380.803,
    rx: 8.5,
    ry: 17.5,
    transform: "rotate(-63.615 774.112 447.623)",
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 818.191,
    cy: 374.645,
    rx: 8.5,
    ry: 17.5,
    transform: "rotate(-63.615 741.446 441.464)",
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 842.096,
    cy: 438.969,
    rx: 8.5,
    ry: 17.5,
    transform: "rotate(-63.615 765.351 505.788)",
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 873.451,
    cy: 454.522,
    rx: 8.5,
    ry: 17.5,
    transform: "rotate(-63.615 796.705 521.342)",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M298.004 366.41a22.982 22.982 0 0 1 23.543-5.479c12.217 4.318 18.416 18.463 18.512 31.42s-4.412 25.442-7.001 38.139c-3.478 17.054-3.394 35.261 3.266 51.341s20.593 29.674 37.65 33.132c15.833 3.21 31.989-2.303 47.202-7.736",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("ellipse", {
    cx: 392.844,
    cy: 408.118,
    rx: 17.5,
    ry: 8.5,
    transform: "rotate(-48.06 306.128 507.253)",
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 425.143,
    cy: 455.96,
    rx: 17.5,
    ry: 8.5,
    transform: "rotate(-48.06 338.426 555.095)",
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 453.225,
    cy: 438.172,
    rx: 17.5,
    ry: 8.5,
    transform: "rotate(-48.06 366.508 537.307)",
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 454.767,
    cy: 506.777,
    rx: 17.5,
    ry: 8.5,
    transform: "rotate(-48.06 368.051 605.912)",
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 431.375,
    cy: 532.812,
    rx: 17.5,
    ry: 8.5,
    transform: "rotate(-48.06 344.659 631.946)",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M700.48 250.96l-2.75 20.17-17 124.46-27.84 203.82-6.97 51.03a16.255 16.255 0 0 1-16.11 14.06H444.16a16.26 16.26 0 0 1-16.11-14.02l-7.09-51.07-28.31-203.82-17.3-124.55-2.78-20.04a16.255 16.255 0 0 1 16.1-18.5h295.7a16.266 16.266 0 0 1 16.11 18.46z",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 392.001,
    y: 178.5,
    width: 290,
    height: 54,
    rx: 16.26,
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M682 204.02v12.22a16.26 16.26 0 0 1-16.26 16.26H408.26A16.26 16.26 0 0 1 392 216.24v-12.19a1527 1527 0 0 0 290-.03z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 459.501,
    cy: 343,
    r: 44,
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 615.501,
    cy: 343,
    r: 44,
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 457.501,
    cy: 343,
    r: 12,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 475.501,
    cy: 320,
    r: 5,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 615.501,
    cy: 343,
    r: 12,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 633.501,
    cy: 320,
    r: 5,
    fill: "#fff"
  }), React.createElement("path", {
    d: "M699.556 243h.002l-.015-.036a16.257 16.257 0 0 0-1.642-3.186l-.001-.003a16.33 16.33 0 0 0-.618-.86c-.072-.094-.145-.186-.219-.279a16.372 16.372 0 0 0-2.072-2.16 16.303 16.303 0 0 0-1.11-.889 16.226 16.226 0 0 0-.783-.529c-.209-.134-.419-.265-.635-.39q-.5-.289-1.022-.544c-.166-.08-.334-.155-.503-.23q-.498-.221-1.015-.408c-.139-.05-.274-.106-.415-.153q-.715-.238-1.459-.41c-.121-.029-.245-.049-.368-.074q-.608-.126-1.234-.206a16.42 16.42 0 0 0-2.076-.143h-295.7a16.304 16.304 0 0 0-16.101 18.496l.47 3.38 2.31 16.664h.003l17.3 124.55h-.002l22.708 163.49 12.694 91.398a16.26 16.26 0 0 0 16.105 14.022h8.81a16.24 16.24 0 0 1-.915-3.522l-8.551-61.568h209.389l27.84-203.82H415.194l-17.022-122.556a1718.367 1718.367 0 0 0 299.559-1.904l2.75-20.17a16.137 16.137 0 0 0-.925-7.96z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M723.742 259.5a1720.993 1720.993 0 0 1-373.482 0A16.259 16.259 0 0 1 334 243.241v-21.482a16.259 16.259 0 0 1 16.26-16.259 1530.25 1530.25 0 0 0 373.482 0A16.259 16.259 0 0 1 740 221.759v21.482a16.259 16.259 0 0 1-16.26 16.259zM660.535 592H410.55a9.428 9.428 0 0 1-9.311-7.95l-27.007-170.144a9.428 9.428 0 0 1 9.31-10.906h305.8a9.428 9.428 0 0 1 9.296 11.002L669.83 584.146a9.428 9.428 0 0 1-9.295 7.854z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M632.09 470.72a6.662 6.662 0 0 1 3.653 11.12C619.882 498.749 581.424 534 536.5 534s-83.381-35.252-99.242-52.159a6.662 6.662 0 0 1 3.653-11.12 528.227 528.227 0 0 1 191.177 0z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M586.499 481.264a6.663 6.663 0 0 1 3.621 11.332c-10.74 10.472-30.732 26.264-53.62 26.264s-42.878-15.792-53.619-26.264a6.663 6.663 0 0 1 3.622-11.332 305.156 305.156 0 0 1 99.996 0z",
    fill: "#fff"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M126.501 665h691"
  }), React.createElement("path", {
    d: "M183.653 572.445v28.13l14.445 16.727s6.082-2.281 6.082-17.487l2.281-22.048z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M198.098 600.575s-23.569-15.966-24.33-21.288-34.212-29.651-28.89-14.445 22.048 22.048 22.048 22.048 12.925 34.973 24.33 34.213 11.404-15.206 6.842-20.528z",
    fill: "#a0616a"
  }), React.createElement("path", {
    fill: "#3f3d56",
    d: "M211.783 771.64l2.281 13.685-12.165-3.041V771.64h9.884z"
  }), React.createElement("path", {
    d: "M209.502 779.243s-14.06-8.33-14.632-4.545-6.656 18.23-9.697 19.75-6.842 18.248 0 17.487c5.3-.588 24.738-10.755 33.234-15.31a4.643 4.643 0 0 0 1.997-6.067 9.579 9.579 0 0 1-1.018-2.952c0-1.52-9.884-8.363-9.884-8.363z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M216.345 624.905s-55.501 25.85-50.179 45.617 25.09 103.4 25.09 103.4 22.048 5.321 23.568 0-14.445-88.194-12.924-91.236 29.65-22.808 29.65-22.808l57.783-24.33-24.33-22.808z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    fill: "#3f3d56",
    d: "M174.529 776.202l-6.843 17.487 12.165 5.322 7.603-13.686-12.925-9.123z"
  }), React.createElement("path", {
    d: "M215.585 500.217s6.842 9.124 1.52 13.685-1.52 21.289-1.52 21.289l6.842 19.007 27.37-5.322v-31.172l-1.52-15.206s-13.685-12.925-15.206-22.809-17.486 20.528-17.486 20.528z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M215.585 500.217s6.842 9.124 1.52 13.685-1.52 21.289-1.52 21.289l6.842 19.007 27.37-5.322v-31.172l-1.52-15.206s-13.685-12.925-15.206-22.809-17.486 20.528-17.486 20.528z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M261.202 618.822s-35.734 39.535-35.734 41.056-19.007 32.692-19.007 32.692l-37.254 82.872s14.446 19.767 20.528 18.247 49.419-89.714 49.419-89.714 7.603-19.768 28.13-24.33 36.494-20.527 28.891-38.774-34.973-22.049-34.973-22.049z",
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 215.585,
    cy: 481.21,
    r: 24.329,
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M216.345 520.745s3.041 17.487 6.082 19.007 5.322 6.843 12.165-.76 12.925-22.809 12.925-22.809l23.569 28.891 2.28 79.83s-26.61-6.842-34.973 0-26.61 6.083-26.61 6.083l3.802-15.206-3.041-25.85.76-23.569.76-16.726z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M219.023 507.948s-10.28 5.194-11.041 8.235-14.446 9.124-14.446 9.124-5.322 5.322-5.322 8.363 18.247 38.014 18.247 38.014 3.802 23.57 2.281 28.131 3.041 22.048 3.041 22.048l-9.123 10.644h8.363s9.123-4.561 9.123-6.842-1.52-18.247-2.28-25.09-.76-31.172.76-39.535.76-30.411.76-35.733-.363-17.36-.363-17.36zM242.575 496.403s3.421.773 13.305 3.814 25.09 7.603 30.411 13.685a94.247 94.247 0 0 1 9.884 14.446l-3.041 54.74s6.082 11.405 5.322 17.487-6.843 6.843-2.28 19.768 13.684 24.33 5.321 25.85-30.411-3.802-40.295-.76-21.288-11.405-21.288-11.405 15.206 1.52 12.925-4.562-27.37-74.508-22.049-89.714 11.785-43.349 11.785-43.349z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M192.016 529.868l-3.802 3.042s-10.644 38.014-7.603 41.816 27.37 12.164 28.891 6.842-17.486-51.7-17.486-51.7z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M304.538 556.479s11.405 32.692 11.405 41.815-1.52 62.344-1.52 62.344-.761 22.809-16.727 13.685 0-15.205 0-15.205-.76-60.063-6.843-68.426-8.363-20.528-8.363-20.528z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M179.851 792.928s-11.404-6.082-13.685-1.52-14.446 29.651-12.925 32.692 9.884 15.206 19.768 12.165 10.644-19.007 10.644-19.007l.76-18.247zM210.82 475.333c1.677.79 3.665 1.26 4.718 2.784.78 1.13.858 2.597 1.427 3.845a5.437 5.437 0 0 0 6.995 2.559 6.032 6.032 0 0 1 2.46-3.736 3.583 3.583 0 0 1 4.254.233c1.567 1.494 1.012 4.1 1.744 6.137a12.953 12.953 0 0 0 2.786 3.82c1.664 1.92 2.99 4.173 4.994 5.735s5.043 2.239 7.033.66c1.675-1.327 2.022-3.776 1.615-5.874s-1.415-4.029-1.983-6.088c-1.848-6.692 1.098-13.836.186-20.718-1.167-8.819-8.663-15.784-17.029-18.807a19.922 19.922 0 0 0-10.994-1.165c-3.825.854-7.094 3.29-10.758 4.683-3.919 1.49-8.18 1.75-12.28 2.621s-8.321 2.555-10.7 6.006c-1.66 2.407-2.23 5.397-3.606 7.977a14.311 14.311 0 0 1-7.25 6.494l4.336-.247a12.777 12.777 0 0 1-3.454 5.041 9.27 9.27 0 0 0 6-.793 6.523 6.523 0 0 1-2.237 4.676c3.336-.1 6.854-.254 9.672-2.04 1.38-.876 2.506-2.095 3.806-3.087 2.769-2.115 6.204-3.118 9.554-4.08 1.758-.504 3.875-1.206 5.465-.075 1.325.942 1.534 2.633 3.247 3.44z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M284.77 519.224l11.405 9.124 15.206 34.973s-21.288 16.727-26.61 14.446-14.446-42.576-14.446-42.576z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M171.41 554.546l-.19 1.398-1.178 8.623-1.929 14.122-.483 3.536a1.126 1.126 0 0 1-1.116.974h-12.863a1.127 1.127 0 0 1-1.116-.971l-.492-3.539-1.961-14.122-1.199-8.63-.192-1.388a1.126 1.126 0 0 1 1.115-1.282h20.488a1.127 1.127 0 0 1 1.117 1.28z",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 150.037,
    y: 549.526,
    width: 20.093,
    height: 3.742,
    rx: 1.127,
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M173.022 555.138a119.242 119.242 0 0 1-25.877 0 1.127 1.127 0 0 1-1.127-1.127v-1.488a1.127 1.127 0 0 1 1.127-1.127 106.027 106.027 0 0 0 25.877 0 1.127 1.127 0 0 1 1.127 1.127v1.488a1.127 1.127 0 0 1-1.127 1.127zM168.643 578.176h-17.32a.653.653 0 0 1-.646-.551l-1.871-11.789a.653.653 0 0 1 .645-.755h21.188a.653.653 0 0 1 .644.762l-1.996 11.789a.653.653 0 0 1-.644.544z",
    fill: "#2f2e41"
  }));
};

UndrawCoffeeBreak.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawCoffeeBreak;