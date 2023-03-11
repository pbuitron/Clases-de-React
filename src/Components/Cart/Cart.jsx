import { Link } from "react-router-dom"
import "./Cart.css"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../context/CarritoContext"
export const Cart = () => {
    const { carrito, emptyCart, totalPrice, igv, subtotal } = useCarritoContext()



    return (
        <>
            {
                carrito.length === 0
                    ?
                    <section className="container mt-5">
                        <h2 className="textocart" >No hay Productos en el Carrito</h2>
                        <Link className="nav-link d-grid gap-12 col-6  mx-auto mt-5" to={`/`}> <button className="btn btn-primary">Volver a la Tienda</button> </Link>
                    </section>
                    :
                    <section className="container mt-5">
                        <h2 className="textocart">Detalle de Compras</h2>
                        <button className="btn btn-danger" onClick={() => { emptyCart() }}> Vaciar Carrito</button>
                        <ItemList prods={carrito} plantilla="ItemCart" />
                        <h2 className="textocart mt-4">Total Carrito</h2>
                        <div className="container">
                            <table className="table container ">
                                <thead className=" mt-5 p-3">
                                    <tr>
                                        <th scope="col">SUBTOTAL</th>
                                        <th scope="col">IGV</th>
                                        <th scope="col">TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>S/. <span className="blockquote"> {subtotal()} </span></td>
                                        <td>S/. <span className="blockquote">{igv()}</span> </td>
                                        <td>S/. <span className="blockquote total">{totalPrice()}</span></td>
                                    </tr>

                                </tbody>
                            </table>
                            <Link className="nav-link" to={`/`} > <button className="btn btn-primary mt-3 mb-0  w-auto">Continuar Comprando</button> </Link>
                            <Link className="nav-link" to={`/checkout`}><button className="btn btn-info mt-1 mb-5 w-auto">Finalizar Compra</button> </Link>

                        </div>
                    </section>
            }
        </>
    )
}

/* Primer metodo de rendering

const cond = true  
    if(cond){
        return <h2>Es verdadero</h2>
    }
    return <h2>Es Falso</h2>
*/


/*
Segundo metodo de rendering

const cond = true  
   return (
    <>
    {cond && <h2>Es Verdadero</h2>}
    {!cond && <h2>Es Falso</h2>}
    </>
    
    )
*/

/*
Tercer Metodo
  const cond = true  
   return (
    <>
    {cond ?<h2>Es verdadero</h2>:<h2>Es Falso</h2>}
    </>
*/