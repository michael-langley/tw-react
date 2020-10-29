import * as React from "react";

function SvgIconUser(props) {
  return (
    <svg viewBox="0 0 24 24" className="icon-user_svg__icon-user" {...props}>
      <path
        className="icon-user_svg__primary"
        d="M12 12a5 5 0 110-10 5 5 0 010 10z"
      />
      <path
        className="icon-user_svg__secondary"
        d="M21 20v-1a5 5 0 00-5-5H8a5 5 0 00-5 5v1c0 1.1.9 2 2 2h14a2 2 0 002-2z"
      />
    </svg>
  );
}

export default SvgIconUser;
