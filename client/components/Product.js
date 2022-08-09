import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/singleProduct";
import { fetchCart } from "../store/cart";
import { userCart } from  "../store/usercart";

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
    //   <div className="product">
    //   <div className="product_info">
    //       <div className="nameQtyAndDescription">
    //           <h1>{this.props.singleProduct.name}</h1>
              
    //           {/* <h3>Quantity: {this.props.singleProduct.quantity}</h3> */}
              
    //           {this.props.singleProduct.description}
    //       </div>

    //     <p className="product_price">
    //       <small>Price: $</small>
    //       <strong>{this.props.singleProduct.price}</strong>
    //     </p>
    //   </div>

    //   <img src={this.props.singleProduct.imageUrl} className='productImg'/>
    //   <button className="addCart"  onClick={()=>this.props.addToCart({name:this.props.singleProduct.name, imageUrl:this.props.singleProduct.imageUrl, description: this.props.singleProduct.description, price: this.props.singleProduct.price})}>Add to Cart</button>
    // </div>
          <section className="single_product">
            <img src={this.props.singleProduct.imageUrl} className='MainImg'/>
            <div className="single_pro_details">
              <h3>{this.props.singleProduct.name} / <small>{this.props.singleProduct.fruitOrVeggie}</small></h3>
              <h2><strong>Price: </strong>${this.props.singleProduct.price}</h2>
              <button  className="product_button"onClick={()=>{this.props.addToCart({name:this.props.singleProduct.name, imageUrl:this.props.singleProduct.imageUrl, description: this.props.singleProduct.description, price: this.props.singleProduct.price,userId: this.props.userid}) ; this.props.userCart(this.props.userid)}}>Add to Cart</button>
              <h4>Product Details: </h4>
              <span >{this.props.singleProduct.description}</span>
            </div>
          </section>

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
    getProduct: (id) => dispatch(fetchSingleProduct(id)),
    addToCart: (product) => dispatch(fetchCart(product)),
    userCart: (id) => dispatch(userCart(id))
  };
};

export default connect(mapState, mapDispatch)(Product);
