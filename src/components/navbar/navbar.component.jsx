import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.style.scss';

class Navbar extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className='navbar'>
        <div className='logo'>
          <Link to='/browse'>
            <h1>Nextmovie</h1>
          </Link>
          <Link to='/browse'>
            <p>Home</p>
          </Link>

          <Link to='/'>
            <p>My list</p>
          </Link>
        </div>
        <div className='buttons'>
          <Link to='/'>Log out</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
