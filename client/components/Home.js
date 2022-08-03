import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import AllProducts from "./AllProducts";

/**
 * COMPONENT
 */
export const Home = (props, isLoggedIn) => {
  const { username } = props;

  return (
    <div>
      <AllProducts />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    isLoggedIn: !!state.auth.id,
  };
};

export default connect(mapState)(Home);
