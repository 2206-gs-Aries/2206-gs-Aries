import axios from 'axios'

const SET_VEGGIE = 'SET_VEGGIE'

/**
 * ACTION CREATORS
 */
export const setVeggie = (veggie) => ({
    type: SET_VEGGIE,
    veggie
})

/**
 * THUNK CREATORS
 */


export const fetchVeggie = () => {
    return async (dispatch) => {
        const { data: veggie } = await axios.get('/api/home')
        dispatch(setVeggie(veggie.veggies))
    }
}


/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case SET_VEGGIE:
      return action.veggie
    default:
      return state
  }
}