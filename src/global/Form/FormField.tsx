import React from 'react';
import cx from 'classnames';
import Label from './Label';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  required?: boolean;
  error?: string;
  containerClass?: string;
  labelClass?: string;
  errorClass?: string;
  label?: string;
  explanationText?: string;
  explanationTextClassName?: string;
}

const FormField = (props: Props) => {
  const {
    children,
    required,
    error,
    containerClass,
    labelClass,
    errorClass,
    label,
    explanationText,
    explanationTextClassName,
    ...rest
  } = props;

  const labelClasses = cx('tracking-tight text-xs text-secondary-600 font-semibold md:text-sm', labelClass);
  const containerClasses = cx(containerClass);
  const errorClasses = cx('text-red-400 mt-1 text-sm ml-1 tracking-wide', errorClass);
  const explanationClasses = cx('text-gray-600 mt-1 text-xs ml-1 tracking-wide', errorClass);

  return (
    <div className={containerClasses} {...rest}>
      {label && <Label text={label} className={labelClasses} required={required} />}
      {children}
      {error && <div className={errorClasses}>{error}</div>}
      {explanationText && <div className={explanationClasses}>{explanationText}</div>}
    </div>
  );
};

export default FormField;
