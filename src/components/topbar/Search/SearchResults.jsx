import React from 'react';
import SearchResultsItem from './SearchResultsItem';

const SearchResults = () => {
  return (
    <div className='absolute top-0 mt-12 w-full bg-white shadow-md overflow-y-auto max-h-64'>
        <ul>
            <SearchResultsItem />
            <SearchResultsItem />
            <SearchResultsItem />
            <SearchResultsItem />
        </ul>
    </div>
  )
};

export default SearchResults;
