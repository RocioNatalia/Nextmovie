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
        <div className='left-menu'>
          <div className='logo-button'>
            <Link to='/browse'>Nextmovie</Link>
          </div>

          <Link to='/browse'>
            <p>Home</p>
          </Link>

          <div>
            <p>Movies</p>
          </div>

          <Link to='/list/fav'>
            <p>My list</p>
          </Link>
        </div>
        <div className='buttons'>
          <Link to='/nextmovie'>Sing out</Link>
        </div>
      </div>
    );
  }
}





export default Navbar;
