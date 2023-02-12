

export const Item = ({item}) => {
    return (
        <div className="col">
            <div className="card">
                <img src={`./img/${item.img}`} className="card-img-top" alt={`imagen de ${item.descripcion}`} />
                <div className="card-body">
                    <h5 className="card-title">{item.descripcion }</h5>
                    <p className="card-text">
                        {item.detalles}
                    </p>
                   
                    <button className='btn btn-primary'>Ver Producto</button>
                </div>
            </div>
        </div>
    );
}

