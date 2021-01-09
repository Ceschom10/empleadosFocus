import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from './Context';
import Item from './Item';

const USERS = [
    {id: 1, name: 'Gabriela'},
    {id: 2, name: 'Alfonso'},
    {id: 3, name: 'Fatima'},
    {id: 4, name: 'Karla'},
    {id: 5, name: 'Roberto'},
    {id: 6, name: 'Ernesto'},
    {id: 7, name: 'Fany'},
    {id: 8, name: 'Julia'},
]

function List({}){
    
    const [search, setSearch] = useContext(SearchContext);
    const [users, setUsers] = useState(USERS)

    useEffect(() => {
        //effect
        const filteredUsers = USERS .filter(user =>{
            return user.name.toLowerCase().includes(search.toLowerCase())
        });
        setUsers(filteredUsers);
        console.log('new users ', filteredUsers);
        return () => {
            console.log('will unmount');
        }
    }, [search])

    return (
        <div className="App-users">
             { 
                users .map((user)=> {
                    return <Item user={user} 
                    key={user.id.toString()}/>
                })
            }
            
        </div>
    )
}

export default List
