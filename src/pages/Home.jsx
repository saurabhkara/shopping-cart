import React from 'react';
import Filter from '../components/Filter';
import './styles.css';
import Product from '../components/Product';

export default function Home() {
  return (
    <div className='home'>
        <Filter />
        <div className='products'>
            {
                <Product />  
            }
        </div>
    </div>
  )
}
