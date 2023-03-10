import React from 'react';
import { useState } from 'react';
import './ItemCount.css';
import { Link } from "react-router-dom";
export const ItemCount = ({ ValInicial, Stock, onAdd }) => {
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
            <button className='btn btn-primary agregar' onClick={()=>onAdd(contador)}>AGREGAR</button>
            <Link className='nav-link' to={`/cart`}><button className='btn btn-secondary agregar'>Ir al carrito</button></Link>
            
        </div>
    )
}