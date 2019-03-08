import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawChristmasTree = (_props: any) => {
  const props = Object.assign({}, _props);
  const primaryColor = props.primaryColor || defaultProps.primaryColor;
  const style = Object.assign(
    {
      height: props.height || defaultProps.height,
      width: '100%'
    },
    props.style
  );
  delete props.primaryColor;
  delete props.height;
  delete props.style;
  return (
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1145.7 818.64" style={style} {...props}>
      <path
        d="M1145.7 538.14a268.06 268.06 0 0 1-310.49 264.52H410.5a364.06 364.06 0 0 1-49.5 3.38q-17.83 0-35.23-1.7A360.62 360.62 0 0 1 0 445.04c0-199.38 161.63-361 361-361 160.57 0 296.63 104.84 343.52 249.8a266.84 266.84 0 0 1 173.33-63.6c147.91 0 267.85 119.94 267.85 267.9z"
        fill={primaryColor}
        opacity={0.1}
      />
      <path
        d="M1042.79 749.21a268.31 268.31 0 0 1-207.58 53.45H410.5a364.06 364.06 0 0 1-49.5 3.38q-17.83 0-35.23-1.7a361.17 361.17 0 0 1-309-250.21c34.58-73.89 123.42-126.47 227.58-126.47 101.5 0 188.5 49.94 224.81 120.87a301.82 301.82 0 0 1 54.19-4.87c105.2 0 194.77 53.67 228.59 128.67a295.63 295.63 0 0 1 86.41-12.71c85.8.04 161.21 35.71 204.44 89.59z"
        fill={primaryColor}
        opacity={0.1}
      />
      <path
        d="M611.51 566.09a35.88 35.88 0 0 1-4.66 15.16 38.06 38.06 0 0 1 0 37.15 35.49 35.49 0 0 1 4.43 13l-13.38 23 13.57-13.43a35.9 35.9 0 0 1-4.62 14.58 38.08 38.08 0 0 1 0 37.16 38.06 38.06 0 0 1 0 37.15 36.77 36.77 0 0 1 4.84 18.57c0 16.79-10.39 30.39-23.22 30.39h-1.07a177 177 0 0 0-21.36 0h-2.14a177 177 0 0 0-21.36 0h-1.07c-12.82 0-23.22-13.6-23.22-30.39a36.58 36.58 0 0 1 4.85-18.57 36.62 36.62 0 0 1-4.88-18.53 39.31 39.31 0 0 1 .67-7.19l18.59 11.54-16.78-17.95a31.6 31.6 0 0 1 2.37-5 38 38 0 0 1 0-37.16 38 38 0 0 1 0-37.15 36.1 36.1 0 0 1-4.78-16.53l31.85 19.76-30.42-32.52a34.46 34.46 0 0 1 3.35-7.86 35.06 35.06 0 0 1-4.32-12.14 38.66 38.66 0 0 1-.53-6.43 36.62 36.62 0 0 1 4.85-18.58 36.58 36.58 0 0 1-4.85-18.57c0-16.79 10.4-30.4 23.22-30.4a19.18 19.18 0 0 1 11.75 4.18 18.6 18.6 0 0 1 23.5 0 19.16 19.16 0 0 1 11.75-4.18c12.83 0 23.22 13.61 23.22 30.4a36.77 36.77 0 0 1-4.81 18.55 36.81 36.81 0 0 1 4.84 18.58c-.03 1.15-.08 2.29-.18 3.41z"
        fill="#3f3d56"
      />
      <path
        d="M606.85 544.1a36.81 36.81 0 0 1 4.84 18.58c0 1.15 0 2.29-.15 3.41a110.06 110.06 0 0 1-41.21-25.57 110 110 0 0 1-51.55 28.59 38.66 38.66 0 0 1-.53-6.43 36.62 36.62 0 0 1 4.85-18.58 36.58 36.58 0 0 1-4.85-18.57c0-16.79 10.4-30.4 23.22-30.4a19.18 19.18 0 0 1 11.72 4.2 18.6 18.6 0 0 1 23.5 0 19.16 19.16 0 0 1 11.75-4.18c12.83 0 23.22 13.61 23.22 30.4a36.77 36.77 0 0 1-4.81 18.55z"
        opacity={0.1}
      />
      <path
        d="M830.51 416.11L886 389.44a110.65 110.65 0 0 0-47.29-42c.31-3.39.48-6.82.48-10.29a110 110 0 0 0-7-38.8l-69.6-25.02.25-.51 58.92 4.85a110.76 110.76 0 0 0-48.31-41.38 112 112 0 0 0 .66-12.07 109.91 109.91 0 0 0-8.54-42.62l-33 32.67 26.57-45.61a110.85 110.85 0 0 0-15.77-20.85l-34.3 33.93 24.86-42.68a109.93 109.93 0 0 0-39.36-20.78 110.5 110.5 0 0 0-58.41-71l-48.2 47.68L619.5 40.8a110.35 110.35 0 0 0-137.88 76.43 110.1 110.1 0 0 0-52.64 30.51l38.67 36.77-47.85-25.93a109.79 109.79 0 0 0-21.65 65.63c0 1.56 0 3.11.11 4.66a110.15 110.15 0 0 0-64.95 38.85l31.31 29.77-38-20.6a109.74 109.74 0 0 0-17.94 60.29c0 1.28 0 2.55.08 3.82a110 110 0 0 0-46.58 26l41.89 39.82-52.45-28.42a109.75 109.75 0 0 0-24.28 69c0 1.56 0 3.11.11 4.66l52.22 49.64-48.82-26.37a110.28 110.28 0 0 0 184.44 50.34 110.24 110.24 0 0 0 155 .44 110.24 110.24 0 0 0 149.56 4.55 110.29 110.29 0 0 0 173.86-126.33z"
        fill={primaryColor}
      />
      <path
        d="M848.66 454.49c-23.34 11.84-51.31 2.53-75.95-6.29-32.24-11.55-65.19-22.13-99.29-25.37s-69.76 1.31-99.43 18.42c-17.72 10.22-33 24.68-51.82 32.73-53.05 22.71-115.38-11.58-171.26 2.81-32.88 8.46-57.84 31.92-82.2 56.72a110.22 110.22 0 0 0 146.59-7.89 110.24 110.24 0 0 0 155 .44 110.24 110.24 0 0 0 149.55 4.6 110.27 110.27 0 0 0 182.58-83.25 111.31 111.31 0 0 0-1.89-20.38 74.76 74.76 0 0 0-28.52 11.14c-7.91 5.24-14.87 12.01-23.36 16.32zM491.24 119.17c23 5.32 45.57 14.09 63.82 29s31.79 36.61 33.41 60.16M637.85 318.33c8.61-21.95 20.56-43 38-58.93s40.82-26.13 64.32-24.33M339.75 339.13c23.49 1.92 47.13 7.3 67.36 19.41s36.78 31.56 41.82 54.6"
        opacity={0.1}
      />
      <circle cx={467.72} cy={184.4} r={16.27} fill="#ff6f61" />
      <circle cx={483.99} cy={114.8} r={16.27} fill="#ff6f61" />
      <circle cx={398.12} cy={224.16} r={16.27} fill="#ff6f61" />
      <circle cx={694.58} cy={114.8} r={16.27} fill="#ff6f61" />
      <circle cx={765.07} cy={184.4} r={16.27} fill="#ff6f61" />
      <circle cx={831.96} cy={298.28} r={16.27} fill="#ff6f61" />
      <circle cx={893.42} cy={413.06} r={16.27} fill="#ff6f61" />
      <circle cx={719.88} cy={530.56} r={16.27} fill="#ff6f61" />
      <circle cx={415.3} cy={530.56} r={16.27} fill="#ff6f61" />
      <circle cx={582.5} cy={204.28} r={16.27} fill="#ff6f61" />
      <circle cx={637.64} cy={314.55} r={16.27} fill="#ff6f61" />
      <circle cx={860.88} cy={533.27} r={16.27} fill="#ff6f61" />
      <circle cx={447.83} cy={407.64} r={16.27} fill="#ff6f61" />
      <circle cx={588.83} cy={92.21} r={16.27} fill="#ff6f61" />
      <circle cx={308.64} cy={338.95} r={16.27} fill="#ff6f61" />
      <circle cx={227.3} cy={481.75} r={16.27} fill="#ff6f61" />
      <circle cx={252.61} cy={383.24} r={16.27} fill="#ff6f61" />
      <path
        d="M814.85 357.38c-2.52-.36-5.47-1.65-8-1.61s-4.42 7.68-6.93 8.07-5.74-3.39-8.19-2.68-3.55 4.81-5.9 5.78-5.16.48-7.4 1.67-3.13 4.28-5.24 5.66-6 .16-8 1.71-2.72 4.58-4.64 6.24-6.71.17-8.55 1.92-4.69 2.6-6.47 4.41-1.21 5.93-3 7.77-3.32 3.85-5 5.7M479.41 335.14c-1.24-2.23-2-5.41-3.52-7.4s-9 1.32-10.86-.44-.63-6.76-2.67-8.28-6.06.19-8.25-1.09-3.46-3.89-5.76-5-5.32.17-7.7-.67-3.68-4.78-6.12-5.45-5.31.67-7.79.15-4.15-5.44-6.66-5.84-4.9-2.24-7.42-2.57-5.47 2.76-8 2.49-5.08-.32-7.59-.58M537.99 408.33c1.41-2.28 5.18-4.26 7.76-5s5.82.36 8.37.58 5.07 2.2 7.67 2.45 6.11 2.36 8.67 1.69a49.37 49.37 0 0 0 7.32-3c2.41-1.09 3.46-5.34 6-6.05s6 3.4 8.56 3 4.4-5.86 7-6.14 5.33.2 8 0c1.93-.16 2.63 3.72 4.45 4.36 2.53.89 8.24-2.74 9.93-.55s1 5.68 3.5 6.55M582.5 194.76a13.92 13.92 0 0 1 6.31 1.18c2.13 1 5 .91 6.56 2.67s1.83 4.64 2.49 6.91c.41-1.43 2.27-3.28 2.27-4.85 0-2.21-1.86-4.28-2.66-6.2a16.32 16.32 0 0 0-3.36-5.41c-1.5-1.5-2.78-4.09-4.76-4.91s-4.64.34-6.85.34a16.08 16.08 0 0 0-6.22 1.16c-2 .82-4.67 1.13-6.17 2.62s-1.69 4.23-2.52 6.22.23 4 .23 6.18c0 1.57-2 2.24-1.6 3.67a15.35 15.35 0 0 1 3.15-6 18.76 18.76 0 0 1 5.79-4.69c2.07-.91 4.92 1.11 7.34 1.11zM719.85 519.23a13.92 13.92 0 0 1 6.31 1.18c2.13 1 5 .91 6.56 2.67s1.83 4.64 2.49 6.92c.41-1.44 2.27-3.29 2.27-4.86 0-2.21-1.86-4.28-2.66-6.2a16.32 16.32 0 0 0-3.36-5.41c-1.5-1.49-2.78-4.08-4.76-4.91s-4.64.34-6.85.34a16.08 16.08 0 0 0-6.22 1.16c-2 .82-4.67 1.13-6.17 2.63s-1.69 4.23-2.52 6.21.23 4 .23 6.18c0 1.57-2 2.24-1.6 3.67a15.42 15.42 0 0 1 3.15-6 18.83 18.83 0 0 1 5.8-4.69c2.09-.9 4.94 1.11 7.33 1.11zM860.85 519.23a13.88 13.88 0 0 1 6.3 1.18c2.14 1 5 .91 6.57 2.67s1.83 4.64 2.48 6.92c.42-1.44 2.27-3.29 2.27-4.86 0-2.21-1.86-4.28-2.65-6.2a16.51 16.51 0 0 0-3.37-5.41c-1.49-1.49-2.77-4.08-4.76-4.91s-4.63.34-6.84.34a16 16 0 0 0-6.22 1.16c-2 .82-4.67 1.13-6.17 2.63s-1.69 4.23-2.52 6.21.23 4 .23 6.18c0 1.57-2 2.24-1.6 3.67a15.53 15.53 0 0 1 3.14-6 19.06 19.06 0 0 1 5.8-4.69c2.09-.9 4.95 1.11 7.34 1.11zM440.58 397.2a14 14 0 0 1 6-2.23c2.34-.25 4.79-1.78 7-1.05s4 3 5.69 4.64c-.38-1.45.24-4-.57-5.32-1.13-1.89-3.78-2.73-5.44-4a16.36 16.36 0 0 0-5.67-2.91c-2.05-.51-4.47-2.06-6.6-1.74s-3.81 2.64-5.7 3.78a16 16 0 0 0-4.75 4.19c-1.28 1.73-3.4 3.38-3.92 5.43s.7 4.49 1 6.62 2.21 3.31 3.34 5.2c.81 1.34-.53 3 .56 4a15.21 15.21 0 0 1-.36-6.73 18.6 18.6 0 0 1 2.56-7c1.32-1.86 4.78-1.63 6.86-2.88zM407.13 520.12a14.08 14.08 0 0 1 6-2.23c2.33-.25 4.79-1.78 7-1s3.95 3 5.69 4.64c-.38-1.45.24-4-.57-5.32-1.13-1.89-3.78-2.73-5.45-4a16.31 16.31 0 0 0-5.66-2.91c-2.06-.51-4.48-2.06-6.61-1.74s-3.8 2.64-5.7 3.78a16.13 16.13 0 0 0-4.74 4.19c-1.28 1.73-3.4 3.38-3.92 5.43s.7 4.49 1 6.62 2.21 3.31 3.34 5.2c.81 1.34-.54 2.95.56 4a15.21 15.21 0 0 1-.36-6.73 18.6 18.6 0 0 1 2.56-7c1.33-1.91 4.79-1.72 6.86-2.93zM305.91 330.33a14 14 0 0 1 6-2.23c2.34-.25 4.8-1.78 7-1.05s4 3 5.69 4.63c-.38-1.44.24-4-.57-5.31-1.13-1.89-3.78-2.73-5.44-4a16.33 16.33 0 0 0-5.67-2.9c-2-.52-4.47-2.06-6.6-1.74s-3.81 2.64-5.7 3.78a16 16 0 0 0-4.75 4.19c-1.28 1.73-3.4 3.37-3.92 5.43s.7 4.49 1 6.62 2.21 3.3 3.34 5.2c.81 1.34-.53 2.94.56 4a15.22 15.22 0 0 1-.36-6.73 18.6 18.6 0 0 1 2.56-7c1.32-1.89 4.8-1.66 6.86-2.89zM249.85 377.33a14 14 0 0 1 6-2.23c2.34-.26 4.8-1.78 7-1.05s4 3 5.69 4.63c-.38-1.44.24-4-.57-5.31-1.13-1.89-3.77-2.73-5.44-4a16.37 16.37 0 0 0-5.66-2.9c-2.06-.52-4.48-2.06-6.61-1.75s-3.81 2.65-5.7 3.78a16.17 16.17 0 0 0-4.74 4.2c-1.29 1.73-3.41 3.37-3.92 5.43s.7 4.49 1 6.62 2.21 3.3 3.35 5.19c.8 1.35-.54 2.95.55 4a15.52 15.52 0 0 1-.36-6.73 19.06 19.06 0 0 1 2.56-7c1.34-1.88 4.79-1.65 6.85-2.88zM224.56 473.12a14.09 14.09 0 0 1 6-2.23c2.34-.25 4.8-1.78 7-1s3.95 3 5.69 4.64c-.39-1.45.23-4-.57-5.32-1.14-1.89-3.78-2.73-5.45-4a16.57 16.57 0 0 0-5.66-2.91c-2.06-.51-4.48-2-6.61-1.74s-3.81 2.65-5.7 3.78a16.13 16.13 0 0 0-4.74 4.19c-1.28 1.73-3.41 3.38-3.92 5.43s.7 4.5 1 6.62 2.22 3.31 3.35 5.2c.81 1.35-.54 2.95.56 4a15.41 15.41 0 0 1-.37-6.74 18.79 18.79 0 0 1 2.57-7c1.32-1.9 4.78-1.71 6.85-2.92zM394.48 216.44a14.09 14.09 0 0 1 6-2.23c2.34-.26 4.8-1.78 7-1.05s3.95 3 5.69 4.63c-.39-1.44.23-4-.57-5.31-1.14-1.89-3.78-2.73-5.45-4a16.37 16.37 0 0 0-5.66-2.9c-2.06-.52-4.48-2.06-6.61-1.75s-3.81 2.65-5.7 3.78a16.17 16.17 0 0 0-4.74 4.2c-1.28 1.72-3.41 3.37-3.92 5.43s.7 4.49 1 6.62 2.22 3.3 3.35 5.19c.81 1.35-.54 2.95.56 4a15.37 15.37 0 0 1-.37-6.73 18.84 18.84 0 0 1 2.57-7c1.32-1.87 4.77-1.64 6.85-2.88zM464.07 176.67a14.08 14.08 0 0 1 6-2.23c2.33-.25 4.79-1.78 7-1.05s3.95 3 5.69 4.63c-.38-1.44.24-4-.57-5.31-1.13-1.89-3.78-2.73-5.45-4a16.2 16.2 0 0 0-5.66-2.9c-2.05-.52-4.48-2.06-6.6-1.74s-3.81 2.64-5.71 3.78a16.13 16.13 0 0 0-4.74 4.19c-1.28 1.73-3.4 3.37-3.92 5.43s.7 4.49 1 6.62 2.21 3.3 3.34 5.2c.81 1.34-.53 2.94.56 4a15.22 15.22 0 0 1-.36-6.73 18.6 18.6 0 0 1 2.56-7c1.33-1.88 4.79-1.65 6.86-2.89zM478.54 105.27a14 14 0 0 1 6-2.23c2.34-.26 4.8-1.78 7-1.05s4 3 5.69 4.63c-.38-1.44.24-4-.57-5.31-1.13-1.89-3.78-2.73-5.44-4a16.33 16.33 0 0 0-5.67-2.9c-2.05-.52-4.47-2.06-6.6-1.75s-3.81 2.65-5.7 3.78a16.22 16.22 0 0 0-4.75 4.2c-1.28 1.72-3.4 3.37-3.92 5.43s.7 4.49 1 6.62 2.21 3.3 3.34 5.19c.81 1.35-.53 2.95.56 4a15.22 15.22 0 0 1-.36-6.73 18.65 18.65 0 0 1 2.56-7c1.32-1.82 4.78-1.64 6.86-2.88zM588.85 81.78a13.88 13.88 0 0 1 6.3 1.18c2.14 1 5.05.91 6.57 2.67s1.83 4.64 2.48 6.92c.42-1.44 2.27-3.29 2.27-4.86 0-2.21-1.86-4.28-2.65-6.2a16.51 16.51 0 0 0-3.37-5.41c-1.49-1.49-2.77-4.08-4.76-4.91s-4.63.34-6.84.34a16 16 0 0 0-6.22 1.16c-2 .82-4.68 1.13-6.17 2.63s-1.69 4.23-2.52 6.21.23 4 .23 6.18c0 1.57-2 2.24-1.6 3.67a15.53 15.53 0 0 1 3.14-6 18.94 18.94 0 0 1 5.8-4.69c2.04-.9 4.9 1.11 7.34 1.11zM698.21 108.89a14 14 0 0 1 5.17 3.81c1.5 1.81 4.14 3 4.74 5.26s-.36 5-.76 7.3c1-1.11 3.47-2 4.15-3.39 1-2 .19-4.66.31-6.73a16.41 16.41 0 0 0-.69-6.33c-.7-2-.73-4.88-2.16-6.49s-4.32-1.72-6.3-2.67a16 16 0 0 0-6.11-1.66c-2.15-.12-4.7-1-6.7-.3s-3.36 3.06-5 4.49-1.53 3.67-2.49 5.66c-.68 1.41-2.77 1.15-3 2.63a15.33 15.33 0 0 1 5.42-4 18.83 18.83 0 0 1 7.26-1.71c2.28.04 3.98 3.08 6.16 4.13zM771.42 179.39a14 14 0 0 1 5.17 3.8c1.5 1.82 4.14 3 4.74 5.27s-.36 5-.76 7.3c1-1.11 3.47-2 4.15-3.39 1-2 .19-4.66.31-6.74a16.38 16.38 0 0 0-.69-6.32c-.7-2-.73-4.88-2.16-6.49s-4.32-1.72-6.3-2.68a16.2 16.2 0 0 0-6.11-1.65c-2.15-.13-4.7-1-6.7-.31s-3.36 3.07-5 4.5-1.53 3.67-2.49 5.66c-.68 1.41-2.77 1.15-3 2.63a15.36 15.36 0 0 1 5.42-4 19 19 0 0 1 7.26-1.7c2.28.06 3.98 3.06 6.16 4.12zM834.69 287.85a14 14 0 0 1 5.17 3.8c1.49 1.81 4.14 3 4.74 5.27s-.36 5-.76 7.3c1-1.11 3.46-2 4.14-3.39 1-2 .2-4.66.31-6.74a16.41 16.41 0 0 0-.68-6.33c-.7-2-.73-4.88-2.16-6.48s-4.32-1.72-6.31-2.68a16.31 16.31 0 0 0-6.1-1.66c-2.15-.12-4.7-1-6.7-.3s-3.36 3.07-5 4.5-1.53 3.67-2.49 5.66c-.68 1.41-2.77 1.15-3 2.63a15.36 15.36 0 0 1 5.42-4 18.82 18.82 0 0 1 7.26-1.7c2.32.03 3.98 3.07 6.16 4.12zM640.36 307.73a13.9 13.9 0 0 1 5.17 3.81c1.5 1.81 4.14 3 4.74 5.26s-.35 5-.75 7.3c1-1.11 3.46-2 4.14-3.39 1-2 .19-4.66.31-6.73a16.41 16.41 0 0 0-.68-6.33c-.7-2-.73-4.88-2.17-6.49s-4.31-1.71-6.3-2.67a15.94 15.94 0 0 0-6.11-1.66c-2.15-.12-4.69-1-6.69-.3s-3.37 3.06-5 4.49-1.53 3.67-2.49 5.66c-.68 1.42-2.77 1.16-3 2.63a15.24 15.24 0 0 1 5.42-4 18.78 18.78 0 0 1 7.25-1.71c2.28.04 3.98 3.08 6.16 4.13zM896.15 404.44a14 14 0 0 1 5.17 3.81c1.49 1.81 4.13 3 4.74 5.26s-.36 5-.76 7.3c1-1.11 3.46-2 4.14-3.39 1-2 .2-4.66.31-6.73a16.41 16.41 0 0 0-.68-6.33c-.7-2-.73-4.88-2.16-6.49s-4.32-1.72-6.31-2.67a15.94 15.94 0 0 0-6.1-1.66c-2.15-.12-4.7-1-6.7-.3s-3.36 3.06-5 4.49-1.53 3.67-2.49 5.66c-.68 1.41-2.77 1.15-3 2.63a15.24 15.24 0 0 1 5.42-4 18.83 18.83 0 0 1 7.26-1.71c2.28.02 3.98 3.08 6.16 4.13z"
        fill="#ededf4"
      />
      <path
        d="M594.04 4.16l3.2 6.48a7.47 7.47 0 0 0 5.61 4.08l7.15 1a7.46 7.46 0 0 1 4.13 12.73l-5.17 5a7.49 7.49 0 0 0-2.11 6.69l1.22 7.12a7.46 7.46 0 0 1-10.82 7.86l-6.4-3.36a7.47 7.47 0 0 0-6.94 0l-6.4 3.36a7.46 7.46 0 0 1-10.82-7.86l1.16-7.12a7.49 7.49 0 0 0-2.15-6.61l-5.17-5a7.46 7.46 0 0 1 4.13-12.73l7.15-1a7.47 7.47 0 0 0 5.62-4.08l3.2-6.48a7.46 7.46 0 0 1 13.41-.08z"
        fill="#fee374"
      />
      <path
        d="M754.98 784.66c0 2.31-13.2.35-14.63 2.5-1.2 1.79 6.07 11.08 4 12.72-1.72 1.36-4.73 2.34-7 3.57-2 1.07-5.35.13-7.69 1.08-2.11.86-5.28-.91-7.67-.15-2.19.7-5.35-2.45-7.75-1.85s-4.33 1-6.74 1.45-3.43 7.31-5.85 7.67-5.65-7.79-8.08-7.52-3.79 9.64-6.22 9.81-4.85-1-7.27-.88-4.78-7.49-7.2-7.49-5 13.15-7.39 13.07-4.7-4.84-7.05-5-4.64-2.54-7-2.8-4-6-6.28-6.35-4.68.18-7-.27-6.6 7.49-8.85 6.92-3.27-6.47-5.47-7.17c-2.38-.75-2.86-5.52-5-6.38-2.35-1-7.06 4.2-9 3.13-2.27-1.23-3.72-3.35-5.44-4.71-2.09-1.64 2.07-7 .88-8.8-1.44-2.15-8.86-.23-8.86-2.54a12.61 12.61 0 0 1 2.57-6.75c1.2-1.79 6.54 1.13 8.63-.51 1.72-1.35-.19-7.83 2.09-9.06 2-1.07 1.65-8.39 4-9.34 2.11-.86 5.64.42 8-.34 2.2-.7 4.79-1.48 7.19-2.08s4.61-2.34 7-2.81 5.94 5.83 8.36 5.47 3.89-7.81 6.32-8.07 5.63 8.87 8.05 8.7 4.78 3.45 7.2 3.37 4.54-6.47 7-6.47 4.79.72 7.15.8 5.19-5.57 7.54-5.4 4.38 6.1 6.72 6.35 5.08-1.43 7.39-1.09 3.61 7.06 5.9 7.51 4.77-.15 7 .41c2.41.61 5.12-.85 7.32-.16 2.38.76 3.44 4.13 5.55 5 2.35 1 7.35-4.33 9.32-3.26a50.4 50.4 0 0 1 6.6 3.76c2.09 1.64 6 2.85 7.22 4.65 1.47 2.13 4.44 6.98 4.44 9.31z"
        fill="#ededf4"
      />
      <path
        d="M857.98 784.66c0 2.31-13.2.35-14.63 2.5-1.2 1.79 6.07 11.08 4 12.72-1.72 1.36-4.73 2.34-7 3.57-2 1.07-5.35.13-7.69 1.08-2.11.86-5.28-.91-7.67-.15-2.19.7-5.35-2.45-7.75-1.85s-4.33 1-6.74 1.45-3.43 7.31-5.85 7.67-5.65-7.79-8.08-7.52-3.79 9.64-6.22 9.81-4.85-1-7.27-.88-4.78-7.49-7.2-7.49-5 13.15-7.39 13.07-4.7-4.84-7.05-5-4.64-2.54-7-2.8-4-6-6.28-6.35-4.68.18-7-.27-6.6 7.49-8.85 6.92-3.27-6.47-5.47-7.17c-2.38-.75-2.86-5.52-5-6.38-2.35-1-7.06 4.2-9 3.13-2.27-1.23-3.72-3.35-5.44-4.71-2.09-1.64 2.07-7 .88-8.8-1.44-2.15-8.86-.23-8.86-2.54a12.61 12.61 0 0 1 2.57-6.75c1.2-1.79 6.54 1.13 8.63-.51 1.72-1.35-.19-7.83 2.09-9.06 2-1.07 1.65-8.39 4-9.34 2.11-.86 5.64.42 8-.34 2.2-.7 4.79-1.48 7.19-2.08s4.61-2.34 7-2.81 5.94 5.83 8.36 5.47 3.89-7.81 6.32-8.07 5.63 8.87 8.05 8.7 4.78 3.45 7.2 3.37 4.54-6.47 7-6.47 4.79.72 7.15.8 5.19-5.57 7.54-5.4 4.38 6.1 6.72 6.35 5.08-1.43 7.39-1.09 3.61 7.06 5.9 7.51 4.77-.15 7 .41c2.41.61 5.12-.85 7.32-.16 2.38.76 3.44 4.13 5.55 5 2.35 1 7.35-4.33 9.32-3.26a50.4 50.4 0 0 1 6.6 3.76c2.09 1.64 6 2.85 7.22 4.65 1.47 2.13 4.44 6.98 4.44 9.31zM583.98 780.66c0 2.31-13.2.35-14.63 2.5-1.2 1.79 6.07 11.08 4 12.72-1.72 1.36-4.73 2.34-7 3.57-2 1.07-5.35.13-7.69 1.08-2.11.86-5.28-.91-7.67-.15-2.19.7-5.35-2.45-7.75-1.85s-4.33 1-6.74 1.45-3.43 7.31-5.85 7.67-5.65-7.79-8.08-7.52-3.79 9.64-6.22 9.81-4.85-1-7.27-.88-4.78-7.49-7.2-7.49-5 13.15-7.39 13.07-4.7-4.84-7.05-5-4.64-2.54-7-2.8-4-6-6.28-6.35-4.68.18-7-.27-6.6 7.49-8.85 6.92c-2.4-.6-3.27-6.47-5.47-7.17-2.38-.75-2.86-5.52-5-6.38-2.35-1-7.06 4.2-9 3.13-2.27-1.23-3.72-3.35-5.44-4.71-2.09-1.64 2.07-7 .88-8.8-1.44-2.15-8.86-.23-8.86-2.54a12.61 12.61 0 0 1 2.57-6.75c1.2-1.79 6.54 1.13 8.63-.51 1.72-1.35-.19-7.83 2.09-9.06 2-1.07 1.65-8.39 4-9.34 2.11-.86 5.64.42 8-.34 2.2-.7 4.79-1.48 7.19-2.08s4.61-2.34 7-2.81 5.94 5.83 8.36 5.47 3.89-7.81 6.32-8.07 5.63 8.87 8.05 8.7 4.78 3.45 7.2 3.37 4.54-6.47 7-6.47 4.79.72 7.15.8 5.19-5.57 7.54-5.4 4.38 6.1 6.72 6.35 5.08-1.43 7.39-1.09 3.61 7.06 5.9 7.51 4.77-.15 7 .41c2.41.61 5.12-.85 7.32-.16 2.38.76 3.44 4.13 5.55 5 2.35 1 7.35-4.33 9.32-3.26a50.4 50.4 0 0 1 6.6 3.76c2.09 1.64 6 2.85 7.22 4.65 1.47 2.13 4.44 6.98 4.44 9.31z"
        fill="#ededf4"
      />
      <path
        d="M496.98 778.66c0 2.31-13.2.35-14.63 2.5-1.2 1.79 6.07 11.08 4 12.72-1.72 1.36-4.73 2.34-7 3.57-2 1.07-5.35.13-7.69 1.08-2.11.86-5.28-.91-7.67-.15-2.19.7-5.35-2.45-7.75-1.85s-4.33 1-6.74 1.45-3.43 7.31-5.85 7.67-5.65-7.79-8.08-7.52-3.79 9.64-6.22 9.81-4.85-1-7.27-.88-4.78-7.49-7.2-7.49-5 13.15-7.39 13.07-4.7-4.84-7.05-5-4.64-2.54-7-2.8-4-6-6.28-6.35-4.68.18-7-.27-6.6 7.49-8.85 6.92c-2.4-.6-3.27-6.47-5.47-7.17-2.38-.75-2.86-5.52-5-6.38-2.35-1-7.06 4.2-9 3.13-2.27-1.23-3.72-3.35-5.44-4.71-2.09-1.64 2.07-7 .88-8.8-1.44-2.15-8.86-.23-8.86-2.54a12.61 12.61 0 0 1 2.57-6.75c1.2-1.79 6.54 1.13 8.63-.51 1.72-1.35-.19-7.83 2.09-9.06 2-1.07 1.65-8.39 4-9.34 2.11-.86 5.64.42 8-.34 2.2-.7 4.79-1.48 7.19-2.08s4.61-2.34 7-2.81 5.94 5.83 8.36 5.47 3.89-7.81 6.32-8.07 5.63 8.87 8 8.7 4.78 3.45 7.2 3.37 4.54-6.47 7-6.47 4.79.72 7.15.8 5.19-5.57 7.54-5.4 4.38 6.1 6.72 6.35 5.08-1.43 7.39-1.09 3.61 7.06 5.9 7.51 4.77-.15 7 .41c2.41.61 5.12-.85 7.32-.16 2.38.76 3.44 4.13 5.55 5 2.35 1 7.35-4.33 9.32-3.26a50.4 50.4 0 0 1 6.6 3.76c2.09 1.64 6 2.85 7.22 4.65 1.52 2.13 4.49 6.98 4.49 9.31z"
        fill="#ededf4"
      />
      <path
        fill="#ff6f61"
        d="M423.6 733.92v21.75l-5.75 11.6-.18.37-15.23-1-5.85-.39-13.59-.9v-26.02l13.59.38 6.07.17 15.37.44 5.57-6.4z"
      />
      <path
        opacity={0.1}
        d="M423.6 735.2v20.47l-1.4 2.84-1.45 2.9-2.9 5.86.33-21.75.06-4.39 2.76-3.06 1.21-1.33 1.39-1.54z"
      />
      <path
        fill="#ff6f61"
        d="M424.38 728.14v7.6l-.78 1.24-1.39 2.22-1.24 1.97-2.73 4.35h-.06l-36.37-1.87v-7.5l.09-.1 4.34-4.69 1.57-1.71 2.85-3.07 33.72 1.56z"
      />
      <path opacity={0.1} d="M418.24 738.03v7.49l-36.43-1.87v-7.5l.09-.1 36.34 1.98z" />
      <path opacity={0.15} d="M424.38 728.14v7.6l-6.14 9.78v-7.49l6.14-9.89z" />
      <path
        fill="#3f3d56"
        d="M422.21 731.63v7.57l-.01 19.31-1.45 2.9.22-20.24.03-3.1.05-4.57-34.81-2.14 1.57-1.71 34.4 1.98z"
      />
      <path fill="#3f3d56" d="M405.13 731.89l-2.44 5.29-.03 2.7-.22 26.76-5.85-.39v-29.42l3.12-4.94h5.42z" />
      <path
        d="M397.09 732.24a7.71 7.71 0 0 1-4.36.16 1.77 1.77 0 0 1-.77-.36 2 2 0 0 1-.47-.94 7.52 7.52 0 0 1-.42-2.24 2.49 2.49 0 0 1 .94-2 2.33 2.33 0 0 0 .35-.27 1.55 1.55 0 0 0 .28-.56c.42-1.27 1.25-2.61 2.57-2.82s2.34.67 3.28 1.47l2.07 1.76a3.27 3.27 0 0 1 6.09-.08 11.62 11.62 0 0 1 4.6-3.16 1.47 1.47 0 0 1 1.21 0 1.36 1.36 0 0 1 .48.65 9.85 9.85 0 0 1 .9 3.92.7.7 0 0 1 .8.28 1.73 1.73 0 0 1 .26.86 11.44 11.44 0 0 1 .09 1.43 2.12 2.12 0 0 1-.38 1.42 2.31 2.31 0 0 1-1.8.56.73.73 0 0 1-.18 1.07 2.1 2.1 0 0 1-1.21.24 8.39 8.39 0 0 1-4.66-1c-.53-.35-1-.82-1.51-1.17a7.3 7.3 0 0 0-4.43-.83c-1.36.05-2.44 1.18-3.73 1.61z"
        fill="#3f3d56"
      />
      <path
        d="M396.85 731.89s-13.43 1.87-15.3 10l2.81-.42 2 3.54s2.09-7.91 8.23-9.78a69.18 69.18 0 0 1 8.26-2.2s4.27 1 8.12 13.43l2.19-3 3.85.83s-2.81-9.68-10.41-12.38z"
        fill="#3f3d56"
      />
      <path
        fill={primaryColor}
        d="M467.7 731.93v32.11l-8.49 17.13-.27.54-22.47-1.48-8.64-.58-20.05-1.32v-38.41l20.05.57 8.97.25 22.68.64 8.22-9.45z"
      />
      <path
        opacity={0.1}
        d="M467.7 733.83v30.21l-2.08 4.19-2.12 4.28v.01l-4.29 8.65.48-32.11.1-6.48 4.07-4.51 1.78-1.97 2.06-2.27z"
      />
      <path
        fill={primaryColor}
        d="M468.85 723.4v11.22l-1.15 1.84-2.06 3.28-1.83 2.9-4.02 6.42h-.1l-53.68-2.76v-11.07l.14-.14 6.41-6.94 2.32-2.51 4.19-4.54 49.78 2.3z"
      />
      <path opacity={0.1} d="M459.79 738v11.06l-53.78-2.76v-11.07l.14-.14 53.64 2.91z" />
      <path opacity={0.15} d="M468.85 723.4v11.22l-9.06 14.44V738l9.06-14.6z" />
      <path
        fill="#3f3d56"
        d="M465.64 728.57v11.17l-.02 28.49-2.12 4.28.31-29.87.05-4.57.08-6.75-51.38-3.17 2.32-2.51 50.76 2.93z"
      />
      <path fill="#3f3d56" d="M440.43 728.93l-3.6 7.82-.03 3.99-.33 39.49-8.64-.58v-43.42l4.61-7.3h7.99z" />
      <path
        d="M428.57 729.46a11.48 11.48 0 0 1-6.44.23 2.72 2.72 0 0 1-1.13-.52 3.06 3.06 0 0 1-.7-1.39 10.76 10.76 0 0 1-.61-3.31 3.67 3.67 0 0 1 1.37-3 3.45 3.45 0 0 0 .53-.39 2.21 2.21 0 0 0 .4-.83c.63-1.87 1.85-3.86 3.81-4.16s3.45 1 4.84 2.17l3 2.6a4.82 4.82 0 0 1 9-.12 17.06 17.06 0 0 1 6.79-4.66 2.09 2.09 0 0 1 1.79-.07 2.06 2.06 0 0 1 .71.95 14.66 14.66 0 0 1 1.32 5.79 1 1 0 0 1 1.18.41 2.67 2.67 0 0 1 .39 1.27 18.52 18.52 0 0 1 .12 2.11 3.18 3.18 0 0 1-.55 2.1 3.46 3.46 0 0 1-2.66.82 1.07 1.07 0 0 1-.27 1.58 3 3 0 0 1-1.79.35c-2.37 0-4.9-.09-6.88-1.41-.78-.52-1.43-1.21-2.21-1.73-1.92-1.27-4.33-1.33-6.55-1.23-1.96.14-3.55 1.8-5.46 2.44z"
        fill="#3f3d56"
      />
      <path
        d="M428.14 728.94s-19.82 2.76-22.59 14.75l4.15-.62 2.92 5.23s3.07-11.68 12.14-14.45 12.29-3.22 12.29-3.22 6.3 1.53 12 19.82l3.23-4.46 5.68 1.23s-4.15-14.29-15.36-18.28z"
        fill="#3f3d56"
      />
      <path
        d="M475.64 774.66c0 1.95-7.75-.23-10.53 1.43-1.76 1-.78 8.55-3.44 9.43-2.1.69-4.83.9-7.4 1.46-2.24.49-5-.46-7.52-.09-2.31.34-4.92-1.06-7.43-.83-2.35.21-4.83-2-7.33-1.93s-4.66.12-7.14.12-4.94 4-7.31 3.9-4.49-5.5-6.83-5.71c-2.52-.23-5.51 5.16-7.81 4.83-2.54-.37-4.85-1.57-7.09-2.05-2.57-.56-3.49-5.68-5.59-6.37-2.66-.87-8.21 5.56-10 4.51-2.78-1.66-3.31-6.75-3.31-8.7s2.68-3.43 5.47-5.1c1.75-1 5 1.25 7.64.38 2.1-.7 3.95-1.77 6.53-2.33 2.23-.49 3.64-6.19 6.17-6.56 2.31-.33 5.14 2.71 7.65 2.48 2.35-.21 4.84 2.3 7.33 2.2s4.64-4.28 7.12-4.28 4.89.67 7.27.78 4.52 4.47 6.87 4.69c2.51.22 5.39-4.37 7.69-4 2.54.37 4.91 1 7.14 1.5 2.58.56 3.79 4.68 5.9 5.37 2.65.87 6.24-1.94 8-.89 2.81 1.62 7.95 3.81 7.95 5.76z"
        fill="#ededf4"
      />
      <path
        d="M530.64 766.66c0 1.95-7.75-.23-10.53 1.43-1.76 1-.78 8.55-3.44 9.43-2.1.69-4.83.9-7.4 1.46-2.24.49-5-.46-7.52-.09-2.31.34-4.92-1.06-7.43-.83-2.35.21-4.83-2-7.33-1.93s-4.66.12-7.14.12-4.94 4-7.31 3.9-4.49-5.5-6.83-5.71c-2.52-.23-5.51 5.16-7.81 4.83-2.54-.37-4.85-1.57-7.09-2.05-2.57-.56-3.49-5.68-5.59-6.37-2.66-.87-8.21 5.56-10 4.51-2.78-1.66-3.31-6.75-3.31-8.7s2.68-3.43 5.47-5.1c1.75-1 5 1.25 7.64.38 2.1-.7 3.95-1.77 6.53-2.33 2.23-.49 3.64-6.19 6.17-6.56 2.31-.33 5.14 2.71 7.65 2.48 2.35-.21 4.84 2.3 7.33 2.2s4.64-4.28 7.12-4.28 4.89.67 7.27.78 4.52 4.47 6.87 4.69c2.51.22 5.39-4.37 7.69-4 2.54.37 4.91 1 7.14 1.5 2.58.56 3.79 4.68 5.9 5.37 2.65.87 6.24-1.94 8-.89 2.81 1.62 7.95 3.81 7.95 5.76z"
        fill="#ededf4"
      />
      <path
        d="M646.98 781.66c0 2.31-13.2.35-14.63 2.5-1.2 1.79 6.07 11.08 4 12.72-1.72 1.36-4.73 2.34-7 3.57-2 1.07-5.35.13-7.69 1.08-2.11.86-5.28-.91-7.67-.15-2.19.7-5.35-2.45-7.75-1.85s-4.33 1-6.74 1.45-3.43 7.31-5.85 7.67-5.65-7.79-8.08-7.52-3.79 9.64-6.22 9.81-4.85-1-7.27-.88-4.78-7.49-7.2-7.49-5 13.15-7.39 13.07-4.7-4.84-7.05-5-4.64-2.54-7-2.8-4-6-6.28-6.35-4.68.18-7-.27-6.6 7.49-8.85 6.92-3.27-6.47-5.47-7.17c-2.38-.75-2.86-5.52-5-6.38-2.35-1-7.06 4.2-9 3.13-2.27-1.23-3.72-3.35-5.44-4.71-2.09-1.64 2.07-7 .88-8.8-1.44-2.15-8.86-.23-8.86-2.54a12.61 12.61 0 0 1 2.57-6.75c1.2-1.79 6.54 1.13 8.63-.51 1.72-1.35-.19-7.83 2.09-9.06 2-1.07 1.65-8.39 4-9.34 2.11-.86 5.64.42 8-.34 2.2-.7 4.79-1.48 7.19-2.08s4.61-2.34 7-2.81 5.94 5.83 8.36 5.47 3.89-7.81 6.32-8.07 5.63 8.87 8.05 8.7 4.78 3.45 7.2 3.37 4.54-6.47 7-6.47 4.79.72 7.15.8 5.19-5.57 7.54-5.4 4.38 6.1 6.72 6.35 5.08-1.43 7.39-1.09 3.61 7.06 5.9 7.51 4.77-.15 7 .41c2.41.61 5.12-.85 7.32-.16 2.38.76 3.44 4.13 5.55 5 2.35 1 7.35-4.33 9.32-3.26a50.4 50.4 0 0 1 6.6 3.76c2.09 1.64 6 2.85 7.22 4.65 1.47 2.13 4.44 6.98 4.44 9.31z"
        fill="#ededf4"
      />
      <path
        fill="#ff6f61"
        d="M796.8 675.26v46.2l-12.22 24.64-.38.78-32.33-2.13-12.44-.83-28.84-1.9v-55.26l28.84.81 12.91.36 32.63.93 11.83-13.6z"
      />
      <path
        opacity={0.1}
        d="M796.8 677.99v43.47l-2.99 6.02-3.06 6.17-6.17 12.45.69-46.2.14-9.32 5.87-6.49 2.56-2.83 2.96-3.27z"
      />
      <path
        fill="#ff6f61"
        d="M798.46 662.99v16.14l-1.66 2.64-2.96 4.72-2.63 4.18-5.8 9.24-.14-.01-77.22-3.97v-15.92l.19-.21 9.22-9.98 3.34-3.61 6.04-6.53 71.62 3.31z"
      />
      <path opacity={0.1} d="M785.41 683.99v15.92l-77.36-3.98v-15.92l.19-.21 77.17 4.19z" />
      <path opacity={0.15} d="M798.46 662.99v16.14l-13.05 20.78v-15.92l13.05-21z" />
      <path
        fill="#3f3d56"
        d="M793.84 670.42v16.07l-.03 40.99-3.06 6.17.46-42.98.07-6.58.1-9.71-73.92-4.56 3.34-3.61 73.04 4.21z"
      />
      <path fill="#3f3d56" d="M757.56 670.95l-5.18 11.25-.04 5.73-.47 56.82-12.44-.83v-62.47l6.64-10.5h11.49z" />
      <path
        d="M740.5 671.71a16.4 16.4 0 0 1-9.26.33 3.88 3.88 0 0 1-1.63-.76 4.23 4.23 0 0 1-1-2 15.66 15.66 0 0 1-.89-4.77 5.33 5.33 0 0 1 2-4.25 4.71 4.71 0 0 0 .76-.57 3.1 3.1 0 0 0 .58-1.18c.9-2.7 2.66-5.55 5.48-6 2.59-.4 5 1.42 7 3.12l4.39 3.74a6.94 6.94 0 0 1 12.93-.17 24.58 24.58 0 0 1 9.78-6.71 3 3 0 0 1 2.56-.1 2.89 2.89 0 0 1 1 1.37 21.2 21.2 0 0 1 1.9 8.33 1.47 1.47 0 0 1 1.7.58 4 4 0 0 1 .56 1.84 23.57 23.57 0 0 1 .17 3 4.52 4.52 0 0 1-.79 3c-.9 1-2.45 1.16-3.82 1.19a1.54 1.54 0 0 1-.4 2.27 4.4 4.4 0 0 1-2.57.5c-3.42 0-7.05-.13-9.9-2-1.12-.75-2.06-1.74-3.19-2.49-2.75-1.82-6.22-1.91-9.41-1.76-2.91.18-5.2 2.57-7.95 3.49z"
        fill="#3f3d56"
      />
      <path
        d="M739.85 670.95s-28.52 4-32.5 21.22l6-.88 4.2 7.52s4.42-16.8 17.46-20.78 17.69-4.64 17.69-4.64 9.06 2.21 17.24 28.51l4.64-6.41 8.18 1.77s-6-20.56-22.1-26.31z"
        fill="#3f3d56"
      />
      <path
        fill={primaryColor}
        d="M756.95 693.33v62.41l-16.5 33.28-.52 1.05-43.68-2.88-16.79-1.11-38.96-2.58v-74.64l38.96 1.09 17.43.5 44.09 1.24 15.97-18.36z"
      />
      <path
        opacity={0.1}
        d="M756.95 697.01v58.73l-4.03 8.13-4.13 8.33v.01l-8.34 16.81.93-62.41.19-12.59 7.93-8.76v-.01l3.45-3.82 4-4.42z"
      />
      <path
        fill={primaryColor}
        d="M759.19 676.76v21.79l-2.24 3.57-4 6.38-3.55 5.64-7.83 12.48-.19-.01-104.32-5.36v-21.5l.27-.29 12.45-13.48 4.51-4.88 8.15-8.82 96.75 4.48z"
      />
      <path opacity={0.1} d="M741.57 705.12v21.5l-104.51-5.37v-21.5l.27-.29 104.24 5.66z" />
      <path opacity={0.15} d="M759.19 676.76v21.79l-17.62 28.07v-21.5l17.62-28.36z" />
      <path
        fill="#3f3d56"
        d="M752.96 686.79l-.01 14.64v7.07l-.03 55.37-4.13 8.33.61-58.06.1-8.88v-.01l.14-13.11-99.86-6.16 4.51-4.88 98.67 5.69z"
      />
      <path fill="#3f3d56" d="M703.95 687.5l-7 15.2-.06 7.75-.64 76.74-16.79-1.11v-84.39l8.96-14.19h15.53z" />
      <path
        d="M680.91 688.53a22.24 22.24 0 0 1-12.52.44 5 5 0 0 1-2.19-1 5.69 5.69 0 0 1-1.36-2.69 21.31 21.31 0 0 1-1.2-6.44 7.19 7.19 0 0 1 2.68-5.75 5.88 5.88 0 0 0 1-.76 4.34 4.34 0 0 0 .78-1.6c1.23-3.65 3.6-7.5 7.4-8.08 3.51-.54 6.71 1.91 9.41 4.21l5.93 5a9.37 9.37 0 0 1 17.47-.24 33.22 33.22 0 0 1 13.2-9.06c1.12-.42 2.44-.76 3.47-.13a3.9 3.9 0 0 1 1.38 1.85 28.58 28.58 0 0 1 2.57 11.25 2 2 0 0 1 2.29.79 5.19 5.19 0 0 1 .76 2.48 34.93 34.93 0 0 1 .24 4.09 6.17 6.17 0 0 1-1.07 4.09c-1.22 1.41-3.31 1.56-5.17 1.6.9.8.46 2.4-.53 3.07a5.94 5.94 0 0 1-3.47.67c-4.62 0-9.53-.17-13.37-2.74-1.52-1-2.79-2.36-4.31-3.36-3.73-2.47-8.41-2.59-12.72-2.38-3.87.21-6.97 3.49-10.67 4.69z"
        fill="#3f3d56"
      />
      <path
        d="M680.06 687.51s-38.52 5.37-43.89 28.66l8.06-1.19 5.67 10.15s6-22.69 23.59-28.07 23.89-6.27 23.89-6.27 12.24 3 23.29 38.52l6.27-8.66 11 2.39s-8.06-27.77-29.86-35.53zM819.46 724.33v38.62l-10.21 20.6-.32.66-27.03-1.79-10.4-.69-24.11-1.59v-46.2l24.11.68 10.79.3 27.29.77 9.88-11.36z"
        fill="#3f3d56"
      />
      <path
        opacity={0.1}
        d="M819.46 726.61v36.34l-2.49 5.04-2.56 5.15v.01l-5.16 10.4.58-38.62.12-7.79 4.9-5.43 2.14-2.37 2.47-2.73z"
      />
      <path
        fill="#3f3d56"
        d="M820.85 714.07v13.49l-1.39 2.21-2.47 3.95-2.2 3.49-4.84 7.72h-.12l-64.57-3.32V728.3l.16-.17 7.71-8.35 2.79-3.02 5.05-5.46 59.88 2.77z"
      />
      <path opacity={0.1} d="M809.95 731.63v13.3l-64.69-3.32V728.3l.16-.17 64.53 3.5z" />
      <path opacity={0.15} d="M820.85 714.07v13.49l-10.9 17.37v-13.3l10.9-17.56z" />
      <path
        fill={primaryColor}
        d="M817 720.28l-.01 9.06v4.38l-.02 34.27-2.56 5.15.38-35.93.06-5.5.09-8.12-61.81-3.81 2.79-3.02 61.08 3.52z"
      />
      <path fill={primaryColor} d="M786.66 720.72l-4.33 9.41-.04 4.79-.39 47.5-10.4-.69V729.5l5.55-8.78h9.61z" />
      <path
        d="M772.4 721.33a13.73 13.73 0 0 1-7.75.27 3.21 3.21 0 0 1-1.36-.63 3.58 3.58 0 0 1-.84-1.67 13.27 13.27 0 0 1-.74-4 4.44 4.44 0 0 1 1.66-3.56 4.13 4.13 0 0 0 .63-.47 2.7 2.7 0 0 0 .49-1c.75-2.26 2.22-4.64 4.58-5 2.17-.33 4.14 1.19 5.82 2.61l3.67 3.13a5.8 5.8 0 0 1 10.81-.15 20.55 20.55 0 0 1 8.17-5.61 2.5 2.5 0 0 1 2.15-.08 2.47 2.47 0 0 1 .85 1.15 17.62 17.62 0 0 1 1.6 7 1.2 1.2 0 0 1 1.41.49 3.16 3.16 0 0 1 .47 1.53 21.47 21.47 0 0 1 .15 2.53 3.79 3.79 0 0 1-.66 2.53c-.75.88-2 1-3.2 1a1.29 1.29 0 0 1-.33 1.9 3.74 3.74 0 0 1-2.15.41c-2.86 0-5.9-.1-8.28-1.69-.93-.63-1.72-1.46-2.66-2.08-2.31-1.53-5.2-1.6-7.87-1.48-2.41.13-4.33 2.13-6.62 2.87z"
        fill={primaryColor}
      />
      <path
        d="M771.85 720.72s-23.84 3.33-27.16 17.75l5-.74 3.51 6.28s3.7-14 14.6-17.37 14.78-3.88 14.78-3.88 7.58 1.85 14.42 23.84l3.88-5.36 6.84 1.48s-5-17.19-18.48-22z"
        fill={primaryColor}
      />
      <path
        d="M694.64 781.66c0 1.95-7.75-.23-10.53 1.43-1.76 1-.78 8.55-3.44 9.43-2.1.69-4.83.9-7.4 1.46-2.24.49-5-.46-7.52-.09-2.31.34-4.92-1.06-7.43-.83-2.35.21-4.83-2-7.33-1.93s-4.66.12-7.14.12-4.94 4-7.31 3.9-4.49-5.5-6.83-5.71c-2.52-.23-5.51 5.16-7.81 4.83-2.54-.37-4.85-1.57-7.09-2.05-2.57-.56-3.49-5.68-5.59-6.37-2.66-.87-8.21 5.56-10 4.51-2.78-1.66-3.31-6.75-3.31-8.7s2.68-3.43 5.47-5.1c1.75-1 5 1.25 7.64.38 2.1-.7 3.95-1.77 6.53-2.33 2.23-.49 3.64-6.19 6.17-6.56 2.31-.33 5.14 2.71 7.65 2.48 2.35-.21 4.84 2.3 7.33 2.2s4.64-4.28 7.12-4.28 4.89.67 7.27.78 4.52 4.47 6.87 4.69c2.51.22 5.39-4.37 7.69-4 2.54.37 4.91 1 7.14 1.5 2.58.56 3.79 4.68 5.9 5.37 2.65.87 6.24-1.94 8-.89 2.81 1.62 7.95 3.81 7.95 5.76z"
        fill="#ededf4"
      />
      <path
        d="M758.64 781.66c0 1.95-7.75-.23-10.53 1.43-1.76 1-.78 8.55-3.44 9.43-2.1.69-4.83.9-7.4 1.46-2.24.49-5-.46-7.52-.09-2.31.34-4.92-1.06-7.43-.83-2.35.21-4.83-2-7.33-1.93s-4.66.12-7.14.12-4.94 4-7.31 3.9-4.49-5.5-6.83-5.71c-2.52-.23-5.51 5.16-7.81 4.83-2.54-.37-4.85-1.57-7.09-2.05-2.57-.56-3.49-5.68-5.59-6.37-2.66-.87-8.21 5.56-10 4.51-2.78-1.66-3.31-6.75-3.31-8.7s2.68-3.43 5.47-5.1c1.75-1 5 1.25 7.64.38 2.1-.7 3.95-1.77 6.53-2.33 2.23-.49 3.64-6.19 6.17-6.56 2.31-.33 5.14 2.71 7.65 2.48 2.35-.21 4.84 2.3 7.33 2.2s4.64-4.28 7.12-4.28 4.89.67 7.27.78 4.52 4.47 6.87 4.69c2.51.22 5.39-4.37 7.69-4 2.54.37 4.91 1 7.14 1.5 2.58.56 3.79 4.68 5.9 5.37 2.65.87 6.24-1.94 8-.89 2.81 1.62 7.95 3.81 7.95 5.76z"
        fill="#ededf4"
      />
      <path
        d="M833.64 774.66c0 1.95-7.75-.23-10.53 1.43-1.76 1-.78 8.55-3.44 9.43-2.1.69-4.83.9-7.4 1.46-2.24.49-5-.46-7.52-.09-2.31.34-4.92-1.06-7.43-.83-2.35.21-4.83-2-7.33-1.93s-4.66.12-7.14.12-4.94 4-7.31 3.9-4.49-5.5-6.83-5.71c-2.52-.23-5.51 5.16-7.81 4.83-2.54-.37-4.85-1.57-7.09-2.05-2.57-.56-3.49-5.68-5.59-6.37-2.66-.87-8.21 5.56-10 4.51-2.78-1.66-3.31-6.75-3.31-8.7s2.68-3.43 5.47-5.1c1.75-1 5 1.25 7.64.38 2.1-.7 3.95-1.77 6.53-2.33 2.23-.49 3.64-6.19 6.17-6.56 2.31-.33 5.14 2.71 7.65 2.48 2.35-.21 4.84 2.3 7.33 2.2s4.64-4.28 7.12-4.28 4.89.67 7.27.78 4.52 4.47 6.87 4.69c2.51.22 5.39-4.37 7.69-4 2.54.37 4.91 1 7.14 1.5 2.58.56 3.79 4.68 5.9 5.37 2.65.87 6.24-1.94 8-.89 2.81 1.62 7.95 3.81 7.95 5.76z"
        fill="#ededf4"
      />
    </svg>
  );
};

UndrawChristmasTree.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawChristmasTree;