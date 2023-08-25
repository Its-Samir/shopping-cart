import React, { useContext, useEffect, useState } from 'react'
import { products } from '../../dummy_product';
import Product from './Product';
import Carousel from '../../elements/Carousel';
import { Alert, Box, Button, Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/Context';

function ProductList() {
  const ctx = useContext(StoreContext);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(ctx.isLoggedIn && JSON.parse(localStorage.getItem('loggedin') as string));

  useEffect(() => {
    let title = document.querySelector('title')!;
    title.innerText = 'Cartflow | Home';
  }, []);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsLoggedIn(false);
    }, 5000);

    return () => {
      clearInterval(interval);
    }

  }, []);

  return (
    <>
      {isLoggedIn && <Alert onClose={() => setIsLoggedIn(false)} variant='filled' style={{ width: '20rem', marginLeft: 'auto', position: 'fixed', bottom: '10px', right: '0', zIndex: 2 }}>You are successfully logged in.</Alert>}
      <Carousel />
      <div id='products' className="productList">
        {products.map(p => {
          return <Product key={p.id} id={p.id} title={p.title} rating={p.rating} img={p.img} price={p.price} />
        })}
      </div>

      <Box sx={{ textAlign: 'center', margin: '2rem' }}>
        <h1 style={{ color: 'graytext' }}>Brand New Products</h1>
        <p style={{ color: 'grayText' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quia a sapiente quasi aliquam nobis error ad ullam doloribus iusto.</p>
        <Button onClick={() => navigate(ctx.isLoggedIn ? '/cart' : '/auth')} variant='contained' children={ctx.isLoggedIn ? 'Shop now' : 'Login'} color='warning' style={{ marginTop: '18px' }} />
      </Box>

      <Box className="productList">
        {products.map((p, i) =>
          i >= 1 && i <= 2 && <Product key={p.id} id={p.id} title={p.title} rating={p.rating} img={p.img} price={p.price} />
        )}
      </Box>

      <Box sx={{ textAlign: 'center', margin: '2rem', backgroundColor: '#90da96', padding: '1rem', color: '#ffffff', borderRadius: '20px' }}>
        <h1>Subscribe to Cartflow</h1>
        <p>To get latest updates.</p>
        <Box sx={{ margin: '15px' }}>
          <Input spellCheck={false} type='email' placeholder='Enter your Email' style={{ padding: '5px' }} />
          <Button children="Sign up" variant='contained' color='success' style={{ margin: '12px' }} />
        </Box>
      </Box>

      <footer style={{ padding: '1rem', textAlign: 'center', backgroundColor: 'white' }}>
        <strong>Cartflow</strong>
      </footer>
    </>
  )
}

export default ProductList;