import React from 'react';
import CartItem from "./CartItem"

export default function CartList({cartItem, addToCart, removeFromCart}) {
    const items = Object.values(cartItem);
    return (
        <div>
            {items.length=== 0 ? (
                <p>The cart is empty.</p>
            ) :(
                items.map(item =>(
                    <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    />
                ))
            )}
        </div>
    );
};