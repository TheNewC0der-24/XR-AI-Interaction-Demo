import React from 'react';
import { Link } from 'react-router-dom';

import brand from "../../assets/brand.png";

const Navbar = () => {

    return (
        <>

            <nav className='navbar navbar-expand-lg bg-light shadow sticky-top'>
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-3" to="/">
                        <img src={brand} alt="brand" width={150} className="img-fluid" />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;