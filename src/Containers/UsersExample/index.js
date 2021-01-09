import React, { useState } from 'react'
import SearchProvider from './Context'
import List from './List'
import Search from './Search'



function UsersExample() {

    return (
        <div>
            <p>Lista de usuarios</p>
            <SearchProvider>
                <Search/>
                <List/>
            </SearchProvider>
        </div>
    )
}

export default UsersExample
