import "./product-card.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import formatNumber from "../../utils/number-format";
import SaleRibbon from "../sale-ribbon/sale-ribbon.component";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price, sale } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = (event) => {
    event.preventDefault();
    addItemToCart(product);
  };

  const applySale = (sale) => {
    const priceWithSale = price - (price * sale) / 100;
    return sale > 0 ? (
      <span>
        {formatNumber(priceWithSale.toFixed(0))}{" "}
        <del>${formatNumber(price)}</del>
      </span>
    ) : (
      <span>{price}</span>
    );
  };

  console.log(name, " => ", price, ": ", sale);

  return (
    <div className="product-card-container">
      {sale > 0 && <SaleRibbon sale={sale} />}
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${applySale(sale)}</span>
      </div>
      <Button
        onClick={addProductToCart}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
