import React from 'react';

export const Secciones = ({ nombreSeccion }) => {
  return (
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">{nombreSeccion}</a>
    </li>
  );
}


