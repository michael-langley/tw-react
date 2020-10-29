import React from 'react';
import cx from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const LinkButton = (props: Props) => {
  const { handleClick, children, className, ...rest } = props;
  const classes = cx(
    'block text-primary-500 py-1 hover:text-primary-600 hover:grow-2xs active:outline-none focus:outline-none',
    className,
  );

  return (
    <button className={classes} onClick={handleClick} type="button" {...rest}>
      {children}
    </button>
  );
};

export default LinkButton;
