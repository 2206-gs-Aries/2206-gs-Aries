import React from "react";
import {Link} from 'react-router-dom'


export class SignleProduct extends React.Component {
    render() {
        return (
            <div className="product">
                <div className="product_info">
                <Link to={`/home/${this.props.id}`}>
                        { this.props.name }
                        </Link>

                    <p className="product_price">
                        <small>$</small>
                        <strong>{ this.props.price }</strong>
                    </p>

                </div>
                <img src={this.props.imageUrl} />

                <button className="addCart">Add to Cart</button>
          
            </div>
        )
    }
}



export default SignleProduct