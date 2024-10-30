import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FemjurLogo from '../Assets/Images/Femjur_Lund_Logo.png';
import '../index.css';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light custom-bg">
            <div className="container-fluid">
                <div className="d-flex justify-content-center align-items-center w-100">
                    {/* Left navbar items */}
                    <ul className="navbar-nav me-3"> {/* Use margin-end for spacing */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownOmOss" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Om oss
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownOmOss">
                                <li><Link className="dropdown-item" to="/about">Femjur Lund</Link></li>
                                <li><Link className="dropdown-item" to="/history">Historia</Link></li>
                                <li><Link className="dropdown-item" to="/board">Förtroendevalda</Link></li>
                                <li><Link className="dropdown-item" to="/partners">Samarbetspartners</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownVartArbete" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Vårt arbete
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownVartArbete">
                                <li><Link className="dropdown-item" to="/board">Item 1</Link></li>
                                <li><Link className="dropdown-item" to="/board">Item 2</Link></li>
                                <li><Link className="dropdown-item" to="/board">Item 3</Link></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Center Logo */}
                    <Link to="/"><img src={FemjurLogo} alt="Femjur Lund Logo" style={{ width: '100px', height: '100px', margin: '0 15px' }} /></Link>

                    {/* Right navbar items */}
                    <ul className="navbar-nav ms-3"> {/* Use margin-start for spacing */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/member">Engagera Dig</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Kontakta Oss</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
