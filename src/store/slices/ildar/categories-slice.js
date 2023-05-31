import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuthV: false,
    isProV: false
}

export const categoriesSlice = createSlice({
    name: 'categoriesSlice',
    initialState: initialState,
    reducers: {
        isAuthVTrue: (state) => {
            state.isProV = false
            state.isAuthV = true
        },
        isProVTrue: (state) => {
            state.isAuthV = false
            state.isProV = true
        }
    }
})

export const {isAuthVTrue, isProVTrue} = categoriesSlice.actions