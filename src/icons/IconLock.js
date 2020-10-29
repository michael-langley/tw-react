import * as React from "react";

function SvgIconLock(props) {
  return (
    <svg viewBox="0 0 24 24" className="icon-lock_svg__icon-lock" {...props}>
      <path
        className="icon-lock_svg__secondary"
        d="M12 10v3a2 2 0 00-1 3.73V18a1 1 0 001 1v3H5a2 2 0 01-2-2v-8c0-1.1.9-2 2-2h7z"
      />
      <path
        className="icon-lock_svg__primary"
        d="M12 19a1 1 0 001-1v-1.27A2 2 0 0012 13v-3h3V7a3 3 0 00-6 0v3H7V7a5 5 0 1110 0v3h2a2 2 0 012 2v8a2 2 0 01-2 2h-7v-3z"
      />
    </svg>
  );
}

export default SvgIconLock;
