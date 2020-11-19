import React from 'react';
import cx from 'classnames';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  handleClick?: () => void;
}

const DropdownNavigationLink = (props: Props) => {
  const { children, className, handleClick = () => {}, ...rest } = props;
  const classes = cx('block text-gray-100 hover:text-white cursor-pointer', className);

  const onClick = () => {
    handleClick();
  };

  return (
    <a className={classes} onClick={onClick} {...rest}>
      {children}
    </a>
  );
};

export default DropdownNavigationLink;
