import "./categories-preview.styles.scss";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categories).map((key) => (
        <div key={key}>
          <h2 className="title">{key}</h2>
          <hr className="categories-preview-hr" />
          <div className="products-container">
            {/* displaying a preview of the 1st 4 products in category */}
            {categories[key].slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoriesPreview;
