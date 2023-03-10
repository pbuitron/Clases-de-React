import React from 'react';

export const ItemCart = ({ item }) => {
    return (

        <section className="card mt-5">
            <div className="row g-0">
                <div className="col-5 col-sm-4">
                    <img src={`${item.img}`} className="img-fluid w-50" alt={`imagen de ${item.descripcion}`} />
                </div>
                <div className="col-7 col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.descripcion} </h5>
                        <p className="card-text">Cantidad : {item.cant} </p>
                        <p className="card-text">Precio Unitario : S/.{item.precio} </p>
                        <p className="card-text">Subtotal :S/. {item.cant * item.precio} </p>
                        <button className='btn btn-danger' onClick={()=> console.log(`Producto Eliminado`)}>Eliminar</button>
                    
                    </div>
                </div>
            </div>
        </section>

    );
}


