import React from 'react';
import { Link } from 'react-router-dom';
export const Secciones = React.memo(({ nombreSeccion }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page">{nombreSeccion}</Link>
    </li>
  );
})


