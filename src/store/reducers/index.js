import { combineReducers } from "redux"
import sportNews from "./sportNewsReducer"


const appReducer = combineReducers({
    sportNews
})

export default appReducer    