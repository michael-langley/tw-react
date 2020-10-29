import React from 'react';
import cx from 'classnames';
import Star from '../../icons/IconStar';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  rating: number;
  reviewCount: number;
  starFilledColorClassName?: string;
  starUnfilledColorClassName?: string;
  starSvgClassName?: string;
  reviewCountClassName?: string;
  containerClassName?: string;
}

const Rating = (props: Props) => {
  const {
    rating,
    reviewCount,
    containerClassName,
    starSvgClassName,
    starFilledColorClassName,
    starUnfilledColorClassName,
    reviewCountClassName,
    ...rest
  } = props;

  const containerClass = cx('flex items-center', containerClassName);
  const starSvgClass = cx('h-3 w-3 fill-current', starSvgClassName);
  const reviewCountClass = cx('ml-1 text-gray-600 text-xs uppercase font-semibold tracking-wide', reviewCountClassName);

  return (
    <div className={containerClass} {...rest}>
      {[...Array(5)].map((_: number, i: number) => {
        return (
          <Star
            key={i}
            className={`${starSvgClass} ${
              i < rating ? starFilledColorClassName || 'text-primary-400' : starUnfilledColorClassName || 'text-gray-400'
            }`}
          />
        );
      })}
      <span className={reviewCountClass}>({reviewCount})</span>
    </div>
  );
};

export default Rating;
