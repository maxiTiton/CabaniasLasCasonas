import React, { useEffect, useRef } from 'react';
import WhatsappLogo from './WhatsappLogo';

const whatsappNumber = '5493586000002'; // Número real usado en Contact.jsx
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const styles = {
  position: 'fixed',
  right: '24px',
  bottom: '24px',
  zIndex: 1000,
  background: 'white',
  borderRadius: '50%',
  boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
  width: '60px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'box-shadow 0.2s, transform 0.2s, background 0.2s',
  cursor: 'pointer',
  padding: 0,
};

const logoContainer = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// Animación keyframes y hover como CSS-in-JS
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
@keyframes wpp-slide-up {
  0% { transform: translateY(60px); opacity: 0; }
  70% { transform: translateY(-8px); opacity: 1; }
  100% { transform: translateY(0); opacity: 1; }
}
.wpp-btn-float {
  animation: wpp-slide-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) 1;
}
.wpp-btn-float:hover {
  box-shadow: 0 4px 24px rgba(37,211,102,0.25), 0 2px 12px rgba(0,0,0,0.18);
  transform: scale(1.08) translateY(-4px);
  background: #25D366 !important;
}
`;
document.head.appendChild(styleSheet);

const WhatsappButton = () => {
  const btnRef = useRef(null);

  useEffect(() => {
    // Elimina la animación después de ejecutarse una vez
    const btn = btnRef.current;
    if (!btn) return;
    const handleAnimationEnd = () => {
      btn.style.animation = 'none';
    };
    btn.addEventListener('animationend', handleAnimationEnd);
    return () => btn.removeEventListener('animationend', handleAnimationEnd);
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={styles}
      className="wpp-btn-float"
      title="Contactar por WhatsApp"
      ref={btnRef}
    >
      <span style={logoContainer}>
        <WhatsappLogo />
      </span>
    </a>
  );
};

export default WhatsappButton; 