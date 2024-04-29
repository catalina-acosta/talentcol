import React from 'react'
import {Container, Col, Form, Row, Button} from 'react-bootstrap'
import '../styles/Contact.css'

function Contact() {
  return (
    <section id='contact' className='block contact-block'>
    <Container >
      <div className='title-holder'>
        <h1>Contactános</h1>
      </div>
      <Form className='contact-form' >
        <Row>
          <Form.Label>Información </Form.Label>
          <Col sm={4}>
            <Form.Control type="text" placeholder="Enter your full name" required />
          </Col>
          <Col sm={4}>
            <Form.Control type="email" placeholder="Enter your email address" required/>
          </Col>
          <Col sm={4}>
            <Form.Control type="tel" placeholder="Enter your phone number" required/>
          </Col>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Por favor elige una de estas opciones: </Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Interesado en conducir camiones</option>
              <option>Educador</option>
              <option>Enfermero</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          <Col sm={12}>
            <Form.Control as="textarea" placeholder="Enter your message" required/>
          </Col>
        </Row>
        <div className='btn-holder'>
          <Button type='submit'>Submit</Button>
        </div>
      </Form>
    </Container>
  </section>
  )
}

export default Contact
