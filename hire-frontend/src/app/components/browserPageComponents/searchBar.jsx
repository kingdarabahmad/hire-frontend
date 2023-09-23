import React, { useState } from 'react';

const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          onSearch(query);
        }
    };

  return (
    <form onSubmit={handleSubmit} className='border-2  w-full flex justify-center rounded-lg p-2'>
      <input className='w-full  outline-none'  type="text" value={query} onChange={(e)=> setQuery(e.target.value)} placeholder='search the web...' onKeyDown={handleKeyPress} />
    </form>
  )
}

export default SearchBar