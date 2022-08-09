import React from "react";
import { connect } from "react-redux";
import { deleteCart } from "../store/usercart";



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
                <input type="number" ></input>
            </td>

            <td>
                ${ this.props.price }
            </td>
        </tr>
    )
  }
}

const mapDispatch = (dispatch) => {
    return {
        deleteProduct: (id) => dispatch(deleteCart(id)),
    };
  };

export default connect(null, mapDispatch)(Basket);