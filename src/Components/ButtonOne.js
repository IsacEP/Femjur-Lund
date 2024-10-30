import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ButtonOne.css';

function ButtonOne({ link, text }) {
    return (
        <div className="d-flex justify-content-center my-4">
            <Link to={link} className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-sm custom-button">
                {text}
            </Link>
        </div>
    );
}

export default ButtonOne;
