import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

function ServicesMap() {
  return (
    <Container className="text-center my-5">
            <Row>
                <Col md={6} className="bg-yellow text-white p-4">
                    <h2>Homologación del título en Alemania <i class="fa-solid fa-graduation-cap"></i></h2>
                    <p>This is a visually appealing layout using the grid system approach.</p>
                    <h2><i class="fa-solid fa-circle-check"></i></h2>
                </Col>
                <Col md={6} className="bg-secondary text-white p-4">
                    <h2>Column 2</h2>
                    <p>Responsive and stunning design to enhance user experience.</p>
                    <Button variant="light">Explore</Button>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="bg-primary text-white p-4">
                    <h2>Column 1</h2>
                    <p>This is a visually appealing layout using the grid system approach.</p>
                    <Button variant="light">Click me</Button>
                </Col>
                <Col md={6} className="bg-secondary text-white p-4">
                    <h2>Column 2</h2>
                    <p>Responsive and stunning design to enhance user experience.</p>
                    <Button variant="light">Explore</Button>
                </Col>
            </Row>
        </Container>
  )
}

export default ServicesMap
