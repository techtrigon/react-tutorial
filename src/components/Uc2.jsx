import React, { useState, useEffect, useCallback } from "react";

const Uc2 = () => {
  const [ count, setCount ] = useState( 0 );
  const [ flipval, setFlipval ] = useState( false );

  // !!! here without callback 'increment' whenever the component Uc2 rerenders because of 'flipval' then all these others are also rerendered and recreated
  // const increment = () => {
  //   console.log( "Increment triggered" );
  // };

  // useCallback ensures 'increment' has a stable reference across renders
  const increment = useCallback( () => {
    console.log( "Increment triggered" );
  }, [ count ] );  // Only recreate the function when 'count' changes

  // useEffect will only run when the stable 'increment' reference changes
  useEffect( () => {
    console.log( "Effect triggered" );
    increment();  // Now it will only run when 'increment' changes
  }, [ increment ] );  // Stable reference, so useEffect will not run unnecessarily

  return (
    <div>
      <h3>Count: { count }</h3>
      <button onClick={ increment }>Increment</button>
      <h3>Flipval: { flipval.toString() }</h3>
      <button onClick={ () => setFlipval( !flipval ) }>Increment</button>
    </div>
  );
};

export default Uc2;
