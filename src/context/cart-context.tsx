"use client";

import { Product } from '@/types';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of a single item in the cart
export interface CartItem {
  product: Product;
  quantity: number;
}

// Define what the context will provide
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  getCartItemCount: () => number;
  getCartTotal: () => number;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create the Provider component that will wrap our app
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        // If item already exists, just increase its quantity by 1
        return prevItems.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Otherwise, add the new product with a quantity of 1
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCartItems(prevItems => {
      if (quantity <= 0) {
        // If quantity is 0 or less, remove the item
        return prevItems.filter(item => item.product.id !== productId);
      }
      return prevItems.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, getCartItemCount, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to easily use the cart context in other components
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};