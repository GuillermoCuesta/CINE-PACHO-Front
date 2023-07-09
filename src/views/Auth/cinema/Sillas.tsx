// import { ReactElement } from "react";
// import { useState } from "react";

// // Un tipo que representa las props del componente Seat
// type SeatProps = {
//   row: number;
//   column: number;
//   addSeat: (row: number, column: number) => void;
//   removeSeat: (row: number, column: number) => void;
// };

// const salas = [
//   { id: 1, name: "Sala 1", seats: 60, available: 60 },
//   { id: 2, name: "Sala 2", seats: 60, available: 60 },
//   { id: 3, name: "Sala 3", seats: 60, available: 60 },
//   { id: 4, name: "Sala 4", seats: 60, available: 60 },
//   { id: 5, name: "Sala 5", seats: 60, available: 60 },
// ];

// function SalaSelect() {
//   const [selected, setSelected] = useState(null);

//   const handleSelect = (id) => {
//     setSelected(id);
//     alert(`Has seleccionado la ${salas.find((sala) => sala.id === id).name}`);
//   };
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold text-center mb-4">
//         Selección de una sala de cine
//       </h1>
//       <div className="grid grid-cols-2 gap-4">
//         {salas.map((sala) => (
//           <div
//             key={sala.id}
//             className={`p-4 border rounded-lg cursor-pointer ${selected === sala.id ? "bg-green-100" : "bg-gray-100"
//               }`}
//             onClick={() => handleSelect(sala.id)}
//           >
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-gray-700">{sala.name}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// // Un componente que representa una silla de cine
// function Seat(props: SeatProps) {
//   // El estado de la silla: disponible, seleccionada o reservada
//   const [status, setStatus] = useState<"available" | "selected" | "reserved">(
//     "available"
//   );

//   // Una función que cambia el estado de la silla al hacer clic
//   function handleClick() {
//     // Si la silla está disponible, la selecciona y la agrega al archivo JSON
//     if (status === "available") {
//       setStatus("selected");
//       props.addSeat(props.row, props.column);
//     }
//     // Si la silla está seleccionada, la deselecciona y la elimina del archivo JSON
//     else if (status === "selected") {
//       setStatus("available");
//       props.removeSeat(props.row, props.column);
//     }
//     // Si la silla está reservada, no hace nada
//     else {
//       return;
//     }
//   }

//   // Un estilo diferente para cada estado de la silla
//   let style = {};
//   if (status === "available") {
//     style = { backgroundColor: "green" };
//   } else if (status === "selected") {
//     style = { backgroundColor: "yellow" };
//   } else {
//     style = { backgroundColor: "red" };
//   }

//   // Retorna un botón con el estilo y la función correspondientes
//   return (
//     <button style={style} onClick={handleClick}>
//       {props.row}-{props.column}
//     </button>
//   );
// }

// // Un tipo que representa las props del componente Cinema
// type CinemaProps = {
//   rows: number;
//   columns: number;
// };

// // Un componente que representa una sala de cine con varias sillas
// function Cinema(props: CinemaProps) {
//   // El número de filas y columnas de la sala
//   const rows = props.rows;
//   const columns = props.columns;

//   // El archivo JSON que guarda las sillas seleccionadas
//   const [seats, setSeats] = useState<Record<string, string>>({});

//   // Una función que agrega una silla al archivo JSON
//   function addSeat(row: number, column: number) {
//     // Crea una copia del archivo JSON actual
//     let newSeats = { ...seats };
//     // Agrega la silla con su fila y columna como clave y valor
//     newSeats[`${row}-${column} `] = `${row}-${column}`;
//     // Actualiza el estado del archivo JSON con la copia modificada
//     setSeats(newSeats);
//   }

//   // Una función que elimina una silla del archivo JSON
//   function removeSeat(row: number, column: number) {
//     // Crea una copia del archivo JSON actual
//     let newSeats = { ...seats };
//     // Elimina la silla con su fila y columna como clave
//     delete newSeats[`${row}-${column}`];
//     // Actualiza el estado del archivo JSON con la copia modificada
//     setSeats(newSeats);
//   }

//   // Una función que exporta el archivo JSON como un archivo descargable
//   async function exportJSON() {
//     // Crea un elemento de enlace oculto en el documento
//     let link = document.createElement("a");
//     link.style.display = "none";
//     document.body.appendChild(link);

//     // Convierte el archivo JSON a una cadena de texto
//     let data = JSON.stringify(seats);
//     // Crea un objeto de URL con la cadena de texto como contenido usando importación dinámica
//     let blob = new Blob([data], { type: "text/json" });
//     let url = URL.createObjectURL(blob);

//     // Asigna el objeto de URL al atributo href del enlace
//     link.href = url;
//     // Asigna un nombre al archivo descargable
//     link.download = "seats.json";
//     // Simula un clic en el enlace para iniciar la descarga
//     link.click();
//   }

