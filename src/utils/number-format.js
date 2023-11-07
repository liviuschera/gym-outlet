const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number);
};

export const applyProductSale = (price, sale, formatted = true) => {
  if (formatted) {
    return sale > 0
      ? formatNumber((price - (price * sale) / 100).toFixed(0))
      : formatNumber(price);
  }
  return sale > 0 ? (price - (price * sale) / 100).toFixed(0) : price;
};

export default formatNumber;
