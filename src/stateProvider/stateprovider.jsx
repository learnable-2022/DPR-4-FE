import React from 'react'
import { createContext, useState } from "react";






const StateContext = createContext({});


export const StateProvider = ({ children }) => {


  const [auth, setAuth] = useState({});
  
  return (
    <StateContext.Provider value={{ auth, setAuth }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
