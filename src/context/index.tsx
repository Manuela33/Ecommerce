import { ReactNode, createContext, useState } from 'react';
import { Cart } from '../types';

export const Context = createContext<CreateContextProps | null>(null);

type CreateContextProps = {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
};

type ContextProps = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: ContextProps) => {
  const [cart, setCart] = useState<Cart>({
    items: [],
    total: 0,
  });
  return (
    <Context.Provider value={{ cart, setCart }}>{children}</Context.Provider>
  );
};
