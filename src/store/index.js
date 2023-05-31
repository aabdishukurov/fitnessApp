import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { categoriesSlice } from "./slices/ildar/categories-slice";

const reducers = combineReducers({
    categories: categoriesSlice.reducer
})

export const store = configureStore({
    reducer: reducers
})