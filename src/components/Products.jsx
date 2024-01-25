import { useState } from "react";
import Counter from "./Counter";
import Product from "./Product";

function Products() {
  let title = "Learn How to create apps with reactjs 2023";
  let showList = true;

  const [products, setProducts] = useState([
    {
      id: 1,
      label: "Iphone 13",
      price: 2900,
    },
    {
      id: 2,
      label: "Samsung",
      price: 1200,
    },
    {
      id: 3,
      label: "LG",
      price: 1750,
    },
  ]);

  const deleteProduct = (id) => {
    let mylist = products.filter((pr) => pr.id !== id);
     setProducts(mylist);
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore et quae
        nesciunt adipisci, temporibus corrupti deserunt placeat libero assumenda
        nostrum tempora fuga vitae sapiente modi laboriosam, explicabo in
        perspiciatis facere.
      </p>

      <Counter />

      {showList && (
        <div>
          {products.map((product, index) => (
            <div key={index}>
              <Product id={product.id} onDeleteProduct={deleteProduct} >
                <div className="card-body">
                  <h4 className="card-title">{product.label}</h4>
                  <p className="card-text">
                    <button className="btn btn-danger">{product.price}</button>
                  </p>
                </div>
              </Product>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
