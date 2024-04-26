import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/ServicesMap.css'

function ServicesMap() {
  return (
    <Container className="text-center my-5">
            <Row>
                <Col md={6} className="item light-blue">
                    <h2>Homologación del título en Alemania</h2>
                    <h2><i class="fa-solid fa-graduation-cap"></i></h2>
                    <p>This is a visually appealing layout using the grid system approach.</p>
                    <h2><i class="fa-solid fa-circle-check"></i></h2>
                </Col>
                <Col md={6} className="item dark-blue">
                    <h2>Curso de Alemán</h2>
                    <p>Responsive and stunning design to enhance user experience.</p>
                    <h2><i class="fa-solid fa-circle-check"></i></h2>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="item dark-blue">
                    <h2>Oferta de trabajo</h2>
                    <p>This is a visually appealing layout using the grid system approach.</p>
                    <h2><i class="fa-solid fa-circle-check"></i></h2>
                </Col>
                <Col md={6} className="item light-blue">
                    <h2>Llegada a Alemania</h2>
                    <p>Responsive and stunning design to enhance user experience.</p>
                    <h2><i class="fa-solid fa-circle-check"></i></h2>
                </Col>
            </Row>
        </Container>
  )
}

export default ServicesMap
