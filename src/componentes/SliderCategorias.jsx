import React from 'react';
import '../estilos/slider-categorias.css';
import categorias from '../productos/categorias.json';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos básicos de Swiper
import "swiper/css/pagination"; // Estilos para paginación
import "swiper/css/navigation"; // Estilos para navegación
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function SliderCategorias({ setCategoria }) {

    const seleccionarCategoria = (category) => {
        setCategoria(category);
    };

    return (
        <div className='slider-container'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10} // Espaciado entre los elementos
                slidesPerView={3} // Cantidad de elementos visibles
                navigation={{
                    prevEl: '.custom-prev', // Clase del botón previo
                    nextEl: '.custom-next', // Clase del botón siguiente
                }}
                pagination={{ clickable: true }} // Paginación habilitada
                autoplay={{ delay: 3000 }} // Autoplay configurado con retraso
                breakpoints={{
                    // Configuración responsiva
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {categorias.map((categoria, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className='categoria'
                            onClick={() => seleccionarCategoria(categoria.categoria)}
                        >
                            <img src={categoria.imagen} alt={categoria.nombre} />
                            <p>{categoria.nombre}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}



