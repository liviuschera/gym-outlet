import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-cart.svg";
import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <div
      onClick={() => setIsCartOpen(!isCartOpen)}
      className="cart-icon-container"
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
