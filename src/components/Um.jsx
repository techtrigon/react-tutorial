import React, { useCallback, useMemo, useState } from 'react';

const Um = () => {
  const [ btn1, setBtn1 ] = useState( false );
  const [ count, setCount ] = useState( 0 );
  const Fun1 = useMemo( () => { // memoizing the result to avoid recomputation on each render
    console.log( "rerendered..." );
    for ( let index = 0; index < 1000000000; index++ )
    {
    }
    return <div>YES</div>;
  }, [] );
  return (
    <>
      <button onClick={ () => setCount( count + 1 ) }>CLICK ME</button>
      <div>Value of count : { count }</div>
      <div>value of fun1 : </div>
      { Fun1 }
    </>
  );
};

export default Um;
