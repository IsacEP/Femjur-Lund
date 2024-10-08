import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="custom-bg py-4"> {/* Ensure the full padding is applied here */}
            <div className="container">
                <footer>
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li><Link className="nav-item nav-link px-2 text-body-secondary" to="/about">BLI MEDLEM</Link></li>
                        <li><Link className="nav-item nav-link px-2 text-body-secondary" to="/about">KONTAKT</Link></li>
                        <li><Link className="nav-item nav-link px-2 text-body-secondary" to="/about">STADGAR</Link></li>
                    </ul>
                    <p className="text-center text-body-secondary">© IEP</p>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
