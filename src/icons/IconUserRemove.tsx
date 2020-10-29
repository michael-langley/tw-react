import * as React from "react";

function SvgIconUserRemove(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-user-remove_svg__icon-user-remove"
      {...props}
    >
      <path
        className="icon-user-remove_svg__primary"
        d="M9 11a4 4 0 110-8 4 4 0 010 8z"
      />
      <path
        className="icon-user-remove_svg__secondary"
        d="M15 9h6a1 1 0 010 2h-6a1 1 0 010-2zm1 10a2 2 0 01-2 2H4a2 2 0 01-2-2v-1a5 5 0 015-5h4a5 5 0 015 5v1z"
      />
    </svg>
  );
}

export default SvgIconUserRemove;
