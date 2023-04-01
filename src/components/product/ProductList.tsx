import React from 'react'
import { products } from '../../dummy_product';
import Product from './Product';

function ProductList() {
  return (
    <div className="productList">
      {products.map(p => {
        return <Product key={p.id} id={p.id} title={p.title} rating={p.rating} img={p.img} price={p.price} />
      })}
    </div>
  )
}

export default ProductList;