import React from "react";
import { connect } from "react-redux";
import { fetchFruit } from "../store/fruit";
import { fetchVeggie } from "../store/veggie";

export class AllFruit extends React.Component {
    componentDidMount() {
        this.props.getFruit()
        this.props.getVeggie()
    }
    render() {
        return (
            <div>
                <div>
                    {this.props.fruits.map((fruit) => (
                        <tr key = { fruit.id }>
                            <td>{ fruit.name }</td>
                            <td>{ fruit.price }</td>
                            <td><img src={ fruit.imageUrl } /></td>
                        </tr>
                    ))}
                </div>
                <div>
                    {this.props.veggies.map((veggie) => (
                        <tr key = { veggie.id }>
                            <td>{ veggie.name }</td>
                            <td>{ veggie.price }</td>
                            <td><img src={ veggie.imageUrl } /></td>
                        </tr>
                    ))}
                </div>
            </div>
        )
    }
}


const mapState = (start) => {
    return {
        fruits: start.fruit,
        veggies: start.veggie,
    };
  };
  
  const mapDispatch = (dispatch) => {
    return {
        getFruit: () => dispatch(fetchFruit()),
        getVeggie: () => dispatch(fetchVeggie())
    };
  };
  
  
  export default connect(mapState, mapDispatch)(AllFruit);