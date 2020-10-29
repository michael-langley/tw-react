import React from 'react';
import cx from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const RightColumn = (props: Props) => {
  const { children, className, ...rest } = props;
  const classes = cx('w-full mt-6 md:pl-10 md:w-2/3', className);

  return (
    <section className={classes} {...rest}>
      {children}
    </section>
  );
};

export default RightColumn;
