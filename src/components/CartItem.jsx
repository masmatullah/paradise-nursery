import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Shopping Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty!</h2>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div>
              <h3>{item.name}</h3>

              <p>Unit Price: ${item.price}</p>

              <p>
                Total: ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() =>
                  dispatch(decreaseQuantity(item.id))
                }
              >
                -
              </button>

              <span> {item.quantity} </span>

              <button
                onClick={() =>
                  dispatch(increaseQuantity(item.id))
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
                style={{ background: "red", marginLeft: "10px" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      <div className="cart-total">
        <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
      </div>

      <br />

      <button onClick={() => alert("Coming Soon!")}>
        Checkout
      </button>

      <Link to="/plants">
        <button style={{ marginLeft: "15px" }}>
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default CartItem;