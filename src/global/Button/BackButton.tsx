import React from 'react';
import cx from 'classnames';
import { CheveronLeft } from '../../icons';
import IconButton from './IconButton';

interface Props {
  className?: string;
}

const BackButton = (props: Props) => {
  const { className } = props;

  const classes = cx('p-2', className);

  const onBack = () => {
    window.history.back();
  };

  return (
    <IconButton className={classes} handleClick={onBack}>
      <CheveronLeft className="h-6 w-6 fill-current text-primary-300" />
    </IconButton>
  );
};

export default BackButton;
