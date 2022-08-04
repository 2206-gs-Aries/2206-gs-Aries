import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../store/product";
import SingleProduct from './SingleProduct'


export class AllProduct extends React.Component {
    componentDidMount() {
        this.props.getProduct()
    }
    render() {
        return (
        <div className="home">
            <div className="home_container">  
                
                <h1>Welcome</h1>
           

                <div>
                    {this.props.products.map((product) => (
                        <SingleProduct { ...product } key={ product.id }/>
                    ))}
                </div>

            </div>
        </div>
        )
    }
}

const mapState = (start) => {
    return {
        products: start.product,
    };
  };
  
const mapDispatch = (dispatch) => {
    return {
        getProduct: () => dispatch(fetchProduct()),
    };
  };
  
  
export default connect(mapState, mapDispatch)(AllProduct);