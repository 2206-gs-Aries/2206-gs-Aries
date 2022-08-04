import React from "react";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/singleProduct";

export class Product extends React.Component {

    componentDidMount() {
        try {
            const id = this.props.match.params.id
        this.props.getProduct(id)
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
            <div>{this.props.singleProduct.name}</div>
        )
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

export default connect(mapState, mapDispatch)(Product)