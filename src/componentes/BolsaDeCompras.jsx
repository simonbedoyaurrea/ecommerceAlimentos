import React from 'react'
import PayPalButton from './Paypal'
import '../estilos/bolsa-de-compras.css'
import ProductoBolsa from './ProductoBolsa'

export default function BolsaDeCompras({bolsa,setBolsa,totalPagar,setTotalPagar}) {
  return (
    <div className='bolsa-compras'>
        <div className='contenedor-productos-bolso'>
        {
          bolsa && bolsa.length > 0 ? (
            bolsa.map(penb => (
              <ProductoBolsa key={penb.nombre} alimento={penb} />
            ))
          ) : (
            <p>No hay productos en la bolsa</p>
          )
        }
        </div>
        
        <div className='paypal-botones'>
        <div className='total-pagar'>Total a pagar:{totalPagar.toFixed(2)}</div>
            <PayPalButton totalPagar={totalPagar} />
        </div>
    </div>
  )
}
