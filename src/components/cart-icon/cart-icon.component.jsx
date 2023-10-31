import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-cart.svg";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartTotalItems } = useContext(CartContext);

  return (
    <div
      onClick={() => setIsCartOpen(!isCartOpen)}
      className="cart-icon-container"
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartTotalItems}</span>
    </div>
  );
};

export default CartIcon;
