import "./cart-item.styles.scss";
import formatNumber from "../../utils/number-format";

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity ?? 1} x ${formatNumber(price)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
