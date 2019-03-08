function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawSocialUpdate = function UndrawSocialUpdate(_props) {
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
    viewBox: "0 0 1092.654 613.5",
    style: style
  }, props), React.createElement("circle", {
    cx: 130.097,
    cy: 18.5,
    r: 7,
    fill: "#7d7b8c"
  }), React.createElement("circle", {
    cx: 154.097,
    cy: 18.5,
    r: 7,
    fill: "#7d7b8c"
  }), React.createElement("circle", {
    cx: 178.097,
    cy: 18.5,
    r: 7,
    fill: "#7d7b8c"
  }), React.createElement("path", {
    fill: "#f2f2f2",
    d: "M173.097 401.5h669v79h-669zM503.597 129h398v202h-398z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M573.455 312.5L663.597 162l93.5 150.5"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M710.097 235.5l18-47 102 124h-120.5l.5-77zM691.146 216.826a25 25 0 1 0-26.136-42.628"
  }), React.createElement("path", {
    d: "M1014.035 451.657a19.512 19.512 0 0 0-1.17 6.723 18.815 18.815 0 0 0 2.489 9.539 19.524 19.524 0 0 0 0 19.076 19.524 19.524 0 0 0 0 19.076 19.524 19.524 0 0 0 0 19.077 18.815 18.815 0 0 0-2.489 9.538c0 8.62 5.338 15.608 11.923 15.608s11.923-6.988 11.923-15.608a18.815 18.815 0 0 0-2.489-9.538 19.524 19.524 0 0 0 0-19.077 19.524 19.524 0 0 0 0-19.076 19.524 19.524 0 0 0 0-19.076 18.815 18.815 0 0 0 2.489-9.539 19.532 19.532 0 0 0-1.137-6.632",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M980.155 289.681a57.239 57.239 0 0 1-4.44-6.536l31.328-5.145-33.882.252A57.21 57.21 0 0 1 972.07 233l45.457 23.581-41.922-30.816a57.115 57.115 0 1 1 94.327 63.916 57.143 57.143 0 0 1 6.513 10.415l-40.666 21.128 43.361-14.553a57.144 57.144 0 0 1-9.208 53.63 57.11 57.11 0 1 1-89.777 0 57.118 57.118 0 0 1 0-70.62z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M1024.035 450.657a19.512 19.512 0 0 0-1.17 6.723 18.815 18.815 0 0 0 2.489 9.539 19.524 19.524 0 0 0 0 19.076 19.524 19.524 0 0 0 0 19.076 19.524 19.524 0 0 0 0 19.077 18.815 18.815 0 0 0-2.489 9.538c0 8.62 5.338 15.608 11.923 15.608s11.923-6.988 11.923-15.608a18.815 18.815 0 0 0-2.489-9.538 19.524 19.524 0 0 0 0-19.077 19.524 19.524 0 0 0 0-19.076 19.524 19.524 0 0 0 0-19.076 18.815 18.815 0 0 0 2.489-9.539 19.532 19.532 0 0 0-1.137-6.632",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M990.155 288.681a57.239 57.239 0 0 1-4.44-6.536l31.328-5.145-33.882.252A57.21 57.21 0 0 1 982.07 232l45.457 23.581-41.922-30.816a57.115 57.115 0 1 1 94.327 63.916 57.143 57.143 0 0 1 6.513 10.415l-40.666 21.128 43.361-14.553a57.144 57.144 0 0 1-9.208 53.63 57.11 57.11 0 1 1-89.777 0 57.118 57.118 0 0 1 0-70.62zM111.097.5h840v546h-840zM111.097 30.835h840",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("circle", {
    cx: 132.097,
    cy: 15.5,
    r: 7,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("circle", {
    cx: 156.097,
    cy: 15.5,
    r: 7,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("circle", {
    cx: 180.097,
    cy: 15.5,
    r: 7,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    fill: "#f2f2f2",
    d: "M127.097 151h290v21h-290zM127.097 201h290v21h-290zM127.097 251h290v21h-290z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M137.097 144h290v21h-290zM137.097 194h290v21h-290zM137.097 244h290v21h-290zM527.097 103.5h398v202h-398zM196.597 383.5h669v79h-669z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M578.455 305.5L668.597 155l93.5 150.5M713.097 226.5l18-47 102 126M698.146 202.826a25 25 0 1 0-26.136-42.628"
  }), React.createElement("path", {
    d: "M21.104 431.016a21.62 21.62 0 1 0-9.556-40.448l3.82 10.465-7.858-7.544a21.538 21.538 0 0 0-6.984 14.922 21.2 21.2 0 0 0 .548 5.954 21.615 21.615 0 0 0 20.03 16.651z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M84.282 546.53c-4.583-8.485.617-18.887 6.595-26.455s13.263-15.443 13.108-25.086c-.223-13.859-14.933-22.042-26.686-29.39a130.157 130.157 0 0 1-23.96-19.265c-2.886-2.946-5.676-6.096-7.364-9.858-2.43-5.418-2.363-11.583-2.21-17.52q.767-29.663 2.932-59.269",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M21.104 428.016a21.62 21.62 0 1 0-9.556-40.448l3.82 10.465-7.858-7.544a21.538 21.538 0 0 0-6.984 14.922 21.2 21.2 0 0 0 .548 5.954 21.615 21.615 0 0 0 20.03 16.651z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M24.355 362.606a21.594 21.594 0 0 1 10.79-17.71l4.84 9.574-.146-11.589a21.617 21.617 0 1 1-15.484 19.725z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M24.355 358.606a21.594 21.594 0 0 1 10.79-17.71l4.84 9.574-.146-11.589a21.617 21.617 0 1 1-15.484 19.725z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M73.74 466.93a21.617 21.617 0 0 0 6.857-42.402l.112 8.905-4.894-9.687a.376.376 0 0 0-.059-.004 21.618 21.618 0 1 0-2.017 43.189z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M73.573 462.93a21.617 21.617 0 0 0 6.858-42.402l.112 8.905-4.894-9.687a.376.376 0 0 0-.059-.004 21.618 21.618 0 1 0-2.017 43.189z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M62.901 507.895a21.608 21.608 0 1 0-1.045-17.403l13.5 10.986-14.851-3.442a21.416 21.416 0 0 0 2.396 9.86z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M62.901 504.895a21.608 21.608 0 1 0-1.045-17.403l13.5 10.986-14.851-3.442a21.416 21.416 0 0 0 2.396 9.86zM137.597 613h243",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M198.405 556.123a26.65 26.65 0 0 1-5.054 2.164c-3.139.858-6.493.543-9.664 1.275-1.298.3-2.71.927-3.123 2.193a4.606 4.606 0 0 0 .342 2.857c3.503 10.271 5.614 21.177 11.201 30.48a46.127 46.127 0 0 0 8.647 10.498 8.245 8.245 0 0 0 4.41 2.444 4.479 4.479 0 0 0 4.555-6.292c-.501-1.113-1.432-1.975-2.033-3.038a11.592 11.592 0 0 1-1.124-4.32c-.552-4.393-1.084-8.984.438-13.142 1.021-2.788 2.894-5.166 4.454-7.692s2.856-5.421 2.509-8.37a14.537 14.537 0 0 0-2.256-5.596c-1.039-1.744-3.093-6.432-5.18-7.014-2.167-.604-6.232 2.584-8.122 3.553zM255.529 591.601a8.664 8.664 0 0 1-.41 2.933c-.653 1.725-2.275 2.908-3.112 4.552-1.165 2.287-.637 5.052.135 7.5a7.684 7.684 0 0 0 2.417 4.08 7.968 7.968 0 0 0 3.68 1.178c11.146 1.543 22.469.658 33.717.981 2.05.059 4.22.13 6.01-.871s2.896-3.52 1.679-5.171c-1.093-1.483-3.254-1.469-5.094-1.556a20.957 20.957 0 0 1-12.924-5.324 9.34 9.34 0 0 1-1.813-2.087 12.825 12.825 0 0 1-.948-2.174 96.9 96.9 0 0 0-5.614-12.433 6.586 6.586 0 0 0-2.413-2.89 6.38 6.38 0 0 0-2.62-.572c-2.804-.181-10.063-1.135-12.231 1.044-2.003 2.015-.415 8.252-.459 10.81z",
    fill: "#f2f2f2"
  }), React.createElement("circle", {
    cx: 272.78,
    cy: 324.764,
    r: 17.906,
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M256.61 339.55a13.46 13.46 0 0 1-5.5 7.064l24.765 5.052a26.236 26.236 0 0 1-.347-11.043 6.365 6.365 0 0 0 .148-2.725c-.465-1.797-2.488-2.662-4.298-3.074-4.52-1.03-8.517-1.583-12.717-3.58-1.284 2.199-1.104 5.772-2.051 8.306z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M250.903 339.91a19.367 19.367 0 0 1 16.88.44 38.208 38.208 0 0 1 8.386 6.691c2.381 2.297 4.92 4.927 5.09 8.23a23.061 23.061 0 0 1-.67 4.75 15.923 15.923 0 0 0 8.516 16.357c1.967 3.278 2.373 7.248 2.403 11.071.115 14.483-4.455 29.145-1.193 43.257.766 3.313 1.954 6.522 2.616 9.857.857 4.32.815 8.763 1.263 13.145a58.875 58.875 0 0 0 3.16 13.902c-1.078 1.714-3.32 2.371-5.34 2.233a15.086 15.086 0 0 1-5.712-1.938c-8.728-4.467-16.723-10.356-25.762-14.152-5.981-2.511-12.353-4.076-18.155-6.976s-11.197-7.504-12.972-13.743a32.168 32.168 0 0 1-.856-8.345c-.176-11.812-.34-23.753 2.231-35.283 2.268-10.168 6.638-19.896 7.592-30.27.31-3.377.317-6.992 2.204-9.81 2.666-3.982 8.424-5.014 10.319-9.417z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M262.596 325.017c1.055-1.376 3.09-1.564 4.776-1.157s3.24 1.276 4.942 1.606a2.89 2.89 0 0 0 2.313-.325 3.364 3.364 0 0 0 .998-2.206 42.124 42.124 0 0 0 .415-10.741 3.18 3.18 0 0 1 .098-1.506c.422-1.016 1.708-1.258 2.758-1.583a8.229 8.229 0 0 0 5.57-8.426 3.35 3.35 0 0 0-1.024-2.311 4.211 4.211 0 0 0-2.68-.636q-7.22-.058-14.44.004a10.487 10.487 0 0 0-5.197.947 25.248 25.248 0 0 0-3.016 2.54c-2.674 2.158-6.29 2.597-9.543 3.703a9.46 9.46 0 0 0-4.182 2.494 4.406 4.406 0 0 0-.922 4.568 16.224 16.224 0 0 0 1.166 1.795c1.918 3.068.64 7.047.927 10.654.358 4.504 7.024 11.81 11.544 12.877 7.297 1.72 3.081-9.34 5.497-12.297zM252.487 522.499a53.44 53.44 0 0 1 .893 9.906c-.22 4.63-1.89 9.093-2.199 13.719-.23 3.455.303 6.947-.177 10.377-.307 2.195-1.023 4.312-1.467 6.485a26.818 26.818 0 0 0 4.31 20.557 3.367 3.367 0 0 0 1.25 1.212 3.531 3.531 0 0 0 1.55.205 111.208 111.208 0 0 0 15.555-1.413 1.492 1.492 0 0 0 .999-.441 1.4 1.4 0 0 0 .217-.59c.954-4.904-1.222-9.821-1.775-14.787-.591-5.302.681-10.616 1.944-15.799a70.172 70.172 0 0 1 2.143-7.557c.61-1.667 1.347-3.288 1.876-4.982a37.982 37.982 0 0 0 1.361-8.16q.551-6.535.584-13.1a54.976 54.976 0 0 0-1.029-12.366c-1.16-5.153-3.537-9.938-5.893-14.665a9.287 9.287 0 0 0-3.472 1.65 77.483 77.483 0 0 1-9.486 5.24c-2.204 1.025-6.502 1.752-7.901 3.885-1.38 2.104-.49 6.397-.384 8.717q.27 5.975 1.101 11.907z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M252.487 522.499a53.44 53.44 0 0 1 .893 9.906c-.22 4.63-1.89 9.093-2.199 13.719-.23 3.455.303 6.947-.177 10.377-.307 2.195-1.023 4.312-1.467 6.485a26.818 26.818 0 0 0 4.31 20.557 3.367 3.367 0 0 0 1.25 1.212 3.531 3.531 0 0 0 1.55.205 111.208 111.208 0 0 0 15.555-1.413 1.492 1.492 0 0 0 .999-.441 1.4 1.4 0 0 0 .217-.59c.954-4.904-1.222-9.821-1.775-14.787-.591-5.302.681-10.616 1.944-15.799a70.172 70.172 0 0 1 2.143-7.557c.61-1.667 1.347-3.288 1.876-4.982a37.982 37.982 0 0 0 1.361-8.16q.551-6.535.584-13.1a54.976 54.976 0 0 0-1.029-12.366c-1.16-5.153-3.537-9.938-5.893-14.665a9.287 9.287 0 0 0-3.472 1.65 77.483 77.483 0 0 1-9.486 5.24c-2.204 1.025-6.502 1.752-7.901 3.885-1.38 2.104-.49 6.397-.384 8.717q.27 5.975 1.101 11.907z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M228.278 452.255c-2.377 6.402 1.118 13.32 4.155 19.437 7.48 15.07 12.676 31.151 17.844 47.163a5.783 5.783 0 0 1 .342 3.692 4.836 4.836 0 0 1-1.744 2.069c-3.563 2.706-8.1 3.67-12.344 5.086a55.733 55.733 0 0 0-11.706 5.488c-3.076 1.905-5.957 4.105-8.833 6.302l-9.153 6.99a6.12 6.12 0 0 0-1.53 1.482c-.883 1.385-.522 3.193-.082 4.776a81.224 81.224 0 0 0 4.482 12.231 4.27 4.27 0 0 0 1.625 2.13c1.429.768 3.176-.25 4.267-1.45s2.035-2.694 3.573-3.21c1.536-.514 3.227.11 4.831-.116 2.595-.364 4.318-2.755 6.188-4.59 7.642-7.497 20.4-6.953 28.806-13.581a36.602 36.602 0 0 1 3.85-3.009c1.422-.84 3.033-1.3 4.508-2.043 4.484-2.258 7.304-6.927 8.814-11.715s1.94-9.844 3.026-14.746a64.11 64.11 0 0 0 1.55-7.625 40.845 40.845 0 0 0-.157-7.21l-3.033-37.521c-.247-3.055-.494-6.114-.974-9.14-9.008.321-18.01.684-27.023.79-7.173.085-14.476.586-21.282-1.68z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M224.967 461.032c1.222 1.965 4.196 1.925 6.244.847s3.64-2.887 5.692-3.956c2.759-1.435 6.023-1.381 9.132-1.293 4.921.139 9.903.287 14.638 1.635 4.898 1.395 9.665 4.081 14.73 3.545a3.03 3.03 0 0 0 2.324-1.09 3.426 3.426 0 0 0 .383-1.753l.165-4.424a3.995 3.995 0 0 0-.352-2.24 3.758 3.758 0 0 0-1.678-1.286c-7.208-3.49-15.428-4.139-23.432-4.413q-6.102-.209-12.21-.172c-3.455.021-7.603-.479-10.962.444-4.508 1.24-6.961 10.478-4.674 14.156z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M270.227 345.161c-9.445-.083-18.003-6.317-27.447-6.469a7.116 7.116 0 0 0-3.332.575 12.408 12.408 0 0 0-3.18 3.027c-2.793 3.024-6.837 4.638-9.705 7.59-2.69 2.767-4.186 6.89-3.124 10.6s5.07 6.556 8.824 5.664a22.743 22.743 0 0 1 8.86-12.038 45.044 45.044 0 0 1 6.925-3.635c4.245-1.923 8.99-3.883 13.422-2.441a18.935 18.935 0 0 1 4.579 2.497l7.387 4.962c-.86-3.395-1.635-7.203-3.21-10.332z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M231.176 362.866c-1.255 1.564.552 3.831.276 5.817-.184 1.32-1.27 2.327-1.722 3.58-.469 1.298-.22 2.736-.398 4.105a17.605 17.605 0 0 1-.788 2.922 52.514 52.514 0 0 0-1.66 8.668l-1.653 12.345a46.772 46.772 0 0 0-.523 5.61 16.752 16.752 0 0 1-.28 4.194 30.981 30.981 0 0 1-1.721 3.817 4.472 4.472 0 0 0-.061 4.032 7.048 7.048 0 0 0-1.476 8.797 4.882 4.882 0 0 1 .76 1.4 3.597 3.597 0 0 1-.334 2.064l-1.672 4.454c-.428 1.14-.563 2.875.626 3.135a10.51 10.51 0 0 0-2.256 3.564 4.243 4.243 0 0 0 .6 4.02 5.123 5.123 0 0 1 1.048 1.271 3.382 3.382 0 0 1-.12 2.005 7.358 7.358 0 0 0 .91 5.768 5.173 5.173 0 0 0 5.202 2.23c3.344-.755 6.348-1.945 9.72-1.326a173.638 173.638 0 0 1 21.571 4.914c8.024 2.562 15.794 6.319 24.18 7.107a2.347 2.347 0 0 0 1.617-.251 2.43 2.43 0 0 0 .747-1.538l2.592-12.152a125.06 125.06 0 0 0 2.383-13.613c.295-2.955.379-5.926.463-8.895l.668-23.626a23.606 23.606 0 0 0-1.36-10.271l-3.842-12.266c-2.193-7-7.223-13.207-9.014-20.32-1.133-4.503-1.97-9.334-5.01-12.843-4.334-5.003-11.832-5.78-18.394-4.92a21.976 21.976 0 0 0-8.52 2.596c-2.965 1.778-5.15 4.578-7.263 7.315-1.741 2.255-3.514 4.068-5.296 6.29z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M246.499 432.359c.54 2.331 1.676 4.48 2.37 6.771 1.165 3.837 1.067 7.97 2.229 11.807.488 1.61 1.194 3.157 1.545 4.804.816 3.838-.376 7.808-1.857 11.442s-3.283 7.217-3.764 11.111c-.338 2.743.148 5.84 2.262 7.62 2.195 1.849 5.385 1.724 8.243 1.478a8.662 8.662 0 0 0 2.992-.623c2.187-1.035 3.107-3.622 3.618-5.986 1.713-7.922 1.224-16.133.726-24.223l-1.302-21.156a49.518 49.518 0 0 0-1.774-12.142c-.456-1.422-1.252-4.297-2.551-5.206-1.287-.9-4.963-.94-6.556-1.014-7.477-.351-7.393 10.084-6.181 15.317z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M254.782 354.245a5.147 5.147 0 0 0-4.926.435 15.183 15.183 0 0 0-3.69 3.583c-3.3 4.028-6.793 8.649-6.304 13.832a35.08 35.08 0 0 0 1.432 5.668c2.212 8.269-.234 17.014.047 25.569a80.056 80.056 0 0 0 2.309 14.633c.219.986.569 2.126 1.522 2.458a3.305 3.305 0 0 0 2.198-.34 17.533 17.533 0 0 1 16.045 2.022c1.77-.945 1.107-3.932.71-5.9-1.179-5.844.422-11.874 2.366-17.51s4.271-11.267 4.593-17.22c.365-6.747-1.872-13.331-4.078-19.716a6.34 6.34 0 0 0-5.34-5.287c-2.345-.693-4.718-1.093-6.884-2.227z",
    fill: "#3f3d56"
  }));
};

UndrawSocialUpdate.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSocialUpdate;