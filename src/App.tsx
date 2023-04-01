import React from 'react';
import './App.css'
import Wrapper from './components/wrapper/Wrapper'
import ProductList from './components/product/ProductList'
import Cart from './components/cart/Cart'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Auth';
import { StoreContext } from './context/Context';
import ProductDetail from './components/product/ProductDetail';
import SuccessPage from './components/actions/SuccessPage';

function App() {
  const ctx = React.useContext(StoreContext);

  return (
    <div className="App">
      <Wrapper>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/cart' element={ctx.isLoggedIn ? <Cart /> : <Navigate to={'/auth'} />} />
          <Route path='/auth' element={ctx.isLoggedIn ? <Navigate to={'/'} /> : <Login />} />
          <Route path='/product/:id' element={ctx.isLoggedIn ? <ProductDetail /> : <Navigate to={'/auth'} />} />
          <Route path='/shopping/success' element={ctx.isLoggedIn && localStorage.getItem('successShop') === JSON.stringify(ctx.token) ? <SuccessPage /> : <Navigate to={'/auth'} />} />
          <Route path='*' element={<h1 style={{ textAlign: 'center' }}>Page not found.</h1>} />
        </Routes>
      </Wrapper>
    </div >
  )
}

export default App;