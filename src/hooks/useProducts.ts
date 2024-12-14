import type { Product } from '@/interfaces/product';
import {
  addProductsService,
  getProductsService,
} from '@/services/products.service';
import { useEffect, useState } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  });

  const getProducts = async () => {
    const { ok, products } = await getProductsService();
    if (!ok) return;
    setProducts(products || []);
  };

  const addProduct = async (product: Product) => {
    const { ok, product: newProduct } = await addProductsService(product);
    if (!ok || !newProduct) return;
    setProducts([...(products ?? []), newProduct]);
  };

  const deleteProduct = async () => {};

  const updateProduct = async () => {};

  return {
    products,
    addProduct,
    deleteProduct,
    updateProduct,
    getProducts,
  };
};
