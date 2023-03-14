import "./Checkout.css";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useCarritoContext } from "../context/CarritoContext";
import { BotonPrincipal } from "../Navbar/Secciones/BotonPrincipal";
import { createOrdenCompra, updateProducto, getProducto, } from "../../utils/firebase";

export const Checkout = () => {
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  
  const consultarForm = (event) => {
    event.preventDefault();
    
    const data = new FormData(datosForm.current)
    const cliente = Object.fromEntries(data)
    const aux = [...carrito]

    Promise.all(
      aux.map(prodCarrito => getProducto(prodCarrito.id))
    ).then(prodBDDs => {
      aux.forEach((prodCarrito, index) => { //Descontar stock de BDD
        const prodBDD = prodBDDs[index]
        prodBDD.stock -= prodCarrito.cant //Descontar stock 
        updateProducto(prodBDD.id, prodBDD)
      })
    })
    createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
      toast(`Muchas gracias por  su compra!. Su orden de compra con el id ${ordenCompra.id} por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} se realizó con exito`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      event.target.reset()
      emptyCart()
      navigate("/")
    })

  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailConfirmationChange = (event) => {
    setEmailConfirmation(event.target.value);
  };

  const isFormValid = () => {
    return email === emailConfirmation && email !== "";
  };


  const { carrito, emptyCart, totalPrice } = useCarritoContext()
  let navigate = useNavigate()
  const datosForm = useRef()

  return (
    <>
      {carrito.length === 0
        ?
        <>
          <form className="form_container container" onSubmit={consultarForm} ref={datosForm} >
            <div className="logo_container" />
            <div className="title_container">
              <p className="title">No hay productos en el Carrito</p>
              <span className="subtitle">
                Presione el siguiente botón para redirigirse a la tienda
              </span>
              <BotonPrincipal nombreBoton={`Continuar`} />
            </div>
          </form>
        </>
        :

        <div className="container-fluid contForm">
          <form className="form_container container" onSubmit={consultarForm} ref={datosForm} >
            <div className="logo_container" />
            <div className="title_container">
              <p className="title">Detalles de Facturación</p>
              <span className="subtitle">
                Completa el siguiente formulario para continuar con tu compra.
              </span>
            </div>
            <br />
            <div className="input_container">
              <label className="form_label" htmlFor="name_field">
                Nombres
              </label>
              <input
                placeholder="Ingrese sus nombres"
                title="Nombres"
                name="name_field"
                type="text"
                className="input_field"
                id="name_field"
                required
              />
            </div>

            <div className="input_container">
              <label className="form_label" htmlFor="apellido_field">
                Apellidos
              </label>
              <input
                placeholder="Ingrese sus apellidos"
                title="Apellidos"
                name="apellido_field"
                type="text"
                className="input_field"
                id="apellido_field"
                required
              />
            </div>

            <div className="input_container">
              <label className="form_label" htmlFor="email">
                E-mail
              </label>
              <input
                placeholder="Ingrese su email"
                title="email"
                name="email"
                type="email"
                className="input_field"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div className="input_container">
              <label className="form_label" htmlFor="email-Confirmation">
                Confirmar E-mail
              </label>
              <input
                placeholder="Ingrese su email"
                title="confirmacion"
                name="email-Confirmation"
                type="email"
                className="input_field"
                id="email-Confirmation"
                value={emailConfirmation}
                 onChange={handleEmailConfirmationChange}
                required
              />
            </div>

            <div className="input_container">
              <label className="form_label" htmlFor="dni_field">
                Documento de Identidad
              </label>
              <input
                placeholder="Ingrese su nro. de documento"
                title="Documento"
                name="dni_field"
                type="number"
                className="input_field"
                id="dni_field"
                required
              />
            </div>
            <div className="input_container">
              <label className="form_label" htmlFor="telefono_field">
                Número de Teléfono
              </label>
              <input
                placeholder="Ingrese su numero telefónico"
                title="Teléfono"
                name="telefono_field"
                type="number"
                className="input_field"
                id="telefono_field"
                required
              />
            </div>
            <div className="input_container">
              <label className="form_label" htmlFor="direccion_field">
                Dirección
              </label>
              <input
                placeholder="Ingrese su dirección"
                title="Dirección"
                name="direccion_field"
                type="text"
                className="input_field"
                id="direccion_field"
                required
              />
            </div>

            <div>
                <p className="dato"> *Confirme su correo, de lo contrario no se habilitará el boton de FINALIZAR COMPRA</p>
            </div>

            <button title="Finalizar Compra" type="submit" className="btn btn-info finalizarCompra" disabled={!isFormValid()}>
              <span>Finalizar Compra</span>
            </button>

          </form>
        </div>
      }
    </>


  );
}