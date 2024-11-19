import { useEffect, useState } from 'react';
import '../estilos/Nav.css'
import { AiOutlineShopping } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import BolsaDeCompras from './BolsaDeCompras'
import { Link } from 'react-router-dom';


const initialOptions = {
  clientId: 'AcdmDJDeqbL9MtmBHH8Va4UukHLSy4QDfO0DgJ2OYJ9JV1TFqFqkq5bZkM_3kI8xSFQz2u7iKltO8UTM', // Reemplaza con tu Client ID
  currency: 'USD',
};

export default function Nav({bolsa,setBolsa,totalPagar,setTotalPagar}) {

      const[mostrarCompras,setMostrarCompras]=useState(false)

    const mostrarBolsa=()=>{
    setMostrarCompras(!mostrarCompras)
    }

  return (<>
    <nav>
        <ul>
            <li><a href="">PRODUCTOS</a>
            <ul className='dropdown-productos'>
              <li><a href="">FRUTAS</a></li>
              <li><a href="">VERDURAS</a></li>
              <li><a href="">CARNES</a></li>
              <li><a href="">LACTEOS</a></li>
            </ul>
            </li>
            <li><a href="#descuento"><span className="descuentos">DESCUENTOS</span></a></li>
        </ul>
        <h1 className='titulo-food'><Link to="/">FOOD</Link></h1>
        <ul>
            <li><Link to="/login"><span className='usuario icono'><FiUser /></span></Link></li>
            <li><span className='bolsa icono' onClick={()=>mostrarBolsa()}><AiOutlineShopping /></span></li>
            {bolsa.length>0?<p className='numero-en-bolsa'>{bolsa.length}</p>:null}
        </ul>
    </nav>
      {mostrarCompras?
      <PayPalScriptProvider options={initialOptions}>
      <BolsaDeCompras 
      bolsa={bolsa}
      setBolsa={setBolsa}
      totalPagar={totalPagar}
      setTotalPagar={setTotalPagar}
      />
      </PayPalScriptProvider>
      :null}
    </>
  )
}
