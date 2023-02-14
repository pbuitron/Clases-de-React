import React from 'react';
import { useState } from 'react';
import './ItemCount.css';
export const ItemCount = ({ ValInicial, Stock }) => {
    const [contador, setContador] = useState(ValInicial)
    const sumar = () => contador < Stock && setContador(contador + 1)
    const restar = () => contador > ValInicial && setContador(contador - 1)
    return (
        <div className='container contenedor'>
            <div className='contenedor-fluid'>
                <button className='btn btn-primary restar' onClick={() => restar()}>-</button>
                <span className='contador'>
                    {contador}
                </span>

                <button className='btn btn-primary sumar' onClick={() => sumar()}>+</button>
            </div>
            <button className='btn btn-primary agregar'>AGREGAR</button>
        </div>
    )
}