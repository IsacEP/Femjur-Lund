// src/Pages/Member.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./Member.css"

const Member = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membershipType: 'Full Member'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:specificemail@example.com?subject=Bli Medlem&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMembership Type: ${formData.membershipType}`;
    window.location.href = mailtoLink;
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <div className="text-center">
            <h1>Bli Medlem</h1>
            <h2>Vill du bli medlem i Femjur Lund?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h2>Hur blir jag medlem?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h2>Bli stödmedlem</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <Form onSubmit={handleSubmit} className="my-4 pt-5">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formMembershipType" className="mt-3">
              <Form.Label>Membership Type</Form.Label>
              <Form.Select name="membershipType" value={formData.membershipType} onChange={handleChange}>
                <option value="Full Member">Full Member</option>
                <option value="Support Member">Support Member</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4 SubmitButton">Bli Medlem</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Member;
