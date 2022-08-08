import axios from 'axios'

const USER_CART = 'USER_CART'
const SET_DELETE = 'SET_DELETE'

export const user_Cart = (product) => ({
    type: USER_CART,
    product
  })

  export const setDelete = (product) => ({
    type: SET_DELETE,
    product
  })
  
  export const userCart = (id) => {
    return async (dispatch) => {
        const { data: product } = await axios.get(`/api/checkout/${ id }`)
        dispatch(user_Cart(product))
    }
  }

  export const deleteCart = (id) => {
    return async (dispatch) => {
        const { data: product } = await axios.delete(`/api/checkout/${ id }`)
       
        dispatch(setDelete(product))
    }
  }

  export default function(state = [], action) {
    switch (action.type) {
      case USER_CART:
        return action.product
        case SET_DELETE:
            return state.filter((product) => product.id !== action.product.id);
      default:
        return state
    }
  }