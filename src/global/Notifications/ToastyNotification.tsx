import React from "react";
import cx from "classnames";
import Close from "../../icons/IconClose";
import IconButton from "../Button/IconButton";

interface Props {
  type: "success" | "info" | "error";
  message: string;
  title?: string;
  closeToast?: () => void;
}

const ToastyNotification = (props: Props) => {
  const { type, message, title, closeToast, ...rest } = props;
  const classes = cx("px-6 py-4 border sm:rounded-lg flex justify-between items-start z-50", {
    "bg-green-100 text-green-800 border-green-800": type === "success",
    "bg-blue-100 text-blue-800 border-blue-800": type === "info",
    "bg-red-100 text-red-800 border-red-800": type === "error",
  });

  const onClose = () => {
    closeToast();
  };

  return (
    <div className={classes} role="alert" {...rest}>
      <div className="flex flex-col">
        {title && <div className="mb-1 font-semibold tracking-tight">{title}</div>}
        <div>{message}</div>
      </div>
      <IconButton className="ml-6" handleClick={onClose} data-dismiss="alert" aria-label="Close">
        <Close className="h-6 w-6 fill-current text-gray-600" />
      </IconButton>
    </div>
  );
};

export default ToastyNotification;
