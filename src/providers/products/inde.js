import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { punkBeers } from "../../service/api";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    axios.get(punkBeers).then((response) => setProductsList(response.data));
  }, []);

  return (
    <ProductsContext.Provider value={{ productsList, setProductsList }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
