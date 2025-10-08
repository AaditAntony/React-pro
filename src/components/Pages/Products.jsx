import React, { useEffect,useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Products.css'

export const Products = () => {
const [Products,setProducts]=React.useState([])
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(data=>setProducts(data))
},[])
console.log(Products)

  return (
    <div >
        <Navbar/>
       <div className='Products'>
        
        {Products.map(product=>(
          <div key={product.id} className='prod'>
            <h3 className='head'>{product.title}</h3>
            
            <img src={product.image} className='image' />
            <p className='price'>{product.price}</p>
          </div>
        ))}
       </div>
        
        </div>
  )
}
