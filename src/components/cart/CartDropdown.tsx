import React from "react";
import { Link } from "react-router-dom";

import { StoreContext } from "../../context/Context";
import DropdownCartItem from "./DropdownCartItem";

function CartDropdown() {
  const ctx = React.useContext(StoreContext);

  return (
    <div className="cartDropdown">
      <Link className="cartLink" to={"/cart"}>
        {ctx.items.length > 0 &&
          ctx.items.map(
            (item, i) =>
              i < 2 && (
                <DropdownCartItem
                  key={item.id}
                  title={item.title}
                  quantity={item.quantity}
                  img={item.img}
                  length={ctx.items.length}
                />
              )
          )}

        {ctx.items.length !== 0 && ctx.items.length - 1 > 1 && (
          <span>{ctx.items.length - 2} more item(s)</span>
        )}
      </Link>

      {ctx.items.length === 0 && <h2>No items in Cart</h2>}
    </div>
  );
}

export default CartDropdown;
