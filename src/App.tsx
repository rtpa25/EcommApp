/** @format */

import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sucess from './pages/Sucess';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
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
