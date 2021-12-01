import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../../components/footer/footer.component';
import CustomInput from '../../../components/custom-input/custom-input.component';

import '../login.style.scss';

const Registration = () => (
  <div className='background-landing'>
    <div className='landing'>
      <div className='bar-landing'>
        <div className='logo-button'>
          <Link to='/nextmovie'>Nextmovie</Link>
        </div>
        <div className='custom-button'>
          <Link to='/login'>Sing in</Link>
        </div>
      </div>

      <div className='form-container'>
        <div className='form'>
          <div className='form-title'>Register</div>

          <div className='form-input'>
            <CustomInput name='nickname' label='Nickname' type='text' />
          </div>

          <div className='form-input'>
            <CustomInput name='email' label='Email address' type='email' />
          </div>
          <div className='form-input'>
            <CustomInput name='password' label='Password' type='password' />
          </div>

          <div className='tyc'>
            <input type='checkbox' /> {'I agree to '}
            <Link to='/terms'>{'Terms & conditions'}</Link>
          </div>

          <div className='custom-button'>
            <Link to='/browse'>Create Account</Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Registration;
