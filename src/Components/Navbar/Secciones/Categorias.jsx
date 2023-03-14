import React from 'react';
import { Link } from 'react-router-dom';

export const Categorias = React.memo(() => {
  return (
    
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categorias
        </Link>
        <ul className="dropdown-menu">
          <li> <Link className="dropdown-item" to={`category/accesorios-de-pilates`} >Accesorios de Pilates</Link></li>
          <li><Link className="dropdown-item" to={`category/accesorios-de-yoga`} >Accesorios de Yoga</Link> </li>
          <li><Link className="dropdown-item" to={`category/cuidado-personal`} >Cuidado Personal</Link> </li>
          <li><Link className="dropdown-item" to={`category/mats`} >Mats</Link> </li>
          <li><Link className="dropdown-item" to={`category/ropa-de-yoga`} >Ropa de Yoga</Link> </li>
        
        </ul>

      </li>
      
    


  );
})

