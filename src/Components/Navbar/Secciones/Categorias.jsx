import React from 'react';

export const Categorias = () => {
  return (
    <>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categorias
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Accesorios de Pilates</a></li>
          <li><a className="dropdown-item" href="#">Accesorios de Yoga</a></li>
          <li><a className="dropdown-item" href="#">Cuidado Personal</a></li>
          <li><a className="dropdown-item" href="#">Mats </a></li>
          <li><a className="dropdown-item" href="#">Ropa de Yoga </a></li>
          <li><a className="dropdown-item" href="#">Ofertas Especiales</a></li>
        </ul>

      </li>
      
    </>


  );
}

