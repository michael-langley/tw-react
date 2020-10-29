import React from 'react';
import cx from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const PaddedContainer = (props: Props) => {
  const { children, className, ...rest } = props;
  const classes = cx('p-8', className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default PaddedContainer;
