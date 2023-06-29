import { configureStore, combineReducers} from "@reduxjs/toolkit";
import ProReducer from './pro/proSlice'

const reducers = combineReducers({
    ProReducer,
})

export const store = configureStore({
    reducer: reducers
})