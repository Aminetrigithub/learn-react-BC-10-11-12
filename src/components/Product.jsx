import PropTypes from "prop-types";

const Product = ({children, onDeleteProduct, id}) =>
{
  return (
    <div className="my-4">
      

      <div  className="card text-white bg-warning mb-3"  >
    
    {children}
        
      </div>
      <button onClick={ () => { onDeleteProduct(id) }  } className="btn btn-info">Delete</button>
    </div>
  );
};

Product.propTypes = {
  label: PropTypes.string,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  label: "My Product",
  price: 56655,
};

export default Product;
