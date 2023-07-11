import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import './index.css';


export const CardMovie = ( {idFuncion,idMultiplex,numSala,idPelicula,estado, fechaInicio,fechaFin,ubicacion,nombrePelicula,imagenPelicula} ) => {
    console.log({idFuncion,idMultiplex,numSala,idPelicula,estado, fechaInicio,fechaFin,ubicacion,nombrePelicula,imagenPelicula});
    
    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = () => {   
       navigate(`/auth/cinema/${idMultiplex}/${idFuncion}`,{state: {
        idFuncionSelect:idFuncion,idMultiplexSelect:idMultiplex, 
        fechInicioSelect:fechaInicio,fechaFinSelect:fechaFin,ubicacionSelect:ubicacion,
        nombrePeliculaSelect:nombrePelicula,numSalaSelect:numSala
      },})
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