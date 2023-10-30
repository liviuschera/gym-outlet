import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;
  return (
    <div className="checkout-row">
      <img className="item-img" src={imageUrl} alt={name} />
      <span className="item-info">{name}</span>
      <div className="quantity-container">
        <span>{"\u276C"}</span>
        <span className="quantity">{quantity}</span>
        <span>{"\u276D"}</span>
      </div>
      <span className="item-info">${price}</span>
      <span className="item-info">{"\u2715"}</span>
    </div>
  );
};

export default CheckoutItem;
