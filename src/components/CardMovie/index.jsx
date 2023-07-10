import React from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css';


export const CardMovie = ( {idFuncion,idMultiplex,numSala,idPelicula,estado, fechaInicio,fechaFin,ubicacion,nombrePelicula,imagenPelicula} ) => {
    console.log({idFuncion,idMultiplex,numSala,idPelicula,estado, fechaInicio,fechaFin,ubicacion,nombrePelicula,imagenPelicula});
    
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/auth/cinema');
    };
    
    return (
    
    <div className='cardMovie '>
        <img src={ imagenPelicula } alt={ ubicacion } />
        <p><b>{ nombrePelicula }</b></p>
        <p>Sala: { numSala }</p>
        <p>Estado: { estado }</p> 
        <p>Inicio: { fechaInicio }</p>
        <p>Fin: { fechaFin }</p>
        <p>Ubicación: { ubicacion }</p>
        <button className="button" onClick={handleClick}>Seleccionar</button>
    </div>
  )
}