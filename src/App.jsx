
import { useState } from 'react'
import './App.css'
import Busqueda from './componentes/Busqueda'
import ImagenHeader from './componentes/ImagenHeader'
import Nav from './componentes/Nav'
import PrimerSeccion from './componentes/PrimerSeccion'
import Descuentos from './componentes/Descuentos'
import SegundaSeccion from './componentes/SegundaSeccion'
import InicioSesion from './componentes/inicioSesion'
import SliderCategorias from './componentes/SliderCategorias'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {

  const[bolsa,setBolsa]=useState([])
  const[totalPagar,setTotalPagar]=useState(0)
  
  

  return (
    <>
      
    <Router>
    <Nav 
        bolsa={bolsa}
        setBolsa={setBolsa}
        totalPagar={totalPagar}
        setTotalPagar={setTotalPagar}
      />
      <Routes>
          <Route 
          path="/" 
          element={
          <>
          <ImagenHeader />
          <PrimerSeccion />
          <Busqueda 
          bolsa={bolsa}
          setBolsa={setBolsa}
          totalPagar={totalPagar}
          setTotalPagar={setTotalPagar}
          />
          <SegundaSeccion />
          </>}>
        </Route>
        <Route path="/descuentos" element={
          <Descuentos
            bolsa={bolsa} 
            setBolsa={setBolsa}
            totalPagar={totalPagar}
            setTotalPagar={setTotalPagar}
            />}>
        </Route>
        <Route path="/login" element={<InicioSesion />}>
        </Route>
      </Routes>
    </Router>

      </>
    
  )
}

export default App
