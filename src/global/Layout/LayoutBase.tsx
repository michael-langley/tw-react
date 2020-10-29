import React from 'react';

interface Props {
  children: React.ReactNode;
  navBar?: () => React.ReactNode;
}

const LayoutBase = (props: Props) => {
  const { children, navBar } = props;
  return (
    <div className="h-screen flex flex-col">
      {navBar()}
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
};

export default LayoutBase;
