import { Link } from "react-router-dom"
export const CartWidget = ({ cantidad }) => {
    return (

        <>
            <span className="badge badge-pill bg-danger">{cantidad}</span>
            <Link className="nav-link" to={`/cart`}> <span><i className="fas fa-shopping-cart" /></span> </Link>
        </>
    )
}

