import React, { useState, useEffect, useMemo, } from 'react';


const Us = () => {

  // every usestate set method call causes re-render

  const [ flipval, setFlipval ] = useState( false ); //false : number
  const [ age, setAge ] = useState( 0 );
  const [ keyval, setKeyval ] = useState( 0 );
  const [ show, setShow ] = useState( true );


  function incrementage () {
    setAge( age + 1 );
    console.log( age, " ---> shows previous age" );
  }

  const numtyping = () => {
    return <div>0123456789</div>;
  };

  const alphatyping = () => {
    return <div>abcdefghijklmnopqrstuvwxyz</div>;
  };

  const [ typingfn, setTypingfn ] = useState( () => numtyping ); // stores entire function
  const [ valuesfn, setValuesfn ] = useState( numtyping ); // store values returned by function DON'T use numtyping() as it calls it again wasting performance

  // useEffect( () => {
  //   ( flipval ) ? ( setTypingfn( () => alphatyping ), setValuesfn( alphatyping ) ) : ( setTypingfn( () => numtyping ), setValuesfn( numtyping ) );
  // }, [ flipval ] );

  //  OR

  const handleFlip = () => {
    setFlipval( ( prevFlipval ) => {
      const newFlipval = !prevFlipval;
      setTypingfn( () => newFlipval ? alphatyping : numtyping ); // setting different function based on state
      setValuesfn( newFlipval ? alphatyping : numtyping );
      return newFlipval; // Return the updated state
    } );
    // update function is needed when setFlipval is called again not console.log or other
    console.log( flipval ); // old value even if update function is passed to setFlipval
  };


  return (
    <>
      <div className="dmain">
        <button onClick={ handleFlip }>FLIP</button>
        <h2>flipval = { flipval.toString() }</h2>
        <h2>Storing entire function in usestate</h2>
        <h2>{ typingfn() }</h2>
        <h2>Storing return values from function in usestate</h2>
        <h2>{ valuesfn }</h2>
      </div>


      <div className="dmain">
        <h1>Your age: { age }</h1>
        <button onClick={ () => {
          incrementage(); // does not update thrice at a time
          incrementage(); // .....
          incrementage(); // .....
        } }>+3</button>
        <button onClick={ () => {
          incrementage();
        } }>+1</button>
      </div>


      <div className="dmain">
        <button onClick={ () => setShow( ( prev ) => !prev ) }>Toggle User</button>
        {/* key to manipulate state changes */ }
        {/* IF position is same of rendering then state is preserved else not, unless same "key" is passed to different components*/ }
        { show && <User name="Chimezie" key="1" /> }
        { !show && <User name="Innocent" /> }
      </div>


    </>
  );
};


function User ( { name } ) {
  const [ age, setAge ] = useState( 0 );

  return (
    <div>
      <h3>
        Name: { name }, Age: { age }
      </h3>
      <button type="button" onClick={ () =>
        setAge( age + 1 ) }>
        Add age
      </button>
    </div>
  );
}

export default Us;
