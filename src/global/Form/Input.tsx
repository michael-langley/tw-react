import React from 'react';
import cx from 'classnames';
import useInput from '../../component-hooks/useInput';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  initialValue?: string;
  value?: string;
  handleValueChange?: (val: string) => void;
  handleInternalValue?: (val: string) => void;
  inputClass?: string;
  leftIcon?: React.ReactNode;
  iconClass?: string;
}

const Input = (props: Omit<Props, 'inputMode'>) => {
  const { initialValue, value: propsValue, handleValueChange, handleInternalValue, inputClass, iconClass, leftIcon, ...rest } = props;

  const { value, handleInput } = useInput({
    defaultValue: initialValue,
    value: propsValue,
    setValueState: handleValueChange,
    handleInternalValue,
  });
  const inputClasses = cx(
    'flex items-center form-input placeholder-secondary-300 w-full border border-secondary-100 shadow-inner rounded mt-1 hover:border-secondary-200 focus:outline-none focus:shadow-outline',
    inputClass,
    {
      'pl-12': !!leftIcon,
    },
  );
  const iconClasses = cx('absolute inset-y-0 left-0 flex items-center pl-3', iconClass);

  return (
    <div className="relative">
      {leftIcon && <div className={iconClasses}>{leftIcon}</div>}
      <input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e.target.value)}
        className={inputClasses}
        {...rest}
      />
    </div>
  );
};

export default Input;
