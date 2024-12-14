import { useProducts } from '@/hooks/useProducts';
import { Product } from '@/interfaces/product';
import React, { createContext, useReducer } from 'react';

export interface Action {
  type: string;
  payload: Product;
}

interface InventoryContextProps {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  updateProduct: (id: string, product: Product) => void;
  getProducts: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const InventoryContext = createContext<InventoryContextProps>({
  products: [],
  addProduct: () => {},
  deleteProduct: () => {},
  updateProduct: () => {},
  getProducts: () => {},
});

function reducer(state: Product[], action: Action): Product[] {
  switch (action.type) {
    case 'addProduct':
      return [...state, {...action.payload}];
    case 'deleteProduct':
      return [];
    default:
      throw Error(`Unknown action: ${action.type}`);
  }
}

export function InventoryContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, []);
  const { addProduct, deleteProduct, getProducts, updateProduct } =
    useProducts(dispatch);

  return (
    <InventoryContext.Provider
      value={{
        products: [...state],
        addProduct,
        deleteProduct,
        updateProduct,
        getProducts,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}
