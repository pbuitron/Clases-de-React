import React from 'react';
import { useState } from 'react';

export const ItemCount = ({ValInicial,Stock}) => {
    const [contador, setContador] = useState(ValInicial)
const sumar = ()=> contador < Stock && setContador(contador+1)
const restar = ()=> contador > ValInicial && setContador(contador-1)
    return (
        <div>
            <button className='btn btn-primary' onClick={() => restar()}>-</button>
            <span>
            {contador}    
            </span> 
            <button className='btn btn-primary' onClick={()=> sumar()}>+</button>
            <button className='btn btn-primary'>AGREGAR</button>
        </div>
    )
     }