import React from 'react';
import inicioo from '../assets/inicioo.jpg'

export default function Inicio() {
    return(
        <div>
            <h1>BIENVENIDOS AL SITIO</h1>
            <img src={inicioo} className="inicio"/>
        </div>
    )
    
}