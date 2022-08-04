import axios from 'axios'

const SET_CART = 'SET_CART'

export const setCart = (product) => ({
    type: SET_CART,
    product
})

// export const fetchCart = (id) => {
//     return async (dispatch) => {
//         const { data: product } = await axios.get(`/api/home/${ id }`)
//         dispatch(setCart(product))
//     }
// }

export default function(state = [], action) {
    switch (action.type) {
      case SET_CART:
        return [...state,action.product]
      default:
        return state
    }
  }