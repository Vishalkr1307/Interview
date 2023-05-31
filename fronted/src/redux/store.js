import {applyMiddleware, combineReducers, legacy_createStore,compose} from "redux"
import { authReducer } from "./auth/authReducer"
import thunk from 'redux-thunk'
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const rootReucer=combineReducers({
    auth:authReducer
})


export const store=legacy_createStore(rootReucer,composeEnhancers(applyMiddleware(thunk)))