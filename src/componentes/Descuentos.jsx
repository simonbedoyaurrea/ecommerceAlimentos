import React, { useState } from 'react'
import productos from '../productos/products.json';
import ProductsDescuento from './productsDescuento';

export default function Descuentos({bolsa,setBolsa,totalPagar,setTotalPagar}) {

const [descuento, setDescuento]=useState(0)

const filtrarDescuento=(porcentaje)=>{
  setDescuento(porcentaje)
}



  return (
  <>
    <h2 className='descuentos-titulo' id='descuento'>Descuentos</h2>
    <p className='descuentos-parrafo' >encuentra nuestros productos en promocion</p>
    <div className='contenedor-botones-descuentos'>
      <button className='boton-descuento' onClick={()=>filtrarDescuento(0)}>Todos</button>
      <button className='boton-descuento' onClick={()=>filtrarDescuento(5)}>5%</button>
      <button className='boton-descuento' onClick={()=>filtrarDescuento(10)}>10%</button>
      <button className='boton-descuento' onClick={()=>filtrarDescuento(15)}>15%</button>
      <button className='boton-descuento' onClick={()=>filtrarDescuento(20)}>20%</button>
      <button className='boton-descuento' onClick={()=>filtrarDescuento(25)}>25%</button>
    </div>
   <div className='contenedor-principal-descuentos'>
    
    {
      
        productos.filter(el=>descuento==0?el.descuento>0:el.descuento==descuento).map(producto=>
            <ProductsDescuento producto={producto} bolsa={bolsa} setBolsa={setBolsa} totalPagar={totalPagar} setTotalPagar={setTotalPagar} />
        )

    }
   </div>
  </>
  )
}
