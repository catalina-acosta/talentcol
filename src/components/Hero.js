import React from 'react';
import '../styles/Hero.css'
import heroImg from '../assets/german-flag-on-urban-roof.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Hero() {
  return (
    <div className='hero-block' id='home'>
      <Container className='p-0 hero-container'>
        <Image src={heroImg} alt='Bundestag' className='hero-img' />
        <div className='hero-overlay' />
        <Container className='hero-text-block' fluid>
          <h1>Cumple tu sueño de trabajar en Alemania</h1>
          <h2>Gana el triple de tu salario actual</h2>
          <Button variant='outline-warning' size='lg'>agenda una llamada con nosotros!</Button>
        </Container>
      </Container>
    </div>
  );
}

export default Hero;
