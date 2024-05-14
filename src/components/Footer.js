import React from 'react'
import '../styles/Footer.css'
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <Container fluid id='footer'>
      <div className='copyright'>&copy; 2024 talentcol. All rights reserved</div>
      <div className='socials'>
        <ul>
          <li>
            <a href='www.facebook.com'><i className='fab fa-facebook-f'></i></a>
          </li>
          <li>
            <a href='www.facebook.com'><i class="fa-brands fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Footer
