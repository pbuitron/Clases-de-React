import "./Checkout.css";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
export const Checkout = () => {
let navigate=useNavigate()
const datosForm=useRef()
const consultarForm =(e)=>{
e.preventDefault()
console.log(datosForm.current)
const data = new FormData(datosForm.current)
console.log(data)
const cliente = Object.fromEntries(data)
console.log(cliente)
e.target.reset()
toast.success(`Muchas Gracias por su compra`)
navigate("/")
}

  return (
    <div className="container contForm">
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
          />
        </div>

        <div className="input_container">
          <label className="form_label" htmlFor="email_field">
            E-mail
          </label>
          <input
            placeholder="Ingrese su email"
            title="email"
            name="email_field"
            type="email"
            className="input_field"
            id="email_field"
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
          />
        </div>
        <button title="Finalizar Compra" type="submit" className="btn btn-info FinalizarCompra ">
          <span>Finalizar Compra</span>
        </button>
      </form>
    </div>
  );
};
