import { createContext, useContext, useState } from "react";

const FormaturaContext = createContext();

export const FormaturaProvider = ({ children }) => {
  const [formaturaLista, setFormaturaLista] = useState([]);

  return (
    <FormaturaContext.Provider value={{ formaturaLista, setFormaturaLista }}>
      {children}
    </FormaturaContext.Provider>
  );
};

export const useFormatura = () => useContext(FormaturaContext);
