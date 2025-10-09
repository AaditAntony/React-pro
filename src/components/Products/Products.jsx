
import React, { useEffect,useState } from 'react'
import "./Products.css"
import Button from '../Button/Button'

export const Products = () => {
     const [myproducts,setMyproducts]=React.useState([])
     const [loading,setLoading]=useState(true)
    useEffect(()=>{
    const fetchProducts=async()=>{
       try{
         const response=await fetch('https://fakestoreapi.com/products')
        const data=await response.json()
        setMyproducts(data)
        setLoading(false)
       }catch(error){
        console.log("error while fetching products",error)
       }}
       fetchProducts()
    },[])
   
     if(loading) return <h1>Loading please wait</h1>
  return (
   
    <div className='productspage'>
        <h2>Products</h2>
          <div className='products'>
                
                {myproducts.map(prod=>(
                  <div key={prod.id} className='prod'>
                    <h3 className='head'>{prod.title}</h3>
                    
                    <div className='imgbox'><img src={prod.image} className='image' /></div>
                    <h1 className='head'>{prod.title}</h1>
                    <p className='price'>{prod.price}</p>
                    <div>
                        <Button content="Add to cart" />
                        <Button content="Add to cart" />
                    </div>
                  </div>
                ))}
               </div>
    </div>
  )
}

export default Products