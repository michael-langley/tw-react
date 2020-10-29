import React from 'react';
import usePrevious from './usePrevious';
import { equals } from 'ramda';

const useComparePrevious = <T extends {}>(value: T): boolean => {
  const previousValue = usePrevious<T>(value);
  return equals(value, previousValue);
};

export default useComparePrevious;
