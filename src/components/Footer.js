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
            <a href='https://www.facebook.com/profile.php?id=61559338785736'><i className='fab fa-facebook-f'></i></a>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Footer
