import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuthV: false,
    isProV: false
}

export const categoriesSlice = createSlice({
    name: 'categoriesSlice',
    initialState: initialState
})