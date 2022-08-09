import React from "react";
import { connect } from "react-redux";
import { deleteCart } from "../store/usercart";
import { fetchCart } from "../store/cart";
import { userCart } from  "../store/usercart";


export class Basket extends React.Component {
  render() {
    return (
        <tr>
            <td>
                <button className="checkoutProduct_delete"onClick={()=>this.props.deleteProduct(this.props.id)}>Remove from Cart</button>
            </td>

            <td>
                <img className="checkoutProduct_image" src={ this.props.imageUrl } />
            </td>

            <td>
                { this.props.name }
            </td>

            <td>
                { this.props.price }
            </td>

            <td>
                { this.props.quantity }
            </td>

            <td>
                ${ this.props.price  *   this.props.quantity }
            </td>

            
        </tr>
    )
  }
}

const mapState = (state) => {
    return {
        cart: state.usercart,
        userid: state.auth.id,
    };
  };

const mapDispatch = (dispatch) => {
    return {
        deleteProduct: (id) => dispatch(deleteCart(id)),
        addToCart: (product) => dispatch(fetchCart(product)),
        userCart: (id) => dispatch(userCart(id))
    };
  };

export default connect(mapState, mapDispatch)(Basket);