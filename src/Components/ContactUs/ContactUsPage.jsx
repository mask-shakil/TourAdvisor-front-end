import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Contact Us</h2>
            <p>
              We would love to hear from you! Please fill out the form below and
              we will get back to you as soon as possible.
            </p>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className="border border-primary"
                  type="text"
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="border border-primary"
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  className="border border-primary"
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                />
              </Form.Group>
              <Button variant="primary" className="mt-2" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col className="ms-5 mt-4" md={5}>
            <h2>Visit Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ac leo sed turpis sagittis tempus.
            </p>
            <p>
              Address: Mohammadpur, Dhaka, Bangladesh
              <br />
              Phone: 01703773712
              <br />
              Email: shakil@gmail.com
            </p>
            <h1>Tour Advisor</h1>
            <p style={{ textAlign: "justify" }}>
              At Tour Advisor, we are passionate about crafting unforgettable
              travel experiences. With a deep love for exploration, our
              dedicated team of travel experts is committed to curating
              extraordinary journeys that will leave you with cherished memories
              for a lifetime.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUsPage;
