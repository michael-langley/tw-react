import React from 'react';
import cx from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  description?: string;
}

const LeftColumn = (props: Props) => {
  const { heading, description, className, ...rest } = props;
  const classes = cx('w-full mt-4 md:w-1/3', className);

  return (
    <section className={classes}>
      <h2 className='font-semibold tracking-tight text-gray-700 md:text-lg'>{heading}</h2>
      {description && <p className='text-gray-600 leading-relaxed mt-1 text-sm md:text-md'>{description}</p>}
    </section>
  );
};

export default LeftColumn;
