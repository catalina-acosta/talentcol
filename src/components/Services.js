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
      <Container fluid className='cards-container'>
        <Row className='justify-content-center'>
          <Col sm={12} md={6} lg={4}>
            <Card className='service-card'>
              <Card.Img variant='top' src={truckDriverImg} className='card-img' />
              <Card.Body>
                <Card.Title>Eres conductor de camión?</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className='service-card'>
              <Card.Img variant='top' src={educatorImg} className='card-img' />
              <Card.Body>
                <Card.Title>Eres educador?</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className='service-card'>
              <Card.Img variant='top' src={nurseImg} className='card-img' />
              <Card.Body>
                <Card.Title>Eres enfermero?</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className='services-map-block' fluid>
        <div className='section-title'>
          <h1>Empieza ahora!</h1>
          <h2>Te ayudamos con todo el proceso: </h2>
        </div>
        <ServicesMap />
      </Container>
    </div>
  );
}

export default Services;
