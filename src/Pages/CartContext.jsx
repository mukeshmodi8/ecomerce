import React, { createContext, useContext, useState } from "react";


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      alert(`${product.name} is already in the cart!`);
    } else {
      setCart([...cart, product]);
    //   alert(`${product.name} added to cart!`);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);
