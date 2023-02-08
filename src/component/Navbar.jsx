import React from 'react';


const Navbar = ({size}) => {
   

   
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
                <div className="container bg-secondary">
                    <a className="navbar-brand fw-bold fs-4" href="/">Visit SriLanka</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/places">Visit</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
