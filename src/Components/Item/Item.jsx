import { Link } from "react-router-dom";
import "./Item.css";
export const Item = ({ item }) => {
    return (
        <div className="col ">
            <div className="card ">
                <img src={item.img} className="card-img-top " alt={`imagen de ${item.descripcion}`} />
                <div className="card-body">
                <p className="card-text">
                        {item.descripcion}
                    </p>
                    <p className="card-text ocultar">
                        {item.detalles}
                    </p>

                    <Link className="nav-link" to={`/item/${item.id}`} ><button className='btn btn-primary'>Ver Producto</button></Link>
                </div>
            </div>
        </div>
    );
}

