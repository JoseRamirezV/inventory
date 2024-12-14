// const BASE_URL = import.meta.env.VITE_BASE_URL
import { Product } from '@/interfaces/product';
import products from '@/mock-data.json';

export async function getProductsService() {
  try {
    return { ok: true, products };
  } catch (error) {
    return { ok: false, error };
  }
}

export async function addProductsService(product: Product) {
  try {
    return { ok: true, product: { ...product, _id: `${Math.random()}` } };
  } catch (error) {
    return { ok: false, error };
  }
}
