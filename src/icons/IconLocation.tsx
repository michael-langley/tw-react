import * as React from "react";

function SvgIconLocation(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-location_svg__icon-location-pin"
      {...props}
    >
      <path
        className="icon-location_svg__secondary"
        d="M12 1v6a3 3 0 000 6v9.31a1 1 0 01-.7-.29l-5.66-5.66A9 9 0 0112 1z"
      />
      <path
        className="icon-location_svg__primary"
        d="M12 1a9 9 0 016.36 15.36l-5.65 5.66a1 1 0 01-.71.3V13a3 3 0 000-6V1z"
      />
    </svg>
  );
}

export default SvgIconLocation;
