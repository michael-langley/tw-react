import React from 'react';
import cx from 'classnames';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  handleClick?: () => void;
}

const TopNavigationLink = (props: Props) => {
  const { children, className, handleClick = () => {}, ...rest } = props;
  const classes = cx(
    'block mx-2 pt-1 h-8 text-white font-semibold rounded focus:outline-none md:hover:border-primary-100 md:hover:border-b md:hover:rounded-none cursor-pointer',
    className,
  );

  const onClick = () => {
    handleClick();
  };

  return (
    <a className={classes} onClick={onClick} {...rest}>
      {children}
    </a>
  );
};

export default TopNavigationLink;
