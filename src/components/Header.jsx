import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  return (
    <div className='HeaderPadding'>
      <div className='HeaderDiv'>
        <h1>Farmers Market!</h1>
      </div>

      <div>
        <h2>Current Market Schedule</h2>
        <Link to='/'>Produce List</Link> | <Link to='/schedulelist'>Produce Schedule</Link>
      </div>
      <hr/>
    </div>
  );
}

export default Header;
