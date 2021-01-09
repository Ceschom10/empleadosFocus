import React, { useState } from 'react'
//CONDICIONAL RENDERING

function Example(props) {
    
    const [value, setValue] = useState(true);
    return (
        <div>
            <p>Algo</p>

            {value && <span>A es verdadera</span>}
            {!value && <span>A es falsa</span>}

            {
            props.value ? <h1> It's true</h1> : <h3> It's false</h3>
            }

            <button type="button" onClick={event =>
            setValue(true)} >V</button>

            <button type="button" onClick={event =>
            setValue(false)} >F</button>

            <button type="button" onClick={event =>
            setValue(lastValue => !lastValue)} >Shared</button>
            
        </div>
    )
}

export default Example
