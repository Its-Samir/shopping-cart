import React from 'react';
import { Link } from 'react-router-dom';

function NavOptions(props: { onLogout: () => void, itemsLength: number, isLoggedIn: boolean }) {
    return (
        <div className="navOptions">
            <ul>
                <Link to={'/cart'}>
                    <li>Cart {props.itemsLength > 0 && window.location.href !== `${window.location.origin}/cart` && <span className='cartBadge'>{props.itemsLength}</span>}
                    </li>
                </Link>
                {!props.isLoggedIn ?
                    <Link to={'/auth'}><li>Login / Register</li></Link> :
                    <button onClick={props.onLogout} className="logoutBtn">Logout</button>
                }
            </ul>
        </div>
    )
}

export default NavOptions;