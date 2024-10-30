import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className="custom-bg py-4"> {/* Ensure the full padding is applied here */}
            <div className="container">
                <footer>
                    <ul className="nav justify-content-center pb-1 mb-1">
                        <li><Link className="nav-item nav-link px-2 text-body-secondary" to="/member">BLI MEDLEM</Link></li>
                        <li><Link className="nav-item nav-link px-2 text-body-secondary" to="/contact">KONTAKT</Link></li>
                        <li><Link className="nav-item nav-link px-2 text-body-secondary" to="/stadgar">STADGAR</Link></li>
                    </ul>

                    <div className="text-center pb-3">
                        <a href="https://www.facebook.com/femjur.lund" target="_blank" rel="noopener noreferrer" className="me-3">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://www.instagram.com/femjurlund/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} />
                        </a>
                    </div>

                    <p className="text-center text-body-secondary">© IEP</p>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
