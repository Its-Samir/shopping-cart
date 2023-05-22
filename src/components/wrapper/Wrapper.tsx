import React, { useEffect, useState } from 'react';
import Navbar from '../nav/Navbar';

function Wrapper(props: { children: React.ReactNode }) {
    const [showDropdownCart, setShowDropdownCart] = useState<boolean>(false);

    // using useEffect to change the state of showDropdownCart, so that the cart badge can disappear when directly click cart link in mobile device
    useEffect(() => {
        window.location.href === `${window.location.origin}/#/cart` && setShowDropdownCart(false);
        window.location.href === `${window.location.origin}/#/auth` && setShowDropdownCart(false);

    }, [showDropdownCart])

    return (
        <div className="wrapper">
            <Navbar showCart={showDropdownCart} openCart={() => setShowDropdownCart(p => window.location.pathname !== '/cart' && true)} closeCart={() => setShowDropdownCart(false)} />
            <div onMouseOver={() => setShowDropdownCart(false)}>
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper;