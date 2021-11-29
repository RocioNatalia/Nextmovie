import React from 'react';
import { Link } from 'react-router-dom';
import CustomInput from '../../components/custom-input/custom-input.component';

import Footer from '../../components/footer/footer.component';

import './landing.style.scss';

const Landing = () => (
  <div className='background-landing'>
    <div className='landing'>
      <div className='bar-landing'>
        <div className='logo-button'>Nextmovie</div>
        <div className='custom-button'>
          <Link to='/login'>Sing in</Link>
        </div>
      </div>
      <div className='text-landing'>
        <p className='text-xl'>
          Unlimited movies,
          <br /> TV shows, and more.
        </p>
        <p className='text-md'>Watch anywhere. Cancel anytime.</p>
        <p className='text-sm'>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className='email-zone'>
          <CustomInput
            name='email'
            label='Email address'
            type='email'
            size={
              window.innerWidth < 600
                ? window.innerWidth / 1.5
                : window.innerWidth / 3
            }
          />
          <button className='custom-button'>Get Started</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Landing;
