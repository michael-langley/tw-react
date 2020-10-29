import React from 'react';
import cx from 'classnames';

interface Props {
  className?: string;
}

const Spacer = (props: Props) => {
  const { className } = props;
  const classes = cx('flex-1', className);
  return <div className={classes} />;
};

export default Spacer;
