import React from 'react';
import cx from 'classnames';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  handleClick?: () => void;
}

const A = (props: Props) => {
  const { children, handleClick, className, ...rest } = props;
  const classes = cx(
    'block text-primary-600 py-1 hover:text-primary-700 hover:grow-xs active:outline-none focus:outline-none cursor-pointer',
    className,
  );
  return (
    <a className={classes} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};

export default A;
