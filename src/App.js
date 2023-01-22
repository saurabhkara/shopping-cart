import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';


export default function App() {
   
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

