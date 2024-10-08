import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ButtonOne.css';

function ButtonOne({ link, text }) {
    return (
        <div className="d-flex justify-content-center my-4">
            <a href={link} className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-sm custom-button">
                {text}
            </a>
        </div>
    );
}

export default ButtonOne;
