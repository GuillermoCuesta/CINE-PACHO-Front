import { useState } from "react";
import { ReactElement } from "react";


// Un tipo que representa las props del componente Seat
type SeatProps = {
  row: number;
  column: number;
  addSeat: (row: number, column: number) => void;
  removeSeat: (row: number, column: number) => void;
};

// Un componente que representa una silla de cine
function Seat(props: SeatProps) {
  // El estado de la silla: disponible, seleccionada o reservada
  const [status, setStatus] = useState<"available" | "selected" | "reserved">(
    "available"
  );

  // Una función que cambia el estado de la silla al hacer clic
  function handleClick() {
    // Si la silla está disponible, la selecciona y la agrega al archivo JSON
    if (status === "available") {
      setStatus("selected");
      props.addSeat(props.row, props.column);
    }
    // Si la silla está seleccionada, la deselecciona y la elimina del archivo JSON
    else if (status === "selected") {
      setStatus("available");
      props.removeSeat(props.row, props.column);
    }
    // Si la silla está reservada, no hace nada
    else {
      return;
    }
  }

  // Un estilo diferente para cada estado de la silla
  let style = {};
  if (status === "available") {
    style = { backgroundColor: "green" };
  } else if (status === "selected") {
    style = { backgroundColor: "yellow" };
  } else {
    style = { backgroundColor: "red" };
  }

  // Retorna un botón con el estilo y la función correspondientes
  return (
    <button style={style} onClick={handleClick}>
      {props.row}-{props.column}
    </button>
  );
}

// Un tipo que representa las props del componente Cinema
type CinemaProps = {
  rows: number;
  columns: number;
};

// Un componente que representa una sala de cine con varias sillas
function Cinema(props: CinemaProps) {
  // El número de filas y columnas de la sala
  const rows = props.rows;
  const columns = props.columns;

  // El archivo JSON que guarda las sillas seleccionadas
  const [seats, setSeats] = useState<Record<string, string>>({});

  // Una función que agrega una silla al archivo JSON
  function addSeat(row: number, column: number) {
    // Crea una copia del archivo JSON actual
    let newSeats = { ...seats };
    // Agrega la silla con su fila y columna como clave y valor
    newSeats[`${row}-${column}`] = `${row}-${column}`;
    // Actualiza el estado del archivo JSON con la copia modificada
    setSeats(newSeats);
  }

  // Una función que elimina una silla del archivo JSON
  function removeSeat(row: number, column: number) {
    // Crea una copia del archivo JSON actual
    let newSeats = { ...seats };
    // Elimina la silla con su fila y columna como clave
    delete newSeats[`${row}-${column}`];
    // Actualiza el estado del archivo JSON con la copia modificada
    setSeats(newSeats);
  }

  // Una función que exporta el archivo JSON como un archivo descargable
  async function exportJSON() {
    // Crea un elemento de enlace oculto en el documento
    let link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link);

    // Convierte el archivo JSON a una cadena de texto
    let data = JSON.stringify(seats);
    // Crea un objeto de URL con la cadena de texto como contenido usando importación dinámica
    let blob = new Blob([data], { type: "text/json" });
    let url = URL.createObjectURL(blob);

    // Asigna el objeto de URL al atributo href del enlace
    link.href = url;
    // Asigna un nombre al archivo descargable
    link.download = "seats.json";
    // Simula un clic en el enlace para iniciar la descarga
    link.click();
  }

  // Crea un arreglo vacío para guardar los componentes de las sillas
  let seatComponents = [];
  // Recorre las filas y columnas de la sala y crea un componente de silla por cada una
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      seatComponents.push(
        <Seat
          key={`${i}-${j}`}
          row={i}
          column={j}
          addSeat={addSeat}
          removeSeat={removeSeat}
        />
      );
    }
  }

  // Retorna un div con los componentes de las sillas y un botón para exportar el archivo JSON
  return (
    <div>
      <div className="seats">{seatComponents}</div>
      <button onClick={exportJSON}>Exportar JSON</button>
    </div>
  );
}

// Un componente que representa el código principal
export const SillasView: React.FC = (): ReactElement => {
  return (
    <div className="w-full h-full flex lg:justify-center justify-end lg:items-center bg-white flex-col-reverse lg:flex-row">
      <div className="lg:w-1/2 w-full flex justify-center items-center mt-6 lg:mt-0">
      <div className="flex flex-col gap-10 items-center w-full">
            <h1 className="text-blue-001 font-bold lg:text-5xl text-xl">¡Bienvenid@ a la sala de cine!</h1>
            <h4 className="text-blue-001 text-lg font-thin w-1/2 text-center">
              Por favor selecciona las sillas que quieras reservar
            </h4>
            <Cinema rows={8} columns={10} />
          </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <img src="/resources/cine.png" alt="Imagen de la sala" />
  
      </div>
    </div>
  );
};


