import axios from "axios";
import history from "../history";

const SET_ALLFRUITS = "SET_ALLFRUITS";

export const setFruits = (AllFruits) => ({
  type: SET_ALLFRUITS,
  AllFruits,
});

export const fetchAllFruits = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api/fruits");
    dispatch(setFruits(data));
  };
};

export default function AllFruitsReducer(state = [], action) {
  switch (action.type) {
    case SET_ALLFRUITS:
      return action.AllFruits;

    default:
      return state;
  }
}
