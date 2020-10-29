import React from 'react';
import cx from 'classnames';

interface Props {
  children: React.ReactElement<HTMLHeadingElement>;
  className?: string;
}

const PageHeading = (props: Props) => {
  const { children, className } = props;
  const classes = cx('tracking-tighter font-light text-2xl text-gray-700', className);

  return React.cloneElement(children, { className: classes });
};

export default PageHeading;
