import "./sale-ribbon.styles.scss";

const SaleRibbon = ({ sale }) => {
  return (
    <div className="ribbon ribbon-top-left">
      <span>save {sale}%</span>
    </div>
  );
};

export default SaleRibbon;
