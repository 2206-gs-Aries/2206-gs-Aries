import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { getCartTotal } from "../store/cart";
import { getCartNum } from "../store/cart";
import { connect } from "react-redux";


export class Pay extends React.Component {
    render() {
        const onToken = (token) => {

        }
        return (
            <div className="pay">
                <StripeCheckout 
                name="2206-gs-aries" 
                image="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
                token={onToken}
                amount={this.props.getTotal(this.props.carts) * 100}
                stripeKey="pk_test_51LTdrBEznKcG9iRQKsASTEcnODkBdMnxKufVh3fgXBtpx0SaQLhf8AzeoqcdMDi88zEaCnb56RjuTXWmhqWrOfOV00uzKuRoFF">
        <button className="pay_button">pay</button>

        </StripeCheckout>     
          </div>
        )
    }
}

const mapState = (state) => {
    return {
        carts: state.usercart,
        cart: state.cart
    };
  };
  
  const mapDispatch = () => {
    return {
        getTotal: (cart) => getCartTotal(cart),
        getTotalNum: (cart) => getCartNum(cart),
    };
  };
  
export default connect(mapState, mapDispatch)(Pay)