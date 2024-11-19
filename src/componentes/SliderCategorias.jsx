import React from 'react';
import '../estilos/slider-categorias.css';

export default function SliderCategorias({ setCategoria }) {

    const seleccionarCategoria = (category) => {
        setCategoria(category);
    }

    return (
        <div className='slider-container'>
            <div className='categorias-container'>
                <div className='categoria' onClick={() => seleccionarCategoria('Todo')}>
                    <img src="https://cosechasunicas.com/wp-content/uploads/2023/09/pngegg-3.png" alt="" />
                    <p>Todo</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Frutas')}>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/020/899/515/small/red-apple-isolated-on-white-png.png" alt="" />
                    <p>Frutas</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Verduras')}>
                    <img src="https://static.vecteezy.com/system/resources/previews/027/216/344/original/onion-onion-transparent-background-ai-generated-free-png.png" alt="verduras" />
                    <p>Verduras</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Dulces')}>
                    <img src="https://static.vecteezy.com/system/resources/previews/028/332/207/non_2x/sweets-candies-and-treats-ai-generative-free-png.png" alt="" />
                    <p>Dulces</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Carnes')}>
                    <img src="https://static.vecteezy.com/system/resources/previews/028/332/216/non_2x/fresh-raw-beef-meat-ai-generative-free-png.png" alt="" />
                    <p>Carnes</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Frutos Secos')}>
                    <img src="https://static.vecteezy.com/system/resources/previews/012/596/342/non_2x/group-of-almond-nuts-concept-free-png.png" alt="" />
                    <p>Frutos secos</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Aceites')}>
                    <img src="https://png.pngtree.com/png-clipart/20240309/original/pngtree-bottle-of-vegetable-oil-png-image_14548258.png" alt="" />
                    <p>Aceites</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Salsas')}>
                    <img src="https://goodmorningvietnam.shop/shop/55-large_default/salsa-sriracha-al-peperoncino-piccante-sriracha-hot-chilli-sauce-tuong-ot-sriracha-200ml.jpg" alt="" />
                    <p>Salsas</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Cereales')}>
                    <img src="https://superlavioleta.com/cdn/shop/files/avena_granel.png?v=1719498688" alt="" />
                    <p>Cereales</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Lácteos')}>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/019/550/837/small/milk-bottle-mockup-on-transparent-background-file-png.png" alt="" />
                    <p>Lacteos</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Todo')}>
                    <img src="https://cosechasunicas.com/wp-content/uploads/2023/09/pngegg-3.png" alt="" />
                    <p>Todo</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Frutas')}>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/020/899/515/small/red-apple-isolated-on-white-png.png" alt="" />
                    <p>Frutas</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Verduras')}>
                    <img src="https://static.vecteezy.com/system/resources/previews/027/216/344/original/onion-onion-transparent-background-ai-generated-free-png.png" alt="verduras" />
                    <p>Verduras</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Dulces')}>
                    <img src="https://static.vecteezy.com/system/resources/previews/028/332/207/non_2x/sweets-candies-and-treats-ai-generative-free-png.png" alt="" />
                    <p>Dulces</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Carnes')}>
                    <img src="https://static.vecteezy.com/system/resources/previews/028/332/216/non_2x/fresh-raw-beef-meat-ai-generative-free-png.png" alt="" />
                    <p>Carnes</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Frutos Secos')}>
                    <img src="https://static.vecteezy.com/system/resources/previews/012/596/342/non_2x/group-of-almond-nuts-concept-free-png.png" alt="" />
                    <p>Frutos secos</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Aceites')}>
                    <img src="https://png.pngtree.com/png-clipart/20240309/original/pngtree-bottle-of-vegetable-oil-png-image_14548258.png" alt="" />
                    <p>Aceites</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Salsas')}>
                    <img src="https://goodmorningvietnam.shop/shop/55-large_default/salsa-sriracha-al-peperoncino-piccante-sriracha-hot-chilli-sauce-tuong-ot-sriracha-200ml.jpg" alt="" />
                    <p>Salsas</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Cereales')}>
                    <img src="https://superlavioleta.com/cdn/shop/files/avena_granel.png?v=1719498688" alt="" />
                    <p>Cereales</p>
                </div>
                <div className='categoria' onClick={() => seleccionarCategoria('Lácteos')}>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/019/550/837/small/milk-bottle-mockup-on-transparent-background-file-png.png" alt="" />
                    <p>Lacteos</p>
                </div>
            </div>
        </div>
    );
}

