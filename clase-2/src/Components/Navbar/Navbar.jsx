import React from "react";
import "./Navbar.css";
import { CartWidget } from "./CartWidgets/CartWidget";
import { Logo } from "./Logo/Logo";
import { Secciones } from "./Secciones/Secciones";
import { Categorias } from "./Secciones/Categorias";
import { BotonPrincipal } from "./Secciones/BotonPrincipal";
import { Avatar } from "./Avatar/Avatar"
export const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container container-fluid">
        <Logo nombreLogo={`Tienda Virgo`} />

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <BotonPrincipal nombreBoton={`principal`} />
            <Secciones nombreSeccion={`Quienes Somos`} />

            <li className="nav-item dropdown">
              <Categorias />
            </li>
          </ul>

          <CartWidget cantidad={5} />
          <Avatar perfil={`Paul Buitron`} />

        </div>
      </div>
    </nav>



  );
};
