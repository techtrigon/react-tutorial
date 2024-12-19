import React, { useState } from 'react';
// import { useState, useCallback, useMemo, memo, useEffect } from "react";

// Now Ch3 will not rerender if props is not changed
const Ch3 = React.memo( ( { callbackFunction } ) => {
  const [ value, setValue ] = React.useState( 0 );
  console.log( "Child rerendered" );

  React.useEffect( () => {
    console.log( "callback inside child got changed" );
    // setValue( value + 1 );
  }, [ callbackFunction ] );

  return ( <p>Child: { value }</p> );
} );

function Uc3 () {
  const [ count, setCount ] = React.useState( 0 );
  const [ another, setAnother ] = React.useState( 0 );

  // const countCallback = () => {
  //   return count;
  // };

  // now the function will not rerender until dependancy is changed
  const countCallback = React.useCallback( () => {
    return count;
  }, [ count ] );


  return (
    <div>
      <Ch3 callbackFunction={ countCallback } />
      <button onClick={ () => setCount( count + 1 ) }>
        Change callback
      </button>

      <button onClick={ () => setAnother( another + 1 ) }>
        Do not change callback
      </button>
    </div>
  );
}


export default Uc3;
