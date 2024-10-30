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
                    <img src={Akavia} alt="Akavia" className="img-fluid" />
                </Col>
                <Col xs={12} md={6} className="mb-4">
                    <img src={st} alt="ST" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
}

export default Partners;

///src/Assets/Images/akavia.png