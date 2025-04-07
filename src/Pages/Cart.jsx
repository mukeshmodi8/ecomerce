// Cart.jsx
import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary">🛒 Your Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <p className="text-center text-danger">Your cart is empty!</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong><br />
                  <small>Rs.{item.price.toFixed(2)}</small>
                </div>
                <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h5 className="text-end">Total: Rs.{getTotalPrice()}</h5>
          <div className="text-center">
            <button className="btn btn-success px-4">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
