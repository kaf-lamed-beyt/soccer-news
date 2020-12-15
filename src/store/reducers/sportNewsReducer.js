import * as types from "../types"

const initialState = {
  sports: [],
}

const sportNews = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SPORT_NEWS:
      return {
        ...state,
        news: action.payload,
      }
    default:
      return state
  } 
}

export default sportNews
