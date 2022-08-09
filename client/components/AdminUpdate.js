import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateProduct } from "../store/product";
import { fetchSingleProduct } from "../store/singleProduct"

class AdminUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    //   imageUrl: "",
    //   description: "",
    //   quantity: "",
    //   price: "",
    //   fruitOrVeggie: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    try {
        const productId = this.props.match.params.id
    this.props.getProduct(productId)
    } catch (err) {
        console.error(err)
    }
}
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateProduct({id: this.props.singleProduct.id, ...this.state });
  }

  render() {
    return (
        <div className="profile">  
        <p><small>current username: </small><strong>{this.props.singleProduct.name}</strong></p>
    
   <form onSubmit={ this.handleSubmit }>
     <p><strong>Update: </strong></p>  
     
     <label htmlFor= "name">Update Product name: </label>
     <input name="name" onChange= { this.handleChange } value= { this.state.name } />


     <button type= "submit" className="admin_button">Submit</button>
     <Link to='/admin'>back</Link>
    
   </form> 
   </div>
    );
  }
}

const mapState = (state) => {
    return {
      singleProduct: state.singleProduct,
      userid: state.auth.id,
    };
  };
const mapDispatch = (dispatch) => {
    return {
        updateProduct: (product) => dispatch(updateProduct(product)),
        getProduct: (id) => dispatch(fetchSingleProduct(id)),
    };
  };
export default connect(mapState, mapDispatch)(AdminUpdate);

