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
import ShippingForm from './elements/ShippingForm';
import Payment from './elements/Payment';

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
          <Route path='/shopping/checkout/form' element={ctx.isLoggedIn ? <ShippingForm /> : <Navigate to={'/auth'} />} />
          <Route path='/shopping/checkout/payment' element={ctx.isLoggedIn ? <Payment /> : <Navigate to={'/auth'} />} />
          <Route path='/shopping/checkout/success' element={ctx.isLoggedIn ? <SuccessPage /> : <Navigate to={'/auth'} />} />
          <Route path='*' element={<h1 style={{ textAlign: 'center' }}>Page not found.</h1>} />
        </Routes>
      </Wrapper>
    </div >
  )
}

export default App;