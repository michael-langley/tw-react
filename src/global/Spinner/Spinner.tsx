import React from 'react';
import cx from 'classnames';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {}

const Spinner = (props: Props) => {
  const { className } = props;
  const classes = cx('spinner-white, mx-auto', className);
  return <span className={classes} />;
};

export default Spinner;
