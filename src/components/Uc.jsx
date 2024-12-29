import React from 'react';
import Homebtn from './Homebtn';
import { UserContextProvider, userHook } from '../context/UserContext';

const C1 = () => {
  const { name, age } = userHook();
  return (
    <div>
      <p>Child 1</p>
      <p>name is { name } </p>
      <p>age is { age } </p>
    </div>
  );
}

const Uc = () => {
  return (
    <div>
      <div>
        <Homebtn />
      </div>
      <UserContextProvider>
        <C1 />
      </UserContextProvider>
    </div>
  );
};

export default Uc;
