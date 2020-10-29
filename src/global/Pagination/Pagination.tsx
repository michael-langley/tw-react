import React from 'react';
import cx from 'classnames';
import usePagination from '../../component-hooks/usePagination';
import { CheveronLeft, CheveronRight, IconDotsHorizontal } from '../../icons';
import { UsePaginationProps } from 'tw-react';

interface Props extends UsePaginationProps {
  showAdvanceButtons?: boolean;
  containerClassName?: string;
  buttonGroupClassName?: string;
  pageButtonClassName?: string;
  advanceButtonClassName?: string;
  bumperClassName?: string;
}

const Pagination = (props: Props) => {
  const {
    showAdvanceButtons = false,
    containerClassName,
    buttonGroupClassName,
    pageButtonClassName,
    advanceButtonClassName,
    bumperClassName,
  } = props;

  const { totalPages, advanceLeft, currentPage, buildPageNumbers, bumpers, handlePageClick, advanceRight } = usePagination(props);

  const pages = buildPageNumbers();

  const containerClasses = cx(containerClassName);
  const buttonGroupClasses = cx('flex', buttonGroupClassName);
  const pageButtonClasses = cx(
    'mr-3 font-semibold text-primary-800 focus:outline-none rounded-full px-2 text-sm sm:text-base',
    pageButtonClassName,
  );
  const advanceButtonClasses = cx(
    'mr-3 rounded-full px-1 bg-white font-semibold focus:outline-none text-primary-800',
    advanceButtonClassName,
  );
  const bumperClasses = cx('mr-2 self-end text-primary-900 font-semibold text-sm sm:text-base', bumperClassName);

  if (totalPages <= 1) return null;

  return (
    <div className={containerClasses}>
      <div className={buttonGroupClasses}>
        {showAdvanceButtons && currentPage > 1 && (
          <button className={advanceButtonClasses} onClick={advanceLeft}>
            <CheveronLeft className="fill-current h-5 w-5" />
          </button>
        )}
        {pages.map((page) => {
          const key = `${page}- key`;
          const active = page === currentPage;

          if (page === bumpers.Left || page === bumpers.Right) {
            return (
              <div className={bumperClasses} key={key}>
                <IconDotsHorizontal className="fill-current h-5 w-5" />
              </div>
            );
          }

          return (
            <button
              key={key}
              className={cx(pageButtonClasses, {
                'bg-primary-800 i-text-gray-100': active,
              })}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          );
        })}
        {showAdvanceButtons && currentPage < totalPages && (
          <button className={advanceButtonClasses} onClick={advanceRight}>
            <CheveronRight className="fill-current h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
