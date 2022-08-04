import axios from 'axios'


const SET_PRODUCT = 'SET_PRODUCT'


/**
 * ACTION CREATORS
 */
export const setProduct = (product) => ({
    type: SET_PRODUCT,
    product
})


/**
 * THUNK CREATORS
 */


export const fetchProduct = () => {
    return async (dispatch) => {
        const { data: product } = await axios.get('/api/home')
        dispatch(setProduct(product))
    }
}


/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product
    default:
      return state
  }
}