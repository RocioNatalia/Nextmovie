import React from 'react';

import './footer.style.scss';

const Footer = () => (
  <div className='footer'>
    <a
      href='https://github.com/RocioNatalia/Nextmovie'
      target='_blank'
      className='a-footer' rel="noreferrer"
    >
      Repository <div className='logo-github'></div>
    </a>
    <div className='a-footer' style={{ fontSize: 10 }}>
      Made with <div className='logo-react'></div>
    </div>
  </div>
);

export default Footer;
