import type { Action } from '@/context/InventoryContext';
import type { Product } from '@/interfaces/product';

export const useProducts = (dispatch: (action: Action) => void) => {
  
  const addProduct = async (product: Product) => {
    dispatch({
      type: 'addProduct',
      payload: product,
    });
  };

  const deleteProduct = async () => {};

  const updateProduct = async () => {};

  const getProducts = async () => {};

  return {
    addProduct,
    deleteProduct,
    updateProduct,
    getProducts,
  };
};
