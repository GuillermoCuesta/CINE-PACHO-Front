import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MainLayout } from '../../layouts/MainLayout';
import './index.css';

export const Pay = () => {
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [tipoTarjeta, setTipoTarjeta] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [nombreCliente, setNombreCliente] = useState('');
  const [numTelefonoCliente, setNumTelefonoCliente] = useState('');
  const [cedulaCliente, setCedulaCliente] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const puntosPelicula = 10;

  const handleChangeNumeroTarjeta = (e) => {
    setNumeroTarjeta(e.target.value);
  };

  const handleChangeNombreCliente = (e) => {
    setNombreCliente(e.target.value);
  };
  
  const handleChangeNumTelefonoCliente = (e) => {
    setNumTelefonoCliente(e.target.value);
  };
  
  const handleChangeCedulaCliente = (e) => {
    setCedulaCliente(e.target.value);
  };
  

  const handleValidarTarjeta = () => {
    // Validar campos vacíos
    if (nombreCliente === '' || numTelefonoCliente === '' || cedulaCliente === '') {
      setMensaje('Todos los campos son requeridos');return;}
    if (!(/^\d+$/.test(numTelefonoCliente)) || !(/^\d+$/.test(cedulaCliente))) {
      setMensaje('El número de teléfono y la cédula deben ser enteros positivos');return; }  

    // Validar el tipo de tarjeta
    if (numeroTarjeta.startsWith('4')) {
      setTipoTarjeta('Visa');
    } else if (numeroTarjeta.startsWith('5')) {
      setTipoTarjeta('Mastercard');
    } else {
      setTipoTarjeta('');
      setMensaje('Número de tarjeta no válido');
      return;
    }

    // Validar si el número de tarjeta es válido
    const esTarjetaValida = validarTarjeta(numeroTarjeta);

    if (esTarjetaValida) {
      setMensaje(`Transacción exitosa. Con esta compra has sumado ${puntosPelicula*location.state.listPost.length} puntos!`);

      console.log("Este es el location state desde Pay");
      console.log(location.state);
      // Acciones necesarias para sumar los puntos...
      
      setTimeout(() => {
        navigate('/home', { state: null });
      }, 5000);
    } else {
      setMensaje('Número de tarjeta no válido');
    }
  };

  const validarTarjeta = (numeroTarjeta) => {
    // Implementar lógica de validación de tarjeta
    return numeroTarjeta.length === 16;
  };

  const isTarjetaValida = validarTarjeta(numeroTarjeta);
  const inputClassName = isTarjetaValida ? 'transaction-input valid' : 'transaction-input invalid';
  const messageClassName = mensaje === 'Número de tarjeta no válido' ? 'transaction-message invalid' : 'transaction-message valid';

  return (
    <MainLayout>
      <div className="transaction-container">
        <div className="transaction-title">TRANSACCIÓN</div>
        <div className="transaction-total">
          Total a pagar: {location.state.totalCheckout}$
        </div>
        <h1 className="transaction-title">Validación de Tarjeta de Pago</h1>
        <input
          className={inputClassName}
          type="text"
          value={numeroTarjeta}
          onChange={handleChangeNumeroTarjeta}
          placeholder="Ingrese el número de tarjeta Visa o MasterCard"
        />

        <input
          className={inputClassName}
          type="text"
          value={nombreCliente}
          onChange={handleChangeNombreCliente}
          placeholder="Ingrese el nombre del cliente"
        />

        <input
          className={inputClassName}
          type="text"
          value={numTelefonoCliente}
          onChange={handleChangeNumTelefonoCliente}
          placeholder="Ingrese el número de teléfono del cliente"
        />

        <input
          className={inputClassName}
          type="text"
          value={cedulaCliente}
          onChange={handleChangeCedulaCliente}
          placeholder="Ingrese la cédula del cliente"
        />




        <button className="transaction-button" onClick={handleValidarTarjeta}>
          Validar
        </button>
        <p className={messageClassName}>{mensaje}</p>
        {tipoTarjeta && (
          <p className={`transaction-type ${tipoTarjeta.toLowerCase()}`}>
            Tipo de tarjeta: {tipoTarjeta}
          </p>
        )}
      </div>
    </MainLayout>
  );
}
export default Pay;


