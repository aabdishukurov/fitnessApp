import { configureStore, combineReducers} from "@reduxjs/toolkit";

const reducers = combineReducers({
})

export const store = configureStore({
    reducer: reducers
})