import PropTypes from "prop-types";

const Product = ({ label, price }) => {
  return (
    <>
      <h1>{label}</h1>
      <button className="btn btn-info">{price}</button>
    </>
  );
};

Product.propTypes = {
  label: PropTypes.string,
  price: PropTypes.number.isRequired
};

Product.defaultProps = {
  label: "My Product",
  price: 56655
}



export default Product;
