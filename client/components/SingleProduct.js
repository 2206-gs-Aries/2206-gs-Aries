import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCart } from "../store/cart";
import { userCart } from  "../store/usercart";


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

          <span className="fOrv">{ this.props.fruitOrVeggie }</span>
        </div>
        <img src={this.props.imageUrl} />

        <button className="addCart" onClick={()=>{this.props.addToCart({name:this.props.name, imageUrl:this.props.imageUrl, description: this.props.description, price: this.props.price, userId: this.props.userid,}); this.props.userCart(this.props.userid)}}>Add to Cart</button>
    
      </div>
    );
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
      addToCart: (product) => dispatch(fetchCart(product)),
      userCart: (id) => dispatch(userCart(id))
  };
};


export default connect(mapState, mapDispatch)(SingleProduct);
