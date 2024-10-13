import { FC, ReactNode } from "react";

interface TabsProps {
  tabs: ReactNode[];
  activeTab: number;
}
export const Tabs: FC<TabsProps> = ({ tabs, activeTab }) => {
  return (
    <div className="flex mt-4 mb-[1px]">
      {tabs.map((tab, index) => (
        <span
          key={index}
          className={`flex flex-grow justify-center py-2 border-b border-gray-400 ${
            index === activeTab ? "border-black" : "opacity-40"
          }`}
        >
          {tab}
        </span>
      ))}
    </div>
  );
};
