import React from 'react';
import cx from 'classnames';
import IconButton from './IconButton';
import { IconStar } from '../../icons';

interface Props {
  isFavorite: boolean;
  handleFavoriteClick: () => void;
  className?: string;
  iconClassName?: string;
}

const FavoriteButton = (props: Props) => {
  const { isFavorite, handleFavoriteClick, className, iconClassName } = props;

  const classes = cx('p-2 rounded-full', className, {
    'bg-gray-100': !isFavorite,
    'bg-teal-vivid-500': isFavorite,
  });
  const iconClasses = cx('fill-current w-4 h-4', iconClassName, {
    'text-teal-vivid-500': !isFavorite,
    'text-gray-100': isFavorite,
  });

  return (
    <IconButton className={classes} handleClick={handleFavoriteClick}>
      <IconStar className={iconClasses} />
    </IconButton>
  );
};

export default FavoriteButton;
