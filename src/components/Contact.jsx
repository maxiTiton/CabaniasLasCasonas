import React from 'react'
import './Contact.css'

const Contact = () => {
  const handleChat = (number) => {
    const whatsappUrl = `https://wa.me/${number}`;
    window.open(whatsappUrl, '_blank');
  }

  const handleEmail = () => {
    window.open('mailto:cablascasonas@yahoo.com.ar?subject=Consulta sobre Cabañas', '_blank');
  }

  return (
    <section id="contacto" className="section contact reveal-on-scroll fade-up">
      <div className="container">
        <h2 className="section-title">Contactanos</h2>
        <p className="section-subtitle">
          Reservá tu estadía o consultanos cualquier duda que tengas
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card reveal-on-scroll fade-up">
              <div className="card-content">
                <div className="info-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <h4>WhatsApp</h4>
                <p>+54 9 358 600-0002<br />Sr. Guillermo Ropolo</p>
              </div>
              <div className="card-actions">
                <button onClick={() => handleChat('5493586000002')} className="contact-btn whatsapp primary">
                  Chatear por WhatsApp
                </button>
                <p className="alternative-contact">
                  <small>Contacto alternativo: </small><a href="#" onClick={(e) => { e.preventDefault(); handleChat('5493584208323'); }} className="whatsapp-link">Analía</a>
                </p>
              </div>
            </div>

            <div className="info-card reveal-on-scroll fade-up">
              <div className="card-content">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h4>Email</h4>
                <p>cablascasonas@yahoo.com.ar</p>
              </div>
              <div className="card-actions">
                <button onClick={handleEmail} className="contact-btn email">
                  Enviar Email
                </button>
                <div className="spacer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
