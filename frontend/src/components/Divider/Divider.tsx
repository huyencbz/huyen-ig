import { FC } from "react";

interface DividerProps {
  label?: string;
}
export const Divider: FC<DividerProps> = ({ label }) => {
  if (label) {
    return (
      <div className="flex items-center">
        <div className="grow border-t border-gray-300 "></div>
        <div className="px-6 text-xs text-gray-400">{label}</div>
        <div className="grow border-t border-gray-300"></div>
      </div>
    );
  }
  return <div className="border-t border-gray-100"></div>;
};
