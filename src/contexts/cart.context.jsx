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
  cartTotalItems: 0,
  cartTotalIPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const cartTotalItems = cartItems.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );

  const cartTotalPrice = cartItems.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.quantity * currentItem.price,
    0
  );

  const removeItemFromCart = (productToRemove) => {
    const indexOfItemToRemove = cartItems.findIndex(
      (item) => item.id === productToRemove.id
    );

    cartItems.splice(indexOfItemToRemove, 1);
    setCartItems([...cartItems]);
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartTotalItems,
    cartTotalPrice,
    removeItemFromCart,
  };
  console.log("CartProvider ~ value.cartItems", value.cartItems);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
