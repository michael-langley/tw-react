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
  selectedOptionsValues?: string[];
  handleSelections: (option: Option[] | null) => void;
  inputClass?: string;
  dropdownContainerClass?: string;
  placeholder?: string;
}

const DropdownMulti = (props: Props) => {
  const { inputClass, dropdownContainerClass, placeholder } = props;
  const passedProps = { ...omit(['inputClass', 'dropdownContainerClass'], props), multi: true };
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
    multiSelectedOptions,
    highlightedIndex,
    handleMultiOptionRemove,
  } = useDropdown(passedProps);

  // Styles
  const inputClasses = cx('focus:outline-none placeholder-secondary-300 flex-1 overflow-hidden py-2 px-1', inputClass);
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
    {
      ['z-20']: dropdownOpen,
    },
  );

  // End Styles

  return (
    <div className="relative">
      <div className={wrapperClasses} onKeyDown={handleDropdownKeyDown}>
        {multiSelectedOptions.length > 0 && (
          <div className="flex items-center flex-wrap">
            {multiSelectedOptions.map((opt: Option, i: number) => {
              return <Badge key={i} text={opt.label} handleClose={() => handleMultiOptionRemove(opt)} className="mr-2 my-1 i-text-sm" />;
            })}
          </div>
        )}

        <input
          style={{ minWidth: '10%' }}
          ref={dropdownRef}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e.target.value)}
          className={inputClasses}
          onClick={openDropdown}
          placeholder={placeholder}
        />

        {multiSelectedOptions.length === 0 && (
          <div className="cursor-pointer hover:grow-xs">
            {!dropdownOpen && <ChevronDown onClick={handleChevronDownClick} className="fill-current w-6 h-6 text-gray-600" />}
            {dropdownOpen && <ChevronUp onClick={closeDropdown} className="fill-current w-6 h-6 text-gray-600" />}
          </div>
        )}
        {multiSelectedOptions.length > 0 && (
          <button onClick={handleCloseIconClick}>
            <Close className="fill-current w-6 h-6 text-gray-600 hover:grow-xs" />
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

export default DropdownMulti;
