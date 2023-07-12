import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MainLayout } from '../../layouts/MainLayout';
import './index.css';

export const Checkout = () => {
  //const navigate = useNavigate();
  let boletasPref=0;
  let boletasGen=0;
  let total=0;
  
  const precioGeneral=11000;
  const precioPreferencial=15000;
  const navigate = useNavigate();
  const location = useLocation();
  const [datos, setDatos] = useState(location.state.listPost);
  const handleClick = () => {
    console.log( "Este es el location state desde Checkout")
    console.log(location.state)
    navigate(`/components/Pay`,{state: {
      ...location.state, totalCheckout:total
    },})
    { state: null }
  };
  return (
    <>
      <MainLayout>
        <table className='table'>
            <thead className='table-head'>
              <tr className='row-1'>
                <th colSpan="2">Película: {location.state.nombrePeliculaSelect}</th>
                <th colSpan="2">Ubicación: {location.state.ubicacionSelect}</th>
              </tr>
              <tr className='row-2'>
              <th colSpan="2">Inicio: {location.state.fechInicioSelect}</th>
              <th colSpan="2">Fin: {location.state.fechaFinSelect}</th>
              </tr>
              <tr className='row-3'>
              <th colSpan="2">Boletos: Fila-Puesto</th>
              <th colSpan="2">Precio</th>
              </tr>
            </thead>
            <tbody className='table-body'>
              {datos.map((dato) => (
                <tr key={dato.seat}>
                    <th colSpan="2">{dato.seat}</th>
                    <th colSpan="2">{parseInt(dato.seat.split("-")[0]) === 1 || parseInt(dato.seat.split("-")[0]) === 2
                      ? (boletasPref += 1) && (precioPreferencial + "$")
                      : (boletasGen += 1) && (precioGeneral + "$")}
                    </th>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className='row-1'>
                <th colSpan="2">Total a Pagar</th>
                <th colSpan="2">{(total=boletasGen*precioGeneral+boletasPref*precioPreferencial)+"$"}</th>
              </tr>
            </tfoot>
        </table>
        <div><button className="button" onClick={handleClick}>Confirmar Compra</button></div> 
      </MainLayout>
    </>
    
  )
}
export default Checkout