//   // Crea un arreglo vacío para guardar los componentes de las sillas
//   let seatComponents = [];
//   // Recorre las filas y columnas de la sala y crea un componente de silla por cada una


//   // for (let i = 1; i <= rows; i++) {
//   //   for (let j = 1; j <= columns; j++) {
//   //     seatComponents.push(


//   //         <Seat
//   //           key={`${i}-${j}`}
//   //           row={i}
//   //           column={j}
//   //           addSeat={addSeat}
//   //           removeSeat={removeSeat}
//   //         />


//   //     );
//   //   }
//   // }

//   {
//     seatComponents.map((item, index) => (
//       <Seat
//         key={index}
//         row={1}
//         column={2}
//         addSeat={addSeat}
//         removeSeat={removeSeat}
//       />
//     ))
//   }
//   let list = [];
//   let listPost = [];
//   for (let i = 0; i < 60; i++) {
//     list.push(`1-${i}`)
//   }
// let post = list;

//   // Retorna un div con los componentes de las sillas y un botón para exportar el archivo JSON
//   return (
//     <div>
//       <div className="seats">{seatComponents}</div>
//       <div className="grid grid-cols-10" >

//         {list.map((item, index) => (
//           <div onClick={()=>{
//             listPost.push(item)
//           }}>

//             <h1>{item}</h1>
//           </div>
//         ))}
//       </div>
//       <button onClick={exportJSON}>Exportar JSON</button>
//     </div>
//   );
// }
// // Un componente que representa el código principal
// export const SillasView: React.FC = (): ReactElement => {
//   return (
//     <div className="w-full h-full flex lg:justify-center justify-end lg:items-center bg-white flex-col-reverse lg:flex-row">
//       <div className="lg:w-1/2 w-full flex justify-center items-center mt-6 lg:mt-0">
//         <div className="flex flex-col gap-10 items-center w-full">
//           <h1 className="text-blue-001 font-bold lg:text-5xl text-xl">¡Bienvenid@ a la sala de cine!</h1>
//           <SalaSelect />
//           <h4 className="text-blue-001 text-lg font-thin w-1/2 text-center">
//             Por favor selecciona las sillas que quieras reservar
//           </h4>
//           <Cinema rows={8} columns={10} />
//         </div>
//       </div>
//       <div className="lg:w-1/2 w-full">
//         <img src="/resources/cine.png" alt="Imagen de la sala" />

//       </div>
//     </div>
//   );
// };

import { ReactElement, useEffect, useState } from 'react';

import { MainLayout } from '../../../layouts/MainLayout';
import { SeatInterface } from './types';

export const SillasView: React.FC = (): ReactElement => {
  const [selected, setSelected] = useState(null);
  const [list, setList] = useState<SeatInterface[]>([]);
  const [listPost, setListPost] = useState([]);

  const salas = [
    { id: 1, name: "Sala 1", seats: 60, available: 60 },
    { id: 2, name: "Sala 2", seats: 60, available: 60 },
    { id: 3, name: "Sala 3", seats: 60, available: 60 },
    { id: 4, name: "Sala 4", seats: 60, available: 60 },
    { id: 5, name: "Sala 5", seats: 60, available: 60 },
  ];



  function handleSelect(id: number) {
    setSelected(id);
    alert(`Has seleccionado la ${salas.find((sala) => sala.id === id).name}`);
  }

  function intialValues() {
    if (list.length === 0) {

      for (let i = 1; i <= 60; i++) {
        list.push({
          seat: `1-${i}`,
          status: "available",
        })
      }
    }
  }

  intialValues();


  return (
    <>
      <MainLayout>
        <div className='w-full flex flex-row'>
          <div className='w-1/2'>
            <div className="container mx-auto p-4">
              <h1 className="text-2xl font-bold text-center mb-4">
                Selección de una sala de cine
              </h1>
              <div className="grid grid-cols-2 gap-4">
                {salas.map((sala) => (
                  <div
                    key={sala.id}
                    className={`p-4 border rounded-lg cursor-pointer ${selected === sala.id ? "bg-green-100" : "bg-gray-100"
                      }`}
                    onClick={() => handleSelect(sala.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">{sala.name}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-10" >

                {list.map((item, index) => (
                  <div onClick={() => {
                    if (item.status == 'unavailable') {

                      list[index].status = 'available'
                    } else {
                      list[index].status = 'unavailable'

                    }
                    setList([...list])
                    setListPost(list.filter((item) => item.status == 'unavailable'));
                    
                  }}>
                    <h1 className={`${item.status == 'available' ? 'text-green-400' : ' text-yellow-300'}`}>{item.seat}</h1>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-10 h-10 bg-blue-600' onClick={()=>{
               console.log(listPost)
            } }></div>
          </div>
          <div className='w-1/2'>
            <img src="/resources/cine.png" alt="Imagen de la sala" />
          </div>
        </div>
      </MainLayout>
    </>
  );
};
