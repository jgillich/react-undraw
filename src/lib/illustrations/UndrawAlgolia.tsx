import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawAlgolia = (_props: any) => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1137.97 736.21" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={442.21} y1={651.25} x2={442.21} y2={380.1} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M1101.8 683.84c-24.34 20.2-59 28.57-92.5 33.84l-5.64.87c-58.57 8.73-118.32 10.51-177.79 12.28-165.87 4.9-332.18 9.8-497.6-1.52-73.16-5-148.13-13.76-212.25-43.7l-1.67-.78-2.49-1.19a225.08 225.08 0 0 1-32.56-19.1c-18.32-13.06-33.43-29-41.42-47.91-12.52-29.66-5.91-63 8.4-92s35.8-55.13 54.34-82.44c5.44-8 10.6-16.3 15.4-24.81 30-53.36 44.88-115.13 13.43-166.56a228.58 228.58 0 0 0-13.43-19c-7.67-10-15.47-20-20.74-31.07-12.3-25.76-9.65-54.73-5.17-82.25 6-36.59 17.05-76 51.38-98.86 35.67-23.74 86.3-22.53 130.57-14 68.83 13.2 132.36 40.8 196.49 65.71s131.3 47.66 201.82 50.11c62.26 2.17 134.89-14 176.23-56.08 40.15-40.84 115.6-43.94 170-19.27 51.91 23.55 85.48 73.37 83 123.13-3.16 62.1-54.93 111.82-95.9 164.69-6.81 8.79-13.34 17.68-19.28 26.72-19.42 29.53-33.15 65-19.78 96.88 7.5 17.85 21.81 31.47 39.06 43.36 38.65 26.63 92 44.55 116 81.83 20.67 32.07 13.01 75.48-17.9 101.12z"
        fill={primaryColor}
        opacity={0.1}
      />
      <g opacity={0.2}>
        <path
          d="M249.71 648.4c.32.65.62 1.3.88 1.94q-9.6 1.18-19.15 1.76a14.29 14.29 0 0 1-9.06.43c-1.89.06-3.79.09-5.67.12a22.87 22.87 0 0 1 0-2.62c.39-6.06 3.17-11.23 8-13.68s10.65-1.63 15.74 1.62a26.56 26.56 0 0 1 9.26 10.43z"
          fill="#3f3d56"
        />
        <path
          d="M237.54 624.38a26.61 26.61 0 0 1 2.93 13.59c-.39 6-3.17 11.21-8 13.66-.34.17-.67.32-1 .47a14.29 14.29 0 0 1-9.06.43 20.21 20.21 0 0 1-5.66-2.5 27.6 27.6 0 0 1-12.17-24c.39-6 3.16-11.23 8-13.68s10.65-1.63 15.74 1.63a26.56 26.56 0 0 1 9.22 10.4z"
          fill="#3f3d56"
        />
        <ellipse cx={241.36} cy={689.85} rx={16.83} ry={22.03} transform="rotate(-26.87 54.4 713.775)" fill="#3f3d56" />
        <ellipse
          cx={229.19}
          cy={665.83}
          rx={16.83}
          ry={22.03}
          transform="rotate(-26.87 42.241 689.74)"
          fill="#3f3d56"
        />
        <ellipse
          cx={217.02}
          cy={641.8}
          rx={16.83}
          ry={22.03}
          transform="rotate(-26.87 30.078 665.728)"
          fill="#3f3d56"
        />
        <path
          d="M46.5 423.99a83 83 0 0 1-9.76-5.4l36.17-26.48-42.51 22A80.74 80.74 0 0 1 .16 357.82l72.29.69L-.02 346.4a80.63 80.63 0 1 1 159.58 20.31 80.66 80.66 0 0 1 14.85 9l-37.73 52.51 45.32-46a80.7 80.7 0 0 1 22.62 73.41 80.62 80.62 0 1 1-113.06 57.28 80.64 80.64 0 0 1-45.06-88.93z"
          fill={primaryColor}
        />
        <path
          d="M197.48 403.38a80.23 80.23 0 0 1 7.14 52.26 80.62 80.62 0 1 1-113.06 57.28c-15.84-7.35 101.83-117.61 105.92-109.54z"
          opacity={0.1}
        />
      </g>
      <g opacity={0.2}>
        <path
          d="M1010.76 655.73c-.15.65-.31 1.28-.5 1.9q-7.58-4.75-14.75-9.93a13.2 13.2 0 0 1-6.74-5c-1.39-1.06-2.77-2.14-4.13-3.22a17.6 17.6 0 0 1 1.54-1.87c3.81-4.12 8.83-6.2 13.73-5.13s8.58 5.06 10.33 10.37a24.53 24.53 0 0 1 .52 12.88z"
          fill="#3f3d56"
        />
        <path
          d="M1016.08 631.4a24.56 24.56 0 0 1-5.84 11.46c-3.81 4.09-8.82 6.18-13.73 5.1-.34-.07-.66-.16-1-.26a13.2 13.2 0 0 1-6.74-5 18.21 18.21 0 0 1-2.59-5.09 25.57 25.57 0 0 1 5.32-24.33c3.81-4.11 8.83-6.19 13.73-5.12s8.58 5.05 10.33 10.36a24.54 24.54 0 0 1 .52 12.88z"
          fill="#3f3d56"
        />
        <ellipse
          cx={1037.21}
          cy={685.64}
          rx={20.37}
          ry={15.56}
          transform="rotate(-77.66 970.883 663.953)"
          fill="#3f3d56"
        />
        <ellipse
          cx={1042.53}
          cy={661.31}
          rx={20.37}
          ry={15.56}
          transform="rotate(-77.66 976.2 639.631)"
          fill="#3f3d56"
        />
        <ellipse
          cx={1047.85}
          cy={636.99}
          rx={20.37}
          ry={15.56}
          transform="rotate(-77.66 981.521 615.303)"
          fill="#3f3d56"
        />
        <path
          d="M996.33 376.2a73.5 73.5 0 0 1-3.84-9.57l41.38 2.18-43.27-9.13a74.6 74.6 0 0 1 11.23-58l51.38 42.74-44.86-51a74.55 74.55 0 1 1 102.45 107.8 74.39 74.39 0 0 1 5.4 15.1l-57.75 15.59 59.35-6.46a74.59 74.59 0 0 1-26.7 65.81 74.55 74.55 0 1 1-114.46-25 74.55 74.55 0 0 1 19.69-90.05z"
          fill={primaryColor}
        />
        <path
          d="M1116.53 449.67a74.14 74.14 0 0 1-25.43 41.61 74.55 74.55 0 1 1-114.46-25c-7.05-14.56 141.68-24.78 139.89-16.61z"
          opacity={0.1}
        />
      </g>
      <path d="M1043.98 83.3H118.5a8.24 8.24 0 0 0-8.24 8.24v24h942v-24a8.24 8.24 0 0 0-8.28-8.24z" fill="#3f3d56" />
      <path
        d="M110.26 115.56v540.55a16.63 16.63 0 0 0 16.62 16.63h908.75a16.63 16.63 0 0 0 16.63-16.63V115.56z"
        fill="#fff"
      />
      <circle cx={125.19} cy={99.18} r={3.85} fill="#fa5959" opacity={0.8} />
      <circle cx={135.79} cy={99.18} r={3.85} fill="#fed253" opacity={0.8} />
      <circle cx={146.38} cy={99.18} r={3.85} fill="#8ccf4d" opacity={0.8} />
      <rect x={219.34} y={328.03} width={723.84} height={316.09} rx={6.13} fill="#3f3d56" opacity={0.1} />
      <rect x={353.91} y={465.5} width={380.35} height={40.41} rx={9.19} fill="#fff" />
      <rect x={758.41} y={466.23} width={50.2} height={40.41} rx={4.61} fill={primaryColor} />
      <path
        d="M787.84 489.11h-.93l-.36-.29a7.74 7.74 0 0 0 1.82-5 7.54 7.54 0 1 0-7.51 7.57 7.8 7.8 0 0 0 4.94-1.8l.35.3v.92l5.81 5.84 1.75-1.75zm-7 0a5.25 5.25 0 1 1 5.23-5.25 5.21 5.21 0 0 1-5.21 5.25z"
        fill="#fff"
      />
      <path
        d="M287.72 208.29h114.37a20.45 20.45 0 0 1 20.44 20.44v114.38a20.45 20.45 0 0 1-20.44 20.43H287.72a20.45 20.45 0 0 1-20.45-20.43V228.68a20.42 20.42 0 0 1 20.45-20.39"
        fill="#5468ff"
        fillRule="evenodd"
      />
      <path
        d="M361.08 242.95v-5.32a6.74 6.74 0 0 0-6.74-6.74h-15.71a6.74 6.74 0 0 0-6.74 6.74v5.48a.93.93 0 0 0 1.17.9 48.72 48.72 0 0 1 13.68-1.9 50.2 50.2 0 0 1 13.24 1.73.9.9 0 0 0 1.13-.89m-43.06 7l-2.69-2.69a6.73 6.73 0 0 0-9.52 0l-3.21 3.21a6.7 6.7 0 0 0 0 9.48l2.64 2.64a1 1 0 0 0 1.42-.09 51.94 51.94 0 0 1 5.14-6 50 50 0 0 1 6.08-5.18.9.9 0 0 0 .15-1.37m28.67 16.9v23a.91.91 0 0 0 1.32.81l20.44-10.55a.93.93 0 0 0 .37-1.27 25.47 25.47 0 0 0-21.22-12.86.94.94 0 0 0-1 .89m0 55.48a30.89 30.89 0 1 1 31-30.89 30.94 30.94 0 0 1-31 30.89m0-74.78a43.87 43.87 0 1 0 43.92 43.84 43.9 43.9 0 0 0-43.92-43.84"
        fill="#fff"
        fillRule="evenodd"
      />
      <path
        d="M576.78 331.44c-30.24.14-30.24-24.4-30.24-28.31v-91.92l18.44-2.92v91.36c0 2.22 0 16.25 11.83 16.29v15.5zm-74.8-15.03a71.37 71.37 0 0 0 12.78-.89v-18.74a37.14 37.14 0 0 0-4.44-.9 44.28 44.28 0 0 0-6.41-.47 39.33 39.33 0 0 0-6.18.47 18.85 18.85 0 0 0-5.61 1.65 10.13 10.13 0 0 0-4 3.39 6.39 6.39 0 0 0-1.51 4.52c0 4.33 1.51 6.83 4.24 8.48s6.47 2.49 11.14 2.49zm-1.61-66.87a45.41 45.41 0 0 1 15.38 2.27 22.06 22.06 0 0 1 15.23 16.53 46.79 46.79 0 0 1 1.6 12.77v47.38c-2.83.61-7.13 1.32-12.88 2.16a133.37 133.37 0 0 1-19.39 1.28 58.57 58.57 0 0 1-13.06-1.37 27.45 27.45 0 0 1-10.14-4.38 21.22 21.22 0 0 1-6.55-7.81 29.67 29.67 0 0 1-2.36-12.43 19.46 19.46 0 0 1 2.64-10.51 22.31 22.31 0 0 1 7.21-7.63 31.14 31.14 0 0 1 10.57-4.24 59.55 59.55 0 0 1 19-.89 55.49 55.49 0 0 1 7.17 1.27v-3a23.12 23.12 0 0 0-.75-6 13 13 0 0 0-2.65-5 12.36 12.36 0 0 0-5-3.39 21.91 21.91 0 0 0-7.88-1.41 66.62 66.62 0 0 0-11.65 1.13 53.88 53.88 0 0 0-8.68 2.11l-2.2-15.21a73.26 73.26 0 0 1 10.19-2.4 76 76 0 0 1 14.29-1.23zM864.6 315.9a70.33 70.33 0 0 0 12.78-.9v-18.74a39.65 39.65 0 0 0-4.44-.9 44.39 44.39 0 0 0-6.41-.47 39.42 39.42 0 0 0-6.18.47 18.85 18.85 0 0 0-5.61 1.65 10.15 10.15 0 0 0-4 3.39 6.42 6.42 0 0 0-1.51 4.53c0 4.32 1.51 6.83 4.25 8.47s6.46 2.5 11.13 2.5zm-1.52-66.79a45.74 45.74 0 0 1 15.38 2.25 22.1 22.1 0 0 1 15.18 16.53 46.9 46.9 0 0 1 1.6 12.77v47.37c-2.82.61-7.12 1.31-12.87 2.17a133.46 133.46 0 0 1-19.39 1.24 59.1 59.1 0 0 1-13.06-1.33 27.45 27.45 0 0 1-10.14-4.38 21.22 21.22 0 0 1-6.55-7.81 29.68 29.68 0 0 1-2.37-12.44 19.45 19.45 0 0 1 2.65-10.5 22.31 22.31 0 0 1 7.21-7.63 31.35 31.35 0 0 1 10.57-4.24 61.19 61.19 0 0 1 12.55-1.27 64 64 0 0 1 6.41.38 54.61 54.61 0 0 1 7.17 1.27v-3a23.06 23.06 0 0 0-.75-6 12.87 12.87 0 0 0-2.65-5 12.36 12.36 0 0 0-5-3.39 21.91 21.91 0 0 0-7.88-1.41 67.72 67.72 0 0 0-11.66 1.13 53.24 53.24 0 0 0-8.68 2.12l-2.21-15.12a73.26 73.26 0 0 1 10.19-2.4 80.36 80.36 0 0 1 14.3-1.31zm-55.38-8.76a11.17 11.17 0 1 0-11.22-11.24 11.21 11.21 0 0 0 11.22 11.21zm9.28 91.09h-18.52v-79.5l18.52-2.91v82.41zm-32.49 0c-30.23.14-30.23-24.4-30.23-28.31v-91.92l18.44-2.92v91.36c0 2.22 0 16.25 11.84 16.29zm-59.95-40.69c0-8-1.75-14.6-5.14-19.21s-8.16-7-14.25-7-10.85 2.3-14.24 7-5.05 11.25-5.05 19.21 1.7 13.46 5.1 18.13 8.16 7 14.24 7a16.68 16.68 0 0 0 14.25-7c3.4-4.71 5.1-10.07 5.1-18.13zm18.86 0a44.61 44.61 0 0 1-2.73 16 38 38 0 0 1-7.78 13.14 34.37 34.37 0 0 1-12.08 8.43 49.17 49.17 0 0 1-15.61 3.11c-3.63-.05-10.85-1.08-15.52-3.11a35 35 0 0 1-12-8.43 38.94 38.94 0 0 1-7.84-13.14 43.76 43.76 0 0 1-2.82-16 50.31 50.31 0 0 1 2.73-17.29 38.26 38.26 0 0 1 7.93-13 35.4 35.4 0 0 1 12.07-8.39 39.21 39.21 0 0 1 15.37-2.96 40.32 40.32 0 0 1 15.42 2.91 33.7 33.7 0 0 1 12.08 8.39 38.83 38.83 0 0 1 7.82 13 48.23 48.23 0 0 1 3 17.29zm-138.8 0c0 7.71 1.69 16.29 5.09 19.86a17.28 17.28 0 0 0 13.16 5.37 28 28 0 0 0 8.3-1.22 23.6 23.6 0 0 0 6.32-2.87v-45.78a73.3 73.3 0 0 0-12.17-1.55 18.38 18.38 0 0 0-15.32 6.93c-3.54 4.38-5.33 12.05-5.33 19.22zm51.27 36.36q0 18.85-9.67 27.59c-6.46 5.84-16.31 8.76-29.62 8.76a126.62 126.62 0 0 1-23-2.73l3-14.6a113 113 0 0 0 20.33 1.79q11.1 0 15.84-4.52c3.17-3 4.72-7.48 4.72-13.42v-3a54.5 54.5 0 0 1-7.21 2.74 36 36 0 0 1-10.28 1.3 38.68 38.68 0 0 1-14-2.41 28.91 28.91 0 0 1-10.8-7.07 32.2 32.2 0 0 1-7-11.67c-1.65-4.67-2.51-13-2.51-19.12 0-5.74.9-12.95 2.65-17.76a33.86 33.86 0 0 1 7.78-12.38 36 36 0 0 1 12.41-8 45.5 45.5 0 0 1 16.74-3.15 100.64 100.64 0 0 1 16.95 1.65 133 133 0 0 1 13.67 2.87v73.13z"
        fill="#5468ff"
        fillRule="evenodd"
      />
      <path
        d="M505.76 627.81c-1-5.71-.51-11.86-3.12-17a3.85 3.85 0 0 0-1.2-1.53 4.17 4.17 0 0 0-2.13-.48c-2.36-.1-4.73-.12-7.09-.07a2.06 2.06 0 0 0-1.79.68l-.09.2c-2.71-3-4.76-6.79-7.67-9.58.41-.14.83-.28 1.25-.39a8.28 8.28 0 0 0-.16-.84c0-.08 0-.16-.06-.25s-.1-.38-.16-.57-.06-.18-.09-.28l-.18-.52c0-.1-.08-.19-.11-.28s-.14-.35-.22-.52a2.72 2.72 0 0 1-.11-.25l-.26-.54a2.26 2.26 0 0 0-.11-.22c-.1-.19-.19-.38-.3-.56a1.62 1.62 0 0 0-.1-.18c-.11-.21-.22-.41-.34-.61a.41.41 0 0 0-.07-.11c-.13-.23-.27-.46-.41-.69-1.13-1.87-2.4-3.7-3.33-5.6-1.63-3.37-2.16-7.16-3.25-10.74s-3-7.22-6.25-8.92c-1.56-.81-3.66-1.51-3.81-3.29a3.69 3.69 0 0 1 .4-1.67 20.24 20.24 0 0 1 1.63-3.3c.23-.39.48-.77.74-1.14l.2-.28c.2-.28.4-.55.62-.82l.26-.33c.21-.25.42-.5.65-.74l.26-.3q.46-.5 1-1a2.41 2.41 0 0 0 .7-.89 2.88 2.88 0 0 0 0-1.06c-.17-2.85 1.34-5.52 3-7.82s3.62-4.48 4.56-7.18c.11-.31.2-.62.28-.93 0-.11.05-.21.07-.31s.1-.43.14-.64 0-.25.05-.37.05-.39.07-.59 0-.26 0-.39a5.63 5.63 0 0 0 0-.58v-.39-.6-.37l-.06-.63v-.35c0-.24-.06-.48-.1-.73v-.24l-.18-1a51 51 0 0 0-1.84-6.25 22.37 22.37 0 0 0-1.52-3.64c.37-.07.74-.16 1.11-.26-.23-.43-.6-.93-.81-1.42a36.88 36.88 0 0 0 5.11-11.09 49.2 49.2 0 0 0 1.05-8.57c.56-8.65 1.11-17.35.4-26v-.33a21.94 21.94 0 0 0 .06-5.61 23.53 23.53 0 0 0-3.15-10.33c-1.93-3.06-5.14-5.75-8.7-6.11a13.16 13.16 0 0 1-1.94 1.79 7.66 7.66 0 0 1-2.26-3.52 19.23 19.23 0 0 0 16.11-16.82c0-.32.06-.64.08-1v-2.43-.31-.87c0-.24-.05-.47-.09-.71v-.15c0-.25-.09-.5-.14-.75v-.07l-.18-.8a19.59 19.59 0 0 0-2.11-5.18 19.68 19.68 0 0 0 1.52-5.57c0-.34.07-.69.09-1v-.66-.33-.95a19.49 19.49 0 0 0-5.4-12.85 12.47 12.47 0 0 0 1-2.06l.21-.63c.06-.2.11-.41.16-.61v-.05c0-.19.09-.39.12-.58a.3.3 0 0 0 0-.1c0-.22.07-.44.1-.67s.05-.47.06-.71a1.55 1.55 0 0 0 0-.22v-.48a2 2 0 0 0 0-.25v-.48-.21a11.85 11.85 0 1 0-23.46 3.1 19.32 19.32 0 0 0-10.71 15.14 19.74 19.74 0 0 0-.11 3.25 19.45 19.45 0 0 0-3 9v1.58a19.45 19.45 0 0 0 7.47 15.37 13.63 13.63 0 0 0 3.78 4 16 16 0 0 1 .6 2.51 7.6 7.6 0 0 1-2.29 6.2c-.43.37-.92.67-1.36 1a2.57 2.57 0 0 0-1.4 0c-5.15 1.62-10.09 4.83-12.47 9.75a17.77 17.77 0 0 0-1.23 3.48l-.29.42a50.19 50.19 0 0 0-6.66 16c-.65 2.91-1.06 5.94-2.42 8.59a8 8 0 0 0-.78 1.74 16.51 16.51 0 0 0-.12 2.82c-.15 1.7-1.13 3.21-1.47 4.88-.19 1-.15 2-.33 3a31.49 31.49 0 0 1-1.86 5c-1.07 2.94-1.06 6.17-1.85 9.2a3 3 0 0 1-.62 1.36 6.83 6.83 0 0 1-2.08 1.12 4.64 4.64 0 0 0-2.09 3.14 14.06 14.06 0 0 0-.07 3.89l.39 5.08c-1.89.56-3.78 1.14-5.67 1.72l-9.32 2.85a27.51 27.51 0 0 0-7.75 3.27 14 14 0 0 0-4.87 5.91 29.49 29.49 0 0 0-1.81 7.74A117.33 117.33 0 0 1 379 575.2c-.19.55-.38 1.09-.59 1.63-.2.54-.41 1.07-.63 1.6 0 .11-.09.22-.14.33-.17.42-.35.85-.54 1.27s-.49 1.07-.74 1.6l21.82 7.27c0 .26.05.54.1.85.75 5.36.38 10.81 1.08 16.17a10.63 10.63 0 0 0 .61 2.62 3.66 3.66 0 0 0-1.14 1.82 9.4 9.4 0 0 0-.11 3.47c.24 2.74.49 5.49.74 8.23a12.71 12.71 0 0 1 0 3c-.28 1.81-1.31 3.39-1.88 5.13s-.55 3.94.89 5a3.59 3.59 0 0 0 3.44.31 8.07 8.07 0 0 0 2.84-2.2c4.4-4.87 6.36-11.47 9.78-17.09a33.63 33.63 0 0 0 2.34-4.08c.46-1.09.76-2.25 1.14-3.37a32.81 32.81 0 0 1 1.89-4.39c.4-.81 2-2.76 1.63-3.67-.56-1.54-6.55-2.91-8-3.38a3.93 3.93 0 0 0-2.93-.14 2 2 0 0 0-.39.26c-.17-2.2-.35-4.4-.52-6.61.89-.07 1.77-.19 2.65-.33 0-1.24-.06-2.5-.09-3.75s-.06-2.3-.08-3.45c-.06-2.79-.12-5.59-.2-8.34a43.55 43.55 0 0 0-.31-4.85c-.34-2.46-1.09-4.85-1.32-7.32a2.73 2.73 0 0 1 1.23-.57 8.87 8.87 0 0 1 2.13-.07h.55a18.3 18.3 0 0 0 8.84-2.43c2.74-1.44 5.29-3.23 8-4.69.34-.19.68-.36 1-.54l.37-.19.64-.31.54-.26.12-.06c1.59-.76 3.2-1.5 4.74-2.32a5.11 5.11 0 0 0 .33.48 3.17 3.17 0 0 0 3.33 1.21c-1.88 4.55-4.1 9-4.67 13.88-.81 7.1 2 14.05 4.81 20.61l8.9 21c1 2.31 2.29 4.92 4.71 5.47a7 7 0 0 0 4.47-.9c4.06-1.93 7.73-4.72 11.46-7.31l.14.11c3.38 2.66 5.48 6.38 7.81 9.92l6.24 10.25a3 3 0 0 0 .25 1.5 8.47 8.47 0 0 0 1.75 2.26 29.58 29.58 0 0 1 7.49 15.35 9.61 9.61 0 0 0 1.24 4.19c1.68 2.32 5.23 2.17 7.75.84a5.09 5.09 0 0 0 1.94-1.59 6.6 6.6 0 0 0 .78-2.43 34.1 34.1 0 0 0 .75-6.44c.02-4.01-1.49-7.92-2.22-11.94zM470 439.39c.43-.3.85-.61 1.26-.94a19.27 19.27 0 0 1-4 6.86c-.42.46-.87.9-1.33 1.32v-.32c-.06-1 0-2.11 0-3.17a13.53 13.53 0 0 0 4.07-3.75zm-35.31 78.91c0-.07.05-.13.07-.2a4 4 0 0 1 .91.94 3.75 3.75 0 0 0 .13 3.39c.53.88 1.47 1.7 1.26 2.71s-1.48 1.4-2.52 1.57c-1.36.22-2.71.48-4.07.75a.2.2 0 0 0 0-.07 10.5 10.5 0 0 0-.45-3.33c2.33-1 3.76-3.38 4.67-5.76z"
        transform="translate(-31.02 -81.89)"
        fill="url(#prefix__a)"
      />
      <path
        d="M445.29 319.98a11.87 11.87 0 1 0-21.88-3.9 19.12 19.12 0 0 0-10.84 18.13 19.08 19.08 0 1 0 35.07 10.41v-.9a19.08 19.08 0 0 0-2.32-23.74z"
        fill="#3f3d56"
      />
      <g opacity={0.1}>
        <path d="M423.25 313.11l.16-.08c0-.21-.06-.42-.09-.62v.13c0 .05-.05.34-.07.57zM450.57 332.49a18.91 18.91 0 0 1-3 8.13v.91a19.08 19.08 0 0 1-38.1 1.54c0 .51-.06 1-.06 1.55a19.08 19.08 0 0 0 38.16 0v-.9a19 19 0 0 0 3-12c.05.27.03.52 0 .77zM446.85 312.35a11.78 11.78 0 0 1-1.56 4.54c.33.34.65.7.95 1.07a11.8 11.8 0 0 0 .63-2.62 12 12 0 0 0-.02-2.99z" />
      </g>
      <path
        d="M368.4 524.68a8.8 8.8 0 0 0 .87 3.12 3.49 3.49 0 0 0 2.53 1.86 5.14 5.14 0 0 0 2.79-.81c1.7-.89 3.46-1.92 4.35-3.62s.73-3.61.59-5.46l-1.14-14.55c-2.75-.07-5.51-.07-8.26.08s-3.19.79-2.81 3.44c.75 5.29.38 10.65 1.08 15.94zM448.98 534.51l6.58 10.6a2.58 2.58 0 0 0 1.42 1.34 2.27 2.27 0 0 0 1.37-.24 17 17 0 0 0 5.45-4.52 10.16 10.16 0 0 0 2.62-4 5.14 5.14 0 0 0-1.31-4.82 16.73 16.73 0 0 0-2.47-1.76c-5.16-3.48-7.5-10.11-12.6-13.69a1.94 1.94 0 0 0-1-.44 2.06 2.06 0 0 0-1.06.35l-7 3.78c-3 1.65-2.06 1.84.23 3.62 3.37 2.62 5.48 6.29 7.77 9.78z"
        fill="#fbbebe"
      />
      <path
        d="M382.6 516.27a4.06 4.06 0 0 0-2.94-.14 3.27 3.27 0 0 0-1.53 2.41c-.18 1-.16 2-.43 2.93a9.81 9.81 0 0 1-2.85 4 4.15 4.15 0 0 1-1.79 1.24c-.94.24-1.94-.2-2.9 0a3.14 3.14 0 0 0-2.29 2.33 9.41 9.41 0 0 0-.12 3.43l.75 8.11a12.38 12.38 0 0 1 0 3c-.28 1.78-1.31 3.35-1.89 5s-.54 3.9.9 5a3.59 3.59 0 0 0 3.44.31 7.94 7.94 0 0 0 2.85-2.17c4.4-4.8 6.37-11.3 9.8-16.85a33.54 33.54 0 0 0 2.34-4c.47-1.08.77-2.22 1.15-3.34a33.78 33.78 0 0 1 1.88-4.32c.41-.8 2-2.72 1.64-3.61-.53-1.49-6.53-2.86-8.01-3.33zM461.98 538.63a8.33 8.33 0 0 1-4.63 4 4.11 4.11 0 0 0-1.58.82 2.46 2.46 0 0 0-.27 2.67 8.59 8.59 0 0 0 1.75 2.24 28.84 28.84 0 0 1 7.51 15.13 9.35 9.35 0 0 0 1.24 4.12c1.68 2.29 5.24 2.14 7.76.84a4.92 4.92 0 0 0 1.94-1.58 6.36 6.36 0 0 0 .79-2.39 34 34 0 0 0 .75-6.35c0-4-1.57-7.88-2.29-11.85-1-5.63-.51-11.69-3.13-16.78a3.76 3.76 0 0 0-1.2-1.5 4.17 4.17 0 0 0-2.13-.48q-3.55-.15-7.11-.06a1.54 1.54 0 0 0-1.52 2.59c1.49 2.84 3.86 5.14 2.12 8.58z"
        fill="#3f3d56"
      />
      <path
        d="M405.75 437.74a3.65 3.65 0 0 0-.86 4.62c.52.87 1.46 1.68 1.26 2.67s-1.49 1.39-2.53 1.55c-9.18 1.46-18.12 4.15-27 6.83l-9.34 2.81a27.7 27.7 0 0 0-7.75 3.23 13.93 13.93 0 0 0-4.89 5.83 29 29 0 0 0-1.81 7.62c-1.4 9.54-3.19 19.18-7.45 27.83l22.6 7.43a33.36 33.36 0 0 0 6.78 1.71 25.7 25.7 0 0 0 6.61-.32c-.14-5.06-.22-10.27-.36-15.33a42.63 42.63 0 0 0-.32-4.78c-.33-2.42-1.09-4.78-1.32-7.21 1-.86 2.56-.65 3.92-.61a18.41 18.41 0 0 0 8.85-2.4c2.75-1.42 5.3-3.18 8-4.63 4.55-2.4 9.73-4 13.2-7.82-1.77 6.74-5.95 12.62-6.76 19.55s2 13.85 4.82 20.32l8.91 20.68c1 2.28 2.29 4.85 4.72 5.4a7.16 7.16 0 0 0 4.47-.89c8.2-3.84 14.76-11.06 23.52-13.37-.65-4.34-4.08-7.92-6-11.85-1.63-3.32-2.17-7-3.26-10.59s-3-7.11-6.26-8.79c-1.56-.8-3.67-1.49-3.82-3.24a3.86 3.86 0 0 1 .35-1.63 21.23 21.23 0 0 1 5.33-7.76 2.28 2.28 0 0 0 .7-.88 2.59 2.59 0 0 0 .05-1c-.16-2.82 1.35-5.45 3-7.71s3.62-4.42 4.57-7.08c1.63-4.57 0-9.58-1.6-14.16a14.2 14.2 0 0 0-2.67-5.18c-2.1-2.25-5.37-2.9-8.42-3.23-9.8-1.13-21.39-3.71-29.24 2.38z"
        fill="#3f3d56"
      />
      <g opacity={0.1}>
        <path d="M443.19 457.75c-1.68 2.26-3.19 4.9-3 7.71a2.59 2.59 0 0 1-.05 1 2.21 2.21 0 0 1-.7.88 21.23 21.23 0 0 0-5.36 7.77 3.86 3.86 0 0 0-.35 1.63 3.14 3.14 0 0 0 2 2.33 21.34 21.34 0 0 1 3.7-4.5 2.28 2.28 0 0 0 .7-.88 2.59 2.59 0 0 0 .05-1c-.16-2.82 1.35-5.45 3-7.71s3.62-4.42 4.57-7.08a14.58 14.58 0 0 0 .24-8c-.07.27-.15.52-.24.78-.94 2.65-2.88 4.8-4.56 7.07zM404.72 439.11a1.92 1.92 0 0 0 1.43-1.3 1.23 1.23 0 0 0 0-.38l-.42.31a3.32 3.32 0 0 0-1.01 1.37zM374.79 502.65a33.36 33.36 0 0 1-6.78-1.71l-20-6.56a57.84 57.84 0 0 1-2.65 6.35l22.62 7.43a33.36 33.36 0 0 0 6.78 1.71 25.7 25.7 0 0 0 6.61-.32c-.06-2.38-.12-4.79-.17-7.2a24.85 24.85 0 0 1-6.41.3zM429.57 524.61a7.1 7.1 0 0 1-4.47.89c-2.43-.55-3.74-3.11-4.72-5.4l-8.91-20.68c-2-4.54-3.94-9.28-4.67-14.12q-.09.51-.15 1c-.82 7 2 13.85 4.82 20.32l8.91 20.68c1 2.28 2.29 4.85 4.72 5.4a7.16 7.16 0 0 0 4.47-.89c8.2-3.84 14.76-11.06 23.52-13.37a17.18 17.18 0 0 0-2.68-6.33c-7.43 2.93-13.5 9.06-20.84 12.5zM413.41 459.55c-3.47 3.8-8.65 5.42-13.2 7.83-2.74 1.44-5.29 3.21-8 4.62a18.41 18.41 0 0 1-8.85 2.4c-1.36 0-2.88-.25-3.92.61.22 2.25.87 4.43 1.24 6.66a12 12 0 0 1 2.68 0 18.41 18.41 0 0 0 8.85-2.4c2.75-1.42 5.3-3.18 8-4.63 3-1.58 6.26-2.83 9.14-4.58a78 78 0 0 0 4.06-10.51z" />
      </g>
      <path
        d="M421.36 366.16a7.47 7.47 0 0 1-2.3 6.12c-.56.46-1.2.82-1.74 1.3a4.7 4.7 0 0 0 .69 7.14c1.8 1.1 4.09.8 6.17.44a36.23 36.23 0 0 0 8.09-2.11 13.53 13.53 0 0 0 6.39-5.23 7.84 7.84 0 0 1-3.64-6.5c-.13-2.59.58-5.53-1.07-7.54s-4.55-1.93-7-1.26c-1.21.33-2.38.79-3.59 1.12-.61.17-2.64.17-3 .62-.73.85.93 4.6 1 5.9z"
        fill="#fbbebe"
      />
      <path
        d="M421.36 366.16a7.47 7.47 0 0 1-2.3 6.12c-.56.46-1.2.82-1.74 1.3a4.7 4.7 0 0 0 .69 7.14c1.8 1.1 4.09.8 6.17.44a36.23 36.23 0 0 0 8.09-2.11 13.53 13.53 0 0 0 6.39-5.23 7.84 7.84 0 0 1-3.64-6.5c-.13-2.59.58-5.53-1.07-7.54s-4.55-1.93-7-1.26c-1.21.33-2.38.79-3.59 1.12-.61.17-2.64.17-3 .62-.73.85.93 4.6 1 5.9z"
        opacity={0.1}
      />
      <circle cx={428.3} cy={352.61} r={13.41} fill="#fbbebe" />
      <path
        d="M385.98 455.48a9 9 0 0 1-1.26 3 14 14 0 0 0-1.6 9.15 9.68 9.68 0 0 0 5.64 7.13 3.88 3.88 0 0 0 3.84-.24c-1.79-2.33-1.88-5.52-1.78-8.45a2.8 2.8 0 0 1 .38-1.57 1 1 0 0 1 1.41-.25 12.91 12.91 0 0 0 1.05 5.38c.28.65.77 1.38 1.48 1.36 1 0 1.3-1.41 1.26-2.43-.16-4.16-.36-8.49-2.37-12.14a14.56 14.56 0 0 1-2-4.08 2.39 2.39 0 0 0-.51-1.43 1.93 1.93 0 0 0-.75-.36c-1.16-.32-3.89-1.34-4.84-.26s.22 3.82.05 5.19z"
        fill="#fbbebe"
      />
      <path
        d="M405.87 384.24c-1.53-.17-2.75 1.24-3.59 2.53a49.09 49.09 0 0 0-6.67 15.82c-.65 2.88-1.06 5.86-2.42 8.47a8.09 8.09 0 0 0-.79 1.72 17 17 0 0 0-.12 2.77c-.15 1.68-1.13 3.17-1.47 4.81-.2 1-.16 2-.33 3a29.85 29.85 0 0 1-1.87 4.91c-1.07 2.9-1.06 6.08-1.84 9.07a3.27 3.27 0 0 1-.62 1.35 7.19 7.19 0 0 1-2.09 1.1 4.53 4.53 0 0 0-2.09 3.09 13.35 13.35 0 0 0-.07 3.84l.61 7.93c.64-.26 1.05-1 1.58-1.42 1-.81 2.4-.63 3.64-.4l1.8.32c1.85.34 3.86.77 5.05 2.22.94-1.47.4-3.64 1.85-4.62.47-.32 1.05-.43 1.55-.71a3.45 3.45 0 0 0 1.58-2.78 10.17 10.17 0 0 0-.46-3.28c2.32-1 3.76-3.33 4.67-5.68a46.83 46.83 0 0 0 2.16-8.77c2.1-11.78 4-23.65 4.2-35.62a17 17 0 0 0-.65-5.94c-.66-1.86-1.62-3.5-3.61-3.73z"
        fill={primaryColor}
      />
      <path
        d="M405.87 384.24c-1.53-.17-2.75 1.24-3.59 2.53a49.09 49.09 0 0 0-6.67 15.82c-.65 2.88-1.06 5.86-2.42 8.47a8.09 8.09 0 0 0-.79 1.72 17 17 0 0 0-.12 2.77c-.15 1.68-1.13 3.17-1.47 4.81-.2 1-.16 2-.33 3a29.85 29.85 0 0 1-1.87 4.91c-1.07 2.9-1.06 6.08-1.84 9.07a3.27 3.27 0 0 1-.62 1.35 7.19 7.19 0 0 1-2.09 1.1 4.53 4.53 0 0 0-2.09 3.09 13.35 13.35 0 0 0-.07 3.84l.61 7.93c.64-.26 1.05-1 1.58-1.42 1-.81 2.4-.63 3.64-.4l1.8.32c1.85.34 3.86.77 5.05 2.22.94-1.47.4-3.64 1.85-4.62.47-.32 1.05-.43 1.55-.71a3.45 3.45 0 0 0 1.58-2.78 10.17 10.17 0 0 0-.46-3.28c2.32-1 3.76-3.33 4.67-5.68a46.83 46.83 0 0 0 2.16-8.77c2.1-11.78 4-23.65 4.2-35.62a17 17 0 0 0-.65-5.94c-.66-1.86-1.62-3.5-3.61-3.73z"
        opacity={0.1}
      />
      <path
        d="M439.67 371.41a16.81 16.81 0 0 1-8.15 4.73 50 50 0 0 1-9.44 1.39 5.75 5.75 0 0 1-2.92-.25 2 2 0 0 1-1.22-2.39 2.58 2.58 0 0 0 .35-.93c0-.82-1.22-.88-2-.64-5.16 1.59-10.11 4.75-12.49 9.6a29 29 0 0 0-2.21 8.84c-1.13 8-2.25 16.07-.74 24 .8 4.2 2.34 8.3 2.44 12.58.05 2.4-.35 4.78-.33 7.18a3.59 3.59 0 0 0 .63 2.37c.37.43.93.71 1.19 1.21.44.85-.14 2 .43 2.78.7.93 2.17.26 3.13-.4a25 25 0 0 1 16.64-4.22c7 .76 14 4.5 20.83 2.63a10.8 10.8 0 0 1-.91-1.62c-3.4-11.17-3.17-23.65 1.92-34.16 1.74-3.59 4-7 4.71-10.94a20.62 20.62 0 0 0 .06-5.55 22.91 22.91 0 0 0-3.15-10.18c-1.99-3.02-5.2-5.68-8.77-6.03z"
        fill={primaryColor}
      />
      <path
        d="M407.24 458.93a12.12 12.12 0 0 0-.77 4.56 25.6 25.6 0 0 0 .22 4.46 7.14 7.14 0 0 0 1.3 3.5 3.23 3.23 0 0 0 3.35 1.19 3.52 3.52 0 0 0 2-2.25 20.75 20.75 0 0 0 .63-3.06c.59-3 2.19-5.9 2.21-9a2.3 2.3 0 0 0-.17-1.07c-.58-1.28-3.42-2.71-4.82-2.49-1.72.26-3.32 2.69-3.95 4.16z"
        fill="#fbbebe"
      />
      <path
        d="M445.98 382.73c-.27 2.66 2.31 4.67 3.33 7.15a12.12 12.12 0 0 1 .71 3.6c.71 8.52.16 17.09-.4 25.63a48.93 48.93 0 0 1-1 8.45c-1.44 5.83-5 10.89-8.45 15.79a12.9 12.9 0 0 1-1.82 2.21 13.42 13.42 0 0 1-3.36 2.06l-12.01 5.76a23.32 23.32 0 0 0-4.23 2.43 11.7 11.7 0 0 0-3.5 4.56c-2.31-1.18-4.71-2.24-7-3.42-.54-.27-1.14-.63-1.23-1.23-.13-.81.71-1.38 1.29-2 1.08-1.07 1.42-2.66 2-4.07 1.92-4.59 6.74-7.53 8.48-12.2.66-1.79.87-3.81 2.05-5.32a13.55 13.55 0 0 1 2.27-2 37.83 37.83 0 0 0 5-5.16 8.75 8.75 0 0 0 1.65-2.41 12.14 12.14 0 0 0 .39-4.22c.09-4.66 2.19-9 3.48-13.47 1.21-4.22 1.72-8.64 3.31-12.72s4.74-8.33 9.04-9.42z"
        opacity={0.1}
      />
      <path
        d="M447.48 382.73c-.27 2.66 2.31 4.67 3.33 7.15a11.8 11.8 0 0 1 .7 3.6c.72 8.52.16 17.09-.39 25.63a48.94 48.94 0 0 1-1.06 8.45c-1.44 5.83-5 10.89-8.45 15.79a10.21 10.21 0 0 1-5.17 4.27l-11.9 5.76a23 23 0 0 0-4.23 2.43 11.61 11.61 0 0 0-3.5 4.56c-2.31-1.18-4.71-2.24-7-3.42-.54-.27-1.14-.63-1.24-1.23-.12-.81.72-1.38 1.3-2 1.08-1.07 1.41-2.66 2-4.07 1.92-4.59 6.74-7.53 8.47-12.2.67-1.79.88-3.81 2.06-5.32a13.55 13.55 0 0 1 2.27-2 38.42 38.42 0 0 0 5-5.16 8.51 8.51 0 0 0 1.64-2.41 11.9 11.9 0 0 0 .39-4.22c.09-4.66 2.2-9 3.49-13.47 1.21-4.22 1.72-8.64 3.31-12.72s4.73-8.33 8.98-9.42z"
        fill={primaryColor}
      />
      <path
        d="M434.98 331.89a19.06 19.06 0 0 0-11.91 2.46c.53 0 1.06.06 1.6.12a19.08 19.08 0 0 1 7.31 35.42 19.08 19.08 0 0 0 3-38z"
        fill="#3f3d56"
      />
      <path
        d="M440.82 342.5a8.74 8.74 0 0 1 .15 6.68 6.32 6.32 0 0 0-.32-.82c-2.35-5.24-9.62-7.41-16.22-4.85a13.35 13.35 0 0 0-7.84 7.47c-1.68-5.07 1.74-10.9 8-13.34 6.6-2.53 13.87-.39 16.23 4.86z"
        fill="#3f3d56"
      />
      <g opacity={0.1}>
        <path d="M440.85 348.76a19.09 19.09 0 0 0-12.75-16.46 19.27 19.27 0 0 0-5.06 2.05c.53 0 1.06.06 1.6.12a19.09 19.09 0 0 1 16.21 14.29zM443.98 334.84a19.11 19.11 0 0 0-12.75-16.46 19.13 19.13 0 0 0-5.06 2.05q.79 0 1.59.12a19.09 19.09 0 0 1 16.22 14.29zM444.03 314.04a11.54 11.54 0 0 0-7.7-9.93 11.64 11.64 0 0 0-3.05 1.24c.32 0 .64 0 1 .07a11.53 11.53 0 0 1 9.75 8.62zM451.16 346.18a19.1 19.1 0 0 1-14.78 20.15 19.15 19.15 0 0 1-4.41 3.56 19.07 19.07 0 0 0 19.19-23.71z" />
      </g>
      <ellipse cx={997.77} cy={687.1} rx={46.49} ry={8.94} fill={primaryColor} />
      <ellipse cx={996.99} cy={683.3} rx={5.41} ry={7.09} fill="#3f3d56" />
      <ellipse cx={996.99} cy={674.64} rx={5.41} ry={7.09} fill="#3f3d56" />
      <ellipse cx={996.99} cy={665.97} rx={5.41} ry={7.09} fill="#3f3d56" />
      <ellipse cx={996.99} cy={657.31} rx={5.41} ry={7.09} fill="#3f3d56" />
      <ellipse cx={996.99} cy={648.65} rx={5.41} ry={7.09} fill="#3f3d56" />
      <ellipse cx={996.99} cy={639.99} rx={5.41} ry={7.09} fill="#3f3d56" />
      <ellipse cx={996.99} cy={631.33} rx={5.41} ry={7.09} fill="#3f3d56" />
      <path
        d="M1017.25 572.11a26.3 26.3 0 0 0 2-3l-14.23-2.33 15.39.11a26 26 0 0 0 .49-20.54l-20.64 10.7 19-14a25.93 25.93 0 1 0-42.83 29 25.91 25.91 0 0 0-3 4.73l18.47 9.59-19.69-6.6a25.91 25.91 0 0 0 4.18 24.34 25.93 25.93 0 1 0 40.76 0 25.92 25.92 0 0 0 0-32.06z"
        fill={primaryColor}
      />
      <path
        d="M970.98 588.11a25.77 25.77 0 0 0 5.55 16 25.93 25.93 0 1 0 40.76 0c3.44-4.4-46.31-18.93-46.31-16z"
        opacity={0.1}
      />
      <ellipse cx={185.77} cy={687.1} rx={46.49} ry={8.94} fill={primaryColor} />
      <ellipse cx={184.99} cy={683.3} rx={5.41} ry={7.09} fill="#3f3d56" />
      <ellipse cx={184.99} cy={674.64} rx={5.41} ry={7.09} fill="#3f3d56" />
      <ellipse cx={184.99} cy={665.97} rx={5.41} ry={7.09} fill="#3f3d56" />
      <ellipse cx={184.99} cy={657.31} rx={5.41} ry={7.09} fill="#3f3d56" />
      <ellipse cx={184.99} cy={648.65} rx={5.41} ry={7.09} fill="#3f3d56" />
      <ellipse cx={184.99} cy={639.99} rx={5.41} ry={7.09} fill="#3f3d56" />
      <ellipse cx={184.99} cy={631.33} rx={5.41} ry={7.09} fill="#3f3d56" />
      <path
        d="M205.25 572.11a26.3 26.3 0 0 0 2-3l-14.23-2.33 15.39.11a26 26 0 0 0 .49-20.54l-20.64 10.7 19-14a25.93 25.93 0 1 0-42.83 29 25.91 25.91 0 0 0-3 4.73l18.55 9.6-19.69-6.6a25.91 25.91 0 0 0 4.2 24.33 25.93 25.93 0 1 0 40.76 0 25.92 25.92 0 0 0 0-32.06z"
        fill={primaryColor}
      />
      <path
        d="M158.98 588.11a25.77 25.77 0 0 0 5.55 16 25.93 25.93 0 1 0 40.76 0c3.44-4.4-46.31-18.93-46.31-16z"
        opacity={0.1}
      />
    </svg>
  );
};

UndrawAlgolia.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawAlgolia;