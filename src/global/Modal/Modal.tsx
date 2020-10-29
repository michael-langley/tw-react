import React, { useState } from 'react';
import cx from 'classnames';
import Backdrop from '../Backdrop/BackdropOverlay';
import Close from '../../icons/IconClose';
import IconButton from '../Button/IconButton';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  body: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  titleText?: string;
  containerClass?: string;
  titleContainerClass?: string;
  titleClass?: string;
  bodyContainerClass?: string;
  footerContainerClass?: string;
  handleToggle?: (openStatus: boolean) => void;
  handleClose?: () => void;
  plain?: boolean;
}

const Modal = (props: Props) => {
  const {
    body,
    footer,
    open = false,
    titleText,
    containerClass,
    titleContainerClass,
    titleClass,
    bodyContainerClass,
    footerContainerClass,
    handleToggle = () => {},
    handleClose = () => {},
    plain = false,
    ...rest
  } = props;
  const modalClasses = cx(
    'modal screen-top-third bg-white shadow-lg rounded z-50 mt-6 mb-12 overflow-scroll w-11/12 sm:w-2/3 md:w-7/12 lg:w-1/2 xl:w-5/12',
    containerClass,
    {
      'border-t-4 border-primary-400': !plain,
    },
  );
  const titleContainerClasses = cx('flex items-center justify-end p-2 sm:p-3 md:p-4 border-gray-500 border-b', titleContainerClass);
  const titleClasses = cx('flex sm:text-lg md:text-xl justify-center leading-tight tracking-tighter flex-1', titleClass);
  const bodyClasses = cx('', bodyContainerClass, {
    'text-sm sm:text-base flex justify-center items-center pt-5 pb-4': !plain,
  });
  const footerClasses = cx('flex justify-end p-3', footerContainerClass);

  const [isOpen, setIsOpen] = useState<boolean>(open);

  const onClose = () => {
    setIsOpen(false);
    handleClose();
  };

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      onClose();
    };
  }, []);

  React.useEffect(() => {
    handleToggle(isOpen);
  }, [isOpen]);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => (document.body.style.overflow = 'unset');
    }
  }, [isOpen]);

  if (isOpen) {
    return (
      <>
        <Backdrop handleClick={onClose} />
        <div className={modalClasses} {...rest}>
          {titleText && (
            <div id="modal-title" className={titleContainerClasses}>
              <h4 className={titleClasses}>{titleText}</h4>
              <div>
                <IconButton handleClick={onClose}>
                  <Close className="fill-current text-primary-800 h-6 w-6 sm:h-8 sm:w-8" />
                </IconButton>
              </div>
            </div>
          )}
          <div className={bodyClasses}>{body}</div>
          {footer && <div className={footerClasses}>{footer}</div>}
        </div>
      </>
    );
  }

  return null;
};

export default Modal;
