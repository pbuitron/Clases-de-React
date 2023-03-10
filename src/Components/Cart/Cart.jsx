import { Link } from "react-router-dom"
import "./Cart.css"
import { ItemList } from "../ItemList/ItemList"
export const Cart = () => {
    const carrito = [
        {
            id: 9,
            cant: 25,
            idCategoria: "cuidado-personal",
            descripcion: "JABON DE SANDALO SRI SRI",
            detalles: "La pureza del sandalo es el corazon de este Jabón. Elaborado con ingredientes cuidadosamente seleccionados, para darte la generosidad de la naturaleza. Este Jabon nutre tu piel y su aroma relajante hara tu baño aún mas placentero",
            stock: 85,
            precio: 12,
            img: "https://firebasestorage.googleapis.com/v0/b/tienda-virgo-coder44995.appspot.com/o/JABON-DE-SANDALO-SRI-SRI.jpg?alt=media&token=aea9dc42-764f-4cc6-afd2-02edf5fe486c"
        },
        {
            id: 10,
            cant: 35,
            idCategoria: "cuidado-personal",
            descripcion: "JABON DE SANDALO SRI SRI",
            detalles: "La pureza del sandalo es el corazon de este Jabón. Elaborado con ingredientes cuidadosamente seleccionados, para darte la generosidad de la naturaleza. Este Jabon nutre tu piel y su aroma relajante hara tu baño aún mas placentero",
            stock: 85,
            precio: 12,
            img: "https://firebasestorage.googleapis.com/v0/b/tienda-virgo-coder44995.appspot.com/o/JABON-DE-SANDALO-SRI-SRI.jpg?alt=media&token=aea9dc42-764f-4cc6-afd2-02edf5fe486c"
        },
        {
            id: 11,
            cant: 40,
            idCategoria: "cuidado-personal",
            descripcion: "JABON DE SANDALO SRI SRI",
            detalles: "La pureza del sandalo es el corazon de este Jabón. Elaborado con ingredientes cuidadosamente seleccionados, para darte la generosidad de la naturaleza. Este Jabon nutre tu piel y su aroma relajante hara tu baño aún mas placentero",
            stock: 85,
            precio: 12,
            img: "https://firebasestorage.googleapis.com/v0/b/tienda-virgo-coder44995.appspot.com/o/JABON-DE-SANDALO-SRI-SRI.jpg?alt=media&token=aea9dc42-764f-4cc6-afd2-02edf5fe486c"
        }
    ]

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
                        <button className="btn btn-danger">Vaciar Carrito</button>
                        <ItemList prods={carrito} plantilla="ItemCart" />
                        <h2 className="textocart mt-4">Total Carrito</h2>
                        <div className="container w-50">
                            <table className="table ">
                                <thead className="container mt-5 p-3">
                                    <tr>
                                        <th scope="col">SUBTOTAL</th>
                                        <th scope="col">IGV</th>
                                        <th scope="col">TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>S/. 1000</td>
                                        <td>S/. 180</td>
                                        <td>S/. 1180</td>
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