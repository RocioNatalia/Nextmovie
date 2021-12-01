import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../../components/footer/footer.component';
import CustomInput from '../../../components/custom-input/custom-input.component';

import '../login.style.scss';

const Login = () => (
  <div className='background-landing'>
    <div className='landing'>
      <div className='bar-landing'>
        <div className='logo-button'>
          <Link to='/nextmovie'>Nextmovie</Link>
        </div>
      </div>

      <div className='form-container'>
        <div className='form'>
          <div className='form-title'>Sing In</div>
          <div className='form-input'>
            <CustomInput name='email' label='Email address' type='email' />
          </div>
          <div className='form-input'>
            <CustomInput name='password' label='Password' type='password' />
          </div>

          <div className='custom-button'>
            <Link to='/browse'>Sing In</Link>
          </div>

          <div className='under-button'>
            <div>
              <input type='checkbox' id='remember' />
              Remember me
            </div>
            <Link to='/loginHelp'>Need help?</Link>
          </div>

          <div className='login-google'>
            <div className='google-logo'></div>Login with Google
          </div>

          <div className='new-reg'>
            New to Nextmovie? <Link to='/registration'>Sign up now.</Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Login;
