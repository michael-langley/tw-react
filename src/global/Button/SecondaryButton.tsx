import React from 'react';
import cx from 'classnames';
import BaseButton, { BaseButtonProps } from './BaseButton';

interface Props extends BaseButtonProps {}

const SecondaryButton = (props: Props) => {
  const { className, ...rest } = props;
  const classes = cx('bg-secondary-200 text-primary-700', className);
  return <BaseButton className={classes} {...rest} />;
};

export default SecondaryButton;
