import React from 'react';

function SvgIconCheckmarkWithBackground(props) {
  return (
    <svg viewBox='0 0 24 24' className='icon-checkmark-with-background_svg__icon-checkmark-with-background' {...props}>
      <path
        className='icon-checkmark-with-secondary'
        d='M31.144 171.84A99.502 99.502 0 1 1 171.841 31.145c37.708 39.043 37.17 101.103-1.212 139.485-38.382 38.381-100.442 38.92-139.485 1.212z'
        fill={props.backgroundColor}
      />
      <path
        className='icon-checkmark-with-background__tertiary'
        fill={props.checkmarkColor}
        d='M66.667 89.453l22.885 22.985 42.786-42.786 13.93 14.13-56.716 56.517-36.816-36.816 13.93-14.13z'
      />
    </svg>
  );
}

export default SvgIconCheckmarkWithBackground;
