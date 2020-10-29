import React from 'react';
import cx from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
  imageSrc: string;
  imageAlt: string;
  buttonClass?: string;
  imageClass?: string;
}

const AvatarButton = (props: Props) => {
  const { handleClick, buttonClass, imageClass, imageAlt, imageSrc, ...rest } = props;
  const buttonClasses = cx(
    'h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white',
    buttonClass,
  );
  const imageClasses = cx('h-full w-full object-cover', imageClass);

  return (
    <button className={buttonClasses} type='button' onClick={handleClick} {...rest}>
      <img className={imageClasses} src={imageSrc} alt={imageAlt} />
    </button>
  );
};

export default AvatarButton;
