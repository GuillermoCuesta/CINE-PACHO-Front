import React from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css';


export const CardCine = ( {direccion,idMultiplex,imagenMultiplex,ubicacion} ) => {
    console.log({direccion,idMultiplex,imagenMultiplex,ubicacion});
    
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/components/GridMovies');
    };

    return (
    
    <div className='cardCine '>
        <img src={ imagenMultiplex } alt={ direccion } />
        <p>{ direccion }</p>
        <p>{ ubicacion }</p> 
        <button className="button" onClick={handleClick}>Seleccionar</button>
    </div>
  )
}
