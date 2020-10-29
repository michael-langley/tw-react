import * as React from "react";

function SvgIconEdit(props) {
  return (
    <svg viewBox="0 0 24 24" className="icon-edit_svg__icon-edit" {...props}>
      <path
        className="icon-edit_svg__primary"
        d="M4 14a1 1 0 01.3-.7l11-11a1 1 0 011.4 0l3 3a1 1 0 010 1.4l-11 11a1 1 0 01-.7.3H5a1 1 0 01-1-1v-3z"
      />
      <rect
        width={20}
        height={2}
        x={2}
        y={20}
        className="icon-edit_svg__secondary"
        rx={1}
      />
    </svg>
  );
}

export default SvgIconEdit;
