import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartTotalItems } = useContext(CartContext);

  return (
    <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartTotalItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
