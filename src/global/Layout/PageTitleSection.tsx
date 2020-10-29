import React from 'react';
import cx from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

const PageTitleSection = (props: Props) => {
  const { text, className, ...rest } = props;
  const classes = cx('w-full py-3 px-4 sm:px-8 bg-white', className);

  return (
    <div className={classes} {...rest}>
      <h1 className='leading-none tracking-tight text-primary-900 text-xs sm:text-sm font-semibold'>{text}</h1>
    </div>
  );
};

export default PageTitleSection;
