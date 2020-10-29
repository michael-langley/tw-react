import React from 'react';
import cx from 'classnames';

interface Props {
  leadingIcon: React.ReactNode;
  trailingIcon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const WithDualIcons = (props: Props) => {
  const { leadingIcon, trailingIcon, children, className } = props;
  const classes = cx('flex items-center justify-center', className);

  return (
    <div className={classes}>
      <div className="mr-3">{leadingIcon}</div>
      {children}
      <div className="ml-3">{trailingIcon}</div>
    </div>
  );
};

export default WithDualIcons;
