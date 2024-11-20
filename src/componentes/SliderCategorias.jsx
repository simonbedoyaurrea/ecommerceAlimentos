import React, { useEffect } from 'react';
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
                spaceBetween={0} // Espaciado entre los elementos
                slidesPerView={1} // Cantidad de elementos visibles
                navigation={true}
                pagination={{ clickable: true }} // Paginación habilitada
                autoplay={{ delay: 3000 }} // Autoplay configurado con retraso
                breakpoints={{
                    210: { slidesPerView: 1 }, // 1 elemento para pantallas de hasta 550px
                    450: { slidesPerView: 2 }, // 2 elementos para pantallas de hasta 740px
                    900: { slidesPerView: 3 }, // 3 elementos para pantallas de hasta 900px
                    1024: { slidesPerView: 4 }, // 4 elementos para pantallas de hasta 1024px
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



