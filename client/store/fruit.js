import axios from 'axios'


const SET_FRUIT = 'SET_FRUIT'

/**
 * ACTION CREATORS
 */
export const setFruit = (fruit) => ({
    type: SET_FRUIT,
    fruit
})

/**
 * THUNK CREATORS
 */


export const fetchFruit = () => {
    return async (dispatch) => {
        const { data: fruit } = await axios.get('/api/home')
        
        dispatch(setFruit(fruit.fruits))
    }
}


/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case SET_FRUIT:
      return action.fruit
    default:
      return state
  }
}