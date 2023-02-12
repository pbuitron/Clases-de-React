import React from 'react';
import "./Logo.css"

export const Logo = ({ nombreLogo }) => {
    return (
        <>
            <a className="navbar-brand brand-logo" href="#">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/maiden-5369945-4481817.png?w=256&f=avif" alt="" width="40" height="40" className="d-inline-block align-text-top" />
                {nombreLogo}
            </a>
        </>
    );
}

