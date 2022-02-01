
import { X } from "react-feather"
function SearchBar({showSearch, setShowSearch}) {
    return(
    <div className="absolute top-0 w-full bg-gradient-to-t from-gray-800 to-gray-700 h-12 text-white">
        <div className="relative container mx-auto h-12 flex items-center py-1">
        <input type="text" className='outline-none h-full w-full text-gray-700 rounded px-4' />
        <X onClick={() => setShowSearch(!showSearch)} className='text-gray-500 text-2xl absolute top-0 right-0 mx-4 mt-3 cursor-pointer hover:text-red-500' />
        </div>
    </div>
    )
}
export default SearchBar

