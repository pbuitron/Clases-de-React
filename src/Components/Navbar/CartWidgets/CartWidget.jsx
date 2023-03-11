import { Link } from "react-router-dom"
import { useCarritoContext } from "../../context/CarritoContext"
export const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()
    return (

        <Link className="nav-link" to={`/cart`}>
            

            {getItemQuantity() > 0 && <span className="badge badge-pill bg-danger">
                {getItemQuantity()}</span>}

    <span><i className="fas fa-shopping-cart" />
            </span>
        </Link>

    )
}

