import React from 'react';
import cx from 'classnames';
import { HorizontalDots } from '../../icons';

interface Props {
  className?: string;
}

const HorizontalDotsLoader = (props: Props) => {
  const { className } = props;
  const classes = cx('animate-pulse text-primary-700 fill-current', className);

  return <HorizontalDots className={classes} />;
};

export default HorizontalDotsLoader;
