import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import AllFruits from "./AllFruits";
// import AllStudents from “./AllStudents”;
// import SingleCampus from “./SingleCampus”;
// import SingleStudent from “./SingleStudent”;
const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
          <Link to="/AllFruits"> All Fruits </Link>
        </nav>

        <Route exact path="/AllFruits" component={AllFruits} />
      </div>
    </Router>
  );
};
export default Routes;
