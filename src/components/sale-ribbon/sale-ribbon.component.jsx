import "./sale-ribbon.styles.scss";

const SaleRibbon = ({ sale }) => {
  return (
    <div className="ribbon ribbon-top-left">
      <span>Sale {sale}%</span>
    </div>
  );
};

export default SaleRibbon;
