import React from 'react';
import RemoveButton from "./RemoveButton"
import './cart.css'

export default function CartItem({item, addToCart, removeFromCart}){
    return (
    <div className="cart-container">
        <div className="image-name">
            <p>{item.image}</p> 
            <p>{item.name}</p> 
        </div>
        <div className="button-qty">
            <RemoveButton onClick={()=>removeFromCart(item)}/>
            <p>{item.quantity}</p>
            <button onClick={() => addToCart(item)}>+</button>
        </div>
    </div>
    );
};