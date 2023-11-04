import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);
  console.log("shop", categories);
  return (
    <>
      {Object.keys(categories).map((key) => (
        <div key={key}>
          <h2 className="title">{key}</h2>
          <div className="products-container">
            {categories[key].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
export default Shop;
