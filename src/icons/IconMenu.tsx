import * as React from "react";

function SvgIconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" className="icon-menu_svg__icon-menu" {...props}>
      <path
        className="icon-menu_svg__secondary"
        fillRule="evenodd"
        d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
      />
    </svg>
  );
}

export default SvgIconMenu;
