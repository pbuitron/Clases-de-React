import React from 'react';
import { Link } from 'react-router-dom';
export const BotonPrincipal = ({ nombreBoton }) => {
    return (
        <>
            <Link className='nav-link' to={`/`}>
                <button type="button" className="btn btn-info" >
                    {nombreBoton}
                </button>
            </Link>
        </>
    );
}


