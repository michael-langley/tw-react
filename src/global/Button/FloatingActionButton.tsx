import React from 'react';
import cx from 'classnames';
import IconButton from './IconButton';

interface Props {
  children: React.ReactNode;
  handleClick: () => void;
  className?: string;
}

const FloatingActionButton = (props: Props) => {
  const { className, children, handleClick } = props;

  const classes = cx('fixed p-3 rounded-full bg-primary-400', className);

  return (
    <IconButton style={{ bottom: '5%', right: '5%' }} className={classes} handleClick={handleClick}>
      {children}
    </IconButton>
  );
};

export default FloatingActionButton;
