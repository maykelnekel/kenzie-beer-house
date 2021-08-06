import { createContext, useState, useContext } from "react";

const ConfratContext = createContext();

export const ConfratProvider = ({ children }) => {
  const [confratLista, setConfratLista] = useState([]);

  return (
    <ConfratContext.Provider value={{ confratLista, setConfratLista }}>
      {children}
    </ConfratContext.Provider>
  );
};

export const useConfrat = () => useContext(ConfratContext);
