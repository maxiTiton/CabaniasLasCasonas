import React from 'react'
import './Contact.css'

const Contact = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola! Me interesa conocer más sobre las cabañas. ¿Podrían enviarme información?')
    const whatsappUrl = `https://wa.me/5493584307111?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmail = () => {
    window.open('mailto:cablascasonas@yahoo.com.ar?subject=Consulta sobre Cabañas', '_blank')
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
              <div className="info-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h4>WhatsApp</h4>
              <p>+54 9 358 430-7111<br />Sr. Guillermo Ropolo</p>
              <button onClick={handleWhatsApp} className="contact-btn whatsapp">
                Chatear por WhatsApp
              </button>
            </div>
            
            <div className="info-card reveal-on-scroll fade-up">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>cablascasonas@yahoo.com.ar</p>
              <button onClick={handleEmail} className="contact-btn email">
                Enviar Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 