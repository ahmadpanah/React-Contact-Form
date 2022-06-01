import React from 'react'
import { MdSearch } from 'react-icons/md'


const Search = ( { handleSearchNote } ) => {
  return (
    <div className='search'>
        <MdSearch className='search-icons' size={'1.2em'} />
        <input type='text'
        onChange={(event)=>
            handleSearchNote(event.target.value)
        }
        placeholder='Search...' />

    </div>
  )
}

export default Search