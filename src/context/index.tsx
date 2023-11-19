import { ReactNode, createContext, useState } from "react";
import { Cart } from "../types";

export const Context = createContext<CreateContextProps | null>(null);

type CreateContextProps = {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
  addItem: () => void;
};

type ContextProps = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: ContextProps) => {
  const [cart, setCart] = useState<Cart>({
    items: [],
    total: 0,
  });

  const addItem = () => setCart({
    ...cart,
    total: cart.total + 1
  })

  return (
    <Context.Provider value={{ cart, setCart, addItem }}>{children}</Context.Provider>
  );
};
