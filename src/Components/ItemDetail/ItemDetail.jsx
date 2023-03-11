import { ItemCount } from "../ItemCount/ItemCount";
import React from "react";
import { useCarritoContext } from "../context/CarritoContext";
export const ItemDetail = ({ prod }) => {
const { addItem } = useCarritoContext()  
const onAdd = (cantidad)=>{
    addItem(prod, cantidad)
}

    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img
                    src={prod.img}
                    alt={`Imagen de ${prod.descripcion}`}
                    className="img-fluid "
                />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{prod.descripcion} </h5>
                     <p className="card-text">
                        {prod.detalles}
                    </p> 
                    <div className="card-text">
                        <p className="text- ">Precio: S/. {prod.precio} </p>
                        <p className="card-text ">Cantidad en Stock: {prod.stock} </p>
                        <p className="card-text">Etiquetas #{prod.categoria} </p>
                      
                        <ItemCount ValInicial={1} Stock={prod.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    );
}


