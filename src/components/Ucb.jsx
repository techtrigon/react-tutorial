import React, { useCallback, useState, memo } from "react";
import Homebtn from './Homebtn';

// when passing function as props to child  => may use callback

// Child component that receives a callback as a prop
// The callback function (onIncrement) prop must maintain the same reference across renders to avoid unnecessary re-renders.
// If not using React.memo, the child will re-render on every parent render even if the props (like onIncrement) haven't changed, due to new function references.
const Child = memo( ( { onIncrement } ) => {
  console.log( "Child rendered" );
  return <button onClick={ onIncrement }>Increment in Child</button>;
} );

// TRY IT WITHOUT 'memo'  ......
// const Child = ( { onIncrement } ) => {
//   console.log( "Child rendered" );
//   return <button onClick={ onIncrement }>Increment in Child</button>;
// };

const Ucb = () => {
  const [ count, setCount ] = useState( 0 );
  const [ otherState, setOtherState ] = useState( false );

  // const increment = () => {
  // setCount( ( prevCount ) => prevCount + 1 );
  // };

  // Memoize the callback function
  // Without useCallback, 'increment' functionx is recreated on every parent render.
  // If this function is passed as a prop, it causes child re-renders due to the new function reference.
  // useCallback ensures 'increment' retains the same reference unless dependencies change.
  const increment = useCallback( () => {
    setCount( ( prevCount ) => prevCount + 1 );
  }, [ count ] );

  return (
    <div>
      <Homebtn />
      <h1>Ucb Component</h1>
      <p>Count: { count }</p>
      <button onClick={ () => setOtherState( !otherState ) }>Toggle Other State</button>
      {/* Pass the memoized function to the child */ }
      <Child onIncrement={ increment } />
    </div>
  );
};

export default Ucb;
