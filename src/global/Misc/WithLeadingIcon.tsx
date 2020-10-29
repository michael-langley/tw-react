import React from 'react';
import cx from 'classnames';

interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

const WithLeadingIcon = (props: Props) => {
  const { icon, children, className, iconClassName } = props;
  const classes = cx('flex items-center', className);
  const iconClasses = cx('mr-3', iconClassName);

  return (
    <div className={classes}>
      <div className={iconClasses}>{icon}</div>
      {children}
    </div>
  );
};

export default WithLeadingIcon;
