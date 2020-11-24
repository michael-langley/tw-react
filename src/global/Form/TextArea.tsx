import React from 'react';
import cx from 'classnames';
import useInput from '../../component-hooks/useInput';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  initialValue?: string;
  value?: string;
  handleValueChange?: (val: string) => void;
  handleInternalValue?: (val: string) => void;
  className?: string;
}

const TextArea = (props: Omit<Props, 'inputMode'>) => {
  const { initialValue, value: propsValue, handleValueChange, handleInternalValue, className, rows, ...rest } = props;

  const { value, handleInput } = useInput({
    defaultValue: initialValue,
    value: propsValue,
    setValueState: handleValueChange,
    handleInternalValue,
  });
  const inputClasses = cx(
    'flex items-center form-input placeholder-gray-500 w-full border border-gray-100 shadow-inner rounded mt-1 hover:border-gray-200 focus:outline-none focus:shadow-outline',
    className,
  );

  return (
    <textarea
      rows={rows || 3}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInput(e.target.value)}
      className={inputClasses}
      {...rest}
    />
  );
};

export default TextArea;
