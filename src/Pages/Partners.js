import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Partners.css';

import Akavia from '../Assets/Images/akavia.png';
import st from '../Assets/Images/st.png';

function Partners() {
    return (
        <Container className="my-5">
            <h1 className="text-center pb-5">Samarbetspartners</h1>
            <Row className="text-center">
                <Col xs={12} md={6} className="mb-4 pr-5">
                    <a href="https://www.akavia.se/" target="_blank" rel="noopener noreferrer">
                        <img src={Akavia} alt="Akavia" className="img-fluid" />
                    </a>
                </Col>
                <Col xs={12} md={6} className="mb-4">
                    <a href="https://www.st.org/" target="_blank" rel="noopener noreferrer">
                        <img src={st} alt="ST" className="img-fluid" />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Partners;
