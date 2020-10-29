import React, { useState } from "react";
import cx from "classnames";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  handleValue: (toggleValue: boolean) => void;
  initialValue?: boolean;
}

const Toggle = (props: Props) => {
  const { handleValue, initialValue = false, className, ...rest } = props;
  const [isOn, setIsOn] = useState<boolean>(initialValue);

  React.useEffect(() => {
    handleValue(isOn);
  }, [isOn]);

  const classes = cx("relative", className);

  return (
    <label className="cursor-pointer">
      <div id="toggle" className={classes} {...rest}>
        <input type="checkbox" onChange={() => {}} checked={isOn} className="hidden" onClick={() => setIsOn(!isOn)} />
        <div
          style={{ transition: "all 0.3s ease-in-out" }}
          className={`w-12 h-6 rounded-full shadow-inner ${isOn ? "bg-green-500" : "bg-gray-400"}`}
        />
        <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0" />
      </div>
    </label>
  );
};

export default Toggle;
