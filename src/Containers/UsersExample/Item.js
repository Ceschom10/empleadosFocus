import React from 'react'

function Item({user}) {
    return (
        <div className="App-user">
            <p>Usuario</p>
            <p>{user.id}</p>
            <p>{user.name}</p>
        </div>
    )
}

export default Item
