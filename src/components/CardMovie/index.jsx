import React from 'react'
import './index.css';


export const CardMovie = ( {idFuncion,idMultiplex,numSala,idPelicula,estado, fechaInicio,fechaFin,ubicacion,nombrePelicula,imagenPelicula} ) => {
    console.log({idFuncion,idMultiplex,numSala,idPelicula,estado, fechaInicio,fechaFin,ubicacion,nombrePelicula,imagenPelicula});
    return (
    
    <div className='cardMovie '>
        <img src={ imagenPelicula } alt={ ubicacion } />
        <p><b>{ nombrePelicula }</b></p>
        <p>Sala: { numSala }</p>
        <p>Estado: { estado }</p> 
        <p>Inicio: { fechaInicio }</p>
        <p>Fin: { fechaFin }</p>
        <p>Ubicación: { ubicacion }</p>
        <button className="button">Seleccionar</button>
    </div>
  )
}