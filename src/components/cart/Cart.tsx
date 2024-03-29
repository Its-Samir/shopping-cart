import React, { useEffect } from 'react';
import { StoreContext } from '../../context/Context';
import CartItem from './CartItem';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const ctx = React.useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    let title = document.querySelector('title')!
    title.innerText = 'Cart';
  }, []);

  function checkoutHandler() {
    navigate('/shopping/checkout/form');
    ctx.checkout();
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
              <button onClick={checkoutHandler} className="checkoutBtn">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </>
      }
      {ctx.items.length === 0 && <h2>No items in your cart, go to <Link to='/'>shop page</Link></h2>}
    </div>
  )
}

export default Cart;