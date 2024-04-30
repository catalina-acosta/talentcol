import React from 'react';
import '../styles/Services.css'
import { Container, Card, Row, Col } from 'react-bootstrap';
import educatorImg from '../assets/early-childhood-educator-with-toys-and-child.jpg';
import truckDriverImg from '../assets/man-with-glasses-driving.jpg';
import nurseImg from '../assets/female-medical-professional-holds-clipboard-in-hospital-room.jpg';
import ServicesMap from '../helpers/ServicesMap';

function Services() {
  return (
    <div className='services-block' id='services'>
      <h1>Tu perfil: </h1>
      <Container fluid className='cards-container'>
        <Row className='justify-content-center'>
          <Col sm={12} md={6} lg={4} className='mb-3'>
            <Card className='service-card'>
              <Card.Img variant='top' src={nurseImg} className='card-img' />
              <Card.Body>
                <Card.Title>Eres enfermero o auxiliar de enfermería?</Card.Title>
                <Card.Text>
                  Tienes un título profesional de enfermería o un técnologo en enfermería? O eres estudiante en alguna de estas carreras?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4} className='mb-3'>
            <Card className='service-card'>
              <Card.Img variant='top' src={educatorImg} className='card-img' />
              <Card.Body>
                <Card.Title>Eres educador?</Card.Title>
                <Card.Text>
                  Tienes una licenciatura en educación infantil o estás estudiando eso? o un título de tecnólogo en educación infantil?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className='mb-3'>
            <Card className='service-card'>
              <Card.Img variant='top' src={truckDriverImg} className='card-img' />
              <Card.Body>
                <Card.Title>Quieres trabajar como conductor de camión?</Card.Title>
                <Card.Text>
                  Tienes educación bachiller y experiencia como conductor?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className='services-map-block' fluid>
        <div className='section-title'>
          <h1 className='title'>Empieza ahora!</h1>
          <h2>Te ayudamos con todo el proceso: </h2>
        </div>
        <ServicesMap />
      </Container>
    </div>
  );
}

export default Services;
