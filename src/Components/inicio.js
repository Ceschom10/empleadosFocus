import React from 'react';
import inicioo from '../assets/inicioo.jpg'
import Grid from '@material-ui/core/Grid'

export default function Inicio() {
    return(
        <div className="ini">
            <Grid>
            <h1>BIENVENIDOS AL SITIO</h1>
            <img src={inicioo} className="inicio"/>
            </Grid>
        </div>
           
    )
    
}