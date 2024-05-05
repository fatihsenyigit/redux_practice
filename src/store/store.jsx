import { legacy_createStore as createStore, combineReducers } from "redux";
import { reducerCounter } from "./reducerCounter";
import { reducerToDo } from "./reducerToDo";
import { composeWithDevTools } from "@redux-devtools/extension";


const rootReducer = combineReducers({
    reducerCounter,
    reducerToDo,
})

export const store = createStore(rootReducer, composeWithDevTools())