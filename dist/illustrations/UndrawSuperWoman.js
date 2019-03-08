function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawSuperWoman = function UndrawSuperWoman(_props) {
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
    viewBox: "0 0 860.282 771.924",
    style: style
  }, props), React.createElement("ellipse", {
    cx: 449.783,
    cy: 728.924,
    rx: 283,
    ry: 43,
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M627.59 576.71a20.813 20.813 0 1 0 2.77-39.916l.522 10.712-5.068-9.18a20.734 20.734 0 0 0-10.684 11.722 20.409 20.409 0 0 0-1.197 5.63 20.809 20.809 0 0 0 13.656 21.031z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M652.667 700.953c-1.79-9.11 5.963-17.187 13.62-22.437s16.605-10.408 19.218-19.317c3.755-12.804-7.43-24.53-16.135-34.642A125.3 125.3 0 0 1 652.846 600c-1.811-3.532-3.476-7.225-3.952-11.166-.687-5.676 1.137-11.323 2.974-16.737q9.179-27.052 19.628-53.65",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M628.446 573.951a20.813 20.813 0 1 0 2.772-39.915l.52 10.712-5.067-9.18a20.734 20.734 0 0 0-10.684 11.722 20.409 20.409 0 0 0-1.197 5.63 20.809 20.809 0 0 0 13.656 21.031z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M650.123 514.748a20.788 20.788 0 0 1 14.98-13.198l1.713 10.184 3.177-10.696a20.81 20.81 0 1 1-19.87 13.71z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M651.266 511.07a20.788 20.788 0 0 1 14.98-13.197l1.713 10.184 3.177-10.696a20.81 20.81 0 1 1-19.87 13.71z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M665.716 624.764a20.81 20.81 0 0 0 18.42-37.023l-2.442 8.22-1.731-10.304a.363.363 0 0 0-.053-.02 20.811 20.811 0 1 0-14.194 39.127z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M666.706 621.04a20.81 20.81 0 0 0 18.42-37.024l-2.442 8.22-1.73-10.304a.363.363 0 0 0-.054-.02 20.811 20.811 0 1 0-14.194 39.127z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M644.05 659.326a20.801 20.801 0 1 0 4.01-16.297l9.273 13.957-12.67-7.408a20.616 20.616 0 0 0-.614 9.748z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M644.906 656.569a20.801 20.801 0 1 0 4.011-16.298l9.273 13.957-12.67-7.408a20.616 20.616 0 0 0-.614 9.749z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M586.758 113.838a58.487 58.487 0 0 1 58.406-55.43c1.778 0 3.533.092 5.27.247a77.707 77.707 0 0 1 134.327-.063c1.465-.11 2.94-.185 4.434-.185a58.487 58.487 0 0 1 58.406 55.43",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M598.94 109.339a58.487 58.487 0 0 1 58.406-55.43c1.777 0 3.532.092 5.27.247a77.707 77.707 0 0 1 134.326-.063c1.466-.11 2.941-.185 4.435-.185a58.487 58.487 0 0 1 58.406 55.43",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M161.758 391.838a58.487 58.487 0 0 1 58.406-55.43c1.778 0 3.533.092 5.27.247a77.707 77.707 0 0 1 134.327-.063c1.465-.11 2.94-.185 4.434-.185a58.487 58.487 0 0 1 58.406 55.43",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M173.94 387.339a58.487 58.487 0 0 1 58.406-55.43c1.777 0 3.532.092 5.27.247a77.707 77.707 0 0 1 134.326-.063c1.466-.11 2.941-.185 4.435-.185a58.487 58.487 0 0 1 58.406 55.43",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M37.758 98.838a58.487 58.487 0 0 1 58.406-55.43c1.778 0 3.533.092 5.27.247a77.707 77.707 0 0 1 134.327-.063c1.465-.11 2.94-.185 4.434-.185a58.487 58.487 0 0 1 58.406 55.43",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M49.94 94.339a58.487 58.487 0 0 1 58.406-55.43c1.777 0 3.532.092 5.27.247a77.707 77.707 0 0 1 134.326-.063c1.466-.11 2.941-.185 4.435-.185a58.487 58.487 0 0 1 58.406 55.43",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M295.052 217.473s105.12 52.198 123.97 44.948 25.373-71.772 25.373-71.772l-77.571-14.499z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M295.052 217.473s105.12 52.198 123.97 44.948 25.373-71.772 25.373-71.772l-77.571-14.499z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#ff6584",
    d: "M444.033 139.539h68.872v60.172h-68.872z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M444.033 139.539h68.872v60.172h-68.872z"
  }), React.createElement("path", {
    d: "M381.323 395.815s-2.9 63.072 16.675 61.622 0-59.448 0-59.448zM461.795 148.601s4.35 27.549-3.625 31.174-13.05 6.525-13.05 6.525l18.124 12.324 33.349 2.175 8.7-6.525 7.974-7.25s-13.05-2.9-13.05-9.424-.724-26.099-.724-26.099z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M461.795 148.601s4.35 27.549-3.625 31.174-13.05 6.525-13.05 6.525l18.124 12.324 33.349 2.175 8.7-6.525 7.974-7.25s-13.05-2.9-13.05-9.424-.724-26.099-.724-26.099z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M416.122 406.69s-21.024 67.42-21.024 116.719c0 0-34.799 78.296-33.349 116.72l-8.7 52.922 12.325 4.35 9.425-7.975s2.9-28.274 12.324-42.048 31.174-79.022 31.174-79.022 57.997-121.794 55.822-139.193-57.997-22.474-57.997-22.474zM544.44 391.465s13.775 6.525-5.8 122.519c0 0 10.875 76.846 1.45 118.894l-1.45 42.048h-15.223l-2.9-4.35s-.725-37.698-5.8-47.847-9.425-68.872-9.425-68.872-23.198-119.62-18.124-129.769 57.273-32.623 57.273-32.623z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M350.875 680.726s5.075 11.6 14.5 8.7 11.599-2.9 11.599-2.9-6.525 33.348-4.35 49.298-1.45 26.098-15.95 26.098S340 744.523 340 744.523l6.525-41.323zM517.617 662.602s5.075 10.15 13.05 7.975 10.874-5.8 10.874-5.8-.725 22.474 2.175 32.623 9.424 39.148-5.8 40.598a19.573 19.573 0 0 1-20.3-11.6v-63.796z",
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 481.369,
    cy: 135.552,
    r: 31.898,
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M540.09 192.824s-25.267-9.921-34.382-8.585a37.26 37.26 0 0 1-28.69 8.585c-17.398-2.175-24.202-10.525-24.202-10.525s-46.844 10.525-43.944 14.875 15.95 75.396 15.95 75.396 8.699 61.623-1.45 82.647-15.225 55.822-10.875 58.722 52.922 15.949 58.722 19.574 7.975-8.7 11.6-6.525 11.599 5.8 16.674 2.9 54.372-28.999 52.922-34.073-20.299-66.697-26.823-79.022-1.45-38.423 2.174-43.498 10.875-10.874 12.325-25.373 0-55.098 0-55.098z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M410.47 194.933s-5.948 4.416-8.123 13.84-5.074 84.821-5.074 84.821-26.824 103.67-21.024 105.845 22.474 6.525 24.648 4.35 26.824-89.895 24.65-99.32 2.9-36.973 2.9-36.973z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M544.44 329.843s-39.148-19.574-43.497-6.525 41.323 26.824 41.323 26.824 15.949-5.8 15.949-9.425-13.774-10.874-13.774-10.874z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M532.116 195.724l7.975-2.9s4.35-2.9 9.424 7.975 60.173 74.671 50.023 94.97-43.498 61.622-44.948 58.723-18.124-24.65-15.224-26.824 36.248-31.899 31.898-36.248-22.474-41.323-32.623-42.773-6.525-52.923-6.525-52.923z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M446.208 134.464s-110.549-44.45-206.244-87.222c0 0-50.023-12.325-76.122 10.874 0 0 21.75-2.9 21.75 9.425 0 0 18.848 24.648-39.874 28.998-40.896 3.03-57.178 27.508-63.295 42.09a59.245 59.245 0 0 1-23.958 28.17C44.33 175.247 23.845 181.462 0 170.486c0 0 1.356 2.084 3.927 5.556 46.038 62.172 217.48 116.28 278.022 68.118 37.415-29.764 96.728-67.385 139.247-48.436 66.697 29.724 79.022 16.674 79.022 16.674l2.9-7.974s-64.522-17.4-65.972-39.873 9.062-30.087 9.062-30.087zM510.73 140.264s15.586 6.162 18.486 26.461c0 0 16.675 32.624-2.175 40.599s-22.473 5.8-22.473 5.8v-3.626s20.299-12.324 15.949-21.749-9.787-47.485-9.787-47.485z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M482.819 232.697s5.074-13.05 3.624-13.05 5.899-8.025 8.75-5.1 7.925 11.626 2.125 13.8-14.5 4.35-14.5 4.35zM518.547 224.952s-13.252-4.519-13.19-3.07-8.269-5.554-5.466-8.526 11.28-8.41 13.698-2.707 4.958 14.303 4.958 14.303z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M497.318 205.149s6.619-3.715 10.559 2.13-4.76 15.994-10.56 15.994-5.799-12.325-5.799-12.325z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M497.318 205.149s6.619-3.715 10.559 2.13-4.76 15.994-10.56 15.994-5.799-12.325-5.799-12.325z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M453.713 83.498c-3.823 3.15-7.448 6.682-9.825 11.028a49.479 49.479 0 0 0-3.115 7.584c-2.932 8.437-10.22 16.983-7.135 25.365.88 2.392 2.253 4.914 1.464 7.338-.701 2.152-2.864 3.408-4.428 5.044-3.357 3.511-3.922 8.78-4.127 13.634-.375 8.889 4.512 19.364 10.418 26.018a36.356 36.356 0 0 1 3.554 4.024 9.432 9.432 0 0 1 1.114 7.759l8.603-1.796a71.363 71.363 0 0 1 .29 9.56 8.924 8.924 0 0 0 9.463-6.116 25.551 25.551 0 0 0 2.364 6.53 33.71 33.71 0 0 0 5.714-10.582 30.256 30.256 0 0 0 1.026-15.278 64.784 64.784 0 0 0-3.704-10.86c-3.04-7.682-5.523-15.572-8.002-23.453-1.288-4.094-2.592-8.32-2.201-12.594l3.057-.332a14.596 14.596 0 0 1 .964-4.934 18.101 18.101 0 0 1 5.113 1.924l3.524-8.942c2.326 2.412 5.664 3.504 8.86 4.51l12.149 3.826.074-2.405a62.353 62.353 0 0 0 17.287 10.844 3.933 3.933 0 0 1-.854-3.13c2.994 5.364 1.797 12.045-.051 17.903s-4.299 11.82-3.555 17.918c.557 4.56 2.892 8.92 2.46 13.494-.214 2.252-1.095 4.395-1.369 6.64-.653 5.356 2.163 10.456 4.881 15.117l5.285-7.259c1.935-2.657 3.929-5.37 6.668-7.187 2.811-1.864 6.296-2.7 8.746-5.02 4.374-4.138 3.819-11.19 2.396-17.041-.756-3.11-1.67-6.265-1.393-9.455.472-5.406 4.228-9.879 6.344-14.876a25.826 25.826 0 0 0-1.447-22.703c-2.626-4.503-6.593-8.13-9.067-12.718-2.462-4.567-3.402-10.001-6.776-13.943a23.522 23.522 0 0 0-5.681-4.526 74.057 74.057 0 0 0-31.506-10.279c-10.569-1.105-19.484 2.693-27.582 9.369z",
    fill: "#ff6584"
  }));
};

UndrawSuperWoman.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSuperWoman;