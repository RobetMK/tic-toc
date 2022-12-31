import React, { useState, useEffect } from 'react'
import '../styles/clock.scss';

const ClockFuncional = ()=>{

   const relojInicial = {
      nombre : 'Andres',
      apellido: 'Bonfil',
      edad: 35,
      fecha: new Date()
   }

   const [reloj, setReloj] = useState(relojInicial);

   useEffect( () => {

      const intervalID = setInterval( () => {
         setReloj((prevState)=>{
            let edad = prevState.edad +1;
            return{
               ...prevState,
               fecha:new Date(),
               edad
            }
         })
         console.log('segundos')
      }, 1000);

      return ()=>{ clearInterval(intervalID); }

   }, [] );

   return (
      <div className='clock-class'>
         <h2>Reloj tipo function</h2>
         <h2>Hora Actual:{reloj.fecha.toLocaleTimeString()} </h2>
         <h3>{reloj.nombre} {reloj.apellido}</h3>
         <h1>Edad:{reloj.edad} </h1>
      </div>
   );

}

export default ClockFuncional;
