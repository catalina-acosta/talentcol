import React from 'react'
import {Container, Col, Form, Row, Button} from 'react-bootstrap'
import '../styles/Contact.css'

function Contact() {
  return (
    <section id='contact' className='block contact-block'>
    <Container >
      <div className='title-holder contact-title'>
        <h1 className='title'>Contactános</h1>
      </div>
      <Form className='contact-form' >
        <Row>
          <Col sm={6}>
            <Form.Label>Información </Form.Label>
            <Row><Form.Control type="text" placeholder="Enter your full name" required /></Row>
            <Row><Form.Control type="email" placeholder="Enter your email address" required/></Row>
            <Row><Form.Control type="tel" placeholder="Enter your phone number" required/></Row>
            <Row>
              <Form.Group as={Col} controlId="formGridState" className='p-0'>
                <Form.Label>Por favor elige una de estas opciones: </Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Interesado en conducir camiones</option>
                  <option>Educador</option>
                  <option>Enfermero</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Col>
          <Col sm={6}>
          <Form.Label>Tienes alguna pregunta? </Form.Label>
            <Form.Control as="textarea" placeholder="Enter your message" required className="message-textarea"/>
          </Col>
        </Row>
        <div className='btn-holder'>
          <Button variant="outline-warning" type='submit' size="lg" >Submit</Button>
        </div>
      </Form>
    </Container>
  </section>
  )
}

export default Contact
