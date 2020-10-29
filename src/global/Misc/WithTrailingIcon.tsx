import React from 'react';
import cx from 'classnames';

interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

const WithTrailingIcon = (props: Props) => {
  const { icon, children, className, iconClassName } = props;
  const classes = cx('flex items-center justify-center', className);
  const iconClasses = cx('ml-3', iconClassName);

  return (
    <div className={classes}>
      {children}
      <div className={iconClasses}>{icon}</div>
    </div>
  );
};

export default WithTrailingIcon;
