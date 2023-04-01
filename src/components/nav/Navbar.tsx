import React from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/Context';
import CartDropdown from '../cart/CartDropdown';

function Navbar(props: { showCart: boolean, openCart: () => void, closeCart: () => void }) {
  const ctx = React.useContext(StoreContext);

  return (
    <nav className="navbar">
      <h1>Logo</h1>
      <ul>
        <Link onMouseOver={() => props.closeCart()} to={'/'}><li>Home</li></Link>
        <Link onMouseOver={() => props.openCart()} to={'/cart'}>
          <li>
            Cart {ctx.items.length > 0 && window.location.pathname !== '/cart' && <span className='cartBadge'>{ctx.items.length}</span>}
          </li>
        </Link>
        {!ctx.isLoggedIn && <Link to={'/auth'}><li>Login / Register</li></Link>}
        {ctx.isLoggedIn && <button onClick={() => { ctx.logout(), props.closeCart() }} className="logoutBtn">Logout</button>}
      </ul>
      {props.showCart && <CartDropdown />}
    </nav >
  )
}

export default Navbar;