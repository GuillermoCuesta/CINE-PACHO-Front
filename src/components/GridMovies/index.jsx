import React, { useEffect, useState } from 'react'
import { CardMovie } from '../CardMovie';
import { MainLayout } from '../../layouts/MainLayout';
import { useNavigate, useLocation } from 'react-router-dom';
import './index.css';

export const GridMovies = (props) => {
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
          <MainLayout>
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
          </MainLayout>
        </>

    
  )
}
export default GridMovies