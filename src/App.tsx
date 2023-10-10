import { useState } from "react";
import { ListItems } from "./components/ListItems";
import { Search } from "lucide-react";

export function App() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="w-screen h-screen flex justify-center bg-zinc-900 py-20">
      <div className="w-full px-4 xl:w-[600px] lg:px-0 xl:px-0 lg:w-[600px] flex flex-col items-center gap-20 ">
        <div className="w-full text-center text-white">
          <h1 className="text-2xl font-bold">
            Type to <span className="text-emerald-400">Filter</span> the List
          </h1>
        </div>
        <div className="w-full bg-zinc-800 flex rounded-lg p-2 items-center">
          <Search 
            className="text-white w-10 cursor-pointer" 
          />
          <input
            type="text"
            className="w-full text-white bg-zinc-800 p-4 outline-none"
            placeholder="Type here to search"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <ListItems 
          searchText={searchText} 
        />
      </div>
    </div>
  );
}
