import React from 'react'
import '../estilos/primer-seccion.css'

export default function PrimerSeccion() {
  return (
    <div className='primer-seccion'> 
    <div className='saa'>
        <h2 className='descuento-25'>25% <br />DESCUENTO</h2>
        <p>Durante el mes de Agosto en frutas y verduras seleccionadas</p>
        <button className='compra-ahora'><span>COMPRA AHORA</span></button>
    </div>
        <img src="https://png.pngtree.com/png-clipart/20231116/original/pngtree-fruits-and-vegetables-market-photo-png-image_13575958.png" alt="" />
    </div>
  )
}
