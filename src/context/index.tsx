import { ReactNode, createContext, useState } from "react";
import items from "../database";
import { Cart } from "../types";

export const Context = createContext<CreateContextProps | null>(null);

type CreateContextProps = {
  cart: Cart;
  addItem: (id: number) => void;
  deleteItem: (id: number) => void;
  emptyCart: () => void;
};

type ContextProps = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: ContextProps) => {
  const [cart, setCart] = useState<Cart>({
    items: [],
    total: 0,
  });

  const addItem = (id: number) => {
    const itemToAdd = items.find((itm) => itm.id === id);
    const itemExists = cart.items.find((itm) => itm.id === id);
    if (itemExists) {
      setCart({
        items: cart.items.map((itm) =>
          itm.id === id ? { ...itm, quantity: (itm.quantity += 1) } : itm
        ),
        total: cart.items
          .map((itm) => itm.price * itm.quantity)
          .reduce((acc, curr) => acc + curr, 0),
      });
      return;
    }
    if (itemToAdd) {
      setCart({
        items: [...cart.items, { ...itemToAdd, quantity: 1 }],
        total: (cart.total += itemToAdd.price),
      });
    }
  };

  const deleteItem = (id: number) => {
    const itemToDelete = cart.items.find((itm) => itm.id === id);
    if (itemToDelete) {
      setCart({
        items:
          itemToDelete.quantity === 1
            ? cart.items.filter((itm) => itm.id !== id)
            : cart.items.map((itm) =>
                itm.id === id ? { ...itm, quantity: (itm.quantity -= 1) } : itm
              ),
        total: cart.total - itemToDelete.price,
      });
    }
  };

  const emptyCart = () => {
    setCart({
      items: [],
      total: 0,
    });
  };

  return (
    <Context.Provider value={{ cart, addItem, deleteItem, emptyCart }}>
      {children}
    </Context.Provider>
  );
};
