"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultProps = _interopRequireDefault(require("../default-props"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var UndrawCompleted = function UndrawCompleted(_props) {
  var props = Object.assign({}, _props);
  var primaryColor = props.primaryColor || _defaultProps.default.primaryColor;
  var style = Object.assign({
    height: props.height || _defaultProps.default.height,
    width: '100%'
  }, props.style);
  delete props.primaryColor;
  delete props.height;
  delete props.style;
  return _react.default.createElement("svg", _extends({
    "data-name": "Layer 1",
    width: "1em",
    height: "1em",
    viewBox: "0 0 809.835 872.15",
    style: style
  }, props), _react.default.createElement("circle", {
    cx: 436.835,
    cy: 499.15,
    r: 373,
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M219.02 433.191a30.114 30.114 0 0 0 3.983-15.266c0-13.796-8.543-24.98-19.082-24.98s-19.083 11.184-19.083 24.98a30.114 30.114 0 0 0 3.983 15.266 31.248 31.248 0 0 0 0 30.532 31.248 31.248 0 0 0 0 30.532 31.248 31.248 0 0 0 0 30.532 30.114 30.114 0 0 0-3.983 15.266c0 13.797 8.544 24.981 19.083 24.981s19.082-11.184 19.082-24.98a30.114 30.114 0 0 0-3.983-15.267 31.248 31.248 0 0 0 0-30.532 31.248 31.248 0 0 0 0-30.532 31.248 31.248 0 0 0 0-30.532z",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 203.921,
    cy: 387.393,
    rx: 19.083,
    ry: 24.981,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 203.921,
    cy: 356.861,
    rx: 19.083,
    ry: 24.981,
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M275.356 147.92a91.61 91.61 0 0 0 7.107-10.46l-50.141-8.236 54.229.404a91.566 91.566 0 0 0 1.745-72.426l-72.754 37.74 67.096-49.32a91.413 91.413 0 1 0-150.97 102.298 91.458 91.458 0 0 0-10.425 16.67l65.086 33.814-69.4-23.292a91.46 91.46 0 0 0 14.738 85.837 91.406 91.406 0 1 0 143.69 0 91.418 91.418 0 0 0 0-113.029z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M112.106 204.434a91.013 91.013 0 0 0 19.561 56.515 91.406 91.406 0 1 0 143.69 0c12.25-15.553-163.25-66.774-163.25-56.515z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M705.584 745.544C681.93 829.83 499.417 908.005 305.33 853.538S-20.918 632.59 2.736 548.302s194.166-54.46 388.252.006 338.25 112.949 314.596 197.236z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M705.584 745.544C681.93 829.83 499.417 908.005 305.33 853.538S-20.918 632.59 2.736 548.302s194.166-54.46 388.252.006 338.25 112.949 314.596 197.236z",
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 549.242,
    cy: 660.848,
    rx: 158.511,
    ry: 365,
    transform: "rotate(-74.324 442.516 782.568)",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 294.835,
    cy: 652.15,
    rx: 107,
    ry: 31,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M426.59 473.755L291.259 609.088l-56.881-56.881a19.444 19.444 0 0 0-27.498 0l-2.044-3.057c-7.593 7.594-5.55 22.962 2.043 30.555l73.803 73.802a14.836 14.836 0 0 0 20.976.006l152.418-152.26c7.598-7.59 10.355-21.508 2.76-29.103-7.591-7.591-22.653-5.986-30.244 1.605z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M426.59 473.755L291.259 609.088l-56.881-56.881a19.444 19.444 0 0 0-27.498 0l-2.044-3.057c-7.593 7.594-5.55 22.962 2.043 30.555l73.803 73.802a14.836 14.836 0 0 0 20.976.006l152.418-152.26c7.598-7.59 10.355-21.508 2.76-29.103-7.591-7.591-22.653-5.986-30.244 1.605z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M426.59 467.755L291.259 603.088l-56.881-56.881a19.444 19.444 0 0 0-27.498 0 19.444 19.444 0 0 0 0 27.498l73.802 73.802a14.836 14.836 0 0 0 20.976.006l152.418-152.26a19.44 19.44 0 0 0 .007-27.498 19.44 19.44 0 0 0-27.491 0z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M492.492 698.126s-12.103 3.63-18.154 10.892c0 0-10.893 4.841-17.55 3.631s-18.759 10.893-9.077 14.523 68.987 13.314 70.197 10.288 1.21-33.888 1.21-33.888zM587.562 692.929s-11.305 5.645-16.027 13.833c0 0-9.906 6.63-16.671 6.575s-16.623 13.937-6.463 15.86 70.247 1.335 70.922-1.853-4.596-33.597-4.596-33.597z",
    fill: "#575a89"
  }), _react.default.createElement("circle", {
    cx: 512.159,
    cy: 255.463,
    r: 27.231,
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M534.247 260.001s3.026 20.575 8.472 22.996a40.208 40.208 0 0 1 10.287 7.261l-15.128 7.262-29.652-1.815s2.42-13.313-1.816-19.97 27.837-15.734 27.837-15.734zM590.525 357.43s13.919 35.703 0 70.196-19.97 39.94-19.97 39.94l-4.235-45.386 4.87-4.419s2.95-13.77.553-21.922 1.233-33.568 1.233-33.568z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M486.44 434.888s-17.549 39.94-15.733 59.304 15.734 101.06 15.734 101.06-1.816 105.294 3.63 105.294 31.468 9.682 31.468 3.026 5.446-166.415 5.446-166.415 30.863 70.197 33.888 75.643 22.39 90.772 29.047 90.772 27.232-6.052 25.416-10.288-22.39-98.638-33.888-122.844-9.077-115.582-9.077-115.582l-19.364-42.36z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M503.99 243.057s-16.944-1.21-18.154-5.446-3.631-7.867-2.421-7.867 1.815-3.026 1.815-3.026 1.21-.605 1.816 0 1.21-4.236 1.21-4.236.605-1.815 1.21-.605.606.605 1.21-1.21 3.632-3.026 3.632-3.026 11.497.605 13.313-1.815 22.39-.605 26.626 2.42 22.996 13.919 19.97 22.996-13.918 29.047-13.918 32.072-4.236 2.421-5.447-.605-10.892-6.656-10.892-8.472-5.447-18.76-8.472-17.549-6.657 10.893-7.867 9.077-3.631-12.708-3.631-12.708z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M587.5 325.962s-24.811-36.309-32.073-38.124-23.6-6.657-23.6-6.657-16.34 2.42-21.18 4.841-22.996 6.657-23.601 13.919 4.841 76.853 1.815 83.51-13.313 70.196-8.472 68.986 1.21-16.944 22.39-17.55 32.678-13.312 40.545 1.816 30.257 26.627 30.257 26.627a146.409 146.409 0 0 1 2.421-14.524c1.815-8.472-4.841-29.047-4.841-29.047s.605-47.806 3.026-53.252 13.313-40.545 13.313-40.545z",
    fill: "#575a89"
  }), _react.default.createElement("path", {
    d: "M578.423 324.752l9.077 1.21s-.605 12.103 1.815 15.734 6.657 22.39 4.236 22.995-24.206 4.236-24.206 4.236l-1.21-27.836z",
    fill: "#575a89"
  }), _react.default.createElement("path", {
    d: "M480.39 346.537s-6.052 39.334-9.078 44.175-18.154 72.618-18.154 72.618-24.878 34.596-12.775 33.99 24.878-31.57 24.878-31.57 37.519-68.381 37.519-75.643 9.077-43.57 9.077-43.57z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M497.938 293.284l-10.892 4.236s-13.919 49.622-10.893 53.858 39.335-1.815 39.94-3.63-6.657-54.464-18.155-54.464z",
    fill: "#575a89"
  }), _react.default.createElement("path", {
    d: "M11.392 420.793c0 42.17 26.455 76.294 59.15 76.294",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M70.541 497.087c0-42.644 29.523-77.151 66.007-77.151M32.823 424.616c0 40.057 16.87 72.471 37.718 72.471",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M70.541 497.087c0-54.49 34.124-98.582 76.294-98.582",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M58.098 497.625s8.388-.258 10.916-2.059 12.903-3.95 13.53-1.062 12.607 14.359 3.136 14.435-22.005-1.475-24.528-3.012-3.054-8.302-3.054-8.302z",
    fill: "#a8a8a8"
  }), _react.default.createElement("path", {
    d: "M85.85 507.934c-9.471.077-22.006-1.475-24.529-3.012-1.921-1.17-2.687-5.37-2.943-7.308-.178.008-.28.011-.28.011s.531 6.765 3.054 8.302 15.058 3.089 24.528 3.012c2.734-.022 3.678-.994 3.627-2.435-.38.87-1.423 1.414-3.458 1.43z",
    opacity: 0.2
  }));
};

UndrawCompleted.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawCompleted;
exports.default = _default;