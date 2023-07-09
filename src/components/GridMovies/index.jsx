import React, { useEffect, useState } from 'react'
import { CardMovie } from '../CardMovie';
import './index.css';

export const GridMovies = () => {
  const categories = ['Funciones Disponibles'];
  
  const [images, setimages] = useState([])
  
  useEffect(() => {
    getMovies();
  }, [])
  
  const getMovies = async() =>{

    const url = 'https://webapicinepacho-cinepacho.azurewebsites.net/api/funciones?multiplex=2';
    const resp = await fetch( url );
    const data = await resp.json();
    console.log(data);
    setimages(data);
  }
  
    return (
        <>
            <h1 className="text-blue-001 font-bold lg:text-5xl text-xl">{categories}</h1>
            <div className='card-grid-movies'>
                {
                    images.map( img =>(
                        <CardMovie 
                        key= { img.idFuncion }
                        { ...img } />                    
                    ))
                }
            </div>
        </>

    
  )
}
export default GridMovies