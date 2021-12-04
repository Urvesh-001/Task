import React from 'react'
import productDetails from './productDetails'
import Product from './Product'

export default function ProductList() {
    return (
        <div>
            {productDetails.map((product,index) => {
                return(
                    <Product product = {product}/>
                )
            }) }
           
        
        </div>
    )
}
