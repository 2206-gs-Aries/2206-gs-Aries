import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProduct } from "../store/singleProduct";
import SingleProduct from "./SingleProduct";
import Adminform from "./Adminform";
import { deleteAProduct } from "../store/singleProduct";
import AdminUpdate from "./AdminUpdate";
import history from '../history'

export class Admin extends React.Component {
  componentDidMount() {
    this.props.getProduct();
  }
  render() {
    return (
      <div id="adminbox">
        <div id="Adminhome">
          <div className="admin_container">
            <h2>Admin Center</h2>
            <h4>current products:</h4>

            <div>
              {this.props.products.map((product) => (
                <h4>
                  <div>Product name: {product.name}{" "}</div>
                  <button
                    id="button-12"
                    className={product.id}
                    onClick={() => this.props.deleteAProduct(product.id)}
                  >
                    remove
                  </button>
                  <button
                   onClick={e => history.push(`/admin/update/${product.id}`)}
                  >
                    Update
                  </button>
                </h4>
              ))}
            </div>
          </div>
        </div>
        <Adminform />
       
      </div>
    );
  }
}

const mapState = (start) => {
  return {
    products: start.product,
  };
};

const mapDispatch = (dispatch, ) => {
  return {
    getProduct: () => dispatch(fetchProduct()),
    deleteAProduct: (id) => dispatch(deleteAProduct(id)),
  };
};

export default connect(mapState, mapDispatch)(Admin);