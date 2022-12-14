import React from "react";
import CurrencyFormat from "react-currency-format";
import history from '../history'
import { connect } from "react-redux";
import { getCartTotal } from "../store/cart";
import { getCartNum } from "../store/cart";

export class Subtotal extends React.Component {
    render() {
        return (
            <div className="subtotal">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Subtotal ({this.props.getTotalNum(this.props.carts)} items): <strong>{ value }</strong>
                  </p>
                  <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                  </small>
                </>
              )}
              decimalScale={2}
              value={this.props.getTotal(this.props.carts)} 
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
      
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
            
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


export default connect(mapState, mapDispatch)(Subtotal);

