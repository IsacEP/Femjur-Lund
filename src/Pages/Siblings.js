// src/Pages/Siblings.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Siblings.css';

import logo1 from '../Assets/Images/SYSTEMFÖRENINGAR-01.png';
import logo2 from '../Assets/Images/SYSTERFÖRENINGAR-02.png';
import logo3 from '../Assets/Images/SYSTERFÖRENINGAR-03.png';
import logo4 from '../Assets/Images/SYSTERFÖRENINGAR-04.png';
import logo5 from '../Assets/Images/SYSTERFÖRENINGAR-05.png';

function Siblings() {
    return (
        <Container className="my-5 text-center full-height">
            <h1>Systerföreningar</h1>
            <Row className="mt-4">
                <Col xs={6} md={4} className="mb-4">
                    <a href="https://www.femjur.se/" target="_blank" rel="noopener noreferrer">
                        <img src={logo1} alt="Logo 1" className="sibling-logo" />
                    </a>
                </Col>
                <Col xs={6} md={4} className="mb-4">
                    <a href="https://hhgs.se/committees-associations/feministiska-juriststudenter/" target="_blank" rel="noopener noreferrer">
                        <img src={logo2} alt="Logo 2" className="sibling-logo" />
                    </a>
                </Col>
                <Col xs={6} md={4} className="mb-4">
                    <a href="https://www.femjursthlm.se/" target="_blank" rel="noopener noreferrer">
                        <img src={logo3} alt="Logo 3" className="sibling-logo" />
                    </a>
                </Col>
                <Col xs={6} md={4} className="mb-4">
                    <a href="https://www.femjurumea.se/" target="_blank" rel="noopener noreferrer">
                        <img src={logo4} alt="Logo 4" className="sibling-logo" />
                    </a>
                </Col>
                <Col xs={6} md={4} className="mb-4">
                    <a href="https://www.facebook.com/femjurorebro/?locale=sv_SE" target="_blank" rel="noopener noreferrer">
                        <img src={logo5} alt="Logo 5" className="sibling-logo" />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Siblings;
