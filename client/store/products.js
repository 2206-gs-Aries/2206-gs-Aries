import axios from "axios";

const GOT_ALL_PRODUCTS = "GOT_ALL_PRODUCTS";

/**
 * ACTION CREATORS
 */
export const gotAllProducts = (products) => ({
  type: GOT_ALL_PRODUCTS,
  products,
});

/**
 * THUNK CREATORS
 */

export const getAllProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/products");
    console.log("%%%%%%%%%%%", data);
    dispatch(gotAllProducts(data.products));
  } catch (error) {
    console.log("GetAllProducts Error", error);
  }
};

/**
 * REDUCER
 */
const productsReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_ALL_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export default productsReducer;
