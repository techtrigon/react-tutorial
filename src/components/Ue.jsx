import React, { useState, useEffect } from 'react';
import Homebtn from './Homebtn';

const Child = () => {
  useEffect( () => {
    console.log( "Child useEffect ran" );
  }, [] ); // Empty dependency array
  return <div>Child Component</div>;
};

const Ue = () => {
  const [ count, setCount ] = useState( 0 );

  return (
    <div>
      <Homebtn />
      <button onClick={ () => setCount( count + 1 ) }>Re-render Parent</button>
      <Child />
    </div>
  );
};

export default Ue;
