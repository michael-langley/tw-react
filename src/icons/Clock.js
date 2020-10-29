import * as React from "react";

function SvgClock(props) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 .4C4.697.4.399 4.698.399 10A9.6 9.6 0 0010 19.601c5.301 0 9.6-4.298 9.6-9.601 0-5.302-4.299-9.6-9.6-9.6zm-.001 17.2a7.6 7.6 0 110-15.2 7.6 7.6 0 110 15.2zM11 9.33V4H9v6.245l-3.546 2.048 1 1.732 4.115-2.377A.955.955 0 0011 10.9v-.168l4.24-4.166a6.584 6.584 0 00-.647-.766L11 9.33z" />
    </svg>
  );
}

export default SvgClock;
