import React from 'react'
import '../styles/Information.css'
import { Container, Col, Row, Button } from 'react-bootstrap'

function Information() {
  return (
    <Container id='info-block'>
      <h1 className='title'>Cómo funciona?</h1>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={6} lg={4}>
            <h2 className="underline">Inicio</h2>
            <p>No necesitas dinero para empezar!</p>
            <p>te financiamos todos los costos desde el inicio hasta el primer día de trabajo en Alemania</p>
          </Col>
          <Col sm={12} md={6} lg={4} >
            <h2 className=" underline">Durante el programa</h2>
            <p>Desde que empieces a trabajar, devuelves un porcentaje de tu sueldo mensual por los primeros 3 anos de trabajo en Alemania</p>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <h2 className=" underline">Después</h2>
            <p>Sigue conectado con nosotros para eventos y asesorías para la vida en Alemania</p>
          </Col>
        </Row>
      </Container>
      <Button variant='outline-warning' size='lg' href='https://calendly.com/cata-webdev/30min'>
        Agenda una llamada ahora!
      </Button>
    </Container>
  );
}

export default Information
