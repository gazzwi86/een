import React from 'react';
import './styles.css';

const Footer = () => (
  <footer className="footer">
    <p className="footer__copy">Copyright &copy; {new Date().getFullYear()}</p>
  </footer>
);

export default Footer;
