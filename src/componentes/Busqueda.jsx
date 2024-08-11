import React, { useState } from 'react';
import productos from '../productos/products.json';
import '../estilos/Busqueda.css';
import Products from './Products';
import { useRef } from 'react';

export default function Busqueda({ bolsa, setBolsa, totalPagar, setTotalPagar }) {
    const inputRef = useRef(null);
    const [categoria, setCategoria] = useState('Todo');
    const [nombreProducto, setNombreProducto] = useState('');

    const seleccionarCategoria = (event) => {
        setCategoria(event.target.value);
    };

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
            <div className='dropdown-alimentos-contenedor'>
                <label htmlFor="alimentos">¿Qué quieres llevar hoy?</label>
                <select id="alimentos" name="comida" onChange={seleccionarCategoria}>
                    <option value="Todo">Todos</option>
                    <option value="Frutas">Frutas</option>
                    <option value="Verduras">Verduras</option>
                    <option value="Carnes">Carnes</option>
                    <option value="Frutos Secos">Frutos Secos</option>
                    <option value="Dulces">Dulces</option>
                    <option value="Aceites">Aceites</option>
                    <option value="Salsas">Salsas</option>
                    <option value="Cereales">Cereales</option>
                    <option value="Lácteos">Lácteos</option>
                </select>
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

