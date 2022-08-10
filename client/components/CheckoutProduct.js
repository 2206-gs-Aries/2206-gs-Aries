import React from "react";
import { connect } from "react-redux";
import { deleteCart } from "../store/usercart";
import { userCart } from  "../store/usercart";


export class CheckoutProduct extends React.Component {

    componentDidMount() {
        this.props.userCart(this.props.id)
    }
  render() {
    return (
     <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={ this.props.imageUrl } />

        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">
                { this.props.name }
            </p>

            <p className="checkoutProduct_price">
                Price: <small>$</small><strong>{ this.props.price }</strong>
            </p>

            <p className="checkoutProduct_price">
            Quantity: <strong>{ this.props.quantity }</strong>
            </p>

            <p className="checkoutProduct_price">
            Subtotal: <small>$</small> <strong>{ this.props.price  *   this.props.quantity  }</strong> 
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
        userCart: (id) => dispatch(userCart(id))
    };
  };

export default connect(null, mapDispatch)(CheckoutProduct);