import "./category.styles.scss";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

const Category = () => {
  const { categories } = useContext(CategoriesContext);
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categories[category.toLowerCase()]);
  }, [categories, category]);

  return (
    <>
      <h2 className="title">{category}</h2>
      <hr className="categories-preview-hr" />
      <div className="category-container">
        {products?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Category;
