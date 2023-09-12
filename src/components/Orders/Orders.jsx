import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Orders = () => {
    // const products =useLoaderData()
    // // console.log(products)
    // const cart =useLoaderData()
    const savedCart =useLoaderData()
    // console.log(savedCart)
    // cart er jonno akta state make korlam muluto savedcard akta [] 
    const [cart,setCart] =useState(savedCart)
    const handleRemoveFromCart =(id)=>{
        console.log(id)
    }
    return (
        <div className='shop-container'>
             <div className='review-container'>  {/* className='products-container' */}
                 {/* <h2>This is order page:{products.length} </h2>     */}
                 {/* <h2>This is order page:{savedCart.length} </h2>     */}
                 {
                //    savedCart.map(product => <ReviewItem 
                    cart.map(product => <ReviewItem 
                    key={product.id}
                    product={product}
                    handleRemoveFromCart ={handleRemoveFromCart}
                    ></ReviewItem>)
                 }
             </div>
             <div className='cart-container'>
                <Cart cart ={cart}></Cart>    {/* state or cart k patacchi */}
             </div>
        </div>
    );
};

export default Orders;