import React from 'react';
import TabBar from './TabBar';
import { TabInterface } from './Tab';

interface Props {
  tabs: TabInterface[];
  onSelectedTabUpdated?: (tab: TabInterface) => void;
  children: React.ReactNode;
  selectedTab?: TabInterface;
  handleTabSelected?: (tab: TabInterface) => void;
  initialTabSelected?: TabInterface;
  tabBarClassName?: string;
  className?: string;
}

const TabView = (props: Props) => {
  const {
    tabs = [],
    onSelectedTabUpdated,
    initialTabSelected,
    children,
    tabBarClassName,
    className,
    selectedTab,
    handleTabSelected,
  } = props;

  return (
    <div className={className}>
      <TabBar
        className={tabBarClassName}
        tabs={tabs}
        onSelectedTabUpdated={onSelectedTabUpdated}
        initialTabSelected={initialTabSelected}
        selectedTab={selectedTab}
        handleTabSelected={handleTabSelected}
      />
      {children}
    </div>
  );
};

export default TabView;
