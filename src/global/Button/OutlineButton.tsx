import React from 'react';
import cx from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const OutlineButton = (props: Props) => {
  const { handleClick, children, className, ...rest } = props;
  const classes = cx(
    `px-2 py-1 text-sm sm:text-base leading-none cursor-pointer hover:grow-xs bg-transparent border border-gray-300 text-primary-800 leading-tight capitalize rounded-lg`,
    className,
  );
  return (
    <button onClick={handleClick} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default OutlineButton;
