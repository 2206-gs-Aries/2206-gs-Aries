import React from "react";
import { connect } from "react-redux";
import Subtotal from './Subtotal'


export class Checkout extends React.Component {

    
    render() {
        return (
            <div className="checkout">

                <div className="checkout_left">
                    <img className="checkout_img"src="http://natural-food.asia/wp-content/uploads/2021/07/26.jpg" />
            

                <div>
                    <h2 className="checkout_title">Your shopping Basket</h2>
                </div>
                </div>

                <div className="checkout_right">
                    <Subtotal />
                </div>

            </div>
        )
    }
}


  
  
export default Checkout;