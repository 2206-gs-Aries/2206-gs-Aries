import axios from 'axios'
import { StaticRouter } from 'react-router-dom'

const SET_CART = 'SET_CART'
const SET_DELETE = 'SET_DELETE'

export const setCart = (product) => ({
    type: SET_CART,
    product
})

export const setDelete = (product) => ({
  type: SET_DELETE,
  product
})

export const fetchCart = (product) => {
    return async (dispatch) => {
        const { data: create } = await axios.post(`/api/home`, product)
        dispatch(setCart(create))
    }
}

export const deleteCart = (id) => {
  return async (dispatch) => {
      const { data: product } = await axios.delete(`/api/home/${ id }`)
      dispatch(setDelete(product))
  }
}

export const getCartTotal = (cart) => 
  cart?.reduce((amount, item) => item.price + amount, 0)


export default function(state = [], action) {
    switch (action.type) {
      case SET_CART:
        return [...state,action.product]
        case SET_DELETE:
          return state.filter((product) => product.id !== action.product.id);
      default:
        return state
    }
  }