// src/components/Cart.js
import React from 'react';
import Payment from './Payment';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
 let navigateToscreen= useNavigate()
  return (
    <div className="container">
      <h2 className="mt-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="row align-items-center mb-3">
              <div className="col-md-6">
                <h5>{item.name}</h5>
              </div>
              <div className="col-md-3">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="btn btn-secondary">-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="btn btn-secondary">+</button>
              </div>
              <div className="col-md-2">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="col-md-1">
                <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">Remove</button>
              </div>
            </div>
          ))}
          <div className="row mt-4">
            <div className="col-md-12">
              <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => navigateToscreen('/payment') }>Go To Payment</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
