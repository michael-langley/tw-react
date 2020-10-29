import React, { useState } from 'react';
import cx from 'classnames';
import HamburgerIcon from '../../icons/IconMenu';
import IconButton from '../Button/IconButton';
import CloseIcon from '../../icons/IconClose';
import BackButton from '../Button/BackButton';

interface Props {
  homeLinkComponent: () => React.ReactNode;
  navLinks: (onClick: () => void) => React.ReactNode;
  desktopDropdownMenu?: () => React.ReactNode;
  mobileAuxMenu?: (onClick: () => void) => React.ReactNode;
  className?: string;
  transparent?: boolean;
  noBackButton?: boolean;
}

const TopNavigation = (props: Props) => {
  const { className, homeLinkComponent, navLinks, desktopDropdownMenu, mobileAuxMenu, transparent, noBackButton } = props;
  const classes = cx('sm:flex sm:justify-between sm:items-center px-2 sm:px-10 sm:py-3', className, {
    'bg-transparent': !!transparent,
    'bg-primary-900': !transparent,
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const desktopNavClasses = cx('text-sm hidden sm:block');
  const mobileNavClasses = cx('text-sm sm:hidden px-4 pt-2 pb-4 bg-primary-900', {
    block: isOpen,
    hidden: !isOpen,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={classes}>
      <div className="flex px-4 py-2 items-center justify-between sm:p-0">
        <div className="flex items-center">
          {!noBackButton && <BackButton className="-ml-5 mr-1" />}
          {homeLinkComponent()}
        </div>

        <div className="sm:hidden">
          <IconButton handleClick={toggleMenu}>
            {!isOpen && <HamburgerIcon className="w-6 h-6 fill-current text-white" />}
            {isOpen && <CloseIcon className="w-6 h-6 fill-current text-white" />}
          </IconButton>
        </div>
      </div>

      <nav className={desktopNavClasses}>
        <div className="flex items-center">
          {navLinks(closeMenu)}
          {desktopDropdownMenu && desktopDropdownMenu()}
        </div>
      </nav>

      <nav className={mobileNavClasses}>
        <div>
          {navLinks(closeMenu)}
          {mobileAuxMenu && <div className="py-5 border-t border-gray-700">{mobileAuxMenu(closeMenu)}</div>}
        </div>
      </nav>
    </header>
  );
};

export default TopNavigation;
