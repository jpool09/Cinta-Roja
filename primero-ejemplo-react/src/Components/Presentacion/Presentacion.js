import React, { useState } from "react";

function Presentacion(props) {
  const [propiedad, setPropiedad] = useState();
  return (
    <div className="contenedor is-orange">
      <h2>Esta es la presentacion de:</h2>
      <div className="cuerpoContenedor">
        {props.nombre} {props.apellido}
      </div>
      <p>{propiedad}</p>
      <hr></hr>
      <button
        onClick={() => {
          setPropiedad();
        }}
      >
        Cambiar color
      </button>
    </div>
  );
}

export default Presentacion;
