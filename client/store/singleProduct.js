import axios from 'axios'

const SET_SINGLEPRODUCT = 'SET_SINGLEPRODUCT'
const CREATE_PRODUCT = "CREATE_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const SET_PRODUCT = 'SET_PRODUCT'

export const setSingleProduct = (product) => ({
    type: SET_SINGLEPRODUCT,
    product
})

export const newProduct = (product) => ({
  type: CREATE_PRODUCT,
  product,
});

export const setProduct = (product) => ({
  type: SET_PRODUCT,
  product
})

const _deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    product,
  };
};

export const fetchSingleProduct = (id) => {
    return async (dispatch) => {
        const { data: product } = await axios.get(`/api/home/${ id }`)
        dispatch(setSingleProduct(product))
    }
}

export const fetchProduct = () => {
  return async (dispatch) => {
      const { data: product } = await axios.get('/api/admin')
      dispatch(setProduct(product))
  }
}

export const createAProduct = (product) => {
  return async (dispatch) => {
    const { data: create } = await axios.post(`/api/admin`, product);
    dispatch(newProduct(create));
  };
};

export const deleteAProduct = (id) => {
  return async (dispatch) => {
    const { data: product } = await axios.delete(`/api/admin/${id}`);
    dispatch(_deleteProduct(product));
  };
};

export default function(state = [], action) {
    switch (action.type) {
      case SET_SINGLEPRODUCT:
        return action.product
        case SET_PRODUCT:
          return action.product
        case CREATE_PRODUCT:
          return [...state, action.product];
          case DELETE_PRODUCT:
            return state.filter((product) => product.id !== action.product.id);
      default:
        return state
    }
  }