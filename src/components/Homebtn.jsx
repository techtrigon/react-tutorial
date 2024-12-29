import React from 'react';
import { NavLink } from 'react-router-dom';

const Homebtn = React.memo( () => {
  return (
    <div>
      <NavLink to='/'>
        <button>
          HOME
        </button>
      </NavLink>
    </div>
  );
} );

export default Homebtn;
