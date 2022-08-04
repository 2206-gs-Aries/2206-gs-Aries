import axios from 'axios'

const SET_SINGLEPRODUCT = 'SET_SINGLEPRODUCT'

export const setSingleProduct = (product) => ({
    type: SET_SINGLEPRODUCT,
    product
})

export const fetchSingleProduct = (id) => {
    return async (dispatch) => {
        const { data: product } = await axios.get(`/api/home/${ id }`)
        dispatch(setSingleProduct(product))
    }
}

export default function(state = {}, action) {
    switch (action.type) {
      case SET_SINGLEPRODUCT:
        return action.product
      default:
        return state
    }
  }