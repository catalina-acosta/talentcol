import React from 'react'
import '../styles/Information.css'
import { Container, Col, Row, Button } from 'react-bootstrap'

function Information() {
  return (
    <Container fluid id='info-block'>
      <h1 className='title'>¿Cómo funciona?</h1>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={6} lg={4}>
            <h2 className="underline">Inicio</h2>
            <p>¡No necesitas dinero para empezar!</p>
            <p>Financiamos todos los costos desde el inicio hasta tu primer día de trabajo en Alemania.</p>
          </Col>
          <Col sm={12} md={6} lg={4} >
            <h2 className=" underline">Durante el programa</h2>
            <p>¡Empieza a pagar cuando empieces a trabajar!</p>
            <p>Devuelves un porcentaje de tu sueldo mensual por los primeros 3 años de trabajo.</p>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <h2 className=" underline">Después</h2>
            <p>¡No más pagos pero sigues con acceso a nuestra comunidad!</p>
            <p>Sigue conectado con nosotros para eventos y asesorías para la vida en Alemania.</p>
          </Col>
        </Row>
      </Container>
      <Button variant='outline-warning' size='lg' href='https://calendly.com/cata-webdev/30min'>
        ¡Agenda una llamada ahora mismo!
      </Button>
    </Container>
  );
}

export default Information
