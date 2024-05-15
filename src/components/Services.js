import React from 'react';
import '../styles/Services.css'
import { Container, Card, Row, Col } from 'react-bootstrap';
import educatorImg from '../assets/early-childhood-educator-with-toys-and-child.jpg';
import truckDriverImg from '../assets/man-with-glasses-driving.jpg';
import nurseImg from '../assets/female-medical-professional-holds-clipboard-in-hospital-room.jpg';


function Services() {
  return (
    <div className='services-block' id='services'>
      <Container className='title-holder'><h1 className='title'>¿Tienes alguno de estos <span>perfiles</span>?</h1></Container>
      <Container fluid className='cards-container'>
        <Row className='justify-content-center'>
          <Col sm={12} md={6} lg={4} className='mb-3'>
            <Card className='service-card'>
              <Card.Img variant='top' src={nurseImg} className='card-img' />
              <Card.Body>
                <Card.Title>Enfermero / Auxiliar de enfermería
                </Card.Title>
                <Card.Text>
                  <p>Ofrecemos oportunidades laborales en Alemania para enfermeros y auxiliares de enfermería, tanto con título profesional como tecnólogos en enfermería, así como para auxiliares y estudiantes de enfermería.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className='mb-3'>
            <Card className='service-card'>
              <Card.Img variant='top' src={educatorImg} className='card-img' />
              <Card.Body>
                <Card.Title>Educador</Card.Title>
                <Card.Text>
                <p>Tenemos opciones de empleo en Alemania para profesionales con licenciatura en educación infantil, tecnólogos en educación infantil y estudiantes en esta área.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className='mb-3'>
            <Card className='service-card'>
              <Card.Img variant='top' src={truckDriverImg} className='card-img' />
              <Card.Body>
                <Card.Title>Conductor de camión</Card.Title>
                <Card.Text>
                  <p>Solo necesitas ser bachiller y tener experiencia como conductor.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
