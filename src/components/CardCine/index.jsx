import './index.css';

import React from 'react'

export const CardCine = ( {direccion,idMultiplex,imagenMultiplex,ubicacion} ) => {
    console.log({direccion,idMultiplex,imagenMultiplex,ubicacion});
    return (
    
    <div className='cardCine '>
        <img src={ imagenMultiplex } alt={ direccion } />
        <p>{ direccion }</p>
        <p>{ ubicacion }</p> 
        <button className="button">Seleccionar</button>
    </div>
  )
}
