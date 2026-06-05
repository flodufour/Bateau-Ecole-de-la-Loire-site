import type { CartItem } from "@/types/cart";

const CART_KEY = "bdl_cart";

export function getStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function setStoredCart(items: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function clearStoredCart(): void {
  localStorage.removeItem(CART_KEY);
}
