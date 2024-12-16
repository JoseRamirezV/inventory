const BASE_URL = import.meta.env.VITE_BASE_URL;
import { Product } from '@/interfaces/product';
// import products from '@/mock-data.json';

export async function getProductsService() {
  try {
    const res = await fetch(BASE_URL);
    const products = await res.json();
    return { ok: true, products };
  } catch (error) {
    return { ok: false, error };
  }
}

export async function addProductsService(product: Product) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    return await res.json();
  } catch (error) {
    return { ok: false, error };
  }
}

export async function updateProductsService(product: Product, id: string) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    return await res.json();
  } catch (error) {
    return { ok: false, error };
  }
}

export async function deleteProductService(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'delete',
    });
    return await res.json();
  } catch (error) {
    return { ok: false, error };
  }
}
