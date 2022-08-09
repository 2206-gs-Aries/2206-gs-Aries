import React from "react";
import { connect } from "react-redux";
import Subtotal from './Subtotal'
import { deleteCart } from "../store/usercart";
import CheckoutProduct from "./CheckoutProduct";
import Basket from "./Basket";
import { userCart } from  "../store/usercart";





export class Checkout extends React.Component {
    componentDidMount() {
        this.props.userCart(this.props.id)
    }


    render() {
        
        return (
            <div className="checkout">

                <div className="checkout_left">
                    <img className="checkout_img"src="http://natural-food.asia/wp-content/uploads/2021/07/26.jpg" />

                <div>
                    <h2 className="checkout_title">Your shopping Basket</h2>
                    
                    {/* <div>
                        {this.props.carts.map((cart) => (
                            <div>
                            <CheckoutProduct {...cart} key={cart.id} />
                            </div>   
                        ))}
                    </div> */}
                </div>

                <table width="100%">
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    {/* <tbody>
                            {this.props.carts.map((cart) => (
                            
                            <Basket {...cart} key={cart.id} />
                             
                        ))}
                    </tbody> */}
                    <tbody>
                            {this.props.cartz.map((cart) => (
                            
                            <Basket {...cart} key={cart.id} />
                             
                        ))}
                    </tbody>
                </table>


                </div>

                <div className="checkout_right">
                    <Subtotal />
                </div>

            </div>
        )
    }
}


  
const mapState = (state) => {
    return {
        carts: state.usercart,
        id: state.auth.id,
        cartz: state.cart,
    };
  };

  const mapDispatch = (dispatch) => {
    return {
        deleteProduct: (id) => dispatch(deleteCart(id)),
        userCart: (id) => dispatch(userCart(id))
    };
  };
  

  
export default connect(mapState, mapDispatch)(Checkout);
