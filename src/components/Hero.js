import React from 'react';
import heroImg from '../assets/maheshkumar-painam-HF-lFqdOMF8-unsplash.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function Hero() {
  return (
    <div className='hero-block'>
      <Container style={{ position: 'relative', height: '80vh', width: '100vw', maxWidth: '100%', overflow: 'hidden' }} className='p-0'>
        <Image src={heroImg} alt='Bundestag' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#010C80', opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff', zIndex: 1 }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Title 1</h1>
          <h1 style={{ fontSize: '2rem' }}>Title 2</h1>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
