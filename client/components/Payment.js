import React from "react";
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { deleteCart } from "../store/usercart";
import CheckoutProduct from "./CheckoutProduct";
import Pay from './Pay'



function Payment (props) {
        return (
            <div className="payment">
                <div className="payment_container">
                    <h1>
                        Checkout ({props.carts.length} items)
                    </h1>
                    <div className="payment_section">

                        <div className="payment_title">
                            <h3>Delivery Address</h3>
                        </div>

                        <div className="payment_address">   
                            <p><small>name:</small> <strong>{ props.username }</strong></p>
                            <p><small>email address:</small>  <strong>{ props.email }</strong></p>
                            <p><small>shipping address:</small>  <strong>{ props.address }</strong></p>
                        </div>
                    </div>

                    <div className="payment_section">
                        <div className="payment_title">
                            <h3>Review items and delivery</h3>
                        </div>
                            <div className="payment_items">
                                {props.carts.map((cart) => (
                                    <div>
                                  <CheckoutProduct {...cart} key={cart.id} />
                                  </div>
                                ))}
                            </div>
                    </div>

                    <div className="payment_section">
                        <div className="payment_title">
                            <h3>Payment Method</h3>
                        </div>

                        <div className="payment_details">
                                <Pay />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

const mapState = state => {
    return {
      username: state.auth.username,
      email: state.auth.email,
      address: state.auth.address,
      isLoggedIn: !!state.auth.id,
      carts: state.usercart
    }
  }

  const mapDispatch = (dispatch) => {
    return {
        deleteProduct: (id) => dispatch(deleteCart(id)),
    };
  };


export default connect(mapState, mapDispatch)(Payment)