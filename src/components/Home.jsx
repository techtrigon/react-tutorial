import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
        <NavLink to='/us'>
        <button>
          USESTATE
        </button>
        </NavLink>
      <NavLink to='/ue'>
        <button>
          USEEFFECT
      </button>
      </NavLink>
      <NavLink to='/ucb'>
        <button>
          USECALLBACK
        </button>
      </NavLink>
      <NavLink to='/ucb2'>
        <button>
          USECALLBACK 2
        </button>
      </NavLink>
      <NavLink to='/ucb3'>
        <button>
          USECALLBACK 3
        </button>
        </NavLink>
      <NavLink to='/um'>
        <button>
          USEMEMO & MEMO
      </button>
      </NavLink>
      <NavLink to='/uc'>
      <button>
          USECONTEXT
        </button>
      </NavLink>
    </div>
  );
};

export default Home;
