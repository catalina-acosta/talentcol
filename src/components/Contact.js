import React from 'react'
import {Container, Col, Form, Row, Button} from 'react-bootstrap'
import '../styles/Contact.css'
import logoGraphic from '../assets/talentcol-logo-graphic.png'

function Contact() {
  return (
    <section id='contact' className='block contact-block'>
      <h1 className='title contact-title'>Tienes preguntas?</h1>
      <Container >
        <div className='title-holder '>
          <h1>Escríbenos un mensaje</h1>
        </div>
        <Form className='contact-form' >
          <Row>
            <Col sm={6}>
              <Form.Label>Información </Form.Label>
              <Row><Form.Control type="text" placeholder="Ingresa tu nombre completo" required /></Row>
              <Row><Form.Control type="email" placeholder="Ingresa tu dirección de correo electrónico" required/></Row>
              <Row><Form.Control type="tel" placeholder="Ingresa tu teléfono de contacto" required/></Row>
              <Row>
                <Form.Group as={Col} controlId="formGridState" className='p-0'>
                  <Form.Label>Por favor elige una de estas opciones: </Form.Label>
                  <Form.Select defaultValue="Elige...">
                    <option>Interesado en conducir camiones</option>
                    <option>Educador</option>
                    <option>Enfermero</option>
                  </Form.Select>
                </Form.Group>
              </Row>
            </Col>
            <Col sm={6}>
            <Form.Label>Tienes alguna pregunta? </Form.Label>
              <Form.Control as="textarea" placeholder="Escribe tu mensaje" required className="message-textarea"/>
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button variant="outline-warning" type='submit' size="lg" >Enviar</Button>
          </div>
        </Form>
        <Container className='call-block'>
          <h1>O si prefieres:</h1>
          <Button variant='outline-warning' size='lg' href='https://calendly.com/cata-webdev/30min'>
              Agenda una llamada ahora!
          </Button>
        </Container>
        <Container style={{textAlign:"center"}}>
          <img alt="logo" src={logoGraphic} style={{maxWidth:"4rem"}} className='mt-5'></img>
        </Container>
      </Container>
    </section>
  )
}

export default Contact
