import React from 'react';
import cx from 'classnames';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import dayjs from 'dayjs';
import 'react-day-picker/lib/style.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  value: Date | undefined;
  onDayChange: (day: Date, modifiers: Object, dayPickerInput: DayPickerInput) => void;
  placeholder?: string;
  containerClassName?: string;
  overlayClassName?: string;
  overlayWrapperClassName?: string;
  inputClassName?: string;
}

const DatePicker = (props: Props) => {
  const {
    value,
    onDayChange,
    containerClassName,
    overlayClassName,
    overlayWrapperClassName,
    inputClassName,
    placeholder = 'Select Date',
  } = props;
  const containerClasses = cx('w-full relative', containerClassName);
  const overlayClasses = cx('absolute bg-white z-10 shadow-lg mt-1 leading-tight sm:leading-normal', overlayClassName);
  const overlayWrapperClasses = cx('', overlayWrapperClassName);
  const inputClasses = cx(
    'flex items-center form-input placeholder-gray-500 w-full border border-secondary-100 shadow-inner rounded mt-1 hover:border-secondary-200 focus:outline-none focus:shadow-outline',
    inputClassName,
  );

  return (
    <DayPickerInput
      inputProps={{
        className: inputClasses,
      }}
      classNames={{
        container: containerClasses,
        overlay: overlayClasses,
        overlayWrapper: overlayWrapperClasses,
      }}
      placeholder={placeholder}
      onDayChange={onDayChange}
      formatDate={(day: Date) => dayjs(day).format('MM/DD/YYYY')}
      value={value ? dayjs(value).format('MM/DD/YYYY') : undefined}
    />
  );
};

export default DatePicker;
