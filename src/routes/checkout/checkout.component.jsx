import { useContext } from "react";
import { CartContext, cartTotalPrice } from "../../contexts/cart.context";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import formatNumber from "../../utils/number-format";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  // console.log("cartITnem", cartItems);

  return (
    <section className="checkout-container">
      <header className="checkout-header">
        <h3 className="title product">Product</h3>
        <h3 className="title">Description</h3>
        <h3 className="title">Quantity</h3>
        <h3 className="title">Price</h3>
        <h3 className="title remove">Remove</h3>
      </header>
      <hr className="checkout-hr" />
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <footer className="checkout-total">
        TOTAL: ${formatNumber(cartTotalPrice)}
      </footer>
      <PaymentForm />
    </section>
  );
};

export default Checkout;
