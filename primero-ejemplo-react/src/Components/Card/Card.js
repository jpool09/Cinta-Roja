import React, { useState } from 'react';
// estado: valor que puede cambiar a través del tiempo 
function Card(props) {
    const [propiedad, setPropiedad] = useState('Me están viendo OnO');
    function devuelveBoton() {
        if ( propiedad === 'Me están viendo OnO') {
           return(<button onClick={() => {
               setPropiedad('¿Me estás mirando >.<?')
            }}>Sorpresa!</button>);
         }
        return(<button onClick={() => {
            setPropiedad('Me están viendo OnO')
        }}>Regresa al anterior texto</button>); 
    }
    return(
        <div className="contenedor is-orange">
            <h2>{props.titulo}</h2>
            <div className="cuerpoContenedor">
                {props.texto}
            </div>
            <h4>{propiedad}</h4>
                {
                propiedad === 'Me están viendo OnO'
                ? <button onClick={() => {
                    setPropiedad('¿Me estás mirando >.<?')
                }}>Sorpresa!</button> 
                : <button onClick={() => {
                    setPropiedad('Me están viendo OnO')
                }}>Regresa al anterior texto</button>
                }
        </div>
    );
}

export default Card;