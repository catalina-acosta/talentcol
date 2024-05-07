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
      <Container className='title-holder'><h1 className='title'>Tienes alguno de estos perfiles? </h1></Container>
      <Container fluid className='cards-container'>
        <Row className='justify-content-center'>
          <Col sm={12} md={6} lg={4} className='mb-3'>
            <Card className='service-card'>
              <Card.Img variant='top' src={nurseImg} className='card-img' />
              <Card.Body>
                <Card.Title>Enfermero / Auxiliar de enfermería
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li><p>título profesional de enfermería</p></li>
                    <li><p>técnologo en enfermería</p></li>
                    <li><p>auxiliar de enfermería</p></li>
                    <li><p>estudiante de enfermería</p></li>
                  </ul>
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
                <ul>
                    <li><p>licenciatura en educación infantil</p></li>
                    <li><p>técnologo en educación infantil</p></li>
                    <li><p>estudiante en educación infantil</p></li>
                  </ul>
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
                <ul>
                    <li><p>bachiller</p></li>
                    <li><p>experiencia de conductor</p></li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className='services-map-block' fluid>
        <div className='section-title'>
          <h1 className='title'>Empieza ahora!</h1>
          <h2 className='subtitle'>Te ayudamos con todo el proceso: </h2>
        </div>
        <ServicesMap />
      </Container>
    </div>
  );
}

export default Services;
