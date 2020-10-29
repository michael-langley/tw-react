import React, { useState } from "react";
import cx from "classnames";
import BackdropOverlay from "../Backdrop/BackdropOverlay";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  triggerComponent: (clickHandler: () => void) => React.ReactNode;
  menuComponent: (clickHandler: () => void) => React.ReactNode;
  menuContainerClass?: string;
}

const DropdownMenu = (props: Props) => {
  const { triggerComponent, menuComponent, menuContainerClass, ...rest } = props;
  const menuContainerClasses = cx("absolute right-0 w-48 mt-1 py-2 bg-white rounded-lg shadow-md z-40", menuContainerClass);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onTriggerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Esc" || e.key === "Escape") {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      setIsOpen(false);
    };
  }, []);

  return (
    <div className="relative" {...rest}>
      {/* In the above div Relative styling is needed here so that the dropdown menu below can be
        absolute positioned against it, otherwise it would keep looking up the tree
        for the nearest element with relative positioning

        In the below button, relative styling is needed for the z-index to take effect
        z-index does not get applied to static positioned element */}
      <div className="block relative z-40">{triggerComponent(onTriggerClick)}</div>
      {isOpen && <BackdropOverlay className="i-z-30" handleClick={() => setIsOpen(false)} />}
      {isOpen && <div className={menuContainerClasses}>{menuComponent(onTriggerClick)}</div>}
    </div>
  );
};

export default DropdownMenu;
