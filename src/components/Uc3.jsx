import React, { useState } from 'react';
// import { useState, useCallback, useMemo, memo, useEffect } from "react";

function Ch3 ( { callbackFunction } ) {
  const [ value, setValue ] = React.useState( 0 );
  console.log( "Child rerendered" );

  React.useEffect( () => {
    console.log( "callback inside child got changed" );
    setValue( value + 1 );
  }, [ callbackFunction ] );

  return ( <p>Child: { value }</p> );
}

function Uc3 () {
  const [ count, setCount ] = React.useState( 0 );
  const [ another, setAnother ] = React.useState( 0 );

  // const countCallback = React.useCallback( () => {
  //   return count;
  // }, [ count ] );

  const countCallback = () => {
    return count;
  };

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
