import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import Tab, { TabInterface } from './Tab';
import useComparePrevious from '../../component-hooks/useComparePrevious';

interface Props {
  tabs: TabInterface[];
  onSelectedTabUpdated?: (tab: TabInterface) => void;
  selectedTab?: TabInterface;
  handleTabSelected?: (tab: TabInterface) => void;
  initialTabSelected?: TabInterface;
  className?: string;
}

const TabBar = (props: Props) => {
  const { tabs = [], onSelectedTabUpdated, initialTabSelected, className, selectedTab, handleTabSelected = () => {} } = props;
  const [currentTab, setCurrentTab] = useState<TabInterface>();

  useEffect(() => {
    if (initialTabSelected && !selectedTab) {
      setCurrentTab(initialTabSelected);
    }
  }, []);

  const sameTab = useComparePrevious<TabInterface>(currentTab);
  useEffect(() => {
    if (!sameTab && !selectedTab) {
      onSelectedTabUpdated(currentTab);
    }
  }, [currentTab]);

  useEffect(() => {
    if (selectedTab) {
      setCurrentTab(selectedTab);
    }
  }, [selectedTab]);

  const onTabClick = (tab: TabInterface) => {
    setCurrentTab(tab);
    handleTabSelected(tab);
  };

  const classes = cx('flex border-b-2 border-primary-500', className);

  return (
    <div className={classes}>
      {tabs.map((t: TabInterface) => {
        return (
          <Tab
            key={t.key}
            title={t.title}
            handleClick={() => onTabClick(t)}
            className={cx('mr-1', t.className)}
            isSelected={currentTab && currentTab.key === t.key}
          />
        );
      })}
    </div>
  );
};

export default TabBar;
