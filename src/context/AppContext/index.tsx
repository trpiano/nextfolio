import { createContext, useContext, useState } from 'react';

// types
import { AppContextProps } from './models';

const AppContext = createContext({} as AppContextProps);

function AppContextProvider({ children }: any) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        menuIsOpen,
        setMenuIsOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppContextProvider };
