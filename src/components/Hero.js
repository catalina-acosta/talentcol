import React, { useEffect } from 'react';
import '../styles/Hero.css';
import heroImg from '../assets/german-flag-on-urban-roof.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Hero() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='hero-block' id='home'>
      <Container className='p-0 hero-container'>
        <Image src={heroImg} alt='Bundestag' className='hero-img' />
        <div className='hero-overlay' />
        <Container className='hero-text-block' fluid>
          <h1 className='title'>Cumple tu sueño</h1>
          <h1 className='title'>Trabaja en Alemania</h1>
          <h2 className='subtitle'>Gana el triple de tu salario actual colombiano!</h2>
          <h3 className='extra-info'> Permiso y oferta de trabajo garantizado si cumples los requisitos.</h3>
          <Button variant='outline-warning' size='lg' onClick={() => window.Calendly.initPopupWidget({ url: 'https://calendly.com/cata-webdev/30min' })}>
            Agenda una llamada con nosotros
          </Button>
        </Container>
      </Container>
    </div>
  );
}

export default Hero;
