//@ts-ignore
const { OptionHTMLAttributes } = require('react');

declare module 'tw-react' {
  export = TwReact;
  //@ts-ignore
  export as namespace TwReact;
}

declare namespace TwReact {
  // Pagination
  interface UsePaginationProps {
    totalResults: number;
    resultsPerPage: number;
    pageRange: number;
    handlePageChange: (values: HandlePageChangeArgs) => void;
    showAdvanceButtons?: boolean;
    initialPage?: number;
  }

  interface PaginationState {
    totalPages: number;
    currentPage: number;
  }

  interface HandlePageChangeArgs {
    totalPages: number;
    resultsPerPage: number;
    pageRange: number;
    currentPage: number;
  }

  // Option
  //@ts-ignore
  interface Option extends OptionHTMLAttributes<HTMLOptionElement> {
    attrs?: { [key: string]: any };
    searchTerms?: string[];
    subLabel?: string;
    label: string;
    value: string;
    selected?: boolean;
  }

  interface Action {
    type: string;
    payload?: any;
  }
}
