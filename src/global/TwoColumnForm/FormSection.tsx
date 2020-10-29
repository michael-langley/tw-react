import React from 'react';
import cx from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const FormSection = (props: Props) => {
  const { children, className, ...rest } = props;
  const classes = cx('flex flex-col border-t-2 border-secondary-200 mt-5 md:flex-row pb-5', className);

  return (
    <section className={classes} {...rest}>
      {children}
    </section>
  );
};

export default FormSection;
