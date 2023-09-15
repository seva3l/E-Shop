import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import ICart from "../../interface/Cart";
import IProduct from "../../interface/Product";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface CartContextValue {
  cart: ICart[];
  fetchCart: () => void;
  addToCart: (item: IProduct, showModal: boolean) => void;
  isModalVisible: boolean;
  removeFromCart: (itemId: string) => void;
  clearCart: (showModal: boolean) => void;
  updateCartItemQuantity: (itemId: string, newQuantity: number) => void;
  getTotalPrice: () => number;
}

export const CartContext = createContext<CartContextValue>({
  cart: [],
  fetchCart: () => {},
  addToCart: (item, showModal) => {},
  isModalVisible: false,
  removeFromCart: (itemId) => {},
  clearCart: (showModal) => {},
  updateCartItemQuantity: (itemId, newQuantity) => {},
  getTotalPrice: () => 0, // Initial total price is 0
});

export const CartProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<ICart[]>([]);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const addToCart = async (item: IProduct, showModal: boolean = false) => {
    const existingCartItemIndex = cart.findIndex(
      (cartItem: ICart) => cartItem.item.id === item.id
    );

    let updatedCart;

    if (existingCartItemIndex !== -1) {
      // If it exists, increment its quantity
      updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If it doesn't exist, add it as a new item with quantity 1 at the beginning
      updatedCart = [{ item, quantity: 1 }, ...cart];
      setCart(updatedCart);
    }

    try {
      // Save the updated cart data (updatedCart) to AsyncStorage
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));

      if (showModal) {
        setModalVisible(true);

        // You can set a timeout to hide the modal after a few seconds
        setTimeout(() => {
          setModalVisible(false);
        }, 500); // Adjust the time as needed
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getTotalPrice = (): number => {
    return cart.reduce((total, item) => {
      return total + item.item.unitPrice * item.quantity;
    }, 0);
  };

  const removeFromCart = async (itemId: string) => {
    // Remove the item from the cart state
    const updatedCart = cart.filter((item) => item.item.id !== itemId);
    setCart(updatedCart);

    // Update AsyncStorage with the updated cart
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = async (showModal: boolean = true) => {
    // Clear all items from the cart state and AsyncStorage
    if (showModal) {
      setModalVisible(true);

      // You can set a timeout to hide the modal after a few seconds
      setTimeout(() => {
        setModalVisible(false);
      }, 3000); // Adjust the time as needed
    }
    setCart([]);
    await AsyncStorage.removeItem("cart");
  };

  const updateCartItemQuantity = async (
    itemId: string,
    newQuantity: number
  ) => {
    // Find the item in the cart
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.item.id === itemId) {
        // Update the quantity of the specified item
        return { ...cartItem, quantity: newQuantity };
      }
      return cartItem;
    });

    // Update the cart state with the modified item
    setCart(updatedCart);

    // Update AsyncStorage with the updated cart
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const fetchCart = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("cart");
      if (jsonValue) {
        const parsedValue: ICart[] = JSON.parse(jsonValue);
        setCart(parsedValue);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const loadCartStorageData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("cart");
        if (jsonValue) {
          const parsedValue: ICart[] = JSON.parse(jsonValue);
          setCart(parsedValue);
        }
      } catch (e) {
        console.error(e);
      }
    };

    loadCartStorageData();
  }, []);

  const contextValue: CartContextValue = {
    cart,
    fetchCart,
    addToCart,
    isModalVisible,
    removeFromCart,
    clearCart,
    updateCartItemQuantity,
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
