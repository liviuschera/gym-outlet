import "./checkout-item.styles.scss";
import { removeItemFromCart, CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;
  const { removeItemFromCart, incrementItemQuantity, decrementItemQuantity } =
    useContext(CartContext);

  return (
    <>
      <div className="checkout-row">
        <img className="item-img" src={imageUrl} alt={name} />
        <span className="name">{name}</span>
        <div className="quantity-container">
          <span
            onClick={() => decrementItemQuantity(item)}
            className="decrement-quantity"
          >
            {"\u276C"}
          </span>
          <span className="quantity">{quantity}</span>
          <span
            onClick={() => incrementItemQuantity(item)}
            className="increment-quantity"
          >
            {"\u276D"}
          </span>
        </div>
        <span className="price">${price}</span>
        <span onClick={() => removeItemFromCart(item)} className="remove-item">
          {"\u2715"}
        </span>
      </div>
      <hr className="checkout-hr" />
    </>
  );
};

export default CheckoutItem;
