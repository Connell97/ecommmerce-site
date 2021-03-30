import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom';
import ProductCard from '../common/product-card/Product-card'

const Products = () => {
   console.log(ProductCard);
   const listItems = ProductCard.map ((item) =>
    <div className="card" key={item.id}>
        <div className="card_img">
            img src={item.thumb}
           </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
<div className="btn">Add to cart</div>
        </div>
    </div>

    );
    return (
        <div className="Products">
            <h3>Laptops</h3>
            {listItems}
        </div>
    )

  };

  export default Products;