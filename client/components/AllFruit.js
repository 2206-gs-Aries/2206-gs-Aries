import React from "react";
import { connect } from "react-redux";
import { fetchFruit } from "../store/fruit";

export class AllFruit extends React.Component {
    componentDidMount() {
        this.props.getFruit()
    }
    render() {
        return (
            <div>
                {this.props.fruits.map((fruit) => (
                    <tr key = { fruit.id }>
                        <td>{ fruit.name }</td>
                        <td>{ fruit.price }</td>
                        <td><img src={ fruit.imageUrl} /></td>
                    </tr>
                ))}
            </div>
        )
    }
}


const mapState = (start) => {
    return {
        fruits: start.fruit,
    };
  };
  
  const mapDispatch = (dispatch) => {
    return {
        getFruit: () => dispatch(fetchFruit()),
    };
  };
  
  
  export default connect(mapState, mapDispatch)(AllFruit);