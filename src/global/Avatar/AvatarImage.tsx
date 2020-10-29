import React from 'react';
import cx from 'classnames';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const AvatarImage = (props: Props) => {
  const { className, imageAlt, imageSrc, ...rest } = props;
  const classes = cx('h-8 w-8 rounded-full object-cover border-2 border-gray-600', className);

  return <img className={classes} src={imageSrc} alt={imageAlt} {...rest}/>;
};

export default AvatarImage;
