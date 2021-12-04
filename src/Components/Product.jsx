import {React,useState} from 'react'
import "./product.css"
import Popup from "./popup/Popup"

export default function Product({product}) {

    const [isOpen,setIsOpen] = useState(false);

    const togglePopup = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <div>
           <div>
                <div onClick={togglePopup}>
                    <p>Name:-{product.name} </p> 
                    <img src={product.imgURL} alt="hello"  />
                </div>
                <p>Category:{product.Category}</p>
                <p>Purchase Date:-{product.Purchase_date}</p>
                <p>Status:-{product.Status}</p>
            </div>
            <div>{isOpen && <Popup handleClose={togglePopup} product={product}/>}
                
            </div>
        </div>
    )
}
