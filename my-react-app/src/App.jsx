// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Cart from './Cart';
import ComplaintForm from './Contact';
import About from './About';
import Footer from './footer';
import Dataprovider from './Context/Dataprovider';
import Register from './Register';
import Login from './Login';
import Payment from './Payment';
const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...existingItem, quantity: existingItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <>
    <Dataprovider>
      <Router>
    <Routes>
    <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>}/>
  
      <Route element={<Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}>
        <Route
          path="/home"
          element={
            <Home
              cart={cart}
              addToCart={addToCart}
              updateQuantity={updateQuantity}
              searchTerm={searchTerm}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/contact" element={<ComplaintForm/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/payment" element={<Payment/>}/>

       </Route>
      </Routes>
    </Router>
    
    </Dataprovider>
    </>

  );
};

export default App;
