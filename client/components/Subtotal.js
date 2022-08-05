import React from "react";
import CurrencyFormat from "react-currency-format";
import history from "../history";
import { connect } from "react-redux";
export class Subtotal extends React.Component {
  render() {
    return (
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({this.props.carts.length}): <strong>0</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={1}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />

        <button onClick={(e) => history.push("/payment")}>
          Proceed to Checkout
        </button>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    carts: state.cart,
  };
};

export default connect(mapState)(Subtotal);
