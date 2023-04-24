import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/Context';
import {MdShoppingCart} from 'react-icons/md';

type PropType = {
  id: string;
  title: string;
  rating: number;
  img: string;
  price: number;
  quantity?: number;
}

function Product(props: PropType) {
  const ctx = useContext(StoreContext);
  const existProduct = ctx.items.find(p => p.id === props.id);
  return (
    <div className="product">
      <Link style={{ color: 'black', textDecoration: 'none' }} to={`/product/${props.id}`}>
        <div className="imgDiv">
          <img src={props.img} alt={props.title} />
        </div>
        <h2>{props.title}</h2>
        <p>Rating: {props.rating} Star(s)</p>
        <p>Price: <strong>₹{props.price}/-</strong></p>
      </Link>
      <button onClick={() => ctx.add(props.id)} className="addBtn" style={{backgroundColor: existProduct && 'gray', display: 'flex', justifyContent: 'space-between'}} disabled={existProduct ? true : false}><MdShoppingCart style={{marginRight: '5px'}}/> {existProduct ? 'Added to Cart' : 'Add to Cart'}</button>
    </div>
  )
}

export default Product;