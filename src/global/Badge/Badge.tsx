import React from "react";
import cx from "classnames";
import Close from "../../icons/IconClose";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  handleClose?: () => void;
  type?: "primary" | "secondary" | "success" | "danger";
  text: string;
}

const Badge = (props: Props) => {
  const { type = "secondary", handleClose, className, text, ...rest } = props;
  const classes = cx("rounded pr-1 pl-2 flex items-center text-sm sm:text-base", className, {
    "bg-primary-100 text-primary-800": type === "primary",
    "bg-secondary-100 text-secondary-800": type === "secondary",
  });

  const handleKeyPress = (event: React.KeyboardEvent<HTMLOrSVGElement>) => {
    if (event.key === "Enter") handleClose();
  };

  return (
    <div className={classes} {...rest}>
      {text}
      {handleClose && (
        <Close
          style={{ marginTop: "2.5px" }}
          className="fill-current h-4 w-4 sm:h-5 sm:w-5 ml-1 cursor-pointer"
          onClick={handleClose}
          tabIndex={0}
          onKeyPress={handleKeyPress}
        />
      )}
    </div>
  );
};

export default Badge;
