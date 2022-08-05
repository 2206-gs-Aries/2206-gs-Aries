import React from "react";
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


export class Payment extends React.Component {
    render() {
        return (
            <div className="payment">
                <div className="payment_container">
                    <h1>
                        Checkout
                    </h1>
                    <div className="payment_section">

                        <div className="payment_title">
                            <h3>Delivery Address</h3>
                        </div>

                        <div className="payment_address">   
                            <p>{this.props.username}</p>
                            <p>email address</p>
                            <p>1212 s emerald Los angeies, CA</p>
                        </div>
                    </div>

                    <div className="payment_section">
                        <div className="payment_title">
                            <h3>Review items and delivery</h3>
                            <div>
                        {this.props.carts.map((cart) => (
                            <div>
                            <div>{cart.name}</div>
                            <div>{cart.price}</div>
                        
                            </div>
                        ))}
                    </div>
                        </div>
                    </div>

                    <div className="payment_section">
                        <div className="payment_product">
                         
                        </div>
                    </div>

                    <div className="payment_section">
                        <div className="payment_detail">
                            <h3>Payment Method</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapState = state => {
    return {
      username: state.auth.username,
      isLoggedIn: !!state.auth.id,
      carts: state.cart
    }
  }


export default connect(mapState)(Payment)