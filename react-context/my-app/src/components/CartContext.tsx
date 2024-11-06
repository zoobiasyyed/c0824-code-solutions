//data will be an array of shopping cart items, and a function
//to add a item to the cart.
import { createContext } from 'react';
import { Product } from '../lib';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product | undefined) => void;
};

export const CartContext = createContext<CartValue>({
  cart: [],
  addToCart: () => undefined,
});
