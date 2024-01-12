import Counter from "./Counter";
import Product from "./Product";

function Products() {
  let title = "Learn How to create apps with reactjs 2023";
  let showList = true;
  let products = [
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
  ];

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
              <Product label={product.label} price={product.price} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
