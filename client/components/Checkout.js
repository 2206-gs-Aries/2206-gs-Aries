import React from "react";
import { connect } from "react-redux";
import Subtotal from './Subtotal'
import { deleteCart } from "../store/cart";
import CheckoutProduct from "./CheckoutProduct";



export class Checkout extends React.Component {
    render() {
        return (
            <div className="checkout">

                <div className="checkout_left">
                    <img className="checkout_img"src="http://natural-food.asia/wp-content/uploads/2021/07/26.jpg" />

                <div>
                    <h2 className="checkout_title">Your shopping Basket</h2>
                    
                    <div>
                        {this.props.carts.map((cart) => (
                            <div>
                            <CheckoutProduct {...cart} key={cart.id} />
                            </div>   
                        ))}
                    </div>

                </div>
                </div>

                <div className="checkout_right">
                    <Subtotal />
                </div>

            </div>
        )
    }
}


  
const mapState = (start) => {
    return {
        carts: start.cart
    };
  };

  const mapDispatch = (dispatch) => {
    return {
        deleteProduct: (id) => dispatch(deleteCart(id)),
    };
  };
  

  
export default connect(mapState, mapDispatch)(Checkout);
