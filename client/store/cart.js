import axios from 'axios'
import { StaticRouter } from 'react-router-dom'

const SET_CART = 'SET_CART'


export const setCart = (product) => ({
    type: SET_CART,
    product
})



export const fetchCart = (product) => {
    return async (dispatch) => {
        const { data: create } = await axios.post(`/api/home`, product)
        dispatch(setCart(create))
    }
}






export const getCartTotal = (cart) => 
  cart?.reduce((amount, item) => item.price + amount, 0)



export default function(state = [], action) {
    switch (action.type) {
      case SET_CART:
        return [...state,action.product]

      default:
        return state
    }
  }