import React, { useReducer, useRef } from 'react';
import { sort } from 'ramda';
import { Option, Action } from 'tw-react';
import useInput from '../../component-hooks/useInput';
import useComparePrevious from '../../component-hooks/useComparePrevious';

enum Keypresses {
  Down = 'ArrowDown',
  Up = 'ArrowUp',
  Tab = 'Tab',
  Enter = 'Enter',
}

interface DropdownState {
  allOptions: Option[] | null;
  filteredOptions: Option[] | null;
  singleSelectedOption: Option | null;
  multiSelectedOptions: Option[];
  searchTerm: string;
  highlightedIndex: number;
  dropdownOpen: boolean;
}

enum Actions {
  ToggleDropdownOpen = 'ToggleDropdownOpen',
  OpenDropdown = 'OpenDropdown',
  CloseDropdown = 'CloseDropdown',
  SetInitialOptions = 'SetInitialOptions',
  SetSearchTerm = 'SetSearchTerm',
  SetFilteredOptions = 'SetFilteredOptions',
  SetSelectedOption = 'SetSelectedOption',
  SetSelectedOptions = 'SetSelectedOptions',
  SetHighlightedIndex = 'SetHighlightedIndex',
  ClearSelection = 'ClearSelection',
  ClearSingleSelectedOption = 'ClearSingleSelectedOption',
  ClearAllMultiSelectedOptions = 'ClearAllMultiSelectedOptions',
  SetAllOptions = 'SetAllOptions',
  HandleMultiOptionSelect = 'HandleMultiOptionSelect',
  HandleMultiOptionRemove = 'HandleMultiOptionRemove',
  HandlePassedSelectedOptions = 'HandlePassedSelectedOptions',
}

const initialState: DropdownState = {
  allOptions: null,
  filteredOptions: null,
  singleSelectedOption: null,
  multiSelectedOptions: [],
  searchTerm: '',
  highlightedIndex: 0,
  dropdownOpen: false,
};

const reducer = (state: DropdownState, action: Action): DropdownState => {
  switch (action.type) {
    case Actions.ToggleDropdownOpen:
      return { ...state, dropdownOpen: !state.dropdownOpen };
    case Actions.OpenDropdown:
      return { ...state, dropdownOpen: true, highlightedIndex: 0 };
    case Actions.CloseDropdown:
      return { ...state, dropdownOpen: false, highlightedIndex: 0 };
    case Actions.SetInitialOptions:
      return { ...state, highlightedIndex: 0, allOptions: action.payload, filteredOptions: action.payload };
    case Actions.SetFilteredOptions:
      return { ...state, filteredOptions: action.payload };
    case Actions.SetSearchTerm:
      return { ...state, searchTerm: action.payload };
    case Actions.SetSelectedOption:
      return { ...state, singleSelectedOption: action.payload, searchTerm: '', dropdownOpen: false };
    case Actions.SetSelectedOptions:
      return { ...state, multiSelectedOptions: action.payload };
    case Actions.SetHighlightedIndex:
      return { ...state, highlightedIndex: action.payload };
    case Actions.ClearSelection:
      return {
        ...state,
        dropdownOpen: false,
        singleSelectedOption: null,
        searchTerm: '',
        highlightedIndex: 0,
        multiSelectedOptions: [],
        allOptions: action.payload,
        filteredOptions: action.payload,
      };
    case Actions.ClearSingleSelectedOption:
      return { ...state, singleSelectedOption: null };
    case Actions.ClearAllMultiSelectedOptions:
      return { ...state, multiSelectedOptions: [] };
    case Actions.SetAllOptions:
      return { ...state, allOptions: action.payload };
    case Actions.HandleMultiOptionSelect:
      return {
        ...state,
        allOptions: action.payload.allOptions,
        filteredOptions: action.payload.filteredOptions,
        searchTerm: '',
        multiSelectedOptions: action.payload.multiSelectedOptions,
        dropdownOpen: false,
      };
    case Actions.HandleMultiOptionRemove:
      return {
        ...state,
        allOptions: action.payload.allOptions,
        multiSelectedOptions: action.payload.multiSelectedOptions,
      };
    case Actions.HandlePassedSelectedOptions:
      return {
        ...state,
        multiSelectedOptions: action.payload.selectedOptions,
        allOptions: action.payload.allOptions,
        filteredOptions: action.payload.allOptions,
      };
    default:
      return state;
  }
};

interface Props {
  options: Option[];
  searchTerm?: string;
  selectedOptionValue?: string;
  selectedOptionsValues?: string[];
  handleSelection?: (option: Option | null) => void;
  handleSelections?: (option: Option[] | null) => void;
  multi?: boolean;
}

