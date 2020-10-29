import React from 'react';
import cx from 'classnames';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

const Card = (props: CardProps) => {
  const { children, onClick, className, ...rest } = props;
  const classes = cx('transform transition duration-500 ease-in-out hover:scale-105 cursor-pointer', className);

  return (
    <div className={classes} onClick={onClick} {...rest}>
      {children}
    </div>
  );
};

interface CardImageProps extends React.HTMLAttributes<HTMLImageElement> {
  imageSrc: string;
  imageAlt: string;
  containerClassName?: string;
  imageClassName?: string;
  imageAttribution?: string;
}

const Image = (props: CardImageProps) => {
  const { imageSrc, imageAlt, imageAttribution, imageClassName, containerClassName, ...rest } = props;
  const containerClasses = cx('relative rounded-lg ', containerClassName);
  const imageClasses = cx('absolute h-full w-full overflow-hidden object-cover rounded-lg shadow-md', imageClassName);

  return (
    <div className={containerClasses}>
      <img className={imageClasses} src={imageSrc} alt={imageAlt} {...rest} />
      {imageAttribution && (
        <span
          style={{ fontSize: '8px' }}
          className="absolute right-0 top-0 text-white mr-1 bg-black opacity-25 tracking-tighter cursor-default"
          dangerouslySetInnerHTML={{ __html: imageAttribution }}
        />
      )}
    </div>
  );
};

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  outerContainerClassName?: string;
  innerContainerClassName?: string;
}

const Body = (props: CardBodyProps) => {
  const { children, outerContainerClassName, innerContainerClassName, ...rest } = props;

  const outerClasses = cx('relative px-2 md:px-8 lg:px-6 xl:px-8 -mt-8', outerContainerClassName);
  const innerClasses = cx('bg-gray-100 px-6 xl:px-8 py-4 rounded-lg shadow-lg', innerContainerClassName);

  return (
    <div className={outerClasses}>
      <div className={innerClasses}>{children}</div>
    </div>
  );
};

Card.Image = Image;
Card.Body = Body;

export default Card;
