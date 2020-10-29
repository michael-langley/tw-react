import React from 'react';
import cx from 'classnames';
import { Option } from 'tw-react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  option: Option;
  handleClick: (option: Option) => void;
  highlighted: boolean;
  index: number;
}

const DropdownOption = (props: Props) => {
  const { option, handleClick, highlighted, index } = props;
  const classes = cx(
    'text-sm tracking-wide block px-4 py-2 w-full text-gray-700 text-left cursor-pointer capitalize hover:bg-primary-500 hover:text-white focus:bg-primary-500 focus:text-white focus:outline-none',
    {
      'bg-primary-500 i-text-white': highlighted,
    },
  );
  return (
    <div id={`dropdown-option-${index}`} className={classes} tabIndex={-1} onClick={() => handleClick(option)}>
      <div>{option.label}</div>
      {option.subLabel && <div className="text-xs leading-relaxed font-light tracking-wide">{option.subLabel}</div>}
    </div>
  );
};

export default DropdownOption;
