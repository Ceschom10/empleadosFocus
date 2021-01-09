import React, { createContext, useContext, useState } from 'react'
import { SearchContext } from './Context'

function Search() {
    const [search, setSearch] = useContext(SearchContext);
    return (
        <div>
            <input type="text" onChange={(event) => 
                setSearch(event.target.value)}/>
        </div>
    )
}

export default Search
