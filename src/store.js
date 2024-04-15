import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { fitnessReducer } from "./reducer";

export const store = createStore(fitnessReducer,applyMiddleware(thunk))