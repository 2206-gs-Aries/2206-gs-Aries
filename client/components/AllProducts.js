import React from "react";
import { connect } from "react-redux";
import { getAllProducts } from "../store/products";
import Product from "./Product";

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getAllProducts();
  }
  render() {
    return (
      <div>
        <h1>ALL PRODUCTS!</h1>
        {this.props.products.map((product) => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
