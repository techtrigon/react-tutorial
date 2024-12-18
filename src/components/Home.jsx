import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <button>
        <NavLink to='/us'>
          USESTATE
        </NavLink>
      </button>
      <button>
        <NavLink to='/uc'>
          USECALLBACK
        </NavLink>
      </button>
      <button>
        <NavLink to='/uc2'>
          USECALLBACK 2
        </NavLink>
      </button>
      <button>
        <NavLink to='/uc3'>
          USECALLBACK 3
        </NavLink>
      </button>
      <button>
        <NavLink to='/um'>
          USEMEMO
        </NavLink>
      </button>
    </div>
  );
};

export default Home;
