import React from 'react';
import cx from 'classnames';
import BaseButton, { BaseButtonProps } from './BaseButton';

interface Props extends BaseButtonProps {}

const PrimaryButton = (props: Props) => {
  const { className, ...rest } = props;
  const classes = cx('bg-primary-400 text-white', className);
  return <BaseButton className={classes} {...rest} />;
};

export default PrimaryButton;
