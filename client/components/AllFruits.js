import React from "react";
import { connect } from "react-redux";

import { fetchAllFruits } from "../store/allFruits";

export class AllFruits extends React.Component {
  componentDidMount() {
    this.props.getAllFruits();
  }

  render() {
    return (
      <div>
        {this.props.allFruits.map((fruit) => (
          <tr key={fruit.id}>
            <td>{fruit.name}</td>
            <td>{fruit.price}</td>
            <td>
              <img src={fruit.imageUrl} />
            </td>
          </tr>
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    fruits: state.fruit,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getAllFruits: () => dispatch(fetchAllFruits()),
  };
};

export default connect(mapState, mapDispatch)(AllFruits);
