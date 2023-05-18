import React from 'react';
import { StoreContext } from '../../context/Context';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

function Cart() {
  const ctx = React.useContext(StoreContext);

  const checkout = async () => {
    // await fetch('http://localhost:5000/checkout', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ items: ctx.items })
    //     }).then((response) => {
    //         return response.json();
    //     }).then((data) => {
    //         if (data.url) {
    //             window.location.assign(data.url);
    //         }
    //     }).catch((err) => {
    //         console.log(err);
    //     });
  }

  return (
    <div className="cart">
      {ctx.items.length > 0 &&
        <>
          <div className="items">
            <h2>Items in your cart:</h2>
            {ctx.items.map(item => {
              return <CartItem key={item.id} id={item.id} title={item.title} img={item.img} rating={item.rating} quantity={item.quantity} price={item.price} />
            })}
          </div>
          <div className="checkoutDiv">
            <div className="checkoutDetails">
              <h2>Total: ₹{ctx.totalPrice}/-</h2>
              <Link to={'/shopping/checkout/form'}><button onClick={() => { checkout() }} className="checkoutBtn">Proceed to Checkout</button></Link>
            </div>
          </div>
        </>
      }
      {ctx.items.length === 0 && <h2>No items in your cart, go to <Link to='/'>shop page</Link></h2>}
    </div>
  )
}

export default Cart;