import React from "react";
import "./Navbar.css";
import { CartWidget } from "./CartWidgets/CartWidget";
import { Logo } from "./Logo/Logo";
import {Secciones} from "./Secciones/Secciones";
import { Categorias } from "./Secciones/Categorias";
import { BotonPrincipal } from "./Secciones/BotonPrincipal";
import {Avatar}from "./Avatar/Avatar"
export const Navbar = ({ nombre }) => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Logo nombre={`Tienda Virgo`}/>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <BotonPrincipal nombreBoton={`Home`}/>
            <Secciones nombreSeccion={`Ofertas`}/>
            <Secciones nombreSeccion={`Historial`}/>

            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <Categorias/>
              
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <CartWidget cantidad={5} />
          <Avatar perfil={`Paul Buitron`}/>

        </div>
      </div>
    </nav>



  );
};
