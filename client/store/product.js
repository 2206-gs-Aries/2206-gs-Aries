import axios from 'axios'


const SET_PRODUCT = 'SET_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

/**
 * ACTION CREATORS
 */
export const setProduct = (product) => ({
    type: SET_PRODUCT,
    product
})

export const update_Product = (product) => ({
  type: UPDATE_PRODUCT,
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

export const updateProduct = (product) => {
  return async(dispatch) => {
    const { data: update } = await axios.put(`/api/admin/update/${product.id}`, product)
    dispatch(update_Product(update))
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