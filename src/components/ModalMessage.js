import React from 'react'
import '../styles/ModalMessage.css'


function ModalMessage({ closeModal }) {
  const redirectToHome = () => {
    window.location.hash = '#home';
  };

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button onClick={() => { closeModal(false); redirectToHome(); }}>X</button>
        </div>
        <div className='modalTitle'>
          <h1>Mensaje enviado!</h1>
        </div>
        <div className='modalBody'>
          <p>Gracias por tu mensaje. Te responderemos lo antes posible!</p>
        </div>
      </div>
    </div>
  )
}

export default ModalMessage
