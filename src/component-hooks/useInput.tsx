import React from 'react';

interface Props {
  defaultValue?: string;
  value?: string;
  setValueState?: (val: string) => void;
  handleInternalValue?: (val: string) => void;
  valueUseState?: [string, React.Dispatch<React.SetStateAction<string>>];
}

const useInput = ({ defaultValue = '', ...inputProps }: Props) => {
  const internalState = React.useState(defaultValue);
  const {
    valueUseState = internalState,
    value = valueUseState[0],
    setValueState = valueUseState[1],
    handleInternalValue = () => {},
  } = inputProps;

  React.useEffect(() => {
    handleInternalValue(value);
  }, [value]);

  function handleInput(passedValue: string) {
    setValueState(passedValue);
  }

  return { value, handleInput };
};

export default useInput;
