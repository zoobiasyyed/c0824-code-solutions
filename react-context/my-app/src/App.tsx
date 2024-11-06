import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { CartContext } from './components/CartContext';
import { useState } from 'react';
import { Product } from './lib';

export function App() {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product) {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  const cartContextValues = { cart, addToCart };

  return (
    <CartContext.Provider value={cartContextValues}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}
