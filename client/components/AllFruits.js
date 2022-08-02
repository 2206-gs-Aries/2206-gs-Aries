import React from "react";
import { connect } from "react-redux";
import { allFruits } from "./store/reducers/allFruits";
import { Link } from "react-router-dom";

export class AllFruits extends React.Component {
  componentDidMount() {
    this.props.getAllFruits();
  }

  render() {
    const { allfruits } = this.props;

    return (
      <div>
        <div className="fruits">
          {allfruits.length ? (
            allfruits.map((fruit) => {
              return (
                <div key={fruit.id}>
                  <h2 style={divStyle}></h2>
                  <img src={fruit.imageUrl} />
                </div>
              );
            })
          ) : (
            <h3>"*** renders No fruit"</h3>
          )}
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  fruits: state.fruits,
});

const mapDispatch = (dispatch) => ({
  getAllFruits: () => dispatch(fetchAllFruits()),
});

export default connect(mapState, mapDispatch)(AllFruits);
