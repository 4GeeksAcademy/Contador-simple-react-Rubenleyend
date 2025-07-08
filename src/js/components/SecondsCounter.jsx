import React, { useEffect, useState } from 'react'


const SecondsCounter = ()=>{
    const [segundos,setSegundos] = useState(0)
    const unidades = 0 
    const decenas = 0 
    const centenas = 0 
    const unidadesMillar = 0 
    const decenasMillar = 0 
    const centenasMillar = 0 
    useEffect(() =>{
        const interval = () =>{

            setSegundos(prev => prev + 1)
        }
        const cronometro = setInterval(interval,5000)
        cleanInterval(cronometro)
    })

  console.log(segundos)
}


 export default SecondsCounter