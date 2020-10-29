import React from 'react';
import cx from 'classnames';

export interface TabInterface {
  key: string;
  title: string;
  className?: string;
}

interface Props {
  title: string;
  handleClick: () => void;
  isSelected?: boolean;
  className?: string;
}

const Tab = (props: Props) => {
  const { title, handleClick, isSelected = false, className } = props;
  const classes = cx(
    'p-1 px-4 rounded-tl-lg cursor-pointer bg-white border border-gray-400 tracking-wide hover:grow-xs transition ease-in-out duration-500',
    className,
    {
      'bg-primary-500 text-white': isSelected,
    },
  );
  return (
    <div onClick={handleClick} className={classes}>
      {title}
    </div>
  );
};

export default Tab;
