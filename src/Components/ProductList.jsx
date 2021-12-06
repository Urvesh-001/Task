import React, { useState } from 'react'
import productDetails from './productDetails'
import Product from './Product'
import Cart from './Cart'

export default function ProductList() {

    const [cart, setCart] = useState([]);
    const [isCartEmpty, setIsCartEmpty] = useState(true);

    const cartValue = (e) => {
        setIsCartEmpty(!isCartEmpty);
        let currentElement = Number(e.target.id);
        const cartData = productDetails.filter((product, index) => {
            return index === currentElement;
        })
        let tempArray = [];
        tempArray = cart;
        tempArray.push(cartData);
        setCart(tempArray);
    }

    return (
        <div>
            {productDetails.map((product, index) => {
                return (
                    <Product product={product} cartValue={cartValue} />
                )
            })}


            <Cart cart={cart} />

        </div>

    )
}
