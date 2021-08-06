import { createContext, useContext, useState } from "react";

export const CasamentoContext = createContext();

export const CasamentoProvider = ({ children }) => {
  const [casamentoLista, setCasamentoLista] = useState([]);

  return (
    <CasamentoContext.Provider value={{ casamentoLista, setCasamentoLista }}>
      {children}
    </CasamentoContext.Provider>
  );
};

export const useCasamento = () => useContext(CasamentoContext);
