import React from 'react';

// estilizando mavbar con mayuscula, bg y brand (props)
const Navbar = ({ brand }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand text-uppercase" href="/">{brand}</a>
            </div>
        </nav>
    );
}

export default Navbar