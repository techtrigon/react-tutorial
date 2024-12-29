import { useContext, createContext } from 'react';

const userContext = createContext( {
  age: 24
} );
export default userContext;

const UserContextProvider = ( { children } ) => {
  const defaultValue = userHook();
  return (
    <userContext.Provider value={ { ...defaultValue, name: "John" } }>
      { children }
    </userContext.Provider>
  );
};
export { UserContextProvider };

export const userHook = () => {
  return useContext( userContext );
};
