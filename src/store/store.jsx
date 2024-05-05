import { legacy_createStore as createStore } from "redux";
import { reducerCounter } from "./reducerCounter";


export const store = createStore(reducerCounter)