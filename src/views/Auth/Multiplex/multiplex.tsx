import React, { useState, useEffect } from 'react';

export const MultiplexView: React.FC = () => {
  const VentanaSucursales = () => {
    const [sucursales, setSucursales] = useState([]);

    useEffect(() => {
      fetch('https://webapicinepacho.azurewebsites.net/api/multiplex')
        .then(response => response.json())
        .then(data => setSucursales(data))
        .catch(error => console.log(error));
    }, []);

    return (
      <div>
        <h1>Sucursales de Cine</h1>
        {sucursales.map((sucursal: any) => (
          <div key={sucursal.idMultiplex}>
            <h2>{sucursal.ubicacion}</h2>
            <p>Dirección: {sucursal.direccion}</p>
            <img src={sucursal.imagenMultiplex} alt={sucursal.ubicacion} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Contenido adicional */}
      <VentanaSucursales />
    </div>
  );
};
