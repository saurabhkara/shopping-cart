import React,{useEffect, useState} from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import { ContextValue } from './context/context';

export default function App() {
  const [products, setProducts] =useState([]);
  
    const {state, dispatch}=ContextValue()
    console.log(state);
  
  useEffect(()=>{
    getProduct()
  },[])

   async function getProduct(){
    let res = await fetch('https://fakestoreapi.com/products');
    res = await res.json();
    res.forEach((item)=>{
      item.fastDelivery = item.id%2 ===0 ? true : false;
      item.inStock=parseInt(10%item.id);
    })
    setProducts(res);        
  }
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  )
}

