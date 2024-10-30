// src/Pages/Contact.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <Container className="my-5">
      <Row className="text-center">
        <Col>
          <h1>Kontakta oss</h1>
          <p>Har du en fråga? Kontakta oss via vår mail!</p>
          <p>Våra övriga uppgifter och sociala medier hittar också nedan.</p>
          <p><strong>Email:</strong> styrelsen@femjurlund.se</p>
          <p><strong>Organisationsnr:</strong> 802494-7932</p>
          <p><strong>Swish:</strong> 123 516 62 28</p>
          <p><strong>Bankgiro:</strong> 5027-3952</p>
          <h4>Följ oss på våra sociala medier!</h4>
          <div>
            <a href="https://www.facebook.com/femjur.lund" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com/femjurlund/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
