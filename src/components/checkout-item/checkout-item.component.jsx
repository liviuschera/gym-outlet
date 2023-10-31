import "./checkout-item.styles.scss";
import { removeItemFromCart, CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;
  const { removeItemFromCart } = useContext(CartContext);

  return (
    <>
      <div className="checkout-row">
        <img className="item-img" src={imageUrl} alt={name} />
        <span className="item-info">{name}</span>
        <div className="quantity-container">
          <span>{"\u276C"}</span>
          <span className="quantity">{quantity}</span>
          <span>{"\u276D"}</span>
        </div>
        <span className="item-info">${price}</span>
        <span onClick={() => removeItemFromCart(item)} className="remove-item">
          {"\u2715"}
        </span>
      </div>
      <hr className="checkout-hr" />
    </>
  );
};

export default CheckoutItem;
