import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  console.log("cartITnem", cartItems);

  return (
    <section className="checkout-container">
      <header className="checkout-header">
        <h3 className="title">Product</h3>
        <h3 className="title">Description</h3>
        <h3 className="title">Quantity</h3>
        <h3 className="title">Price</h3>
        <h3 className="title">Remove</h3>
      </header>
      <hr className="checkout-hr" />
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Checkout;
