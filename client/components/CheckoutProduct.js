import React from "react";
import { connect } from "react-redux";
import { deleteCart } from "../store/usercart";



export class CheckoutProduct extends React.Component {
  render() {
    return (
     <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={ this.props.imageUrl } />

        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">
                { this.props.name }
            </p>

            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{ this.props.price }</strong>
            </p>

            <div>
                <button className="checkoutProduct_delete"onClick={()=>this.props.deleteProduct(this.props.id)}>Remove from Cart</button>
            </div>
        </div>

      
     </div>
    )
  }
}

const mapDispatch = (dispatch) => {
    return {
        deleteProduct: (id) => dispatch(deleteCart(id)),
    };
  };

export default connect(null, mapDispatch)(CheckoutProduct);