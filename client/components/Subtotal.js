import React from "react";
import CurrencyFormat from "react-currency-format";
import history from '../history'
import { connect } from "react-redux";
import { getCartTotal } from "../store/cart";

export class Subtotal extends React.Component {
    render() {
        return (
            <div className="subtotal">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Subtotal ({this.props.carts.length} items): <strong>{ value }</strong>
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
      carts: state.usercart
  };
};

const mapDispatch = () => {
  return {
      getTotal: (cart) => getCartTotal(cart)
  };
};


export default connect(mapState, mapDispatch)(Subtotal);

