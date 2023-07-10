import React,{ useContext } from 'react'
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) =>{
    const {id, productName,price, productImage} = props.data
    const { cartItems, addToCart, removeFormCart, updateCartItemAmount } = useContext(ShopContext)

    return(
        <div className='cartItem'>
            <img src={productImage}/>
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p> ${price} </p>
                <div className='countHandler'>
                    <button onClick={()=> removeFormCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e)=> updateCartItemAmount(Number(e.target.value),id)}/>
                    <button onClick={()=> addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}