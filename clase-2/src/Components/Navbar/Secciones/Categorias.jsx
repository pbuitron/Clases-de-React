import React from 'react';

export const Categorias = () => {
    return (
        <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Tecnología</a></li>
                <li><a className="dropdown-item" href="#">Electrodomesticos</a></li>
                <li><a className="dropdown-item" href="#">Hogar Y Muebles</a></li>
                <li><a className="dropdown-item" href="#">Salud y Moda</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
    );
}

