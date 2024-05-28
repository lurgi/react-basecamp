import { PRODUCTS_ENDPOINT } from "./endpoints";

export const fetchProduct = async (page: number) => {
  const limit = page === 1 ? 20 : 4;
  try {
    const response = await fetch(`${PRODUCTS_ENDPOINT}?page=${page}&limit=${limit}`);
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (typeof error === "string") throw new Error(error);
    if (error instanceof Error) throw error;
  }
};
