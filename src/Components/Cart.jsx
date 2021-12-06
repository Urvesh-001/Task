import { React } from "react";
import '../App.css'
const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div className="cart">
            {
                cart.map((element, index) => {
                    return (
                        <div key={index}>
                            <h1>{element[0].name}</h1>
                            <img src={element[0].imgURL} alt="imgrender"/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart;