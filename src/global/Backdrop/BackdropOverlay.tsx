import React from "react";
import cx from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
  transparent?: boolean;
  className?: string;
}

const BackdropOverlay = (props: Props) => {
  const { handleClick, className, transparent, ...rest } = props;
  const classes = cx("fixed inset-0 h-full w-full opacity-50 cursor-default z-30", className, {
    "bg-black": !transparent,
  });

  return <button tabIndex={-1} className={classes} onClick={handleClick} {...rest} />;
};

export default BackdropOverlay;
