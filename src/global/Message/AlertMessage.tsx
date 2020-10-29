import React from 'react';
import cx from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: 'error' | 'success' | 'warning' | 'info';
  children: React.ReactNode;
}

const AlertMessage = (props: Props) => {
  const { children, type, className, ...rest } = props;
  const classes = cx('py-2 px-3 tracking-tight shadow-inner', className, {
    'bg-red-100 text-red-800': type === 'error',
    'bg-green-100 text-green-800': type === 'success',
    'bg-yellow-100 text-yellow-800': type === 'warning',
    'bg-primary-100 text-primary-800': type === 'info',
  });

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default AlertMessage;
