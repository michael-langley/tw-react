import * as React from "react";

function SvgIconMail(props) {
  return (
    <svg viewBox="0 0 24 24" className="icon-mail_svg__icon-mail" {...props}>
      <path
        className="icon-mail_svg__primary"
        d="M22 8.62V18a2 2 0 01-2 2H4a2 2 0 01-2-2V8.62l9.55 4.77a1 1 0 00.9 0L22 8.62z"
      />
      <path
        className="icon-mail_svg__secondary"
        d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 012 2v.38l-10 5z"
      />
    </svg>
  );
}

export default SvgIconMail;
