import { createContext, useState } from "react";
import PRODUCTS_DATA from "../../src/shop-data.json";

export const ProductsContext = createContext({
  product: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const value = { products };
  console.log("products", products);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
