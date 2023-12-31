import { createContext, useState } from "react";
import { applyProductSale } from "../utils/number-format";

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
      accumulator +
      currentItem.quantity *
        applyProductSale(currentItem.price, currentItem.sale, false),
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

  const incrementItemQuantity = (productToIncrement) => {
    const itemToIncrement = cartItems.find(
      (item) => item.id === productToIncrement.id
    );
    itemToIncrement.quantity++;
    setCartItems([...cartItems]);
  };

  const decrementItemQuantity = (productToDecrement) => {
    const itemToDecrement = cartItems.find(
      (item) => item.id === productToDecrement.id
    );
    itemToDecrement.quantity--;
    if (itemToDecrement.quantity === 0) {
      return removeItemFromCart(productToDecrement);
    }
    setCartItems([...cartItems]);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartTotalItems,
    cartTotalPrice,
    removeItemFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
