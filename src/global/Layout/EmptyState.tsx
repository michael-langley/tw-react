import React from "react";
import cx from "classnames";

interface Props {
  text: string;
  icon: React.ReactElement;
  subText?: string;
  iconClassName?: string;
  textClassName?: string;
  subTextClassName?: string;
}

const EmptyState = (props: Props) => {
  const { text, icon, subText, iconClassName, textClassName, subTextClassName } = props;
  const iconClasses = cx("h-56 w-56 sm:h-72 sm:w-72", iconClassName);
  const textClasses = cx("font-semibold text-lg sm:text-xl md:text-2xl text-gray-700 mt-4 leading-tight", textClassName);
  const subTextClasses = cx("text-gray-800 mt-3 text-sm sm:text-base", subTextClassName);

  return (
    <div className="flex flex-col sm:w-5/6 mx-auto items-center mt-12">
      <p className={textClasses}>{text}</p>
      {subText && <p className={subTextClasses}>{subText}</p>}

      {React.cloneElement(icon, {
        className: `${iconClasses} ${icon.props.className}`,
      })}
    </div>
  );
};

export default EmptyState;
