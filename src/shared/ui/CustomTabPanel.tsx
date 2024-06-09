import React from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  activeTabIndex: number;
}

export const CustomTabPanel = ({ children, activeTabIndex, index }: TabPanelProps) => {
  return <div hidden={activeTabIndex !== index}>{activeTabIndex === index && <>{children}</>}</div>;
};
