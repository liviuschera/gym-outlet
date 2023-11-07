import "./cart-item.styles.scss";
import formatNumber, { applyProductSale } from "../../utils/number-format";

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity, sale } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity ?? 1} x ${applyProductSale(price, sale)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
