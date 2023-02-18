import { configureStore, combineReducers } from '@reduxjs/toolkit'
import searchReducer from './searchSlice'

export const rootReducer = combineReducers({
    search: searchReducer,
})