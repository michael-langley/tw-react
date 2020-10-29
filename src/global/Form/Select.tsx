import React, { useState } from 'react';
import cx from 'classnames';
import { Option } from 'tw-react';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  handleChange?: (value: string) => void;
  selected?: string;
  className?: string;
}

const Select = (props: Props) => {
  const { options, selected = '', className, handleChange = () => {}, ...rest } = props;

  const selectClasses = cx(
    'form-select block w-full placeholder-secondary-300 border border-secondary-100 shadow-inner rounded hover:border-secondary-200 focus:outline-none focus:shadow-outline',
    className,
  );

  const [selectedValue, setSelectedValue] = useState<string>(selected);

  const getIsOptionSelected = (opt: Option) => {
    if (selectedValue && opt.value === selectedValue) return true;
    if (opt.selected) return true;
    return false;
  };

  const onChange = (newValue: string) => {
    setSelectedValue(newValue);
    handleChange(newValue);
  };

  return (
    <select
      className={selectClasses}
      style={{ marginTop: '0.15rem' }}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
      }}
      value={selected}
      {...rest}
    >
      {options.map((option: Option) => {
        const { label, value, ...rest } = option;
        return (
          <option key={label} value={value} {...rest}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
