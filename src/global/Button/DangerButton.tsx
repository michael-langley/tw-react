import React from 'react';
import cx from 'classnames';
import BaseButton, { BaseButtonProps } from './BaseButton';

interface Props extends BaseButtonProps {}

const DangerButton = (props: Props) => {
  const { className, ...rest } = props;
  const classes = cx('bg-red-100 text-red-700', className);
  return <BaseButton className={classes} {...rest} />;
};

export default DangerButton;
