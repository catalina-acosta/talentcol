import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/ServicesMap.css'

function ServicesMap() {
  return (
    <Container className='services-map-block' fluid>
        <div className='section-title'>
          <h1 className='title'>Nuestros servicios</h1>
          <h2 className='subtitle'>Te ayudamos con todo el proceso: </h2>
        </div>
      <Container className="text-center my-5">
        <Row>
          <Col md={6} className="item light-blue">
              <h2>Preparación para trabajar en Alemania</h2>
              <h2><i class="fa-solid fa-graduation-cap"></i></h2>
              <ul>
                <li><p><i class="fa-solid fa-circle-check"></i> Curso de alemán</p></li>
                <li><p><i class="fa-solid fa-circle-check"></i> Homologación del título y cualificaciones necesarias</p></li>
                <li><p><i class="fa-solid fa-circle-check"></i> Proceso de visado y permiso de trabajo</p></li>
              </ul>
          </Col>
          <Col md={6} className="item dark-blue">
              <h2>Trabajo en Alemania</h2>
              <h2><i class="fa-solid fa-school"></i></h2>
              <ul>
              <li><p><i class="fa-solid fa-circle-check"></i> Contacto con empleadores hasta firma del contrato</p></li>
                <li><p><i class="fa-solid fa-circle-check"></i> On the job training receiving full salary (learning technical terms, etc.)</p></li>
                <li><p><i class="fa-solid fa-circle-check"></i> Negociación de condiciones justas de trabajo y salario competitivo con empleadores</p></li>
                <li><p><i class="fa-solid fa-circle-check"></i> Información completa sobre los derechos y obligaciones de la relación laboral en Alemania</p></li>
              </ul>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="item dark-blue">
              <h2>Llegada a Alemania</h2>
              <h2><i class="fa-solid fa-briefcase"></i></h2>
              <ul>
              <li><p><i class="fa-solid fa-circle-check"></i> Organización de viaje y pago de gastos de mudanza a Alemania</p></li>
                <li><p><i class="fa-solid fa-circle-check"></i> Persona de contacto en Alemania para cualquier inquietud y curso de cultura alemana antes de viajar</p></li>
                <li><p><i class="fa-solid fa-circle-check"></i> Ayuda con aspectos esenciales de la vida en Alemania (como comprar una SIM y activarla, como pedir conseguir vivienda, etc.)</p></li>
              </ul>
          </Col>
          <Col md={6} className="item light-blue">
              <h2>Guía para una vida a largo plazo en Alemania</h2>
              <h2><i class="fa-solid fa-flag"></i></h2>
              <ul>
                <li><p><i class="fa-solid fa-circle-check"></i> Eventos y contacto con otros colombianos en Alemania</p></li>
                <li><p><i class="fa-solid fa-circle-check"></i> Ayuda para aplicar a la nacionalidad Alemana después de trabajar por 5 años</p></li>
                <li><p><i class="fa-solid fa-circle-check"></i> Integración de toda la familia / planeación familiar en Alemania</p></li>
              </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default ServicesMap
