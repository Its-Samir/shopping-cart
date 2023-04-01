import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/Context';

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
      <button onClick={() => ctx.add(props.id)} className="addBtn">Add to Cart</button>
    </div>
  )
}

export default Product;