import { ReactNode, createContext, useState } from 'react';
import { Cart } from '../types';
import items from '../database';
import { useEffect } from 'react';

export const Context = createContext<CreateContextProps | null>(null);

type CreateContextProps = {
  cart: Cart;
  addItem: (id: number) => void;
  deleteItem: (id: number) => void;
  emptyCart: (id: number) => void;
};

type ContextProps = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: ContextProps) => {
  const [cart, setCart] = useState<Cart>({
    items: [],
    total: 0,
  });

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addItem = (id: number) => {
    const itemToAdd = items.find((itm) => itm.id === id);
    if (itemToAdd) {
      setCart({
        ...cart,
        items: [...cart.items, itemToAdd],
      });
    }
  };

  const deleteItem = (id: number) => {};

  const emptyCart = (id: number) => {};

  return (
    <Context.Provider value={{ cart, addItem, deleteItem, emptyCart }}>
      {children}
    </Context.Provider>
  );
};
