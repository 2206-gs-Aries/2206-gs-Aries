import axios from "axios";

const SET_ALLFRUITS = "SET_ALLFRUITS";

export const AllFruits = (AllFruits) => ({
  type: SET_ALLFRUITS,
  AllFruits,
});

export const fetchAllFruits = () => async (dispatch) => {
  const { data } = await axios.get("/api/AllFruits");
  dispatch(AllFruits(data));
};

export default function AllFruitsReducer(state = [], action) {
  switch (action.type) {
    case SET_ALLFRUITS:
      return action.AllFruits;

    default:
      return state;
  }
}
