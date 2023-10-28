import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  productToAdd.quantity = productToAdd.quantity ?? 1;

  const itemAlreadyInCart = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // const itemAlreadyInCart = cartItems.find(
  //   (cartItem) => cartItem.id === productToAdd.id
  // );

  if (itemAlreadyInCart) {
    productToAdd.quantity++;
    const itemWithIncreasedQuantity = cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? productToAdd : cartItem
    );
    return itemWithIncreasedQuantity;
  }
  const addNewItemInCart = [...cartItems, productToAdd];
  return addNewItemInCart;
};

export const CartContext = createContext({
  isCartOpen: null,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
  };
  console.log("CartProvider ~ value.cartItems", value.cartItems);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
