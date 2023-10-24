import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} GPT and Luciano K.</p>
    </footer>
  );
};

const footerStyle = {
  position: 'absolute',
  bottom: 0, // Coloca o footer no final da página
  width: '100%',
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

export default Footer;
