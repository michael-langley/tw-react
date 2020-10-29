import React from 'react';
import cx from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const IconButton = (props: Props) => {
  const { handleClick, children, className, ...rest } = props;
  const classes = cx('block text-gray-200 hover:text-gray-100 hover:grow-sm active:outline-none focus:outline-none p-1', className);

  return (
    <button className={classes} onClick={handleClick} type='button' {...rest}>
      {children}
    </button>
  );
};

export default IconButton;
