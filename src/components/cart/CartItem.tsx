import React from 'react';
import { StoreContext } from '../../context/Context';
import { Product } from '../../dummy_product';

type PropType = Product;

function CartItem(props: PropType) {
    const ctx = React.useContext(StoreContext);

    return (
        <div className="cartItem">
            <div className="imgDiv">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="details">
                <h4>{props.title}</h4>
                <p>Quantity: {props.quantity}</p>
                <button onClick={() => ctx.addOne(props.id)} className='addOneBtn'>Add 1 more</button>
                <p>Price: ₹{props.price}/-</p>
                <button onClick={() => ctx.remove(props.id)} className='removeBtn'>Remove</button>
            </div>
        </div>
    )
}

export default CartItem;