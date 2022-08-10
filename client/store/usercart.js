import axios from 'axios'

const USER_CART = 'USER_CART'
const SET_DELETE = 'SET_DELETE'
const UPDATE_ORDER = 'UPDATE_ORDER'

export const user_Cart = (product) => ({
    type: USER_CART,
    product
  })

  export const setDelete = (product) => ({
    type: SET_DELETE,
    product
  })

  export const update_order = (product) => ({
    type: UPDATE_ORDER,
    product
  })
  
//   export const userCart = (id) => {
//     return async (dispatch) => {
//         const { data: product } = await axios.get(`/api/checkout/${ id }`)
//         dispatch(user_Cart(product))
//     }
//   }

  export const userCart = () => {
    return async (dispatch) => {

        const token = window.localStorage.getItem('token')
        if(token){
        const { data: product } = await axios.get(`/api/checkout/`, {
            headers: {
                authorization: token
            }
        })
        dispatch(user_Cart(product))
      } else{
        // function addProduct(){
          let products = JSON.parse(localStorage.getItem('products'))||[];
        //   console.log(products)
        //   products.push({'productId' : product.Id });
        //   localStorage.setItem('products', JSON.stringify(products));
        // }
        dispatch(user_Cart(products))
      }
    }
  }


  export const updateOrder = (product) => {
    return async(dispatch) => {
        const { data: update} = await axios.put('/api/checkout/',product)
        dispatch(update_order(update))
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
            case UPDATE_ORDER:
                return action.product
      default:
        return state
    }
  }