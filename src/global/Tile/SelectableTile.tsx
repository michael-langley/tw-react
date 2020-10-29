import React, { useState } from 'react';
import { compose } from 'ramda';
import cx from 'classnames';
import Checkmark from '../../icons/IconCheckmarkWithBackground';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  handleClick?: (newActiveState: boolean) => void;
}

const SelectableTile = (props: Props) => {
  const { active = false, handleClick = () => {}, ...rest } = props;
  const [isActive, setIsActive] = useState<boolean>(active);

  const classes = cx(
    'w-32 h-32 sm:w-48 sm:h-48 bg-white rounded-lg shadow-sm px-6 py-4 cursor-pointer focus:outline-none focus:shadow-outline-green hover:shadow-lg',
    {
      'bg-green-100 shadow-outline-green': isActive,
    },
  );

  React.useEffect(() => {
    setIsActive(active);
  }, [active]);

  const toggleIsActive = (act: boolean) => {
    setIsActive(!act);
    return !act;
  };

  return (
    <div className={classes} onClick={() => compose(handleClick, toggleIsActive)(isActive)} {...rest}>
      <div className='flex justify-between items-center mt-1 sm:mt-2'>
        <h1 className='uppercase text-sm sm:text-base tracking-wide text-gray-700 font-bold'>Expert</h1>
        {isActive && (
          <div className='ml-5 flex items-center'>
            <Checkmark className='w-4 h-4' backgroundColor='#97EBDC' checkmarkColor='#00836D' />
          </div>
        )}
      </div>

      <div className='font-semibold text-gray-800 mt-2 sm:mt-3'>
        <span className='text-2xl sm:text-5xl mr-1 sm:mr-2'>12</span>
        <span className='text-base sm:text-2xl'>GB</span>
      </div>

      <div className='mt-1'>
        <span className='sm:text-xl text-gray-700'>$</span>
        <span className='sm:text-xl font-semibold text-gray-700'>300</span>
        <span className='text-xs sm:text-base text-gray-700 mx-1'>/</span>
        <span className='sm:text-lg text-gray-700'>mo</span>
      </div>
    </div>
  );
};

export default SelectableTile;
