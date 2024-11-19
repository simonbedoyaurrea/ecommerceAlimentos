import React, { useState } from 'react';
import productos from '../productos/products.json';
import '../estilos/Busqueda.css';
import Products from './Products';
import { useRef } from 'react';
import SliderCategorias from './SliderCategorias';

export default function Busqueda({ bolsa, setBolsa, totalPagar, setTotalPagar }) {
    const inputRef = useRef(null);
    const [categoria, setCategoria] = useState('Todo');
    const [nombreProducto, setNombreProducto] = useState('');

   
    const handleChange = () => {
        setNombreProducto(inputRef.current.value.toLowerCase().trim());
    };

    
    const productosFiltrados = productos.filter(p => {
        const coincideCategoria = categoria === 'Todo' || p.categoria === categoria;
        const coincideNombre = p.nombre.toLowerCase().includes(nombreProducto);
        return coincideCategoria && coincideNombre;
    });
    

    return (
        <>
            <SliderCategorias setCategoria={setCategoria}/>
            <div className='dropdown-alimentos-contenedor'>
                <input
                    type='text'
                    className='input-buscar'
                    ref={inputRef}
                    onChange={handleChange}
                    placeholder="Buscar producto..."
                />
                
            </div>
            <div className='contenedor-principal'>
                {productosFiltrados.map(producto =>
                    <Products
                        bolsa={bolsa}
                        producto={producto}
                        setBolsa={setBolsa}
                        key={producto.id}
                        totalPagar={totalPagar}
                        setTotalPagar={setTotalPagar}
                    />
                )}
            </div>
        </>
    );
}

