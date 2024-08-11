
import { useState } from 'react'
import './App.css'
import Busqueda from './componentes/Busqueda'
import ImagenHeader from './componentes/ImagenHeader'
import Nav from './componentes/Nav'
import PrimerSeccion from './componentes/PrimerSeccion'
import Descuentos from './componentes/Descuentos'
import SegundaSeccion from './componentes/SegundaSeccion'




function App() {

  const[bolsa,setBolsa]=useState([])
  const[totalPagar,setTotalPagar]=useState(0)
  
  

  return (
    <>
      <Nav 
        bolsa={bolsa}
        setBolsa={setBolsa}
        totalPagar={totalPagar}
        setTotalPagar={setTotalPagar}
      />
      <ImagenHeader />
      <PrimerSeccion />
      <Busqueda 
        bolsa={bolsa}
        setBolsa={setBolsa}
        totalPagar={totalPagar}
        setTotalPagar={setTotalPagar}
      />
      <Descuentos
        bolsa={bolsa} 
        setBolsa={setBolsa}
        totalPagar={totalPagar}
        setTotalPagar={setTotalPagar}
      />
      <SegundaSeccion />

      </>
    
  )
}

export default App
