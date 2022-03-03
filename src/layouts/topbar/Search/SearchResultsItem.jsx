import React from 'react';

const SearchResultsItem = () => {
  return (
        <li className='py-2 border-b border-gray-300 px-4 hover:bg-gray-100 cursor-pointer flex justify-between items-center'>
            <div className="text-md text-gray-700">
                Search result 1
            </div>
            <div className="bg-green-100 rounded-lg px-2 py-1 text-sm">
                1 152 MAD
            </div>
        </li>
    )
};

export default SearchResultsItem;
