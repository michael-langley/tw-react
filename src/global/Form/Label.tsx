import React from 'react';
import cx from 'classnames';

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  required?: boolean;
  className?: string;
}

const Label = (props: Props) => {
  const { text, required, className, ...rest } = props;
  const classes = cx('tracking-tight text-xs text-secondary-600 font-semibold md:text-sm', className);

  return (
    <label className={classes} {...rest}>
      <span> {text}</span>
      {required && <span className='ml-1 text-red-500'>&#42;</span>}
    </label>
  );
};

export default Label;
