
import '../estilos/products.css';

export default function Products({  bolsa, setBolsa, producto ,totalPagar,setTotalPagar}) {

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

  const colorFondo = colores[producto.categoria.replace(' ','')] || 'white';

  const addProducto = (producto) => {
    // Verifica si el producto ya está en la bolsa
    const productoEnBolsa = bolsa.find(item => item.id === producto.id);
  
    if (productoEnBolsa) {
      // Si el producto ya está, incrementa la cantidad
      setBolsa(bolsa.map(item =>
        item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Si el producto no está, añádelo con una cantidad inicial de 1
      setBolsa([ { ...producto, quantity: 1 }, ...bolsa ]);
    }
  
    // Actualiza el totalPagar usando el valor anterior
    setTotalPagar(prevTotalPagar => prevTotalPagar + producto.precio);
  };

  return (
    <>
      <div className='contenedor-producto'>
        <div className='imagen-producto' style={{ backgroundColor: colorFondo }}>FOOD</div>
        <div className='info-producto'>
          <h2>{producto.nombre}</h2>
          <p>{producto.precio} $</p>
          <button className='añadir-boton' onClick={() => addProducto(producto)} style={{ color: colorFondo }}>
            <span>Añadir a la bolsa</span>
          </button>
        </div>
      </div>
    </>
  );
}


