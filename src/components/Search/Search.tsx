import { FC } from "react";
import SearchIcon from "../../assets/search.svg?react";

interface SearchProps {}
export const Search: FC<SearchProps> = () => {
  return (
    <div className="flex text-gray-400 gap-2 rounded-xl bg-gray-200 px-2 py-2 items-center focus-within:outline focus-within:outline-1">
      <SearchIcon className="w-4 h-4" />
      <input
        type="search"
        className="w-full text-sm text-black placeholder-gray-400 bg-transparent outline-none"
        placeholder="Search"
      />
    </div>
  );
};
