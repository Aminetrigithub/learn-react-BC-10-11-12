import { useState } from "react";
import Counter from "./Counter";
import Product from "./Product";
import { v4 as uuid } from 'uuid';

function Products() {
  let showList = true;

const [title, setTitle]= useState("");
const [price, setPrice]= useState("");
const [message, setMessage]= useState("")



const submitForm = (e) => { e.preventDefault()  
  
  let myProduct = {
    id: uuid()  ,
    label: title,
    price
   }
   setProducts( [myProduct, ...products ] )
   setTitle("");
   setPrice("");
  }

let titleInput = (e) => {  
if (e.target.value === "")
setMessage("please insert a title of product")
//console.error("please insert a titleof product!!!!!");
else if(e.target.value.trim().length < 3 )
setMessage("product not defined less than 3 caracters")
//console.error("product not defined!!!!!");
else {
setMessage(null);
setTitle(e.target.value);}
}


let priceInput = (e) => { setPrice(e.target.value)  }


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
        {/* <h1>{title}</h1> */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore et quae
        nesciunt adipisci, temporibus corrupti deserunt placeat libero assumenda
        nostrum tempora fuga vitae sapiente modi laboriosam, explicabo in
        perspiciatis facere.
      </p>

{title} 👍🐧🐧🎉{price}
<form action="" onSubmit={submitForm}>
<div>
<label htmlFor="">Title</label>
<input defaultValue={title} onChange={titleInput} className="form-control my-2 " type="text" />
{ message && <div className="alert alert-danger">{message}</div>
}
<label htmlFor="">Price</label>
<input value={price} onChange={priceInput} className="form-control my-2 " type="text" />
</div>
<button className="btn btn-info my-2"> Save </button>
</form>
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
