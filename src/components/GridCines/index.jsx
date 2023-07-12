import React, { useEffect, useState } from 'react';
import { CardCine } from '../CardCine';
import './index.css';

export const GridCines = () => {
  const categories = ['Multiplex'];

  const [images, setImages] = useState([]);

  useEffect(() => {
    getCines();
  }, []);


  const getCines = async () => {

    const url = 'https://webapicinepacho-cinepacho.azurewebsites.net/api/multiplex';
    const resp = await fetch( url );

    const data = await resp.json();
    console.log(data);
    setImages(data);
  };

  return (
    <>
      <h1 className="text-blue-001 font-bold lg:text-5xl text-xl text-center bg-gray-300 py-4">
        {categories}
      </h1>
      <div className="card-grid-cines flex justify-center items-center bg-gray-300">
        {images.map((img) => (
          <CardCine key={img.idMultiplex} {...img} />
        ))}
      </div>
    </>
  );
};

export default GridCines;
