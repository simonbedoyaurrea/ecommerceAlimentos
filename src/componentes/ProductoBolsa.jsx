import React from 'react';
import '../estilos/producto-bolsa.css';

export default function ProductoBolsa({ alimento }) {
  const colores = {
    Frutas: 'rgb(234, 103, 103)',
    Carnes: 'rgb(197, 16, 16)',
    FrutosSecos: "rgb(216, 145, 78)",
    Lácteos: 'rgb(180, 172, 156)',
    Verduras: 'rgb(110, 206, 144)',
    Salsas: 'rgb(206, 110, 169)',
    Aceites: 'rgb(229, 234, 105)',
    Cereales: 'rgb(146, 148, 85)',
    Dulces: 'rgb(85, 132, 148)',
  };
  
  const colorFondo = colores[alimento.categoria.replace(' ','')] || 'white';
  return (
    <div className='producto-bolso'>
      <div className='imagen-producto-bolso' style={{ backgroundColor: colorFondo }}>FOOD</div>
      <div className='info-producto-bolso'>
        <p>{alimento.nombre}</p>
        <p>{(alimento.precio*alimento.quantity).toFixed(2)} $</p>
        <p>Cantidad: {alimento.quantity}</p>
      </div>
    </div> 
  );
}