const useDropdown = (props: Props) => {
  const {
    options,
    searchTerm: propsSearchTerm,
    selectedOptionValue: propsSelectedOption,
    handleSelection,
    multi = false,
    handleSelections,
    selectedOptionsValues: propsSelectedOptions,
  } = props;
  const [
    { dropdownOpen, searchTerm, filteredOptions, allOptions, singleSelectedOption, highlightedIndex, multiSelectedOptions },
    dispatch,
  ] = useReducer(reducer, initialState);
  const dropdownRef = useRef(null);

  // Lifecycle
  React.useEffect(() => {
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      dispatch({ type: Actions.CloseDropdown });
    };
  }, []);

  const sameOptions = useComparePrevious<Option[]>(options);
  React.useEffect(() => {
    if (!sameOptions) dispatch({ type: Actions.SetInitialOptions, payload: sortOptions(options) });
  }, [options]);

  React.useEffect(() => {
    if (propsSearchTerm) handleSearchChange(propsSearchTerm);
  }, [propsSearchTerm, allOptions]);

  React.useEffect(() => {
    if (!multi) {
      handleSelection(singleSelectedOption);
      // if (singleSelectedOption) updateSearchTerm(singleSelectedOption.label);
    }
  }, [singleSelectedOption]);

  React.useEffect(() => {
    // If this is controlled, the handle selection will be called on click instead of here
    if (multi && !propsSelectedOptions) {
      handleSelections(multiSelectedOptions);
    }
  }, [multiSelectedOptions]);

  React.useEffect(() => {
    if (!multi) {
      if (propsSelectedOption === '') {
        clearSelection();
      }
      if (propsSelectedOption) {
        const pickedOption = options.find((opt: Option) => opt.value === propsSelectedOption);
        handleOptionSelect(pickedOption);
      }
    }
  }, [propsSelectedOption]);

  const sameSelectedOptions = useComparePrevious<string[]>(propsSelectedOptions);
  React.useEffect(() => {
    if (multi) {
      if (!sameSelectedOptions) handlePassedSelectedOptions();
    }
  }, [propsSelectedOptions]);

  React.useEffect(() => {
    const el = document.getElementById(`dropdown-option-${highlightedIndex}`);
    if (el) el.scrollIntoView();
  }, [highlightedIndex]);

  // End Lifecycle

  // Functions
  const toggleDropdownOpen = () => {
    dispatch({ type: Actions.ToggleDropdownOpen });
  };

  const openDropdown = () => {
    dispatch({ type: Actions.OpenDropdown });
  };

  const closeDropdown = () => {
    dispatch({ type: Actions.CloseDropdown });
  };

  const updateSearchTerm = (val: string) => {
    dispatch({ type: Actions.SetSearchTerm, payload: val });
  };

  const clearSingleSelectedOption = () => {
    dispatch({ type: Actions.ClearSingleSelectedOption });
  };

  const clearAllMultiSelectedOptions = () => {
    dispatch({ type: Actions.ClearAllMultiSelectedOptions });
  };

  const clearSelection = () => {
    dispatch({ type: Actions.ClearSelection, payload: options });
  };

  const handleTabOff = () => {
    closeDropdown();
    if (!singleSelectedOption && !multi) clearSelection();
  };

  const handleChevronDownClick = () => {
    toggleDropdownOpen();
    dropdownRef.current.focus();
  };

  const handleCloseIconClick = () => {
    clearSelection();
    dropdownRef.current.focus();
  };

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      dispatch({ type: Actions.CloseDropdown });
    }
  };

  const sortOptions = (options: Option[]) => {
    return sort((a: Option, b: Option) => a.label.localeCompare(b.label), options);
  };

  const handlePassedSelectedOptions = () => {
    if (propsSelectedOptions) {
      const newOptions = options.reduce(
        (nOptions: { availableOptions: Option[]; selectedOptions: Option[] }, currentOption: Option) => {
          const isInSelectedOptions = propsSelectedOptions.find((sOption: string) => sOption === currentOption.value);
          if (!isInSelectedOptions) nOptions.availableOptions.push(currentOption);
          else nOptions.selectedOptions.push(currentOption);
          return nOptions;
        },
        { availableOptions: [], selectedOptions: [] },
      );
      dispatch({
        type: Actions.HandlePassedSelectedOptions,
        payload: { selectedOptions: sortOptions(newOptions.selectedOptions), allOptions: sortOptions(newOptions.availableOptions) },
      });
    }
  };

  const handleSearchChange = (val: string) => {
    if (!dropdownOpen) openDropdown();
    if (!multi) clearSingleSelectedOption();
    updateSearchTerm(val);
    filterItems(val);
  };

  const setHighlightedIndex = (newIndex: number) => {
    if (newIndex > filteredOptions.length - 1) {
      throw new Error('Invalid highlighted index value, must be less than or equal to options length');
    }
    if (newIndex < 0) {
      throw new Error('Invalid highlighted index value, cannot be less than 0');
    }
    dispatch({ type: Actions.SetHighlightedIndex, payload: newIndex });
  };

  const handleDropdownKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const lastIndex = filteredOptions.length - 1;
    const initialIndex = 0;
    if (event.key === Keypresses.Down) {
      if (!dropdownOpen) openDropdown();
      else if (highlightedIndex < lastIndex) setHighlightedIndex(highlightedIndex + 1);
      else if (highlightedIndex === lastIndex) setHighlightedIndex(initialIndex);
      return;
    }
    if (event.key === Keypresses.Up) {
      if (!dropdownOpen) {
        openDropdown();
        setHighlightedIndex(lastIndex);
      } else if (highlightedIndex > initialIndex) setHighlightedIndex(highlightedIndex - 1);
      else if (highlightedIndex === initialIndex) setHighlightedIndex(lastIndex);
      return;
    }
    if (event.key === Keypresses.Enter) {
      if (dropdownOpen) {
        const selectedOpt = filteredOptions[highlightedIndex];
        if (selectedOpt) handleOptionSelect(selectedOpt);
      }
    }
    if (event.key === Keypresses.Tab) {
      handleTabOff();
      return;
    }
  };

  const filterItems = (filterQuery: string, passedOptions?: Option[]) => {
    const matchedItems: Option[] = [];
    const options: Option[] = passedOptions || allOptions;
    if (!options) return;
    if (filteredOptions.length > 0) setHighlightedIndex(0);

    options.forEach((opt: Option) => {
      const searchTerms = opt.searchTerms || [opt.value, opt.label, opt.subLabel || ''];

      const matched = searchTerms.some((term: string) => {
        // exact match
        const valueLength = filterQuery.split('').length;
        const termSnippet = term.substring(0, valueLength);
        return termSnippet.toLowerCase() === filterQuery.toLowerCase();

        // Fuzzy Match
        // return term.toLowerCase().includes(filterQuery.toLowerCase())
      });

      if (matched) matchedItems.push(opt);
    });

    dispatch({ type: Actions.SetFilteredOptions, payload: sortOptions(matchedItems) });
  };

  const handleOptionSelect = (option: Option) => {
    if (!multi) {
      dispatch({ type: Actions.SetSelectedOption, payload: option });
      filterItems('');
      if (dropdownRef && dropdownRef.current) {
        dropdownRef.current.blur();
      }
    }

    if (multi) {
      const payload = {
        allOptions: allOptions.filter((opt: Option) => opt.value !== option.value),
        filteredOptions: allOptions.filter((opt: Option) => opt.value !== option.value),
        multiSelectedOptions: [...multiSelectedOptions, option],
      };

      // If this is controlled, call the handle selections method here -- otherwise if uncontrolled, let the useEffect hook handle it
      if (propsSelectedOptions) {
        handleSelections(payload.multiSelectedOptions);
      }

      dispatch({ type: Actions.HandleMultiOptionSelect, payload });
      if (dropdownRef && dropdownRef.current) {
        dropdownRef.current.blur();
      }
    }
  };

  const handleMultiOptionRemove = (option: Option) => {
    const payload = {
      allOptions: [...allOptions, option],
      multiSelectedOptions: multiSelectedOptions.filter((opt: Option) => opt.value !== option.value),
    };

    dispatch({ type: Actions.HandleMultiOptionRemove, payload });

    // If this is controlled, call the handle selections method here -- otherwise if uncontrolled, let the useEffect hook handle it
    if (propsSelectedOptions) {
      handleSelections(payload.multiSelectedOptions);
    }

    const newOptions = sortOptions([...allOptions, option]);
    filterItems(searchTerm, newOptions);
  };

  // Input
  const { value, handleInput } = useInput({
    value: searchTerm,
    setValueState: handleSearchChange,
  });

  return {
    value,
    handleInput,
    handleOptionSelect,
    filterItems,
    handleDropdownKeyDown,
    setHighlightedIndex,
    handleSearchChange,
    handleEscape,
    handleChevronDownClick,
    handleTabOff,
    clearSelection,
    clearSingleSelectedOption,
    updateSearchTerm,
    closeDropdown,
    openDropdown,
    toggleDropdownOpen,
    handleCloseIconClick,
    clearAllMultiSelectedOptions,
    handleMultiOptionRemove,
    dropdownRef,
    dropdownOpen,
    searchTerm,
    filteredOptions,
    allOptions,
    singleSelectedOption,
    highlightedIndex,
    multiSelectedOptions,
  };
};

export default useDropdown;
