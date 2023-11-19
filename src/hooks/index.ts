import { useContext } from 'react';
import { Context } from '../context';

export const useCartContext = () => {
  const context = useContext(Context);

  if (context === null) {
    throw new Error('Context must be used within a Provider');
  }

  return context;
};
