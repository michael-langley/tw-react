import React from 'react';
import cx from 'classnames';
import { omit } from 'ramda';
import { Option } from 'tw-react';
import ChevronDown from '../../icons/IconCheveronDown';
import ChevronUp from '../../icons/IconCheveronUp';
import Close from '../../icons/IconClose';
import Backdrop from '../Backdrop/BackdropOverlay';
import DropdownOption from './DropdownOption';
import useDropdown from './useDropdown';
import Badge from '../Badge/Badge';

interface Props {
  options: Option[];
  searchTerm?: string;
  selectedOptionValue?: string;
  handleSelection: (option: Option | null) => void;
  inputClass?: string;
  dropdownContainerClass?: string;
  wrapperClass?: string;
  iconClass?: string;
  placeholder?: string;
  clearable?: boolean;
}

const Dropdown = (props: Props) => {
  const { inputClass, dropdownContainerClass, placeholder, wrapperClass, iconClass, clearable = true } = props;
  const passedProps = omit(['inputClass', 'dropdownContainerClass'], props);
  const {
    value,
    handleInput,
    handleOptionSelect,
    handleDropdownKeyDown,
    handleChevronDownClick,
    handleCloseIconClick,
    closeDropdown,
    openDropdown,
    dropdownRef,
    dropdownOpen,
    filteredOptions,
    singleSelectedOption,
    highlightedIndex,
  } = useDropdown(passedProps);
  // Styles
  const inputClasses = cx('focus:outline-none placeholder-gray-500 flex-1 overflow-hidden py-2 px-1', inputClass);

  const dropdownContainerClasses = cx(
    'absolute right-0 w-full mt-1 p-2 bg-white rounded shadow-md max-h-3xs sm:max-h-2xs overflow-scroll focus:outline-none focus:shadow-outline',
    dropdownContainerClass,
    {
      ['hidden']: !dropdownOpen,
      ['block']: dropdownOpen,
      ['z-20']: dropdownOpen,
    },
  );

  const wrapperClasses = cx(
    'bg-white px-2 flex items-center border border-secondary-100 shadow-inner rounded hover:border-secondary-200 focus:outline-none focus:shadow-outline',
    wrapperClass,
    {
      ['z-20']: dropdownOpen,
    },
  );

  const iconClasses = cx('fill-current w-6 h-6 text-gray-600', iconClass);

  // End Styles

  return (
    <div className="relative">
      <div className={wrapperClasses} onKeyDown={handleDropdownKeyDown}>
        {singleSelectedOption && (
          <div className="flex items-center flex-wrap">
            <Badge text={singleSelectedOption.label} className="my-1 i-px-3 i-text-sm" />
          </div>
        )}

        <input
          ref={dropdownRef}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e.target.value)}
          className={inputClasses}
          onClick={openDropdown}
          placeholder={!!singleSelectedOption ? '' : placeholder}
          style={!!singleSelectedOption ? { caretColor: 'transparent' } : {}}
          autoComplete="chrome-off"
        />

        {(!singleSelectedOption || !clearable) && (
          <div className="cursor-pointer hover:grow-xs">
            {!dropdownOpen && <ChevronDown onClick={handleChevronDownClick} className={iconClasses} />}
            {dropdownOpen && <ChevronUp onClick={closeDropdown} className={iconClasses} />}
          </div>
        )}
        {clearable && singleSelectedOption && (
          <button onClick={handleCloseIconClick}>
            <Close className={`hover:grow-xs ${iconClasses}`} />
          </button>
        )}
      </div>
      {dropdownOpen && <Backdrop className="i-z-10" transparent={true} handleClick={closeDropdown} />}

      {filteredOptions && filteredOptions.length > 0 && (
        <div className={dropdownContainerClasses}>
          {filteredOptions.map((option: Option, i: number) => {
            return (
              <DropdownOption key={i} highlighted={highlightedIndex === i} option={option} handleClick={handleOptionSelect} index={i} />
            );
          })}
        </div>
      )}
      {(!filteredOptions || filteredOptions.length === 0) && (
        <div className={dropdownContainerClasses}>
          <span className="text-gray-500 p-3 tracking-tight">No options matching query</span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
