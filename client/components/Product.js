import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/singleProduct";

export class Product extends React.Component {
  componentDidMount() {
    try {
      const id = this.props.match.params.id;
      this.props.getProduct(id);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="product">
        <div className="product_info">
          <h1>{this.props.singleProduct.name}</h1>
          <h3>Quantity: {this.props.singleProduct.quantity}</h3>
          {this.props.singleProduct.description}
          <p className="product_price">
            <small>Price: $</small>
            <strong>{this.props.singleProduct.price}</strong>
          </p>
        </div>

        <img src={this.props.singleProduct.imageUrl} />
        <button className="addCart">Add to Cart</button>
      </div>
    );
  }
}

const mapState = (start) => {
  return {
    singleProduct: start.singleProduct,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProduct: (id) => dispatch(fetchSingleProduct(id)),
  };
};

export default connect(mapState, mapDispatch)(Product);
