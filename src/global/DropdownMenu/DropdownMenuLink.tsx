import React from 'react';
import cx from 'classnames';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  handleClick: () => void;
  className?: string;
}

const DropdownMenuLink = (props: Props) => {
  const { children, className, handleClick, ...rest } = props;
  const classes = cx('block px-4 py-2 text-gray-800 hover:bg-primary-500 hover:text-white w-full text-left cursor-pointer', className);

  const onClick = () => {
    handleClick();
  };

  return (
    <a onClick={onClick} className={classes} type="anchor" {...rest}>
      {children}
    </a>
  );
};

export default DropdownMenuLink;
