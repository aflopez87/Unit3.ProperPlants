import React from 'react';
import RemoveButton from "./RemoveButton"

export default function CartItem({item, addToCart, removeFromCart}){
    return (
    <div>
        <p>{item.image}</p> 
        <p>{item.name}</p> 
        <p>(x {item.quantity})</p>
        <button onClick={() => addToCart(item)}>+</button>
        <RemoveButton onClick={()=>removeFromCart(item)}/>
    </div>
    );
};