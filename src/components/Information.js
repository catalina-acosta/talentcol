import React from 'react'
import '../styles/Information.css'
import { Container, Col, Row, Button } from 'react-bootstrap'

function Information() {
  return (
    <Container fluid id='info-block' className='block'>
      <h1 className='title'>¿Cómo funciona?</h1>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={6} lg={4}>
            <div className='text-holder'>
              <h2>Inicio </h2>
              <p>¡No necesitas dinero para empezar!</p>
              <p>Financiamos todos los costos desde el inicio hasta tu primer día de trabajo en Alemania.</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} >
            <div className='text-holder'>
              <h2>Durante </h2>
              <p>¡Empieza a pagar cuando empieces a trabajar!</p>
              <p>Devuelves un porcentaje de tu sueldo mensual por los primeros 3 años de trabajo.</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className='text-holder'>
              <h2 >Después</h2>
              <p>¡No más pagos pero sigues con acceso a nuestra comunidad!</p>
              <p>Sigue conectado con nosotros para eventos y asesorías para la vida en Alemania.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Button variant='outline-warning' size='lg' href='https://calendly.com/info-57nx/30min'>
        ¡Agenda una llamada ahora mismo!
      </Button>
    </Container>
  );
}

export default Information
