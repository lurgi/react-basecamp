import { useState, useEffect } from "react";
import { fetchProduct } from "../api/products";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface UseProductsResult {
  products: Product[];
  loading: boolean;
  error: Error | null;
  page: number;
  fetchNextPage: () => void;
}

export default function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProduct(page);
        setProducts((prevProducts) => [...prevProducts, ...data]);
      } catch (error: unknown) {
        if (error instanceof Error) setError(error);
        if (typeof error === "string") setError(new Error(error));
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [page]);

  const fetchNextPage = () => {
    setPage((prevPage) => {
      if (prevPage === 21) return prevPage;
      return prevPage + 1;
    });
  };

  return { products, loading, error, page, fetchNextPage };
}
