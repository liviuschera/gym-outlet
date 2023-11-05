import { createContext, useEffect, useState } from "react";
import { getDocumentsFromCategoriesCollection } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = { categories, setCategories };

  // useEffect(() => {
  // used to batch add all the shop products from local file to firestore
  //   createCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getDocuments = async () => {
      const documents = await getDocumentsFromCategoriesCollection();
      setCategories(documents);
    };
    getDocuments();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
