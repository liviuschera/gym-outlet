import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../../src/shop-data.js";
import { createCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
  product: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  // useEffect(() => {
  // used to batch add all the shop products from local file to firestore
  //   createCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
