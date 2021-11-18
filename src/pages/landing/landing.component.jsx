import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/footer/footer.component';

import './landing.style.scss';

const Landing = () => (
  <div className='background-landing'>
    <div className='landing'>
      <div className='bar-landing'>
        <div className='logo'>
          <h1>Nextmovie</h1>
        </div>
        <div className='button'>
          <Link to='/browse'>Sing in</Link>
        </div>
      </div>
      <div className='text-landing'>
        <p style={{ fontSize: 55 }}>
          Unlimited movies,
          <br /> TV shows, and more.
        </p>
        <p style={{ fontSize: 25 }}>Watch anywhere. Cancel anytime.</p>
        <p style={{ fontSize: 18 }}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input></input>
      </div>
    </div>
    <Footer />
  </div>
);

export default Landing;
