import React from "react";
import { connect } from "react-redux";
import { deleteCart } from "../store/usercart";
import { fetchCart } from "../store/cart";
import { userCart } from  "../store/usercart";
import { updateOrder } from "../store/usercart";


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

            <td>
            <button className="addCart" onClick={()=>{this.props.addToCart({name:this.props.name, imageUrl:this.props.imageUrl, description: this.props.description, price: this.props.price, userId: this.props.userid,}); this.props.userCart(this.props.userid)}}>+</button>
            </td>

            <td>
                <button className="addCart">-</button>
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
        userCart: (id) => dispatch(userCart(id)),
        updateOrderr: (order) => dispatch(updateOrder(order)),
    };
  };

export default connect(mapState, mapDispatch)(Basket);