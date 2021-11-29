import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../../components/footer/footer.component';
import CustomInput from '../../../components/custom-input/custom-input.component';

import '../login.style.scss';

const LogInHelp = () => (
  <div className='background-landing'>
    <div className='landing'>
      <div className='bar-landing'>
        <div className='logo-button'>
          <Link to='/'>Nextmovie</Link>
        </div>
        <div className='custom-button'>
          <Link to='/login'>Sing in</Link>
        </div>
      </div>

      <div className='form-container'>
        <div className='form'>
          <div className='form-title'>Forgot password?</div>
          <div className='form-message'>
            We will send you an email with instructions on how to reset your
            password.
          </div>
          <div className='form-input'>
            <CustomInput name='email' label='Email address' type='email' />
          </div>
          <div className='custom-button' style={{ marginTop: '0px' }}>
            Email Me
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default LogInHelp;
