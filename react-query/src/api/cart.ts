import { API_ENDPOINTS } from "../constants/api";
import { CartItem } from "../types";

export async function addToCart(item: CartItem): Promise<CartItem> {
  const response = await fetch(API_ENDPOINTS.CART, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  return await response.json();
}

export async function deleteFromCart(cartId: string): Promise<CartItem> {
  const response = await fetch(API_ENDPOINTS.CART + "/" + cartId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
