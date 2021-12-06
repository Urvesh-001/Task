import {React,useState} from "react";
import "./Popup.css"


const Popup = props => {
  
  const [count, setCount] = useState(0); 
  function trigger() {
    setCount(count + 1);
  }


  return (
    <div className="popup-box">
      <div className="box">
          <div className="MainBox">
              <div className="Left">
                  <div className="PImage"><img src={props.product.imgURL} alt="imgrender"/></div>
              </div>
              <div className="Right">
                  <div className="PName">{props.product.name}</div>
                  <div className="PDesc">{props.product.Description}</div>
              </div>
          </div>
        
        <div className="PCategory">Category:-{props.product.Category}</div>
        <div className="Icons">
        <i class="fa fa-thumbs-up" onClick={trigger}> {count}</i>
        <button id={props.product.id} onClick={props.cartValue}>Add To Cart</button>
        <button><span className="close-icon" onClick={props.handleClose}>Cancel</span></button>
        </div>
        
      </div>
    </div>
  );
};

export default Popup;