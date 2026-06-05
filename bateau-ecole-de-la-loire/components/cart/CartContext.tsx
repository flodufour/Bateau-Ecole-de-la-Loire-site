"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { CartItem } from "@/types/cart";
import {
  getStoredCart,
  setStoredCart,
  clearStoredCart,
} from "@/lib/cart-storage";

type CartContextType = {
  items: CartItem[];
  count: number;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (offerId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(getStoredCart());
  }, []);

  const persist = (next: CartItem[]) => {
    setItems(next);
    setStoredCart(next);
    // TODO: sync to Supabase cart table when user is authenticated
  };

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    if (items.find((i) => i.offerId === item.offerId)) return;
    persist([...items, { ...item, quantity: 1 }]);
  };

  const removeFromCart = (offerId: string) => {
    persist(items.filter((i) => i.offerId !== offerId));
  };

  const clearCart = () => {
    clearStoredCart();
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{ items, count: items.length, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
