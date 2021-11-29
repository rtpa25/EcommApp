/** @format */

import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Sucess from './pages/Sucess';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { fetchCart } from './store/thunks/cartThunks';

const App = () => {
  const token = Cookies.get('token');
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getCart = async () => {
      try {
        await fetchCart(dispatch);
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={token ? <Navigate to='/products' /> : <Home />}
        />
        <Route path='/products/*' element={<ProductList />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/sucess' element={<Sucess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
