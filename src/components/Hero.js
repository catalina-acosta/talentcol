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
        <div className='hero-text-block'>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Cumple tu sueno de trabajar en Alemania</h1>
          <h1 style={{ fontSize: '2rem' }}>Gana el triple de tu salario actual</h1>
          <Button variant='outline-warning' size='lg'>agenda una llamada con nosotros!</Button>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
