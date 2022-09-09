import React from 'react';
// Context Creation

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  return <AppContext.Provider value={"rabi nlfflnf"}>{children}</AppContext.Provider>;
};

//custom hoos creation
const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };
