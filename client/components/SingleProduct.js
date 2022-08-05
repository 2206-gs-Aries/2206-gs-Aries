import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCart } from "../store/cart";


export class SingleProduct extends React.Component {
  render() {
    return (
      <div className="product">
        <div className="product_info">
          <Link to={`/home/${this.props.id}`}>{this.props.name}</Link>

          <p className="product_price">
            <small>$</small>
            <strong>{this.props.price}</strong>
          </p>
        </div>
        <img src={this.props.imageUrl} />

        <button className="addCart" onClick={()=>this.props.addToCart({name:this.props.name, imageUrl:this.props.imageUrl, description: this.props.description, price: this.props.price})}>Add to Cart</button>
      </div>
    );
  }
}

const mapState = (start) => {
  return {
      cart: start.cart
  };
};

const mapDispatch = (dispatch) => {
  return {
      addToCart: (product) => dispatch(fetchCart(product)),
  };
};


export default connect(mapState, mapDispatch)(SingleProduct);
