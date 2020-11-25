import React from 'react';
import cx from 'classnames';

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const BaseButton = (props: BaseButtonProps) => {
  const { handleClick, children, className, disabled, ...rest } = props;
  const classes = cx(
    `px-4 py-2 text-sm sm:text-base capitalize leading-none tracking-wide
    rounded-lg shadow-md  focus:outline-none focus:shadow-outline`,
    className,
    {
      'cursor-pointer hover:grow-xs': !disabled,
      'opacity-50 cursor-not-allowed': disabled,
    },
  );
  return (
    <button onClick={handleClick} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default BaseButton;
