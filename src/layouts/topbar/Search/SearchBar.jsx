
import { X } from "react-feather"
import SearchResults from "./SearchResults"
function SearchBar({showSearch, setShowSearch}) {
    return(
    <div className="absolute top-0 w-full">
        <div className="relative container mx-auto h-12 flex items-center py-1">
            <input autoFocus  type="text" placeholder="Search..." className='outline-none h-full w-full text-gray-700 rounded px-4' />
            <X onClick={() => setShowSearch(!showSearch)} className='text-gray-500 text-2xl absolute top-0 right-0 mx-4 mt-3 cursor-pointer hover:text-red-500' />
            <SearchResults />
        </div>
    </div>
    )
}
export default SearchBar

