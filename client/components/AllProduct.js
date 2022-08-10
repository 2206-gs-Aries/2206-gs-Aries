import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../store/product";
import SingleProduct from './SingleProduct'
import { userCart } from  "../store/usercart";



export class AllProduct extends React.Component {
    componentDidMount() {
        this.props.getProduct()
        this.props.userCart(this.props.id)
    }
    render() {
        return (
        <div className="home">
            <div className="home_container">  
                

                <div className="allProduct">
                    {this.props.products.map((product) => (
                        <SingleProduct { ...product } key={ product.id }/>
                  
                    ))}
                </div>
            </div>
        </div>
        )
    }
}

const mapState = (state) => {
    return {
        products: state.product,
        id: state.auth.id,
    };
  };
  
const mapDispatch = (dispatch) => {
    return {
        getProduct: () => dispatch(fetchProduct()),
        userCart: (id) => dispatch(userCart(id))
    };
  };
  
  
export default connect(mapState, mapDispatch)(AllProduct);