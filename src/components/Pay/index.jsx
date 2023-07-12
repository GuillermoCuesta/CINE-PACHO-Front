import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MainLayout } from '../../layouts/MainLayout';

export const Pay = () => {
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [tipoTarjeta, setTipoTarjeta] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();
  const location = useLocation();


  const handleChangeNumeroTarjeta = (e) => {
    setNumeroTarjeta(e.target.value);
  };

  const handleValidarTarjeta = () => {
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
      setMensaje(`Transacción exitosa. Usted ha sumado X puntos.`);

      console.log( "Este es el location state desde Pay")
      console.log(location.state)
      // Aquí puedes realizar las acciones necesarias para sumar los puntos
      setTimeout(() => {
        navigate('/home', { state: null });
      }, 3000);
      
    } else {
      setMensaje('Número de tarjeta no válido');
    }
  };

  const validarTarjeta = (numeroTarjeta) => {
    // Aquí puedes implementar tu lógica de validación de tarjeta
    // Puedes utilizar bibliotecas externas o algoritmos de validación

    // Ejemplo básico de validación (solo para demostración)
    return numeroTarjeta.length === 16;
  };

  return (
    <>
      <MainLayout>
        <div>
          <div>
            Total a pagar: {location.state.totalCheckout}$
          </div>
          <h1>Validación de Tarjeta de Pago</h1>
          <input
            type="text"
            value={numeroTarjeta}
            onChange={handleChangeNumeroTarjeta}
            placeholder="Ingrese el número de tarjeta Visa o MasterCard"
          />
          <button onClick={handleValidarTarjeta}>Validar</button>
          {mensaje && <p>{mensaje}</p>}
          {tipoTarjeta && <p>Tipo de tarjeta: {tipoTarjeta}</p>}
        </div>
      </MainLayout>
    </>
  );
};

export default Pay;


//export default Pay
